'use client';

import { cn } from '@/utils/cn';

export default function ReloadButton() {
  function handleClick() {
    location.reload();
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        `bg-card border-border-card w-[200px] rounded-[10px] border-[3px] px-[25px] py-[15px] text-lg text-red-500 hover:cursor-pointer hover:border-red-500 hover:transition-all`,
      )}
    >
      Reload
    </button>
  );
}
