// posts/supplements/black-goat.js
const post = {
  id: 'U0025',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 흑염소 진액은 한방에서 기력 회복·관절 보강·산후 조리에 전통적으로 사용해 온 보양 식품입니다. 풍부한 단백질·무기질·아미노산을 함유하며 특히 체력 저하·피로·관절 불편감이 있는 분들이 많이 찾습니다. 단, 건강기능식품이 아닌 식품으로 특정 질환 치료 효과는 과학적으로 입증되지 않았습니다.</p><div class="meta-row"><span class="tag">식품 유형: 흑염소 진액</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 이 제품은 식품이며 건강기능식품이 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>체력이 급격히 떨어지는 느낌이 들면서 흑염소 제품을 처음 찾아봤다. 주변에서 좋다는 얘기는 많이 들었는데 어떤 성분이 어떻게 작용하는지는 잘 몰랐다. 전통 한방 식재료라 연구가 적다는 것도 그때 알게 됐다.</p>" },


    { type: 'h2', id: 'nutrition', text: '흑염소 진액의 주요 성분' },
    {
      type: 'body',
      html: '<p>흑염소 고기를 장시간 달여 만든 진액에는 다음 성분이 풍부합니다.</p><ul><li><strong>단백질·아미노산</strong>: 필수 아미노산 8종을 포함. 근육 유지·회복에 기여.</li><li><strong>철분·아연</strong>: 염소고기는 소고기와 비슷한 수준의 헴철을 함유해 빈혈 예방에 도움될 수 있습니다.</li><li><strong>콜라겐 전구체</strong>: 관절 주변 조직 유지에 관여하는 글리신·프롤린 함량이 높습니다.</li><li><strong>무기질</strong>: 칼슘·마그네슘·인 등 뼈와 근육 기능에 필요한 미네랄.</li></ul>',
    },

    { type: 'h2', id: 'evidence', text: '전통 활용 vs 과학적 근거' },
    {
      type: 'body',
      html: '<p>한방에서 흑염소는 <strong>"익정보허(益精補虛)"</strong> — 정기를 보강하고 허약함을 채운다 — 는 개념으로 사용돼 왔습니다. 주로 다음에 활용됩니다.</p><ul><li>출산 후 산모의 기력 회복</li><li>만성 피로·체력 저하</li><li>관절 약화·허리·무릎 보강</li><li>노인 허약 체질</li></ul><p>현대 임상 연구 수는 적고, 현재까지 식약처 고시 기능성 원료로 인정받지 않아 과학적 효과 주장에는 한계가 있습니다. 그러나 단백질·철분·아연 등 실제 영양소가 풍부해 전반적인 영양 공급원으로는 의미가 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000492590', productName: '뉴트리원 자연방목 흑염소 진액', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000492590/480_1000492590_ITEM2025040117159.png', price: 29900 },
      ],
    },

    { type: 'h2', id: 'how-to', text: '복용법 및 선택 기준' },
    {
      type: 'body',
      html: '<p><strong>자연방목</strong> 사육 흑염소는 스트레스가 적어 고기 품질이 높고 항생제 사용이 적습니다. 제품 선택 시 확인 사항:</p><ul><li>원산지 표기 (국내산 vs 수입산)</li><li>방목·유기농 사육 여부</li><li>추가 첨가물(설탕·합성착색료 등) 최소화 여부</li><li>1포당 흑염소 원액 함량(농도)</li></ul><p>일반적으로 1포(80~100ml)를 하루 1~2회 식전·식후 구분 없이 복용합니다. 냄새가 강한 경우 냉장 보관 후 차갑게 마시면 부담이 줄어듭니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>통풍 환자</strong>: 고단백 식품은 요산 수치를 높일 수 있어 주의.</li><li><strong>신장 질환자</strong>: 단백질 과잉 섭취가 신장에 부담을 줄 수 있습니다.</li><li><strong>알레르기</strong>: 염소 단백질에 알레르기가 있는 경우 반응 가능.</li><li>한약재와 함께 복용 시 전문가(한의사) 상담 권장.</li></ul>',
    },

    { type: 'productSlot', productKey: 'black-goat' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '흑염소 진액을 언제부터 효과가 나타나나요?',
          a: '개인 차이가 크며, 기력 회복을 목적으로 한다면 보통 2~4주 이상 꾸준히 섭취했을 때 체감하는 경우가 많습니다. 빠른 효과를 기대하기보다 전반적인 영양 보충 관점에서 접근하는 것이 적절합니다.',
        },
        {
          q: '흑염소와 흑염소 진액의 차이는 무엇인가요?',
          a: '흑염소 진액은 흑염소 고기·뼈를 장시간 가열·추출한 식품입니다. 단백질 등 수용성 성분이 물에 녹아 섭취하기 쉽지만, 고기를 직접 먹는 것보다 지용성 성분(지방산·지용성 비타민)은 적을 수 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '국민건강영양조사 — 한국인 영양소 섭취 현황', url: 'https://www.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-08' },
        { label: '한국한의학연구원 — 한방 식품 연구', url: 'https://www.kiom.re.kr/', org: '한국한의학연구원', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
