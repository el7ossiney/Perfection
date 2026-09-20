import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./lib/gsap.js";
import { Grain } from "./components/Chrome.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Process from "./components/Process.jsx";
import Network from "./components/Network.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      // Global batch reveal — initial hidden state is set from JS
      // only, so no-JS and reduced-motion always see full content.
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".will-reveal", { opacity: 0, y: 28 });
        ScrollTrigger.batch(".will-reveal", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });
      });

      // Noto Kufi swaps in after first paint and shifts every trigger.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef}>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <Network />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
