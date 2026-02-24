import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig, solutionBySlug, solutionPages } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = solutionBySlug[slug];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Unfold`,
    description: page.description,
    alternates: {
      canonical: `/solutions/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | Unfold`,
      description: page.description,
      type: "article",
      url: `${siteConfig.siteUrl}/solutions/${page.slug}`,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = solutionBySlug[slug];

  if (!page) notFound();

  const expandedFaqs = [
    ...page.faqs,
    {
      question: "Does Unfold support personalized Bible study recommendations?",
      answer:
        "Yes. Unfold is built around personalized devotional journeys so your daily study aligns with your spiritual season and goals.",
    },
    {
      question: "Where can I download the Unfold app?",
      answer: "You can download Unfold on iOS from the App Store.",
    },
  ];

  const relatedPages = solutionPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 4);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: expandedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-[#C8A55C] uppercase tracking-wide mb-4">Unfold Guides</p>
        <h1 className="font-serif text-5xl mb-6 leading-tight">{page.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{page.intro}</p>

        <section className="mb-10">
          <h2 className="font-serif text-3xl mb-4">Why people choose Unfold</h2>
          <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
            {page.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-3xl mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {expandedFaqs.map((faq) => (
              <div key={faq.question} className="border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-3xl mb-4">Related Bible study guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={`/solutions/${related.slug}`}
                className="border border-border rounded-xl p-4 hover:bg-card/40 transition-colors"
              >
                <h3 className="font-semibold mb-1">{related.title}</h3>
                <p className="text-sm text-muted-foreground">{related.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-2xl border border-border p-6 bg-card/40">
          <h2 className="font-serif text-2xl mb-2">Start your personalized devotional journey</h2>
          <p className="text-muted-foreground mb-4">
            Download Unfold and get daily Bible study content designed for your life and pace.
          </p>
          <a
            href="https://apps.apple.com/app/unfold"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#C8A55C] text-black px-5 py-3 font-medium"
          >
            Download Unfold
          </a>
        </div>

        <p className="mt-8">
          <Link href="/solutions" className="text-sm text-muted-foreground hover:underline">
            ← Back to all guides
          </Link>
        </p>
      </article>
    </main>
  );
}
