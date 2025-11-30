import type { ProductDetails } from '@/types/types';
import { FormInputs } from '@/zod/schema';

export const categories: (keyof ProductDetails)[] = [
  'brand',
  'category',
  'stock',
  'price',
  'dimensions',
];

const INPUT_TYPES: Map<keyof FormInputs, string> = new Map()
  .set('title', 'text')
  .set('description', 'text')
  .set('brand', 'text')
  .set('category', 'text')
  .set('stock', 'number')
  .set('price', 'number')
  .set('width', 'number')
  .set('height', 'number')
  .set('depth', 'number')
  .set('image', 'file');

export const inputArray = [...INPUT_TYPES.entries()];
