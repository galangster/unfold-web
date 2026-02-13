import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Support - Unfold",
  description: "Get help with Unfold. Contact our support team for assistance.",
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
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Email Support
            </h3>
            <p className="text-muted-foreground mb-4">
              Get a response within 24-48 hours
            </p>
            <a 
              href="mailto:nicholasgalang@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              nicholasgalang@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              FAQ
            </h3>
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
              Yes! Your devotionals and journal entries sync across all your devices. 
              Simply sign in with the same account on each device.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Is my journal data private?
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Absolutely. Your journal entries are private and encrypted. We never read, 
              share, or use your personal reflections for any purpose.
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
              Unfold currently supports ESV, NIV, NLT, and KJV translations. We&apos;re working 
              to add more translations in future updates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              The app crashed / I found a bug
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re sorry for the trouble! Please email us at{" "}
              <a href="mailto:nicholasgalang@gmail.com" className="text-primary hover:underline">
                nicholasgalang@gmail.com
              </a>{" "}
              with details about what happened, and we&apos;ll get it fixed as soon as possible.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted text-center">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
            Still need help?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is ready to assist you with any questions or issues.
          </p>
          <a 
            href="mailto:nicholasgalang@gmail.com"
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
