import { services } from '../../data/services';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/** Layanan yang ditawarkan — tiga kartu dengan aksen garis atas biru. */
export function Services() {
  return (
    <Section id="services" tone="ivory" labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="How I can help"
        lede="Three ways I usually plug into a team — pick one, or combine them across a project."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08}>
            <article className="h-full rounded-surface border border-line border-t-2 border-t-blue bg-white p-7">
              <span className="grid size-11 place-items-center rounded-inner bg-softblue">
                <Icon name={service.icon} className="size-5 text-blue" />
              </span>
              <h3 className="mt-5 text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
