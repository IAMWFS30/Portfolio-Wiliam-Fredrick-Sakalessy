# Portfolio — Wiliam Fredrick Sakalessy

Personal portfolio site for **Wiliam Fredrick Sakalessy** — BI & Data Engineer
and Web App Developer.

Built as a fast, accessible single-page site.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite** build
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **framer-motion** (reduced-motion aware) + **lucide-react** icons

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build
npm run preview    # preview the build
```

## Deploy

Configured for Netlify (`netlify.toml`). Absolute SEO URLs (Open Graph,
canonical, sitemap) are generated at build time from the `SITE_URL` env var
(Netlify's `URL` is used automatically):

```bash
SITE_URL=https://your-domain.com npm run build
```

## Notes

- Content is data-driven (`src/data/`) and typed (`src/types/portfolio.ts`).
- Accessible by design: semantic landmarks, visible focus states, keyboard-
  navigable modal menu, and `prefers-reduced-motion` support.
