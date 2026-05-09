import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import symptoms from '../../data/symptoms'
import bodyParts from '../../data/bodyParts'
import Link from 'next/link'
import { useState } from 'react'

const SEVERITY_LABEL = { high: '⚠️ 주의', medium: '중간', low: '경증' }
const SEVERITY_COLOR = { high: '#EF4444', medium: '#F59E0B', low: '#10B981' }

const PART_LABEL = {
  head: '머리',
  back: '허리/등',
  shoulder: '어깨',
  knee: '무릎/관절',
  mental: '수면/정신',
  metabolic: '대사',
  eye: '눈',
  endocrine: '호르몬',
  scalp: '두피',
  systemic: '전신',
  neck: '목',
}

export async function getStaticProps() {
  const list = symptoms.map(s => ({ ...s, url: `/symptoms/${s.slug}/` }))
  return { props: { list } }
}

function SymptomCard({ s }) {
  return (
    <Link href={s.url} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        background: '#fff',
        transition: 'box-shadow 0.18s, transform 0.18s',
        cursor: 'pointer',
        height: '100%',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.13)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
      >
        {/* 썸네일 */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '55%', overflow: 'hidden', background: '#1A237E' }}>
          <img
            src={s.thumbnail}
            alt={s.symptomName}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {s.hasEmergency && (
            <span style={{
              position: 'absolute', top: 9, right: 9,
              background: '#EF4444', color: '#fff',
              fontSize: 9, fontWeight: 700,
              padding: '2px 7px', borderRadius: 4,
            }}>🚨 응급 신호 포함</span>
          )}
        </div>
        {/* 카드 본문 */}
        <div style={{ padding: '13px 15px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
            <span style={{
              fontSize: 9, fontWeight: 700, color: '#6D28D9',
              background: '#EDE9FE', padding: '2px 6px', borderRadius: 4,
            }}>
              {PART_LABEL[s.bodyPart] || s.bodyPart}
            </span>
            {s.severity === 'high' && (
              <span style={{ fontSize: 9, fontWeight: 700, color: '#B91C1C', background: '#FEE2E2', padding: '2px 6px', borderRadius: 4 }}>고위험</span>
            )}
          </div>
          <h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 900, color: '#111827', lineHeight: 1.3 }}>
            {s.emoji} {s.symptomName}
          </h3>
          <p style={{ margin: '0 0 9px', fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>
            {s.hookText}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {(s.tags || []).slice(0, 3).map(t => (
              <span key={t} style={{ fontSize: 10, color: '#374151', background: '#F3F4F6', padding: '2px 6px', borderRadius: 4 }}>
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function SymptomsHub({ list }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const byPart = {}
  list.forEach(s => {
    const p = s.bodyPart || 'other'
    ;(byPart[p] = byPart[p] || []).push(s)
  })

  const filtered = activeFilter === 'all' ? list : list.filter(s => s.bodyPart === activeFilter)
  const partsWithCount = Object.keys(byPart).map(p => ({ slug: p, name: PART_LABEL[p] || p, count: byPart[p].length }))

  return (
    <Layout
      title="증상별 건강 정보 — 원인·대처·병원 기준 총정리"
      description="두통·허리통증·불면증 등 흔한 증상의 원인, 집에서 해볼 수 있는 대처, 도움될 수 있는 약·영양제, 병원에 가야 할 때를 부위별로 찾아보세요."
    >
      <Breadcrumb items={[{ label: '증상' }]} />

      {/* 헤더 */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111827', marginBottom: 6 }}>
          증상별 건강 정보
        </h1>
        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
          흔한 증상의 원인, 집에서 해볼 수 있는 대처, 도움될 수 있는 약·영양제, 병원 가야 할 때를 부위별로 찾아보세요.
        </p>
      </div>

      {/* 필터 칩 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 24 }}>
        <button
          onClick={() => setActiveFilter('all')}
          style={{
            padding: '7px 14px', borderRadius: 20, border: '1.5px solid',
            borderColor: activeFilter === 'all' ? '#6D28D9' : '#E5E7EB',
            background: activeFilter === 'all' ? '#6D28D9' : '#fff',
            color: activeFilter === 'all' ? '#fff' : '#374151',
            fontSize: 12, fontWeight: 700, cursor: 'pointer',
          }}
        >
          전체 ({list.length})
        </button>
        {partsWithCount.map(p => (
          <button
            key={p.slug}
            onClick={() => setActiveFilter(p.slug)}
            style={{
              padding: '7px 14px', borderRadius: 20, border: '1.5px solid',
              borderColor: activeFilter === p.slug ? '#6D28D9' : '#E5E7EB',
              background: activeFilter === p.slug ? '#6D28D9' : '#fff',
              color: activeFilter === p.slug ? '#fff' : '#374151',
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}
          >
            {p.name} ({p.count})
          </button>
        ))}
      </div>

      {/* 카드 그리드 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
      }} className="symptom-grid">
        {filtered.map(s => <SymptomCard key={s.slug} s={s} />)}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .symptom-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .symptom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
