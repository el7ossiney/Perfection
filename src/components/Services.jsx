import { profile, services, serviceCta } from "../data/content.js";
import { useGo } from "../lib/navigation.js";
import Verified from "./Verified.jsx";
import ServiceIcon from "./ServiceIcon.jsx";

/**
 * SERVICES (home) — Who We Are as the agency's profile card,
 * then the eight services as an elevated list with icons.
 * Each "Explore Service" opens the service's anchor on /services.
 */
export default function Services() {
  const go = useGo();

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
              <a
                className="links__a"
                href={`#/services`}
                onClick={(e) => {
                  e.preventDefault();
                  go("/services", `#${s.slug}`);
                }}
              >
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
