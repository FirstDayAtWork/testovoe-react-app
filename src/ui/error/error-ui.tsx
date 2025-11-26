'use client';

export default function ErrorUi({ error }: { error: Error & { digest?: string } }) {
  return (
    <div>
      <h2>{error.name}</h2>
      <h3>{error.message}</h3>
      <pre>
        <code>{error.stack}</code>
      </pre>
    </div>
  );
}
