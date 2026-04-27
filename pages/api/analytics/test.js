/**
 * pages/api/analytics/test.js
 * Supabase 연결 진단 (env / INSERT / SELECT 테스트)
 */

import { supabase } from '../../../lib/supabase-rest'

export default async function handler(req, res) {
  const keyInUse = process.env.SUPABASE_SERVICE_ROLE_KEY ? 'service_role'
                  : process.env.SUPABASE_SECRET_KEY      ? 'secret'
                  : process.env.SUPABASE_PUBLISHABLE_KEY ? 'publishable (RLS 적용)'
                  : null
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const report = {
    env: {
      hasUrl: !!url,
      hasKey: !!keyInUse,
      keyType: keyInUse,
      urlPrefix: url ? url.slice(0, 30) : null,
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
