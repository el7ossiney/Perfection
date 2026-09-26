import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";
import { hero } from "../data/content.js";
import { scrollToId } from "../lib/gsap.js";
import SplitWords from "./SplitWords.jsx";

/**
 * HERO — badge chip, giant Perfection wordmark, the document's
 * heading/sub/CTA, platform ticker. Entrance timeline only.
 */
export default function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero__badge", { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
          .fromTo(".hero__sub", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
          .fromTo(".hero__cta", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, 1.15)
          .fromTo(".hero__ticker", { opacity: 0 }, { opacity: 1, duration: 0.9 }, 1.3);
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  const go = (e, href) => {
    e.preventDefault();
    scrollToId(href);
  };

  return (
    <section className="hero" id="top" ref={ref}>
      <span className="hero__frame" aria-hidden="true" />
      <div className="hero__inner container">
        <p className="hero__badge">
          <span className="hero__dot" aria-hidden="true" />
          {hero.badge}
        </p>

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
            lines={hero.heading}
            mode="load"
            delay={0.55}
            className="hero__heading"
          />
          <p className="hero__sub">{hero.sub}</p>
          <a
            className="btn btn--glass hero__cta"
            href={hero.cta.href}
            onClick={(e) => go(e, hero.cta.href)}
          >
            {hero.cta.label}
            <svg className="hero__cta-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="ticker hero__ticker" aria-hidden="true">
        <div className="ticker__row" style={{ "--ticker-dur": "26s" }}>
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
