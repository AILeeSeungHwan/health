// scripts/regenerate-feeds.js — sitemap.xml + rss.xml 동시 재생성
// 새 포스트 추가·수정 후 / Vercel prebuild 단계에서 호출.

require('./generate-sitemap')
require('./generate-rss')
require('./generate-titles-index')
console.log('✓ feeds (sitemap + rss + post-titles) regenerated.')
