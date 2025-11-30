'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navNames = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Create', path: '/create' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={cn('text-text-card flex h-full items-center justify-center gap-1')}>
      {navNames.map((item) => (
        <Link
          className={cn(
            `w-[90px] p-2 text-center ${pathname === item.path ? 'border-b-2 border-white text-white' : ''}`,
          )}
          key={item.name}
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
