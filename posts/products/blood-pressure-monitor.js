// posts/products/blood-pressure-monitor.js
const post = {
  id: 'P0003',
  sections: [
    { type: 'intro', html: '<p>혈압은 병원에서 한 번 잰 숫자보다, 평소 집에서 꾸준히 잰 기록이 더 많은 것을 말해줍니다. 가정용 혈압계는 그래서 의외로 중요한 건강 도구입니다. 커프식과 손목식의 차이, 정확하게 재는 법, 고를 때 볼 점을 정리했습니다.</p>' },
    { type: 'toc' },

    { type: 'callout', html: '<p>병원에만 가면 혈압이 높게 나오던 사람이 집에서 며칠 재보니 정상에 가까웠다. 반대로 집에서 잰 값이 더 높게 나오는 사람도 있다. 한 번의 측정보다 여러 날의 기록이 진짜 내 혈압에 가깝다.</p>' },

    { type: 'h2', id: 'why', text: '집에서 혈압을 재는 이유' },
    { type: 'body', html: '<p>혈압은 하루에도 오르내리고, 긴장하면 올라갑니다. 병원에서만 높게 나오는 "백의 고혈압", 반대로 병원에서는 정상인데 평소엔 높은 "가면 고혈압"도 있습니다. 집에서 같은 조건으로 꾸준히 재면 이런 착시를 걷어내고 평소 혈압의 흐름을 볼 수 있습니다. 고혈압을 관리 중이라면 약의 효과를 확인하는 데도 가정 측정이 도움이 됩니다.</p>' },

    { type: 'h2', id: 'types', text: '커프식 vs 손목식' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">위팔(커프)식</th><th style="padding:8px;border:1px solid #ddd">손목식</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">정확도·일관성</td><td style="padding:8px;border:1px solid #ddd">대체로 안정적</td><td style="padding:8px;border:1px solid #ddd">자세 영향을 많이 받음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">사용 편의</td><td style="padding:8px;border:1px solid #ddd">팔을 걷어야 함</td><td style="padding:8px;border:1px solid #ddd">간편, 휴대 좋음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">추천 대상</td><td style="padding:8px;border:1px solid #ddd">가정 상시 관리용</td><td style="padding:8px;border:1px solid #ddd">휴대·보조용</td></tr></tbody></table><p style="margin-top:8px">일반적으로 가정에서 꾸준히 관리할 목적이라면 위팔에 감는 커프식이 무난합니다. 손목식은 측정 시 손목을 심장 높이에 정확히 맞춰야 해서 자세에 따라 값이 흔들리기 쉽습니다.</p>' },

    { type: 'h2', id: 'choose', text: '고를 때 확인할 점' },
    { type: 'body', html: '<ul><li><strong>커프 크기</strong> — 팔 둘레에 맞는 커프를 써야 정확합니다. 팔이 굵은 편이면 큰 커프 호환 여부를 확인하세요.</li><li><strong>검증된 제품인지</strong> — 의료기기로 허가·검증된 제품을 고릅니다.</li><li><strong>기록·연동 기능</strong> — 측정값 저장, 평균 표시, 앱 연동이 있으면 추세 관리가 쉽습니다.</li><li><strong>불규칙 맥박 표시</strong> — 부정맥 의심 신호를 알려주는 기능이 있으면 참고가 됩니다.</li><li><strong>화면 가독성</strong> — 고령자가 쓴다면 숫자가 크고 조작이 단순한 제품이 좋습니다.</li></ul>' },

    { type: 'h2', id: 'how-to', text: '정확하게 재는 법' },
    { type: 'body', html: '<p>같은 조건에서 재는 것이 핵심입니다.</p><ul><li>측정 전 5분 정도 안정을 취합니다.</li><li>커피·흡연·운동 직후, 측정 직전 화장실을 참는 상태는 피합니다.</li><li>등받이에 등을 기대고 다리를 꼬지 않고 앉습니다.</li><li>팔을 책상에 올려 커프가 심장 높이에 오게 합니다.</li><li>측정 중에는 말하지 않습니다.</li><li>1~2분 간격으로 2회 재고 평균을 봅니다.</li><li>아침(일어나 약 먹기 전·소변 후)과 저녁, 매일 같은 시간대에 기록합니다.</li></ul>' },

    { type: 'h2', id: 'numbers', text: '숫자를 해석할 때 주의' },
    { type: 'warning', html: '<p>가정 측정값은 의료진의 진단을 대체하지 않습니다. 한두 번 높게 나왔다고 자가 진단하거나, 반대로 정상으로 나왔다고 안심하지 마세요. 측정값은 추세로 기록해 두고, 지속적으로 높거나 낮게 나오거나 두통·가슴 통증·심한 어지럼이 동반되면 진료를 받으세요. 복용 중인 혈압약을 임의로 조절하지 않습니다.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '손목형은 부정확해서 쓰면 안 되나요?', a: '쓰면 안 되는 것은 아닙니다. 다만 손목을 심장 높이에 정확히 맞춰야 하고 자세 영향을 크게 받습니다. 가정 상시 관리는 위팔 커프식이 더 일관적이고, 손목식은 휴대·보조용으로 적합합니다.' },
      { q: '잴 때마다 숫자가 다른데 고장인가요?', a: '혈압은 원래 잴 때마다 변동합니다. 그래서 1~2회 측정 후 평균을 보고, 매일 같은 시간대에 기록해 추세로 판단합니다. 측정 조건이 들쭉날쭉하면 값도 흔들립니다.' },
      { q: '얼마나 자주 재야 하나요?', a: '고혈압을 관리 중이라면 보통 아침·저녁 하루 2회 기록을 권합니다. 구체적인 빈도와 목표 수치는 진료 시 의사와 정하는 것이 좋습니다.' },
    ] },

    { type: 'sources', items: [
      { label: '대한고혈압학회 — 가정혈압 측정 안내', url: 'https://www.koreanhypertension.org/', org: '대한고혈압학회' },
      { label: '질병관리청 국가건강정보포털 — 고혈압', url: 'https://health.kdca.go.kr/', org: '질병관리청' },
      { label: '식품의약품안전처 — 의료기기 안전사용 정보', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처' },
    ] },

    { type: 'medDisclaimer' },
  ],
}
module.exports = post
