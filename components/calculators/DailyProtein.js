import { useState, useMemo } from 'react'
import Shell from './Shell'

const GOAL = [
  { key:0.8,  label:'일반 성인 (0.8g/kg)' },
  { key:1.0,  label:'고령자 (1.0g/kg)' },
  { key:1.2,  label:'가벼운 운동 (1.2g/kg)' },
  { key:1.6,  label:'근력 운동·감량 (1.6g/kg)' },
  { key:2.0,  label:'경기·벌크업 (2.0g/kg)' },
]

export default function DailyProtein() {
  const [weight, setWeight] = useState(65)
  const [factor, setFactor] = useState(1.2)

  const result = useMemo(() => {
    if (!weight) return null
    return Math.round(Number(weight) * Number(factor))
  }, [weight, factor])

  return (
    <Shell title="단백질 권장 섭취량 계산기" subtitle="체중과 활동 수준 기반">
      <Row label="체중 (kg)"><input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={input} /></Row>
      <Row label="목적 / 활동 수준">
        <select value={factor} onChange={e => setFactor(e.target.value)} style={input}>
          {GOAL.map(g => <option key={g.key} value={g.key}>{g.label}</option>)}
        </select>
      </Row>
      {result && (
        <div style={{ textAlign:'center', padding:'22px 16px', background:'#F8FAFC', borderRadius:10, marginTop:14 }}>
          <div style={{ fontSize:38, fontWeight:900, color:'#16A34A', lineHeight:1 }}>{result} g</div>
          <div style={{ fontSize:13, color:'#6B7280', marginTop:8 }}>
            닭가슴살 {Math.ceil(result/23)}쪽 · 계란 {Math.ceil(result/6)}개 · 유청 단백질 {Math.ceil(result/22)}스쿱 정도에 해당합니다.
          </div>
        </div>
      )}
    </Shell>
  )
}

const input = { width:'100%', padding:'10px 12px', fontSize:15, border:'1.5px solid #E5E7EB', borderRadius:8, outline:'none' }
function Row({ label, children }) {
  return <div style={{ marginBottom:12 }}><label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}</label>{children}</div>
}
