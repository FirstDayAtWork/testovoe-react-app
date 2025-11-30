import type { ProductDetails } from '@/types/types';
import { cn } from '@/utils/cn';

type DetailProps = {
  data: ProductDetails;
  name: keyof ProductDetails;
};

export default function Detail(props: DetailProps) {
  const { data, name } = props;

  if (name === 'dimensions') {
    const array = Object.entries(data[name]);
    return (
      <>
        {array.map((item) => (
          <li key={'.' + item[0]} className={cn('mt-2 flex justify-between p-2 capitalize')}>
            <span>{item[0]}</span>
            <span>{item[1]}</span>
          </li>
        ))}
      </>
    );
  }

  return (
    <li className={cn('mt-2 flex justify-between p-2 capitalize')}>
      <span>{name}</span>
      <span>{data[name] ?? 'unknown'}</span>
    </li>
  );
}
