const post = {
  id: 'U0011',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 알부민은 혈중 단백질 중 가장 많은 비중을 차지하며 삼투압 유지·영양소 운반·항산화 역할을 합니다. 저알부민혈증은 영양 부족·간 질환·신장 질환에서 흔하며, 시니어·수술 후 회복기에 특히 주의가 필요합니다.</p><p style="font-size:13px;color:#888">※ 알부민 수치 이상 시 의료진 진료가 우선입니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what', text: '알부민이란 — 혈중 단백질의 왕' },
    {
      type: 'body',
      html: '<p>알부민(Albumin)은 간에서 합성되는 혈장 단백질로, 혈중 총 단백질의 약 55~60%를 차지합니다. 주요 역할:</p><ul><li><strong>삼투압 유지</strong>: 혈관 내 물의 분포를 조절해 부종 예방.</li><li><strong>물질 운반</strong>: 지방산·호르몬·약물·칼슘·빌리루빈 등을 혈중에서 운반.</li><li><strong>항산화</strong>: 혈중 유리 라디칼 제거에 기여.</li><li><strong>면역 보조</strong>: 면역 물질 운반 및 체내 항상성 유지.</li></ul>',
    },

    { type: 'h2', id: 'deficiency', text: '저알부민혈증 원인과 증상' },
    {
      type: 'body',
      html: '<p>정상 혈중 알부민 수치: <strong>3.5~5.0g/dL</strong>. 3.5g/dL 미만을 저알부민혈증으로 정의합니다.</p><p>주요 원인:</p><ul><li>영양 불량·단백질 섭취 부족 (노인·식욕 저하)</li><li>간 기능 저하 (간경변·만성 간 질환)</li><li>신증후군 (소변으로 알부민 손실)</li><li>염증성 질환 (알부민이 급성기 반응으로 감소)</li></ul><p>증상: 부종(발·다리 붓기), 복수, 피로, 근육 감소, 면역 저하.</p>',
    },

    { type: 'h2', id: 'food', text: '음식으로 알부민 높이는 방법' },
    {
      type: 'callout',
      html: '<strong>알부민은 식이 단백질을 원료로 간에서 합성됩니다.</strong> 충분한 단백질 섭취가 우선입니다. 고단백 식품: 달걀·닭가슴살·두부·생선·유청단백(WPC). 달걀(egg albumin)은 알부민의 우수한 식이 공급원입니다. 단백질 섭취 기준: 노인 1.0~1.2g/체중(kg)/일.',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000580313', productName: '뉴트리원 프리미엄 알부민 골드', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000580313/480_1000580313_ITEM2025091974329.png', price: 103380 },
      ],
    },

    { type: 'h2', id: 'supplement', text: '알부민 영양제 — 효과와 한계' },
    {
      type: 'body',
      html: '<p>시중 알부민 영양제(건강기능식품)는 주로 난백 알부민(Egg Albumin)을 원료로 합니다. 경구 섭취 시 소화·흡수 과정에서 아미노산으로 분해되므로, 혈중 알부민을 직접 올리기보다 <strong>단백질 보충 효과</strong>로 이해하는 것이 정확합니다.</p><p>혈중 알부민을 즉각 올리려면 병원에서 알부민 주사(정맥 투여)를 시행합니다. 영양제는 장기적 단백질 보충 및 예방 목적으로 활용합니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>달걀 알레르기: 난백 유래 알부민 제품 섭취 금지.</li><li>신장 기능 저하(사구체여과율 60 미만): 고단백 섭취가 신장에 부담을 줄 수 있으므로 주의.</li><li>혈중 알부민 수치 이상 발견 시 반드시 원인 진단 후 영양제 섭취 결정.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '노인이 알부민 영양제를 먹으면 부종이 줄어드나요?', a: '부종의 원인이 단순한 단백질 부족에 의한 저알부민혈증이라면 단백질 보충이 도움이 될 수 있습니다. 그러나 심장·신장·간 질환에 의한 부종은 의료적 치료가 필요합니다.' },
        { q: '달걀을 많이 먹으면 되지 않나요?', a: '달걀은 훌륭한 알부민 공급원이지만, 씹기 어렵거나 식욕이 저하된 노인에게는 액상·분말 형태의 보충제가 섭취 편의성 면에서 도움이 될 수 있습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '대한영양사협회 — 노인 단백질 섭취 기준', url: '#', org: '대한영양사협회' },
        { label: 'Soeters PB, et al. Albumin as a measure of nutritional status. Curr Opin Clin Nutr Metab Care. 2009', url: '#', org: 'LWW' },
        { label: '질병관리청 국가건강정보포털 — 혈청 알부민', url: 'https://health.kdca.go.kr', org: '질병관리청' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
