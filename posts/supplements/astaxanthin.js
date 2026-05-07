const post = {
  id: 'U0017',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 아스타잔틴은 헤마토코커스 조류에서 추출한 해양 카로티노이드로, 비타민C의 6,000배·비타민E의 550배 항산화력을 보유합니다(싱글렛 산소 소거 기준). 식약처는 "눈의 피로도 개선"과 "조절력 개선"을 개별인정형 기능성으로 인정합니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what', text: '아스타잔틴이란 — 새우가 빨간 이유' },
    {
      type: 'body',
      html: '<p>아스타잔틴(Astaxanthin)은 연어·새우·크릴·홍조류 등에 붉은색을 부여하는 카로티노이드 색소입니다. 미세조류 <em>Haematococcus pluvialis</em>가 자외선·영양 스트레스 환경에서 자기 보호를 위해 대량 합성합니다.</p><p>구조적 특징: 분자 양 끝에 케토기·하이드록시기가 모두 있어 세포막 내외를 동시에 보호하고, 뇌·눈·근육 등 혈액-뇌장벽을 통과합니다(루테인·베타카로틴은 통과 어려움).</p>',
    },

    { type: 'h2', id: 'antioxidant', text: '아스타잔틴의 항산화력 — 숫자의 진실' },
    {
      type: 'callout',
      html: '"비타민C의 6,000배"는 <strong>싱글렛 산소 소거 능력(ORAC 방식 아님)</strong> 기준입니다. 실제 생체 내 항산화 작용은 다른 기전이 복합적으로 작용하므로 단순 수치 비교는 과장일 수 있습니다. 다만, 카로티노이드 계열 중에서도 아스타잔틴의 항산화력이 현저히 높다는 점은 학계에서 인정됩니다.',
    },

    { type: 'h2', id: 'eye', text: '눈 건강 — 식약처 개별인정형 기능성' },
    {
      type: 'body',
      html: '<p>식약처 개별인정형 기능성 (원료명: 헤마토코커스 추출물):</p><ul><li><strong>눈의 피로도 개선</strong>: 장시간 모니터·스마트폰 사용 후 눈 피로 완화.</li><li><strong>조절력 개선</strong>: 수정체 두께를 조절하는 섬모체근 기능 보조.</li></ul><p>루테인은 황반색소 밀도 유지(고시형), 아스타잔틴은 눈 피로·조절력(개별인정형). 작용 기전이 달라 병용이 가능합니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000462809', productName: '뉴트리원 아스타잔틴7 루테인지아잔틴', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000462809/480_1000462809_ITEM2024112193167.png', price: 99000 },
      ],
    },

    { type: 'h2', id: 'other-benefits', text: '기타 연구된 효과' },
    {
      type: 'body',
      html: '<ul><li><strong>피부</strong>: 자외선으로 인한 산화 손상 억제, 피부 탄력·보습 개선 연구(소규모).</li><li><strong>운동 후 회복</strong>: 근육 산화 스트레스 감소, DOMS(지연성 근육통) 완화 연구.</li><li><strong>심혈관</strong>: LDL 산화 억제·항혈소판 효과 연구 (근거 수준 낮음).</li><li><strong>뇌 건강</strong>: 혈액-뇌장벽 통과 → 신경 보호 가능성 연구 중.</li></ul>',
    },

    { type: 'h2', id: 'dosage', text: '적정 용량과 복용법' },
    {
      type: 'info',
      html: '<p>식약처 기능성 인정 용량: 헤마토코커스 추출물 기준 아스타잔틴으로서 <strong>4~12mg/일</strong>. 일반 항산화 목적: 4~8mg/일. 운동 회복 목적: 8~12mg/일. 지용성이므로 지방이 포함된 식사 후 복용하면 흡수 유리.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li>피부 색 변화: 고용량 지속 복용 시 손바닥·피부가 노르스름해지는 카로테노이드혈증 가능(건강에 무해).</li><li>면역억제제: 면역 조절 효과 가능성 있어 장기 복용 시 주의.</li><li>임산부·수유부: 안전성 데이터 부족. 섭취 자제.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '루테인과 아스타잔틴을 함께 먹어도 되나요?', a: '네. 루테인은 황반 보호, 아스타잔틴은 눈 피로·조절력으로 작용 기전이 달라 병용이 권장됩니다. 뉴트리원 아스타잔틴7 제품은 두 성분을 모두 포함합니다.' },
        { q: '연어를 많이 먹으면 아스타잔틴을 충분히 섭취할 수 있나요?', a: '양식 연어는 아스타잔틴 인공 색소를 먹여 색을 내는 경우가 많습니다. 천연 아스타잔틴을 식품으로 충분히 섭취하려면 상당한 양의 자연산 연어가 필요해 영양제 보충이 실용적입니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식약처 개별인정형 건강기능식품 원료 — 헤마토코커스 추출물', url: 'https://www.mfds.go.kr', org: '식약처' },
        { label: 'Nishida Y, et al. Quenching activities of common hydrophilic and lipophilic antioxidants. Carotenoid Sci. 2007', url: '#', org: 'JSS' },
        { label: 'Iwabayashi M, et al. Astaxanthin on skin oxidative stress. J Clin Biochem Nutr. 2009', url: '#', org: 'JSN' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
