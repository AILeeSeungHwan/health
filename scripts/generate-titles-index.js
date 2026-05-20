// scripts/generate-titles-index.js
// data/post-titles.json 생성 — 자동화 포스팅의 중복 판단 전용 인덱스.
// 본문은 절대 읽지 않고 이 파일의 title 만 보고 중복 여부를 판단한다.
//
// 호출: npm run titles-index   (prebuild 단계에도 자동 포함)

const fs = require('fs')
const path = require('path')

const posts = require('../data/posts')
const news  = require('../data/news') // posts/data 의 통합본에 이미 포함되지만 명시적으로 fallback

const OUT = path.resolve(__dirname, '../data/post-titles.json')

// 카테고리별 한국어 라벨
const CAT_LABEL = {
  symptom: '증상', otc: '일반의약품', supplement: '영양제', product: '건강제품',
  situation: '상황별', tool: '계산기', compare: '비교', guide: '가이드',
  news: '건강뉴스',
}

const titles = posts
  .map(p => ({
    id: p.id,
    slug: p.slug,
    category: p.category,
    categoryLabel: CAT_LABEL[p.category] || p.category,
    title: p.title,
    publishedAt: p.publishedAt,
    updatedAt: p.updatedAt,
    url: p.url,
    tags: p.tags || [],
  }))
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))

const payload = {
  // 자동화 포스팅이 이 파일만 읽어 중복 판단 — 본문 접근 금지
  generatedAt: new Date().toISOString(),
  count: titles.length,
  note: '자동화 포스팅 중복 판단 전용. 이 파일의 title/tags 만 보고 새 주제와 충돌 여부를 결정한다. 포스트 본문 파일(posts/**/*.js) 은 절대 자동화 단계에서 읽지 말 것.',
  titles,
}

fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8')
console.log(`✓ post-titles.json (${titles.length} entries) — ${OUT}`)
