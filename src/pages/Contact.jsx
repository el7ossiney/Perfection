import { useRef } from "react";
import { contactPage, site, cta } from "../data/content.js";
import { usePageReveal } from "../lib/gsap.js";
import PageHero from "../components/PageHero.jsx";

/**
 * CONTACT PAGE — the closer content on its own page:
 * composer (mailto), WhatsApp, direct info, socials.
 */
export default function Contact() {
  const ref = useRef(null);
  usePageReveal(ref);

  return (
    <div ref={ref}>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lead={contactPage.lead} />

      <section className="cpage section">
        <div className="container cpage__grid">
          <div className="cpage__main will-reveal">
            <a
              className="composer"
              href={`mailto:${site.email}?subject=${encodeURIComponent("Contact Us — Perfection")}`}
            >
              <span className="composer__ph">{cta.placeholder}</span>
              <span className="composer__send" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3.4 20.4l17.8-8.4L3.4 3.6l.1 6.5 12.1 1.9-12.1 1.9z"
                    fill="currentColor"
                  />
                </svg>
                <span className="visually-hidden">Send</span>
              </span>
            </a>

            <div className="cpage__alt">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                {cta.whatsappLabel}
              </a>
            </div>
          </div>

          <aside className="cpage__info will-reveal">
            <h2 className="cpage__info-title">Direct</h2>
            <ul>
              <li>
                <span>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
              </li>
              <li>
                <span>Based in</span>
                {site.location}
              </li>
            </ul>
            <h2 className="cpage__info-title">Follow Us</h2>
            <ul className="cpage__socials">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
