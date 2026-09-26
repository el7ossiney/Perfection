/**
 * Website content — verbatim from "Website Content.pdf" + the ui/ design.
 * English (LTR). No invented claims: only what the document states.
 */

export const site = {
  website: "www.perfection-agency.com",
  coverage: "Egypt & the GCC",
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
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/about" },
  { label: "What We Do", to: "/services" },
  { label: "How We Work", to: "/process" },
  { label: "Clients", to: "/", hash: "#clients" },
];

export const navCta = { label: "Contact Us", to: "/contact" };

export const growCta = "Let’s Grow Your Brand";

/* ---------- HOME ---------- */

export const hero = {
  chip: "Full-Service Marketing Agency — Egypt & the GCC",
  titleTop: "We Build Brands That Get",
  titleGrad: "Seen, Trusted & Chosen.",
  sub: "We help businesses build stronger brands, reach the right audience, and turn attention into real business growth.",
  ctaLabel: "Explore Our Services",
  ctaGhostLabel: "How We Work",
  card: {
    label: "How we work — quick index",
    title: "How We Work",
    items: [
      { n: "01", label: "Discovery", hash: "#discovery" },
      { n: "02", label: "Strategy", hash: "#strategy" },
      { n: "03", label: "Execution", hash: "#execution" },
      { n: "04", label: "Optimization", hash: "#optimization" },
    ],
  },
};

export const whoWeAre = {
  kicker: "Who We Are",
  title: "Full-service. Creative. Performance-driven.",
  lead: "Perfection is a full-service marketing agency helping brands grow through creativity, strategy, and performance. We create impactful marketing experiences that strengthen brands, engage audiences, and drive real business results.",
  cards: [
    {
      title: "Vision",
      text: "To become the leading influencer marketing agency across the GCC, delivering impactful campaigns that set industry standards and inspire brand-influencer collaborations worldwide.",
    },
    {
      title: "Mission",
      text: "Empowering businesses to achieve their marketing objectives by connecting them with the ideal influencers, supported by innovative strategies, a credible network, and seamless execution.",
    },
  ],
};

export const servicesSection = {
  kicker: "What We Do",
  title: "Services built for growth",
};

/** The 8 services — anchors match the services page rows. */
export const services = [
  {
    anchor: "branding",
    icon: "brand",
    title: "Branding & Identity",
    indexLabel: "Branding & Identity",
    desc: "Build a memorable brand through strategic positioning, logo design, visual identity systems, and guidelines that help you stand out and connect with your audience.",
  },
  {
    anchor: "social-media",
    icon: "social",
    title: "Social Media Management",
    indexLabel: "Social Media Management",
    desc: "Grow your online presence through strategic content planning, creative management, audience engagement, and consistent communication across social media platforms.",
  },
  {
    anchor: "performance-marketing",
    icon: "chart",
    title: "Performance Marketing",
    indexLabel: "Performance Marketing",
    desc: "Plan, launch, and optimize data-driven advertising campaigns that generate qualified leads, increase conversions, and maximize your marketing return on investment.",
  },
  {
    anchor: "content-creation",
    icon: "camera",
    title: "Content Creation & Production",
    indexLabel: "Content Creation & Production",
    desc: "Create high-quality content through photography, videography, motion graphics, and creative campaigns designed to strengthen your brand presence.",
  },
  {
    anchor: "advertising-management",
    icon: "target",
    title: "Advertising Management",
    indexLabel: "Advertising Management",
    desc: "Manage and optimize targeted advertising campaigns that increase brand visibility, attract potential customers, and deliver measurable business results.",
  },
  {
    anchor: "seo",
    icon: "search",
    title: "Search Engine Optimization (SEO)",
    indexLabel: "Search Engine Optimization",
    desc: "Improve your search rankings and attract valuable organic traffic through technical optimization, content strategy, and SEO best practices.",
  },
  {
    anchor: "media-production",
    icon: "film",
    title: "Media Production & Motion Design",
    indexLabel: "Media Production & Motion",
    desc: "Produce engaging videos, motion graphics, and visual experiences that communicate your message and create lasting audience impact.",
  },
  {
    anchor: "website-design",
    icon: "monitor",
    title: "Website Design",
    indexLabel: "Website Design",
    desc: "Design modern, user-friendly websites that enhance credibility, improve customer experience, and support business growth through better conversions.",
  },
];

