// posts/supplements/xanthigen.js
const post = {
  id: 'U0027',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 잔티젠(Xanthigen®)은 갈조류에서 추출한 <strong>푸코잔틴(Fucoxanthin)</strong>과 석류씨오일(Pomegranate Seed Oil)의 복합 특허 성분입니다. 체지방 대사 촉진·갈색지방 활성화 기전으로 주목받고 있으며, 소규모 임상 연구에서 체중·체지방 감소 효과가 보고됐습니다.</p><div class="meta-row"><span class="tag">성분: 푸코잔틴·석류씨오일</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>뱃살이 잘 안 빠진다는 고민을 하면서 잔티젠을 찾아봤다. 갈색지방 활성화에 관여한다는 연구가 있다는 게 흥미로웠다. 기대가 컸던 만큼 혼자서 다이어트 효과를 내기는 어렵다는 걸 먹어보고 알게 됐다.</p>" },


    { type: 'h2', id: 'fucoxanthin', text: '푸코잔틴이란' },
    {
      type: 'body',
      html: '<p>푸코잔틴(Fucoxanthin)은 미역·다시마·톳 등 갈조류의 황갈색 카로티노이드 색소입니다. 카로티노이드 중에서 드물게 <strong>UCP1(uncoupling protein-1)</strong>을 지방 조직에서 발현시켜 지방을 열에너지로 소모하는 갈색지방 유사 효과를 냅니다.</p><p>실험실 및 동물 연구에서 체지방·혈당·중성지질 감소 효과가 확인됐으나, 인체 임상 연구는 아직 소규모입니다.</p>',
    },

    { type: 'h2', id: 'pomegranate-oil', text: '석류씨오일의 역할' },
    {
      type: 'body',
      html: '<p>석류씨오일(Pomegranate Seed Oil)에는 <strong>공액리놀레산(CLA) 유사체인 퓨니크산(Punicic Acid)</strong>이 풍부합니다. 퓨니크산은 지방산 산화를 촉진하고 인슐린 감수성을 개선할 수 있다는 연구가 있습니다.</p><p>잔티젠® 특허 제형에서 석류씨오일은 푸코잔틴의 지용성 흡수를 높이는 역할도 합니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000570', productName: '뉴트리원 잔티젠 에스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000570/480_1000000570_ITEM2025010993520.png', price: 9900 },
      ],
    },

    { type: 'h2', id: 'evidence', text: '임상 근거 및 한계' },
    {
      type: 'body',
      html: '<p>러시아에서 진행된 RCT(Abidov et al., 2010)에서 과체중 여성에게 잔티젠 300mg/일 16주 투여 시 위약 대비 체중 −5.5kg, 체지방 −8.1%를 보고했습니다. 단, 이 연구는 제조사 후원·소규모로 독립적 재현이 제한적입니다.</p><p>식약처는 푸코잔틴에 대한 별도 기능성을 인정하지 않았으므로, 현재 체지방 감소 효능 주장을 광고에서 하기 어렵습니다.</p>',
    },

    { type: 'h2', id: 'vs-others', text: '시서스·가르시니아와 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">기전</th><th style="padding:8px;border:1px solid #ddd">식약처 기능성</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">잔티젠(푸코잔틴)</td><td style="padding:8px;border:1px solid #ddd">갈색지방 UCP1 활성화</td><td style="padding:8px;border:1px solid #ddd">없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">시서스(Cissus)</td><td style="padding:8px;border:1px solid #ddd">지방합성 억제·포만감</td><td style="padding:8px;border:1px solid #ddd">없음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">가르시니아(HCA)</td><td style="padding:8px;border:1px solid #ddd">ATP-구연산 분해효소 억제</td><td style="padding:8px;border:1px solid #ddd">없음</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">다이어트 보조 성분은 생활습관 개선 없이는 효과가 매우 제한적입니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li>해조류 알레르기(요오드 과민) 환자는 섭취 전 확인.</li><li>갑상선 질환자: 요오드 함량이 있을 수 있으므로 의사 상담.</li><li>임산부·수유부: 임상 안전성 데이터 부족.</li><li>당뇨 약 복용자: 혈당에 영향 가능성 — 주의.</li></ul>',
    },

    { type: 'productSlot', productKey: 'xanthigen' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '잔티젠은 하루 얼마나 먹어야 하나요?',
          a: '주요 임상 연구에서 사용된 용량은 잔티젠® 기준 하루 300mg입니다. 제품마다 잔티젠 함량이 다르므로 라벨을 확인하고 권장 섭취량을 준수하세요.',
        },
        {
          q: '식사를 안 줄이고 잔티젠만 먹으면 살이 빠지나요?',
          a: '잔티젠은 체지방 대사를 보조하는 수준이며, 식이 조절·운동 없이 단독으로 유의미한 체중 감량을 기대하기 어렵습니다. 식이 칼로리 조절과 병행해야 효과가 나타납니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Abidov M et al. — Xanthigen in the weight management (2010)', url: 'https://pubmed.ncbi.nlm.nih.gov/', org: 'PubMed', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Weight Management', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
