// posts/supplements/nutrione-milk-thistle-pure.js
const post = {
  id: 'U0036',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 뉴트리원 유기농 밀크씨슬 퓨어는 유기농 인증 밀크씨슬 씨앗에서 추출한 고순도 실리마린을 담은 간 건강 영양제입니다. 식약처 고시형 기능성 원료인 실리마린을 기준 함량 이상 함유하며, 농약·중금속 위험이 낮은 유기농 원료를 사용합니다.</p><div class="meta-row"><span class="tag">뉴트리원 공식 제품</span> <span class="tag tag-approved">식약처 기능성 고시</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'product-overview', text: '제품 특징' },
    {
      type: 'body',
      html: '<ul><li><strong>원료</strong>: 유기농 인증 밀크씨슬 씨앗 추출물</li><li><strong>실리마린 기준 함량</strong>: 식약처 고시 기준 130mg/일 이상</li><li><strong>추출 방법</strong>: 비유기 용매 최소화, 고순도 추출</li><li><strong>제형</strong>: 식물성 캡슐 또는 정제 (라벨 확인)</li></ul><p>유기농 인증 원료는 합성 농약·비료를 사용하지 않은 환경에서 재배돼 중금속·농약 잔류 위험이 낮습니다.</p>',
    },

    { type: 'h2', id: 'silymarin', text: '실리마린이 간을 보호하는 방법' },
    {
      type: 'body',
      html: '<p>실리마린(Silymarin)은 실리빈(Silibinin)·실리디아닌·실리크리스틴 등 플라보노리그난 복합체입니다.</p><ul><li><strong>간세포막 보강</strong>: 세포막 투과성을 낮춰 독소(알코올·약물·독버섯 독소)의 침입 차단</li><li><strong>항산화</strong>: 자유라디칼 소거, 글루타치온 합성 촉진</li><li><strong>항염·항섬유화</strong>: 간 염증 사이토카인 억제, 간경변 진행 억제 보조</li><li><strong>단백질 합성 촉진</strong>: 손상된 간세포 재생 보조</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000001094', productName: '뉴트리원 유기농 밀크씨슬 퓨어', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001094/480_1000001094_ITEM2025032730433.png', price: 72700 },
      ],
    },

    { type: 'h2', id: 'who-needs', text: '이런 분에게 추천합니다' },
    {
      type: 'body',
      html: '<ul><li>음주가 잦은 직장인·사회인</li><li>장기 약물 복용(진통제·항생제 등)으로 간 부담이 우려되는 분</li><li>혈액검사에서 간 수치(AST·ALT)가 경미하게 높은 분</li><li>지방간 관리 중인 분 (의료 치료 병행)</li><li>유기농 원료를 선호하는 분</li></ul>',
    },

    { type: 'h2', id: 'how-to', text: '복용 방법과 주의사항' },
    {
      type: 'body',
      html: '<p>실리마린은 지용성 성분이므로 <strong>식사와 함께</strong> 복용하면 흡수율이 높아집니다. 음주 전보다 음주 후 복용이 간세포 보호에 더 효과적이라는 연구도 있습니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>간 질환 환자</strong>: 간염·간경변 치료 중인 경우 담당 의사 상담 후 복용.</li><li><strong>CYP450 약물 상호작용</strong>: 실리마린이 약물 대사 효소를 억제할 수 있어 항응고제·항암제 등 복용자는 주의.</li><li><strong>국화과 알레르기</strong>: 밀크씨슬은 국화과 식물 — 관련 알레르기 확인.</li></ul>',
    },

    { type: 'productSlot', productKey: 'milk-thistle' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '술 마시기 전에 먹는 게 좋은가요, 후에 먹는 게 좋은가요?',
          a: '연구에 따르면 음주 후 간세포가 손상되는 시점에 실리마린을 공급하는 것이 보호 효과에 유리할 수 있습니다. 그러나 지속적인 복용(매일 식사 후)이 간헐적 음주 전후 복용보다 더 안정적입니다. 음주 자체를 줄이는 것이 가장 중요합니다.',
        },
        {
          q: '간 수치가 높은데 밀크씨슬만으로 정상화될 수 있나요?',
          a: 'ALT·AST가 정상 상한치의 3배 이상인 경우 원인 진단(바이러스성 간염·지방간·약인성 등)이 우선입니다. 밀크씨슬은 경미한 간 수치 개선에 보조적으로 사용될 수 있으나, 의료 치료를 대체하지 않습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 밀크씨슬 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: '대한간학회 — 간 건강 가이드', url: 'https://www.kasl.org/', org: '대한간학회', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
