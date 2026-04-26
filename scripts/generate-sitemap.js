// scripts/generate-sitemap.js — public/sitemap.xml 생성
const fs = require('fs')
const path = require('path')

// eslint-disable-next-line global-require
const posts = require('../data/posts')
const bodyParts = require('../data/bodyParts')

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://healthmoa.ambitstock.com'

const staticRoutes = [
  '/', '/symptoms/', '/otc/', '/supplements/', '/products/',
  '/situations/', '/tools/', '/compare/', '/guides/',
  '/about/', '/editorial-policy/', '/disclaimer/', '/privacy/', '/terms/', '/contact/',
]

const now = new Date().toISOString().slice(0, 10)

const urls = [
  ...staticRoutes.map(u => ({ loc: SITE + u, changefreq:'weekly', priority: u === '/' ? '1.0' : '0.7' })),
  ...bodyParts.map(b => ({ loc: `${SITE}/bodyparts/${b.slug}/`, changefreq:'weekly', priority:'0.6' })),
  ...posts.map(p => ({ loc: SITE + p.url, lastmod: p.updatedAt || now, changefreq:'monthly', priority:'0.8' })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

fs.writeFileSync(path.resolve(__dirname, '..', 'public', 'sitemap.xml'), xml)
console.log(`sitemap.xml generated with ${urls.length} URLs.`)
