import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import topics from '../data/topics'
import { organizationSchema, websiteSchema } from '../lib/jsonld'
import { SideAd } from './StickySideAds'
import TopAdRow from './TopAdRow'

const SITE_NAME = '건강모아'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://health.ambitstock.com'
const SITE_DESC = '증상·일반의약품·영양제·건강제품을 한 곳에서 — 식약처 기준에 따른 안전한 건강 정보. 계산기·비교·상황별 가이드까지.'
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ''
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
// 사이트 운영용 기본값 (Vercel 환경변수에서 덮어쓸 수 있음)
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'whsi4s1oc4'
const GSC_VERIFICATION = '2DAD_BGWxdRXKWrw6lYKe6e0p3BLAiAXbMHVYXrU48k'
const NAVER_VERIFICATION = 'df9a101d8027c77c492d7fe1c14fc1a0cf46fa62'
const BING_VERIFICATION = '1E4F2FA1D46763B9C53162346F20C68D'

const FONT_URL = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'
const FONT_FAMILY = "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif"

const NAV_TOPICS = topics.filter(t => t.featured).sort((a, b) => a.priority - b.priority)

/**
 * Layout props
 * - topAd:      상단 광고 노출 여부 (기본 true). 포스트 상세는 PostRenderer 내부에서 처리하므로 false.
 * - sideAds:    좌우 세로 스티키 광고 (기본 true). admin/search 등 noindex 페이지는 false.
 * - narrow:     콘텐츠를 더 좁게 (기본 false)
 */
export default function Layout({ children, title, description, topAd = true, sideAds = true, narrow = false }) {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => { setMobileMenuOpen(false) }, [router.asPath])

  const pageTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — 증상·의약품·영양제·건강제품 통합 가이드`
  const pageDesc = description || SITE_DESC

  return (
    <div style={{ fontFamily: FONT_FAMILY, background: '#f8fafb', color: '#1a1a2e', minHeight: '100vh' }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href={FONT_URL} />
        <link rel="icon" href="/favicon.ico" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content="건강,증상,일반의약품,영양제,건강기능식품,식약처,두통,불면,오메가3,마그네슘,BMI" />

        {/* 검색엔진 사이트 소유 인증 */}
        <meta name="google-site-verification" content={GSC_VERIFICATION} />
        <meta name="naver-site-verification" content={NAVER_VERIFICATION} />
        <meta name="msvalidate.01" content={BING_VERIFICATION} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
        {CLARITY_ID && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");` }} />
        )}
        {ADSENSE_ID && (
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`} crossOrigin="anonymous" />
        )}
      </Head>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { font-family: ${FONT_FAMILY}; background: #f8fafb; color: #1a1a2e; -webkit-font-smoothing: antialiased; }
        a { color: inherit; }
        img { max-width: 100%; height: auto; }
        ::selection { background: #DC262633; }
        .tag { display:inline-block; font-size:11px; font-weight:700; padding:3px 8px; border-radius:6px; background:#F1F5F9; color:#475569; margin-right:4px; }
        .tag-low { background:#DCFCE7; color:#16A34A; }
        .tag-medium { background:#FEF3C7; color:#B45309; }
        .tag-high { background:#FEE2E2; color:#DC2626; }
        .tag-emergency { background:#7F1D1D; color:#fff; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background:'#fff', borderBottom:'1px solid #e5e7eb', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ maxWidth:1400, margin:'0 auto', padding:'0 20px', display:'flex', alignItems:'center', justifyContent:'space-between', height:62 }}>
          <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg, #DC2626, #16A34A)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800 }}>健</span>
            <span style={{ fontWeight:800, fontSize:17, color:'#1a1a2e' }}>건강모아</span>
          </Link>
          <nav className="desktop-nav" style={{ display:'flex', gap:18 }}>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={`/${t.slug}/`} style={{ fontSize:14, color:'#374151', textDecoration:'none', fontWeight:600 }}>{t.icon} {t.name}</Link>
            ))}
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', display:'none' }}>☰</button>
        </div>
        {mobileMenuOpen && (
          <div style={{ borderTop:'1px solid #e5e7eb', padding:'12px 20px', background:'#fff' }}>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={`/${t.slug}/`} style={{ display:'block', padding:'8px 0', fontSize:14, textDecoration:'none', color:'#374151' }}>
                {t.icon} {t.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* 3-column shell: [left ad | content | right ad] — 1280px+ 에서만 사이드 표시 */}
      <div className="page-shell">
        {sideAds && <SideAd side="left" />}
        <div className={`content-col ${narrow ? 'narrow' : ''}`}>
          {topAd && <TopAdRow />}
          {children}
        </div>
        {sideAds && <SideAd side="right" />}
      </div>

      {/* Footer */}
      <footer style={{ background:'#fff', borderTop:'1px solid #e5e7eb', marginTop:40 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:24 }} className="grid-3">
          <div>
            <div style={{ fontWeight:800, fontSize:16, marginBottom:8 }}>건강모아</div>
            <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.7 }}>
              본 사이트는 일반적인 건강 정보 제공을 목적으로 하며, 의료 행위나 전문가의 진단·처방을 대체하지 않습니다. 증상이 지속되면 의료기관 또는 약사 상담을 권장합니다.
            </p>
            <p style={{ fontSize:12, color:'#9ca3af', marginTop:10 }}>
              ※ 본 사이트는 쿠팡 파트너스 활동의 일환으로 제휴 링크를 포함할 수 있으며, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:10, color:'#374151' }}>사이트 정책</div>
            <Link href="/about/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>소개</Link>
            <Link href="/editorial-policy/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>편집 정책</Link>
            <Link href="/disclaimer/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>의료 면책</Link>
            <Link href="/privacy/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>개인정보</Link>
            <Link href="/terms/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>이용약관</Link>
            <Link href="/contact/" style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none' }}>문의</Link>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:10, color:'#374151' }}>주요 영역</div>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={`/${t.slug}/`} style={{ display:'block', fontSize:13, color:'#6b7280', textDecoration:'none', marginBottom:6 }}>
                {t.icon} {t.name}
              </Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid #e5e7eb', padding:'14px 20px', textAlign:'center', fontSize:12, color:'#9ca3af' }}>
          © {new Date().getFullYear()} 건강모아 · health.ambitstock.com
        </div>
      </footer>

      {/* 3-column grid + responsive */}
      <style jsx>{`
        .page-shell {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 20px;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 24px;
        }
        .content-col { max-width: 820px; margin: 0 auto; width: 100%; min-width: 0; }
        .content-col.narrow { max-width: 720px; }
        @media (min-width: 1280px) {
          .page-shell {
            grid-template-columns: 180px minmax(0, 1fr) 180px;
          }
          .content-col { max-width: 820px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  )
}
