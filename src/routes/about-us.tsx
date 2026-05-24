import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — PeakFit" },
      {
        name: "description",
        content:
          "Learn about PeakFit, our mission, and how we help people train, eat, recover, and progress with confidence.",
      },
      { property: "og:title", content: "About Us — PeakFit" },
      {
        property: "og:description",
        content: "Learn about PeakFit and our mission to make smarter fitness guidance accessible.",
      },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">About Us</h1>
        <p className="mt-2 text-sm text-slate-600">PeakFit Global by Champ96k Labs</p>

        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Who we are</h2>
            <p className="mt-2">
              PeakFit is a fitness and wellness platform created to help people train with clarity,
              build consistent habits, and understand their progress in one simple experience. We
              combine workout tracking, nutrition support, health insights, and personalized
              guidance so users can make better decisions every day.
            </p>
            <p className="mt-2">
              PeakFit Global is built by Champ96k Labs with a focus on practical technology, clean
              design, and tools that support real-world fitness journeys.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Our mission</h2>
            <p className="mt-2">
              Our mission is to make smart fitness guidance accessible to everyone, from beginners
              building their first routine to athletes working toward their next performance goal.
              We believe progress should be easier to understand, easier to track, and easier to
              sustain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. What PeakFit helps you do</h2>
            <p className="mt-2">
              PeakFit is designed to support the full fitness journey, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>planning and tracking workouts for gym, home, and outdoor training,</li>
              <li>monitoring calories, macros, hydration, steps, sleep, and recovery,</li>
              <li>syncing health data from supported devices and platforms,</li>
              <li>reviewing progress trends through simple visual insights, and</li>
              <li>staying consistent with goals, reminders, challenges, and achievements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Our approach</h2>
            <p className="mt-2">
              We build PeakFit around personalization, consistency, and accountability. Fitness
              advice works best when it fits your body, schedule, goals, and preferences. Our tools
              are created to help users take action, learn from results, and adjust over time.
            </p>
            <p className="mt-2">
              PeakFit is not a replacement for professional medical advice. It is a digital fitness
              companion that helps organize training and wellness information so users can make
              informed choices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Built for everyday progress</h2>
            <p className="mt-2">
              PeakFit is for people who want to move better, eat smarter, recover well, and stay
              motivated. Whether your goal is fat loss, muscle gain, endurance, mobility, or general
              health, the platform is built to help you see what is working and keep improving.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Privacy and trust</h2>
            <p className="mt-2">
              Fitness and wellness data can be personal. We aim to handle user data responsibly and
              transparently, with privacy and security considered throughout the product. More
              details are available in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Contact information</h2>
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
