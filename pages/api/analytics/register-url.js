import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const ENGINES = ['naver', 'daum', 'google', 'bing']

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('url_registry')
      .select('slug, site, registered, registered_at, naver, daum, google, bing')
      .order('registered_at', { ascending: false })
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }

  if (req.method === 'POST') {
    const { slug, site, engine, registered } = req.body
    if (!slug || !site) return res.status(400).json({ error: 'slug, site required' })

    if (engine && ENGINES.includes(engine)) {
      // 엔진별 등록: 행이 없으면 먼저 생성, 그 다음 해당 컬럼만 업데이트
      await supabase
        .from('url_registry')
        .upsert({ slug, site }, { onConflict: 'slug,site', ignoreDuplicates: true })

      const { error } = await supabase
        .from('url_registry')
        .update({ [engine]: registered })
        .eq('slug', slug)
        .eq('site', site)
      if (error) return res.status(500).json({ error: error.message })
    } else {
      // 레거시: registered 컬럼 + naver 동기화
      const { error } = await supabase
        .from('url_registry')
        .upsert(
          { slug, site, registered, naver: registered, registered_at: registered ? new Date().toISOString() : null },
          { onConflict: 'slug,site' }
        )
      if (error) return res.status(500).json({ error: error.message })
    }

    return res.json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
