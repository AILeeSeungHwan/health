/**
 * pages/api/analytics/test.js
 * Supabase 연결 진단 (env / INSERT / SELECT 테스트)
 */

import { supabase } from '../../../lib/supabase-rest'

export default async function handler(req, res) {
  const report = {
    env: {
      hasUrl: !!process.env.SUPABASE_URL,
      hasKey: !!process.env.SUPABASE_PUBLISHABLE_KEY,
      urlPrefix: process.env.SUPABASE_URL?.slice(0, 30) || null,
    },
    insert: null,
    select: null,
  }

  if (!supabase.isConfigured()) {
    return res.status(200).json({ ...report, error: '환경변수 미설정' })
  }

  try {
    const ins = await supabase.insert('pageview_events', {
      date: new Date().toISOString().slice(0, 10),
      slug: '__test__',
      source: 'test',
      title: 'connection test',
      site: 'health',
      device: 'unknown',
    })
    report.insert = ins.error ? { ok: false, error: ins.error } : { ok: true }
  } catch (e) {
    report.insert = { ok: false, error: e.message }
  }

  try {
    const sel = await supabase.select('pageview_events', {
      select: 'id,date,slug,site',
      filters: { slug: { eq: '__test__' } },
      limit: 1,
    })
    report.select = sel.error
      ? { ok: false, error: sel.error }
      : { ok: true, rowCount: sel.data?.length }
  } catch (e) {
    report.select = { ok: false, error: e.message }
  }

  return res.status(200).json(report)
}
