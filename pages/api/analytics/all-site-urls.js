import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SITES = [
  { id: 'health',    domain: 'health.ambitstock.com' },
  { id: 'insurance', domain: 'insurancemoa.ambitstock.com' },
  { id: 'movie',     domain: 'movie.ambitstock.com' },
  { id: 'finance',   domain: 'financemoa.ambitstock.com' },
  { id: 'travel',    domain: 'tripspot.ambitstock.com' },
  { id: 'dinner',    domain: 'dinner.ambitstock.com' },
]

async function parseSitemap(url, depth = 0) {
  if (depth > 2) return []
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(7000),
      headers: { 'User-Agent': 'IndexNow-Submitter/1.0' },
    })
    if (!res.ok) return []
    const xml = await res.text()
    if (xml.includes('<sitemapindex')) {
      const subUrls = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())
      const nested  = await Promise.all(subUrls.map(u => parseSitemap(u, depth + 1)))
      return nested.flat()
    }
    return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())
  } catch { return [] }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60')

  const [sitemapResults, regResult] = await Promise.all([
    Promise.all(SITES.map(async s => {
      const urls = await parseSitemap(`https://${s.domain}/sitemap.xml`)
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
