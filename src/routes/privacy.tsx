import { createFileRoute } from "@tanstack/react-router";

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
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-600">Last updated: May 18, 2026</p>

        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Scope and overview</h2>
            <p className="mt-2">
              This Privacy Policy explains how PeakFit Global ("PeakFit", "we", "us",
              "our") collects, uses, stores, shares, and protects personal information
              when you use PeakFit applications, websites, and related services
              (collectively, the "Service").
            </p>
            <p className="mt-2">
              By using the Service, you acknowledge this Privacy Policy and consent to the
              processing of personal information as described here, where consent is the
              appropriate legal basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Information we collect</h2>
            <p className="mt-2">Depending on your settings and use, we may collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <span className="font-semibold text-slate-900">Account information:</span>{" "}
                name, email address, hashed password, account identifiers.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Profile information:</span>{" "}
                age range, sex, height, weight, fitness goals, activity level, preferences.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Fitness and wellness data:</span>{" "}
                workouts, sets, reps, intensity, calories, macro intake, hydration, sleep,
                steps, heart-rate trends, weight history, and progress metrics.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Device and integration data:</span>{" "}
                data imported from connected platforms or wearables after you authorize access.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Technical and usage data:</span>{" "}
                IP address, device type, app version, crash diagnostics, performance logs,
                and feature usage telemetry.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Support communications:</span>{" "}
                messages and attachments sent to support for issue resolution.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. How we collect information</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>directly from you during signup, onboarding, and app usage,</li>
              <li>automatically through app analytics, logs, and diagnostics,</li>
              <li>from integrations you choose to connect, and</li>
              <li>from payment and app-store partners for subscription validation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Why we process your data</h2>
            <p className="mt-2">We process data to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>deliver the core Service and maintain your account,</li>
              <li>personalize training, nutrition, and recovery recommendations,</li>
              <li>sync data with connected providers that you authorize,</li>
              <li>monitor quality, security, fraud, and abuse,</li>
              <li>support billing, subscription management, and customer support,</li>
              <li>comply with legal obligations, and</li>
              <li>communicate updates, notices, and optional marketing (where permitted).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Legal bases for processing</h2>
            <p className="mt-2">
              Depending on your location, our legal bases may include performance of a
              contract (providing the Service), consent (for optional processing), legal
              obligations, and legitimate interests (such as platform security, fraud
              prevention, and service improvement).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Health data and sensitive information</h2>
            <p className="mt-2">
              Health and fitness-related data may be considered sensitive under applicable
              laws. We process this information only to provide requested product features,
              with safeguards aligned to legal requirements.
            </p>
            <p className="mt-2">
              Health data sourced from Apple HealthKit or Google Health Connect is not used
              for advertising profiling and is handled according to platform policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Sharing and disclosures</h2>
            <p className="mt-2">We do not sell your personal information. We may share data with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>service providers for hosting, analytics, messaging, and support,</li>
              <li>payment and subscription partners for transaction validation,</li>
              <li>integration partners you explicitly connect, and</li>
              <li>government or regulatory authorities when legally required.</li>
            </ul>
            <p className="mt-2">
              These parties are contractually required to process personal information only
              for authorized purposes and with appropriate security controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. International transfers</h2>
            <p className="mt-2">
              Your information may be processed in countries other than your own. Where
              required, we implement appropriate transfer safeguards under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Data retention</h2>
            <p className="mt-2">
              We retain personal information for as long as necessary to provide the
              Service, meet legal obligations, resolve disputes, and enforce agreements.
              Retention periods vary based on data type, legal requirements, and account status.
            </p>
            <p className="mt-2">
              When retention is no longer required, data is deleted or anonymized according
              to our internal policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Your privacy rights</h2>
            <p className="mt-2">
              Subject to local law, you may have rights to access, correct, export, erase,
              restrict, or object to processing of your personal information, and to
              withdraw consent where processing is based on consent.
            </p>
            <p className="mt-2">
              You may also request account deletion through app settings or by contacting
              us. We may need to verify identity before fulfilling privacy requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">11. Cookies and similar technologies</h2>
            <p className="mt-2">
              Our web properties may use cookies and similar technologies for login,
              security, preferences, analytics, and performance optimization. Browser
              controls may allow you to manage cookie preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">12. Security safeguards</h2>
            <p className="mt-2">
              We maintain technical and organizational safeguards designed to protect data,
              including encryption in transit, controlled access, secure infrastructure
              practices, and periodic security reviews.
            </p>
            <p className="mt-2">
              No internet transmission or storage system can be guaranteed 100% secure.
              Users should protect account credentials and report suspected misuse promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">13. Children's privacy</h2>
            <p className="mt-2">
              The Service is not intended for children below the minimum age required by
              applicable law without valid guardian authorization. If we become aware that
              personal information was collected in violation of this requirement, we will
              take appropriate steps, which may include deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">14. Policy updates</h2>
            <p className="mt-2">
              We may revise this Privacy Policy periodically. Updated versions become
              effective upon publication unless otherwise stated. Material changes may be
              communicated in-app, by email, or through website notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">15. Contact and data requests</h2>
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
