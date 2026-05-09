/**
 * migrate-dinner-pageviews.js
 *
 * dinner 원래 Supabase의 `pageviews` 테이블 데이터를
 * health Supabase의 `pageview_events` 테이블로 마이그레이션
 *
 * 실행 전 아래 4개 환경변수를 설정하세요:
 *
 *   DINNER_SUPABASE_URL=https://xxxx.supabase.co          ← dinner 원래 Supabase URL
 *   DINNER_SUPABASE_KEY=eyJ...                             ← dinner service_role key
 *   HEALTH_SUPABASE_URL=https://yyyy.supabase.co          ← health Supabase URL
 *   HEALTH_SUPABASE_KEY=eyJ...                             ← health service_role key
 *
 * 실행:
 *   DINNER_SUPABASE_URL=... DINNER_SUPABASE_KEY=... HEALTH_SUPABASE_URL=... HEALTH_SUPABASE_KEY=... node scripts/migrate-dinner-pageviews.js
 *
 * 또는 .env 파일에 넣고:
 *   node -r dotenv/config scripts/migrate-dinner-pageviews.js
 */

const { createClient } = require('@supabase/supabase-js')
const { createHash }   = require('crypto')

const DINNER_URL = process.env.DINNER_SUPABASE_URL
const DINNER_KEY = process.env.DINNER_SUPABASE_KEY
const HEALTH_URL = process.env.HEALTH_SUPABASE_URL  || process.env.NEXT_PUBLIC_SUPABASE_URL
const HEALTH_KEY = process.env.HEALTH_SUPABASE_KEY  || process.env.SUPABASE_SERVICE_ROLE_KEY

if (!DINNER_URL || !DINNER_KEY) {
  console.error('❌ DINNER_SUPABASE_URL, DINNER_SUPABASE_KEY 환경변수를 설정하세요.')
  process.exit(1)
}
if (!HEALTH_URL || !HEALTH_KEY) {
  console.error('❌ HEALTH_SUPABASE_URL, HEALTH_SUPABASE_KEY 환경변수를 설정하세요.')
  console.error('   (또는 .env.local의 NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)')
  process.exit(1)
}

const dinnerDb = createClient(DINNER_URL, DINNER_KEY, { auth: { persistSession: false } })
const healthDb = createClient(HEALTH_URL, HEALTH_KEY, { auth: { persistSession: false } })

function kstDate(isoStr) {
  return new Date(new Date(isoStr).getTime() + 9 * 3600000).toISOString().slice(0, 10)
}

function makeSessionHash(slug, createdAt) {
  return createHash('sha256').update(slug + createdAt).digest('hex').slice(0, 16)
}

async function fetchAll() {
  const rows = []
  let page = 0
  const PAGE = 1000
  while (true) {
    const { data, error } = await dinnerDb
      .from('pageviews')
      .select('slug, title, source, keyword, created_at')
      .order('created_at', { ascending: true })
      .range(page * PAGE, (page + 1) * PAGE - 1)
    if (error) { console.error('❌ dinner 조회 실패:', error.message); process.exit(1) }
    if (!data || data.length === 0) break
    rows.push(...data)
    console.log(`  → ${rows.length}행 읽음...`)
    if (data.length < PAGE) break
    page++
  }
  return rows
}

async function insertBatch(rows) {
  const records = rows.map(r => ({
    date:         kstDate(r.created_at),
    slug:         r.slug || '/',
    title:        r.title || null,
    source:       r.source || 'unknown',
    keyword:      r.keyword || null,
    referrer:     null,
    session_hash: makeSessionHash(r.slug || '/', r.created_at),
    site:         'dinner',
    device:       'unknown',
    created_at:   r.created_at,
  }))

  const { error } = await healthDb.from('pageview_events').insert(records)
  if (error) throw new Error(error.message)
}

async function main() {
  console.log('🔗 dinner Supabase 연결:', DINNER_URL.slice(0, 40) + '...')
  console.log('🔗 health Supabase 연결:', HEALTH_URL.slice(0, 40) + '...')
  console.log('')

  console.log('📥 dinner pageviews 테이블 전체 읽는 중...')
  const rows = await fetchAll()
  console.log(`✅ 총 ${rows.length}행 읽음\n`)

  if (rows.length === 0) {
    console.log('마이그레이션할 데이터가 없습니다.')
    return
  }

  // 배치 단위로 insert (500개씩)
  const BATCH = 500
  let done = 0
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH)
    process.stdout.write(`  → ${done + batch.length}/${rows.length} 삽입 중...`)
    try {
      await insertBatch(batch)
      done += batch.length
      console.log(' ✅')
    } catch (e) {
      console.log(' ❌')
      console.error('    오류:', e.message)
      console.error('    (중복 데이터가 있으면 아래 명령어로 재실행 — 중복 무시 옵션 추가)')
      process.exit(1)
    }
  }

  console.log(`\n🎉 마이그레이션 완료! ${done}행 → health pageview_events (site=dinner)`)
  console.log('health.ambitstock.com/searchAnalytics 에서 dinner 필터로 확인하세요.')
}

main()
