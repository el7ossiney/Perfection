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
 * Cross-page + in-page navigation (BrowserRouter + in-page anchors):
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

const PAGE_META = {
  "/": {
    title: "Perfection — Full-Service Marketing Agency",
    description:
      "Perfection is a full-service marketing agency helping brands across Egypt & the GCC grow through branding, social media, and performance marketing.",
  },
  "/about": {
    title: "Who We Are — Perfection",
    description:
      "A full-service marketing agency built on vision, mission, and craft — the team behind the brands. Meet Perfection.",
  },
  "/services": {
    title: "What We Do — Perfection",
    description:
      "Branding & identity, social media management, performance marketing, content production, SEO, and website design — services built for growth.",
  },
  "/process": {
    title: "How We Work — Perfection",
    description:
      "Our four-step process: Discovery, Strategy, Execution, Optimization — from strategy to measurable growth for your brand.",
  },
  "/projects": {
    title: "Our Work — Perfection",
    description:
      "Selected projects, real results — brand identities, guidelines, and social media campaigns we've shipped for clients across Egypt & the GCC.",
  },
  "/branding": {
    title: "Branding & Identity Projects — Perfection",
    description:
      "Brand identities and guideline systems we've built — from wordmarks and color systems to full brand books. See the branding work.",
  },
  "/social-media": {
    title: "Social Media Projects — Perfection",
    description:
      "Social media feeds and post systems we've designed — Instagram campaigns in each client's own brand identity. See the social work.",
  },
  "/contact": {
    title: "Contact Us — Perfection",
    description:
      "Ready to grow your brand? Tell us about your goals — Egypt & the GCC. Let's create a strategy that drives real business growth.",
  },
};

const SITE_URL = "https://perfection-agency.com";

/** Set (or create) a meta tag's content. */
function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Apply a page's title/description/canonical/OG/Twitter meta.
 *  Used by ScrollManager for static routes and by ProjectShow for
 *  per-project pages. */
export function applyPageMeta(title, description, pathname) {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", `${SITE_URL}${pathname}`);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE_URL}${pathname}`;
}

/** Per-route title/description/canonical/OG, scroll reset, anchor jumps. */
export function ScrollManager() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? PAGE_META["/"];
    applyPageMeta(meta.title, meta.description, pathname);

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
