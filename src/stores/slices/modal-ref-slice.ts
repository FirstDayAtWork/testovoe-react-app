import type { Ref } from 'react';
import type { StateCreator } from 'zustand';

export type ModalRefSlice = {
  modalRef: Ref<HTMLDialogElement>;
  setModalRef: (item: Ref<HTMLDialogElement>) => void;
};

export const useModalRefSlice: StateCreator<ModalRefSlice> = (set) => ({
  modalRef: null,
  setModalRef: (item) => {
    set({ modalRef: item });
  },
});
