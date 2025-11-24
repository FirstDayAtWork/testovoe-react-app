import type { ProductDetails } from '@/types/types';

export const categories: (keyof ProductDetails)[] = [
  'brand',
  'category',
  'stock',
  'price',
  'dimensions',
];
