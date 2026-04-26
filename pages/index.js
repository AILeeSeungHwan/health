import Link from 'next/link'
import Layout from '../components/Layout'
import { GridCard, ListCard } from '../components/PostCard'
import topics from '../data/topics'
import posts from '../data/posts'
import bodyParts from '../data/bodyParts'
import situations from '../data/situations'
import tools from '../data/tools'

export async function getStaticProps() {
  const featuredTopics = topics.filter(t => t.featured).sort((a,b) => a.priority - b.priority)
  const recent = [...posts].sort((a,b) => (b.updatedAt||'').localeCompare(a.updatedAt||'')).slice(0, 8)
  const situationsWithUrl = situations.map(s => ({ ...s, url: `/situations/${s.slug}/` }))
  const toolsWithUrl = tools.map(t => ({ ...t, url: `/tools/${t.slug}/` }))
  return { props: { featuredTopics, recent, situations: situationsWithUrl, tools: toolsWithUrl } }
}

export default function Home({ featuredTopics, recent, situations, tools }) {
  return (
    <Layout>
      {/* Hero */}
      <section style={{
        background:'linear-gradient(135deg, #FEE2E2 0%, #DCFCE7 50%, #DBEAFE 100%)',
        borderRadius:18, padding:'40px 28px', marginBottom:28, textAlign:'center'
      }}>
        <h1 style={{ fontSize:30, fontWeight:900, color:'#111827', margin:'0 0 10px' }}>
          건강 고민, 안전한 정보로 한 번에
        </h1>
        <p style={{ fontSize:15, color:'#475569', margin:'0 auto', maxWidth:600, lineHeight:1.7 }}>
          식약처 기준의 증상·일반의약품·영양제·건강제품 정보와 계산기를 한 곳에서 찾아보세요.
        </p>
      </section>

      {/* 카테고리 그리드 */}
      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>무엇을 찾고 계신가요?</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }} className="grid-4">
          {featuredTopics.map(t => (
            <Link key={t.slug} href={`/${t.slug}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'20px 18px', textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{t.icon}</div>
                <div style={{ fontSize:14, fontWeight:700, color:t.color, marginBottom:4 }}>{t.name}</div>
                <div style={{ fontSize:11, color:'#6B7280', lineHeight:1.5 }}>{(t.description||'').slice(0,40)}…</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 부위별 증상 */}
      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>부위별로 증상 찾기</h2>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {bodyParts.map(b => (
            <Link key={b.slug} href={`/bodyparts/${b.slug}/`} style={{ textDecoration:'none' }}>
              <span style={{ display:'inline-block', padding:'8px 14px', borderRadius:20, background:'#fff', border:'1px solid #E5E7EB', fontSize:13, color:'#374151' }}>
                {b.icon} {b.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 상황별 허브 */}
      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>지금 이 상황이라면</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {situations.map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      {/* 계산기 */}
      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>바로 쓰는 건강 계산기</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {tools.map(t => <GridCard key={t.slug} post={t} />)}
        </div>
      </section>

      {/* 최근 업데이트 */}
      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>최근 업데이트</h2>
        <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'8px 20px' }}>
          {recent.map(p => <ListCard key={p.slug} post={p} />)}
        </div>
      </section>

      {/* 면책 */}
      <section style={{ background:'#FEF2F2', border:'1px solid #FECACA', borderRadius:10, padding:'16px 20px', marginBottom:20 }}>
        <div style={{ fontSize:13, color:'#7F1D1D', lineHeight:1.7 }}>
          <strong>의료 면책 안내.</strong> 본 사이트의 모든 정보는 일반적인 건강 정보이며 의료 행위·전문가 진단을 대체하지 않습니다. 증상이 지속되면 의료기관 또는 약사 상담을 받으세요.
        </div>
      </section>
    </Layout>
  )
}
