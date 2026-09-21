import { ArrowRight, Code2, MapPin, MessageCircle } from 'lucide-react';
import { profile, stats } from '../../data/profile';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';

/**
 * Hero editorial di permukaan navy gelap. Nama besar dua-warna, tagline,
 * lalu baris statistik. Foto Wiliam dipakai apa adanya (aset existing).
 *
 * Di bawah lg jadi satu kolom, nama terbaca lebih dulu.
 */
export function Hero() {
  const { assets, contact } = profile;

  return (
    <section id="home" className="on-navy relative overflow-hidden bg-navy pb-16 pt-14 lg:pb-20 lg:pt-20">
      {/* Aksen gradient dekoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-blue/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[420px] rounded-full bg-violet/15 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-blue-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </p>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-softblue/60">
              Hello, I'm
            </p>

            <h1 className="text-white">
              <span className="block">{profile.firstLine}</span>
              <span className="block text-blue-400">{profile.secondLine}</span>
            </h1>

            <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-base font-medium uppercase tracking-[0.08em] text-softblue/80 sm:text-lg">
              {profile.roleLine.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span aria-hidden="true" className="size-1 rounded-full bg-blue-400" />
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-softblue/80 sm:text-lg">
              {profile.heroStatement}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={contact.whatsappUrl} external>
                <MessageCircle aria-hidden="true" className="size-4" />
                Start a project
              </Button>
              <Button href="#work" variant="onNavy">
                View work
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button href={contact.githubUrl} external variant="onNavy">
                <Code2 aria-hidden="true" className="size-4" />
                GitHub
              </Button>
            </div>

            <p className="mt-7 flex items-center gap-2 text-sm text-softblue/60">
              <MapPin aria-hidden="true" className="size-4 text-blue-400" />
              {contact.location}
            </p>
          </div>

          {/* Foto Wiliam — aset existing, tidak diubah */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-surface border border-blue-400/30"
              />
              <div className="relative overflow-hidden rounded-surface shadow-sheet ring-1 ring-white/10">
                <img
                  src={`${import.meta.env.BASE_URL}${assets.portraitJpg}`}
                  alt={assets.portraitAlt}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-[50%_12%]"
                />
              </div>
              {/* Tagline editorial menempel di kartu foto */}
              <p className="mt-4 text-center font-display text-sm italic tracking-wide text-softblue/70">
                “{profile.tagline}”
              </p>
            </div>
          </div>
        </div>

        {/* Baris statistik */}
        <dl className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs leading-tight text-softblue/60 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
