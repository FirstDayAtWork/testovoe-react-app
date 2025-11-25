import type { Products } from '@/types/types';

import Card from './card';
import { cn } from '@/utils/cn';

type CardsProps = {
  items: Products;
};

export default function Cards(props: CardsProps) {
  const { items } = props;

  return (
    <ul className={cn('flex max-w-[1000px] flex-row flex-wrap justify-center gap-5')}>
      {items.products.length > 0 &&
        items.products.map((item) => <Card key={item.id + '.'} item={item} />)}
    </ul>
  );
}
