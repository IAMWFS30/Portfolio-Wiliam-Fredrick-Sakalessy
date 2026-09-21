import { useRef, useState } from 'react';
import { Code2, Menu } from 'lucide-react';
import { navItems, profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-ivory/85 backdrop-blur-md">
      <Container>
        <div className="flex h-[var(--header-h)] items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src="/img/logo-wiliam.jpeg"
              alt="Wiliam FS logo"
              width={32}
              height={32}
              className="size-8 rounded-md object-cover"
            />
            <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-navy">
              Wiliam <span className="text-blue">FS</span>
              <span className="ml-1.5 hidden font-normal uppercase text-muted sm:inline">
                | Portfolio
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors',
                        isActive ? 'text-navy' : 'text-muted hover:text-navy',
                      )}
                    >
                      {item.label}
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-blue"
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-full text-navy transition-colors hover:bg-softblue"
            >
              <Code2 aria-hidden="true" className="size-[18px]" />
            </a>
            <a
              href={profile.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Hire me
            </a>
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open navigation"
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-softblue lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navItems}
        activeId={activeId}
        triggerRef={triggerRef}
      />
    </header>
  );
}
