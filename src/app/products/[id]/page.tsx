'use client';
import BackButton from '@/components/details/back-button';
import Details from '@/components/details/details';
import { useProductStore } from '@/stores/product-store';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

export default function Page() {
  const items = useProductStore((state) => state.items);

  const pathname = usePathname();
  const result = pathname.replace(/^\/[a-z]+\//, '');
  const currentItem = items.products.find((item) => item.id === +result);

  return (
    <div className={cn('flex w-full flex-col items-center justify-center p-5 max-sm:p-1')}>
      {currentItem && <Details currentItem={currentItem} />}
      <div className={cn('flex w-full justify-center p-5')}>
        <BackButton />
      </div>
    </div>
  );
}
