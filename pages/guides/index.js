import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import guides from '../../data/guides'

export async function getStaticProps() {
  const list = guides.map(s => ({ ...s, url: `/guides/${s.slug}/` }))
  return { props: { list } }
}

export default function GuidesHub({ list }) {
  return (
    <Layout title="건강 가이드" description="영양제·의약품·다이어트·수면 심화 가이드.">
      <Breadcrumb items={[{ label:'가이드' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>건강 가이드</h1>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
