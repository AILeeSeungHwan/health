const post = {
  id: 'U0018',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 종합비타민은 여러 비타민·미네랄을 1정에 담은 영양 보충제입니다. 식단이 불균형한 현대인·임산부·노인에게 특히 유용하지만, 특정 영양소 결핍이 없는 경우 고용량 종합비타민의 추가 이점은 제한적입니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>편식이 심하고 식사 패턴이 불규칙한 편이다. 어떤 영양소가 부족한지 파악이 안 되니까 일단 종합비타민부터 시작했다. 나중에 혈액 검사를 해보니 비타민D와 철분이 낮게 나왔다 — 종합비타민만으로는 채우기 어려운 것들이 있다는 걸 그때 알았다.</p>" },

{ type: 'callout', html: "<p>편식이 심하고 식사 패턴이 불규칙한 편이다. 어떤 영양소가 부족한지 파악이 안 되니까 일단 종합비타민부터 시작했다. 나중에 혈액 검사를 해보니 비타민D와 철분이 낮게 나왔다 — 종합비타민만으로는 채우기 어려운 것들이 있다는 걸 그때 알았다.</p>" },,

    { type: 'h2', id: 'who-needs', text: '종합비타민이 필요한 사람은' },
    {
      type: 'body',
      html: '<ul><li>식사가 불규칙하거나 채소·과일 섭취가 적은 사람</li><li>임산부·수유부 (엽산·철분·요오드 특히 중요)</li><li>65세 이상 노인 (비타민D·B12·칼슘 결핍 위험)</li><li>채식·비건: 비타민B12·아연·칼슘·비타민D 부족 위험</li><li>위장 수술 후(흡수 장애): 지용성 비타민·B12 결핍 가능</li><li>장기간 특정 약물(예: 메트포르민 → B12 감소)</li></ul>',
    },

    { type: 'h2', id: 'key-nutrients', text: '종합비타민 속 핵심 영양소별 역할' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">주요 기능</th><th style="padding:8px;border:1px solid #ddd">결핍 시</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">비타민D</td><td style="padding:8px;border:1px solid #ddd">칼슘 흡수·면역</td><td style="padding:8px;border:1px solid #ddd">골다공증·면역 저하</td></tr><tr><td style="padding:8px;border:1px solid #ddd">비타민B12</td><td style="padding:8px;border:1px solid #ddd">신경·적혈구 생성</td><td style="padding:8px;border:1px solid #ddd">빈혈·신경 손상</td></tr><tr><td style="padding:8px;border:1px solid #ddd">엽산(B9)</td><td style="padding:8px;border:1px solid #ddd">세포 분열·DNA 합성</td><td style="padding:8px;border:1px solid #ddd">태아 신경관 결손·빈혈</td></tr><tr><td style="padding:8px;border:1px solid #ddd">아연</td><td style="padding:8px;border:1px solid #ddd">면역·상처 치유·미각</td><td style="padding:8px;border:1px solid #ddd">면역 저하·성장 지연</td></tr><tr><td style="padding:8px;border:1px solid #ddd">비타민C</td><td style="padding:8px;border:1px solid #ddd">항산화·콜라겐 합성·면역</td><td style="padding:8px;border:1px solid #ddd">괴혈병·피부 출혈</td></tr><tr><td style="padding:8px;border:1px solid #ddd">비타민A</td><td style="padding:8px;border:1px solid #ddd">시각·면역·피부</td><td style="padding:8px;border:1px solid #ddd">야맹증·건조한 피부</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'enteric', text: '장용성 캡슐이란 — 흡수율과의 관계' },
    {
      type: 'info',
      html: '<p>장용성(Enteric Coated) 캡슐은 위산에서 녹지 않고 소장에서 용해됩니다.</p><ul><li>장점: 위산에 불안정한 영양소(비타민B12·프로바이오틱스 일부) 보호. 위장 자극 감소.</li><li>단점: 소장 도달 시간이 길어 흡수 지연 가능.</li><li>일반 정제·캡슐과 흡수율 차이는 성분별로 다르며, 과장된 마케팅 주의.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000183136', productName: '뉴트리원 장용성 종합비타민 이뮨+', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000183136/480_1000183136_ITEM2023040323117.png', price: 39900 },
        { nutrioneId: '1000215042', productName: '뉴트리원 올인원 종합비타민 이뮨샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000215042/480_1000215042_ITEM2024121015572.png', price: 215000 },
      ],
    },

    { type: 'h2', id: 'cautions', text: '주의 사항 — 과잉 섭취의 위험' },
    {
      type: 'warning',
      html: '<ul><li><strong>지용성 비타민(A·D·E·K)</strong>: 체내에 축적됩니다. 특히 비타민A 고용량(>3,000μg RAE) 장기 복용은 간 독성·골다공증 위험.</li><li><strong>비타민D</strong>: 1일 상한 4,000IU. 초과 시 고칼슘혈증.</li><li><strong>철분</strong>: 여성은 필요, 남성·폐경 후 여성은 불필요 섭취로 산화 스트레스 증가 가능. 철분이 없는 종합비타민 선택 고려.</li><li><strong>임산부</strong>: 산전 비타민 제품별로 영양소 함량 확인 후 의사와 상담.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '종합비타민을 먹으면 음식을 덜 먹어도 되나요?', a: '아닙니다. 영양제는 식사 보조이지 대체제가 아닙니다. 식품 속 파이토케미컬·식이섬유·미량 영양소는 영양제로 대체할 수 없습니다.' },
        { q: '아침 식사 후가 좋은가요, 저녁이 좋은가요?', a: '지용성 비타민(A·D·E·K)을 포함한 종합비타민은 지방이 있는 식사 후 복용 시 흡수에 유리합니다. 아침/저녁 모두 식후라면 큰 차이 없습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 건강기능식품 기능성 원료 — 비타민·미네랄 기준', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Sesso HD, et al. Multivitamins and cardiovascular disease. JAMA. 2012', url: '#', org: 'JAMA' },
        { label: '한국영양학회 2020 한국인 영양소 섭취기준', url: '#', org: '한국영양학회' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
