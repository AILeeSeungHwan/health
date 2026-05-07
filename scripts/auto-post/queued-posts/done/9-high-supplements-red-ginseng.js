// HEALTHMOA QUEUED POST
// entity: supplements | slug: red-ginseng | priority: high | slot: noon
'use strict'

module.exports = {
  meta: { entity: 'supplements', dataId: 'U0005', slug: 'red-ginseng', priority: 'high', slot: 'noon' },

  dataEntry: {
    id: 'U0005',
    slug: 'red-ginseng',
    title: '홍삼 효능·식약처 인정 기능성·선택법 — 건강모아',
    description: '홍삼의 식약처 고시형 기능성(면역력 증진·피로 개선 등 6가지), 진세노사이드 함량 비교, 정관장·뉴트리원 등 브랜드 선택 기준, 복용 금기를 정리합니다.',
    category: 'supplement',
    ymylLevel: 'B',
    medicallyReviewed: false,
    author: 'healthmoa',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    tags: ['홍삼', '진세노사이드', '6년근 홍삼', '정관장', '홍삼 효능'],
    supplementName: '홍삼',
    nameEn: 'Red Ginseng (Panax ginseng)',
    mainIngredient: '진세노사이드 (Ginsenoside)',
    foodSafetyApproved: true,
    approvedFunctions: ['면역력 증진', '피로 개선', '혈소판 응집 억제로 혈액 흐름에 도움', '기억력 개선', '항산화', '갱년기 여성의 건강에 도움'],
    relatedSymptoms: ['menopause-symptoms'],
    relatedProducts: [],
    relatedSlugs: ['omega-3', 'vitamin-b-complex'],
  },

  postContent: `// posts/supplements/red-ginseng.js
const post = {
  id: 'U0005',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 홍삼은 수삼을 쪄서 건조한 것으로, 식약처가 6가지 기능성을 고시한 건강기능식품입니다. 주요 활성 성분은 진세노사이드(사포닌)이며, 제품마다 함량과 비율이 다릅니다. 6년근 홍삼이 기능성 근거가 가장 많지만, 함량과 원료 품질이 더 중요합니다.</p><div class="meta-row"><span class="tag">성분: 진세노사이드</span> <span class="tag tag-approved">식약처 기능성 고시</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다. 의약품 복용 중이면 의사·약사와 상담하세요.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-it', text: '홍삼이란' },
    {
      type: 'body',
      html: '<p>홍삼은 수삼(생인삼)을 수증기로 쪄서 건조한 것입니다. 가공 과정에서 산화·분해 반응으로 생인삼에 없던 희귀 진세노사이드(Rg3, Rh1, Rh2 등)가 생성됩니다. 국내에서는 <strong>인삼산업법</strong>에 따라 4~6년 재배 수삼을 원료로 사용하며, 6년근이 가장 많이 유통됩니다.</p>',
    },

    { type: 'h2', id: 'functions', text: '식약처 인정 기능성 6가지' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">기능성</th><th style="padding:8px;border:1px solid #ddd">근거 수준</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">면역력 증진</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성 (근거 충분)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">피로 개선</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">혈소판 응집 억제로 혈액 흐름에 도움</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">기억력 개선</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">항산화</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">갱년기 여성의 건강에 도움</td><td style="padding:8px;border:1px solid #ddd">고시형 기능성</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">※ "도움이 될 수 있음" 수준이며, 효과는 개인차가 있습니다.</p>',
    },

    { type: 'h2', id: 'ginsenoside', text: '진세노사이드 — 무엇을 볼까' },
    {
      type: 'body',
      html: '<p>진세노사이드는 홍삼의 주요 활성 성분으로, 현재까지 40여 종이 확인됐습니다. 식약처 기준은 <strong>진세노사이드 Rg1+Rb1+Rg3의 합산 함량</strong>으로 규격을 정합니다.</p><ul><li><strong>1일 섭취량 기준</strong>: 홍삼 농축액 기준 진세노사이드 3~80mg 범위에서 기능성 인정.</li><li><strong>제품 비교 시 확인 사항</strong>: 총 진세노사이드 함량(mg/일), 원료 홍삼의 산지·등급, 원액 함량(%).</li><li>진세노사이드 함량이 같아도 비율(Rg3:Rb1 등)이 다르면 체감 차이가 있을 수 있습니다.</li></ul>',
    },

    { type: 'h2', id: 'how-to-choose', text: '홍삼 제품 선택 기준' },
    {
      type: 'body',
      html: '<p><strong>원액 함량 확인</strong>: 홍삼 원액(농축액) 비율이 높을수록 유효성분 농도가 높습니다. "홍삼 추출물 분말"만 들어간 제품은 원액 대비 가공 전 형태가 다릅니다.</p><p><strong>GMP 인증</strong>: 식약처 GMP(우수건강기능식품 제조·관리 기준) 인증 시설에서 생산된 제품을 권장합니다.</p><p><strong>첨가물 확인</strong>: 당류·인공향 첨가 여부. 당뇨·혈당 관리 중인 분은 무가당 제품 권장.</p><p><strong>가격 합리성</strong>: 진세노사이드 1mg당 단가로 비교하면 브랜드 간 비용 효율 파악이 가능합니다.</p>',
    },

    { type: 'h2', id: 'how-to-take', text: '복용 방법과 시기' },
    {
      type: 'body',
      html: '<p>식약처 권장 1일 섭취량에 따라 제품 지시대로 복용합니다. 일반적으로 공복 또는 식후 모두 가능하지만, 위장이 예민한 경우 식후 복용이 편합니다. 면역·피로 기능성을 목적으로 할 때 최소 8주 이상 꾸준히 복용 후 효과를 평가하세요.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항 및 금기' },
    {
      type: 'warning',
      html: '<ul><li><strong>혈액 응고 억제 약물(와파린, 아스피린 등) 복용자</strong>: 홍삼의 혈소판 응집 억제 기능과 상호작용 가능. 의사·약사 상담 필수.</li><li><strong>혈압약 복용자</strong>: 홍삼이 혈압에 영향을 줄 수 있으므로 의사와 상담.</li><li><strong>임산부·수유부</strong>: 안전성 자료 불충분 — 섭취 자제 권장.</li><li><strong>당뇨 환자</strong>: 혈당에 영향 가능. 혈당 모니터링 권장.</li><li><strong>호르몬 의존성 암(유방암·전립선암 등)</strong>: 홍삼의 에스트로겐 유사 성분 주의.</li><li>만 12세 미만 어린이에 대한 안전성 데이터 제한적.</li></ul>',
    },

    { type: 'h2', id: 'productSlot', text: '추천 홍삼 제품' },
    { type: 'productSlot', productKey: 'red-ginseng' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '6년근 홍삼이 더 좋은가요?',
          a: '6년근 홍삼이 진세노사이드 함량이 가장 높은 것으로 알려져 있고, 현행 인삼산업법도 6년근을 최상등급으로 분류합니다. 그러나 최종 제품의 진세노사이드 함량과 추출 방식이 더 중요하므로, 6년근 표기만으로 품질을 판단하지 않는 것이 좋습니다.',
        },
        {
          q: '정관장이 다른 브랜드보다 효과가 더 좋나요?',
          a: '정관장(KGC한국인삼공사)은 오랜 연구·제조 노하우와 원료 품질 관리로 신뢰도가 높습니다. 그러나 "효과"는 진세노사이드 함량과 개인 체질에 따라 다르므로, 성분 함량을 비교해 비용 대비 효율도 고려하세요.',
        },
        {
          q: '매일 먹어도 되나요?',
          a: '식약처 권장 섭취량 내에서 매일 복용하는 것이 일반적인 방법입니다. 단, 1회 권장량을 초과해도 효과가 더 좋아진다는 근거는 없으며, 오히려 불면·두통·혈압 변화 등 부작용 가능성이 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 건강기능식품 기능성 원료 현황', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-07' },
        { label: '한국식품연구원 — 홍삼 기능성 연구', url: 'https://www.kfri.re.kr/', org: '한국식품연구원', accessedAt: '2026-05-07' },
        { label: 'MSD Manual — Ginseng', url: 'https://www.msdmanuals.com/professional/special-subjects/dietary-supplements/ginseng', org: 'MSD Manual', accessedAt: '2026-05-07' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
`,
}
