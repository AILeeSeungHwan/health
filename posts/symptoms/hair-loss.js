// posts/symptoms/hair-loss.js
const post = {
  id: 'S0012',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 탈모는 하루 100개 이상의 머리카락이 빠지거나 모발 밀도가 눈에 띄게 감소하는 상태입니다. 원인에 따라 치료가 완전히 달라지므로 유형 파악이 먼저입니다. 탈모약은 조기 시작할수록 효과적이며, 중단 시 탈모가 재개됩니다.</p><div class="meta-row"><span class="tag">부위: 두피·모발</span> <span class="tag tag-low">심각도: 낮음</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'types', text: '탈모 유형 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">유형</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">주요 원인</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>남성형 탈모(AGA)</strong></td><td style="padding:8px;border:1px solid #ddd">이마 M자 후퇴·정수리 확산. Hamilton-Norwood 분류.</td><td style="padding:8px;border:1px solid #ddd">유전 + 안드로겐(DHT)</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>여성형 탈모</strong></td><td style="padding:8px;border:1px solid #ddd">가르마 주변·정수리 전반 밀도 감소. 이마선 유지가 남성과 다른 점.</td><td style="padding:8px;border:1px solid #ddd">유전·호르몬·폐경</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>원형 탈모</strong></td><td style="padding:8px;border:1px solid #ddd">동전 모양 원형 패치. 두피 외 눈썹·속눈썹도 가능.</td><td style="padding:8px;border:1px solid #ddd">자가면역 (T세포 공격)</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>휴지기 탈모</strong></td><td style="padding:8px;border:1px solid #ddd">전반적 급격한 탈락, 사건 후 2~4개월 후 발생.</td><td style="padding:8px;border:1px solid #ddd">출산·고열·수술·다이어트·스트레스</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>견인성 탈모</strong></td><td style="padding:8px;border:1px solid #ddd">모발을 반복적으로 강하게 당기는 헤어스타일로 발생.</td><td style="padding:8px;border:1px solid #ddd">물리적 견인</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'medications', text: '탈모약 — 효과와 부작용' },
    {
      type: 'body',
      html: '<p><strong>피나스테리드(프로페시아 등)</strong></p><ul><li>기전: DHT 생성에 관여하는 5-α 환원효소 억제 → 탈모 진행 억제 + 부분적 발모.</li><li>효과: 2년 복용 시 85% 탈모 진행 억제. 약 65%에서 발모 증가 보고.</li><li>부작용: 성욕 감퇴·발기부전(~2%), 우울 기분 드물게 보고. 여성(특히 가임 여성) 사용 금기.</li><li>중단: 복용 중단 후 6~12개월 내 탈모 재진행.</li></ul><p><strong>미녹시딜(마이녹실 등)</strong></p><ul><li>기전: 모낭 혈류 개선으로 성장기 연장.</li><li>형태: 외용(2%·5% 용액·거품), 경구 저용량(2.5~5mg, 처방 필요).</li><li>효과: 정수리 탈모에 더 효과적. 이마 후퇴에는 제한적.</li><li>부작용: 외용 — 두피 자극·가려움. 경구 — 다모증, 부종(드물게).</li></ul><p><strong>두 약제 병용</strong>: 단독보다 효과적이라는 연구 다수. 피부과·비뇨의학과 진료 후 처방.</p>',
    },

    { type: 'h2', id: 'hair-transplant', text: '모발이식 — 언제 고려하나' },
    {
      type: 'body',
      html: '<p>모발이식은 후두부 공여부 모발을 탈모 부위에 이식하는 수술입니다.</p><ul><li><strong>적합 시기</strong>: 탈모가 어느 정도 안정화(진행 속도 감소)된 시점. 약물 치료로 진행을 최대한 억제한 후.</li><li><strong>비용</strong>: 모낭 단위당 3,000~6,000원 수준(국내). 총 비용은 이식 모량에 따라 200만~500만 원 이상.</li><li><strong>방법</strong>: FUT(절개법)과 FUE(비절개법). FUE는 흉터가 작고 회복 빠름.</li><li><strong>주의</strong>: 이식 후에도 기존 모발 탈락은 계속될 수 있어 약물 치료 병행 필요.</li></ul>',
    },

    { type: 'h2', id: 'nutrition', text: '탈모와 영양 — 결핍 체크' },
    {
      type: 'body',
      html: '<ul><li><a href="/supplements/iron/"><strong>철분 결핍</strong></a> — 여성 휴지기 탈모의 중요 원인. 페리틴(혈청 저장 철분) 검사로 확인 가능.</li><li><a href="/supplements/zinc/"><strong>아연 결핍</strong></a> — 모발 구조 단백질 합성에 필요. 심한 결핍 시 탈모 유발 가능.</li><li><strong>비오틴(비타민B7)</strong> — 결핍 시 탈모 가능. 단, 결핍이 없는 경우 비오틴 보충이 탈모를 개선한다는 근거는 약함.</li><li><strong>단백질</strong> — 모발의 주 성분 케라틴은 단백질. 극단적 저단백 다이어트 시 휴지기 탈모 유발.</li><li><strong>비타민D 결핍</strong> — 모낭 주기 조절에 관여. 결핍이 탈모를 악화시킬 수 있다는 연구 있음.</li></ul>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>탈모 속도가 빠르거나 젊은 나이(20대)에 M자 탈모가 진행될 때 (조기 치료 시작이 효과적)</li><li>원형 탈모 패치가 여러 개이거나 계속 커질 때</li><li>탈모와 함께 피부 발진·가려움·통증이 동반될 때</li><li>원인 불명의 광범위 탈락이 갑자기 발생했을 때</li></ul>',
    },

    { type: 'h2', id: 'lifestyle', text: '생활습관 — 도움될 수 있는 것과 피할 것' },
    {
      type: 'body',
      html: '<p><strong>도움이 될 수 있는 것</strong>: 단백질 충분 섭취, 수면 7~8시간, 과도한 스트레스 관리, 두피 마사지(혈류 촉진 보조).</p><p><strong>피해야 할 것</strong>: 과도한 열 시술(파마·탈색), 견인 헤어스타일(하이번), 두피 강하게 긁기, 무리한 저칼로리 다이어트.</p>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '탈모약을 한번 시작하면 평생 먹어야 하나요?',
          a: '피나스테리드와 미녹시딜은 중단하면 탈모가 재개됩니다. 따라서 효과를 유지하려면 장기 복용이 필요합니다. 복용 전에 지속 복용 가능 여부와 부작용 위험을 의사와 상담하세요.',
        },
        {
          q: '원형 탈모는 자연적으로 좋아지나요?',
          a: '단발성 원형 탈모(1~2개 패치)는 50% 이상이 1년 내 자연 회복됩니다. 그러나 여러 패치이거나 전두 탈모·전신 탈모 수준이면 면역억제 치료가 필요하고 예후도 불확실합니다.',
        },
        {
          q: '두피 마사지가 탈모에 정말 효과 있나요?',
          a: '하루 4분 두피 마사지가 모발 두께를 증가시켰다는 소규모 연구가 있습니다. 탈모를 직접 치료하는 수단은 아니지만, 혈류 개선과 스트레스 완화 보조로는 시도해볼 수 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 탈모', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-11' },
        { label: '대한피부과학회 — 탈모 진료 지침', url: 'https://www.derma.or.kr/', org: '대한피부과학회', accessedAt: '2026-05-11' },
        { label: 'MSD Manual — Alopecia', url: 'https://www.msdmanuals.com/professional/dermatologic-disorders/hair-disorders/alopecia', org: 'MSD Manual', accessedAt: '2026-05-11' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
