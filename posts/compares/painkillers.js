const post = {
  id: 'C0001',
  sections: [
    { type: 'intro', html: '<p><strong>한 줄 결론:</strong> 위장·간이 민감하면 아세트아미노펜, 염증성 통증이면 이부프로펜, 장시간 지속되는 통증이면 나프록센 계열이 옵션. 단 성분 중복 복용·공복 복용에 주의.</p>' },    { type: 'toc' },

    { type: 'callout', html: "<p>타이레놀이 나을지 이부프로펜이 나을지 친구한테 물어본 적이 있다. 대답은 \"상황마다 달라\"였다. 처음엔 그 말이 무슨 뜻인지 몰랐는데 — 진통제는 성분마다 작용 방식이 달라서 통증 유형에 따라 더 맞는 게 있다.</p>" },

{ type: 'callout', html: "<p>타이레놀이 나을지 이부프로펜이 나을지 친구한테 물어본 적이 있다. 대답은 \"상황마다 달라\"였다. 처음엔 그 말이 무슨 뜻인지 몰랐는데 — 진통제는 성분마다 작용 방식이 달라서 통증 유형에 따라 더 맞는 게 있다.</p>" },,

    { type: 'h2', id: 'table', text: '성분별 핵심 비교표' },
    { type: 'body', html: '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="border-bottom:2px solid #e5e7eb;text-align:left"><th style="padding:10px 8px">성분</th><th style="padding:10px 8px">주 적응증</th><th style="padding:10px 8px">위장 부담</th><th style="padding:10px 8px">복용 시점</th><th style="padding:10px 8px">주의</th></tr></thead><tbody><tr style="border-bottom:1px solid #eee"><td style="padding:10px 8px"><strong>아세트아미노펜</strong><br/>(타이레놀)</td><td style="padding:10px 8px">두통·발열·근육통</td><td style="padding:10px 8px">낮음</td><td style="padding:10px 8px">공복 가능</td><td style="padding:10px 8px">간독성·음주 주의</td></tr><tr style="border-bottom:1px solid #eee"><td style="padding:10px 8px"><strong>이부프로펜</strong><br/>(부루펜·이지엔6)</td><td style="padding:10px 8px">염증성 통증·생리통</td><td style="padding:10px 8px">중간</td><td style="padding:10px 8px">식사 중·식후</td><td style="padding:10px 8px">궤양·신장·심부전</td></tr><tr><td style="padding:10px 8px"><strong>나프록센</strong><br/>(낙센 등)</td><td style="padding:10px 8px">관절통·장시간 통증</td><td style="padding:10px 8px">중간~높음</td><td style="padding:10px 8px">식사 중·식후</td><td style="padding:10px 8px">고령자·위장 출혈 주의</td></tr></tbody></table></div>' },

    { type: 'h2', id: 'acetaminophen', text: '아세트아미노펜 — 언제 고를까' },
    { type: 'body', html: '<p>위장 부담이 적어 공복에 먹기 쉽고, 과민반응이 적어 소아·임신 중 단기 사용 선택지가 됩니다. 단 간에서 대사되므로 음주·간 질환 시 용량 관리가 중요합니다. 자세한 용법은 <a href="/otc/tylenol-acetaminophen/">타이레놀 상세 페이지</a>.</p>' },

    { type: 'h2', id: 'ibuprofen', text: '이부프로펜 — 언제 고를까' },
    { type: 'body', html: '<p>염증·관절통·생리통 같이 염증이 동반된 통증에 강점. 반드시 식사와 함께 복용하고, 장기 사용은 피합니다. 자세한 용법은 <a href="/otc/ibuprofen/">이부프로펜 상세</a>.</p>' },

    { type: 'h2', id: 'naproxen', text: '나프록센 — 언제 고를까' },
    { type: 'body', html: '<p>반감기가 길어 장시간 통증(야간 관절통 등)에 유리. 다만 위장 출혈·신장 영향이 상대적으로 높은 편이므로 고령자·기저질환자 주의.</p>' },

    { type: 'h2', id: 'by-situation', text: '상황별 추천' },
    { type: 'body', html: '<p><strong>공복·간 걱정:</strong> 아세트아미노펜.</p><p><strong>염증·생리통:</strong> 이부프로펜.</p><p><strong>장시간 관절통:</strong> 나프록센.</p><p><strong>임산부 단기 사용:</strong> 담당의와 상담 후 아세트아미노펜 우선.</p><p><strong>아스피린 금기 환자:</strong> NSAIDs 과민반응 여부를 약사에게 반드시 확인.</p>' },

    { type: 'h2', id: 'overdose', text: '과량 복용 경고' },
    { type: 'emergency', html: '<p>성인 아세트아미노펜 하루 4g 초과, 이부프로펜 OTC 1,200mg 초과는 위험할 수 있습니다. 과량이 의심되면 증상 유무와 관계없이 즉시 1339 또는 응급실에 연락하세요.</p>' },

    { type: 'h2', id: 'checklist', text: '선택 기준 체크리스트' },
    { type: 'body', html: '<ul><li>공복에 먹을 수 있는가?</li><li>위염·궤양 병력이 있는가?</li><li>간·신장 기저 질환이 있는가?</li><li>복용 중인 다른 약이 있는가?</li><li>알코올 섭취 계획이 있는가?</li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '아세트아미노펜 + 이부프로펜 교대 복용은 안전한가요?', a: '성분이 달라 교대 복용은 가능하지만, 각각의 용량 관리를 철저히 해야 합니다. 약사 상담을 권장합니다.' },
      { q: '생리통에는 뭐가 좋나요?', a: '염증 기전이 관여하므로 이부프로펜이 일반적으로 선호됩니다.' },
    ]},

    { type: 'productSlot', productKey: 'painkillers' },

    { type: 'sources', items: [
      { label: '식약처 의약품안전나라', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '국가건강정보포털 — 진통제 안전 사용', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
