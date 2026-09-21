import { cn } from '../../lib/cn';

/** Token ringkas untuk keterampilan / tag teknologi. */
export function Chip({
  children,
  className,
  tone = 'soft',
}: {
  children: string;
  className?: string;
  tone?: 'soft' | 'outline';
}) {
  return (
    <li
      className={cn(
        'rounded-full px-3.5 py-2 text-[0.8125rem] font-medium leading-snug',
        tone === 'soft'
          ? 'bg-softblue text-navy'
          : 'border border-line bg-white text-muted',
        className,
      )}
    >
      {children}
    </li>
  );
}
