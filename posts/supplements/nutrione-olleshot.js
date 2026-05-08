// posts/supplements/nutrione-olleshot.js
const post = {
  id: 'U0040',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 올레샷은 엑스트라버진 올리브오일과 레몬착즙액을 한 포에 결합한 "공복 음용 건강 의식" 제품입니다. 올리브오일의 올레산·폴리페놀과 레몬의 비타민C·플라보노이드를 동시에 섭취할 수 있으며, 아침 공복에 한 포씩 루틴으로 자리잡고 있습니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag">식품 (건강기능식품 아님)</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'product-lineup', text: '올레샷 라인업' },
    {
      type: 'body',
      html: '<ul><li><strong>올레샷 세트구성</strong>: 올리브오일+레몬즙 기본 조합. 대용량 구성.</li><li><strong>올리브엔 레몬 듀얼샷</strong>: 1회분 포장 — 분리형 듀얼 파우치로 신선도 보존</li><li><strong>올리브오일 레몬즙 듀얼샷</strong>: 일반 포장 조합</li><li><strong>유기농 엑스트라버진 올리브오일 단품</strong>: 올리브오일만 별도 섭취</li><li><strong>퓨어 유기농 레몬즙 단품</strong>: 레몬즙만 따로 사용 가능</li><li><strong>올토샷(올리브+토마토)</strong>: 올리브오일에 토마토 착즙액 추가 — 라이코펜 보강</li></ul>',
    },

    { type: 'h2', id: 'olive-oil-benefits', text: '엑스트라버진 올리브오일의 핵심 성분' },
    {
      type: 'body',
      html: '<ul><li><strong>올레산(Oleic Acid, 단일불포화지방산)</strong>: 심혈관 보호, LDL 산화 억제</li><li><strong>올레오칸탈(Oleocanthal)</strong>: 천연 이부프로펜 유사 항염 작용</li><li><strong>올레유로페인(Oleuropein)</strong>: 강력 항산화, 혈압 완화 보조</li><li><strong>스쿠알렌</strong>: 피부 보습, 항산화</li></ul><p>지중해식 식단의 핵심인 EVOO는 심혈관 사망 위험 감소(PREDIMED 연구)와 관련돼 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000549885', productName: '뉴트리원 올레샷 세트구성', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549885/480_1000549885_ITEM2025093012962.png', price: 124750 },
        { nutrioneId: '1000615980', productName: '뉴트리원 올리브엔 레몬 듀얼샷 올레샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615980/480_1000615980_ITEM2025121790381.png', price: 113690 },
        { nutrioneId: '1000572820', productName: '뉴트리원 올리브오일 레몬즙 듀얼샷 올레샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000572820/480_1000572820_ITEM2025122993273.png', price: 63700 },
        { nutrioneId: '1000603297', productName: '뉴트리원 올리브 엔 토마토 듀얼샷 올토샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000603297/480_1000603297_ITEM2026021269034.png', price: 138430 },
        { nutrioneId: '1000537338', productName: '뉴트리원 유기농 데일리 엑스트라버진 올리브오일 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000537338/480_1000537338_ITEM2025061047919.png', price: 76360 },
        { nutrioneId: '1000549344', productName: '뉴트리원 퓨어 유기농 레몬즙 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549344/480_1000549344_ITEM2025093044755.png', price: 69900 },
      ],
    },

    { type: 'h2', id: 'how-to', text: '올바른 복용 방법' },
    {
      type: 'body',
      html: '<p>올레샷은 <strong>아침 공복</strong>에 한 포 음용하는 방식이 일반적입니다. 지용성 성분인 올리브오일 폴리페놀은 위장이 비어있을 때 점막 자극이 있을 수 있으나, 올리브오일 자체의 지방이 식도·위장을 코팅해 자극을 줄여줍니다.</p><ul><li>하루 1포 (20~30ml) 아침 공복 권장</li><li>레몬즙의 구연산이 치아 에나멜에 자극할 수 있으니 복용 후 물로 헹구기</li><li>냉장 보관·유통기한 확인</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li>지방 함량이 높아 <strong>위장 질환(역류성 식도염·담낭 질환)</strong>이 있는 분은 주의. 고지방 자극으로 담즙 과분비 가능.</li><li>올리브오일은 고칼로리 — 체중 관리 시 하루 섭취 지방량에 포함 계산.</li><li>레몬즙 알레르기(드물지만 가능) 확인.</li></ul>',
    },

    { type: 'productSlot', productKey: 'olive-shot' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '올리브오일을 공복에 마시면 변비에 도움이 되나요?',
          a: '올리브오일의 올레산이 장 연동 운동을 촉진하는 효과가 있어 공복 복용이 배변에 도움을 준다는 경험담이 많습니다. 소규모 연구에서도 변비 완화 효과가 보고됐으나, 대규모 임상 근거는 아직 제한적입니다.',
        },
        {
          q: '올리브오일+레몬즙이 간 청소에 효과가 있나요?',
          a: '"간 청소(liver cleanse/flush)" 요법은 과학적으로 검증되지 않은 방법입니다. 올리브오일과 레몬즙이 담즙 배출을 자극하는 것은 사실이지만 "독소 제거" 효과는 근거가 없으며, 오히려 담석 환자에서 통증 유발 가능성이 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'PREDIMED Study — Olive Oil and Cardiovascular Risk', url: 'https://www.nejm.org/', org: 'NEJM', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Dietary Fats', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
