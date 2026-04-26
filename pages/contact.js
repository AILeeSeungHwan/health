import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="문의" description="건강모아 문의·오류 신고.">
      <div style={{ maxWidth:680, margin:'0 auto' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>문의 / 오류 신고</h1>
        <p style={{ color:'#6B7280', marginBottom:20 }}>정보 오류 제보, 업데이트 요청, 제휴 문의는 아래 이메일로 연락 주세요.</p>
        <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'22px 26px' }}>
          <p style={{ fontSize:14, color:'#374151', marginBottom:10 }}><strong>이메일</strong> — contact@healthmoa.ambitstock.com</p>
          <p style={{ fontSize:14, color:'#374151', marginBottom:10 }}><strong>운영사</strong> — ambitstock 네트워크</p>
          <p style={{ fontSize:13, color:'#6B7280', marginTop:14, lineHeight:1.7 }}>
            · 오류 신고 시 해당 페이지 URL과 문제가 되는 부분을 함께 보내주시면 검토 후 반영합니다.<br/>
            · 개인 건강 상담에는 답변드리지 않습니다. 의료기관 상담을 권장합니다.
          </p>
        </div>
      </div>
    </Layout>
  )
}
