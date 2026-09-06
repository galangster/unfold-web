import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Unfold",
  description: "Learn how Unfold protects your privacy and handles your data.",
};

const collectedInformation = [
  "Name and profile context: the name you choose, devotional preferences, current situation, faith background, spiritual goals, and relationship-with-God responses.",
  "Inner Weather: when available, optional structured emotional-state selections used to shape future devotional tone, reflection questions, and practices.",
  "User content: journal entries, notes, highlights, bookmarks, Companion conversations, check-ins, and related reflections.",
  "Reading activity: devotional progress, reading position, completed days, reminders, and app settings.",
  "Device and purchase identifiers: a random device identifier, timezone, push token, and RevenueCat subscription state.",
  "Diagnostics: error reports and technical performance information needed to operate and secure the app.",
];

const uses = [
  "provide and synchronize the app for this device identity;",
  "generate and improve personalized devotional content;",
  "provide requested Companion, journaling, and Bible-study features;",
  "maintain subscriptions and restore purchases;",
  "send optional reminders;",
  "diagnose errors, prevent abuse, and secure the service; and",
  "respond to support requests.",
];

const providers = [
  "Apple for App Store distribution, purchases, and notifications;",
  "RevenueCat for subscription status and purchase restoration;",
  "Cloudflare for network protection and delivery;",
  "Railway and database infrastructure providers for backend hosting and storage;",
  "Anthropic, xAI, and Google for AI generation and related processing; and",
  "Sentry for error and performance diagnostics.",
];

const choices = [
  "edit profile and devotional preferences in the app;",
  "delete individual journal and Inner Weather entries;",
  "export supported journal content;",
  "disable notifications in Unfold or system settings; and",
  "use Delete all data to erase Unfold server and device data.",
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-foreground transition-colors hover:text-muted-foreground"
          >
            Unfold
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 font-serif text-4xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="mb-8 text-muted-foreground">Last updated: August 25, 2026</p>

        <div className="prose prose-stone max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-foreground/90">
            Unfold provides personalized Bible study, devotionals, journaling,
            and faith-companion features. This policy explains what Unfold
            collects, why it is used, where it is processed, and how you can
            delete it.
          </p>
          <p className="leading-relaxed text-foreground/80">
            Unfold does not create a traditional user account. A random device
            identifier connects this installation to its server data and
            purchase access. It is not used for advertising or cross-app tracking.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <ul className="space-y-3 text-foreground/80">
            {collectedInformation.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="leading-relaxed text-foreground/80">
            Unfold does not collect precise location, contacts, browsing
            history, or advertising identifiers. Unfold does not sell personal
            data or use it for targeted advertising.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            How We Use Information
          </h2>
          <p className="leading-relaxed text-foreground/80">We use this information to:</p>
          <ul className="space-y-3 text-foreground/80">
            {uses.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="leading-relaxed text-foreground/80">
            Profile context, Inner Weather selections, reading history, journal
            context, and Companion messages may be processed by our AI providers
            when needed to provide personalization or an AI feature. We do not
            sell your content or use it to train an Unfold public AI model.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Storage and Security
          </h2>
          <p className="leading-relaxed text-foreground/80">
            Personal data is stored on your device and on Unfold&apos;s service
            infrastructure. Data is encrypted in transit, and we use safeguards
            designed to protect stored data. No storage or transmission system
            can guarantee absolute security.
          </p>
          <p className="leading-relaxed text-foreground/80">
            Unfold is device-bound. It does not currently provide account-based
            cross-device synchronization.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Service Providers
          </h2>
          <p className="leading-relaxed text-foreground/80">
            Unfold uses service providers that process data to provide their
            contracted services:
          </p>
          <ul className="space-y-3 text-foreground/80">
            {providers.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="leading-relaxed text-foreground/80">
            Each provider handles data under its own terms and privacy commitments.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Retention and Deletion
          </h2>
          <p className="leading-relaxed text-foreground/80">
            We retain device-bound data while this installation uses Unfold,
            unless you delete it. Deleted individual items can remain as
            synchronization tombstones so an offline device cannot recreate
            them. Tombstoned items are excluded from app and AI reads.
          </p>
          <p className="leading-relaxed text-foreground/80">
            When <strong>Delete all data</strong> succeeds, active personal
            records are erased from Unfold&apos;s servers and this device. We retain
            the old device identifier for up to 30 days only to purge late-arriving
            writes. We then remove that identifier and keep a one-way hash solely
            to prevent the erased identity from recreating data.
          </p>
          <p className="leading-relaxed text-foreground/80">
            Apple and RevenueCat may retain purchase records as required for
            transactions, fraud prevention, accounting, or legal compliance.
            Deleting Unfold data does not cancel an App Store subscription.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Your Choices
          </h2>
          <p className="leading-relaxed text-foreground/80">You can:</p>
          <ul className="space-y-3 text-foreground/80">
            {choices.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="leading-relaxed text-foreground/80">
            For access or privacy questions, contact{" "}
            <a href="mailto:support@unfoldapp.co">support@unfoldapp.co</a>.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Children&apos;s Privacy
          </h2>
          <p className="leading-relaxed text-foreground/80">
            Unfold is not intended for children under 13. We do not knowingly
            collect personal data from children under 13.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Changes to This Policy
          </h2>
          <p className="leading-relaxed text-foreground/80">
            We may update this policy as the app changes. We will post the
            effective date and provide additional notice when required.
          </p>

          <h2 className="mt-10 mb-4 font-serif text-2xl font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="leading-relaxed text-foreground/80">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@unfoldapp.co">support@unfoldapp.co</a>
          </p>
        </div>
      </main>

      <footer className="mt-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 The Creative Co. Marketing Firm LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy</Link>
              <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">Terms</Link>
              <Link href="/support" className="text-muted-foreground transition-colors hover:text-foreground">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
