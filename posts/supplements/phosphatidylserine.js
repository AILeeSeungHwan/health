const post = {
  id: 'U0020',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 포스파티딜세린(Phosphatidylserine, PS)은 뇌 세포막의 핵심 인지질 성분으로, 식약처가 "기억력 개선에 도움"을 개별인정형 기능성으로 인정한 영양소입니다. 300mg/일 섭취 시 인지기능 지원 효과가 연구됩니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>집중력이 예전 같지 않다는 느낌이 들면서 뇌 건강 영양제를 찾아봤다. 포스파티딜세린은 이름도 낯설었는데 인지 기능 관련 연구가 꽤 있다는 걸 알고 나서 관심을 갖게 됐다.</p>" },

{ type: 'callout', html: "<p>집중력이 예전 같지 않다는 느낌이 들면서 뇌 건강 영양제를 찾아봤다. 포스파티딜세린은 이름도 낯설었는데 인지 기능 관련 연구가 꽤 있다는 걸 알고 나서 관심을 갖게 됐다.</p>" },,

    { type: 'h2', id: 'what', text: '포스파티딜세린이란 — 뇌 세포막의 필수 성분' },
    {
      type: 'body',
      html: '<p>포스파티딜세린(PS)은 인지질(phospholipid) 계열의 지질로, 뇌 세포막의 15~20%를 구성합니다. 세포막의 유동성 유지, 신경전달물질 수용체 기능, 세포 신호 전달에 관여합니다.</p><p>체내에서 합성되지만 나이가 들면 합성이 감소합니다. 식품 내 함량은 낮아(대두·달걀·생선 소량 포함) 영양제 보충이 실용적입니다.</p>',
    },

    { type: 'h2', id: 'evidence', text: '임상 근거 — 기억력 개선' },
    {
      type: 'body',
      html: '<p>식약처 개별인정형 기능성: <strong>"기억력 개선에 도움"</strong>.</p><p>주요 연구:</p><ul><li>Crook TH et al. (1991): PS 300mg/일 12주 투여 후 노인 대상 기억력 테스트 개선.</li><li>Cenacchi T et al. (1993): PS 300mg/일 6개월 후 노인 인지기능 지표 유의 개선.</li><li>젊은 성인 대상 연구: 스트레스 호르몬(코르티솔) 억제를 통한 인지 보호 효과 보고.</li></ul><p>단, 대부분 연구가 소규모이며 장기 데이터는 부족합니다.</p>',
    },

    { type: 'h2', id: 'ps-in-products', text: 'PS 제품 선택 기준' },
    {
      type: 'info',
      html: '<p><strong>원료 출처</strong>: 초기 연구는 소 뇌 유래 PS를 사용했으나(BSE 우려로 중단), 현재는 대두·해바라기씨 유래 식물성 PS가 주류입니다. 효능 연구 대부분은 대두 유래.</p><p><strong>함량</strong>: 1일 PS 300mg이 임상 연구에서 가장 많이 사용된 용량. 100mg 이하 제품은 효과 연구 근거 미약.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000893', productName: '뉴트리원 브레인 알파 피에스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000893/480_1000000893_ITEM2024121062099.png', price: 121500 },
        { nutrioneId: '1000321433', productName: '뉴트리원 인지기능엔 뉴런 600', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000321433/480_1000321433_ITEM2024093097947.png', price: 15900 },
        { nutrioneId: '1000001227', productName: '뉴트리원 루테인지아잔틴 메모리케어 GR', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001227/480_1000001227_ITEM2024103173967.png', price: 133200 },
      ],
    },

    { type: 'h2', id: 'who', text: '어떤 사람에게 도움이 될까' },
    {
      type: 'body',
      html: '<ul><li><strong>중·장년층 (50대↑)</strong>: 인지기능 저하 예방 목적의 보조 영양소.</li><li><strong>수험생·고강도 정신노동자</strong>: 스트레스 호르몬 억제를 통한 집중력 유지 기대.</li><li><strong>경도인지장애(MCI) 조기 단계</strong>: 보조 사용(치료제 아님, 의료진 상담 필수).</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>항응고제·항혈소판제: 혈액 점도 변화 가능 → 와파린 복용자 주의.</li><li>치매 치료제 대체 불가: 의약품이 아닙니다.</li><li>임산부·수유부: 안전성 데이터 부족.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '포스파티딜세린이 치매를 예방하나요?', a: '치매 예방 효능은 FDA에서도 인정되지 않은 상태입니다(근거 불충분). 인지기능 보조에 도움이 될 수 있다는 연구 수준으로 이해하는 것이 정확합니다.' },
        { q: '오메가3와 함께 복용하면 시너지가 있나요?', a: 'DHA(오메가3)는 뇌 세포막의 주요 지방산이고, PS는 세포막 인지질입니다. 두 성분은 작용 기전이 달라 병용 시 뇌 건강에 상호 보완적일 수 있다는 가설이 있습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 개별인정형 건강기능식품 원료 — 포스파티딜세린', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Crook TH, et al. Effects of PS in age-associated memory impairment. Neurology. 1991', url: '#', org: 'AAN' },
        { label: 'Cenacchi T, et al. PS in impaired elderly subjects. Aging. 1993', url: '#', org: 'Springer' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
