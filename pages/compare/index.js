import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import compares from '../../data/compares'

export async function getStaticProps() {
  const list = compares.map(s => ({ ...s, url: `/compare/${s.slug}/` }))
  return { props: { list } }
}

export default function CompareHub({ list }) {
  return (
    <Layout title="성분·제품 비교" description="진통제·오메가3·프로틴 등 성분·제품 비교.">
      <Breadcrumb items={[{ label:'비교' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>성분·제품 비교</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>상황·건강 상태별 어떤 선택지가 맞는지 한눈에 확인하세요.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
