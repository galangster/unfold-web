# Unfold search visibility audit — September 23, 2026

## Scope and result

Audited every public HTML route in the live sitemap: `/`, `/methods`, `/support`, `/privacy`, and `/terms`. Also inspected robots.txt, sitemap.xml, llms.txt, the App Store listing, the rendered homepage, and the current source. Tested the new About page at 1280px and 393px. Founder details came directly from Nick Galang.

The live site was crawlable before this change. The largest fixable gaps were missing company context and contradictory product facts. Search placement is not guaranteed by an About page, schema, or an llms.txt file.

## Findings and actions

| Area | Finding | Action |
| --- | --- | --- |
| About and authorship | `/about` returned 404. The site did not explain who built Unfold. | Added the product definition, features, differentiators, audience, Nick's origin story, Honolulu, founding year, factual definition list, and FAQs. |
| Product identity | Search results contain several unrelated apps named Unfold. | Connected the exact App Store identity, publisher, founder, website, and About page. |
| Structured data | The app schema still declared version 1.1.5. Apple lists 1.1.13. | Removed the release-specific fields. Apple remains the source for the current release. Added WebSite and AboutPage entities and breadcrumbs. |
| Machine-readable summary | llms.txt still said there were no accounts. It contained stale release details and unverified competitor descriptions. | Replaced those claims with concise facts and links to current product and privacy pages. It describes optional gift sign-in separately from devotional content. |
| Crawling | robots.txt returned 200 and allows all crawlers. | Preserved the existing policy. This includes OAI-SearchBot and Claude-SearchBot. No special crawler group was needed. Actual crawler access through hosting protections requires server logs. |
| Indexable text | All five public pages returned 200 with text in the HTML and one H1 each. | Preserved static rendering. The new About page also exports as HTML. |
| Canonicals | Each existing HTML page has its own canonical URL and Open Graph URL. | Added equivalent metadata for About. |
| Sitemap | About was absent. Privacy and support dates predated their latest content changes. | Added About and corrected the relevant dates. Dates for unchanged main content stay unchanged. |
| Internal links | The site offered no path to company information. | Added About to the homepage navigation and every public page footer. Footer links wrap on small screens. |
| Privacy copy | The homepage broadly claimed no third-party analytics despite documented diagnostics. | Replaced it with the narrower, supported statement about advertising and data sales. |
| Site tools | ESLint scanned generated bundles. Existing hydration patterns also failed current lint rules. | Excluded build output and corrected hydration handling. Full lint and production build pass. |
| Social cards | Existing secondary pages inherit the generic homepage Twitter title. The deployed About page also lacked image metadata. | About now explicitly references the existing Open Graph and Twitter images. Updating every older social title remains a small follow-up. |
| Performance | A PageSpeed API request returned HTTP 429. | No performance or Core Web Vitals score is claimed. Check real mobile field data in Search Console before prioritizing a rewrite. |
| Search measurement | Search Console, Bing Webmaster Tools, and private traffic reports were not available in this audit. | Index coverage, backlinks, conversions, and ranking changes remain unverified. |

## Next priorities

1. Verify real search-bot access in Cloudflare, Google Search Console, and Bing Webmaster Tools. Submit the sitemap and inspect the About URL. Use crawl and indexing reports to resolve actual failures.
2. Publish a few useful, original guides: beginning a daily devotional habit, a worked SOAP example, and making room for Scripture as a new parent. Use named authors, real examples, source passages, and honest product limits. Link them from the app's relevant pages.
3. Seek independent reviews and mentions from Christian publications, churches, podcasts, and readers. Give reviewers the real app and let them describe their experience. Do not invent testimonials or comparison statistics.
4. Track a fixed set of questions over time: “Bible devotional app for beginners,” “personalized daily devotional app,” and “Bible app with prayer journaling.” Record mentions, citations, accuracy, and visits. Record assistant, date, and whether web search was enabled. A single answer is not a ranking measurement.
5. Check mobile Core Web Vitals. The homepage uses two animation libraries and continuous decorative effects. Measure their cost before simplifying them. The About page adds no animation library.

## How the supplied checklist was applied

Used a direct product sentence, descriptive H2/H3 sections, a crawlable facts list, a real founder story, and visible FAQs. Omitted clients, projects delivered, and service turnaround metrics because Unfold is a consumer app. Omitted competitor claims without verified comparisons. Did not invent testimonials, audience counts, credentials, or social profiles.

An About page helps people and search systems understand the brand. It does not directly train an assistant or raise a universal E-E-A-T score. Google says E-E-A-T itself is not a specific ranking factor. FAQ markup describes the visible answers; it is not a promise of a special search result. There is no supported fixed sentence length or artificial update schedule that guarantees citations.

## Primary references

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): crawling, indexed text, internal links, matching structured data, and no special AI schema requirement.
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): authorship, trust, original value, and E-E-A-T limits.
- [OpenAI: publisher guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq): allow OAI-SearchBot and measure ChatGPT referral traffic.
- [Anthropic: crawler guidance](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler): Claude-SearchBot, Claude-User, and training access have distinct purposes.
- [Unfold's App Store listing](https://apps.apple.com/app/id6760814444): publisher, app identity, device support, and released version.

## Validation limits

The audit verifies public pages and local source behavior. It does not prove search-engine indexing, live bot allowlisting, a ranking gain, or private analytics. The current App Store submission is separate from these website changes.

## Deployment follow-up

The About page was deployed and verified in the public browser. Its founder facts, canonical URL, title, and structured data match the source. During the post-deployment audit, plain Python requests received HTTP 403 with Cloudflare error 1010 across the public routes, robots.txt, sitemap.xml, and llms.txt. The browser still loaded the site normally.

Cloudflare documents 1010 as a browser-signature block. This observation does not establish that Googlebot, OAI-SearchBot, or Claude-SearchBot is blocked. Confirm their real requests in Cloudflare security events and the search-engine inspection tools. The Cloudflare dashboard was signed out, so its rules and logs were not inspected. No security settings were changed.

- [Cloudflare: error 1010](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1010/)
- [Cloudflare: verified bots](https://developers.cloudflare.com/bots/concepts/bot/verified-bots/)
