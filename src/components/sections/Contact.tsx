import { Code2, Globe, Mail, MapPin, MessageCircle } from 'lucide-react';
import { languages, profile } from '../../data/profile';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';
import { Button } from '../ui/Button';

/**
 * Kontak / CTA. Nomor WhatsApp ditampilkan di sini (variant freelance memang
 * mengedepankan kontak langsung), tetapi tetap dijauhkan dari <meta> dan
 * JSON-LD supaya tidak terpanen dari metadata halaman.
 */
export function Contact() {
  const { contact } = profile;

  return (
    <Section id="contact" tone="navy" labelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's build something"
            lede="Have a dashboard, data pipeline, or web app in mind? Send a short brief and I'll reply with a scope and estimate."
            onNavy
          />

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={contact.whatsappUrl} external>
              <MessageCircle aria-hidden="true" className="size-4" />
              Chat on WhatsApp
            </Button>
            <Button href={`mailto:${contact.email}`} variant="onNavy">
              <Mail aria-hidden="true" className="size-4" />
              Send email
            </Button>
            <Button href={contact.githubUrl} external variant="onNavy">
              <Code2 aria-hidden="true" className="size-4" />
              GitHub
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <dl className="space-y-4">
            <div className="flex items-start gap-4 rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-blue-400"
                  >
                    {contact.whatsapp}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-words text-sm font-medium text-white hover:text-blue-400"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <Globe aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sm font-medium text-white hover:text-blue-400"
                  >
                    {contact.linkedin}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <Code2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  GitHub
                </dt>
                <dd className="mt-1">
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sm font-medium text-white hover:text-blue-400"
                  >
                    {contact.github}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-400" />
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  Location
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">{contact.location}</dd>
              </div>
            </div>

            <div className="rounded-surface border border-white/10 bg-white/[0.04] p-5">
              <dt className="text-xs font-semibold uppercase tracking-wider text-softblue/60">
                Languages
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.language}
                    className="rounded-full bg-white/8 px-3.5 py-2 text-[0.8125rem] font-medium text-white"
                  >
                    {lang.language}
                    <span className="ml-1.5 text-blue-400">{lang.level}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
