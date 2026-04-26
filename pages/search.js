import { useState, useMemo } from 'react'
import Layout from '../components/Layout'
import { ListCard } from '../components/PostCard'
import posts from '../data/posts'

export default function Search() {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    if (!q || q.length < 2) return []
    const needle = q.toLowerCase()
    return posts.filter(p =>
      (p.title || '').toLowerCase().includes(needle) ||
      (p.description || '').toLowerCase().includes(needle) ||
      (p.tags || []).some(t => (t||'').toLowerCase().includes(needle))
    ).slice(0, 50)
  }, [q])

  return (
    <Layout title="검색" topAd={false} sideAds={false}>
      <h1 style={{ fontSize:24, fontWeight:800, marginBottom:14 }}>검색</h1>
      <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="증상·약·영양제·키워드 입력"
        style={{ width:'100%', padding:'14px 18px', fontSize:16, border:'1.5px solid #E5E7EB', borderRadius:10, outline:'none', marginBottom:20 }} />
      {q.length >= 2 && results.length === 0 && <p style={{ color:'#9CA3AF' }}>검색 결과가 없습니다.</p>}
      <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'4px 20px' }}>
        {results.map(r => <ListCard key={r.slug} post={r} />)}
      </div>
    </Layout>
  )
}
