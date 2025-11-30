'use client';
import { Suspense } from 'react';

import { cn } from '@/utils/cn';
import FilterCards from './filter-cards';
import SearchCards from './search-cards';
import Loader from '@/ui/loader/loader';

export default function Settings() {
  return (
    <div
      className={cn(
        'flex w-full max-w-[1000px] flex-row flex-wrap justify-center gap-5 max-md:flex-col',
      )}
    >
      <Suspense fallback={<Loader />}>
        <SearchCards />
        <FilterCards />
      </Suspense>
    </div>
  );
}
