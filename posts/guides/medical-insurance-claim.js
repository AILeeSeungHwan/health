// posts/guides/medical-insurance-claim.js
const post = {
  id: 'G0005',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 실손의료보험은 국민건강보험 적용 후 본인 부담 의료비를 일정 비율(통상 80~90%)로 돌려주는 보험입니다. 청구를 안 하면 보험료를 낸 의미가 없어지지만, 놓치기 쉬운 청구 항목과 절차를 몰라 손해 보는 경우가 많습니다. 이 가이드에서 핵심을 정리합니다.</p><div class="meta-row"><span class="tag">분류: 금융·건강 가이드</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 실손보험 상품은 세대별·특약 구성이 달라 정확한 보장 범위는 본인 보험 약관 또는 보험사 고객센터에서 확인하세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>실손보험이 있는데 청구 방법을 몰라서 영수증을 그냥 버린 적이 있었다. 알고 보니 청구 기한도 있고 항목마다 보장 여부가 다르다. 보험료는 내면서 정작 받을 수 있는 걸 못 받는 경우가 많다.</p>" },

{ type: 'callout', html: "<p>실손보험이 있는데 청구 방법을 몰라서 영수증을 그냥 버린 적이 있었다. 알고 보니 청구 기한도 있고 항목마다 보장 여부가 다르다. 보험료는 내면서 정작 받을 수 있는 걸 못 받는 경우가 많다.</p>" },,

    { type: 'h2', id: 'what-is-it', text: '실손보험 기본 구조' },
    {
      type: 'body',
      html: '<p>실손의료보험(실비보험)은 실제 의료비 지출액을 기준으로 보상합니다. 보험 가입 세대에 따라 보장 범위가 다릅니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">세대</th><th style="padding:8px;border:1px solid #ddd">판매 기간</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">1·2세대</td><td style="padding:8px;border:1px solid #ddd">~2009년</td><td style="padding:8px;border:1px solid #ddd">본인부담금 100% 보장, 고보장</td></tr><tr><td style="padding:8px;border:1px solid #ddd">3세대</td><td style="padding:8px;border:1px solid #ddd">2009~2017년</td><td style="padding:8px;border:1px solid #ddd">급여 90%·비급여 80% 보장, 자기부담금 최소</td></tr><tr><td style="padding:8px;border:1px solid #ddd">4세대(현행)</td><td style="padding:8px;border:1px solid #ddd">2021년~</td><td style="padding:8px;border:1px solid #ddd">급여·비급여 분리. 비급여 항목 자기부담금 30%. 도수치료 등 특약 분리.</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'claimable', text: '청구 가능한 주요 항목' },
    {
      type: 'body',
      html: '<p><strong>입원 의료비</strong>: 입원 기간 전체의 급여·비급여 치료비, 입원실 차액(1~2인실 일부 지원 세대별 차이). 약제비·처치비·간호비 포함.</p><p><strong>외래 진료비</strong>: 병의원·한의원 외래 진료비·처방약. 세대에 따라 자기부담금 공제 후 청구. 4세대는 외래 방문당 또는 연간 한도가 적용됩니다.</p><p><strong>처방약제비</strong>: 의사 처방에 의한 의약품. 비처방 일반의약품(OTC)은 청구 불가.</p><p><strong>응급 처치비</strong>: 응급실 이용료.</p><p><strong>비급여 항목</strong>(세대별 차이): 도수치료·증식치료·초음파·MRI(비급여 시술)·체외충격파 등 — 4세대는 별도 특약.</p>',
    },

    { type: 'h2', id: 'not-claimable', text: '청구 불가 항목 (자주 실수하는 것)' },
    {
      type: 'warning',
      html: '<ul><li><strong>미용·성형 목적 시술</strong>: 쌍꺼풀·코 성형·지방흡입 등 외모 개선 목적.</li><li><strong>예방접종</strong>: 인플루엔자·대상포진·HPV 등 예방 목적 백신.</li><li><strong>건강검진</strong>: 일반 건강검진(예방 목적). 단, 검진 중 발견된 이상 소견에 대한 추가 확진 검사는 청구 가능.</li><li><strong>임신·출산 관련</strong>: 정상 분만비·산전검사 일부(단, 합병증 치료는 가능).</li><li><strong>치과 치료</strong>: 보철(임플란트·틀니)·교정 등. 단, 외상으로 인한 치과 치료나 악성 종양 관련은 가능.</li><li><strong>안경·콘택트렌즈</strong>: 시력 교정 보조기구.</li></ul>',
    },

    { type: 'h2', id: 'how-to-claim', text: '청구 방법 (종이 vs 앱)' },
    {
      type: 'body',
      html: '<p><strong>서류 청구</strong>: 진단서·진료비 영수증·세부 내역서를 보험사에 우편·팩스·방문 제출.</p><p><strong>앱 간편 청구</strong>: 손해보험·생명보험사 앱에서 영수증 사진만으로 간편 청구 가능(영수증 간편 청구 서비스). 소액 외래비는 수분 내 처리되는 경우도 있습니다.</p><p><strong>실손24 앱</strong>: 금융감독원이 운영하는 실손보험 전문 청구 앱. 여러 보험사 상품을 한 번에 청구 가능. 병원 전산과 연계해 서류 자동 전송.</p><p><strong>청구 기한</strong>: 통상 의료비 지출일로부터 <strong>3년</strong>. 단, 약관에 따라 다를 수 있으므로 확인 필요.</p>',
    },

    { type: 'h2', id: 'denied-cases', text: '청구 거절 사례와 대응법' },
    {
      type: 'body',
      html: '<p><strong>자주 거절되는 경우</strong>:</p><ul><li>기왕증(가입 전 이미 있던 질환) 관련 치료 — 약관 상 면책 기간 중 발생한 치료</li><li>비급여 항목 중 보장 제외 특약 미가입 상태에서 청구(4세대)</li><li>세부 진료 내역서 미첨부로 인한 보장 항목 불인정</li></ul><p><strong>대응 팁</strong>: 거절 시 이의제기 서면 제출 가능. 수용되지 않으면 금융감독원 분쟁 조정 신청(무료). 고가 치료 전에 보험사 사전 확인(보장 여부 사전 문의)을 하면 불필요한 분쟁을 줄일 수 있습니다.</p>',
    },

    { type: 'h2', id: 'tips', text: '청구 실전 팁' },
    {
      type: 'body',
      html: '<ul><li>진료비 영수증과 세부 내역서는 퇴원·진료 직후 반드시 챙기세요 (나중에 재발급 시 수수료 발생).</li><li>비급여 치료(도수치료·주사 등) 전에 해당 항목이 보장되는지 먼저 보험사에 문의하면 분쟁을 예방합니다.</li><li>소액(외래 1~2만 원)도 청구 횟수 누적이 보험료 할증으로 이어질 수 있으므로(4세대 할인·할증 연동), 빈번한 소액 청구보다 일정 금액 이상 시 청구하는 전략도 고려하세요.</li><li>입원 시 상급병실(1·2인실) 차액은 급여 적용 여부와 세대별 보장 한도를 사전 확인하세요.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '3년 지난 의료비는 청구할 수 없나요?',
          a: '일반적으로 실손보험 청구권 소멸시효는 3년입니다. 다만, 소멸시효 완성 전 청구하지 못한 경우 금융감독원 분쟁 조정을 통해 다툴 여지는 있습니다. 가급적 치료 종료 직후 청구하는 습관을 갖는 것이 좋습니다.',
        },
        {
          q: '같은 병으로 여러 실손보험에 가입되어 있으면 중복으로 받을 수 있나요?',
          a: '실손보험은 실제 손해보상(실손 원칙) 원칙에 따라 중복 보장이 제한됩니다. 여러 보험사에 가입되어 있어도 실제 지출액을 초과해 지급하지 않습니다. 단, 의료비 초과분을 여러 보험사에 나눠 청구하는 방식은 가능합니다.',
        },
        {
          q: '도수치료는 실손보험에서 다 보장되나요?',
          a: '4세대(2021년 이후 가입) 상품은 도수치료·주사치료·증식치료가 별도 특약으로 분리됐습니다. 특약에 가입하지 않았다면 보장되지 않습니다. 3세대 이전 가입자는 대부분 보장되나 연간 한도와 횟수 제한이 있으니 약관 확인이 필요합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '금융감독원 — 실손의료보험 가이드', url: 'https://www.fss.or.kr/', org: '금융감독원', accessedAt: '2026-05-11' },
        { label: '건강보험심사평가원 — 급여 기준 안내', url: 'https://www.hira.or.kr/', org: '건강보험심사평가원', accessedAt: '2026-05-11' },
        { label: '보험연구원 — 실손보험 세대별 보장 비교', url: 'https://www.kiri.or.kr/', org: '보험연구원', accessedAt: '2026-05-11' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
