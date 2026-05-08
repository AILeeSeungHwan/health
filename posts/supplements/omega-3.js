const post = {
  id: 'U0001',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 오메가3(EPA+DHA)는 식약처가 인정한 건강기능식품으로 혈중 중성지질 개선·혈행 개선·건조한 눈·기억력 개선 기능성이 있습니다. 항응고제 복용자·수술 예정자는 의료 상담이 필요합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'functionality', text: '어떤 효과가 있나 (식약처 인정 기능성)' },
    { type: 'body', html: '<p>식품의약품안전처가 인정한 오메가3의 기능성은 다음과 같습니다.</p><ul><li>혈중 중성지질 개선</li><li>혈행 개선</li><li>건조한 눈을 개선</li><li>기억력 개선</li></ul><p>이 외의 효과(예: 관절·우울감 등)는 연구가 진행 중이며 개인차가 크고 확정된 식약처 기능성은 아닙니다.</p>' },

    { type: 'h2', id: 'dosage', text: '하루 권장 섭취량' },
    { type: 'info', html: '<p>식약처 권장 섭취량은 EPA+DHA 합산 기준 하루 <strong>500~2,000mg</strong> 범위입니다. 제품 기능성 등급과 시험 기준에 따라 달라지므로 제품별 표기를 우선 확인하세요.</p>' },

    { type: 'h2', id: 'timing', text: '복용 시점 & 흡수 팁' },
    { type: 'body', html: '<p>오메가3는 지용성이므로 지방이 포함된 식사와 함께 섭취하면 흡수가 높아집니다. 공복 복용 시 비린내·트림이 심한 경우 식사 중 복용 또는 캡슐형 re-esterified TG 제품으로 전환하는 것이 도움이 됩니다.</p>' },

    { type: 'h2', id: 'target', text: '이런 사람에게 추천 / 비추천' },
    { type: 'body', html: '<p><strong>추천</strong></p><ul><li>생선을 잘 먹지 않는 사람</li><li>혈중 중성지질이 높아 식이 개선이 필요한 사람</li><li>건조한 눈을 자주 호소하는 사람</li></ul><p><strong>비추천 / 주의</strong></p><ul><li>와파린 등 항응고제 복용자</li><li>수술 2주 전후</li><li>해산물 알레르기</li></ul>' },

    { type: 'h2', id: 'interactions', text: '부작용 · 의약품 상호작용' },
    { type: 'warning', html: '<p>흔한 경미한 이상: 비린내 트림, 소화불량, 설사. 드물게 출혈 경향 증가. 항응고제·항혈소판제 복용자는 반드시 담당의와 상의하세요.</p>' },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000339884', productName: '뉴트리원 초임계 알티지 오메가3 코큐텐', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000339884/480_1000339884_ITEM2024050311253.png', price: 20500 },
        { nutrioneId: '1000326749', productName: '뉴트리원 초임계 알티지 오메가3 트리플', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000326749/480_1000326749_ITEM2024121094715.png', price: 85900 },
        { nutrioneId: '1000530728', productName: '뉴트리원 초임계 식물성 알티지 오메가3 DHA EPA+', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000530728/480_1000530728_ITEM2025051961036.png', price: 100300 },
      ],
    },

    { type: 'h2', id: 'compare', text: '비슷한 영양제 비교' },
    { type: 'body', html: '<p>같은 목적(혈행 개선)의 다른 옵션: <a href="/supplements/coq10/">코엔자임Q10</a>. 다만 기능성은 서로 다릅니다.</p>' },

    { type: 'h2', id: 'food-alt', text: '식품으로 대체하기' },
    { type: 'body', html: '<p>고등어·꽁치·연어 같은 등 푸른 생선을 주 2~3회 섭취하면 충분한 오메가3를 보충할 수 있습니다. 들기름·호두도 보조 공급원이지만 EPA·DHA 전환율은 낮습니다.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: 'rTG와 EE 형태는 어떤 차이가 있나요?', a: 'rTG(재에스테르화 트리글리세라이드)는 EE(에틸에스테르) 대비 흡수율이 높은 것으로 보고됩니다. 다만 식약처 기능성 원료 인정 기준을 충족한 제품이면 둘 다 사용 가능합니다.' },
      { q: '매일 꾸준히 먹어야 하나요?', a: '기능성은 꾸준한 섭취를 기준으로 합니다. 장기 섭취 시 주기적으로 담당의와 필요성을 재평가하는 것이 좋습니다.' },
      { q: '임신 중에도 안전한가요?', a: '성분상 문제는 적지만 수은 등 오염 관리가 잘 된 제품을 선택하고, 담당의 상담을 권장합니다.' },
      { q: '식물성(ALA) 오메가3로 대체 가능한가요?', a: 'ALA는 EPA·DHA로의 전환율이 매우 낮아 같은 효과를 기대하기 어렵습니다.' },
    ]},

    { type: 'productSlot', productKey: 'omega-3' },

    { type: 'sources', items: [
      { label: '식품의약품안전처 건강기능식품정보 — 오메가3', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '국가건강정보포털 — 영양소 정보', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
