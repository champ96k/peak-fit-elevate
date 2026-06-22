import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Activity,
  Apple,
  Award,
  Bell,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Droplet,
  Dumbbell,
  Flame,
  Footprints,
  Heart,
  LineChart,
  Moon,
  Play,
  QrCode,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Watch,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/peakfit/Navbar";
import { Counter } from "@/components/peakfit/Counter";
import { Particles } from "@/components/peakfit/Particles";
import { Reveal } from "@/components/peakfit/Reveal";
import logo from "@/assets/peakfit-logo.png";
import qrCodeImage from "@/assets/qr-code.png";
import appHomeDashboard from "@/assets/app-home-dashboard.png";
import appWorkoutDay from "@/assets/app-workout-day.png";
import appWorkoutBuilder from "@/assets/app-workout-builder.png";
import appDietDashboard from "@/assets/app-diet-dashboard.png";
import appBreakfastDetail from "@/assets/app-breakfast-detail.png";
import appNutritionFacts from "@/assets/app-nutrition-facts.png";
import appProgressOverview from "@/assets/app-progress-overview.png";
import appStepStats from "@/assets/app-step-stats.png";
import appSleepOverview from "@/assets/app-sleep-overview.png";
import appSleepDetail from "@/assets/app-sleep-detail.png";
import appBodyProgress from "@/assets/app-body-progress.png";
import appNutritionProgress from "@/assets/app-nutrition-progress.png";
import appBodySummary from "@/assets/app-body-summary.png";
import appAppleHealth from "@/assets/app-apple-health.png";
import appNotifications from "@/assets/app-notifications.png";
import appExerciseLibrary from "@/assets/app-exercise-library.png";
import appShapeWeek from "@/assets/app-shape-week.png";
import appEightWeekPlan from "@/assets/app-eight-week-plan.png";
import appOnboardingWelcome from "@/assets/app-onboarding-welcome.png";
import appOnboardingGoals from "@/assets/app-onboarding-goals.png";
import appOnboardingDiet from "@/assets/app-onboarding-diet.png";
import appOnboardingBodyType from "@/assets/app-onboarding-body-type.png";
import appOnboardingGender from "@/assets/app-onboarding-gender.png";
import appOnboardingWeight from "@/assets/app-onboarding-weight.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.champ96k.peakfit";
const APP_STORE_URL = "https://apps.apple.com/us/app/peakfit-fitness-tracker/id6777769375";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeakFit - AI-Powered Fitness & Wellness App" },
      {
        name: "description",
        content:
          "Explore PeakFit app screens for workouts, nutrition, recovery, health sync, onboarding, and progress tracking.",
      },
      { property: "og:title", content: "PeakFit - Train, eat, recover, and progress smarter." },
      {
        property: "og:description",
        content:
          "A complete app tour of PeakFit's AI fitness, nutrition, recovery, and progress tools.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

type ScreenFeature = {
  src: string;
  title: string;
  description: string;
};

type FeatureGroup = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  screens: ScreenFeature[];
};

const topFeatures: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  {
    icon: Brain,
    title: "AI Coach",
    desc: "Daily guidance based on your plan, calories, activity, and recovery.",
  },
  {
    icon: Dumbbell,
    title: "Workout Plans",
    desc: "Daily workouts, custom splits, exercise library, and 8-week programs.",
  },
  {
    icon: Salad,
    title: "Smart Diet",
    desc: "Calories, macros, meal details, and nutrition facts in one clean flow.",
  },
  {
    icon: LineChart,
    title: "Progress Analytics",
    desc: "Weight, burn, streaks, steps, sleep, and nutrition trends made simple.",
  },
  {
    icon: Watch,
    title: "Health Sync",
    desc: "Connect Apple Health and supported wearables when you want deeper tracking.",
  },
  {
    icon: Bell,
    title: "Reminders",
    desc: "Control workout, diet, hydration, sleep, and progress nudges.",
  },
  {
    icon: Target,
    title: "Personal Goals",
    desc: "Onboarding shapes the app around your goal, body, diet, and schedule.",
  },
  {
    icon: Trophy,
    title: "Consistency",
    desc: "Streaks, achievements, and simple feedback loops keep you moving.",
  },
];

