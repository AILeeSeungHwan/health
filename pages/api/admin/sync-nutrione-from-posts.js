// 포스트 파일에서 nutrioneSlot 상품을 자동 추출해 nutrione_links에 upsert
import fs from 'fs'
import path from 'path'
import { createServerClient } from '../../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

function getPostFiles(dir) {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...getPostFiles(fullPath))
    } else if (entry.name.endsWith('.js') && !entry.name.startsWith('_')) {
      files.push(fullPath)
    }
  }
  return files
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })

  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  const postsDir = path.join(process.cwd(), 'posts')
  const postFiles = getPostFiles(postsDir)

  // product_id → { ...product, post_slugs: Set }
  const productMap = {}

  for (const file of postFiles) {
    const slug = path.basename(file, '.js')
    try {
      // 캐시 무효화 후 require
      delete require.cache[require.resolve(file)]
      const post = require(file)
      if (!post || !Array.isArray(post.sections)) continue

      for (const section of post.sections) {
        if (section.type !== 'nutrioneSlot' || !Array.isArray(section.products)) continue
        for (const p of section.products) {
          if (!p.nutrioneId) continue
          if (productMap[p.nutrioneId]) {
            productMap[p.nutrioneId].slugSet.add(slug)
          } else {
            productMap[p.nutrioneId] = {
              product_id: p.nutrioneId,
              product_name: p.productName || '',
              image_url: p.imageUrl || null,
              price: p.price ? Number(p.price) : null,
              nutrione_url: `https://www.nutrione.co.kr/item/dtl/${p.nutrioneId}?nct=E2A6DD`,
              is_active: true,
              slugSet: new Set([slug]),
            }
          }
        }
      }
    } catch (e) {
      console.warn('[sync-nutrione] skip:', file, e.message)
    }
  }

  const rows = Object.values(productMap).map(({ slugSet, ...rest }) => ({
    ...rest,
    post_slugs: Array.from(slugSet),
  }))

  let ok = 0, fail = 0
  for (const row of rows) {
    // post_slugs는 기존 DB 값과 병합 (새 슬러그 추가만, 삭제 안 함)
    const { data: existing } = await supabase
      .from('nutrione_links')
      .select('post_slugs, sharing_url')
      .eq('product_id', row.product_id)
      .single()

    const mergedSlugs = existing
      ? Array.from(new Set([...(existing.post_slugs || []), ...row.post_slugs]))
      : row.post_slugs

    const upsertRow = {
      ...row,
      post_slugs: mergedSlugs,
      // 기존 sharing_url 덮어쓰지 않음
      ...(existing?.sharing_url ? { sharing_url: existing.sharing_url } : {}),
    }

    const { error } = await supabase
      .from('nutrione_links')
      .upsert(upsertRow, { onConflict: 'product_id' })

    if (error) { fail++; console.error(error) } else { ok++ }
  }

  return res.json({
    message: `포스트 동기화 완료: ${ok}개 처리, ${fail}개 오류 (총 ${rows.length}개 상품 발견)`,
    total: rows.length, ok, fail,
  })
}
