const post = {
  id: 'U0002',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 마그네슘은 신경·근육 기능 유지와 에너지 생성에 관여하는 필수 미네랄입니다. 근육 경련, 수면 질, 편두통 보조 관리 등에 도움이 될 수 있다는 보고가 있습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'functionality', text: '어떤 효과가 있나' },
    { type: 'body', html: '<ul><li>에너지 이용에 필요</li><li>신경과 근육 기능 유지</li><li>뼈 형성에 필요</li></ul>' },

    { type: 'h2', id: 'dosage', text: '하루 권장 섭취량' },
    { type: 'info', html: '<p>한국인 영양소 섭취 기준(2020): 성인 남 350mg, 여 280mg. 보충제는 식사 섭취와 합산해 상한 섭취량을 넘지 않도록 주의합니다.</p>' },

    { type: 'h2', id: 'forms', text: '형태별 차이 (산화·시트르산·글리시네이트)' },
    { type: 'body', html: '<ul><li>산화 마그네슘 — 저렴하지만 흡수율 낮음, 설사 유발 가능</li><li>시트르산 마그네슘 — 흡수율 양호</li><li>글리시네이트 — 위장 자극 적고 이완에 도움 가능</li></ul>' },

    { type: 'h2', id: 'side-effects', text: '부작용 & 주의' },
    { type: 'warning', html: '<p>과량 복용 시 설사, 복부 불편. 신장 기능 저하자는 체내 축적 위험으로 담당의 상담이 필요합니다.</p>' },

    { type: 'h2', id: 'compare', text: '비슷한 영양제' },
    { type: 'body', html: '<p><a href="/supplements/coq10/">코엔자임Q10</a> (편두통 보조 관리 관점)</p>' },

    { type: 'h2', id: 'food-alt', text: '식품으로 대체' },
    { type: 'body', html: '<p>녹색 잎채소, 견과류(아몬드·캐슈넛), 통곡물, 검은콩, 바나나.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '언제 먹는 것이 좋나요?', a: '수면 목적은 취침 1~2시간 전, 근육 경련 목적은 운동 후 또는 저녁에 나누어 섭취합니다.' },
      { q: '칼슘·철분과 같이 먹어도 되나요?', a: '흡수 경쟁이 있어 2~3시간 간격을 두는 것이 이상적입니다.' },
      { q: '설사가 나면 어떻게 하나요?', a: '산화 마그네슘에서 시트르산·글리시네이트로 전환하면 증상이 완화되는 경우가 많습니다.' },
    ]},

    { type: 'productSlot', productKey: 'magnesium' },

    { type: 'sources', items: [
      { label: '식약처 건강기능식품정보 — 마그네슘', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '한국인 영양소 섭취 기준 2020', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
