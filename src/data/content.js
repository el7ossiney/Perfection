/**
 * Website content — sourced verbatim from "Website Content.pdf".
 * English-first (LTR). No invented claims: only what the document states.
 */

export const site = {
  name: "Perfection",
  handle: "@perfection.agency",
  email: "hello@perfection.agency",
  phone: "+20 100 000 0000",
  phoneIntl: "+201000000000",
  whatsapp: "https://wa.me/201000000000",
  location: "Egypt & GCC",
  // TODO(user): official Linktree links pending — swap "#" for real URLs
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ],
};

export const nav = [
  { label: "Services", to: "/services" },
  { label: "How We Work", to: "/", hash: "#process" },
  { label: "Brands", to: "/", hash: "#brands" },
];

export const navCta = { label: "Contact Us", to: "/contact" };

export const hero = {
  badge: "Full-Service Marketing Agency",
  wordmark: "Perfection",
  heading: "We Build Brands That Get Seen, Trusted & Chosen.",
  sub: "We help businesses build stronger brands, reach the right audience, and turn attention into real business growth.",
  cta: { label: "Explore Our Services", to: "/services" },
  platforms: ["TikTok", "Instagram", "Snapchat", "YouTube", "LinkedIn", "X"],
};

/** Who We Are — the agency's own profile card */
export const profile = {
  handle: "@perfection",
  verified: true,
  name: "Perfection",
  bio: "Perfection is a full-service marketing agency helping brands grow through creativity, strategy, and performance. We create impactful marketing experiences that strengthen brands, engage audiences, and drive real business results.",
};

/** What We Do — icon key maps to ServiceIcon in Services.jsx */
export const services = [
  {
    slug: "branding-identity",
    icon: "brand",
    title: "Branding & Identity",
    desc: "Build a memorable brand through strategic positioning, logo design, visual identity systems, and guidelines that help you stand out and connect with your audience.",
  },
  {
    slug: "social-media-management",
    icon: "social",
    title: "Social Media Management",
    desc: "Grow your online presence through strategic content planning, creative management, audience engagement, and consistent communication across social media platforms.",
  },
  {
    slug: "performance-marketing",
    icon: "chart",
    title: "Performance Marketing",
    desc: "Plan, launch, and optimize data-driven advertising campaigns that generate qualified leads, increase conversions, and maximize your marketing return on investment.",
  },
  {
    slug: "content-creation-production",
    icon: "camera",
    title: "Content Creation & Production",
    desc: "Create high-quality content through photography, videography, motion graphics, and creative campaigns designed to strengthen your brand presence.",
  },
  {
    slug: "advertising-management",
    icon: "target",
    title: "Advertising Management",
    desc: "Manage and optimize targeted advertising campaigns that increase brand visibility, attract potential customers, and deliver measurable business results.",
  },
  {
    slug: "seo",
    icon: "search",
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your search rankings and attract valuable organic traffic through technical optimization, content strategy, and SEO best practices.",
  },
  {
    slug: "media-production-motion-design",
    icon: "film",
    title: "Media Production & Motion Design",
    desc: "Produce engaging videos, motion graphics, and visual experiences that communicate your message and create lasting audience impact.",
  },
  {
    slug: "website-design",
    icon: "monitor",
    title: "Website Design",
    desc: "Design modern, user-friendly websites that enhance credibility, improve customer experience, and support business growth through better conversions.",
  },
];

export const servicesPage = {
  eyebrow: "Services",
  title: "What We Do",
  lead: "Full-service marketing — from brand identity to performance. Explore each service, then let's talk about yours.",
};

export const contactPage = {
  eyebrow: "Contact Us",
  title: "Ready to Grow Your Brand?",
  lead: "Let's discuss your goals and create a strategy that drives real business growth.",
};

export const serviceCta = "Explore Service";

export const processSection = {
  eyebrow: "How We Work",
  title: "From Strategy to Measurable Growth",
  lead: "Our process combines research, creativity, and performance-driven marketing to help businesses build stronger brands, attract customers, and achieve sustainable growth.",
  cta: { label: "Let's Grow Your Brand", to: "/contact" },
};

export const processSteps = [
  {
    title: "Discovery",
    desc: "We analyze your business, target audience, competitors, and market opportunities to create a strong foundation for branding and marketing success.",
  },
  {
    title: "Strategy",
    desc: "We develop a customized marketing strategy, defining your positioning, messaging, content direction, and the right channels to achieve your goals.",
  },
  {
    title: "Execution",
    desc: "We bring the strategy to life through creative design, content, and marketing campaigns. Every detail is aligned with your brand to ensure consistency, quality, and impact.",
  },
  {
    title: "Optimization",
    desc: "We track performance, analyze results, and continuously optimize campaigns to improve ROI, increase conversions, and support long-term growth.",
  },
];

/** Brands That Trust Perfection — logos only, no testimonials (per the document) */
export const brands = {
  eyebrow: "Brands We've Worked With",
  title: "Brands That Trust Perfection",
  lead: "We're proud to collaborate with businesses across Egypt and the GCC, helping brands strengthen their presence, connect with their audiences, and achieve sustainable growth through strategic marketing and creative excellence.",
  // TODO(user): replace placeholder slots with the official client logo files
  logos: Array.from({ length: 10 }, (_, i) => `LOGO ${String(i + 1).padStart(2, "0")}`),
};

export const cta = {
  title: "Ready to Grow Your Brand?",
  lead: "Let's discuss your goals and create a strategy that drives real business growth.",
  buttonLabel: "Contact Us",
  placeholder: "Tell us about your brand…",
  whatsappLabel: "Or message us on WhatsApp",
};

export const footer = {
  blurb: "Perfection — a full-service marketing agency helping brands across Egypt and the GCC grow through creativity, strategy, and performance.",
  serviceCol: { title: "Services", links: services.map((s) => s.title) },
  companyCol: {
    title: "Agency",
    links: ["About", "How We Work", "Brands", "Contact"],
  },
  socialCol: { title: "Follow Us" },
  legal: "© 2026 Perfection — All rights reserved",
  madeIn: "Egypt & GCC",
};
