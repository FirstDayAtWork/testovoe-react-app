import type { ProductDetails, Products } from '@/types/types';
import type { StateCreator } from 'zustand';

export type ProductSlice = {
  items: Products;
  initItems: (items: Products) => void;
  setItem: (item: ProductDetails) => void;
  updateItem: (id: number, item: ProductDetails) => void;
  removeItem: (id: number) => void;
  error: null | Error;
  isLoading: boolean;
  fetchData: (url: string) => Promise<void>;
};

export const useProductSlice: StateCreator<ProductSlice> = (set) => ({
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
  updateItem: (id, updatedItem) => {
    set((state) => ({
      items: {
        ...state.items,
        products: state.items.products.map((item) => (item.id === id ? updatedItem : item)),
      },
    }));
  },
  removeItem: (id): void => {
    set((state) => ({
      items: {
        ...state.items,
        products: state.items.products.filter((element) => element.id !== id),
      },
    }));
  },

  isLoading: false,
  error: null,
  fetchData: async (url: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ items: data, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error, isLoading: false });
      }
    }
  },
});
