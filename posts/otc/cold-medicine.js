// posts/otc/cold-medicine.js
const post = {
  id: 'O0004',
  sections: [
    {
      type: 'intro',
      html: '<p>판피린Q, 판콜A, 씨콜드, 화이투벤 — 종합감기약 코너 앞에 서면 뭘 골라야 할지 막막하다. 사실 이 약들의 공통점은 하나다. <strong>감기를 낫게 하지 않는다</strong>. 감기 바이러스에는 약이 없고, 종합감기약은 콧물·코막힘·두통·발열·기침 같은 증상을 일시적으로 편하게 해줄 뿐이다.</p><p>그걸 알고 나서부터 종합감기약을 고르는 기준이 달라졌다. 내 증상에 없는 성분까지 들어간 약을 먹을 이유가 없다.</p><div class="meta-row"><span class="tag">일반의약품</span> <span class="tag">성분: 아세트아미노펜·항히스타민·충혈제거제 복합</span></div>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'what-is-cold-med', text: '종합감기약은 뭘로 만들어지나' },
    {
      type: 'body',
      html: '<p>브랜드마다 조금씩 다르지만 대부분 다음 성분들의 조합이다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">역할</th><th style="padding:8px;border:1px solid #ddd">주의</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">아세트아미노펜</td><td style="padding:8px;border:1px solid #ddd">해열·두통·몸살 완화</td><td style="padding:8px;border:1px solid #ddd">타이레놀 중복 복용 금지</td></tr><tr><td style="padding:8px;border:1px solid #ddd">항히스타민제<br>(클로르페니라민 등)</td><td style="padding:8px;border:1px solid #ddd">콧물·재채기 완화</td><td style="padding:8px;border:1px solid #ddd">졸음, 운전 주의</td></tr><tr><td style="padding:8px;border:1px solid #ddd">슈도에페드린<br>(충혈제거제)</td><td style="padding:8px;border:1px solid #ddd">코막힘 완화</td><td style="padding:8px;border:1px solid #ddd">혈압 상승, 고혈압 주의</td></tr><tr><td style="padding:8px;border:1px solid #ddd">덱스트로메토르판</td><td style="padding:8px;border:1px solid #ddd">기침 억제</td><td style="padding:8px;border:1px solid #ddd">습성 기침엔 역효과 가능</td></tr><tr><td style="padding:8px;border:1px solid #ddd">구아이페네신</td><td style="padding:8px;border:1px solid #ddd">가래 묽게 해서 배출</td><td style="padding:8px;border:1px solid #ddd">수분 섭취 필요</td></tr><tr><td style="padding:8px;border:1px solid #ddd">카페인</td><td style="padding:8px;border:1px solid #ddd">진통 보조, 졸음 상쇄</td><td style="padding:8px;border:1px solid #ddd">불면 가능성</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'symptom-match', text: '증상에 맞게 고르는 법' },
    {
      type: 'callout',
      html: '<p>감기 초기에 코막힘과 두통이 주로 왔을 때, 판피린Q를 먹었더니 졸음이 쏟아져서 오전 회의를 망쳤다. 그 이후로 약을 먹기 전에 성분부터 확인한다. 항히스타민제가 들어간 약은 낮에 먹으면 졸릴 수 있다.</p>',
    },
    {
      type: 'body',
      html: '<p><strong>증상별 성분 체크리스트:</strong></p><ul><li>🤧 <strong>콧물·재채기만</strong> → 항히스타민제(클로르페니라민) 단독 제품이 더 나음</li><li>🌡 <strong>발열·몸살·두통</strong> → 아세트아미노펜 포함 제품. 이미 타이레놀을 먹었다면 중복 주의</li><li>🤧😤 <strong>콧물+코막힘</strong> → 항히스타민+슈도에페드린 조합. 단 고혈압이면 슈도에페드린 피하기</li><li>🤒 <strong>기침이 주 증상</strong> → 기침 억제제(덱스트로메토르판) 포함. 가래가 많으면 기침 억제제는 오히려 역효과</li><li>🌿 <strong>가래 많음</strong> → 구아이페네신 포함. 물 충분히 마시기</li></ul><p style="font-size:13px;color:#888">모든 증상이 없는 성분까지 복용하면 불필요한 부작용만 늘어난다.</p>',
    },

    { type: 'h2', id: 'brands', text: '주요 브랜드 성분 비교' },
    {
      type: 'body',
      html: '<p><strong>판피린Q (동아제약)</strong><br>아세트아미노펜+클로르페니라민+슈도에페드린+덱스트로메토르판+카페인. 종합 증상에 자주 쓰이지만 졸음 주의. 운전·집중 업무 낮 시간엔 피하는 게 낫다.</p><p><strong>판콜A (동화약품)</strong><br>판피린Q와 유사한 복합 구성. 차이는 함량과 일부 성분. "나는 판콜이 더 잘 맞다"는 경우가 있는데 사실 개인 감응 차이일 가능성이 높다.</p><p><strong>씨콜드(CJ헬스케어)</strong><br>성인용은 복합, 어린이용은 별도. 어린이에게 성인 감기약을 나눠 주는 건 위험하다.</p><p><strong>화이투벤(동국제약)</strong><br>타 제품 대비 카페인을 뺀 것이 특징. 취침 전 복용이 편하다.</p>',
    },

    { type: 'h2', id: 'warnings', text: '이것만큼은 조심하자' },
    {
      type: 'warning',
      html: '<ul><li><strong>아세트아미노펜 중복 복용</strong> — 타이레놀·종합감기약·진통제를 같이 먹으면 하루 4g 상한을 넘기 쉽다. 감기약 먹는 날엔 타이레놀 따로 먹지 말 것.</li><li><strong>항히스타민+운전</strong> — 졸음 유발. 판피린Q 먹고 운전하다가 깜빡한 경험이 있다면 주의.</li><li><strong>고혈압 환자의 슈도에페드린</strong> — 혈압 상승. 성분 확인 후 슈도에페드린 없는 제품 선택.</li><li><strong>전립선비대증</strong> — 항히스타민+슈도에페드린이 소변 정체를 악화시킬 수 있다.</li><li><strong>임산부</strong> — 성분별로 금기가 다름. 반드시 의사·약사 상담 후 복용.</li></ul>',
    },

    { type: 'h2', id: 'when-doctor', text: '감기약 없이 병원을 가야 할 때' },
    {
      type: 'info',
      html: '<p>다음 증상이 있으면 "감기겠지" 하고 버티지 말고 병원으로:</p><ul><li>38.5도 이상 발열이 3일 이상 지속</li><li>호흡 곤란, 가슴 통증</li><li>귀 통증 (중이염 가능성)</li><li>눈 충혈+황색 분비물 (결막염)</li><li>목이 심하게 아프고 흰 반점이 보임 (편도선염·인후염)</li><li>1주일 이상 증상이 나아지지 않음</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '종합감기약이랑 항생제랑 같이 먹어도 되나요?', a: '항생제는 세균 감염 치료제고, 종합감기약은 증상 완화제라 용도가 다릅니다. 병용 자체는 가능하지만, 특정 성분이 상호작용할 수 있으므로 처방 약사에게 확인하세요.' },
        { q: '종합감기약을 먹으면 감기가 빨리 낫나요?', a: '아닙니다. 증상을 편하게 해줄 뿐 바이러스를 죽이진 않습니다. 충분한 수면과 수분 섭취가 회복에 더 중요합니다.' },
        { q: '낮엔 졸리지 않은 감기약이 있나요?', a: '클로르페니라민 같은 1세대 항히스타민제가 졸음의 주원인입니다. 콧물이 주된 증상이 아니라면 항히스타민 성분이 없는 제품을 선택하면 졸음이 줄어듭니다.' },
      ],
    },

    { type: 'productSlot', productKey: 'cold-medicine' },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 종합감기약 안전 사용 정보', url: 'https://nedrug.mfds.go.kr', org: '식약처', accessedAt: '2026-05-08' },
        { label: '질병관리청 국가건강정보포털 — 감기', url: 'https://health.kdca.go.kr', org: '질병관리청', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
