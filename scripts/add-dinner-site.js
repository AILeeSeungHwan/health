/**
 * 실행: node scripts/add-dinner-site.js
 * 역할: pages/searchAnalytics.js SITE_META에 'dinner' 항목 추가
 *       health searchAnalytics에서 dinner 데이터를 사이트 필터로 볼 수 있게 함
 *
 * 환경변수 추가도 필요:
 *   dinner Vercel에 HEALTH_SUPABASE_URL, HEALTH_SUPABASE_SERVICE_KEY 추가
 *   (health 프로젝트의 SUPABASE_URL, SUPABASE_SERVICE_KEY 값과 동일)
 */
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../pages/searchAnalytics.js')
let content = fs.readFileSync(filePath, 'utf8')

if (content.includes("dinner:")) {
  console.log('이미 dinner 항목이 존재합니다.')
  process.exit(0)
}

// SITE_META의 unknown: 항목 바로 앞에 dinner: 삽입
const dinnerEntry = `  dinner:   { label: 'dinner',   icon: '🍽️', color: '#f97316', domain: 'dinner.ambitstock.com' },\n`

// unknown: 라인 찾기
const lines = content.split('\n')
const unknownIdx = lines.findIndex(l => /^\s+unknown\s*:/.test(l))

if (unknownIdx === -1) {
  console.error('SITE_META에서 unknown: 항목을 찾을 수 없습니다. 수동으로 추가하세요.')
  console.error('추가할 내용:')
  console.error("  dinner:   { label: 'dinner',   icon: '🍽️', color: '#f97316', domain: 'dinner.ambitstock.com' },")
  process.exit(1)
}

lines.splice(unknownIdx, 0, dinnerEntry.trimEnd())
fs.writeFileSync(filePath, lines.join('\n'), 'utf8')

console.log('✅ dinner 항목 추가 완료 → pages/searchAnalytics.js')
console.log('다음 명령어 실행:')
console.log('  git add pages/searchAnalytics.js')
console.log('  git commit -m "feat: dinner 사이트 analytics 연동"')
console.log('  git push')
