const post = {
  id: 'P0002',
  sections: [
    { type: 'intro', html: '<p><strong>한눈에 보기:</strong> 유청 단백질은 우유 단백질의 약 20%를 차지하는 유청(whey) 성분을 분리·농축한 보충제로, 근육 합성에 유리한 필수 아미노산(BCAA)이 풍부합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'types', text: 'WPC · WPI · WPH 차이' },
    { type: 'body', html: '<ul><li><strong>WPC (농축)</strong> — 단백질 70~80%, 지방·탄수화물 포함, 유당 존재</li><li><strong>WPI (분리)</strong> — 단백질 85~90%, 유당 거의 없음, 가격↑</li><li><strong>WPH (가수분해)</strong> — 소화 흡수 빠름, 쓴맛·가격 ↑</li></ul>' },

    { type: 'h2', id: 'dosage', text: '하루 섭취량' },
    { type: 'info', html: '<p>일반 성인 단백질 권장량: 체중 kg 당 0.8g. 근력 운동 시 1.2~1.7g/kg. 식사와 보충제를 합산해 계산하세요.</p>' },

    { type: 'h2', id: 'timing', text: '복용 시점' },
    { type: 'body', html: '<p>운동 후 30분~2시간 이내 섭취가 많이 권장되지만, 하루 총량이 더 중요합니다.</p>' },

    { type: 'h2', id: 'caution', text: '주의' },
    { type: 'warning', html: '<p>유당 불내증이면 WPI·WPH 선택. 신장 기능 저하자는 고단백 섭취 전 담당의 상담이 필요합니다.</p>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: '식사 대용 가능한가요?', a: '단일 식사 대용으로는 미량영양소·섬유소가 부족합니다. 보조로 활용하세요.' },
      { q: '여자도 먹어도 되나요?', a: '단백질은 성별 무관합니다. 하루 총 섭취량 범위 내에서 보조합니다.' },
    ]},

    { type: 'h2', id: 'related-tool', text: '관련 계산기' },
    { type: 'body', html: '<p><a href="/tools/daily-protein/">단백질 권장 섭취량 계산기</a>로 본인 필요량을 먼저 확인해 보세요.</p>' },

    { type: 'productSlot', productKey: 'whey-protein' },

    { type: 'medDisclaimer' }
  ]
}

module.exports = post
