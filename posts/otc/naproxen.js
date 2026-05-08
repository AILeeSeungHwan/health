// posts/otc/naproxen.js
const post = {
  id: 'O0003',
  sections: [
    {
      type: 'intro',
      html: '<p>이부프로펜을 먹으면 4시간마다 다시 먹어야 해서 귀찮은 사람에게 나프록센이 대안이다. 한 번 먹으면 <strong>8~12시간</strong>까지 효과가 지속돼 하루 2번으로 충분하다. 탁센·낙센 같은 이름으로 약국에서 살 수 있다.</p><p>직접 써본 경험과 임상 정보를 섞어 정리했다.</p><div class="meta-row"><span class="tag">성분: 나프록센(Naproxen) 250~500mg</span> <span class="tag tag-approved">식약처 OTC 허가</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'why-naproxen', text: '이부프로펜 대신 나프록센을 선택하는 이유' },
    {
      type: 'callout',
      html: '<p>허리를 삐끗했을 때 이부프로펜을 6시간마다 챙겨먹는 게 번거로워서 나프록센을 써봤다. 아침저녁 두 번으로 하루 종일 통증이 관리됐다. 직장에서 "진통제 먹을 시간"을 신경 쓰지 않아도 된다는 게 생각보다 편했다.</p>',
    },
    {
      type: 'body',
      html: '<p>나프록센은 이부프로펜과 같은 NSAIDs(비스테로이드성 소염진통제) 계열이지만 <strong>반감기가 훨씬 길다</strong>.</p><ul><li>이부프로펜 반감기 ≈ 2시간 → 4~6시간마다 복용</li><li>나프록센 반감기 ≈ 12~17시간 → 8~12시간마다 복용 (하루 2회)</li></ul><p>이 차이 때문에 만성적인 통증(관절염, 근막통, 허리 디스크 통증 등)에서 복약 순응도가 더 높다.</p>',
    },

    { type: 'h2', id: 'indications', text: '어떤 통증에 잘 듣나' },
    {
      type: 'body',
      html: '<ul><li><strong>근골격계 통증</strong> — 허리·어깨·목 근육통, 염좌. 며칠 지속되는 통증에 하루 2회 복용이 편하다.</li><li><strong>관절통·관절염</strong> — 골관절염·류마티스 관절염에 흔히 처방되는 성분.</li><li><strong>생리통</strong> — 이부프로펜만큼 효과적. 생리 직전부터 시작해 하루 2회 복용.</li><li><strong>두통·편두통 보조</strong> — 단독으로도 효과 있음.</li><li><strong>통풍 발작</strong> — 통풍의 급성기에 고용량 나프록센을 쓰는 경우가 있다 (이 경우 의사 처방).</li></ul>',
    },

    { type: 'h2', id: 'dosage', text: '용법·용량' },
    {
      type: 'info',
      html: '<p><strong>성인 OTC 기준 (식약처):</strong><br>1회 250~500mg, 8~12시간 간격 / 하루 최대 1,000mg<br>반드시 음식과 함께 복용.</p><p><strong>탁센과 낙센 비교:</strong><br>탁센(삼일제약) — 나프록센나트륨 275mg (나프록센으로 250mg 해당)<br>낙센(종근당) — 나프록센 250mg<br>나프록센나트륨 형태가 일반 나프록센보다 흡수가 약간 빠른 것으로 알려져 있다.</p>',
    },

    { type: 'h2', id: 'side-effects', text: '위장 주의 — 이부프로펜보다 위장 부담이 더 클 수 있다' },
    {
      type: 'warning',
      html: '<p>나프록센은 반감기가 길어서 몸에 오래 머문다. 이것이 위장에 부담이 더 누적되는 이유다. 이부프로펜보다 위장 관련 이상반응 빈도가 높다는 연구가 있다.</p><ul><li>공복 복용 금지 — 반드시 식후 또는 식사 중 복용</li><li>위궤양·위염 병력자 → 의사 상담 후 복용</li><li>속쓰림·소화불량이 지속되면 즉시 중단</li></ul>',
    },

    { type: 'h2', id: 'vs-ibuprofen', text: '나프록센 vs 이부프로펜 — 어떤 상황에 어떤 걸 쓰나' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">상황</th><th style="padding:8px;border:1px solid #ddd">더 맞는 선택</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">하루 1~2회 복용이 편한 경우</td><td style="padding:8px;border:1px solid #ddd"><strong>나프록센</strong></td></tr><tr><td style="padding:8px;border:1px solid #ddd">빠른 효과 필요 (급성 두통)</td><td style="padding:8px;border:1px solid #ddd"><strong>이부프로펜</strong> (흡수 빠름)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">며칠 지속되는 근육통·염좌</td><td style="padding:8px;border:1px solid #ddd"><strong>나프록센</strong></td></tr><tr><td style="padding:8px;border:1px solid #ddd">위장이 약한 경우</td><td style="padding:8px;border:1px solid #ddd">둘 다 주의. 아세트아미노펜이 더 안전</td></tr><tr><td style="padding:8px;border:1px solid #ddd">고령자</td><td style="padding:8px;border:1px solid #ddd">이부프로펜 단기가 낫다는 의견도 있음</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'who-shouldnt', text: '복용 금기' },
    {
      type: 'warning',
      html: '<ul><li>임신 3분기 — NSAIDs 공통 금기</li><li>중증 신장·간 기능 저하</li><li>소화성 궤양 활성기</li><li>심부전·고혈압 약물 복용 중 (레닌-안지오텐신계 약물과 상호작용)</li><li>아스피린·NSAIDs 과민반응 병력</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '이부프로펜보다 강한 약인가요?', a: '더 강한 게 아니라 지속시간이 더 깁니다. 염증 억제 강도 자체는 비슷한 수준입니다.' },
        { q: '처방전 없이 살 수 있나요?', a: '탁센·낙센 등 OTC 제품은 약국에서 처방 없이 구매할 수 있습니다. 다만 500mg 이상 고용량이나 장기 복용은 처방약 영역입니다.' },
        { q: '타이레놀이랑 교대로 써도 되나요?', a: '성분이 달라 교대 복용이 가능합니다. 장기 통증 관리 시 의사와 상의해 계획을 세우세요.' },
      ],
    },

    { type: 'productSlot', productKey: 'naproxen-otc' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 나프록센 제제', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Naproxen', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