const showcaseGroups: FeatureGroup[] = [
  {
    eyebrow: "Home and AI coach",
    title: "Your plan, coach note, and daily metrics in one clean home screen.",
    description:
      "The Home screen opens with today's workout, live nutrition targets, AI insight, and a coach note so the next action is obvious.",
    icon: Brain,
    screens: [
      {
        src: appHomeDashboard,
        title: "Home Dashboard",
        description: "Morning greeting, today's workout, AI insight, coach note, and key metrics.",
      },
    ],
  },
  {
    eyebrow: "Workouts and plans",
    title: "Workout planning that moves from today's session to an 8-week goal.",
    description:
      "PeakFit presents the training flow as a guided path: build the split, browse exercises, shape the week, and follow the program.",
    icon: Dumbbell,
    screens: [
      {
        src: appWorkoutDay,
        title: "Workout Day",
        description: "A focused daily workout list with warm-ups, sets, and session structure.",
      },
      {
        src: appWorkoutBuilder,
        title: "Plan Builder",
        description: "Users choose target muscles and shape sessions around real training goals.",
      },
      {
        src: appExerciseLibrary,
        title: "Exercise Library",
        description: "Browse exercises by muscle group and quickly add movements to a workout.",
      },
      {
        src: appShapeWeek,
        title: "Shape Your Week",
        description: "Pick training days, session length, and the weekly split that fits life.",
      },
      {
        src: appEightWeekPlan,
        title: "8-Week Plan",
        description:
          "A full program summary with progression, week count, and goal-based direction.",
      },
    ],
  },
  {
    eyebrow: "Diet and nutrition",
    title: "Calories, macros, and meal details that are easy to act on.",
    description:
      "Nutrition screens keep the big numbers visible first, then let users drill into meals and nutrition facts only when they need more detail.",
    icon: Salad,
    screens: [
      {
        src: appDietDashboard,
        title: "Diet Dashboard",
        description:
          "Remaining calories, eaten calories, burned calories, macros, and meals logged.",
      },
      {
        src: appBreakfastDetail,
        title: "Meal Detail",
        description: "Open a meal to review calories, macros, ingredients, and food-level context.",
      },
      {
        src: appNutritionFacts,
        title: "Nutrition Facts",
        description: "Detailed nutrition view for users who want deeper meal information.",
      },
      {
        src: appNutritionProgress,
        title: "Nutrition Progress",
        description: "Average calories and weekly nutrition trends help users stay consistent.",
      },
    ],
  },
  {
    eyebrow: "Progress and recovery",
    title: "Progress tracking across body, movement, sleep, and recovery.",
    description:
      "Progress is shown as connected habits instead of separate charts, making streaks, steps, sleep, calories, and body trends easier to understand.",
    icon: LineChart,
    screens: [
      {
        src: appProgressOverview,
        title: "Progress Overview",
        description: "Streaks and health cards summarize the user's fitness direction.",
      },
      {
        src: appStepStats,
        title: "Step Stats",
        description: "Weekly step charts give users an easy view of daily movement.",
      },
      {
        src: appSleepOverview,
        title: "Sleep Overview",
        description: "Sleep summary cards help users understand recovery patterns.",
      },
      {
        src: appSleepDetail,
        title: "Sleep Detail",
        description: "Sleep stages and highlights add context to recovery quality.",
      },
      {
        src: appBodyProgress,
        title: "Body Progress",
        description: "Burn, calories, and weight trends show how body goals are moving.",
      },
      {
        src: appBodySummary,
        title: "Body Summary",
        description: "A quick body and progress summary with social motivation built in.",
      },
    ],
  },
  {
    eyebrow: "Health sync and reminders",
    title: "Bring health data in and keep daily habits on track.",
    description:
      "The app gives users a simple connected-health setup and clear reminder controls for workouts, diet, hydration, sleep, and progress.",
    icon: ShieldCheck,
    screens: [
      {
        src: appAppleHealth,
        title: "Apple Health Sync",
        description: "A clean connected state for importing supported health signals.",
      },
      {
        src: appNotifications,
        title: "Notification Settings",
        description:
          "Granular toggles for reminders across workouts, meals, hydration, sleep, and progress.",
      },
    ],
  },
  {
    eyebrow: "Personal onboarding",
    title: "Personal onboarding that builds the plan around the user.",
    description:
      "PeakFit captures goals, diet style, body context, gender, and weight so the first plan feels tailored from the beginning.",
    icon: Sparkles,
    screens: [
      {
        src: appOnboardingWelcome,
        title: "Welcome Flow",
        description: "Introduces PeakFit as a plan-based coach for workouts and nutrition.",
      },
      {
        src: appOnboardingGoals,
        title: "Goal Selection",
        description: "Users choose the transformation outcome they want to prioritize.",
      },
      {
        src: appOnboardingDiet,
        title: "Diet Preference",
        description: "Nutrition guidance adapts around the eating style users follow.",
      },
      {
        src: appOnboardingBodyType,
        title: "Body Type",
        description: "Body context helps personalize the starting point and coaching tone.",
      },
      {
        src: appOnboardingGender,
        title: "Gender Selection",
        description: "Personal details support more relevant recommendations and calculations.",
      },
      {
        src: appOnboardingWeight,
        title: "Weight Entry",
        description: "The baseline weight starts progress charts and plan calibration.",
      },
    ],
  },
];

