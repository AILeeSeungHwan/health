/**
 * scripts/sync-sitemap-cache.js
 * 로컬 프로젝트의 sitemap XML을 읽어 public/sitemap-cache.json 생성
 * 실행: node scripts/sync-sitemap-cache.js
 * → all-site-urls.js API가 라이브 fetch 실패 시 이 캐시를 폴백으로 사용
 */
const fs   = require('fs')
const path = require('path')

const SITES = [
  { id: 'insurance', dir: '/Users/lee/Desktop/Project/insurance/insurance/public',   domain: 'insurance.ambitstock.com' },
  { id: 'movie',     dir: '/Users/lee/Desktop/Project/movie/ambitstock/public',       domain: 'www.ambitstock.com' },
  { id: 'finance',   dir: '/Users/lee/Desktop/Project/finance/financemoa/public',     domain: 'financemoa.ambitstock.com' },
  { id: 'travel',    dir: '/Users/lee/Desktop/Project/travel/travel/public',          domain: 'travel.ambitstock.com' },
]

function extractUrls(xmlContent) {
  return [...xmlContent.matchAll(/<loc>([\s\S]*?)<\/loc>/g)]
    .map(m => m[1].trim())
    .filter(u => !u.endsWith('.xml'))  // sitemap 인덱스 항목 제외
}

const result = {}

for (const site of SITES) {
  const urls = []
  const files = fs.readdirSync(site.dir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'))

  for (const file of files) {
    const xml = fs.readFileSync(path.join(site.dir, file), 'utf8')
    const extracted = extractUrls(xml)
    urls.push(...extracted)
  }

  // 중복 제거
  const unique = [...new Set(urls)]
  result[site.id] = unique
  console.log(`${site.id}: ${unique.length}개 URL`)
}

const outPath = path.join(__dirname, '../public/sitemap-cache.json')
fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8')
console.log(`\n✅ public/sitemap-cache.json 생성 완료 (총 ${Object.values(result).reduce((a, v) => a + v.length, 0)}개)`)
