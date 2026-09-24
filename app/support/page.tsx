import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Support - Unfold",
  description: "Get help with Unfold. Contact our support team for assistance.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support - Unfold",
    description: "Get help with Unfold. Contact our support team for assistance.",
    url: "/support",
    type: "website",
  },
};

export default function SupportPage() {
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
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          Support
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          We&apos;re here to help you on your spiritual journey.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Email Support
            </h2>
            <p className="text-muted-foreground mb-4">
              Get a response within 24-48 hours
            </p>
            <a 
              href="mailto:support@unfoldapp.co"
              className="text-primary hover:underline font-medium"
            >
              support@unfoldapp.co
            </a>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              FAQ
            </h2>
            <p className="text-muted-foreground mb-4">
              Common questions and answers
            </p>
            <Link 
              href="#faq"
              className="text-primary hover:underline font-medium"
            >
              View FAQ
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 id="faq" className="text-2xl font-serif font-semibold text-foreground mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              How do I restore my subscription?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Open the Unfold app, go to Settings, and tap &quot;Restore Purchases.&quot; 
              Make sure you&apos;re signed in with the same Apple ID used for the original purchase.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Can I use Unfold on multiple devices?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Gift ownership and gift access can be recovered on another device with Sign in
              with Apple. Your devotional content is separate: it belongs to the install on
              one device and does not follow gift sign-in. Our server copy can restore your
              devotionals and journal entries after a reinstall on that same device. An Apple
              device transfer or encrypted backup restore can also carry your content to a new phone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Is my journal data private?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Your journal stays on your device and is also backed up to our own server so it is
              not lost. That backup is encrypted in transit but it is not end-to-end encrypted,
              so we are technically able to read it. We access it only to run, debug and support
              the service, and we never sell it or share it with advertisers. Two features send
              your writing to an AI model, and only when you ask: tapping &quot;Go Deeper&quot;
              on a journal entry, and rating a companion reply.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              How do I cancel my subscription?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Subscriptions are managed through the App Store. Open Settings on your iPhone, 
              tap your name, then Subscriptions, and select Unfold to manage or cancel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What Bible translations are available?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Unfold currently supports the Berean Standard Bible (BSB) and the King
              James Version (KJV). We&apos;re working to add more translations in future updates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              The app crashed / I found a bug
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re sorry for the trouble! Please email us at{" "}
              <a href="mailto:support@unfoldapp.co" className="text-primary hover:underline">
                support@unfoldapp.co
              </a>{" "}
              with details about what happened, and we&apos;ll get it fixed as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted text-center">
          <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
            Still need help?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to assist you with any questions or issues.
          </p>
          <a 
            href="mailto:support@unfoldapp.co"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Contact Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 The Creative Co. Marketing Firm LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-11">
                About
              </Link>
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
