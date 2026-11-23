import { useEffect, useRef, useState } from "react";
import { AREAS, ASSETS, COMPANY, SERVICES, STATS, STEPS, TESTIMONIALS, WHY, wa } from "../data";
import { CountUp, Marquee, SectionHead } from "./Chrome";
import {
  ICONS,
  IconArrow,
  IconBolt,
  IconCheck,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconStar,
  IconWhatsApp,
} from "./Icons";

/* ============================= HERO ============================= */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <section id="home" className="relative">
      <div className="relative min-h-svh overflow-hidden">
        {/* cinematic video backdrop */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          src={ASSETS.heroVideo}
          poster={ASSETS.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setReady(true)}
        />
        {/* transparent overlay — kept deliberately light so the video stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink/80 to-transparent" />

        <div className="relative z-10 flex min-h-svh items-center">
          <div className="mx-auto w-full max-w-7xl px-5 py-28 lg:px-8">
            {/* copy */}
            <div className="max-w-2xl lg:max-w-[44rem]">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-beam">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Emparet Building Cleaning — Doha · Qatar
              </p>

              <h1 className="mt-6 font-display text-[clamp(2.5rem,6.2vw,5rem)] font-bold uppercase leading-[0.98] tracking-tight text-ice">
                <span className="mask-line">
                  <span style={{ animationDelay: "0.15s" }}>Spotless homes.</span>
                </span>
                <span className="mask-line">
                  <span style={{ animationDelay: "0.32s" }}>Spotless buildings.</span>
                </span>
                <span className="mask-line">
                  <span style={{ animationDelay: "0.5s" }} className="text-beam">
                    One trusted crew.
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-steel sm:text-base">
                Emparet cleans Doha's homes, villas, apartments, offices, towers and malls — vetted
                crews, industrial-grade equipment and eco-safe chemistry, working 24/7 so your space
                never misses a beat.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={wa("Hello Emparet Building Cleaning! I would like a free quote for my building.")}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-beam hover:shadow-[0_0_36px_rgba(31,169,255,0.5)]"
                >
                  Get a free quote
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ice backdrop-blur-sm transition-all duration-300 hover:border-beam hover:text-beam"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[12px] font-bold tracking-wide text-steel/90">
                {["350+ homes & sites maintained", "24/7 emergency response", "4.9/5 client rating"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <IconCheck className="h-3.5 w-3.5 text-brand" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* corner trust card (desktop only) */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
          <div className="flex items-center gap-5 rounded-lg border border-white/12 bg-ink/45 px-6 py-4 backdrop-blur-md">
            <div>
              <p className="metal font-display text-2xl font-bold leading-none">4.9/5</p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-mist">Client rating</p>
            </div>
            <span className="h-9 w-px bg-white/15" />
            <div>
              <p className="metal font-display text-2xl font-bold leading-none">350+</p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-mist">Spaces cleaned</p>
            </div>
            <span className="h-9 w-px bg-white/15" />
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whats opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-whats" />
              </span>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ice">
                Replying
                <br />
                <span className="text-whats">now</span>
              </p>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-7 hidden items-center gap-3 md:flex">
          <span className="scroll-line relative block h-14 w-px overflow-hidden" />
          <span className="text-[10px] font-bold tracking-[0.45em] text-steel/70">SCROLL</span>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

/* ============================= SERVICES ============================= */
type Tab = "residential" | "commercial";

const TABS: { id: Tab; label: string; note: string; icon: string }[] = [
  { id: "residential", label: "Residential", note: "Homes, villas & apartments", icon: "home" },
  { id: "commercial", label: "Commercial", note: "Offices, towers & industrial", icon: "building" },
];

export function Services() {
  const [tab, setTab] = useState<Tab>("residential");
  const list = SERVICES.filter((s) => s.cat === tab);

  return (
    <section id="services" className="relative bg-ink py-24 lg:py-32">
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="What we clean"
            title={
              <>
                Homes &amp; buildings,
                <br />
                <span className="text-beam">engineered.</span>
              </>
            }
            sub="Twelve specialised programmes across residential and commercial cleaning — each delivered by a dedicated, supervised crew that knows your kind of space."
          />

          {/* category switcher */}
          <div data-reveal className="shrink-0">
            <div className="flex gap-2 rounded-full border border-white/12 bg-deep/70 p-1.5 backdrop-blur">
              {TABS.map((t) => {
                const Icon = ICONS[t.icon];
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-left transition-all duration-300 ${
                      active
                        ? "bg-brand text-ink shadow-[0_0_24px_rgba(31,169,255,0.35)]"
                        : "text-steel hover:bg-white/5 hover:text-ice"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>
                      <span className="block font-display text-[13px] font-extrabold uppercase tracking-wider">{t.label}</span>
                      <span className={`block text-[10px] font-semibold tracking-wide ${active ? "text-ink/70" : "text-mist"}`}>
                        {t.note}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* cards */}
        <div key={tab} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <article
                key={s.id}
                className="fade-up group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-deep/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(31,169,255,0.12)]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 font-display text-[11px] font-bold tracking-[0.3em] text-beam backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-snug text-ice">{s.title}</h3>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/30 transition-all duration-300 group-hover:bg-brand group-hover:text-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-mist">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-steel/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={wa(`Hello Emparet! I'm interested in your "${s.title}" service (${tab}). Please share details and pricing.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider text-beam transition-colors hover:text-ice"
                  >
                    Book this service <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}

          <a
            href={wa("Hello Emparet! I have a cleaning requirement that's not listed. Let me tell you about my property.")}
            target="_blank"
            rel="noreferrer"
            className="fade-up group flex flex-col justify-center rounded-lg border border-dashed border-brand/40 bg-brand/[0.04] p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-beam hover:bg-brand/10"
            style={{ animationDelay: `${list.length * 70}ms` }}
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-beam/50 text-beam transition-transform duration-300 group-hover:rotate-45">
              <IconArrow className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-base font-bold uppercase tracking-wide text-ice">
              Something else?
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-mist">
              Tell us about your {tab === "residential" ? "home" : "building"} and we'll design a programme around it.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================= STATS ============================= */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-deep">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-beam/10 blur-[90px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <div key={s.label} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="px-4 py-12 text-center sm:px-8 lg:py-16">
            <p className="metal font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-mist">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================= PROCESS ============================= */
export function Process() {
  return (
    <section id="process" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* sticky intro + image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            eyebrow="How it works"
            title={
              <>
                From first call
                <br />
                to final <span className="text-beam">walk-through.</span>
              </>
            }
            sub="No long tenders, no confusing contracts. Three steps and your building is on a spotless schedule."
          />
          <div data-reveal className="relative mt-10">
            <div className="overflow-hidden rounded-lg ring-1 ring-white/15">
              <img src={ASSETS.processTeam} alt="Emparet cleaning team with equipment" loading="lazy" className="kenburns h-64 w-full object-cover sm:h-72" />
            </div>
            <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-md border border-white/10 bg-ink/90 px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whats opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-whats" />
              </span>
              <div>
                <p className="text-[13px] font-extrabold text-ice">Reply in under 30 minutes</p>
                <p className="text-[11px] font-semibold text-mist">WhatsApp, day or night</p>
              </div>
            </div>
          </div>
        </div>

        {/* steps */}
        <div className="space-y-6 pt-6 lg:pt-0">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              data-reveal
              data-from="right"
              style={{ transitionDelay: `${i * 110}ms` }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-deep/50 p-7 transition-all duration-500 hover:border-brand/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-9"
            >
              <span className="absolute inset-y-0 left-0 w-[3px] scale-y-0 bg-brand transition-transform duration-500 group-hover:scale-y-100" />
              <div className="flex items-start gap-6">
                <span
                  className="font-display text-5xl font-bold leading-none text-transparent sm:text-6xl"
                  style={{ WebkitTextStroke: "1.5px rgba(85,198,255,0.55)" }}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ice sm:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{step.desc}</p>
                  <p className="mt-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-beam">
                    <span className="h-1.5 w-1.5 rounded-full bg-beam shadow-[0_0_8px_rgba(85,198,255,0.9)]" />
                    {step.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <a
            href={wa("Hello Emparet! Let's start step 1 — here is a brief about my building.")}
            target="_blank"
            rel="noreferrer"
            data-reveal
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-beam hover:shadow-[0_0_32px_rgba(31,169,255,0.45)]"
          >
            Start step 1 on WhatsApp
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================= ABOUT / WHY ============================= */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-deep py-24 lg:py-32">
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* collage */}
        <div data-reveal data-from="left" className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-lg ring-1 ring-white/15">
            <img src={ASSETS.aboutMain} alt="Emparet professional cleaner at work" loading="lazy" className="h-[380px] w-full object-cover sm:h-[440px]" />
          </div>
          <div className="absolute -bottom-10 -right-3 hidden w-52 overflow-hidden rounded-lg shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-4 ring-deep sm:block">
            <img src={ASSETS.aboutSub} alt="Emparet crew member with tools" loading="lazy" className="h-40 w-full object-cover" />
          </div>
          <div className="float-y absolute -top-6 right-6 flex items-center gap-3 rounded-md border border-brand/40 bg-ink/95 px-5 py-3.5 shadow-[0_0_40px_rgba(31,169,255,0.25)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-beam ring-1 ring-brand/40">
              <IconBolt className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[13px] font-extrabold text-ice">24/7 Emergency response</p>
              <p className="text-[11px] font-semibold text-mist">Crew on-site in hours</p>
            </div>
          </div>
          <div className="absolute -left-3 bottom-8 rounded-md border border-white/15 bg-ink/95 px-5 py-3 backdrop-blur">
            <p className="metal font-display text-2xl font-bold">350+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mist">Properties cleaned</p>
          </div>
        </div>

        {/* copy */}
        <div>
          <SectionHead
            eyebrow="Why Emparet"
            title={
              <>
                The crew Doha's homes &amp;
                <br />
                facility managers <span className="text-beam">trust.</span>
              </>
            }
            sub="We built Emparet in Al Mirqab for one reason: cleaning in Qatar deserved better than excuses. Today the same standard runs through every villa we deep-clean and every tower we maintain — measured, supervised and reported."
          />
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {WHY.map((w, i) => {
              const Icon = ICONS[w.icon];
              return (
                <div key={w.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }} className="group flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand/10 text-beam ring-1 ring-brand/30 transition-all duration-300 group-hover:bg-brand group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-ice">{w.title}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-mist">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div data-reveal className="mt-11 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ice px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-beam"
            >
              Visit us in Al Mirqab
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={`tel:${COMPANY.phoneRaw}`} className="text-sm font-bold text-steel transition-colors hover:text-beam">
              or call {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= TESTIMONIALS ============================= */
export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          align="center"
          eyebrow="Client stories"
          title={
            <>
              Word from <span className="text-beam">our buildings.</span>
            </>
          }
          sub="Homeowners, tenants, facility managers and property directors across Doha — in their own words."
        />
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              className="mb-6 break-inside-avoid rounded-lg border border-white/10 bg-deep/50 p-6 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <IconStar key={s} className="h-4 w-4 text-beam" />
                  ))}
                </div>
                <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-beam">
                  {t.service}
                </span>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-steel">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-navy font-display text-[13px] font-bold text-ice">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-ice">{t.name}</span>
                  <span className="block text-[11px] font-semibold text-mist">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================= AREAS ============================= */
export function Areas() {
  return (
    <section id="areas" className="relative overflow-hidden bg-deep py-24 lg:py-32">
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHead
            eyebrow="Coverage"
            title={
              <>
                Across Doha &amp;
                <br />
                all of <span className="text-beam">Qatar.</span>
              </>
            }
            sub="Our base is Al Mirqab Mall — minutes from West Bay, The Pearl and the Corniche — with crews deployed daily to every major district in the country."
          />
          <div className="mt-9 flex flex-wrap gap-2.5">
            {AREAS.map((a, i) => (
              <span
                key={a}
                data-reveal
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                  a === "Al Mirqab"
                    ? "border-beam bg-beam/15 text-beam shadow-[0_0_20px_rgba(85,198,255,0.25)]"
                    : "border-white/15 text-steel hover:border-brand/60 hover:text-ice"
                }`}
              >
                <IconPin className="h-3.5 w-3.5" />
                {a}
                {a === "Al Mirqab" && <span className="rounded-full bg-beam px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-ink">Base</span>}
              </span>
            ))}
          </div>
          <p data-reveal className="mt-8 text-[13px] font-semibold text-mist">
            Don't see your area? We travel anywhere in Qatar for contracts of 500+ sq. ft.
          </p>
        </div>

        <div data-reveal data-from="right" className="relative">
          <div className="overflow-hidden rounded-lg border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <iframe
              title="Emparet Building Cleaning office — Al Mirqab Mall, Doha"
              src={COMPANY.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
              style={{ filter: "grayscale(20%) contrast(1.05)" }}
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-md border border-white/10 bg-ink/95 px-5 py-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-beam ring-1 ring-brand/40">
              <IconPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[13px] font-extrabold text-ice">Al Mirqab Mall Offices</p>
              <p className="text-[11px] font-semibold text-mist">Floor 1 · Office 101 · Doha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= CTA BAND ============================= */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0">
        <img src={ASSETS.ctaSkyline} alt="Doha skyline at night" loading="lazy" className="kenburns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-ink/80" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <p data-reveal className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.34em] text-beam">
          <span className="h-px w-8 bg-beam/70" /> Free site survey <span className="h-px w-8 bg-beam/70" />
        </p>
        <h2 data-reveal className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ice sm:text-5xl lg:text-6xl">
          Ready for a
          <br />
          <span className="text-beam">spotless</span> space?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-steel">
          One WhatsApp message is all it takes. Whether it's a studio apartment or a whole tower, we
          survey for free, quote within 24 hours, and start on a schedule that fits your life or your
          operations.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={wa("Hello Emparet Building Cleaning! I'd like a free site survey for my building.")}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-whats px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_rgba(37,211,102,0.45)]"
          >
            <IconWhatsApp className="h-5 w-5" />
            WhatsApp {COMPANY.phoneDisplay}
          </a>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-ice backdrop-blur-sm transition-all duration-300 hover:border-beam hover:text-beam"
          >
            <IconPhone className="h-4 w-4" />
            Call now
          </a>
        </div>
        <p data-reveal className="mt-8 text-[11px] font-bold uppercase tracking-[0.28em] text-mist">
          Free survey · Transparent pricing · 24/7 support
        </p>
      </div>
    </section>
  );
}

/* ============================= CONTACT ============================= */
export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", type: "Apartment / Flat", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Emparet Building Cleaning!\n\nName: ${form.name || "-"}\nPhone: ${form.phone || "-"}\nProperty type: ${form.type}\nDetails: ${form.message || "I'd like a free quote."}\n\nPlease send me a quote. Thank you!`;
    window.open(wa(msg), "_blank");
  };

  const inputCls =
    "w-full rounded-md border border-white/15 bg-deep/60 px-4 py-3 text-sm font-medium text-ice placeholder:text-mist/60 outline-none transition-colors duration-300 focus:border-brand";

  return (
    <section id="contact" className="relative bg-ink py-24 lg:py-32">
      <div className="bg-grid grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHead
            eyebrow="Contact"
            title={
              <>
                Let's talk about
                <br />
                <span className="text-beam">your space.</span>
              </>
            }
            sub="WhatsApp is the fastest way to reach us — for a one-bedroom flat or a 30-floor tower alike. We're equally happy on the phone or by email, and our Al Mirqab office is open for walk-ins."
          />

          <div className="mt-10 space-y-4">
            <a
              data-reveal
              href={wa("Hello Emparet Building Cleaning! I have an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-lg border border-white/10 bg-deep/50 p-5 transition-all duration-300 hover:border-whats/60 hover:shadow-[0_0_28px_rgba(37,211,102,0.15)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whats/15 text-whats ring-1 ring-whats/40 transition-transform duration-300 group-hover:scale-110">
                <IconWhatsApp className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.24em] text-mist">WhatsApp 24/7</span>
                <span className="mt-1 block font-display text-lg font-bold text-ice">{COMPANY.phoneDisplay}</span>
              </span>
            </a>

            <a
              data-reveal
              style={{ transitionDelay: "90ms" }}
              href={`mailto:${COMPANY.email}`}
              className="group flex items-center gap-5 rounded-lg border border-white/10 bg-deep/50 p-5 transition-all duration-300 hover:border-brand/60 hover:shadow-[0_0_28px_rgba(31,169,255,0.15)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-beam ring-1 ring-brand/40 transition-transform duration-300 group-hover:scale-110">
                <IconMail className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.24em] text-mist">Email</span>
                <span className="mt-1 block font-display text-lg font-bold text-ice">{COMPANY.email}</span>
              </span>
            </a>

            <div
              data-reveal
              style={{ transitionDelay: "180ms" }}
              className="flex items-center gap-5 rounded-lg border border-white/10 bg-deep/50 p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-beam/15 text-beam ring-1 ring-beam/40">
                <IconPin className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.24em] text-mist">Visit the office</span>
                <span className="mt-1 block text-sm font-bold leading-relaxed text-ice">{COMPANY.address}</span>
              </span>
            </div>

            <div data-reveal style={{ transitionDelay: "270ms" }} className="rounded-lg border border-white/10 bg-deep/50 p-5">
              <div className="flex items-center gap-3">
                <IconClock className="h-5 w-5 text-beam" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-mist">Working hours</p>
              </div>
              <div className="mt-4 space-y-2.5">
                {COMPANY.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-steel">{h.day}</span>
                    <span className="font-extrabold text-ice">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* quote form */}
        <div data-reveal data-from="right">
          <form
            onSubmit={submit}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-deep/60 p-7 shadow-[0_30px_70px_rgba(0,0,0,0.4)] sm:p-9"
          >
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-beam to-brand" />
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ice">Request a free quote</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-mist">
              Fill this in and it lands straight in our WhatsApp — we reply within 30 minutes.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-steel">Your name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Ahmed Al Mansoori"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-steel">Phone</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+974 5XXX XXXX"
                  className={inputCls}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-steel">Property type</span>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className={`${inputCls} appearance-none`}
              >
                {[
                  "Apartment / Flat",
                  "Villa / House",
                  "Office / Workspace",
                  "Mall / Retail",
                  "Hotel / Restaurant",
                  "Warehouse / Industrial",
                  "Clinic / Medical",
                  "Mixed-use Tower",
                  "Other",
                ].map((t) => (
                  <option key={t} className="bg-deep text-ice">
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-steel">What needs cleaning?</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Approx. size, rooms or floors, how often, anything specific…"
                className={`${inputCls} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-whats px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-ink transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_32px_rgba(37,211,102,0.4)]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Send via WhatsApp
            </button>
            <p className="mt-4 text-center text-[12px] text-mist">
              Prefer email? Write to{" "}
              <a href={`mailto:${COMPANY.email}`} className="font-bold text-beam hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
