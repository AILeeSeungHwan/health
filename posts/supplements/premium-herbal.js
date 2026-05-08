// posts/supplements/premium-herbal.js
const post = {
  id: 'U0032',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 프리미엄 한방 진액은 산수유·오미자·구기자·홍경천 등 한의학에서 기력 회복·항산화에 활용하는 생약 복합물을 고농축으로 담은 식품입니다. 피로·노화·면역 저하가 복합적으로 나타나는 중장년층이 주요 대상이며, 전통적 보양 식품으로 긴 역사를 가지고 있습니다.</p><div class="meta-row"><span class="tag">식품 유형: 프리미엄 복합 생약 진액</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'key-ingredients', text: '대표 한방 보양 성분과 효능' },
    {
      type: 'body',
      html: '<p>한방 프리미엄 진액에 주로 사용되는 성분들입니다.</p><ul><li><strong>산수유(山茱萸, Cornus fruit)</strong>: 신장·간 보강, 피로 회복, 항산화. 이리도이드 배당체 성분이 혈당·혈압 조절 보조에 관한 연구가 있습니다.</li><li><strong>오미자(五味子, Schisandra)</strong>: 5가지 맛을 내는 베리. 간 보호(실리마린과 유사한 작용), 운동 능력 향상, 피로 경감. 러시아·중국 연구 다수.</li><li><strong>구기자(枸杞子, Wolfberry/Goji)</strong>: 제아잔틴·베타인·폴리사카라이드 함유. 눈 건강, 항산화, 면역 조절.</li><li><strong>홍경천(紅景天, Rhodiola rosea)</strong>: 어댑토겐(adaptogen) 허브. 스트레스·고도 환경에서 체력 유지, 정신 피로 감소 임상 근거 비교적 풍부.</li></ul>',
    },

    { type: 'h2', id: 'evidence', text: '과학적 근거 수준' },
    {
      type: 'body',
      html: '<p>개별 성분들은 소규모 임상 연구가 있으나, 복합 진액 형태의 대규모 RCT는 드뭅니다. 식약처는 복합 한방 진액 자체에 대한 별도 기능성을 인정하지 않으며 식품으로 분류합니다.</p><p>단, 오미자·홍경천은 개별인정형 건강기능식품 원료로 인정된 제품도 있어, 성분 함량에 따라 기능성 인정 여부가 달라집니다. 제품 라벨에서 건강기능식품 마크를 확인하세요.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000609171', productName: '뉴트리원 윤진고 프리미엄', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000609171/480_1000609171_ITEM2025112762206.png', price: 219000 },
      ],
    },

    { type: 'h2', id: 'target', text: '이런 분께 적합합니다' },
    {
      type: 'body',
      html: '<ul><li>만성 피로·체력 저하가 지속되는 중장년층</li><li>영양 밀도 높은 음식을 한 번에 섭취하고 싶은 시니어</li><li>홍삼·인삼에 부담을 느끼는 분 (홍삼 특유의 열감·두근거림이 없는 배합)</li><li>면역력 강화·노화 예방에 관심 있는 분</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>항응고제(와파린) 복용자</strong>: 오미자 등 일부 성분이 CYP3A4 대사를 변화시킬 수 있어 약물 상호작용 주의.</li><li><strong>임산부·수유부</strong>: 한방 복합 성분의 임신 중 안전성 데이터 부족.</li><li><strong>알레르기 체질</strong>: 복합 성분 포함 제품은 알레르기 반응 가능성 확인.</li><li>현재 복용 중인 한약재와 중복 성분이 있을 경우 한의사 상담 권장.</li></ul>',
    },

    { type: 'productSlot', productKey: 'premium-herbal' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '홍삼과 한방 복합 진액의 차이는 무엇인가요?',
          a: '홍삼은 단일 성분(진세노사이드) 중심으로 식약처 기능성이 입증된 반면, 한방 복합 진액은 여러 생약을 배합한 식품입니다. 홍삼 특유의 강한 성질이 부담스러운 분은 복합 진액이 적합할 수 있습니다.',
        },
        {
          q: '효과는 얼마나 지나야 느낄 수 있나요?',
          a: '한방 보양 성분은 빠른 효과보다 꾸준한 섭취를 통한 체질 개선을 목표로 합니다. 일반적으로 2~3개월 이상 복용 후 체력·피로 개선을 체감하는 경우가 많습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '한국한의학연구원 — 생약 자료', url: 'https://www.kiom.re.kr/', org: '한국한의학연구원', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Herbal Medicines', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
