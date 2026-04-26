const post = {
  id: 'S0002',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 편두통은 한쪽 머리가 박동성으로 4~72시간 지속되고, 빛·소리 민감·메스꺼움을 동반하는 1차성 두통입니다. 급성기는 조기 진통제와 환경 조절이 핵심이고, 잦은 경우에는 예방적 관리가 필요합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-it', text: '편두통의 특징' },
    { type: 'body', html: '<p>편두통은 한쪽 머리에 박동성 통증이 나타나고, 빛(광과민)·소리(음과민)·냄새에 민감해지며, 메스꺼움·구토가 동반되는 경우가 많습니다. 일부는 통증 전에 번쩍임·시야 변화 같은 전조증상(aura)이 나타나기도 합니다. 세계적으로 성인 인구의 10% 이상에서 보고됩니다.</p>' },

    { type: 'h2', id: 'triggers', text: '흔한 유발 요인' },
    { type: 'body', html: '<ul><li>수면 부족·과다, 생활 리듬 변동</li><li>월경·호르몬 변화</li><li>스트레스와 스트레스 해소 직후</li><li>특정 음식(가공육·치즈·초콜릿·와인 등, 개인차)</li><li>카페인 과다·금단</li><li>강한 빛·소음·기상 변화</li></ul>' },

    { type: 'h2', id: 'acute-care', text: '급성기 대처' },
    { type: 'body', html: '<p>어둡고 조용한 장소에서 안정을 취하고 수분을 섭취합니다. 조기에 일반의약품 진통제를 용법·용량에 맞게 복용하는 편이 통증 고조를 막는 데 도움이 될 수 있습니다. 얼음 찜질이 박동성 통증에 도움이 되는 경우가 있습니다.</p>' },

    { type: 'h2', id: 'prevention', text: '예방적 관리' },
    { type: 'body', html: '<ul><li>수면 시간 규칙화</li><li>식사 거르지 않기</li><li>개인 유발 요인 기록 (두통 일기)</li><li>마그네슘·코엔자임Q10 등 영양 보충 (의료진 상담 후)</li><li>월 4회 이상 발생 시 예방약 처방 대상이 될 수 있음 — 의료 상담</li></ul>' },

    { type: 'h2', id: 'when-to-see-doctor', text: '병원에 가야 하는 경우' },
    { type: 'warning', html: '<p>다음에 해당하면 의료 상담이 필요합니다.</p><ul><li>월 4회 이상 반복되어 일상에 지장</li><li>일반의약품 진통제로 조절되지 않음</li><li>평소와 다른 양상의 두통</li><li>전조증상이 60분 이상 지속</li></ul>' },

    { type: 'h2', id: 'emergency', text: '응급실 즉시 방문 신호' },
    { type: 'emergency', html: '<p><strong>즉시 119 또는 응급실에 연락하세요.</strong></p><ul><li>지금까지 없었던 "최악의 두통"이 갑자기 발생</li><li>마비·언어 장애·의식 저하 동반</li><li>두통 이후 발열과 목 뻣뻣함</li></ul>' },

    { type: 'h2', id: 'otc', text: '도움될 수 있는 일반의약품' },
    { type: 'body', html: '<ul><li><a href="/otc/ibuprofen/">이부프로펜 계열</a> — 급성기에 흔히 사용</li><li><a href="/otc/tylenol-acetaminophen/">아세트아미노펜</a> — 위장 민감자에게 대안</li></ul><p>트립탄(편두통 전용 처방약)은 OTC가 아니므로 의료 상담이 필요합니다.</p>' },

    { type: 'h2', id: 'supplements', text: '도움될 수 있는 영양제' },
    { type: 'body', html: '<ul><li><a href="/supplements/magnesium/">마그네슘</a></li><li><a href="/supplements/coq10/">코엔자임Q10</a></li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '편두통은 유전인가요?', a: '가족력이 흔히 보고되지만, 환경·생활습관도 크게 작용합니다.' },
      { q: '임신 중 진통제는?', a: '임신 중 약물 선택은 반드시 담당의와 상의하세요.' },
      { q: '두통 일기를 써야 하나요?', a: '유발 요인 파악과 예방 전략 수립에 크게 도움이 됩니다.' },
      { q: '편두통 전조증상은 얼마나 오래 가나요?', a: '보통 5~60분, 이후 통증이 시작됩니다. 60분 이상 지속·반복되면 의료 평가가 필요합니다.' },
    ]},

    { type: 'productSlot', productKey: 'migraine-relief' },

    { type: 'sources', items: [
      { label: '국가건강정보포털 — 편두통', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
      { label: '대한두통학회 편두통 진료 지침 (일반 참고)', url: 'https://www.headache.or.kr', org: '대한두통학회', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
