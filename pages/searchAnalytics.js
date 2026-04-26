// 확장된 검색유입 분석 대시보드 (car.ambitstock.com/searchAnalytics 구조 이식)
import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

const SOURCE_META = {
  google:   { label:'Google',     color:'#4285F4', icon:'🔍' },
  naver:    { label:'Naver',      color:'#03C75A', icon:'🟢' },
  bing:     { label:'Bing',       color:'#008373', icon:'🔵' },
  daum:     { label:'Daum/Kakao', color:'#FFCD00', icon:'🟡' },
  zum:      { label:'ZUM',        color:'#FF6600', icon:'🟠' },
  yahoo:    { label:'Yahoo',      color:'#6001D2', icon:'🟣' },
  direct:   { label:'직접 접속',  color:'#6b7280', icon:'🏠' },
  internal: { label:'내부 이동',  color:'#8b5cf6', icon:'🔄' },
  other:    { label:'기타',       color:'#9ca3af', icon:'🌐' },
}

const PRESETS = [ {l:'오늘',d:1}, {l:'7일',d:7}, {l:'14일',d:14}, {l:'30일',d:30}, {l:'90일',d:90} ]

export default function SearchAnalytics() {
  const [authed, setAuthed] = useState(false)
  const [pwd, setPwd] = useState(''); const [pwIn, setPwIn] = useState(''); const [pwErr, setPwErr] = useState(false)
  const [days, setDays] = useState(7)
  const [summary, setSummary] = useState(null)
  const [engines, setEngines] = useState([])
  const [topPages, setTopPages] = useState([])
  const [topKw, setTopKw] = useState([])
  const [recent, setRecent] = useState([])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const s = sessionStorage.getItem('hm_admin_pwd')
    if (s) { setPwd(s); setAuthed(true) }
  }, [])

  const login = async (e) => {
    e.preventDefault()
    const r = await fetch(`/api/stats?type=summary&pwd=${encodeURIComponent(pwIn)}`)
    if (r.status === 401) { setPwErr(true); return }
    setPwd(pwIn); sessionStorage.setItem('hm_admin_pwd', pwIn); setAuthed(true)
  }

  const load = useCallback(async () => {
    if (!authed) return
    const p = encodeURIComponent(pwd)
    const [a,b,c,d,e] = await Promise.all([
      fetch(`/api/stats?type=summary&pwd=${p}`),
      fetch(`/api/stats?type=engines&days=${days}&pwd=${p}`),
      fetch(`/api/stats?type=top-pages&days=${days}&pwd=${p}`),
      fetch(`/api/stats?type=top-keywords&days=${days}&pwd=${p}`),
      fetch(`/api/stats?type=recent&pwd=${p}`),
    ])
    const [sum, eng, pg, kw, rec] = await Promise.all([a.json(), b.json(), c.json(), d.json(), e.json()])
    setSummary(sum); setEngines(eng||[]); setTopPages(pg||[]); setTopKw(kw||[]); setRecent(rec||[])
  }, [authed, pwd, days])

  useEffect(() => { if (authed) load() }, [authed, days, load])

  if (!authed) return (
    <>
      <Head><title>검색 분석 — 건강모아</title><meta name="robots" content="noindex" /></Head>
      <div style={{ minHeight:'100vh', background:'#f8fafb', display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
        <div style={{ background:'#fff', borderRadius:14, padding:'28px 26px', width:'100%', maxWidth:340 }}>
          <div style={{ marginBottom:18, fontSize:15, fontWeight:800 }}>🔍 검색 분석 대시보드</div>
          <form onSubmit={login}>
            <input type="password" value={pwIn} onChange={e => { setPwIn(e.target.value); setPwErr(false) }} placeholder="관리자 비밀번호" autoFocus
              style={{ width:'100%', padding:'10px 14px', fontSize:14, border:'1.5px solid ' + (pwErr?'#DC2626':'#e5e7eb'), borderRadius:10, outline:'none', boxSizing:'border-box', marginBottom:8 }} />
            {pwErr && <div style={{ fontSize:12, color:'#DC2626', marginBottom:8 }}>비밀번호가 틀렸습니다</div>}
            <button type="submit" style={{ width:'100%', padding:'10px', background:'#DC2626', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer' }}>로그인</button>
          </form>
        </div>
      </div>
    </>
  )

  const total = engines.reduce((s,e) => s + Number(e.cnt), 0) || 1
  const kpi = (label, value, color) => (
    <div style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb', textAlign:'center' }}>
      <div style={{ fontSize:28, fontWeight:900, color:color||'#DC2626', lineHeight:1 }}>{value ?? '—'}</div>
      <div style={{ fontSize:11, color:'#6b7280', fontWeight:600, marginTop:6 }}>{label}</div>
    </div>
  )

  return (
    <>
      <Head><title>검색유입 분석 — 건강모아</title><meta name="robots" content="noindex" /></Head>
      <div style={{ minHeight:'100vh', background:'#f8fafb', padding:'22px 20px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <h1 style={{ fontSize:22, fontWeight:900, marginBottom:14 }}>🔍 검색유입 분석</h1>

          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
            {PRESETS.map(p => (
              <button key={p.d} onClick={() => setDays(p.d)} style={{ padding:'5px 12px', borderRadius:20, border:'none', cursor:'pointer', fontSize:12, fontWeight:600, background: days===p.d ? '#DC2626' : '#fff', color: days===p.d ? '#fff' : '#374151' }}>{p.l}</button>
            ))}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginBottom:16 }}>
            {kpi('오늘', summary?.today, '#DC2626')}
            {kpi('어제', summary?.yesterday, '#2563EB')}
            {kpi('최근 7일', summary?.week, '#EA580C')}
            {kpi('최근 30일', summary?.month, '#7C3AED')}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:16, marginBottom:16 }}>
            <div style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb' }}>
              <div style={{ fontSize:13, fontWeight:800, marginBottom:12 }}>유입 채널 ({days}일)</div>
              {engines.map(e => {
                const m = SOURCE_META[e.search_engine] || SOURCE_META.other
                const pct = Math.round((e.cnt / total) * 100)
                return (
                  <div key={e.search_engine} style={{ marginBottom:10 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:3 }}>
                      <span style={{ fontWeight:600 }}>{m.icon} {m.label}</span>
                      <span>{e.cnt.toLocaleString()} ({pct}%)</span>
                    </div>
                    <div style={{ background:'#f3f4f6', borderRadius:4, height:7 }}>
                      <div style={{ width: pct + '%', background: m.color, height:'100%', borderRadius:4 }} />
                    </div>
                  </div>
                )
              })}
              {engines.length === 0 && <div style={{ fontSize:12, color:'#9ca3af' }}>데이터 없음</div>}
            </div>

            <div style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb' }}>
              <div style={{ fontSize:13, fontWeight:800, marginBottom:12 }}>인기 페이지 TOP15 ({days}일)</div>
              {topPages.length === 0 && <div style={{ fontSize:12, color:'#9ca3af' }}>데이터 없음</div>}
              {topPages.map((r,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7, fontSize:12 }}>
                  <span style={{ width:20, color:'#9ca3af', textAlign:'right' }}>{i+1}</span>
                  <span style={{ flex:1, color:'#374151', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>/{r.slug}</span>
                  <strong style={{ color:'#111827' }}>{r.cnt}</strong>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb', marginBottom:16 }}>
            <div style={{ fontSize:13, fontWeight:800, marginBottom:12 }}>인기 키워드 TOP15 ({days}일)</div>
            {topKw.length === 0 && <div style={{ fontSize:12, color:'#9ca3af' }}>데이터 없음</div>}
            {topKw.map((r,i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7, fontSize:12 }}>
                <span style={{ width:20, color:'#9ca3af', textAlign:'right' }}>{i+1}</span>
                <span style={{ flex:1, color:'#374151' }}>{r.keyword}</span>
                <strong>{r.cnt}</strong>
              </div>
            ))}
          </div>

          <div style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #e5e7eb', overflowX:'auto' }}>
            <div style={{ fontSize:13, fontWeight:800, marginBottom:12 }}>최근 유입 100건</div>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:12 }}>
              <thead><tr style={{ borderBottom:'1px solid #e5e7eb' }}>{['시간','페이지','키워드','채널'].map(h => <th key={h} style={{ padding:'6px 10px', textAlign:'left', color:'#6b7280', fontWeight:700, whiteSpace:'nowrap' }}>{h}</th>)}</tr></thead>
              <tbody>
                {recent.length === 0 && <tr><td colSpan={4} style={{ padding:16, color:'#9ca3af', textAlign:'center' }}>데이터 없음</td></tr>}
                {recent.map((r, i) => {
                  const m = SOURCE_META[r.search_engine] || SOURCE_META.other
                  return (
                    <tr key={i} style={{ borderBottom:'1px solid #f3f4f6' }}>
                      <td style={{ padding:'7px 10px', color:'#6b7280', whiteSpace:'nowrap' }}>{new Date(r.created_at).toLocaleString('ko-KR')}</td>
                      <td style={{ padding:'7px 10px' }}><a href={'/' + r.slug + '/'} target="_blank" rel="noreferrer" style={{ color:'#2563EB', textDecoration:'none' }}>/{r.slug}</a></td>
                      <td style={{ padding:'7px 10px', color:'#374151' }}>{r.keyword || <span style={{ color:'#d1d5db' }}>—</span>}</td>
                      <td style={{ padding:'7px 10px' }}><span style={{ fontSize:11, fontWeight:700, padding:'2px 7px', borderRadius:4, color:m.color, background: m.color+'18' }}>{m.icon} {m.label}</span></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
