// posts/otc/tylenol-acetaminophen.js
const post = {
  id: 'O0001',
  sections: [
    {
      type: 'intro',
      html: '<p>집 안 구급함에서 가장 먼저 손에 잡히는 게 타이레놀이다. 그 이유가 있다 — 위장 자극이 없어 공복에도 먹을 수 있고, 임산부에게도 가장 먼저 권해지는 진통제다. 다만 "안전하다 = 아무렇게나 먹어도 된다"가 아니다. 하루 4g 초과 복용과 음주 후 복용은 <strong>간 손상</strong>으로 이어질 수 있다.</p><p>타이레놀을 오래 써온 경험에서 나온 팁들을 임상 정보와 함께 정리했다.</p><div class="meta-row"><span class="tag">성분: 아세트아미노펜 500mg</span> <span class="tag tag-approved">식약처 OTC 허가</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'why-tylenol-first', text: '왜 타이레놀을 먼저 꺼내나' },
    {
      type: 'callout',
      html: '<p>두통이 오면 타이레놀, 생리통에는 이부프로펜 — 이게 오랜 개인 기준이다. 두통은 대부분 염증보다 혈관·신경 문제라서 소염이 필요 없고, 타이레놀이 위장 부담 없이 통증 신호를 가라앉히는 데 충분하다. 특히 점심 빈속에 두통이 올 때도 부담 없이 먹을 수 있어 직장인에게 실용적이다.</p>',
    },
    {
      type: 'body',
      html: '<p>타이레놀(아세트아미노펜)이 잘 맞는 상황:</p><ul><li><strong>두통·긴장성 두통</strong> — 가장 자주 쓰는 경우. 이부프로펜보다 위장이 편하다.</li><li><strong>감기 발열·몸살</strong> — 체온을 내리고 전신 통증을 완화한다.</li><li><strong>임신 중 통증</strong> — 임산부에게 가장 먼저 권해지는 OTC 진통제.</li><li><strong>위장이 예민한 분</strong> — 위염·궤양 병력이 있으면 NSAIDs 대신 아세트아미노펜을 먼저.</li><li><strong>소아 발열</strong> — 어린이용 시럽 형태로 가장 많이 쓰인다.</li></ul>',
    },

    { type: 'h2', id: 'mechanism', text: '왜 위장 부담이 적은가' },
    {
      type: 'body',
      html: '<p>이부프로펜 같은 NSAIDs는 COX 효소를 억제해 위 점막 보호 물질(프로스타글란딘)도 함께 줄인다. 타이레놀은 COX를 주된 표적으로 삼지 않고 <strong>중추신경계에서 통증 신호와 체온 조절</strong>에 작용하기 때문에 위 점막 손상이 적다. 이것이 "공복에도 된다"는 근거다.</p><p>단, 중추 작용이 강하다는 말은 뒤집으면 <strong>간이 대사를 맡는다</strong>는 뜻이기도 하다. 용량과 음주가 중요한 이유다.</p>',
    },

    { type: 'h2', id: 'dosage', text: '용법·용량 — 4g 상한선을 머릿속에 새겨두자' },
    {
      type: 'info',
      html: '<p><strong>성인 (식약처 OTC 기준):</strong><br>1회 500~1,000mg (1~2정), 4~6시간 간격<br><strong>하루 최대 4,000mg (4g) 절대 초과 금지</strong></p><p><strong>12세 미만 소아:</strong> 체중 기준 어린이용 제제 사용. 성인 정제를 임의로 쪼개지 말 것.</p><p>복합 감기약·종합감통제에 아세트아미노펜이 이미 들어 있는 경우가 많다. 감기약 먹으면서 타이레놀을 따로 추가하면 무의식중에 상한을 넘기 쉽다. 성분표 확인이 필수다.</p>',
    },

    { type: 'h2', id: 'alcohol-warning', text: '음주와 타이레놀 — 생각보다 위험하다' },
    {
      type: 'warning',
      html: '<p>알코올도, 타이레놀도 간에서 대사된다. 동시에 처리하면 독성 대사물이 쌓인다. 특히:</p><ul><li>술을 자주 마시는 분 → 하루 2g(4정) 이하로 줄이는 게 안전</li><li>숙취 해소 음료에 아세트아미노펜이 들어간 제품이 있으니 성분 확인 필수</li><li>음주 직후 두통에 타이레놀 먹는 습관 → 장기적으로 간 부담 누적</li></ul>',
    },

    { type: 'h2', id: 'overdose', text: '과량 복용 — 증상이 없어도 응급실 가야 한다' },
    {
      type: 'emergency',
      html: '<p><strong>아세트아미노펜 과량 복용은 즉각 대응이 필요하다.</strong> 초기 증상이 없어도 24~72시간 후 간 손상이 나타날 수 있다. 하루 4g 초과가 의심되면 증상과 무관하게 즉시 1339(응급의료정보) 또는 응급실에 연락하라. 해독제(N-아세틸시스테인)가 있지만 시간이 관건이다.</p>',
    },

    { type: 'h2', id: 'vs-ibuprofen-tylenol', text: '타이레놀을 쓸 때 vs 이부프로펜을 쓸 때' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">상황</th><th style="padding:8px;border:1px solid #ddd">더 맞는 선택</th><th style="padding:8px;border:1px solid #ddd">이유</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">두통·긴장성 두통</td><td style="padding:8px;border:1px solid #ddd"><strong>타이레놀</strong></td><td style="padding:8px;border:1px solid #ddd">소염 불필요, 위장 친화적</td></tr><tr><td style="padding:8px;border:1px solid #ddd">생리통·관절통</td><td style="padding:8px;border:1px solid #ddd"><strong>이부프로펜</strong></td><td style="padding:8px;border:1px solid #ddd">프로스타글란딘 억제 필요</td></tr><tr><td style="padding:8px;border:1px solid #ddd">발열</td><td style="padding:8px;border:1px solid #ddd">둘 다 가능</td><td style="padding:8px;border:1px solid #ddd">위장 상태 보고 선택</td></tr><tr><td style="padding:8px;border:1px solid #ddd">임신 중</td><td style="padding:8px;border:1px solid #ddd"><strong>타이레놀</strong></td><td style="padding:8px;border:1px solid #ddd">NSAIDs 임신 3분기 금기</td></tr><tr><td style="padding:8px;border:1px solid #ddd">위염·궤양 병력</td><td style="padding:8px;border:1px solid #ddd"><strong>타이레놀</strong></td><td style="padding:8px;border:1px solid #ddd">위 점막 보호</td></tr><tr><td style="padding:8px;border:1px solid #ddd">음주 후</td><td style="padding:8px;border:1px solid #ddd">둘 다 피하는 게 최선</td><td style="padding:8px;border:1px solid #ddd">간/위장 부담 각각</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'related-symptoms', text: '관련 증상' },
    {
      type: 'body',
      html: '<ul><li><a href="/symptoms/headache/">두통 — 종류별 원인과 진통제 선택 가이드</a></li><li><a href="/symptoms/migraine/">편두통 — 진통제가 듣지 않는 이유</a></li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '공복에 먹어도 정말 괜찮나요?', a: '위장 자극이 적어 공복 복용이 가능합니다. 다만 오심이 있다면 물 한 잔 이상과 함께 드세요.' },
        { q: '이부프로펜이랑 교대로 써도 되나요?', a: '성분이 달라 교대 사용이 가능합니다. 수술 후 통증 관리에 실제 쓰이는 방법입니다. 용량 관리는 약사와 확인하세요.' },
        { q: '타이레놀이랑 종합감기약 같이 먹어도 되나요?', a: '위험합니다. 종합감기약에 아세트아미노펜이 이미 포함된 경우가 많아 중복 복용으로 하루 상한을 넘기기 쉽습니다. 먼저 성분표를 확인하세요.' },
        { q: '어린이에게 어떻게 주나요?', a: '어린이용 타이레놀 시럽·현탁제를 체중 기준으로 사용합니다. 체중 1kg당 10~15mg이 일반적인 기준이지만 제품 설명서를 따르세요.' },
      ],
    },

    { type: 'productSlot', productKey: 'tylenol-500' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 의약품안전나라 — 타이레놀정 500mg', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: '국가건강정보포털 — 아세트아미노펜 안전 사용', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Acetaminophen Toxicity', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
