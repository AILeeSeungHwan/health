import Layout from '../components/Layout'

export default function EditorialPolicy() {
  return (
    <Layout title="편집 정책" description="건강모아의 정보 수집·검증·업데이트·오류 수정 정책.">
      <div style={{ maxWidth:780, margin:'0 auto', fontSize:15, lineHeight:1.9, color:'#374151' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>편집 정책 (Editorial Policy)</h1>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>1. 콘텐츠 등급</h2>
        <p>건강모아는 Google E-E-A-T 기준에 따라 콘텐츠를 Level A(의료), Level B(건강), Level C(생활)로 분류합니다.</p>
        <ul>
          <li>Level A: 공식 기관 출처 2개 이상 필수, 단정적 효능 표현 금지</li>
          <li>Level B: 식약처 인정 기능성 범위 내 서술</li>
          <li>Level C: 공식 자료 권장, 사실 기반 제품 정보</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>2. 출처</h2>
        <ul>
          <li>식품의약품안전처 의약품안전나라 · 건강기능식품정보</li>
          <li>질병관리청 국가건강정보포털</li>
          <li>대한의학회 · 학회별 표준 진료 지침</li>
          <li>MSD Manual 한국어판</li>
          <li>논문 인용 시 국내 기관 출처와 병기</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>3. 업데이트</h2>
        <p>모든 건강 콘텐츠는 최소 연 1회 재검토하며, 주요 제도·용법·부작용 정보가 바뀌면 즉시 반영합니다. 각 페이지에 최근 업데이트 일자를 표기합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>4. 오류 신고</h2>
        <p>정보 오류·표기 수정이 필요한 경우 <a href="/contact/" style={{ color:'#2563EB' }}>/contact</a> 를 통해 제보 바랍니다. 제보 확인 후 검증·반영하고 변경 일자를 기록합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>5. 금지 사항</h2>
        <ul>
          <li>효능 단정("치료된다"·"완치") 표현</li>
          <li>특정 병원·의사 추천 광고성 서술</li>
          <li>식약처 미인정 기능성 임의 기재</li>
          <li>의료진 감수 허위 표기</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:22 }}>6. 제휴 고지</h2>
        <p>쿠팡 파트너스 활동의 일환으로 제휴 링크를 포함할 수 있으며, 이에 따른 일정액의 수수료를 제공받을 수 있습니다. 제휴 여부는 광고 노출에 영향을 미치지만, 건강 정보 본문의 사실 기반 기술에는 영향을 주지 않습니다.</p>
      </div>
    </Layout>
  )
}
