// posts/situations/digestion-care.js
const post = {
  id: 'H0006',
  sections: [
    { type: 'intro', html: '<p>속이 자주 더부룩하고, 조금만 먹어도 답답하고, 가끔 쓰리기까지 — 이런 위장 불편은 흔하지만 그래서 더 방치되기 쉽습니다. 이 가이드는 소화 불편의 원인부터 생활 교정, 약 활용, 병원에 가야 할 신호까지 한 번에 정리합니다. 증상별 세부 내용은 각 항목의 링크에서 더 깊게 볼 수 있습니다.</p>' },
    { type: 'toc' },

    { type: 'callout', html: '<p>위장 불편은 대부분 큰 병이 아니라 먹는 방식과 생활 리듬에서 옵니다. 하지만 "대부분"이라는 말 안에 가려진 소수의 경고 신호를 놓치지 않는 것 — 이 가이드의 목적은 그 균형을 잡는 것입니다.</p>' },

    { type: 'h2', id: 'map', text: '내 증상이 어디에 해당할까' },
    { type: 'body', html: '<p>위장 불편은 양상에 따라 접근이 조금씩 다릅니다.</p>' },
    { type: 'h3', id: 'fullness', text: '더부룩함·조기 포만감 위주' },
    { type: 'body', html: '<p>식후 명치가 묵직하고 금방 배가 부른 느낌이 중심이면 <a href="/symptoms/indigestion/">소화불량</a>에 가깝습니다. 위 운동이 둔하거나 위가 예민해진 경우가 많습니다.</p>' },
    { type: 'h3', id: 'burning', text: '쓰림·신물 위주' },
    { type: 'body', html: '<p>가슴 쪽이 쓰리고 신물이 올라오는 느낌이 중심이면 위산·역류 문제를 함께 살펴야 합니다. 이 경우 제산제 계열이 도움이 될 수 있습니다.</p>' },
    { type: 'h3', id: 'bowel', text: '배변 변화 동반' },
    { type: 'body', html: '<p>복부 불편이 변비·설사 같은 배변 변화와 함께 오간다면 과민성 장증후군 같은 장 기능 문제도 고려 대상입니다. <a href="/symptoms/constipation/">변비</a>가 같이 있다면 그 부분도 함께 관리합니다.</p>' },

    { type: 'h2', id: 'lifestyle', text: '가장 먼저 바꿀 생활 습관' },
    { type: 'body', html: '<p>약보다 먼저, 그리고 약과 함께 가야 하는 것이 생활 교정입니다.</p>' },
    { type: 'h3', id: 'how-eat', text: '먹는 속도와 양' },
    { type: 'body', html: '<p>천천히 꼭꼭 씹고, 한 번에 많이 먹기보다 양을 나눕니다. 식후 바로 눕거나 곧장 일에 몰입하지 않습니다.</p>' },
    { type: 'h3', id: 'dinner', text: '저녁과 야식' },
    { type: 'body', html: '<p>잠들기 3시간 전에는 식사를 끝냅니다. 늦은 야식은 더부룩함과 역류의 단골 원인입니다.</p>' },
    { type: 'h3', id: 'triggers', text: '자극 요인 줄이기' },
    { type: 'body', html: '<p>기름진 음식·과음·과한 카페인·흡연을 일정 기간 줄여 증상 변화를 관찰합니다. 사람마다 반응하는 음식이 달라서, 본인의 악화 음식을 찾아내는 것이 중요합니다.</p>' },
    { type: 'h3', id: 'stress', text: '스트레스와 수면' },
    { type: 'body', html: '<p>뇌와 위장은 신경으로 연결되어 있어 긴장과 수면 부족이 곧 위 증상으로 옵니다. 가벼운 산책과 규칙적인 수면이 위장 관리에도 도움이 됩니다.</p>' },

    { type: 'h2', id: 'otc', text: '약은 이렇게 활용한다' },
    { type: 'body', html: '<p>증상에 맞춰 일반의약품을 단기간 보조로 쓸 수 있습니다.</p><ul><li><a href="/otc/digestive-enzyme-otc/"><strong>소화효소제</strong></a> — 과식 후 더부룩함 보조.</li><li><a href="/otc/antacid/"><strong>제산제</strong></a> — 속 쓰림·신물이 함께 있을 때.</li><li>위장운동 개선제 — 정체감·조기 포만감이 두드러질 때.</li></ul><p>약은 증상을 덜어줄 뿐 원인을 해결하지는 않습니다. 2주 넘게 약에 계속 의존해야 한다면 원인 확인이 필요합니다.</p>' },

    { type: 'h2', id: 'supplement', text: '영양제는 보조일 뿐' },
    { type: 'body', html: '<p><a href="/supplements/probiotics/">프로바이오틱스</a>나 소화 효소 영양제가 일부 사람에게 도움이 될 수 있지만, 생활 교정을 대신하지는 못합니다. 영양제는 기본기가 갖춰진 위에 얹는 보조로 생각하는 것이 현실적입니다.</p>' },

    { type: 'h2', id: 'product', text: '관련 제품' },
    { type: 'productSlot', productKey: 'digestion' },

    { type: 'h2', id: 'warning', text: '병원에 가야 하는 경고 신호' },
    { type: 'warning', title: '이런 경우는 미루지 마세요', html: '<ul><li>의도하지 않은 체중 감소가 동반될 때</li><li>삼킬 때 걸리거나 아플 때</li><li>검은 변·혈변·토혈이 있을 때</li><li>빈혈이 확인되거나 자꾸 어지러울 때</li><li>밤에 깰 정도의 통증, 점점 심해지는 통증</li><li>40대 이후 처음 생긴 위장 증상이 지속될 때</li><li>가족 중 위암·대장암 병력이 있을 때</li></ul><p>위 신호가 있으면 위내시경 등으로 원인을 확인하는 것이 안전합니다.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '소화제를 늘 가지고 다니며 먹는데 괜찮을까요?', a: '단기 보조로는 괜찮지만, 약 없이 늘 불편하다면 원인을 확인하는 진료가 필요합니다. 약에 대한 의존이 길어지는 것은 그 자체가 점검 신호입니다.' },
      { q: '위가 안 좋으면 죽만 먹어야 하나요?', a: '급성으로 속이 심하게 불편할 때는 부드러운 음식이 도움이 되지만, 장기적으로 죽만 먹을 필요는 없습니다. 천천히 먹고 자극 음식을 조절하면서 균형 잡힌 식사를 하는 것이 낫습니다.' },
      { q: '위장 증상도 스트레스 때문일 수 있나요?', a: '네. 기능성 위장 장애에서 스트레스는 매우 흔한 악화 요인입니다. 검사에서 이상이 없는데 증상이 반복된다면 생활 리듬과 스트레스 관리를 함께 보는 것이 중요합니다.' },
    ] },

    { type: 'sources', items: [
      { label: '질병관리청 국가건강정보포털 — 소화불량', url: 'https://health.kdca.go.kr/', org: '질병관리청' },
      { label: '대한소화기학회 — 소화기 질환 정보', url: 'https://www.gastrokorea.org/', org: '대한소화기학회' },
      { label: 'MSD 매뉴얼 일반인용 — 소화기 증상', url: 'https://www.msdmanuals.com/ko-kr/home', org: 'MSD Manual' },
    ] },

    { type: 'medDisclaimer' },
  ],
}
module.exports = post
