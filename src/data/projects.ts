/**
 * Proyek terpilih. Diambil apa adanya dari bagian "Selected Work" di CV freelance.
 *
 * ATURAN: jangan menambah metrik dampak (angka adopsi, jumlah pengguna, klaim
 * efektivitas) yang tidak ada di sumber. Deskripsi tetap deskriptif.
 */
import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'sap-transport-manager',
    index: '01',
    title: 'SAP Transport Manager (TR Automation)',
    roleTag: 'Full-stack · SAP integration',
    tags: ['Node.js', 'SAP ADT API', 'WhatsApp'],
    description:
      'Web tool that automates the SAP BW transport flow — create Transport of Copies, release, and notify the Basis team — over the SAP ADT REST API.',
    deliverable: 'Web app + Node proxy + custom ABAP class',
    liveUrl: 'https://iamwfs30.github.io/Transport-Request-Management-SAP/',
    repoUrl: 'https://github.com/IAMWFS30/Transport-Request-Management-SAP',
    accent: 'indigo',
    icon: 'transport',
  },
  {
    id: 'educatin',
    index: '02',
    title: 'EduCatin — Health Education Web App',
    roleTag: 'Full-stack · Solo build',
    tags: ['JavaScript', 'Apps Script', 'Netlify'],
    description:
      'Mobile-first education app with a scored quiz engine, video watch-gating, e-certificate, and a serverless WhatsApp gateway.',
    deliverable: 'Live web app + Google Sheets data store',
    liveUrl: 'https://iamwfs30.github.io/Education-Poli-Catin/',
    repoUrl: 'https://github.com/IAMWFS30/Education-Poli-Catin',
    accent: 'teal',
    icon: 'app',
  },
  {
    id: 'kiara',
    index: '03',
    title: 'KIARA — Digital Pregnancy Class',
    roleTag: 'Full-stack · Solo build',
    tags: ['SPA', 'Web Crypto', 'GitHub Pages'],
    description:
      '10-session QR-based learning app with SHA-256 ID hashing, anti-skip video gate, session resume, and an Apps Script backend.',
    deliverable: 'Deployed app + admin data flow',
    liveUrl: 'https://iamwfs30.github.io/KIARA-Digital-Pregnancy-Class/',
    repoUrl: 'https://github.com/IAMWFS30/KIARA-Digital-Pregnancy-Class',
    accent: 'violet',
    icon: 'grid',
  },
  {
    id: 'executive-financial-dashboards',
    index: '04',
    title: 'Executive & Financial Dashboards',
    roleTag: 'BI development',
    tags: ['SAP BW', 'Power BI', 'SQL'],
    description:
      'Executive and financial dashboards tracking operational, finance, and HR performance to support decisions.',
    deliverable: 'Interactive dashboards + data model',
    liveUrl: null,
    repoUrl: null,
    accent: 'amber',
    icon: 'chart',
  },
  {
    id: 'patient-analytics',
    index: '05',
    title: 'Patient Analytics Reporting',
    roleTag: 'Analytics',
    tags: ['SAP BW', 'BEx', 'SQL'],
    description:
      'Analytical reports for patient trends and service utilization to support operational planning.',
    deliverable: 'Report suite + query layer',
    liveUrl: null,
    repoUrl: null,
    accent: 'teal',
    icon: 'clock',
  },
  {
    id: 'operational-data-pipeline',
    index: '06',
    title: 'Operational Data Pipeline',
    roleTag: 'Data engineering',
    tags: ['SQL', 'Databricks', 'Python'],
    description:
      'Silver/gold data notebooks modeling patient volume and institution summaries to feed reporting.',
    deliverable: 'Layered notebooks + refresh flow',
    liveUrl: null,
    repoUrl: null,
    accent: 'indigo',
    icon: 'pipeline',
  },
];

/**
 * Proyek unggulan untuk section "Featured" bergaya editorial.
 *
 * Semua teks di sini diturunkan dari deskripsi faktual proyek di atas — tidak
 * ada metrik dampak, angka adopsi, atau klaim efektivitas yang dikarang.
 */
export const featuredProject = {
  id: 'sap-transport-manager',
  eyebrow: 'Featured project',
  title: 'SAP Transport Manager',
  subtitle: 'Transport of Copies automation across SAP BW & ECC',
  breakdown: [
    {
      label: 'Problem',
      icon: 'search' as const,
      text: 'Moving SAP transports between systems was a manual, multi-step, error-prone task that also depended on chasing the Basis team for each import.',
    },
    {
      label: 'Solution',
      icon: 'build' as const,
      text: 'A self-service web tool that creates a Transport of Copies, includes the objects, releases it, and notifies Basis — driven over the SAP ADT REST API.',
    },
    {
      label: 'My role',
      icon: 'web' as const,
      text: 'Full-stack build: front-end SPA, a Node proxy for the SAP ADT API, and a custom ABAP class exposed as an ICF service. Designed and shipped solo.',
    },
    {
      label: 'Technology',
      icon: 'sap' as const,
      text: 'Node.js · SAP ADT REST API · custom ABAP (ICF) · WhatsApp notification · vanilla JS front-end.',
    },
  ],
  liveUrl: 'https://iamwfs30.github.io/Transport-Request-Management-SAP/',
  repoUrl: 'https://github.com/IAMWFS30/Transport-Request-Management-SAP',
};
