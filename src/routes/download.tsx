import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Apple, Play, Smartphone } from "lucide-react";
import logo from "@/assets/peakfit-logo.png";
import qrCodeImage from "@/assets/qr-code.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.champ96k.peakfit";
const APP_STORE_URL = "https://apps.apple.com/us/app/peakfit-fitness-tracker/id6777769375";

export const Route = createFileRoute("/download")({
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center rounded-2xl bg-slate-950 px-4 py-2.5 shadow-sm mb-6"
          >
            <img src={logo} alt="PeakFit" className="h-8 w-auto" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Download <span className="text-gradient">PeakFit</span>
          </h1>
          <p className="text-muted-foreground text-lg">Your AI-powered fitness tracker companion</p>
        </div>

        {/* Download Links - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {/* iOS Link */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-5 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] transform"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Apple className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Download for iPhone</p>
                <p className="text-muted-foreground text-sm">App Store</p>
              </div>
            </div>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </a>

          {/* Android Link */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-5 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] transform"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                <Smartphone className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Download for Android</p>
                <p className="text-muted-foreground text-sm">Google Play Store</p>
              </div>
            </div>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </a>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 rounded-2xl border border-border bg-white p-6 text-center shadow-xl"
          >
            <div className="mb-4 text-sm font-semibold text-foreground">Or scan the QR code</div>
            <img
              src={qrCodeImage}
              alt="Scan to download PeakFit"
              className="mx-auto h-48 w-48 rounded-xl border border-border object-contain"
            />
            <p className="mt-4 text-xs text-muted-foreground">
              Point your phone camera at the QR code to open the store page.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-xs mt-12"
        >
          PeakFit - Train with a plan that is built for you.
        </motion.p>
      </motion.div>
    </div>
  );
}
