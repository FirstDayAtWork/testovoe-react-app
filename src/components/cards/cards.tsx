import type { Products } from '@/types/types';

import Card from './card';
import { cn } from '@/utils/cn';
import { useProductStore } from '@/stores/product-store';
import { useSearchParams } from 'next/navigation';

type CardsProps = {
  items: Products;
};

export default function Cards(props: CardsProps) {
  const { items } = props;

  const location = useSearchParams();
  const likedItems = useProductStore((state) => state.likedItems);
  const filterQuery = location.get('filter') ?? 'all';
  const searchQuery = location.get('search') ?? '';

  const filteredByLike =
    filterQuery === 'all'
      ? items.products
      : items.products.filter((item) => likedItems.includes(item.id));

  const search = searchQuery
    ? filteredByLike.filter((item) =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      )
    : filteredByLike;

  return (
    <ul className={cn('flex max-w-[1000px] flex-row flex-wrap justify-center gap-5')}>
      {search.length > 0 ? (
        search.map((item) => <Card key={item.id + '.'} item={item} />)
      ) : (
        <h2 className={cn('text-xl')}>{'No Results Found ;O'}</h2>
      )}
    </ul>
  );
}
