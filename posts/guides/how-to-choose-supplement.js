const post = {
  id: 'G0001',
  sections: [
    { type: 'intro', html: '<p>영양제는 마법이 아닙니다. 식사와 생활습관의 <strong>보조</strong>이고, 잘못 고르면 돈 낭비와 상호작용 위험이 됩니다. 성분·인증·상호작용·가격 대비 품질을 단계별로 점검하는 법을 정리합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'difference', text: '영양제 / 건강기능식품 / 식품 차이' },
    { type: 'body', html: '<p>국내 제도상 "건강기능식품"은 식약처가 기능성과 안전성을 인정한 원료를 사용한 제품으로, 기능성 표시가 가능합니다. 일반 영양식품·식품은 기능성 표기가 법적으로 제한됩니다.</p>' },

    { type: 'h2', id: 'needed', text: '내게 정말 필요한지 자가 체크' },
    { type: 'body', html: '<ul><li>현재 식단에서 해당 영양소가 부족한가?</li><li>건강검진에서 지적된 수치가 있는가?</li><li>증상이 구체적인가, 막연한 불편인가?</li><li>기본 수면·운동은 되어 있는가?</li></ul>' },

    { type: 'h2', id: 'certification', text: '기능성 인증 마크 읽는 법' },
    { type: 'body', html: '<p>"건강기능식품" 마크와 기능성 원료 표시(고시형/개별 인정형)를 확인합니다. "1일 섭취량 기준", "일일 영양소 기준치" 대비 %를 비교합니다.</p>' },

    { type: 'h2', id: 'dose', text: '용량·일일 섭취량 확인' },
    { type: 'body', html: '<p>기능성은 특정 섭취량 범위에서 검증된 효과입니다. 섭취량이 너무 낮거나 상한을 넘지 않는지 확인하세요.</p>' },

    { type: 'h2', id: 'interactions', text: '약물 상호작용 체크' },
    { type: 'body', html: '<ul><li>항응고제·고혈압약 복용자 — 오메가3·코엔자임Q10 등 주의</li><li>갑상선약 — 칼슘·철분 흡수 시차 필요</li><li>간대사 영향 — 자몽, 일부 허브</li></ul>' },

    { type: 'h2', id: 'by-age', text: '연령·성별·건강상태별 선택' },
    { type: 'body', html: '<p><strong>임산부·수유부:</strong> 엽산·철·비타민 D 우선. 허브 계열·고용량 비타민 A는 주의.</p><p><strong>고령자:</strong> 비타민 D·칼슘·오메가3·B12.</p><p><strong>채식주의자:</strong> B12·철·오메가3(조류 유래).</p>' },

    { type: 'h2', id: 'price', text: '가격 vs 품질 판단' },
    { type: 'body', html: '<p>기능성 원료 인정을 받은 제품이면 큰 품질 차이는 없습니다. 원료 원산지·형태(예: 오메가3 rTG/EE)·검사 이력(수은·중금속)이 차이를 만듭니다.</p>' },

    { type: 'h2', id: 'rotation', text: '복용 시점·중단 기준' },
    { type: 'body', html: '<p>대부분의 기능성은 꾸준한 섭취가 전제입니다. 3~6개월 후 건강 상태·혈액 수치를 재평가하고 필요 시 조정하세요.</p>' },

    { type: 'h2', id: 'food-first', text: '식품으로 먼저 해결할 수 있는 것' },
    { type: 'body', html: '<ul><li>오메가3 → 등 푸른 생선 주 2회</li><li>철 → 붉은 육류·콩류·비타민 C 병행 흡수</li><li>비타민 D → 일부 햇빛 노출 + 식이</li></ul>' },

    { type: 'h2', id: 'red-flags', text: '구매 전 경고 신호' },
    { type: 'warning', html: '<ul><li>"치료", "완치" 같은 의약품급 문구</li><li>특정 SNS 채널 단독 판매</li><li>성분·용량 불투명</li><li>의사·셀럽 과도한 추천</li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '몇 개까지 동시에 먹어도 되나요?', a: '3개 이상이면 중복·상호작용 위험이 커지므로 약사 검토를 권장합니다.' },
      { q: '공복 vs 식사 중?', a: '지용성(A·D·E·K, 오메가3) → 식사 중, 일부 단백질 계열 → 공복. 제품 표기를 우선.' },
      { q: '효과를 언제 느끼나요?', a: '성분·체질에 따라 다르지만 대체로 4~12주 꾸준히 복용 후 평가합니다.' },
    ]},

    { type: 'sources', items: [
      { label: '식품의약품안전처 건강기능식품정보', url: 'https://www.foodsafetykorea.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '한국인 영양소 섭취 기준 2020', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
