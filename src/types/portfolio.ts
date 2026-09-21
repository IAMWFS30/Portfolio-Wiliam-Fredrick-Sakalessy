/**
 * Tipe konten bersama untuk portofolio freelance.
 *
 * Semua yang ditampilkan situs ini ditipekan di sini supaya suntingan yang
 * salah bentuk di src/data/ gagal pada `tsc --noEmit` sebelum sampai ke browser.
 */

/** Kunci ikon Lucide yang dipakai lintas komponen. */
export type IconKey =
  | 'bi'
  | 'web'
  | 'data'
  | 'sap'
  | 'chart'
  | 'clock'
  | 'app'
  | 'grid'
  | 'pipeline'
  | 'transport'
  | 'shield'
  | 'search'
  | 'build'
  | 'deliver';

/** Target navigasi. */
export interface NavItem {
  /** id section tanpa tanda pagar di depan. */
  id: string;
  label: string;
}

/** Angka sorot di hero. Hanya klaim yang ada di CV; tidak ada yang dikarang. */
export interface Stat {
  value: string;
  label: string;
  icon: IconKey;
}

/** Layanan yang ditawarkan. */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
}

/** Satu langkah dalam alur kerja. */
export interface WorkStep {
  step: string;
  title: string;
  description: string;
  icon: IconKey;
}

/** Studi kasus proyek. Nilai faktual dari CV; deskripsi ringkas apa adanya. */
export interface Project {
  id: string;
  index: string;
  title: string;
  /** Peran / kategori, misalnya "Full-stack · SAP integration". */
  roleTag: string;
  /** Tag teknologi. */
  tags: string[];
  /** Deskripsi ringkas seperti di CV. */
  description: string;
  /** Deliverable yang dijanjikan / dihasilkan, apa adanya dari CV. */
  deliverable: string;
  /** URL demo publik / live, atau null bila tidak ada. */
  liveUrl: string | null;
  /** URL repo source code publik, atau null bila privat/tidak dibagikan. */
  repoUrl: string | null;
  /** Aksen warna kategori untuk kartu proyek. */
  accent: 'indigo' | 'teal' | 'amber' | 'violet';
  icon: IconKey;
}

/** Satu pengalaman kerja. */
export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  /** Poin tanggung jawab, apa adanya dari CV. */
  points: string[];
  icon: IconKey;
}

/** Kelompok keterampilan teknis. */
export interface SkillGroup {
  id: string;
  label: string;
  /** Badge opsional, misalnya "SAP". */
  badge?: string;
  items: string[];
}

/** Satu entri pendidikan formal. */
export interface EducationEntry {
  id: string;
  institution: string;
  programme: string;
  period: string;
  /** IPK bila dicantumkan di CV, atau null untuk menghilangkannya. */
  gpa: string | null;
}

/** Sertifikat pelatihan. Judul, penyelenggara, tahun — tanpa nomor sertifikat. */
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

/** Kemampuan bahasa dengan indikator level. */
export interface LanguageSkill {
  language: string;
  level: string;
  /** Persentase bar 0–100, mengikuti CV. */
  proficiency: number;
}
