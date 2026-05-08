// posts/guides/otc-safe-use.js
const post = {
  id: 'G0003',
  sections: [
    { type: 'intro', html: '<p><strong>일반의약품(OTC)은 처방 없이 구입할 수 있지만 안전한 것과는 다릅니다.</strong> 잘못된 중복 복용, 모르고 하는 약물 상호작용, 음식·음료와의 조합이 예상치 못한 부작용을 일으킬 수 있습니다. 이 가이드는 가정에서 가장 많이 쓰는 OTC 계열별로 안전 복용 원칙과 피해야 할 조합을 정리합니다.</p>' },    { type: 'toc' },

    { type: 'callout', html: "<p>감기약과 타이레놀을 같이 먹다가 아세트아미노펜이 중복된다는 걸 나중에 알았다. 약국에서 여러 약을 한 번에 사면서 성분을 확인하지 않는 게 생각보다 흔한 실수다. 일반의약품도 알고 먹어야 안전하다.</p>" },


    { type: 'h2', id: 'what-is-otc', text: '일반의약품이란 — 처방 없이 살 수 있다는 의미' },
    { type: 'body', html: '<p>일반의약품(OTC, Over-The-Counter)은 약사의 조언 없이 구입 가능한 의약품으로, 진통제·해열제·소화제·감기약·항히스타민제 등이 해당합니다. 하지만 "처방 불필요"는 "부작용 없음"과 다릅니다.</p><ul><li>OTC도 용법·용량을 지키지 않으면 간 독성(아세트아미노펜), 위장 장애(이부프로펜), 졸음(항히스타민) 같은 이상반응이 나타날 수 있습니다.</li><li>복합 성분 감기약·종합 영양제에는 여러 성분이 포함되어 있어 다른 OTC와 함께 복용할 때 중복 섭취가 발생하기 쉽습니다.</li></ul>' },

    { type: 'h2', id: 'acetaminophen', text: '아세트아미노펜(타이레놀) — 진통제 부작용과 안전 용량' },
    { type: 'h3', id: 'acetaminophen-dose', text: '아세트아미노펜 용량 기준' },
    { type: 'body', html: '<p>아세트아미노펜은 성인 기준 1회 500~1,000mg, 1일 최대 4,000mg(건강한 성인)으로 제한됩니다. 간 질환자·음주자는 1일 최대 2,000mg 이하로 줄여야 합니다.</p><ul><li><strong>진통제 부작용 중 가장 주의해야 할 것</strong>이 아세트아미노펜 과다 복용으로 인한 급성 간 독성입니다. 증상 없이 간 손상이 진행될 수 있습니다.</li><li>감기약·두통약·수면 보조제에도 아세트아미노펜이 포함된 경우가 많아 <strong>중복 복용 주의</strong>가 필요합니다.</li></ul>' },
    { type: 'h3', id: 'acetaminophen-warning', text: '아세트아미노펜 복용 금지 또는 주의 상황' },
    { type: 'body', html: '<ul><li>간 질환(간염·간경화) 환자 — 소량도 위험할 수 있습니다</li><li>음주 후 또는 만성 음주자 — 알코올이 아세트아미노펜 독성을 크게 높입니다</li><li>다른 아세트아미노펜 함유 제품(감기약·복합 진통제)과 동시 복용</li><li>성인 기준 하루 3잔 이상 음주 시 복용 전 약사 상담 필수</li></ul>' },

    { type: 'h2', id: 'nsaid', text: 'NSAIDs(이부프로펜·나프록센) — 위장 보호와 신장 주의' },
    { type: 'h3', id: 'nsaid-dose', text: 'NSAIDs 안전 복용 원칙' },
    { type: 'body', html: '<p>이부프로펜(부루펜 계열)·나프록센은 소염 진통 작용이 아세트아미노펜보다 강하지만, 위장 장애·신장 기능 영향·혈압 상승이 문제가 될 수 있습니다.</p><ul><li>반드시 식후 복용 또는 음식과 함께 복용합니다 — 공복 복용 시 위장 자극이 커집니다.</li><li>이부프로펜: 성인 1회 200~400mg, 1일 최대 1,200mg(OTC 기준).</li><li>5~7일 이상 장기 복용 시 전문가 상담을 권장합니다.</li></ul>' },
    { type: 'h3', id: 'nsaid-caution', text: 'NSAIDs를 피해야 하는 경우' },
    { type: 'body', html: '<ul><li>신장 질환·만성 신부전 환자</li><li>심혈관 질환(심근경색·뇌졸중 병력) — 혈전 위험이 증가합니다</li><li>위궤양·소화성 궤양 병력자</li><li>임신 3기 — 태아 신장 발달 저해 위험이 있습니다</li><li>아스피린과 함께 복용 시 위장 출혈 위험이 증가합니다</li><li>이뇨제·혈압약(ACE억제제·ARB)과 병용 시 신장 기능이 저하될 수 있습니다</li></ul>' },

    { type: 'h2', id: 'antihistamine', text: '항히스타민제 — 졸음과 운전 주의' },
    { type: 'body', html: '<p>감기약·알레르기약·수면 보조제에 많이 포함된 1세대 항히스타민제(클로르페니라민·디펜히드라민)는 졸음 유발이 강합니다.</p><ul><li><strong>운전·기계 조작 전 복용 금지</strong> — 반응 속도가 크게 저하됩니다.</li><li>술과 함께 복용하면 진정 효과가 극적으로 증가해 위험합니다.</li><li>전립선 비대·녹내장 환자 — 요폐·안압 상승 위험이 있어 복용 전 의사 상담이 필요합니다.</li><li>2세대 항히스타민(세티리진·로라타딘)은 졸음이 적지만 개인차가 있습니다.</li></ul>' },

    { type: 'h2', id: 'cold-medicine', text: '복합 감기약 — 중복 성분이 가장 위험' },
    { type: 'body', html: '<p>복합 감기약은 아세트아미노펜 + 항히스타민 + 충혈제거제 + 기침 억제제 등이 한 알에 들어 있습니다. 다른 진통제·해열제와 동시 복용하면 <strong>아세트아미노펜 중복 섭취로 간 독성 위험</strong>이 높아집니다.</p><ul><li>복합 감기약 복용 시 별도 진통제 추가 복용은 원칙적으로 피해야 합니다.</li><li>어린이용·성인용 구분 없이 임의 사용 금지.</li><li>슈도에페드린(충혈제거제) 성분은 혈압을 올릴 수 있어 고혈압 환자는 주의가 필요합니다.</li></ul>' },

    { type: 'h2', id: 'drug-interactions', text: '약 상호작용 — 알아두어야 할 주요 조합' },
    { type: 'h3', id: 'otc-rx-interaction', text: 'OTC ↔ 처방약 상호작용' },
    { type: 'body', html: '<table style="border-collapse:collapse;width:100%"><thead><tr><th style="border:1px solid #ddd;padding:8px">OTC 성분</th><th style="border:1px solid #ddd;padding:8px">함께 피해야 할 약</th><th style="border:1px solid #ddd;padding:8px">위험</th></tr></thead><tbody><tr><td style="border:1px solid #ddd;padding:8px">아세트아미노펜</td><td style="border:1px solid #ddd;padding:8px">와파린(항응고제)</td><td style="border:1px solid #ddd;padding:8px">출혈 위험 증가</td></tr><tr><td style="border:1px solid #ddd;padding:8px">이부프로펜</td><td style="border:1px solid #ddd;padding:8px">리튬(정신약)</td><td style="border:1px solid #ddd;padding:8px">리튬 혈중 농도 상승 → 독성</td></tr><tr><td style="border:1px solid #ddd;padding:8px">이부프로펜</td><td style="border:1px solid #ddd;padding:8px">항응고제(와파린·아픽사반)</td><td style="border:1px solid #ddd;padding:8px">심각한 출혈 위험</td></tr><tr><td style="border:1px solid #ddd;padding:8px">항히스타민</td><td style="border:1px solid #ddd;padding:8px">항불안제·수면제·알코올</td><td style="border:1px solid #ddd;padding:8px">중추신경 과억제 위험</td></tr><tr><td style="border:1px solid #ddd;padding:8px">슈도에페드린</td><td style="border:1px solid #ddd;padding:8px">MAO억제제(일부 항우울제)</td><td style="border:1px solid #ddd;padding:8px">고혈압 위기</td></tr></tbody></table>' },
    { type: 'h3', id: 'food-interaction', text: 'OTC ↔ 음식·음료 상호작용' },
    { type: 'body', html: '<ul><li><strong>아세트아미노펜 + 알코올</strong> — 간 독성 위험이 급증합니다. 음주 후 진통제 복용은 특히 주의가 필요합니다.</li><li><strong>이부프로펜 + 공복</strong> — 위장 자극이 강화됩니다. 반드시 식후에 복용하세요.</li><li><strong>항히스타민 + 자몽 주스</strong> — 일부 항히스타민의 혈중 농도가 올라갈 수 있습니다.</li><li><strong>이부프로펜/나프록센 + 카페인 과다</strong> — 위장 자극이 더해질 수 있습니다.</li><li><strong>아스피린 + 비타민 E 고용량</strong> — 혈액 희석 효과가 더해져 출혈 위험이 증가합니다.</li></ul>' },

    { type: 'h2', id: 'special-groups', text: '특별 주의가 필요한 그룹' },
    { type: 'body', html: '<ul><li><strong>임산부</strong> — 아세트아미노펜은 단기 사용이 비교적 안전한 것으로 알려져 있지만, 이부프로펜은 임신 20주 이상에서 피해야 합니다. 모든 OTC 복용 전 산부인과 상담을 권장합니다.</li><li><strong>수유부</strong> — 아세트아미노펜·이부프로펜은 모유로 소량 이행하지만 단기 복용은 비교적 안전하다는 연구가 있습니다. 항히스타민은 신생아 졸음 유발 우려가 있습니다.</li><li><strong>소아</strong> — 아스피린은 15세 미만 소아에게 라이 증후군 위험 때문에 금기입니다. 체중에 따른 정확한 용량 계산이 필수입니다.</li><li><strong>노인(65세 이상)</strong> — 신장·간 기능 저하로 약물 대사가 느려 부작용 위험이 높습니다. 항히스타민(낙상·인지 저하)·NSAIDs(신장 손상·위장 출혈) 사용에 각별히 주의합니다.</li><li><strong>신장 질환자</strong> — NSAIDs 사용은 신장 기능을 더 악화시킬 수 있어 의사 상담이 필수입니다.</li><li><strong>간 질환자</strong> — 아세트아미노펜 용량을 크게 줄여야 합니다.</li></ul>' },

    { type: 'h2', id: 'safe-use-checklist', text: 'OTC 안전 복용 체크리스트' },
    { type: 'body', html: '<ol><li>☑ <strong>성분 확인</strong> — 복용 중인 다른 약과 같은 성분이 겹치지 않는지 확인합니다.</li><li>☑ <strong>용법·용량 준수</strong> — "좀 더 먹으면 더 빨리 낫겠지"는 금물입니다.</li><li>☑ <strong>복용 간격</strong> — 아세트아미노펜 최소 4~6시간, 이부프로펜 최소 6~8시간 간격을 유지합니다.</li><li>☑ <strong>복용 기간</strong> — 3일 이상 계속 필요하다면 의사·약사와 상담합니다.</li><li>☑ <strong>음주 중 복용 자제</strong> — 특히 아세트아미노펜·항히스타민.</li><li>☑ <strong>임신·수유 중</strong> — 복용 전 반드시 전문가 확인.</li><li>☑ <strong>처방약과 병용 시</strong> — 약사에게 OTC 복용 사실을 알립니다.</li><li>☑ <strong>유통기한 확인</strong> — 개봉 후 유효기간에 주의합니다.</li></ol>' },

    { type: 'h2', id: 'pharmacy-consult', text: '약사 상담이 필요한 경우' },
    { type: 'warning', html: '<p>다음에 해당하면 OTC를 그냥 구입하기 전에 약사 또는 의사와 상담하세요.</p><ul><li>처방약(혈압약·항응고제·당뇨약·항우울제 등)을 복용 중인 경우</li><li>만성 질환(신장·간·심혈관) 병력이 있는 경우</li><li>임신 중이거나 수유 중인 경우</li><li>65세 이상 노인 또는 12세 미만 소아</li><li>같은 OTC를 3일 이상 반복 복용이 필요한 경우</li><li>진통제 부작용(위통·두드러기·어지러움)이 나타난 경우</li><li>여러 가지 약을 동시에 복용하는 경우(폴리파마시)</li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ — 일반의약품 복용 Q&A' },
    { type: 'faq', items: [
      { q: '타이레놀과 이부프로펜을 같이 먹어도 되나요?', a: '작용 기전이 달라 서로 다른 시간대에 번갈아 복용하는 방법이 쓰이기도 하지만, 이는 의사 지시 하에 단기적으로 사용하는 방식입니다. 자의적 병용은 권장하지 않으며, 약사 상담 후 결정하세요.' },
      { q: '진통제를 먹어도 통증이 안 잡히면 더 먹어도 되나요?', a: '권장 용량을 초과하면 효과보다 부작용 위험이 더 커집니다. 용량을 늘리는 대신 다른 계열 진통제로 교체하거나, 3일 이상 지속되는 통증은 의료기관을 방문하세요.' },
      { q: '약 상호작용을 쉽게 확인하는 방법이 있나요?', a: '식약처 의약품안전나라(nedrug.mfds.go.kr)에서 성분별 상호작용을 조회할 수 있습니다. 약국에서 "복약 상담"을 요청하면 약사가 확인해줍니다. 약학정보원 앱도 유용합니다.' },
      { q: '유통기한 지난 약을 먹어도 되나요?', a: '유통기한은 개봉 전 적절히 보관했을 때의 기준입니다. 습한 욕실·직사광선 노출 환경에서 보관했다면 유통기한 전이라도 효력이 저하될 수 있습니다. 유통기한 지난 약은 사용하지 마세요.' },
      { q: '약을 먹고 두드러기·호흡 곤란이 생기면 어떻게 하나요?', a: '즉시 복용을 중단하고 119에 연락하거나 응급실을 방문하세요. 아나필락시스(심한 알레르기 반응)는 수분 내에 생명을 위협할 수 있습니다.' },
    ]},

    { type: 'sources', items: [
      { label: '식품의약품안전처 의약품안전나라', url: 'https://nedrug.mfds.go.kr', org: '식품의약품안전처', accessedAt: '2026-05-04' },
      { label: '약학정보원 — 의약품 정보', url: 'https://www.health.kr', org: '약학정보원', accessedAt: '2026-05-04' },
      { label: 'MSD 매뉴얼 한국어판 — 약물 상호작용', url: 'https://www.msdmanuals.com/ko', org: 'MSD Manual', accessedAt: '2026-05-04' },
    ]},
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
