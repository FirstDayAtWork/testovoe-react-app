import { create } from 'zustand';

export type LikeStoreTypes = {
  likedItems: number[];
  addLikedItem: (id: number) => void;
  removeLikedItem: (id: number) => void;
};

export const useLikeStore = create<LikeStoreTypes>((set) => ({
  likedItems: [],
  addLikedItem: (id) => {
    set((state) => ({ likedItems: [...state.likedItems, id] }));
  },
  removeLikedItem: (id) => {
    set((state) => ({ likedItems: [...state.likedItems.filter((item) => item !== id)] }));
  },
}));
