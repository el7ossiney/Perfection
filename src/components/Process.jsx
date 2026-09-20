import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";
import { processSteps } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

/**
 * PROCESS — quiet on purpose. Four typographic steps beside a
 * hairline that draws with scroll; steps light up as passed.
 */
export default function Process() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".proc__line",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".proc__steps",
              start: "top 75%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          }
        );

        gsap.utils.toArray(".proc__step", ref.current).forEach((step) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 62%",
            toggleClass: { targets: step, className: "is-passed" },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.utils.toArray(".proc__step", ref.current).forEach((step) =>
          step.classList.add("is-passed")
        );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="proc section" id="process" ref={ref}>
      <div className="container">
        <SectionHead eyebrow="طريقتنا" title="من الفكرة للأثر، بأربع خطوات." />
        <div className="proc__steps">
          <span className="proc__line" aria-hidden="true" />
          {processSteps.map((s) => (
            <div className="proc__step" key={s.num}>
              <span className="proc__num">{s.num}</span>
              <h3 className="proc__title">{s.title}</h3>
              <p className="proc__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
