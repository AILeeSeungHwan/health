// posts/supplements/blood-sugar-care.js
const post = {
  id: 'U0023',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 혈당·혈행·간 건강을 동시에 관리하는 복합 영양제가 주목받고 있습니다. 혈당 관리에는 크롬·바나듐·여주 추출물, 혈행 개선에는 오메가3·코큐텐, 간 보호에는 밀크씨슬·NAC가 대표 성분입니다. 각 성분의 식약처 기능성과 병용 효과를 알아봅니다.</p><div class="meta-row"><span class="tag">성분: 혈당·혈행·간 복합</span> <span class="tag tag-approved">식약처 기능성 고시 복합</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'blood-sugar', text: '혈당 관리 성분' },
    {
      type: 'body',
      html: '<p>공복 혈당이 100~125mg/dL(공복 혈당 장애) 또는 식후 2시간 혈당이 140~199mg/dL(내당능 장애) 구간이면 생활습관 개선과 함께 보조 영양 전략을 검토할 수 있습니다.</p><ul><li><strong>크롬(Chromium)</strong>: 인슐린 수용체 민감도 향상에 관여. 식약처 고시 기능성: 탄수화물·지방·단백질 정상적 대사에 필요. 일반적 용량 200μg/일.</li><li><strong>여주(Bitter Melon)</strong>: 혈당 저하 효과는 연구마다 결과가 달라 식약처 고시 기능성은 없으나, 전통적으로 혈당 관리에 사용.</li><li><strong>베르베린(Berberine)</strong>: AMPK 경로를 활성화해 간에서 포도당 생성 억제. 일부 임상 연구에서 메트포르민과 유사한 효과 보고 — 당뇨 약 복용자는 반드시 의사와 상담.</li></ul>',
    },

    { type: 'h2', id: 'circulation', text: '혈행 개선 성분' },
    {
      type: 'body',
      html: '<p>혈행(혈액 순환) 개선은 심뇌혈관 위험 감소와 연결됩니다.</p><ul><li><strong>오메가3(EPA+DHA)</strong>: 식약처 기능성 — 혈중 중성지질 개선·혈행 개선.</li><li><strong>코엔자임Q10(CoQ10)</strong>: 미토콘드리아 에너지 생성, 항산화. 식약처 기능성 — 높은 혈압 감소에 도움.</li><li><strong>홍국(Red Yeast Rice)</strong>: 모나콜린K 함유, 콜레스테롤 합성 억제. 스타틴 계열 약물과 중복 작용 주의.</li></ul>',
    },

    { type: 'h2', id: 'liver', text: '간 건강 성분' },
    {
      type: 'body',
      html: '<p>지방간·음주·과로로 인한 간 피로 회복에 사용되는 성분입니다.</p><ul><li><strong>밀크씨슬(Silymarin)</strong>: 식약처 고시 기능성 — 간 기능 개선. 실리마린 기준 130mg/일.</li><li><strong>UDCA(우르소데옥시콜산)</strong>: 담즙산 조성 개선, 비알코올성 지방간 관리에 사용. 의약품으로도 처방.</li><li><strong>N-아세틸시스테인(NAC)</strong>: 글루타치온 전구체. 아세트아미노펜 과량 복용 해독에 의료 현장 사용, 영양제로는 간 항산화 보조 목적.</li></ul>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000594221', productName: '뉴트리원 혈당·혈행·간 토탈케어', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000594221/480_1000594221_ITEM2025102362209.png', price: 156000 },
      ],
    },

    { type: 'h2', id: 'lifestyle', text: '영양제 전에 생활습관이 우선입니다' },
    {
      type: 'info',
      html: '<p>혈당·혈행·간 건강 모두 <strong>식이조절·운동·절주·금연</strong>이 영양제보다 훨씬 강력한 개입입니다. 복합 영양제는 건강한 생활습관을 유지하는 사람의 보조 수단으로 사용하세요. 이미 혈당강하제·항고혈압제·간질환 치료제를 복용 중이라면 담당의와 상호작용을 먼저 확인하세요.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>당뇨 약물 복용자</strong>: 혈당 저하 성분(크롬·베르베린) 병용 시 저혈당 위험. 의사 상담 필수.</li><li><strong>항응고제 복용자</strong>: 오메가3·홍국이 출혈 경향을 높일 수 있습니다.</li><li><strong>간 질환자</strong>: 보충제 과잉 섭취가 오히려 간에 부담을 줄 수 있습니다.</li><li>복합 제품은 성분 용량이 단일 제품보다 낮은 경우가 많아 심각한 이상 수치는 의료 치료가 필요합니다.</li></ul>',
    },

    { type: 'productSlot', productKey: 'blood-sugar-care' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '혈당이 살짝 높은데 영양제로 조절될까요?',
          a: '공복혈당 100~125mg/dL 범위라면 체중 감량·저탄수화물 식이·유산소 운동이 가장 효과적입니다. 크롬·베르베린 등 영양제는 보조 역할이며, 혈당강하 효과가 약물만큼 강하지 않습니다. 정기 검진으로 추이를 모니터링하세요.',
        },
        {
          q: '술을 많이 마시는데 영양제로 간을 보호할 수 있나요?',
          a: '밀크씨슬은 간 세포 보호에 도움이 될 수 있지만 음주 자체의 간 독성을 완전히 상쇄하지는 못합니다. 가장 중요한 것은 음주량 감소입니다. 영양제는 절주를 병행할 때 의미가 있습니다.',
        },
        {
          q: '세 가지 효과를 한 제품에서 기대할 수 있나요?',
          a: '복합 제품은 편의성이 높지만, 개별 성분 용량이 분산돼 단독 제품보다 낮을 수 있습니다. 특정 문제가 주된 경우(예: 혈당만 집중 관리)라면 단일 성분 고함량 제품이 더 효율적일 수 있습니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 크롬 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: '대한당뇨병학회 — 당뇨병 진료지침', url: 'https://www.diabetes.or.kr/', org: '대한당뇨병학회', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Dietary Supplements', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
