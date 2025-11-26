import { cn } from '@/utils/cn';
import FilterCards from './filter-cards';

export default function Settings() {
  return (
    <div
      className={cn(
        'bg-card border-border-card flex h-[60px] w-full max-w-[1000px] flex-row flex-wrap justify-center gap-5 rounded-lg border-[3px] shadow-md transition-shadow duration-300 hover:shadow-lg',
      )}
    >
      <FilterCards />
    </div>
  );
}
