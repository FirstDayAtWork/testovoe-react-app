import Image from 'next/image';
import Detail from './detail';
import { categories } from '@/utils/categories';
import type { ProductDetails } from '@/types/types';
import { cn } from '@/utils/cn';

export type DetailsProps = {
  currentItem: ProductDetails;
};

export default function Details(props: DetailsProps) {
  const { currentItem } = props;

  return (
    <div
      className={cn(
        'flex max-w-[1000px] items-center justify-center rounded-2xl bg-zinc-50 p-5 font-sans dark:bg-black',
      )}
    >
      <div className={cn('flex flex-row max-md:flex-col')}>
        {currentItem.images[0] && (
          <Image
            src={currentItem.images[0]}
            alt="Product Image"
            width={300}
            height={300}
            className={cn('object-contain max-md:m-auto')}
          />
        )}
        <div className={cn('m-10 flex flex-col max-sm:m-1')}>
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
    </div>
  );
}
