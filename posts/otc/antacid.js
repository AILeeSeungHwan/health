// posts/otc/antacid.js
const post = {
  id: 'O0005',
  sections: [
    {
      type: 'intro',
      html: '<p>과식, 기름진 회식, 공복에 커피 — 위가 쓰릴 때 손이 가는 것들을 정리하다 보니 제산제를 꽤 자주 찾는다는 걸 알았다. 겔포스, 알마겔, 개비스콘, 노루모… 약국 제산제 코너만 봐도 종류가 많다. 어떤 상황에 어떤 걸 골라야 하는지 성분부터 파악해두면 편하다.</p><div class="meta-row"><span class="tag">일반의약품</span> <span class="tag">성분: 수산화알루미늄·수산화마그네슘·탄산칼슘 등</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'types', text: '제산제 종류 — 무슨 성분인지 알면 선택이 쉽다' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">유형</th><th style="padding:8px;border:1px solid #ddd">대표 성분</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">주의</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">금속 제산제</td><td style="padding:8px;border:1px solid #ddd">수산화알루미늄<br>수산화마그네슘</td><td style="padding:8px;border:1px solid #ddd">위산 직접 중화. 빠른 효과.</td><td style="padding:8px;border:1px solid #ddd">변비(Al) vs 설사(Mg) 균형</td></tr><tr><td style="padding:8px;border:1px solid #ddd">탄산칼슘</td><td style="padding:8px;border:1px solid #ddd">CaCO₃</td><td style="padding:8px;border:1px solid #ddd">빠른 중화, 칼슘 보충 부가 효과</td><td style="padding:8px;border:1px solid #ddd">반동성 위산 분비 (칼슘 과잉 시)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">알긴산</td><td style="padding:8px;border:1px solid #ddd">알긴산나트륨</td><td style="padding:8px;border:1px solid #ddd">위 내용물 위에 막을 형성 → 역류 억제</td><td style="padding:8px;border:1px solid #ddd">역류성 식도염에 특히 유효</td></tr><tr><td style="padding:8px;border:1px solid #ddd">H2 차단제</td><td style="padding:8px;border:1px solid #ddd">파모티딘·라니티딘</td><td style="padding:8px;border:1px solid #ddd">위산 분비 자체를 줄임. 더 오래 작용.</td><td style="padding:8px;border:1px solid #ddd">신기능 저하 시 주의</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'my-experience', text: '상황별로 골라 쓰게 된 이유' },
    {
      type: 'callout',
      html: '<p>야식 후 속이 쓰릴 때는 겔포스를 먹으면 빠르게 가라앉았다. 그런데 역류가 올라오는 느낌엔 겔포스가 별로 안 들어서 개비스콘으로 바꿨다. 알긴산 성분이 위 내용물 위에 막을 형성한다는 걸 나중에 알았다. 제산제도 증상에 따라 선택이 다르다.</p>',
    },

    { type: 'h2', id: 'brands', text: '주요 제품 비교' },
    {
      type: 'body',
      html: '<p><strong>겔포스 (보령제약)</strong><br>수산화알루미늄+수산화마그네슘+이메치콘 복합. 과식·위산과다·속쓰림에 가장 많이 쓰이는 OTC 제산제. 변비 성향인 분은 수산화마그네슘이 도움이 되고, 설사 성향은 조심. 1회 1포(현탁액) 또는 정제.</p><p><strong>알마겔(알마겔에프) (알보젠코리아)</strong><br>수산화알루미늄 마그네슘 복합. 겔포스와 유사한 계열. 성인 기준 식사 전·취침 전 복용 권장.</p><p><strong>개비스콘 (레킷벤키저)</strong><br>알긴산나트륨+탄산수소나트륨. 역류성 식도염·트림 후 신물 올라올 때 탁월하다. 위 내용물 위에 물리적 막을 형성해 역류를 물리적으로 막는 방식. 위산 중화 능력은 약하다.</p><p><strong>노루모 (삼성제약)</strong><br>탄산수소나트륨+탄산칼슘 계열. 빠른 효과. 단, 고염 식이 제한 중인 분(심부전·신부전)은 나트륨 함량 확인 필요.</p>',
    },

    { type: 'h2', id: 'when-to-use', text: '증상별 선택 가이드' },
    {
      type: 'info',
      html: '<ul><li><strong>과식·급격한 속쓰림</strong> → 겔포스·알마겔 (빠른 중화)</li><li><strong>역류성 식도염·눕거나 식후 신물 올라옴</strong> → 개비스콘 (알긴산 막)</li><li><strong>반복적인 위산 과다</strong> → H2 차단제(파모티딘) — 더 오래 작용, 식전 복용</li><li><strong>위염 진단 후 관리</strong> → 의사 처방약(PPI)이 더 적합</li></ul>',
    },

    { type: 'h2', id: 'warnings', text: '제산제 남용 주의' },
    {
      type: 'warning',
      html: '<ul><li>제산제는 증상 완화제지 위장 질환 치료제가 아니다. 2주 이상 지속적으로 필요하다면 내시경 검사 받기.</li><li>수산화알루미늄 장기 복용 → 인 흡수를 방해해 뼈 약화 가능.</li><li>신장 기능 저하 → 마그네슘·알루미늄 배설 감소로 주의 필요.</li><li>제산제와 다른 약의 간격 — 제산제는 다른 약 흡수를 방해할 수 있어 2시간 간격 권장.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '역류성 식도염엔 겔포스와 개비스콘 중 어느 게 더 나은가요?', a: '역류 억제에는 개비스콘(알긴산 성분)이 더 적합합니다. 겔포스는 위산 중화에 강하고, 개비스콘은 역류 자체를 물리적으로 막는 방식입니다.' },
        { q: '식전에 먹나요, 식후에 먹나요?', a: '제품마다 다릅니다. 속쓰림이 이미 있다면 즉시 복용이 맞고, 예방 목적(식전 위산 분비 억제)이라면 식사 30분 전이 더 효과적입니다. 제품 설명서를 따르세요.' },
        { q: 'H2 차단제(파모티딘)와 제산제 차이가 뭔가요?', a: '제산제는 위산을 직접 중화하고, H2 차단제는 위산 분비 자체를 줄입니다. H2 차단제가 더 오래 작용하지만 효과 발현이 느립니다. 급성에는 제산제, 예방적으론 H2 차단제가 더 맞습니다.' },
      ],
    },

    { type: 'productSlot', productKey: 'antacid' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 제산제 성분 정보', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Antacids', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
