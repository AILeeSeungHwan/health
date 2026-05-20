// 상위 허브 (홈·헤더 네비)
const topics = [
  { slug: 'symptoms',    name: '증상',     nameEn: 'Symptoms',    icon: '🩺', color: '#DC2626', bgColor: '#FEE2E2', priority: 1, featured: true, description: '두통·소화불량·불면 등 흔한 증상의 원인과 대처법.' },
  { slug: 'otc',         name: '일반의약품', nameEn: 'OTC',         icon: '💊', color: '#2563EB', bgColor: '#DBEAFE', priority: 2, featured: true, description: '약국에서 살 수 있는 일반의약품의 성분·용법·주의사항.' },
  { slug: 'supplements', name: '영양제',   nameEn: 'Supplements',  icon: '🌿', color: '#16A34A', bgColor: '#DCFCE7', priority: 3, featured: true, description: '식약처 인정 기능성 영양제·건강기능식품 정보.' },
  { slug: 'products',    name: '건강제품', nameEn: 'Products',     icon: '🏋️', color: '#EA580C', bgColor: '#FFF7ED', priority: 4, featured: true, description: '프로틴·다이어트식품·운동용품·셀프케어.' },
  { slug: 'situations',  name: '상황별',   nameEn: 'Situations',   icon: '🧭', color: '#7C3AED', bgColor: '#EDE9FE', priority: 5, featured: true, description: '두통·불면·다이어트·면역력 등 상황 통합 가이드.' },
  { slug: 'tools',       name: '계산기',   nameEn: 'Tools',        icon: '🧮', color: '#0284C7', bgColor: '#E0F2FE', priority: 6, featured: true, description: 'BMI·기초대사량·단백질 권장량 등 건강 계산기.' },
  { slug: 'compare',     name: '비교',     nameEn: 'Compare',      icon: '⚖️', color: '#0891B2', bgColor: '#CFFAFE', priority: 7, featured: false, description: '진통제·오메가3·프로틴 성분·제품 비교.' },
  { slug: 'guides',      name: '가이드',   nameEn: 'Guides',       icon: '📚', color: '#475569', bgColor: '#F1F5F9', priority: 8, featured: false, description: '영양제·의약품·운동·다이어트 심화 가이드.' },
  { slug: 'news',        name: '건강뉴스', nameEn: 'News',         icon: '📰', color: '#4F46E5', bgColor: '#E0E7FF', priority: 9, featured: true,  description: 'AI·신약·연구·정책 등 건강 산업 최신 트렌드 정리.' },
]
module.exports = topics
