import { cn } from '@/utils/cn';
import FilterCards from './filter-cards';

export default function Settings() {
  return (
    <div
      className={cn('flex h-[60px] w-full max-w-[1000px] flex-row flex-wrap justify-center gap-5')}
    >
      <FilterCards />
    </div>
  );
}
