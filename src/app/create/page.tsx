'use client';

import CreateForm from '@/components/card-form/card-form';
import { cn } from '@/utils/cn';

export default function Page() {
  return (
    <div
      className={cn(
        'flex h-[calc(100vh-60px)] items-center justify-center bg-black font-sans max-sm:h-full',
      )}
    >
      <main
        className={cn(
          `bg-card border-border-card flex w-full max-w-3xl flex-col items-center justify-between rounded-lg border-[3px] sm:items-start`,
        )}
      >
        <h2 className={cn('ext-text-card m-4 text-4xl')}>Create Card</h2>
        <CreateForm />
      </main>
    </div>
  );
}
