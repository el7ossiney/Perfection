import { useRef } from "react";
import { servicesPage, services } from "../data/content.js";
import { usePageReveal } from "../lib/gsap.js";
import { useGo } from "../lib/navigation.js";
import PageHero from "../components/PageHero.jsx";
import ServiceIcon from "../components/ServiceIcon.jsx";

/**
 * SERVICES PAGE — every service as an anchored detail block
 * (home cards link here with #slug), each closing on Contact Us.
 */
export default function ServicesPage() {
  const ref = useRef(null);
  usePageReveal(ref);
  const go = useGo();

  return (
    <div ref={ref}>
      <PageHero eyebrow={servicesPage.eyebrow} title={servicesPage.title} lead={servicesPage.lead} />

      <section className="spage section">
        <div className="container">
          <div className="spage__list">
            {services.map((s, i) => (
              <article
                className="spage__row will-reveal"
                id={s.slug}
                key={s.slug}
                style={{ "--i": i % 2 }}
              >
                <span className="spage__icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <div className="spage__body">
                  <h2 className="spage__title">{s.title}</h2>
                  <p className="spage__desc">{s.desc}</p>
                  <button
                    className="spage__cta"
                    onClick={() => go("/contact")}
                  >
                    Contact Us
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12h14m0 0l-6-6m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <span className="spage__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
