// posts/symptoms/menopause-symptoms.js
const post = {
  id: 'S0011',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 갱년기(climacteric)는 난소 기능이 쇠퇴하면서 에스트로겐이 감소하는 폐경 전후 시기입니다. 안면홍조·야간발한·수면장애·기분 변화·질건조증 등 다양한 신체·심리 증상이 동시에 나타나며, 증상 정도에 따라 생활습관 개선부터 호르몬 치료까지 여러 옵션이 있습니다.</p><div class="meta-row"><span class="tag">부위: 내분비·전신</span> <span class="tag tag-medium">심각도: 중간</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>갑자기 얼굴이 화끈거리고 땀이 쏟아지는 경험을 처음 했을 때 갱년기라는 생각을 못 했다. 그게 안면홍조라는 걸 나중에야 알았다. 증상 목록을 알고 나면 적어도 왜 이런지는 이해할 수 있다.</p>" },

    { type: 'image', src: '/thumbnails/symptoms/menopause-symptoms.svg', alt: '갱년기 증상 — 안면홍조부터 수면장애까지', caption: '갱년기 증상 완전 가이드' },


    { type: 'h2', id: 'timeline', text: '갱년기·폐경 타임라인' },
    {
      type: 'body',
      html: '<ul><li><strong>폐경이행기(전갱년기)</strong> — 마지막 생리 전 수년. 월경 불규칙 시작, 안면홍조·수면 문제 첫 등장.</li><li><strong>폐경(Menopause)</strong> — 연속 12개월 월경 없음. 국내 평균 연령 약 49~51세.</li><li><strong>폐경 후기</strong> — 폐경 후 수년. 에스트로겐 결핍으로 골밀도 감소 가속, 심혈관 위험 증가.</li></ul><p>남성 갱년기(Late-onset Hypogonadism)도 존재하며, 테스토스테론 감소로 피로·성욕 감퇴·우울감 등이 나타날 수 있습니다.</p>',
    },

    { type: 'h2', id: 'symptoms', text: '주요 증상' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">분류</th><th style="padding:8px;border:1px solid #ddd">증상</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>혈관운동 증상</strong></td><td style="padding:8px;border:1px solid #ddd">안면홍조(hot flash), 야간발한, 두근거림. 가장 흔하며 70~80% 경험.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>수면 장애</strong></td><td style="padding:8px;border:1px solid #ddd">잠들기 어렵거나 자주 깸. 야간발한과 연관.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>심리·인지</strong></td><td style="padding:8px;border:1px solid #ddd">감정 기복, 우울감, 집중력 저하, 건망증.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>비뇨생식기</strong></td><td style="padding:8px;border:1px solid #ddd">질건조증, 성교 통증, 빈뇨·요실금. 치료받지 않으면 지속·악화.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>근골격계</strong></td><td style="padding:8px;border:1px solid #ddd">관절통, 근육통, 골밀도 감소(폐경 후 첫 5년 급격).</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>피부·모발</strong></td><td style="padding:8px;border:1px solid #ddd">피부 건조·탄력 감소, 탈모 증가.</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'hormone-therapy', text: '호르몬 치료(HRT) — 언제 고려하나' },
    {
      type: 'body',
      html: '<p>호르몬 치료(HRT/MHT)는 에스트로겐(자궁이 없는 경우) 또는 에스트로겐+프로게스틴(자궁이 있는 경우)을 보충하는 방법입니다.</p><p><strong>주요 적응증</strong>: 혈관운동 증상이 중등도 이상, 질건조증·비뇨생식기증후군, 골다공증 예방(다른 치료를 못 쓰는 경우).</p><p><strong>시작 시기</strong>: 폐경 후 10년 이내 또는 60세 미만에서 시작 시 심혈관 보호 효과도 기대 가능("기회의 창" 개념).</p><p><strong>금기</strong>: 유방암·자궁내막암 과거력, 에스트로겐 의존성 종양, 혈전증 과거력, 조절되지 않는 고혈압, 간질환. 부인과 전문의와 개인 위험-이득 평가 후 결정.</p>',
    },

    { type: 'h2', id: 'non-hormone', text: '호르몬 치료 외 옵션' },
    {
      type: 'body',
      html: '<ul><li><strong>SSRI·SNRI (항우울제 저용량)</strong> — 혈관운동 증상 완화에 효과 있는 비호르몬 약물. 안면홍조 횟수·강도 감소.</li><li><strong>가바펜틴</strong> — 안면홍조에 효과, 수면에도 도움.</li><li><strong>질 국소 에스트로겐 크림</strong> — 전신 흡수 최소화하면서 질 위축·건조증 치료.</li><li><strong>생활습관 개선</strong>: 규칙적 유산소 운동(주 150분), 금연, 카페인·알코올·매운 음식 줄이기(안면홍조 유발), 스트레스 관리.</li><li><strong>냉각 기법</strong>: 얇은 옷 겹쳐 입기, 부채·선풍기, 차가운 물 마시기로 안면홍조 즉각 대처.</li></ul>',
    },

    { type: 'h2', id: 'supplements', text: '갱년기 영양제 선택 기준' },
    {
      type: 'body',
      html: '<ul><li><a href="/supplements/calcium-vit-d/"><strong>칼슘+비타민D</strong></a> — 폐경 후 골밀도 감소 대응. 칼슘 1,000~1,200mg + 비타민D 800~1,000IU/일.</li><li><strong>이소플라본(대두·홍화이소플라본)</strong> — 식물성 에스트로겐. 안면홍조 완화 연구 있으나 효과 개인차 큼. 유방암 과거력자는 주의.</li><li><a href="/supplements/red-ginseng/"><strong>홍삼</strong></a> — 식약처 인정 기능성: 면역력 증진·피로 개선. 갱년기 증상 직접 완화 근거는 제한적.</li><li><a href="/supplements/iron/"><strong>철분</strong></a> — 폐경이행기 월경 불규칙 시 결핍 확인.</li><li><strong>마그네슘</strong> — 수면·근육 긴장 완화 보조.</li></ul><p style="font-size:13px;color:#888">영양제는 증상을 보완하는 수단입니다. 중등도 이상 갱년기 증상에는 전문의 상담 후 호르몬 치료 여부를 우선 평가하세요.</p>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>안면홍조·야간발한이 수면과 일상에 지장을 줄 만큼 심할 때</li><li>우울감·불안이 2주 이상 지속될 때</li><li>성교 통증, 질건조증이 심해 생활에 영향을 줄 때</li><li>마지막 생리 후 1년이 지난 뒤 다시 출혈이 있을 때 (자궁내막 이상 감별 필수)</li><li>45세 전 조기 폐경 증상이 의심될 때</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '호르몬 치료를 받으면 유방암 위험이 높아지나요?',
          a: '과거 WHI 연구로 위험 과장이 있었지만, 현재는 60세 미만·폐경 10년 이내에 시작 시 절대적 위험 증가는 매우 작다고 평가됩니다. 단, 유방암 개인·가족력이 있는 경우 전문의와 세밀한 위험-이득 평가가 필요합니다.',
        },
        {
          q: '갱년기 증상이 언제까지 계속되나요?',
          a: '안면홍조는 평균 7~10년 지속됩니다. 일부 여성은 70대 이후에도 증상이 남기도 합니다. 비뇨생식기 증상은 치료받지 않으면 지속·악화되는 경향이 있습니다.',
        },
        {
          q: '이소플라본 영양제가 호르몬 치료와 같은 효과가 있나요?',
          a: '이소플라본은 에스트로겐 수용체에 약하게 결합하는 식물성 에스트로겐이지만, 효과는 호르몬 치료에 비해 훨씬 약하고 개인차가 큽니다. 중등도 이상 증상에는 전문의와 치료 옵션을 상담하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 갱년기', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-10' },
        { label: '대한폐경학회 — 폐경 가이드라인', url: 'https://www.menopause.or.kr/', org: '대한폐경학회', accessedAt: '2026-05-10' },
        { label: 'MSD Manual — 폐경', url: 'https://www.msdmanuals.com/ko-kr/home/women-s-health-issues/menopause/menopause', org: 'MSD Manual', accessedAt: '2026-05-10' },
        { label: '국립암정보센터 — 유방암 관련 호르몬 치료', url: 'https://www.cancer.go.kr/', org: '국립암정보센터', accessedAt: '2026-05-10' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
