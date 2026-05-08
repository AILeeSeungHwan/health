const post = {
  id: 'T0002',
  calculator: 'bmr',
  sections: [
    { type: 'intro', html: '<p>기초대사량(BMR)은 <strong>가만히 누워 하루 종일 생명만 유지하는 데 필요한 에너지</strong>입니다. 심장·호흡·체온·뇌 활동 같은 기본 기능이 여기에 포함되고, 일반적으로 우리 하루 총 에너지 소비의 60~70%를 차지합니다. 위 계산기는 Mifflin-St Jeor 공식을 기반으로 BMR과 활동 수준을 곱한 하루 총 에너지 소비량(TDEE)까지 보여줘, 감량·유지·증량 전략을 세우는 출발점이 됩니다.</p>' },
    { type: 'callout', html: "<p>다이어트할 때 하루에 얼마나 먹어야 하는지 몰라서 무조건 굶었다. 나중에 기초대사량보다 덜 먹으면 오히려 대사가 느려진다는 걸 알았다. 숫자로 파악하고 나서 식단 계획이 달라졌다.</p>" },

    { type: 'h2', id: 'formula', text: 'Mifflin-St Jeor 공식 — 왜 이걸 쓸까' },
    { type: 'body', html: '<p>과거엔 Harris-Benedict 공식이 표준이었지만, 현대 일반 성인 대상 메타분석에서 <strong>Mifflin-St Jeor가 평균 5% 이상 정확</strong>하다고 보고되면서 미국영양사협회(ADA)도 기본 공식으로 권고합니다.</p><p style="background:#F8FAFC;padding:14px 18px;border-radius:10px;font-family:monospace;font-size:14px;line-height:1.7"><strong>남성</strong>: 10 × kg + 6.25 × cm − 5 × 나이 + 5<br/><strong>여성</strong>: 10 × kg + 6.25 × cm − 5 × 나이 − 161</p>' },

    { type: 'h2', id: 'tdee', text: 'TDEE — 활동 수준까지 반영해야 의미가 있다' },
    { type: 'body', html: '<p>BMR은 "가만히 있을 때"의 최소 에너지입니다. 실제 하루에 쓰는 에너지는 여기에 활동 계수(PAL)를 곱해 구합니다.</p>' },

    { type: 'h3', id: 't-sedentary', text: '비활동적 (×1.2)' },
    { type: 'body', html: '<p>하루 대부분 앉아서 일하고 특별한 운동이 없는 경우. 사무직·학생이 이에 해당합니다.</p>' },

    { type: 'h3', id: 't-light', text: '가벼운 활동 (×1.375)' },
    { type: 'body', html: '<p>주 1~3회 가벼운 운동, 걷기 많은 직업.</p>' },

    { type: 'h3', id: 't-moderate', text: '중간 활동 (×1.55)' },
    { type: 'body', html: '<p>주 3~5회 중강도 운동, 택배·요식업 같은 이동이 많은 직업.</p>' },

    { type: 'h3', id: 't-hard', text: '고활동 (×1.725)' },
    { type: 'body', html: '<p>거의 매일 운동, 육체노동자.</p>' },

    { type: 'h2', id: 'use', text: '감량·유지·증량 전략' },
    { type: 'body', html: '<p>TDEE를 기준으로 목적에 맞게 칼로리를 조정합니다. 극단적 차이는 대사 적응·근손실을 유발하므로 범위를 지키는 것이 핵심입니다.</p>' },

    { type: 'h3', id: 'u-cut', text: '감량 — TDEE − 300~500kcal' },
    { type: 'body', html: '<p>주당 0.5~1kg 감량이 목표 범위입니다. 이보다 큰 결핍은 근손실·요요 위험이 커집니다. 감량 중에는 <strong>단백질을 늘려 근육 보존</strong>이 중요합니다. 필요량은 <a href="/tools/daily-protein/">단백질 계산기</a> 참고.</p>' },

    { type: 'h3', id: 'u-maint', text: '유지 — TDEE 근처' },
    { type: 'body', html: '<p>현 체중을 유지하면서 체성분(근육↑·지방↓) 개선에 집중할 때 선택합니다. 단백질·식이섬유 비율은 늘리고 가공 탄수화물은 줄이는 방향이 일반적입니다.</p>' },

    { type: 'h3', id: 'u-bulk', text: '증량 — TDEE + 200~300kcal' },
    { type: 'body', html: '<p>근력 운동과 병행한 점진적 증량이 이상적입니다. 잉여 칼로리가 너무 크면 지방만 늘어납니다. 단백질은 체중 kg 당 1.6~2.0g까지 고려합니다.</p>' },

    { type: 'h2', id: 'common-miss', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"BMR만 먹으면 살이 빨리 빠진다"</strong> — BMR 미만 섭취는 장기적으로 대사 저하·호르몬 문제·근손실을 유발합니다.</li><li><strong>"활동 계수를 과대평가"</strong> — 운동 1~2시간이 하루 종일의 높은 활동을 의미하지 않습니다. 사무직 + 주 3회 운동은 1.375~1.55 범위가 현실적입니다.</li><li><strong>"TDEE는 고정값"</strong> — 감량하면서 체중이 줄면 BMR·TDEE도 함께 줄어 재계산이 필요합니다.</li></ul>' },

    { type: 'h2', id: 'accuracy', text: '공식 한계와 실제 측정' },
    { type: 'body', html: '<p>공식 추정치는 개인 차이 ±10%가 일반적입니다. 정확한 측정이 필요하면 간접열량측정(Indirect Calorimetry)을 수행하는 병원·스포츠센터 검사를 받을 수 있습니다. 그 외 스마트워치·인바디 기기의 추정치도 <strong>참고값</strong>으로만 사용하세요.</p>' },

    { type: 'h2', id: 'related', text: '관련 계산기' },
    { type: 'body', html: '<ul><li><a href="/tools/bmi/">BMI 계산기</a> — 체형 구간 확인</li><li><a href="/tools/daily-protein/">단백질 권장 섭취량</a> — 감량·증량 시 단백질 기준</li><li><a href="/tools/water-intake/">물 섭취량</a> — 대사가 원활하려면 수분이 기본</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: 'Harris-Benedict와 결과가 다른데 어떤 걸 믿어야 하나요?', a: '최근 연구에서 Mifflin-St Jeor가 더 정확하다고 보고됩니다. 같은 사람에서 두 공식은 100~200kcal 차이가 나는 것이 보통이며 본 계산기는 Mifflin-St Jeor를 따릅니다.' },
      { q: '근육량이 많으면 어떻게 계산해야 하나요?', a: '제지방량(LBM) 기반 Katch-McArdle 공식이 더 적합합니다. 체지방률을 측정한 경우 활용하세요.' },
      { q: '하루 종일 앉아 있는데 활동 계수 1.2면 너무 낮지 않나요?', a: '1.2는 "공식 기본값"으로, 실제 일상 이동·업무 강도에 따라 1.3 수준도 흔합니다. 3~4주 체중 변화로 조정합니다.' },
      { q: '감량 중인데 정체기가 왔습니다.', a: 'BMR·TDEE가 줄어들었거나 활동량이 감소했을 가능성이 높습니다. 재계산 후 300kcal 결핍 유지 + 단백질 확인을 권장합니다.' },
      { q: '월경·생리주기도 영향이 있나요?', a: '배란 후 황체기엔 BMR이 약간 상승하지만 변동폭이 100~200kcal 수준이라 장기 추세 파악이 더 중요합니다.' },
    ]},

    { type: 'sources', items: [
      { label: 'Mifflin-St Jeor Equation (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov', org: 'NIH', accessedAt: '2026-04-25' },
      { label: '한국인 영양소 섭취 기준 2020 — 에너지', url: 'https://www.kns.or.kr', org: '한국영양학회', accessedAt: '2026-04-25' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
