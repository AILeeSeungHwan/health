/**
 * lib/supabase-rest.js
 * Supabase REST API 래퍼 (SDK 없이 fetch 사용) — 통합 분석 전용
 *
 * 환경변수:
 *   SUPABASE_URL              = https://xxxxxxxxxxxx.supabase.co
 *   SUPABASE_PUBLISHABLE_KEY  = service_role key (서버측 전용)
 *
 * ※ /api/analytics/* 가 사용. /api/coupang, /api/post-links 등 기존 API 는
 *    별도의 lib/supabase.js (@supabase/supabase-js SDK) 를 그대로 사용한다.
 */

function getUrl() { return process.env.SUPABASE_URL }
function getKey() { return process.env.SUPABASE_PUBLISHABLE_KEY }

function isConfigured() {
  return !!(getUrl() && getKey())
}

function headers(extra = {}) {
  return {
    'Content-Type': 'application/json',
    'apikey': getKey(),
    'Authorization': `Bearer ${getKey()}`,
    ...extra,
  }
}

async function insert(table, data) {
  if (!isConfigured()) return { error: 'Supabase not configured' }
  const res = await fetch(`${getUrl()}/rest/v1/${table}`, {
    method: 'POST',
    headers: headers({ 'Prefer': 'return=minimal' }),
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.text()
    return { error: err }
  }
  return { ok: true }
}

async function select(table, opts = {}) {
  if (!isConfigured()) return { data: [], error: 'Supabase not configured' }

  const params = new URLSearchParams()
  params.set('select', opts.select || '*')

  if (opts.filters) {
    for (const [col, cond] of Object.entries(opts.filters)) {
      if (typeof cond === 'object' && cond !== null) {
        for (const [op, val] of Object.entries(cond)) {
          if (val !== undefined && val !== null) {
            if (op === 'in' && Array.isArray(val)) {
              params.append(col, `in.(${val.join(',')})`)
            } else {
              params.append(col, `${op}.${val}`)
            }
          }
        }
      } else {
        params.append(col, `eq.${cond}`)
      }
    }
  }

  if (opts.order?.length) params.set('order', opts.order.join(','))
  if (opts.limit) params.set('limit', String(opts.limit))
  if (opts.offset) params.set('offset', String(opts.offset))

  const res = await fetch(`${getUrl()}/rest/v1/${table}?${params}`, {
    headers: headers({ 'Prefer': 'count=exact' }),
  })
  if (!res.ok) {
    const err = await res.text()
    return { data: [], error: err }
  }
  const data = await res.json()
  const count = parseInt(res.headers.get('content-range')?.split('/')[1] || '0', 10)
  return { data, count }
}

/**
 * 페이지네이션으로 모든 행을 가져옴 (Supabase max-rows 1,000 우회)
 * 하드 캡: 200,000건
 */
async function selectAll(table, opts = {}) {
  if (!isConfigured()) return { data: [], error: 'Supabase not configured' }

  const PAGE = 1000
  const HARD_CAP = 200000
  let allRows = []
  let offset = 0

  while (allRows.length < HARD_CAP) {
    const { data, error } = await select(table, { ...opts, limit: PAGE, offset })
    if (error) return { data: [], error }
    if (!data?.length) break
    allRows = allRows.concat(data)
    if (data.length < PAGE) break
    offset += PAGE
  }

  return { data: allRows, count: allRows.length }
}

async function rpc(funcName, params = {}) {
  if (!isConfigured()) return { data: null, error: 'Supabase not configured' }
  const res = await fetch(`${getUrl()}/rest/v1/rpc/${funcName}`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(params),
  })
  if (!res.ok) {
    const err = await res.text()
    return { data: null, error: err }
  }
  const data = await res.json()
  return { data }
}

export const supabase = { isConfigured, insert, select, selectAll, rpc }
