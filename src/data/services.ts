/**
 * Layanan dan alur kerja. Dari bagian "Services" dan "How I Work" di CV freelance.
 * Teks apa adanya; tidak ada layanan atau janji baru yang dikarang.
 */
import type { Service, WorkStep } from '../types/portfolio';

export const services: Service[] = [
  {
    id: 'bi-dashboards',
    title: 'BI & Dashboards',
    description:
      'Data models, SAP BW / Power BI / Tableau dashboards, BEx queries, and report performance tuning.',
    icon: 'chart',
  },
  {
    id: 'web-app',
    title: 'Web App Development',
    description:
      'Mobile-first web apps with quiz/education flows, video gating, QR entry, and serverless backends.',
    icon: 'web',
  },
  {
    id: 'data-automation',
    title: 'Data & Automation',
    description:
      'SQL/Python pipelines, Google Sheets integrations, and automated PDF/DOCX report generation.',
    icon: 'pipeline',
  },
];

export const workSteps: WorkStep[] = [
  {
    step: '1',
    title: 'Scope',
    description:
      'Understand the goal, define the deliverable, and agree on a clear, fixed scope before starting.',
    icon: 'search',
  },
  {
    step: '2',
    title: 'Build',
    description:
      'Develop with regular check-ins, share progress early, and keep the work reviewable end to end.',
    icon: 'build',
  },
  {
    step: '3',
    title: 'Deliver',
    description:
      'Ship the deployed result with short docs and hand-off. Flexible pricing: per-project or retainer.',
    icon: 'deliver',
  },
];
