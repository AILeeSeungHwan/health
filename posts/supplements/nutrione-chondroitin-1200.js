// posts/supplements/nutrione-chondroitin-1200.js
const post = {
  id: 'U0038',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 관절연골엔 뮤코다당단백 콘드로이친 1200은 콘드로이친황산나트륨·글루코사민·MSM을 복합한 관절 전문 영양제입니다. "1200"은 콘드로이친 1,200mg 기준 함량을 의미하며, 식약처 고시형 기능성 원료인 뮤코다당단백 복합물을 함유합니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag tag-approved">식약처 기능성 고시</span></div>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>콘드로이친 제품을 고를 때 1일 함량이 얼마인지 확인하게 됐다. 연구에서 효과를 보인 용량이 1,200mg 근처라는 걸 알고 나서 함량을 먼저 보는 습관이 생겼다.</p>" },


    { type: 'h2', id: 'product-overview', text: '제품 특징' },
    {
      type: 'body',
      html: '<ul><li><strong>뮤코다당단백 복합물</strong>: 식약처 고시 기능성 원료 — 관절 및 연골 건강에 도움</li><li><strong>콘드로이친</strong>: 연골의 주요 구성 성분, 수분 보유·충격 흡수</li><li><strong>글루코사민</strong>: 연골 기질(프로테오글리칸) 합성 보조</li><li><strong>MSM(메틸설포닐메탄)</strong>: 황 공급원, 항염·관절 통증 완화 보조</li></ul>',
    },

    { type: 'h2', id: 'how-it-works', text: '관절 연골 보호 기전' },
    {
      type: 'body',
      html: '<p>관절 연골은 혈관이 없어 영양 공급이 제한적입니다. 관절액(시노비아)을 통해 영양을 흡수하는데, 나이·과사용으로 연골이 닳으면 재생이 어렵습니다.</p><ul><li>콘드로이친은 연골 기질 분해 효소(MMP)를 억제해 연골 소실 속도를 늦춥니다.</li><li>글루코사민은 연골을 구성하는 글리코사미노글리칸(GAG) 합성의 원료를 제공합니다.</li><li>두 성분의 병용(GAIT 연구 등)이 단독보다 중등도 이상 관절통 완화에 유리하다는 보고가 있습니다.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000274816', productName: '뉴트리원 관절연골엔 뮤코다당단백 콘드로이친 1200', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000274816/480_1000274816_ITEM2024121047969.png', price: 158400 },
        { nutrioneId: '1000312955', productName: '뉴트리원 비타슈넬 칼마디K 2X PGA', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000312955/480_1000312955_ITEM2024053112907.png', price: 37500 },
      ],
    },

    { type: 'h2', id: 'evidence', text: '임상 근거 정리' },
    {
      type: 'body',
      html: '<p>GAIT 연구(미국, 1,600명 RCT): 글루코사민+콘드로이친 병용이 <strong>중등도 이상 무릎 관절통</strong>에서 유의미한 통증 완화를 보였습니다. 경증 관절통에서는 위약과 차이가 크지 않았습니다.</p><p>MOVES 연구: 글루코사민+콘드로이친이 셀레콕시브(소염진통제)에 비해 무릎 관절통 완화에서 비열등(non-inferior) 결과를 보였습니다.</p>',
    },

    { type: 'h2', id: 'who-needs', text: '이런 분에게 추천합니다' },
    {
      type: 'body',
      html: '<ul><li>무릎·고관절 연골 마모가 우려되는 50대 이상</li><li>등산·달리기·스쿼트 등 관절 사용이 많은 분</li><li>관절통으로 소염제를 자주 복용하는 분의 보완 요법</li><li>과체중으로 무릎에 부하가 큰 분</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>갑각류 알레르기</strong>: 글루코사민이 게·새우 껍질 유래인 경우 알레르기 반응 가능. 제품 원료 확인.</li><li><strong>항응고제 복용자</strong>: 일부 연구에서 글루코사민이 와파린 효과를 강화할 수 있다고 보고.</li><li>관절염 통증이 심하거나 관절 변형이 진행된 경우 정형외과 치료가 우선입니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'chondroitin' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '관절 영양제는 몇 달이나 먹어야 효과가 있나요?',
          a: '대부분의 임상 연구에서 통증 개선은 8~12주 이상 복용 후 나타났습니다. 6개월 이상 꾸준히 복용하는 것이 권장되며, 3개월 복용 후에도 전혀 차도가 없으면 의사와 상담하세요.',
        },
        {
          q: '연골이 다시 생긴다는 게 사실인가요?',
          a: '영양제로 손상된 연골이 완전히 재생된다는 근거는 없습니다. 콘드로이친·글루코사민은 연골의 추가 소실 속도를 늦추고 관절 통증을 완화하는 수준으로 이해하는 것이 적절합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 뮤코다당단백 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: 'Hochberg MC et al. — GAIT Study (2006)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'NEJM', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
