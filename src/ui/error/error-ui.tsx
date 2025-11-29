'use client';
import { cn } from '@/utils/cn';

export default function ErrorUi({ error }: { error: Error & { digest?: string } }) {
  return (
    <div
      className={cn(
        'mx-auto my-2.5 flex max-h-[400px] w-full max-w-[800px] min-w-[350px] flex-col rounded-[10px] bg-red-500 p-5',
      )}
    >
      <h2 className={cn('text-2xl')}>{error.name}</h2>
      <h3>{error.message}</h3>
      <pre className={cn('overflow-hidden')}>
        <code>{error.stack}</code>
      </pre>
    </div>
  );
}
