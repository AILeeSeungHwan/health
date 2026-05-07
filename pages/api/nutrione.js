import { createServerClient } from '../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

export default async function handler(req, res) {
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })
  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  if (req.method === 'GET') {
    const { search, category } = req.query
    let q = supabase.from('nutrione_links').select('*').order('category').order('product_name')
    if (category && category !== '전체') q = q.eq('category', category)
    if (search) q = q.ilike('product_name', `%${search}%`)
    const { data, error } = await q
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data || [])
  }

  if (req.method === 'POST') {
    const body = req.body
    const { data, error } = await supabase.from('nutrione_links').insert([{
      product_name: body.product_name,
      product_id: body.product_id,
      nutrione_url: body.nutrione_url || `https://www.nutrione.co.kr/item/dtl/${body.product_id}`,
      sharing_url: body.sharing_url || null,
      image_url: body.image_url || null,
      price: body.price ? Number(body.price) : null,
      category: body.category || null,
      variants: body.variants || [],
      post_slugs: Array.isArray(body.post_slugs) ? body.post_slugs : (body.post_slugs ? body.post_slugs.split(',').map(s => s.trim()).filter(Boolean) : []),
      notes: body.notes || null,
      is_active: body.is_active !== false,
    }]).select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(201).json(data)
  }

  if (req.method === 'PUT') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const body = req.body
    const { data, error } = await supabase.from('nutrione_links').update({
      product_name: body.product_name,
      product_id: body.product_id,
      nutrione_url: body.nutrione_url || `https://www.nutrione.co.kr/item/dtl/${body.product_id}`,
      sharing_url: body.sharing_url || null,
      image_url: body.image_url || null,
      price: body.price ? Number(body.price) : null,
      category: body.category || null,
      variants: body.variants || [],
      post_slugs: Array.isArray(body.post_slugs) ? body.post_slugs : (body.post_slugs ? body.post_slugs.split(',').map(s => s.trim()).filter(Boolean) : []),
      notes: body.notes || null,
      is_active: body.is_active !== false,
      updated_at: new Date().toISOString(),
    }).eq('id', id).select().single()
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'DELETE') {
    const { id } = req.query
    if (!id) return res.status(400).json({ error: 'id required' })
    const { error } = await supabase.from('nutrione_links').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(204).end()
  }

  return res.status(405).end()
}
