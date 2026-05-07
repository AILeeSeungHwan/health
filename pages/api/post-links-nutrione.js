// 공개 API — 포스트 slug에 연결된 뉴트리원 공유 링크 반환
import { createServerClient } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()
  const { slug } = req.query
  if (!slug) return res.json([])

  const supabase = createServerClient()
  if (!supabase) return res.json([])

  try {
    const { data, error } = await supabase
      .from('nutrione_links')
      .select('product_id, product_name, sharing_url, image_url, price, variants, category')
      .contains('post_slugs', [slug])
      .eq('is_active', true)
    if (error) throw error
    return res.json(data || [])
  } catch (_) {
    return res.json([])
  }
}
