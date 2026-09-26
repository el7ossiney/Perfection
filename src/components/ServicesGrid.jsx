import ServiceIcon from "./ServiceIcon.jsx";
import { services, servicesSection } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Home "What We Do" — the 8 equal-height service cards. */
export default function ServicesGrid() {
  const link = useLink();

  return (
    <section id="services" className="services">
      <div className="container">
        <header className="section-head reveal">
          <p className="kicker">{servicesSection.kicker}</p>
          <h2>{servicesSection.title}</h2>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.anchor} className="service-card glass reveal">
              <span className="svc-no">{String(i + 1).padStart(2, "0")}</span>
              <ServiceIcon name={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a className="svc-link" {...link("/services", `#${s.anchor}`)}>
                Explore Service <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
