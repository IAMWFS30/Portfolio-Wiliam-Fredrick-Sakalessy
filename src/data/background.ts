/**
 * Pengalaman, keterampilan, pendidikan, sertifikasi.
 * Semua faktual dari CV freelance Wiliam. Tidak ada yang dilebihkan.
 */
import type {
  Certification,
  EducationEntry,
  ExperienceEntry,
  SkillGroup,
} from '../types/portfolio';

export const experience: ExperienceEntry[] = [
  {
    id: 'freelance-web-app-cakung',
    role: 'Freelance Web App Developer',
    organization: 'Puskesmas Kecamatan Cakung',
    period: 'Jul – Aug 2026',
    points: [
      'Built EduCatin (Jul 2026), a mobile-first health-education web app for the bride-and-groom (catin) program: scored pre/post-test, watch-gated videos, and a results flow.',
      'Built KIARA (Aug 2026), a multi-session digital pregnancy-class app: per-session gated videos with anti-skip, session resume, and scoring.',
      'Delivered each end to end — from requirements to a deployed, documented web app — with privacy-aware handling of participant data.',
    ],
    icon: 'app',
  },
  {
    id: 'sap-bw-bi-specialist',
    role: 'SAP BW / BI Specialist',
    organization: 'Mitra Keluarga Hospital',
    period: 'Mar 2022 – Present',
    points: [
      'Design and maintain SAP BW data models, InfoProviders, and transformations; build BEx queries and BusinessObjects reports.',
      'Develop Power BI and Tableau dashboards; tune query and report performance; ensure data quality.',
    ],
    icon: 'bi',
  },
  {
    id: 'sap-abap-intern',
    role: 'SAP ABAP Developer — Internship',
    organization: 'Mitra Keluarga Hospital',
    period: 'Sep 2021 – Mar 2022',
    points: [
      'Built ABAP programs for parameterized medical documents; supported development, testing, and bug fixing.',
    ],
    icon: 'web',
  },
];

/** Ringkasan chip "Core Stack" dari CV. */
export const coreStack: string[] = [
  'SAP BW/4HANA',
  'BusinessObjects',
  'BEx',
  'Power BI (DAX)',
  'Tableau',
  'SQL',
  'Python',
  'ABAP',
  'Databricks',
  'JavaScript SPA',
  'Node.js',
  'Google Apps Script',
  'Netlify Functions',
  'SAP ADT API',
  'REST API',
];

/** Kelompok keterampilan detail dari sidebar "Tech Stack". */
export const skillGroups: SkillGroup[] = [
  {
    id: 'data-bi',
    label: 'Data & BI',
    badge: 'SAP',
    items: [
      'SAP BW/4HANA, BusinessObjects, BEx',
      'Power BI (DAX), Tableau, Lumira',
      'SQL (Joins, Views, CTE), Databricks',
      'Python (Pandas, NumPy)',
      'ABAP (reports, ICF services)',
    ],
  },
  {
    id: 'web-app',
    label: 'Web & App',
    items: [
      'JavaScript SPA (HTML, CSS, JS)',
      'Node.js / Express backend',
      'Google Apps Script + Sheets API',
      'SAP ADT REST API integration',
      'Netlify Functions, WhatsApp gateway',
      'Web Crypto (SHA-256), GitHub Pages',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: 'kalbis',
    institution: 'Kalbis Institute',
    programme: 'Bachelor of Information System · Business Intelligence',
    period: '2018 – 2022',
    gpa: '3.56 / 4.00',
  },
  {
    id: 'sman2',
    institution: 'SMA Negeri 2 Kuala Kapuas',
    programme: 'Science',
    period: '2014 – 2017',
    gpa: null,
  },
];

export const certifications: Certification[] = [
  { id: 'powerbi', title: 'Power BI Data Analyst', issuer: 'Udemy', year: '2025' },
  { id: 'lumira', title: 'SAP Lumira Designer', issuer: 'Udemy', year: '2025' },
  {
    id: 'abap-hana',
    title: 'ABAP on Hana & Webdynpro',
    issuer: 'T-Systems',
    year: '2023',
  },
];
