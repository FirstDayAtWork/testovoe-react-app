import type { StateCreator } from 'zustand';

export type LikeSlice = {
  likedItems: number[];
  addLikedItem: (id: number) => void;
  removeLikedItem: (id: number) => void;
};

export const useLikeSlice: StateCreator<LikeSlice> = (set) => ({
  likedItems: [],
  addLikedItem: (id) => {
    set((state) => ({ likedItems: [...state.likedItems, id] }));
  },
  removeLikedItem: (id) => {
    set((state) => ({ likedItems: [...state.likedItems.filter((item) => item !== id)] }));
  },
});
