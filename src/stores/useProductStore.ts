import type { ProductDetails, Products } from '@/types/types';
import { create } from 'zustand';

export type ProductStoreTypes = {
  items: Products;
  initItems: (items: Products) => void;
  setItem: (item: ProductDetails) => void;
  removeItem: (id: number) => void;
};

export const useProductStore = create<ProductStoreTypes>((set) => ({
  items: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
    query: '',
  },
  initItems: (products): void => {
    set({ items: products });
  },
  setItem: (item): void => {
    set((state) => ({ items: { ...state.items, products: [...state.items.products, item] } }));
  },
  removeItem: (id): void => {
    set((state) => ({
      items: {
        ...state.items,
        products: state.items.products.filter((element) => element.id !== id),
      },
    }));
  },
}));
