'use client';
import RedirectButton from '@/ui/redirect-button/redirect-button';
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
      {currentItem ? (
        <Details currentItem={currentItem} />
      ) : (
        <h2 className={cn('m-5 flex flex-col gap-5')}>
          <span className={cn('text-xl')}>
            {
              "Ooops! Since we can't upload created Cards to API and then get em back to our app. I decided to not fetch single card in this particular task xD."
            }
          </span>
          <span className={cn('text-text-card text-center text-lg')}>
            {'So please go back to Products page and click on the right card ;O'}
          </span>
        </h2>
      )}
      <div className={cn('flex w-full justify-center p-5')}>
        <RedirectButton href="/" title="Go to Main" width={'400px'} />
      </div>
    </div>
  );
}
