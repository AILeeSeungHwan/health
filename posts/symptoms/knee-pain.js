// posts/symptoms/knee-pain.js
const post = {
  id: 'S0009',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 무릎 통증은 퇴행성 관절염, 반월상연골 손상, 슬개골 연골연화증, 인대 손상 등 다양한 원인으로 발생합니다. 나이·활동 수준·통증 위치·부종 여부로 원인을 어느 정도 좁힐 수 있으며, 연골 재생 가능성은 손상 정도와 나이에 따라 달라집니다.</p><div class="meta-row"><span class="tag">부위: 무릎·연골</span> <span class="tag tag-medium">심각도: 중간</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>계단을 내려갈 때마다 왼쪽 무릎에서 뚝 소리가 났다. 연골 문제인지 힘줄 문제인지 구분도 못 하면서 그냥 버텼다. 통증 위치와 소리 패턴으로 어느 정도 원인을 좁힐 수 있다는 걸 알고 나서야 제대로 된 방향으로 치료를 시작했다.</p>" },


    { type: 'h2', id: 'causes', text: '무릎 통증 주요 원인' },
    {
      type: 'body',
      html: '<ul><li><strong>퇴행성 관절염(골관절염)</strong> — 무릎 연골이 서서히 닳아 뼈끼리 마찰. 50대 이상에서 흔하며 계단 오르내릴 때, 오래 걷거나 서 있을 때 악화. 국내 60대 이상 X선 기준 유병률 약 35%.</li><li><strong>반월상연골(반달연골) 손상</strong> — 무릎 안쪽·바깥쪽 쿠션 역할 연골이 파열. 젊은 층은 운동 중 비틀림 외상, 중장년층은 쪼그려 앉기·계단 동작으로 발생. 무릎이 잠기거나(locking) 튀는 느낌이 특징.</li><li><strong>슬개골 연골연화증</strong> — 슬개골(무릎뼈) 아래 연골이 연해지고 손상. 주로 10~30대 여성, 계단·앉아서 일어나기 시 무릎 앞쪽 통증.</li><li><strong>전방십자인대(ACL) 손상</strong> — 점프 착지·방향 전환 시 "뚝" 소리와 함께 극심한 통증·급격한 부종. 스포츠 부상 빈번.</li><li><strong>장경인대 증후군(IT band syndrome)</strong> — 달리기·사이클 후 무릎 바깥쪽 통증. 오버유스 손상.</li><li><strong>통풍 관절염</strong> — 요산 결정 침착. 갑작스러운 극심한 통증·발적·열감. 주로 엄지발가락·발목이지만 무릎도 가능.</li></ul>',
    },

    { type: 'h2', id: 'location', text: '통증 위치로 원인 추정' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">위치</th><th style="padding:8px;border:1px solid #ddd">의심 원인</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">무릎 앞쪽(슬개골 주변)</td><td style="padding:8px;border:1px solid #ddd">슬개골 연골연화증, 슬개대퇴 증후군</td></tr><tr><td style="padding:8px;border:1px solid #ddd">무릎 안쪽(내측)</td><td style="padding:8px;border:1px solid #ddd">퇴행성 관절염(내측 우선), 내측 반월상연골 손상, MCL 손상</td></tr><tr><td style="padding:8px;border:1px solid #ddd">무릎 바깥쪽(외측)</td><td style="padding:8px;border:1px solid #ddd">장경인대 증후군, 외측 반월상연골 손상, LCL 손상</td></tr><tr><td style="padding:8px;border:1px solid #ddd">무릎 전체 부종</td><td style="padding:8px;border:1px solid #ddd">ACL 파열, 반월상연골 파열, 관절 내 혈종</td></tr><tr><td style="padding:8px;border:1px solid #ddd">무릎 뒤쪽 혹</td><td style="padding:8px;border:1px solid #ddd">베이커 낭종(Baker&#39;s cyst)</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'home-care', text: '집에서 해볼 수 있는 대처' },
    {
      type: 'body',
      html: '<p><strong>RICE 원칙 (급성기)</strong>: Rest(안정) → Ice(냉찜질 15분, 수건 감싸기) → Compression(압박붕대) → Elevation(다리 올리기).</p><p><strong>근력 강화 운동 (아급성~만성기)</strong>:</p><ul><li><em>대퇴사두근 등척성 운동</em>: 앉거나 누워서 무릎을 쭉 펴고 5~10초 유지.</li><li><em>스트레이트 레그 레이즈</em>: 누워 한쪽 다리를 30~45° 들고 5초 유지.</li><li><em>의자 스쿼트(앉아서 일어나기)</em>: 관절 자극 없이 대퇴근 강화.</li></ul><p><strong>체중 관리</strong>: 체중 1kg 감량 시 무릎 관절 부하가 약 3~4kg 줄어드는 것으로 알려져 있습니다.</p><p><strong>금지 동작</strong>: 급성기 쪼그려 앉기, 무릎 꿇기, 계단 반복 오르내리기.</p>',
    },

    { type: 'h2', id: 'injections', text: '연골 재생 주사 종류' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">종류</th><th style="padding:8px;border:1px solid #ddd">기전</th><th style="padding:8px;border:1px solid #ddd">비고</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">스테로이드 주사</td><td style="padding:8px;border:1px solid #ddd">염증·통증 단기 억제</td><td style="padding:8px;border:1px solid #ddd">효과 빠르지만 반복 시 연골 손상 우려, 연 3~4회 제한</td></tr><tr><td style="padding:8px;border:1px solid #ddd">히알루론산 주사(연골주사)</td><td style="padding:8px;border:1px solid #ddd">관절액 점성 보완, 윤활</td><td style="padding:8px;border:1px solid #ddd">건강보험 급여(K-L grade 2 이상). 효과 4~6개월</td></tr><tr><td style="padding:8px;border:1px solid #ddd">PRP(혈소판풍부혈장)</td><td style="padding:8px;border:1px solid #ddd">성장인자로 조직 재생 보조</td><td style="padding:8px;border:1px solid #ddd">비급여. 근거 아직 한정적</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">연골은 혈관이 없어 완전 재생이 매우 어렵습니다. 주사는 증상 완화와 진행 억제를 목표로 합니다.</p>',
    },

    { type: 'h2', id: 'when-doctor', text: '병원에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>외상 후 갑자기 심한 부종·멍·관절 불안정감 (인대 파열 의심 — 빠른 진료)</li><li>무릎이 잠기거나(lock) 걸리는 느낌 (반월상연골 파열 의심)</li><li>보존 치료 4~6주에도 통증·기능 개선 없음</li><li>50대 이상 계단에서 심한 통증 (퇴행성 관절염 단계 확인 필요)</li><li>갑작스러운 발적·열감·극심한 통증 (통풍·감염성 관절염 감별)</li></ul>',
    },

    { type: 'h2', id: 'supplements', text: '도움될 수 있는 영양제' },
    {
      type: 'body',
      html: '<ul><li><a href="/supplements/glucosamine/"><strong>글루코사민·콘드로이친</strong></a> — 연골 성분 보충 보조. 식약처 기능성 인정 항목에 포함. 3~6개월 이상 복용 시 일부에서 통증 완화 보고. 개인차 있음.</li><li><a href="/supplements/msm/"><strong>MSM(메틸설포닐메탄)</strong></a> — 글루코사민과 병용 시 더 효과적이라는 연구 있음.</li><li><a href="/supplements/omega-3/"><strong>오메가3</strong></a> — 만성 염증 관리 보조.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '무릎 관절염은 수술 외에 방법이 없나요?',
          a: '초기~중등도 퇴행성 관절염은 체중 감량, 대퇴근 강화 운동, 히알루론산 주사, 약물 치료로 상당히 오래 수술 없이 관리 가능합니다. 말기(K-L grade 4) 또는 기능 장애가 심각할 때 인공관절 치환술을 고려합니다.',
        },
        {
          q: '글루코사민은 얼마나 먹어야 효과가 있나요?',
          a: '일반적으로 하루 1,500mg 글루코사민을 최소 3~6개월 복용해야 효과 여부를 판단할 수 있습니다. 당뇨병 환자는 혈당 영향 가능성이 있어 의사·약사와 상담 후 복용하세요.',
        },
        {
          q: '무릎MRI는 꼭 필요한가요?',
          a: '연골·인대·반월상연골 손상을 정확히 보려면 MRI가 최선입니다. 단, 단순 퇴행성 관절염 초기 진단은 X선으로 충분한 경우가 많습니다. 신경 증상이 없으면 X선 먼저, 이후 MRI 여부를 의사와 결정하는 것이 합리적입니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 — 무릎 관절염 정보', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — 무릎 통증', url: 'https://www.msdmanuals.com/ko-kr/home/bone-joint-and-muscle-disorders/knee-disorders/knee-pain', org: 'MSD Manual', accessedAt: '2026-05-08' },
        { label: '대한정형외과학회 — 무릎 관절 질환', url: 'https://www.koa.or.kr/', org: '대한정형외과학회', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
