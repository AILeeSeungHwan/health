-- ============================================================
-- 뉴트리원 공유 링크 관리 테이블
-- Supabase SQL Editor에서 실행
-- ============================================================

CREATE TABLE IF NOT EXISTS nutrione_links (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_id TEXT NOT NULL,
  nutrione_url TEXT NOT NULL,
  sharing_url TEXT,
  image_url TEXT,
  price INTEGER,
  category TEXT,
  variants JSONB DEFAULT '[]',
  post_slugs TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_nutrione_product_id ON nutrione_links(product_id);
CREATE INDEX IF NOT EXISTS idx_nutrione_post_slugs ON nutrione_links USING GIN (post_slugs);
CREATE INDEX IF NOT EXISTS idx_nutrione_category ON nutrione_links(category);
CREATE INDEX IF NOT EXISTS idx_nutrione_active ON nutrione_links(is_active);

ALTER TABLE nutrione_links ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 (post-links-nutrione API용)
CREATE POLICY IF NOT EXISTS "public_read_nutrione" ON nutrione_links FOR SELECT USING (true);
