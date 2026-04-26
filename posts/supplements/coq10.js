const post = {
  id: 'U0004',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 코엔자임Q10은 세포 에너지 생성에 관여하는 성분으로, 식약처 인정 기능성은 항산화와 높은 혈압 감소에 도움입니다. 일부 편두통 예방 보조 연구 보고가 있습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'functionality', text: '식약처 인정 기능성' },
    { type: 'body', html: '<ul><li>항산화에 도움</li><li>높은 혈압 감소에 도움 (일일 섭취량 기준 충족 시)</li></ul>' },

    { type: 'h2', id: 'dosage', text: '하루 권장 섭취량' },
    { type: 'info', html: '<p>기능성 원료 기준 하루 <strong>90~150mg</strong>. 제품별 표기가 우선입니다.</p>' },

    { type: 'h2', id: 'timing', text: '복용 시점 & 흡수' },
    { type: 'body', html: '<p>지용성이므로 식사 중 복용 시 흡수가 더 좋습니다. 유비퀴놀(환원형)은 유비퀴논(산화형)보다 흡수율이 높은 것으로 알려져 있습니다.</p>' },

    { type: 'h2', id: 'interactions', text: '주의 & 상호작용' },
    { type: 'warning', html: '<p>스타틴 복용자는 스타틴이 체내 CoQ10 농도를 낮춘다는 보고가 있습니다. 와파린 효과에 영향을 줄 수 있어 항응고제 복용자는 담당의와 상의해야 합니다.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '편두통에 도움이 되나요?', a: '일부 예방 연구에서 빈도 감소가 보고되지만, 편두통 전용 치료제는 아닙니다.' },
      { q: '운동 능력에 영향 있나요?', a: '연구 결과가 일관되지 않습니다. 필수 성분으로 선택하기보다 기본 영양 관리 후 보조로 고려합니다.' },
    ]},

    { type: 'productSlot', productKey: 'coq10' },

    { type: 'sources', items: [
      { label: '식약처 건강기능식품정보 — 코엔자임Q10', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