export const processSection = {
  kicker: "How We Work",
  title: "From Strategy to Measurable Growth",
  sub: "Our process combines research, creativity, and performance-driven marketing to help businesses build stronger brands, attract customers, and achieve sustainable growth.",
  ctaLabel: growCta,
  steps: [
    {
      n: "01",
      anchor: "discovery",
      icon: "discover",
      title: "Discovery",
      desc: "We analyze your business, target audience, competitors, and market opportunities to create a strong foundation for branding and marketing success.",
    },
    {
      n: "02",
      anchor: "strategy",
      icon: "strategy",
      title: "Strategy",
      desc: "We develop a customized marketing strategy, defining your positioning, messaging, content direction, and the right channels to achieve your goals.",
    },
    {
      n: "03",
      anchor: "execution",
      icon: "rocket",
      title: "Execution",
      desc: "We bring the strategy to life through creative design, content, and marketing campaigns. Every detail is aligned with your brand to ensure consistency, quality, and impact.",
    },
    {
      n: "04",
      anchor: "optimization",
      icon: "optimize",
      title: "Optimization",
      desc: "We track performance, analyze results, and continuously optimize campaigns to improve ROI, increase conversions, and support long-term growth.",
    },
  ],
};

export const clients = {
  kicker: "Our Clients",
  title: "Brands That Trust Perfection",
  sub: "We’re proud to collaborate with businesses across Egypt and the GCC, helping brands strengthen their presence, connect with their audiences, and achieve sustainable growth through strategic marketing and creative excellence.",
  // TODO(user): replace placeholder marks with the official client logo files
  logos: ["hex", "circle", "square", "triangle", "valley", "star"],
};

export const ready = {
  title: "Ready to Grow Your Brand?",
  lead: "Let’s discuss your goals and create a strategy that drives real business growth.",
  buttonLabel: "Contact Us",
};

export const footer = {
  blurb: "A full-service marketing agency helping brands grow through creativity, strategy, and performance.",
  legal: "© 2026 Perfection. All rights reserved.",
};

/* ---------- ABOUT PAGE ---------- */

export const aboutPage = {
  hero: {
    chip: "Who We Are",
    titleTop: "Full-service. Creative.",
    titleGrad: "Performance-driven.",
    sub: "Perfection is a full-service marketing agency helping brands grow through creativity, strategy, and performance. We create impactful marketing experiences that strengthen brands, engage audiences, and drive real business results.",
    card: {
      label: "Page index",
      title: "On this page",
      items: [
        { n: "01", label: "About Perfection", hash: "#about-perfection" },
        { n: "02", label: "Vision & Mission", hash: "#vision-mission" },
        { n: "03", label: "Brand Voice", hash: "#brand-voice" },
        { n: "04", label: "Contact Us", to: "/contact" },
      ],
    },
  },
  rail: {
    kicker: "About Perfection",
    titleTop: "A dynamic",
    titleGrad: "marketing agency.",
    sub: "A dynamic marketing agency specializing in social media management and branding.",
    ctaLabel: growCta,
  },
  rows: [
    {
      id: "vision-mission",
      n: "01",
      title: "What we do",
      desc: "We help businesses establish a strong online presence, create impactful brand identities, and engage their audience effectively. Our expertise lies in crafting strategic marketing campaigns, designing visually compelling content, and optimizing social media platforms to drive growth and success.",
    },
    {
      n: "02",
      title: "Vision",
      desc: "To become the leading influencer marketing agency across the GCC, delivering impactful campaigns that set industry standards and inspire brand-influencer collaborations worldwide.",
    },
    {
      n: "03",
      title: "Mission",
      desc: "Empowering businesses to achieve their marketing objectives by connecting them with the ideal influencers, supported by innovative strategies, a credible network, and seamless execution.",
    },
  ],
  voice: {
    kicker: "Brand Voice",
    title: "How Perfection speaks",
    sub: "Archetype: The Creator & The Sage — 3D clay style, wise and creative.",
    items: [
      { n: "01", title: "Professional & Confident", desc: "We know what works and why." },
      { n: "02", title: "Innovative & Forward-Thinking", desc: "Always ahead of trends." },
      { n: "03", title: "Engaging & Persuasive", desc: "Inspires action and trust." },
      { n: "04", title: "Elegant & Premium", desc: "Polished, refined, and high-end." },
      { n: "05", title: "Clear & Direct", desc: "No fluff — just impactful messaging." },
    ],
  },
};

