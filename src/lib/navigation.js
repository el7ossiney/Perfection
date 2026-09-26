import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "./gsap.js";

/**
 * Cross-page + in-page navigation that works with HashRouter and
 * stays correct next to GSAP pin spacers (ScrollToPlugin under the
 * hood). Usage:
 *   const go = useGo();
 *   go("/services");            // page
 *   go("/", "#process");        // page + anchor
 */
export function useGo() {
  const navigate = useNavigate();
  const location = useLocation();

  return (to, hash) => {
    if (hash && location.pathname === to) {
      scrollToId(hash);
      return;
    }
    navigate(to, hash ? { state: { scroll: hash } } : undefined);
  };
}

const PAGE_TITLES = {
  "/": "Perfection — Full-Service Marketing Agency",
  "/services": "Services — Perfection",
  "/contact": "Contact Us — Perfection",
};

/** Per-route document title, scroll reset, and deferred anchor jumps. */
export function ScrollManager() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES["/"];
    const target = state?.scroll;
    if (target) {
      const t = setTimeout(() => scrollToId(target), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}
