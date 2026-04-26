// data/compares.js — 비교 엔티티

const compares = [
  {
    id: 'C0001',
    slug: 'painkillers',
    title: '진통제 성분 비교 — 아세트아미노펜 vs 이부프로펜 vs 나프록센 — 건강모아',
    description: '타이레놀(아세트아미노펜), 부루펜(이부프로펜), 낙센(나프록센)의 작용 기전·적응증·부작용·복용 시점을 상황별로 비교합니다.',
    category: 'compare',
    ymylLevel: 'B',
    medicallyReviewed: false,
    author: 'healthmoa',
    publishedAt: '2026-04-24',
    updatedAt: '2026-04-24',
    tags: ['진통제', '타이레놀', '이부프로펜', '나프록센'],
    entityType: 'otc',
    itemSlugs: ['tylenol-acetaminophen', 'ibuprofen'],
    comparisonAxes: ['주성분', '적응증', '부작용', '복용 시점', '금기'],
    relatedSlugs: ['headache'],
  },
]

module.exports = compares
