import type { Metadata } from "next";
import Link from "next/link";

const title = "About Unfold | A Personal Bible Devotional App";
const description = "Unfold helps Christians build a daily rhythm of Scripture, reflection, and prayer. Learn about the app, its study methods, pricing, and the team behind it.";
const site = "https://unfoldapp.co";
const appStore = "https://apps.apple.com/app/id6760814444";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website", images: [{ url: "/opengraph-image", alt: "Unfold: a personal Bible study app" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
};

const features = [
  { name: "Personalized daily devotionals", text: "Tell Unfold what you are walking through and what you hope to learn. Each series brings Scripture, a devotional reflection, and questions for your own response together in one daily reading." },
  { name: "Bible reading and study", text: "Read the Berean Standard Bible or King James Version, highlight a verse, and return to it later. Unfold includes 32 study methods, from SOAP journaling to verse-by-verse study and Lectio Divina." },
  { name: "Prayer and reflection", text: "Keep prayers and journal entries alongside your reading. Guided prompts give you a place to begin when you know something matters but do not yet have the words." },
  { name: "Audio and a daily rhythm", text: "Listen to devotional readings with Premium, or read at your own pace. Optional reminders and reading streaks help you make room for Scripture in an ordinary day." },
];

const differences = [
  { name: "A series shaped around your life", text: "Your answers help shape the topic, length, and direction of a devotional series. You can return with a new question or a different season of life when you begin another." },
  { name: "32 ways to approach Scripture", text: "Some passages invite close study. Others invite prayer or reflection. Unfold draws from 32 named study methods so you can explore more than one way of reading." },
  { name: "Scripture stays close to the reflection", text: "A devotional reading brings its Bible passage and reflection together. The full BSB and KJV Bible readers are also available when you want to keep reading in context." },
  { name: "A place to respond", text: "Reading is only part of the practice. Reflection prompts, highlighting, and a prayer journal help you put what you notice into your own words." },
  { name: "A quiet space without advertising", text: "Unfold has no advertising and does not sell your personal data. Reading themes, fonts, and a calm interface help you settle into the passage." },
];

const faqs = [
  { id: "what-is-unfold", question: "What is Unfold?", answer: "Unfold is a personal Bible study and daily devotional app. It combines devotional series, Scripture reading, guided reflection, and prayer journaling to help Christians build a regular quiet-time practice." },
  { id: "is-unfold-free", question: "Is Unfold free to use?", answer: "Unfold is free to download. Your first devotional series and the full Bible reader are included. Premium adds further devotional series, audio narration, journaling, and more customization. U.S. pricing is $9.99 per month or $69.99 per year; local prices appear in the App Store." },
  { id: "bible-translations", question: "Which Bible translations does Unfold include?", answer: "Unfold includes the Berean Standard Bible (BSB) and the King James Version (KJV). Both translations are stored on your device for Bible reading without an internet connection. Preparing a new devotional requires a connection." },
  { id: "devices", question: "Where can I download Unfold?", answer: "Download Unfold: Personal Bible Study from Apple's App Store. Unfold runs on iPhone and iPad with iOS or iPadOS 16.4 or later. There is currently no Android or browser version of the app." },
  { id: "which-unfold", question: "Is this the same as other apps named Unfold?", answer: "This website belongs to Unfold: Personal Bible Study, published by The Creative Co. Marketing Firm LLC. Its App Store ID is 6760814444. Use the download link on this page to find the correct app." },
];

