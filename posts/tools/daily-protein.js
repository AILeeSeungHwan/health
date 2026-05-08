const post = {
  id: 'T0003',
  calculator: 'daily-protein',
  sections: [
    { type: 'intro', html: '<p>단백질은 근육·면역 세포·호르몬·효소의 원료로, 하루에 필요한 양은 <strong>체중·활동 수준·목적</strong>에 따라 달라집니다. 위 계산기에 체중과 목적(일반·고령자·근력운동 등)을 입력하면 하루 권장 섭취량을 g 단위로 확인할 수 있고, 어떤 식품으로 채울 수 있는지 환산값도 함께 보여줍니다.</p>' },
    { type: 'callout', html: "<p>운동을 하는데도 근육이 잘 안 붙어서 원인을 찾다 보니 단백질 섭취량이 너무 적었다. 체중 1kg당 1.6g이 필요하다는 걸 알고 나서 실제로 얼마나 먹고 있는지 계산해봤다. 생각보다 훨씬 부족했다.</p>" },

    { type: 'h2', id: 'reference', text: '상황별 권장 단백질 섭취량' },
    { type: 'body', html: '<p>WHO·한국영양학회·미국스포츠의학회(ACSM) 권고를 종합하면 다음이 일반적 기준입니다.</p>' },

    { type: 'h3', id: 'r-basic', text: '일반 성인 — 체중 × 0.8~1.0g' },
    { type: 'body', html: '<p>한국인 영양소 섭취 기준(2020)은 평균 필요량 기준 체중 kg 당 0.73g, 권장 섭취량은 0.91g입니다. 대부분의 사람은 현 식단에서 이 정도는 자연스럽게 섭취합니다.</p>' },

    { type: 'h3', id: 'r-elderly', text: '고령자 — 체중 × 1.0~1.2g' },
    { type: 'body', html: '<p>근감소증 예방을 위해 일반 권장량보다 높게 책정합니다. 한 끼에 20g 이상 균등 분산 섭취가 흡수·합성에 유리하다는 연구가 많습니다.</p>' },

    { type: 'h3', id: 'r-light-ex', text: '가벼운 운동 — 체중 × 1.2g' },
    { type: 'body', html: '<p>주 2~3회 유산소·홈트 수준이라면 일반 권장량보다 조금 높은 범위가 적합합니다.</p>' },

    { type: 'h3', id: 'r-strength', text: '근력 운동·감량 — 체중 × 1.6g' },
    { type: 'body', html: '<p>근육 합성·근손실 방지 목적의 메타분석에서 <strong>약 1.6g/kg에서 효과가 포화</strong>된다고 보고됩니다. 감량 중 근육 보존 목적에도 이 범위가 추천됩니다.</p>' },

    { type: 'h3', id: 'r-athlete', text: '경기·벌크업 — 체중 × 2.0g' },
    { type: 'body', html: '<p>경기력 향상·극한 훈련·적극적 벌크업 목적이라면 상단 범위까지 고려할 수 있습니다. 다만 일반인은 이 범위가 필요하지 않습니다.</p>' },

    { type: 'h2', id: 'food', text: '주요 단백질 식품 환산표' },
    { type: 'body', html: '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="border-bottom:2px solid #E5E7EB"><th style="text-align:left;padding:10px 8px">식품</th><th style="text-align:left;padding:10px 8px">1회 분량</th><th style="text-align:left;padding:10px 8px">단백질</th></tr></thead><tbody><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">닭가슴살</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">23g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">계란</td><td style="padding:10px 8px">1개 (50g)</td><td style="padding:10px 8px">6g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">두부</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">8g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">연어</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">20g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">소고기 살코기</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">22g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">그릭요거트 (무당)</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">10g</td></tr><tr style="border-bottom:1px solid #F3F4F6"><td style="padding:10px 8px">유청 단백질</td><td style="padding:10px 8px">1스쿱 (30g)</td><td style="padding:10px 8px">22~25g</td></tr><tr><td style="padding:10px 8px">검은콩 (건조)</td><td style="padding:10px 8px">100g</td><td style="padding:10px 8px">36g</td></tr></tbody></table></div>' },

    { type: 'h2', id: 'timing', text: '한 끼 몰아먹기 vs 균등 분산' },
    { type: 'body', html: '<p>하루 총량도 중요하지만, <strong>한 끼 20~40g을 3~4회 균등하게 분산</strong>할 때 근단백 합성 자극이 극대화된다는 연구가 많습니다. 저녁에 몰아서 80g을 먹는 것보다, 아침·점심·저녁·운동 후에 20g씩 배분하는 편이 같은 총량에서 더 효과적입니다.</p>' },

    { type: 'h2', id: 'caution', text: '주의해야 할 상황' },
    { type: 'warning', html: '<p><strong>신장 기능 저하</strong>가 있는 경우 고단백 식단은 담당의와 반드시 상의해야 합니다. 또한 통풍 병력자는 동물성 단백질 과다 섭취 시 요산 증가에 유의해야 합니다. 임신·수유부는 일반 성인보다 +15~25g 정도 더 필요하므로 담당의 지침을 따르세요.</p>' },

    { type: 'h2', id: 'supplement', text: '단백질 보충제가 필요한 경우' },
    { type: 'body', html: '<p>식단만으로 목표량을 맞추기 어려운 경우 유청·식물성 프로틴을 보조로 쓸 수 있습니다. 형태별 차이는 <a href="/products/whey-protein/">유청 단백질 가이드</a>에서 확인하세요. 고단백 식품 중 간편식으로는 <a href="/products/chicken-breast-sausage/">닭가슴살 소시지</a>가 자주 활용됩니다.</p>' },

    { type: 'h2', id: 'myths', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"고단백은 무조건 신장에 나쁘다"</strong> — 건강한 성인에서 ≤2g/kg 범위 고단백 식단이 신장에 해롭다는 근거는 약합니다.</li><li><strong>"운동 후 30분이 골든 타임"</strong> — 하루 총 단백질 섭취가 훨씬 중요합니다. 30분 전후에 반드시 먹을 필요는 없습니다.</li><li><strong>"식물성은 동물성보다 열등"</strong> — 콩·두부·완두 단백질도 충분한 필수 아미노산을 제공합니다. 다만 1회 섭취 질량이 커야 할 수 있습니다.</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '단백질 과다 섭취 시 몸에서 어떻게 되나요?', a: '과량은 에너지로 쓰이거나 지방으로 저장됩니다. 질소 대사 부담이 있어 수분 섭취가 중요합니다.' },
      { q: '채식인데 어떻게 맞추나요?', a: '콩·두부·렌틸·퀴노아·견과·식물성 단백질 분리물을 조합합니다. 필수 아미노산 다양성이 관건입니다.' },
      { q: '여성이 고단백을 먹어도 괜찮나요?', a: '네. 근감소 예방·감량 중 근육 보존 모두에 유효합니다.' },
      { q: '단백질을 늘리면 살이 더 잘 빠지나요?', a: '포만감·근육 보존을 통해 감량에 유리합니다. 다만 총 칼로리 결핍이 여전히 기본입니다.' },
      { q: '수술·큰 부상 후엔 얼마나 늘려야 하나요?', a: '회복기에는 1.2~1.5g/kg까지 권장됩니다. 담당의 지침을 우선하세요.' },
    ]},

    { type: 'sources', items: [
      { label: '한국인 영양소 섭취 기준 2020 — 단백질', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-25' },
      { label: 'ACSM/ADA Position — Nutrition for Athletes', url: 'https://www.acsm.org', org: 'ACSM', accessedAt: '2026-04-25' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
