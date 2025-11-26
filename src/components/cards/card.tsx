import type { ProductDetails } from '@/types/types';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import RemoveButton from './remove-button';
import { useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import LikeButton from './like-button';

type CardsProps = {
  item: ProductDetails;
};

export default function Card(props: CardsProps) {
  const { item } = props;
  const navigate = useRouter();

  function handleCardClick(event: MouseEvent) {
    if (
      event.target instanceof HTMLButtonElement ||
      event.target instanceof SVGSVGElement ||
      event.target instanceof SVGPathElement
    ) {
      return;
    }
    navigate.push(`/products/${item.id}`);
  }

  return (
    <li
      onClick={handleCardClick}
      className={cn(
        'bg-card border-border-card h-[317px] w-[320px] overflow-hidden rounded-lg border-[3px] shadow-md transition-shadow duration-300 hover:shadow-lg',
      )}
    >
      {item.images[0] && (
        <div className={cn('relative flex justify-center p-2')}>
          <LikeButton id={item.id} />
          <Image
            src={item.images[0]}
            alt="Product Image"
            width={150}
            height={150}
            className={cn('object-contain')}
          />
          <RemoveButton id={item.id} />
        </div>
      )}
      <div className={cn('flex h-35 flex-col p-4')}>
        <span className={cn('mb-2 min-h-14 text-center text-lg font-semibold text-white')}>
          {item.title}
        </span>
        <p className={cn('text-text-card overflow-hidden text-sm')}>{item.description}</p>
      </div>
    </li>
  );
}
