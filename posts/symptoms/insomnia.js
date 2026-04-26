const post = {
  id: 'S0003',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 불면증은 잠들기 어렵거나(입면 장애), 자주 깨거나(유지 장애), 너무 일찍 깨는(조기 각성) 수면 문제의 총칭입니다. 3주 이상 지속되면 만성 불면으로 분류되며 의료 상담이 권장됩니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-it', text: '불면증의 정의' },
    { type: 'body', html: '<p>주 3회 이상, 3개월 이상 지속되는 수면 문제로 일상에 지장이 있는 경우 만성 불면으로 봅니다. 원인은 스트레스·불안·생활 리듬·카페인·알코올·소음·기저 질환·약물 부작용 등 매우 다양합니다.</p>' },

    { type: 'h2', id: 'sleep-hygiene', text: '수면 위생 원칙' },
    { type: 'body', html: '<ul><li>같은 시각 취침·기상</li><li>낮잠은 30분 이하</li><li>오후 3시 이후 카페인 지양</li><li>취침 1~2시간 전 강한 조명·디지털 기기 최소화</li><li>침실 온도 18~22°C, 어둡고 조용하게</li><li>침대는 잠·성생활 외 용도로 쓰지 않기</li></ul>' },

    { type: 'h2', id: 'supplements', text: '도움될 수 있는 영양제' },
    { type: 'body', html: '<ul><li><a href="/supplements/magnesium/">마그네슘</a> — 근육 이완과 수면 질 개선에 보탬이 될 수 있습니다.</li><li>멜라토닌 — 국내는 전문의약품으로 분류되어 의료 상담이 필요합니다.</li></ul>' },

    { type: 'h2', id: 'when-to-see-doctor', text: '병원에 가야 하는 경우' },
    { type: 'warning', html: '<p>다음에 해당하면 의료 상담을 권장합니다.</p><ul><li>3주 이상 지속되는 불면</li><li>심한 주간 졸음·집중력 저하로 일상 지장</li><li>코골이·수면 중 호흡 정지 동반 의심</li><li>우울·불안 동반</li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '수면유도제를 계속 먹어도 되나요?', a: '장기 복용은 의존성 우려가 있어 원칙적으로 단기 사용입니다. 담당의 관리가 필요합니다.' },
      { q: '잠이 안 오면 침대에 계속 누워 있어야 하나요?', a: '20분 이상 잠이 안 오면 일어나 어두운 조명에서 가벼운 활동 후 다시 눕는 것이 권장됩니다.' },
      { q: '운동은 언제 하는 게 좋나요?', a: '취침 3시간 전까지는 마치는 편이 좋습니다.' },
    ]},

    { type: 'productSlot', productKey: 'sleep-aid' },

    { type: 'sources', items: [
      { label: '국가건강정보포털 — 불면증', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
      { label: 'MSD Manual — 불면증', url: 'https://www.msdmanuals.com/ko-kr', org: 'MSD', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
