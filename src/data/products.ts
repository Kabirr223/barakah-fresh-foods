import type { Product, ProductCategory, CategoryMeta } from "@/types/catalog";
import {
  categoryImageKeys,
  localImage,
  productImageKeys,
  type StockImageKey,
} from "@/lib/image-catalog";

const img = (key: StockImageKey) => localImage(key);

const productImg = (id: string) =>
  img(productImageKeys[id] ?? "market");

export const categoryShowcase: CategoryMeta[] = [
  {
    slug: "vegetables",
    title: "Vegetables & Fresh Produce",
    subtitle: "Daily arrivals, restaurant-grade quality.",
    image: img(categoryImageKeys.vegetables),
    icon: "vegetables",
  },
  {
    slug: "fruits",
    title: "Fruits",
    subtitle: "Seasonal picks and premium varietals.",
    image: img(categoryImageKeys.fruits),
    icon: "fruits",
  },
  {
    slug: "herbs",
    title: "Herbs & Speciality Products",
    subtitle: "Aromatic herbs and leafy essentials.",
    image: img(categoryImageKeys.herbs),
    icon: "herbs",
  },
];

export const products: Product[] = [
  // Vegetables & Fresh Produce
  {
    id: "veg-coconuts",
    name: "Coconuts",
    category: "vegetables",
    description: "Fresh drinking coconuts — ideal for juice bars and dessert menus.",
    image: productImg("veg-coconuts"),
    featured: true,
  },
  {
    id: "veg-vine-tomatoes",
    name: "Vine Tomatoes",
    category: "vegetables",
    description: "Vine-ripened tomatoes with deep colour and balanced acidity.",
    image: productImg("veg-vine-tomatoes"),
    featured: true,
  },
  {
    id: "veg-loose-tomato-dutch",
    name: "Loose Tomato Dutch",
    category: "vegetables",
    description: "Dutch loose tomatoes — consistent sizing for prep teams.",
    image: productImg("veg-loose-tomato-dutch"),
  },
  {
    id: "veg-cherry-vine-dutch",
    name: "Cherry Vine Dutch",
    category: "vegetables",
    description: "Sweet cherry tomatoes on the vine for premium plating.",
    image: productImg("veg-cherry-vine-dutch"),
    featured: true,
  },
  {
    id: "veg-green-pepper",
    name: "Green Pepper",
    category: "vegetables",
    description: "Firm capsicums with a clean, bright bite.",
    image: productImg("veg-green-pepper"),
  },
  {
    id: "veg-red-pepper",
    name: "Red Pepper",
    category: "vegetables",
    description: "Fully coloured reds — excellent for roasting and grills.",
    image: productImg("veg-red-pepper"),
  },
  {
    id: "veg-yellow-pepper",
    name: "Yellow Pepper",
    category: "vegetables",
    description: "Golden capsicums with mellow sweetness.",
    image: productImg("veg-yellow-pepper"),
  },
  {
    id: "veg-aubergine",
    name: "Aubergine",
    category: "vegetables",
    description: "Glossy skins and creamy centres — perfect for grills and bakes.",
    image: productImg("veg-aubergine"),
  },
  {
    id: "veg-cucumber",
    name: "Cucumber",
    category: "vegetables",
    description: "Crisp cucumbers for salads, pickles, and cold plates.",
    image: productImg("veg-cucumber"),
  },
  {
    id: "veg-courgette",
    name: "Courgette",
    category: "vegetables",
    description: "Tender courgettes with delicate flavour for high-heat cooking.",
    image: productImg("veg-courgette"),
  },
  {
    id: "veg-carrots",
    name: "Carrots",
    category: "vegetables",
    description: "Sweet, crunchy roots — ideal for stocks, roasts, and juicing.",
    image: productImg("veg-carrots"),
  },
  {
    id: "veg-sweet-potato",
    name: "Sweet Potato",
    category: "vegetables",
    description: "Dense, sugary flesh — excellent yield for sides and fries.",
    image: productImg("veg-sweet-potato"),
  },
  {
    id: "veg-jalapeno",
    name: "Jalapeno",
    category: "vegetables",
    description: "Bright heat with consistent spice levels batch to batch.",
    image: productImg("veg-jalapeno"),
  },
  {
    id: "veg-spanish-onion",
    name: "Spanish Onion",
    category: "vegetables",
    description: "Large Spanish onions — high juice content for caramelisation.",
    image: productImg("veg-spanish-onion"),
  },
  {
    id: "veg-cyprus-potato",
    name: "Cyprus Potato",
    category: "vegetables",
    description: "Premium Cyprus potatoes — fluffy texture, exceptional roast results.",
    image: productImg("veg-cyprus-potato"),
    featured: true,
  },

  // Fruits
  {
    id: "fr-custard-apples",
    name: "Custard Apples",
    category: "fruits",
    description: "Aromatic custard apples — handle gently, serve at perfect ripeness.",
    image: productImg("fr-custard-apples"),
  },
  {
    id: "fr-banana-chiquita",
    name: "Banana Chiquita",
    category: "fruits",
    description: "Branded Chiquita lines with dependable ripening curves.",
    image: productImg("fr-banana-chiquita"),
    featured: true,
  },
  {
    id: "fr-royal-gala",
    name: "Royal Gala Apple",
    category: "fruits",
    description: "Crisp gala apples with balanced sweetness.",
    image: productImg("fr-royal-gala"),
    featured: true,
  },
  {
    id: "fr-green-apple",
    name: "Green Apple",
    category: "fruits",
    description: "Tart green apples — excellent for pastry and juice.",
    image: productImg("fr-green-apple"),
  },
  {
    id: "fr-oranges",
    name: "Oranges",
    category: "fruits",
    description: "Juicing and eating oranges with vibrant zest aroma.",
    image: productImg("fr-oranges"),
  },
  {
    id: "fr-lemons",
    name: "Lemons",
    category: "fruits",
    description: "High-oil skins for bars, kitchens, and patisserie.",
    image: productImg("fr-lemons"),
  },
  {
    id: "fr-mango-brazil",
    name: "Mango Brazil",
    category: "fruits",
    description: "Value-forward Brazilian mangoes for high-volume service.",
    image: productImg("fr-mango-brazil"),
  },
  {
    id: "fr-mango-by-air",
    name: "Mango By Air",
    category: "fruits",
    description: "Air-freighted mangoes for peak aroma and silky texture.",
    image: productImg("fr-mango-by-air"),
    featured: true,
  },
  {
    id: "fr-grapes",
    name: "Grapes",
    category: "fruits",
    description: "Seasonal grape lines — availability varies by origin and bunch quality.",
    image: productImg("fr-grapes"),
  },
  {
    id: "fr-pomegranate",
    name: "Pomegranate",
    category: "fruits",
    description: "Ruby arils with bright acidity — retail and juice friendly.",
    image: productImg("fr-pomegranate"),
  },
  {
    id: "fr-watermelon",
    name: "Watermelon",
    category: "fruits",
    description: "Heavy, resonant melons — cut-to-order programmes available.",
    image: productImg("fr-watermelon"),
    featured: true,
  },

  // Herbs & Speciality Products
  {
    id: "hb-coriander",
    name: "Coriander",
    category: "herbs",
    description: "Bunched coriander with intense aroma for finishing.",
    image: productImg("hb-coriander"),
    featured: true,
  },
  {
    id: "hb-mint",
    name: "Mint",
    category: "herbs",
    description: "Peppermint-forward bunches for drinks and desserts.",
    image: productImg("hb-mint"),
    featured: true,
  },
  {
    id: "hb-spinach",
    name: "Spinach",
    category: "herbs",
    description: "Tender leaves for wilting, smoothies, and retail packs.",
    image: productImg("hb-spinach"),
  },
  {
    id: "hb-parsley",
    name: "Parsley",
    category: "herbs",
    description: "Flat and curly lines available — ask your account manager.",
    image: productImg("hb-parsley"),
  },
  {
    id: "hb-dill",
    name: "Dill",
    category: "herbs",
    description: "Feathery dill for seafood, pickles, and sauces.",
    image: productImg("hb-dill"),
  },
];

export const categoryDisplayCounts: Record<ProductCategory, number> = {
  vegetables: 85,
  fruits: 40,
  herbs: 11,
};

export const categoryLabels: Record<ProductCategory, string> = {
  vegetables: "Vegetables & Fresh Produce",
  fruits: "Fruits",
  herbs: "Herbs & Speciality Products",
};

export const allCategories: ProductCategory[] = ["vegetables", "fruits", "herbs"];

export function getProductsByCategory(category: ProductCategory | "all") {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getCategoryCount(category: ProductCategory) {
  return products.filter((p) => p.category === category).length;
}

export const featuredProducts = products.filter((p) => p.featured);
