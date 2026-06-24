export type ProductCategory = "vegetables" | "fruits" | "herbs";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: ProductCategory;
  description: string;
  image: string;
  featured?: boolean;
}

export interface CategoryMeta {
  slug: ProductCategory;
  title: string;
  subtitle: string;
  image: string;
  icon: "vegetables" | "fruits" | "herbs";
}
