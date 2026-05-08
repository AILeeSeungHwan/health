// posts/supplements/cissus.js
const post = {
  id: 'U0029',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 시서스(Cissus quadrangularis)는 아프리카·아시아 원산의 포도과 식물로, 전통 의학에서 뼈·관절 회복에 사용해 왔습니다. 현대 연구에서는 체지방 감소·혈당 조절·관절 통증 완화 가능성이 보고되고 있습니다. 다이어트 보조제와 관절 영양제 시장에서 모두 주목받는 성분입니다.</p><div class="meta-row"><span class="tag">성분: 시서스 쿼드랑구라리스 추출물</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>운동을 재개하면서 무릎과 힘줄이 예전보다 더 빨리 아프다는 걸 느꼈다. 시서스가 힘줄·인대 회복에 좋다는 얘기를 듣고 먹기 시작했다. 효과가 바로 느껴지진 않았지만 꾸준히 먹으면서 통증 빈도가 줄었다.</p>" },


    { type: 'h2', id: 'what-is', text: '시서스란 무엇인가' },
    {
      type: 'body',
      html: '<p>시서스 쿼드랑구라리스(Cissus quadrangularis)는 인도 아유르베다·아프리카 전통 의학에서 골절 회복 가속·관절염 완화에 수천 년간 사용된 식물입니다. 줄기에 <strong>케토스테로이드·이소람네틴·레스베라트롤</strong>이 풍부합니다.</p><p>최근 서구 시장에서는 <strong>다이어트 보조제</strong>로 더 알려졌습니다. IGOB131® 등 표준화 추출물을 사용한 연구에서 체중·체지방 감소가 보고됐습니다.</p>',
    },

    { type: 'h2', id: 'weight-loss', text: '다이어트 효과 — 근거와 한계' },
    {
      type: 'body',
      html: '<p>Oben et al. (2006, 2008) 두 편의 RCT에서 과체중 성인에게 IGOB131® 표준화 시서스 추출물 투여 시 위약 대비 체중 −8.8%, 허리둘레 감소, 공복혈당·콜레스테롤 개선을 보고했습니다.</p><p><strong>기전 가설</strong>: 세로토닌 수용체 조절로 식욕 억제, 지방 분해 효소(lipase) 억제, 인슐린 감수성 향상.</p><p><strong>한계</strong>: 두 연구 모두 제조사 후원, 소규모(50~150명), 독립적 재현이 부족합니다. 식약처 기능성 인정 없음.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000082005', productName: '뉴트리원 시서스 원 다이어트', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000082005/480_1000082005_ITEM2024121096498.png', price: 34900 },
      ],
    },

    { type: 'h2', id: 'joint', text: '관절 건강 효과' },
    {
      type: 'body',
      html: '<p>시서스는 뼈·관절에도 작용합니다.</p><ul><li><strong>골절 회복 보조</strong>: 케토스테로이드 성분이 조골세포(osteoblast) 활성을 높여 골절 치유 기간을 단축할 수 있다는 연구.</li><li><strong>관절 통증 완화</strong>: 항염 효과로 관절염 환자의 통증·부종을 줄인다는 소규모 연구.</li><li>근육량을 유지하면서 지방 감량하려는 운동선수·헬스 트레이닝 인구가 선호합니다.</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li>위장 불편(복통·설사)이 초기 섭취 시 발생할 수 있습니다.</li><li>당뇨 약 복용자: 혈당 저하 효과 중복 가능. 의사 상담 필수.</li><li>임산부: 안전성 데이터 부족 — 복용 피하세요.</li><li>갑상선 호르몬 수치에 영향 가능성이 보고된 바 있어 갑상선 질환자는 주의.</li></ul>',
    },

    { type: 'productSlot', productKey: 'cissus' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '시서스와 가르시니아(HCA)를 같이 먹어도 되나요?',
          a: '두 성분 모두 다이어트 보조 목적으로 사용되며, 기전이 달라 병용 자체가 금지되지는 않습니다. 단, 효과가 배가된다는 임상 근거는 없고 위장 부작용이 중첩될 수 있으므로 한 가지씩 시도해 본 후 결정하세요.',
        },
        {
          q: '언제 얼마나 먹어야 하나요?',
          a: '일반적으로 IGOB131® 추출물 기준 하루 300~600mg을 식전 30분에 복용하는 방식이 연구에서 사용됐습니다. 제품별 함량이 다르므로 라벨 지침을 따르세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Oben JE et al. — Cissus quadrangularis obesity RCT (2006)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'PubMed', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Weight Management', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
