import Image from 'next/image';
import Detail from './detail';
import { categories } from '@/utils/categories';
import type { ProductDetails } from '@/types/types';

export type DetailsProps = {
  currentItem: ProductDetails;
};

export default function Details(props: DetailsProps) {
  const { currentItem } = props;

  return (
    <>
      <div></div>
      <div>
        <div>
          {currentItem.images[0] && (
            <Image src={currentItem.images[0]} alt="Product Image" width={200} height={200} />
          )}

          <span>{currentItem.title}</span>
          <p>{currentItem.description}</p>

          <ul>
            {categories.map((item) => (
              <Detail key={item + '.'} data={currentItem} name={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
