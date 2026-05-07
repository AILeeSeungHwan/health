const post = {
  id: 'U0019',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 철분은 헤모글로빈 구성 성분으로 산소 운반에 필수적인 미네랄입니다. 가임기 여성의 약 15~20%가 철분 결핍 상태이며, 피로·탈모·집중력 저하가 가장 흔한 증상입니다. 비타민C 병용이 흡수율을 높입니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'who-needs', text: '철분 결핍이 잦은 사람들' },
    {
      type: 'body',
      html: '<ul><li><strong>가임기 여성</strong>: 생리로 인한 월간 손실 (15~30mg/생리 주기)</li><li><strong>임산부</strong>: 태아 발달에 필요한 철 요구량 급증</li><li><strong>채식·비건</strong>: 비헴철만 섭취, 흡수율 낮음</li><li><strong>운동 선수</strong>: 발 충격성 용혈·땀으로 손실</li><li><strong>노인</strong>: 위산 감소로 철분 흡수 저하</li><li>위장 수술 후, IBD(염증성 장 질환) 환자</li></ul>',
    },

    { type: 'h2', id: 'heme-vs-nonheme', text: '헴철 vs 비헴철 — 흡수율의 차이' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">헴철(Heme Iron)</th><th style="padding:8px;border:1px solid #ddd">비헴철(Non-heme Iron)</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">공급원</td><td style="padding:8px;border:1px solid #ddd">고기·생선·가금류 (동물성)</td><td style="padding:8px;border:1px solid #ddd">채소·콩·영양제 (대부분)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">흡수율</td><td style="padding:8px;border:1px solid #ddd">15~35%</td><td style="padding:8px;border:1px solid #ddd">2~20% (상태에 따라 변동)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">흡수 방해</td><td style="padding:8px;border:1px solid #ddd">상대적으로 영향 적음</td><td style="padding:8px;border:1px solid #ddd">커피·탄닌·칼슘·피틴산에 의해 저하</td></tr><tr><td style="padding:8px;border:1px solid #ddd">흡수 촉진</td><td style="padding:8px;border:1px solid #ddd">—</td><td style="padding:8px;border:1px solid #ddd">비타민C 병용 시 흡수율 2~3배↑</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'vitamin-c', text: '비타민C와 함께 먹어야 하는 이유' },
    {
      type: 'callout',
      html: '<strong>비헴철(3가철, Fe³⁺) → 비타민C → 흡수형(2가철, Fe²⁺)으로 환원.</strong> 비타민C 100mg을 철분과 함께 복용하면 비헴철 흡수율이 2~3배 향상됩니다. 철분제를 오렌지 주스와 함께 복용하거나, 비타민C 포함 복합 철분제를 선택하세요.',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000512931', productName: '뉴트리원 데일리 철분 츄어블', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000512931/480_1000512931_ITEM2025053040890.png', price: 31000 },
      ],
    },

    { type: 'h2', id: 'dosage', text: '권장 섭취량' },
    {
      type: 'info',
      html: '<p>한국영양학회 기준:</p><ul><li>성인 남성: 10mg/일</li><li>성인 여성(가임기): 14mg/일</li><li>임산부: 24mg/일 (추가 10mg)</li><li>수유부: 추가 0mg (모유로 손실 적음)</li><li>상한 섭취량: 45mg/일 (소화기 부작용 기준)</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '부작용 · 주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>변비·위장 불편</strong>: 가장 흔한 부작용. 식후 복용 또는 저용량 분할 복용으로 완화. 검은 변은 철분 흡수의 정상 반응.</li><li><strong>남성·폐경 후 여성</strong>: 철분 과잉 시 산화 스트레스 증가. 철분이 없는 종합비타민 또는 비철분 보충제 선택.</li><li><strong>혈색소증(유전성 철 축적)</strong>: 철분 보충 금기.</li><li>칼슘제와 동시 복용 시 흡수 방해 → 2~3시간 간격 두기.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '철분 수치가 정상인데도 피로할 때 철분제를 먹어도 되나요?', a: '혈청 페리틴이 정상 범위(여성 12~150ng/mL)라면 철분 결핍에 의한 피로가 아닐 가능성이 높습니다. 불필요한 철분 보충은 산화 스트레스를 유발할 수 있으므로 혈액 검사 후 결정하세요.' },
        { q: '임산부 철분제는 언제부터 먹어야 하나요?', a: '임신 전 또는 임신 초기부터 복용을 시작하는 것이 권장됩니다. 임산부용 산전 비타민에 대부분 포함되어 있으며, 산부인과 의사와 용량을 결정하세요.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '한국영양학회 2020 한국인 영양소 섭취기준 — 철', url: '#', org: '한국영양학회' },
        { label: '질병관리청 — 철 결핍성 빈혈', url: 'https://health.kdca.go.kr', org: '질병관리청' },
        { label: 'Hallberg L, et al. The role of vitamin C in iron absorption. Int J Vitam Nutr Res. 1989', url: '#', org: 'Hogrefe' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
