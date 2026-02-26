# SEO Submission Checklist (Google + Bing)

Use this after each production deploy to accelerate discovery and indexing.

## 0) Pre-checks
- [ ] Canonical domain resolves: `https://unfoldapp.co`
- [ ] `https://unfoldapp.co/robots.txt` loads
- [ ] `https://unfoldapp.co/sitemap.xml` loads
- [ ] `https://unfoldapp.co/llms.txt` and `/llms-full.txt` load
- [ ] New solution pages return 200 (not 404)

## 1) Google Search Console
1. Add property: `https://unfoldapp.co` (Domain or URL prefix)
2. Verify ownership (DNS TXT preferred)
3. Submit sitemap: `https://unfoldapp.co/sitemap.xml`
4. Use URL Inspection for:
   - `/`
   - `/solutions`
   - each newly added `/solutions/*` page
5. Click **Request indexing** for top priority pages

## 2) Bing Webmaster Tools
1. Add site: `https://unfoldapp.co`
2. Verify ownership (DNS or import from GSC)
3. Submit sitemap: `https://unfoldapp.co/sitemap.xml`
4. Use URL submission for top pages (home + solution pages)

## 3) Indexing quality checks
- [ ] Page title includes target intent keyword
- [ ] Meta description is unique per page
- [ ] FAQ schema exists on solution pages
- [ ] Internal links point between related solution pages
- [ ] Canonical points to `https://unfoldapp.co/...`

## 4) Weekly reporting (first 4 weeks)
Track in a simple sheet:
- Impressions by page
- Clicks by page
- Average position
- Queries triggering each `/solutions/*` page

## 5) Iteration playbook
- Double down on pages getting impressions but low CTR (improve title/meta)
- Expand pages ranking positions 8–20 (add FAQ depth, related links)
- Add 2–4 new long-tail pages per week based on real query data
