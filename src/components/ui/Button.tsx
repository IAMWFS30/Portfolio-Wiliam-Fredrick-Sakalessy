import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline' | 'ghost' | 'onNavy';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-semibold ' +
  'transition-colors duration-200 min-h-11 px-6 py-3';

const variants: Record<Variant, string> = {
  primary: 'bg-blue text-white hover:bg-navy-800',
  outline: 'border border-navy/20 text-navy hover:border-navy/45 hover:bg-white',
  ghost: 'text-navy hover:bg-softblue',
  onNavy:
    'border border-white/20 bg-white/8 text-white hover:bg-white/15',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Merender <a> atau <button> sungguhan sesuai maksud penggunaannya — tidak
 * pernah div yang bisa diklik, agar keterjangkauan keyboard dan role implisit
 * tetap ada.
 */
export function Button(
  props: CommonProps &
    (
      | {
          href: string;
          download?: boolean | string;
          external?: boolean;
          onClick?: never;
          type?: never;
        }
      | {
          href?: never;
          download?: never;
          external?: never;
          onClick?: () => void;
          type?: 'button' | 'submit';
        }
    ),
) {
  const { children, variant = 'primary', className } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const rel = props.external ? 'noopener noreferrer' : undefined;
    const target = props.external ? '_blank' : undefined;
    return (
      <a
        href={props.href}
        className={classes}
        {...(props.download !== undefined ? { download: props.download } : {})}
        {...(rel ? { rel } : {})}
        {...(target ? { target } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
