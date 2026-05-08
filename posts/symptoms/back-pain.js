// posts/symptoms/back-pain.js
const post = {
  id: 'S0004',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 허리 통증은 요추 부위에 발생하는 통증으로, 근육 염좌부터 허리디스크, 척추관 협착증까지 원인이 다양합니다.</p><div class="meta-row"><span class="tag">부위: 요추·허리</span> <span class="tag tag-medium">심각도: 중간~높음</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>이사하다가 소파를 잘못 들었는데 그 자리에서 꼼짝을 못 했다. 병원 가서 들은 건 \"안정 취하세요\" 한마디였다. 나중에 알았지만 누워만 있는 건 회복을 오히려 늦춘다. 적절히 움직이는 게 허리 회복의 핵심이라는 걸 그때 몰랐다.</p>" },


    { type: 'h2', id: 'what-is-it', text: '허리 통증이란 어떤 증상인가' },
    {
      type: 'body',
      html: '<p>허리 통증(요통)은 요추(허리뼈) 부위에서 느껴지는 통증으로, 전체 성인의 80%가 일생에 한 번 이상 경험하는 매우 흔한 증상입니다. 국내에서도 매년 수백만 명이 요통으로 의료기관을 방문하며, 업무 능력 저하와 삶의 질 감소로 이어지는 경우가 많습니다.</p><p>허리 통증은 지속 기간에 따라 4주 미만의 <strong>급성</strong>, 4~12주의 <strong>아급성</strong>, 12주 이상의 <strong>만성</strong>으로 구분합니다. 급성 요통의 대부분은 보존 치료로 호전이 가능하지만, 만성으로 이행되면 치료가 복잡해지고 재발 위험이 높아집니다. 통증 양상은 둔하고 뻐근한 느낌부터 찌르는 듯한 날카로운 통증, 다리로 뻗치는 방사통까지 매우 다양합니다.</p>',
    },

    { type: 'h2', id: 'causes', text: '주요 원인' },
    {
      type: 'body',
      html: '<ul><li><strong>근육·인대 염좌</strong> — 가장 흔한 원인(전체 요통의 약 70%). 무거운 물건을 들거나 갑작스러운 비틀림, 장시간 잘못된 자세 유지 후 발생. 대부분 2~6주 안에 회복됩니다.</li><li><strong>허리디스크 (추간판 탈출증)</strong> — 척추 사이 완충재인 디스크가 돌출되거나 파열되어 신경을 자극. 엉덩이·다리로 뻗치는 방사통(좌골신경통)이 특징. 허리디스크 수술비를 걱정하기 전, 대부분 보존 치료로 호전 가능합니다.</li><li><strong>척추관 협착증</strong> — 척추관이 좁아져 신경을 압박. 걸을수록 다리가 저리고 앉으면 편해지는 신경인성 파행이 특징. 주로 50대 이상에서 나타납니다.</li><li><strong>척추 압박 골절</strong> — 골다공증이 있는 고령자에서 가벼운 충격에도 척추뼈가 주저앉는 경우. 갑작스럽고 심한 통증.</li><li><strong>척추전방전위증</strong> — 위쪽 척추뼈가 아래 척추뼈보다 앞으로 밀려나는 상태. 서 있거나 걸을 때 통증 악화.</li><li><strong>척추측만증</strong> — 척추가 옆으로 휘는 변형. 청소년기에 자주 발견.</li><li><strong>내부 장기 문제</strong> — 신장 결석, 신우신염, 자궁내막증, 대동맥류 등이 허리 통증처럼 느껴질 수 있습니다.</li></ul>',
    },

    { type: 'h2', id: 'types-of-pain', text: '통증 유형별 특징' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">유형</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">의심 원인</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">둔한 뻐근함</td><td style="padding:8px;border:1px solid #ddd">장시간 앉기·서기 후 악화, 움직이면 완화</td><td style="padding:8px;border:1px solid #ddd">근육 염좌, 자세 문제</td></tr><tr><td style="padding:8px;border:1px solid #ddd">찌르는 날카로운 통증</td><td style="padding:8px;border:1px solid #ddd">특정 자세·동작 시 극심, 급성 발생</td><td style="padding:8px;border:1px solid #ddd">급성 염좌, 압박 골절</td></tr><tr><td style="padding:8px;border:1px solid #ddd">다리로 뻗치는 방사통</td><td style="padding:8px;border:1px solid #ddd">엉덩이→허벅지→종아리로 뻗침, 앞으로 굽힐 때 악화</td><td style="padding:8px;border:1px solid #ddd">허리디스크</td></tr><tr><td style="padding:8px;border:1px solid #ddd">걸을수록 심해지는 다리 저림</td><td style="padding:8px;border:1px solid #ddd">앉으면 완화, 신경인성 파행</td><td style="padding:8px;border:1px solid #ddd">척추관 협착증</td></tr><tr><td style="padding:8px;border:1px solid #ddd">야간 통증·발열 동반</td><td style="padding:8px;border:1px solid #ddd">쉬어도 안 나아지는 통증</td><td style="padding:8px;border:1px solid #ddd">감염, 종양 (즉시 진료)</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'home-care', text: '집에서 해볼 수 있는 대처' },
    {
      type: 'body',
      html: '<p>급성 허리 통증에는 며칠간 무리한 활동을 피하되, 완전한 침대 안정(bed rest)은 회복을 늦출 수 있으므로 가능한 범위에서 일상 활동을 유지하는 것이 권장됩니다.</p><p>1. <strong>냉찜질 (처음 48~72시간)</strong> — 수건으로 싸서 15~20분 적용. 염증·부종 억제에 도움이 됩니다.</p><p>2. <strong>온찜질 (이후)</strong> — 근육 경직 완화. 욕조에 따뜻한 물을 받아 10~15분 입욕도 효과적입니다.</p><p>3. <strong>통증 완화 자세</strong> — 바닥에 누워 무릎 아래에 베개를 받치거나, 옆으로 눕고 무릎 사이에 베개를 끼우면 요추 부담이 줄어듭니다.</p><p>4. <strong>가벼운 걷기</strong> — 48~72시간 이후부터 평지를 10~15분 걷는 것이 회복에 도움이 될 수 있습니다.</p><p>5. <strong>스트레칭</strong> — 무릎을 가슴으로 당기는 무릎-가슴 스트레칭, 고양이-소 자세 등 부드러운 허리 스트레칭이 경직을 풀어줍니다.</p>',
    },

    { type: 'h2', id: 'when-to-see-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<p>다음에 해당하면 의료기관 방문을 권장합니다.</p><ul><li>2~3주 이상 통증이 지속되거나 점점 악화될 때</li><li>다리로 뻗치는 방사통이나 다리 저림·감각 이상이 동반될 때</li><li>야간에 특히 심해지는 통증</li><li>발열, 체중 감소가 함께 나타날 때 (감염·종양 감별 필요)</li><li>50세 이상에서 낙상 없이 갑자기 극심한 통증 (압박 골절 가능성)</li><li>스테로이드 장기 복용자, 암 과거력, 면역 억제 상태인 경우</li></ul>',
    },

    { type: 'h2', id: 'emergency', text: '응급실 즉시 방문이 필요한 신호' },
    {
      type: 'emergency',
      html: '<p><strong>즉시 119 또는 응급실에 연락해야 합니다.</strong> 다음 증상이 보이면 자가 대처하지 마시고 즉시 도움을 요청하세요.</p><ul><li>대소변 조절이 갑자기 안 될 때 (말총 증후군 의심 — 응급 수술이 필요할 수 있습니다)</li><li>양쪽 다리에 동시에 힘이 빠지거나 감각이 사라질 때</li><li>항문·회음부·허벅지 안쪽 감각이 없어질 때 (말안장 마취)</li><li>허리 통증과 함께 38.5°C 이상 고열이 동반될 때</li><li>심한 외상(낙상·교통사고) 후 극심한 허리 통증</li></ul>',
    },

    { type: 'h2', id: 'otc', text: '도움될 수 있는 일반의약품' },
    {
      type: 'body',
      html: '<p>약사와 상담 후 사용하세요.</p><ul><li><a href="/otc/ibuprofen/"><strong>이부프로펜 계열 (NSAIDs)</strong></a> — 소염·진통 효과. 식후 복용, 공복 금지. 신장·위장 질환자, 임산부는 주의.</li><li><a href="/otc/tylenol-acetaminophen/"><strong>아세트아미노펜 (타이레놀)</strong></a> — 항염 효과는 없지만 진통 작용. 간 기능 저하자·음주자는 주의.</li><li><strong>파스·소염 외용제 (케토프로펜·디클로페낙 패치)</strong> — 국소 통증 부위에 직접 작용. 전신 부작용이 적어 많이 활용됩니다. 처방전 필요 제품도 있으니 약사 확인 필요.</li></ul>',
    },

    { type: 'h2', id: 'supplements', text: '도움될 수 있는 영양제' },
    {
      type: 'body',
      html: '<ul><li><a href="/supplements/omega-3/"><strong>오메가3</strong></a> — 만성 염증 완화에 보탬이 될 수 있다는 연구가 있습니다. 식약처 기능성 인정: 중성지방 개선.</li><li><a href="/supplements/magnesium/"><strong>마그네슘</strong></a> — 근육 경직과 경련 완화에 관여. 허리 근육 경직이 심한 경우 도움이 될 수 있습니다.</li><li><strong>비타민 D</strong> — 결핍 시 근골격계 통증 악화 가능. 실내 생활이 많거나 일조량이 부족한 경우 보충 고려.</li><li><strong>콜라겐/MSM</strong> — 관절·연골 건강 보조 목적으로 활용되지만, 허리 통증 직접 완화에 대한 근거는 제한적입니다.</li></ul>',
    },

    { type: 'h2', id: 'related-products', text: '관련 건강 제품' },
    { type: 'productSlot', productKey: 'back-pain' },

    { type: 'h2', id: 'lifestyle', text: '생활 습관 / 자세 개선' },
    {
      type: 'body',
      html: '<p><strong>추천:</strong></p><ul><li>의자에 앉을 때 허리를 등받이에 밀착, 30~45분마다 일어나 스트레칭</li><li>물건 들 때 무릎을 구부려 허리가 아닌 다리 힘으로</li><li>복근·코어 근력 강화 운동 꾸준히 (플랭크, 브릿지, 골반 틸트)</li><li>체중 관리 — 복부 비만은 요추 부담을 가중시킵니다</li><li>금연 — 흡연은 디스크 혈류를 줄여 퇴행을 가속합니다</li><li>중간 경도 매트리스 사용</li></ul><p><strong>피해야 할 것:</strong></p><ul><li>오래 같은 자세로 앉거나 서 있기</li><li>허리를 굽힌 채 무거운 물건 들기</li><li>고강도 운동을 급성기(처음 1~2주)에 바로 시작하기</li><li>통증을 참으며 운동 지속하기</li></ul>',
    },

    { type: 'h2', id: 'mri-info', text: '허리MRI: 언제 필요한가' },
    {
      type: 'body',
      html: '<p>허리MRI는 허리 통증의 원인(디스크 탈출, 협착, 골절, 종양 등)을 정확히 파악하는 데 유용한 검사입니다. 그러나 모든 요통에 바로 MRI가 필요한 것은 아닙니다.</p><ul><li><strong>즉시 MRI 고려</strong> — 신경학적 이상(근력 저하, 대소변 장애), 야간 통증+발열, 외상 후 극심한 통증, 암·감염 의심.</li><li><strong>6주 이상 경과 후 고려</strong> — 보존 치료에 반응이 없거나 시술·수술 계획 시.</li><li><strong>MRI 없이 치료 가능</strong> — 급성 요통에 신경학적 이상이 없다면 영상 검사 없이 임상 진단으로 치료를 시작하는 것이 가이드라인에서 권장됩니다.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '허리디스크는 꼭 수술을 해야 하나요?',
          a: '대부분의 허리디스크(90% 이상)는 수술 없이 보존 치료로 호전이 가능합니다. 신경학적 이상(근력 저하, 대소변 장애)이 생기거나 6~12주 집중 보존 치료에 반응이 없을 때 수술을 고려합니다. 허리디스크 수술비 걱정 전에 먼저 보존 치료를 충분히 시도하세요.',
        },
        {
          q: '허리 통증에 운동을 해도 되나요?',
          a: '급성기(첫 1~3일)에는 무리한 운동을 피하고 안정을 취하는 것이 좋습니다. 이후에는 가벼운 걷기부터 시작해 통증이 완화되면 점진적으로 강도를 높이는 것이 권장됩니다. 통증이 심해지면 즉시 중단하세요.',
        },
        {
          q: '좌골신경통과 허리 통증은 다른가요?',
          a: '좌골신경통은 좌골신경이 압박받아 발생하는 증상으로, 엉덩이·허벅지·종아리·발로 뻗치는 방사통이 특징입니다. 허리디스크가 가장 흔한 원인이며, 허리 통증과 함께 나타나는 경우가 많습니다.',
        },
        {
          q: '허리MRI는 어디서 찍을 수 있나요?',
          a: '정형외과, 신경외과, 재활의학과, 신경과 등에서 처방을 받아 촬영할 수 있습니다. 건강보험 적용 여부는 신경학적 이상 여부 등 임상 소견에 따라 달라지므로 의사와 상담하세요.',
        },
        {
          q: '허리 통증이 신장 문제일 수도 있나요?',
          a: '네. 신장 결석이나 신우신염은 허리·옆구리 통증으로 나타날 수 있습니다. 열이 나거나, 소변 색이 진하거나, 소변 시 통증이 동반된다면 내과·비뇨의학과 진료를 권장합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 요통', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-03' },
        { label: 'MSD Manual 한국어판 — 요통', url: 'https://www.msdmanuals.com/ko-kr/home/bone-joint-and-muscle-disorders/low-back-and-neck-pain/overview-of-low-back-pain', org: 'MSD Manual', accessedAt: '2026-05-03' },
        { label: '대한정형외과학회 — 척추 질환 정보', url: 'https://www.koa.or.kr/', org: '대한정형외과학회', accessedAt: '2026-05-03' },
        { label: '건강보험심사평가원 — 요통 통계', url: 'https://www.hira.or.kr/', org: '건강보험심사평가원', accessedAt: '2026-05-03' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
