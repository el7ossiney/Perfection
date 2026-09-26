import { cta, site } from "../data/content.js";
import SplitWords from "./SplitWords.jsx";

/**
 * CTA — "Ready to Grow Your Brand?" with the DM-style composer
 * as the Contact Us action (mailto), WhatsApp secondary.
 */
export default function CTA() {
  return (
    <section className="cta section" id="contact">
      <div className="container cta__box">
        <SplitWords as="h2" lines={cta.title} className="cta__title" />
        <p className="cta__lead will-reveal">{cta.lead}</p>

        <a
          className="composer will-reveal"
          href={`mailto:${site.email}?subject=${encodeURIComponent("Contact Us — Perfection")}`}
        >
          <span className="composer__ph">{cta.placeholder}</span>
          <span className="composer__send" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3.4 20.4l17.8-8.4L3.4 3.6l.1 6.5 12.1 1.9-12.1 1.9z" fill="currentColor" />
            </svg>
            <span className="visually-hidden">{cta.buttonLabel}</span>
          </span>
        </a>

        <div className="cta__alt will-reveal">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">
            {cta.whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
