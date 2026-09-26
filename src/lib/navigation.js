import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * In-page anchor scroll. The fixed header offset comes from the CSS
 * (scroll-padding-top on <html>); reduced motion is respected.
 */
export function scrollToId(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

/**
 * Cross-page + in-page navigation that works with HashRouter:
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

/**
 * Spreadable anchor props for router links:
 *   const link = useLink();
 *   <a {...link("/services", "#branding")}>…</a>
 */
export function useLink() {
  const go = useGo();

  return (to, hash) => ({
    href: hash ? `${to}${hash}` : to,
    onClick: (e) => {
      e.preventDefault();
      go(to, hash);
    },
  });
}

const PAGE_TITLES = {
  "/": "Perfection — Full-Service Marketing Agency",
  "/about": "Who We Are — Perfection",
  "/services": "What We Do — Perfection",
  "/process": "How We Work — Perfection",
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
    // Jump, don't glide, on plain page changes (html has scroll-behavior: smooth)
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname, state]);

  return null;
}
