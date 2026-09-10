import type { MetadataRoute } from "next";

const SITE = "https://unfoldapp.co";

// Static export: this emits dist/sitemap.xml at build time.
export const dynamic = "force-static";

// Real content dates, not build time. Google uses lastmod only where it is
// consistently accurate, and stamping every URL with the moment of the build
// made every page look freshly changed on every deploy, which destroys the
// signal. Update the date on a route when its content actually changes.
// changeFrequency and priority are deliberately omitted: Google ignores both.
const ROUTES: Array<{ path: string; lastModified: string }> = [
  { path: "/", lastModified: "2026-09-08" },
  { path: "/methods", lastModified: "2026-09-08" },
  { path: "/support", lastModified: "2026-09-08" },
  { path: "/privacy", lastModified: "2026-09-08" },
  { path: "/terms", lastModified: "2026-02-13" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified }) => ({
    url: `${SITE}${path}`,
    lastModified,
  }));
}
