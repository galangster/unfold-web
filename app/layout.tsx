import type { Metadata } from "next";
import { Gupter, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Gupter — the serif Unfold uses for display/headings in the app.
const gupter = Gupter({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Required for og:image / twitter:image to resolve to absolute URLs.
  // Without it Next falls back to http://localhost:3000 and every share
  // card breaks.
  metadataBase: new URL("https://unfoldapp.co"),
  title: "Unfold: AI Daily Devotionals & Bible Study App for iOS",
  description:
    "Unfold is a Bible study app that shapes each day's devotional around your spiritual season, with verse highlighting and a quiet place to journal your prayers.",
  keywords: [
    "AI Bible study app",
    "personalized devotional app",
    "daily devotional app",
    "Bible study app with journaling",
    "personal Bible study",
    "Bible reading app",
    "daily Bible study",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unfold: A Sacred Daily Bible Study",
    description:
      "Personalized devotionals, Bible reading, and a quiet place to journal your prayers.",
    type: "website",
    siteName: "Unfold",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfold: A Sacred Daily Bible Study",
    description:
      "Personalized devotionals, Bible reading, and a quiet place to journal your prayers.",
  },
};

const SITE = "https://unfoldapp.co";
const APP_STORE = "https://apps.apple.com/app/id6760814444";

// Entity markup. Deliberately carries NO aggregateRating: self-serving review
// data on your own product breaks Google's rich-results policy, and the real
// sample is three ratings. That also means the Software App rich result is
// unattainable here by design, so this is judged as entity information only.
const ORG_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE}/#publisher`,
  name: "The Creative Co. Marketing Firm LLC",
  url: SITE,
  email: "support@unfoldapp.co",
};

const APP_SCHEMA = {
  "@type": "MobileApplication",
  "@id": `${SITE}/#app`,
  name: "Unfold: Personal Bible Study",
  alternateName: "Unfold",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Bible Study",
  operatingSystem: "iOS 16.4 or later",
  softwareVersion: "1.1.5",
  datePublished: "2026-09-08",
  inLanguage: "en",
  url: SITE,
  installUrl: APP_STORE,
  sameAs: [APP_STORE],
  description:
    "Personalized daily devotionals and Bible study for iPhone. Unfold builds each day's reading around your spiritual season, with 32 named study methods, verse highlighting in the Berean Standard Bible and King James Version, guided reflection prompts and a prayer journal.",
  publisher: { "@id": `${SITE}/#publisher` },
  // Only the two products the page actually sells. The App Store also lists a
  // $44.99 Annual SKU that this page never renders; importing it here would
  // recreate the price contradiction this block exists to fix.
  offers: [
    {
      "@type": "Offer",
      name: "Unfold (free)",
      price: "0",
      priceCurrency: "USD",
      category: "free",
    },
    {
      "@type": "Offer",
      name: "Unfold Premium (Monthly)",
      price: "9.99",
      priceCurrency: "USD",
      category: "subscription",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Unfold Premium (Yearly)",
      price: "69.99",
      priceCurrency: "USD",
      category: "subscription",
      availability: "https://schema.org/InStock",
    },
  ],
};

const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [ORG_SCHEMA, APP_SCHEMA],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${gupter.variable} ${inter.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />
        <ThemeProvider defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
