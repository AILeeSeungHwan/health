// posts/supplements/nutrione-vitamin-c-gold.js
const post = {
  id: 'U0039',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 리포좀 비타민C 골드는 인지질 이중막(리포좀)에 비타민C를 포집해 소장 흡수율을 일반 비타민C 대비 크게 높인 고급 비타민C 제품입니다. 항산화·면역·콜라겐 합성 등 식약처 인정 기능성에 더해, 고용량에서도 위장 자극이 적은 것이 특징입니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag tag-approved">식약처 기능성 고시</span></div>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>비타민C를 고용량으로 먹으면 속이 쓰렸다. 리포좀 형태로 바꾸고 나서 속쓰림 없이 꾸준히 먹을 수 있게 됐다. 일반 비타민C보다 흡수율이 높다는 것도 선택 이유 중 하나였다.</p>" },


    { type: 'h2', id: 'product-overview', text: '제품 특징' },
    {
      type: 'body',
      html: '<ul><li><strong>리포좀 기술</strong>: 비타민C를 인지질 이중막으로 감싸 위산 분해 방지·세포 흡수 촉진</li><li><strong>비타민C 함량</strong>: 1포당 고함량 (라벨 확인)</li><li><strong>위장 자극</strong>: 일반 아스코르브산보다 적음 — 민감한 위장도 OK</li><li><strong>제형</strong>: 액상 파우치 또는 캡슐 (라벨 확인)</li></ul>',
    },

    { type: 'h2', id: 'liposomal-vs-regular', text: '리포좀 vs 일반 비타민C — 흡수율 차이' },
    {
      type: 'body',
      html: '<p>일반 비타민C(아스코르브산)는 고용량(1,000mg 이상)에서 소장 흡수 포화 현상이 생겨 흡수율이 50% 이하로 떨어집니다. 리포좀 비타민C는 세포막과 유사한 구조로 능동·수동 흡수가 동시에 이뤄져 고용량에서도 높은 흡수율을 유지합니다.</p><ul><li>일반 비타민C 1,000mg: 흡수율 약 50% → 실제 흡수 500mg</li><li>리포좀 비타민C 1,000mg: 흡수율 연구마다 다르나 최대 90% 이상 보고</li></ul><p><strong>단</strong>, 리포좀 비타민C 제품 간에도 제조 기술·인지질 농도·캡슐 크기에 따라 흡수율 차이가 있어 모든 리포좀 제품이 동일하지 않습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000225109', productName: '뉴트리원 리포좀 비타민C 골드', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000225109/480_1000225109_ITEM2023122191606.png', price: 67500 },
      ],
    },

    { type: 'h2', id: 'benefits', text: '비타민C의 주요 기능' },
    {
      type: 'body',
      html: '<ul><li><strong>항산화</strong>: 자유라디칼 중화, 비타민E 재생 보조</li><li><strong>면역</strong>: 중성구·림프구 기능 강화, 상처 회복 촉진</li><li><strong>콜라겐 합성</strong>: 프롤린·라이신 수산화 효소의 보조인자 — 피부·혈관·연골 유지</li><li><strong>철분 흡수 증진</strong>: 비헴철을 Fe²⁺로 환원해 흡수율 향상</li><li><strong>스트레스 대응</strong>: 부신에서 코르티솔 합성에 관여</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>신장 결석 과거력</strong>: 고용량 비타민C가 옥살산 결석 위험을 높일 수 있습니다. 하루 1,000mg 이내 권장.</li><li><strong>상한 섭취량</strong>: 식약처 2,000mg/일 초과 금지.</li><li><strong>혈당 측정</strong>: 고용량 비타민C가 일부 혈당 측정기 수치를 간섭할 수 있습니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'vitamin-c-liposomal' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '일반 비타민C 대신 리포좀 비타민C를 먹어야 하나요?',
          a: '건강한 성인이 하루 500~1,000mg 정도 복용한다면 일반 비타민C로도 충분합니다. 리포좀 제품은 고용량이 필요하거나, 위장이 민감해 일반 비타민C 복용 후 속쓰림이 있는 경우에 더 유리합니다.',
        },
        {
          q: '감기 예방·치료에 비타민C가 정말 효과적인가요?',
          a: '코크란 메타분석에 따르면, 비타민C 보충제는 일반 인구에서 감기 발생을 예방하지 않지만 감기 지속 기간을 약 8% 단축시켰습니다. 극한 운동·추운 환경에 노출되는 사람에서는 예방 효과가 더 높게 나타납니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 비타민C 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: 'Hemilä H — Vitamin C and Infections (Cochrane)', url: 'https://www.cochranelibrary.com/', org: 'Cochrane', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
