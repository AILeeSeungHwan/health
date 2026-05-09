// scripts/generate-thumbnails.js
// 각 증상 포스트의 SVG 썸네일 생성 → public/thumbnails/symptoms/
const fs = require('fs')
const path = require('path')

const OUT = path.join(__dirname, '../public/thumbnails/symptoms')
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })

const PART_THEME = {
  head:      { from: '#1A237E', to: '#283593', accent: '#90CAF9' },
  back:      { from: '#1B5E20', to: '#2E7D32', accent: '#A5D6A7' },
  shoulder:  { from: '#4A148C', to: '#6A1B9A', accent: '#CE93D8' },
  knee:      { from: '#4A148C', to: '#6A1B9A', accent: '#CE93D8' },
  mental:    { from: '#1A237E', to: '#0D47A1', accent: '#81D4FA' },
  metabolic: { from: '#BF360C', to: '#D84315', accent: '#FFAB91' },
  eye:       { from: '#006064', to: '#00838F', accent: '#80DEEA' },
  endocrine: { from: '#880E4F', to: '#AD1457', accent: '#F48FB1' },
  scalp:     { from: '#F57F17', to: '#F9A825', accent: '#FFF9C4' },
  systemic:  { from: '#B71C1C', to: '#C62828', accent: '#EF9A9A' },
  neck:      { from: '#33691E', to: '#558B2F', accent: '#DCEDC8' },
  other:     { from: '#37474F', to: '#455A64', accent: '#CFD8DC' },
}

const symptoms = [
  { slug: 'headache',           name: '두통',          emoji: '🤕', hook: '원인부터 응급 신호까지', tags: '#진통제  #편두통  #긴장성두통', bodyPart: 'head' },
  { slug: 'migraine',           name: '편두통',        emoji: '💫', hook: '전조증상 알면 골든타임이 생긴다', tags: '#전조증상  #박동성통증  #편두통약', bodyPart: 'head' },
  { slug: 'insomnia',           name: '불면증',        emoji: '😴', hook: '잠 못 드는 진짜 이유와 해법', tags: '#수면위생  #마그네슘  #멜라토닌', bodyPart: 'mental' },
  { slug: 'back-pain',          name: '허리 통증',     emoji: '🦴', hook: '근육통인지 디스크인지 구분법', tags: '#허리디스크  #요통  #코어운동', bodyPart: 'back' },
  { slug: 'diabetes-early-signs', name: '당뇨 초기증상', emoji: '🩸', hook: '지금 당장 자가 점검하세요', tags: '#당화혈색소  #전당뇨  #공복혈당', bodyPart: 'metabolic' },
  { slug: 'hantavirus',         name: '한타바이러스',  emoji: '⚠️', hook: '야외활동 후 고열이면 즉시 확인', tags: '#신증후출혈열  #들쥐  #감염', bodyPart: 'systemic' },
  { slug: 'neck-pain',          name: '목 통증',       emoji: '🔧', hook: '일자목인지 목디스크인지 구분', tags: '#일자목  #목디스크  #경추', bodyPart: 'neck' },
  { slug: 'shoulder-pain',      name: '어깨 통증',     emoji: '💪', hook: '충돌증후군·오십견·회전근개 구분', tags: '#회전근개  #오십견  #어깨MRI', bodyPart: 'shoulder' },
  { slug: 'knee-pain',          name: '무릎 통증',     emoji: '🦵', hook: '연골 손상인지 관절염인지 확인', tags: '#관절염  #연골손상  #반월상연골', bodyPart: 'knee' },
  { slug: 'frozen-shoulder',    name: '오십견',        emoji: '🩹', hook: '3단계별 치료 전략 총정리', tags: '#유착성관절낭염  #어깨굳음  #주사치료', bodyPart: 'shoulder' },
  { slug: 'menopause-symptoms', name: '갱년기 증상',   emoji: '🌸', hook: '안면홍조부터 수면장애까지', tags: '#안면홍조  #폐경  #여성호르몬', bodyPart: 'endocrine' },
  { slug: 'hair-loss',          name: '탈모',          emoji: '💇', hook: '유형 구분이 치료의 시작', tags: '#남성형탈모  #원형탈모  #탈모약', bodyPart: 'scalp' },
  { slug: 'dry-eye',            name: '안구건조증',    emoji: '👁️', hook: '인공눈물 종류별 선택 가이드', tags: '#인공눈물  #눈물층  #루테인', bodyPart: 'eye' },
]

function escapeXml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

function makeSvg(s) {
  const theme = PART_THEME[s.bodyPart] || PART_THEME.other
  const id = s.slug.replace(/-/g,'_')
  return `<svg width="400" height="220" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220">
  <defs>
    <linearGradient id="bg_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.from}"/>
      <stop offset="100%" stop-color="${theme.to}"/>
    </linearGradient>
  </defs>
  <!-- 배경 -->
  <rect width="400" height="220" fill="url(#bg_${id})" rx="14"/>
  <!-- 상단 장식줄 -->
  <rect width="400" height="4" fill="${theme.accent}" opacity="0.6"/>
  <!-- 상단 라벨 -->
  <text x="200" y="30" text-anchor="middle" font-family="Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-size="11" font-weight="700" fill="${theme.accent}" opacity="0.9">⭐ 건강모아 증상 가이드 ⭐</text>
  <!-- 이모지 -->
  <text x="200" y="90" text-anchor="middle" font-family="Apple Color Emoji, Segoe UI Emoji, sans-serif" font-size="52">${s.emoji}</text>
  <!-- 증상명 -->
  <text x="200" y="128" text-anchor="middle" font-family="Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">${escapeXml(s.name)}</text>
  <!-- 후킹 문구 -->
  <text x="200" y="155" text-anchor="middle" font-family="Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-size="13" fill="${theme.accent}" opacity="0.95">${escapeXml(s.hook)}</text>
  <!-- 태그 -->
  <text x="200" y="178" text-anchor="middle" font-family="Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-size="10" fill="#FFFFFF" opacity="0.45">${escapeXml(s.tags)}</text>
  <!-- 하단 구분선 -->
  <line x1="40" y1="192" x2="360" y2="192" stroke="#FFFFFF" stroke-width="0.5" opacity="0.2"/>
  <!-- 사이트명 -->
  <text x="200" y="210" text-anchor="middle" font-family="Apple SD Gothic Neo, Malgun Gothic, sans-serif" font-size="10" fill="#FFFFFF" opacity="0.35">health.ambitstock.com</text>
</svg>`
}

symptoms.forEach(s => {
  const svg = makeSvg(s)
  const outPath = path.join(OUT, `${s.slug}.svg`)
  fs.writeFileSync(outPath, svg, 'utf8')
  console.log(`OK: ${s.slug}.svg`)
})

console.log(`\n썸네일 ${symptoms.length}개 생성 완료 → public/thumbnails/symptoms/`)
