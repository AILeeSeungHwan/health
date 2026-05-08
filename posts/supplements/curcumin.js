const post = {
  id: 'U0016',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 커큐민은 강황(Turmeric) 뿌리의 황색 색소 성분으로 강력한 항산화·항염 작용을 합니다. 그러나 지용성이며 체내 흡수율이 매우 낮아, 수용성 커큐민·피페린 복합·리포좀 형태가 개발되었습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>무릎이 욱신거리는 날이 잦아지면서 커큐민을 찾아봤다. 항염증 효과가 있다는 얘기를 듣고 시작했는데 — 흡수율이 낮다는 게 문제였다. 수용성 커큐민이나 피페린 복합 제품으로 바꾸고 나서 꾸준히 먹고 있다.</p>" },


    { type: 'h2', id: 'what', text: '커큐민이란 — 강황의 핵심 성분' },
    {
      type: 'body',
      html: '<p>강황(Curcuma longa)의 뿌리에는 세 가지 커큐미노이드(curcuminoid)가 들어 있습니다.</p><ul><li><strong>커큐민(Curcumin)</strong>: 약 75~80% (가장 많음)</li><li>데메톡시커큐민: 15~20%</li><li>비스데메톡시커큐민: ~3%</li></ul><p>일반적으로 커큐민이라 하면 이 세 가지 복합물을 의미하며, 강황 분말 기준 2~5%만 커큐민입니다.</p>',
    },

    { type: 'h2', id: 'absorption', text: '흡수율이 낮은 이유 — 수용성 커큐민의 등장' },
    {
      type: 'body',
      html: '<p>커큐민의 생체이용률(Bioavailability)은 매우 낮습니다. 이유:</p><ul><li>수불용성 — 물에 거의 녹지 않음</li><li>빠른 대사 — 장과 간에서 빠르게 분해</li><li>빠른 배설 — 혈중 체류 시간 짧음</li></ul><p><strong>흡수율 개선 방법</strong>:</p><table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">방식</th><th style="padding:8px;border:1px solid #ddd">원리</th><th style="padding:8px;border:1px solid #ddd">흡수율 향상(대략)</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">피페린(후추 추출물) 복합</td><td style="padding:8px;border:1px solid #ddd">CYP3A4 억제로 대사 감소</td><td style="padding:8px;border:1px solid #ddd">~20배</td></tr><tr><td style="padding:8px;border:1px solid #ddd">수용성 커큐민(나노/미셀)</td><td style="padding:8px;border:1px solid #ddd">계면활성제·나노 입자화</td><td style="padding:8px;border:1px solid #ddd">~30~100배</td></tr><tr><td style="padding:8px;border:1px solid #ddd">리포좀 커큐민</td><td style="padding:8px;border:1px solid #ddd">인지질 캡슐화</td><td style="padding:8px;border:1px solid #ddd">~30배</td></tr><tr><td style="padding:8px;border:1px solid #ddd">지방과 함께 섭취</td><td style="padding:8px;border:1px solid #ddd">지용성이므로 지방과 유화</td><td style="padding:8px;border:1px solid #ddd">2~4배</td></tr></tbody></table>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000502388', productName: '뉴트리원 수용성 커큐민 액티브', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000502388/480_1000502388_ITEM2025030619139.png', price: 32000 },
      ],
    },

    { type: 'h2', id: 'evidence', text: '임상 근거 — 항염·항산화' },
    {
      type: 'body',
      html: '<p>커큐민의 연구된 주요 효과:</p><ul><li><strong>항염</strong>: NF-κB·COX-2 경로 억제. 관절염·염증성 장 질환(IBD) 보조 연구 다수.</li><li><strong>항산화</strong>: 자유 라디칼 직접 소거 + 내인성 항산화 효소(SOD·GPx) 활성화.</li><li><strong>신경 보호</strong>: BDNF 증가·아밀로이드 플라크 억제 동물 연구 → 인지 기능 개선 가능성 연구 중.</li><li><strong>혈당</strong>: 인슐린 저항성 개선 보조 연구.</li></ul><p>대부분 소규모 연구 또는 동물 연구로, 확정적 임상 근거는 계속 쌓이는 중입니다.</p>',
    },

    { type: 'h2', id: 'dosage', text: '권장 섭취량과 복용법' },
    {
      type: 'info',
      html: '<p>커큐민(커큐미노이드) 기준: 일반 목적 500~1,000mg/일. 항염·관절 보조: 1,000~2,000mg/일(의료진 상담 권장). 식사와 함께(지방 병용) 복용 시 일반 커큐민 흡수↑. 수용성 제품은 공복·식후 무관.</p>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>담석증·담도 폐쇄</strong>: 강황이 담즙 분비를 자극해 담석 통증 유발 가능.</li><li><strong>항응고제·항혈소판제</strong>: 혈전 형성 억제 효과 가능 → 와파린 등과 병용 시 주의.</li><li><strong>피페린 복합 제품</strong>: CYP3A4 억제로 약물 대사에 영향 가능. 복약 중인 분은 의료진 상담.</li><li>임산부 고용량 주의 (안전 데이터 제한).</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '강황 가루를 많이 먹으면 커큐민을 충분히 섭취할 수 있나요?', a: '강황 분말의 커큐민 함량은 약 2~5%이며 흡수율도 낮습니다. 하루 1~2스푼(3~6g) 섭취로 얻는 커큐민 양은 50~300mg 수준에 그치며, 표준화 추출물 영양제와 비교해 훨씬 적습니다.' },
        { q: '수용성 커큐민은 물에 타서 먹나요?', a: '수용성 커큐민 제품은 물·음료에 녹거나, 캡슐·정제 형태로 제공됩니다. 물에 타 마시는 제품이라면 따뜻한 물보다 상온에서 용해하는 것이 성분 보존에 유리합니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'Hewlings SJ, Kalman DS. Curcumin: A Review. Foods. 2017', url: '#', org: 'MDPI' },
        { label: 'Anand P, et al. Bioavailability of curcumin. Mol Pharm. 2007', url: '#', org: 'ACS' },
        { label: '식약처 — 커큐민 안전성·기능성 검토보고서', url: 'https://www.mfds.go.kr', org: '식약처' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
