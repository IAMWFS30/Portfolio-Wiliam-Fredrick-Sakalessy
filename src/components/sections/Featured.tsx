import { ExternalLink, Code2 } from 'lucide-react';
import { featuredProject } from '../../data/projects';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';

/**
 * Sorotan satu proyek unggulan di permukaan navy. Kiri: ringkasan + CTA.
 * Kanan: breakdown Problem / Solution / Role / Technology.
 */
export function Featured() {
  const p = featuredProject;

  return (
    <Section id="featured" tone="navy" labelledBy="featured-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="featured-heading"
            eyebrow={p.eyebrow}
            title={p.title}
            lede={p.subtitle}
            onNavy
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {p.liveUrl ? (
              <Button href={p.liveUrl} external>
                Live demo
                <ExternalLink aria-hidden="true" className="size-4" />
              </Button>
            ) : null}
            {p.repoUrl ? (
              <Button href={p.repoUrl} external variant="onNavy">
                Source
                <Code2 aria-hidden="true" className="size-4" />
              </Button>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.breakdown.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="h-full rounded-surface border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-inner bg-blue/20">
                      <Icon name={item.icon} className="size-4 text-blue-400" />
                    </span>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                      {item.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-softblue/75">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
