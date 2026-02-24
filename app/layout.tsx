import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/seo";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Unfold - Personalized Daily Devotionals",
    template: "%s | Unfold",
  },
  description:
    "Your personal spiritual journey awaits. Personalized Bible studies and daily devotionals tailored to your faith journey.",
  keywords: [
    "bible study",
    "personalized bible study plan",
    "daily devotional app",
    "christian journaling app",
    "spiritual growth",
    "faith",
    "christian app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unfold - Personalized Daily Devotionals",
    description:
      "Personalized Bible studies and daily devotionals tailored to your faith journey.",
    type: "website",
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfold - Personalized Daily Devotionals",
    description:
      "Personalized Bible studies and daily devotionals tailored to your faith journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Unfold",
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/solutions`,
      "query-input": "required name=search_term_string",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Unfold",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <ThemeProvider defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
