// 어드민: data/coupang-seed.json을 coupang_links 테이블에 INSERT (이미 있는 건 스킵)
// 시드 파일은 git에 포함되지 않을 수 있으므로 런타임 fs 로드 + 누락 시 graceful fail.
import fs from 'fs'
import path from 'path'
import { createServerClient } from '../../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

function loadSeed() {
  try {
    const p = path.join(process.cwd(), 'data', 'coupang-seed.json')
    if (!fs.existsSync(p)) return null
    return JSON.parse(fs.readFileSync(p, 'utf8'))
  } catch (_) {
    return null
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  const seed = loadSeed()
  if (!seed) {
    return res.status(404).json({
      error: 'seed file missing',
      message: 'data/coupang-seed.json 이 없거나 읽을 수 없습니다. 어드민에서 직접 + 제품 추가 버튼으로 등록하세요.'
    })
  }

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
