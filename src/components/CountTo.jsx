import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { arNumber } from "../utils/format.js";

/**
 * Counts 0 -> value once when scrolled into view.
 * Arabic-Indic digits; renders the final value by default
 * (no-JS / reduced-motion safe).
 */
export default function CountTo({ value, suffix = "", className = "" }) {
  const scopeRef = useRef(null);
  const numRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const proxy = { v: 0 };
        gsap.to(proxy, {
          v: value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: scopeRef.current, start: "top 85%", once: true },
          onUpdate: () => {
            numRef.current.textContent = arNumber(Math.floor(proxy.v));
          },
        });
      });
      return () => mm.revert();
    },
    { scope: scopeRef }
  );

  return (
    <bdi className={className} dir="ltr" ref={scopeRef}>
      <span ref={numRef}>{arNumber(value)}</span>
      {suffix}
    </bdi>
  );
}
