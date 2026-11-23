import { useEffect, useRef, useState } from "react";
import { ASSETS, COMPANY, MARQUEE_ITEMS, SERVICES, wa } from "../data";
import { IconArrow, IconStar, IconWhatsApp } from "./Icons";

/* ---------------- 3D tilt wrapper for the logo ---------------- */
export function Tilt3D({ children, className = "", max = 9 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame.current);
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame.current);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={className} style={{ transition: "transform 0.35s ease-out", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

/* ---------------- animated counter ---------------- */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  className = "",
  duration = 1900,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (reduced) {
          setVal(value);
          return;
        }
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/* ---------------- sticky nav ---------------- */
const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/10 py-2.5" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Emparet Building Cleaning — home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-[4px] ring-1 ring-white/15 transition-all duration-500 group-hover:ring-brand/70 group-hover:shadow-[0_0_24px_rgba(31,169,255,0.45)]">
            <img src={ASSETS.logo} alt="Emparet Building Cleaning logo" className="h-full w-full object-cover" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-[0.14em] text-ice">EMPARET</span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.42em] text-mist">BUILDING CLEANING</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] font-semibold tracking-wide text-steel transition-colors duration-300 hover:text-ice after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] font-bold text-steel transition-all duration-300 hover:border-brand/60 hover:text-ice md:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(31,169,255,0.9)]" />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={wa("Hello Emparet Building Cleaning! I would like a free quote for my building.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whats px-4 py-2 text-[13px] font-extrabold text-ink transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] sm:flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp Us
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/15 lg:hidden"
          >
            <span className={`h-px w-5 bg-ice transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ice transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-96 border-b border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-steel transition-colors hover:bg-white/5 hover:text-ice"
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa("Hello Emparet Building Cleaning! I would like a free quote for my building.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-whats px-4 py-2.5 text-sm font-extrabold text-ink"
          >
            <IconWhatsApp className="h-4 w-4" /> WhatsApp {COMPANY.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  dark = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div data-reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.32em] text-brand ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-brand/70" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-brand/70" />}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-bold uppercase leading-[1.04] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-ice" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-5 text-[15px] leading-relaxed ${dark ? "text-mist" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}

/* ---------------- marquee ---------------- */
export function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span key={key + item} className="flex items-center">
          <span className="px-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-steel/80 sm:px-10 sm:text-base">
            {item}
          </span>
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 text-brand" aria-hidden="true">
            <path d="M5 0l5 5-5 5-5-5z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-ink/40 py-4 backdrop-blur-sm">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------------- floating WhatsApp ---------------- */
export function WhatsAppFloat() {
  return (
    <a
      href={wa("Hello Emparet Building Cleaning! I have a building cleaning enquiry.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-full border border-white/10 bg-ink/90 px-4 py-2 text-xs font-bold text-ice opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        +974 5548 4233
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whats text-ink shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-110">
        <span className="pulse-ring" />
        <span className="pulse-ring delay" />
        <IconWhatsApp className="relative h-7 w-7" />
      </span>
    </a>
  );
}

/* ---------------- footer ---------------- */
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src={ASSETS.logo} alt="Emparet Building Cleaning logo" className="h-16 w-16 rounded-md ring-1 ring-white/15" />
              <div>
                <p className="font-display text-xl font-bold tracking-[0.12em] text-ice">EMPARET</p>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.4em] text-mist">BUILDING CLEANING</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Doha's professional cleaning company for homes and businesses — villas, apartments, offices, towers,
              malls and warehouses, cleaned to a mirror finish. Based in Al Mirqab, serving all of Qatar.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} className="h-4 w-4 text-brand" />
              ))}
              <span className="ml-1 text-xs font-bold text-steel">4.9 / 5 rated by clients</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand">Explore</p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-ice">
                    <IconArrow className="h-3.5 w-3.5 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.filter((s) => ["home", "villa", "office", "floor", "sofa", "facade"].includes(s.id)).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm font-semibold text-steel transition-colors hover:text-ice">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand">Get in touch</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-steel transition-colors hover:text-ice">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="font-semibold text-steel transition-colors hover:text-ice">
                  {COMPANY.email}
                </a>
              </li>
              <li className="leading-relaxed text-mist">{COMPANY.address}</li>
            </ul>
            <a
              href={wa("Hello Emparet Building Cleaning! I would like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-whats px-5 py-2.5 text-sm font-extrabold text-ink transition-all duration-300 hover:brightness-110"
            >
              <IconWhatsApp className="h-4 w-4" /> Book via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} Emparet Building Cleaning. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(31,169,255,0.9)]" />
            Al Mirqab · Doha · Qatar — Built for spotless buildings
          </p>
        </div>
      </div>
    </footer>
  );
}
