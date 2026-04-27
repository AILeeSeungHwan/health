/**
 * pages/api/analytics/stats.js
 * 통합 검색유입 통계 집계 (pageview_events 기반)
 *
 * GET /api/analytics/stats?from=2026-04-01&to=2026-04-26&source=all&site=all&hideBot=1
 */

import { supabase } from '../../../lib/supabase-rest'
import posts from '../../../data/posts'

const SEARCH_SOURCES = new Set(['google', 'naver', 'bing', 'daum', 'zum', 'yahoo'])
const POST_MAP = Object.fromEntries(posts.map(p => [p.slug, p.title]))

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const today = new Date().toISOString().slice(0, 10)
  let { from, to, source: srcFilter, site: siteFilter, hideBot } = req.query
  if (!from) from = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10)
  if (!to)   to   = today
  srcFilter  = srcFilter  || 'all'
  siteFilter = siteFilter || 'all'
  const excludeBot = hideBot === '1'

  const filters = { date: { gte: from, lte: to } }
  if (srcFilter  !== 'all') filters.source = { eq: srcFilter }
  if (siteFilter !== 'all') filters.site   = { eq: siteFilter }
  if (excludeBot)           filters.device = { neq: 'bot' }

  const { data: rows, error } = await supabase.selectAll('pageview_events', {
    select: 'date,slug,source,keyword,session_hash,device,site,title',
    filters,
    order: ['date.asc'],
  })

  if (error) {
    return res.status(500).json({
      error,
      configured: supabase.isConfigured(),
      hasUrl: !!process.env.SUPABASE_URL,
      hasKey: !!process.env.SUPABASE_PUBLISHABLE_KEY,
    })
  }

  if (!rows || rows.length === 0) {
    return res.status(200).json({
      period: { from, to, days: daysBetween(from, to) },
      summary: { total: 0, search: 0, direct: 0, internal: 0, other: 0, unique_keywords: 0, unique_pages: 0, unique_sessions: 0 },
      by_source: [], by_keyword: [], by_page: [], by_date: [], by_device: [], by_site: [],
    })
  }

  const bySourceMap  = {}
  const byKeywordMap = {}
  const byPageMap    = {}
  const byDateMap    = {}
  const byDeviceMap  = {}
  const bySiteMap    = {}
  const allKeywords  = new Set()
  const allPages     = new Set()
  const allSessions  = new Set()

  for (const row of rows) {
    const { date, slug, source, keyword, session_hash, device, site, title } = row
    const isSearch = SEARCH_SOURCES.has(source)
    const siteKey  = site || 'unknown'

    if (!bySiteMap[siteKey]) bySiteMap[siteKey] = { total: 0, search: 0, direct: 0 }
    bySiteMap[siteKey].total += 1
    if (isSearch) bySiteMap[siteKey].search += 1
    if (source === 'direct') bySiteMap[siteKey].direct += 1

    bySourceMap[source] = (bySourceMap[source] || 0) + 1

    const dev = device || 'unknown'
    byDeviceMap[dev] = (byDeviceMap[dev] || 0) + 1

    if (!byDateMap[date]) byDateMap[date] = { date, total: 0, search: 0, by_source: {} }
    byDateMap[date].total += 1
    if (isSearch) byDateMap[date].search += 1
    byDateMap[date].by_source[source] = (byDateMap[date].by_source[source] || 0) + 1

    if (keyword) {
      allKeywords.add(keyword)
      const kwKey = keyword.toLowerCase() + '::' + source
      if (!byKeywordMap[kwKey]) byKeywordMap[kwKey] = { keyword, source, count: 0, pages: new Set(), site: siteKey }
      byKeywordMap[kwKey].count += 1
      byKeywordMap[kwKey].pages.add(slug)
    }

    allPages.add(slug)
    if (!byPageMap[slug]) byPageMap[slug] = {
      slug, title: POST_MAP[slug] || title || slug,
      views: 0, search_views: 0, keyword_count: new Set(), sources: {}, site: siteKey,
    }
    byPageMap[slug].views += 1
    if (isSearch) byPageMap[slug].search_views += 1
    if (keyword) byPageMap[slug].keyword_count.add(keyword)
    byPageMap[slug].sources[source] = (byPageMap[slug].sources[source] || 0) + 1

    if (session_hash) allSessions.add(session_hash)
  }

  const total    = rows.length
  const search   = rows.filter(r => SEARCH_SOURCES.has(r.source)).length
  const direct   = bySourceMap['direct']   || 0
  const internal = bySourceMap['internal'] || 0
  const other    = total - search - direct - internal

  const by_source = Object.entries(bySourceMap)
    .sort((a, b) => b[1] - a[1])
    .map(([source, count]) => ({ source, count, pct: total > 0 ? +(count / total * 100).toFixed(1) : 0 }))

  const by_keyword = Object.values(byKeywordMap)
    .sort((a, b) => b.count - a.count)
    .slice(0, 200)
    .map(k => ({ keyword: k.keyword, source: k.source, count: k.count, pages: [...k.pages].slice(0, 5), site: k.site }))

  const by_page = Object.values(byPageMap)
    .sort((a, b) => b.search_views - a.search_views)
    .slice(0, 100)
    .map(p => ({ ...p, keyword_count: p.keyword_count.size, site: p.site }))

  const by_date = Object.values(byDateMap).sort((a, b) => a.date.localeCompare(b.date))

  const by_device = Object.entries(byDeviceMap)
    .sort((a, b) => b[1] - a[1])
    .map(([device, count]) => ({ device, count, pct: total > 0 ? +(count / total * 100).toFixed(1) : 0 }))

  return res.status(200).json({
    period: { from, to, days: daysBetween(from, to) },
    summary: {
      total, search, direct, internal, other,
      unique_keywords: allKeywords.size,
      unique_pages: allPages.size,
      unique_sessions: allSessions.size,
    },
    by_source, by_keyword, by_page, by_date, by_device,
    by_site: Object.entries(bySiteMap)
      .sort((a, b) => b[1].total - a[1].total)
      .map(([site, v]) => ({ site, ...v, pct: total > 0 ? +(v.total / total * 100).toFixed(1) : 0 })),
  })
}

function daysBetween(from, to) {
  return Math.round((new Date(to) - new Date(from)) / 86400000) + 1
}
