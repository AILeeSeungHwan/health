const post = {
  id: 'P0001',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 가공 닭가슴살 소시지는 간편하게 단백질을 보충할 수 있는 대표 다이어트·근육 유지 식품입니다. 선택 시 단백질 함량, 지방, 나트륨을 반드시 함께 비교하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'features', text: '제품 특징' },
    { type: 'body', html: '<ul><li>100g 당 단백질 14~20g (제품별 편차)</li><li>지방 1~4g</li><li>나트륨 400~900mg (변동 큼)</li><li>전자레인지·에어프라이어·끓는 물 간편 조리</li></ul>' },

    { type: 'h2', id: 'how-to-use', text: '사용법' },
    { type: 'body', html: '<p>운동 후 1개(약 100g) 섭취로 단백질 15g 내외 보충 가능. 샐러드·포케볼·도시락 토핑으로 활용.</p>' },

    { type: 'h2', id: 'buying-guide', text: '구매 가이드' },
    { type: 'body', html: '<p><strong>체중 감량 중</strong>: 지방 2g 이하·나트륨 500mg 이하 선택.</p><p><strong>근육량 증가</strong>: 단백질 18g 이상·지방 허용, 총 섭취량 관리가 우선.</p><p><strong>심혈관 질환자</strong>: 저염(나트륨 300mg 이하) 제품 우선.</p>' },

    { type: 'h2', id: 'caution', text: '주의사항' },
    { type: 'warning', html: '<p>가공육 분류로 WHO는 장기 과다 섭취 시 일부 암 위험 상승 가능성을 지적합니다. 주 식단 내 비중을 너무 높이지 않고, 자연 식재료(닭가슴살·계란·생선)와 병행하세요.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '매일 먹어도 되나요?', a: '주요 단백질원으로만 의존하지 말고 주 3~5회, 총 식단 균형을 보면서 섭취하세요.' },
      { q: '나트륨 기준은?', a: '성인 하루 권장 2,000mg. 한 끼 소시지 2개가 1,500mg을 넘을 수 있어 주의가 필요합니다.' },
    ]},

    { type: 'productSlot', productKey: 'chicken-breast-sausage' },

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
