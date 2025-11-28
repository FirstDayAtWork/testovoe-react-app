import { create } from 'zustand';
import { useProductSlice, type ProductSlice } from './slices/product-slice';
import { useLikeSlice, type LikeSlice } from './slices/like-slice';
import { useFilterSlice, type FilterSlice } from './slices/filter-slice';
import { IdCounterSlice, useIdCounterSlice } from './slices/id-counter-slice';

type ProductStoreTypes = ProductSlice & LikeSlice & FilterSlice & IdCounterSlice;

export const useProductStore = create<ProductStoreTypes>((...a) => ({
  ...useProductSlice(...a),
  ...useLikeSlice(...a),
  ...useFilterSlice(...a),
  ...useIdCounterSlice(...a),
}));