/* ---------- SERVICES PAGE ---------- */

export const servicesPage = {
  chip: "What We Do",
  titleTop: "Services built",
  titleGrad: "for growth.",
  sub: "From branding to performance — everything your brand needs to get seen, trusted, and chosen, delivered by one integrated team.",
  ctaLabel: growCta,
  card: {
    label: "Service index",
    title: "Service Index",
    items: services.map((s, i) => ({
      n: String(i + 1).padStart(2, "0"),
      label: s.indexLabel,
      hash: `#${s.anchor}`,
    })),
  },
  marquee: [
    { label: "Branding", anchor: "branding" },
    { label: "Social Media", anchor: "social-media" },
    { label: "Performance", anchor: "performance-marketing" },
    { label: "Content", anchor: "content-creation" },
    { label: "Advertising", anchor: "advertising-management" },
    { label: "SEO", anchor: "seo" },
    { label: "Motion", anchor: "media-production" },
    { label: "Web Design", anchor: "website-design" },
  ],
  rail: {
    kicker: "All Services",
    titleTop: "08 services.",
    titleGrad: "One team.",
    sub: "Strategy, creative, and performance under one roof — pick a service, or let us build the mix your brand needs.",
    ctaLabel: growCta,
  },
  rowCtaLabel: "Start your project",
};

/* ---------- PROCESS PAGE ---------- */

export const processPage = {
  hero: {
    chip: "How We Work",
    titleTop: "From Strategy to",
    titleGrad: "Measurable Growth.",
    sub: "Our process combines research, creativity, and performance-driven marketing to help businesses build stronger brands, attract customers, and achieve sustainable growth.",
    card: {
      label: "Process index",
      title: "The Process",
      items: processSection.steps.map((s) => ({
        n: s.n,
        label: s.title,
        hash: `#${s.anchor}`,
      })),
    },
  },
  rail: {
    kicker: "The Process",
    titleTop: "Four steps.",
    titleGrad: "One journey.",
    sub: "Every engagement follows the same clear path — so you always know where your brand stands and what comes next.",
    ctaLabel: growCta,
  },
};

/* ---------- CONTACT PAGE ---------- */

export const contactPage = {
  hero: {
    chip: "Contact Us",
    titleTop: "Ready to Grow",
    titleGrad: "Your Brand?",
    sub: "Let’s discuss your goals and create a strategy that drives real business growth.",
    card: {
      label: "Reach us",
      title: "Reach Us",
      items: [
        { n: "01", label: "Send a message", hash: "#contact-form" },
        { n: "02", label: "Follow us", hash: "#follow" },
        { n: "03", label: "Explore first", hash: "#explore" },
      ],
      facts: [
        { label: "Website", value: site.website },
        { label: "Coverage", value: site.coverage },
      ],
    },
  },
  submitLabel: growCta,
  linktreeNote: "All official links in one place on our Linktree.",
  explore: {
    title: "Not sure where to start?",
    text: "Explore our services or see how we work — then come back and tell us about your brand.",
  },
};
