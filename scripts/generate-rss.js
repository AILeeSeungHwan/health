// scripts/generate-rss.js — public/rss.xml 생성
// 모든 포스트(증상/OTC/영양제/제품/상황허브/계산기/비교/가이드)의 최신순 RSS 2.0 피드.
// 검색엔진(Naver Search Advisor·Bing) 제출용 + 일반 RSS 리더 호환.

const fs = require('fs')
const path = require('path')

const posts = require('../data/posts')

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://health.ambitstock.com'
const SITE_NAME = '건강모아'
const SITE_DESC = '증상·일반의약품·영양제·건강제품 통합 가이드 — 식약처 기준의 안전한 건강 정보.'
const RSS_URL = SITE + '/rss.xml'

// XML 특수 문자 이스케이프
function esc(str) {
  if (str == null) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// YYYY-MM-DD → RFC 822 (KST +0900)
function toRfc822(dateStr) {
  if (!dateStr) return new Date().toUTCString()
  // 정오(12:00:00 KST)로 통일하여 RFC 822 생성
  const d = new Date(dateStr + 'T12:00:00+09:00')
  if (isNaN(d.getTime())) return new Date().toUTCString()
  return d.toUTCString().replace('GMT', '+0000')
}

const CAT_LABEL = {
  symptom: '증상', otc: '일반의약품', supplement: '영양제', product: '건강제품',
  situation: '상황허브', tool: '계산기', compare: '비교', guide: '가이드',
}

// 최신 순으로 정렬
const sorted = [...posts].sort((a, b) =>
  (b.updatedAt || b.publishedAt || '').localeCompare(a.updatedAt || a.publishedAt || '')
)

const items = sorted.map(p => {
  const url = SITE + p.url
  const cat = esc(CAT_LABEL[p.category] || p.category || '')
  return `    <item>
      <title>${esc(p.title)}</title>
      <link>${esc(url)}</link>
      <description><![CDATA[${(p.description || '').slice(0, 500)}]]></description>
      <pubDate>${toRfc822(p.publishedAt || p.updatedAt)}</pubDate>
      <guid isPermaLink="true">${esc(url)}</guid>
      <category>${cat}</category>
    </item>`
}).join('\n')

const lastBuild = new Date().toUTCString().replace('GMT', '+0000')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${esc(SITE)}</link>
    <description>${esc(SITE_DESC)}</description>
    <language>ko</language>
    <copyright>© ${new Date().getFullYear()} ${esc(SITE_NAME)}</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <generator>healthmoa scripts/generate-rss.js</generator>
    <atom:link href="${esc(RSS_URL)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

fs.writeFileSync(path.resolve(__dirname, '..', 'public', 'rss.xml'), xml)
console.log(`rss.xml generated with ${sorted.length} items.`)
