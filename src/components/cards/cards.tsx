import type { Products } from '@/types/types';

import Card from './card';

type CardsProps = {
  items: Products;
};

export default function Cards(props: CardsProps) {
  const { items } = props;

  return (
    <ul>
      {items.products.length > 0 &&
        items.products.map((item) => <Card key={item.id + '.'} item={item} />)}
    </ul>
  );
}
