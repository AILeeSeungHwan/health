import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import otc from '../../data/otc'

export async function getStaticProps() {
  const list = otc.map(s => ({ ...s, url: `/otc/${s.slug}/` }))
  return { props: { list } }
}

export default function OtcHub({ list }) {
  return (
    <Layout title="일반의약품(OTC) 정보" description="약국에서 살 수 있는 일반의약품 성분·용법·부작용·금기 정보.">
      <Breadcrumb items={[{ label:'일반의약품' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>일반의약품(OTC)</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        약국에서 구매 가능한 일반의약품의 식약처 등록 성분·용법·부작용·금기를 정리합니다. 실제 복용 전 약사 상담을 권장합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
