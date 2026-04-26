import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import symptoms from '../../data/symptoms'
import bodyParts from '../../data/bodyParts'

export async function getStaticPaths() {
  return { paths: bodyParts.map(b => ({ params: { slug: b.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const bodyPart = bodyParts.find(b => b.slug === params.slug)
  if (!bodyPart) return { notFound: true }
  const list = symptoms.filter(s => s.bodyPart === bodyPart.slug).map(s => ({ ...s, url: `/symptoms/${s.slug}/` }))
  return { props: { bodyPart, list } }
}

export default function BodyPartDetail({ bodyPart, list }) {
  return (
    <Layout title={`${bodyPart.name} 관련 증상 모음`} description={`${bodyPart.name} 관련 증상의 원인·대처·병원 방문 가이드.`}>
      <Breadcrumb items={[{ label:'부위별', href:'/symptoms/' }, { label: bodyPart.name }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>{bodyPart.icon} {bodyPart.name} 관련 증상</h1>
      {list.length === 0 && <p style={{ color:'#6B7280' }}>아직 등록된 증상 포스트가 없습니다.</p>}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
