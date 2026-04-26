-- ============================================================
-- 건강모아 (healthmoa) — Supabase 마이그레이션
-- Supabase SQL Editor에서 실행
--
-- ※ 통합 분석 정책: 같은 Supabase 프로젝트를 여러 사이트가 공유할 수 있도록
--    pageview_events 테이블에 site 컬럼을 두고 사이트별로 필터링한다.
--    healthmoa의 site 값은 'health'.
-- ============================================================

-- 1. 쿠팡 파트너스 링크 관리
CREATE TABLE IF NOT EXISTS coupang_links (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  category TEXT,
  coupang_url TEXT,
  post_slugs TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  site TEXT,                                    -- 사이트 식별 (선택 — 통합 운영 시)
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_coupang_category ON coupang_links(category);
CREATE INDEX IF NOT EXISTS idx_coupang_name ON coupang_links(product_name);
CREATE INDEX IF NOT EXISTS idx_coupang_post_slugs ON coupang_links USING GIN (post_slugs);
CREATE INDEX IF NOT EXISTS idx_coupang_site ON coupang_links(site);

-- 2. 페이지뷰 이벤트 (통합 분석용)
CREATE TABLE IF NOT EXISTS pageview_events (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  slug TEXT NOT NULL,
  title TEXT,
  source TEXT NOT NULL DEFAULT 'unknown',     -- google/naver/daum/bing/yahoo/zum/direct/internal/other
  keyword TEXT,
  referrer TEXT,
  session_hash TEXT,
  device TEXT,                                 -- desktop/mobile/tablet/bot/unknown
  site TEXT NOT NULL                           -- 'health' / 'sports' / 'car' / ...
);
CREATE INDEX IF NOT EXISTS idx_pve_site_date ON pageview_events(site, date DESC);
CREATE INDEX IF NOT EXISTS idx_pve_site_slug ON pageview_events(site, slug);
CREATE INDEX IF NOT EXISTS idx_pve_site_source ON pageview_events(site, source);
CREATE INDEX IF NOT EXISTS idx_pve_site_keyword ON pageview_events(site, keyword) WHERE keyword IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_pve_session ON pageview_events(session_hash);

-- 3. RLS
ALTER TABLE coupang_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE pageview_events ENABLE ROW LEVEL SECURITY;

-- 읽기: 누구나 (post-links 공개 API용)
CREATE POLICY IF NOT EXISTS "public_read_coupang" ON coupang_links FOR SELECT USING (true);
-- pageview_events 는 공개 INSERT 만 허용, 읽기는 service_role만
CREATE POLICY IF NOT EXISTS "anon_insert_pageview" ON pageview_events FOR INSERT WITH CHECK (true);

-- 4. (선택) 자동 삭제: 120일 이상 pageview 삭제
-- CREATE OR REPLACE FUNCTION delete_old_pageviews() RETURNS void AS $$
--   DELETE FROM pageview_events WHERE created_at < now() - INTERVAL '120 days';
-- $$ LANGUAGE sql;
