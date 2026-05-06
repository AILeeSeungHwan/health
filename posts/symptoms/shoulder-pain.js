// posts/symptoms/shoulder-pain.js
const post = {
  id: 'S0008',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 어깨 통증의 3대 원인은 회전근개 파열·오십견(유착성 관절낭염)·충돌증후군입니다. 원인에 따라 치료가 완전히 달라지므로 정확한 감별이 중요합니다. 6주 이상 지속되거나 야간 통증이 심하면 영상 검사를 권장합니다.</p><div class="meta-row"><span class="tag">부위: 어깨·회전근개</span> <span class="tag tag-medium">심각도: 중간</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'anatomy', text: '어깨 구조 — 왜 자주 아픈가' },
    {
      type: 'body',
      html: '<p>어깨는 인체에서 가동 범위가 가장 넓은 관절입니다. 이 광범위한 움직임은 회전근개(4개 근육·힘줄 묶음)와 어깨세모근 등이 협력해서 가능하게 합니다. 넓은 가동 범위 때문에 구조적 안정성이 낮고, 힘줄 마모나 충돌이 일어나기 쉽습니다.</p>',
    },

    { type: 'h2', id: 'three-causes', text: '3대 원인 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">질환</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">주 연령</th><th style="padding:8px;border:1px solid #ddd">가동 범위</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>회전근개 파열</strong></td><td style="padding:8px;border:1px solid #ddd">팔을 들거나 돌릴 때 약화·통증, 야간 통증</td><td style="padding:8px;border:1px solid #ddd">40~60대+</td><td style="padding:8px;border:1px solid #ddd">제한 있으나 수동 거상은 가능</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>오십견(유착성 관절낭염)</strong></td><td style="padding:8px;border:1px solid #ddd">능동·수동 모두 심하게 제한, 입기·머리 감기 어려움</td><td style="padding:8px;border:1px solid #ddd">40~60대</td><td style="padding:8px;border:1px solid #ddd">수동 거상도 제한 (핵심)</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>충돌증후군</strong></td><td style="padding:8px;border:1px solid #ddd">팔을 60~120° 들 때 통증 구간, 전완 돌림 시 통증</td><td style="padding:8px;border:1px solid #ddd">30~50대</td><td style="padding:8px;border:1px solid #ddd">특정 각도에서만 통증</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">※ 세 질환이 동시에 존재할 수 있어 정확한 진단은 MRI·초음파가 필요합니다.</p>',
    },

    { type: 'h2', id: 'self-check', text: '집에서 구분해보는 자가 테스트' },
    {
      type: 'body',
      html: '<p><strong>수동 거상 테스트</strong>: 아프지 않은 팔로 아픈 팔을 위로 천천히 들어올려 보세요.</p><ul><li>아픈 팔을 남의 손으로 올릴 수 있지만 혼자 들면 약하다 → 회전근개 파열 가능성</li><li>남의 손으로 올려도 180° 이상 안 된다 → 오십견 가능성</li><li>60~120° 구간만 아프고 그 외에는 괜찮다 → 충돌증후군 가능성</li></ul><p style="font-size:13px;color:#888">자가 테스트는 참고 수준입니다. 정확한 진단은 반드시 전문의 진찰과 영상 검사로 확인하세요.</p>',
    },

    { type: 'h2', id: 'home-care', text: '집에서 해볼 수 있는 대처' },
    {
      type: 'body',
      html: '<p><strong>급성기(첫 48~72시간)</strong>: 아이스팩 15~20분, 무거운 짐 들기 자제, 머리 위 동작 줄이기.</p><p><strong>아급성기 이후</strong>: 온찜질 15분, 진자 운동(팔을 아래로 늘어뜨려 원 그리기), 어깨 범위 회복 스트레칭.</p><p><strong>주의</strong>: 오십견은 무리하게 통증을 참으며 억지로 팔을 올리면 오히려 악화될 수 있습니다. 통증 없는 범위에서 부드럽게 움직이세요.</p>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>4~6주 이상 통증 지속 또는 점점 심해지는 경우</li><li>야간에 자려고 누우면 어깨가 특히 심하게 아픈 경우 (회전근개 파열 의심)</li><li>팔을 전혀 들지 못할 정도로 범위가 제한된 경우</li><li>외상 후(넘어지거나 충격) 즉각적인 심한 통증</li><li>어깨 주사 치료를 고려하거나 수술 여부 판단 필요 시</li></ul>',
    },

    { type: 'h2', id: 'mri-info', text: '어깨MRI는 언제 필요한가' },
    {
      type: 'body',
      html: '<p>어깨 초음파는 회전근개 파열을 빠르게 확인하는 데 유용하고, MRI는 힘줄 전층·부분층 파열 구분, 관절낭 병변 평가에 더 정확합니다. 6주 이상 보존 치료에도 호전이 없거나, 수술을 고려할 때 MRI가 필요합니다. 정형외과·재활의학과에서 처방받을 수 있습니다.</p>',
    },

    { type: 'h2', id: 'otc', text: '도움될 수 있는 일반의약품' },
    {
      type: 'body',
      html: '<ul><li><strong>NSAIDs(이부프로펜·나프록센)</strong> — 급성 염증·통증 완화. 식후 복용.</li><li><strong>소염 외용제 (케토프로펜·디클로페낙 패치)</strong> — 국소 적용, 위장 부담 적음.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '어깨 충돌증후군 주사가 효과 있나요?',
          a: '코르티코스테로이드 주사(스테로이드 주사)는 급성기 통증 완화에 단기적으로 효과적입니다. 그러나 반복 주사는 힘줄 약화를 유발할 수 있어 연간 3~4회 이상은 권장하지 않습니다. 주사는 통증을 줄여 운동 치료를 가능하게 하는 보조 수단입니다.',
        },
        {
          q: '회전근개 파열은 꼭 수술을 해야 하나요?',
          a: '부분층 파열이나 소파열(2cm 미만)은 보존 치료로 기능 회복이 가능한 경우가 많습니다. 전층 파열이면서 근력 약화가 심하거나 보존 치료 3~6개월에도 효과가 없을 때 봉합 수술을 고려합니다.',
        },
        {
          q: '오십견이 자연 치유되나요?',
          a: '오십견은 대개 1~3년에 걸쳐 자연 회복되지만, 그 과정에서 심한 통증이 수개월 지속됩니다. 물리치료·주사·도수치료를 통해 회복 기간을 단축하고 기능 손실을 최소화할 수 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 어깨 통증', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-07' },
        { label: 'MSD Manual — 회전근개 부상', url: 'https://www.msdmanuals.com/ko-kr/home/bone-joint-and-muscle-disorders/shoulder-disorders/rotator-cuff-injury', org: 'MSD Manual', accessedAt: '2026-05-07' },
        { label: '대한정형외과학회 — 어깨 질환', url: 'https://www.koa.or.kr/', org: '대한정형외과학회', accessedAt: '2026-05-07' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
