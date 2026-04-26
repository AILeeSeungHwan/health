import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import tools from '../../data/tools'

export async function getStaticPaths() {
  return { paths: tools.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = tools.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }
  let postData = null
  try { postData = require(`../../posts/tools/${meta.slug}.js`) } catch (_) {}
  if (postData && postData.default) postData = postData.default
  const related = (meta.relatedSlugs || []).map(s => tools.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/tools/${x.slug}/` }))
  return { props: { meta, postData, related } }
}

export default function ToolDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
