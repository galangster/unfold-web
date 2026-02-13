import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Unfold",
  description: "Learn how Unfold protects your privacy and handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: February 13, 2026
        </p>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            At Unfold, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, and protect your personal information when you use our devotional app.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Information We Collect
          </h2>
          
          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Account Information
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            When you create an account, we collect your email address and name. This information 
            is used to identify your account and sync your devotional progress across devices.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Journal Entries
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Any reflections or journal entries you write within the app are stored securely and 
            are private to your account. We do not access, read, or share your personal spiritual 
            reflections with anyone.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Devotional Preferences
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            We store your devotional journey preferences (such as topics, themes, and reading 
            progress) to provide personalized content and maintain your spiritual journey continuity.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Usage Data
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            We collect anonymous usage statistics to help us understand how the app is used and 
            improve the experience. This includes feature usage, app performance data, and crash 
            reports. This data cannot be used to identify you personally.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            How We Use Your Information
          </h2>
          <ul className="space-y-3 text-foreground/80">
            <li>To provide and maintain the Unfold devotional service</li>
            <li>To sync your progress and journal entries across your devices</li>
            <li>To generate personalized devotional content using AI</li>
            <li>To send you optional notifications about your daily devotionals</li>
            <li>To improve our app and user experience</li>
            <li>To respond to your support requests</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            AI and Data Processing
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold uses artificial intelligence to generate personalized devotional content. 
            When you request a devotional, your preferences and chosen themes are processed by 
            our AI systems to create relevant spiritual content. We do not use your journal 
            entries or personal reflections to train AI models.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Data Storage and Security
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Your data is stored securely using industry-standard encryption. We use 
            Firebase/Google Cloud infrastructure, which maintains SOC 2 Type II compliance 
            and robust security measures. All data transmission between your device and our 
            servers is encrypted using TLS.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Data Retention
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We retain your account data and journal entries for as long as you maintain an 
            active account. If you delete your account, all associated data is permanently 
            removed from our systems within 30 days.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Your Rights
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            You have the right to:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Export your journal entries</li>
            <li>Opt out of non-essential notifications</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Third-Party Services
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold uses the following third-party services:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li><strong>Firebase</strong> - Authentication and data storage</li>
            <li><strong>RevenueCat</strong> - In-app purchase processing</li>
            <li><strong>Anthropic/OpenAI</strong> - AI devotional content generation</li>
            <li><strong>Apple App Store</strong> - Subscription management</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Each of these services has their own privacy policies and security measures.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy in the app and updating the effective date. 
            Continued use of Unfold after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us at:
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>Email:</strong>{" "}
            <a 
              href="mailto:nicholasgalang@gmail.com" 
              className="text-primary hover:underline"
            >
              nicholasgalang@gmail.com
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Unfold. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
