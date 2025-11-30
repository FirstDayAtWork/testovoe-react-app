import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useEffect, useState, type ChangeEvent } from 'react';
import useDebounce from '@/hooks/useDebounce';

export default function SearchCards() {
  const navigate = useRouter();
  const location = useSearchParams();
  const [searchValue, setSearchValue] = useState(location.get('search') ?? '');
  const debounce = useDebounce(searchValue);

  useEffect(() => {
    const queries = new URLSearchParams(location.toString());
    queries.set('search', debounce);
    navigate.replace(`?${queries.toString()}`);
  }, [debounce]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <input
      type="search"
      className={cn('bg-card border-border-card w-full max-w-[400px] rounded-2xl border-[3px] p-3')}
      value={searchValue}
      onChange={handleChange}
      name="search-cards"
      id="search-cards"
      placeholder="Type here..."
    />
  );
}
