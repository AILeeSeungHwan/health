const post = {
  id: 'O0001',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 아세트아미노펜 500mg 정제의 대표 제품. 해열·진통 효과가 있으며 위장 부담이 상대적으로 적어 공복 복용이 가능하지만, 간 질환자·음주 잦은 사람은 용량 관리가 중요합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'indications', text: '어떤 증상에 쓰이나' },
    { type: 'body', html: '<p>식약처 의약품안전나라 등록 적응증은 두통·신경통·치통·생리통·근육통·관절통·허리 통증 등의 통증 완화와 감기로 인한 발열 완화입니다.</p>' },

    { type: 'h2', id: 'mechanism', text: '주성분과 작용' },
    { type: 'body', html: '<p>아세트아미노펜(Acetaminophen, 미국명 Paracetamol)은 중추신경계에서 통증 신호와 체온 조절에 관여하는 것으로 알려져 있습니다. 이부프로펜과 달리 말초 염증 억제 효과는 약해 소염 효과는 제한적이며, 그만큼 위장관 부담도 상대적으로 적습니다.</p>' },

    { type: 'h2', id: 'dosage', text: '용법·용량 (식약처 표기)' },
    { type: 'info', html: '<p><strong>성인:</strong> 1회 500~1000mg (1~2정), 4~6시간 간격. 1일 최대 4000mg을 넘지 않습니다.</p><p><strong>12세 미만 소아:</strong> 연령·체중별 별도 용량. 시럽·어린이용 제제를 우선 사용합니다.</p><p>정확한 복용법은 제품 설명서와 약사 상담을 따르세요.</p>' },

    { type: 'h2', id: 'side-effects', text: '부작용' },
    { type: 'warning', html: '<p>일반적으로 내약성이 좋지만 드물게 다음 이상반응이 보고됩니다.</p><ul><li>발진·가려움 같은 과민반응</li><li>오심·구토</li><li>장기·과량 복용 시 간기능 이상</li></ul>' },

    { type: 'h2', id: 'contraindications', text: '복용 금기' },
    { type: 'warning', html: '<p>다음에 해당하면 복용을 피하거나 의사·약사와 상담하세요.</p><ul><li>중증 간장애</li><li>아세트아미노펜 과민반응 병력</li></ul>' },

    { type: 'h2', id: 'interactions', text: '약물 상호작용' },
    { type: 'warning', html: '<p>와파린 등 항응고제, 일부 간대사 약물과 병용 시 간독성·출혈 경향 변화가 보고됩니다. 복합 감기약·종합감통제에 같은 성분이 들어 있는 경우가 많아 중복 복용에 주의가 필요합니다.</p>' },

    { type: 'h2', id: 'pregnancy', text: '임산부·수유부·소아 주의' },
    { type: 'warning', html: '<p>임신 중 단기 저용량 사용은 비교적 안전한 편으로 알려져 있으나 담당의와 상담이 권장됩니다. 수유부도 일반적으로 허용되지만 최소 유효 용량 원칙을 따릅니다.</p>' },

    { type: 'h2', id: 'overdose', text: '과량 복용 시 (중요)' },
    { type: 'emergency', html: '<p><strong>권장량 초과 복용은 간독성 위험이 큽니다.</strong> 성인 기준 하루 4g 초과 복용이 의심되면 즉시 1339 응급의료정보센터 또는 가까운 응급실에 연락하세요. 증상이 없어도 간 손상은 시간이 지나서 나타날 수 있습니다.</p>' },

    { type: 'h2', id: 'alternatives', text: '비슷한 의약품 / 대체 선택' },
    { type: 'body', html: '<ul><li><a href="/otc/ibuprofen/">이부프로펜 계열</a> — 염증성 통증·관절통에 유리. 공복·위염 주의.</li></ul>' },

    { type: 'h2', id: 'related-symptoms', text: '관련 증상' },
    { type: 'body', html: '<ul><li><a href="/symptoms/headache/">두통</a></li><li><a href="/symptoms/migraine/">편두통</a></li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '공복에 먹어도 되나요?', a: '아세트아미노펜은 위장 자극이 적어 공복 복용이 가능합니다. 다만 오심이 있다면 약간의 음식과 함께 드세요.' },
      { q: '음주 중에 복용해도 되나요?', a: '알코올은 간독성 위험을 높입니다. 음주일·숙취일에는 특히 용량 관리가 필요합니다.' },
      { q: '다른 진통제와 같이 먹어도 되나요?', a: '같은 성분이 복합 감기약에도 들어 있어 중복 복용 위험이 있습니다. 성분을 꼭 확인하거나 약사와 상의하세요.' },
      { q: '어린이에게 어떻게 주나요?', a: '어린이용 시럽·현탁제를 체중에 맞춰 사용하세요. 12세 미만은 성인 정제를 임의로 쪼개 주지 않습니다.' },
    ]},

    { type: 'productSlot', productKey: 'tylenol-500' },

    { type: 'sources', items: [
      { label: '식품의약품안전처 의약품안전나라 — 타이레놀정 500mg', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '국가건강정보포털 — 해열·진통제 안전 사용', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
