import Layout from '../components/Layout'

export default function Disclaimer() {
  return (
    <Layout title="의료 면책" description="건강모아 의료 정보의 성격과 한계, 그리고 이용자의 책임에 관한 안내.">
      <div style={{ maxWidth:780, margin:'0 auto', fontSize:15, lineHeight:1.9, color:'#374151' }}>
        <h1 style={{ fontSize:28, fontWeight:900, marginBottom:14 }}>의료 면책 (Medical Disclaimer)</h1>

        <div style={{ background:'#FEF2F2', border:'2px solid #FCA5A5', padding:'18px 20px', borderRadius:10, marginBottom:20, color:'#7F1D1D' }}>
          <strong>중요 안내.</strong> 본 사이트의 모든 내용은 일반적인 건강 정보를 제공하기 위한 것이며, 특정 개인에 대한 의료 진단·처방·치료를 대체하지 않습니다. 증상이 의심되거나 지속되면 반드시 의료기관 또는 약사 상담을 받으세요.
        </div>

        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>1. 정보의 성격</h2>
        <p>건강모아는 공신력 있는 자료를 기반으로 교육·참고 목적의 정보를 제공합니다. 개인별 건강 상태, 기저 질환, 복용 약물, 유전적 요인 등을 고려한 의료 판단은 의료인만이 할 수 있습니다.</p>

        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>2. 응급 상황</h2>
        <p>의식 저하·호흡 곤란·가슴 통증·마비 등 응급 증상이 있는 경우 <strong>즉시 119 또는 가까운 응급실</strong>에 연락하세요. 본 사이트의 정보에 의존해 응급 대처가 지연되는 경우 건강에 심각한 해가 될 수 있습니다.</p>

        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>3. 의약품·영양제 이용</h2>
        <p>일반의약품 복용 시 제품 설명서와 약사 안내를 우선하며, 건강기능식품은 식약처 기능성 인정 범위 내에서 참고하십시오. 개인 복용 약물이 있거나 임신·수유 중이면 반드시 의료진과 상의하세요.</p>

        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>4. 책임의 한계</h2>
        <p>건강모아는 정확성·최신성을 확보하기 위해 최선을 다하지만, 정보의 부정확·누락으로 인한 손해에 대해서는 법적 책임을 지지 않습니다. 이용은 이용자의 판단과 책임 하에 이루어집니다.</p>

        <h2 style={{ fontSize:18, fontWeight:800, marginTop:18 }}>5. 쿠팡 파트너스 고지</h2>
        <p>본 사이트는 쿠팡 파트너스 활동의 일환으로 제휴 링크를 포함할 수 있으며, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
      </div>
    </Layout>
  )
}
