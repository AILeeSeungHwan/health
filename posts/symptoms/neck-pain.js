// posts/symptoms/neck-pain.js
const post = {
  id: 'S0007',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 목 통증은 경추(목뼈) 주변 근육·인대·디스크·신경이 관여하는 증상입니다. 스마트폰·컴퓨터 사용 증가로 20~40대에서도 흔해졌으며, 대부분은 자세 개선과 스트레칭으로 완화되지만 팔 저림이 동반되면 목디스크를 의심해야 합니다.</p><div class="meta-row"><span class="tag">부위: 경추·목</span> <span class="tag tag-medium">심각도: 중간</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>재택근무 6개월 만에 아침마다 목을 돌리기가 힘들어졌다. 모니터 높이를 바꾸고 나서야 조금 나아졌다. 일자목은 엑스레이를 찍어보기 전까지 내가 그런 줄 몰랐다. 생각보다 많은 사람에게 있는 문제다.</p>" },

{ type: 'callout', html: "<p>재택근무 6개월 만에 아침마다 목을 돌리기가 힘들어졌다. 모니터 높이를 바꾸고 나서야 조금 나아졌다. 일자목은 엑스레이를 찍어보기 전까지 내가 그런 줄 몰랐다. 생각보다 많은 사람에게 있는 문제다.</p>" },,

    { type: 'h2', id: 'causes', text: '목 통증 주요 원인' },
    {
      type: 'body',
      html: '<ul><li><strong>근육·인대 긴장 (가장 흔함)</strong> — 장시간 스마트폰·컴퓨터 사용, 고개를 숙인 자세 지속, 수면 자세 불량으로 목 근육이 뭉침. 대부분 며칠~2주 내 회복.</li><li><strong>일자목(거북목, Military Neck)</strong> — 경추의 정상 전만 곡선(C자형)이 소실되어 직선화. 그 자체보다 동반된 근육 긴장과 디스크 부담이 통증 원인.</li><li><strong>목디스크 (경추 추간판 탈출증)</strong> — 경추 사이 디스크가 돌출·파열되어 신경근을 압박. 한쪽 팔로 뻗치는 방사통, 손가락 저림이 특징적. 주로 C5-6, C6-7 레벨.</li><li><strong>경추 퇴행성 변화 (골관절염)</strong> — 40대 이상에서 경추뼈·디스크의 퇴행으로 목·어깨 통증, 두통 동반.</li><li><strong>경추 척추관 협착증</strong> — 협착이 심하면 걸을 때 손 떨림, 보행 불안정까지 발생 가능.</li><li><strong>근막통 증후군</strong> — 승모근·목 주위 근육에 통증 유발점(trigger point) 형성. 두통·어깨까지 방사.</li></ul>',
    },

    { type: 'h2', id: 'straight-neck', text: '일자목 자가 확인법' },
    {
      type: 'body',
      html: '<p>벽에 등을 붙이고 똑바로 서세요. 정상이라면 뒤통수, 어깨, 엉덩이, 발꿈치가 벽에 닿습니다. 이때 <strong>뒤통수와 벽 사이 간격이 2~3cm 이상 벌어진다면</strong> 경추 전만이 감소한 일자목 가능성이 있습니다.</p><p>단, 일자목은 X선·경추 MRI로 정확히 확인해야 하며, 자가 테스트는 참고 수준입니다. 증상이 없는 일자목은 치료 대상이 아닌 경우도 많습니다.</p>',
    },

    { type: 'h2', id: 'symptoms', text: '증상 유형별 의심 질환' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">증상</th><th style="padding:8px;border:1px solid #ddd">의심 질환</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">목이 뻣뻣하고 어깨까지 묵직함</td><td style="padding:8px;border:1px solid #ddd">근육 긴장, 근막통 증후군</td></tr><tr><td style="padding:8px;border:1px solid #ddd">한쪽 팔·손가락으로 찌릿한 저림</td><td style="padding:8px;border:1px solid #ddd">목디스크 (신경근 압박)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">두 팔 모두 저리거나 힘 빠짐</td><td style="padding:8px;border:1px solid #ddd">경추 척추관 협착증 (척수 압박)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">목 뒤에서 시작해 머리로 올라오는 두통</td><td style="padding:8px;border:1px solid #ddd">경추성 두통, 근막통</td></tr><tr><td style="padding:8px;border:1px solid #ddd">목을 돌리면 특정 방향에서 딸깍 소리</td><td style="padding:8px;border:1px solid #ddd">관절면 마찰 (퇴행성 변화)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">발열·발진 동반 후 목 뻣뻣함</td><td style="padding:8px;border:1px solid #ddd">세균성 수막염 (응급)</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'home-care', text: '집에서 해볼 수 있는 대처' },
    {
      type: 'body',
      html: '<p><strong>1. 자세 교정</strong> — 모니터는 눈높이, 스마트폰은 눈 수평으로. 1시간마다 목 스트레칭 1~2분.</p><p><strong>2. 스트레칭</strong></p><ul><li><em>귀→어깨 스트레칭</em>: 오른손으로 머리를 오른쪽으로 부드럽게 당겨 15~20초 유지, 좌우 교대 3회.</li><li><em>목 반원 회전</em>: 턱을 가슴으로 내리고 좌→우 반원 그리기 (뒤로 꺾는 풀 회전은 디스크 자극 가능).</li><li><em>턱 당기기(Chin Tuck)</em>: 귀 아래쪽이 어깨 위에 오도록 목을 뒤로 당기고 5~10초. 일자목·전방 두부 자세에 효과적.</li></ul><p><strong>3. 냉·온찜질</strong> — 급성(처음 48시간): 아이스팩 15분. 이후: 온찜질 15~20분으로 근육 이완.</p><p><strong>4. 수면 자세</strong> — 너무 높거나 낮은 베개는 경추에 부담. 옆으로 잘 때는 어깨 높이에 맞는 베개 사용.</p>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>2~3주 이상 지속되거나 점점 심해지는 목 통증</li><li>팔·손가락 저림, 약력 저하가 동반될 때 (목디스크 의심)</li><li>보행 불안정, 양손 힘 빠짐, 젓가락질이 갑자기 어려워질 때 (척수 압박 의심 — 빠른 진료 필요)</li><li>목 통증 + 발열 (감염 감별)</li><li>외상(교통사고, 낙상) 후 목 통증</li></ul>',
    },

    { type: 'h2', id: 'emergency', text: '응급실 즉시 방문이 필요한 신호' },
    {
      type: 'emergency',
      html: '<p><strong>즉시 119에 연락하거나 응급실로 이동하세요.</strong></p><ul><li>심한 두통 + 고열 + 목 뻣뻣함 (세균성 수막염 의심)</li><li>목 부상 후 팔·다리 마비 또는 감각 소실</li><li>목 통증 + 삼킴 곤란 + 호흡 곤란</li></ul>',
    },

    { type: 'h2', id: 'mri', text: '경추 MRI: 언제 필요한가' },
    {
      type: 'body',
      html: '<p>팔 저림·근력 저하 등 신경 증상이 있거나, 4~6주 보존 치료 후에도 호전이 없을 때 경추 MRI를 고려합니다. 단순 근육 긴장에는 MRI가 꼭 필요하지 않습니다. 처방은 신경외과, 정형외과, 재활의학과, 신경과에서 받을 수 있습니다.</p>',
    },

    { type: 'h2', id: 'otc', text: '도움될 수 있는 일반의약품' },
    {
      type: 'body',
      html: '<p>약사 상담 후 사용하세요.</p><ul><li><strong>이부프로펜/나프록센 (NSAIDs)</strong> — 소염·진통. 근육 긴장·디스크 급성기에 활용. 식후 복용.</li><li><strong>아세트아미노펜</strong> — 염증 없는 단순 근육통에 효과적.</li><li><strong>근이완제</strong> — 근육 경련이 심한 경우 의사 처방 필요.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '목디스크는 꼭 수술해야 하나요?',
          a: '대부분의 목디스크는 수술 없이 보존 치료(약물·물리치료·주사)로 호전됩니다. 근력 저하가 진행되거나 척수 압박이 심할 때만 수술을 고려합니다.',
        },
        {
          q: '목 스트레칭을 해도 괜찮나요?',
          a: '가벼운 목 스트레칭은 근육 긴장 완화에 도움이 됩니다. 단, 목을 뒤로 꺾거나 강하게 회전하는 동작은 디스크나 신경을 자극할 수 있으니 통증이 심해지면 즉시 중단하세요.',
        },
        {
          q: '경추 MRI는 건강보험이 적용되나요?',
          a: '신경학적 증상(저림, 근력 저하 등)이 있으면 건강보험 적용이 가능합니다. 증상 없이 단순 확인 목적이면 비급여로 처리될 수 있으니 의사와 상담하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 목 통증', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-06' },
        { label: 'MSD Manual — 목 통증 개요', url: 'https://www.msdmanuals.com/ko-kr/home/bone-joint-and-muscle-disorders/low-back-and-neck-pain/overview-of-neck-pain', org: 'MSD Manual', accessedAt: '2026-05-06' },
        { label: '대한정형외과학회 — 경추 질환', url: 'https://www.koa.or.kr/', org: '대한정형외과학회', accessedAt: '2026-05-06' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
