# Catatan Sesi — Portfolio Wiliam Fredrick Sakalessy

Ringkasan pekerjaan sesi ini supaya bisa dilanjutkan tanpa kehilangan konteks.

## Ringkasan singkat

Membangun **website portfolio Wiliam Fredrick Sakalessy** (BI & Data Engineer,
Web App Developer) dan menyiapkan **versi demo publik yang aman** untuk tiga
proyek freelance, lalu mem-push semuanya ke GitHub.

Prinsip yang dipegang sepanjang sesi:
- **Anti-fabrikasi**: semua konten dari data/CV nyata, tidak mengarang angka,
  klaim, atau kredensial.
- **Privasi healthcare**: tidak ada data pasien, endpoint, token, nomor, atau
  link grup asli di repo publik. Folder kerja asli TIDAK disentuh.

## Repo GitHub (semua milik IAMWFS30)

| Repo | Isi | Status |
|------|-----|--------|
| `Portfolio-Wiliam-Fredrick-Sakalessy` | Situs portfolio (React+TS+Vite+Tailwind) | pushed |
| `Transport-Request-Management-SAP` | Demo SAP Transport Manager | pushed (bersih) |
| `Education-Poli-Catin` | Demo EduCatin | pushed, Pages sempat live |
| `KIARA-Digital-Pregnancy-Class` | Demo KIARA | pushed (bersih) |

## Lokasi folder lokal

- Portfolio (proyek build): `apps/wiliam-portfolio/`
- Demo Transport Manager: `publish/transport-request-management-sap/`
- Demo EduCatin: `publish/educatin-demo/`
- Demo KIARA: `publish/kiara-demo/`
- Folder kerja ASLI (jangan publish apa adanya): `dashboard/transport-manager`,
  `dashboard/questionnaire` (EduCatin), `dashboard/kiara-puskes-cakung` (KIARA)

## Portfolio — isi & keputusan

- Stack: React 19 + TypeScript strict + Vite + Tailwind v4 (CSS-first @theme).
- Data-driven: `src/data/` (profile, projects, services, background), tipe di
  `src/types/portfolio.ts`.
- Section: Hero (navy editorial) → About → Services → Projects → Featured
  (SAP Transport Manager, breakdown Problem/Solution/Role/Tech) → Process →
  Skills → Background → Contact. Tone navy/white/ivory berselang.
- Palet: deep navy + electric indigo (primary) + aksen teal/amber/violet per
  kartu proyek.
- Navbar brand: logo `img/logo-wiliam.jpeg` + "WILIAM FS | PORTFOLIO" (kapital).
- GitHub ditambahkan: navbar, hero, Contact, JSON-LD sameAs. Tiap proyek publik
  punya tombol Live demo + Source.
- LinkedIn: `wiliam-fredrick-sakalessy` (ejaan 'Wiliam', bukan 'William').
- Skill ABAP sudah ditambahkan (grup Data & BI + core stack chip).
- Background: entri "Freelance Web App Developer — Puskesmas Kecamatan Cakung
  (Jul–Aug 2026)" mencakup EduCatin (Jul) & KIARA (Aug). Deskripsi netral,
  tanpa angka pasien.
- Foto profil: `public/img/foto.jpg` — TIDAK diubah (permintaan user).
- Responsif mobile: grid mobile-first, menu hamburger dialog, sudah diaudit.

## Deploy portfolio (BELUM SELESAI — langkah user)

Masalah yang ditemukan: GitHub Pages awalnya menyajikan **source mentah**
(`/src/main.tsx`, token `%SITE_URL%` belum diproses) → halaman BLANK, foto/logo
error. Penyebab: path aset absolut `/img/...` tidak dapat base path, dan
deployer legacy "Deploy from a branch" menang atas workflow Actions.

Perbaikan yang sudah dilakukan:
1. Path aset gambar diprefix `import.meta.env.BASE_URL` (Navbar logo, Hero foto).
2. `vite.config.ts`: dukung env `BASE_PATH` untuk base sub-path Pages + sesuaikan
   sitemap/canonical.
3. Workflow `.github/workflows/deploy.yml` diubah: build lalu **publish ke branch
   `gh-pages`** (pakai peaceiris/actions-gh-pages) + `.nojekyll` + `404.html`.
   Build pakai `BASE_PATH=/Portfolio-Wiliam-Fredrick-Sakalessy/` dan
   `SITE_URL=https://iamwfs30.github.io`.
4. Sudah diverifikasi: branch `gh-pages` berisi hasil build yang BENAR (JS
   `/Portfolio-Wiliam-Fredrick-Sakalessy/assets/...`, ada img/, .nojekyll).

### >> LANGKAH TERAKHIR YANG DITUNGGU (dari user):
Settings → Pages → **Deploy from a branch** → Branch **`gh-pages`** / **(root)**
→ Save. Tunggu 1–2 menit. URL:
`https://iamwfs30.github.io/Portfolio-Wiliam-Fredrick-Sakalessy/`

## Pengingat lain yang menggantung

- **Pages Transport Manager** belum diaktifkan ulang setelah repo dibuat ulang →
  link demo-nya di portfolio masih 404 sampai Pages dinyalakan.
- **Riwayat lama Transport Manager**: repo sudah dihapus & dibuat ulang bersih,
  jadi hostname internal Mitra Keluarga sudah tidak ada di history publik.
  Catatan keamanan: hostname sempat publik → idealnya diberitahukan ke tim
  infra/Basis Mitra Keluarga.
- Pages EduCatin & KIARA: kalau mau link demo di portfolio jalan, aktifkan
  Pages masing-masing (EduCatin sempat live; KIARA belum dicek).

## Steering yang ditambahkan

- `.kiro/steering/skill-web-portfolio.md` — konvensi reusable untuk bikin web
  portfolio (stack, anti-fabrikasi, aksesibilitas, SEO/sitemap, privasi).

## Verifikasi build

- `npm run build` (tsc --noEmit + vite) HIJAU di sepanjang sesi.
- Semua demo: `node --check` lolos; scan anti-kebocoran 0 data sensitif.
