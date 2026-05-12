/**
 * pages/searchAnalytics.js
 * 검색유입 분석 대시보드 — ambitstock 통합 (6개 사이트)
 *
 * site 값: health / insurance / movie / finance / travel / dinner
 *
 * Vercel Settings → Environment Variables:
 *   SUPABASE_URL              = https://xxxxxxxxxxxx.supabase.co
 *   SUPABASE_PUBLISHABLE_KEY  = service_role key (server-only)
 */

import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

/* ── 소스 메타데이터 ── */
const SOURCE_META = {
  google:   { label: 'Google',       color: '#4285F4', icon: '🔍' },
  naver:    { label: 'Naver',        color: '#03C75A', icon: '🟢' },
  bing:     { label: 'Bing',         color: '#008373', icon: '🔵' },
  daum:     { label: 'Daum/Kakao',   color: '#FFCD00', icon: '🟡' },
  zum:      { label: 'ZUM',          color: '#FF6600', icon: '🟠' },
  yahoo:    { label: 'Yahoo',        color: '#6001D2', icon: '🟣' },
  direct:   { label: '직접 접속',    color: '#6b7280', icon: '🏠' },
  internal: { label: '내부 이동',    color: '#8b5cf6', icon: '🔄' },
  other:    { label: '기타',         color: '#9ca3af', icon: '🌐' },
  unknown:  { label: '알 수 없음',   color: '#d1d5db', icon: '❓' },
}
const SEARCH_SOURCES = ['google', 'naver', 'bing', 'daum', 'zum', 'yahoo']

const SITE_META = {
  health:    { label: 'health',    icon: '🩺', color: '#DC2626' },
  insurance: { label: 'insurance', icon: '🛡️', color: '#2563EB' },
  movie:     { label: 'movie',     icon: '🎬', color: '#7C3AED' },
  finance:   { label: 'finance',   icon: '💰', color: '#16A34A' },
  travel:    { label: 'travel',    icon: '✈️', color: '#EA580C' },
  dinner:    { label: 'dinner',    icon: '🍽️', color: '#DB2777' },
  unknown:   { label: '?',         icon: '❓', color: '#9ca3af' },
}

const SITE_HOST = {
  health: 'health.ambitstock.com',
  insurance: 'insurance.ambitstock.com',
  movie: 'ambitstock.com',
  finance: 'finance.ambitstock.com',
  travel: 'travel.ambitstock.com',
  dinner: 'dinner.ambitstock.com',
}

const PRESETS = [
  { label: '오늘', days: 0 },
  { label: '어제', days: -1 },
  { label: '7일',  days: 7 },
  { label: '14일', days: 14 },
  { label: '30일', days: 30 },
  { label: '90일', days: 90 },
]

function kstNow() { return Date.now() + 9 * 3600000 }
function daysAgo(n) { return new Date(kstNow() - n * 86400000).toISOString().slice(0, 10) }
function today()    { return new Date(kstNow()).toISOString().slice(0, 10) }
function yesterday() { return daysAgo(1) }

/* ── 공통 스타일 ── */
const card = { background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: '20px', marginBottom: 16 }
const th   = { padding: '8px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', borderBottom: '2px solid #f3f4f6', whiteSpace: 'nowrap' }
const td   = { padding: '10px 12px', fontSize: 13, color: '#1a1a2e', borderBottom: '1px solid #f9fafb', verticalAlign: 'middle' }
const tdR  = { ...td, textAlign: 'right' }

function KpiCard({ label, value, sub, color }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
      <div style={{ fontSize: 30, fontWeight: 900, color: color || '#2c5fff', lineHeight: 1 }}>{value ?? '—'}</div>
      <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 600, marginTop: 6 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{sub}</div>}
    </div>
  )
}

function HBar({ value, max, color, label, count }) {
  const pct = max > 0 ? (value / max * 100) : 0
  const m = SOURCE_META[label] || SOURCE_META.unknown
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <span style={{ width: 110, fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        <span>{m.icon}</span>{m.label}
      </span>
      <div style={{ flex: 1, height: 22, background: '#f1f3f5', borderRadius: 5, overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: color || m.color, borderRadius: 5, transition: 'width 0.5s ease', minWidth: value > 0 ? 4 : 0 }} />
      </div>
      <span style={{ width: 70, fontSize: 12, textAlign: 'right', flexShrink: 0 }}>
        <strong>{count}</strong> <span style={{ opacity: 0.4, fontSize: 10 }}>({pct.toFixed(0)}%)</span>
      </span>
    </div>
  )
}

function SiteBadge({ site }) {
  const m = SITE_META[site] || SITE_META.unknown
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      fontSize: 10, padding: '2px 7px', borderRadius: 4,
      background: m.color + '18', color: m.color, fontWeight: 700,
    }}>{m.icon} {m.label}</span>
  )
}

function SourceBadge({ source, count }) {
  const m = SOURCE_META[source] || SOURCE_META.unknown
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      fontSize: 10, padding: '2px 7px', borderRadius: 4,
      background: m.color + '20', color: m.color, fontWeight: 700, marginRight: 3,
    }}>{m.icon} {count}</span>
  )
}

function DailyChart({ byDate }) {
  if (!byDate?.length) return <div style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 20 }}>데이터 없음</div>
  const maxTotal = Math.max(...byDate.map(d => d.total), 1)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 100, padding: '0 4px' }}>
      {byDate.map(d => {
        const searchH = Math.round((d.search / maxTotal) * 96)
        const otherH  = Math.round((d.total  / maxTotal) * 96) - searchH
        return (
          <div key={d.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, cursor: 'default' }}
            title={`${d.date}\n총 ${d.total} / 검색 ${d.search}`}>
            <div style={{ width: '100%', height: otherH, background: '#e5e7eb', borderRadius: '3px 3px 0 0' }} />
            <div style={{ width: '100%', height: searchH, background: '#2c5fff' }} />
          </div>
        )
      })}
    </div>
  )
}

const ENGINES = ['naver', 'daum', 'google', 'bing']
const ENGINE_META = {
  naver:  { label: '네이버', color: '#03C75A' },
  daum:   { label: '다음',   color: '#F9AE00' },
  google: { label: '구글',   color: '#4285F4' },
  bing:   { label: '빙',     color: '#008373' },
}

function doCopy(text, onCount) {
  if (!text) return
  const count = text.split('\n').filter(Boolean).length
  const fallback = () => {
    const el = document.createElement('textarea')
    el.value = text
    el.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1px;height:1px'
    document.body.appendChild(el)
    el.focus()
    el.select()
    el.setSelectionRange(0, 999999)
    document.execCommand('copy')
    document.body.removeChild(el)
    onCount?.(count)
  }
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => onCount?.(count), fallback)
  } else {
    fallback()
  }
}

