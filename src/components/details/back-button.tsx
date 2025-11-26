import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const navigate = useRouter();

  function handleClick() {
    navigate.push('/');
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'bg-card border-border-card text-button w-full max-w-100 rounded-[10px] border-[3px] px-[25px] py-[15px] text-lg',
      )}
    >
      Go To Main
    </button>
  );
}
