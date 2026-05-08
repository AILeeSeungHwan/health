const post = {
  id: 'U0013',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> NFC 블루베리 착즙액은 농축 환원 없이 과일을 직접 착즙한 원액으로, 안토시아닌·폴리페놀 함량이 농축환원 주스보다 높습니다. 눈 건강·항산화·혈관 건강에 도움이 될 수 있습니다.</p><p style="font-size:13px;color:#888">※ 식품류로 의약적 효능을 보장하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>하루 종일 모니터를 보는 날이면 저녁에 눈이 충혈되고 피로했다. 눈 건강에 좋다는 말을 듣고 블루베리 농축액을 먹기 시작했다. NFC 착즙과 농축 환원 차이를 모르고 샀다가 나중에 성분표 보는 법을 익혔다.</p>" },

{ type: 'callout', html: "<p>하루 종일 모니터를 보는 날이면 저녁에 눈이 충혈되고 피로했다. 눈 건강에 좋다는 말을 듣고 블루베리 농축액을 먹기 시작했다. NFC 착즙과 농축 환원 차이를 모르고 샀다가 나중에 성분표 보는 법을 익혔다.</p>" },,

    { type: 'h2', id: 'nfc', text: 'NFC 착즙이란 — 농축환원과 무엇이 다른가' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">NFC (Not-From-Concentrate)</th><th style="padding:8px;border:1px solid #ddd">농축환원 주스</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">제조 방식</td><td style="padding:8px;border:1px solid #ddd">착즙 → 저온살균 → 병입</td><td style="padding:8px;border:1px solid #ddd">착즙 → 증발·농축 → 수분 재첨가</td></tr><tr><td style="padding:8px;border:1px solid #ddd">영양소 보존</td><td style="padding:8px;border:1px solid #ddd">높음 (열처리 최소화)</td><td style="padding:8px;border:1px solid #ddd">열 과정에서 일부 소실</td></tr><tr><td style="padding:8px;border:1px solid #ddd">맛·향</td><td style="padding:8px;border:1px solid #ddd">원과에 가까운 풍미</td><td style="padding:8px;border:1px solid #ddd">균일하나 약간 다름</td></tr><tr><td style="padding:8px;border:1px solid #ddd">가격</td><td style="padding:8px;border:1px solid #ddd">높음</td><td style="padding:8px;border:1px solid #ddd">상대적으로 저렴</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'anthocyanin', text: '안토시아닌 — 눈 건강과 항산화' },
    {
      type: 'body',
      html: '<p>블루베리의 대표 성분은 <strong>안토시아닌</strong>(anthocyanin)입니다. 자줏빛·파란색 색소로 강력한 항산화 물질입니다.</p><ul><li><strong>눈 건강</strong>: 망막 로돕신(시각 색소) 재합성 촉진, 안구 혈류 개선 효과 연구 보고.</li><li><strong>항산화</strong>: 자유 라디칼 제거 능력(ORAC값)이 높은 과일 중 하나.</li><li><strong>혈관 건강</strong>: 혈관 내피 기능 개선, LDL 산화 억제에 관한 연구 진행 중.</li></ul><p>단, 한국 식약처는 블루베리 안토시아닌을 독립적 건강기능식품 고시 원료로 등재하지 않아 직접적인 기능성 표방은 어렵습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000615475', productName: '뉴트리원 NFC 유기농 블루베리 착즙액 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615475/480_1000615475_ITEM2025121859974.png', price: 92120 },
      ],
    },

    { type: 'h2', id: 'haskap', text: '하스카프베리 — 슈퍼 안토시아닌 베리' },
    {
      type: 'body',
      html: '<p>하스카프베리(Haskap Berry, 학명 Lonicera caerulea)는 캐나다·일본 홋카이도가 주산지인 베리류입니다. 일반 블루베리 대비 안토시아닌 함량이 2~5배 높으며, 철분·비타민C 함량도 우수합니다.</p><p>연구에서 인지 기능·심혈관 지표 개선 가능성이 보고되지만, 아직 대규모 임상 연구는 부족합니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000653920', productName: '뉴트리원 NFC 하스카프베리 착즙액 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000653920/480_1000653920_ITEM2026031348904.png', price: 61800 },
      ],
    },

    { type: 'h2', id: 'intake', text: '적정 섭취량과 복용법' },
    {
      type: 'info',
      html: '<p>일반적으로 50~100ml/일을 식전·식후 무관하게 복용합니다. 착즙 원액이므로 당 함량이 있어 당뇨가 있으신 분은 혈당 관리에 유의하세요. 공복 섭취 시 위산과 반응해 위 자극이 있을 수 있으므로 식후 복용 권장.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>항응고제(와파린) 복용자: 안토시아닌이 혈소판 기능에 영향을 줄 수 있어 주의.</li><li>당뇨·혈당 관리 중: 착즙액의 자연당 함량(과당) 고려.</li><li>신장 질환: 옥살산 함량이 있어 신장 결석 병력이 있는 경우 주의.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '블루베리 착즙액을 먹으면 시력이 좋아지나요?', a: '시력 자체를 개선하는 근거는 없습니다. 안토시아닌이 망막 혈류 개선과 로돕신 재합성에 도움이 될 수 있다는 연구가 있지만, 굴절이상(근시·원시)을 교정하지는 않습니다.' },
        { q: '루테인과 함께 먹어도 되나요?', a: '네, 루테인은 황반색소를 유지하는 카로티노이드이고 안토시아닌은 망막 혈류에 작용하므로 작용 기전이 달라 병용이 가능합니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Krikorian R, et al. Blueberry supplementation improves memory. J Agric Food Chem. 2010', url: '#', org: 'ACS' },
        { label: 'Lyall KA, et al. Short-term blackcurrant extract consumption modulates brain-derived neurotrophic factor. Nutr Res. 2009', url: '#', org: 'Elsevier' },
        { label: '한국식품연구원 — 블루베리 기능성 연구 동향', url: '#', org: '한국식품연구원' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
