import { createServerClient } from '../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const { type = 'summary', days = '7' } = req.query
  const d = parseInt(days) || 7

  const supabase = createServerClient()
  if (!supabase) return res.json(type === 'summary' ? { today:0, yesterday:0, week:0, month:0 } : [])

  try {
    const now = new Date()
    const iso = n => new Date(now.getTime() - n*86400000).toISOString()

    if (type === 'summary') {
      // 간단한 groupless 요약 (Supabase RPC 대신 count 질의)
      const [today, yesterday, week, month] = await Promise.all([
        supabase.from('pageviews').select('id', { count:'exact', head:true }).gte('created_at', iso(1)),
        supabase.from('pageviews').select('id', { count:'exact', head:true }).gte('created_at', iso(2)).lt('created_at', iso(1)),
        supabase.from('pageviews').select('id', { count:'exact', head:true }).gte('created_at', iso(7)),
        supabase.from('pageviews').select('id', { count:'exact', head:true }).gte('created_at', iso(30)),
      ])
      return res.json({ today: today.count||0, yesterday: yesterday.count||0, week: week.count||0, month: month.count||0 })
    }

    if (type === 'top-pages') {
      const { data } = await supabase.from('pageviews').select('slug').gte('created_at', iso(d))
      const cnt = {}
      ;(data || []).forEach(r => { cnt[r.slug] = (cnt[r.slug] || 0) + 1 })
      const rows = Object.entries(cnt).map(([slug, c]) => ({ slug, cnt: c })).sort((a,b)=>b.cnt-a.cnt).slice(0,15)
      return res.json(rows)
    }

    if (type === 'top-keywords') {
      const { data } = await supabase.from('pageviews').select('keyword').gte('created_at', iso(d)).not('keyword', 'is', null)
      const cnt = {}
      ;(data || []).forEach(r => { if (r.keyword) cnt[r.keyword] = (cnt[r.keyword] || 0) + 1 })
      const rows = Object.entries(cnt).map(([keyword, c]) => ({ keyword, cnt: c })).sort((a,b)=>b.cnt-a.cnt).slice(0,15)
      return res.json(rows)
    }

    if (type === 'engines') {
      const { data } = await supabase.from('pageviews').select('search_engine').gte('created_at', iso(d))
      const cnt = {}
      ;(data || []).forEach(r => { const e = r.search_engine || 'other'; cnt[e] = (cnt[e] || 0) + 1 })
      const rows = Object.entries(cnt).map(([search_engine, c]) => ({ search_engine, cnt: c })).sort((a,b)=>b.cnt-a.cnt)
      return res.json(rows)
    }

    if (type === 'recent') {
      const { data } = await supabase.from('pageviews').select('slug, referrer, search_engine, keyword, created_at').order('created_at', { ascending: false }).limit(100)
      return res.json(data || [])
    }

    return res.status(400).json({ error: 'invalid type' })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
