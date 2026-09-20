import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";

/**
 * Arabic-safe word-level mask reveal.
 * Splits on whitespace ONLY — never inside a word (Arabic letters
 * must join). Renders fully visible by default; hidden states are
 * set from JS only, so no-JS and reduced-motion see the text.
 *
 * mode "load": plays after `delay` seconds (hero).
 * mode "scroll": plays when scrolled into view.
 */
export default function SplitWords({
  lines,
  as: Tag = "p",
  mode = "scroll",
  delay = 0,
  stagger = 0.07,
  className = "",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const words = ref.current.querySelectorAll(".sw__i");
        gsap.set(words, { yPercent: 112 });
        gsap.to(words, {
          yPercent: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger,
          ...(mode === "scroll"
            ? { scrollTrigger: { trigger: ref.current, start: "top 86%", once: true } }
            : {}),
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const arr = Array.isArray(lines) ? lines : [lines];

  return (
    <Tag ref={ref} className={`sw ${className}`}>
      {arr.map((line, li) => (
        <span className="sw__line" key={li}>
          {String(line)
            .split(/\s+/)
            .filter(Boolean)
            .map((w, wi) => (
              <span key={wi}>
                <span className="sw__w">
                  <span className="sw__i">{w}</span>
                </span>{" "}
              </span>
            ))}
        </span>
      ))}
    </Tag>
  );
}