const integrations = ["Apple Health", "Health Connect", "Apple Watch", "Garmin", "Fitbit", "WHOOP"];

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Lost 18kg in 6 months",
    quote: "The daily coach note makes the app feel personal. I always know what to focus on next.",
  },
  {
    name: "Sara Kapoor",
    role: "Marathon runner",
    quote:
      "Sleep, steps, workouts, and nutrition finally sit in one place instead of five different apps.",
  },
  {
    name: "Maya Iyer",
    role: "Strength and yoga",
    quote:
      "The nutrition screens are simple enough to use daily, but detailed when I want to review macros.",
  },
];

const faqs = [
  {
    q: "Is PeakFit beginner friendly?",
    a: "Yes. Onboarding gathers your goals, schedule, diet, and body context so the plan starts from your level.",
  },
  {
    q: "Does the app include real workout plans?",
    a: "Yes. PeakFit includes daily workouts, plan creation, exercise browsing, weekly planning, and 8-week programs.",
  },
  {
    q: "Can I track diet and macros?",
    a: "Yes. The diet dashboard covers calories, macros, meals, nutrition details, and weekly nutrition progress.",
  },
  {
    q: "Does PeakFit sync health data?",
    a: "The app includes a connected Apple Health flow and is designed for supported health and wearable integrations.",
  },
  {
    q: "How do I download PeakFit?",
    a: "Scan the QR code on the website, or tap the App Store / Google Play buttons to download PeakFit directly to your phone.",
  },
];

type BillingCycle = "monthly" | "yearly" | "lifetime";
type CurrencyRegion = "IN" | "US";

const pricingByRegion: Record<
  CurrencyRegion,
  {
    symbol: string;
    yearlySavings: string;
    prices: Record<BillingCycle, number>;
  }
> = {
  IN: {
    symbol: "₹",
    yearlySavings: "save 41%",
    prices: { monthly: 99, yearly: 699, lifetime: 1999 },
  },
  US: {
    symbol: "$",
    yearlySavings: "save 42%",
    prices: { monthly: 4.99, yearly: 34.99, lifetime: 79 },
  },
};

const billingLabels: Array<{ id: BillingCycle; label: string }> = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
  { id: "lifetime", label: "Lifetime" },
];

function formatPlanPrice(value: number, symbol: string) {
  return `${symbol}${Number.isInteger(value) ? value.toLocaleString("en-US") : value.toFixed(2)}`;
}

function formatOfferCountdown(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return `${days}d ${hours}h ${minutes}m`;
}

