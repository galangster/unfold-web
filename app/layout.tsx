import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${instrumentSerif.variable} ${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
