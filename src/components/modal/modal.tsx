'use client';

import { createPortal } from 'react-dom';
import type { ReactNode, Ref } from 'react';
import type { MouseEvent } from 'react';
import { cn } from '@/utils/cn';
import CloseButton from '@/ui/close-button/close-button';

type ModalProps = {
  dialogReference: Ref<HTMLDialogElement> | undefined;
  title: string;
  children: ReactNode;
};

export default function Modal(props: ModalProps) {
  const { dialogReference, title, children } = props;

  function handleEscape(event: { key: string }): void {
    if (!dialogReference) return;

    if (event.key === 'Escape' && 'current' in dialogReference) {
      dialogReference?.current?.close();
    }
  }

  function handleClose(): void {
    if (!dialogReference) return;

    if ('current' in dialogReference) {
      dialogReference?.current?.close();
    }
  }

  function handleBlur(event: MouseEvent<HTMLDialogElement>): void {
    if (event.target instanceof HTMLDialogElement && event.target.tagName === 'DIALOG') {
      handleClose();
    }
  }

  return createPortal(
    <dialog
      onMouseDown={handleBlur}
      ref={dialogReference}
      onKeyDown={handleEscape}
      id="modal-dialog"
      className={cn('m-auto backdrop:bg-[rgb(0_0_0/60%)] backdrop:backdrop-blur-xs')}
    >
      <main
        className={cn(
          `bg-card border-border-card flex max-w-3xl flex-col items-center justify-between rounded-lg border-[3px] sm:items-start`,
        )}
      >
        <div key={'basic'} className={cn('flex h-[72px] w-full items-center justify-between p-4')}>
          <h2 className={cn('ext-text-card text-4xl')}>{title}</h2>
          <CloseButton callback={handleClose} />
        </div>
        {children}
      </main>
    </dialog>,
    document && document?.body,
  );
}
