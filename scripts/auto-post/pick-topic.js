#!/usr/bin/env node
/**
 * scripts/auto-post/pick-topic.js
 * 큐에서 다음 토픽 선택. 두 모드:
 *   - 단건 (기본):   stdout = 토픽 1개 JSON
 *   - 배치:  --batch N    stdout = 토픽 N개 JSON 배열
 *
 * 시간대(SLOT 환경변수 또는 KST 시각) 가중 + priority 정렬.
 * 선택된 모든 id 는 .queue-state.json 에 기록되어 재선택되지 않음.
 */

const fs = require('fs')
const path = require('path')

const QUEUE = path.resolve(__dirname, 'post-queue.json')
const STATE = path.resolve(__dirname, '.queue-state.json')

const args = process.argv.slice(2)
let batchSize = 1
const batchIdx = args.indexOf('--batch')
if (batchIdx >= 0 && args[batchIdx + 1]) {
  batchSize = Math.max(1, parseInt(args[batchIdx + 1], 10) || 1)
}

const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8'))
let state = { completed: [] }
try { state = JSON.parse(fs.readFileSync(STATE, 'utf8')) } catch (_) {}

const completed = new Set(state.completed || [])
const pending = queue.topics.filter(t => !completed.has(t.id))
if (pending.length === 0) {
  process.stdout.write(batchSize > 1 ? '[]' : '')
  process.exit(0)
}

const SLOT_BIAS = {
  morning: ['symptom', 'situation', 'guide'],
  noon:    ['otc', 'supplement', 'compare'],
  evening: ['product', 'compare', 'tool', 'guide'],
}
function detectSlot() {
  if (process.env.SLOT) return process.env.SLOT
  const kstH = (new Date().getUTCHours() + 9) % 24
  if (kstH >= 5 && kstH < 11) return 'morning'
  if (kstH >= 11 && kstH < 16) return 'noon'
  return 'evening'
}
const slot = detectSlot()
const biasTypes = SLOT_BIAS[slot] || []
const PRI = { high: 0, medium: 1, low: 2 }

pending.sort((a, b) => {
  const aBias = biasTypes.includes(a.type) ? 0 : 1
  const bBias = biasTypes.includes(b.type) ? 0 : 1
  if (aBias !== bBias) return aBias - bBias
  const ap = PRI[a.priority] ?? 9
  const bp = PRI[b.priority] ?? 9
  if (ap !== bp) return ap - bp
  return a.id.localeCompare(b.id)
})

// 배치 모드 — type 다양성 확보 (같은 type 연속 회피)
const picked = []
const usedTypes = new Set()
const remaining = [...pending]

while (picked.length < batchSize && remaining.length > 0) {
  // 타입이 아직 안 쓰인 것 우선
  let idx = remaining.findIndex(t => !usedTypes.has(t.type))
  if (idx < 0) idx = 0  // 모든 type 다 쓰였으면 그냥 첫 번째
  const t = remaining.splice(idx, 1)[0]
  picked.push(t)
  usedTypes.add(t.type)
}

state.completed = [...completed, ...picked.map(t => t.id)]
state.lastPick = { at: new Date().toISOString(), slot, ids: picked.map(t => t.id) }
fs.writeFileSync(STATE, JSON.stringify(state, null, 2))

if (batchSize > 1) {
  process.stdout.write(JSON.stringify(picked, null, 2))
} else {
  process.stdout.write(JSON.stringify(picked[0]))
}
