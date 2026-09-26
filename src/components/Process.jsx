import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, scrollToId } from "../lib/gsap.js";
import { processSection, processSteps } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

/**
 * HOW WE WORK — four typographic steps beside a scroll-drawn
 * line, closed by the section CTA.
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

  const go = (e) => {
    e.preventDefault();
    scrollToId(processSection.cta.href);
  };

  return (
    <section className="proc section" id="process" ref={ref}>
      <div className="container">
        <SectionHead
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          lead={processSection.lead}
        />
        <div className="proc__steps">
          <span className="proc__line" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <div className="proc__step" key={s.title}>
              <span className="proc__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="proc__title">{s.title}</h3>
              <p className="proc__desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <a
          className="btn btn--violet proc__cta will-reveal"
          href={processSection.cta.href}
          onClick={go}
        >
          {processSection.cta.label}
        </a>
      </div>
    </section>
  );
}
