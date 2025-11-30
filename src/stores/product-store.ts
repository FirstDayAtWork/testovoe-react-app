import { create } from 'zustand';
import { useProductSlice, type ProductSlice } from './slices/product-slice';
import { useLikeSlice, type LikeSlice } from './slices/like-slice';
import { IdCounterSlice, useIdCounterSlice } from './slices/id-counter-slice';
import { TargetItemSlice, useTargetItemSlice } from './slices/target-item-slice';
import { ModalRefSlice, useModalRefSlice } from './slices/modal-ref-slice';

type ProductStoreTypes = ProductSlice &
  LikeSlice &
  IdCounterSlice &
  TargetItemSlice &
  ModalRefSlice;

export const useProductStore = create<ProductStoreTypes>((...a) => ({
  ...useProductSlice(...a),
  ...useLikeSlice(...a),
  ...useIdCounterSlice(...a),
  ...useTargetItemSlice(...a),
  ...useModalRefSlice(...a),
}));
