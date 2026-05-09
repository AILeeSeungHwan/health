import { createClient } from '@supabase/supabase-js'
import fs   from 'fs'
import path from 'path'

let _cache = null
function getSitemapCache() {
  if (_cache) return _cache
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), 'public', 'sitemap-cache.json'), 'utf8')
    _cache = JSON.parse(raw)
  } catch { _cache = {} }
  return _cache
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SITES = [
  { id: 'health',    domain: 'health.ambitstock.com' },
  { id: 'insurance', domain: 'insurance.ambitstock.com' },
  { id: 'movie',     domain: 'www.ambitstock.com' },
  { id: 'finance',   domain: 'financemoa.ambitstock.com' },
  { id: 'travel',    domain: 'travel.ambitstock.com' },
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

async function fetchSiteUrls(siteId, domain) {
  // 1차: 라이브 sitemap.xml fetch
  let urls = await parseSitemap(`https://${domain}/sitemap.xml`)
  if (urls.length > 0) return { urls, fromCache: false }

  // 2차: 분할 sitemap 패턴 폴백
  const fallbacks = [
    `https://${domain}/sitemap-0.xml`,
    `https://${domain}/sitemap-1.xml`,
    `https://${domain}/sitemap_index.xml`,
  ]
  const results = await Promise.allSettled(fallbacks.map(u => parseSitemap(u)))
  const seen = new Set()
  for (const r of results) {
    if (r.status === 'fulfilled') {
      for (const u of r.value) { if (!seen.has(u)) { seen.add(u); urls.push(u) } }
    }
  }
  if (urls.length > 0) return { urls, fromCache: false }

  // 3차: 로컬 sitemap 캐시 파일 폴백
  const cache = getSitemapCache()
  if (cache[siteId]?.length) return { urls: cache[siteId], fromCache: true }

  return { urls: [], fromCache: false }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60')

  const [sitemapResults, regResult] = await Promise.all([
    Promise.all(SITES.map(async s => {
      const { urls, fromCache } = await fetchSiteUrls(s.id, s.domain)
      return { site: s.id, domain: s.domain, urls, fromCache }
    })),
    supabase.from('url_registry').select('slug, site, registered, registered_at, naver, daum, google, bing'),
  ])

  const regMap = {}
  for (const r of (regResult.data || [])) {
    regMap[`${r.site}::${r.slug}`] = r
  }

  const allUrls = []
  const bySite  = {}

  for (const { site, domain, urls, fromCache } of sitemapResults) {
    bySite[site] = { domain, total: urls.length, fromCache: fromCache || false }
    for (const url of urls) {
      const slug = url.replace(`https://${domain}`, '').replace(/\/+$/, '') || '/'
      const reg  = regMap[`${site}::${slug}`]
      allUrls.push({
        url, slug, site, domain,
        registered:    reg?.registered    ?? false,
        registered_at: reg?.registered_at ?? null,
        naver:  reg?.naver  ?? false,
        daum:   reg?.daum   ?? false,
        google: reg?.google ?? false,
        bing:   reg?.bing   ?? false,
      })
    }
  }

  return res.json({ urls: allUrls, total: allUrls.length, by_site: bySite })
}
