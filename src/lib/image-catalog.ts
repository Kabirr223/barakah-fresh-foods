/**
 * Verified Unsplash source URLs (HTTP 200). Downloaded to /public/images at build time.
 * Each key maps to a food/produce photo used across the catalogue.
 */
export const stockImages = {
  market: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  vegGreens:
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=1200&q=85",
  vegBox:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
  fruitMix:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=85",
  fruitBowl:
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=85",
  tomatoes:
    "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1200&q=85",
  cherryTomatoes:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85",
  peppers:
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=85",
  carrots:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=85",
  onions:
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
  saladGreens:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
  herbs:
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=85",
  bananas:
    "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=85",
  apples:
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=85",
  oranges:
    "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=85",
  watermelon:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=85",
  coconut:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
  exoticRoots:
    "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1200&q=85",
  exoticProduce:
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=1200&q=85",
  noodles:
    "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=85",
  biscuits:
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=85",
  friedFood:
    "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=85",
  chefPrep:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
} as const;

export type StockImageKey = keyof typeof stockImages;

/** Local path after download script runs — used in product data & components. */
export function localImage(key: StockImageKey) {
  return `/images/stock/${key}.jpg`;
}

/** Per-product image assignment (semantic best-match from verified stock). */
export const productImageKeys: Record<string, StockImageKey> = {
  "veg-coconuts": "coconut",
  "veg-vine-tomatoes": "tomatoes",
  "veg-loose-tomato-dutch": "tomatoes",
  "veg-cherry-vine-dutch": "cherryTomatoes",
  "veg-green-pepper": "peppers",
  "veg-red-pepper": "peppers",
  "veg-yellow-pepper": "peppers",
  "veg-aubergine": "vegGreens",
  "veg-cucumber": "saladGreens",
  "veg-courgette": "vegGreens",
  "veg-carrots": "carrots",
  "veg-sweet-potato": "exoticRoots",
  "veg-jalapeno": "peppers",
  "veg-spanish-onion": "onions",
  "veg-cyprus-potato": "onions",
  "fr-custard-apples": "fruitMix",
  "fr-banana-chiquita": "bananas",
  "fr-royal-gala": "apples",
  "fr-green-apple": "apples",
  "fr-oranges": "oranges",
  "fr-lemons": "oranges",
  "fr-mango-brazil": "fruitMix",
  "fr-mango-by-air": "fruitMix",
  "fr-grapes": "fruitBowl",
  "fr-pomegranate": "fruitMix",
  "fr-watermelon": "watermelon",
  "hb-coriander": "herbs",
  "hb-mint": "herbs",
  "hb-spinach": "saladGreens",
  "hb-parsley": "herbs",
  "hb-dill": "herbs",
  "ex-cassava": "exoticRoots",
  "ex-white-yam": "exoticRoots",
  "ex-plantain": "bananas",
  "ex-eddoes": "exoticRoots",
  "ex-matoki": "bananas",
  "fz-paratha": "friedFood",
  "fz-naan": "friedFood",
  "fz-samosa": "friedFood",
  "fz-okra": "vegGreens",
  "fz-spinach": "saladGreens",
  "fz-mogo": "friedFood",
  "fz-patra": "friedFood",
  "fz-kachori": "friedFood",
  "sn-kurkure": "biscuits",
  "sn-lays": "biscuits",
  "sn-maggi": "noodles",
  "sn-parle-g": "biscuits",
  "sn-chaat-puri": "friedFood",
  "sn-pani-puri": "friedFood",
  "dr-frooti": "fruitMix",
  "dr-maaza": "fruitMix",
  "dr-thumbs-up": "fruitBowl",
  "dr-limca": "oranges",
  "dr-mirinda": "fruitBowl",
};

export const categoryImageKeys: Record<string, StockImageKey> = {
  vegetables: "vegGreens",
  fruits: "fruitMix",
  exotic: "exoticProduce",
  frozen: "friedFood",
  herbs: "herbs",
  snacks: "biscuits",
  drinks: "fruitBowl",
};

export const brandImageKeys: Record<string, StockImageKey> = {
  Rupa: "friedFood",
  Shana: "vegGreens",
  Taj: "friedFood",
};
