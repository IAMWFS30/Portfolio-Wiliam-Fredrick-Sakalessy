import { GraduationCap, Award } from 'lucide-react';
import { certifications, education, experience } from '../../data/background';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/** Latar belakang: timeline pengalaman + pendidikan & sertifikasi. */
export function Background() {
  return (
    <Section id="background" tone="ivory" labelledBy="background-heading">
      <SectionHeading
        id="background-heading"
        eyebrow="Background"
        title="Experience & credentials"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Experience timeline */}
        <div className="lg:col-span-7">
          <ol className="relative border-l border-line pl-8">
            {experience.map((entry) => (
              <li key={entry.id} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(2rem+1px)] top-1 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-softblue ring-4 ring-white"
                >
                  <Icon name={entry.icon} className="size-4 text-blue" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-navy">{entry.role}</h3>
                  <span className="text-xs font-semibold text-blue">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{entry.organization}</p>
                <ul className="mt-3 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Education + certifications */}
        <div className="space-y-8 lg:col-span-5">
          <Reveal>
            <div className="rounded-surface border border-line bg-ivory p-7">
              <div className="mb-5 flex items-center gap-2.5">
                <GraduationCap aria-hidden="true" className="size-5 text-blue" />
                <h3 className="text-navy">Education</h3>
              </div>
              <ul className="space-y-5">
                {education.map((edu) => (
                  <li key={edu.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="text-sm font-bold text-navy">{edu.institution}</p>
                      <span className="text-xs font-semibold text-blue">{edu.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{edu.programme}</p>
                    {edu.gpa ? (
                      <p className="mt-1 text-xs font-semibold text-blue">GPA: {edu.gpa}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-surface border border-line bg-ivory p-7">
              <div className="mb-5 flex items-center gap-2.5">
                <Award aria-hidden="true" className="size-5 text-blue" />
                <h3 className="text-navy">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded bg-softblue"
                    >
                      <Award aria-hidden="true" className="size-3.5 text-blue" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{cert.title}</p>
                      <p className="mt-0.5 text-xs text-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
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
