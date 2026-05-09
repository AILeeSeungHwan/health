// posts/symptoms/dry-eye.js
const post = {
  id: 'S0013',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 안구건조증은 눈물막 불안정·부족으로 눈 표면에 만성 염증이 생기는 질환입니다. 단순 건조감 외에도 뻑뻑함·눈 피로·간헐적 흐림·역설적 눈물 흘림이 나타납니다. 원인 유형에 따라 인공눈물 종류와 치료가 달라집니다.</p><div class="meta-row"><span class="tag">부위: 눈·눈물막</span> <span class="tag tag-low">심각도: 낮음(만성 시 중간)</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 본 정보는 일반적인 건강 정보이며 의료 진단을 대체하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>모니터 앞에 오래 있으면 눈이 모래가 들어간 것처럼 까끌까끌했다. 인공눈물을 하루에 10번 넘게 넣기도 했다. 인공눈물 성분 차이가 있다는 걸 몰랐을 때는 그냥 싸고 많이 들어있는 걸 샀는데 — 보존제 없는 제형으로 바꾸고 나서야 편해졌다.</p>" },

    { type: 'image', src: '/thumbnails/symptoms/dry-eye.svg', alt: '안구건조증 — 인공눈물 종류별 선택 가이드', caption: '안구건조증 완전 가이드' },


    { type: 'h2', id: 'tear-film', text: '눈물막 구조와 안구건조증 유형' },
    {
      type: 'body',
      html: '<p>눈물막은 3층 구조입니다: ① 지질층(마이봄샘 분비, 증발 억제) → ② 수성층(누선 분비, 주 부피) → ③ 뮤신층(술잔세포 분비, 각막 부착).</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">유형</th><th style="padding:8px;border:1px solid #ddd">원인</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>수성 부족형</strong></td><td style="padding:8px;border:1px solid #ddd">누선 기능 저하, 쇼그렌 증후군</td><td style="padding:8px;border:1px solid #ddd">눈물 생산량 자체 감소</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>지질층 결핍형 (가장 흔함)</strong></td><td style="padding:8px;border:1px solid #ddd">마이봄샘 기능장애(MGD), 눈꺼풀 염증</td><td style="padding:8px;border:1px solid #ddd">눈물 증발 과다. 전체의 70~80%</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>혼합형</strong></td><td style="padding:8px;border:1px solid #ddd">두 가지 병합</td><td style="padding:8px;border:1px solid #ddd">중증 케이스에 많음</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'causes', text: '주요 원인과 위험 요인' },
    {
      type: 'body',
      html: '<ul><li><strong>모니터·스마트폰 장시간 사용</strong> — 눈 깜빡임 횟수 감소(정상 분당 15→5회)로 눈물 증발 촉진.</li><li><strong>노화</strong> — 마이봄샘 기능과 누선 기능 모두 저하.</li><li><strong>콘택트렌즈</strong> — 눈물 성분 흡수·눈 표면 자극.</li><li><strong>라식·라섹 수술 후</strong> — 각막 신경 손상으로 일시적·장기적 건조 악화.</li><li><strong>항히스타민제·항우울제·이뇨제</strong> — 눈물 분비 감소 부작용.</li><li><strong>저습도 환경</strong> — 에어컨·히터 사용, 비행기 내.</li><li><strong>여성·폐경 후</strong> — 에스트로겐 감소가 눈물막에 영향.</li></ul>',
    },

    { type: 'h2', id: 'artificial-tears', text: '인공눈물 선택 — 성분 차이' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">특징</th><th style="padding:8px;border:1px solid #ddd">적합한 경우</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">히알루론산</td><td style="padding:8px;border:1px solid #ddd">보습력 강함, 점도 다양</td><td style="padding:8px;border:1px solid #ddd">수성층 부족, 일반적 건조</td></tr><tr><td style="padding:8px;border:1px solid #ddd">카복시메틸셀룰로오스(CMC)</td><td style="padding:8px;border:1px solid #ddd">점도 중간, 안구 표면 부착</td><td style="padding:8px;border:1px solid #ddd">경증~중등도</td></tr><tr><td style="padding:8px;border:1px solid #ddd">폴리에틸렌글라이콜(PEG)</td><td style="padding:8px;border:1px solid #ddd">지질층 보완, 증발 억제</td><td style="padding:8px;border:1px solid #ddd">마이봄샘 기능장애(MGD)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">트레할로스</td><td style="padding:8px;border:1px solid #ddd">세포 보호, 삼투압 조절</td><td style="padding:8px;border:1px solid #ddd">눈 표면 손상 동반</td></tr></tbody></table><p style="margin-top:8px"><strong>방부제 없는(preservative-free) 단일 용량 제품</strong>을 하루 4회 이상 사용 시 권장합니다. 방부제 포함 제품은 장기·고빈도 사용 시 각막 독성 우려.</p>',
    },

    { type: 'h2', id: 'home-care', text: '집에서 할 수 있는 관리' },
    {
      type: 'body',
      html: '<p><strong>온찜질(마이봄샘 기능 개선)</strong>: 따뜻한 수건(40~45°C)을 눈꺼풀 위에 5~10분 올려 마이봄 지질을 부드럽게 녹임. 이후 눈꺼풀 가장자리를 부드럽게 닦아주기. 하루 1~2회 꾸준히 하면 지질층 결핍형에 효과적.</p><p><strong>20-20-20 규칙</strong>: 화면 20분 작업 후 20피트(약 6m) 거리를 20초간 바라보며 눈 휴식.</p><p><strong>환경 개선</strong>: 가습기 사용(습도 50~60%), 에어컨 바람이 눈에 직접 닿지 않게, 독서 시 조명 충분히.</p>',
    },

    { type: 'h2', id: 'treatments', text: '안과 치료 옵션' },
    {
      type: 'body',
      html: '<ul><li><strong>항염 안약</strong> — 사이클로스포린(이케르비스 등): 중증 건조안 면역 조절. 처방 필요.</li><li><strong>눈물점 폐쇄(punctal plug)</strong> — 누점에 실리콘 마개를 삽입해 눈물 배출 늦춤. 비수술적 시술.</li><li><strong>IPL(Intense Pulsed Light)</strong> — 마이봄샘 기능 개선, 눈꺼풀 혈관 이상 치료. 4회 세션.</li><li><strong>MiBo Thermoflo·열치료기기</strong> — 마이봄샘 온열·압출 자동화. MGD 중등도 이상에 효과적.</li><li><strong>자가혈청 안약</strong> — 중증 건조안에서 자신의 혈청으로 만든 영양 안약. 비용 높음.</li></ul>',
    },

    { type: 'h2', id: 'supplements', text: '도움될 수 있는 영양제' },
    {
      type: 'body',
      html: '<ul><li><a href="/supplements/omega-3/"><strong>오메가3(EPA+DHA)</strong></a> — 마이봄 지질 구성을 개선해 증발 과다형 건조안에 도움이 될 수 있다는 연구 다수. 하루 1~2g(EPA+DHA 합산). 단, 효과는 3~6개월 후 평가.</li><li><a href="/supplements/lutein/"><strong>루테인·지아잔틴</strong></a> — 황반 건강 보조. 건조안 직접 효과보다는 눈 전반 건강 목적.</li></ul>',
    },

    { type: 'h2', id: 'when-doctor', text: '안과에 가야 하는 경우' },
    {
      type: 'warning',
      html: '<ul><li>인공눈물을 하루 4회 이상 써도 증상이 나아지지 않을 때</li><li>시력 흐림이 잦아질 때</li><li>눈꺼풀 가장자리에 노란 분비물·결막 발적이 심할 때</li><li>라식·라섹 수술 전 건조안 평가</li><li>쇼그렌 증후군 등 자가면역 질환으로 건조안이 동반된 경우</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '인공눈물을 자주 넣으면 의존성이 생기나요?',
          a: '인공눈물은 약리적 의존성을 유발하지 않습니다. 증상 완화를 위해 필요한 만큼 사용해도 됩니다. 다만 방부제 포함 제품을 하루 6회 이상 장기 사용하면 각막에 영향을 줄 수 있어, 고빈도 사용 시 방부제 없는 단용 제품을 권장합니다.',
        },
        {
          q: '라식 수술 후 건조안은 영구적인가요?',
          a: '대부분 수술 후 3~6개월 내 개선됩니다. 일부(5~10%)에서 1~2년 이상 지속될 수 있습니다. 수술 전 눈물 분비 검사로 위험군을 사전 평가하는 것이 중요합니다.',
        },
        {
          q: '오메가3가 건조안에 진짜 효과 있나요?',
          a: '메타분석에서 오메가3가 눈물 분비량과 마이봄 지질 분비를 개선한다는 연구가 있습니다. 다만 최대 규모 RCT(DREAM 연구)에서는 위약과 차이가 없었다는 결과도 있습니다. 현재 근거는 보조적 수준이며, 3개월 시도 후 효과를 평가해보세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '질병관리청 국가건강정보포털 — 안구건조증', url: 'https://health.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-12' },
        { label: 'TFOS DEWS II — 건조안 질환 국제 가이드라인', url: 'https://www.tfosweb.org/', org: 'TFOS', accessedAt: '2026-05-12' },
        { label: 'MSD Manual — Dry Eye', url: 'https://www.msdmanuals.com/professional/eye-disorders/corneal-disorders/dry-eye', org: 'MSD Manual', accessedAt: '2026-05-12' },
        { label: '대한안과학회 — 안구건조증 진료 지침', url: 'https://www.ophthalmology.org/', org: '대한안과학회', accessedAt: '2026-05-12' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
