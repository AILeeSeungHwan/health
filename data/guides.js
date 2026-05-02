// data/guides.js — 가이드

const guides = [
  {
    id: 'G0001',
    slug: 'how-to-choose-supplement',
    title: '영양제 고르는 법 — 성분·인증·상호작용까지 완벽 가이드 — 건강모아',
    description: '영양제와 건강기능식품 구분, 식약처 기능성 인증 마크 읽는 법, 약물 상호작용 체크리스트, 가격 대비 품질 판단까지 실전 가이드.',
    category: 'guide',
    ymylLevel: 'B',
    medicallyReviewed: false,
    author: 'healthmoa',
    publishedAt: '2026-04-24',
    updatedAt: '2026-04-24',
    tags: ['영양제', '건강기능식품', '선택법'],
    topic: '영양제 고르는 법',
    audienceLevel: 'beginner',
    relatedSlugs: ['omega-3', 'vitamin-d'],
  },
  {
    id: 'G0002',
    slug: 'diet-principles',
    title: '다이어트 원칙 — 칼로리·근손실 방지 완벽 가이드 — 건강모아',
    description: '칼로리 적자 기본 원칙, 단백질로 근손실 방지, 요요 없는 체중 유지법, 다이어트 식단 패턴 비교까지 과학적 근거 기반으로 정리합니다.',
    category: 'guide',
    ymylLevel: 'B',
    medicallyReviewed: false,
    author: 'healthmoa',
    publishedAt: '2026-05-03',
    updatedAt: '2026-05-03',
    tags: ['다이어트', '다이어트 식단', '근손실', '요요', '칼로리'],
    topic: '다이어트 원칙',
    audienceLevel: 'beginner',
    relatedSlugs: ['omega-3', 'magnesium'],
  },
]

module.exports = guides
