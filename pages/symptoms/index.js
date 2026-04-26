import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import symptoms from '../../data/symptoms'
import bodyParts from '../../data/bodyParts'
import Link from 'next/link'

export async function getStaticProps() {
  const list = symptoms.map(s => ({ ...s, url: `/symptoms/${s.slug}/` }))
  return { props: { list } }
}

export default function SymptomsHub({ list }) {
  const byPart = {}
  list.forEach(s => {
    const p = s.bodyPart || 'other'
    ;(byPart[p] = byPart[p] || []).push(s)
  })

  return (
    <Layout title="증상별 건강 정보" description="두통·불면·소화불량 등 흔한 증상의 원인·대처·병원 가야 할 때를 부위별로 정리.">
      <Breadcrumb items={[{ label:'증상' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>증상별 건강 정보</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        흔한 증상의 원인, 집에서 해볼 수 있는 대처, 도움될 수 있는 약·영양제, 병원에 가야 하는 신호를 부위별로 찾아보세요.
      </p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:22 }}>
        {bodyParts.map(b => (
          <Link key={b.slug} href={`/bodyparts/${b.slug}/`} style={{ textDecoration:'none' }}>
            <span style={{ display:'inline-block', padding:'6px 12px', borderRadius:16, background:'#fff', border:'1px solid #E5E7EB', fontSize:12, color:'#374151' }}>
              {b.icon} {b.name} ({(byPart[b.slug] || []).length})
            </span>
          </Link>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
