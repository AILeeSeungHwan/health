const post = {
  id: 'U0002',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 마그네슘은 우리 몸에서 300종 이상의 효소 반응에 관여하는 필수 미네랄입니다. 신경·근육 기능, 에너지 생성, 뼈 형성에 필요하며 식약처가 인정한 기능성 원료입니다.</p><p>한국인 영양소 섭취 기준에 따르면 성인 남성 350mg, 여성 280mg이 권장되지만, 가공식품 위주 식단·잦은 외식·과도한 카페인·알코올 섭취가 결핍을 부추깁니다. 이 글은 마그네슘의 식약처 인정 기능성, 형태별 흡수 차이, 복용 시점, 부작용·상호작용, 식품 대체까지 정리합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'functionality', text: '식약처 인정 기능성' },
    { type: 'body', html: '<ul><li>에너지 이용에 필요</li><li>신경과 근육 기능 유지에 필요</li><li>뼈 형성에 필요</li></ul><p>이 외에 수면·근육 경련 완화·편두통 예방 보조 등에 도움이 된다는 연구가 있지만, 식약처 인정 기능성과 별개임을 구분해 이해하세요.</p>' },

    { type: 'h2', id: 'dosage', text: '하루 권장 섭취량' },
    { type: 'info', html: '<p>한국인 영양소 섭취 기준(2020): 성인 남성 350mg, 여성 280mg. 상한 섭취량은 보충제 형태 기준 350mg/일(식품 마그네슘은 상한 적용 X). 보충제는 식사 섭취량과 합산해 계산하세요.</p>' },

    { type: 'h2', id: 'forms', text: '형태별 차이 — 어떤 마그네슘이 좋은가' },
    { type: 'body', html: '<p>같은 "마그네슘"이라도 결합된 화합물에 따라 흡수율과 부작용이 크게 달라집니다.</p>' },

    { type: 'h3', id: 'f-oxide', text: '산화 마그네슘 (Magnesium Oxide)' },
    { type: 'body', html: '<p>가장 저렴하고 마그네슘 함량은 높지만 흡수율이 4~10% 수준으로 낮습니다. 흡수 안 된 부분이 장으로 가서 변비·완하 효과를 내므로 변비약 용도로 더 자주 쓰입니다.</p>' },

    { type: 'h3', id: 'f-citrate', text: '시트르산 마그네슘 (Magnesium Citrate)' },
    { type: 'body', html: '<p>흡수율이 25~30% 정도로 양호하고 가격도 합리적입니다. 다만 다량 복용 시 설사 가능성은 여전히 있어 처음엔 권장량의 절반부터 시작하는 편이 안전합니다.</p>' },

    { type: 'h3', id: 'f-glycinate', text: '글리시네이트 (Magnesium Glycinate)' },
    { type: 'body', html: '<p>아미노산 글리신과 결합한 형태로 위장 자극이 적고 이완 효과가 좋아 수면·근육 경련 목적에 자주 추천됩니다. 가격이 다른 형태의 1.5~2배 수준입니다.</p>' },

    { type: 'h3', id: 'f-malate', text: '말산 마그네슘 (Magnesium Malate)' },
    { type: 'body', html: '<p>피로·근육통 보조 목적에 자주 쓰이며 위장 부담도 적습니다. 아침 복용에 적합합니다.</p>' },

    { type: 'h2', id: 'timing', text: '복용 시점 & 흡수 팁' },
    { type: 'body', html: '<p>수면·근육 이완 목적이면 취침 1~2시간 전, 피로 회복·운동 후 회복 목적이면 저녁 식사와 함께가 일반적입니다. 칼슘·철과 함께 먹으면 흡수 경쟁이 일어나므로 2~3시간 간격을 두세요.</p>' },

    { type: 'h2', id: 'target', text: '추천 / 비추천 대상' },
    { type: 'body', html: '<p><strong>추천</strong></p><ul><li>잦은 야간 다리 경련</li><li>편두통 예방 보조 목적</li><li>스트레스·과긴장으로 잠들기 어려움</li><li>잦은 음주·카페인 섭취</li><li>녹색 채소·견과류 섭취가 적은 식단</li></ul><p><strong>비추천 / 주의</strong></p><ul><li>중증 신장 기능 저하 (체내 축적 위험)</li><li>중증 심부전</li><li>일부 항생제·갑상선약 복용 중 (흡수 간섭 — 시간 간격 필요)</li></ul>' },

    { type: 'h2', id: 'side-effects', text: '부작용 & 상호작용' },
    { type: 'warning', html: '<p>가장 흔한 부작용은 설사·복부 불편으로, 산화 마그네슘에서 빈번합니다. 글리시네이트·시트르산으로 전환하면 대부분 완화됩니다. 신장 기능 저하자는 체내 축적으로 고마그네슘혈증이 발생할 수 있어 담당의 상담이 필수입니다. 테트라사이클린·퀴놀론 항생제, 비스포스포네이트, 갑상선약과 복용 시 2~6시간 간격을 두는 것이 권장됩니다.</p>' },

    { type: 'h2', id: 'compare', text: '비슷한 영양제 비교' },
    { type: 'body', html: '<p>같은 목적(수면 보조·편두통 예방)으로 함께 검토되는 영양제: <a href="/supplements/coq10/">코엔자임Q10</a>(편두통 예방 보조), 비타민 B6(마그네슘과 자주 복합 처방).</p>' },

    { type: 'h2', id: 'food-alt', text: '식품으로 대체하기' },
    { type: 'body', html: '<p>녹색 잎채소(시금치·근대), 견과류(아몬드 100g당 270mg, 캐슈넛 270mg), 통곡물(현미·귀리), 콩류(검은콩·렌틸), 다크초콜릿(70%+), 바나나가 풍부한 공급원입니다. 매일 견과 한 줌 + 녹색채소 1접시면 일일 권장량의 절반을 채울 수 있습니다.</p>' },

    { type: 'h2', id: 'related', text: '관련 증상·상황' },
    { type: 'body', html: '<ul><li><a href="/symptoms/insomnia/">불면증</a></li><li><a href="/symptoms/headache/">두통</a> · <a href="/symptoms/migraine/">편두통</a></li><li><a href="/situations/sleep-issue/">잠 안 올 때 종합 가이드</a></li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '언제 먹는 것이 좋나요?', a: '수면 목적은 취침 1~2시간 전, 근육 경련 목적은 운동 후 또는 저녁에 나눠 섭취합니다.' },
      { q: '칼슘·철분과 같이 먹어도 되나요?', a: '흡수 경쟁이 있어 2~3시간 간격을 두는 것이 이상적입니다.' },
      { q: '설사가 나면 어떻게 해야 하나요?', a: '산화 마그네슘에서 시트르산·글리시네이트로 전환하면 증상이 완화되는 경우가 많습니다.' },
      { q: '효과는 언제부터 느껴지나요?', a: '근육 경련은 1~2주, 수면·편두통 예방은 4주 이상 꾸준히 복용 후 평가하는 것이 일반적입니다.' },
      { q: '임신 중에도 안전한가요?', a: '권장량 범위 내 식이·보충제 사용은 일반적으로 허용되지만 담당의 상담을 우선합니다.' },
    ]},

    { type: 'productSlot', productKey: 'magnesium' },

    { type: 'sources', items: [
      { label: '식약처 건강기능식품정보 — 마그네슘', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-27' },
      { label: '한국인 영양소 섭취 기준 2020', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-27' },
      { label: 'NIH ODS — Magnesium Fact Sheet', url: 'https://ods.od.nih.gov', org: 'NIH', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
