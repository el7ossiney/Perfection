import { footer, site } from "../data/content.js";
import Logo from "./Logo.jsx";

/**
 * FOOTER — the dark anchor. Ghost outline wordmark (stroke, no
 * gradient), contact columns, quiet legal row.
 */
export default function Footer() {
  const cols = [
    { title: footer.serviceCol.title, links: footer.serviceCol.links, href: "#services" },
    { title: footer.companyCol.title, links: footer.companyCol.links, href: "#top" },
    { title: footer.socialCol.title, links: footer.socialCol.links, href: "#top" },
  ];

  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          <div className="foot__brand">
            <Logo inverse />
            <p className="foot__blurb">{footer.blurb}</p>
            <div className="foot__contact">
              <a href={`mailto:${site.email}`} dir="ltr">
                {site.email}
              </a>
              <a href={`tel:${site.phoneIntl}`} dir="ltr">
                {site.phone}
              </a>
              <span>{site.city}</span>
            </div>
          </div>

          {cols.map((col) => (
            <nav className="foot__col" key={col.title} aria-label={col.title}>
              <h3 className="foot__col-title">{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href={col.href}>{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="foot__ghost" aria-hidden="true">
        برفكشن
      </div>

      <div className="foot__legal container">
        <span>{footer.legal}</span>
        <span>{footer.madeIn}</span>
      </div>
    </footer>
  );
}
