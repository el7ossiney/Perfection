import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { nav, navCta } from "../data/content.js";
import { scrollToId } from "../lib/gsap.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header className={`nav ${scrolled || open ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Logo />
        <nav className="nav__links" aria-label="التنقل الرئيسي">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--glass nav__cta"
          href={navCta.href}
          onClick={(e) => go(e, navCta.href)}
        >
          {navCta.label}
        </a>
        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "أغلق القائمة" : "افتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        <nav className="nav__drawer-links container" aria-label="قائمة الجوال">
          {[...nav, navCta].map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
