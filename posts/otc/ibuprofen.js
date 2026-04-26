const post = {
  id: 'O0002',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 이부프로펜은 대표적인 비스테로이드성 소염진통제(NSAIDs)로 염증성 통증·관절통·생리통에 자주 사용됩니다. 위장 부담·신장 영향이 있어 공복 복용·장기 사용에는 주의가 필요합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'indications', text: '어떤 증상에 쓰이나' },
    { type: 'body', html: '<p>식약처 등록 적응증: 두통·치통·생리통·근육통·관절통, 감기로 인한 발열·통증 완화.</p>' },

    { type: 'h2', id: 'mechanism', text: '주성분과 작용' },
    { type: 'body', html: '<p>이부프로펜은 사이클로옥시게나제(COX) 효소를 억제해 프로스타글란딘 생성을 줄여 통증·염증·발열을 완화합니다. 아세트아미노펜과 달리 말초 염증에도 효과가 있습니다.</p>' },

    { type: 'h2', id: 'dosage', text: '용법·용량 (식약처 표기)' },
    { type: 'info', html: '<p><strong>성인:</strong> 1회 200~400mg, 4~6시간 간격, 1일 최대 1200mg(OTC 기준).</p><p>반드시 음식과 함께 복용하는 것이 위장 부담을 줄이는 데 도움이 됩니다.</p>' },

    { type: 'h2', id: 'side-effects', text: '부작용' },
    { type: 'warning', html: '<ul><li>속쓰림·소화불량·위장 출혈(드물지만 위험)</li><li>신기능 저하</li><li>혈압 상승</li><li>드물게 과민반응</li></ul>' },

    { type: 'h2', id: 'contraindications', text: '복용 금기' },
    { type: 'warning', html: '<ul><li>소화성 궤양 병력</li><li>중증 신장·간장애</li><li>심부전</li><li>아스피린·다른 NSAIDs 과민반응 병력</li><li>임신 말기(3분기)</li></ul>' },

    { type: 'h2', id: 'interactions', text: '약물 상호작용' },
    { type: 'warning', html: '<p>항응고제(와파린)·아스피린·일부 고혈압약(ACE 억제제·ARB)·리튬·메토트렉세이트와 병용 시 주의. 같이 복용 시 반드시 약사와 상의하세요.</p>' },

    { type: 'h2', id: 'pregnancy', text: '임산부·수유부·소아 주의' },
    { type: 'warning', html: '<p>임신 말기 사용은 태아 순환계에 영향을 줄 수 있어 금기입니다. 수유 중 단기 사용은 일반적으로 허용되나 담당의 상담이 안전합니다.</p>' },

    { type: 'h2', id: 'alternatives', text: '비슷한 의약품' },
    { type: 'body', html: '<ul><li><a href="/otc/tylenol-acetaminophen/">아세트아미노펜</a> — 위장·신장 부담이 민감하다면 대안.</li></ul>' },

    { type: 'h2', id: 'related-symptoms', text: '관련 증상' },
    { type: 'body', html: '<ul><li><a href="/symptoms/headache/">두통</a></li><li><a href="/symptoms/migraine/">편두통</a></li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '공복에 먹어도 되나요?', a: '위장 자극이 있어 식사와 함께 또는 식후 복용이 권장됩니다.' },
      { q: '타이레놀과 같이 먹어도 되나요?', a: '성분이 다르므로 상호 간섭은 적습니다. 다만 용량 관리를 위해 약사 상의를 권장합니다.' },
      { q: '어린이도 먹을 수 있나요?', a: '6개월 이상 어린이 전용 시럽·현탁제가 있습니다. 임의로 성인 정제를 주지 마세요.' },
    ]},

    { type: 'productSlot', productKey: 'ibuprofen-otc' },

    { type: 'sources', items: [
      { label: '식약처 의약품안전나라 — 이부프로펜 제제', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-04-24' },
      { label: '국가건강정보포털 — NSAIDs 안전 사용', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-04-24' },
    ]},

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
