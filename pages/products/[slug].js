import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import products from '../../data/products'

export async function getStaticPaths() {
  return { paths: products.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = products.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }
  let postData = null
  try { postData = require(`../../posts/products/${meta.slug}.js`) } catch (_) {}
  if (postData && postData.default) postData = postData.default
  const related = (meta.relatedSlugs || []).map(s => products.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/products/${x.slug}/` }))
  return { props: { meta, postData, related } }
}

export default function ProductDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
