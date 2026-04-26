import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import guides from '../../data/guides'

export async function getStaticPaths() {
  return { paths: guides.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = guides.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }
  let postData = null
  try { postData = require(`../../posts/guides/${meta.slug}.js`) } catch (_) {}
  if (postData && postData.default) postData = postData.default
  return { props: { meta, postData, related: [] } }
}

export default function GuideDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
