import { useEffect } from "react";
import { Footer, Nav, WhatsAppFloat } from "./components/Chrome";
import { About, Areas, Contact, CtaBand, Hero, Process, Services, StatsBand, Testimonials } from "./components/Sections";

export default function App() {
  /* global scroll-reveal observer */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <StatsBand />
        <Process />
        <About />
        <Testimonials />
        <Areas />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
