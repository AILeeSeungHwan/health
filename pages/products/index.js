import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import products from '../../data/products'

export async function getStaticProps() {
  const list = products.map(s => ({ ...s, url: `/products/${s.slug}/` }))
  return { props: { list } }
}

export default function ProductsHub({ list }) {
  return (
    <Layout title="건강 제품 가이드" description="프로틴·다이어트 식품·셀프케어·운동용품 선택 가이드.">
      <Breadcrumb items={[{ label:'건강제품' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>건강 제품</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        프로틴·다이어트 식품·셀프케어·운동용품 등을 선택 기준 중심으로 정리합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
