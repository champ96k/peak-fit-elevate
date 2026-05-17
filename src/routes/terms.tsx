import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/peakfit/Navbar";
import logo from "@/assets/peakfit-logo.png";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — PeakFit" },
      { name: "description", content: "The terms and conditions that govern your use of the PeakFit app and services." },
      { property: "og:title", content: "Terms & Conditions — PeakFit" },
      { property: "og:description", content: "Terms governing use of the PeakFit app." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: May 17, 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of terms</h2>
            <p className="mt-2">By downloading, installing, or using PeakFit, you agree to be bound by these Terms. If you do not agree, do not use the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
            <p className="mt-2">You must be at least 13 years old (16 in the EEA) and able to form a binding contract under applicable law to use PeakFit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Health disclaimer</h2>
            <p className="mt-2">PeakFit provides fitness and nutrition information for general wellness purposes. It is not medical advice and is not a substitute for consultation with a qualified physician. Consult a doctor before beginning any exercise or diet program, especially if you have an existing medical condition or are pregnant.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Accounts</h2>
            <p className="mt-2">You are responsible for keeping your credentials secure and for all activity under your account. Notify us promptly of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Subscriptions & billing</h2>
            <p className="mt-2">Pro and Elite subscriptions auto-renew at the end of each billing cycle unless canceled at least 24 hours before renewal. Manage or cancel via your Apple App Store or Google Play account. Free trials convert to paid subscriptions unless canceled before they end.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Refunds</h2>
            <p className="mt-2">Refunds are handled in accordance with the rules of the App Store or Google Play through which the purchase was made.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Acceptable use</h2>
            <p className="mt-2">You agree not to reverse engineer, scrape, abuse, or use PeakFit to violate any law or third-party rights, and not to upload harmful, unlawful, or infringing content.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Intellectual property</h2>
            <p className="mt-2">PeakFit, the PeakFit logo, the app, content, and software are owned by PeakFit Labs and protected by intellectual-property laws. You receive a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">9. User content</h2>
            <p className="mt-2">You retain ownership of content you create (workout logs, photos, notes). You grant PeakFit a worldwide, royalty-free license to store and process this content as required to operate the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Termination</h2>
            <p className="mt-2">We may suspend or terminate your access for breach of these Terms. You may stop using PeakFit at any time and delete your account from in-app Settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Disclaimer of warranties</h2>
            <p className="mt-2">PeakFit is provided "as is" and "as available" without warranties of any kind, express or implied, to the maximum extent permitted by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">12. Limitation of liability</h2>
            <p className="mt-2">To the maximum extent permitted by law, PeakFit Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">13. Governing law</h2>
            <p className="mt-2">These Terms are governed by the laws of India, without regard to conflict-of-laws principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">14. Changes to terms</h2>
            <p className="mt-2">We may revise these Terms; we will notify you of material changes via the app or email.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">15. Contact</h2>
            <p className="mt-2">PeakFit Labs · legal@peakfit.app</p>
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
