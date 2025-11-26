import { useProductStore } from '@/stores/product-store';
import { cn } from '@/utils/cn';
import type { ChangeEvent } from 'react';

export default function FilterCards() {
  const filterValue = useProductStore((state) => state.filterValue);
  const setFilterValue = useProductStore((state) => state.setFilterValue);

  function handleOptionChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilterValue(event.target.value);
  }

  return (
    <select
      className={cn('bg-card border-border-card rounded-2xl border-[3px] p-3')}
      value={filterValue}
      onChange={handleOptionChange}
      name="filter-cards"
      id="filter-cards"
    >
      <option value="all">All</option>
      <option value="favourite">Favourite</option>
    </select>
  );
}
