#!/usr/bin/env node
/**
 * fix-apostrophes.js
 * posts/ 하위 모든 JS 파일에서 단일따옴표 HTML 문자열 내 아포스트로피를
 * HTML 엔티티(&amp;#39;)로 이스케이프 처리.
 *
 * 실행: node scripts/fix-apostrophes.js
 */

const fs = require('fs')
const path = require('path')
const ROOT = path.resolve(__dirname, '..')

let totalFixed = 0

function fixFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8')

  // html: '...' 문자열 내 아포스트로피를 &#39; 로 변환
  // 전략: 단일따옴표로 감싼 html 값 내부에서 영문자+' 패턴 치환
  // (JS 예약 패턴 아포스트로피: 's, 't, 're, 'll, 've, 'd, 'n)
  const fixed = src.replace(
    /html:\s*'([\s\S]*?)(?=',\s*\n|\s*'\s*,?\s*\n?\s*})/g,
    (match, inner) => {
      const newInner = inner.replace(/(\w)'(\w)/g, '$1&#39;$2')
      return match.replace(inner, newInner)
    }
  )

  if (fixed !== src) {
    fs.writeFileSync(filePath, fixed, 'utf8')
    console.log(`FIXED: ${path.relative(ROOT, filePath)}`)
    totalFixed++
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.name.endsWith('.js')) {
      try { fixFile(full) } catch (e) { console.error(`SKIP ${full}: ${e.message}`) }
    }
  }
}

console.log('=== 아포스트로피 이스케이프 수정 시작 ===')
walk(path.join(ROOT, 'posts'))
console.log(`=== 완료: ${totalFixed}개 파일 수정 ===`)

// .gitignore 업데이트
const gitignorePath = path.join(ROOT, '.gitignore')
let gitignore = fs.readFileSync(gitignorePath, 'utf8')
const toAdd = [
  '# auto-post 로컬 전용',
  'scripts/auto-post/log.txt',
  'scripts/auto-post/launchd-*.out.log',
  'scripts/auto-post/launchd-*.err.log',
  'scripts/auto-post/.queue-state.json',
]
let changed = false
for (const line of toAdd) {
  if (!gitignore.includes(line.replace('# ', ''))) {
    gitignore += '\n' + line
    changed = true
  }
}
if (changed) {
  fs.writeFileSync(gitignorePath, gitignore, 'utf8')
  console.log('UPDATED: .gitignore (로그 파일 제외 규칙 추가)')
}

// 구문 검사
const { execSync } = require('child_process')
const postsDir = path.join(ROOT, 'posts')
let errors = 0
function checkSyntax(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) checkSyntax(full)
    else if (entry.name.endsWith('.js')) {
      try {
        execSync(`node --check "${full}"`, { stdio: 'pipe' })
      } catch (e) {
        console.error(`SYNTAX ERROR: ${path.relative(ROOT, full)}`)
        errors++
      }
    }
  }
}
console.log('\n=== 구문 검사 ===')
checkSyntax(postsDir)
if (errors === 0) {
  console.log('모든 파일 구문 OK')
} else {
  console.log(`${errors}개 파일 구문 오류 — 수동 확인 필요`)
  process.exit(1)
}
