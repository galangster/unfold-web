## What this adds

This PR implements an AI-crawlable + SEO foundation for Unfold so both search engines and AI agents can understand and retrieve core product context.

### 1) AI-readable surface
- Adds `public/llms.txt`
- Adds `public/llms-full.txt`

### 2) Crawl/index infrastructure
- Adds `app/robots.ts` (static)
- Adds `app/sitemap.ts` (static)

### 3) Structured data + metadata improvements
- Upgrades global metadata in `app/layout.tsx` (keywords, canonical, OG, Twitter)
- Adds JSON-LD for `WebSite` and `SoftwareApplication`

### 4) Programmatic SEO pages
- Adds solutions hub: `/solutions`
- Adds 5 keyword-targeted pages:
  - `/solutions/personalized-bible-study-plan`
  - `/solutions/bible-study-for-anxiety`
  - `/solutions/bible-study-for-couples`
  - `/solutions/daily-devotional-app`
  - `/solutions/christian-journaling-app`
- Each page includes page-specific metadata + FAQ JSON-LD

### 5) Internal linking
- Adds `Guides` link in footer to strengthen crawl paths

## Notes
- `siteUrl` currently defaults to `https://www.unfold-app.com` in `lib/seo.ts`.
  Please set `NEXT_PUBLIC_SITE_URL` in production to the exact canonical domain.
- Build passes (`npm run build`).
