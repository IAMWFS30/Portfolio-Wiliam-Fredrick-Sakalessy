import { cn } from '../../lib/cn';

/**
 * Eyebrow + judul + lede opsional. Eyebrow bersifat dekoratif sehingga bukan
 * elemen heading — ini mencegah level palsu di antara h2 dan h3.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = 'left',
  onNavy = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  onNavy?: boolean;
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('text-eyebrow mb-4', onNavy ? 'text-blue-400' : 'text-blue')}>
        {eyebrow}
      </p>
      <h2 id={id} className={onNavy ? 'text-white' : undefined}>
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            onNavy ? 'text-softblue/80' : 'text-muted',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
