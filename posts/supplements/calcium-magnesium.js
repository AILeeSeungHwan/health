// posts/supplements/calcium-magnesium.js
const post = {
  id: 'U0021',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 칼슘·마그네슘·비타민D는 뼈 건강의 핵심 트리오입니다. 칼슘은 뼈와 치아를 구성하고, 마그네슘은 칼슘 흡수·근육 이완을 보조하며, 비타민D는 장에서 칼슘 흡수율을 끌어올립니다. 세 성분을 함께 섭취하면 단독 복용보다 뼈 건강 유지에 효과적입니다.</p><div class="meta-row"><span class="tag">성분: 칼슘·마그네슘·비타민D</span> <span class="tag tag-approved">식약처 기능성 고시</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>골밀도 검사에서 낮게 나왔다. 칼슘만 따로 먹다가 마그네슘 없이는 흡수가 잘 안 된다는 걸 나중에 알았다. 비타민D까지 함께 먹어야 뼈에 제대로 쌓인다는 것도. 칼슘은 세트로 챙기는 영양소라는 걸 뒤늦게 배웠다.</p>" },


    { type: 'h2', id: 'why-trio', text: '칼슘·마그네슘·비타민D를 함께 먹는 이유' },
    {
      type: 'body',
      html: '<p>세 성분은 뼈 대사에서 서로 의존합니다.</p><ul><li><strong>칼슘</strong>: 뼈·치아 구성의 99%, 신경 신호 전달·근육 수축에도 관여.</li><li><strong>마그네슘</strong>: 칼슘의 세포 내 이동을 조절해 과잉 칼슘이 연조직에 침착되는 것을 방지. 부갑상선 호르몬 활성화에도 필요.</li><li><strong>비타민D</strong>: 장에서 칼슘 흡수율을 최대 40%까지 상승. 결핍 시 칼슘을 아무리 섭취해도 뼈에 이용되기 어렵습니다.</li></ul><p>칼슘만 단독 복용 시 마그네슘 부족으로 근육 경련·변비가 심해지는 경우가 있습니다. 세 성분을 복합 제품으로 공급하면 균형 잡힌 뼈 보호가 가능합니다.</p>',
    },

    { type: 'h2', id: 'dosage', text: '권장 섭취량 및 비율' },
    {
      type: 'body',
      html: '<p><strong>식약처 권장 기준(성인):</strong></p><ul><li>칼슘: 700~800mg/일 (상한 2,500mg)</li><li>마그네슘: 270~350mg/일 (상한 350mg — 식품 외 보충제 기준)</li><li>비타민D: 10μg (400IU)/일 권장 — 결핍자 의료 상담 필요</li></ul><p><strong>칼슘:마그네슘 비율</strong>: 2:1이 일반적으로 권장됩니다(예: 칼슘 500mg + 마그네슘 250mg). 마그네슘이 지나치게 적으면 칼슘 관련 부작용(변비, 신장결석 위험 증가)이 생길 수 있습니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000804', productName: '뉴트리원 어골칼슘 마그네슘 비타민D', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000804/480_1000000804_ITEM2025112555432.png', price: 62500 },
      ],
    },

    { type: 'h2', id: 'calcium-types', text: '칼슘 형태별 비교 — 탄산칼슘 vs 구연산칼슘 vs 어골칼슘' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">형태</th><th style="padding:8px;border:1px solid #ddd">칼슘 함량</th><th style="padding:8px;border:1px solid #ddd">흡수 조건</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">탄산칼슘</td><td style="padding:8px;border:1px solid #ddd">40%</td><td style="padding:8px;border:1px solid #ddd">식사 후 (위산 필요)</td><td style="padding:8px;border:1px solid #ddd">가격 저렴, 함량 높음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">구연산칼슘</td><td style="padding:8px;border:1px solid #ddd">21%</td><td style="padding:8px;border:1px solid #ddd">공복·식후 모두 가능</td><td style="padding:8px;border:1px solid #ddd">위산 저하 노인에 유리</td></tr><tr><td style="padding:8px;border:1px solid #ddd">어골칼슘</td><td style="padding:8px;border:1px solid #ddd">약 25%</td><td style="padding:8px;border:1px solid #ddd">식사 후 권장</td><td style="padding:8px;border:1px solid #ddd">인·마그네슘 함께 포함, 자연 유래</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'when-needed', text: '이런 사람에게 필요합니다' },
    {
      type: 'body',
      html: '<ul><li><strong>50대 이상 여성</strong>: 폐경 후 에스트로겐 감소로 뼈 소실 속도 가속.</li><li><strong>유제품 섭취 부족자</strong>: 우유·치즈·요거트를 잘 먹지 않는 경우.</li><li><strong>실내 생활이 많은 분</strong>: 햇빛 노출 부족으로 비타민D 합성 저하.</li><li><strong>야간 다리 경련이 잦은 분</strong>: 마그네슘 결핍과 관련될 수 있습니다.</li><li><strong>스테로이드 장기 복용자</strong>: 칼슘 흡수를 방해해 골밀도 저하 위험.</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의사항 및 복용법' },
    {
      type: 'warning',
      html: '<ul><li><strong>칼슘 과잉 섭취(>2,500mg)</strong>: 신장결석·고칼슘혈증 위험. 식품 섭취분 포함 1일 2,500mg 초과 금지.</li><li><strong>철분제와 동시 복용 금지</strong>: 칼슘이 철 흡수를 방해. 2시간 간격 두세요.</li><li><strong>마그네슘 설사 부작용</strong>: 산화마그네슘 형태에서 특히 발생. 복통·설사 시 용량 감량.</li><li><strong>신장 질환자</strong>: 마그네슘·칼슘 배설 능력 감소로 고마그네슘혈증 위험. 반드시 의사 상담.</li></ul>',
    },

    { type: 'productSlot', productKey: 'calcium-magnesium' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '칼슘을 많이 먹으면 뼈가 더 단단해지나요?',
          a: '일정 수준 이상의 칼슘은 뼈에 추가 저장되지 않습니다. 비타민D와 마그네슘이 충분한 상태에서 적정량을 꾸준히 섭취하는 것이 핵심입니다. 과잉 섭취는 오히려 신장결석·혈관 석회화 위험을 높입니다.',
        },
        {
          q: '자기 전에 먹으면 수면에 도움이 되나요?',
          a: '마그네슘에는 GABA 수용체를 통한 이완 효과가 있어 취침 30~60분 전 복용이 수면 질 개선에 도움될 수 있다는 연구가 있습니다. 칼슘은 식후 복용이 흡수에 유리하므로, 저녁 식사 후 복용이 두 성분을 동시에 충족합니다.',
        },
        {
          q: '골다공증 진단을 받았는데 영양제로 대체할 수 있나요?',
          a: '골다공증은 의약품 치료가 우선입니다. 칼슘·마그네슘·비타민D는 치료를 보조하는 역할이며, 단독으로 골다공증을 역전시키지는 않습니다. 담당 의사와 병용 여부를 상의하세요.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 칼슘·마그네슘 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: '국민건강영양조사 — 한국인 칼슘 섭취 실태', url: 'https://www.kdca.go.kr/', org: '질병관리청', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Calcium', url: 'https://www.msdmanuals.com/', org: 'MSD Manual', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
