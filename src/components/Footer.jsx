import { footer, site } from "../data/content.js";
import Logo from "./Logo.jsx";

/** Minimal social glyphs — Instagram, LinkedIn, Facebook, TikTok, X. */
function SocialIcon({ name }) {
  const shapes = {
    Instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1.3" fill="currentColor" />
      </>
    ),
    LinkedIn: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="7" y="10.5" width="2.4" height="6.5" fill="currentColor" />
        <circle cx="8.2" cy="7.6" r="1.4" fill="currentColor" />
        <path d="M11.8 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="11.8" y="10.5" width="2.3" height="6.5" fill="currentColor" />
      </>
    ),
    Facebook: (
      <path
        d="M14.5 8.5h2V5.6h-2.3c-2.2 0-3.5 1.4-3.5 3.7v1.9H8.7v2.9H10.7V21h3v-6.9h2.3l.4-2.9h-2.7V9.6c0-.7.3-1.1 1.1-1.1z"
        fill="currentColor"
      />
    ),
    TikTok: (
      <path
        d="M14.2 3h2.4c.2 1.6 1.1 3 2.9 3.3v2.4c-1.1 0-2.1-.3-3-.9v5.9A5.1 5.1 0 1 1 11.4 8.6v2.5a2.6 2.6 0 1 0 1.9 2.5V3z"
        fill="currentColor"
      />
    ),
    X: (
      <path
        d="M4 4h3.6l3.7 5 4.3-5H21l-6.6 7.6L21.4 20h-3.7l-4-5.4L9 20H4.6l7-8L4 4z"
        fill="currentColor"
      />
    ),
  };
  return (
    <svg className="foot__social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {shapes[name]}
    </svg>
  );
}

/**
 * FOOTER — the dark violet anchor: brand, link columns, social
 * icons (official links pending via the company Linktree).
 */
export default function Footer() {
  const cols = [
    { title: footer.serviceCol.title, links: footer.serviceCol.links, href: "#services" },
    { title: footer.companyCol.title, links: footer.companyCol.links, href: "#top" },
  ];

  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          <div className="foot__brand">
            <Logo />
            <p className="foot__blurb">{footer.blurb}</p>
            <div className="foot__contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
              <span>{site.location}</span>
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

          <div className="foot__col">
            <h3 className="foot__col-title">{footer.socialCol.title}</h3>
            <ul className="foot__socials">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} title={s.label}>
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="foot__ghost" aria-hidden="true">
        Perfection
      </div>

      <div className="foot__legal container">
        <span>{footer.legal}</span>
        <span>{footer.madeIn}</span>
      </div>
    </footer>
  );
}
