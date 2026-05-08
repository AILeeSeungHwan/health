// posts/supplements/digestive-enzyme.js
const post = {
  id: 'U0031',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 소화 효소(Digestive Enzyme) 보충제는 음식물 소화를 돕는 아밀라제·프로테아제·리파아제·락타아제 등을 포함합니다. 나이가 들수록 자체 효소 분비가 줄고, 과식·자극적인 식사 후 소화 불편이 잦아질 때 효소 보충이 도움될 수 있습니다.</p><div class="meta-row"><span class="tag">성분: 복합 소화효소</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>나이가 드니까 기름진 음식을 먹으면 소화가 확실히 느려졌다. 예전에는 삼겹살 먹고도 거뜬했는데 이제는 저녁 늦게 먹으면 다음 날 아침까지 속이 무거웠다. 소화 효소를 챙기기 시작한 건 그 때부터다.</p>" },

{ type: 'callout', html: "<p>나이가 드니까 기름진 음식을 먹으면 소화가 확실히 느려졌다. 예전에는 삼겹살 먹고도 거뜬했는데 이제는 저녁 늦게 먹으면 다음 날 아침까지 속이 무거웠다. 소화 효소를 챙기기 시작한 건 그 때부터다.</p>" },,

    { type: 'h2', id: 'types', text: '소화 효소 종류와 기능' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">효소</th><th style="padding:8px;border:1px solid #ddd">분해 기질</th><th style="padding:8px;border:1px solid #ddd">분비 장소</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">아밀라제(Amylase)</td><td style="padding:8px;border:1px solid #ddd">전분·탄수화물</td><td style="padding:8px;border:1px solid #ddd">타액·췌장</td></tr><tr><td style="padding:8px;border:1px solid #ddd">프로테아제(Protease)</td><td style="padding:8px;border:1px solid #ddd">단백질</td><td style="padding:8px;border:1px solid #ddd">위·췌장</td></tr><tr><td style="padding:8px;border:1px solid #ddd">리파아제(Lipase)</td><td style="padding:8px;border:1px solid #ddd">지방</td><td style="padding:8px;border:1px solid #ddd">췌장</td></tr><tr><td style="padding:8px;border:1px solid #ddd">락타아제(Lactase)</td><td style="padding:8px;border:1px solid #ddd">유제품 유당</td><td style="padding:8px;border:1px solid #ddd">소장 점막</td></tr><tr><td style="padding:8px;border:1px solid #ddd">셀룰라제(Cellulase)</td><td style="padding:8px;border:1px solid #ddd">식물성 섬유</td><td style="padding:8px;border:1px solid #ddd">체내 합성 불가 — 보충 필요</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'when-needed', text: '효소 보충제가 도움되는 경우' },
    {
      type: 'body',
      html: '<ul><li><strong>50대 이상</strong>: 위산·췌장 효소 분비가 나이와 함께 감소해 소화력이 약해집니다.</li><li><strong>유당 불내증</strong>: 락타아제 부족으로 유제품 섭취 후 복통·설사. 락타아제 보충제 또는 복합 효소가 도움.</li><li><strong>췌장 외분비 기능 저하</strong>: 췌장 질환 후 효소 분비 감소. 이 경우 의사 처방 팬크레아틴이 필요할 수 있습니다.</li><li><strong>과식·고지방 식사 후 더부룩함</strong>: 식이 효소 보충으로 증상 완화.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000612898', productName: '뉴트리원 효소 밀크티맛', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000612898/480_1000612898_ITEM2025121017014.png', price: 14400 },
      ],
    },

    { type: 'h2', id: 'plant-vs-animal', text: '식물성 효소 vs 동물성(팬크레아틴) 비교' },
    {
      type: 'body',
      html: '<ul><li><strong>식물성 효소</strong>: 파파인(파파야)·브로멜라인(파인애플)·아스퍼질러스 효소. 넓은 pH 범위에서 활성 — 위산 환경에서도 일부 작용. 채식자에게 적합.</li><li><strong>동물성(팬크레아틴)</strong>: 돼지·소 췌장 추출. 장내 알칼리 환경에서 주로 활성. 췌장 질환자에게 의료적으로 처방.</li></ul><p>일반적인 소화 불편 목적이면 식물성 복합 효소로도 충분합니다. 췌장 외분비 부전 환자는 처방 의약품(팬크레아틴)이 필요합니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li>효소 알레르기: 파파인·브로멜라인 알레르기가 있는 경우 확인.</li><li>위궤양·식도 역류: 단백질 분해 효소가 자극할 수 있습니다.</li><li>혈우병·항응고제 복용자: 브로멜라인 포함 제품 주의.</li><li>소아·임산부: 소아과·산부인과 상담 후 사용.</li></ul>',
    },

    { type: 'productSlot', productKey: 'digestive-enzyme' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '소화 효소를 오래 먹으면 자체 효소 분비가 줄어드나요?',
          a: '현재까지 건강한 사람에서 외부 효소 보충이 자체 효소 분비를 억제한다는 근거는 확립되지 않았습니다. 다만, 장기 복용보다 일시적(증상이 있을 때) 사용이 일반적으로 권장됩니다.',
        },
        {
          q: '프로바이오틱스와 같이 먹어도 되나요?',
          a: '소화 효소와 프로바이오틱스는 서로 다른 기전으로 작용해 병용에 문제가 없습니다. 소화 효소는 식사 중, 프로바이오틱스는 식사 직전 복용하는 것이 일반적입니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'National Pancreas Foundation — Digestive Enzymes', url: 'https://www.pancreasfoundation.org/', org: 'NPF', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Malabsorption Syndromes', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
