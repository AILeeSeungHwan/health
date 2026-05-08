const post = {
  id: 'U0010',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 리포좀 비타민C는 인지질 이중막으로 비타민C를 감싸 소화관 손실 없이 세포까지 전달하는 제형입니다. 일반 비타민C보다 흡수율이 높아 고용량 섭취 시 위장 부담이 적고 혈중 농도가 더 오래 유지됩니다.</p><p style="font-size:13px;color:#888">※ 건강기능식품 섭취량 범위 내에서 복용하세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>일반 비타민C를 고용량으로 먹으면 속이 쓰렸다. 리포좀 형태로 바꾸고 나서는 속쓰림 없이 먹을 수 있게 됐다. 흡수율 차이도 있다는 걸 알게 되면서 리포좀 제형에 대해 제대로 찾아보게 됐다.</p>" },

{ type: 'callout', html: "<p>일반 비타민C를 고용량으로 먹으면 속이 쓰렸다. 리포좀 형태로 바꾸고 나서는 속쓰림 없이 먹을 수 있게 됐다. 흡수율 차이도 있다는 걸 알게 되면서 리포좀 제형에 대해 제대로 찾아보게 됐다.</p>" },,

    { type: 'h2', id: 'what-liposome', text: '리포좀(Liposome) 기술이란' },
    {
      type: 'body',
      html: '<p>리포좀은 인지질(레시틴) 이중막으로 구성된 나노 입자입니다. 수용성 비타민C를 내부에 넣어 위산에 의한 분해와 장 흡수 한계를 극복합니다.</p><ul><li>일반 비타민C(아스코르브산): 위·소장에서 빠르게 흡수되지만, 5g 이상 고용량 섭취 시 소화 장애 및 설사 유발.</li><li>리포좀 비타민C: 세포막과 유사한 구조로 세포 내 흡수(엔도사이토시스)가 가능해 혈중 농도 및 세포 내 농도가 더 높게 유지.</li></ul><p>Hickey et al.(2008) 파일럿 연구에서 리포좀 비타민C 5g 섭취 후 혈중 농도가 일반 경구·정맥 주사와 비교해 높은 수준을 보였습니다(소규모 연구, 추가 검증 필요).</p>',
    },

    { type: 'h2', id: 'functions', text: '비타민C의 식약처 인정 기능성' },
    {
      type: 'info',
      html: '<ul><li>항산화 작용 (자유 라디칼 제거)</li><li>결합조직 형성 및 기능 유지 (콜라겐 합성)</li><li>면역 기능 유지</li><li>철 흡수 촉진 (비헴철과 병용 시)</li><li>피로 개선 보조</li></ul>',
    },

    { type: 'h2', id: 'vs-regular', text: '리포좀 vs 일반 비타민C — 어떤 걸 선택해야 하나' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">일반 비타민C</th><th style="padding:8px;border:1px solid #ddd">리포좀 비타민C</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">흡수율</td><td style="padding:8px;border:1px solid #ddd">200mg까지 90%↑, 고용량 급격히 저하</td><td style="padding:8px;border:1px solid #ddd">고용량에서도 비교적 높은 흡수율 유지</td></tr><tr><td style="padding:8px;border:1px solid #ddd">위장 부담</td><td style="padding:8px;border:1px solid #ddd">1g↑ 설사·위산 자극 가능</td><td style="padding:8px;border:1px solid #ddd">상대적으로 적음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">가격</td><td style="padding:8px;border:1px solid #ddd">저렴</td><td style="padding:8px;border:1px solid #ddd">3~10배 비쌈</td></tr><tr><td style="padding:8px;border:1px solid #ddd">추천 대상</td><td style="padding:8px;border:1px solid #ddd">예방적 섭취, 비용 효율 중시</td><td style="padding:8px;border:1px solid #ddd">고용량 필요·위장 민감자</td></tr></tbody></table>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000225109', productName: '뉴트리원 리포좀 비타민C 골드', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000225109/480_1000225109_ITEM2023122191606.png', price: 67500 },
      ],
    },

    { type: 'h2', id: 'dosage', text: '적정 용량과 상한 섭취량' },
    {
      type: 'body',
      html: '<p>식약처 비타민C 상한 섭취량: <strong>성인 2,000mg/일</strong>. 일반적인 건강 목적: 200~500mg/일. 항산화·면역 보조: 500~1,000mg/일. 2,000mg 초과 시 신장 결석 위험 증가(특히 옥살산 결석 병력자).</p><p>리포좀 제품은 500mg~1,000mg 단위 제품이 많습니다. 제품 라벨의 1회 섭취량을 확인하세요.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>신장 결석(옥살산칼슘) 병력: 고용량 주의.</li><li>철분 과부하(혈색소증): 비타민C가 철 흡수를 높여 위험.</li><li>항응고제(와파린): 일부 상호작용 보고.</li><li>공복 복용 시 위 자극 가능 → 식후 복용 권장.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '리포좀 비타민C와 비타민C 주사의 효과가 같은가요?', a: '정맥 주사는 위장 흡수 없이 100% 혈중 농도를 올릴 수 있어 최대 혈중 농도는 다릅니다. 단, 고용량 리포좀 경구 섭취는 일반 경구보다 혈중 농도를 더 높게 유지하는 것으로 파일럿 연구에서 보고됩니다.' },
        { q: '콜라겐과 함께 먹으면 효과가 더 좋은가요?', a: '비타민C는 콜라겐 합성의 필수 보조인자이므로 콜라겐 영양제와 함께 섭취하면 시너지가 기대됩니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 비타민C 기능성 및 상한섭취량', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Hickey S, et al. Pharmacokinetics of oral ascorbate liposomes. J Nutr Environ Med. 2008', url: '#', org: 'Taylor & Francis' },
        { label: 'Carr AC, Maggini S. Vitamin C and immune function. Nutrients. 2017', url: '#', org: 'MDPI' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
