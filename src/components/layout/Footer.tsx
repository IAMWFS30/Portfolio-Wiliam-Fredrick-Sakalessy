import { profile } from '../../data/profile';
import { Container } from './Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy py-12 text-softblue/70">
      <Container>
        <div className="flex flex-col gap-6 border-t border-navy-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
              {profile.fullName}
            </p>
            <p className="mt-1.5 text-xs">
              {profile.role} · {profile.roleSuffix}
            </p>
          </div>
          <p className="text-xs">© {year} · Bekasi, Indonesia · Remote-ready</p>
        </div>
      </Container>
    </footer>
  );
}
