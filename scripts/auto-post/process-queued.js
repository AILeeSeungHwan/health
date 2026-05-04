#!/usr/bin/env node
/**
 * process-queued.js
 * Usage: node process-queued.js <queued-post-file.js>
 *
 * 큐 파일 하나를 처리:
 *   1) posts/{entity}/{slug}.js 생성
 *   2) data/{entity}.js 에 dataEntry 추가
 *   3) 큐 파일을 done/ 으로 이동
 *
 * Exit codes: 0=성공, 1=에러, 2=이미 존재(스킵)
 */

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')
const DONE_DIR = path.resolve(__dirname, 'queued-posts/done')

const ENTITY_VAR_MAP = {
  symptoms: 'symptoms',
  otc: 'otc',
  supplements: 'supplements',
  products: 'products',
  situations: 'situations',
  compares: 'compares',
  tools: 'tools',
  guides: 'guides',
}

const queuedFile = process.argv[2]
if (!queuedFile) {
  console.error('Usage: node process-queued.js <file>')
  process.exit(1)
}

let queued
try {
  queued = require(path.resolve(queuedFile))
} catch (e) {
  console.error('Failed to load queued file:', e.message)
  process.exit(1)
}

const { entity, slug } = queued.meta || {}
if (!entity || !slug) {
  console.error('Missing meta.entity or meta.slug in queued file')
  process.exit(1)
}

const postDest = path.join(ROOT, 'posts', entity, `${slug}.js`)
const dataFile = path.join(ROOT, 'data', `${entity}.js`)

// 이미 존재하면 스킵
if (fs.existsSync(postDest)) {
  console.log(`SKIP: ${postDest} already exists`)
  process.exit(2)
}

// 1. posts/{entity}/{slug}.js 생성
const postContent = queued.postContent
if (!postContent) {
  console.error('Missing postContent in queued file')
  process.exit(1)
}
fs.mkdirSync(path.dirname(postDest), { recursive: true })
fs.writeFileSync(postDest, postContent, 'utf8')
console.log(`WROTE: ${postDest}`)

// 2. data/{entity}.js 에 dataEntry 추가
const dataEntry = queued.dataEntry
if (!dataEntry) {
  console.error('Missing dataEntry in queued file')
  process.exit(1)
}
const varName = ENTITY_VAR_MAP[entity] || entity
const exportLine = `module.exports = ${varName}`
let dataJs = fs.readFileSync(dataFile, 'utf8')

// 중복 ID 체크
if (dataJs.includes(`id: '${dataEntry.id}'`) || dataJs.includes(`slug: '${slug}'`)) {
  console.log(`SKIP data: ${dataEntry.id} or slug '${slug}' already in ${dataFile}`)
} else {
  const entryStr = '  ' + JSON.stringify(dataEntry, null, 2)
    .replace(/^{/, '{')
    .replace(/}$/, '},')
    .split('\n')
    .map((l, i) => i === 0 ? '  ' + l : '  ' + l)
    .join('\n')

  // ]\n\nmodule.exports = ... 패턴을 찾아 그 앞에 삽입
  const insertPos = dataJs.lastIndexOf(']')
  if (insertPos < 0) {
    console.error('Could not find closing ] in data file')
    process.exit(1)
  }
  dataJs = dataJs.slice(0, insertPos) + formatEntry(dataEntry) + '\n' + dataJs.slice(insertPos)
  fs.writeFileSync(dataFile, dataJs, 'utf8')
  console.log(`APPENDED: ${dataEntry.id} to ${dataFile}`)
}

// 3. 큐 파일을 done/ 으로 이동
const basename = path.basename(queuedFile)
const donePath = path.join(DONE_DIR, basename)
fs.mkdirSync(DONE_DIR, { recursive: true })
fs.renameSync(path.resolve(queuedFile), donePath)
console.log(`ARCHIVED: ${basename} → done/`)

process.exit(0)

// ── helpers ──────────────────────────────────────────────

function formatEntry(obj) {
  const lines = []
  lines.push('  {')
  for (const [k, v] of Object.entries(obj)) {
    lines.push(`    ${k}: ${formatValue(v)},`)
  }
  lines.push('  },')
  return lines.join('\n')
}

function formatValue(v) {
  if (v === null) return 'null'
  if (typeof v === 'boolean') return String(v)
  if (typeof v === 'number') return String(v)
  if (typeof v === 'string') return `'${v.replace(/'/g, "\\'")}'`
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    return '[' + v.map(i => formatValue(i)).join(', ') + ']'
  }
  return JSON.stringify(v)
}
