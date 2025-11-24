import type { ProductDetails } from '@/types/types';

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
          <li key={'.' + item[0]}>
            <span>{item[0]}</span>
            <span>{item[1]}</span>
          </li>
        ))}
      </>
    );
  }

  return (
    <li>
      <span>{name}</span>
      <span>{data[name] ?? 'unknown'}</span>
    </li>
  );
}
