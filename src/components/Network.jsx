import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { network } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import CountTo from "./CountTo.jsx";

/**
 * NETWORK "الجمهور" — analytics reading: one big counter, category
 * share bars that fill with scroll (origin: right, RTL), countries.
 */
export default function Network() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const fills = gsap.utils.toArray(".net__bar-fill", ref.current);
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".net__bars",
            start: "top 78%",
            end: "bottom 70%",
            scrub: 0.8,
          },
        });
        fills.forEach((fill, i) => {
          tl.fromTo(
            fill,
            { scaleX: 0 },
            { scaleX: network.categories[i].share / 100, duration: 0.5 },
            i * 0.07
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="net section" id="network" ref={ref}>
      <div className="container">
        <SectionHead eyebrow="الجمهور" title={network.headline} lead={network.lead} />

        <div className="net__hero will-reveal">
          <span className="net__dot" aria-hidden="true" />
          <CountTo value={network.bigStat.value} suffix={network.bigStat.suffix} className="net__big" />
          <span className="net__big-label">{network.bigStat.label}</span>
        </div>

        <ul className="net__bars">
          {network.categories.map((c) => (
            <li className="net__bar" key={c.label}>
              <span className="net__bar-head">
                <span className="net__bar-label">{c.label}</span>
                <CountTo value={c.share} suffix="٪" className="net__bar-pct" />
              </span>
              <span className="net__bar-track">
                <i className="net__bar-fill" style={{ scaleX: c.share / 100 }} />
              </span>
            </li>
          ))}
        </ul>

        <div className="net__foot">
          <ul className="net__countries">
            {network.countries.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <ul className="net__stats">
            {network.stats.map((s, i) => (
              <li key={i}>
                <CountTo value={s.value} suffix={s.suffix || ""} className="net__stat-v" />
                <span className="net__stat-l">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
