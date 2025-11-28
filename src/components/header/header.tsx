'use client';

import { cn } from '@/utils/cn';
import Navigation from './navigation/navigation';

export default function Header() {
  return (
    <header
      className={cn(
        'border-border-2 h-[60px] border-b border-solid p-5 font-sans text-white dark:bg-black',
      )}
    >
      <div className={cn('h-full')}>
        <Navigation />
      </div>
    </header>
  );
}
