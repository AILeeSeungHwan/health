import Link from 'next/link'

const CATEGORY_COLORS = {
  symptom:    { color: '#DC2626', bg: '#FEE2E2', label: '증상' },
  otc:        { color: '#2563EB', bg: '#DBEAFE', label: '의약품' },
  supplement: { color: '#16A34A', bg: '#DCFCE7', label: '영양제' },
  product:    { color: '#EA580C', bg: '#FFF7ED', label: '건강제품' },
  situation:  { color: '#7C3AED', bg: '#EDE9FE', label: '상황' },
  tool:       { color: '#0284C7', bg: '#E0F2FE', label: '계산기' },
  compare:    { color: '#0891B2', bg: '#CFFAFE', label: '비교' },
  guide:      { color: '#475569', bg: '#F1F5F9', label: '가이드' },
  news:       { color: '#4F46E5', bg: '#E0E7FF', label: '건강뉴스' },
}

export function GridCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color:'#6b7280', bg:'#F3F4F6', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration:'none' }}>
      <article style={{
        background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #E5E7EB',
        transition:'all 0.2s', height:'100%', display:'flex', flexDirection:'column'
      }}>
        <span style={{
          fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:6,
          color:meta.color, background:meta.bg, display:'inline-block', marginBottom:10, alignSelf:'flex-start'
        }}>{meta.label}</span>
        <h3 style={{ fontSize:15, fontWeight:700, color:'#111827', margin:'0 0 8px', lineHeight:1.4 }}>{post.title}</h3>
        <p style={{ fontSize:13, color:'#6B7280', lineHeight:1.6, margin:0, flex:1 }}>
          {(post.description || '').slice(0, 100)}
        </p>
        {post.updatedAt && (
          <time style={{ fontSize:11, color:'#9CA3AF', marginTop:10 }}>업데이트: {post.updatedAt}</time>
        )}
      </article>
    </Link>
  )
}

export function ListCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color:'#6b7280', bg:'#F3F4F6', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration:'none' }}>
      <div style={{
        display:'flex', gap:10, alignItems:'flex-start', padding:'14px 0',
        borderBottom:'1px solid #F3F4F6'
      }}>
        <span style={{
          fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:6,
          color:meta.color, background:meta.bg, flexShrink:0
        }}>{meta.label}</span>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:14, fontWeight:600, color:'#111827', marginBottom:4 }}>{post.title}</div>
          <div style={{ fontSize:12, color:'#6B7280', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {post.description}
          </div>
        </div>
      </div>
    </Link>
  )
}
