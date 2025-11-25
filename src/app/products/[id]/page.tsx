'use client';
import Details from '@/components/details/details';
import { useProductStore } from '@/stores/product-store';
import { usePathname } from 'next/navigation';

export default function Page() {
  const items = useProductStore((state) => state.items);

  const pathname = usePathname();
  const result = pathname.replace(/^\/[a-z]+\//, '');
  const currentItem = items.products.find((item) => item.id === +result);

  return <>{currentItem && <Details currentItem={currentItem} />}</>;
}
