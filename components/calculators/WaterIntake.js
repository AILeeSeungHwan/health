import { useState, useMemo } from 'react'
import Shell from './Shell'

export default function WaterIntake() {
  const [weight, setWeight] = useState(65)
  const [exercise, setExercise] = useState(0)

  const result = useMemo(() => {
    if (!weight) return null
    const base = Number(weight) * 33
    const extra = Number(exercise) * 500
    return Math.round(base + extra)
  }, [weight, exercise])

  return (
    <Shell title="물 섭취량 계산기" subtitle="체중·운동시간 기반 (기본 33ml/kg)">
      <Row label="체중 (kg)"><input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={input} /></Row>
      <Row label="하루 운동 시간 (시간)"><input type="number" min={0} max={6} step={0.5} value={exercise} onChange={e => setExercise(e.target.value)} style={input} /></Row>
      {result && (
        <div style={{ textAlign:'center', padding:'22px 16px', background:'#F0F9FF', borderRadius:10, marginTop:14 }}>
          <div style={{ fontSize:36, fontWeight:900, color:'#0284C7' }}>{result.toLocaleString()} ml</div>
          <div style={{ fontSize:13, color:'#6B7280', marginTop:6 }}>약 {(result/250).toFixed(1)}컵 (250ml 기준)</div>
        </div>
      )}
    </Shell>
  )
}

const input = { width:'100%', padding:'10px 12px', fontSize:15, border:'1.5px solid #E5E7EB', borderRadius:8, outline:'none' }
function Row({ label, children }) {
  return <div style={{ marginBottom:12 }}><label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}</label>{children}</div>
}
