import { cn } from '@/utils/cn';
import FilterCards from './filter-cards';
import SearchCards from './search-cards';

export default function Settings() {
  return (
    <div
      className={cn(
        'flex w-full max-w-[1000px] flex-row flex-wrap justify-center gap-5 max-md:flex-col',
      )}
    >
      <SearchCards />
      <FilterCards />
    </div>
  );
}
