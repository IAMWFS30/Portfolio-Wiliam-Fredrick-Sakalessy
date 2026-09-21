import { Code2, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project } from '../../types/portfolio';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/**
 * Aksen warna per kategori proyek. Kelas ditulis penuh (bukan interpolasi)
 * supaya tidak ter-purge oleh Tailwind.
 */
const accent: Record<
  Project['accent'],
  { bar: string; head: string; icon: string; tag: string; label: string }
> = {
  indigo: {
    bar: 'bg-blue',
    head: 'from-blue/12 to-blue/5',
    icon: 'text-blue',
    tag: 'bg-blue/10 text-blue',
    label: 'text-blue',
  },
  teal: {
    bar: 'bg-teal',
    head: 'from-teal/12 to-teal/5',
    icon: 'text-teal',
    tag: 'bg-teal/10 text-teal',
    label: 'text-teal',
  },
  amber: {
    bar: 'bg-amber',
    head: 'from-amber/15 to-amber/5',
    icon: 'text-amber',
    tag: 'bg-amber/10 text-amber',
    label: 'text-amber',
  },
  violet: {
    bar: 'bg-violet',
    head: 'from-violet/12 to-violet/5',
    icon: 'text-violet',
    tag: 'bg-violet/10 text-violet',
    label: 'text-violet',
  },
};

/** Karya terpilih — grid kartu proyek dengan aksen warna per kategori. */
export function Projects() {
  return (
    <Section id="work" tone="white" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="Selected work"
        title="Projects I've shipped"
        lede="A mix of BI delivery and full-stack builds. Each entry lists the stack and the concrete deliverable."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const c = accent[project.accent];
          return (
            <Reveal key={project.id} delay={(index % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-surface border border-line bg-white transition-shadow hover:shadow-soft">
                {/* Pita aksen di atas kartu */}
                <div className={`h-1 w-full ${c.bar}`} />

                <div
                  className={`flex items-center justify-between gap-3 bg-gradient-to-br ${c.head} px-6 py-5`}
                >
                  <span className="grid size-11 place-items-center rounded-inner bg-white shadow-sm">
                    <Icon name={project.icon} className={`size-6 ${c.icon}`} />
                  </span>
                  <span className="font-display text-2xl font-semibold text-navy/15">
                    {project.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className={`text-eyebrow ${c.label}`}>{project.roleTag}</p>
                  <h3 className="mt-2 text-navy">{project.title}</h3>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold ${c.tag}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-auto border-t border-line pt-4">
                    <p className="text-xs font-semibold text-charcoal/80">
                      <span className="text-muted">Deliverable: </span>
                      {project.deliverable}
                    </p>
                    {project.liveUrl || project.repoUrl ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
                          >
                            Live demo
                            <ExternalLink aria-hidden="true" className="size-3.5" />
                          </a>
                        ) : null}
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-navy/45 hover:bg-ivory"
                          >
                            Source
                            <Code2 aria-hidden="true" className="size-3.5" />
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
