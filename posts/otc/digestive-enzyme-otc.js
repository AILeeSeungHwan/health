// posts/otc/digestive-enzyme-otc.js
const post = {
  id: 'O0006',
  sections: [
    {
      type: 'intro',
      html: '<p>명절 대가족 식사, 야식 치킨, 갑자기 많이 먹은 날 — 소화가 안 되는 느낌, 더부룩함, 트림이 계속 나올 때 훼스탈이나 베아제를 찾는다. 소화제는 일상적으로 많이 쓰이지만 어떤 차이가 있는지는 생각보다 잘 모르는 경우가 많다. 성분 차이를 알면 상황에 따라 더 잘 고를 수 있다.</p><div class="meta-row"><span class="tag">일반의약품</span> <span class="tag">성분: 소화 효소 복합제</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'why-digestive', text: '소화제가 필요한 순간 — 경험으로 알게 된 것들' },
    {
      type: 'callout',
      html: '<p>기름진 삼겹살을 많이 먹은 날 위가 꽉 찬 느낌이 심했다. 훼스탈을 먹었더니 30분도 안 돼서 트림이 나오면서 편해졌다. 소화 효소가 실제로 음식 분해를 돕는다는 게 체감됐다. 반면 단순 더부룩함에는 소화제보다 물 한 잔이 더 빠를 때도 있다.</p>',
    },

    { type: 'h2', id: 'enzymes', text: '소화 효소 종류와 역할' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">효소</th><th style="padding:8px;border:1px solid #ddd">분해 대상</th><th style="padding:8px;border:1px solid #ddd">많이 먹었을 때</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">아밀라제(Amylase)</td><td style="padding:8px;border:1px solid #ddd">탄수화물(전분)</td><td style="padding:8px;border:1px solid #ddd">밥·떡·빵·면</td></tr><tr><td style="padding:8px;border:1px solid #ddd">프로테아제(Protease)</td><td style="padding:8px;border:1px solid #ddd">단백질</td><td style="padding:8px;border:1px solid #ddd">고기·콩류</td></tr><tr><td style="padding:8px;border:1px solid #ddd">리파아제(Lipase)</td><td style="padding:8px;border:1px solid #ddd">지방</td><td style="padding:8px;border:1px solid #ddd">삼겹살·튀김·치킨</td></tr><tr><td style="padding:8px;border:1px solid #ddd">셀룰라아제</td><td style="padding:8px;border:1px solid #ddd">식물성 섬유</td><td style="padding:8px;border:1px solid #ddd">채소·나물류</td></tr><tr><td style="padding:8px;border:1px solid #ddd">락타아제</td><td style="padding:8px;border:1px solid #ddd">유당(유제품)</td><td style="padding:8px;border:1px solid #ddd">우유·치즈 (유당불내증)</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'brands', text: '훼스탈 vs 베아제 vs 닥터베아제 — 뭐가 다른가' },
    {
      type: 'body',
      html: '<p><strong>훼스탈 골드정 (한독)</strong><br>판크레아틴(동물성 췌장 효소) + 담즙 추출물(UDCA 포함) + 셀룰라아제. 지방 소화에 특히 강하다. 기름진 식사 후라면 훼스탈 계열이 더 효과적인 이유다. 동물 유래 성분이라 채식주의자에겐 맞지 않을 수 있다.</p><p><strong>베아제 (일양약품)</strong><br>판크레아틴 + 아밀라제 + 셀룰라아제 + 리마아제 복합. 광범위한 음식 소화에 대응. 훼스탈보다 종합적인 느낌이 있고, 지방 소화 외 탄수화물·섬유 분해에도 고르게 효과를 기대할 수 있다.</p><p><strong>닥터베아제 (일양약품)</strong><br>베아제 업그레이드 버전. 소화 효소 함량을 높이고 가스 배출 성분(시메티콘 등) 추가. 식사 후 더부룩함과 가스가 모두 있을 때.</p><p><strong>훈탁 (보령제약)</strong><br>판크레아틴 기반. 가격이 합리적인 편.</p>',
    },

    { type: 'h2', id: 'how-to-take', text: '소화제 언제, 어떻게 먹어야 효과적인가' },
    {
      type: 'info',
      html: '<p>소화 효소는 음식이 소화 중일 때 작용해야 한다. 식후 30분 이내 복용이 효과적이다.</p><ul><li>이미 소화가 된 후 한참 지나서 먹으면 효과 없음</li><li>증상이 생기기 전 예방으로 먹기보다 증상 생겼을 때 복용</li><li>물 충분히 마시면서 — 효소가 위장 내에서 잘 섞이게</li></ul>',
    },

    { type: 'h2', id: 'not-digest', text: '소화제로 해결 안 되는 경우' },
    {
      type: 'warning',
      html: '<p>소화제를 먹어도 안 나아지거나 반복된다면 단순 과식이 아닐 수 있다.</p><ul><li>위염·위궤양 — 헬리코박터 파일로리 검사 고려</li><li>역류성 식도염 — 제산제·PPI 치료 필요</li><li>과민성 대장 증후군 — 소화제보다 식이 조절이 핵심</li><li>담석증 — 식후 우상복부 통증이 지속되면 초음파 검사</li></ul><p>소화제로 2주 이상 버티는 것은 원인을 방치하는 것이다.</p>',
    },

    {
      type: 'faq',
      items: [
        { q: '소화제는 식전에 먹나요, 식후에 먹나요?', a: '음식이 소화 중일 때 작용해야 효과가 있으므로 식사 직후 또는 식사 중 복용이 가장 효과적입니다. 식전 복용은 의미가 없습니다.' },
        { q: '소화제를 자주 먹으면 의존성이 생기나요?', a: '소화 효소 자체의 의존성은 없습니다. 다만 반복적으로 필요하다면 소화 기능에 문제가 있다는 신호일 수 있어 진단을 받는 게 낫습니다.' },
        { q: '훼스탈이 잘 안 들을 때는요?', a: '훼스탈은 지방 소화에 강하지만 위장의 운동 기능이 저하된 경우(기능성 소화불량)에는 소화 효소만으로 해결이 안 됩니다. 이 경우 위장 운동 촉진제가 필요할 수 있어 약사 상담이 좋습니다.' },
      ],
    },

    { type: 'productSlot', productKey: 'digestive-otc' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 소화효소제 허가 정보', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Digestive Enzymes', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
