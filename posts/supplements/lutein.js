// posts/supplements/lutein.js
const post = {
  id: 'U0007',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 루테인과 지아잔틴은 망막 황반에 집중된 카로테노이드 색소로, 자외선과 청색광(HEV)으로부터 눈을 보호하는 역할을 합니다. 식약처는 "황반색소 밀도를 유지하여 눈 건강에 도움"을 고시 기능성으로 인정합니다. 몸에서 합성되지 않아 음식 또는 영양제로 보충해야 합니다.</p><div class="meta-row"><span class="tag">성분: 루테인·지아잔틴</span> <span class="tag tag-approved">식약처 기능성 고시</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-it', text: '루테인이란' },
    {
      type: 'body',
      html: '<p>루테인(Lutein)과 지아잔틴(Zeaxanthin)은 카로테노이드(carotenoid) 계열의 황색 색소입니다. 자연에서는 케일·시금치·달걀노른자·옥수수 등에 많이 함유됩니다.</p><p>망막의 황반(macula)에 집중적으로 축적되어 황반색소(Macular Pigment)를 형성하고, 청색광과 자외선을 흡수·차단하는 천연 필터 역할을 합니다.</p>',
    },

    { type: 'h2', id: 'evidence', text: '연구 근거와 황반변성' },
    {
      type: 'body',
      html: '<p><strong>AREDS2 연구</strong>(미국 국립안과연구소, 대규모 RCT): 중등도 이상 황반변성 환자에서 루테인(10mg)+지아잔틴(2mg)을 베타카로틴 대신 포함한 복합제가 황반변성 진행을 억제하는 데 효과적이었습니다.</p><p>건강한 눈에서 황반변성을 예방한다는 근거는 아직 충분하지 않지만, 황반색소 밀도 유지 효과는 여러 연구에서 확인됐습니다.</p><p><strong>청색광 차단</strong>: 루테인·지아잔틴은 스마트폰·모니터에서 나오는 청색광(HEV, 415~455nm) 영역을 흡수합니다. 단, 디지털 기기에 의한 눈 피로(CVS)에 대한 직접적 임상 근거는 제한적입니다.</p>',
    },

    { type: 'h2', id: 'dosage', text: '적정 섭취량과 형태' },
    {
      type: 'body',
      html: '<p><strong>식약처 기준</strong>: 1일 루테인 10~20mg. 일반적인 눈 건강 목적으로는 <strong>20mg/일</strong>이 많이 사용됩니다.</p><p><strong>지아잔틴 병용</strong>: 루테인:지아잔틴 = 5:1 비율(예: 루테인 10mg + 지아잔틴 2mg)이 연구에서 많이 사용된 비율입니다.</p><p><strong>에스테르형 vs 유리형</strong>: 유리형(free-form)이 흡수에 더 유리하다고 알려져 있지만, 에스테르형도 지방과 함께 섭취하면 유사한 흡수율을 보입니다. 지방과 함께(식사 후) 복용하는 것을 권장합니다.</p>',
    },

    { type: 'h2', id: 'vs-astaxanthin', text: '아스타잔틴과 차이점' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">루테인·지아잔틴</th><th style="padding:8px;border:1px solid #ddd">아스타잔틴</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">주요 축적 부위</td><td style="padding:8px;border:1px solid #ddd">망막 황반</td><td style="padding:8px;border:1px solid #ddd">전신 조직</td></tr><tr><td style="padding:8px;border:1px solid #ddd">식약처 기능성</td><td style="padding:8px;border:1px solid #ddd">황반색소 밀도 유지 (고시형)</td><td style="padding:8px;border:1px solid #ddd">눈의 피로도 개선·조절력 개선 (개별인정형)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">주 용도</td><td style="padding:8px;border:1px solid #ddd">황반 보호, 노인 눈 건강</td><td style="padding:8px;border:1px solid #ddd">눈 피로·모니터 작업 많은 경우</td></tr><tr><td style="padding:8px;border:1px solid #ddd">항산화력</td><td style="padding:8px;border:1px solid #ddd">중간</td><td style="padding:8px;border:1px solid #ddd">매우 강함 (싱글렛 산소 소거)</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">두 성분은 작용 기전이 달라 병용도 가능합니다.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>과량 섭취 시</strong>: 피부·손바닥이 노랗게 변하는 카로테노이드혈증이 드물게 발생. 건강에 무해하지만 용량 조절 필요.</li><li><strong>흡연자</strong>: 베타카로틴 고용량(>20mg) 섭취 시 폐암 위험 증가 보고 있으나, 루테인에서는 해당 우려가 없습니다.</li><li><strong>임산부·수유부</strong>: 식품 수준 섭취는 안전하지만 고용량 영양제에 대한 데이터 제한.</li></ul>',
    },

    { type: 'productSlot', productKey: 'lutein' },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000683', productName: '뉴트리원 루테인지아잔틴 에이엑스 GR', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000683/480_1000000683_ITEM2024121013355.png', price: 130000 },
        { nutrioneId: '1000000685', productName: '뉴트리원 루테인 지아잔틴 알티지 오메가3 GR', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000685/480_1000000685_ITEM2024103166415.png', price: 137000 },
        { nutrioneId: '1000000420', productName: '뉴트리원 루테인 지아잔틴 GR', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000420/480_1000000420_ITEM2024121036773.png', price: 111100 },
        { nutrioneId: '1000001227', productName: '뉴트리원 루테인지아잔틴 메모리케어 GR', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001227/480_1000001227_ITEM2024103173967.png', price: 133200 },
      ],
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '루테인은 시력을 좋아지게 하나요?',
          a: '루테인은 시력 자체를 교정하는 것이 아니라, 황반색소 밀도를 유지해 황반변성 진행을 억제하고 눈 건강을 보조하는 역할입니다. 굴절 이상(근시·원시·난시)에는 효과가 없습니다.',
        },
        {
          q: '언제부터 복용을 시작하는 게 좋나요?',
          a: '황반색소 밀도는 나이가 들수록 감소하는 경향이 있어, 눈 건강을 위한 예방적 목적으로는 40~50대부터 시작하는 경우가 많습니다. 눈이 많이 피로하거나 가족력이 있다면 더 일찍 시작하는 것도 고려해볼 수 있습니다.',
        },
        {
          q: '케일·시금치를 많이 먹으면 영양제를 안 먹어도 되나요?',
          a: '케일 100g에는 루테인+지아잔틴이 약 40mg 포함되어 있습니다. 녹황색 채소를 매일 충분히 섭취한다면 음식으로도 필요량을 채울 수 있습니다. 채소 섭취가 적거나 흡수율을 높이고 싶을 때 영양제를 활용하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 루테인 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-09' },
        { label: 'AREDS2 Research Group — Lutein and Zeaxanthin for AMD', url: 'https://www.nei.nih.gov/research/clinical-trials/age-related-eye-disease-studies/areds2', org: 'NIH/NEI', accessedAt: '2026-05-09' },
        { label: 'MSD Manual — Age-Related Macular Degeneration', url: 'https://www.msdmanuals.com/professional/eye-disorders/retinal-disorders/age-related-macular-degeneration', org: 'MSD Manual', accessedAt: '2026-05-09' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
