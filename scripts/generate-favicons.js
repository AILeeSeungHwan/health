// scripts/generate-favicons.js
// 입력: public/brand-logo.svg (정사각형) + public/og-default.svg (1200×630)
// 출력: favicon.ico(16+32+48) + PNG 세트 + safari-pinned-tab.svg + og-default.png
//
// 의존성: sharp, to-ico (devDependencies)
// 사용법: npm run generate-favicons

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const BRAND = path.join(ROOT, 'public', 'brand-logo.svg')
const OG_SRC = path.join(ROOT, 'public', 'og-default.svg')
const OUT = path.join(ROOT, 'public')

let sharp, toIco
try {
  sharp = require('sharp')
  toIco = require('to-ico')
} catch (e) {
  console.error('[generate-favicons] 의존성 미설치: npm install (sharp, to-ico)')
  process.exit(1)
}

if (!fs.existsSync(BRAND)) {
  console.error('[generate-favicons] 입력 없음:', BRAND)
  process.exit(1)
}

async function pngSquare(size, name) {
  await sharp(BRAND).resize(size, size).png().toFile(path.join(OUT, name))
  console.log('✓', name)
}

async function ogPng() {
  if (fs.existsSync(OG_SRC)) {
    await sharp(OG_SRC).resize(1200, 630).png().toFile(path.join(OUT, 'og-default.png'))
    console.log('✓ og-default.png (1200×630)')
  }
}

async function main() {
  await pngSquare(16,  'favicon-16x16.png')
  await pngSquare(32,  'favicon-32x32.png')
  await pngSquare(96,  'favicon-96x96.png')
  await pngSquare(180, 'apple-touch-icon.png')
  await pngSquare(192, 'android-chrome-192x192.png')
  await pngSquare(512, 'android-chrome-512x512.png')
  await pngSquare(192, 'favicon-192x192.png') // 하위호환(manifest.json)
  await pngSquare(512, 'favicon-512x512.png') // 하위호환(manifest.json)
  await pngSquare(150, 'mstile-150x150.png')
  await ogPng()

  // ICO — 16+32+48 멀티사이즈 (Daum/Daumoa 호환 핵심)
  const buffers = []
  for (const s of [16, 32, 48]) {
    buffers.push(await sharp(BRAND).resize(s, s).png().toBuffer())
  }
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), await toIco(buffers))
  console.log('✓ favicon.ico (16+32+48 멀티사이즈)')

  // Safari pinned tab — 하트 실루엣 모노크롬 마스크 (배경 투명)
  const safari = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 440 C 236 420, 60 296, 60 188 C 60 122, 114 70, 180 70 C 218 70, 248 92, 258 124 C 268 92, 298 70, 336 70 C 402 70, 456 122, 456 188 C 456 296, 276 420, 256 440 Z"/></svg>`
  fs.writeFileSync(path.join(OUT, 'safari-pinned-tab.svg'), safari)
  console.log('✓ safari-pinned-tab.svg (heart silhouette)')
}

main().catch(err => { console.error(err); process.exit(1) })
