import { profile, services, serviceCta } from "../data/content.js";
import { scrollToId } from "../lib/gsap.js";
import Verified from "./Verified.jsx";

/** Minimal line icon per service (the document: icons, not big numbers). */
function ServiceIcon({ name }) {
  const paths = {
    brand: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    social: (
      <>
        <circle cx="6.5" cy="12" r="2.5" />
        <circle cx="17.5" cy="5.5" r="2.5" />
        <circle cx="17.5" cy="18.5" r="2.5" />
        <path d="M8.8 10.8l6.4-4M8.8 13.2l6.4 4" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19h16" />
        <path d="M5 15l4.5-4.5 3.5 3.5L19 8" />
        <path d="M19 12V8h-4" />
      </>
    ),
    camera: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <circle cx="12" cy="13.5" r="3.5" />
        <path d="M9 7l1.2-2.4h3.6L15 7" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M16.2 16.2L21 21" />
      </>
    ),
    film: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M10 9.5l5 2.5-5 2.5z" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4.5" width="18" height="12.5" rx="2.5" />
        <path d="M9.5 21h5M12 17v4" />
      </>
    ),
  };
  return (
    <svg className="svc-icon" viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[name]}
      </g>
    </svg>
  );
}

/**
 * SERVICES — Who We Are as the agency's profile card,
 * then the eight services as an elevated list with icons.
 */
export default function Services() {
  const go = (e) => {
    e.preventDefault();
    scrollToId("#contact");
  };

  return (
    <section className="svc section" id="services">
      <div className="container">
        <header className="profile will-reveal">
          <span className="profile__avatar" aria-hidden="true">
            P
          </span>
          <div className="profile__id">
            <p className="profile__handle">
              <bdi dir="ltr">{profile.handle}</bdi> <Verified />
            </p>
            <h2 className="profile__name">{profile.name}</h2>
            <p className="profile__bio">{profile.bio}</p>
          </div>
        </header>

        <h2 className="links__heading will-reveal">What We Do</h2>

        <ul className="links">
          {services.map((s, i) => (
            <li key={s.title} className="will-reveal" style={{ "--i": i % 3 }}>
              <a className="links__a" href="#contact" onClick={go}>
                <span className="links__icon">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="links__body">
                  <span className="links__title">{s.title}</span>
                  <span className="links__desc">{s.desc}</span>
                </span>
                <span className="links__cta">
                  {serviceCta}
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
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
