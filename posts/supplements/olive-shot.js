const post = {
  id: 'U0012',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 올레샷은 엑스트라버진 올리브오일과 레몬즙을 결합한 듀얼샷 제품으로, 폴리페놀·올레산·비타민C를 한 번에 섭취할 수 있습니다. 공복 음용 시 혈행 개선과 항산화 효과를 기대할 수 있으나, 위 질환자는 주의가 필요합니다.</p><p style="font-size:13px;color:#888">※ 식품류로 의약품적 효능을 표방하지 않습니다.</p>',
    },    { type: 'toc' },

    { type: 'callout', html: "<p>올리브 오일을 매일 먹기는 어렵다는 생각에 폴리페놀 농축 제품을 찾아봤다. 혈관 건강에 관심이 생긴 건 혈압이 조금 높게 나오고 나서였다. 오메가3와 함께 챙기면 좋다는 말을 듣고 같이 먹고 있다.</p>" },

{ type: 'callout', html: "<p>올리브 오일을 매일 먹기는 어렵다는 생각에 폴리페놀 농축 제품을 찾아봤다. 혈관 건강에 관심이 생긴 건 혈압이 조금 높게 나오고 나서였다. 오메가3와 함께 챙기면 좋다는 말을 듣고 같이 먹고 있다.</p>" },,

    { type: 'h2', id: 'what', text: '올레샷이란 — 올리브오일 + 레몬즙의 조합' },
    {
      type: 'body',
      html: '<p>올레샷(Ole Shot)은 <strong>엑스트라버진 올리브오일(EVOO)</strong>과 <strong>착즙 레몬즙</strong>을 고정 비율로 배합한 제품입니다. 지중해식 식단에서 올리브오일을 매일 공복에 섭취하는 전통에서 착안했습니다.</p><p>주요 성분:</p><ul><li>올리브오일: 올레산(단일불포화지방산)·올레오칸탈(항염)·하이드록시티로솔·올레유로핀(폴리페놀)</li><li>레몬즙: 비타민C·구연산·플라보노이드</li></ul>',
    },

    { type: 'h2', id: 'benefits', text: '올리브오일의 핵심 성분별 효과' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">성분</th><th style="padding:8px;border:1px solid #ddd">역할</th><th style="padding:8px;border:1px solid #ddd">연구 현황</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd">올레산(Oleic acid)</td><td style="padding:8px;border:1px solid #ddd">LDL 산화 억제·혈중 지질 개선 보조</td><td style="padding:8px;border:1px solid #ddd">지중해식 연구(PREDIMED)에서 심혈관 위험 감소</td></tr><tr><td style="padding:8px;border:1px solid #ddd">올레오칸탈</td><td style="padding:8px;border:1px solid #ddd">COX-1/2 억제(이부프로펜 유사 항염)</td><td style="padding:8px;border:1px solid #ddd">시험관 연구. 임상 용량 도달 어려울 수 있음</td></tr><tr><td style="padding:8px;border:1px solid #ddd">하이드록시티로솔</td><td style="padding:8px;border:1px solid #ddd">LDL 산화 방지·항산화</td><td style="padding:8px;border:1px solid #ddd">EFSA에서 5mg/일로 LDL 산화 방지 효능 인정</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'how-to', text: '올레샷 복용법 — 공복 음용의 이유' },
    {
      type: 'info',
      html: '<p><strong>권장 방법</strong>: 아침 공복에 1포(20~30ml)를 그대로 마신 뒤 물 한 잔. 10~15분 후 식사.</p><p><strong>공복 음용 이유</strong>: 담즙산 분비가 억제된 상태에서 올리브오일이 소장으로 직접 전달돼 장 연동 운동을 자극하고, 지방 흡수를 통한 폴리페놀 흡수가 효율적으로 이루어집니다.</p><p><strong>레몬즙의 역할</strong>: 구연산이 철분 흡수를 보조하고, 비타민C가 항산화 효과를 시너지합니다. 또한 올리브오일의 느끼함을 중화해 복용감을 개선합니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000549885', productName: '뉴트리원 올레샷 세트구성', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549885/480_1000549885_ITEM2025093012962.png', price: 124750 },
        { nutrioneId: '1000615980', productName: '뉴트리원 올리브엔 레몬 듀얼샷 올레샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615980/480_1000615980_ITEM2025121790381.png', price: 113690 },
        { nutrioneId: '1000572820', productName: '뉴트리원 올리브오일 레몬즙 듀얼샷 올레샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000572820/480_1000572820_ITEM2025122993273.png', price: 63700 },
      ],
    },

    { type: 'h2', id: 'olive-oil', text: '순수 올리브오일 및 레몬즙 단품 선택' },
    {
      type: 'body',
      html: '<p>올레샷 방식이 아닌 단품으로도 즐길 수 있습니다. 엑스트라버진 올리브오일은 산도 0.8% 이하, 냉압착(Cold Pressed) 인증 제품을 선택하면 폴리페놀 함량이 높습니다. 유기농 레몬즙 역시 방부제 없는 착즙 원액 제품이 권장됩니다.</p>',
    },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000537338', productName: '뉴트리원 유기농 데일리 엑스트라버진 올리브오일 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000537338/480_1000537338_ITEM2025061047919.png', price: 76360 },
        { nutrioneId: '1000549344', productName: '뉴트리원 퓨어 유기농 레몬즙 100%', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549344/480_1000549344_ITEM2025093044755.png', price: 69900 },
        { nutrioneId: '1000603297', productName: '뉴트리원 올리브 엔 토마토 듀얼샷 올토샷', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000603297/480_1000603297_ITEM2026021269034.png', price: 138430 },
      ],
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>역류성 식도염·위궤양</strong>: 공복 기름 섭취는 증상을 악화시킬 수 있습니다. 식후 복용으로 전환하거나 섭취를 자제하세요.</li><li><strong>담석증·담낭 질환</strong>: 올리브오일이 담즙 분비를 자극해 복통을 유발할 수 있습니다.</li><li><strong>칼로리</strong>: 올리브오일 20ml 기준 약 180kcal. 체중 관리 시 총 칼로리에 포함.</li><li>레몬즙의 구연산은 치아 에나멜을 손상시킬 수 있으므로, 복용 후 물로 입을 헹구세요.</li></ul>',
    },

    {
      type: 'faq',
      items: [
        { q: '올레샷이 변비에 효과가 있나요?', a: '올리브오일은 장 연동 운동을 자극하고 대변을 부드럽게 해 변비 완화에 도움이 될 수 있습니다. 단, 개인차가 크고 의학적 근거가 확립된 변비 치료제는 아닙니다.' },
        { q: '매일 먹어도 되나요?', a: '올리브오일은 지중해식 식단의 주요 지방 공급원으로 매일 섭취가 권장됩니다. 단, 총 칼로리 섭취에 주의해야 합니다.' },
        { q: '공복에 먹으면 살이 찌지 않나요?', a: '올리브오일은 칼로리가 높습니다. 공복 섭취가 포만감을 높여 전체 식사량을 줄이는 데 도움이 될 수 있지만, 칼로리 과잉 시 체중이 늘 수 있습니다.' },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: 'PREDIMED Study — Olive oil and cardiovascular risk. NEJM. 2013', url: '#', org: 'NEJM' },
        { label: 'EFSA — Health claims on olive oil polyphenols. 2011', url: '#', org: 'EFSA' },
        { label: '한국식품안전관리인증원(HACCP) 올리브오일 품질 기준', url: '#', org: 'HACCP 인증원' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
