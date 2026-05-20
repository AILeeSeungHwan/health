import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import news from '../../data/news'

export async function getStaticPaths() {
  return { paths: news.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = news.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }
  let postData = null
  try { postData = require(`../../posts/news/${meta.slug}.js`) } catch (_) {}
  if (postData && postData.default) postData = postData.default
  const related = (meta.relatedSlugs || [])
    .map(s => news.find(x => x.slug === s))
    .filter(Boolean)
    .map(x => ({ ...x, url: `/news/${x.slug}/` }))
    .slice(0, 6)
  return { props: { meta, postData, related } }
}

export default function NewsDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false} bareTitle>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
