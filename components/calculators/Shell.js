export default function Shell({ title, subtitle, children }) {
  return (
    <div style={{
      background:'#fff', border:'1px solid #E5E7EB', borderRadius:14, padding:'20px 22px', margin:'20px 0'
    }}>
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:16, fontWeight:800, color:'#111827' }}>{title}</div>
        {subtitle && <div style={{ fontSize:12, color:'#6B7280', marginTop:4 }}>{subtitle}</div>}
      </div>
      {children}
      <p style={{ fontSize:11, color:'#9CA3AF', marginTop:14 }}>※ 계산 결과는 참고 지표이며 의료 진단을 대체하지 않습니다.</p>
    </div>
  )
}
