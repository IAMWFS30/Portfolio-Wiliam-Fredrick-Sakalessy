import { ArrowUpRight, Code2, Globe, Mail, MapPin, MessageCircle } from 'lucide-react';
import { profile } from '../../data/profile';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';

/**
 * Kontak — dua kolom selaras, tanpa duplikasi.
 * Kiri: ajakan. Kanan: WhatsApp & Email di-spotlight (baris besar), lalu
 * LinkedIn / GitHub / lokasi sebagai baris pendukung yang lebih kecil.
 *
 * Nomor WhatsApp tampil di sini tetapi TIDAK dimasukkan ke <meta>/JSON-LD.
 */
export function Contact() {
  const { contact } = profile;

  return (
    <Section id="contact" tone="navy" labelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Kiri: ajakan */}
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's build something"
            lede="Have a dashboard, data pipeline, or web app in mind? Send a short brief and I'll reply with a scope and estimate."
            onNavy
          />
        </div>

        {/* Kanan: 4 kartu seragam (WA, Email, LinkedIn, GitHub) + lokasi. */}
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-surface border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-blue-400/50 hover:bg-white/[0.08]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-inner bg-blue/20">
                <MessageCircle aria-hidden="true" className="size-6 text-blue-400" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  WhatsApp · fastest
                </span>
                <span className="mt-0.5 block truncate font-medium text-white">
                  Chat now
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-softblue/40 transition-colors group-hover:text-blue-400"
              />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-4 rounded-surface border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-blue-400/50 hover:bg-white/[0.08]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-inner bg-blue/20">
                <Mail aria-hidden="true" className="size-6 text-blue-400" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  Email
                </span>
                <span className="mt-0.5 block truncate font-medium text-white">
                  Send a message
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-softblue/40 transition-colors group-hover:text-blue-400"
              />
            </a>

            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-surface border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-blue-400/50 hover:bg-white/[0.08]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-inner bg-blue/20">
                <Globe aria-hidden="true" className="size-6 text-blue-400" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  LinkedIn
                </span>
                <span className="mt-0.5 block truncate font-medium text-white">
                  View profile
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-softblue/40 transition-colors group-hover:text-blue-400"
              />
            </a>

            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-surface border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-blue-400/50 hover:bg-white/[0.08]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-inner bg-blue/20">
                <Code2 aria-hidden="true" className="size-6 text-blue-400" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-softblue/60">
                  GitHub
                </span>
                <span className="mt-0.5 block truncate font-medium text-white">
                  View projects
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-softblue/40 transition-colors group-hover:text-blue-400"
              />
            </a>
          </div>

          {/* Lokasi — baris pendukung */}
          <div className="mt-4 flex items-center gap-1.5 border-t border-white/10 pt-5 text-sm text-softblue/70">
            <MapPin aria-hidden="true" className="size-4 text-blue-400" />
            {contact.location}
          </div>
        </div>
      </div>
    </Section>
  );
}
