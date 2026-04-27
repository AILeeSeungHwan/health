/**
 * pages/api/analytics/timeline.js
 * 시간대별 유입 분석 (KST 기준 created_at)
 *
 * GET /api/analytics/timeline?from=2026-04-26&to=2026-04-26&site=all&hideBot=1
 */

import { supabase } from '../../../lib/supabase-rest'
import posts from '../../../data/posts'

const SEARCH_SOURCES = new Set(['google', 'naver', 'bing', 'daum', 'zum', 'yahoo'])
const POST_MAP = Object.fromEntries(posts.map(p => [p.slug, p.title]))

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const todayStr = new Date().toISOString().slice(0, 10)
  let { from, to, site: siteFilter, hideBot } = req.query
  if (!from) from = todayStr
  if (!to)   to   = todayStr
  siteFilter = siteFilter || 'all'
  const excludeBot = hideBot === '1'

  // KST 00:00 ~ 23:59 → UTC 범위로 변환
  const utcFrom = new Date(`${from}T00:00:00+09:00`).toISOString()
  const utcTo   = new Date(`${to}T23:59:59+09:00`).toISOString()

  const filters = { created_at: { gte: utcFrom, lte: utcTo } }
  if (siteFilter !== 'all') filters.site   = { eq: siteFilter }
  if (excludeBot)           filters.device = { neq: 'bot' }

  const { data: rows, error } = await supabase.selectAll('pageview_events', {
    select: 'created_at,slug,source,keyword,device,site,title',
    filters,
    order: ['created_at.desc'],
  })

  if (error) return res.status(500).json({ error })

  if (!rows || rows.length === 0) {
    return res.status(200).json({
      by_hour: Array.from({ length: 24 }, (_, h) => ({ hour: h, total: 0, search: 0, by_source: {} })),
      recent: [],
      total: 0,
    })
  }

  const hourMap = Array.from({ length: 24 }, (_, h) => ({
    hour: h, total: 0, search: 0, by_source: {}, mobile: 0, desktop: 0,
  }))

  const recent = []

  for (const row of rows) {
    const { created_at, slug, source, keyword, device, site, title } = row
    const isSearch = SEARCH_SOURCES.has(source)

    const utcMs   = new Date(created_at).getTime()
    const kstHour = new Date(utcMs + 9 * 3600000).getUTCHours()

    hourMap[kstHour].total += 1
    if (isSearch) hourMap[kstHour].search += 1
    hourMap[kstHour].by_source[source] = (hourMap[kstHour].by_source[source] || 0) + 1
    if (device === 'mobile' || device === 'tablet') hourMap[kstHour].mobile += 1
    else if (device === 'desktop') hourMap[kstHour].desktop += 1

    if (recent.length < 200) {
      const kstDate = new Date(utcMs + 9 * 3600000)
      const kstDateStr = kstDate.toISOString().slice(0, 10)
      const hh = String(kstDate.getUTCHours()).padStart(2, '0')
      const mm = String(kstDate.getUTCMinutes()).padStart(2, '0')
      recent.push({
        time: `${kstDateStr} ${hh}:${mm}`,
        slug,
        title: POST_MAP[slug] || title || slug,
        source,
        keyword: keyword || null,
        device: device || 'unknown',
        site: site || 'unknown',
      })
    }
  }

  return res.status(200).json({
    by_hour: hourMap,
    recent,
    total: rows.length,
  })
}
