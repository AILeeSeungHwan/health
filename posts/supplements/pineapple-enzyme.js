// posts/supplements/pineapple-enzyme.js
const post = {
  id: 'U0028',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 파인애플의 줄기·과육에 풍부한 <strong>브로멜라인(Bromelain)</strong>은 단백질 분해 효소(프로테아제)로, 소화 촉진·항염·부종 완화에 활용됩니다. 식후 더부룩함·소화 불편감이 잦은 분에게 효소 보충제가 도움될 수 있습니다.</p><div class="meta-row"><span class="tag">성분: 파인애플 브로멜라인</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품 여부는 제품별로 다릅니다. 라벨을 확인하세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>고기를 많이 먹고 나면 소화가 안 되는 날이 많았다. 파인애플에 단백질 분해 효소가 있다는 걸 알고 생 파인애플을 먹다가 브로멜라인 보충제를 찾게 됐다. 보충제 형태가 더 일정한 함량을 섭취할 수 있다는 장점이 있었다.</p>" },

{ type: 'callout', html: "<p>고기를 많이 먹고 나면 소화가 안 되는 날이 많았다. 파인애플에 단백질 분해 효소가 있다는 걸 알고 생 파인애플을 먹다가 브로멜라인 보충제를 찾게 됐다. 보충제 형태가 더 일정한 함량을 섭취할 수 있다는 장점이 있었다.</p>" },,

    { type: 'h2', id: 'bromelain', text: '브로멜라인이란' },
    {
      type: 'body',
      html: '<p>브로멜라인(Bromelain)은 파인애플에서 추출한 시스테인 프로테아제 복합체입니다. 단백질의 펩타이드 결합을 분해해 소화를 돕습니다.</p><p>활성도 단위로 <strong>GDU(Gelatin Dissolving Units)</strong> 또는 MCU(Milk Clotting Units)를 사용합니다. 영양제 라벨에서 mg 대신 GDU/MCU를 확인하세요.</p><p>파인애플 과일보다 <strong>줄기(stem)</strong>에 브로멜라인 함량이 2~3배 높아, 영양제 제조에는 주로 줄기 추출물을 사용합니다.</p>',
    },

    { type: 'h2', id: 'effects', text: '브로멜라인의 주요 효과' },
    {
      type: 'body',
      html: '<ul><li><strong>소화 촉진</strong>: 단백질 소화 효소를 보충해 더부룩함·식후 팽만감을 줄입니다. 고단백 식사(고기·해산물) 후 복용이 특히 효과적.</li><li><strong>항염 효과</strong>: 프로스타글란딘 합성을 억제해 부종·통증 완화. 유럽에서 수술 후 부종·운동 손상에 보조 치료로 사용.</li><li><strong>면역 조절</strong>: 면역 세포 사이토카인 조절, NK세포 활성 증가 연구 있음.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000364472', productName: '뉴트리원 파인애플 효소 아임파인', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000364472/480_1000364472_ITEM2026010646507.png', price: 21500 },
      ],
    },

    { type: 'h2', id: 'digestive-enzyme-combo', text: '복합 효소 제품의 장점' },
    {
      type: 'body',
      html: '<p>브로멜라인 단일 성분보다 <strong>복합 소화 효소 제품</strong>이 더 넓은 범위를 소화합니다.</p><ul><li><strong>프로테아제</strong>(브로멜라인·파파인): 단백질</li><li><strong>아밀라제</strong>: 탄수화물·전분</li><li><strong>리파아제</strong>: 지방</li><li><strong>락타아제</strong>: 유제품 유당</li><li><strong>셀룰라제</strong>: 식물성 섬유</li></ul><p>식이 불균형이 심하거나 외식·배달 음식이 많은 경우 복합 효소 제품이 단일 성분보다 유리합니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>파인애플·파파야 알레르기</strong>: 브로멜라인·파파인에 알레르기 반응 가능.</li><li><strong>항응고제 복용자</strong>: 브로멜라인의 혈소판 응집 억제 효과로 출혈 경향 증가 가능.</li><li><strong>임산부</strong>: 고용량 브로멜라인이 자궁 수축 유도 보고 있음 — 복용 자제.</li><li>위장 궤양 환자: 단백질 분해 효소가 위벽을 자극할 수 있습니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'pineapple-enzyme' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '파인애플을 직접 먹는 것과 효소 영양제는 다른가요?',
          a: '파인애플 과육보다 영양제(주로 줄기 추출물)의 브로멜라인 농도가 훨씬 높습니다. 파인애플 1조각(약 80g)에 브로멜라인이 소량 포함되어 있으나 치료적 수준에는 미치지 못합니다. 소화 촉진을 목적으로 하면 영양제가 효율적입니다.',
        },
        {
          q: '식전에 먹어야 하나요, 식후에 먹어야 하나요?',
          a: '소화 효소로 사용할 때는 <strong>식사 직전 또는 식사 중</strong>에 복용하는 것이 효과적입니다. 항염 목적으로 사용할 때는 공복(식사 30분 전 또는 2시간 후)에 복용해야 효소가 소화 작용 없이 혈중으로 흡수됩니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Bromelain — Memorial Sloan Kettering Cancer Center', url: 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/bromelain', org: 'MSKCC', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Digestive Enzymes', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
