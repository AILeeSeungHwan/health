// posts/supplements/apple-cider-vinegar.js
const post = {
  id: 'U0026',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 애플사이다비네거(ACV, 사과 식초)는 사과를 발효시켜 만든 식초로, 아세트산·유기산·폴리페놀이 풍부합니다. 혈당 완화·체중 관리·소화 개선 효과에 대한 연구가 늘고 있습니다. 젤리·캡슐 형태는 원액의 강한 산미 없이 편리하게 섭취할 수 있어 인기입니다.</p><div class="meta-row"><span class="tag">성분: 사과 발효 식초(아세트산)</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>살을 빼겠다고 사과식초를 아침마다 공복에 먹었다. 한 달 후 위가 쓰렸다. 반드시 물에 희석해야 하고 공복 복용은 피해야 한다는 걸 그때 배웠다. 효과에 대한 기대가 컸던 만큼 실망도 컸다 — 만병통치는 없다.</p>" },

{ type: 'callout', html: "<p>살을 빼겠다고 사과식초를 아침마다 공복에 먹었다. 한 달 후 위가 쓰렸다. 반드시 물에 희석해야 하고 공복 복용은 피해야 한다는 걸 그때 배웠다. 효과에 대한 기대가 컸던 만큼 실망도 컸다 — 만병통치는 없다.</p>" },,

    { type: 'h2', id: 'acetic-acid', text: '아세트산의 주요 작용' },
    {
      type: 'body',
      html: '<p>ACV의 핵심 활성 성분은 <strong>아세트산(acetic acid, 5~6% 함유)</strong>입니다.</p><ul><li><strong>혈당 완화</strong>: 식사와 함께 또는 식전 ACV 섭취 시 전분 분해 효소(α-amylase) 억제 → 식후 혈당 상승 속도를 낮춥니다. 메타분석에서 당지수(GI)가 높은 식사 직후 혈당을 유의하게 낮추는 것이 확인됐습니다.</li><li><strong>포만감 증가</strong>: 위 배출 속도를 늦춰 포만감을 연장, 칼로리 섭취 감소에 기여할 수 있습니다.</li><li><strong>장 건강</strong>: 발효 과정에서 생성된 프리바이오틱스 성분이 장내 유익균 성장을 보조합니다.</li></ul>',
    },

    { type: 'h2', id: 'evidence', text: '임상 근거' },
    {
      type: 'body',
      html: '<p>소규모 RCT 다수가 ACV의 식후 혈당 완화 효과를 보고했으나, 대규모 장기 연구는 아직 부족합니다. 체중 감량 효과는 3개월 연구에서 체중 ·체지방률 소폭 감소를 보였지만 효과 크기가 작습니다.</p><p>식약처는 사과 식초에 대한 별도 기능성을 고시 인정하지 않았으며, 식품으로 분류됩니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000480700', productName: '뉴트리원 애사비 탱글 포켓 젤리', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000480700/480_1000480700_ITEM2025070274419.png', price: 42800 },
      ],
    },

    { type: 'h2', id: 'liquid-vs-gummy', text: '원액 vs 젤리·캡슐 형태 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">원액(식초)</th><th style="padding:8px;border:1px solid #ddd">젤리·캡슐</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">아세트산 함량</td><td style="padding:8px;border:1px solid #ddd">높음 (5~6%)</td><td style="padding:8px;border:1px solid #ddd">낮음 (가공 과정 손실)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">치아 손상 위험</td><td style="padding:8px;border:1px solid #ddd">높음 (강산)</td><td style="padding:8px;border:1px solid #ddd">낮음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">식도 자극</td><td style="padding:8px;border:1px solid #ddd">가능</td><td style="padding:8px;border:1px solid #ddd">낮음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">편의성</td><td style="padding:8px;border:1px solid #ddd">낮음</td><td style="padding:8px;border:1px solid #ddd">높음</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">원액을 섭취할 경우 반드시 물로 10배 이상 희석 후 빨대 사용 권장.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>치아 에나멜 손상</strong>: 원액을 직접 섭취하면 강산이 치아를 부식. 섭취 후 물로 입을 헹굽니다.</li><li><strong>위식도역류(GERD) 환자</strong>: 산도가 높아 증상을 악화시킬 수 있습니다.</li><li><strong>당뇨 약·인슐린 복용자</strong>: 혈당 저하 효과가 겹쳐 저혈당 위험. 의사 상담 필수.</li><li><strong>이뇨제 복용자</strong>: 칼륨 감소 가능. 전해질 균형에 주의.</li></ul>',
    },

    { type: 'productSlot', productKey: 'apple-cider-vinegar' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: 'ACV를 아침 공복에 마시는 게 좋다고 들었는데, 사실인가요?',
          a: '공복 섭취가 소화 효소 활성화에 유리하다는 주장이 있으나, 공복 고산도 자극으로 위장 불편감이 생기기 쉽습니다. 식사 직전 또는 식사와 함께 섭취하는 것이 혈당 완화 효과를 극대화하면서 위장 자극을 줄이는 방법입니다.',
        },
        {
          q: '어머니(母の味)가 중요한 이유는 무엇인가요?',
          a: '"어머니(Mother of Vinegar)"는 천연 발효 사과 식초에서 볼 수 있는 발효 균·효소·폴리페놀 복합체입니다. 여과하지 않은 탁한 원액에 포함됩니다. 건강상 유의미한 차이인지는 아직 연구가 충분하지 않습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Johnston CS — Vinegar: Medicinal Uses and Antiglycemic Effect (2006)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1785201/', org: 'Medscape General Medicine', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Dietary Supplements', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
