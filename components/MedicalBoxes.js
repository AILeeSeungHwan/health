// 의료 정보 3단계 박스 — 항상 색상으로 구분 (접근성 + 인식)

export function InfoBox({ children, html }) {
  return (
    <div style={{
      background:'#EFF6FF', borderLeft:'4px solid #2563EB', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#1E3A8A'
    }}>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export function WarningBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FFFBEB', borderLeft:'4px solid #D97706', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#78350F'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, fontWeight:800, color:'#B45309' }}>
        <span>⚠️</span>
        <span>{title || '주의'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export function EmergencyBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FEF2F2', border:'2px solid #DC2626', padding:'16px 20px',
      borderRadius:10, margin:'20px 0', fontSize:14, lineHeight:1.7, color:'#7F1D1D'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8, fontWeight:900, color:'#B91C1C', fontSize:15 }}>
        <span style={{ fontSize:18 }}>🚨</span>
        <span>{title || '응급 신호 — 즉시 의료 도움 요청'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export function MedicalDisclaimer() {
  return (
    <div style={{
      background:'#F8FAFC', border:'1px solid #E2E8F0', padding:'16px 20px',
      borderRadius:10, margin:'32px 0 16px', fontSize:12, lineHeight:1.7, color:'#64748B'
    }}>
      <strong>의료 면책</strong><br/>
      본 정보는 일반적인 건강 정보 제공을 목적으로 하며, 의료 행위나 전문가의 진단·처방을 대체하지 않습니다.
      증상이 지속되거나 악화되는 경우 반드시 의료기관 또는 약사 상담을 권장합니다.
      건강기능식품 및 일반의약품은 제품 설명서의 용법·용량을 따르십시오.
    </div>
  )
}

export function SourceList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div style={{ marginTop:24, padding:'16px 20px', background:'#F8FAFC', borderRadius:10, border:'1px solid #E2E8F0' }}>
      <div style={{ fontSize:13, fontWeight:800, marginBottom:8, color:'#334155' }}>📚 출처 · 참고 자료</div>
      <ul style={{ listStyle:'none', padding:0, margin:0 }}>
        {items.map((s, i) => (
          <li key={i} style={{ fontSize:13, color:'#475569', marginBottom:6 }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color:'#2563EB', textDecoration:'underline' }}>
              {s.label}
            </a>
            {s.org && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:12 }}>· {s.org}</span>}
            {s.accessedAt && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:11 }}>(접근일 {s.accessedAt})</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function YmylBadge({ level }) {
  const MAP = {
    A: { label: '의료 정보', color: '#DC2626', bg: '#FEE2E2' },
    B: { label: '건강 정보', color: '#D97706', bg: '#FEF3C7' },
    C: { label: '생활 정보', color: '#16A34A', bg: '#DCFCE7' },
  }
  const m = MAP[level] || MAP.C
  return (
    <span style={{
      fontSize:11, fontWeight:800, padding:'3px 8px', borderRadius:6,
      color: m.color, background: m.bg
    }}>Level {level} · {m.label}</span>
  )
}
