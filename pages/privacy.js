import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="개인정보 처리방침">
      <div style={{ maxWidth:780, margin:'0 auto', fontSize:15, lineHeight:1.9, color:'#374151' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>개인정보 처리방침</h1>
        <p>건강모아(이하 "사이트")는 이용자의 개인정보를 소중히 여기며 다음의 원칙에 따라 처리합니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>1. 수집 정보</h2>
        <p>사이트는 별도의 회원 가입을 받지 않습니다. 다만 다음 정보가 자동으로 수집될 수 있습니다: 접속 IP, 브라우저 정보, 유입 경로(referrer), 페이지 조회 기록.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>2. 이용 목적</h2>
        <ul>
          <li>통계 기반 서비스 품질 개선</li>
          <li>광고 효과 측정 (Google AdSense)</li>
          <li>검색엔진 최적화 분석</li>
        </ul>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>3. 제3자 제공</h2>
        <p>사이트는 다음 외부 서비스를 이용하며, 이들은 각자의 정책에 따라 정보를 처리합니다.</p>
        <ul>
          <li>Google Analytics (GA4)</li>
          <li>Google AdSense (개인 맞춤 광고)</li>
          <li>Microsoft Clarity (세션 행태 분석, 개인 식별 정보 수집 X)</li>
          <li>Supabase (페이지뷰 로그 저장)</li>
        </ul>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>4. 쿠키</h2>
        <p>이용자는 브라우저 설정을 통해 쿠키 수집을 제한할 수 있습니다. AdSense 맞춤 광고 제외는 <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" style={{ color:'#2563EB' }}>Google 광고 설정</a>에서 관리 가능합니다.</p>
        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>5. 문의</h2>
        <p>개인정보 관련 문의는 <a href="/contact/" style={{ color:'#2563EB' }}>/contact</a>로 연락 주시기 바랍니다.</p>
      </div>
    </Layout>
  )
}
