import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import situations from '../../data/situations'

export async function getStaticProps() {
  const list = situations.map(s => ({ ...s, url: `/situations/${s.slug}/` }))
  return { props: { list } }
}

export default function SituationsHub({ list }) {
  return (
    <Layout title="상황별 건강 가이드" description="두통·불면·면역력·다이어트 등 상황 통합 가이드.">
      <Breadcrumb items={[{ label:'상황별' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>상황별 통합 가이드</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        특정 상황에 관련된 증상·약·영양제·생활 습관을 한 페이지에서 확인하세요.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
