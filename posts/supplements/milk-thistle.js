const post = {
  id: 'U0009',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 밀크씨슬(Milk Thistle)은 식약처가 "간 기능 개선에 도움"을 고시형 기능성으로 인정한 성분입니다. 유효 성분은 실리마린(Silymarin)이며, 표준화 추출물 기준 70~80% 이상 함유 제품이 권장됩니다.</p><p style="font-size:13px;color:#888">※ 간 질환 치료제가 아닙니다. 기저 간 질환이 있으면 의료진과 상담 후 복용하세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>야근에 술자리가 많던 시기에 간 걱정이 됐다. 밀크씨슬을 먹기 시작한 건 그 시기부터다. 직접적인 효과가 느껴지진 않지만 간 건강을 챙긴다는 심리적 안도감은 있었다. 실리마린 함량을 제대로 확인하고 사게 된 건 한참 나중이었다.</p>" },


    { type: 'h2', id: 'what', text: '밀크씨슬이란 — 실리마린의 정체' },
    {
      type: 'body',
      html: '<p>밀크씨슬(Silybum marianum)은 지중해 원산의 엉겅퀴과 식물입니다. 씨앗에서 추출한 플라보노이드 복합체를 <strong>실리마린</strong>이라 하며, 실리빈(Silibinin)·실리크리스틴·실리디아닌 등으로 구성됩니다.</p><p>실리마린은 ① 간 세포막 안정화 ② 항산화(자유 라디칼 차단) ③ 단백질 합성 촉진 ④ 독소 유입 차단의 네 가지 기전으로 간을 보호하는 것으로 연구됩니다.</p>',
    },

    { type: 'h2', id: 'evidence', text: '임상 근거와 식약처 기능성' },
    {
      type: 'body',
      html: '<p>식약처는 밀크씨슬 추출물(실리마린으로서 130mg/일)에 대해 <strong>"간 기능 개선에 도움"</strong>을 고시형 기능성으로 인정합니다.</p><p>주요 연구 요약:</p><ul><li>알코올성 간 손상, 비알코올성 지방간(NAFLD) 환자 대상 연구에서 ALT·AST 수치 개선 결과 보고.</li><li>항암 화학요법 중 간 보호 보조 효과 연구 진행 중 (확정 근거 아님).</li><li>건강한 성인의 예방적 간 보호 효과는 증거 수준 낮음.</li></ul>',
    },

    { type: 'h2', id: 'standard', text: '제품 선택 기준: 표준화 추출물 70~80%' },
    {
      type: 'info',
      html: '<p>밀크씨슬 제품 라벨에서 확인해야 할 핵심 표기:</p><ul><li><strong>실리마린 함량(%)</strong>: 70~80% 표준화 추출물 기준. 이보다 낮으면 유효 성분이 적을 수 있습니다.</li><li><strong>1일 실리마린 섭취량</strong>: 식약처 권장 130mg. 200~400mg까지 연구에서 사용됨.</li><li><strong>유기농 원료 여부</strong>: 농약 잔류 우려 시 유기농 인증 확인.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000001094', productName: '뉴트리원 유기농 밀크씨슬 퓨어', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001094/480_1000001094_ITEM2025032730433.png', price: 72700 },
      ],
    },

    { type: 'h2', id: 'dosage', text: '복용법 — 언제, 얼마나' },
    {
      type: 'body',
      html: '<p>일반적으로 <strong>식사와 함께</strong> 복용합니다. 실리마린은 지용성이어서 지방 섭취 시 흡수가 다소 유리합니다. 포스파티딜콜린으로 유화한 복합체(Siliphos®)는 흡수율이 더 높다는 연구도 있습니다.</p><p>일반 목적(간 기능 보조): 실리마린 130~200mg/일. 간 수치 개선 목적: 300~400mg/일(의료진 상담 권장).</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항 · 상호작용' },
    {
      type: 'warning',
      html: '<ul><li><strong>국화과 알레르기</strong>: 밀크씨슬은 국화과 식물. 국화·데이지 알레르기 있으면 주의.</li><li><strong>에스트로겐 유사 작용</strong>: 에스트로겐 의존성 암 병력이 있는 경우 의료진 상담 필수.</li><li><strong>약물 상호작용</strong>: CYP450 효소를 억제할 수 있어 항응고제·면역억제제 복용자는 주의.</li><li><strong>임산부·수유부</strong>: 데이터 부족으로 섭취 자제 권장.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '술 마신 날 밀크씨슬을 먹으면 숙취가 예방되나요?', a: '밀크씨슬이 알코올 분해를 직접 촉진하지는 않습니다. 알코올로 인한 산화 스트레스를 줄이는 데 보조적 역할을 할 수 있지만, 과음 예방이 우선입니다.' },
        { q: '간 수치가 높을 때 밀크씨슬만 먹어도 되나요?', a: 'AST·ALT 상승의 원인을 먼저 파악하는 것이 중요합니다. 밀크씨슬은 보조 수단이지 간 질환 치료제가 아닙니다. 수치가 정상 상한의 3배 이상이면 의사 진료를 받아야 합니다.' },
        { q: '언제쯤 효과가 나타나나요?', a: '임상 연구 기준으로 3~6개월 지속 복용 후 ALT·AST 수치 변화가 관찰됩니다. 단기간 복용으로 즉각적인 효과를 기대하기 어렵습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 건강기능식품 기능성 원료 — 밀크씨슬 추출물', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Abenavoli L, et al. Milk thistle in liver diseases. Phytother Res. 2010', url: '#', org: 'Wiley' },
        { label: 'Gillessen A, et al. Silymarin as supportive treatment in liver diseases. Drug Res. 2020', url: '#', org: 'Thieme' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
