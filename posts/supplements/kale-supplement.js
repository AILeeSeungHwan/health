// posts/supplements/kale-supplement.js
const post = {
  id: 'U0024',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 케일(Kale)은 비타민K·C·A, 루테인, 설포라판 등 영양 밀도가 극히 높은 슈퍼푸드입니다. 동결건조(Freeze-dry) 기술은 신선 케일의 영양소를 90% 이상 보존하면서 편리하게 섭취할 수 있게 합니다. 컬리케일(Curly Kale)은 일반 케일보다 항산화 성분이 풍부한 품종입니다.</p><div class="meta-row"><span class="tag">식품 유형: 동결건조 채소</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'nutrition', text: '케일의 주요 영양성분' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">케일 100g 기준</th><th style="padding:8px;border:1px solid #ddd">주요 역할</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">비타민K</td><td style="padding:8px;border:1px solid #ddd">약 817μg (DRI 1,000%+)</td><td style="padding:8px;border:1px solid #ddd">혈액 응고, 뼈 칼슘 결합</td></tr><tr><td style="padding:8px;border:1px solid #ddd">비타민C</td><td style="padding:8px;border:1px solid #ddd">약 120mg</td><td style="padding:8px;border:1px solid #ddd">항산화, 콜라겐 합성, 면역</td></tr><tr><td style="padding:8px;border:1px solid #ddd">루테인+지아잔틴</td><td style="padding:8px;border:1px solid #ddd">약 40mg</td><td style="padding:8px;border:1px solid #ddd">황반 보호, 눈 건강</td></tr><tr><td style="padding:8px;border:1px solid #ddd">설포라판(글루코시놀레이트)</td><td style="padding:8px;border:1px solid #ddd">변동 큼</td><td style="padding:8px;border:1px solid #ddd">해독 효소 유도, 항산화</td></tr><tr><td style="padding:8px;border:1px solid #ddd">칼슘</td><td style="padding:8px;border:1px solid #ddd">약 135mg</td><td style="padding:8px;border:1px solid #ddd">뼈 건강 (단, 옥살산에 의해 흡수율 감소)</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'freeze-dry', text: '동결건조 vs 생케일 vs 착즙액' },
    {
      type: 'body',
      html: '<ul><li><strong>생케일</strong>: 비타민C·효소 등이 가장 풍부하지만 보관이 어렵고 쓴맛이 강합니다.</li><li><strong>동결건조 분말</strong>: -50°C 이하에서 수분만 제거해 영양 손실이 10% 미만. 열 건조(-40%)보다 월등히 보존율이 높습니다.</li><li><strong>착즙액</strong>: 섬유질이 제거되어 흡수가 빠르나, 비타민K·루테인 같은 지용성 성분은 지방 없이는 흡수가 어렵습니다.</li></ul><p><strong>컬리케일(Curly Kale)</strong>은 일반 라시나토 케일보다 비타민C·항산화 성분 함량이 약 30% 높다는 연구가 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000580390', productName: '뉴트리원 유기농 동결건조 컬리케일 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000580390/480_1000580390_ITEM2025091931784.png', price: 170000 },
      ],
    },

    { type: 'h2', id: 'how-to-eat', text: '케일 분말 활용법' },
    {
      type: 'body',
      html: '<p>동결건조 케일 분말은 쓴맛이 강해 그냥 먹기 어려울 수 있습니다. 흡수율을 높이고 맛을 개선하는 방법:</p><ul><li><strong>스무디</strong>: 바나나·사과·그릭요거트와 블렌딩하면 쓴맛이 중화됩니다.</li><li><strong>올리브오일과 함께</strong>: 루테인·비타민K 등 지용성 성분은 지방과 함께 섭취할 때 흡수율이 높아집니다.</li><li><strong>아침 공복 음용</strong>: 위장이 강한 분은 물 150ml에 1스푼 섞어 공복 섭취 가능.</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>항응고제(와파린) 복용자</strong>: 케일의 고용량 비타민K가 와파린 효과를 길항합니다. 복용량을 일정하게 유지하거나 주치의 상담 필수.</li><li><strong>갑상선 기능 저하증</strong>: 케일의 글루코시놀레이트가 갑상선 호르몬 합성을 방해할 수 있어 조리(가열) 권장. 동결건조 생분말 대량 섭취는 주의.</li><li><strong>신장 결석 환자</strong>: 케일의 옥살산이 칼슘과 결합해 결석을 악화시킬 수 있습니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'kale-supplement' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '케일 분말 하루 권장 섭취량은 얼마인가요?',
          a: '제품마다 다르지만 동결건조 케일 분말 5~10g(생케일 50~100g에 해당) 정도가 일반적입니다. 비타민K가 풍부하므로 항응고제 복용자는 섭취량을 일정하게 유지해야 합니다.',
        },
        {
          q: '유기농 인증 제품이 왜 중요한가요?',
          a: '케일은 농약 잔류가 많은 채소 중 하나입니다. 동결건조 과정에서 농약이 농축될 수 있으므로, 유기농 인증 원료를 사용한 제품을 선택하는 것이 안전합니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'USDA FoodData Central — Kale', url: 'https://fdc.nal.usda.gov/', org: 'USDA', accessedAt: '2026-05-08' },
        { label: '국가건강정보포털 — 비타민K', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
