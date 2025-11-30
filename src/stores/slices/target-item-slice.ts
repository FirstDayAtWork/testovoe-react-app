import { ProductDetails } from '@/types/types';
import type { StateCreator } from 'zustand';

export type TargetItemSlice = {
  targetItem: ProductDetails | null;
  addTargetItem: (item: ProductDetails | null) => void;
};

export const useTargetItemSlice: StateCreator<TargetItemSlice> = (set) => ({
  targetItem: null,
  addTargetItem: (item) => {
    set({ targetItem: item });
  },
});
