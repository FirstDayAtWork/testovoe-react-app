import type { StateCreator } from 'zustand';

export type FilterSlice = {
  filterValue: string;
  setFilterValue: (value: string) => void;
};

export const useFilterSlice: StateCreator<FilterSlice> = (set) => ({
  filterValue: 'all',
  setFilterValue: (value) => {
    set({ filterValue: value });
  },
});
