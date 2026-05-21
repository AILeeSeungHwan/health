// posts/otc/antihistamine.js
const post = {
  id: 'O0008',
  sections: [
    { type: 'intro', html: '<p>콧물·재채기·가려움이 시작되면 약국에서 흔히 권하는 게 항히스타민제입니다. 그런데 같은 알레르기약이라도 어떤 건 졸음이 쏟아지고 어떤 건 멀쩡합니다. 이 차이는 <strong>1세대냐 2세대냐</strong>에서 갈립니다. 종류별 특징과 졸음 없이 고르는 법을 정리했습니다.</p>' },
    { type: 'toc' },

    { type: 'callout', html: '<p>예전엔 콧물만 나면 약국에서 주는 대로 먹었는데, 오후 내내 멍하고 졸렸다. 약사에게 "낮에 일해야 한다"고 말했더니 2세대 제품을 권해줬다. 같은 알레르기약도 목적에 맞게 골라야 한다는 걸 그때 알았다.</p>' },

    { type: 'h2', id: 'how', text: '항히스타민제는 어떻게 작용하나' },
    { type: 'body', html: '<p>알레르기 반응이 일어나면 몸에서 <strong>히스타민</strong>이라는 물질이 나옵니다. 이 히스타민이 콧물·재채기·두드러기·가려움을 일으킵니다. 항히스타민제는 히스타민이 작용하지 못하도록 막아 증상을 가라앉힙니다. 즉 원인을 없애는 게 아니라 증상 반응을 차단하는 약입니다.</p>' },

    { type: 'h2', id: 'generations', text: '1세대 vs 2세대, 핵심 차이' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">1세대</th><th style="padding:8px;border:1px solid #ddd">2세대</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">졸음</td><td style="padding:8px;border:1px solid #ddd">강함 (뇌로 잘 넘어감)</td><td style="padding:8px;border:1px solid #ddd">적은 편</td></tr><tr><td style="padding:8px;border:1px solid #ddd">지속 시간</td><td style="padding:8px;border:1px solid #ddd">짧음 (자주 복용)</td><td style="padding:8px;border:1px solid #ddd">긺 (보통 하루 1회)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">대표 성분</td><td style="padding:8px;border:1px solid #ddd">클로르페니라민 등</td><td style="padding:8px;border:1px solid #ddd">세티리진·로라타딘·펙소페나딘 등</td></tr><tr><td style="padding:8px;border:1px solid #ddd">활동 중 사용</td><td style="padding:8px;border:1px solid #ddd">운전·정밀작업엔 부적합</td><td style="padding:8px;border:1px solid #ddd">상대적으로 적합</td></tr></tbody></table><p style="margin-top:8px">낮 동안 또렷하게 활동해야 한다면 2세대를, 밤에 가려움 때문에 잠을 못 잘 때는 졸음이 오히려 도움이 되는 1세대를 쓰기도 합니다. 목적에 따라 선택이 달라집니다.</p>' },

    { type: 'h2', id: 'when-use', text: '어떤 증상에 쓰나' },
    { type: 'body', html: '<ul><li><strong>알레르기 비염</strong> — 맑은 콧물·재채기·코 가려움.</li><li><strong>두드러기·피부 가려움</strong> — 갑작스러운 두드러기 완화.</li><li><strong>가벼운 알레르기 결막염</strong> — 눈 가려움 동반 시.</li></ul><p>다만 코막힘이 주된 증상이라면 항히스타민제만으로는 부족할 수 있어, 비충혈 제거 성분이나 비강 스프레이가 함께 고려됩니다. 누런 콧물·발열이 동반된 세균성 부비동염이 의심되면 알레르기약이 아닌 진료가 필요합니다.</p>' },

    { type: 'h2', id: 'caution', text: '복용 시 주의할 점' },
    { type: 'warning', title: '안전하게 쓰려면', html: '<ul><li>1세대 복용 후에는 운전·기계 조작·중요한 작업을 피합니다.</li><li>술과 함께 먹으면 졸음·진정 작용이 심해집니다.</li><li>고령자는 1세대 복용 시 어지럼·입마름·배뇨 곤란 등이 나타나기 쉬워 주의가 필요합니다.</li><li>녹내장, 전립선 비대증이 있는 경우 일부 항히스타민제는 증상을 악화시킬 수 있어 약사·의사와 상의하세요.</li><li>임신·수유 중이거나 어린이에게 쓸 때는 성분·용량을 반드시 확인합니다.</li><li>여러 감기약·콧물약에 항히스타민 성분이 중복으로 들어 있을 수 있으니 함께 먹는 약을 확인하세요.</li></ul>' },

    { type: 'h2', id: 'see-doctor', text: '병원에 가야 하는 경우' },
    { type: 'body', html: '<ul><li>일반약을 써도 증상이 2주 이상 지속되거나 반복될 때</li><li>숨쉬기 힘들거나 입술·얼굴이 붓는 등 심한 알레르기 반응이 있을 때(즉시 응급 진료)</li><li>알레르기 원인을 정확히 알고 싶거나, 매년 같은 시기에 심하게 반복될 때</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '2세대 알레르기약은 졸음이 전혀 없나요?', a: '1세대보다 훨씬 적지만, 사람에 따라 약간의 졸음을 느낄 수 있습니다. 처음 복용할 때는 운전 등 집중이 필요한 일을 하기 전 자신의 반응을 확인해 보는 것이 좋습니다.' },
      { q: '매일 먹어도 괜찮나요?', a: '알레르기 비염처럼 증상이 지속되는 경우 의사 판단에 따라 꾸준히 복용하기도 합니다. 다만 스스로 장기간 매일 복용하고 있다면 한 번은 진료로 원인과 치료 방향을 점검하는 것이 좋습니다.' },
      { q: '내성이 생겨서 효과가 떨어지나요?', a: '항히스타민제는 일반적으로 뚜렷한 내성이 잘 생기지 않는 것으로 알려져 있습니다. 효과가 떨어졌다고 느껴진다면 증상의 원인이나 종류가 바뀐 것은 아닌지 확인이 필요합니다.' },
    ] },

    { type: 'sources', items: [
      { label: '식품의약품안전처 — 항히스타민제 안전사용 정보', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처' },
      { label: '질병관리청 국가건강정보포털 — 알레르기 비염', url: 'https://health.kdca.go.kr/', org: '질병관리청' },
      { label: 'MSD 매뉴얼 일반인용 — 항히스타민제', url: 'https://www.msdmanuals.com/ko-kr/home', org: 'MSD Manual' },
    ] },

    { type: 'medDisclaimer' },
  ],
}
module.exports = post
