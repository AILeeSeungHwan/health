import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import news from '../../data/news'

export async function getStaticProps() {
  const list = [...news]
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
    .map(s => ({ ...s, url: `/news/${s.slug}/` }))
  return { props: { list } }
}

export default function NewsHub({ list }) {
  return (
    <Layout
      title="건강뉴스 — AI·신약·연구 최신 트렌드"
      description="AI 단백질 설계, 신약 후보, 의료 정책 등 일반 독자가 알아둘 건강 산업 최신 흐름을 정리합니다."
      bareTitle
    >
      <Breadcrumb items={[{ label: '건강뉴스' }]} />
      <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6 }}>건강뉴스</h1>
      <p style={{ color: '#475569', fontSize: 14, marginBottom: 18 }}>
        AI·신약·연구·정책 등 일반 독자도 알아두면 좋은 건강 산업 최신 동향.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
