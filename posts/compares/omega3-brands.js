// posts/compares/omega3-brands.js
const post = {
  id: 'C0002',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 오메가3 영양제는 형태(TG·EE·rTG)에 따라 흡수율이 다르고, 라벨의 "총 어유 함량"과 "EPA+DHA 순 함량"이 크게 다를 수 있습니다. 이 페이지에서 형태별 차이, 실제 EPA+DHA 계산법, 주요 브랜드 비교를 정리합니다.</p><div class="meta-row"><span class="tag">분류: 영양제 브랜드 비교</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 브랜드별 제품 스펙은 변경될 수 있습니다. 구매 전 현재 제품 라벨을 확인하세요.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>오메가3를 처음 살 때 함량 숫자만 봤다. EPA와 DHA를 따로 확인해야 한다는 것도, rTG와 EE 형태 차이가 있다는 것도 한참 나중에 알았다. 비싸다고 좋은 게 아니라 기준을 알아야 제대로 고를 수 있다.</p>" },

{ type: 'callout', html: "<p>오메가3를 처음 살 때 함량 숫자만 봤다. EPA와 DHA를 따로 확인해야 한다는 것도, rTG와 EE 형태 차이가 있다는 것도 한참 나중에 알았다. 비싸다고 좋은 게 아니라 기준을 알아야 제대로 고를 수 있다.</p>" },,

    { type: 'h2', id: 'forms', text: '오메가3 형태 3가지 — 무엇이 다른가' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">형태</th><th style="padding:8px;border:1px solid #ddd">전이름</th><th style="padding:8px;border:1px solid #ddd">흡수율</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>TG형</strong></td><td style="padding:8px;border:1px solid #ddd">트리글리세리드</td><td style="padding:8px;border:1px solid #ddd">기준(100%)</td><td style="padding:8px;border:1px solid #ddd">천연 생선 기름 형태. 안정적이지만 EPA+DHA 농도가 낮음(보통 30%).</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>EE형</strong></td><td style="padding:8px;border:1px solid #ddd">에틸에스테르</td><td style="padding:8px;border:1px solid #ddd">TG 대비 ~73%</td><td style="padding:8px;border:1px solid #ddd">농축 공정에서 생성. 고농도(60~90%)가 가능. 가격 저렴. 산패 빠를 수 있음.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>rTG형</strong></td><td style="padding:8px;border:1px solid #ddd">재에스테르화 트리글리세리드</td><td style="padding:8px;border:1px solid #ddd">TG 대비 ~124%</td><td style="padding:8px;border:1px solid #ddd">EE를 다시 TG 형태로 전환. 고농도+높은 흡수율. 가장 비쌈.</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">※ 흡수율 수치는 연구마다 다소 차이 있음. 식사와 함께 복용 시 공복 대비 흡수율 2~3배 상승(모든 형태 공통).</p>',
    },

    { type: 'h2', id: 'reading-label', text: 'EPA+DHA 실제 함량 계산법' },
    {
      type: 'body',
      html: '<p>라벨에 "어유 1,000mg"이라고 적혀 있어도 실제 EPA+DHA는 300mg에 불과할 수 있습니다. 반드시 <strong>영양 성분 표에서 EPA와 DHA mg을 합산</strong>하세요.</p><p><strong>예시 비교</strong>:</p><ul><li>제품 A: 어유 1,000mg 중 EPA 180mg + DHA 120mg = <strong>EPA+DHA 300mg</strong> (30% 농도)</li><li>제품 B: 어유 1,000mg 중 EPA 450mg + DHA 350mg = <strong>EPA+DHA 800mg</strong> (80% 농도)</li></ul><p>같은 1캡슐에 EPA+DHA 함량이 2.6배 차이납니다. 가격이 비싸 보여도 mg당 단가를 계산하면 제품 B가 더 경제적일 수 있습니다.</p><p><strong>권장 1일 섭취량</strong>: 일반 건강 목적 EPA+DHA 합산 500mg~1g, 중성지방 개선 목적(식약처 기준) 0.5~2g.</p>',
    },

    { type: 'h2', id: 'brand-compare', text: '주요 브랜드 비교 (2026 기준)' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">브랜드·제품명</th><th style="padding:8px;border:1px solid #ddd">형태</th><th style="padding:8px;border:1px solid #ddd">1캡슐 EPA+DHA</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">정관장 홍삼오메가3</td><td style="padding:8px;border:1px solid #ddd">rTG</td><td style="padding:8px;border:1px solid #ddd">700mg+</td><td style="padding:8px;border:1px solid #ddd">국내 브랜드 신뢰도 높음. 홍삼 성분 혼합 제품도 있음.</td></tr><tr><td style="padding:8px;border:1px solid #ddd">뉴트리원 rTG오메가3</td><td style="padding:8px;border:1px solid #ddd">rTG</td><td style="padding:8px;border:1px solid #ddd">600~700mg</td><td style="padding:8px;border:1px solid #ddd">국내 제조. 가성비 중간.</td></tr><tr><td style="padding:8px;border:1px solid #ddd">캘리포니아골드 오메가800</td><td style="padding:8px;border:1px solid #ddd">rTG</td><td style="padding:8px;border:1px solid #ddd">800mg</td><td style="padding:8px;border:1px solid #ddd">iHerb 직구로 가성비 높음. IFOS 5성 인증.</td></tr><tr><td style="padding:8px;border:1px solid #ddd">노르딕내추럴 얼티밋오메가</td><td style="padding:8px;border:1px solid #ddd">TG</td><td style="padding:8px;border:1px solid #ddd">640mg</td><td style="padding:8px;border:1px solid #ddd">레몬향 산패 방지. 천연 TG. 비용 높음.</td></tr><tr><td style="padding:8px;border:1px solid #ddd">닥터베스트 FO1200</td><td style="padding:8px;border:1px solid #ddd">EE</td><td style="padding:8px;border:1px solid #ddd">720mg</td><td style="padding:8px;border:1px solid #ddd">EE이지만 고농도. 가격 대비 함량 높음.</td></tr></tbody></table><p style="font-size:13px;color:#888;margin-top:6px">※ 제품 스펙은 자주 변경됩니다. 구매 전 현재 라벨을 꼭 확인하세요.</p>',
    },

    { type: 'h2', id: 'rancidity', text: '산패 여부 확인법' },
    {
      type: 'body',
      html: '<p>오메가3 지방산은 산화되면 효능이 떨어지고 염증 유발 물질이 생성될 수 있습니다.</p><ul><li><strong>냄새 테스트</strong>: 캡슐을 잘라 냄새를 맡아 강한 비린내·산패 냄새가 나면 산화 가능성.</li><li><strong>국제 인증 확인</strong>: IFOS(국제 어유 표준 프로그램) 또는 USP 인증 제품은 산패 기준을 통과.</li><li><strong>보관</strong>: 개봉 후 냉장 보관. 직사광선·열 노출 최소화.</li><li><strong>유통기한</strong>: 여유 있는 유통기한 제품 선택. 대용량보다 소포장이 산패 위험 적음.</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: 'rTG가 무조건 EE보다 좋은가요?',
          a: 'rTG가 흡수율 면에서 유리하지만, EE도 고농도 제품이면 1일 복용량으로 충분한 EPA+DHA를 공급할 수 있습니다. 비용을 고려해 EE 고농도 제품도 합리적인 선택이 될 수 있습니다. 가장 중요한 것은 실제 1일 EPA+DHA 섭취량입니다.',
        },
        {
          q: '생선을 많이 먹으면 영양제가 필요 없나요?',
          a: '연어·고등어·정어리 등 등 푸른 생선을 주 2~3회 100g씩 섭취한다면 오메가3 영양제가 필수는 아닙니다. 하지만 어류 섭취가 적거나, 혈중 중성지방 개선 등 특정 목적이 있다면 영양제가 도움이 될 수 있습니다.',
        },
        {
          q: '오메가3를 먹으면 피가 묽어진다는 게 사실인가요?',
          a: '고용량(하루 3g 이상)에서 혈소판 응집 억제 효과가 있어 지혈 시간이 늘어날 수 있습니다. 항응고제(와파린 등)를 복용 중이거나 수술 예정이라면 의사와 상담하고 2주 전부터 중단을 고려하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 오메가3 지방산 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-12' },
        { label: 'IFOS — 어유 품질 인증 기준', url: 'https://www.nutrasource.ca/ifos/', org: 'IFOS (Nutrasource)', accessedAt: '2026-05-12' },
        { label: 'MSD Manual — Omega-3 Fatty Acids', url: 'https://www.msdmanuals.com/professional/special-subjects/dietary-supplements/omega-3-fatty-acids', org: 'MSD Manual', accessedAt: '2026-05-12' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
