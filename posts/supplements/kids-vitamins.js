// posts/supplements/kids-vitamins.js
const post = {
  id: 'U0030',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 성장기 아이들은 뼈·근육·면역·두뇌 발달에 필요한 영양소 요구량이 높습니다. 편식·소식이 잦은 경우 비타민D·칼슘·아연·오메가3 등이 부족해질 수 있습니다. 어린이용 종합 영양제는 과잉 섭취를 방지하기 위해 소아 용량 기준으로 설계됩니다.</p><div class="meta-row"><span class="tag">대상: 소아·어린이</span> <span class="tag tag-approved">식약처 기능성 고시</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>아이가 편식이 심해서 영양소 걱정이 됐다. 시중에 어린이 종합비타민이 너무 많아서 어떤 기준으로 골라야 할지 몰랐다. 달달한 맛으로 유인하는 제품보다 성분 함량이 제대로 된 제품을 찾는 게 먼저라는 걸 알게 됐다.</p>" },


    { type: 'h2', id: 'key-nutrients', text: '어린이에게 특히 중요한 영양소' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">영양소</th><th style="padding:8px;border:1px solid #ddd">역할</th><th style="padding:8px;border:1px solid #ddd">결핍 시 증상</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">비타민D</td><td style="padding:8px;border:1px solid #ddd">칼슘 흡수, 뼈 성장, 면역</td><td style="padding:8px;border:1px solid #ddd">구루병, 성장 지연, 면역력 저하</td></tr><tr><td style="padding:8px;border:1px solid #ddd">칼슘</td><td style="padding:8px;border:1px solid #ddd">뼈·치아 형성</td><td style="padding:8px;border:1px solid #ddd">골밀도 저하, 성장 저해</td></tr><tr><td style="padding:8px;border:1px solid #ddd">아연</td><td style="padding:8px;border:1px solid #ddd">면역·세포 분열·미각</td><td style="padding:8px;border:1px solid #ddd">편식 악화, 성장 지연, 면역 저하</td></tr><tr><td style="padding:8px;border:1px solid #ddd">오메가3(DHA)</td><td style="padding:8px;border:1px solid #ddd">뇌 발달·시각 기능</td><td style="padding:8px;border:1px solid #ddd">집중력 저하 가능성</td></tr><tr><td style="padding:8px;border:1px solid #ddd">비타민A</td><td style="padding:8px;border:1px solid #ddd">시각·피부·면역</td><td style="padding:8px;border:1px solid #ddd">야맹증, 성장 지연</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'who-needs', text: '어린이 영양제가 필요한 경우' },
    {
      type: 'body',
      html: '<ul><li><strong>심한 편식아</strong>: 채소·생선·유제품을 거부해 영양 불균형이 우려될 때.</li><li><strong>성장이 또래보다 느린 경우</strong>: 영양 결핍과 성장 지연의 연관성 확인 필요.</li><li><strong>채식 아동</strong>: 비타민B12·철분·아연·오메가3 결핍 위험이 높습니다.</li><li><strong>만성 질환 또는 약물 복용 중</strong>: 일부 약물이 영양 흡수를 방해합니다. 소아과 상담 필수.</li></ul><p>건강하게 다양한 식사를 하는 아이에게는 추가 영양제가 필요하지 않을 수 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000516735', productName: '뉴트리원 골든타임 웰키즈', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000516735/480_1000516735_ITEM2025051430671.png', price: 19900 },
      ],
    },

    { type: 'h2', id: 'safety', text: '어린이 영양제 안전 기준' },
    {
      type: 'info',
      html: '<p>어린이 영양제는 성인용보다 엄격한 상한 섭취량 기준이 적용됩니다. 제품 라벨의 <strong>연령별 복용량</strong>을 반드시 지키세요. 비타민A·D·E처럼 지용성 비타민은 과잉 섭취 시 독성이 나타날 수 있습니다.</p><p>복용 중인 약이 있거나 특정 질환(신장·간 질환 등)이 있는 아이는 소아과 의사와 상담 후 복용을 시작하세요.</p>',
    },

    { type: 'h2', id: 'form', text: '제형 선택 — 젤리·분말·씹어먹는 정' },
    {
      type: 'body',
      html: '<ul><li><strong>젤리(구미) 형태</strong>: 아이들이 거부감 없이 먹어 순응도 최고. 단, 당 함량 확인 필요.</li><li><strong>씹어먹는 정(chewable)</strong>: 맛이 있어 순응도 높고 과잉 섭취 위험이 젤리보다 낮습니다.</li><li><strong>분말</strong>: 유아·영아에 적합. 음식·음료에 섞어 제공.</li><li><strong>캡슐·정제</strong>: 초등 고학년 이상에 적합.</li></ul>',
    },

    { type: 'productSlot', productKey: 'kids-vitamins' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '몇 살부터 어린이 영양제를 먹일 수 있나요?',
          a: '제품마다 연령 기준이 다릅니다. 일반적으로 4세 이상 어린이용 제품이 많으며, 2~3세는 별도 영·유아 전용 제품을 선택해야 합니다. 2세 미만 영아는 소아과 의사와 상담 후 결정하세요.',
        },
        {
          q: '젤리 영양제는 사탕과 다른가요?',
          a: '젤리 영양제는 기능성 성분을 담고 있지만 맛을 위해 설탕·당분을 상당량 사용합니다. 맛있다는 이유로 과잉 섭취하면 충치·비만 위험이 있습니다. 권장량 이상 섭취하지 않도록 아이들이 손에 닿지 않는 곳에 보관하세요.',
        },
        {
          q: '어린이용 오메가3를 별도로 먹여야 하나요?',
          a: '일주일에 생선을 2회 이상 먹는 아이는 추가 DHA가 필요 없습니다. 생선을 거의 먹지 않는 경우 어린이용 DHA 영양제를 검토해 볼 수 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 어린이 건강기능식품 가이드', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: '대한소아과학회 — 소아 영양 권고안', url: 'https://www.pediatrics.or.kr/', org: '대한소아과학회', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
