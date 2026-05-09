// posts/symptoms/hantavirus.js
const post = {
  id: 'S0006',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 한타바이러스 감염증(신증후출혈열)은 들쥐의 배설물·분비물에 오염된 먼지를 흡입해 전파되는 급성 열성 출혈성 감염병입니다. 발열·출혈 경향·신부전이 특징이며, 조기 입원 치료 시 대부분 회복 가능하지만 중증 시 사망률이 높아 초기 증상에서 의심이 중요합니다.</p><div class="meta-row"><span class="tag">부위: 전신(신장 포함)</span> <span class="tag tag-high">심각도: 높음</span> <span class="tag">법정감염병 2급</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>들쥐가 많은 지역에서 캠핑을 하고 나서 고열이 나서 무서웠다. 한타바이러스라는 게 어떤 병인지 그때 처음 찾아봤다. 신증후출혈열이 치명적일 수 있다는 걸 알고 나서는 야외 활동 전 예방 수칙을 꼭 확인하게 됐다.</p>" },

    { type: 'image', src: '/thumbnails/symptoms/hantavirus.svg', alt: '한타바이러스 — 야외활동 후 고열이면 즉시 확인', caption: '한타바이러스 완전 가이드' },


    { type: 'h2', id: 'what-is-it', text: '한타바이러스(신증후출혈열)란' },
    {
      type: 'body',
      html: '<p>한타바이러스(Hantavirus)는 부냐바이러스과(Bunyaviridae)에 속하는 RNA 바이러스로, 주로 <strong>등줄쥐(Apodemus agrarius)</strong>가 숙주입니다. 국내에서는 두 가지 임상형이 발생합니다.</p><ul><li><strong>신증후출혈열(HFRS, Hemorrhagic Fever with Renal Syndrome)</strong> — 한탄바이러스(Hantaan virus) 또는 서울바이러스가 원인. 발열·출혈·신부전이 5단계로 진행. 국내 연간 수백 명 발생.</li><li><strong>한타폐증후군(HPS)</strong> — 미주 대륙의 신세계 한타바이러스 감염. 국내 발생 없음.</li></ul><p>국내에서 "한타바이러스 감염증"이라 하면 사실상 <strong>신증후출혈열</strong>을 의미합니다. 법정감염병 2급으로 의료기관 진단 시 신고 의무가 있습니다.</p>',
    },

    { type: 'h2', id: 'transmission', text: '전파 경로' },
    {
      type: 'body',
      html: '<ul><li><strong>주 경로 — 에어로졸 흡입</strong>: 바이러스를 보유한 들쥐의 소변·대변·타액이 건조되면서 형성된 먼지 입자를 흡입. 야외 작업(텃밭·논밭·벌목), 등산, 야영 중 노출 위험이 높습니다.</li><li><strong>직접 접촉</strong>: 쥐에 물리거나 오염된 토양·식품을 만진 뒤 눈·코·입을 만지는 경우.</li><li><strong>사람 간 전파 없음</strong>: 신증후출혈열은 사람 간 감염이 보고되지 않습니다.</li></ul><p><strong>고위험군:</strong> 군인(훈련 중 야영), 농부, 등산객, 밭일을 많이 하는 분, 가을철 야외 나들이 잦은 분. 국내 발생 피크는 <strong>10~11월(가을)과 5~6월(봄)</strong>입니다.</p>',
    },

    { type: 'h2', id: 'incubation', text: '잠복기' },
    {
      type: 'body',
      html: '<p>노출 후 <strong>평균 2~3주(범위 5일~6주)</strong>. 잠복기가 길어 노출 원인을 파악하기 어려울 수 있습니다. 야외 활동 후 2~6주 이내에 발열이 발생하면 노출 이력을 의료진에게 반드시 알려야 합니다.</p>',
    },

    { type: 'h2', id: 'stages', text: '임상 5단계 경과' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">단계</th><th style="padding:8px;border:1px solid #ddd">기간</th><th style="padding:8px;border:1px solid #ddd">주요 증상</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>1. 발열기</strong></td><td style="padding:8px;border:1px solid #ddd">3~5일</td><td style="padding:8px;border:1px solid #ddd">갑작스러운 고열(38~40°C), 심한 두통·요통·복통, 얼굴·목·가슴 홍조, 결막 충혈, 출혈반점(점상출혈). 인플루엔자와 매우 유사.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>2. 저혈압기</strong></td><td style="padding:8px;border:1px solid #ddd">수시간~3일</td><td style="padding:8px;border:1px solid #ddd">혈압 급격히 하강, 쇼크 발생 가능. 혈소판 감소로 출혈 위험. 핵심 위험 단계.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>3. 핍뇨기</strong></td><td style="padding:8px;border:1px solid #ddd">3~5일</td><td style="padding:8px;border:1px solid #ddd">소변량 감소(<400 mL/일), 신부전 진행, 부종, 혈압 상승. 질소혈증 악화.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>4. 이뇨기</strong></td><td style="padding:8px;border:1px solid #ddd">수일~수주</td><td style="padding:8px;border:1px solid #ddd">소변량 급격히 증가(다뇨), 전해질 불균형, 탈수. 회복 시작.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>5. 회복기</strong></td><td style="padding:8px;border:1px solid #ddd">수주~수개월</td><td style="padding:8px;border:1px solid #ddd">점진적 회복. 신기능 대부분 정상화. 피로감이 오래 지속될 수 있습니다.</td></tr></tbody></table><p style="margin-top:8px;font-size:13px;color:#666">경증은 1·3단계만 뚜렷하고 회복되기도 합니다. 중증은 2·3단계에서 쇼크·출혈·급성 신부전으로 사망할 수 있으며 국내 치명률은 약 1~3%입니다.</p>',
    },

    { type: 'h2', id: 'warning-signs', text: '병원에 즉시 가야 하는 신호' },
    {
      type: 'warning',
      html: '<p>야외 활동 후 2~6주 이내에 다음 증상이 나타나면 즉시 의료기관을 방문해 "야외 노출 이력"을 알리세요.</p><ul><li>갑작스러운 고열(38.5°C 이상) + 두통 + 허리·복부 통증 동시 발생</li><li>얼굴·목·가슴의 갑작스러운 홍조 또는 점상출혈(작은 붉은 점)</li><li>결막 충혈이 동반된 고열</li><li>소변이 갑자기 줄거나 나오지 않는 경우</li><li>혈압 저하, 어지러움, 기절 증상</li></ul>',
    },

    { type: 'h2', id: 'emergency', text: '응급 상황 — 즉시 119' },
    {
      type: 'emergency',
      html: '<p><strong>다음 증상이 나타나면 즉시 119에 연락하거나 응급실로 이동하세요.</strong></p><ul><li>혈압이 급격히 떨어지며 의식이 흐려지는 경우 (쇼크)</li><li>피부 광범위 멍(자반), 코·잇몸·피하 출혈</li><li>12시간 이상 소변이 전혀 나오지 않음</li><li>심한 구토 및 의식 변화</li></ul>',
    },

    { type: 'h2', id: 'diagnosis', text: '진단 및 치료' },
    {
      type: 'body',
      html: '<p><strong>진단</strong>: 혈액검사(혈소판 감소, BUN/크레아티닌 상승, 혈청 한타바이러스 항체 IgM 양성), 소변검사(단백뇨, 혈뇨)로 확진. 초기에는 독감·렙토스피라증·쯔쯔가무시병과 감별이 필요합니다.</p><p><strong>치료</strong>: 승인된 특이적 항바이러스제는 없습니다. 국내에서는 초기 중증 예방 목적으로 <strong>리바비린(Ribavirin)</strong>이 투여되기도 합니다. 근본 치료는 <strong>집중 지지요법</strong> — 수액·전해질 교정, 투석(핍뇨기 신부전 시), 쇼크 관리, 출혈 교정. 전문 감염내과·신장내과가 있는 3차 의료기관 입원이 필요합니다.</p>',
    },

    { type: 'h2', id: 'prevention', text: '예방 수칙' },
    {
      type: 'body',
      html: '<p><strong>야외 활동·농작업 시</strong></p><ul><li>긴 소매·긴 바지·장갑·마스크 착용 (먼지 흡입 차단)</li><li>풀밭·낙엽 더미에 직접 앉거나 눕지 않기</li><li>들쥐 서식 가능 지역(논밭·야산) 작업 후 손 비누로 씻기</li><li>텐트·침낭 등 야영 장비를 밀폐 보관하고, 사용 전 에어로졸 노출 최소화</li><li>작업 후 야외 의류를 집 안으로 가져오지 않기</li></ul><p><strong>국가 예방접종</strong></p><ul><li><strong>한타박스(Hantavax)</strong>: 식약처 허가 불활성화 백신. 3회 기초 접종 후 매년 추가 접종 권고. 고위험 직업군(군인, 농부, 실험실 종사자)에게 권장. 효과는 60~70% 수준으로 완전 예방이 아니므로 행동 예방과 병행 필요.</li></ul><p><strong>국가 지원 대상 확인</strong>: 예방접종 지원은 거주 지역 보건소에 문의하세요.</p>',
    },

    { type: 'h2', id: 'differential', text: '비슷한 질병과 구분' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">질병</th><th style="padding:8px;border:1px solid #ddd">공통 증상</th><th style="padding:8px;border:1px solid #ddd">구분 포인트</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">인플루엔자</td><td style="padding:8px;border:1px solid #ddd">발열·두통·근육통</td><td style="padding:8px;border:1px solid #ddd">허리·복통 두드러지지 않음, 신부전 없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">쯔쯔가무시병</td><td style="padding:8px;border:1px solid #ddd">발열·발진</td><td style="padding:8px;border:1px solid #ddd">가피(딱지) 특징적, 진드기 물림 이력</td></tr><tr><td style="padding:8px;border:1px solid #ddd">렙토스피라증</td><td style="padding:8px;border:1px solid #ddd">발열·황달·신부전</td><td style="padding:8px;border:1px solid #ddd">물·흙 노출 이력, 황달·간기능 이상 두드러짐</td></tr><tr><td style="padding:8px;border:1px solid #ddd">신우신염</td><td style="padding:8px;border:1px solid #ddd">발열·허리통증·소변 변화</td><td style="padding:8px;border:1px solid #ddd">야외 노출 이력 없음, 소변 배양 양성</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '한타바이러스는 사람 간에 전염되나요?',
          a: '국내에서 발생하는 신증후출혈열(한탄바이러스)은 사람 간 전파가 보고되지 않습니다. 반드시 들쥐의 배설물·분비물에 오염된 환경과의 접촉이 전파 경로입니다. 가족 간 감염 걱정은 하지 않아도 됩니다.',
        },
        {
          q: '야외 활동 후 얼마나 지나면 증상이 나타나나요?',
          a: '노출 후 평균 2~3주(5일~6주)의 잠복기가 있습니다. 가을 등산·밭일 후 한 달 이내에 고열과 두통이 나타나면 반드시 야외 노출 이력을 의료진에게 알리세요.',
        },
        {
          q: '한타바이러스 예방접종은 누구에게 맞추는 건가요?',
          a: '군인, 농업·임업 종사자, 야외 작업이 잦은 분, 한타바이러스 연구 실험실 종사자가 주 대상입니다. 일반 등산객이나 캠핑족에게는 행동 예방(긴 옷·마스크 착용, 쥐 배설물 노출 회피)이 우선 권고됩니다. 백신 접종을 원하면 보건소나 내과에 문의하세요.',
        },
        {
          q: '신증후출혈열에 걸리면 반드시 입원해야 하나요?',
          a: '의심 단계에서도 혈소판 감소·신기능 저하가 급격히 진행될 수 있어, 대부분 입원해 경과를 관찰합니다. 경증이라도 저혈압기·핍뇨기 이행 여부를 확인하기 위해 입원 치료가 원칙입니다.',
        },
        {
          q: '완치 후 신장 기능이 완전히 회복되나요?',
          a: '경증~중등증의 경우 대부분 수주~수개월 내 신기능이 정상에 가깝게 회복됩니다. 중증 핍뇨기를 거친 경우 일부에서 만성 신장 기능 저하가 남을 수 있으므로 회복 후 정기 신기능 검사를 권장합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 — 신증후출혈열 감염병 정보', url: 'https://www.kdca.go.kr/netz/ttsEbList.do?itisCd=ND0000116', org: '질병관리청', accessedAt: '2026-05-05' },
        { label: '국가건강정보포털 — 한타바이러스 감염증', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-05' },
        { label: 'MSD Manual — Hantavirus Infections', url: 'https://www.msdmanuals.com/professional/infectious-diseases/arboviruses-arenaviruses-and-filoviruses/hantavirus', org: 'MSD Manual', accessedAt: '2026-05-05' },
        { label: '대한감염학회 — 한타바이러스 감염증 진료 지침', url: 'https://www.ksid.or.kr/', org: '대한감염학회', accessedAt: '2026-05-05' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
