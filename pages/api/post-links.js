// 공개 API — 포스트 slug에 연결된 쿠팡 링크 반환
import { createServerClient } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  const { slug } = req.query
  if (!slug) return res.json([])

  const supabase = createServerClient()
  if (!supabase) return res.json([])

  try {
    const { data, error } = await supabase
      .from('coupang_links')
      .select('product_name, category, coupang_url')
      .contains('post_slugs', [slug])
      .not('coupang_url', 'is', null)
      .neq('coupang_url', '')
    if (error) throw error
    return res.json(data || [])
  } catch (_) {
    return res.json([])
  }
}
