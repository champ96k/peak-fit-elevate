import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/peakfit/Navbar";
import logo from "@/assets/peakfit-logo.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PeakFit" },
      { name: "description", content: "How PeakFit collects, uses, and protects your fitness, health, and personal data." },
      { property: "og:title", content: "Privacy Policy — PeakFit" },
      { property: "og:description", content: "How PeakFit collects, uses, and protects your data." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 17, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-2">PeakFit ("we", "us", "our") provides an AI-powered fitness and wellness mobile app. This Privacy Policy explains what information we collect, how we use it, and the rights you have over your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information we collect</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li><b>Account data:</b> name, email, password (hashed), profile photo.</li>
              <li><b>Profile data:</b> age, gender, height, weight, training goal, experience level, dietary preferences.</li>
              <li><b>Fitness & health data:</b> workouts, sets, reps, calories, macros, water intake, sleep, steps, heart rate, weight history.</li>
              <li><b>Device & wearable data:</b> data synced from Apple Health, Google Health Connect, Apple Watch, Fitbit, Garmin, WHOOP and Wear OS devices, only after you grant permission.</li>
              <li><b>Usage data:</b> app interactions, crash logs, performance metrics to improve reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How we use your data</h2>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Provide and personalize workout plans, diet recommendations, and AI coaching.</li>
              <li>Track progress, streaks, and transformations across weeks and months.</li>
              <li>Sync data with the integrations you connect.</li>
              <li>Send service notifications and, with your consent, marketing updates.</li>
              <li>Detect abuse, prevent fraud, and improve the product.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Sharing</h2>
            <p className="mt-2">We do not sell your personal data. We share data only with trusted processors (hosting, analytics, crash reporting) who are bound by confidentiality and data-processing agreements, and only as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Apple Health & Health Connect</h2>
            <p className="mt-2">Health data accessed via Apple HealthKit or Google Health Connect is never used for advertising and is never shared with third parties. You can revoke access from your device settings at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Data retention</h2>
            <p className="mt-2">We keep your data while your account is active. You can request export or deletion at any time from in-app Settings → Account, or by emailing privacy@peakfit.app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Your rights</h2>
            <p className="mt-2">Subject to your jurisdiction (GDPR, CCPA, DPDP Act and others), you may access, correct, port, restrict, or delete your personal data. Contact privacy@peakfit.app to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Security</h2>
            <p className="mt-2">We use encryption in transit and at rest, role-based access controls, and routine security audits. No system is 100% secure; we encourage strong, unique passwords.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Children</h2>
            <p className="mt-2">PeakFit is not directed to children under 13 (or under 16 in the EEA). We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Changes</h2>
            <p className="mt-2">We may update this policy. Material changes will be notified in-app or via email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
            <p className="mt-2">PeakFit Labs · privacy@peakfit.app</p>
          </section>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
          <img src={logo} alt="PeakFit" className="h-7 w-auto opacity-80" />
        </div>
      </main>
    </div>
  );
}
