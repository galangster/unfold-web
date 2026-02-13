import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Unfold",
  description: "Terms and conditions for using the Unfold app.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: February 13, 2026
        </p>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Unfold 
            mobile application and website (collectively, the &quot;Service&quot;). By accessing or using 
            the Service, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            By creating an account or using Unfold, you agree to these Terms and our Privacy Policy. 
            If you do not agree to these Terms, you may not use the Service.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            2. Description of Service
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold is a devotional and spiritual journaling application that uses artificial 
            intelligence to generate personalized daily devotionals based on user preferences. 
            The Service includes features for reading devotionals, journaling reflections, 
            tracking spiritual progress, and accessing biblical content.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            3. Account Registration
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            To use certain features of the Service, you must create an account. You agree to:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            4. Subscription and Payments
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold offers both free and premium subscription plans. By purchasing a subscription:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>You agree to pay all applicable fees</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>Cancellations must be made through the App Store</li>
            <li>Refunds are handled according to Apple&apos;s App Store policies</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            5. User Content
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            You retain ownership of any content you create in Unfold, including journal entries 
            and reflections. By using the Service, you grant us a limited license to store and 
            process your content solely for the purpose of providing the Service to you.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            6. Acceptable Use
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            You agree not to:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Reverse engineer or attempt to extract the source code</li>
            <li>Use the Service to generate content that is harmful, offensive, or inappropriate</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold and its original content, features, and functionality are owned by us and 
            are protected by copyright, trademark, and other intellectual property laws. 
            Biblical content is used in accordance with respective translation licenses.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            8. AI-Generated Content
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Unfold uses artificial intelligence to generate devotional content. While we strive 
            for accuracy and theological soundness:
          </p>
          <ul className="space-y-3 text-foreground/80">
            <li>AI-generated content should not replace personal Bible study</li>
            <li>We recommend verifying spiritual guidance with Scripture</li>
            <li>Content is generated for personal edification and not as professional pastoral advice</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            9. Disclaimer of Warranties
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The Service is provided &quot;as is&quot; without warranties of any kind, either express or 
            implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            10. Limitation of Liability
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            To the maximum extent permitted by law, we shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages resulting from your use 
            of or inability to use the Service.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            11. Termination
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We may terminate or suspend your account and access to the Service immediately, 
            without prior notice, for conduct that we believe violates these Terms or is 
            harmful to other users, us, or third parties. You may also delete your account 
            at any time.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            12. Changes to Terms
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify users of 
            significant changes through the app or via email. Continued use of the Service 
            after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            13. Governing Law
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            These Terms shall be governed by the laws of the State of Hawaii, United States, 
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            14. Contact Information
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
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
