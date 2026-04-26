// 어드민 등록 쿠팡 링크 — 포스트 하단에 자동 노출
// (포스트 본문의 productSlot 섹션에도 사용 가능)

import { useState, useEffect } from 'react'

export default function CoupangLinks({ slug, productKey }) {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const key = slug || productKey
    if (!key) return
    fetch(`/api/post-links?slug=${encodeURIComponent(key)}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => { if (Array.isArray(data) && data.length > 0) setLinks(data) })
      .catch(() => {})
  }, [slug, productKey])

  if (links.length === 0) return null

  return (
    <div style={{
      background:'linear-gradient(135deg, #FFF7ED 0%, #FFFBEB 100%)',
      borderRadius:14, padding:'20px 22px', margin:'32px 0', border:'1px solid #FED7AA'
    }}>
      <div style={{ fontSize:15, fontWeight:800, marginBottom:14, color:'#EA580C', display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ fontSize:18 }}>🛒</span> 추천 제품 구매 링크
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {links.map((link, i) => (
          <a key={i} href={link.coupang_url} target="_blank" rel="noopener noreferrer nofollow"
            style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px',
              background:'#fff', borderRadius:10, border:'1px solid #E5E7EB', textDecoration:'none', transition:'all 0.15s' }}>
            <div style={{ minWidth:0 }}>
              <div style={{ fontSize:14, fontWeight:700, color:'#374151' }}>{link.product_name}</div>
              {link.category && <span style={{ fontSize:11, color:'#9CA3AF' }}>{link.category}</span>}
            </div>
            <span style={{ fontSize:13, fontWeight:700, color:'#EA580C', whiteSpace:'nowrap', marginLeft:16,
              background:'#FFF7ED', padding:'5px 14px', borderRadius:20 }}>최저가 확인 →</span>
          </a>
        ))}
      </div>
      <p style={{ fontSize:11, color:'#9CA3AF', marginTop:12, marginBottom:0 }}>
        ※ 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  )
}
