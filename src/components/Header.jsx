import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { nav, navCta } from "../data/content.js";
import { useLink } from "../lib/navigation.js";

/** Fixed glass header — desktop links, right-side drawer + overlay on mobile. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const link = useLink();

  // Route change closes the drawer
  useEffect(() => setOpen(false), [pathname]);

  // Esc closes; leaving mobile breakpoints closes
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Logo />

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map((l) => (
            <a
              key={l.label}
              className={!l.hash && pathname === l.to ? "is-active" : undefined}
              {...link(l.to, l.hash)}
            >
              {l.label}
            </a>
          ))}
          <a
            className={`nav-cta ${pathname === navCta.to ? "is-active-cta" : ""}`}
            {...link(navCta.to)}
          >
            {navCta.label}
          </a>

          {/* Brand lockup pinned at the bottom of the mobile drawer */}
          <a className="drawer-brand" aria-label="perfection — home" {...link("/")}>
            <img
              className="brand-logo"
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Perfection logo"
            />
            <span className="brand-word">perfection</span>
          </a>
        </nav>

        {open && (
          <div className="nav-overlay is-open" aria-hidden="true" onClick={() => setOpen(false)} />
        )}
        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
