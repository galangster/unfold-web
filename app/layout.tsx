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
  title: "Unfold - Personalized Daily Devotionals",
  description: "Your personal spiritual journey awaits. AI-crafted daily devotionals tailored to your faith journey.",
  keywords: ["bible study", "daily devotional", "spiritual growth", "faith", "christian app"],
  openGraph: {
    title: "Unfold - Personalized Daily Devotionals",
    description: "Your personal spiritual journey awaits.",
    type: "website",
  },
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
        <ThemeProvider defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
