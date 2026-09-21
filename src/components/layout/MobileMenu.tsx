import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { NavItem } from '../../types/portfolio';
import { useScrollLock } from '../../hooks/useScrollLock';
import { cn } from '../../lib/cn';

/**
 * Panel navigasi setinggi layar untuk viewport kecil. Berperilaku sebagai
 * dialog modal: Escape menutup, fokus berpindah ke dalam saat dibuka dan
 * kembali ke pemicu saat ditutup, scroll body dikunci, target sentuh 44px.
 */
export function MobileMenu({
  open,
  onClose,
  items,
  activeId,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useScrollLock(open);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    // triggerRef stabil; hanya `open` yang boleh memicu ulang efek ini.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-navy/40" onClick={onClose} aria-hidden="true" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="on-navy absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-navy shadow-sheet"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-eyebrow text-blue-400">Menu</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="grid size-11 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 pb-8">
              <ul className="flex flex-col">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={onClose}
                        aria-current={isActive ? 'true' : undefined}
                        className={cn(
                          'flex min-h-[44px] items-center rounded-[12px] px-4 py-3 font-display text-lg font-semibold',
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-softblue/75 hover:bg-white/5 hover:text-white',
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
