const post = {
  id: 'N0001',
  sections: [
    { type: 'intro', html: '<p><strong>AI 단백질 설계</strong>가 검색 상위로 올라왔다. 단순한 학계 화제가 아니라, 신약·항체·효소·백신 후보를 실험실 합성 전에 컴퓨터로 "디자인"하는 기술이 현실의 의료 파이프라인을 바꾸고 있기 때문이다. 이 글은 2024 노벨화학상부터 2025–2026 임상 흐름까지, 일반 독자가 헷갈리지 않도록 핵심만 정리한다.</p>' },
    { type: 'toc' },

    { type: 'callout', html: '<p>핵심 한 줄: <strong>AI 단백질 설계</strong>는 "이미 있는 단백질의 구조를 맞춰보는 단계"를 넘어, "원하는 기능을 가진 단백질을 처음부터 만들어내는 단계"로 진입했다. 신약 개발에서 발견(discovery) 단계의 시간과 비용을 크게 줄이는 도구로 자리 잡고 있다.</p>' },

    { type: 'h2', id: 'what', text: 'AI 단백질 설계란 무엇인가' },
    { type: 'body', html: '<p>단백질은 아미노산 사슬이 3차원으로 접힌 분자다. 어떤 모양으로 접히느냐가 그 단백질의 기능(효소·항체·수용체 등)을 결정한다. 전통적으로 단백질 구조를 푸는 데는 X-선 결정학·NMR·크라이오 EM으로 수개월~수년이 걸렸고, 새 단백질을 "설계"하는 것은 더 어려운 일이었다.</p><p>AI 단백질 설계는 두 갈래로 나뉜다.</p><ul><li><strong>구조 예측(Structure Prediction)</strong> — 아미노산 서열을 넣으면 3차원 구조를 출력. 대표: AlphaFold 시리즈.</li><li><strong>디노보 설계(De Novo Design)</strong> — "이런 기능을 하는 단백질이 필요해" 라는 목표를 넣으면 자연계에 없던 새 아미노산 서열을 생성. 대표: RFdiffusion·AlphaProteo.</li></ul>' },

    { type: 'h2', id: 'nobel', text: '왜 지금 주목받나 — 2024 노벨화학상' },
    { type: 'body', html: '<p>2024년 노벨화학상은 두 진영에 동시에 돌아갔다.</p><ul><li><strong>데이비드 베이커(David Baker, 워싱턴대)</strong> — 디노보 단백질 설계의 개척자. 자연계에 없는 단백질을 컴퓨터로 설계해 실제 실험실에서 합성·작동을 검증한 공로.</li><li><strong>데미스 허사비스(Demis Hassabis)·존 점퍼(John Jumper, 구글 딥마인드)</strong> — AlphaFold로 사실상 모든 알려진 단백질의 구조를 예측 가능하게 만든 공로.</li></ul><p>학계 인사이드에서는 "이미 받았어야 할 상"이라는 평가가 많았다. 단백질 구조 예측은 50년 이상 풀리지 않았던 "단백질 접힘 문제(protein folding problem)"의 사실상 해법으로 받아들여지고 있다.</p>' },

    { type: 'h2', id: 'tools', text: '주요 기술 — AlphaFold · RFdiffusion · AlphaProteo' },
    { type: 'body', html: '<p>2024–2026 현재 시점 기준으로 가장 영향력이 큰 세 가지 도구를 정리한다.</p><table style="width:100%; border-collapse:collapse; font-size:14px; margin:10px 0;"><thead><tr style="background:#F1F5F9;"><th style="padding:8px; text-align:left; border:1px solid #E5E7EB;">도구</th><th style="padding:8px; text-align:left; border:1px solid #E5E7EB;">개발사</th><th style="padding:8px; text-align:left; border:1px solid #E5E7EB;">역할</th></tr></thead><tbody><tr><td style="padding:8px; border:1px solid #E5E7EB;"><strong>AlphaFold 3</strong></td><td style="padding:8px; border:1px solid #E5E7EB;">Google DeepMind · Isomorphic Labs (2024.5)</td><td style="padding:8px; border:1px solid #E5E7EB;">단백질뿐 아니라 DNA·RNA·작은 분자(리간드)와의 상호작용 구조까지 예측. 신약 결합 시뮬레이션의 표준 도구로 빠르게 자리 잡음.</td></tr><tr><td style="padding:8px; border:1px solid #E5E7EB;"><strong>RFdiffusion</strong></td><td style="padding:8px; border:1px solid #E5E7EB;">Baker Lab (UW, 2023~)</td><td style="padding:8px; border:1px solid #E5E7EB;">확산 모델(이미지 생성에서 빌려온 기법) 기반 디노보 단백질 설계. "이 분자에 잘 붙는 단백질을 만들어 줘" 같은 목표 지정 가능.</td></tr><tr><td style="padding:8px; border:1px solid #E5E7EB;"><strong>AlphaProteo</strong></td><td style="padding:8px; border:1px solid #E5E7EB;">Google DeepMind (2024.9)</td><td style="padding:8px; border:1px solid #E5E7EB;">특정 표적 단백질에 강하게 결합하는 "바인더(binder)" 단백질을 설계. 항체·치료용 단백질 후보 발굴 속도 대폭 단축.</td></tr></tbody></table>' },
    { type: 'info', html: '<p>세 도구는 경쟁 관계라기보다 <strong>파이프라인의 다른 단계</strong>를 맡는다. 표적 단백질 구조(AlphaFold 3) → 결합 바인더 설계(AlphaProteo/RFdiffusion) → 실험실 합성·검증 순으로 흐른다.</p>' },

    { type: 'h2', id: 'applications', text: '어디에 쓰이는가 — 신약·항체·효소·백신' },
    { type: 'body', html: '<ul><li><strong>신약(저분자 약물)</strong> — 타깃 단백질에 결합하는 약물 후보 분자를 빠르게 탐색. Isomorphic Labs(딥마인드 자매사)는 노바티스·일라이릴리와 신약 공동개발 계약을 발표.</li><li><strong>치료용 항체·단백질</strong> — 자가면역·암 표적 단백질에 결합하는 디노보 단백질 발굴. 전통적 라이브러리 스크리닝보다 수십~수백 배 빠른 사례 보고.</li><li><strong>효소(산업·진단)</strong> — 특정 반응을 촉매하는 효소를 설계. 친환경 화학·진단 키트·산업용 효소까지 응용 폭이 넓음.</li><li><strong>백신·면역원</strong> — 항원 단백질의 안정성과 면역원성을 높이도록 재설계. 차세대 mRNA·재조합 백신 플랫폼의 표준 단계로 진입 중.</li></ul>' },

    { type: 'h2', id: 'trend-2026', text: '2025–2026 최신 흐름' },
    { type: 'body', html: '<ul><li><strong>임상 진입</strong> — 2023~2024에 AI로 발굴된 후보 물질이 2025부터 초기 임상(Phase 1)에 진입하는 사례가 누적되고 있다. 단순한 데모를 넘어 규제 트랙에 진입한다는 점이 분기점.</li><li><strong>오픈소스·접근성 확대</strong> — RFdiffusion·OpenFold 등 오픈소스 도구가 학계·중소 바이오에서 광범위하게 채택. 더 이상 빅테크 전유물이 아님.</li><li><strong>웻랩(실험실) 자동화 결합</strong> — AI 설계 → 로봇 실험실 합성 → 자동 측정 → 다시 AI 학습으로 돌아가는 "self-driving lab" 구조가 본격화.</li><li><strong>안전성 평가도 AI로</strong> — 독성·면역원성·간 대사 예측 모델이 신약 안전성 평가에 결합되며, 후보 선별 단계에서 탈락률을 낮춤.</li></ul>' },

    { type: 'h2', id: 'korea', text: '한국의 움직임' },
    { type: 'body', html: '<ul><li><strong>국가 차원</strong> — 2025년 정부의 바이오·디지털헬스 분야 R&D에서 AI 신약·단백질 설계가 주요 트랙으로 편성됨. KAIST·서울대·생명연(KRIBB) 중심으로 구조생물학+AI 연구 활성화.</li><li><strong>국내 AI 신약 기업</strong> — 디어젠·스탠다임·파로스아이바이오·온코크로스 등 AI 기반 후보 발굴 회사들이 글로벌 제약사와 협업 단계로 진입.</li><li><strong>한계</strong> — 고성능 GPU·대규모 단백질 실험실(웻랩)을 한 곳에서 운용하는 환경은 아직 제한적. 글로벌 톱 그룹 대비 격차를 줄이려는 정부·기업 투자가 이어지는 중.</li></ul>' },

    { type: 'h2', id: 'limits', text: '기대와 한계 — 일반 독자가 알아야 할 것' },
    { type: 'body', html: '<p>"AI가 단백질을 설계한다"는 표현은 정확하지만, 자주 과장된다. 다음 두 가지를 분리해서 이해하는 것이 중요하다.</p><ol><li><strong>발견(discovery)을 빠르게 한다</strong> — 후보 물질을 찾는 단계에서 시간·비용을 크게 줄인다. 이건 이미 현실.</li><li><strong>"약을 만들었다"가 아니다</strong> — 발견 이후의 임상 1·2·3상, 안전성·유효성 검증은 여전히 수년 단위가 걸리고, 실패율도 높다. AI가 임상 결과까지 보장하지는 못한다.</li></ol>' },
    { type: 'warning', title: '주의해서 봐야 할 표현', html: '<ul><li>"AI가 신약을 개발했다" — 보통은 후보 물질을 발굴했다는 의미. 임상시험 통과는 별개.</li><li>"단백질 설계 = 만능 치료" — 결합 단백질을 만든다고 약효·안전성이 자동 보장되지 않음.</li><li>"개인 맞춤 단백질 치료제" 광고 — 현 시점 정식 의약품으로 승인된 사례는 매우 제한적. 자가 구매·시술 시 출처와 규제 승인을 반드시 확인.</li></ul>' },

    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [
      { q: 'AlphaFold 와 RFdiffusion 의 차이는 한 줄로?', a: 'AlphaFold 는 "있는 단백질의 모양을 맞히는" 예측 도구, RFdiffusion 은 "없던 단백질을 새로 그리는" 설계 도구입니다. 예측과 생성으로 역할이 다릅니다.' },
      { q: '비전공자도 써볼 수 있나요?', a: 'AlphaFold 의 EBI 공개 데이터베이스(alphafold.ebi.ac.uk)에서 알려진 단백질 구조를 무료로 열람할 수 있고, ColabFold 같은 도구로 구글 코랩에서 직접 돌려볼 수 있습니다. 디노보 설계(RFdiffusion 류)는 GPU·생물학 지식이 필요해 일반 사용자가 곧바로 활용하기는 어렵습니다.' },
      { q: 'AI 단백질 설계로 만든 약이 이미 시중에 있나요?', a: '2026년 5월 시점에는 "AI 발굴 후보가 초기 임상에 진입한 사례"가 빠르게 늘고 있는 단계이고, 임상 후기·시판 단계에 도달한 본격적인 AI-발굴 신약은 아직 매우 제한적입니다. 산업 흐름은 명백히 그 방향으로 가고 있지만, "이미 약국에 있다"고 말하긴 이릅니다.' },
      { q: '건강기능식품에도 적용되나요?', a: '직접적으로는 의료용 단백질·항체 영역이 중심이고, 건강기능식품 시장은 영향이 간접적입니다. 단, 효소 설계 기술이 식품·발효 산업으로 확산되면서 원료 수급·품질 균일성 측면에서 장기적 변화가 예상됩니다.' },
      { q: '윤리적 문제는 없나요?', a: '자연계에 없던 단백질을 합성한다는 점에서 생물안전성(biosafety)·이중용도(dual-use, 의료 vs 무기) 우려가 학계에서 활발히 논의 중입니다. 주요 연구자들은 자율적 가이드라인과 합성 DNA 주문 단계의 검열 체계를 강화하는 방향으로 움직이고 있습니다.' },
    ] },

    { type: 'h2', id: 'summary', text: '요약' },
    { type: 'body', html: '<ul><li>AI 단백질 설계 = "예측"(AlphaFold) + "디노보 설계"(RFdiffusion·AlphaProteo) 두 축.</li><li>2024 노벨화학상이 이 분야의 학문적 성숙을 공인.</li><li>2025–2026 흐름: 후보 물질 발굴 단계에서 표준 도구화, 임상 진입 사례 누적, 웻랩 자동화 결합.</li><li>일반 독자 입장에서는 "신약 발견이 빨라진다"는 사실은 받아들이되, "이미 검증된 치료제"라는 마케팅 문구는 신중히 볼 것.</li></ul>' },

    { type: 'sources', items: [
      { label: 'AlphaFold 공개 DB (EBI)', url: 'https://alphafold.ebi.ac.uk/', org: 'EMBL-EBI / DeepMind' },
      { label: '2024 Nobel Prize in Chemistry — protein design & prediction', url: 'https://www.nobelprize.org/prizes/chemistry/2024/summary/', org: 'The Royal Swedish Academy of Sciences' },
      { label: 'AlphaFold 3 — DeepMind 공식 발표', url: 'https://deepmind.google/discover/blog/alphafold-3-predicts-the-structure-and-interactions-of-all-of-lifes-molecules/', org: 'Google DeepMind' },
      { label: 'AlphaProteo — DeepMind 공식 발표', url: 'https://deepmind.google/discover/blog/alphaproteo-generates-novel-proteins-for-biology-and-health-research/', org: 'Google DeepMind' },
      { label: 'RFdiffusion — Baker Lab', url: 'https://www.bakerlab.org/2023/07/11/diffusion-model-for-protein-design/', org: 'Institute for Protein Design, UW' },
    ] },

    { type: 'medDisclaimer' },
  ],
}
module.exports = post
