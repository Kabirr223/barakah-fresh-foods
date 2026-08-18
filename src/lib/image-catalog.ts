/**
 * Verified Unsplash URLs (open license). Downloaded to /public/images/stock via npm run images:download.
 */
export const stockImages = {
  market:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  coconut:
    "https://images.unsplash.com/photo-1767893813372-757457c91511?auto=format&fit=crop&w=1200&q=85",
  vineTomatoes:
    "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1200&q=85",
  dutchTomatoes:
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
  cherryTomatoes:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85",
  greenPepper:
    "https://images.unsplash.com/photo-1585159079680-8dec029b76ed?auto=format&fit=crop&w=1200&q=85",
  redPepper:
    "https://images.unsplash.com/photo-1587656221664-37e89ddebbf6?auto=format&fit=crop&w=1200&q=85",
  yellowPepper:
    "https://images.unsplash.com/photo-1611548106857-1c3edc7d44ee?auto=format&fit=crop&w=1200&q=85",
  aubergine:
    "https://images.unsplash.com/photo-1752529427389-6c6b5e9575dd?auto=format&fit=crop&w=1200&q=85",
  cucumber:
    "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=1200&q=85",
  courgette:
    "https://images.unsplash.com/photo-1609683658920-6decb9247fa7?auto=format&fit=crop&w=1200&q=85",
  carrots:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
  sweetPotato:
    "https://images.unsplash.com/photo-1730815048561-45df6f7f331d?auto=format&fit=crop&w=1200&q=85",
  jalapeno:
    "https://images.unsplash.com/photo-1597115580039-b849ed2d6398?auto=format&fit=crop&w=1200&q=85",
  spanishOnion:
    "https://images.unsplash.com/photo-1757813027601-49030d3162ae?auto=format&fit=crop&w=1200&q=85",
  cyprusPotato:
    "https://images.unsplash.com/photo-1760368104765-f0441f4f4d6c?auto=format&fit=crop&w=1200&q=85",
  custardApple:
    "https://images.unsplash.com/photo-1564849827938-7bbc8260293e?auto=format&fit=crop&w=1200&q=85",
  bananas:
    "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=85",
  galaApple:
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=85",
  greenApple:
    "https://images.unsplash.com/photo-1602081593819-65e7a8cee0dd?auto=format&fit=crop&w=1200&q=85",
  oranges:
    "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=85",
  lemons:
    "https://images.unsplash.com/photo-1740761408392-5c98e601b6c9?auto=format&fit=crop&w=1200&q=85",
  mango:
    "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=85",
  mangoByAir:
    "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?auto=format&fit=crop&w=1200&q=85",
  grapes:
    "https://images.unsplash.com/photo-1758696233586-6d2350a70f0c?auto=format&fit=crop&w=1200&q=85",
  pomegranate:
    "https://images.unsplash.com/photo-1530730459653-e0edd4c6072e?auto=format&fit=crop&w=1200&q=85",
  watermelon:
    "https://images.unsplash.com/photo-1630081015918-8a21078e5cee?auto=format&fit=crop&w=1200&q=85",
  coriander:
    "https://images.unsplash.com/photo-1776089770931-e422e57f760c?auto=format&fit=crop&w=1200&q=85",
  mint:
    "https://images.unsplash.com/photo-1748792311906-9d0e8f88206c?auto=format&fit=crop&w=1200&q=85",
  spinach:
    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=85",
  parsley:
    "https://images.unsplash.com/photo-1455881545252-dd7edc8e41d2?auto=format&fit=crop&w=1200&q=85",
  dill:
    "https://images.unsplash.com/photo-1509210459313-17feefdff5cd?auto=format&fit=crop&w=1200&q=85",
  vegGreens:
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=1200&q=85",
  fruitMix:
    "https://images.unsplash.com/photo-1764390745171-d20ae765eb1f?auto=format&fit=crop&w=1200&q=85",
  herbs:
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=85",
} as const;

export type StockImageKey = keyof typeof stockImages;

export function localImage(key: StockImageKey) {
  return `/images/stock/${key}.jpg`;
}

/** One-to-one product → image mapping for accurate catalogue display. */
export const productImageKeys: Record<string, StockImageKey> = {
  "veg-coconuts": "coconut",
  "veg-vine-tomatoes": "vineTomatoes",
  "veg-loose-tomato-dutch": "dutchTomatoes",
  "veg-cherry-vine-dutch": "cherryTomatoes",
  "veg-green-pepper": "greenPepper",
  "veg-red-pepper": "redPepper",
  "veg-yellow-pepper": "yellowPepper",
  "veg-aubergine": "aubergine",
  "veg-cucumber": "cucumber",
  "veg-courgette": "courgette",
  "veg-carrots": "carrots",
  "veg-sweet-potato": "sweetPotato",
  "veg-jalapeno": "jalapeno",
  "veg-spanish-onion": "spanishOnion",
  "veg-cyprus-potato": "cyprusPotato",
  "fr-custard-apples": "custardApple",
  "fr-banana-chiquita": "bananas",
  "fr-royal-gala": "galaApple",
  "fr-green-apple": "greenApple",
  "fr-oranges": "oranges",
  "fr-lemons": "lemons",
  "fr-mango-brazil": "mango",
  "fr-mango-by-air": "mangoByAir",
  "fr-grapes": "grapes",
  "fr-pomegranate": "pomegranate",
  "fr-watermelon": "watermelon",
  "hb-coriander": "coriander",
  "hb-mint": "mint",
  "hb-spinach": "spinach",
  "hb-parsley": "parsley",
  "hb-dill": "dill",
};

export const categoryImageKeys: Record<string, StockImageKey> = {
  vegetables: "vegGreens",
  fruits: "fruitMix",
  herbs: "herbs",
};
