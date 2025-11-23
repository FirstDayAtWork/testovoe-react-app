import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black',
      )}
    >
      <main
        className={cn(
          `flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black`,
        )}
      >
        Test 123
      </main>
    </div>
  );
}
