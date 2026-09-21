import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Tailwind v4 CSS-first: token ada di src/index.css (@theme), bukan config JS.

/**
 * URL absolut situs untuk metadata Open Graph / canonical.
 *
 * Scraper media sosial tidak meresolusi path relatif, jadi og:url, og:image,
 * dan canonical harus absolut. Domain produksi diambil dari env `SITE_URL`
 * (atau `URL` yang otomatis disediakan Netlify) saat build.
 *
 *   SITE_URL=https://domain-anda.com npm run build
 *
 * Tanpa env, dipakai placeholder yang jelas agar tak ada domain palsu ikut
 * ter-deploy.
 */
const FALLBACK_SITE_URL = 'https://example.com';

function resolveSiteUrl(): string {
  const raw = process.env.SITE_URL || process.env.URL || FALLBACK_SITE_URL;
  return raw.replace(/\/+$/, '');
}

/**
 * Base path untuk aset. GitHub Pages proyek menyajikan situs di sub-path
 * (mis. /Portfolio-Wiliam-Fredrick-Sakalessy/), jadi aset harus memakai
 * prefix itu atau CSS/JS akan 404. Netlify/root domain memakai '/'.
 *
 *   BASE_PATH=/Nama-Repo/ npm run build
 */
function resolveBase(): string {
  const raw = process.env.BASE_PATH || '/';
  const withLead = raw.startsWith('/') ? raw : `/${raw}`;
  return withLead.endsWith('/') ? withLead : `${withLead}/`;
}

/** Ganti token %SITE_URL% di index.html dengan URL absolut saat build. */
function htmlSiteUrl(siteUrl: string): Plugin {
  return {
    name: 'html-site-url',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl);
    },
  };
}

/**
 * Emit sitemap.xml absolut dan tambahkan baris Sitemap ke robots.txt saat build.
 * Situs satu halaman, jadi sitemap hanya memuat URL root (termasuk base path).
 */
function seoFiles(siteUrl: string, base: string): Plugin {
  // siteUrl tanpa trailing slash, base diawali & diakhiri '/'.
  const canonical = `${siteUrl}${base}`; // mis. https://user.github.io/Repo/
  const sitemapUrl = `${siteUrl}${base}sitemap.xml`;
  return {
    name: 'seo-files',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        `  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${today}</lastmod>\n` +
        '    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n' +
        '</urlset>\n';

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
    writeBundle(options) {
      const outDir = options.dir ?? 'dist';
      const robotsPath = resolve(outDir, 'robots.txt');
      if (!existsSync(robotsPath)) return;
      const current = readFileSync(robotsPath, 'utf8').replace(/\s+$/, '');
      const line = `Sitemap: ${sitemapUrl}`;
      if (!current.includes(line)) {
        writeFileSync(robotsPath, `${current}\n\n${line}\n`, 'utf8');
      }
    },
  };
}

export default defineConfig(() => {
  const siteUrl = resolveSiteUrl();
  const base = resolveBase();
  // Untuk token %SITE_URL% di HTML: gabungkan siteUrl + base tanpa trailing
  // slash, karena template HTML sudah menulis "%SITE_URL%/".
  const htmlUrl = `${siteUrl}${base}`.replace(/\/+$/, '');

  return {
    base,
    plugins: [react(), tailwindcss(), htmlSiteUrl(htmlUrl), seoFiles(siteUrl, base)],
    build: {
      target: 'es2022',
      cssCodeSplit: false,
    },
  };
});
