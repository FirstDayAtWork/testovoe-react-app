import type { ProductDetails } from '@/types/types';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import Controls from './controls/controls';

type CardsProps = {
  item: ProductDetails;
};

export default function Card(props: CardsProps) {
  const { item } = props;

  return (
    <li
      className={cn(
        'bg-card border-border-card h-[360px] w-[320px] overflow-hidden rounded-lg border-[3px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer',
      )}
    >
      <Controls id={item.id} />

      <Link href={`/products/${item.id}`}>
        {item.images[0] && (
          <div className={cn('flex justify-center p-2')}>
            <Image
              src={item.images[0]}
              alt="Product Image"
              width={150}
              height={150}
              className={cn('object-contain')}
              loading="eager"
            />
          </div>
        )}
        <div className={cn('flex h-35 flex-col p-4')}>
          <span
            className={cn(
              'mb-2 min-h-14 max-w-[282px] overflow-hidden text-center text-lg font-semibold text-white',
            )}
          >
            {item.title}
          </span>
          <p className={cn('text-text-card overflow-hidden text-sm')}>{item.description}</p>
        </div>
      </Link>
    </li>
  );
}
