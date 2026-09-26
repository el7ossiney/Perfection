import Logo from "./Logo.jsx";
import SocialIcons from "./SocialIcons.jsx";
import { footer, nav, navCta } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Site footer — brand, links, socials, legal line. */
export default function Footer() {
  const link = useLink();
  const links = [...nav.filter((l) => l.label !== "Home"), navCta];

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{footer.blurb}</p>
        </div>

        <nav className="footer-nav" aria-label="Site links">
          {links.map((l) => (
            <a key={l.label} {...link(l.to, l.hash)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <p>Follow us</p>
          <SocialIcons />
        </div>
      </div>

      <div className="container footer-bottom">
        <small>{footer.legal}</small>
      </div>
    </footer>
  );
}
