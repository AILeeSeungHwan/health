// lib/jsonld.js — 구조화 데이터 빌더

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://health.ambitstock.com'
const SITE_NAME = '건강모아'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE + '/#organization',
    name: SITE_NAME,
    url: SITE,
    logo: { '@type': 'ImageObject', url: SITE + '/icon-512x512.png', width: 512, height: 512 },
    description: '증상·일반의약품·영양제·건강제품 통합 허브. 식약처 기준에 따른 안전한 건강 정보.',
    inLanguage: 'ko',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE + '/#website',
    url: SITE,
    name: SITE_NAME,
    inLanguage: 'ko',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: SITE + '/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url ? (SITE + it.url) : undefined,
    })),
  }
}

export function articleSchema({ title, description, url, date, updated, image, tags }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: (date || '') + 'T00:00:00+09:00',
    dateModified: (updated || date || '') + 'T00:00:00+09:00',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: SITE + '/icon-512x512.png', width: 512, height: 512 } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: image || (SITE + '/icon-512x512.png'),
    keywords: (tags || []).join(', '),
    inLanguage: 'ko',
  }
}

export function medicalWebPageSchema({ title, description, url, updated, aspect, conditionName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url,
    inLanguage: 'ko',
    lastReviewed: updated,
    aspect: aspect || 'Symptom',
    about: conditionName ? { '@type': 'MedicalCondition', name: conditionName } : undefined,
    audience: 'http://schema.org/Patient',
  }
}

export function drugSchema({ productName, ingredient, manufacturer, indications }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Drug',
    name: productName,
    activeIngredient: ingredient,
    manufacturer: manufacturer ? { '@type': 'Organization', name: manufacturer } : undefined,
    administrationRoute: '경구',
    nonProprietaryName: ingredient,
    description: indications,
  }
}

export function faqSchema(items) {
  if (!items || items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function howToSchema({ title, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: (steps || []).map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}
