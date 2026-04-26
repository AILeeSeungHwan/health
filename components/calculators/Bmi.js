import { useState, useMemo } from 'react'
import Shell from './Shell'

export default function Bmi() {
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(65)

  const result = useMemo(() => {
    const h = Number(height) / 100
    if (!h || !weight) return null
    const bmi = Number(weight) / (h * h)
    let label = '정상'
    let color = '#16A34A'
    if (bmi < 18.5) { label = '저체중'; color = '#0284C7' }
    else if (bmi < 23) { label = '정상'; color = '#16A34A' }
    else if (bmi < 25) { label = '과체중'; color = '#D97706' }
    else if (bmi < 30) { label = '1단계 비만'; color = '#DC2626' }
    else { label = '2단계 비만'; color = '#991B1B' }
    return { bmi: bmi.toFixed(1), label, color }
  }, [height, weight])

  return (
    <Shell title="BMI 계산기" subtitle="WHO 아시아 태평양 기준 적용">
      <Row label="키 (cm)"><input type="number" min={80} max={230} value={height} onChange={e => setHeight(e.target.value)} style={input} /></Row>
      <Row label="체중 (kg)"><input type="number" min={20} max={200} value={weight} onChange={e => setWeight(e.target.value)} style={input} /></Row>
      {result && (
        <div style={{ textAlign:'center', padding:'22px 16px', background:'#F8FAFC', borderRadius:10, marginTop:14 }}>
          <div style={{ fontSize:38, fontWeight:900, color: result.color, lineHeight:1 }}>{result.bmi}</div>
          <div style={{ fontSize:15, fontWeight:700, marginTop:8, color: result.color }}>{result.label}</div>
        </div>
      )}
    </Shell>
  )
}

const input = { width:'100%', padding:'10px 12px', fontSize:15, border:'1.5px solid #E5E7EB', borderRadius:8, outline:'none' }

function Row({ label, children }) {
  return (
    <div style={{ marginBottom:12 }}>
      <label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}</label>
      {children}
    </div>
  )
}
