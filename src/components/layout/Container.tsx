import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

/** Membatasi konten pada lebar editorial 1200px dengan gutter responsif. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10', className)}>
      {children}
    </div>
  );
}
