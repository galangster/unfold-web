export const siteConfig = {
  name: "Unfold",
  description:
    "Personalized Bible study plans and daily devotionals tailored to your spiritual journey.",
  // Canonical site URL for metadata/sitemaps
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://unfoldapp.co", 
};

export type SolutionPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "personalized-bible-study-plan",
    title: "Personalized Bible Study Plan App",
    description:
      "Discover personalized Bible study plans tailored to your goals, pace, and spiritual season with Unfold.",
    h1: "Find a personalized Bible study plan that fits your real life",
    intro:
      "Unfold helps you build a Bible study rhythm that matches where you are right now—whether you have 10 minutes a day or a full quiet hour.",
    bullets: [
      "Adaptive devotional tracks based on your interests and season",
      "Guided reflection prompts for deeper understanding",
      "Progressive journeys so your study plan grows with you",
    ],
    faqs: [
      {
        question: "What makes Unfold a personalized Bible study app?",
        answer:
          "Unfold tailors devotionals and reading journeys based on your selected focus areas, goals, and reading pace.",
      },
      {
        question: "Can beginners use this Bible study plan?",
        answer:
          "Yes. Unfold is designed for beginners and experienced readers with approachable daily sessions.",
      },
    ],
  },
  {
    slug: "bible-study-for-anxiety",
    title: "Bible Study for Anxiety and Stress",
    description:
      "Daily Bible study and devotionals for anxiety, stress, and overwhelm. Build peace-centered spiritual habits with Unfold.",
    h1: "Bible study for anxiety: daily peace when life feels loud",
    intro:
      "When anxiety is high, consistency matters more than intensity. Unfold gives you short, meaningful devotionals grounded in Scripture and reflection.",
    bullets: [
      "Short daily readings for stressful seasons",
      "Reflection prompts focused on peace, trust, and hope",
      "A calm, distraction-free reading experience",
    ],
    faqs: [
      {
        question: "Is this a Christian devotional app for anxiety?",
        answer:
          "Yes. Unfold offers Scripture-centered devotionals and journaling prompts for people navigating anxiety and stress.",
      },
      {
        question: "How long are the daily studies?",
        answer:
          "Most daily studies are designed to be completed in 5–10 minutes.",
      },
    ],
  },
  {
    slug: "bible-study-for-couples",
    title: "Bible Study App for Couples",
    description:
      "Strengthen your relationship with guided Bible study and devotional prompts for couples using Unfold.",
    h1: "Grow spiritually together with Bible study for couples",
    intro:
      "Unfold helps couples create a simple shared faith habit through practical devotionals and conversation prompts.",
    bullets: [
      "Easy-to-follow shared devotional topics",
      "Conversation starters for meaningful faith discussions",
      "Flexible pacing for busy schedules",
    ],
    faqs: [
      {
        question: "Can couples with different schedules use Unfold?",
        answer:
          "Yes. Unfold supports flexible daily use, so couples can stay aligned even if they read at different times.",
      },
      {
        question: "Do we need to be Bible experts?",
        answer:
          "No. Content is designed to be practical and welcoming for all experience levels.",
      },
    ],
  },
  {
    slug: "daily-devotional-app",
    title: "Daily Devotional App",
    description:
      "Start and sustain a daily devotional routine with personalized readings, reflection prompts, and faith-based guidance.",
    h1: "A daily devotional app you’ll actually stick with",
    intro:
      "Unfold is built for consistency—short, meaningful devotionals that help you stay connected to Scripture every day.",
    bullets: [
      "Personalized daily devotionals",
      "Built-in prompts for journaling and reflection",
      "Simple design that keeps focus on the Word",
    ],
    faqs: [
      {
        question: "How is Unfold different from generic devotional apps?",
        answer:
          "Unfold emphasizes personalization and spiritual context instead of one-size-fits-all daily content.",
      },
      {
        question: "Can I use Unfold in just a few minutes per day?",
        answer: "Yes. Daily sessions are intentionally concise and practical.",
      },
    ],
  },
  {
    slug: "christian-journaling-app",
    title: "Christian Journaling App",
    description:
      "Use Scripture-based prompts to build a consistent Christian journaling habit with Unfold.",
    h1: "Christian journaling with structure, not overwhelm",
    intro:
      "Unfold pairs devotionals with thoughtful prompts so journaling becomes a meaningful rhythm, not a blank-page struggle.",
    bullets: [
      "Prompted entries tied to daily Scripture themes",
      "Designed for depth in short sessions",
      "Helpful for reflection, prayer, and growth tracking",
    ],
    faqs: [
      {
        question: "Is Unfold good for daily Christian journaling?",
        answer:
          "Yes. Each devotional includes practical prompts to help you reflect and journal consistently.",
      },
      {
        question: "Can journaling beginners use it?",
        answer:
          "Absolutely. Prompts are designed to make journaling approachable and structured.",
      },
    ],
  },
];

export const solutionBySlug = Object.fromEntries(
  solutionPages.map((page) => [page.slug, page]),
);
