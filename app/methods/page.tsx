import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 32 Bible Study Methods in Unfold",
  description:
    "Every Bible study method Unfold uses, from Lectio Divina and SOAP journaling to verse mapping and inductive study. 32 named methods, each with what it is and how it feels to read.",
  alternates: { canonical: "/methods" },
  openGraph: {
    title: "The 32 Bible Study Methods in Unfold",
    description:
      "Every Bible study method Unfold uses, each with what it is and how it feels to read.",
    url: "/methods",
    type: "website",
  },
};

// Mirrored from the app's own method registry, which a unit test pins at 32
// entries. Name, description and emotional texture only: the prompt text that
// tells the model how to write each devotional is deliberately not published.
type Method = {
  name: string;
  description: string;
  texture: string;
  difficulty: string;
};

const METHODS: Method[] = [
  { name: "Expository (Verse-by-Verse)", description: "Systematic line-by-line analysis unpacking what the text says, meant, and means today.", texture: "Intellectual depth and layered understanding.", difficulty: "intermediate" },
  { name: "Inductive Study (OIA)", description: "Self-discovery through Observation, Interpretation, Application — the reader is the detective.", texture: "Empowering, detective-like discovery.", difficulty: "intermediate" },
  { name: "Word Study", description: "Deep dive into one Hebrew or Greek word — its root, semantic range, and how context shapes meaning.", texture: "Mind-expanding, with fresh eyes on familiar text.", difficulty: "intermediate" },
  { name: "Rhetorical / Literary Analysis", description: "Surface the literary architecture — parallelism, chiasmus, inclusio, repetition, irony.", texture: "Elegant and revelatory — seeing the artistry behind the text.", difficulty: "advanced" },
  { name: "Manuscript Study", description: "Strip away verse numbers and headings — engage the raw text as the original audience received it.", texture: "Immersive and raw — seeing the text as whole cloth.", difficulty: "advanced" },
  { name: "Typological Study", description: "Old Testament people, events, and objects that foreshadow Christ — the shadow points to the substance.", texture: "Awe-inducing — &quot;it was all pointing here.&quot;", difficulty: "intermediate" },
  { name: "Cross-Reference / Theme Tracing", description: "Trace a single theme across the entire biblical narrative — how it develops and resolves in Christ.", texture: "Epic and cinematic — part of a story larger than any passage.", difficulty: "intermediate" },
  { name: "Historical-Cultural Background", description: "Investigate the cultural context that transforms how we read the passage.", texture: "Illuminating and grounding — the text becomes real.", difficulty: "intermediate" },
  { name: "Lectio Divina (Divine Reading)", description: "Ancient 4-movement contemplative practice: Read, Meditate, Pray, Contemplate.", texture: "Intimate, slow, and receptive — listening to God, not studying about God.", difficulty: "accessible" },
  { name: "Ignatian Contemplation (Imaginative Prayer)", description: "Enter a Gospel scene using all five senses and encounter Jesus within the imagined story.", texture: "Vivid, emotional, and personal.", difficulty: "accessible" },
  { name: "Scripture Meditation &amp; Memorization", description: "Commit a short passage to memory and ruminate on it throughout the day.", texture: "Deeply personal and accumulative — building over the day.", difficulty: "accessible" },
  { name: "Breath Prayer with Scripture", description: "Extract a short phrase from the passage and synchronize it with breathing.", texture: "Calming and embodied — bridging theology and physiology.", difficulty: "accessible" },
  { name: "SOAP Journaling", description: "Scripture, Observation, Application, Prayer — a structured journaling framework.", texture: "Grounded, practical, and personal.", difficulty: "accessible" },
  { name: "Verse Mapping", description: "Visual multi-layer annotation of a single verse — keywords, Greek/Hebrew, cross-references, context.", texture: "Creative and exploratory — unpacking layer by layer.", difficulty: "intermediate" },
  { name: "Swedish Method", description: "Three symbols: lightbulb (what shines), question mark (what confuses), arrow (what applies).", texture: "Accessible, non-threatening, and warm.", difficulty: "accessible" },
  { name: "Discovery Bible Study (DBS)", description: "Seven simple questions that let the Bible do the heavy lifting — no expertise required.", texture: "Communal, action-oriented, and externally focused.", difficulty: "accessible" },
  { name: "Topical Study", description: "Comprehensive examination of a topic across multiple passages, genres, and time periods.", texture: "Comprehensive and authoritative — hearing the full biblical witness.", difficulty: "intermediate" },
  { name: "Character / Biographical Study", description: "Reconstruct a biblical figure\u2019s life, choices, failures, and growth as a mirror for the reader.", texture: "Relatable and narrative-driven — seeing yourself in their story.", difficulty: "accessible" },
  { name: "Thematic Thread", description: "Trace one narrow thread through carefully selected passages — deeper than topical, more focused.", texture: "Focused and progressive — the thread tightens each day.", difficulty: "intermediate" },
  { name: "Narrative / Story Analysis", description: "Follow the story structure: exposition, conflict, climax, resolution. Show, don\u2019t tell.", texture: "Tension and resolution — story-driven.", difficulty: "accessible" },
  { name: "Poetry &amp; Psalms Study", description: "Slow reading of Hebrew poetry — parallelism, imagery, emotional arc, the turning point.", texture: "Emotional and beautiful — feeling the turn.", difficulty: "intermediate" },
  { name: "Wisdom Literature Study", description: "Proverbs as patterns (not promises), Ecclesiastes as honest observation, Job as dramatic dialogue.", texture: "Honest and challenging — permission to wrestle.", difficulty: "intermediate" },
  { name: "Prophetic Literature Study", description: "Forth-telling before foretelling — historical context first, then a bridge to today.", texture: "Urgent — bridging past and present.", difficulty: "advanced" },
  { name: "Epistle / Letter Study", description: "Follow the logical flow — map the therefore-because chain, identify the problem being addressed.", texture: "Logical and persuasive — following an argument.", difficulty: "intermediate" },
  { name: "Redemptive-Historical (Biblical Theology)", description: "Read every passage through the lens of Creation → Fall → Redemption → Restoration.", texture: "Grand-scale and purposeful — every passage has a place in the epic.", difficulty: "advanced" },
  { name: "Covenant Study", description: "Examine the passage through the lens of God\u2019s covenants — their promises, terms, signs, and fulfillment.", texture: "Foundational and relational — God binding Himself to people.", difficulty: "advanced" },
  { name: "Parable Study", description: "Interpret Jesus\u2019 parables with proper guardrails — one central point, audience context, first-century culture.", texture: "Surprising and subversive — parables flip expectations.", difficulty: "intermediate" },
  { name: "Lament Study", description: "Follow the lament structure: address → complaint → trust → petition → praise. Permission to grieve.", texture: "Raw and honest — permission to bring pain to God.", difficulty: "accessible" },
  { name: "Comparative Translation Study", description: "Read the same verse across 4-5 translations and notice what each reveals.", texture: "Illuminating and accessible — familiar verses become fresh.", difficulty: "accessible" },
  { name: "Praying the Psalms", description: "Use the psalm as an actual prayer — substitute your situation into the psalmist\u2019s language.", texture: "Conversational and personal — the psalm becomes your prayer.", difficulty: "accessible" },
  { name: "Scriptural Storytelling / Re-narration", description: "Retell the biblical text in vivid detail, filling the sensory and emotional gaps the text leaves sparse.", texture: "Immersive and alive — the text becomes a world you enter.", difficulty: "accessible" },
  { name: "Examen with Scripture", description: "Review the day\u2019s events through the lens of a passage — where did God show up? Where was He absent?", texture: "Reflective and integrative — connecting Scripture to lived experience.", difficulty: "accessible" },
];

