// posts/guides/diet-principles.js
const post = {
  id: 'G0002',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>다이어트 원칙 완벽 가이드.</strong> 단순히 굶는 것은 근손실과 요요를 부르는 지름길입니다. 칼로리 균형, 단백질 섭취, 운동 조합까지 — 과학적 근거 기반의 다이어트 식단 원칙을 정리했습니다. 체중을 지속적으로 감량하고 유지하고 싶은 분을 위한 실전 가이드입니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>칼로리만 줄이면 된다고 믿고 살다가 근손실로 더 찌기 쉬운 몸을 만들었다. 다이어트 원칙을 제대로 안 게 세 번 실패한 후였다. 먹는 것만큼 무엇을 먹느냐, 어떻게 먹느냐가 더 중요하다는 걸 뒤늦게 배웠다.</p>" },


    { type: 'h2', id: 'calorie-basics', text: '칼로리 적자의 기본 원칙' },
    {
      type: 'body',
      html: '<p>체중 감량의 핵심은 <strong>칼로리 적자</strong>입니다. 소비 칼로리보다 섭취 칼로리가 적으면 몸은 저장된 에너지(지방·근육)를 사용합니다. 하루 300~500kcal 적자를 유지하면 주 0.3~0.5kg 감량이 가능하며, 이 범위를 지키는 것이 근손실 예방과 요요 방지에 중요합니다.</p><ul><li><strong>기초대사량(BMR)</strong> — 아무것도 하지 않아도 소비되는 칼로리. 해리스-베네딕트 공식 등으로 추정.</li><li><strong>활동대사량(TDEE)</strong> — BMR × 활동 계수. 이 값에서 300~500kcal를 뺀 것이 목표 섭취 칼로리.</li><li><strong>급격한 제한 금지</strong> — 하루 1,000kcal 이하로 섭취하면 근손실이 가속화되고 신진대사가 낮아져 다이어트 종료 후 요요 위험이 높아집니다.</li><li><strong>주간 평균으로 관리</strong> — 하루하루 편차는 있어도 주간 평균 칼로리가 목표 범위에 있으면 됩니다.</li></ul>',
    },

    { type: 'h2', id: 'protein', text: '단백질: 근손실 방지의 핵심 영양소' },
    {
      type: 'body',
      html: '<p>다이어트 중 가장 중요한 영양소는 <strong>단백질</strong>입니다. 칼로리를 줄이면서도 단백질을 충분히 섭취해야 근육 분해를 억제하고 다이어트 식단을 지속할 수 있습니다.</p><ul><li><strong>권장량</strong> — 체중 1kg당 1.6~2.2g. 체중 70kg 기준 하루 112~154g 목표.</li><li><strong>포만감</strong> — 단백질은 지방·탄수화물보다 포만감 지속 시간이 길어 과식을 줄이는 데 유리합니다.</li><li><strong>열 생성 효과</strong> — 단백질은 소화 과정에서 섭취 칼로리의 약 25~30%를 에너지로 소비(탄수화물은 6~8%, 지방은 2~3%).</li><li><strong>좋은 공급원</strong> — 닭가슴살, 두부, 달걀흰자, 그릭요거트, 연어, 콩류, 저지방 유제품.</li></ul><p class="callout-mild">※ 신장 기능에 문제가 있다면 고단백 식단 전 의료기관과 상담하세요.</p>',
    },

    { type: 'h2', id: 'carbs', text: '탄수화물: 줄이되 끊지 말 것' },
    {
      type: 'body',
      html: '<p>탄수화물을 완전히 끊으면 단기간에 체중이 빠지지만 대부분 수분 손실이며 지속하기 어렵고 <strong>요요</strong> 위험이 높습니다.</p><ul><li><strong>복합 탄수화물 선택</strong> — 현미, 귀리, 고구마, 통곡물은 혈당을 완만하게 올려 포만감이 오래 지속됩니다.</li><li><strong>정제 탄수화물 최소화</strong> — 흰쌀밥, 흰빵, 설탕 음료는 혈당 스파이크 후 빠른 공복감을 유발합니다.</li><li><strong>섭취 타이밍</strong> — 운동 전후에 탄수화물을 배치하면 에너지 효율이 높아지고 근손실 억제에 도움이 됩니다.</li><li><strong>다이어트 식단 비율 기준</strong> — 총 칼로리의 40~50% 범위에서 개인별 조정 권장.</li></ul>',
    },

    { type: 'h2', id: 'fat', text: '지방: 좋은 지방은 다이어트 중에도 필요하다' },
    {
      type: 'body',
      html: '<p>지방은 칼로리가 높지만(1g = 9kcal), 완전히 배제하면 지용성 비타민(A·D·E·K) 흡수가 방해되고 호르몬 균형이 흐트러질 수 있습니다.</p><ul><li><strong>불포화지방산 우선</strong> — 아보카도, 올리브오일, 견과류, 연어의 오메가3는 대사 건강에 기여합니다.</li><li><strong>포화지방 제한</strong> — 삼겹살, 버터, 치즈는 적당량 유지.</li><li><strong>트랜스지방 제거</strong> — 마가린, 튀긴 가공식품은 가급적 피합니다.</li><li><strong>목표 지방 비율</strong> — 총 칼로리의 25~35%. 극단적인 저지방 식단은 식단 지속성을 해칩니다.</li></ul>',
    },

    { type: 'h2', id: 'meal-timing', text: '식사 타이밍과 간헐적 단식' },
    {
      type: 'body',
      html: '<p>식사 타이밍이 체중에 미치는 영향은 총 칼로리보다 작지만, 식욕 조절과 지방 연소 패턴에 영향을 줄 수 있습니다.</p><ul><li><strong>간헐적 단식 16:8</strong> — 16시간 공복, 8시간 식사. 총 칼로리를 자연스럽게 줄이는 데 도움이 되는 분이 많습니다. 당뇨·저혈당 환자는 의료진 상담 필수.</li><li><strong>아침 식사</strong> — 건너뛰어도 되지만 고단백 아침은 하루 식욕 조절에 유리합니다.</li><li><strong>늦은 밤 간식</strong> — 총 칼로리 초과로 이어지는 경우가 많아 주의가 필요합니다.</li><li><strong>5:2 단식</strong> — 주 5일은 정상 식사, 2일은 500~600kcal로 제한하는 방식. 일부 연구에서 체중 감량에 도움이 될 수 있다고 보고됩니다.</li></ul>',
    },

    { type: 'h2', id: 'exercise', text: '운동: 유산소 + 근력 운동의 조합' },
    {
      type: 'body',
      html: '<p>다이어트 중 운동은 칼로리 소비를 높이고 <strong>근손실</strong>을 억제하며 장기적인 기초대사량 유지에 핵심 역할을 합니다.</p><ul><li><strong>근력 운동 주 2~3회</strong> — 근육을 유지하면 쉬는 동안에도 칼로리 소비가 높게 유지됩니다. 스쿼트, 데드리프트, 벤치프레스 등 복합 운동이 효율적.</li><li><strong>유산소 운동</strong> — 걷기, 조깅, 자전거 등 주 150~300분. 중간 강도(최대 심박수의 60~70%)가 지방 연소에 효과적.</li><li><strong>HIIT</strong> — 고강도 인터벌 트레이닝은 짧은 시간에 칼로리를 많이 소비하지만 회복 시간이 필요해 주 2회 이내 권장.</li><li><strong>일상 활동량(NEAT) 늘리기</strong> — 계단 이용, 서서 일하기, 짧은 산책 등 일상 속 움직임도 칼로리 소비에 의미 있게 기여합니다.</li></ul>',
    },

    { type: 'h2', id: 'yoyo', text: '요요 없이 체중을 유지하는 법' },
    {
      type: 'body',
      html: '<p><strong>요요</strong>는 급격한 다이어트 후 체중이 원래대로 돌아오거나 더 늘어나는 현상입니다. 신진대사 적응, 호르몬 변화, 심리적 반동이 복합적으로 작용합니다.</p><ul><li><strong>서서히 감량</strong> — 주당 0.5kg 이하의 속도가 근육 보존에 유리하며 요요 위험이 낮습니다.</li><li><strong>역방향 다이어트</strong> — 목표 체중 도달 후 바로 이전 식사량으로 돌아가면 지방이 우선 축적됩니다. 주 100~200kcal씩 천천히 늘려야 합니다.</li><li><strong>체중 모니터링</strong> — 매일 같은 시간(기상 후 공복)에 측정해 주간 평균으로 추세를 파악합니다.</li><li><strong>수면 충분히</strong> — 수면 부족은 그렐린(식욕 촉진 호르몬) 분비를 높여 과식 위험을 높입니다. 하루 7~8시간 목표.</li><li><strong>스트레스 관리</strong> — 만성 스트레스는 코르티솔 분비를 높여 복부 지방 축적을 촉진합니다.</li></ul>',
    },

    { type: 'h2', id: 'diet-patterns', text: '근거가 있는 다이어트 식단 패턴 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">식단 패턴</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">주의 대상</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>지중해식</strong></td><td style="padding:8px;border:1px solid #ddd">채소·통곡물·올리브오일·생선 중심. 심혈관 건강 근거 풍부.</td><td style="padding:8px;border:1px solid #ddd">특별 제한 없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>DASH 식단</strong></td><td style="padding:8px;border:1px solid #ddd">나트륨 제한, 채소·과일·저지방 단백질 강조. 혈압 관리에도 유리.</td><td style="padding:8px;border:1px solid #ddd">특별 제한 없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>고단백 저칼로리</strong></td><td style="padding:8px;border:1px solid #ddd">단백질 비중 30~40%. 근손실 방지에 가장 직접적인 근거.</td><td style="padding:8px;border:1px solid #ddd">신장 기능 저하자</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>케토제닉</strong></td><td style="padding:8px;border:1px solid #ddd">탄수화물 5% 이하, 지방 주 에너지원. 단기 효과 있으나 장기 지속성 개인차 큼.</td><td style="padding:8px;border:1px solid #ddd">당뇨·신장 질환자는 반드시 의료진 상담</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'diet-food', text: '다이어트 식단 구성 예시' },
    {
      type: 'body',
      html: '<p>아래는 1,500~1,800kcal 수준의 하루 식단 예시입니다. 개인 활동량과 체중에 따라 조정이 필요합니다.</p><ul><li><strong>아침</strong> — 그릭요거트 150g + 귀리 40g + 바나나 반 개 (약 350kcal, 단백질 20g)</li><li><strong>점심</strong> — 현미밥 150g + 닭가슴살 구이 120g + 샐러드 (올리브오일 드레싱) (약 550kcal)</li><li><strong>간식</strong> — 달걀 2개 + 아몬드 15알 (약 250kcal)</li><li><strong>저녁</strong> — 두부 150g + 채소볶음 + 고구마 100g (약 400kcal)</li></ul><p>총 섭취 칼로리 약 1,550kcal, 단백질 약 130g. <em>실제 식단은 개인 신체 조건과 선호에 맞게 조정하세요.</em></p>',
    },

    { type: 'h2', id: 'supplements-section', text: '보조 수단으로 활용할 수 있는 영양제' },
    {
      type: 'body',
      html: '<p>영양제는 식단과 운동을 보조하는 역할에 그칩니다. 단독으로 체중을 감량시키는 "마법 영양제"는 없습니다.</p><ul><li><a href="/supplements/omega-3/"><strong>오메가3</strong></a> — 중성지방 수치 개선에 도움이 될 수 있다고 식약처에서 기능성을 인정. 지방 대사에 보탬이 됩니다.</li><li><a href="/supplements/magnesium/"><strong>마그네슘</strong></a> — 수면 질 개선을 통해 간접적으로 식욕 조절에 도움이 될 수 있습니다.</li><li><strong>단백질 보충제(프로틴)</strong> — 식사로 단백질 목표량을 채우기 어려울 때 보조 수단으로 활용 가능.</li><li><strong>카페인</strong> — 운동 수행 능력 개선과 단기 지방 연소 보조 효과가 연구되어 있으나 내성이 생길 수 있습니다.</li></ul>',
    },
    { type: 'productSlot', productKey: 'diet-protein' },

    { type: 'h2', id: 'mindset', text: '체중 감량을 방해하는 심리 함정' },
    {
      type: 'body',
      html: '<ul><li><strong>보상 심리</strong> — "운동했으니 더 먹어도 된다"는 생각. 30분 걷기로 소비되는 칼로리(150~200kcal)는 생각보다 적습니다.</li><li><strong>지나친 제한</strong> — 특정 음식을 완전히 금지하면 오히려 폭식 충동을 키웁니다. 80:20 규칙(80%는 건강하게, 20%는 유연하게)이 지속성에 유리합니다.</li><li><strong>체중 수치 집착</strong> — 근력 운동으로 근육이 늘면 체중 변화가 없어도 체지방은 줄고 있을 수 있습니다. 사진·체지방률·허리 둘레를 함께 확인하세요.</li><li><strong>모 아니면 도</strong> — "오늘 하루 망쳤으니 다음 주부터 다시 시작"이라는 생각은 금물. 한 끼 과식이 전체를 망치지는 않습니다.</li></ul>',
    },

    {
      type: 'warning',
      html: '<p><strong>의료기관 상담이 필요한 경우:</strong></p><ul><li>3개월 이상 체중 감량 노력에도 변화가 없을 때 (갑상선·대사 질환 확인 필요)</li><li>하루 1,200kcal 이하로 제한하는 경우</li><li>당뇨, 심장 질환, 신장 질환, 섭식 장애 이력이 있는 경우</li><li>과도한 탈모, 심한 피로, 어지러움이 동반될 때</li></ul>',
    },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    {
      type: 'faq',
      items: [
        {
          q: '다이어트 중 근손실을 막으려면 어떻게 해야 하나요?',
          a: '단백질을 체중 1kg당 1.6~2.2g 이상 섭취하고, 주 2~3회 근력 운동을 유지하는 것이 핵심입니다. 칼로리 적자를 하루 500kcal 이내로 유지하는 것도 중요합니다.',
        },
        {
          q: '요요가 생기지 않게 하려면?',
          a: '급격한 감량보다 주 0.3~0.5kg씩 천천히 감량하고, 목표 달성 후 식사량을 주 100~200kcal씩 단계적으로 늘리는 역방향 다이어트를 권장합니다. 근력 운동으로 기초대사량을 유지하는 것도 중요합니다.',
        },
        {
          q: '다이어트 식단에서 탄수화물을 완전히 끊어야 하나요?',
          a: '끊을 필요는 없습니다. 정제 탄수화물(흰쌀밥, 빵, 설탕)을 줄이고 복합 탄수화물(현미, 고구마, 귀리)을 적정량 유지하는 것이 지속 가능성과 요요 방지에 더 유리합니다.',
        },
        {
          q: '간헐적 단식이 다이어트에 효과적인가요?',
          a: '총 칼로리 섭취를 자연스럽게 줄이는 데 도움이 되는 사람이 많습니다. 그러나 당뇨, 저혈당, 섭식 장애 이력이 있는 경우 의료진 상담 후 시작하세요.',
        },
        {
          q: '다이어트 중 치팅데이가 도움이 되나요?',
          a: '엄격한 칼로리 제한 중 주 1회 유지 칼로리 수준으로 올리는 "리피드(Refeed)"는 스트레스 감소와 렙틴 수준 회복에 도움이 될 수 있습니다. 다만 폭식으로 이어지지 않도록 주의가 필요합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '한국건강증진개발원 — 비만 예방 및 관리', url: 'https://www.khepi.or.kr/', org: '한국건강증진개발원', accessedAt: '2026-05-03' },
        { label: '질병관리청 국가건강정보포털 — 비만', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-03' },
        { label: 'MSD Manual 한국어판 — 비만 개요', url: 'https://www.msdmanuals.com/ko-kr/home/nutritional-disorders/obesity/obesity', org: 'MSD Manual', accessedAt: '2026-05-03' },
        { label: '식품의약품안전처 — 건강기능식품 기능성 정보', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-03' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