export default function SearchAnalytics() {
  const [activeTab, setActiveTab] = useState('overview')
  const [preset, setPreset]       = useState(0)
  const [from, setFrom]           = useState(today())
  const [to, setTo]               = useState(today())
  const [srcFilter, setSrcFilter] = useState('all')
  const [siteFilter, setSiteFilter] = useState('all')
  const [kwSearch, setKwSearch]   = useState('')
  const [pageSearch, setPageSearch] = useState('')
  const [data, setData]           = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)
  const [diagResult, setDiagResult] = useState(null)
  const [diagLoading, setDiagLoading] = useState(false)
  const [tlData, setTlData]       = useState(null)
  const [tlLoading, setTlLoading] = useState(false)
  const [hideBot, setHideBot]     = useState(true)
  const [registeredUrls,  setRegisteredUrls]  = useState([])
  const [urlLoading,      setUrlLoading]      = useState(false)
  const [allUrls,         setAllUrls]         = useState([])
  const [allUrlsLoading,  setAllUrlsLoading]  = useState(false)
  const [urlSiteFilter,   setUrlSiteFilter]   = useState('all')
  const [directSlug,      setDirectSlug]      = useState('')
  const [directSite,      setDirectSite]      = useState('health')
  const [directSaving,    setDirectSaving]    = useState(false)
  const [copyMsg,         setCopyMsg]         = useState('')

  const runDiag = async () => {
    setDiagLoading(true); setDiagResult(null)
    try {
      const res = await fetch('/api/analytics/test')
      setDiagResult(await res.json())
    } catch (e) { setDiagResult({ error: e.message }) }
    setDiagLoading(false)
  }

  const loadStats = useCallback(async () => {
    setLoading(true); setError(null)
    try {
      const params = new URLSearchParams({ from, to, source: srcFilter, site: siteFilter })
      if (hideBot) params.set('hideBot', '1')
      const res = await fetch(`/api/analytics/stats?${params}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'API error')
      setData(json)
    } catch (e) { setError(e.message) }
    setLoading(false)
  }, [from, to, srcFilter, siteFilter, hideBot])

  useEffect(() => { loadStats() }, [loadStats])

  const loadTimeline = useCallback(async () => {
    setTlLoading(true)
    try {
      const params = new URLSearchParams({ from, to, site: siteFilter })
      if (hideBot) params.set('hideBot', '1')
      const res = await fetch(`/api/analytics/timeline?${params}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'API error')
      setTlData(json)
    } catch (e) { setTlData(null) }
    setTlLoading(false)
  }, [from, to, siteFilter, hideBot])

  useEffect(() => {
    if (activeTab === 'timeline') loadTimeline()
  }, [activeTab, loadTimeline])

  const loadRegisteredUrls = useCallback(async () => {
    setUrlLoading(true)
    try {
      const q   = urlSiteFilter !== 'all' ? `?site=${urlSiteFilter}` : ''
      const res  = await fetch(`/api/analytics/url-stats${q}`)
      const json = await res.json()
      setRegisteredUrls(json.rows || [])
    } catch { setRegisteredUrls([]) }
    setUrlLoading(false)
  }, [urlSiteFilter])

  const loadAllUrls = useCallback(async () => {
    setAllUrlsLoading(true)
    try {
      const res  = await fetch('/api/analytics/all-site-urls')
      const json = await res.json()
      setAllUrls(json.urls || [])
    } catch { setAllUrls([]) }
    setAllUrlsLoading(false)
  }, [])

  const handleCopy = (text) => {
    doCopy(text, (count) => {
      setCopyMsg(`✅ ${count}개 복사됨`)
      setTimeout(() => setCopyMsg(''), 2500)
    })
  }

  const toggleRegister = (slug, site, engine, current) => {
    const next = !current
    setRegisteredUrls(prev => prev.map(r =>
      r.slug === slug && r.site === site ? { ...r, [engine]: next } : r
    ))
    setAllUrls(prev => prev.map(u =>
      u.slug === slug && u.site === site ? { ...u, [engine]: next } : u
    ))
    fetch('/api/analytics/register-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, site, engine, registered: next }),
    })
  }

  const bulkRegisterUpTo = (upToIndex, engine) => {
    const targets = registeredUrls.slice(0, upToIndex + 1).filter(r => !r[engine])
    if (!targets.length) return
    setRegisteredUrls(prev => prev.map((r, i) =>
      i <= upToIndex ? { ...r, [engine]: true } : r
    ))
    Promise.all(targets.map(r =>
      fetch('/api/analytics/register-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: r.slug, site: r.site, engine, registered: true }),
      })
    ))
  }

  const bulkRegisterAllUrlsUpTo = (upToIndex, filtered, engine) => {
    const targets = filtered.slice(0, upToIndex + 1).filter(u => !u[engine])
    if (!targets.length) return
    const keys = new Set(targets.map(t => `${t.site}::${t.slug}`))
    setAllUrls(prev => prev.map(u =>
      keys.has(`${u.site}::${u.slug}`) ? { ...u, [engine]: true } : u
    ))
    Promise.all(targets.map(u =>
      fetch('/api/analytics/register-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: u.slug, site: u.site, engine, registered: true }),
      })
    ))
  }

  const saveDirectUrl = async () => {
    if (!directSlug.trim()) return
    setDirectSaving(true)
    let slug = directSlug.trim()
    try {
      const u = new URL(slug)
      slug = u.pathname.replace(/\/+$/, '') || '/'
    } catch {}
    const now = new Date().toISOString()
    setRegisteredUrls(prev => {
      const exists = prev.find(r => r.slug === slug && r.site === directSite)
      if (exists) return prev.map(r => r.slug === slug && r.site === directSite ? { ...r, naver: true } : r)
      return [{ slug, site: directSite, title: null, views: 0, url: slug, naver: true, daum: false, google: false, bing: false }, ...prev]
    })
    fetch('/api/analytics/register-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, site: directSite, engine: 'naver', registered: true }),
    })
    setDirectSlug('')
    setDirectSaving(false)
  }

  useEffect(() => {
    if (activeTab === 'urlmgmt') loadRegisteredUrls()
    if (activeTab === 'allurls') loadAllUrls()
  }, [activeTab, loadRegisteredUrls, loadAllUrls])

  useEffect(() => {
    if (activeTab === 'urlmgmt') loadRegisteredUrls()
  }, [urlSiteFilter])

  function applyPreset(days) {
    setPreset(days)
    if (days === 0) { setFrom(today()); setTo(today()) }
    else if (days === -1) { setFrom(yesterday()); setTo(yesterday()) }
    else { setFrom(daysAgo(days)); setTo(today()) }
  }

  const s = data?.summary || {}
  const maxSrc = data ? Math.max(...(data.by_source.map(r => r.count)), 1) : 1
  const filteredKeywords = (data?.by_keyword || []).filter(k => !kwSearch || k.keyword.includes(kwSearch))
  const filteredPages = (data?.by_page || []).filter(p => !pageSearch || p.slug.includes(pageSearch) || p.title?.includes(pageSearch))
  const currentHost = SITE_HOST[siteFilter] || 'health.ambitstock.com'

  const TABS = [
    { key: 'overview', label: '📊 개요' },
    { key: 'keywords', label: '🔑 키워드' },
    { key: 'pages',    label: '📄 랜딩 페이지' },
    { key: 'trend',    label: '📈 일별 트렌드' },
    { key: 'timeline', label: '⏰ 시간대별' },
    { key: 'urlmgmt',  label: '🔗 URL관리' },
    { key: 'allurls',  label: '🌐 전체URL' },
  ]

  return (
    <>
      <Head>
        <title>검색유입 분석 | ambitstock 통합</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" rel="stylesheet" />
      </Head>

      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px',
        fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif",
        color: '#1a1a2e', background: '#f8f9fa', minHeight: '100vh',
      }}>

        {/* 헤더 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 4px' }}>검색유입 분석</h1>
            <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>
              {siteFilter === 'all' ? '전체 사이트' : currentHost} · Supabase 통합 (pageview_events)
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <select value={siteFilter} onChange={e => setSiteFilter(e.target.value)} style={{
              padding: '8px 12px', borderRadius: 8, border: '1px solid #e5e7eb',
              background: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#374151',
            }}>
              <option value="all">🌐 전체</option>
              <option value="health">🩺 health</option>
              <option value="insurance">🛡️ insurance</option>
              <option value="movie">🎬 movie</option>
              <option value="finance">💰 finance</option>
              <option value="travel">✈️ travel</option>
              <option value="dinner">🍽️ dinner</option>
            </select>
            <button onClick={loadStats} disabled={loading} style={{
              padding: '8px 16px', borderRadius: 8, border: 'none',
              background: '#2c5fff', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}>{loading ? '⏳ 로딩...' : '🔄 새로고침'}</button>
            <button onClick={() => setHideBot(v => !v)} style={{
              padding: '8px 14px', borderRadius: 8, border: hideBot ? '2px solid #ef4444' : '1px solid #e5e7eb',
              background: hideBot ? '#fef2f2' : '#fff', color: hideBot ? '#ef4444' : '#374151',
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}>{hideBot ? '🤖 봇 제외 중' : '🤖 봇 포함'}</button>
            <button onClick={runDiag} disabled={diagLoading} style={{
              padding: '8px 14px', borderRadius: 8, border: '1px solid #e5e7eb',
              background: '#fff', color: '#374151', fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}>{diagLoading ? '⏳' : '🔧 연결 진단'}</button>
          </div>
        </div>

        {/* 진단 결과 */}
        {diagResult && (
          <div style={{
            background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10,
            padding: '14px 18px', marginBottom: 16, fontSize: 12, fontFamily: 'monospace',
          }}>
            <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13, fontFamily: 'inherit' }}>🔧 연결 진단 결과</div>
            <div>ENV URL: <strong style={{ color: diagResult.env?.hasUrl ? '#10b981' : '#ef4444' }}>{diagResult.env?.hasUrl ? '✅ 설정됨' : '❌ 없음'}</strong> ({diagResult.env?.urlPrefix}...)</div>
            <div>ENV KEY: <strong style={{ color: diagResult.env?.hasKey ? '#10b981' : '#ef4444' }}>{diagResult.env?.hasKey ? '✅ 설정됨' : '❌ 없음'}</strong> {diagResult.env?.keyType && <span style={{ color: diagResult.env.keyType.includes('publishable') ? '#f59e0b' : '#10b981', fontWeight: 700 }}>[{diagResult.env.keyType}]</span>}</div>
            <div>INSERT:  <strong style={{ color: diagResult.insert?.ok ? '#10b981' : '#ef4444' }}>{diagResult.insert?.ok ? '✅ 성공' : `❌ 실패 — ${JSON.stringify(diagResult.insert?.error)}`}</strong></div>
            <div>SELECT:  <strong style={{ color: diagResult.select?.ok ? '#10b981' : '#ef4444' }}>{diagResult.select?.ok ? `✅ 성공 (${diagResult.select?.rowCount}행)` : `❌ 실패 — ${JSON.stringify(diagResult.select?.error)}`}</strong></div>
          </div>
        )}

        {/* 필터 바 */}
        <div style={{ ...card, padding: '14px 20px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {PRESETS.map(p => (
              <button key={p.days} onClick={() => applyPreset(p.days)} style={{
                padding: '5px 12px', borderRadius: 6, fontSize: 12, cursor: 'pointer',
                border: preset === p.days ? '2px solid #2c5fff' : '1px solid #e5e7eb',
                background: preset === p.days ? '#2c5fff' : '#fff',
                color: preset === p.days ? '#fff' : '#374151', fontWeight: preset === p.days ? 700 : 400,
              }}>{p.label}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <input type="date" value={from} onChange={e => { setFrom(e.target.value); setPreset(null) }}
              style={{ padding: '5px 8px', borderRadius: 6, border: '1px solid #e5e7eb', fontSize: 12 }} />
            <span style={{ fontSize: 11, color: '#9ca3af' }}>~</span>
            <input type="date" value={to} onChange={e => { setTo(e.target.value); setPreset(null) }}
              style={{ padding: '5px 8px', borderRadius: 6, border: '1px solid #e5e7eb', fontSize: 12 }} />
          </div>
          <select value={srcFilter} onChange={e => setSrcFilter(e.target.value)} style={{
            padding: '5px 10px', borderRadius: 6, border: '1px solid #e5e7eb', fontSize: 12,
            background: '#fff', cursor: 'pointer', color: '#374151',
          }}>
            <option value="all">전체 소스</option>
            {Object.entries(SOURCE_META).map(([k, v]) => (
              <option key={k} value={k}>{v.icon} {v.label}</option>
            ))}
          </select>
        </div>

        {/* 오류 */}
        {error && (
          <div style={{ ...card, background: '#fef2f2', border: '1px solid #fecaca', padding: '14px 20px', color: '#dc2626', fontSize: 13 }}>
            ❌ {error === 'Supabase not configured'
              ? 'Supabase 환경변수가 설정되지 않았습니다. Vercel에 SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY를 추가하세요.'
              : error}
          </div>
        )}

        {/* KPI 카드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, marginBottom: 16 }}>
          <KpiCard label="총 페이지뷰" value={s.total?.toLocaleString()} color="#2c5fff" />
          <KpiCard label="검색 유입" value={s.search?.toLocaleString()} sub={s.total > 0 ? `전체의 ${(s.search/s.total*100).toFixed(0)}%` : ''} color="#10b981" />
          <KpiCard label="직접 접속" value={s.direct?.toLocaleString()} color="#6b7280" />
          <KpiCard label="수집 키워드" value={s.unique_keywords?.toLocaleString()} sub="Google 제외" color="#f59e0b" />
          <KpiCard label="유입 페이지" value={s.unique_pages?.toLocaleString()} color="#8b5cf6" />
          <KpiCard label="고유 세션" value={s.unique_sessions?.toLocaleString()} sub="IP+UA 기반" color="#0891b2" />
          {data?.by_device && (() => {
            const mob = data.by_device.find(d => d.device === 'mobile')
            const desk = data.by_device.find(d => d.device === 'desktop')
            return <KpiCard label="모바일 비율" value={mob ? mob.pct + '%' : '—'} sub={desk ? `PC ${desk.pct}%` : ''} color="#f97316" />
          })()}
        </div>

        {/* 탭 */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid #e5e7eb', marginBottom: 16, overflowX: 'auto' }}>
          {TABS.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              padding: '10px 18px', fontSize: 13, fontWeight: activeTab === tab.key ? 700 : 400,
              border: 'none', borderBottom: activeTab === tab.key ? '2px solid #2c5fff' : '2px solid transparent',
              marginBottom: -2, background: 'transparent', cursor: 'pointer',
              color: activeTab === tab.key ? '#2c5fff' : '#6b7280', whiteSpace: 'nowrap',
            }}>{tab.label}</button>
          ))}
        </div>

        {/* ══ 개요 ══ */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={card}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>검색엔진별 유입</h2>
              {data?.by_source.length ? (
                data.by_source.map(r => (
                  <HBar key={r.source} label={r.source} value={r.count} max={maxSrc} count={r.count} />
                ))
              ) : <p style={{ color: '#9ca3af', fontSize: 13 }}>데이터 없음</p>}
            </div>

            <div style={card}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>유입 유형 분포</h2>
              {data && (
                <>
                  {[
                    { label: '검색 유입', value: s.search, color: '#2c5fff' },
                    { label: '직접 접속', value: s.direct, color: '#6b7280' },
                    { label: '내부 이동', value: s.internal, color: '#8b5cf6' },
                    { label: '기타 외부', value: s.other, color: '#9ca3af' },
                  ].map(r => (
                    <div key={r.label} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                        <span style={{ fontWeight: 500 }}>{r.label}</span>
                        <span style={{ fontWeight: 700 }}>{r.value?.toLocaleString() || 0}
                          <span style={{ fontWeight: 400, opacity: 0.4, fontSize: 10, marginLeft: 4 }}>
                            ({s.total > 0 ? (r.value/s.total*100).toFixed(0) : 0}%)
                          </span>
                        </span>
                      </div>
                      <div style={{ height: 10, background: '#f1f3f5', borderRadius: 5, overflow: 'hidden' }}>
                        <div style={{
                          width: s.total > 0 ? (r.value/s.total*100) + '%' : '0%',
                          height: '100%', background: r.color, borderRadius: 5, transition: 'width 0.5s ease',
                        }} />
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, padding: '10px 14px', borderRadius: 8, background: '#fffbeb', border: '1px solid #fde68a', fontSize: 12, color: '#92400e', lineHeight: 1.6 }}>
                    💡 Google은 HTTPS 보호로 인해 대부분 키워드가 수집되지 않습니다. Naver, Bing, Daum 키워드는 정상 수집됩니다.
                  </div>
                </>
              )}
            </div>

            {/* 사이트별 유입 */}
            {siteFilter === 'all' && data?.by_site?.length > 0 && (
              <div style={{ ...card, gridColumn: '1 / -1' }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>사이트별 유입</h2>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <div style={{ flex: '1 1 400px', minWidth: 0 }}>
                    {(() => {
                      const maxSite = Math.max(...data.by_site.map(s => s.total), 1)
                      return data.by_site.map(s => {
                        const m = SITE_META[s.site] || SITE_META.unknown
                        const pct = (s.total / maxSite * 100)
                        return (
                          <div key={s.site} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                            <span style={{ width: 110, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                              {m.icon} {m.label}
                            </span>
                            <div style={{ flex: 1, height: 22, background: '#f1f3f5', borderRadius: 5, overflow: 'hidden' }}>
                              <div style={{ width: pct + '%', height: '100%', background: m.color, borderRadius: 5, transition: 'width 0.5s ease', minWidth: s.total > 0 ? 4 : 0 }} />
                            </div>
                            <span style={{ width: 140, fontSize: 12, textAlign: 'right', flexShrink: 0 }}>
                              <strong>{s.total.toLocaleString()}</strong>
                              <span style={{ opacity: 0.5, fontSize: 10, marginLeft: 4 }}>({s.pct}%)</span>
                              <span style={{ fontSize: 10, color: '#10b981', marginLeft: 6 }}>검색 {s.search}</span>
                            </span>
                          </div>
                        )
                      })
                    })()}
                  </div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flex: '0 0 auto' }}>
                    {data.by_site.map(s => {
                      const m = SITE_META[s.site] || SITE_META.unknown
                      return (
                        <div key={s.site} style={{
                          background: m.color + '10', border: '1px solid ' + m.color + '30',
                          borderRadius: 10, padding: '14px 20px', textAlign: 'center', minWidth: 90,
                        }}>
                          <div style={{ fontSize: 22, marginBottom: 2 }}>{m.icon}</div>
                          <div style={{ fontSize: 18, fontWeight: 900, color: m.color }}>{s.pct}%</div>
                          <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{m.label}</div>
                          <div style={{ fontSize: 10, color: '#9ca3af' }}>{s.total.toLocaleString()}건</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 디바이스 */}
            <div style={{ ...card, gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>디바이스 분포</h2>
              {data?.by_device?.length ? (() => {
                const DEVICE_META = {
                  mobile:  { label: '모바일', icon: '📱', color: '#2c5fff' },
                  desktop: { label: 'PC/데스크톱', icon: '🖥️', color: '#10b981' },
                  tablet:  { label: '태블릿', icon: '📟', color: '#f59e0b' },
                  bot:     { label: '봇/크롤러', icon: '🤖', color: '#9ca3af' },
                  unknown: { label: '알 수 없음', icon: '❓', color: '#d1d5db' },
                }
                const maxDev = Math.max(...data.by_device.map(d => d.count), 1)
                return (
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 340px', minWidth: 0 }}>
                      {data.by_device.map(d => {
                        const m = DEVICE_META[d.device] || DEVICE_META.unknown
                        const pct = (d.count / maxDev * 100)
                        return (
                          <div key={d.device} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                            <span style={{ width: 120, fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                              <span>{m.icon}</span>{m.label}
                            </span>
                            <div style={{ flex: 1, height: 22, background: '#f1f3f5', borderRadius: 5, overflow: 'hidden' }}>
                              <div style={{ width: pct + '%', height: '100%', background: m.color, borderRadius: 5, transition: 'width 0.5s ease', minWidth: d.count > 0 ? 4 : 0 }} />
                            </div>
                            <span style={{ width: 90, fontSize: 12, textAlign: 'right', flexShrink: 0 }}>
                              <strong>{d.count.toLocaleString()}</strong>
                              <span style={{ opacity: 0.5, fontSize: 10, marginLeft: 4 }}>({d.pct}%)</span>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flex: '0 0 auto' }}>
                      {data.by_device.filter(d => d.device !== 'bot' && d.device !== 'unknown').map(d => {
                        const m = DEVICE_META[d.device] || DEVICE_META.unknown
                        return (
                          <div key={d.device} style={{
                            background: m.color + '10', border: '1px solid ' + m.color + '30',
                            borderRadius: 10, padding: '14px 20px', textAlign: 'center', minWidth: 100,
                          }}>
                            <div style={{ fontSize: 24, marginBottom: 2 }}>{m.icon}</div>
                            <div style={{ fontSize: 20, fontWeight: 900, color: m.color }}>{d.pct}%</div>
                            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{m.label}</div>
                            <div style={{ fontSize: 10, color: '#9ca3af' }}>{d.count.toLocaleString()}건</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })() : <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 20 }}>디바이스 데이터 없음 (신규 수집 후 표시됩니다)</p>}
            </div>

            {/* 상위 랜딩 페이지 */}
            <div style={{ ...card, gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>상위 랜딩 페이지 (검색 유입 기준)</h2>
              {data?.by_page.length ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>
                        <th style={th}>#</th>
                        {siteFilter === 'all' && <th style={th}>사이트</th>}
                        <th style={th}>페이지</th>
                        <th style={{ ...th, textAlign: 'right' }}>전체</th>
                        <th style={{ ...th, textAlign: 'right' }}>검색</th>
                        <th style={{ ...th, textAlign: 'right' }}>키워드</th>
                        <th style={th}>소스</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.by_page.slice(0, 15).map((p, i) => (
                        <tr key={p.slug} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td style={{ ...td, color: '#9ca3af', width: 30 }}>{i + 1}</td>
                          {siteFilter === 'all' && <td style={td}><SiteBadge site={p.site} /></td>}
                          <td style={td}>
                            <a href={'/' + p.slug + '/'} target="_blank" rel="noopener"
                              style={{ color: '#2c5fff', textDecoration: 'none', fontSize: 12, fontWeight: 500 }}>
                              {p.title ? (p.title.length > 50 ? p.title.slice(0, 50) + '…' : p.title) : p.slug}
                            </a>
                            <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>{p.slug}</div>
                          </td>
                          <td style={tdR}>{p.views}</td>
                          <td style={{ ...tdR, fontWeight: 700, color: '#2c5fff' }}>{p.search_views}</td>
                          <td style={tdR}>{p.keyword_count}</td>
                          <td style={td}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                              {Object.entries(p.sources).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([src, cnt]) => (
                                <SourceBadge key={src} source={src} count={cnt} />
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 20 }}>데이터 없음</p>}
            </div>
          </div>
        )}

        {/* ══ 키워드 ══ */}
        {activeTab === 'keywords' && (
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>
                유입 키워드 분석
                {data && <span style={{ fontSize: 12, fontWeight: 400, color: '#9ca3af', marginLeft: 8 }}>총 {data.by_keyword.length}개 키워드</span>}
              </h2>
              <input value={kwSearch} onChange={e => setKwSearch(e.target.value)} placeholder="키워드 검색..."
                style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 13, width: 200 }} />
            </div>

            <div style={{ padding: '10px 14px', borderRadius: 8, background: '#fffbeb', border: '1px solid #fde68a', fontSize: 12, color: '#92400e', marginBottom: 16, lineHeight: 1.6 }}>
              💡 <strong>Google 키워드는 수집 불가</strong>합니다 (HTTPS 암호화). Naver 검색의 경우 <code>search.naver.com/?query=키워드</code> 형태로 전달되어 정상 수집됩니다.
            </div>

            {filteredKeywords.length ? (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr>
                      <th style={th}>#</th>
                      <th style={th}>검색 키워드</th>
                      <th style={th}>검색엔진</th>
                      {siteFilter === 'all' && <th style={th}>사이트</th>}
                      <th style={{ ...th, textAlign: 'right' }}>유입수</th>
                      <th style={th}>유입 페이지 (최대 5)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredKeywords.slice(0, 200).map((k, i) => {
                      const m = SOURCE_META[k.source] || SOURCE_META.unknown
                      return (
                        <tr key={k.keyword + k.source} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td style={{ ...td, color: '#9ca3af', width: 30 }}>{i + 1}</td>
                          <td style={td}><span style={{ fontWeight: 600 }}>{k.keyword}</span></td>
                          <td style={td}>
                            <span style={{
                              fontSize: 11, padding: '2px 8px', borderRadius: 4,
                              background: m.color + '20', color: m.color, fontWeight: 700,
                            }}>{m.icon} {m.label}</span>
                          </td>
                          {siteFilter === 'all' && <td style={td}><SiteBadge site={k.site} /></td>}
                          <td style={{ ...tdR, fontWeight: 700, color: '#2c5fff' }}>{k.count}</td>
                          <td style={td}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                              {k.pages.map(slug => (
                                <a key={slug} href={'/' + slug + '/'} target="_blank" rel="noopener"
                                  style={{ fontSize: 11, color: '#2c5fff', textDecoration: 'none' }}>/{slug}/</a>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>
                {kwSearch ? `"${kwSearch}"에 해당하는 키워드가 없습니다.` : '해당 기간에 수집된 키워드가 없습니다.'}
              </p>
            )}
          </div>
        )}

        {/* ══ 랜딩 페이지 ══ */}
        {activeTab === 'pages' && (
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>
                랜딩 페이지 분석
                {data && <span style={{ fontSize: 12, fontWeight: 400, color: '#9ca3af', marginLeft: 8 }}>{data.by_page.length}개 페이지</span>}
              </h2>
              <input value={pageSearch} onChange={e => setPageSearch(e.target.value)} placeholder="슬러그 또는 제목 검색..."
                style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 13, width: 220 }} />
            </div>

            {filteredPages.length ? (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr>
                      <th style={th}>#</th>
                      {siteFilter === 'all' && <th style={th}>사이트</th>}
                      <th style={th}>페이지</th>
                      <th style={{ ...th, textAlign: 'right' }}>전체 뷰</th>
                      <th style={{ ...th, textAlign: 'right' }}>검색 유입</th>
                      <th style={{ ...th, textAlign: 'right' }}>키워드 수</th>
                      <th style={th}>소스별 분포</th>
                      <th style={th}>검색 비율</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPages.map((p, i) => {
                      const searchPct = p.views > 0 ? (p.search_views / p.views * 100) : 0
                      return (
                        <tr key={p.slug} style={{ borderBottom: '1px solid #f9fafb' }}>
                          <td style={{ ...td, color: '#9ca3af', width: 30 }}>{i + 1}</td>
                          {siteFilter === 'all' && <td style={td}><SiteBadge site={p.site} /></td>}
                          <td style={td}>
                            <a href={'/' + p.slug + '/'} target="_blank" rel="noopener"
                              style={{ color: '#2c5fff', textDecoration: 'none', fontWeight: 500, fontSize: 12 }}>
                              {p.title ? (p.title.length > 45 ? p.title.slice(0, 45) + '…' : p.title) : p.slug}
                            </a>
                            <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>/{p.slug}/</div>
                          </td>
                          <td style={tdR}>{p.views}</td>
                          <td style={{ ...tdR, fontWeight: 700, color: '#10b981' }}>{p.search_views}</td>
                          <td style={{ ...tdR, color: '#f59e0b' }}>{p.keyword_count}</td>
                          <td style={td}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                              {Object.entries(p.sources).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([src, cnt]) => (
                                <SourceBadge key={src} source={src} count={cnt} />
                              ))}
                            </div>
                          </td>
                          <td style={td}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              <div style={{ flex: 1, height: 6, background: '#f1f3f5', borderRadius: 3, overflow: 'hidden', minWidth: 60 }}>
                                <div style={{ width: searchPct + '%', height: '100%', background: '#10b981', borderRadius: 3 }} />
                              </div>
                              <span style={{ fontSize: 11, fontWeight: 600, color: '#10b981', width: 36, textAlign: 'right' }}>
                                {searchPct.toFixed(0)}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ) : <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>데이터 없음</p>}

            {filteredPages.length > 0 && (
              <div style={{ ...card, marginTop: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>
                    URL 목록
                    <span style={{ fontSize: 11, fontWeight: 400, color: '#9ca3af', marginLeft: 8 }}>{filteredPages.length}개 · 엔터 구분</span>
                  </h2>
                  <button
                    onClick={() => handleCopy(filteredPages.map(p => `https://${SITE_HOST[p.site] || currentHost}/${p.slug}/`).join('\n'))}
                    style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #e5e7eb', background: '#fff', fontSize: 12, cursor: 'pointer', fontWeight: 600, color: '#374151' }}
                  >📋 복사</button>
                </div>
                <textarea readOnly
                  value={filteredPages.map(p => `https://${SITE_HOST[p.site] || currentHost}/${p.slug}/`).join('\n')}
                  style={{ width: '100%', height: 180, fontFamily: 'monospace', fontSize: 11, padding: '8px 10px', borderRadius: 8, border: '1px solid #e5e7eb', resize: 'vertical', color: '#374151', background: '#f9fafb', boxSizing: 'border-box' }}
                />
              </div>
            )}
          </div>
        )}

        {/* ══ 일별 트렌드 ══ */}
        {activeTab === 'trend' && (
          <>
            <div style={{ ...card, paddingBottom: 24 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>일별 유입 추이</h2>
              <div style={{ display: 'flex', gap: 16, fontSize: 11, marginBottom: 12 }}>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#2c5fff', borderRadius: 2, marginRight: 4 }} />검색 유입</span>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#e5e7eb', borderRadius: 2, marginRight: 4 }} />기타 유입</span>
              </div>
              <DailyChart byDate={data?.by_date} />
              {data?.by_date?.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9ca3af', marginTop: 4, padding: '0 4px' }}>
                  <span>{data.by_date[0]?.date}</span>
                  <span>{data.by_date[data.by_date.length - 1]?.date}</span>
                </div>
              )}
            </div>

            <div style={card}>
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>날짜별 상세</h2>
              {data?.by_date?.length ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>
                        <th style={th}>날짜</th>
                        <th style={{ ...th, textAlign: 'right' }}>전체</th>
                        <th style={{ ...th, textAlign: 'right' }}>검색</th>
                        <th style={{ ...th, textAlign: 'right' }}>검색 비율</th>
                        {SEARCH_SOURCES.map(src => (
                          <th key={src} style={{ ...th, textAlign: 'right' }}>{SOURCE_META[src].icon}</th>
                        ))}
                        <th style={{ ...th, textAlign: 'right' }}>직접</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...data.by_date].reverse().map(d => {
                        const search = SEARCH_SOURCES.reduce((acc, s) => acc + (d.by_source[s] || 0), 0)
                        const pct = d.total > 0 ? (search / d.total * 100) : 0
                        return (
                          <tr key={d.date} style={{ borderBottom: '1px solid #f9fafb' }}>
                            <td style={{ ...td, fontWeight: 600 }}>{d.date}</td>
                            <td style={tdR}>{d.total}</td>
                            <td style={{ ...tdR, fontWeight: 700, color: '#2c5fff' }}>{search}</td>
                            <td style={{ ...tdR, color: pct > 60 ? '#10b981' : '#6b7280' }}>{pct.toFixed(0)}%</td>
                            {SEARCH_SOURCES.map(src => (
                              <td key={src} style={{ ...tdR, fontSize: 12, color: SOURCE_META[src].color }}>{d.by_source[src] || 0}</td>
                            ))}
                            <td style={{ ...tdR, color: '#6b7280' }}>{d.by_source.direct || 0}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>데이터 없음</p>}
            </div>
          </>
        )}

        {/* ══ 시간대별 ══ */}
        {activeTab === 'timeline' && (
          <>
            {tlLoading && (
              <div style={{ ...card, textAlign: 'center', color: '#9ca3af', padding: 40 }}>⏳ 로딩 중...</div>
            )}
            {!tlLoading && tlData && (
              <>
                <div style={{ ...card, paddingBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>시간대별 유입 분포 (KST)</h2>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>
                        {from === to ? `${from} 하루` : `${from} ~ ${to} 기간 합계`} · 각 시간대별 건수 (누적 아님)
                      </div>
                    </div>
                    <span style={{ fontSize: 12, color: '#9ca3af' }}>총 {tlData.total.toLocaleString()}건</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 120 }}>
                    {tlData.by_hour.map(h => {
                      const maxH = Math.max(...tlData.by_hour.map(x => x.total), 1)
                      const totalPx = Math.round((h.total / maxH) * 112)
                      const searchPx = h.total > 0 ? Math.round((h.search / h.total) * totalPx) : 0
                      const otherPx = totalPx - searchPx
                      const isNow = new Date(new Date().getTime() + 9 * 3600000).getUTCHours() === h.hour
                      return (
                        <div key={h.hour} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, cursor: 'default', minWidth: 0 }}
                          title={`${h.hour}시\n총 ${h.total} / 검색 ${h.search}`}>
                          <div style={{ width: '100%', height: otherPx, background: isNow ? '#fbbf24' : '#e5e7eb', borderRadius: '3px 3px 0 0', transition: 'height 0.3s' }} />
                          <div style={{ width: '100%', height: searchPx, background: isNow ? '#f59e0b' : '#2c5fff', transition: 'height 0.3s' }} />
                        </div>
                      )
                    })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#9ca3af', marginTop: 4, padding: '0 1px' }}>
                    {[0,3,6,9,12,15,18,21,23].map(h => (<span key={h}>{h}시</span>))}
                  </div>
                  <div style={{ display: 'flex', gap: 16, fontSize: 11, marginTop: 12 }}>
                    <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#2c5fff', borderRadius: 2, marginRight: 4 }} />검색 유입</span>
                    <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#e5e7eb', borderRadius: 2, marginRight: 4 }} />기타 유입</span>
                    <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#fbbf24', borderRadius: 2, marginRight: 4 }} />현재 시간</span>
                  </div>
                  <div style={{ overflowX: 'auto', marginTop: 16 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                      <thead>
                        <tr>
                          <th style={th}>시간 (KST)</th>
                          <th style={{ ...th, textAlign: 'right' }}>전체</th>
                          <th style={{ ...th, textAlign: 'right' }}>검색</th>
                          {SEARCH_SOURCES.map(s => (
                            <th key={s} style={{ ...th, textAlign: 'right' }}>{SOURCE_META[s].icon}</th>
                          ))}
                          <th style={{ ...th, textAlign: 'right' }}>직접</th>
                          <th style={{ ...th, textAlign: 'right' }}>📱</th>
                          <th style={{ ...th, textAlign: 'right' }}>🖥️</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tlData.by_hour.filter(h => h.total > 0).map(h => {
                          const isNow = new Date(new Date().getTime() + 9 * 3600000).getUTCHours() === h.hour
                          return (
                            <tr key={h.hour} style={{ borderBottom: '1px solid #f9fafb', background: isNow ? '#fffbeb' : 'transparent' }}>
                              <td style={{ ...td, fontWeight: isNow ? 700 : 400 }}>
                                {String(h.hour).padStart(2, '0')}:00{isNow ? ' ← 현재' : ''}
                              </td>
                              <td style={tdR}>{h.total}</td>
                              <td style={{ ...tdR, fontWeight: 700, color: '#2c5fff' }}>{h.search}</td>
                              {SEARCH_SOURCES.map(s => (
                                <td key={s} style={{ ...tdR, fontSize: 11, color: SOURCE_META[s].color }}>{h.by_source[s] || 0}</td>
                              ))}
                              <td style={{ ...tdR, color: '#6b7280' }}>{h.by_source.direct || 0}</td>
                              <td style={{ ...tdR, fontSize: 11, color: '#f97316' }}>{h.mobile || 0}</td>
                              <td style={{ ...tdR, fontSize: 11, color: '#10b981' }}>{h.desktop || 0}</td>
                            </tr>
                          )
                        })}
                        {tlData.by_hour.every(h => h.total === 0) && (
                          <tr><td colSpan={9} style={{ ...td, textAlign: 'center', color: '#9ca3af', padding: 24 }}>해당 기간에 데이터 없음</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style={card}>
                  <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>
                    최근 유입 이벤트
                    <span style={{ fontSize: 12, fontWeight: 400, color: '#9ca3af', marginLeft: 8 }}>최대 200건 · 최신순</span>
                  </h2>
                  {tlData.recent.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                        <thead>
                          <tr>
                            <th style={th}>시각 (KST)</th>
                            <th style={th}>디바이스</th>
                            {siteFilter === 'all' && <th style={th}>사이트</th>}
                            <th style={th}>소스</th>
                            <th style={th}>페이지</th>
                            <th style={th}>키워드</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tlData.recent.map((ev, i) => {
                            const m = SOURCE_META[ev.source] || SOURCE_META.unknown
                            const isSearch = SEARCH_SOURCES.includes(ev.source)
                            return (
                              <tr key={i} style={{ borderBottom: '1px solid #f9fafb' }}>
                                <td style={{ ...td, fontFamily: 'monospace', fontSize: 11, color: '#6b7280', whiteSpace: 'nowrap' }}>{ev.time}</td>
                                <td style={{ ...td, textAlign: 'center', fontSize: 14 }}>
                                  {ev.device === 'mobile' ? '📱' : ev.device === 'desktop' ? '🖥️' : ev.device === 'tablet' ? '📟' : ev.device === 'bot' ? '🤖' : '—'}
                                </td>
                                {siteFilter === 'all' && <td style={td}><SiteBadge site={ev.site} /></td>}
                                <td style={td}>
                                  <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 3,
                                    fontSize: 11, padding: '2px 7px', borderRadius: 4,
                                    background: m.color + '20', color: m.color, fontWeight: 700,
                                  }}>{m.icon} {m.label}</span>
                                </td>
                                <td style={td}>
                                  <a href={'/' + ev.slug + '/'} target="_blank" rel="noopener"
                                    style={{ color: '#2c5fff', textDecoration: 'none', fontSize: 11 }}>
                                    {ev.title ? (ev.title.length > 40 ? ev.title.slice(0, 40) + '…' : ev.title) : ev.slug}
                                  </a>
                                </td>
                                <td style={{ ...td, color: isSearch && ev.keyword ? '#10b981' : '#9ca3af', fontWeight: ev.keyword ? 600 : 400 }}>
                                  {ev.keyword || '—'}
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>해당 기간에 이벤트 없음</p>}
                </div>
              </>
            )}
          </>
        )}

        {/* ══ URL 관리 ══ */}
        {activeTab === 'urlmgmt' && (
          <div>
            {/* 사이트 필터 + 직접 등록 */}
            <div style={{ ...card, padding: '14px 20px', marginBottom: 0 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#6b7280' }}>사이트:</span>
                {['all', ...Object.keys(SITE_META).filter(k => k !== 'unknown')].map(k => {
                  const m = k === 'all' ? { label: '전체', icon: '🌐', color: '#2c5fff' } : SITE_META[k]
                  const active = urlSiteFilter === k
                  return (
                    <button key={k} onClick={() => setUrlSiteFilter(k)} style={{
                      padding: '4px 10px', borderRadius: 6, fontSize: 12, cursor: 'pointer',
                      border: active ? `2px solid ${m.color}` : '1px solid #e5e7eb',
                      background: active ? m.color : '#fff',
                      color: active ? '#fff' : '#374151', fontWeight: active ? 700 : 400,
                    }}>{`${m.icon} ${k === 'all' ? '전체' : m.label}`}</button>
                  )
                })}
                <button onClick={loadRegisteredUrls} disabled={urlLoading} style={{
                  marginLeft: 'auto', padding: '4px 12px', borderRadius: 6, border: 'none',
                  background: '#2c5fff', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>{urlLoading ? '⏳' : '🔄 새로고침'}</button>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-end' }}>
                <div style={{ flex: '1 1 140px' }}>
                  <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>사이트</div>
                  <select value={directSite} onChange={e => setDirectSite(e.target.value)} style={{
                    width: '100%', padding: '7px 10px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 13, background: '#fff',
                  }}>
                    {Object.entries(SITE_META).filter(([k]) => k !== 'unknown').map(([k, v]) => (
                      <option key={k} value={k}>{v.icon} {v.label}</option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: '3 1 260px' }}>
                  <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 4 }}>URL 직접 입력 (슬러그 또는 전체 URL)</div>
                  <input
                    value={directSlug}
                    onChange={e => setDirectSlug(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveDirectUrl()}
                    placeholder="https://... 또는 /slug/path"
                    style={{ width: '100%', padding: '7px 10px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 13, boxSizing: 'border-box' }}
                  />
                </div>
                <button onClick={saveDirectUrl} disabled={directSaving || !directSlug.trim()} style={{
                  padding: '7px 18px', borderRadius: 8, border: 'none',
                  background: directSlug.trim() ? '#10b981' : '#9ca3af', color: '#fff',
                  fontSize: 13, fontWeight: 700, cursor: directSlug.trim() ? 'pointer' : 'default', flexShrink: 0,
                }}>{directSaving ? '⏳' : '✅ 등록'}</button>
              </div>
            </div>

            {/* 조회수별 URL 목록 */}
            <div style={{ ...card, marginTop: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>
                  조회수별 URL 목록
                  {!urlLoading && <span style={{ fontSize: 12, fontWeight: 400, color: '#9ca3af', marginLeft: 8 }}>{registeredUrls.length}개</span>}
                </h2>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                  {copyMsg && <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 700 }}>{copyMsg}</span>}
                  <button
                    onClick={() => handleCopy(registeredUrls.filter(r => !r.naver).map(r => r.url).join('\n'))}
                    style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #03C75A', background: '#f0fdf4', fontSize: 12, cursor: 'pointer', fontWeight: 600, color: '#03C75A' }}
                  >📋 네이버 미등록 복사</button>
                  <button
                    onClick={() => handleCopy(registeredUrls.map(r => r.url).join('\n'))}
                    style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #e5e7eb', background: '#fff', fontSize: 12, cursor: 'pointer', fontWeight: 600, color: '#374151' }}
                  >📋 전체 복사</button>
                </div>
              </div>

              {urlLoading ? (
                <div style={{ textAlign: 'center', color: '#9ca3af', padding: 40 }}>⏳ 로딩 중...</div>
              ) : registeredUrls.length ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                    <thead>
                      <tr>
                        <th style={th}>#</th>
                        <th style={th}>사이트</th>
                        <th style={th}>URL (전체)</th>
                        <th style={{ ...th, textAlign: 'right' }}>조회수</th>
                        <th style={th}>📋</th>
                        {ENGINES.map(eng => (
                          <th key={eng} style={{ ...th, textAlign: 'center', color: ENGINE_META[eng].color }}>
                            {ENGINE_META[eng].label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {registeredUrls.map((r, i) => {
                        const anyReg = ENGINES.some(e => r[e])
                        return (
                          <tr key={`${r.site}::${r.slug}`} style={{ borderBottom: '1px solid #f9fafb', background: anyReg ? '#f0fdf420' : 'transparent' }}>
                            <td style={{ ...td, color: '#9ca3af', width: 28 }}>{i + 1}</td>
                            <td style={td}><SiteBadge site={r.site} /></td>
                            <td style={td}>
                              <a href={r.url} target="_blank" rel="noopener"
                                style={{ color: '#2c5fff', textDecoration: 'none', fontSize: 11, fontFamily: 'monospace', wordBreak: 'break-all' }}>
                                {r.url}
                              </a>
                              {r.title && <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 1 }}>{r.title}</div>}
                            </td>
                            <td style={{ ...tdR, fontWeight: 700, color: '#2c5fff' }}>{r.views.toLocaleString()}</td>
                            <td style={td}>
                              <button onClick={() => handleCopy(r.url)} title={r.url} style={{
                                padding: '3px 8px', borderRadius: 5, border: '1px solid #e5e7eb',
                                background: '#f9fafb', fontSize: 11, cursor: 'pointer', color: '#374151',
                              }}>📋</button>
                            </td>
                            {ENGINES.map(eng => {
                              const isReg = r[eng] ?? false
                              const em = ENGINE_META[eng]
                              return (
                                <td key={eng} style={{ ...td, textAlign: 'center', verticalAlign: 'middle' }}>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                                    <span style={{
                                      fontSize: 10, padding: '1px 5px', borderRadius: 3, fontWeight: 700,
                                      background: isReg ? em.color + '22' : '#f3f4f6',
                                      color: isReg ? em.color : '#9ca3af',
                                    }}>{isReg ? '✅' : '⬜'}</span>
                                    <button onClick={() => toggleRegister(r.slug, r.site, eng, isReg)} style={{
                                      padding: '2px 7px', borderRadius: 4, border: '1px solid #e5e7eb',
                                      background: isReg ? '#fef2f2' : em.color + '18',
                                      fontSize: 10, color: isReg ? '#ef4444' : em.color,
                                      cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap',
                                    }}>{isReg ? '취소' : '등록'}</button>
                                    {!isReg && (
                                      <button onClick={() => bulkRegisterUpTo(i, eng)} style={{
                                        padding: '2px 6px', borderRadius: 4,
                                        border: `1px solid ${em.color}55`,
                                        background: '#fff', fontSize: 9, color: em.color,
                                        cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap',
                                      }}>여기까지</button>
                                    )}
                                  </div>
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>
                  pageview_events에 기록된 URL이 없습니다.
                </p>
              )}
            </div>
          </div>
        )}

        {/* ══ 전체 URL ══ */}
        {activeTab === 'allurls' && (
          <div>
            <div style={{ ...card, padding: '14px 20px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>사이트:</span>
              {['all', ...Object.keys(SITE_META).filter(k => k !== 'unknown')].map(k => {
                const m = k === 'all' ? { label: '전체', icon: '🌐', color: '#2c5fff' } : SITE_META[k]
                const active = urlSiteFilter === k
                return (
                  <button key={k} onClick={() => setUrlSiteFilter(k)} style={{
                    padding: '5px 12px', borderRadius: 6, fontSize: 12, cursor: 'pointer',
                    border: active ? `2px solid ${m.color}` : '1px solid #e5e7eb',
                    background: active ? m.color : '#fff',
                    color: active ? '#fff' : '#374151', fontWeight: active ? 700 : 400,
                  }}>{`${m.icon} ${k === 'all' ? '전체' : m.label}`}</button>
                )
              })}
              <button onClick={loadAllUrls} disabled={allUrlsLoading} style={{
                marginLeft: 'auto', padding: '5px 14px', borderRadius: 6, border: 'none',
                background: '#2c5fff', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
              }}>{allUrlsLoading ? '⏳ 로딩...' : '🔄 사이트맵 파싱'}</button>
            </div>

            {allUrlsLoading ? (
              <div style={{ ...card, textAlign: 'center', color: '#9ca3af', padding: 40 }}>⏳ 사이트맵 파싱 중... (최대 30초)</div>
            ) : (() => {
              const filtered = allUrls.filter(u => urlSiteFilter === 'all' || u.site === urlSiteFilter)
              return (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: 10, marginBottom: 16, marginTop: 16 }}>
                    <KpiCard label="전체 URL" value={filtered.length.toLocaleString()} color="#2c5fff" />
                    {ENGINES.map(eng => (
                      <KpiCard key={eng} label={ENGINE_META[eng].label} value={filtered.filter(u => u[eng]).length.toLocaleString()} color={ENGINE_META[eng].color} />
                    ))}
                  </div>
                  <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                      <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>URL 목록 ({filtered.length}개)</h2>
                      <button
                        onClick={() => handleCopy(filtered.filter(u => !u.naver).map(u => u.url).join('\n'))}
                        style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #03C75A', background: '#f0fdf4', fontSize: 12, cursor: 'pointer', fontWeight: 600, color: '#03C75A' }}
                      >📋 네이버 미등록 복사</button>
                    </div>
                    {filtered.length ? (
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                          <thead>
                            <tr>
                              <th style={th}>사이트</th>
                              <th style={th}>URL (전체)</th>
                              <th style={th}>📋</th>
                              {ENGINES.map(eng => (
                                <th key={eng} style={{ ...th, textAlign: 'center', color: ENGINE_META[eng].color }}>
                                  {ENGINE_META[eng].label}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {filtered.slice(0, 500).map((u, i) => {
                              const anyReg = ENGINES.some(e => u[e])
                              return (
                                <tr key={i} style={{ borderBottom: '1px solid #f9fafb', background: anyReg ? '#f0fdf420' : 'transparent' }}>
                                  <td style={td}><SiteBadge site={u.site} /></td>
                                  <td style={td}>
                                    <a href={u.url} target="_blank" rel="noopener"
                                      style={{ color: '#2c5fff', textDecoration: 'none', fontSize: 11, fontFamily: 'monospace', wordBreak: 'break-all' }}>
                                      {u.url}
                                    </a>
                                  </td>
                                  <td style={td}>
                                    <button onClick={() => handleCopy(u.url)} title={u.url} style={{
                                      padding: '3px 8px', borderRadius: 5, border: '1px solid #e5e7eb',
                                      background: '#f9fafb', fontSize: 11, cursor: 'pointer', color: '#374151',
                                    }}>📋</button>
                                  </td>
                                  {ENGINES.map(eng => {
                                    const isReg = u[eng] ?? false
                                    const em = ENGINE_META[eng]
                                    return (
                                      <td key={eng} style={{ ...td, textAlign: 'center', verticalAlign: 'middle' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                                          <span style={{
                                            fontSize: 10, padding: '1px 5px', borderRadius: 3, fontWeight: 700,
                                            background: isReg ? em.color + '22' : '#f3f4f6',
                                            color: isReg ? em.color : '#9ca3af',
                                          }}>{isReg ? '✅' : '⬜'}</span>
                                          <button onClick={() => toggleRegister(u.slug, u.site, eng, isReg)} style={{
                                            padding: '2px 7px', borderRadius: 4, border: '1px solid #e5e7eb',
                                            background: isReg ? '#fef2f2' : em.color + '18',
                                            fontSize: 10, color: isReg ? '#ef4444' : em.color,
                                            cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap',
                                          }}>{isReg ? '취소' : '등록'}</button>
                                          {!isReg && (
                                            <button onClick={() => bulkRegisterAllUrlsUpTo(i, filtered, eng)} style={{
                                              padding: '2px 6px', borderRadius: 4,
                                              border: `1px solid ${em.color}55`,
                                              background: '#fff', fontSize: 9, color: em.color,
                                              cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap',
                                            }}>여기까지</button>
                                          )}
                                        </div>
                                      </td>
                                    )
                                  })}
                                </tr>
                              )
                            })}
                            {filtered.length > 500 && (
                              <tr><td colSpan={3 + ENGINES.length} style={{ ...td, textAlign: 'center', color: '#9ca3af', padding: 16 }}>
                                ... 총 {filtered.length}개 중 500개만 표시
                              </td></tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', padding: 30 }}>
                        {allUrls.length === 0 ? '"🔄 사이트맵 파싱" 버튼을 눌러 URL을 불러오세요.' : '해당 사이트에 URL이 없습니다.'}
                      </p>
                    )}
                  </div>
                </>
              )
            })()}
          </div>
        )}

        <p style={{ textAlign: 'center', fontSize: 11, color: '#d1d5db', marginTop: 24 }}>
          ambitstock 통합 분석 · pageview_events · noindex
        </p>
      </div>
    </>
  )
}
