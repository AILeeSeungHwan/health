-- ============================================================
-- 뉴트리원 트래킹 파라미터 일괄 추가
-- Supabase SQL Editor에서 실행
-- ============================================================

-- 1) nutrione_url에 ?nct=E2A6DD 추가 (이미 있는 행은 스킵)
UPDATE nutrione_links
SET nutrione_url = nutrione_url || '?nct=E2A6DD'
WHERE nutrione_url NOT LIKE '%nct=%';

-- 2) sharing_url이 이미 등록된 경우에도 동일하게 추가
UPDATE nutrione_links
SET sharing_url = sharing_url || '?nct=E2A6DD'
WHERE sharing_url IS NOT NULL
  AND sharing_url <> ''
  AND sharing_url NOT LIKE '%nct=%';

-- 확인 쿼리
SELECT id, product_name, nutrione_url, sharing_url FROM nutrione_links ORDER BY id;
