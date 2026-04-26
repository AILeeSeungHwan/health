import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="건강모아 소개" description="건강모아는 증상·일반의약품·영양제·건강제품 정보를 식약처 기준으로 안전하게 정리하는 통합 허브입니다.">
      <div style={{ maxWidth:780, margin:'0 auto', fontSize:15, lineHeight:1.9, color:'#374151' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>건강모아 소개</h1>
        <p>건강모아(healthmoa)는 한국의 일반 사용자가 <strong>건강 고민을 빠르고 안전하게 해결</strong>하도록 돕기 위해 만들어진 건강 정보 허브입니다. 증상·일반의약품·영양제·건강제품을 한 자리에서 비교하고, 상황별·부위별로 쉽게 찾아볼 수 있습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:10 }}>운영 방침</h2>
        <ul>
          <li>식품의약품안전처, 질병관리청 국가건강정보포털 등 공신력 있는 자료를 1차 출처로 사용합니다.</li>
          <li>모든 건강 정보는 <strong>일반 교육 목적</strong>이며, 의료 진단·처방을 대체하지 않습니다.</li>
          <li>의료 행위와 직접 연결되는 항목(증상·의약품)은 Level A로 분류하여 가장 엄격하게 다룹니다.</li>
          <li>쿠팡 파트너스 등 제휴 수익이 있는 경우 명시적으로 고지합니다.</li>
          <li>오류·수정 요청은 문의 페이지로 접수해 검토 후 반영합니다.</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:10 }}>운영 주체</h2>
        <p>건강모아는 ambitstock 네트워크의 전문 정보 큐레이션 프로젝트입니다. 현재 의료 전문가의 직접 감수는 이루어지지 않으며, 이 상태에서 의료진 감수 표기를 하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:10 }}>연락처</h2>
        <p>문의: <a href="/contact/" style={{ color:'#2563EB' }}>/contact</a></p>
      </div>
    </Layout>
  )
}
