import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — PeakFit" },
      {
        name: "description",
        content: "The terms and conditions that govern your use of the PeakFit app and services.",
      },
      { property: "og:title", content: "Terms & Conditions — PeakFit" },
      { property: "og:description", content: "Terms governing use of the PeakFit app." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-slate-600">Last updated: May 18, 2026</p>

        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Agreement to terms</h2>
            <p className="mt-2">
              These Terms and Conditions ("Terms") are a legal agreement between you and PeakFit
              Global ("PeakFit", "we", "us", "our") for your access to and use of the PeakFit mobile
              application, website, and related services (collectively, the "Service"). By creating
              an account, downloading, installing, or using the Service, you agree to these Terms.
            </p>
            <p className="mt-2">If you do not agree to these Terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              2. Eligibility and account registration
            </h2>
            <p className="mt-2">
              You must be legally capable of entering into binding agreements under applicable law.
              If you are under the age required in your jurisdiction, you may use the Service only
              with valid parental or guardian consent.
            </p>
            <p className="mt-2">When creating an account, you agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>provide accurate and complete information,</li>
              <li>keep your login credentials secure and confidential,</li>
              <li>promptly update account details when information changes, and</li>
              <li>accept responsibility for activity performed through your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              3. Health, fitness, and medical disclaimer
            </h2>
            <p className="mt-2">
              PeakFit provides digital fitness, nutrition, and wellness tools for general
              educational and informational purposes. The Service does not provide professional
              medical advice, diagnosis, or treatment and is not a substitute for consultation with
              a qualified healthcare professional.
            </p>
            <p className="mt-2">
              You should consult your physician before starting or changing any exercise, nutrition,
              or supplement plan, especially if you have pre-existing medical conditions, injuries,
              pregnancy-related considerations, or other health concerns. You assume full
              responsibility for your training decisions and physical activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Service features and availability
            </h2>
            <p className="mt-2">
              We may add, modify, suspend, or discontinue features at any time to improve
              reliability, security, and product quality. We do not guarantee that all features will
              always be available in all regions, devices, or app versions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              5. Subscription, billing, and auto-renewal
            </h2>
            <p className="mt-2">
              PeakFit may offer free and paid plans. Paid plans are billed through the app
              marketplace used for purchase (for example, Apple App Store or Google Play) and may
              automatically renew unless cancelled before renewal.
            </p>
            <p className="mt-2">By purchasing a paid plan, you acknowledge that:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>pricing, billing cycles, and taxes are shown before checkout,</li>
              <li>payment processing is handled by the applicable app marketplace,</li>
              <li>subscription management and cancellation occur through that marketplace, and</li>
              <li>trial periods convert to paid plans if not cancelled in time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Refund policy</h2>
            <p className="mt-2">
              Refund eligibility is subject to the billing platform's policies and local
              consumer-protection law. Where required, PeakFit will reasonably assist with billing
              support requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              7. Acceptable use and prohibited conduct
            </h2>
            <p className="mt-2">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>violate any applicable law, regulation, or third-party right,</li>
              <li>reverse engineer, decompile, or interfere with the Service,</li>
              <li>upload malware, abusive content, or unlawful material,</li>
              <li>attempt unauthorized access to accounts, systems, or data,</li>
              <li>use bots or scraping methods that overload or extract the Service, or</li>
              <li>misuse support channels or impersonate another person.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. User content and license</h2>
            <p className="mt-2">
              You retain ownership of the content you submit, including workout logs, nutrition
              entries, notes, and profile data ("User Content"). You grant us a limited, worldwide,
              non-exclusive, royalty-free license to host, process, store, and display User Content
              solely to operate, secure, and improve the Service in accordance with our Privacy
              Policy.
            </p>
            <p className="mt-2">
              You represent that you have rights to the User Content you provide and that it does
              not infringe third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              9. Intellectual property rights
            </h2>
            <p className="mt-2">
              The Service, including software, interface design, branding, logos, text, graphics,
              and underlying technology, is owned by PeakFit Global and its licensors and is
              protected by applicable intellectual-property laws.
            </p>
            <p className="mt-2">
              We grant you a limited, revocable, non-transferable, non-exclusive license to use the
              Service for personal, non-commercial use in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              10. Third-party services and integrations
            </h2>
            <p className="mt-2">
              The Service may connect with third-party platforms and devices (for example, Apple
              Health, Health Connect, Fitbit, Garmin, WHOOP, and similar services). Your use of
              third-party services is governed by their own terms and privacy policies. PeakFit is
              not responsible for third-party platform availability or independent policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Suspension and termination</h2>
            <p className="mt-2">
              We may suspend or terminate access where reasonably necessary for security, legal
              compliance, payment failure, fraud prevention, or violation of these Terms. You may
              discontinue use at any time and request account deletion through in-app settings or
              support contact.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">12. Warranty disclaimer</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, the Service is provided on an "as is" and "as
              available" basis without warranties of any kind, whether express or implied, including
              implied warranties of merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">13. Limitation of liability</h2>
            <p className="mt-2">
              To the extent permitted by law, PeakFit Global and its affiliates, directors,
              employees, and partners are not liable for indirect, incidental, special,
              consequential, exemplary, or punitive damages, or loss of profits, data, goodwill, or
              business interruption, arising out of or related to your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">14. Indemnification</h2>
            <p className="mt-2">
              You agree to indemnify and hold harmless PeakFit Global from claims, liabilities,
              damages, losses, and expenses resulting from your misuse of the Service, your User
              Content, or your breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              15. Governing law and jurisdiction
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of India. Subject to mandatory consumer rights in
              your jurisdiction, disputes shall be subject to the competent courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">16. Changes to these Terms</h2>
            <p className="mt-2">
              We may update these Terms from time to time. Material updates may be communicated
              through in-app notices, website publication, or email. Continued use of the Service
              after the effective date of revised Terms constitutes acceptance of those updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">17. Contact information</h2>
            <p className="mt-2">
              PeakFit Global
              <br />
              Email: champ96klabs@gmail.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
