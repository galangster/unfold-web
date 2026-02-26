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
    slug: "bible-study-for-beginners",
    title: "Bible Study App for Beginners",
    description:
      "A beginner-friendly Bible study app with guided daily devotionals, reflection prompts, and simple daily structure.",
    h1: "Start Bible study as a beginner—with confidence",
    intro:
      "Unfold makes it easier to begin with simple daily readings and prompts that remove overwhelm and build a steady rhythm.",
    bullets: [
      "Beginner-friendly language and structure",
      "Short sessions you can complete in minutes",
      "Guided prompts so you’re never staring at a blank page",
    ],
    faqs: [
      {
        question: "Is Unfold good for first-time Bible readers?",
        answer:
          "Yes. Unfold is designed to be approachable for beginners while still valuable for experienced Christians.",
      },
      {
        question: "Do I need Bible study experience?",
        answer: "No. The app guides you step-by-step with practical daily structure.",
      },
    ],
  },
  {
    slug: "morning-devotional-app",
    title: "Morning Devotional App",
    description:
      "Build a consistent morning devotional habit with personalized Bible readings and reflection prompts.",
    h1: "Build a peaceful morning devotional routine",
    intro:
      "Start your day centered in Scripture with short, personalized devotionals that fit your mornings.",
    bullets: [
      "Quick morning-friendly devotional sessions",
      "Personalized tracks for your current season",
      "Reflection prompts to carry Scripture into your day",
    ],
    faqs: [
      {
        question: "How long is a morning devotional in Unfold?",
        answer: "Most sessions are designed to be completed in about 5–10 minutes.",
      },
      {
        question: "Can I keep up with this on busy mornings?",
        answer: "Yes. The experience is intentionally brief and consistent.",
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
        answer: "Most daily studies are designed to be completed in 5–10 minutes.",
      },
    ],
  },
  {
    slug: "christian-devotional-for-grief",
    title: "Christian Devotional for Grief",
    description:
      "Find gentle, Scripture-centered devotionals for grief, loss, and healing with Unfold.",
    h1: "Christian devotionals for grief and healing",
    intro:
      "In seasons of loss, Unfold helps you process grief through compassionate, Scripture-centered daily reflection.",
    bullets: [
      "Gentle devotionals for grief and loss",
      "Reflection prompts for lament, hope, and healing",
      "A quiet format designed for emotionally hard days",
    ],
    faqs: [
      {
        question: "Can Unfold support grief-focused devotional habits?",
        answer: "Yes. Unfold includes themes and prompts designed for difficult emotional seasons.",
      },
      {
        question: "Is content faith-based?",
        answer: "Yes. All devotionals are grounded in Christian Scripture.",
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
        answer: "No. Content is designed to be practical and welcoming for all experience levels.",
      },
    ],
  },
  {
    slug: "bible-study-for-women",
    title: "Bible Study App for Women",
    description:
      "Daily Bible study for women with personalized devotionals, practical prompts, and spiritually grounded routines.",
    h1: "Personalized Bible study for women",
    intro:
      "Unfold helps women build a steady devotional rhythm with content tailored to real-life pressures, priorities, and spiritual goals.",
    bullets: [
      "Daily devotional consistency",
      "Practical reflection prompts",
      "Topics for growth, peace, identity, and purpose",
    ],
    faqs: [
      {
        question: "Is Unfold designed for women’s Bible study routines?",
        answer: "Yes. It supports personalized daily study and reflection with practical, life-relevant content.",
      },
      {
        question: "Can this replace printed devotionals?",
        answer: "For many users, yes—it provides a daily guided structure in-app.",
      },
    ],
  },
  {
    slug: "bible-study-for-men",
    title: "Bible Study App for Men",
    description:
      "Build a practical, consistent Bible study routine for men with guided devotionals and reflection prompts.",
    h1: "Practical Bible study for men who want consistency",
    intro:
      "Unfold helps men establish a daily spiritual practice with straightforward devotional flow and intentional reflection.",
    bullets: [
      "Simple daily routines",
      "Scripture-centered reflection prompts",
      "Designed for consistency over perfection",
    ],
    faqs: [
      {
        question: "Is this useful for men with busy schedules?",
        answer: "Yes. Sessions are designed to be concise and sustainable.",
      },
      {
        question: "Does it include guided journaling?",
        answer: "Yes. Prompts are built into daily devotionals to support growth and reflection.",
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
        answer: "Absolutely. Prompts are designed to make journaling approachable and structured.",
      },
    ],
  },
  {
    slug: "scripture-memory-app",
    title: "Scripture Memory App",
    description:
      "Build a Scripture memory habit through repeated reflection, journaling, and daily devotional structure.",
    h1: "Use daily devotionals to strengthen Scripture memory",
    intro:
      "Unfold helps you retain key verses by combining repeated themes, reflection prompts, and daily consistency.",
    bullets: [
      "Daily reinforcement through themed devotionals",
      "Reflection prompts that deepen retention",
      "Habit-first flow for long-term consistency",
    ],
    faqs: [
      {
        question: "Does Unfold replace dedicated flashcard apps?",
        answer: "It complements them by building Scripture familiarity through daily devotional repetition.",
      },
      {
        question: "Can this help with verse recall?",
        answer: "Yes. Regular exposure and reflection improve retention over time.",
      },
    ],
  },
];

export const solutionBySlug = Object.fromEntries(
  solutionPages.map((page) => [page.slug, page]),
);
