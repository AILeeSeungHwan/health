-- ============================================================
-- 건강모아 (healthmoa) — Supabase 마이그레이션
-- Supabase SQL Editor에서 실행
-- ============================================================

-- 1. 쿠팡 파트너스 링크 관리
CREATE TABLE IF NOT EXISTS coupang_links (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  category TEXT,
  coupang_url TEXT,
  post_slugs TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_coupang_category ON coupang_links(category);
CREATE INDEX IF NOT EXISTS idx_coupang_name ON coupang_links(product_name);
CREATE INDEX IF NOT EXISTS idx_coupang_post_slugs ON coupang_links USING GIN (post_slugs);

-- 2. 페이지뷰 로그
CREATE TABLE IF NOT EXISTS pageviews (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  title TEXT,
  page_url TEXT,
  referrer TEXT,
  search_engine TEXT DEFAULT 'direct',
  keyword TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_pv_created ON pageviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pv_slug ON pageviews(slug);
CREATE INDEX IF NOT EXISTS idx_pv_engine ON pageviews(search_engine);
CREATE INDEX IF NOT EXISTS idx_pv_keyword ON pageviews(keyword) WHERE keyword IS NOT NULL;

-- 3. RLS
ALTER TABLE coupang_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE pageviews ENABLE ROW LEVEL SECURITY;

-- 읽기: 누구나 (post-links 공개 API용)
CREATE POLICY "public_read_coupang" ON coupang_links FOR SELECT USING (true);
-- pageviews 는 공개 INSERT 만 허용, 읽기는 service_role만
CREATE POLICY "anon_insert_pageview" ON pageviews FOR INSERT WITH CHECK (true);

-- 4. 자동 삭제: 120일 이상 pageview 삭제 (선택사항)
-- CREATE OR REPLACE FUNCTION delete_old_pageviews() RETURNS void AS $$
--   DELETE FROM pageviews WHERE created_at < now() - INTERVAL '120 days';
-- $$ LANGUAGE sql;
