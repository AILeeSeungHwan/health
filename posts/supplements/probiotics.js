// posts/supplements/probiotics.js
const post = {
  id: 'U0006',
  sections: [
    {
      type: 'intro',
      html: '<p><strong>한눈에 보기:</strong> 프로바이오틱스는 적정량 섭취 시 숙주 건강에 이로운 살아있는 미생물입니다. 식약처는 장 건강(유익균 증식·유해균 억제·배변 활동)에 대한 기능성을 고시 인정했습니다. 균주·CFU 수·생존률·보관 방법이 제품 선택의 핵심입니다.</p><div class="meta-row"><span class="tag">성분: 유산균(프로바이오틱스)</span> <span class="tag tag-approved">식약처 기능성 고시</span></div><p style="font-size:13px;color:#888;margin-top:12px">※ 건강기능식품은 질병 치료제가 아닙니다.</p>',
    },
    { type: 'toc' },

    { type: 'h2', id: 'basics', text: '프로바이오틱스 기본 개념' },
    {
      type: 'body',
      html: '<p>프로바이오틱스(Probiotics)는 "생명을 위한"이라는 뜻의 라틴어에서 유래했습니다. WHO 정의: "적절한 양으로 투여 시 숙주에 건강 이익을 주는 살아있는 미생물".</p><p><strong>프리바이오틱스(Prebiotics)</strong>: 유익균의 먹이가 되는 식이섬유·올리고당. 프로바이오틱스와 함께 복용하면 효과적.</p><p><strong>신바이오틱스(Synbiotics)</strong>: 프로바이오틱스 + 프리바이오틱스 복합 제품.</p>',
    },

    { type: 'h2', id: 'strains', text: '주요 균주와 특징' },
    {
      type: 'body',
      html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#f5f5f5"><th style="padding:8px;border:1px solid #ddd">균속</th><th style="padding:8px;border:1px solid #ddd">주요 균주</th><th style="padding:8px;border:1px solid #ddd">서식 위치</th><th style="padding:8px;border:1px solid #ddd">특징</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #ddd"><strong>Lactobacillus</strong></td><td style="padding:8px;border:1px solid #ddd">L. acidophilus, L. rhamnosus, L. plantarum</td><td style="padding:8px;border:1px solid #ddd">소장 주</td><td style="padding:8px;border:1px solid #ddd">젖산 생성, 산성 환경 선호. 과민성 대장·질 건강 연구 다수.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>Bifidobacterium</strong></td><td style="padding:8px;border:1px solid #ddd">B. longum, B. bifidum, B. lactis</td><td style="padding:8px;border:1px solid #ddd">대장 주</td><td style="padding:8px;border:1px solid #ddd">면역·배변에 중요. 고령자·영아에 특히 많이 연구됨.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>Streptococcus thermophilus</strong></td><td style="padding:8px;border:1px solid #ddd">S. thermophilus</td><td style="padding:8px;border:1px solid #ddd">소장</td><td style="padding:8px;border:1px solid #ddd">유제품 발효에 사용. 유당 분해 보조.</td></tr><tr><td style="padding:8px;border:1px solid #ddd"><strong>Saccharomyces</strong></td><td style="padding:8px;border:1px solid #ddd">S. boulardii</td><td style="padding:8px;border:1px solid #ddd">소장</td><td style="padding:8px;border:1px solid #ddd">효모 기반. 항생제 관련 설사 예방 근거 강함.</td></tr></tbody></table>',
    },

    { type: 'h2', id: 'cfu', text: 'CFU는 얼마나 필요한가' },
    {
      type: 'body',
      html: '<p>CFU(Colony Forming Unit)는 살아있는 균의 수입니다. 일반적인 건강 목적으로는 <strong>1일 10억(10<sup>9</sup>) CFU 이상</strong>이 권장됩니다.</p><ul><li>식약처 기준: 1일 섭취량 기준 1억(10<sup>8</sup>) CFU 이상.</li><li>과민성 대장·항생제 관련 설사: 연구에서는 10억~100억 CFU 사용.</li><li>CFU 수 자체보다 <strong>장에 도달하는 시점의 생존 CFU</strong>가 중요합니다. 제품 유통기한 말에도 기재 CFU 이상이 생존하는지 확인.</li></ul><p><strong>장용 코팅(enteric coating)</strong>: 위산·담즙에 의한 균 사멸을 줄이기 위해 코팅 기술 적용 여부도 제품 선택 지표입니다.</p>',
    },

    { type: 'h2', id: 'timing', text: '언제 먹는 것이 좋은가' },
    {
      type: 'body',
      html: '<p>프로바이오틱스 복용 시기에 대한 연구 결과는 일관되지 않지만, 현재 권고되는 시기는 <strong>식사 직전 또는 식사와 함께</strong>입니다. 음식물이 위산을 일부 중화해 균의 생존율을 높일 수 있습니다.</p><p>공복(위산이 강한 상태)보다는 식사 직전이 유리하다는 연구가 있지만, 제품의 장용 코팅이 잘 되어 있다면 시간 차이는 줄어듭니다.</p><p><strong>항생제 복용 중</strong>: 항생제와 최소 2시간 간격을 두고 복용. 항생제 관련 설사 예방을 위해 항생제 치료 중부터 시작, 치료 종료 후 1~2주 더 지속하는 것이 권장됩니다.</p>',
    },

    { type: 'h2', id: 'storage', text: '보관 방법' },
    {
      type: 'body',
      html: '<p>균은 열·습기·빛에 취약합니다.</p><ul><li><strong>냉장 보관 제품</strong>: 4°C 이하 유지 필수. 개봉 후 빠른 소비.</li><li><strong>상온 보관 제품</strong>: 냉동건조(동결건조) 기술로 안정화된 균주. 25°C 이하, 직사광선·습기 차단.</li><li>개봉 후에는 밀봉해 냉장 보관하면 균 생존율 유지에 더 유리합니다.</li></ul>',
    },

    { type: 'h2', id: 'cautions', text: '주의 사항' },
    {
      type: 'warning',
      html: '<ul><li><strong>면역억제제 복용자·면역 저하자</strong>: 패혈증 등 감염 위험 있음. 반드시 의사와 상담 후 복용.</li><li><strong>중환자실 환자</strong>: 안전성 자료 불충분.</li><li><strong>단기 복통·가스·팽만감</strong>: 복용 초기 1~2주에 나타날 수 있으며, 대부분 자연 소실.</li><li>기저 질환자(염증성 장질환·단장증후군 등)는 의사 상담 필요.</li></ul>',
    },

    { type: 'productSlot', productKey: 'probiotics' },

    {
      type: 'nutrioneSlot',
      products: [
        { nutrioneId: '1000000818', productName: '뉴트리원 프로&프리 바이오틱스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000818/480_1000000818_ITEM2024121091360.png', price: 89900 },
        { nutrioneId: '1000000945', productName: '뉴트리원 프로바이오틱스 100억 맥스', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000945/480_1000000945_ITEM2024110868186.png', price: 186100 },
        { nutrioneId: '1000296320', productName: '뉴트리원 지노프리 질유산균', imageUrl: 'https://nutrionemall.edge.naverncp.com/upload/item/1000296320/480_1000296320_ITEM2024042618420.png', price: 49800 },
      ],
    },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    {
      type: 'faq',
      items: [
        {
          q: '균주 수가 많을수록 더 좋은 건가요?',
          a: '균주 수가 많다고 반드시 효과가 뛰어난 것은 아닙니다. 연구된 특정 균주(예: L. rhamnosus GG, B. lactis)가 포함되어 있는지, CFU 수가 충분한지가 더 중요합니다.',
        },
        {
          q: '프로바이오틱스를 오래 먹어도 되나요?',
          a: '건강한 성인에서 장기 복용에 대한 안전성 우려는 현재까지 보고되지 않았습니다. 단, 면역억제 상태나 특수 질환이 있는 경우 의사와 상담하세요.',
        },
        {
          q: '요거트·발효 식품으로 대체할 수 있나요?',
          a: '발효 식품은 프로바이오틱스의 자연 공급원이지만, 균주 종류와 CFU 수를 제어하기 어렵습니다. 장 건강 개선을 목적으로 한다면 특정 균주가 보장된 제품이 더 효과적입니다.',
        },
      ],
    },

    {
      type: 'sources',
      items: [
        { label: '식품의약품안전처 — 프로바이오틱스 기능성 원료', url: 'https://www.mfds.go.kr/', org: '식품의약품안전처', accessedAt: '2026-05-08' },
        { label: 'MSD Manual — Probiotics', url: 'https://www.msdmanuals.com/professional/special-subjects/dietary-supplements/probiotics', org: 'MSD Manual', accessedAt: '2026-05-08' },
        { label: '대한소화기학회 — 장내 미생물 가이드', url: 'https://www.gastrokorea.org/', org: '대한소화기학회', accessedAt: '2026-05-08' },
      ],
    },
    { type: 'medDisclaimer' },
  ],
}

module.exports = post