function Landing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [currencyRegion, setCurrencyRegion] = useState<CurrencyRegion>("IN");
  const [offerSecondsLeft, setOfferSecondsLeft] = useState(3 * 24 * 60 * 60);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const languages = typeof navigator !== "undefined" ? navigator.languages : [];
    const language = typeof navigator !== "undefined" ? navigator.language : "";
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const region = Intl.DateTimeFormat().resolvedOptions().locale.split("-").pop();
    const localeSuggestsIndia = [...languages, language].some((locale) =>
      /(^|\b)(en-IN|hi|mr|ta|te|kn|ml|bn|gu|pa)(\b|-|$)/i.test(locale),
    );

    setCurrencyRegion(
      localeSuggestsIndia ||
        timeZone === "Asia/Kolkata" ||
        timeZone === "Asia/Calcutta" ||
        region === "IN"
        ? "IN"
        : "US",
    );
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setOfferSecondsLeft((current) => Math.max(current - 60, 0));
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currency = pricingByRegion[currencyRegion];
  const cadence = {
    monthly: "/mo",
    yearly: "/yr",
    lifetime: "one-time",
  }[billingCycle];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-45" />
        <Particles />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              App-first AI fitness experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl"
            >
              Train with a plan that is built for <span className="text-gradient">you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground"
            >
              PeakFit brings workouts, diet, sleep, steps, health sync, and AI coaching into a clean
              mobile app that feels familiar from the first tap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                <Apple className="h-4 w-4" />
                Download for iOS
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-105"
              >
                <Play className="h-4 w-4 fill-foreground" />
                Download for Android
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex max-w-md items-center gap-4 rounded-3xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Link to="/download" className="flex w-full items-center gap-4">
                <img
                  src={qrCodeImage}
                  alt="Scan to download PeakFit"
                  className="h-24 w-24 rounded-xl border border-border object-contain"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <QrCode className="h-4 w-4 text-primary" />
                    Scan to download PeakFit
                  </div>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Scan the QR code to open PeakFit on the App Store or Play Store.
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-8"
            >
              {[
                { n: 24, s: "", l: "App screens" },
                { n: 50, s: "K+", l: "Active users" },
                { n: 8, s: "wk", l: "Plan cycles" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card/80 p-4 shadow-sm">
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
            className="relative min-h-[620px]"
          >
            <div className="absolute left-1/2 top-8 w-[46%] -translate-x-1/2 md:w-[40%]">
              <PhoneFrame
                src={appOnboardingWelcome}
                alt="PeakFit onboarding welcome screen"
                priority
              />
            </div>
            <div className="absolute left-0 top-28 hidden w-[42%] -rotate-6 md:block">
              <PhoneFrame src={appHomeDashboard} alt="PeakFit home dashboard screen" priority />
            </div>
            <div className="absolute right-0 top-32 hidden w-[42%] rotate-6 md:block">
              <PhoneFrame src={appDietDashboard} alt="PeakFit diet dashboard screen" priority />
            </div>
            <div className="absolute left-4 top-16 z-20 rounded-2xl bg-card/90 px-4 py-3 shadow-xl backdrop-blur md:left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Today's focus</div>
                  <div className="text-sm font-semibold">Protein + push day</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-6 z-20 rounded-2xl bg-card/90 px-4 py-3 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                  <Flame className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Progress</div>
                  <div className="text-sm font-semibold">7-day rhythm</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge>Features</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Everything in the app has a job.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From onboarding to analytics, every screen helps users understand what to do, why it
              matters, and what changed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.04}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="relative py-20 md:py-28">
        <div className="absolute inset-x-0 top-20 -z-10 h-96 bg-gradient-glow opacity-70 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge>The app screens</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              A complete app tour, screen by screen.
            </h2>
            <p className="mt-5 text-muted-foreground">
              All current app screenshots are shown inside real device-style frames, with each
              feature explained in the same flow users experience inside PeakFit.
            </p>
          </Reveal>

          <div className="mt-16 space-y-20">
            {showcaseGroups.map((group, groupIndex) => (
              <FeatureShowcase key={group.eyebrow} group={group} index={groupIndex} />
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm md:p-10">
            <div className="absolute inset-0 bg-hero-glow opacity-70" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
              <Reveal>
                <Badge>Plans</Badge>
                <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                  Build the workout, follow the week, finish the program.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  PeakFit connects the full training journey: design the split, start today's
                  session, and keep progressing through a structured 8-week plan.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Daily push, pull, legs, and custom sessions",
                    "Exercise library organized by muscle group",
                    "Weekly plan controls for frequency and duration",
                    "8-week plan summaries for long-term progress",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-white/85 p-4 shadow-sm"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative mx-auto min-h-[440px] w-full max-w-2xl">
                  <div className="absolute inset-x-0 top-0 mx-auto hidden h-[420px] max-w-[620px] sm:block">
                    <div className="absolute left-[3%] top-20 w-[34%] -rotate-8">
                      <PhoneFrame
                        src={appWorkoutBuilder}
                        alt="Workout builder screen"
                        className="max-w-[230px]"
                      />
                    </div>
                    <div className="absolute left-1/2 top-0 z-20 w-[42%] -translate-x-1/2">
                      <PhoneFrame
                        src={appWorkoutDay}
                        alt="Daily workout screen"
                        className="max-w-[280px]"
                      />
                    </div>
                    <div className="absolute right-[3%] top-20 w-[34%] rotate-8">
                      <PhoneFrame
                        src={appEightWeekPlan}
                        alt="8-week plan screen"
                        className="max-w-[230px]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center sm:hidden">
                    <PhoneFrame
                      src={appWorkoutDay}
                      alt="Daily workout screen"
                      className="max-w-[270px]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge>How it works</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Set up once. Follow daily. Improve weekly.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Build the profile",
                d: "Goals, diet, body, gender, and weight create the user's starting point.",
              },
              {
                n: "02",
                t: "Follow the plan",
                d: "Workouts, meals, reminders, and coach notes keep the next action clear.",
              },
              {
                n: "03",
                t: "Review progress",
                d: "Steps, sleep, calories, body trends, and streaks show what is improving.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="text-6xl font-bold text-gradient">{step.n}</div>
                  <h3 className="mt-6 text-xl font-semibold">{step.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Badge>Integrations</Badge>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Health data belongs beside training data.
              </h2>
              <p className="mt-4 text-muted-foreground">
                PeakFit is designed to bring supported health and wearable signals into the same
                place users already track workouts and nutrition.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {integrations.map((name) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-[2rem] border border-border bg-card p-8 shadow-xl">
                <div className="absolute -inset-8 -z-10 bg-gradient-glow opacity-60 blur-3xl" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">This week</div>
                    <div className="mt-1 text-3xl font-bold">
                      12,847{" "}
                      <span className="text-base font-normal text-muted-foreground">kcal</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    <Zap className="h-3 w-3" /> +18%
                  </div>
                </div>

                <div className="mt-8 flex h-40 items-end gap-2">
                  {[40, 65, 50, 80, 45, 92, 70].map((height, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                        className="w-full rounded-t-xl bg-gradient-to-t from-accent to-primary"
                      />
                      <div className="text-[10px] text-muted-foreground">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {[
                    { l: "Weight", v: "-4.2 kg" },
                    { l: "Muscle", v: "+2.1 kg" },
                    { l: "Sleep", v: "7h 48m" },
                  ].map((stat) => (
                    <div key={stat.l}>
                      <div className="text-xs text-muted-foreground">{stat.l}</div>
                      <div className="mt-1 text-lg font-semibold">{stat.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge>Results</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Built for consistency users can feel.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Sparkles key={starIndex} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-foreground">"{review.quote}"</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                      {review.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge>Pricing</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Start free. Upgrade when you want deeper coaching.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join 10,000+ users hitting their goals with AI-powered coaching. Cancel anytime.
            </p>

            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
              {billingLabels.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBillingCycle(option.id)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all md:px-5 ${
                    billingCycle === option.id
                      ? "bg-gradient-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {option.label}
                  {option.id === "yearly" && (
                    <span className="ml-1 text-xs opacity-80">({currency.yearlySavings})</span>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Showing {currencyRegion === "IN" ? "INR" : "USD"} pricing based on your locale.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 max-w-xl">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute right-6 top-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
                <div className="mb-5 inline-flex flex-col rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 text-left shadow-sm">
                  <span className="text-xs font-bold text-orange-700">🔥 Limited Offer</span>
                  <span className="mt-0.5 text-[11px] font-medium text-orange-600">
                    Launch pricing ends in {formatOfferCountdown(offerSecondsLeft)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">PeakFit Pro</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  AI coaching, smart nutrition, health sync, recovery insights, and progress
                  analytics in one membership.
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold">
                    {formatPlanPrice(currency.prices[billingCycle], currency.symbol)}
                  </span>
                  <span className="text-sm text-muted-foreground">{cadence}</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="mt-2 text-xs font-medium text-primary">
                    {currency.yearlySavings.replace("save", "Save")} with annual billing
                  </p>
                )}
                {billingCycle === "lifetime" && (
                  <p className="mt-3 rounded-2xl border border-primary/20 bg-secondary px-4 py-3 text-xs font-semibold text-secondary-foreground">
                    Pay once. Use forever. Only 500 lifetime slots available.
                  </p>
                )}
                <Link
                  to="/download"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  {billingCycle === "lifetime" ? "Get Lifetime Access" : "Start 7-Day Free Trial"}
                </Link>
                <ul className="mt-8 space-y-3">
                  {[
                    "AI workout coach",
                    "Advanced nutrition intelligence",
                    "Health app sync",
                    "Recovery insights",
                    "Smart weekly plan adjustments",
                    "Premium transformation dashboards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions before launch.</h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className="font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-6 text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-xl md:p-12">
            <div className="absolute inset-0 bg-hero-glow opacity-80" />
            <div className="absolute inset-0 grid-bg opacity-25" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_320px]">
              <Reveal>
                <Badge>Download</Badge>
                <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                  Scan to download PeakFit.
                </h2>
                <p className="mt-5 max-w-xl text-muted-foreground">
                  Download PeakFit from the App Store or Google Play. Scan the QR code below to open
                  the store directly on your phone.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-gradient-primary px-6 py-3 text-primary-foreground shadow-lg transition-transform hover:scale-105"
                  >
                    <Apple className="h-7 w-7" />
                    <div className="text-left">
                      <div className="text-[10px] opacity-80">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 text-foreground shadow-sm transition-transform hover:scale-105"
                  >
                    <Play className="h-7 w-7 fill-foreground" />
                    <div className="text-left">
                      <div className="text-[10px] text-muted-foreground">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-border bg-white p-5 text-center shadow-2xl">
                  <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
                    <QrCode className="h-4 w-4" />
                    Scan to download PeakFit
                  </div>
                  <img
                    src={qrCodeImage}
                    alt="Scan to download PeakFit"
                    className="mx-auto h-56 w-56 rounded-2xl border border-border object-contain"
                  />
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    Point your phone camera at the QR code to open the store page.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <BrandLockup />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                The AI fitness app for people who want workouts, nutrition, recovery, and progress
                in one place.
              </p>
            </div>

            {(
              [
                {
                  t: "Product",
                  links: [
                    { l: "Features", h: "/#features" },
                    { l: "App Screens", h: "/#app" },
                    { l: "Plans", h: "/#plans" },
                    { l: "Pricing", h: "/#pricing" },
                    { l: "FAQ", h: "/#faq" },
                  ],
                },
                {
                  t: "Download",
                  links: [
                    { l: "iOS App Store", h: APP_STORE_URL, external: true },
                    { l: "Google Play", h: PLAY_STORE_URL, external: true },
                    { l: "QR Download", h: "#download" },
                  ],
                },
                {
                  t: "Legal",
                  links: [
                    { l: "About Us", h: "/about-us", internal: true },
                    { l: "Privacy Policy", h: "/privacy", internal: true },
                    { l: "Terms & Conditions", h: "/terms", internal: true },
                  ],
                },
              ] as const
            ).map((col) => (
              <div key={col.t}>
                <div className="text-sm font-semibold">{col.t}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((item) => (
                    <li key={item.l}>
                      {"internal" in item && item.internal ? (
                        <Link
                          to={item.h}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.l}
                        </Link>
                      ) : (
                        <a
                          href={item.h}
                          target={"external" in item && item.external ? "_blank" : undefined}
                          rel={
                            "external" in item && item.external ? "noopener noreferrer" : undefined
                          }
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.l}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <div className="text-xs text-muted-foreground">
              © 2026 PeakFit Global. Built by Champ96k.
            </div>
            <div className="flex gap-3">
              {[
                { s: "GH", h: "https://github.com/champ96k", label: "GitHub" },
                { s: "X", h: "https://x.com/champ_96k", label: "X" },
                { s: "IN", h: "https://www.linkedin.com/in/tushar-nikam-dev/", label: "LinkedIn" },
                { s: "IG", h: "https://www.instagram.com/peakfit.global/", label: "Instagram" },
                { s: "@", h: "mailto:champ96klabs@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.h}
                  aria-label={social.label}
                  target={social.h.startsWith("http") ? "_blank" : undefined}
                  rel={social.h.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {social.s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

function BrandLockup() {
  return (
    <div className="inline-flex items-center rounded-2xl bg-slate-950 px-3 py-2 shadow-sm">
      <img src={logo} alt="PeakFit" className="h-8 w-auto" />
    </div>
  );
}

function FeatureShowcase({ group, index }: { group: FeatureGroup; index: number }) {
  const Icon = group.icon;
  const reversed = index % 2 === 1;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm md:p-8">
      <div
        className={`grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] ${reversed ? "lg:grid-flow-col-dense" : ""}`}
      >
        <Reveal className={reversed ? "lg:col-start-2" : ""}>
          <div className="max-w-xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              {group.eyebrow}
            </div>
            <h3 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{group.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              {group.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
              <Activity className="h-4 w-4 text-primary" />
              {group.screens.length} {group.screens.length === 1 ? "screen" : "screens"} in this
              flow
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={reversed ? "lg:col-start-1" : ""}>
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-secondary/70 via-white to-card p-6 shadow-inner">
            <AngledPhoneStack screens={group.screens} />
          </div>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {group.screens.map((screen, screenIndex) => (
          <Reveal key={screen.title} delay={screenIndex * 0.03}>
            <ScreenNote screen={screen} index={screenIndex} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function AngledPhoneStack({ screens }: { screens: ScreenFeature[] }) {
  const [baseIndex, setBaseIndex] = useState(0);
  const deviceCount = Math.min(Math.max(screens.length, 1), 3) as 1 | 2 | 3;
  const shouldCycle = screens.length > deviceCount;
  const positionsByDeviceCount: Record<1 | 2 | 3, string[]> = {
    1: ["left-1/2 top-0 z-30 w-[50%] -translate-x-1/2"],
    2: ["left-[12%] top-16 z-20 w-[38%] -rotate-7", "right-[12%] top-8 z-30 w-[42%] rotate-5"],
    3: [
      "left-[6%] top-24 z-20 w-[35%] -rotate-8",
      "left-1/2 top-4 z-30 w-[42%] -translate-x-1/2",
      "right-[6%] top-24 z-20 w-[35%] rotate-8",
    ],
  };

  useEffect(() => {
    if (!shouldCycle) return;

    const intervalId = window.setInterval(() => {
      setBaseIndex((current) => (current + 1) % screens.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [screens.length, shouldCycle]);

  const positions = positionsByDeviceCount[deviceCount];

  return (
    <>
      <div className="overflow-x-auto pb-3 md:hidden">
        <div className="flex snap-x snap-mandatory gap-5">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="flex min-w-full snap-center flex-col items-center justify-center px-4"
            >
              <PhoneFrame
                src={screen.src}
                alt={`${screen.title} app screenshot`}
                className="mx-auto max-w-[250px]"
              />
              <div className="mt-5 max-w-xs text-center">
                <div className="text-sm font-semibold">{screen.title}</div>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-8 mx-auto hidden h-[430px] max-w-[680px] md:block">
        {Array.from({ length: deviceCount }).map((_, phoneIndex) => {
          const screen = screens[(baseIndex + phoneIndex) % screens.length];
          const position = positions[phoneIndex];

          return (
            <div key={phoneIndex} className={`absolute ${position}`}>
              <CyclingPhoneFrame screen={screen} />
            </div>
          );
        })}
      </div>
    </>
  );
}

function CyclingPhoneFrame({ screen }: { screen: ScreenFeature }) {
  return (
    <div className="relative mx-auto w-full max-w-[270px]">
      <div className="absolute -inset-3 rounded-[3rem] bg-gradient-glow opacity-60 blur-2xl" />
      <div className="relative rounded-[2.35rem] border-[8px] border-slate-950 bg-slate-950 p-1 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)]">
        <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-800" />
        <div className="overflow-hidden rounded-[1.82rem] bg-white">
          <motion.img
            key={screen.src}
            src={screen.src}
            alt={`${screen.title} app screenshot`}
            loading="lazy"
            width={1170}
            height={2532}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="block w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ScreenNote({ screen, index }: { screen: ScreenFeature; index: number }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-white/75 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div>
          <h4 className="text-sm font-semibold">{screen.title}</h4>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{screen.description}</p>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[270px] ${className}`}>
      <div className="absolute -inset-3 rounded-[3rem] bg-gradient-glow opacity-60 blur-2xl" />
      <div className="relative rounded-[2.35rem] border-[8px] border-slate-950 bg-slate-950 p-1 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)]">
        <div className="absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-800" />
        <div className="overflow-hidden rounded-[1.82rem] bg-white">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            width={1170}
            height={2532}
            className="block w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
