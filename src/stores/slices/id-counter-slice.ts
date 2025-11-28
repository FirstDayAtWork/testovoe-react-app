import type { StateCreator } from 'zustand';

export type IdCounterSlice = {
  id: number;
  increment: () => void;
};

export const useIdCounterSlice: StateCreator<IdCounterSlice> = (set) => ({
  id: 200,
  increment: () => {
    set((state) => ({ id: state.id + 1 }));
  },
});
