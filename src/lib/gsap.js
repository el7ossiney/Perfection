/**
 * Single GSAP entry point for the whole app.
 * Every component imports from here — never from "gsap" directly.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

/**
 * Anchor navigation that stays correct after pin spacers change the
 * document height. CSS scroll-behavior must stay unset (auto).
 */
export function scrollToId(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView();
    return;
  }
  gsap.to(window, {
    duration: 0.9,
    ease: "power2.inOut",
    scrollTo: { target: el, offsetY: 0 },
  });
}

/**
 * Per-page batch reveal. App-level setup runs once at mount, so each
 * page component calls this for its own .will-reveal elements.
 */
export function usePageReveal(ref) {
  useGSAP(
    () => {
      if (!ref.current) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const els = ref.current.querySelectorAll(".will-reveal");
        gsap.set(els, { opacity: 0, y: 28 });
        ScrollTrigger.batch(els, {
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
      return () => mm.revert();
    },
    { scope: ref }
  );
}

export { gsap, ScrollTrigger, useGSAP };
