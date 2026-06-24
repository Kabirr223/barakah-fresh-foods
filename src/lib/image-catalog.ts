/**
 * Verified Unsplash URLs (open license). Downloaded to /public/images/stock via npm run images:download.
 */
export const stockImages = {
  market:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  coconut:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
  vineTomatoes:
    "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1200&q=85",
  dutchTomatoes:
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=1200&q=85",
  cherryTomatoes:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85",
  greenPepper:
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=85",
  redPepper:
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=85",
  yellowPepper:
    "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=85",
  aubergine:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=85",
  cucumber:
    "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1200",
  courgette:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=85",
  carrots:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=85",
  sweetPotato:
    "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1200&q=85",
  jalapeno:
    "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=1200&q=85",
  spanishOnion:
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
  cyprusPotato:
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
  custardApple:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=85",
  bananas:
    "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=85",
  galaApple:
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=85",
  greenApple:
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=85",
  oranges:
    "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=85",
  lemons:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=85",
  mango:
    "https://images.pexels.com/photos/208107/pexels-photo-208107.jpeg?auto=compress&cs=tinysrgb&w=1200",
  grapes:
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=85",
  pomegranate:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=85",
  watermelon:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=85",
  coriander:
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=85",
  mint:
    "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1200",
  spinach:
    "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=85",
  parsley:
    "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1200&q=85",
  dill:
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1200&q=85",
  vegGreens:
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=1200&q=85",
  fruitMix:
    "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=85",
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
  "fr-mango-by-air": "mango",
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
