import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import IndexCard from "../components/IndexCard.jsx";
import Rail from "../components/Rail.jsx";
import SvcRow from "../components/SvcRow.jsx";
import Ready from "../components/Ready.jsx";
import { useLink } from "../lib/navigation.js";
import { servicesPage, services } from "../data/content.js";

/** WHAT WE DO — hero split, marquee, sticky rail + 8 editorial rows. */
export default function ServicesPage() {
  const link = useLink();
  const { pathname } = useLocation();

  return (
    <>
      <section className="page-hero svc-hero">
        <div className="container svc-hero-grid">
          <div className="svc-hero-copy">
            <p className="kicker chip glass">{servicesPage.chip}</p>
            <h1>
              {servicesPage.titleTop}
              <br />
              <span className="grad-text">{servicesPage.titleGrad}</span>
            </h1>
            <p className="hero-sub">{servicesPage.sub}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" {...link("/contact")}>
                {servicesPage.ctaLabel}
              </a>
            </div>
          </div>

          <IndexCard {...servicesPage.card} />
        </div>
      </section>

      {/* Decorative duplicate track — kept out of tab order */}
      <div className="svc-marquee" aria-hidden="true">
        <div className="svc-marquee-track">
          {[...servicesPage.marquee, ...servicesPage.marquee].map((item, i) => (
            <Fragment key={i}>
              <a tabIndex={-1} {...link(pathname, `#${item.anchor}`)}>
                {item.label}
              </a>
              <i className="dot" />
            </Fragment>
          ))}
        </div>
      </div>

      <section className="svc-section">
        <div className="container svc-split">
          <Rail rail={servicesPage.rail} />

          <div className="svc-list">
            {services.map((s, i) => (
              <SvcRow
                key={s.anchor}
                id={s.anchor}
                n={String(i + 1).padStart(2, "0")}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                ctaLabel={servicesPage.rowCtaLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <Ready />
    </>
  );
}
