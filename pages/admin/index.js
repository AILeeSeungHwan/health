import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import posts from '../../data/posts'

const CATEGORIES = ['전체', '증상', '일반의약품', '영양제', '건강식품', '상황허브', '계산기', '비교', '가이드']

const ENGINE_META = {
  google:   { label: 'Google',   color: '#4285F4' },
  naver:    { label: 'Naver',    color: '#03C75A' },
  daum:     { label: 'Daum',     color: '#FFBC00' },
  bing:     { label: 'Bing',     color: '#00809D' },
  direct:   { label: 'Direct',   color: '#6b7280' },
  internal: { label: '내부',     color: '#8B5CF6' },
  other:    { label: '기타',     color: '#d1d5db' },
}

const EMPTY_FORM = { product_name: '', category: '영양제', coupang_url: '', post_slugs: '', notes: '' }

function fmt(n) { return n == null ? '—' : Number(n).toLocaleString() }
function fmtTime(iso) {
  if (!iso) return '—'
  const d = new Date(iso); const now = new Date()
  const diff = (now - d) / 1000
  if (diff < 60) return Math.round(diff) + '초 전'
  if (diff < 3600) return Math.round(diff / 60) + '분 전'
  if (diff < 86400) return Math.round(diff / 3600) + '시간 전'
  return d.toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
}

function Card({ label, value, color }) {
  return (
    <div style={{ background:'#fff', borderRadius:12, padding:'18px 22px', flex:1, minWidth:110, borderTop:'3px solid ' + (color || '#16A34A'), boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize:12, color:'#9ca3af', fontWeight:600, marginBottom:6 }}>{label}</div>
      <div style={{ fontSize:26, fontWeight:800, color:'#111827' }}>{value}</div>
    </div>
  )
}

function EngineBar({ engines }) {
  const total = engines.reduce((s, e) => s + Number(e.cnt), 0) || 1
  return (
    <div style={{ background:'#fff', borderRadius:12, padding:'18px 22px' }}>
      <div style={{ fontSize:13, fontWeight:700, color:'#374151', marginBottom:14 }}>유입 채널</div>
      {engines.map(e => {
        const meta = ENGINE_META[e.search_engine] || ENGINE_META.other
        const pct = Math.round((e.cnt / total) * 100)
        return (
          <div key={e.search_engine} style={{ marginBottom:8 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:3 }}>
              <span style={{ fontWeight:600, color: meta.color }}>{meta.label}</span>
              <span style={{ color:'#6b7280' }}>{fmt(e.cnt)} ({pct}%)</span>
            </div>
            <div style={{ background:'#f3f4f6', borderRadius:4, height:6 }}>
              <div style={{ width: pct + '%', background: meta.color, borderRadius:4, height:'100%' }} />
            </div>
          </div>
        )
      })}
      {engines.length === 0 && <div style={{ fontSize:12, color:'#9ca3af' }}>데이터 없음</div>}
    </div>
  )
}

function TopTable({ title, rows, keyField, valField }) {
  if (!rows.length) return <div style={{ background:'#fff', borderRadius:12, padding:'18px 22px' }}><div style={{ fontSize:13, fontWeight:700, marginBottom:8 }}>{title}</div><div style={{ fontSize:12, color:'#9ca3af' }}>데이터 없음</div></div>
  const max = Math.max(...rows.map(r => Number(r[valField])))
  return (
    <div style={{ background:'#fff', borderRadius:12, padding:'18px 22px' }}>
      <div style={{ fontSize:13, fontWeight:700, color:'#374151', marginBottom:14 }}>{title}</div>
      {rows.map((r, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
          <span style={{ fontSize:11, fontWeight:700, color:'#9ca3af', width:18, textAlign:'right' }}>{i + 1}</span>
          <div style={{ flex:1, minWidth:0 }}>
            <span style={{ fontSize:12, color:'#374151', fontWeight:500 }}>{r[keyField]}</span>
            <div style={{ background:'#e5e7eb', borderRadius:3, height:4, marginTop:3 }}>
              <div style={{ width: (Number(r[valField])/max*100) + '%', background:'#DC2626', borderRadius:3, height:'100%' }} />
            </div>
          </div>
          <span style={{ fontSize:12, fontWeight:700, color:'#111827' }}>{fmt(r[valField])}</span>
        </div>
      ))}
    </div>
  )
}

