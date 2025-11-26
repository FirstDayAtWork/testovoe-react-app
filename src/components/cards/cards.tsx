import type { Products } from '@/types/types';

import Card from './card';
import { cn } from '@/utils/cn';
import { useProductStore } from '@/stores/product-store';

type CardsProps = {
  items: Products;
};

export default function Cards(props: CardsProps) {
  const { items } = props;

  const likedItems = useProductStore((state) => state.likedItems);
  const filterValue = useProductStore((state) => state.filterValue);

  const filteredByLike =
    filterValue === 'all'
      ? items.products
      : items.products.filter((item) => likedItems.includes(item.id));

  return (
    <ul className={cn('flex max-w-[1000px] flex-row flex-wrap justify-center gap-5')}>
      {filteredByLike.length > 0 ? (
        filteredByLike.map((item) => <Card key={item.id + '.'} item={item} />)
      ) : (
        <h2>{'No Favourites :('}</h2>
      )}
    </ul>
  );
}
