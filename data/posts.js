// data/posts.js — 모든 엔티티를 통합한 단일 포스트 레지스트리
// 엔티티별 데이터를 합쳐 사이트맵/검색/최근 업데이트 등에 사용

const symptoms    = require('./symptoms')
const otc         = require('./otc')
const supplements = require('./supplements')
const products    = require('./products')
const situations  = require('./situations')
const tools       = require('./tools')
const compares    = require('./compares')
const guides      = require('./guides')

// 카테고리별 URL prefix
const PREFIX = {
  symptom:    '/symptoms',
  otc:        '/otc',
  supplement: '/supplements',
  product:    '/products',
  situation:  '/situations',
  tool:       '/tools',
  compare:    '/compare',
  guide:      '/guides',
}

function withUrl(arr) {
  return arr.map(p => ({ ...p, url: `${PREFIX[p.category]}/${p.slug}/` }))
}

const posts = [
  ...withUrl(symptoms),
  ...withUrl(otc),
  ...withUrl(supplements),
  ...withUrl(products),
  ...withUrl(situations),
  ...withUrl(tools),
  ...withUrl(compares),
  ...withUrl(guides),
]

module.exports = posts
