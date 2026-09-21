import { profile } from '../../data/profile';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { CheckIcon } from '../ui/Icon';

/** Tentang / pitch. Menyampaikan apa yang dibangun dan alasan bekerja sama. */
export function About() {
  return (
    <Section id="about" tone="white" labelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="about-heading" eyebrow="About" title="What I build" />
          <p className="mt-6 text-base leading-relaxed text-charcoal/85 sm:text-lg">
            {profile.pitch}
          </p>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <div className="rounded-surface border border-line bg-ivory p-7">
              <p className="text-eyebrow mb-5 text-blue">Why work with me</p>
              <ul className="space-y-3.5">
                {profile.whyWorkWithMe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-blue"
                    />
                    <span className="text-sm font-medium text-charcoal/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
