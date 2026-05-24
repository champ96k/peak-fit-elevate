import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Apple, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/peakfit-logo.png";

const links = [
  { label: "Features", href: "/#features" },
  { label: "App", href: "/#app" },
  { label: "Plans", href: "/#plans" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link
          to="/"
          className="flex items-center rounded-2xl bg-slate-950 px-3 py-2 shadow-sm"
          aria-label="PeakFit home"
        >
          <img src={logo} alt="PeakFit" className="h-7 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:scale-105"
          >
            <Apple className="h-4 w-4" /> iOS
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Play className="h-4 w-4 fill-primary-foreground" /> Android
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background"
              >
                <Apple className="h-4 w-4" /> iOS
              </a>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
              >
                <Play className="h-4 w-4 fill-primary-foreground" /> Android
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
