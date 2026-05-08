// posts/supplements/nutrione-probiotics-max.js
const post = {
  id: 'U0035',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 프로바이오틱스 100억 맥스는 1포당 100억 CFU의 유산균을 함유한 고함량 프로바이오틱스입니다. 락토바실러스·비피도박테리움 등 다균주 복합 구성으로 소장·대장 전체를 커버합니다. 뉴트리원 프로&프리 바이오틱스 라인과 비교해 CFU 농도가 가장 높습니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag tag-approved">식약처 기능성 고시</span></div>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>프로바이오틱스 제품을 여러 개 써봤는데 100억 CFU 이상 제품을 찾게 됐다. 과민성 대장이 있어서 균 수가 많을수록 체감이 더 있다는 얘기를 들었다. 장용 코팅 여부가 생존 CFU에 영향을 준다는 것도 제품 고를 때 중요하게 봤다.</p>" },


    { type: 'h2', id: 'product-overview', text: '제품 특징' },
    {
      type: 'body',
      html: '<ul><li><strong>CFU</strong>: 1포당 100억(10<sup>10</sup>) — 식약처 기준(1억) 100배</li><li><strong>균주 구성</strong>: 락토바실러스·비피도박테리움·스트렙토코커스 복합 (다균주)</li><li><strong>장용 코팅</strong>: 위산·담즙 통과 후 장 도달 생존율 강화</li><li><strong>보관</strong>: 냉장 보관 권장 (동결건조 처리로 안정성 확보)</li></ul>',
    },

    { type: 'h2', id: 'why-high-cfu', text: '왜 100억 CFU인가' },
    {
      type: 'body',
      html: '<p>일반적인 건강 목적에는 10억 CFU면 충분하지만, 다음 상황에서 고함량이 유리합니다.</p><ul><li><strong>항생제 복용 중·후</strong>: 항생제가 장내 유익균을 대량 제거 — 고CFU 보충으로 회복 가속</li><li><strong>과민성 대장 증후군(IBS)</strong>: 임상 연구에서 10억~100억 CFU 사용</li><li><strong>고령자</strong>: 나이와 함께 비피도박테리움이 감소 → 고농도 보충 유리</li><li><strong>여행자 설사 예방</strong>: 여행 전 1~2주 전부터 고CFU 복용</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000945', productName: '뉴트리원 프로바이오틱스 100억 맥스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000945/480_1000000945_ITEM2024110868186.png', price: 186100 },
        { nutrioneId: '1000000818', productName: '뉴트리원 프로&프리 바이오틱스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000818/480_1000000818_ITEM2024121091360.png', price: 89900 },
        { nutrioneId: '1000296320', productName: '뉴트리원 지노프리 질유산균', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000296320/480_1000296320_ITEM2024042618420.png', price: 49800 },
      ],
    },

    { type: 'h2', id: 'vs-lineup', text: '뉴트리원 유산균 라인업 비교' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">제품</th><th style="padding:8px;border:1px solid #ddd">CFU</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">추천 대상</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">100억 맥스</td><td style="padding:8px;border:1px solid #ddd">100억</td><td style="padding:8px;border:1px solid #ddd">고함량, 단독</td><td style="padding:8px;border:1px solid #ddd">항생제 후, IBS, 고령자</td></tr><tr><td style="padding:8px;border:1px solid #ddd">프로&프리 바이오틱스</td><td style="padding:8px;border:1px solid #ddd">중간</td><td style="padding:8px;border:1px solid #ddd">프리바이오틱스 포함</td><td style="padding:8px;border:1px solid #ddd">일상적 장 건강 유지</td></tr><tr><td style="padding:8px;border:1px solid #ddd">지노프리 질유산균</td><td style="padding:8px;border:1px solid #ddd">중간</td><td style="padding:8px;border:1px solid #ddd">질 유래 균주 특화</td><td style="padding:8px;border:1px solid #ddd">여성 질 건강</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>면역억제제 복용자·면역 저하자</strong>: 감염 위험 있음 — 의사 상담 필수.</li><li><strong>항생제와 동시 복용</strong>: 최소 2시간 간격. 항생제 종료 후 1~2주 추가 복용 권장.</li><li>초기 1~2주에 복통·가스·팽만감이 생길 수 있으나 대부분 자연 소실됩니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'probiotics' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '유통기한 말에도 100억 CFU가 유지되나요?',
          a: '식약처 규정상 유통기한 내에는 표기 CFU 이상이 생존해야 합니다. 보관 방법(냉장, 개봉 후 밀봉)을 준수하면 이 기준을 충족할 수 있습니다. 개봉 후 고온·다습 환경 노출 시 균이 빠르게 사멸할 수 있으니 주의하세요.',
        },
        {
          q: '식이섬유(프리바이오틱스)와 함께 먹어야 하나요?',
          a: '프리바이오틱스(올리고당·이눌린 등)는 유산균의 먹이가 되어 장 정착률을 높입니다. 같이 먹으면 효과적이나, 별도로 공급하지 않아도 식사에서 섬유질을 충분히 섭취한다면 문제없습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 프로바이오틱스 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: '대한소화기학회 — 장내 미생물 가이드', url: 'https://www.gastrokorea.org/', org: '대한소화기학회', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
