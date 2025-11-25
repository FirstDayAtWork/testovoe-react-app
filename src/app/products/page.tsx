'use client';

import getData from '@/api/getData';
import Cards from '@/components/cards/cards';
import { useProductStore } from '@/stores/product-store';
import { cn } from '@/utils/cn';
import { URLS } from '@/utils/urls';
import { useEffect } from 'react';

export default function Products() {
  const items = useProductStore((state) => state.items);
  const initItems = useProductStore((state) => state.initItems);

  useEffect(() => {
    (async () => {
      const data = await getData(URLS.get);

      if (!(data instanceof Error)) {
        console.log('DATA', data);
        initItems(data);
      }
    })();
  }, []);

  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black',
      )}
    >
      <main
        className={cn(
          `flex min-h-screen w-full flex-col items-center justify-center bg-white px-20 py-20 dark:bg-black`,
        )}
      >
        <h1>Products</h1>
        <Cards items={items} />
      </main>
    </div>
  );
}
