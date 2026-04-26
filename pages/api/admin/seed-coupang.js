// 어드민: data/coupang-seed.json을 coupang_links 테이블에 INSERT (이미 있는 건 스킵)
import { createServerClient } from '../../../lib/supabase'
import seed from '../../../data/coupang-seed.json'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  try {
    const { data: existing } = await supabase.from('coupang_links').select('product_name')
    const existingNames = new Set((existing || []).map(r => r.product_name))
    const toInsert = seed.filter(s => !existingNames.has(s.product_name))
    if (toInsert.length === 0) {
      return res.json({ skipped: true, message: '새로 추가할 시드 제품이 없습니다.' })
    }
    const { error } = await supabase.from('coupang_links').insert(toInsert)
    if (error) return res.status(500).json({ error: error.message })
    return res.json({ message: `${toInsert.length}개 시드 제품을 추가했습니다.` })
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }
}
