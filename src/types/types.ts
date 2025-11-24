export type Product = {
  id: number;
  title: string;
  images: string[];
  description: string;
};

export type Products = {
  products: ProductDetails[];
  total: number;
  skip: number;
  limit: number;
  query: string;
};

export type ProductDetails = {
  price: number;
  stock: number;
  category: string;
  brand: string;
  dimensions: Dimensions;
} & Product;

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};
