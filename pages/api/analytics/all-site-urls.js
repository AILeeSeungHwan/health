import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SITES = [
  { id: 'health',    domain: 'health.ambitstock.com' },
  { id: 'insurance', domain: 'insurance.ambitstock.com' },
  { id: 'movie',     domain: 'ambitstock.com' },
  { id: 'finance',   domain: 'financemoa.ambitstock.com' },
  { id: 'travel',    domain: 'tripspot.ambitstock.com' },
  { id: 'dinner',    domain: 'dinner.ambitstock.com' },
]

async function fetchXml(url) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(15000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SitemapBot/1.0)' },
    })
    if (!res.ok) return null
    return await res.text()
  } catch { return null }
}

async function parseSitemap(url, depth = 0) {
  if (depth > 3) return []
  const xml = await fetchXml(url)
  if (!xml) return []

  if (xml.includes('<sitemapindex')) {
    const subUrls = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())
    const results = await Promise.allSettled(subUrls.map(u => parseSitemap(u, depth + 1)))
    return results.flatMap(r => r.status === 'fulfilled' ? r.value : [])
  }
  return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())
}

async function fetchSiteUrls(domain) {
  // 1차: 표준 sitemap.xml
  let urls = await parseSitemap(`https://${domain}/sitemap.xml`)
  if (urls.length > 0) return urls

  // 2차 폴백: 분할 sitemap 번호 패턴 (sitemap-0.xml ~ sitemap-4.xml)
  const fallbacks = [
    `https://${domain}/sitemap-0.xml`,
    `https://${domain}/sitemap-1.xml`,
    `https://${domain}/sitemap_index.xml`,
    `https://${domain}/post-sitemap.xml`,
    `https://${domain}/page-sitemap.xml`,
  ]
  const results = await Promise.allSettled(fallbacks.map(u => parseSitemap(u)))
  const seen = new Set()
  for (const r of results) {
    if (r.status === 'fulfilled') {
      for (const u of r.value) { if (!seen.has(u)) { seen.add(u); urls.push(u) } }
    }
  }
  return urls
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60')

  const [sitemapResults, regResult] = await Promise.all([
    Promise.all(SITES.map(async s => {
      const urls = await fetchSiteUrls(s.domain)
      return { site: s.id, domain: s.domain, urls }
    })),
    supabase.from('url_registry').select('slug, site, registered, registered_at'),
  ])

  const regMap = {}
  for (const r of (regResult.data || [])) {
    regMap[`${r.site}::${r.slug}`] = r
  }

  const allUrls = []
  const bySite  = {}

  for (const { site, domain, urls } of sitemapResults) {
    bySite[site] = { domain, total: urls.length }
    for (const url of urls) {
      const slug = url.replace(`https://${domain}`, '').replace(/\/+$/, '') || '/'
      const reg  = regMap[`${site}::${slug}`]
      allUrls.push({
        url, slug, site, domain,
        registered:    reg?.registered    ?? false,
        registered_at: reg?.registered_at ?? null,
      })
    }
  }

  return res.json({ urls: allUrls, total: allUrls.length, by_site: bySite })
}