const facts = [
  ["App name", "Unfold: Personal Bible Study"],
  ["Publisher", "The Creative Co. Marketing Firm LLC"],
  ["Founder", "Nick Galang"],
  ["Founded", "2026"],
  ["Based in", "Honolulu, Hawaii"],
  ["Category", "Bible study and daily devotionals"],
  ["Made for", "Christians building a daily rhythm of Scripture, reflection, and prayer"],
  ["Platforms", "iPhone and iPad; iOS / iPadOS 16.4 or later"],
  ["Bible translations", "Berean Standard Bible (BSB) and King James Version (KJV)"],
  ["Study methods", "32 named methods"],
  ["Pricing", "Free to download. Premium: $9.99/month or $69.99/year in the U.S. Local prices may vary."],
  ["Subscription terms", "Optional monthly or annual auto-renewing subscription, managed through Apple"],
  ["App Store ID", "6760814444"],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site}/about#page`,
      url: `${site}/about`,
      name: title,
      description,
      dateModified: "2026-09-23",
      about: [{ "@id": `${site}/#app` }, { "@id": `${site}/#publisher` }],
      isPartOf: { "@id": `${site}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Unfold", item: site },
        { "@type": "ListItem", position: 2, name: "About", item: `${site}/about` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${site}/about#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question", name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="border-b border-border">
        <nav aria-label="Main navigation" className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-serif text-2xl min-h-11 inline-flex items-center">Unfold</Link>
          <div className="flex flex-wrap gap-x-6 text-sm text-muted-foreground">
            <Link href="/methods" className="min-h-11 inline-flex items-center hover:text-foreground">Study methods</Link>
            <Link href="/support" className="min-h-11 inline-flex items-center hover:text-foreground">Support</Link>
            <a href={appStore} className="min-h-11 inline-flex items-center text-gold-accent hover:underline">Get Unfold</a>
          </div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <p className="text-sm tracking-widest uppercase text-gold-accent mb-5">A daily rhythm with God</p>
        <h1 className="font-serif text-5xl sm:text-7xl leading-tight mb-7">About Unfold</h1>
        <p className="text-xl sm:text-2xl leading-relaxed text-foreground/90">Unfold is a Bible devotional app that helps Christians build a daily rhythm of Scripture, reflection, and prayer.</p>
        <p className="mt-5 text-muted-foreground leading-relaxed">Bring the questions, hopes, and ordinary moments of your life. Unfold gives you a passage to sit with and space to respond.</p>
        <p className="mt-6 text-sm text-muted-foreground">Product details reviewed <time dateTime="2026-09-23">September 23, 2026</time>.</p>

        <section aria-labelledby="what-unfold-does" className="mt-16 border-t border-border pt-10">
          <h2 id="what-unfold-does" className="font-serif text-3xl sm:text-4xl mb-8">What Unfold does</h2>
          <div className="space-y-8">{features.map(({ name, text }) => <div key={name}><h3 className="text-lg font-semibold mb-2">{name}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}</div>
          <Link href="/methods" className="mt-6 inline-flex items-center min-h-11 text-gold-accent underline underline-offset-4">Explore all 32 study methods</Link>
        </section>

        <section aria-labelledby="different" className="mt-14 border-t border-border pt-10">
          <h2 id="different" className="font-serif text-3xl sm:text-4xl mb-8">What makes Unfold different</h2>
          <div className="space-y-8">{differences.map(({ name, text }) => <div key={name}><h3 className="text-lg font-semibold mb-2">{name}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div>)}</div>
        </section>

        <section aria-labelledby="who-unfold-is-for" className="mt-14 border-t border-border pt-10">
          <h2 id="who-unfold-is-for" className="font-serif text-3xl sm:text-4xl mb-6">Who Unfold is for</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">
            <li>People beginning a Bible reading habit who want a clear place to start.</li>
            <li>Christians returning to Scripture after time away.</li>
            <li>Readers who want to connect Bible study with the season of life they are in.</li>
            <li>People who value guided reflection, prayer journaling, and time to listen.</li>
          </ul>
        </section>

        <section aria-labelledby="team" className="mt-14 border-t border-border pt-10">
          <h2 id="team" className="font-serif text-3xl sm:text-4xl mb-6">The team behind Unfold</h2>
          <h3 id="founder" className="text-lg font-semibold mb-3">Nick Galang, founder</h3>
          <p className="text-muted-foreground leading-relaxed">Nick built Unfold because he needed it himself. He was a new dad, in a season of life that felt like the wilderness. Unfold began there, in Honolulu in 2026.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">That personal beginning still shapes the app: a place to bring the life you are living to Scripture. Unfold is published by The Creative Co. Marketing Firm LLC, the company listed on our App Store page.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">Questions and feedback reach us at <a href="mailto:support@unfoldapp.co" className="text-gold-accent underline underline-offset-4 break-words">support@unfoldapp.co</a>. Tell us what is helping and where the experience could be clearer.</p>
        </section>

        <section aria-labelledby="how-unfold-works" className="mt-14 border-t border-border pt-10">
          <h2 id="how-unfold-works" className="font-serif text-3xl sm:text-4xl mb-6">How Unfold works</h2>
          <ol className="list-decimal pl-5 space-y-4 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Start with your life.</strong> Download the app and answer a few questions about your spiritual life and what you want to explore.</li>
            <li><strong className="text-foreground">Make room each day.</strong> Read your passage and devotional, then use the reflection prompts to notice what stays with you.</li>
            <li><strong className="text-foreground">Keep the conversation going.</strong> Write, pray, highlight a verse, or ask the companion a question. Begin another series when you are ready.</li>
          </ol>
          <p className="mt-6 text-muted-foreground leading-relaxed">The first devotional series is free. Premium is optional, and you can manage or cancel a subscription through Apple. Visit <Link href="/support" className="text-gold-accent underline underline-offset-4">Support</Link> for help with the app.</p>
        </section>

        <section aria-labelledby="key-facts" className="mt-14 border-t border-border pt-10">
          <h2 id="key-facts" className="font-serif text-3xl sm:text-4xl mb-6">Key facts</h2>
          <dl className="divide-y divide-border">
            {facts.map(([label, value]) => <div key={label} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4"><dt className="font-medium">{label}</dt><dd className="text-muted-foreground leading-relaxed">{value}</dd></div>)}
            <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4"><dt className="font-medium">Website</dt><dd><a href={site} className="text-gold-accent underline underline-offset-4">unfoldapp.co</a></dd></div>
            <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4"><dt className="font-medium">Contact</dt><dd><a href="mailto:support@unfoldapp.co" className="text-gold-accent underline underline-offset-4 break-words">support@unfoldapp.co</a></dd></div>
          </dl>
        </section>

        <section aria-labelledby="faq" className="mt-14 border-t border-border pt-10">
          <h2 id="faq" className="font-serif text-3xl sm:text-4xl mb-8">Frequently asked questions</h2>
          <div className="space-y-8">{faqs.map(({ id, question, answer }) => <div key={id} id={id} className="scroll-mt-8"><h3 className="text-lg font-semibold mb-2">{question}</h3><p className="text-muted-foreground leading-relaxed">{answer}</p></div>)}</div>
        </section>

        <a href={appStore} className="mt-12 inline-flex min-h-12 items-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90">Download Unfold on the App Store</a>
      </main>
      <footer className="border-t border-border">
        <nav aria-label="Footer navigation" className="max-w-3xl mx-auto px-6 py-8 flex flex-wrap gap-x-6 text-sm text-muted-foreground">
          <Link href="/" className="min-h-11 inline-flex items-center hover:text-foreground">Home</Link>
          <Link href="/methods" className="min-h-11 inline-flex items-center hover:text-foreground">Study methods</Link>
          <Link href="/privacy" className="min-h-11 inline-flex items-center hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="min-h-11 inline-flex items-center hover:text-foreground">Terms</Link>
          <Link href="/support" className="min-h-11 inline-flex items-center hover:text-foreground">Support</Link>
        </nav>
      </footer>
    </div>
  );
}
