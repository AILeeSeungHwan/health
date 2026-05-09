import { createClient } from '@supabase/supabase-js'
import fs   from 'fs'
import path from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const SITE_HOST = {
  health:    'health.ambitstock.com',
  insurance: 'insurance.ambitstock.com',
  movie:     'www.ambitstock.com',
  finance:   'financemoa.ambitstock.com',
  travel:    'tripspot.ambitstock.com',
  dinner:    'dinner.ambitstock.com',
}

// bare slug (last path segment) → full URL, built from health's local sitemap
let _healthSlugMap = null
function getHealthSlugMap() {
  if (_healthSlugMap) return _healthSlugMap
  _healthSlugMap = new Map()
  try {
    const xml = fs.readFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), 'utf8')
    const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())
    const prefix = 'https://health.ambitstock.com/'
    for (const loc of locs) {
      if (!loc.startsWith(prefix)) continue
      const slug = loc.slice(prefix.length).replace(/\/+$/, '')
      const parts = slug.split('/')
      // only entity sub-pages (entity/slug), not top-level or 3-deep
      if (parts.length === 2 && parts[1]) {
        _healthSlugMap.set(parts[1], loc.endsWith('/') ? loc : loc + '/')
      }
    }
  } catch { /* fallback: map stays empty */ }
  return _healthSlugMap
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const { site = 'all' } = req.query

  // pageview_events 전체 집계 (slug + site 기준)
  let pvQuery = supabase
    .from('pageview_events')
    .select('slug, site, title')
    .order('slug')
    .limit(50000)

  if (site !== 'all') pvQuery = pvQuery.eq('site', site)

  const [pvResult, regResult] = await Promise.all([
    pvQuery,
    supabase.from('url_registry').select('slug, site, registered, registered_at'),
  ])

  if (pvResult.error) return res.status(500).json({ error: pvResult.error.message })

  // slug+site 기준 집계
  const countMap = {}
  const titleMap = {}
  for (const r of (pvResult.data || [])) {
    const key = `${r.site}::${r.slug}`
    countMap[key] = (countMap[key] || 0) + 1
    if (!titleMap[key] && r.title) titleMap[key] = r.title
  }

  // url_registry 맵
  const regMap = {}
  for (const r of (regResult.data || [])) {
    regMap[`${r.site}::${r.slug}`] = r
  }

  const healthSlugMap = getHealthSlugMap()

  // 합치기
  const rows = Object.entries(countMap).map(([key, views]) => {
    const [sitePart, ...slugParts] = key.split('::')
    const slug = slugParts.join('::')
    const host = SITE_HOST[sitePart] || 'health.ambitstock.com'
    const reg  = regMap[key]

    let url
    if (sitePart === 'health') {
      const bare = slug.replace(/^\/+/, '').replace(/\/+$/, '')
      url = healthSlugMap.get(bare) || `https://${host}/${bare}/`
    } else {
      url = `https://${host}/${slug.replace(/^\/+/, '').replace(/\/+$/, '')}${slug === '/' ? '' : '/'}`
    }

    return {
      slug,
      site: sitePart,
      title: titleMap[key] || null,
      views,
      url,
      registered:    reg?.registered    ?? false,
      registered_at: reg?.registered_at ?? null,
    }
  }).sort((a, b) => b.views - a.views)

  return res.json({ rows, total: rows.length })
}
