import Link from "next/link";
import type { Metadata } from "next";
import { solutionPages } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bible Study Guides | Unfold",
  description:
    "Explore Bible study guides and devotional resources tailored to your spiritual goals.",
};

export default function SolutionsIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-5xl mb-4">Bible Study Guides by Unfold</h1>
        <p className="text-muted-foreground mb-10">
          Explore personalized Bible study topics and devotional resources.
        </p>
        <ul className="space-y-4">
          {solutionPages.map((page) => (
            <li key={page.slug} className="border border-border rounded-xl p-5">
              <Link href={`/solutions/${page.slug}`} className="font-semibold hover:underline">
                {page.title}
              </Link>
              <p className="text-sm text-muted-foreground mt-2">{page.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
