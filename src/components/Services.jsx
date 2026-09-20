import { profile, services } from "../data/content.js";
import { scrollToId } from "../lib/gsap.js";
import CountTo from "./CountTo.jsx";
import Verified from "./Verified.jsx";

/**
 * SERVICES — صفحة بروفايل الوكالة نفسها.
 * Profile header, then the six services as an elevated bio-links list.
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
            ب
          </span>
          <div className="profile__id">
            <p className="profile__handle">
              <bdi dir="ltr">{profile.handle}</bdi> <Verified />
            </p>
            <h2 className="profile__name">{profile.name}</h2>
            <p className="profile__bio">{profile.bio}</p>
          </div>
          <ul className="profile__stats">
            {profile.stats.map((s, i) => (
              <li key={i}>
                <CountTo value={s.value} suffix={s.suffix || ""} className="profile__stat-v" />
                <span className="profile__stat-l">{s.label}</span>
              </li>
            ))}
          </ul>
        </header>

        <ul className="links">
          {services.map((s, i) => (
            <li key={s.num} className="will-reveal" style={{ "--i": i % 3 }}>
              <a className="links__a" href="#contact" onClick={go}>
                <span className="links__num">{s.num}</span>
                <span className="links__body">
                  <span className="links__title">{s.title}</span>
                  <span className="links__desc">{s.desc}</span>
                </span>
                <svg className="links__arrow" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19 12H5m0 0l6-6m-6 6l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
