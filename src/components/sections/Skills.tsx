import { coreStack, skillGroups } from '../../data/background';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Chip } from '../ui/Chip';

/** Keterampilan teknis: kelompok detail + ringkasan core stack sebagai chip. */
export function Skills() {
  return (
    <Section id="skills" tone="white" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Tech stack"
        title="Tools I work with"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.08}>
            <div className="h-full rounded-surface border border-line bg-white p-7">
              <div className="mb-4 flex items-center gap-2">
                <h3 className="text-navy">{group.label}</h3>
                {group.badge ? (
                  <span className="rounded border border-blue/40 px-1.5 py-0.5 font-display text-[0.625rem] font-semibold uppercase tracking-wider text-blue">
                    {group.badge}
                  </span>
                ) : null}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-eyebrow mb-4 text-blue">Core stack</p>
        <ul className="flex flex-wrap gap-2">
          {coreStack.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </ul>
      </div>
    </Section>
  );
}
