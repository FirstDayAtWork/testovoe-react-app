'use client';

import Image from 'next/image';
import Detail from './detail';
import { categories } from '@/utils/categories';
import { cn } from '@/utils/cn';
import { useProductStore } from '@/stores/product-store';

export type DetailsProps = {
  slug: string;
};

export default function Details(props: DetailsProps) {
  const { slug } = props;

  const items = useProductStore((state) => state.items);
  const currentItem = items.products.find((item) => item.id === +slug);

  return (
    <div
      className={cn(
        'flex w-full max-w-[1000px] items-center justify-center rounded-2xl p-5 font-sans dark:bg-black',
      )}
    >
      {currentItem ? (
        <div className={cn('flex w-full flex-row max-md:flex-col')}>
          {currentItem.images[0] && (
            <Image
              src={currentItem.images[0]}
              alt="Product Image"
              width={300}
              height={300}
              className={cn('object-contain max-md:m-auto')}
              loading="eager"
            />
          )}
          <div className={cn('m-10 flex w-full flex-col max-sm:m-1')}>
            <span className={cn('mb-2 min-h-14 text-2xl font-semibold text-white')}>
              {currentItem.title}
            </span>
            <p className={cn('text-xl leading-8')}>{currentItem.description}</p>

            <ul className={cn('text-text-card mt-5 flex flex-col text-sm')}>
              {categories.map((item) => (
                <Detail key={item + '.'} data={currentItem} name={item} />
              ))}
            </ul>
          </div>
        </div>
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
    </div>
  );
}
