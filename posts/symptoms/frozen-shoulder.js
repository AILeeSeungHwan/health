// posts/symptoms/frozen-shoulder.js
const post = {
  id: 'S0010',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 오십견(유착성 관절낭염)은 어깨 관절낭이 두꺼워지고 유착되면서 팔이 굳어지는 질환입니다. 40~60대에 많고, 자연 경과만 1~3년이 걸리지만 적극 치료 시 회복 기간을 크게 단축할 수 있습니다. 수동 거상도 안 되는 것이 회전근개 파열과의 핵심 차이입니다.</p><div class="meta-row"><span class="tag">부위: 어깨 관절낭</span> <span class="tag tag-medium">심각도: 중간</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-it', text: '오십견이란' },
    {
      type: 'body',
      html: '<p>오십견의 정식 명칭은 <strong>유착성 관절낭염(Adhesive Capsulitis)</strong>입니다. 어깨 관절을 감싸는 관절낭에 만성 염증이 생기고 관절낭이 두꺼워지면서 수축·유착됩니다. 그 결과 어깨 가동 범위가 모든 방향으로 심하게 제한됩니다.</p><p>원발성(특발성) 오십견은 원인 불명이며, 당뇨병 환자에서 2~3배 높은 유병률을 보입니다. 갑상선 질환, 장기간 팔 고정(골절 후 등)도 유발 요인입니다.</p>',
    },

    { type: 'h2', id: 'stages', text: '3단계 경과' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">단계</th><th style="padding:8px;border:1px solid #ddd">기간</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>1. 동결기(Freezing)</strong></td><td style="padding:8px;border:1px solid #ddd">2~9개월</td><td style="padding:8px;border:1px solid #ddd">통증이 점점 심해지고 가동 범위가 줄어드는 시기. 야간 통증 극심. 옷 입기·머리 감기 어려워짐.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>2. 동결진행기(Frozen)</strong></td><td style="padding:8px;border:1px solid #ddd">4~12개월</td><td style="padding:8px;border:1px solid #ddd">통증은 다소 완화되지만 가동 범위 제한이 가장 심한 시기. 일상 동작(등 긁기, 운전 등) 불가능.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>3. 해동기(Thawing)</strong></td><td style="padding:8px;border:1px solid #ddd">6~24개월</td><td style="padding:8px;border:1px solid #ddd">서서히 가동 범위 회복. 통증 감소. 완전 회복까지 1~3년 소요. 10~20%는 일부 제한 잔류.</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'vs-rotator-cuff', text: '회전근개 파열과 구분법' },
    {
      type: 'body',
      html: '<p>두 질환 모두 어깨 통증과 팔 올리기 어려움이 있어 혼동됩니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">오십견</th><th style="padding:8px;border:1px solid #ddd">회전근개 파열</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">수동 거상</td><td style="padding:8px;border:1px solid #ddd">타인이 올려줘도 제한 (관절낭 수축)</td><td style="padding:8px;border:1px solid #ddd">타인이 올려주면 대개 가능 (힘줄 문제)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">통증 형태</td><td style="padding:8px;border:1px solid #ddd">모든 방향 제한, 야간 통증</td><td style="padding:8px;border:1px solid #ddd">특정 방향·각도에서 통증, 약력 저하</td></tr><tr><td style="padding:8px;border:1px solid #ddd">진단</td><td style="padding:8px;border:1px solid #ddd">X선(정상/석회화 확인) + MRI/초음파</td><td style="padding:8px;border:1px solid #ddd">초음파 또는 MRI로 파열 확인</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'treatment', text: '치료 방법과 선택 기준' },
    {
      type: 'body',
      html: '<p><strong>1단계(동결기) — 통증 조절 우선</strong></p><ul><li>NSAIDs 경구 복용</li><li>스테로이드 관절 내 주사 — 급성기 통증 감소에 효과적. 이후 운동 치료와 병행.</li><li>체외충격파 — 석회화 동반 시 보조적으로 활용.</li></ul><p><strong>2단계(동결진행기) — 가동 범위 회복</strong></p><ul><li>물리 치료 (온열·전기·초음파 치료)</li><li>도수 치료 (관절 가동술, Mobilization) — 유착 관절낭 부드럽게 이완.</li><li>수압 팽창술 — 관절낭에 식염수·스테로이드를 주입해 강제 이완. 국소 마취 후 시행.</li></ul><p><strong>3단계 이후 또는 12개월 이상 보존 치료 실패 시</strong></p><ul><li>관절경 유착 박리술 — 수술적 유착 제거. 입원 기간 1~2일. 빠른 가동 범위 회복.</li></ul>',
    },

    { type: 'h2', id: 'home-exercise', text: '집에서 하는 운동' },
    {
      type: 'body',
      html: '<ul><li><em>진자 운동(Codman 운동)</em>: 테이블에 아프지 않은 팔을 짚고 아픈 팔은 힘을 빼고 아래로 늘어뜨려 작은 원 그리기. 하루 2~3회, 회당 1~2분.</li><li><em>벽 기어 올라가기</em>: 벽에 손가락을 대고 손가락으로 벽을 기듯 천천히 위로. 통증 없는 범위에서.</li><li><em>수건 스트레칭</em>: 수건을 등 뒤에서 잡고 위쪽 팔로 아래를 당겨 어깨 이완.</li></ul><p><strong>주의</strong>: 통증을 억지로 참으며 강하게 밀어붙이면 염증을 악화시킬 수 있습니다. 통증이 없는 범위 내에서 매일 꾸준히 하는 것이 원칙입니다.</p>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>팔을 전혀 올리지 못할 만큼 급격히 가동 범위가 줄어들 때</li><li>야간 통증으로 수면이 어려울 때</li><li>3개월 이상 보존 치료에도 호전이 없을 때</li><li>당뇨병 환자로 어깨 경직이 빠르게 진행될 때</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '오십견은 그냥 놔두면 낫나요?',
          a: '자연 회복은 가능하지만 1~3년이 걸리며, 그 과정에서 통증과 일상 제한이 매우 심합니다. 치료를 받으면 회복 기간을 크게 단축하고 기능 손실을 줄일 수 있으므로 조기에 전문의를 찾는 것이 좋습니다.',
        },
        {
          q: '오십견 주사가 자주 맞으면 안 좋나요?',
          a: '스테로이드 주사는 같은 관절에 연간 3~4회 이상 반복 투여 시 힘줄 약화·관절 손상 우려가 있습니다. 단기 통증 완화 후 운동 치료와 병행하는 보조 수단으로 활용하는 것이 원칙입니다.',
        },
        {
          q: '수압 팽창술은 아픈가요?',
          a: '국소 마취 후 시행하므로 주사 시 약간의 불편감은 있으나 심한 통증은 아닙니다. 시술 후 1~2일 어깨 통증이 더 심해질 수 있으나, 이후 빠른 가동 범위 회복이 기대됩니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 오십견', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-09' },
        { label: 'MSD Manual — 유착성 관절낭염', url: 'https://www.msdmanuals.com/ko-kr/home/bone-joint-and-muscle-disorders/shoulder-disorders/frozen-shoulder', org: 'MSD Manual', accessedAt: '2026-05-09' },
        { label: '대한정형외과학회 — 어깨 질환 안내', url: 'https://www.koa.or.kr/', org: '대한정형외과학회', accessedAt: '2026-05-09' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
