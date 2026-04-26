import { useState, useMemo } from 'react'
import Shell from './Shell'

const ACTIVITY = [
  { key:1.2,   label:'비활동적' },
  { key:1.375, label:'가벼운 활동 (주 1~3일)' },
  { key:1.55,  label:'중간 활동 (주 3~5일)' },
  { key:1.725, label:'고활동 (주 6~7일)' },
]

export default function Bmr() {
  const [gender, setGender] = useState('male')
  const [age, setAge] = useState(30)
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(65)
  const [activity, setActivity] = useState(1.55)

  const result = useMemo(() => {
    if (!age || !height || !weight) return null
    const base = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age)
    const bmr = gender === 'male' ? base + 5 : base - 161
    const tdee = bmr * Number(activity)
    return { bmr: Math.round(bmr), tdee: Math.round(tdee) }
  }, [gender, age, height, weight, activity])

  return (
    <Shell title="기초대사량(BMR) 계산기" subtitle="Mifflin-St Jeor 공식">
      <div style={{ display:'flex', gap:8, marginBottom:12 }}>
        <button onClick={() => setGender('male')} style={btn(gender==='male')}>남성</button>
        <button onClick={() => setGender('female')} style={btn(gender==='female')}>여성</button>
      </div>
      <Row label="나이"><input type="number" value={age} onChange={e => setAge(e.target.value)} style={input} /></Row>
      <Row label="키 (cm)"><input type="number" value={height} onChange={e => setHeight(e.target.value)} style={input} /></Row>
      <Row label="체중 (kg)"><input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={input} /></Row>
      <Row label="활동 수준">
        <select value={activity} onChange={e => setActivity(e.target.value)} style={input}>
          {ACTIVITY.map(a => <option key={a.key} value={a.key}>{a.label}</option>)}
        </select>
      </Row>
      {result && (
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:14 }}>
          <Card label="기초대사량 (BMR)" value={result.bmr + ' kcal'} color="#0284C7" />
          <Card label="하루 권장 (TDEE)" value={result.tdee + ' kcal'} color="#16A34A" />
        </div>
      )}
    </Shell>
  )
}

const input = { width:'100%', padding:'10px 12px', fontSize:15, border:'1.5px solid #E5E7EB', borderRadius:8, outline:'none' }
function Row({ label, children }) {
  return <div style={{ marginBottom:12 }}><label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}</label>{children}</div>
}
function btn(active) {
  return { flex:1, padding:'8px 12px', border:'1.5px solid ' + (active ? '#0284C7' : '#E5E7EB'), background: active ? '#E0F2FE' : '#fff', color: active ? '#0284C7' : '#374151', borderRadius:8, fontSize:14, fontWeight:700, cursor:'pointer' }
}
function Card({ label, value, color }) {
  return <div style={{ background:'#F8FAFC', borderRadius:10, padding:'16px', textAlign:'center' }}>
    <div style={{ fontSize:11, color:'#6B7280', fontWeight:600 }}>{label}</div>
    <div style={{ fontSize:24, fontWeight:900, color, marginTop:6 }}>{value}</div>
  </div>
}
