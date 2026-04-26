import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import tools from '../../data/tools'

export async function getStaticProps() {
  const list = tools.map(s => ({ ...s, url: `/tools/${s.slug}/` }))
  return { props: { list } }
}

export default function ToolsHub({ list }) {
  return (
    <Layout title="건강 계산기" description="BMI·기초대사량·단백질·물·수면 등 건강 관리 계산기 모음.">
      <Breadcrumb items={[{ label:'계산기' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>건강 계산기</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        간단한 입력으로 내 몸 상태를 점검할 수 있는 참고 지표입니다. 의료 진단을 대체하지 않습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
