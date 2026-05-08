import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import AdUnit from './AdUnit'
import MultiplexAd from './MultiplexAd'
import TopAdRow from './TopAdRow'
import Faq from './Faq'
import CalculatorWidget from './calculators'
import {
  InfoBox, WarningBox, EmergencyBox, MedicalDisclaimer, SourceList, YmylBadge
} from './MedicalBoxes'
import {
  articleSchema, breadcrumbSchema, medicalWebPageSchema, drugSchema, faqSchema
} from '../lib/jsonld'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://health.ambitstock.com'
const SITE_NAME = '건강모아'

const PREFIX = {
  symptom:    '/symptoms',  otc:       '/otc',
  supplement: '/supplements', product: '/products',
  situation:  '/situations',  tool:    '/tools',
  compare:    '/compare',     guide:   '/guides',
}

const CAT_LABEL = {
  symptom:'증상', otc:'일반의약품', supplement:'영양제', product:'건강제품',
  situation:'상황허브', tool:'계산기', compare:'비교', guide:'가이드'
}

function TOC({ sections }) {
  const h2s = sections.filter(s => s.type === 'h2')
  if (h2s.length < 3) return null
  return (
    <nav style={{ background:'#F8FAFC', border:'1px solid #E5E7EB', borderRadius:10, padding:'16px 20px', margin:'18px 0 22px' }}>
      <strong style={{ fontSize:13, display:'block', marginBottom:10, color:'#374151' }}>📑 목차</strong>
      <ol style={{ listStyle:'none', padding:0, margin:0 }}>
        {h2s.map((s, i) => (
          <li key={i} style={{ marginBottom:6 }}>
            <a href={'#' + s.id} style={{ fontSize:14, textDecoration:'none', color:'#475569', lineHeight:1.5 }}>
              {i + 1}. {s.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function normalize(s) { return s ? String(s).replace(/[\s\-·・]/g, '').toLowerCase() : '' }

const CAT_BADGE = {
  symptom:   { label: '증상',      bg: '#FEE2E2', color: '#B91C1C' },
  otc:       { label: '일반의약품', bg: '#DBEAFE', color: '#1D4ED8' },
  supplement:{ label: '영양제',     bg: '#DCFCE7', color: '#15803D' },
  product:   { label: '건강제품',   bg: '#FEF3C7', color: '#B45309' },
  situation: { label: '종합가이드', bg: '#EDE9FE', color: '#6D28D9' },
  guide:     { label: '가이드',     bg: '#E0F2FE', color: '#0369A1' },
  compare:   { label: '비교',       bg: '#FCE7F3', color: '#BE185D' },
  tool:      { label: '계산기',     bg: '#F1F5F9', color: '#475569' },
}

function RelatedPostsCard({ related }) {
  if (!related || related.length === 0) return null
  return (
    <div style={{ margin: '0 0 20px', background: '#F8FAFC', borderRadius: 12, padding: '14px 16px', border: '1px solid #E2E8F0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>📌 함께 보면 좋은 글</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {related.slice(0, 4).map(r => {
          const badge = CAT_BADGE[r.category] || { label: r.category, bg: '#F1F5F9', color: '#475569' }
          return (
            <Link key={r.slug} href={r.url} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: '#fff', borderRadius: 8, border: '1px solid #E5E7EB', textDecoration: 'none' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: badge.color, background: badge.bg, padding: '2px 7px', borderRadius: 4, flexShrink: 0, whiteSpace: 'nowrap' }}>{badge.label}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1E293B', lineHeight: 1.4, flex: 1 }}>{r.title}</span>
              <span style={{ color: '#94A3B8', fontSize: 13, flexShrink: 0 }}>→</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function NutrionePriceTag({ price }) {
  if (!price) return null
  return <span style={{ fontSize: 13, color: '#6B7280' }}>{Number(price).toLocaleString()}원</span>
}

function Section({ section, coupangLinks, nutrioneLinks }) {
  const s = section
  if (s.type === 'intro')   return <div style={{ fontSize:16, lineHeight:1.9, marginBottom:22, color:'#374151' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'h2')      return <h2 id={s.id} style={{ fontSize:22, fontWeight:800, margin:'38px 0 14px', lineHeight:1.35, color:'#111827', borderLeft:'4px solid #DC2626', paddingLeft:12 }}>{s.text}</h2>
  if (s.type === 'h3')      return <h3 id={s.id} style={{ fontSize:17, fontWeight:700, margin:'22px 0 8px', color:'#1a1a2e' }}>{s.text}</h3>
  if (s.type === 'body')    return <div style={{ fontSize:15, lineHeight:1.85, marginBottom:16, color:'#374151' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'callout') return <div style={{ background:'#F0FDF4', borderLeft:'4px solid #16A34A', padding:'14px 18px', borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7 }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'info')      return <InfoBox html={s.html} />
  if (s.type === 'warning')   return <WarningBox html={s.html} title={s.title} />
  if (s.type === 'emergency') return <EmergencyBox html={s.html} title={s.title} />
  if (s.type === 'sources')   return <SourceList items={s.items} />
  if (s.type === 'faq')       return <Faq items={s.items} />
  if (s.type === 'medDisclaimer') return <MedicalDisclaimer />
  if (s.type === 'toc')     return null
  if (s.type === 'image')   return <figure style={{ margin:'20px 0', textAlign:'center' }}><img src={s.src} alt={s.alt || ''} loading="lazy" style={{ maxWidth:'100%', borderRadius:10 }} />{s.caption && <figcaption style={{ fontSize:12, color:'#9CA3AF', marginTop:8 }}>{s.caption}</figcaption>}</figure>
  if (s.type === 'ending')  return <div style={{ background:'#F8FAFC', borderRadius:10, padding:'18px 22px', margin:'24px 0' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'ad')      return null
  if (s.type === 'productSlot') {
    const matched = (coupangLinks || []).filter(l => {
      if (!l.coupang_url) return false
      if (!s.productKey) return false
      return normalize(l.product_name).includes(normalize(s.productKey)) ||
             normalize(s.productKey).includes(normalize(l.product_name))
    })
    if (matched.length === 0) return null
    return (
      <div style={{ margin:'24px 0', padding:'18px 20px', background:'#FFF7ED', borderRadius:12, border:'1px solid #FED7AA' }}>
        <div style={{ fontSize:14, fontWeight:800, color:'#EA580C', marginBottom:10 }}>🛒 추천 제품</div>
        {matched.map((l, i) => (
          <a key={i} href={l.coupang_url} target="_blank" rel="noopener noreferrer nofollow"
             style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'#fff', padding:'12px 16px', borderRadius:8, marginBottom:8, textDecoration:'none' }}>
            <span style={{ fontSize:14, fontWeight:700, color:'#374151' }}>{l.product_name}</span>
            <span style={{ fontSize:12, fontWeight:700, color:'#EA580C' }}>최저가 확인 →</span>
          </a>
        ))}
        <p style={{ fontSize:11, color:'#9CA3AF', marginTop:8 }}>※ 쿠팡 파트너스 활동의 일환으로 수수료를 제공받습니다.</p>
      </div>
    )
  }
  if (s.type === 'nutrioneSlot') {
    const products = s.products || []
    if (products.length === 0) return null
    return (
      <div style={{ margin: '28px 0', padding: '20px', background: 'linear-gradient(135deg,#EFF6FF,#F0FDF4)', borderRadius: 14, border: '1px solid #BFDBFE' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#1D4ED8', marginBottom: 14 }}>
          🏥 뉴트리원 공식몰 추천 제품
        </div>
        {products.map((p, i) => {
          const link = (nutrioneLinks || []).find(l => l.product_id === p.nutrioneId)
          const sharingUrl = link?.sharing_url
          return (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', marginBottom: 10, display: 'flex', gap: 16, alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              {p.imageUrl && (
                <img src={p.imageUrl} alt={p.productName} loading="lazy"
                  style={{ width: 110, height: 110, objectFit: 'contain', borderRadius: 10, flexShrink: 0, border: '1px solid #E5E7EB' }} />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 6, lineHeight: 1.4 }}>{p.productName}</div>
                <NutrionePriceTag price={p.price} />
                <div style={{ marginTop: 12 }}>
                  {sharingUrl ? (
                    <a href={sharingUrl} target="_blank" rel="noopener noreferrer nofollow"
                       style={{ display: 'inline-block', padding: '9px 18px', background: '#1D4ED8', color: '#fff', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
                      뉴트리원 공식몰 구매하기 →
                    </a>
                  ) : (
                    <a href={`https://www.nutrione.co.kr/item/dtl/${p.nutrioneId}?nct=E2A6DD`} target="_blank" rel="noopener noreferrer nofollow"
                       style={{ display: 'inline-block', padding: '9px 18px', background: '#6B7280', color: '#fff', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
                      뉴트리원 공식몰 보기 →
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  if (s.type === 'cta') {
    const href = (() => {
      const m = (coupangLinks || []).find(l => l.coupang_url && (normalize(s.text).includes(normalize(l.product_name)) || normalize(l.product_name).includes(normalize(s.productKey || ''))))
      return m ? m.coupang_url : (s.href || '#')
    })()
    return (
      <div style={{ margin:'20px 0' }}>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow"
           style={{ display:'inline-block', padding:'14px 24px', background:'linear-gradient(135deg,#EA580C,#F97316)', color:'#fff', borderRadius:10, fontWeight:800, textDecoration:'none' }}>
          {s.text || '쿠팡에서 최저가 확인하기 →'}
        </a>
      </div>
    )
  }
  return null
}

/**
 * H2 인덱스 기반 광고 자동 삽입
 *   1st H2  → 직전 광고 없음
 *   2nd H2  → 직전 관련 포스팅 카드 + MultiplexAd
 *   3rd H2+ → 직전 AdUnit (auto)
 */
function renderWithAds(sections, coupangLinks, nutrioneLinks, related) {
  const out = []
  let h2Index = -1
  sections.forEach((s, i) => {
    if (s.type === 'h2') {
      h2Index++
      if (h2Index === 1) {
        out.push(<RelatedPostsCard key={`related-${i}`} related={related} />)
        out.push(<MultiplexAd key={`ad-mx-${i}`} />)
      } else if (h2Index >= 2) {
        out.push(<AdUnit key={`ad-h2-${i}`} slot="4000000001" variant="auto" />)
      }
    }
    out.push(<Section key={i} section={s} coupangLinks={coupangLinks} nutrioneLinks={nutrioneLinks} />)
  })
  return out
}

export default function PostRenderer({ meta, postData, related }) {
  const sections = postData ? postData.sections : null
  const slug = meta.slug
  const canonicalUrl = SITE + PREFIX[meta.category] + '/' + slug + '/'

  const [coupangLinks, setCoupangLinks] = useState([])
  const [nutrioneLinks, setNutroneLinks] = useState([])
  useEffect(() => {
    if (!slug) return
    fetch(`/api/post-links?slug=${encodeURIComponent(slug)}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => { if (Array.isArray(data) && data.length > 0) setCoupangLinks(data) })
      .catch(() => {})
    fetch(`/api/post-links-nutrione?slug=${encodeURIComponent(slug)}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => { if (Array.isArray(data) && data.length > 0) setNutroneLinks(data) })
      .catch(() => {})
  }, [slug])

  const breadcrumbItems = [
    { name: CAT_LABEL[meta.category], url: PREFIX[meta.category] + '/' },
    { name: meta.title },
  ]

  const ldArticle = articleSchema({
    title: meta.title, description: meta.description, url: canonicalUrl,
    date: meta.publishedAt, updated: meta.updatedAt, tags: meta.tags,
  })
  const ldBreadcrumb = breadcrumbSchema([{ name: SITE_NAME, url: '/' }, ...breadcrumbItems])
  const ldMedical = (meta.category === 'symptom' || meta.category === 'otc')
    ? medicalWebPageSchema({
        title: meta.title, description: meta.description, url: canonicalUrl,
        updated: meta.updatedAt, aspect: meta.category === 'symptom' ? 'Symptom' : 'Treatment',
        conditionName: meta.symptomName || meta.productName
      })
    : null
  const ldDrug = meta.category === 'otc'
    ? drugSchema({
        productName: meta.productName, ingredient: meta.ingredient,
        manufacturer: meta.manufacturer, indications: meta.description
      })
    : null
  const faqSection = sections && sections.find(s => s.type === 'faq')
  const ldFaq = faqSection ? faqSchema(faqSection.items) : null

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="article:published_time" content={(meta.publishedAt || '') + 'T00:00:00+09:00'} />
        <meta property="article:modified_time" content={(meta.updatedAt || meta.publishedAt || '') + 'T00:00:00+09:00'} />
        {(meta.tags || []).map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
        {ldMedical && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldMedical) }} />}
        {ldDrug && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldDrug) }} />}
        {ldFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />}
      </Head>

      <article>
        <Breadcrumb items={[
          { label: CAT_LABEL[meta.category], href: PREFIX[meta.category] + '/' },
          { label: meta.symptomName || meta.productName || meta.title },
        ]} />

        <header style={{ marginBottom: 14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10, flexWrap:'wrap' }}>
            <YmylBadge level={meta.ymylLevel} />
            {meta.bodyPart && <span className="tag">부위: {meta.bodyPart}</span>}
            {meta.severity && <span className={`tag tag-${meta.severity}`}>심각도: {meta.severity}</span>}
          </div>
          <h1 style={{ fontSize:28, fontWeight:900, lineHeight:1.3, margin:'0 0 12px', color:'#111827' }}>{meta.title}</h1>
          <p style={{ fontSize:15, color:'#4B5563', lineHeight:1.7, margin:'0 0 10px' }}>{meta.description}</p>
          <div style={{ fontSize:12, color:'#94A3B8' }}>
            업데이트: {meta.updatedAt}
            {!meta.medicallyReviewed && <span style={{ marginLeft:10, color:'#B45309' }}>의료진 감수 없음</span>}
          </div>
        </header>

        {/* 날짜 ↔ 목차 사이: 상단 2분할 광고 (모바일 1개) */}
        <TopAdRow />

        {/* 계산기 위젯 */}
        {meta.category === 'tool' && postData && postData.calculator && (
          <CalculatorWidget calculator={postData.calculator} />
        )}

        {sections && (
          <>
            <TOC sections={sections} />
            {renderWithAds(sections, coupangLinks, nutrioneLinks, related)}
          </>
        )}

        {meta.tags && meta.tags.length > 0 && (
          <div style={{ marginTop:28, marginBottom:18 }}>
            {meta.tags.map(t => (
              <span key={t} style={{ display:'inline-block', fontSize:12, padding:'4px 10px', borderRadius:20, background:'#F3F4F6', color:'#475569', marginRight:6, marginBottom:6 }}>#{t}</span>
            ))}
          </div>
        )}

        {related && related.length > 0 && (
          <section style={{ marginTop:32, paddingTop:24, borderTop:'2px solid #F1F5F9' }}>
            <h2 style={{ fontSize:16, fontWeight:800, marginBottom:14, color:'#1E293B' }}>함께 보면 좋은 글</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {related.map(r => {
                const badge = CAT_BADGE[r.category] || { label: r.category, bg: '#F1F5F9', color: '#475569' }
                return (
                  <Link key={r.slug} href={r.url} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', background:'#fff', borderRadius:10, border:'1px solid #E5E7EB', textDecoration:'none', boxShadow:'0 1px 3px rgba(0,0,0,0.04)' }}>
                    <span style={{ fontSize:10, fontWeight:700, color:badge.color, background:badge.bg, padding:'3px 8px', borderRadius:5, flexShrink:0, whiteSpace:'nowrap' }}>{badge.label}</span>
                    <span style={{ fontSize:14, fontWeight:600, color:'#1E293B', lineHeight:1.45, flex:1 }}>{r.title}</span>
                    <span style={{ color:'#CBD5E1', fontSize:16, flexShrink:0 }}>›</span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
