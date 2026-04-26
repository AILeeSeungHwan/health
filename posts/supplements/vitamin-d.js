const post = {
  id: 'U0003',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 비타민 D는 칼슘 흡수와 뼈·치아 형성에 필요한 지용성 비타민입니다. 실내 활동이 많은 한국인에서 결핍 비율이 높아 보충이 권장되는 경우가 많지만, 과량은 부작용이 있어 검사 후 조절이 이상적입니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'functionality', text: '식약처 인정 기능성' },
    { type: 'body', html: '<ul><li>칼슘과 인 흡수 및 이용에 필요</li><li>뼈와 치아 형성에 필요</li><li>뼈와 근육 기능 유지에 필요</li></ul>' },

    { type: 'h2', id: 'dosage', text: '하루 권장 섭취량' },
    { type: 'info', html: '<p>일반 성인 충분 섭취량: 10μg(400IU). 결핍이 확인된 경우 의료진 지시에 따라 더 높은 용량을 단기·중기 사용하기도 합니다.</p>' },

    { type: 'h2', id: 'deficiency', text: '결핍 위험 집단' },
    { type: 'body', html: '<ul><li>실내 활동 위주</li><li>자외선 차단제를 많이 사용하는 경우</li><li>고령자</li><li>모유 수유 영아</li><li>피부색이 짙은 경우</li></ul>' },

    { type: 'h2', id: 'sunlight', text: '햇빛 노출과의 관계' },
    { type: 'body', html: '<p>얼굴·팔을 일주일에 2~3회, 한 번에 10~30분 정도 햇빛에 노출하면 일부 보충이 가능합니다. 다만 지역·계절·나이·피부색에 따라 차이가 크며, 자외선 피부 영향도 고려해야 합니다.</p>' },

    { type: 'h2', id: 'overdose', text: '과량 섭취 주의' },
    { type: 'warning', html: '<p>지용성으로 체내 축적 위험이 있어 상한 섭취량(100μg/4,000IU)을 넘지 않도록 합니다. 고용량 장기 섭취는 고칼슘혈증·신결석 위험이 보고됩니다.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '비타민 D2와 D3 중 뭐가 좋나요?', a: 'D3(콜레칼시페롤)가 혈중 농도 상승·유지에 효율적입니다.' },
      { q: '칼슘과 함께 먹어도 되나요?', a: '함께 섭취하면 흡수에 도움이 됩니다.' },
      { q: '결핍 검사는 어디서?', a: '내과·가정의학과에서 혈중 25(OH)D 검사를 받을 수 있습니다.' },
    ]},

    { type: 'productSlot', productKey: 'vitamin-d' },

    { type: 'sources', items: [
      { label: '식약처 건강기능식품정보 — 비타민 D', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '한국인 영양소 섭취 기준 2020 — 비타민 D', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
