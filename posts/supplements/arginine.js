const post = {
  id: 'U0015',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 아르기닌(L-Arginine)은 체내에서 산화질소(NO)를 생성하는 반필수아미노산입니다. 혈관 확장·혈행 개선·면역 기능 지원·운동 능력 향상에 도움이 될 수 있습니다. 저혈압·헤르페스 바이러스 활성화 등의 주의사항이 있습니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'mechanism', text: '아르기닌의 핵심 기전 — 산화질소(NO) 생성' },
    {
      type: 'body',
      html: '<p>L-아르기닌은 산화질소합성효소(NOS)의 기질로, 이를 통해 <strong>산화질소(Nitric Oxide, NO)</strong>가 생성됩니다.</p><p>NO의 주요 역할:</p><ul><li>혈관 평활근 이완 → 혈관 확장 → 혈류 증가</li><li>혈소판 응집 억제 → 혈행 개선</li><li>면역 세포(대식세포) 활성화</li><li>근육 내 혈류 증가 → 운동 능력 지원</li></ul>',
    },

    { type: 'h2', id: 'benefits', text: '아르기닌의 효과 — 연구 현황' },
    {
      type: 'body',
      html: '<p><strong>혈행 개선</strong>: 관상동맥 질환·말초혈관 질환 환자에서 혈류 개선 효과 연구 다수. 단, 건강한 성인에서 효과는 제한적.</p><p><strong>운동 능력</strong>: 근육 혈류 증가로 지구력·펌프감에 도움. 단기간 고용량(3~6g)에서 운동 능력 지표 개선 연구 있음.</p><p><strong>면역</strong>: 수술·외상 후 면역 보조 영양제(면역 강화 제제)로 연구됨.</p><p><strong>남성 기능</strong>: 음경 혈류 증가와 관련해 연구되지만 근거 수준은 중간 정도.</p>',
    },

    { type: 'h2', id: 'dosage', text: '하루 권장 용량' },
    {
      type: 'info',
      html: '<p>일반 혈행 개선 목적: <strong>3,000~5,000mg/일</strong>. 운동 전 섭취 목적(펌프): 5,000~8,000mg. 식약처 건강기능식품 규격: 1일 1,500~3,000mg(혈행 개선 고시형).</p><p>뉴트리원 아르기닌 맥스 5000은 1회 5,000mg 함유 제품입니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000040803', productName: '뉴트리원 아르기닌 맥스 5000', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000040803/480_1000040803_ITEM2022052629591.png', price: 35900 },
      ],
    },

    { type: 'h2', id: 'cautions', text: '주의 사항 · 상호작용' },
    {
      type: 'warning',
      html: '<ul><li><strong>저혈압</strong>: NO 생성으로 혈압이 추가로 낮아질 수 있음. 강압제 복용자 주의.</li><li><strong>헤르페스(단순포진·대상포진)</strong>: 아르기닌이 헤르페스 바이러스 증식을 자극할 수 있음. 리신(Lysine)과 경쟁 관계.</li><li><strong>심근경색 직후</strong>: 임상 연구에서 사망률 증가 보고(2006 JAMA). 심장 사건 직후 아르기닌 고용량 주의.</li><li>신장 기능 저하 시 아미노산 대사 부담.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '아르기닌을 언제 먹으면 가장 효과적인가요?', a: '운동 능력 지원이 목적이라면 운동 30~60분 전 공복 섭취가 일반적입니다. 혈행 개선 목적은 식사와 관계없이 꾸준히 복용합니다.' },
        { q: '시트룰린과 아르기닌 중 어떤 게 더 좋은가요?', a: '시트룰린(Citrulline)은 장에서 흡수 후 신장에서 아르기닌으로 전환됩니다. 경구 흡수율이 아르기닌보다 높아, 혈중 아르기닌 농도 증가에는 시트룰린이 더 효율적이라는 연구가 있습니다. 복합 제품도 좋습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 건강기능식품 기능성 원료 — 아르기닌', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Schulman SP, et al. L-arginine supplementation in acute MI. JAMA. 2006', url: '#', org: 'JAMA' },
        { label: 'Figueroa A, et al. Watermelon extract (citrulline + arginine) and exercise. J Strength Cond Res. 2012', url: '#', org: 'NSCA' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
