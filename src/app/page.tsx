import RedirectButton from '@/ui/redirect-button/redirect-button';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <div
      className={cn(
        'flex h-[calc(100vh-60px)] items-center justify-center bg-zinc-50 font-sans dark:bg-black',
      )}
    >
      <main
        className={cn(
          `flex w-full max-w-3xl flex-col items-center justify-between gap-5 bg-white px-16 py-32 sm:items-start dark:bg-black`,
        )}
      >
        <h1 className={cn('w-full text-center tracking-widest')}>
          <span className={cn('text-text-card text-6xl')}>Wel</span>
          <span className={cn('text-6xl font-semibold text-white')}>CUM</span>
        </h1>

        <h2 className={cn('text-text-card w-full text-center text-sm')}>to my awesome website!</h2>

        <RedirectButton title="Check Products" href="/products" width={'200px'} />
      </main>
    </div>
  );
}
