import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import supplements from '../../data/supplements'
import symptoms from '../../data/symptoms'

export async function getStaticPaths() {
  return { paths: supplements.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = supplements.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }
  let postData = null
  try { postData = require(`../../posts/supplements/${meta.slug}.js`) } catch (_) {}
  if (postData && postData.default) postData = postData.default
  const related = [
    ...(meta.relatedSlugs || []).map(s => supplements.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/supplements/${x.slug}/` })),
    ...(meta.relatedSymptoms || []).map(s => symptoms.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/symptoms/${x.slug}/` })),
  ].slice(0, 6)
  return { props: { meta, postData, related } }
}

export default function SupplementDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
