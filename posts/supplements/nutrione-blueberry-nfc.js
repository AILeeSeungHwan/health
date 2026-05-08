// posts/supplements/nutrione-blueberry-nfc.js
const post = {
  id: 'U0041',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 NFC 유기농 블루베리 착즙액과 NFC 하스카프베리 착즙액은 과일을 직접 압착해 열처리 없이 제조한 Non-From-Concentrate(NFC) 제품입니다. 농축 환원 주스와 달리 과일 본래의 안토시아닌·폴리페놀·비타민이 온전히 보존됩니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag">식품 (건강기능식품 아님)</span></div>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>블루베리 농축액과 NFC 착즙의 차이를 모르고 샀다가 성분 비교를 하게 됐다. 착즙 제품이 원물에 더 가깝다는 걸 알고 나서 선택 기준이 바뀌었다.</p>" },

{ type: 'callout', html: "<p>블루베리 농축액과 NFC 착즙의 차이를 모르고 샀다가 성분 비교를 하게 됐다. 착즙 제품이 원물에 더 가깝다는 걸 알고 나서 선택 기준이 바뀌었다.</p>" },,

    { type: 'h2', id: 'nfc-vs-concentrate', text: 'NFC vs 농축환원 — 품질 차이' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">NFC(Non-From-Concentrate)</th><th style="padding:8px;border:1px solid #ddd">농축환원(FC)</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">제조 방식</td><td style="padding:8px;border:1px solid #ddd">과일 직접 압착·저온 살균</td><td style="padding:8px;border:1px solid #ddd">70~80°C 농축 후 물 추가</td></tr><tr><td style="padding:8px;border:1px solid #ddd">영양소 보존</td><td style="padding:8px;border:1px solid #ddd">높음 (열 손실 최소)</td><td style="padding:8px;border:1px solid #ddd">안토시아닌·비타민 손실 있음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">맛·향</td><td style="padding:8px;border:1px solid #ddd">과일 본연</td><td style="padding:8px;border:1px solid #ddd">평탄화될 수 있음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">가격</td><td style="padding:8px;border:1px solid #ddd">높음</td><td style="padding:8px;border:1px solid #ddd">저렴</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'anthocyanin', text: '안토시아닌의 주요 효능' },
    {
      type: 'body',
      html: '<p>블루베리·하스카프베리의 자색·청색은 안토시아닌 색소에서 비롯됩니다.</p><ul><li><strong>눈 건강</strong>: 망막 로돕신 재합성 보조, 야간 시력·눈 피로 완화</li><li><strong>항산화·항염</strong>: 활성산소 소거, NF-κB 경로 억제</li><li><strong>혈관 보호</strong>: 혈관 내피 기능 개선, 혈소판 응집 억제</li><li><strong>인지 기능</strong>: 소규모 연구에서 기억력·집중력 개선 보고</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000615475', productName: '뉴트리원 NFC 유기농 블루베리 착즙액 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615475/480_1000615475_ITEM2025121859974.png', price: 92120 },
        { nutrioneId: '1000653920', productName: '뉴트리원 NFC 하스카프베리 착즙액 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000653920/480_1000653920_ITEM2026031348904.png', price: 61800 },
      ],
    },

    { type: 'h2', id: 'haskap', text: '하스카프베리란' },
    {
      type: 'body',
      html: '<p>하스카프베리(Haskap Berry, Lonicera caerulea)는 시베리아·홋카이도 원산의 블루허니서클 열매로, 블루베리보다 <strong>안토시아닌 함량이 약 2~5배 높습니다</strong>.</p><ul><li>주요 안토시아닌: 시아니딘-3-글루코사이드, 시아니딘-3-루티노사이드</li><li>낮은 GI(혈당지수): 당분이 블루베리보다 적어 혈당 관리에 유리</li><li>비타민C 함량: 100g당 약 50~80mg (블루베리의 3~4배)</li></ul>',
    },

    { type: 'h2', id: 'how-to', text: '복용 방법' },
    {
      type: 'body',
      html: '<p>하루 50~100ml를 그냥 마시거나 물에 희석해 마십니다. 공복 또는 식전 복용이 흡수에 유리하나, 위장이 약한 경우 식후 복용도 가능합니다. 개봉 후 냉장 보관하고 빠르게 소비하세요.</p>',
    },

    { type: 'productSlot', productKey: 'blueberry-juice' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '루테인 영양제와 블루베리 착즙액을 같이 먹어도 되나요?',
          a: '네, 두 성분은 기전이 다르고 상호 보완적입니다. 루테인은 황반색소 밀도를 유지하고, 안토시아닌은 망막 로돕신 재합성과 항산화를 돕습니다. 눈 건강에 관심 있다면 함께 복용할 수 있습니다.',
        },
        {
          q: 'NFC 착즙액을 마시면 혈당이 오르지 않나요?',
          a: '블루베리 착즙액은 당분이 포함돼 있어 혈당이 오를 수 있습니다. 그러나 안토시아닌의 혈당 완화 효과와 섬유질이 혈당 상승 속도를 줄입니다. 당뇨가 있다면 소량(30~50ml)부터 시작하고 혈당 변화를 모니터링하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Cassidy A et al. — Blueberry anthocyanins and cardiovascular (2015)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'PubMed', accessedAt: '2026-05-08' },
        { label: 'Zhao Y — Haskap Berry Composition (2019)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'PubMed', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
