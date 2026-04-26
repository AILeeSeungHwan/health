const post = {
  id: 'T0001',
  calculator: 'bmi',
  sections: [
    { type: 'intro', html: '<p>BMI(체질량지수)는 키와 체중으로 비만·저체중을 빠르게 가늠하는 가장 널리 쓰이는 지표입니다. 위 계산기에 키와 체중을 입력하면 즉시 결과가 나오고, WHO 아시아 태평양 기준에 따라 저체중/정상/과체중/비만 구간을 안내합니다. 다만 BMI는 근육량과 체지방을 구분하지 않기 때문에 <strong>체성분·허리둘레와 함께 해석</strong>하는 것이 가장 안전합니다.</p>' },

    { type: 'h2', id: 'interpretation', text: '내 BMI 결과, 어떻게 읽을까' },
    { type: 'body', html: '<p>BMI는 하나의 숫자지만, 같은 숫자라도 체형·활동량·연령·성별에 따라 의미가 달라집니다. 아래 구간은 일반 성인 기준의 초기 해석으로 활용하세요.</p>' },

    { type: 'h3', id: 'under', text: '18.5 미만 — 저체중' },
    { type: 'body', html: '<p>단백질·에너지 부족, 만성 질환, 섭식장애 등이 배경일 수 있습니다. 체중이 빠지고 있는 방향이라면 원인을 먼저 확인해야 합니다. 체중 유지가 오래 이어진 저체중이라면 단백질 섭취 확인과 근력 운동 병행이 우선입니다. 단백질 권장량은 <a href="/tools/daily-protein/">단백질 계산기</a>에서 확인할 수 있습니다.</p>' },

    { type: 'h3', id: 'normal', text: '18.5~22.9 — 정상' },
    { type: 'body', html: '<p>대사성 위험이 가장 낮은 범위로 알려져 있습니다. 현재 식습관·운동·수면 관리가 유효하다는 신호이므로 변동보다 <strong>유지·개선</strong>에 초점을 두는 것이 좋습니다.</p>' },

    { type: 'h3', id: 'over', text: '23~24.9 — 과체중' },
    { type: 'body', html: '<p>당뇨·고혈압·이상지질혈증 위험이 조금씩 높아지기 시작하는 구간입니다. 아직 큰 개입 없이도 식습관 교정·주 150분 운동만으로 정상 구간으로 이동할 수 있는 경우가 많습니다. 체지방이 내장지방 위주인지 허리둘레도 함께 확인하세요.</p>' },

    { type: 'h3', id: 'obese1', text: '25~29.9 — 1단계 비만' },
    { type: 'body', html: '<p>적극적인 체중 감량과 정기 건강검진이 권장됩니다. 6개월 이내 체중의 5~10% 감량을 1차 목표로 설정하고, 기저 질환 관리도 함께 살핍니다.</p>' },

    { type: 'h3', id: 'obese2', text: '30 이상 — 2단계 비만' },
    { type: 'body', html: '<p>단독 식이·운동 관리만으로는 달성이 어려운 경우가 많아, 가정의학과·내분비내과 상담을 병행하는 편이 안전합니다. 동반 질환의 조기 발견과 개입이 중요합니다.</p>' },

    { type: 'h2', id: 'how-it-works', text: 'BMI 계산 원리와 역사' },
    { type: 'body', html: '<p>BMI는 19세기 벨기에 통계학자 아돌프 케틀레가 제안한 "케틀레 지수"가 기원으로, 제2차 세계대전 이후 WHO·NIH가 인구 집단의 비만 평가 지표로 채택하면서 국제 표준이 되었습니다. 공식은 단순합니다.</p><p style="background:#F8FAFC;padding:14px 18px;border-radius:10px;font-family:monospace;font-size:15px;text-align:center">BMI = 체중(kg) ÷ 키(m)²</p><p>WHO 서태평양·아시아태평양 지역은 아시아인의 체형·대사 특성을 반영해 <strong>23 이상을 과체중, 25 이상을 비만</strong>으로 보는 더 엄격한 기준을 권장합니다. 본 계산기는 이 아시아 기준을 적용합니다.</p>' },

    { type: 'h2', id: 'limit', text: 'BMI만으로 판단하면 놓치는 것들' },
    { type: 'body', html: '<p>BMI는 편리하지만 한계도 뚜렷합니다. 다음 상황에서는 <strong>단독 판정이 어렵습니다.</strong></p>' },

    { type: 'h3', id: 'l-athlete', text: '근육량이 많은 운동인' },
    { type: 'body', html: '<p>보디빌더·야구 선수처럼 근육이 많으면 BMI가 높게 나오지만 실제 체지방은 낮을 수 있습니다. 이런 경우 체지방률·제지방량을 함께 봐야 의미가 있습니다.</p>' },

    { type: 'h3', id: 'l-elderly', text: '고령자' },
    { type: 'body', html: '<p>근육량이 줄고 체지방 비율이 늘어나면 BMI는 "정상"이라도 근감소증이 진행됐을 수 있습니다. <strong>악력·일어서기 테스트</strong>로 근기능을 함께 평가합니다.</p>' },

    { type: 'h3', id: 'l-waist', text: '복부 비만 — BMI가 정상이어도 위험' },
    { type: 'body', html: '<p>내장지방이 많은 "마른 비만"은 BMI가 정상이지만 대사 위험이 높습니다. 허리둘레 기준은 남성 90cm, 여성 85cm 이상이면 복부 비만으로 분류합니다.</p>' },

    { type: 'h2', id: 'action', text: '결과별 실천 가이드' },
    { type: 'body', html: '<p>숫자를 확인했으면 다음은 실천입니다. 일반적인 방향은 다음과 같습니다.</p>' },

    { type: 'h3', id: 'a-under', text: '저체중 — 단백질·근력 운동 우선' },
    { type: 'body', html: '<p>체중 kg 당 단백질 1.2~1.6g, 주 2~3회 근력 운동, 충분한 수면. 체중이 유지되거나 감소 중이라면 원인(갑상선·소화기·스트레스 등) 점검을 병행합니다.</p>' },

    { type: 'h3', id: 'a-over', text: '과체중·비만 — 월 2kg 내외 점진 감량' },
    { type: 'body', html: '<p>급격한 감량은 근육 소실·요요로 이어지기 쉽습니다. 일일 섭취 -300~500kcal + 주 150분 이상 운동이 현실적 목표입니다. 칼로리 기준은 <a href="/tools/bmr/">기초대사량 계산기</a>에서 확인할 수 있습니다.</p>' },

    { type: 'h3', id: 'a-water', text: '수분·식이섬유 기본 유지' },
    { type: 'body', html: '<p>체중 관리 중에는 근육 유지와 포만감 관리를 위해 수분·식이섬유가 필수입니다. 필요량은 <a href="/tools/water-intake/">물 섭취량 계산기</a>로 확인하세요.</p>' },

    { type: 'h2', id: 'mistakes', text: '흔한 오해와 실수' },
    { type: 'body', html: '<ul><li><strong>"BMI가 정상이니 안전하다"</strong> — 허리둘레·혈압·혈당·지질을 함께 봐야 합니다.</li><li><strong>단시간 대폭 감량</strong> — 수분 빠짐·근육 소실이 대부분이고 요요로 이어집니다.</li><li><strong>체중계 숫자에만 의존</strong> — 근육이 늘면 체중은 그대로라도 체형이 개선됩니다.</li><li><strong>지방만 감량</strong> — 근력 운동 없이 유산소만 하면 근육도 함께 빠집니다.</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: 'BMI 하나만으로 비만 진단이 되나요?', a: '참고 지표이며 허리둘레·체지방률·혈액검사와 함께 해석합니다.' },
      { q: '어린이·청소년도 같은 기준인가요?', a: '아닙니다. 소아·청소년은 연령·성별 성장 도표 기준(백분위수)을 사용합니다.' },
      { q: '임산부 BMI는 어떻게 봐야 하나요?', a: '임신 전 BMI로 적정 체중 증가 범위를 참고하며, 임신 중 BMI 자체는 판정 기준이 아닙니다.' },
      { q: 'BMI와 체지방률은 다른 건가요?', a: '네. BMI는 체중/키의 비, 체지방률은 몸 전체 무게 중 지방 비율입니다. 목적에 따라 병행 해석합니다.' },
      { q: '얼마나 자주 측정해야 하나요?', a: '체중 관리 중이라면 주 1회 같은 시각(아침 공복)이 적절합니다.' },
    ]},

    { type: 'sources', items: [
      { label: 'WHO Asia-Pacific Perspective on BMI', url: 'https://www.who.int', org: 'WHO', accessedAt: '2026-04-25' },
      { label: '대한비만학회 비만 진료 지침', url: 'https://general.kosso.or.kr', org: '대한비만학회', accessedAt: '2026-04-25' },
      { label: '국가건강정보포털 — 비만', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-25' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
