// 상단 2분할 광고 — 데스크톱: 가로 2개 / 모바일: 1개
import AdUnit from './AdUnit'

export default function TopAdRow({ slotA, slotB }) {
  return (
    <div className="top-ad-row" style={{ margin:'18px 0 20px' }}>
      <div className="top-ad-grid">
        <AdUnit slot={slotA || '2144847994'} variant="auto" minHeight={250} style={{ margin:0 }} />
        <div className="top-ad-second">
          <AdUnit slot={slotB || '2144847994'} variant="auto" minHeight={250} style={{ margin:0 }} />
        </div>
      </div>
      <style jsx>{`
        .top-ad-grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
        @media (max-width: 640px) {
          .top-ad-grid { grid-template-columns: 1fr; }
          .top-ad-second { display: none; }
        }
      `}</style>
    </div>
  )
}
