const post = {
  id: 'U0014',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 콘드로이친(뮤코다당단백)은 식약처가 "관절 및 연골 건강에 도움"을 고시형 기능성으로 인정한 성분입니다. 관절 연골의 수분 유지·완충 기능을 보조하며, 퇴행성 관절염 초기~중기 단계에서 보조적으로 활용됩니다.</p><p style="font-size:13px;color:#888">※ 의약품이 아닙니다. 관절 통증이 심한 경우 정형외과 진료를 받으세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>정형외과에서 무릎 연골이 얇아지고 있다는 얘기를 들었다. 수술까지는 아니지만 관리가 필요한 시점이라고 했다. 콘드로이친을 먹기 시작한 건 연골 분해를 늦추고 싶어서였다. 장기 복용이 필요하다는 건 처음부터 각오했다.</p>" },


    { type: 'h2', id: 'what', text: '콘드로이친이란 — 연골의 쿠션 성분' },
    {
      type: 'body',
      html: '<p>콘드로이친황산(Chondroitin sulfate)은 관절 연골의 주요 구성 성분인 프로테오글리칸의 일부입니다. 황산기가 붙은 글리코사미노글리칸(GAG)으로, 관절액과 연골에 수분을 붙잡아 충격 완충 역할을 합니다.</p><p>뮤코다당단백은 콘드로이친황산을 포함한 여러 GAG의 복합 혼합물로, 국내 건강기능식품 원료로는 "뮤코다당단백 복합물"로 표기됩니다.</p>',
    },

    { type: 'h2', id: 'evidence', text: '임상 근거와 식약처 기능성' },
    {
      type: 'body',
      html: '<p>식약처 고시형 기능성: <strong>"관절 및 연골 건강에 도움"</strong> (뮤코다당단백 복합물 기준 800mg/일).</p><p>주요 연구:</p><ul><li><strong>GAIT 연구(NIH)</strong>: 대규모 RCT. 경증 무릎 골관절염에서 콘드로이친 단독 효과는 위약과 유의미한 차이 없었으나, 중증 통증 군에서 글루코사민+콘드로이친 복합이 위약 대비 유의미한 통증 감소.</li><li>유럽 ESCEO 가이드라인: 무릎 골관절염 보조 치료로 처방형 콘드로이친 사용 권고.</li></ul>',
    },

    { type: 'h2', id: 'vs-glucosamine', text: '콘드로이친 vs 글루코사민 — 무엇이 다른가' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">콘드로이친</th><th style="padding:8px;border:1px solid #ddd">글루코사민</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">역할</td><td style="padding:8px;border:1px solid #ddd">연골 수분·완충 유지</td><td style="padding:8px;border:1px solid #ddd">연골·관절액 생성 재료</td></tr><tr><td style="padding:8px;border:1px solid #ddd">공급원</td><td style="padding:8px;border:1px solid #ddd">소 기관 연골·상어 연골</td><td style="padding:8px;border:1px solid #ddd">게·새우 등 갑각류 외골격</td></tr><tr><td style="padding:8px;border:1px solid #ddd">식약처 기능성</td><td style="padding:8px;border:1px solid #ddd">관절·연골 건강 (고시형)</td><td style="padding:8px;border:1px solid #ddd">관절·연골 건강 (고시형)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">병용</td><td style="padding:8px;border:1px solid #ddd" colspan="2">두 성분 복합이 상호 보완 가능 (일부 연구)</td></tr></tbody></table>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000274816', productName: '뉴트리원 관절연골엔 뮤코다당단백 콘드로이친 1200', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000274816/480_1000274816_ITEM2024121047969.png', price: 158400 },
        { nutrioneId: '1000312955', productName: '뉴트리원 비타슈넬 칼마디K 2X PGA', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000312955/480_1000312955_ITEM2024053112907.png', price: 37500 },
      ],
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>갑각류 알레르기</strong>: 콘드로이친 공급원이 소·상어 연골이라도, 갑각류 원료 혼합 제품이 있으므로 라벨 확인.</li><li><strong>항응고제(와파린)</strong>: 콘드로이친이 항응고 효과를 증강시킬 수 있다는 보고 있음. 담당의와 상담.</li><li><strong>수술 전후</strong>: 출혈 위험 우려로 수술 2주 전 중단 권장.</li><li>신장·간 기능 이상자: 복용 전 의료진 상담.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '콘드로이친 1200이라고 적혀 있는데 하루 1,200mg이 들어간 건가요?', a: '네, 보통 1일 섭취량 기준 뮤코다당단백 복합물 1,200mg을 의미합니다. 식약처 권장량(800mg 이상)을 넘는 용량으로, 효과적인 범위 내에 있습니다.' },
        { q: '연골이 닳은 사람에게 효과가 있나요?', a: '연골을 재생시키는 효과는 확인되지 않습니다. 남아 있는 연골의 수분·완충 기능을 보조하는 역할입니다. 연골이 심하게 손상된 경우에는 의료적 치료(주사·수술)가 필요할 수 있습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 건강기능식품 기능성 원료 — 뮤코다당단백 복합물', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Clegg DO, et al. GAIT Trial. NEJM. 2006', url: '#', org: 'NEJM' },
        { label: 'ESCEO Working Group. Algorithm for the management of knee OA. Semin Arthritis Rheum. 2019', url: '#', org: 'ESCEO' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
