import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';

type Tone = 'ivory' | 'white' | 'navy';

const toneClass: Record<Tone, string> = {
  ivory: 'bg-ivory',
  white: 'bg-white',
  navy: 'bg-navy text-white on-navy',
};

/**
 * Section semantik ber-anchor dengan pita latar. Irama warna berganti antara
 * ivory dan putih supaya pemisahan datang dari warna dan ruang, bukan garis.
 */
export function Section({
  id,
  tone = 'ivory',
  children,
  className,
  labelledBy,
}: {
  id: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  /** id heading yang menamai section ini, untuk pembaca layar. */
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-20 lg:py-28', toneClass[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
