const post = {
  id: 'P0001',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 닭가슴살 소시지는 100g 당 단백질 14~20g, 지방 1~4g 수준의 고단백·저지방 가공식품으로, 다이어트·근육 유지·간편한 단백질 보충용으로 자주 활용됩니다.</p><p>다만 가공육 분류이므로 나트륨·식품첨가물 함량을 반드시 확인해야 하고, 자연 식재료(생닭가슴살·계란·생선)와 병행하는 균형이 중요합니다. 이 글은 영양 성분 비교 기준, 목적별 선택 가이드, 조리법, 주의해야 할 라벨 항목까지 정리합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'features', text: '제품 특징과 영양 정보' },
    { type: 'body', html: '<p>일반 소시지(돼지고기·소고기 기반) 대비 단백질 비율이 높고 지방·칼로리는 낮은 것이 핵심 특징입니다.</p>' },

    { type: 'h3', id: 'f-protein', text: '단백질 함량 — 14~20g/100g 범위' },
    { type: 'body', html: '<p>제품마다 편차가 큽니다. 18g 이상이면 우수, 14g 이하라면 단백질 보충 효율이 낮으니 다른 제품을 검토하세요. 100g 한 개로 닭가슴살 1쪽(약 23g)에 근접하는 단백질을 얻을 수 있다면 가성비가 좋습니다.</p>' },

    { type: 'h3', id: 'f-fat', text: '지방 — 1~4g/100g' },
    { type: 'body', html: '<p>다이어트 중이라면 2g 이하 제품, 근육 증량 중이라면 3~4g도 무방합니다. 단 트랜스지방 0g·포화지방 1g 미만 라벨을 우선 선택하세요.</p>' },

    { type: 'h3', id: 'f-sodium', text: '나트륨 — 가장 큰 변수' },
    { type: 'body', html: '<p>제품별 100g 당 400~900mg까지 폭이 큽니다. 한국인 일일 권장량 2,000mg 기준, 한 끼에 소시지 2개(200g)면 1,500mg을 차지할 수 있어 다른 식사의 나트륨을 크게 줄여야 합니다. 저염 라인(300mg/100g 이하)을 권장합니다.</p>' },

    { type: 'h3', id: 'f-additive', text: '식품첨가물' },
    { type: 'body', html: '<p>아질산나트륨(발색제), MSG, 인산염, 카라기난 등이 자주 첨가됩니다. 무첨가·클린라벨 제품도 많아졌으나 가격이 1.5~2배 높습니다.</p>' },

    { type: 'h2', id: 'usage', text: '사용법 & 조리법' },
    { type: 'body', html: '<p><strong>전자레인지</strong>: 포장지 채로 1분 30초~2분이면 즉시 섭취 가능. 가장 빠르지만 식감이 부드러워집니다.<br><strong>에어프라이어</strong>: 180°C 8분이면 겉면이 살짝 바삭해져 식감이 가장 좋습니다.<br><strong>끓는 물 데움</strong>: 4~5분, 나트륨 일부가 빠져 짠맛이 약해집니다.<br><strong>샐러드 토핑</strong>: 식힌 뒤 슬라이스해 닭가슴살 대용으로 활용.</p>' },

    { type: 'h2', id: 'who', text: '추천 대상' },
    { type: 'body', html: '<ul><li><strong>다이어트 중</strong> — 지방 2g 이하·나트륨 500mg 이하 제품, 1일 1개 이내</li><li><strong>근육량 증가</strong> — 단백질 18g 이상 제품을 식사 보조로 활용 (총 단백질 섭취량 우선)</li><li><strong>심혈관 질환자</strong> — 저염(나트륨 300mg 이하) 제품으로 제한</li><li><strong>도시락 / 야근 식사</strong> — 데우기만 하면 되는 간편함이 강점</li></ul>' },

    { type: 'h2', id: 'compare', text: '닭가슴살 소시지 vs 다른 단백질 식품' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="border-bottom:2px solid #E5E7EB"><th style="text-align:left;padding:10px 8px">식품</th><th style="text-align:left;padding:10px 8px">단백질</th><th style="text-align:left;padding:10px 8px">나트륨</th><th style="text-align:left;padding:10px 8px">간편성</th></tr></thead><tbody><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">닭가슴살 소시지</td><td style="padding:10px 8px">14~20g</td><td style="padding:10px 8px">400~900mg</td><td style="padding:10px 8px">★★★★★</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">생닭가슴살 (조리)</td><td style="padding:10px 8px">23g</td><td style="padding:10px 8px">60mg</td><td style="padding:10px 8px">★★★</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">계란 1개</td><td style="padding:10px 8px">6g</td><td style="padding:10px 8px">70mg</td><td style="padding:10px 8px">★★★★</td></tr><tr><td style="padding:10px 8px">참치캔 100g</td><td style="padding:10px 8px">25g</td><td style="padding:10px 8px">350mg</td><td style="padding:10px 8px">★★★★★</td></tr></tbody></table>' },

    { type: 'h2', id: 'buying-guide', text: '구매 가이드 — 라벨에서 확인할 5가지' },
    { type: 'body', html: '<ol><li><strong>단백질 18g/100g 이상</strong> 인지</li><li><strong>나트륨 500mg/100g 이하</strong> 인지 (다이어트라면 300mg 이하)</li><li><strong>아질산나트륨</strong> 표기 확인 — 무첨가 라벨 가산점</li><li><strong>원재료 닭가슴살 함량</strong> — 80% 이상이면 우수</li><li><strong>유통기한·보관 조건</strong> — 냉장(0~10°C) 또는 상온 보관 가능 제품 구분</li></ol>' },

    { type: 'h2', id: 'caution', text: '주의사항' },
    { type: 'warning', html: '<p>가공육은 WHO 산하 IARC가 "사람에 대해 발암성이 있는(Group 1)" 식품군으로 분류한 영역에 포함됩니다. 매일 다량 장기 섭취 시 일부 암 위험이 보고되어, 주 5회 이상의 의존은 권장되지 않습니다. 자연 단백질원(생닭가슴살·계란·생선·콩류)과 병행하세요. 고혈압·신부전 등 나트륨 제한이 필요한 경우 저염 제품으로 한정하고 1일 100g을 넘기지 않는 것이 안전합니다.</p>' },

    { type: 'h2', id: 'related', text: '관련 도구·제품' },
    { type: 'body', html: '<ul><li><a href="/tools/daily-protein/">단백질 권장 섭취량 계산기</a></li><li><a href="/products/whey-protein/">유청 단백질 가이드</a></li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '매일 먹어도 되나요?', a: '주 3~5회, 다른 자연 단백질원과 병행을 권장합니다.' },
      { q: '나트륨이 걱정되는데 어떻게 하나요?', a: '저염 제품(300mg/100g 이하) 선택, 끓는 물 데움 조리, 다른 식사의 나트륨 줄이기를 병행하세요.' },
      { q: '아이들도 먹어도 되나요?', a: '나트륨·첨가물 부담이 있어 어린이용 저염 제품을 우선하고 빈도를 줄이세요.' },
      { q: '실온 보관 제품과 냉장 보관 제품 차이는?', a: '실온 제품은 멸균·진공 처리되어 보존 기간이 길지만 식감이 부드러운 편입니다.' },
      { q: '운동 후 보충용으로 적합한가요?', a: '단백질 함량이 충분하면 가능합니다. 다만 흡수 속도는 유청 단백질이 더 빠릅니다.' },
    ]},

    { type: 'productSlot', productKey: 'chicken-breast-sausage' },

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
