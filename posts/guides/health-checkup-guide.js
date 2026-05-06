// posts/guides/health-checkup-guide.js
const post = {
  id: 'G0004',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 건강검진은 무증상 단계에서 질병을 조기 발견해 치료 효율을 높이는 예방 의학의 핵심 수단입니다. 국가건강검진(무료 기본)부터 직장인 검진·종합검진·정밀검진까지 단계와 비용이 크게 다릅니다. 나이와 위험 인자에 맞는 검진을 선택하는 것이 중요합니다.</p><div class="meta-row"><span class="tag">분류: 건강 관리 가이드</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 검진 주기·항목은 주치의와 상담하여 개인 상황에 맞게 결정하세요.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'national-checkup', text: '국가건강검진 — 무료 기본 항목' },
    {
      type: 'body',
      html: '<p>국민건강보험공단이 제공하는 국가건강검진은 매 2년마다(홀짝 출생연도 기준) 무료로 받을 수 있습니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">항목</th><th style="padding:8px;border:1px solid #ddd">검사 내용</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">문진·신체계측</td><td style="padding:8px;border:1px solid #ddd">키·체중·BMI·허리둘레</td></tr><tr><td style="padding:8px;border:1px solid #ddd">혈압 측정</td><td style="padding:8px;border:1px solid #ddd">고혈압 선별</td></tr><tr><td style="padding:8px;border:1px solid #ddd">혈액검사</td><td style="padding:8px;border:1px solid #ddd">공복혈당·총콜레스테롤·LDL·HDL·중성지방·간기능(AST·ALT·감마GTP)·신기능(크레아티닌)·빈혈(혈색소)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">소변검사</td><td style="padding:8px;border:1px solid #ddd">요단백</td></tr><tr><td style="padding:8px;border:1px solid #ddd">흉부 X선</td><td style="padding:8px;border:1px solid #ddd">폐·심장 이상 선별</td></tr><tr><td style="padding:8px;border:1px solid #ddd">구강검진</td><td style="padding:8px;border:1px solid #ddd">치아·잇몸 상태</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'cancer-screening', text: '5대 암 검진 (국가 지원)' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">암종</th><th style="padding:8px;border:1px solid #ddd">대상</th><th style="padding:8px;border:1px solid #ddd">방법</th><th style="padding:8px;border:1px solid #ddd">주기</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">위암</td><td style="padding:8px;border:1px solid #ddd">만 40세 이상</td><td style="padding:8px;border:1px solid #ddd">위내시경 또는 위장조영술</td><td style="padding:8px;border:1px solid #ddd">2년</td></tr><tr><td style="padding:8px;border:1px solid #ddd">대장암</td><td style="padding:8px;border:1px solid #ddd">만 50세 이상</td><td style="padding:8px;border:1px solid #ddd">분변잠혈검사 → 양성 시 대장내시경</td><td style="padding:8px;border:1px solid #ddd">1년</td></tr><tr><td style="padding:8px;border:1px solid #ddd">간암</td><td style="padding:8px;border:1px solid #ddd">만 40세 이상 고위험군*</td><td style="padding:8px;border:1px solid #ddd">복부초음파+AFP 혈액검사</td><td style="padding:8px;border:1px solid #ddd">6개월</td></tr><tr><td style="padding:8px;border:1px solid #ddd">유방암</td><td style="padding:8px;border:1px solid #ddd">만 40세 이상 여성</td><td style="padding:8px;border:1px solid #ddd">유방촬영술(맘모그래피)</td><td style="padding:8px;border:1px solid #ddd">2년</td></tr><tr><td style="padding:8px;border:1px solid #ddd">자궁경부암</td><td style="padding:8px;border:1px solid #ddd">만 20세 이상 여성</td><td style="padding:8px;border:1px solid #ddd">자궁경부 세포검사(PAP)</td><td style="padding:8px;border:1px solid #ddd">2년</td></tr></tbody></table><p style="font-size:13px;color:#888">*간암 고위험군: B형·C형 간염 바이러스 보유자, 간경변 환자</p>',
    },

    { type: 'h2', id: 'endoscopy', text: '내시경 검사 비용과 선택' },
    {
      type: 'body',
      html: '<p><strong>위내시경</strong>: 수면(진정) 내시경 기준 비용 8~15만 원(의원·검진센터), 대학병원 15만 원 이상. 건강보험 적용 시 본인부담 낮아짐. 위염·위궤양·조기 위암 발견에 필수.</p><p><strong>대장내시경</strong>: 수면 기준 15~30만 원. 전처치(장 청소) 준비 필요. 폴립 발견 즉시 제거 가능. 50세 이후 5~10년마다 권장(위험 인자 없을 시).</p><p><strong>선택 팁</strong>: 대장내시경 시 전처치 음료 종류(PEG·수소수·저용량 등)를 미리 확인. 충분한 전처치가 검사 정확도를 크게 좌우합니다.</p>',
    },

    { type: 'h2', id: 'imaging', text: 'MRI·CT·초음파 — 언제 필요한가' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">검사</th><th style="padding:8px;border:1px solid #ddd">강점</th><th style="padding:8px;border:1px solid #ddd">비용(비급여)</th><th style="padding:8px;border:1px solid #ddd">주 용도</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">복부 CT</td><td style="padding:8px;border:1px solid #ddd">빠른 전체 장기 확인</td><td style="padding:8px;border:1px solid #ddd">20~50만 원</td><td style="padding:8px;border:1px solid #ddd">간·신장·췌장·복강 확인</td></tr><tr><td style="padding:8px;border:1px solid #ddd">뇌 MRI</td><td style="padding:8px;border:1px solid #ddd">뇌 연부 조직 상세</td><td style="padding:8px;border:1px solid #ddd">50~100만 원</td><td style="padding:8px;border:1px solid #ddd">뇌종양·뇌경색·동맥류 선별</td></tr><tr><td style="padding:8px;border:1px solid #ddd">흉부 CT</td><td style="padding:8px;border:1px solid #ddd">폐 결절 조기 발견</td><td style="padding:8px;border:1px solid #ddd">20~50만 원</td><td style="padding:8px;border:1px solid #ddd">폐암 조기 발견 (흡연자 권장)</td></tr><tr><td style="padding:8px;border:1px solid #ddd">복부 초음파</td><td style="padding:8px;border:1px solid #ddd">방사선 없음, 간편</td><td style="padding:8px;border:1px solid #ddd">5~10만 원</td><td style="padding:8px;border:1px solid #ddd">간·담낭·신장 초기 이상</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'age-guide', text: '나이별 권장 검진 요약' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">연령</th><th style="padding:8px;border:1px solid #ddd">핵심 검진</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>20대</strong></td><td style="padding:8px;border:1px solid #ddd">기본 혈액·소변 검사, 자궁경부암(여성), 흡연자 폐 체크</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>30대</strong></td><td style="padding:8px;border:1px solid #ddd">혈압·혈당·지질 확인, 간염 항원·항체 검사(미접종자), 갑상선 초음파 고려</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>40대</strong></td><td style="padding:8px;border:1px solid #ddd">위내시경 (국가검진 시작), 유방촬영술(여성), 골밀도(여성), 심혈관 위험도 평가</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>50대</strong></td><td style="padding:8px;border:1px solid #ddd">대장내시경, 폐암 CT(흡연자), 전립선 PSA(남성), 골밀도(여성 폐경 후)</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>60대+</strong></td><td style="padding:8px;border:1px solid #ddd">낙상 위험·인지 기능 평가, 골밀도, 황반변성 안과 검진, 심혈관 정밀 평가</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'comprehensive', text: '종합검진 선택 시 체크리스트' },
    {
      type: 'body',
      html: '<ul><li>국가건강검진 기본 항목이 포함되는지 확인 (일부 종합검진 패키지에 미포함 사례)</li><li>내시경 방식 확인 (수면 여부, 조직검사 포함 여부)</li><li>결과지 설명 면담 시간이 포함되는지</li><li>추가 검사 권고 시 실비 보험 청구 가능 항목인지</li><li>당일 결과 vs 3~5일 후 결과 여부</li></ul>',
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '국가건강검진만으로 충분한가요?',
          a: '기본 건강 선별에는 충분하지만, 위험 인자(흡연·가족력·비만 등)가 있거나 특정 증상이 있다면 추가 검진을 고려하세요. 40대 이후에는 위내시경·대장내시경을 추가하는 것이 일반적으로 권장됩니다.',
        },
        {
          q: '실손보험으로 검진 비용을 청구할 수 있나요?',
          a: '단순 건강검진(예방 목적)은 대부분 실손보험 비급여 항목에서 제외됩니다. 단, 검진 중 이상 소견 발견 후 확진 검사(조직검사·추가 CT 등)는 청구 가능한 경우가 있습니다. 보험 약관을 먼저 확인하세요.',
        },
        {
          q: '대장내시경 전 전처치가 너무 힘들어요. 대안이 있나요?',
          a: 'CT 대장조영술(가상 대장내시경)은 전처치 부담이 적고 비침습적이나, 폴립 발견 시 즉시 제거할 수 없어 다시 내시경을 받아야 합니다. 분변DNA 검사(콜로가드)는 해외에서 사용 가능하나 국내 급여 미적용. 전통 대장내시경이 가장 정확하므로, 저용량 전처치 방법을 의사와 상담해보세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '국민건강보험공단 — 국가건강검진 안내', url: 'https://www.nhis.or.kr/', org: '국민건강보험공단', accessedAt: '2026-05-10' },
        { label: '국립암정보센터 — 5대 암 검진 가이드라인', url: 'https://www.cancer.go.kr/', org: '국립암정보센터', accessedAt: '2026-05-10' },
        { label: '질병관리청 — 건강검진 정보', url: 'https://www.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-10' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
