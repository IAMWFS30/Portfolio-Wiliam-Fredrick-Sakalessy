/**
 * Identitas inti, kontak, ringkasan, statistik, bahasa, navigasi.
 *
 * Setiap nilai dapat dilacak ke CV freelance Wiliam (cv/wiliam/index-freelance.html).
 * Jangan menambahkan kredensial, angka, atau klaim yang tidak ada di sumber itu.
 */
import type { LanguageSkill, NavItem, Stat } from '../types/portfolio';

export const profile = {
  fullName: 'Wiliam Fredrick Sakalessy',
  /** Dipecah dua baris di hero untuk efek editorial. */
  firstLine: 'Wiliam Fredrick',
  secondLine: 'Sakalessy',

  role: 'BI & Data Engineer',
  roleSuffix: 'Web App Developer for hire',

  /** Baris peran singkat di bawah nama (gaya editorial). Faktual dari CV. */
  roleLine: ['BI & Data Engineer', 'Web App Developer', 'SAP BW Specialist'],

  /** Tagline editorial di hero — merangkum arah kerja, tanpa klaim/angka. */
  tagline: 'Turning data into decisions, and ideas into working software.',

  /** Chip peran ringkas di hero. */
  focusTags: [
    'SAP BW / BI',
    'Power BI',
    'SQL',
    'Python',
    'Dashboards',
    'Web Apps',
    'Automation',
  ],

  /** Status ketersediaan (dari pill "Available for freelance projects"). */
  availability: 'Available for freelance projects',

  /** Ringkasan hero yang dipadatkan dari bagian "What I Build". */
  heroStatement:
    'I help teams turn raw data into decisions and ideas into working software — from BI dashboards and data models to full-stack web apps, delivered end to end.',

  /** Versi lengkap "What I Build" untuk bagian About. */
  pitch:
    'I help teams turn raw data into decisions and ideas into working software. On the data side I design data models, build BI dashboards (SAP BW, Power BI, Tableau), and write SQL/Python to make reporting fast and reliable. On the product side I ship complete web apps — from front-end to a serverless backend and integrations. I take a project from requirements to a deployed, documented result, and I handle sensitive (including healthcare) data with privacy in mind.',

  /** Ditampilkan di halaman. Tidak dimasukkan ke metadata atau structured data. */
  contact: {
    whatsapp: '+62 821 5112 7343',
    whatsappUrl: 'https://wa.me/6282151127343',
    email: 'fswiliam30@gmail.com',
    location: 'Bekasi, Indonesia · Remote-ready',
    linkedin: 'linkedin.com/in/wiliam-fredrick-sakalessy',
    linkedinUrl: 'https://www.linkedin.com/in/wiliam-fredrick-sakalessy',
    github: 'github.com/IAMWFS30',
    githubUrl: 'https://github.com/IAMWFS30',
  },

  /** Alasan bekerja sama (dari "Why Work With Me"). */
  whyWorkWithMe: [
    'End-to-end ownership',
    'Clear, on-time delivery',
    'Business-first thinking',
    'Responsive communication',
    'Data privacy aware',
  ],

  assets: {
    portraitJpg: '/img/foto.jpg',
    portraitAlt: 'Wiliam Fredrick Sakalessy',
  },
};

/** Angka sorot hero — semua dari stat badges CV freelance, apa adanya. */
export const stats: Stat[] = [
  { value: '4+ yrs', label: 'Data / BI Experience', icon: 'chart' },
  { value: 'End-to-End', label: 'Design → Build → Deploy', icon: 'build' },
  { value: 'Live Apps', label: 'Shipped to Production', icon: 'app' },
  { value: 'Privacy', label: 'Healthcare-data Aware', icon: 'shield' },
];

export const languages: LanguageSkill[] = [
  { language: 'Bahasa Indonesia', level: 'Native', proficiency: 100 },
  { language: 'English', level: 'Professional', proficiency: 78 },
];

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'skills', label: 'Skills' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
];
