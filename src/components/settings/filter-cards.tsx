import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/utils/cn';
import type { ChangeEvent } from 'react';

export default function FilterCards() {
  const navigate = useRouter();
  const location = useSearchParams();

  function handleOptionChange(event: ChangeEvent<HTMLSelectElement>) {
    const queries = new URLSearchParams(location?.toString());
    queries.set('filter', event.target.value);

    navigate.push(`?${queries.toString()}`);
  }

  return (
    <select
      className={cn('bg-card border-border-card max-w-[118px] rounded-2xl border-[3px] p-3')}
      value={location.get('filter') ?? 'all'}
      onChange={handleOptionChange}
      name="filter-cards"
      id="filter-cards"
    >
      <option value="all">All</option>
      <option value="favourite">Favourite</option>
    </select>
  );
}
