const post = {
  id: 'U0008',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 콜라겐은 피부·관절·뼈를 지탱하는 체내 가장 풍부한 단백질입니다. 20대 이후 매년 약 1%씩 감소하므로 식이·영양제로 보충 전략이 필요합니다. 저분자 가수분해 콜라겐이 흡수에 유리하며, 비타민C 병용이 콜라겐 합성을 보조합니다.</p><p style="font-size:13px;color:#888">※ 식약처 고시형 기능성 성분이 아닌 경우 의료적 효과를 보장하지 않습니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'types', text: '콜라겐 종류: 1형·2형·3형의 차이' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">타입</th><th style="padding:8px;border:1px solid #ddd">주요 분포</th><th style="padding:8px;border:1px solid #ddd">주된 효과</th><th style="padding:8px;border:1px solid #ddd">공급원</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">1형</td><td style="padding:8px;border:1px solid #ddd">피부·뼈·힘줄</td><td style="padding:8px;border:1px solid #ddd">피부 탄력·보습, 골밀도 보조</td><td style="padding:8px;border:1px solid #ddd">생선 가죽, 소 피부</td></tr><tr><td style="padding:8px;border:1px solid #ddd">2형</td><td style="padding:8px;border:1px solid #ddd">관절 연골</td><td style="padding:8px;border:1px solid #ddd">관절 완충·연골 보호</td><td style="padding:8px;border:1px solid #ddd">닭 가슴 연골</td></tr><tr><td style="padding:8px;border:1px solid #ddd">3형</td><td style="padding:8px;border:1px solid #ddd">혈관·피부 진피</td><td style="padding:8px;border:1px solid #ddd">혈관 탄력, 피부 지지</td><td style="padding:8px;border:1px solid #ddd">소 피부·힘줄</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">피부 목적에는 1·3형, 관절 목적에는 2형을 선택하는 것이 일반적입니다.</p>',
    },

    { type: 'h2', id: 'lowmolecular', text: '저분자 콜라겐 vs 일반 콜라겐 — 왜 저분자인가' },
    {
      type: 'body',
      html: '<p>콜라겐은 분자량이 매우 커(300kDa↑) 그대로는 장에서 흡수되기 어렵습니다. 가수분해 공정으로 <strong>저분자 콜라겐 펩타이드(3~5kDa)</strong>로 만들면 소장에서 트리펩타이드(Gly-Pro-Hyp) 형태로 흡수돼 혈행을 통해 피부·관절에 도달합니다.</p><ul><li>저분자 1,000Da 미만: 흡수 최우수 (단, 가격 높음)</li><li>저분자 3,000~5,000Da: 실제 연구에서 많이 사용된 범위</li><li>고분자(비가수분해): 단백질로 분해·흡수, 피부 직접 효과 미미</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000342419', productName: '뉴트리원 저분자 콜라겐 S (에코패키지)', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342419/480_1000342419_ITEM2025071598253.png', price: 55500 },
        { nutrioneId: '1000223550', productName: '뉴트리원 저분자 콜라겐 S', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000223550/480_1000223550_ITEM2025012393863.png', price: 121000 },
      ],
    },

    { type: 'h2', id: 'vitamin-c', text: '비타민C와 함께 섭취해야 하는 이유' },
    {
      type: 'callout',
      html: '<strong>콜라겐 합성 = 프롤라이/라이신 → 하이드록시화 → 비타민C 필수.</strong> 체내에서 콜라겐을 합성할 때 비타민C가 효소 보조인자로 반드시 필요합니다. 콜라겐 영양제를 먹더라도 비타민C가 결핍되면 합성 효율이 떨어집니다. 콜라겐 제품과 비타민C를 함께 섭취하거나, 비타민C가 포함된 복합 제품을 선택하세요.',
    },

    { type: 'h2', id: 'skin-vs-joint', text: '피부 콜라겐 vs 관절 콜라겐 — 목적별 선택' },
    {
      type: 'body',
      html: '<p><strong>피부 목적</strong>: 저분자 1·3형 콜라겐 펩타이드 + 비타민C. 연구에서 8~12주 복용 시 피부 탄력·보습 개선 결과가 보고됩니다.</p><p><strong>관절 목적</strong>: UC-II(비변성 2형 콜라겐) 40mg/일 또는 가수분해 2형 콜라겐. UC-II 연구에서 무릎 불편감·이동성 개선 결과가 관찰됐습니다.</p><p><strong>뼈 건강</strong>: 1형 콜라겐 + 칼슘·비타민K2 병용이 골밀도 유지에 보조적으로 도움이 될 수 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000642994', productName: '뉴트리원 화이트 콜라겐', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000642994/480_1000642994_ITEM2026021248018.png', price: 73540 },
        { nutrioneId: '1000267983', productName: '뉴트리원 더 콜라겐 더블케어', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000267983/480_1000267983_ITEM2025010972981.png', price: 32000 },
        { nutrioneId: '1000342411', productName: '뉴트리원 글루타치온 콜라겐 W (에코패키지)', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342411/480_1000342411_ITEM2025071563252.png', price: 64500 },
        { nutrioneId: '1000342415', productName: '뉴트리원 비오틴 콜라겐 V (에코패키지)', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342415/480_1000342415_ITEM2025071578689.png', price: 64500 },
      ],
    },

    { type: 'h2', id: 'elastin', text: '엘라스틴이란 — 콜라겐과의 차이' },
    {
      type: 'body',
      html: '<p>엘라스틴은 피부·혈관의 <strong>탄력</strong>을 담당하는 단백질로, 콜라겐이 구조를 잡는다면 엘라스틴은 늘어났다 돌아오는 성질을 제공합니다. 20대 이후 분해 속도가 합성을 앞지릅니다. 엘라스틴 영양제도 저분자 가수분해 형태가 흡수에 유리하며, 콜라겐과 병용하면 시너지 효과를 기대할 수 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000001081', productName: '뉴트리원 더 엘라스틴', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001081/480_1000001081_ITEM2024040230132.png', price: 57000 },
      ],
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>어류·갑각류 알레르기: 해양 콜라겐은 주로 생선 유래이므로 해산물 알레르기가 있는 경우 주의.</li><li>소 유래 콜라겐은 BSE(광우병) 관련 인증 여부 확인 권장.</li><li>임산부·수유부: 건강기능식품 여부, 성분 확인 후 복용.</li><li>고용량에서 고칼슘혈증(어골 콜라겐 복합제 포함 시) 가능성 → 칼슘제와 중복 섭취 주의.</li></ul>',
    },

    { type: 'h2', id: 'faq-section', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        { q: '콜라겐 영양제를 먹으면 피부에 직접 가나요?', a: '직접 전달되지 않습니다. 저분자 펩타이드로 흡수된 뒤 혈행을 통해 피부 진피에 도달해 섬유아세포의 콜라겐 합성을 자극하는 방식으로 작용합니다.' },
        { q: '얼마나 복용해야 효과가 나타나나요?', a: '대부분의 임상 연구에서 8~12주 지속 복용 후 피부 탄력·보습 지표 개선이 관찰됩니다. 단기 복용으로 즉각적인 효과를 기대하기 어렵습니다.' },
        { q: '공복 vs 식후 어느 쪽이 더 좋나요?', a: '콜라겐 흡수에 결정적인 차이는 없지만, 공복에 섭취하면 단백질 경쟁이 줄어 흡수가 다소 유리하다는 의견이 있습니다. 위장 자극 시 식후 복용으로 변경하세요.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 건강기능식품 기능성 원료 목록', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Proksch E, et al. Oral supplementation of specific collagen peptides. Skin Pharmacol Physiol. 2014', url: '#', org: 'Karger' },
        { label: 'Shaw G, et al. Vitamin C–enriched gelatin supplementation before exercise. Am J Clin Nutr. 2017', url: '#', org: 'AJCN' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
