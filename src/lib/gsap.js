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

export { gsap, ScrollTrigger, useGSAP };
