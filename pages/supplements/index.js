import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import supplements from '../../data/supplements'

export async function getStaticProps() {
  const list = supplements.map(s => ({ ...s, url: `/supplements/${s.slug}/` }))
  return { props: { list } }
}

export default function SupplementsHub({ list }) {
  return (
    <Layout title="영양제·건강기능식품" description="오메가3·마그네슘·비타민 D 등 주요 영양제의 식약처 인정 기능성·권장량·주의사항.">
      <Breadcrumb items={[{ label:'영양제' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>영양제 · 건강기능식품</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        식약처가 인정한 기능성을 중심으로 정리합니다. 과장 효능은 피하고, 식품 대체 방안도 함께 안내합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