const DIFFICULTY_LABEL: Record<string, string> = {
  accessible: "Anyone can start here",
  intermediate: "Some familiarity helps",
  advanced: "For deeper study",
};

const GROUPS = ["accessible", "intermediate", "advanced"] as const;

export default function MethodsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Unfold
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          The 32 Bible study methods in Unfold
        </h1>

        <p className="text-lg text-foreground/90 leading-relaxed mb-4">
          A study method is the shape a day&apos;s reading takes. Unfold draws on
          32 of them, and assigns one to a day when that day&apos;s passage calls
          for it, so a series moves between close analysis, quiet contemplation
          and honest lament rather than doing the same thing every morning.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-12">
          These are fixed frameworks written into the app, not something
          generated for you. The devotional writing around them is written fresh
          each time by Anthropic&apos;s Claude models. Reading the Bible in Unfold
          is free; see{" "}
          <Link href="/#pricing" className="underline underline-offset-2">
            pricing
          </Link>{" "}
          for what a subscription opens.
        </p>

        {GROUPS.map((level) => {
          const group = METHODS.filter((m) => m.difficulty === level);
          if (group.length === 0) return null;
          return (
            <section key={level} className="mb-14">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-1">
                {DIFFICULTY_LABEL[level]}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {group.length} {group.length === 1 ? "method" : "methods"}
              </p>
              <dl className="space-y-7">
                {group.map((m) => (
                  <div key={m.name}>
                    <dt className="text-lg font-semibold text-foreground">
                      {m.name}
                    </dt>
                    <dd className="text-foreground/80 leading-relaxed mt-1">
                      {m.description}
                    </dd>
                    <dd className="text-sm text-muted-foreground mt-1 italic">
                      {m.texture}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}

        <p className="text-foreground/80 leading-relaxed border-t border-border pt-8">
          That is 32 methods in total. Unfold is free to download on iPhone,
          iOS 16.4 or later.{" "}
          <a
            href="https://apps.apple.com/app/id6760814444"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Get it on the App Store
          </a>
          .
        </p>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 The Creative Co. Marketing Firm LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-11"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-11"
              >
                Terms
              </Link>
              <Link
                href="/support"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-11"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
