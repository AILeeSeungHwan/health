import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('url_registry')
      .select('slug, site, registered, registered_at')
      .order('registered_at', { ascending: false })
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'POST') {
    const { slug, site, registered } = req.body
    if (!slug || !site) return res.status(400).json({ error: 'slug, site required' })
    const { error } = await supabase
      .from('url_registry')
      .upsert(
        { slug, site, registered, registered_at: registered ? new Date().toISOString() : null },
        { onConflict: 'slug,site' }
      )
    if (error) return res.status(500).json({ error: error.message })
    return res.json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
