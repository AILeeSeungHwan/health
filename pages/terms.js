import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout title="이용약관">
      <div style={{ maxWidth:780, margin:'0 auto', fontSize:15, lineHeight:1.9, color:'#374151' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>이용약관</h1>
        <p>본 약관은 건강모아(이하 "사이트") 이용에 관한 조건을 정합니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>1. 콘텐츠의 성격</h2>
        <p>사이트 콘텐츠는 일반적 건강 정보 제공 목적이며, 의료 진단·처방을 대체하지 않습니다. 자세한 내용은 <a href="/disclaimer/" style={{ color:'#2563EB' }}>의료 면책</a>을 참조하세요.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>2. 저작권</h2>
        <p>사이트 내 글·구조·디자인의 저작권은 건강모아에 있으며 무단 복제·재배포를 금합니다. 참고 인용은 출처 표기 후 일부에 한해 허용됩니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>3. 외부 링크</h2>
        <p>사이트에는 외부 기관·제휴 사이트로의 링크가 포함될 수 있으며, 외부 사이트의 내용·운영에 대해 사이트는 책임지지 않습니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>4. 책임 제한</h2>
        <p>사이트 이용으로 발생한 손해에 대해 사이트는 고의·중과실이 없는 한 책임지지 않습니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>5. 약관 변경</h2>
        <p>본 약관은 필요에 따라 변경될 수 있으며, 변경 시 사이트에 공지합니다.</p>
      </div>
    </Layout>
  )
}
