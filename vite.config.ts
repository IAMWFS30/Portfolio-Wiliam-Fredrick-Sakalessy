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
 * Situs satu halaman, jadi sitemap hanya memuat URL root.
 */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        `  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n` +
        '    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n' +
        '</urlset>\n';

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
    writeBundle(options) {
      const outDir = options.dir ?? 'dist';
      const robotsPath = resolve(outDir, 'robots.txt');
      if (!existsSync(robotsPath)) return;
      const current = readFileSync(robotsPath, 'utf8').replace(/\s+$/, '');
      const line = `Sitemap: ${siteUrl}/sitemap.xml`;
      if (!current.includes(line)) {
        writeFileSync(robotsPath, `${current}\n\n${line}\n`, 'utf8');
      }
    },
  };
}

export default defineConfig(() => {
  const siteUrl = resolveSiteUrl();

  return {
    plugins: [react(), tailwindcss(), htmlSiteUrl(siteUrl), seoFiles(siteUrl)],
    build: {
      target: 'es2022',
      cssCodeSplit: false,
    },
  };
});
