import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import symptoms from '../../data/symptoms'
import otc from '../../data/otc'
import supplements from '../../data/supplements'

export async function getStaticPaths() {
  return { paths: symptoms.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = symptoms.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/symptoms/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = [
    ...(meta.relatedSlugs || []).map(s => symptoms.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/symptoms/${x.slug}/` })),
    ...(meta.relatedOtc || []).map(s => otc.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/otc/${x.slug}/` })),
    ...(meta.relatedSupplements || []).map(s => supplements.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/supplements/${x.slug}/` })),
  ].slice(0, 6)

  return { props: { meta, postData, related } }
}

export default function SymptomDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
