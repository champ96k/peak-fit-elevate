import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Activity, Apple, Award, Brain, ChevronDown, Droplet, Dumbbell, Flame,
  Footprints, Heart, LineChart, Moon, Salad, Star, Target, Trophy, Watch,
  Zap, Check, Play,
} from "lucide-react";
import { Navbar } from "@/components/peakfit/Navbar";
import { Counter } from "@/components/peakfit/Counter";
import { Particles } from "@/components/peakfit/Particles";
import { Reveal } from "@/components/peakfit/Reveal";
import logo from "@/assets/peakfit-logo.png";
import heroAthlete from "@/assets/hero-athlete.jpg";
import screenHome from "@/assets/screen-home.png";
import screenDiet from "@/assets/screen-diet.png";
import screenProgress from "@/assets/screen-progress.png";
import screenWorkouts from "@/assets/screen-workouts.png";
import screenExercise from "@/assets/screen-exercise.png";
import screenLibrary from "@/assets/screen-library.png";
import screenShapeWeek from "@/assets/screen-shape-week.png";
import screen8Week from "@/assets/screen-8week.png";
import screenProfile from "@/assets/screen-profile.png";
import test1 from "@/assets/testimonial-1.jpg";
import test2 from "@/assets/testimonial-2.jpg";
import test3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeakFit — AI-Powered Fitness & Wellness App" },
      { name: "description", content: "Transform your body with PeakFit's AI workout coach, smart diet tracker, health sync, and personalized plans. Download now." },
      { property: "og:title", content: "PeakFit — Transform Your Body. Upgrade Your Life." },
      { property: "og:description", content: "AI-powered fitness tracking, nutrition insights, health sync and personalized plans." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const features = [
  { icon: Brain, title: "AI Workout Coach", desc: "Adaptive training plans that learn from your performance." },
  { icon: Salad, title: "Smart Diet Tracker", desc: "Snap, log, and analyze meals with computer vision." },
  { icon: Flame, title: "Calories & Macros", desc: "Real-time macro splits dialed to your goal." },
  { icon: Activity, title: "Health Sync", desc: "Apple Health & Health Connect, seamless." },
  { icon: Watch, title: "Wearable Support", desc: "Apple Watch, Garmin, Fitbit, WHOOP." },
  { icon: Moon, title: "Sleep Monitoring", desc: "Recovery scores tied to your next session." },
  { icon: LineChart, title: "Progress Analytics", desc: "Beautiful weekly insights, zero spreadsheets." },
  { icon: Target, title: "Personalized Plans", desc: "Built around your body, schedule, and gear." },
  { icon: Zap, title: "Daily Insights", desc: "Bite-sized coaching tailored to your day." },
  { icon: Droplet, title: "Water Tracking", desc: "Hydration goals with smart nudges." },
  { icon: Footprints, title: "Step Counter", desc: "Background tracking, all-day accurate." },
  { icon: Heart, title: "Heart Rate", desc: "Zone training and continuous monitoring." },
  { icon: Trophy, title: "Goal Tracking", desc: "Streaks, milestones, achievements." },
  { icon: Award, title: "Challenges", desc: "Compete with friends or yourself." },
  { icon: Dumbbell, title: "Gym & Home", desc: "Switch modes, never miss a session." },
  { icon: Apple, title: "Workout History", desc: "Every rep, every set, forever." },
];

const integrations = ["Apple Health", "Health Connect", "Fitbit", "Garmin", "WHOOP", "Wear OS"];

const testimonials = [
  { name: "Aarav Mehta", role: "Lost 18kg in 6 months", img: test2, quote: "PeakFit's AI coach pushed me harder than any trainer. The transformation analytics kept me obsessed." , rating: 5 },
  { name: "Sara Kapoor", role: "Marathon runner", img: test3, quote: "Sleep + recovery sync changed everything. I PR'd by 9 minutes in 3 months.", rating: 5 },
  { name: "Maya Iyer", role: "Yoga & strength", img: test1, quote: "Macro tracking is genuinely effortless. I finally hit my protein every single day.", rating: 5 },
];

const faqs = [
  { q: "Is PeakFit beginner friendly?", a: "Absolutely. Our AI calibrates from your first session and ramps you up safely." },
  { q: "Does it support smart watches?", a: "Yes — Apple Watch, Wear OS, Garmin, Fitbit, and WHOOP are all natively supported." },
  { q: "Can I sync Apple Health?", a: "One-tap sync with Apple Health and Google Health Connect, both ways." },
  { q: "Does it work offline?", a: "Workouts, logs, and timers work fully offline and sync once you're back online." },
  { q: "Is there a free version?", a: "Yes — Free forever with core tracking. Upgrade anytime for AI coaching and analytics." },
];

function Landing() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const price = (m: number) => yearly ? Math.round(m * 10) : m;
  const cadence = yearly ? "/year" : "/month";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                AI fitness, built for 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
              >
                Transform Your Body.<br />
                <span className="text-gradient">Upgrade Your Life.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg text-muted-foreground"
              >
                PeakFit is the AI-powered fitness ecosystem that tracks every workout, meal,
                heartbeat and hour of sleep — then coaches you to your strongest self.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#download"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
                >
                  <Apple className="h-4 w-4" />
                  Download for iOS
                </a>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-105"
                >
                  <Play className="h-4 w-4 fill-primary-foreground" />
                  Download for Android
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
              >
                {[
                  { n: 100, s: "K+", l: "Workouts tracked" },
                  { n: 50, s: "K+", l: "Active users" },
                  { n: 10, s: "M+", l: "Calories tracked" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold md:text-3xl">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-glow opacity-70 blur-3xl" />
              <div className="relative">
                <div className="absolute -left-6 top-10 z-10 hidden rounded-2xl glass px-4 py-3 md:block animate-[float_6s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Heart Rate</div>
                      <div className="text-sm font-semibold">142 <span className="text-xs text-muted-foreground">bpm</span></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-16 z-10 hidden rounded-2xl glass px-4 py-3 md:block animate-[float_7s_ease-in-out_infinite_0.5s]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                      <Flame className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Calories</div>
                      <div className="text-sm font-semibold">487 <span className="text-xs text-muted-foreground">kcal</span></div>
                    </div>
                  </div>
                </div>
                <img
                  src={heroAthlete}
                  alt="Athlete training with PeakFit"
                  width={1536}
                  height={1536}
                  className="relative w-full rounded-3xl border border-border object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Trust strip */}
          <div className="mt-24">
            <Reveal>
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9</span> from 28,000+ reviews
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
                  {["TechCrunch", "Forbes", "Men's Health", "Wired", "Vogue", "GQ"].map((b) => (
                    <span key={b} className="text-sm font-semibold tracking-widest text-muted-foreground">{b.toUpperCase()}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">Features</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Everything you need.<br /><span className="text-gradient">Nothing you don't.</span></h2>
            <p className="mt-4 text-muted-foreground">Sixteen tools, one ecosystem. Built to replace your entire fitness stack.</p>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                  <div className="relative">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section id="app" className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-gradient-glow opacity-40 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">The app</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Designed like an <span className="text-gradient">athlete</span>.</h2>
            <p className="mt-4 text-muted-foreground">Every screen built for clarity, speed, and one-handed flow.</p>
          </Reveal>

          <div className="mt-16 grid items-end gap-8 md:grid-cols-3">
            {[
              { src: screenHome, label: "Home — Daily snapshot" },
              { src: screenDiet, label: "Diet — Macros & meals" },
              { src: screenProgress, label: "Progress — Trends & weight" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative ${i === 1 ? "md:-mt-12" : ""}`}>
                  <div className="absolute -inset-4 bg-gradient-glow opacity-50 blur-2xl" />
                  <img
                    src={s.src}
                    alt={s.label}
                    loading="lazy"
                    width={886}
                    height={1918}
                    className="relative w-full rounded-[2rem] border border-border object-cover shadow-2xl"
                  />
                  <div className="mt-4 text-center text-xs text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Promo video placeholder */}
          <Reveal>
            <div className="mt-20 group relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-border glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <img src={heroAthlete} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary glow-primary transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-primary-foreground text-primary-foreground" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-sm font-medium text-foreground/80">Watch PeakFit in action — 90s</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLANS — workout tutorial, weekly plan, 8-week */}
      <section id="plans" className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 top-1/3 -z-10 h-96 bg-gradient-glow opacity-30 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">Plans</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tutorials, weekly splits, <span className="text-gradient">8-week programs</span>.</h2>
            <p className="mt-4 text-muted-foreground">Step-by-step exercise guidance, a calendar you actually follow, and a personalized 8-week build that adapts to your body.</p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                t: "Workout Tutorials",
                d: "Form cues, target reps, sets, and rest timers — guided through every move with built-in coaching.",
                img: screenExercise,
                tag: "Exercise coach",
              },
              {
                t: "Weekly Plan",
                d: "Push, pull, legs, rest — your week mapped out. Tap a day and start training in two taps.",
                img: screenWorkouts,
                tag: "7-day split",
              },
              {
                t: "8-Week Programs",
                d: "Goal-based progression — gain muscle, cut fat, build strength. Daily targets, splits, and recovery built in.",
                img: screen8Week,
                tag: "Personalized",
              },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">{p.tag}</div>
                    </div>
                    <div className="mt-6 mx-auto w-full max-w-[260px]">
                      <img src={p.img} alt={p.t} loading="lazy" className="w-full rounded-[1.75rem] border border-border shadow-xl" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Secondary feature row */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Exercise library</div>
                    <h3 className="mt-4 text-2xl font-semibold">Browse by muscle group</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Chest, back, legs, arms — search any lift, see proper form, and add it to today's session.</p>
                  </div>
                  <img src={screenLibrary} alt="Exercise library" loading="lazy" className="mx-auto w-full max-w-[240px] rounded-[1.75rem] border border-border shadow-xl" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Shape your week</div>
                    <h3 className="mt-4 text-2xl font-semibold">Tune frequency & sessions</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Pick 2–6 training days, set session length, and PeakFit rebuilds your plan around your life.</p>
                  </div>
                  <img src={screenShapeWeek} alt="Shape your week" loading="lazy" className="mx-auto w-full max-w-[240px] rounded-[1.75rem] border border-border shadow-xl" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">How it works</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Three steps. <span className="text-gradient">Real change.</span></h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Track your workouts", d: "Log sets, reps, and runs in seconds — or let your wearable do it." },
              { n: "02", t: "Monitor nutrition & health", d: "Snap meals, sync sleep, water, heart rate. We do the math." },
              { n: "03", t: "Achieve transformation", d: "Follow AI plans tuned to you. Watch progress compound weekly." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8">
                  <div className="text-6xl font-bold text-gradient opacity-80">{s.n}</div>
                  <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">Integrations</div>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">One profile. <span className="text-gradient">Every device.</span></h2>
              <p className="mt-4 text-muted-foreground">PeakFit talks to the platforms and wearables you already own — no manual logging, no broken data.</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {integrations.map((name) => (
                  <div key={name} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary glow-primary" />
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-glow opacity-50 blur-3xl" />
                <div className="relative rounded-3xl border border-border glass p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">This week</div>
                      <div className="mt-1 text-3xl font-bold">12,847 <span className="text-base font-normal text-muted-foreground">kcal</span></div>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      <Zap className="h-3 w-3" /> +18%
                    </div>
                  </div>

                  <div className="mt-8 flex h-40 items-end gap-2">
                    {[40, 65, 50, 80, 45, 92, 70].map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-accent to-primary"
                        />
                        <div className="text-[10px] text-muted-foreground">{["M","T","W","T","F","S","S"][i]}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {[
                      { l: "Weight", v: "−4.2 kg" },
                      { l: "Muscle", v: "+2.1 kg" },
                      { l: "Sleep", v: "7h 48m" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-xs text-muted-foreground">{s.l}</div>
                        <div className="mt-1 text-lg font-semibold">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">Results</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Real people. <span className="text-gradient">Real transformations.</span></h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card p-8">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-relaxed">"{t.quote}"</p>
                  <div className="mt-8 flex items-center gap-3">
                    <img src={t.img} alt={t.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full border border-border object-cover" />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">Pricing</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Start free. <span className="text-gradient">Go elite.</span></h2>

            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-1">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${!yearly ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
              >Monthly</button>
              <button
                onClick={() => setYearly(true)}
                className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${yearly ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
              >Yearly <span className="ml-1 text-xs opacity-80">−17%</span></button>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Free", price: 0, desc: "Get moving today.", features: ["Basic workout tracking", "Basic calorie tracking", "Limited analytics", "Manual logging"], cta: "Get started" },
              { name: "Pro", price: 499, desc: "For consistent results.", features: ["Everything in Free", "AI workout coach", "Unlimited analytics", "Health integrations", "Advanced nutrition tracking", "Personalized recommendations"], cta: "Start Pro trial", popular: true },
              { name: "Elite", price: 999, desc: "Train like a pro.", features: ["Everything in Pro", "Advanced AI coaching", "Premium transformation analytics", "Early access features", "Priority support", "1:1 monthly consult"], cta: "Go Elite" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`relative h-full overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-1 ${p.popular ? "border-primary/50 bg-card glow-primary" : "border-border bg-card"}`}>
                  {p.popular && (
                    <div className="absolute right-6 top-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</div>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold">₹{price(p.price)}</span>
                    {p.price > 0 && <span className="text-sm text-muted-foreground">{cadence}</span>}
                  </div>
                  <a
                    href="#download"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${p.popular ? "bg-gradient-primary text-primary-foreground" : "border border-border bg-secondary/60 text-foreground hover:bg-secondary"}`}
                  >{p.cta}</a>
                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">FAQ</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Frequently <span className="text-gradient">asked</span>.</h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                  Your strongest version<br /><span className="text-gradient">starts today.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                  Join 50,000+ athletes who train smarter with PeakFit. 7-day free trial. Cancel anytime.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-6 py-3 text-background transition-transform hover:scale-105">
                    <Apple className="h-7 w-7" />
                    <div className="text-left">
                      <div className="text-[10px] opacity-70">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-6 py-3 text-background transition-transform hover:scale-105">
                    <Play className="h-7 w-7 fill-background" />
                    <div className="text-left">
                      <div className="text-[10px] opacity-70">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <img src={logo} alt="PeakFit" className="h-9 w-auto" />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                The AI fitness ecosystem for athletes who refuse to plateau.
              </p>
            </div>

            {([
              { t: "Product", links: [{ l: "Features", h: "/#features" }, { l: "Plans", h: "/#plans" }, { l: "Pricing", h: "/#pricing" }, { l: "FAQ", h: "/#faq" }] },
              { t: "Download", links: [{ l: "iOS App Store", h: "#download" }, { l: "Google Play", h: "#download" }, { l: "What's new", h: "/#app" }] },
              { t: "Legal", links: [{ l: "Privacy Policy", h: "/privacy", internal: true }, { l: "Terms & Conditions", h: "/terms", internal: true }] },
            ] as const).map((col) => (
              <div key={col.t}>
                <div className="text-sm font-semibold">{col.t}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((item) => (
                    <li key={item.l}>
                      {"internal" in item && item.internal ? (
                        <Link to={item.h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.l}</Link>
                      ) : (
                        <a href={item.h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.l}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <div className="text-xs text-muted-foreground">© 2026 PeakFit Labs. All rights reserved.</div>
            <div className="flex gap-3">
              {["X", "IG", "YT", "TT"].map((s) => (
                <a key={s} href="#" aria-label={s} className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
