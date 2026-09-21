import { workSteps } from '../../data/services';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/** Alur kerja tiga langkah: Scope → Build → Deliver. Permukaan terang. */
export function Process() {
  return (
    <Section id="process" tone="ivory" labelledBy="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="How I work"
        title="A simple, predictable flow"
        lede="Clear scope up front, visible progress along the way, and a documented hand-off at the end."
      />

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {workSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.08}>
            <li className="relative h-full rounded-surface border border-line bg-white p-7">
              {/* nomor besar samar sebagai aksen editorial */}
              <span
                aria-hidden="true"
                className="absolute right-5 top-4 font-display text-4xl font-bold text-blue/10"
              >
                {step.step}
              </span>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-inner bg-softblue font-display text-lg font-semibold text-blue">
                  {step.step}
                </span>
                <Icon name={step.icon} className="size-5 text-blue" />
              </div>
              <h3 className="mt-5 text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
