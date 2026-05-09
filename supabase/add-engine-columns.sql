-- url_registry 에 검색엔진별 등록 컬럼 추가
-- Supabase 대시보드 → SQL Editor 에서 실행하세요.

ALTER TABLE url_registry
  ADD COLUMN IF NOT EXISTS naver  BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS daum   BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS google BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS bing   BOOLEAN NOT NULL DEFAULT false;

-- 기존 registered = true 데이터 → naver = true 마이그레이션
UPDATE url_registry SET naver = true WHERE registered = true;
