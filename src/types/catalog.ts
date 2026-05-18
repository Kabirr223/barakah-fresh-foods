export type ProductCategory =
  | "vegetables"
  | "fruits"
  | "exotic"
  | "frozen"
  | "herbs"
  | "snacks"
  | "drinks";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: ProductCategory;
  description: string;
  image: string;
  /** Frozen brand lines */
  brand?: "Rupa" | "Shana" | "Taj";
}

export interface CategoryMeta {
  slug: ProductCategory;
  title: string;
  subtitle: string;
  image: string;
}
