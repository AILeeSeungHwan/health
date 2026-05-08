// 뉴트리원 베스트 50 상품을 nutrione_links에 초기 시딩
import { createServerClient } from '../../../lib/supabase'

function checkAuth(req) {
  const pwd = req.headers['x-admin-password'] || req.query.pwd
  return pwd === process.env.ADMIN_PASSWORD
}

const BEST50 = [
  { product_id: '1000000683', product_name: '뉴트리원 루테인지아잔틴 에이엑스 GR', price: 130000, category: '루테인', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000683/480_1000000683_ITEM2024121013355.png', post_slugs: ['lutein'] },
  { product_id: '1000580313', product_name: '뉴트리원 프리미엄 알부민 골드', price: 103380, category: '단백질', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000580313/480_1000580313_ITEM2025091974329.png', post_slugs: ['albumin'] },
  { product_id: '1000549885', product_name: '뉴트리원 올레샷 세트구성', price: 124750, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549885/480_1000549885_ITEM2025093012962.png', post_slugs: ['olive-shot'] },
  { product_id: '1000615475', product_name: '뉴트리원 NFC 유기농 블루베리 착즙액 100%', price: 92120, category: '착즙액', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615475/480_1000615475_ITEM2025121859974.png', post_slugs: ['blueberry-juice'] },
  { product_id: '1000000685', product_name: '뉴트리원 루테인 지아잔틴 알티지 오메가3 GR', price: 137000, category: '루테인', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000685/480_1000000685_ITEM2024103166415.png', post_slugs: ['lutein', 'omega-3'] },
  { product_id: '1000000420', product_name: '뉴트리원 루테인 지아잔틴 GR', price: 111100, category: '루테인', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000420/480_1000000420_ITEM2024121036773.png', post_slugs: ['lutein'] },
  { product_id: '1000615980', product_name: '뉴트리원 올리브엔 레몬 듀얼샷 올레샷', price: 113690, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000615980/480_1000615980_ITEM2025121790381.png', post_slugs: ['olive-shot'] },
  { product_id: '1000572820', product_name: '뉴트리원 올리브오일 레몬즙 듀얼샷 올레샷', price: 63700, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000572820/480_1000572820_ITEM2025122993273.png', post_slugs: ['olive-shot'] },
  { product_id: '1000274816', product_name: '뉴트리원 관절연골엔 뮤코다당단백 콘드로이친 1200', price: 158400, category: '관절', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000274816/480_1000274816_ITEM2024121047969.png', post_slugs: ['chondroitin'] },
  { product_id: '1000339884', product_name: '뉴트리원 초임계 알티지 오메가3 코큐텐', price: 20500, category: '오메가3', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000339884/480_1000339884_ITEM2024050311253.png', post_slugs: ['omega-3'] },
  { product_id: '1000486380', product_name: '뉴트리원 에스트로업 이알', price: 211250, category: '여성건강', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000486380/480_1000486380_ITEM2025051610175.png', post_slugs: ['estro-up'] },
  { product_id: '1000342419', product_name: '뉴트리원 저분자 콜라겐 S (에코패키지)', price: 55500, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342419/480_1000342419_ITEM2025071598253.png', post_slugs: ['collagen'] },
  { product_id: '1000462809', product_name: '뉴트리원 아스타잔틴7 루테인지아잔틴', price: 99000, category: '아스타잔틴', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000462809/480_1000462809_ITEM2024112193167.png', post_slugs: ['astaxanthin', 'lutein'] },
  { product_id: '1000642994', product_name: '뉴트리원 화이트 콜라겐', price: 73540, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000642994/480_1000642994_ITEM2026021248018.png', post_slugs: ['collagen'] },
  { product_id: '1000594221', product_name: '뉴트리원 혈당·혈행·간 토탈케어', price: 156000, category: '종합', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000594221/480_1000594221_ITEM2025102362209.png', post_slugs: ['blood-sugar-care'] },
  { product_id: '1000537338', product_name: '뉴트리원 유기농 데일리 엑스트라버진 올리브오일 100%', price: 76360, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000537338/480_1000537338_ITEM2025061047919.png', post_slugs: ['olive-shot'] },
  { product_id: '1000512931', product_name: '뉴트리원 데일리 철분 츄어블', price: 31000, category: '철분', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000512931/480_1000512931_ITEM2025053040890.png', post_slugs: ['iron-supplement'] },
  { product_id: '1000000893', product_name: '뉴트리원 브레인 알파 피에스', price: 121500, category: '뇌건강', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000893/480_1000000893_ITEM2024121062099.png', post_slugs: ['phosphatidylserine'] },
  { product_id: '1000326749', product_name: '뉴트리원 초임계 알티지 오메가3 트리플', price: 85900, category: '오메가3', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000326749/480_1000326749_ITEM2024121094715.png', post_slugs: ['omega-3'] },
  { product_id: '1000267983', product_name: '뉴트리원 더 콜라겐 더블케어', price: 32000, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000267983/480_1000267983_ITEM2025010972981.png', post_slugs: ['collagen'] },
  { product_id: '1000492590', product_name: '뉴트리원 자연방목 흑염소 진액', price: 29900, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000492590/480_1000492590_ITEM2025040117159.png', post_slugs: ['black-goat'] },
  { product_id: '1000530728', product_name: '뉴트리원 초임계 식물성 알티지 오메가3 DHA EPA+', price: 100300, category: '오메가3', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000530728/480_1000530728_ITEM2025051961036.png', post_slugs: ['omega-3'] },
  { product_id: '1000580390', product_name: '뉴트리원 유기농 동결건조 컬리케일 100%', price: 170000, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000580390/480_1000580390_ITEM2025091931784.png', post_slugs: ['kale-supplement'] },
  { product_id: '1000312955', product_name: '뉴트리원 비타슈넬 칼마디K 2X PGA', price: 37500, category: '관절', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000312955/480_1000312955_ITEM2024053112907.png', post_slugs: ['chondroitin'] },
  { product_id: '1000000818', product_name: '뉴트리원 프로&프리 바이오틱스', price: 89900, category: '유산균', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000818/480_1000000818_ITEM2024121091360.png', post_slugs: ['probiotics'] },
  { product_id: '1000480700', product_name: '뉴트리원 애사비 탱글 포켓 젤리', price: 42800, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000480700/480_1000480700_ITEM2025070274419.png', post_slugs: ['apple-cider-vinegar'] },
  { product_id: '1000296320', product_name: '뉴트리원 지노프리 질유산균', price: 49800, category: '유산균', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000296320/480_1000296320_ITEM2024042618420.png', post_slugs: ['probiotics'] },
  { product_id: '1000000570', product_name: '뉴트리원 잔티젠 에스', price: 9900, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000570/480_1000000570_ITEM2025010993520.png', post_slugs: ['xanthigen'] },
  { product_id: '1000609171', product_name: '뉴트리원 윤진고 프리미엄', price: 219000, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000609171/480_1000609171_ITEM2025112762206.png', post_slugs: ['premium-herbal'] },
  { product_id: '1000183136', product_name: '뉴트리원 장용성 종합비타민 이뮨+', price: 39900, category: '종합비타민', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000183136/480_1000183136_ITEM2023040323117.png', post_slugs: ['multivitamin'] },
  { product_id: '1000000804', product_name: '뉴트리원 어골칼슘 마그네슘 비타민D', price: 62500, category: '종합', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000804/480_1000000804_ITEM2025112555432.png', post_slugs: ['calcium-magnesium'] },
  { product_id: '1000364472', product_name: '뉴트리원 파인애플 효소 아임파인', price: 21500, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000364472/480_1000364472_ITEM2026010646507.png', post_slugs: ['pineapple-enzyme', 'digestive-enzyme'] },
  { product_id: '1000001081', product_name: '뉴트리원 더 엘라스틴', price: 57000, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001081/480_1000001081_ITEM2024040230132.png', post_slugs: ['collagen'] },
  { product_id: '1000223550', product_name: '뉴트리원 저분자 콜라겐 S', price: 121000, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000223550/480_1000223550_ITEM2025012393863.png', post_slugs: ['collagen'] },
  { product_id: '1000000945', product_name: '뉴트리원 프로바이오틱스 100억 맥스', price: 186100, category: '유산균', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000000945/480_1000000945_ITEM2024110868186.png', post_slugs: ['probiotics'] },
  { product_id: '1000225109', product_name: '뉴트리원 리포좀 비타민C 골드', price: 67500, category: '비타민C', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000225109/480_1000225109_ITEM2023122191606.png', post_slugs: ['vitamin-c-liposomal'] },
  { product_id: '1000215042', product_name: '뉴트리원 올인원 종합비타민 이뮨샷', price: 215000, category: '종합비타민', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000215042/480_1000215042_ITEM2024121015572.png', post_slugs: ['multivitamin'] },
  { product_id: '1000342411', product_name: '뉴트리원 글루타치온 콜라겐 W (에코패키지)', price: 64500, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342411/480_1000342411_ITEM2025071563252.png', post_slugs: ['collagen'] },
  { product_id: '1000549344', product_name: '뉴트리원 퓨어 유기농 레몬즙 100%', price: 69900, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000549344/480_1000549344_ITEM2025093044755.png', post_slugs: ['olive-shot'] },
  { product_id: '1000082005', product_name: '뉴트리원 시서스 원 다이어트', price: 34900, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000082005/480_1000082005_ITEM2024121096498.png', post_slugs: ['cissus'] },
  { product_id: '1000342415', product_name: '뉴트리원 비오틴 콜라겐 V (에코패키지)', price: 64500, category: '콜라겐', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000342415/480_1000342415_ITEM2025071578689.png', post_slugs: ['collagen'] },
  { product_id: '1000001094', product_name: '뉴트리원 유기농 밀크씨슬 퓨어', price: 72700, category: '밀크씨슬', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001094/480_1000001094_ITEM2025032730433.png', post_slugs: ['milk-thistle'] },
  { product_id: '1000040803', product_name: '뉴트리원 아르기닌 맥스 5000', price: 35900, category: '아르기닌', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000040803/480_1000040803_ITEM2022052629591.png', post_slugs: ['arginine'] },
  { product_id: '1000321433', product_name: '뉴트리원 인지기능엔 뉴런 600', price: 15900, category: '뇌건강', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000321433/480_1000321433_ITEM2024093097947.png', post_slugs: ['phosphatidylserine'] },
  { product_id: '1000516735', product_name: '뉴트리원 골든타임 웰키즈', price: 19900, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000516735/480_1000516735_ITEM2025051430671.png', post_slugs: ['kids-vitamins'] },
  { product_id: '1000653920', product_name: '뉴트리원 NFC 하스카프베리 착즙액 100%', price: 61800, category: '착즙액', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000653920/480_1000653920_ITEM2026031348904.png', post_slugs: ['blueberry-juice'] },
  { product_id: '1000612898', product_name: '뉴트리원 효소 밀크티맛', price: 14400, category: '기타', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000612898/480_1000612898_ITEM2025121017014.png', post_slugs: ['digestive-enzyme'] },
  { product_id: '1000502388', product_name: '뉴트리원 수용성 커큐민 액티브', price: 32000, category: '커큐민', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000502388/480_1000502388_ITEM2025030619139.png', post_slugs: ['curcumin'] },
  { product_id: '1000001227', product_name: '뉴트리원 루테인지아잔틴 메모리케어 GR', price: 133200, category: '루테인', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000001227/480_1000001227_ITEM2024103173967.png', post_slugs: ['lutein', 'phosphatidylserine'] },
  { product_id: '1000603297', product_name: '뉴트리원 올리브 엔 토마토 듀얼샷 올토샷', price: 138430, category: '올리브오일', image_url: 'https://nutrionemall.edge.naverncp.com/upload/item/1000603297/480_1000603297_ITEM2026021269034.png', post_slugs: ['olive-shot'] },
]

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  if (!checkAuth(req)) return res.status(401).json({ error: 'unauthorized' })

  const supabase = createServerClient()
  if (!supabase) return res.status(500).json({ error: 'supabase not configured' })

  const rows = BEST50.map(p => ({
    product_name: p.product_name,
    product_id: p.product_id,
    nutrione_url: `https://www.nutrione.co.kr/item/dtl/${p.product_id}?nct=E2A6DD`,
    sharing_url: null,
    image_url: p.image_url,
    price: p.price,
    category: p.category,
    variants: [],
    post_slugs: p.post_slugs || [],
    notes: null,
    is_active: true,
  }))

  let inserted = 0, skipped = 0
  for (const row of rows) {
    const { error } = await supabase.from('nutrione_links').upsert(row, { onConflict: 'product_id', ignoreDuplicates: false })
    if (error) { skipped++; continue }
    inserted++
  }

  return res.json({ message: `시딩 완료: ${inserted}개 처리, ${skipped}개 오류`, inserted, skipped })
}
