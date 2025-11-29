'use client';

import Cards from '@/components/cards/cards';
import Settings from '@/components/settings/settings';
import { useProductStore } from '@/stores/product-store';
import ErrorUi from '@/ui/error/error-ui';
import Loader from '@/ui/loader/loader';
import ReloadButton from '@/ui/reload-button/reload-button';
import { cn } from '@/utils/cn';
import { URLS } from '@/utils/urls';
import { useEffect } from 'react';

export default function Products() {
  const fetchData = useProductStore((state) => state.fetchData);
  const error = useProductStore((state) => state.error);
  const isLoading = useProductStore((state) => state.isLoading);
  const items = useProductStore((state) => state.items);

  useEffect(() => {
    if (items.products.length > 0) return;
    fetchData(URLS.get);
  }, [fetchData, items.products.length]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={cn('flex flex-col items-center')}>
        <ErrorUi error={error} />
        <ReloadButton />
      </div>
    );
  }

  return (
    <div className={cn('flex min-h-screen items-center justify-center font-sans dark:bg-black')}>
      <main
        className={cn(
          `flex min-h-screen w-full flex-col items-center gap-5 pt-5 pr-20 pb-20 pl-20 dark:bg-black`,
        )}
      >
        <Settings />
        <Cards items={items} />
      </main>
    </div>
  );
}
