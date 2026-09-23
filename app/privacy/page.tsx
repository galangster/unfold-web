import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Unfold",
  description: "Learn how Unfold protects your privacy and handles your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy - Unfold",
    description: "Learn how Unfold protects your privacy and handles your data.",
    url: "/privacy",
    type: "website",
  },
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
          Last updated: September 23, 2026
        </p>

        <div className="max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            At Unfold, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our devotional app. It describes what the app actually does, and we have tried to be specific rather than reassuring.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            How We Identify You
          </h3>

          <p className="text-foreground/80 leading-relaxed mb-4">
            You can use Unfold&apos;s devotional features without creating an account. Gifting uses optional Sign in with Apple so you can recover purchased and claimed gifts on another device. We do not ask for your email address or password during gift sign-in.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Your devotional content is identified to our server by a random identifier generated on your device. It is kept in the iOS Keychain and also mirrored into the app&apos;s local database, so it survives reinstalling the app and can also survive the Keychain being cleared. That is what lets your content come back if you reinstall the app on the same device. If the Keychain cannot be read and no mirror exists, the app runs the session under a temporary identifier that is never saved and never sent, and nothing syncs during that session.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Because the identifier belongs to this install, your devotional content does not follow you when you install Unfold fresh on another device. It does move with an Apple device-to-device transfer or an encrypted backup restore, which carry both the identifier and the app&apos;s local database to the new phone. Gift sign-in restores gift ownership and access; it does not transfer your journal, devotionals or other writing between devices.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            During onboarding you may type a first name and a few sentences about your life and what you are walking through. Depending on the questions you answer, this can also include the names of people in your life and how they are related to you, a dated event you have coming up, and your answers to follow-up questions the app asks.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Gift Purchases and Apple Sign-in
          </h3>

          <p className="text-foreground/80 leading-relaxed mb-4">
            When you sign in for gifts, Apple gives us an identifier for your Apple account in Unfold and an identity token. Our server verifies that token and links the identifier to your gift session. We store the Apple identifier, your install identifier, purchase and claim records, transaction identifiers, gift status and relevant dates. We store a hash of each gift code. These records let us deliver gifts, restore gift access, prevent duplicate claims and handle refunds. They are not used for advertising or tracking.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Journal Entries and Your Content
          </h3>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Your journal entries, notes, check-in reflections and companion conversations are saved on your device and are also copied to our own server so they are not lost. The same copy covers your devotionals and their days, your bookmarks, your highlights in a devotional and in the Bible reader — including any note you attach to a verse — your place in a reading, your profile answers, and every app setting, including your theme, font, reading font, preferred narration voice, Bible translation, reminder time and reading length.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Two features send your journal writing to an AI model, and only when you ask: tapping &quot;Go Deeper&quot; on a journal entry sends up to 2,000 characters of that entry, and rating a companion reply sends that reply and your preceding message, up to 5,000 characters each. Your journal entries and notes are not sent to an AI model for anything else.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Your check-in reflections are treated differently, and two features send them without being asked. Opening the evening wind-down sends that day&apos;s check-in — the mood you picked, the answer you tapped and up to 500 characters of what you wrote — to generate your reflection. On subscribed accounts, opening Today can do the same with the previous day&apos;s check-in to write the short bridge at the top of the screen. Both also include your first name and up to 500 characters of the situation you described during onboarding.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Devotional Preferences
          </h3>

          <p className="text-foreground/80 leading-relaxed mb-4">
            We store your devotional preferences and your progress so your reading stays continuous. This covers the theme, type and study subject you chose, your reading length and duration, your writing-style answers, your Bible translation, your reminder time and whether reminders are on, and your display settings — theme, accent, font size, reading font and preferred narration voice. All of it is copied to our server alongside your content, and the app also sends your device&apos;s timezone with each upload so reminders arrive at the right local time.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
            Usage Data, Crash Reporting and Telemetry
          </h3>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Unfold includes two third-party services that report from the app: Sentry, which receives crash and error reports from TestFlight and App Store builds, and one component of the app framework we use, which sends a single launch ping to Expo. Both are described below. Separately, our server sends optional product feedback to Sentry, as described at the end of this section.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            The app sends device crash and error reports to Sentry from TestFlight and App Store builds. It records app crashes, hangs, unexpected terminations and handled errors; the names of the screens you move between; breadcrumbs naming the component you tapped and the source file it comes from; the endpoint and HTTP verb of failed requests to our own server, with the query string removed; your device model, screen size, locale, timezone, OS version and app version; four onboarding milestones — started, resumed, completed and abandoned — of which only the milestone name and, for three of them, the onboarding step you were on actually leave your device; and, in a sample of sessions in release builds, timing measurements such as app start and request duration. Sentry is switched off in development builds, because it is compiled in only for release configurations.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Before a device crash or performance report reaches Sentry, the app rebuilds it from a list of field names written into our source, rather than filtering out the fields we think are sensitive. A field that is not on that list cannot get through. Journal entries, notes, devotional and companion text, your name and your onboarding answers are not on it. Where the app needs to record that a payload failed, it sends the field names only and never their values. Text that is allowed through is cut to 200 characters, console output is dropped entirely, local variables and source lines are stripped from stack traces, and anything shaped like a random identifier is masked because your install identifier is also your credential. Screenshots, view-hierarchy capture and session replay are all switched off. These device error and performance reports carry no user record and no install identifier. Optional feedback sent through our server includes the Support ID and note you submit, as described below. Sentry does keep its own random per-install identifier for its crash-free-rate statistics; it is separate from the identifier we use and is not linked to your account or your content.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            We should be plain about the limits of that design. Numbers and true/false values pass through under any field name, not only the named ones, and an error&apos;s own message is a named field, truncated to 200 characters. No error we currently report puts your writing into a message, but the list does not structurally prevent one.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            The app also sends one request to Expo, at i.expo.dev, each time it launches. It carries a launch event name, the app version, the platform, the OS version and a random identifier stored on your device for this install. It carries no account data and no content.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            A bug report you choose to send from inside the app is sent to our server with what you typed, the app and build version, your network state, the id and title of the devotional you are on, your reading preferences, your subscription status, and the app&apos;s recent internal event log. It does not include your journal entries or your notes.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Product feedback you choose to send from your profile or after a reading milestone includes your note, app and build version, platform and Support ID. Our server records this feedback in Sentry so we can review it. Sending feedback is optional and does not submit an App Store rating.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            How We Use Your Information
          </h2>

          <ul className="space-y-3 text-foreground/80 mb-4 list-disc pl-5">
            <li>To provide and maintain the Unfold devotional service</li>
            <li>To back up your progress and journal entries to our server so they can be restored on this device</li>
            <li>To generate personalized devotional content using AI</li>
            <li>To send you optional notifications about your daily devotionals</li>
            <li>To find and fix crashes and errors</li>
            <li>To respond to your support requests</li>
            <li>To deliver gifts, restore gift access and handle purchase refunds</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            AI and Data Processing
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Unfold&apos;s devotionals, companion replies and reflection prompts are written by AI models run by third parties. We do not run our own models. Requests go from the app to our server at api.unfoldapp.co, and our server calls the model provider; the app never contacts a model provider directly. For most features the app names the model it wants and our server chooses what to call; for some features the app sends only the data and our server owns both the prompt and the choice of model.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            What we send depends on the feature.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Devotional generation includes your first name and the answers you gave during onboarding: what you are walking through, how you are feeling, what you are seeking, how you describe your relationship with God, your growth goals and obstacles, the names of people in your life and how they are related to you, a dated event you told us about, and your answers to the app&apos;s follow-up questions, along with your chosen theme, reading length, translation and writing style.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            You can also add a life update before starting a new devotional series. The text you choose to include is sent to our server, saved with your series context and used to personalize generation. If you record an answer, tapping Transcribe sends the audio through our server to OpenAI. You can review and edit the returned text before adding it. This voice-answer flow is separate from saved voice check-ins described below.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            The morning and evening reflections include your check-in mood and anything you wrote there.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Companion replies include the last ten messages in that conversation, together with your first name, the name you gave your companion, the title of the devotional you are on and which day you are on, your streak count, the time of day and your device&apos;s timezone. If you ask for a reply to be regenerated, the previous reply and the reason you gave are sent too.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Your journal entries and notes are not sent to an AI model for any other feature. Other parts of the app do use AI, and what they send is not your journal: explaining a passage sends the reference and up to 2,500 characters of the passage with the devotional you are on; verse commentary sends the reference and up to 1,000 characters of the verse with the day&apos;s theme; naming a companion conversation sends its first message and first reply; the onboarding follow-up questions and the summary the app reads back to you send your earlier onboarding answers; and pulling a shareable quote sends up to 3,000 characters of the devotional text we generated for you.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Where voice check-ins are available, sending one uploads the recording itself — up to two minutes of audio — from your device to our server, which has it turned into text by a third-party transcription service and stores the transcript there rather than on your device. The app names that service on the recording screen before you send. Deleting a saved check-in asks our server to delete that record. Deleting it does not change text that was already generated from it.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            The About me step of onboarding offers the same microphone. Tapping it records up to two minutes of audio, and the transcript comes back to you as editable text; nothing is saved until you choose Use this answer. The recording goes through the same route and the same transcription provider as a voice check-in, but our server does not keep the audio, does not store a separate transcript, and does not create a check-in from it. Only the text you accept is kept, as part of your onboarding answers described above.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            We do not use your content to train AI models.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Data Storage and Security
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            The Unfold app talks to a single service of our own at api.unfoldapp.co. That service sits behind Cloudflare and is hosted on Railway. We do not use Firebase, and we make no SOC 2 or other compliance claim on our own behalf; our hosting providers publish their own certifications and you should rely on theirs rather than on a claim from us. Traffic between the app and our server is encrypted with TLS.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            On your device, app data is kept in a local database encrypted with a key held in the iOS Keychain.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            If the Keychain is unavailable, the app falls back to unencrypted local storage so it can keep working. Where the app can tell that your existing database is encrypted but cannot read the key, it leaves that database untouched and runs the session in an empty unencrypted workspace instead of opening your data in the clear. The app&apos;s internal diagnostic log is always stored unencrypted on your device. That log is not only local: each entry also produces a Sentry breadcrumb carrying its category and the message our code wrote, though never the values in its payload, and errors it records are sent to Sentry as described under Usage Data.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Data held on our server is encrypted in transit but is not end-to-end encrypted, so we are able to read it. We access it only to run, debug and support the service, and we never sell it or share it with advertisers.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Data Retention and Deletion
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Your devotional content on our server is keyed to the random identifier for your install. Your content is copied there automatically as you use the app; there is no setting to turn that off and no step where you opt in. Gift ownership is also linked to the Apple identifier described above.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            To delete your devotional content and reset your install, open Profile and choose &quot;Reset app data&quot; under Data. The app first asks our server to delete your synced content under your current identifier, then erases app data from this device and gives your install a new identifier. Gift purchase and claim records are handled separately, as described below. That server request is best-effort: the app waits up to eight seconds for it and treats only a clear confirmation as done, and the wipe on your device goes ahead either way. If the deletion is not confirmed, the app tells you so and asks you to contact us from the Support section, because the new identifier means the app can no longer reach the old copy or retry the request itself. The same reset, including the server request, runs if you choose &quot;Reset and start fresh&quot; on the crash-recovery screen — but that screen does not show you the warning if the server request fails. In the rare recovery mode where the app cannot read your saved identifier, there is nothing for us to match, so the server request is skipped and only this device is wiped.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            To delete your gift account, open &quot;Gift a year of Unfold&quot; in Profile, sign in with the Apple account used for your gifts, and choose &quot;Delete gift account.&quot; This removes that Apple identifier from our gift records, deletes its gift sessions and purchase requests, and ends gift access you claimed. Gift codes you already shared remain usable, and gifts claimed by other people stay active. We keep transaction identifiers, gift status and dates, and code hashes to process refunds and prevent used codes from being redeemed again. These retained records no longer contain the deleted Apple identifier. Unfold does not hold an Apple access or refresh token to revoke; after deletion, the app explains how to remove Unfold from Sign in with Apple in your device settings.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Deleting one item is not the same as resetting your app data, and what happens depends on what you delete. A note you delete stays in Recently Deleted on your device for 30 days so you can restore it, and is then removed from the device; on our server, deleting a note or a companion conversation marks that record deleted rather than removing the row, so it stops being sent to your devices but stays in our database until your data is deleted in full. Deleting a devotional currently removes it from this device only: no deletion is sent to our server, and the devotional and its journal entries can come back the next time your device reconciles with the server. There is no way to delete an individual journal entry.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Deleting the writing behind a devotional does not unwrite the devotional. Text that was already generated from it stays as it is.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-4">
            We do not currently publish a fixed retention period for our server copy, our backups, or the bug reports you send us. If you want us to confirm what remains under an old identifier, or to delete it, email support@unfoldapp.co — and copy your Support ID from Settings before you reset, because the reset changes it. If the app tells you the Support ID is unavailable, restart Unfold and try again before resetting.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Your Rights
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            You have the right to:
          </p>

          <ul className="space-y-3 text-foreground/80 mb-4 list-disc pl-5">
            <li>Ask us what data we hold for your install, by emailing support@unfoldapp.co. Include your Support ID — Settings, then Support, then Copy Support ID — so we can find the right install, and copy it before you reset, because a reset changes it. There is no in-app report of everything we hold.</li>
            <li>Ask us to correct it. Inside the app you can change your first name, your companion&apos;s name, your reminders and your reading and display preferences, and you can edit or delete your notes and edit a voice check-in transcript. The free-text answers you gave during onboarding cannot be edited in the app afterwards, even though they are sent to our server and used in your devotional prompts — email us, or clear them with a full reset.</li>
            <li>Delete your devotional content with &quot;Reset app data&quot; under Data in Profile. It erases app data from this device and asks our server to delete your synced content. Gift records are handled separately. See Data Retention above for what happens if we cannot confirm the server deletion.</li>
            <li>Delete your gift account from &quot;Gift a year of Unfold&quot; in Profile. This ends your claimed gift access and removes your Apple identity from our gift records. It does not cancel an App Store subscription or remove gifts already given to other people.</li>
            <li>Delete individual items: a note, which stays recoverable for 30 days in Recently Deleted, a companion conversation, or a voice check-in. Deleting a devotional removes it from this device, but it can return when the device next reconciles with our server, and individual journal entries cannot be deleted.</li>
            <li>Export a devotional, together with its journal entries and check-ins, as a PDF from the Past Devotionals screen. PDF export needs an active subscription, covers one devotional at a time, and does not include standalone notes, companion conversations or voice check-ins.</li>
            <li>Turn off notifications at any time</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Third-Party Services
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Unfold uses the following third-party services:
          </p>

          <ul className="space-y-3 text-foreground/80 mb-4 list-disc pl-5">
            <li>Cloudflare and Railway - hosting and protection for api.unfoldapp.co, our own server</li>
            <li>AI model providers - the models that write devotionals, companion replies, reflections and the other generated text described under AI and Data Processing; reached only through our server, never directly from the app.</li>
            <li>RevenueCat - subscription and in-app purchase processing. It receives your random install identifier with an &quot;anon_&quot; prefix in front of it, together with your subscription state, so your entitlements survive a reinstall. It receives nothing while the app is running under a temporary recovery identifier.</li>
            <li>Sentry - device crash and error reporting from TestFlight and App Store builds, plus optional product feedback sent by our server. The device reports use the filtering described under Usage Data. Server-submitted feedback separately includes your note and Support ID.</li>
            <li>Expo - delivery of push notifications, and app-launch telemetry. To set up notifications your device sends Expo the raw push token iOS issued, your app&apos;s bundle id, our project id and a per-install identifier Expo stores on your device; Expo returns the token we store, so notification titles and bodies are relayed through Expo&apos;s servers, and Expo keeps re-registering the token on its own when iOS rotates it. Separately, a component of the app framework sends Expo one request each time the app launches, carrying a launch event name, the app version, the platform, the OS version and a random per-install identifier.</li>
            <li>A transcription provider - turns a voice check-in recording into text; requested through our server, which sends it the recording. The app names the provider on the recording screen before you send.</li>
            <li>Apple - App Store subscriptions and gift purchases, optional Sign in with Apple for gifts, and iOS speech recognition when you dictate instead of typing, which may send that audio to Apple</li>
            <li>bible-api.com - fetches individual verses you tap on; requested directly by your device, so it sees your IP address and the reference you looked up</li>
            <li>Google Fonts - the typeface used by the reading view and the note editor, loaded directly by your device each session, so Google sees your IP address and which font you are using. The text-highlighting library is now built into the app and is no longer fetched from anywhere.</li>
            <li>A text-to-speech provider - generates audio narration; requested through our server, which sends it the devotional text to be read aloud</li>
          </ul>

          <p className="text-foreground/80 leading-relaxed mt-4">
            We do not use Firebase. There is no advertising SDK, no attribution SDK and no advertising or attribution identifier in the app. Each of these services has its own privacy policy and security measures.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Children&apos;s Privacy
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            Unfold is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Changes to This Policy
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the effective date. Continued use of Unfold after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
            Contact Us
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>

          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@unfoldapp.co"
              className="text-primary hover:underline"
            >
              support@unfoldapp.co
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 The Creative Co. Marketing Firm LLC. All rights reserved.
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