function CoupangModal({ item, onClose, onSave, pwd }) {
  const [form, setForm] = useState(item ? { ...item, post_slugs: (item.post_slugs || []).join(', ') } : EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState('')
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSave = async () => {
    if (!form.product_name.trim()) { setErr('제품명을 입력하세요'); return }
    setSaving(true)
    const body = { ...form, post_slugs: form.post_slugs ? form.post_slugs.split(',').map(s => s.trim()).filter(Boolean) : [] }
    const method = item ? 'PUT' : 'POST'
    const url = item ? `/api/coupang?id=${item.id}&pwd=${encodeURIComponent(pwd)}` : `/api/coupang?pwd=${encodeURIComponent(pwd)}`
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (!res.ok) { setErr('저장 실패'); setSaving(false); return }
    onSave(); onClose()
  }

  const input = { width:'100%', padding:'9px 12px', fontSize:13, border:'1.5px solid #e5e7eb', borderRadius:8, outline:'none', boxSizing:'border-box' }

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
      <div style={{ background:'#fff', borderRadius:14, padding:26, width:'100%', maxWidth:480 }}>
        <div style={{ fontSize:17, fontWeight:800, marginBottom:18 }}>{item ? '링크 수정' : '+ 제품 추가'}</div>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          <div><label style={{ fontSize:12, fontWeight:600, display:'block', marginBottom:4 }}>제품명 *</label><input style={input} value={form.product_name} onChange={e => set('product_name', e.target.value)} placeholder="예: 비나폴로 오메가3" /></div>
          <div><label style={{ fontSize:12, fontWeight:600, display:'block', marginBottom:4 }}>카테고리</label>
            <select style={{ ...input, background:'#fff' }} value={form.category || ''} onChange={e => set('category', e.target.value)}>
              {CATEGORIES.filter(c => c !== '전체').map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div><label style={{ fontSize:12, fontWeight:600, display:'block', marginBottom:4 }}>쿠팡 파트너스 URL</label><input style={input} value={form.coupang_url || ''} onChange={e => set('coupang_url', e.target.value)} placeholder="https://link.coupang.com/a/..." /></div>
          <div><label style={{ fontSize:12, fontWeight:600, display:'block', marginBottom:4 }}>연결 포스트 slug (쉼표 구분)</label><input style={input} value={form.post_slugs || ''} onChange={e => set('post_slugs', e.target.value)} placeholder="omega-3, magnesium, headache" /></div>
          <div><label style={{ fontSize:12, fontWeight:600, display:'block', marginBottom:4 }}>메모</label><textarea style={{ ...input, height:64 }} value={form.notes || ''} onChange={e => set('notes', e.target.value)} /></div>
        </div>
        {err && <div style={{ fontSize:12, color:'#DC2626', marginTop:10 }}>{err}</div>}
        <div style={{ display:'flex', gap:10, marginTop:18, justifyContent:'flex-end' }}>
          <button onClick={onClose} style={{ padding:'9px 18px', borderRadius:8, border:'1px solid #e5e7eb', background:'#fff', cursor:'pointer' }}>취소</button>
          <button onClick={handleSave} disabled={saving} style={{ padding:'9px 22px', borderRadius:8, border:'none', background:'#16A34A', color:'#fff', fontWeight:700, cursor: saving ? 'not-allowed' : 'pointer' }}>
            {saving ? '저장 중…' : '저장'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pwd, setPwd] = useState(''); const [pwIn, setPwIn] = useState(''); const [pwErr, setPwErr] = useState(false)
  const [tab, setTab] = useState('stats')

  const [summary, setSummary] = useState(null)
  const [days, setDays] = useState(7)
  const [topPages, setTopPages] = useState([])
  const [topKw, setTopKw] = useState([])
  const [engines, setEngines] = useState([])

  const [cpList, setCpList] = useState([])
  const [cpSearch, setCpSearch] = useState('')
  const [cpCat, setCpCat] = useState('전체')
  const [showModal, setShowModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [del, setDel] = useState(null)
  const [seedMsg, setSeedMsg] = useState('')

  const postList = posts.map(p => ({ slug: p.slug, title: p.title, category: p.category, url: p.url }))

  useEffect(() => {
    if (typeof window === 'undefined') return
    const s = sessionStorage.getItem('hm_admin_pwd')
    if (s) { setPwd(s); setAuthed(true) }
  }, [])

  const login = async (e) => {
    e.preventDefault()
    const r = await fetch(`/api/stats?type=summary&pwd=${encodeURIComponent(pwIn)}`)
    if (r.status === 401) { setPwErr(true); return }
    setPwd(pwIn); sessionStorage.setItem('hm_admin_pwd', pwIn); setAuthed(true); setPwErr(false)
  }

  const loadStats = useCallback(async () => {
    if (!authed) return
    const p = encodeURIComponent(pwd)
    const [a,b,c,d] = await Promise.all([
      fetch(`/api/stats?type=summary&pwd=${p}`),
      fetch(`/api/stats?type=top-pages&days=${days}&pwd=${p}`),
      fetch(`/api/stats?type=top-keywords&days=${days}&pwd=${p}`),
      fetch(`/api/stats?type=engines&days=${days}&pwd=${p}`),
    ])
    const [sum, pg, kw, eng] = await Promise.all([a.json(), b.json(), c.json(), d.json()])
    setSummary(sum); setTopPages(Array.isArray(pg)?pg:[]); setTopKw(Array.isArray(kw)?kw:[]); setEngines(Array.isArray(eng)?eng:[])
  }, [authed, pwd, days])

  const loadCoupang = useCallback(async () => {
    if (!authed) return
    const p = encodeURIComponent(pwd)
    const catQ = cpCat !== '전체' ? `&category=${encodeURIComponent(cpCat)}` : ''
    const sQ = cpSearch ? `&search=${encodeURIComponent(cpSearch)}` : ''
    const r = await fetch(`/api/coupang?pwd=${p}${catQ}${sQ}`)
    if (r.ok) setCpList(await r.json())
  }, [authed, pwd, cpSearch, cpCat])

  useEffect(() => { if (authed && tab==='stats') loadStats() }, [authed, tab, days, loadStats])
  useEffect(() => { if (authed && tab==='coupang') loadCoupang() }, [authed, tab, cpCat, cpSearch, loadCoupang])

  const seed = async () => {
    const p = encodeURIComponent(pwd)
    setSeedMsg('시딩 중…')
    const r = await fetch(`/api/admin/seed-coupang?pwd=${p}`, { method:'POST' })
    const d = await r.json()
    setSeedMsg(d.message || d.error || '완료')
    loadCoupang()
  }

  const handleDelete = async (id) => {
    const p = encodeURIComponent(pwd)
    await fetch(`/api/coupang?id=${id}&pwd=${p}`, { method: 'DELETE' })
    setDel(null); loadCoupang()
  }

  if (!authed) return (
    <>
      <Head><title>관리자 로그인 — 건강모아</title><meta name="robots" content="noindex" /></Head>
      <div style={{ minHeight:'100vh', background:'#f8fafb', display:'flex', alignItems:'center', justifyContent:'center', padding:20 }}>
        <div style={{ background:'#fff', borderRadius:14, padding:'32px 28px', width:'100%', maxWidth:340 }}>
          <div style={{ marginBottom:22, fontSize:16, fontWeight:800 }}>🩺 건강모아 관리자</div>
          <form onSubmit={login}>
            <input type="password" value={pwIn} onChange={e => { setPwIn(e.target.value); setPwErr(false) }} placeholder="비밀번호" autoFocus
              style={{ width:'100%', padding:'10px 14px', fontSize:14, border:'1.5px solid ' + (pwErr ? '#DC2626' : '#e5e7eb'), borderRadius:10, outline:'none', boxSizing:'border-box', marginBottom:10 }} />
            {pwErr && <div style={{ fontSize:12, color:'#DC2626', marginBottom:8 }}>비밀번호가 틀렸습니다</div>}
            <button type="submit" style={{ width:'100%', padding:'10px', background:'#DC2626', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer' }}>로그인</button>
          </form>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Head><title>관리자 대시보드 — 건강모아</title><meta name="robots" content="noindex" /></Head>
      <div style={{ minHeight:'100vh', background:'#f8fafb' }}>
        <div style={{ background:'#fff', borderBottom:'1px solid #e5e7eb', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', height:54, position:'sticky', top:0, zIndex:50 }}>
          <strong>🩺 건강모아 관리자</strong>
          <button onClick={() => { sessionStorage.removeItem('hm_admin_pwd'); setAuthed(false); setPwd('') }} style={{ fontSize:12, color:'#9ca3af', border:'none', background:'none', cursor:'pointer' }}>로그아웃</button>
        </div>

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'22px 20px' }}>
          <div style={{ display:'flex', gap:4, marginBottom:20, background:'#e5e7eb', borderRadius:12, padding:4, width:'fit-content' }}>
            {[{k:'stats',l:'📊 트래픽 통계'},{k:'coupang',l:'🔗 쿠팡 링크'},{k:'searchAnalytics',l:'🔍 검색유입 상세'}].map(t => (
              <button key={t.k} onClick={() => setTab(t.k)} style={{ padding:'8px 18px', borderRadius:9, border:'none', cursor:'pointer', fontSize:13, fontWeight: tab===t.k ? 700 : 500, background: tab===t.k ? '#fff' : 'transparent', color: tab===t.k ? '#111827' : '#6b7280' }}>{t.l}</button>
            ))}
          </div>

          {tab === 'stats' && (
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span style={{ fontSize:12, color:'#6b7280', fontWeight:600 }}>기간:</span>
                {[1,7,30,90].map(o => (
                  <button key={o} onClick={() => setDays(o)} style={{ padding:'5px 12px', borderRadius:20, border:'none', cursor:'pointer', fontSize:12, fontWeight:600, background: days===o ? '#DC2626' : '#fff', color: days===o ? '#fff' : '#374151' }}>
                    {o === 1 ? '오늘' : o + '일'}
                  </button>
                ))}
                <button onClick={loadStats} style={{ marginLeft:'auto', padding:'5px 12px', borderRadius:20, border:'1px solid #e5e7eb', background:'#fff', fontSize:12, cursor:'pointer' }}>🔄 새로고침</button>
              </div>
              <div style={{ display:'flex', gap:12, marginBottom:18, flexWrap:'wrap' }}>
                <Card label="오늘" value={fmt(summary?.today)} color="#DC2626" />
                <Card label="어제" value={fmt(summary?.yesterday)} color="#2563EB" />
                <Card label="최근 7일" value={fmt(summary?.week)} color="#EA580C" />
                <Card label="최근 30일" value={fmt(summary?.month)} color="#7C3AED" />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:16, marginBottom:16 }}>
                <EngineBar engines={engines} />
                <TopTable title={`인기 페이지 TOP15 (${days}일)`} rows={topPages} keyField="slug" valField="cnt" />
              </div>
              <TopTable title={`인기 키워드 TOP15 (${days}일)`} rows={topKw} keyField="keyword" valField="cnt" />
            </div>
          )}

          {tab === 'coupang' && (
            <div>
              <div style={{ display:'flex', gap:10, marginBottom:14, flexWrap:'wrap', alignItems:'center' }}>
                <input value={cpSearch} onChange={e => setCpSearch(e.target.value)} placeholder="제품명 검색..."
                  style={{ padding:'8px 14px', fontSize:13, border:'1.5px solid #e5e7eb', borderRadius:10, outline:'none', width:200 }} />
                <select value={cpCat} onChange={e => setCpCat(e.target.value)} style={{ padding:'8px 12px', fontSize:13, border:'1.5px solid #e5e7eb', borderRadius:10, outline:'none', background:'#fff' }}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <span style={{ fontSize:12, color:'#9ca3af' }}>{cpList.length}개</span>
                <button onClick={seed} style={{ padding:'8px 14px', background:'#f3f4f6', border:'1px solid #e5e7eb', borderRadius:10, fontSize:12, cursor:'pointer' }}>📦 시드 불러오기</button>
                {seedMsg && <span style={{ fontSize:11, color:'#6b7280' }}>{seedMsg}</span>}
                <button onClick={() => { setEditItem(null); setShowModal(true) }} style={{ marginLeft:'auto', padding:'8px 16px', background:'#DC2626', color:'#fff', border:'none', borderRadius:10, fontWeight:700, fontSize:13, cursor:'pointer' }}>+ 제품 추가</button>
              </div>

              <div style={{ background:'#fff', borderRadius:12, overflowX:'auto' }}>
                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                  <thead>
                    <tr style={{ background:'#f9fafb', borderBottom:'1px solid #e5e7eb' }}>
                      {['제품명','카테고리','쿠팡 URL','연결 포스트','메모',''].map(h => <th key={h} style={{ padding:'10px 14px', textAlign:'left', fontSize:12, fontWeight:700, color:'#6b7280' }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {cpList.length === 0 && <tr><td colSpan={6} style={{ padding:20, textAlign:'center', color:'#9ca3af' }}>등록된 제품이 없습니다.</td></tr>}
                    {cpList.map(item => (
                      <tr key={item.id} style={{ borderBottom:'1px solid #f3f4f6' }}>
                        <td style={{ padding:'10px 14px', fontWeight:600 }}>{item.product_name}</td>
                        <td style={{ padding:'10px 14px' }}>{item.category && <span style={{ fontSize:11, fontWeight:700, padding:'2px 8px', borderRadius:4, background:'#fee2e2', color:'#DC2626' }}>{item.category}</span>}</td>
                        <td style={{ padding:'10px 14px' }}>{item.coupang_url ? <a href={item.coupang_url} target="_blank" rel="noreferrer nofollow" style={{ fontSize:12, color:'#EA580C', background:'#fff7ed', padding:'2px 8px', borderRadius:4, textDecoration:'none' }}>링크 ↗</a> : <span style={{ fontSize:12, color:'#d1d5db' }}>미등록</span>}</td>
                        <td style={{ padding:'10px 14px', fontSize:12, color:'#6b7280' }}>{(item.post_slugs||[]).length > 0 ? `${item.post_slugs.length}개` : '없음'}</td>
                        <td style={{ padding:'10px 14px', fontSize:12, color:'#9ca3af' }}>{item.notes || '—'}</td>
                        <td style={{ padding:'10px 14px' }}>
                          <button onClick={() => { setEditItem(item); setShowModal(true) }} style={{ fontSize:12, color:'#2563EB', border:'none', background:'none', cursor:'pointer', marginRight:6 }}>수정</button>
                          <button onClick={() => setDel(item.id)} style={{ fontSize:12, color:'#DC2626', border:'none', background:'none', cursor:'pointer' }}>삭제</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop:26 }}>
                <div style={{ fontSize:13, fontWeight:800, marginBottom:10, color:'#374151' }}>전체 포스트 ({postList.length}개) — 연결 slug 참고</div>
                <div style={{ background:'#fff', borderRadius:12, overflowX:'auto' }}>
                  <table style={{ width:'100%', borderCollapse:'collapse', fontSize:12 }}>
                    <thead><tr style={{ background:'#f9fafb', borderBottom:'1px solid #e5e7eb' }}>{['카테고리','제목','slug','경로'].map(h => <th key={h} style={{ padding:'8px 14px', textAlign:'left', fontSize:11, color:'#9ca3af' }}>{h}</th>)}</tr></thead>
                    <tbody>
                      {postList.map((p,i) => (
                        <tr key={i} style={{ borderBottom:'1px solid #f3f4f6' }}>
                          <td style={{ padding:'8px 14px' }}><span style={{ fontSize:11, fontWeight:600, padding:'2px 6px', borderRadius:4, background:'#fee2e2', color:'#DC2626' }}>{p.category}</span></td>
                          <td style={{ padding:'8px 14px', maxWidth:320 }}><span style={{ whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', display:'block' }}>{p.title}</span></td>
                          <td style={{ padding:'8px 14px', fontFamily:'monospace', fontSize:11 }}>{p.slug}</td>
                          <td style={{ padding:'8px 14px' }}><a href={p.url} target="_blank" rel="noreferrer" style={{ color:'#2563EB', textDecoration:'none', fontSize:11 }}>{p.url}</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {tab === 'searchAnalytics' && (
            <div style={{ background:'#fff', borderRadius:12, padding:'22px' }}>
              <p>상세 검색 분석 대시보드는 <a href="/searchAnalytics/" target="_blank" style={{ color:'#2563EB' }}>/searchAnalytics</a> 에서 확인하세요.</p>
              <p style={{ fontSize:12, color:'#6b7280', marginTop:10 }}>해당 페이지는 Supabase `pageviews` 테이블 기반 확장 분석을 제공합니다 (기간 비교, 일별 추이, 키워드 분포 등).</p>
            </div>
          )}
        </div>
      </div>

      {showModal && <CoupangModal item={editItem} pwd={pwd} onClose={() => { setShowModal(false); setEditItem(null) }} onSave={loadCoupang} />}
      {del && (
        <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ background:'#fff', borderRadius:12, padding:24, maxWidth:320, textAlign:'center' }}>
            <div style={{ fontSize:15, fontWeight:700, marginBottom:8 }}>삭제하시겠습니까?</div>
            <div style={{ display:'flex', gap:10, justifyContent:'center', marginTop:16 }}>
              <button onClick={() => setDel(null)} style={{ padding:'8px 18px', borderRadius:8, border:'1px solid #e5e7eb', background:'#fff', cursor:'pointer' }}>취소</button>
              <button onClick={() => handleDelete(del)} style={{ padding:'8px 18px', borderRadius:8, border:'none', background:'#DC2626', color:'#fff', fontWeight:700, cursor:'pointer' }}>삭제</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
