import { useState, useMemo } from 'react'
import Shell from './Shell'

export default function SleepDebt() {
  const [target, setTarget] = useState(8)
  const [hours, setHours] = useState(['6.5','6','7','5.5','6','7.5','8'])

  const result = useMemo(() => {
    const actual = hours.reduce((s, h) => s + (Number(h) || 0), 0)
    const needed = Number(target) * 7
    const debt = Math.max(0, needed - actual)
    const recoveryWeeks = Math.ceil(debt / 7)
    return { actual: actual.toFixed(1), needed: needed.toFixed(1), debt: debt.toFixed(1), recoveryWeeks }
  }, [target, hours])

  const setDay = (i, v) => setHours(arr => arr.map((h, idx) => idx === i ? v : h))

  return (
    <Shell title="수면 부채 계산기" subtitle="최근 7일 수면 시간 누적">
      <Row label="1일 목표 수면 (시간)"><input type="number" min={5} max={10} step={0.5} value={target} onChange={e => setTarget(e.target.value)} style={input} /></Row>
      <div style={{ marginBottom:12 }}>
        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>최근 7일 수면 시간</label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:6 }}>
          {hours.map((h, i) => (
            <input key={i} type="number" min={0} max={14} step={0.5} value={h} onChange={e => setDay(i, e.target.value)} style={{ ...input, padding:'8px 6px', fontSize:13, textAlign:'center' }} />
          ))}
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginTop:14 }}>
        <Card label="실제 수면" value={result.actual + 'h'} color="#2563EB" />
        <Card label="필요 수면" value={result.needed + 'h'} color="#16A34A" />
        <Card label="수면 부채" value={result.debt + 'h'} color={Number(result.debt) > 5 ? '#DC2626' : '#D97706'} />
      </div>
      <div style={{ marginTop:14, fontSize:13, color:'#374151', textAlign:'center' }}>
        추정 회복 기간: 약 <strong>{result.recoveryWeeks}주</strong> (1일 +1시간 가정)
      </div>
    </Shell>
  )
}

const input = { width:'100%', padding:'10px 12px', fontSize:15, border:'1.5px solid #E5E7EB', borderRadius:8, outline:'none' }
function Row({ label, children }) {
  return <div style={{ marginBottom:12 }}><label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}</label>{children}</div>
}
function Card({ label, value, color }) {
  return <div style={{ background:'#F8FAFC', borderRadius:10, padding:'14px', textAlign:'center' }}>
    <div style={{ fontSize:11, color:'#6B7280', fontWeight:600 }}>{label}</div>
    <div style={{ fontSize:22, fontWeight:900, color, marginTop:4 }}>{value}</div>
  </div>
}
