'use client';

import { cn } from '@/utils/cn';

export default function CloseButton({ callback }: { callback: () => void }) {
  return (
    <button
      onClick={callback}
      className={cn(`hover:cursor-pointer`)}
      title={'Close'}
      name="close button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 -960 960 960"
        width="36px"
        fill="#FFFFFF"
      >
        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
      </svg>
    </button>
  );
}
