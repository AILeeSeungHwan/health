// posts/otc/ibuprofen.js
const post = {
  id: 'O0002',
  sections: [
    {
      type: 'intro',
      html: '<p>진통제 선반에서 이부프로펜이 타이레놀 옆에 나란히 있을 때, 어느 쪽을 집어야 할지 고민한 적 있을 것이다. 결론부터 말하면 — 생리통이나 허리 통증처럼 <strong>부기·염증이 동반되는 통증</strong>에는 이부프로펜이 눈에 띄게 효과가 강하다. 단순 두통·발열에는 타이레놀로도 충분한 경우가 많다.</p><p>이 글에는 직접 써온 경험과 공개된 임상 정보를 섞었다. 개인 경험이 포함되어 있으니, 본인 상황에 따라 반드시 약사와 한 마디 나누길 권한다.</p><div class="meta-row"><span class="tag">성분: 이부프로펜(Ibuprofen)</span> <span class="tag tag-approved">식약처 OTC 허가</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'when-i-use', text: '어떤 통증에 손이 가나 — 경험 먼저' },
    {
      type: 'callout',
      html: '<p>생리통이 심하던 때 타이레놀 2알이 소용없어서 약국에 갔더니 약사가 "생리통엔 소염제 계열이 더 잘 들어요"라고 했다. 이부프로펜으로 바꾸고 나서 달랐다. 이후로 부어오르는 느낌이 있는 통증에는 이부프로펜을 먼저 찾는다.</p>',
    },
    {
      type: 'body',
      html: '<p>이부프로펜이 확실히 강한 상황:</p><ul><li><strong>생리통</strong> — 자궁 수축에 관여하는 프로스타글란딘을 직접 억제. 생리 직전이나 시작 즉시 복용하면 효과가 더 좋다는 연구가 있다.</li><li><strong>치통·발치 후 통증</strong> — 치과에서도 이부프로펜 처방이 흔하다.</li><li><strong>근육통·삐었을 때</strong> — 인대·근육에 생긴 부종과 염증에 작용.</li><li><strong>관절통</strong> — 관절 주변 염증을 줄인다. 관절염 환자에게 자주 처방되는 이유.</li><li><strong>감기로 인한 발열·두통·몸살</strong> — 해열 + 소염이 동시에 필요할 때.</li></ul>',
    },

    { type: 'h2', id: 'vs-tylenol', text: '타이레놀 vs 이부프로펜 — 뭐가 다른가' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">이부프로펜</th><th style="padding:8px;border:1px solid #ddd">아세트아미노펜(타이레놀)</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">작용 기전</td><td style="padding:8px;border:1px solid #ddd">COX 억제 → 염증·통증·발열 차단</td><td style="padding:8px;border:1px solid #ddd">중추 신경 작용 → 통증·발열 완화</td></tr><tr><td style="padding:8px;border:1px solid #ddd">소염 효과</td><td style="padding:8px;border:1px solid #ddd"><strong>있음</strong></td><td style="padding:8px;border:1px solid #ddd">거의 없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">생리통·관절통</td><td style="padding:8px;border:1px solid #ddd">더 효과적</td><td style="padding:8px;border:1px solid #ddd">약함</td></tr><tr><td style="padding:8px;border:1px solid #ddd">위장 부담</td><td style="padding:8px;border:1px solid #ddd">있음 — 식후 복용 필수</td><td style="padding:8px;border:1px solid #ddd">적음 — 공복도 가능</td></tr><tr><td style="padding:8px;border:1px solid #ddd">간 부담</td><td style="padding:8px;border:1px solid #ddd">상대적으로 적음</td><td style="padding:8px;border:1px solid #ddd">음주+과용 시 간독성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">신장 부담</td><td style="padding:8px;border:1px solid #ddd">신기능 저하 시 주의</td><td style="padding:8px;border:1px solid #ddd">비교적 안전</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">💡 부어오르거나 염증 느낌이 있으면 이부프로펜. 단순 두통·미열이라면 타이레놀도 충분하다.</p>',
    },

    { type: 'h2', id: 'brands', text: '브랜드별 실전 비교 — 부루펜 vs 이지엔6 vs 애드빌' },
    {
      type: 'body',
      html: '<p>약국에 가면 같은 이부프로펜인데 가격이 다르다. 써본 브랜드만 정리한다.</p><p><strong>부루펜정 200mg (삼일제약)</strong><br>가장 저렴한 축. 200mg이라 심한 통증엔 2정(400mg)이 필요하다. 처음 이부프로펜 써보는 사람이 부담 없이 시작하기 좋다.</p><p><strong>이지엔6 프로 400mg (대웅제약)</strong><br>400mg 연질캡슐. 연질캡슐이라 흡수 체감이 정제보다 빠른 느낌이 있다. 생리통이 심한 날에는 이쪽을 선택하게 됐다. 편의점에서도 살 수 있다는 게 장점.</p><p><strong>애드빌 200mg (한국화이자)</strong><br>해외 브랜드 이미지가 강하지만 성분은 동일한 이부프로펜 200mg. 가격 차이 정도만 있다고 보면 된다.</p><p style="font-size:13px;color:#888">결론: 브랜드보다 <strong>용량(200mg vs 400mg)과 제형(정제 vs 연질캡슐)</strong>이 더 중요하다.</p>',
    },

    { type: 'h2', id: 'dosage', text: '용법·용량과 타이밍 팁' },
    {
      type: 'info',
      html: '<p><strong>성인 OTC 기준 (식약처):</strong><br>1회 200~400mg, 4~6시간 간격 / 하루 최대 1,200mg<br>반드시 식사 중 또는 직후 복용.</p><p><strong>실전 포인트:</strong> 통증이 시작될 때 바로 복용할수록 효과가 좋다. 극심해질 때까지 참다가 먹으면 한 알로는 부족한 경우가 많다. 생리통이라면 <em>생리 시작 직전 또는 시작 즉시</em> 복용하면 전체 통증 크기를 줄이는 데 도움이 된다.</p>',
    },

    { type: 'h2', id: 'stomach', text: '속쓰림 경험 — 공복 복용은 진짜 조심해야 한다' },
    {
      type: 'warning',
      html: '<p>처음 공복에 이부프로펜을 먹었다가 위가 꽤 쓰렸다. 이부프로펜이 위 점막을 보호하는 프로스타글란딘도 억제하기 때문이다. 그 이후로는 반드시 크래커 몇 조각이라도 먹고 복용한다.</p><ul><li>위궤양·위염 병력 → 이부프로펜 대신 타이레놀 고려</li><li>속쓰림이 지속된다면 복용 중단 후 약사·의사 상담</li><li>장기 복용 시 위 보호제(PPI) 병용을 의사가 권하는 경우도 있다</li></ul>',
    },

    { type: 'h2', id: 'who-shouldnt', text: '이런 분은 먹기 전 꼭 확인' },
    {
      type: 'warning',
      html: '<ul><li><strong>임신 3분기(28주 이후)</strong> — 태아 동맥관 조기 폐쇄 위험. 절대 금기.</li><li><strong>소화성 궤양·심한 위염</strong> — 위 출혈 위험 증가.</li><li><strong>신장 기능 저하</strong> — 신혈류를 줄여 신기능을 더 악화시킬 수 있다.</li><li><strong>심부전·고혈압 조절 중</strong> — 나트륨 저류, 혈압 상승 가능.</li><li><strong>아스피린 과민증</strong> — NSAIDs 교차 반응.</li><li><strong>와파린 복용 중</strong> — 출혈 경향 증가. 약사 필수 상담.</li></ul>',
    },

    { type: 'h2', id: 'not-working', text: '이부프로펜이 안 듣는다면' },
    {
      type: 'body',
      html: '<p>제대로 먹었는데 효과가 없다면:</p><ul><li><strong>용량 확인</strong> — 200mg으로 부족했다면 400mg(OTC 최대)으로.</li><li><strong>공복 복용 여부</strong> — 흡수가 불규칙해진다. 식후 복용으로 바꿔보기.</li><li><strong>통증 원인이 염증이 아닌 경우</strong> — 긴장성 두통, 신경통에는 효과가 제한적.</li><li><strong>편두통</strong> — 이부프로펜보다 아세트아미노펜+카페인 복합제가 맞는 경우가 있다.</li></ul><p>2~3회 시도해도 효과 없으면 통증 원인 진단이 먼저다.</p>',
    },

    { type: 'h2', id: 'related-symptoms', text: '이부프로펜을 자주 쓰는 증상' },
    {
      type: 'body',
      html: '<ul><li><a href="/symptoms/headache/">두통 — 종류별 원인과 진통제 선택</a></li><li><a href="/symptoms/migraine/">편두통 — 이부프로펜이 맞나, 트립탄이 맞나</a></li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '타이레놀이랑 교대로 먹어도 되나요?', a: '성분이 달라 병용·교대가 가능합니다. 실제 수술 후 통증 관리에서도 쓰이는 방법입니다. 다만 용량 관리를 위해 약사와 확인하고 쓰는 걸 권합니다.' },
        { q: '며칠 연속 먹어도 되나요?', a: 'OTC 기준 3~5일 이내. 그 이상 필요하다면 통증 원인을 진단받는 게 맞습니다. 진통제로 버티는 건 원인을 방치하는 것이기도 합니다.' },
        { q: '편의점에서 살 수 있나요?', a: '이지엔6, 애드빌 등 일부가 안전상비의약품으로 편의점 판매 허가돼 있습니다. 급할 때 유용하지만, 약국에서 약사에게 상황을 설명하면 더 맞는 선택을 할 수 있습니다.' },
        { q: '술 마신 다음날 숙취 두통에 먹어도 되나요?', a: '위장이 이미 예민한 상태라 속쓰림이 심해질 수 있습니다. 숙취 두통엔 타이레놀이 상대적으로 위장 친화적이지만, 알코올+아세트아미노펜 조합도 간에 부담을 줍니다. 둘 다 음주 직후는 피하는 게 원칙입니다.' },
        { q: '어린이에게 먹일 수 있나요?', a: '6개월 이상 어린이용 시럽·현탁제(어린이 부루펜 등)가 있습니다. 성인 정제를 임의로 나눠 주지 마세요. 체중 기준 용량을 정확히 지켜야 합니다.' },
      ],
    },

    { type: 'productSlot', productKey: 'ibuprofen-otc' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 의약품안전나라 — 이부프로펜 제제', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: 'Vane JR et al. — Indomethacin and aspirin abolish prostaglandin release (1971)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'PubMed', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Ibuprofen (NSAIDs)', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
