import type { ProductDetails } from '@/types/types';
import Image from 'next/image';

type CardsProps = {
  item: ProductDetails;
};

export default function Card(props: CardsProps) {
  const { item } = props;
  return (
    <li>
      {item.images[0] && (
        <Image src={item.images[0]} alt="Product Image" width={150} height={150} />
      )}
      <span>{item.title}</span>
      <p>{item.description}</p>
    </li>
  );
}
