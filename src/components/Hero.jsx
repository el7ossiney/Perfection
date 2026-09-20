import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { hero } from "../data/content.js";
import Odometer from "./Odometer.jsx";
import SplitWords from "./SplitWords.jsx";

/**
 * HERO — "البث"
 * Live view-count bar (odometer + cyan dot), giant Kufi wordmark
 * bottom-anchored, platform ticker. The odometer rolls itself
 * (see Odometer); this timeline choreographs the entrance only.
 */
export default function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero__live", { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
          .fromTo(".hero__sub", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1.05)
          .fromTo(".hero__ticker", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 1.25);
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section className="hero" id="top" ref={ref}>
      <span className="hero__frame" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__live" title={hero.odometer.label}>
          <span className="hero__dot" aria-hidden="true" />
          <span className="hero__live-tag">{hero.odometer.liveLabel}</span>
          <Odometer value={hero.odometer.value} liveTick={hero.odometer.tick} />
          <span className="hero__live-caption">{hero.odometer.label}</span>
        </div>

        <div className="hero__stage">
          <SplitWords
            as="h1"
            lines={hero.wordmark}
            mode="load"
            delay={0.3}
            stagger={0}
            className="hero__wordmark"
          />
          <SplitWords
            as="p"
            lines={hero.tagline}
            mode="load"
            delay={0.55}
            className="hero__tagline"
          />
          <p className="hero__sub">{hero.sub}</p>
        </div>
      </div>

      <div className="ticker hero__ticker" aria-hidden="true">
        <div className="ticker__row" style={{ "--ticker-dur": "24s" }}>
          {[0, 1].map((k) => (
            <div className="ticker__seq" key={k}>
              {hero.platforms.map((p, i) => (
                <span className="ticker__item" key={i}>
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
