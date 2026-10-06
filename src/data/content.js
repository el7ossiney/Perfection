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
  {
    label: "Our Work",
    to: "/projects",
    // Dropdown: the two archive categories (matches projectsPage.categories)
    children: [
      { label: "Branding", to: "/branding" },
      { label: "Social Media", to: "/social-media" },
    ],
  },
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

/* ---------- PROJECTS PAGE (Our Work) ---------- */

export const projectsPage = {
  hero: {
    chip: "Our Work",
    titleTop: "Selected Projects,",
    titleGrad: "Real Results.",
    sub: "A look at the brands we’ve built, the campaigns we’ve run, and the growth we’ve delivered for our clients across Egypt and the GCC.",
    card: {
      label: "Work index",
      title: "The Work",
      items: [
        { n: "01", label: "Project archive", hash: "#projects" },
      ],
      facts: [
        { label: "Coverage", value: site.coverage },
        { label: "Focus", value: "Brand · Content · Performance" },
      ],
    },
  },

  grid: {
    kicker: "Project Archive",
    title: "What We’ve Shipped",
    sub: "Selected work from the studio — new cases are added as they ship.",
  },

  /* Shown when a category page (?cat=…) has no projects yet */
  emptyCategory: "Projects for this category are coming soon — stay tuned.",

  /* Two archive sections. cat: "branding" | "social" — a section renders
     only when it has at least one project, so "Social Media" stays hidden
     until its first entry lands. */
  categories: [
    { key: "branding", label: "Branding & Identity" },
    { key: "social", label: "Social Media" },
  ],

  /* Covers live in public/projects/<id>/cover.webp — 1200×800 (3:2) WebP,
     ≤200KB (scripts/make_cover.py). Gallery pages: same folder, p01.webp…
     natural page ratio, also ≤200KB (scripts/split_projects_to_webp.py). */
  projects: [
    {
      id: "furnivo",
      cat: "branding",
      img: "projects/furnivo/cover.webp",
      gallery: [
        "projects/furnivo/p01.webp",
        "projects/furnivo/p02.webp",
        "projects/furnivo/p03.webp",
        "projects/furnivo/p04.webp",
        "projects/furnivo/p05.webp",
        "projects/furnivo/p06.webp",
        "projects/furnivo/p07.webp",
      ],
      client: "Furnivo",
      title: "Furnivo — Brand Identity",
      blurb: "Full brand identity for a furniture brand — wordmark, color system, stationery, and real-world applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A furniture brand that needed a complete visual identity — one look carrying simplicity, quality, and attention to detail across every touchpoint.",
        approach: "A wordmark-led identity system with a warm, tactile palette, applied across stationery, signage, and product photography.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "better-skin",
      cat: "branding",
      img: "projects/better-skin/cover.webp",
      gallery: [
        "projects/better-skin/p01.webp",
        "projects/better-skin/p02.webp",
        "projects/better-skin/p03.webp",
        "projects/better-skin/p04.webp",
        "projects/better-skin/p05.webp",
        "projects/better-skin/p06.webp",
        "projects/better-skin/p07.webp",
        "projects/better-skin/p08.webp",
        "projects/better-skin/p09.webp",
        "projects/better-skin/p10.webp",
        "projects/better-skin/p11.webp",
        "projects/better-skin/p12.webp",
        "projects/better-skin/p13.webp",
        "projects/better-skin/p14.webp",
        "projects/better-skin/p15.webp",
        "projects/better-skin/p16.webp",
        "projects/better-skin/p17.webp",
        "projects/better-skin/p18.webp",
      ],
      client: "Better Skin",
      title: "Better Skin — Brand Identity",
      blurb: "Skincare brand identity — logo system, color palette, and a soft photographic visual language.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A skincare brand that needed a calm, premium identity across every touchpoint.",
        approach: "A soft photographic language with a clean logo system and a gentle color palette.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "dahih",
      cat: "branding",
      img: "projects/dahih/cover.webp",
      gallery: [
        "projects/dahih/p01.webp",
        "projects/dahih/p02.webp",
        "projects/dahih/p03.webp",
        "projects/dahih/p04.webp",
        "projects/dahih/p05.webp",
        "projects/dahih/p06.webp",
        "projects/dahih/p07.webp",
        "projects/dahih/p08.webp",
        "projects/dahih/p09.webp",
        "projects/dahih/p10.webp",
        "projects/dahih/p11.webp",
        "projects/dahih/p12.webp",
        "projects/dahih/p13.webp",
        "projects/dahih/p14.webp",
        "projects/dahih/p15.webp",
      ],
      client: "Dahih",
      title: "Dahih — Brand Identity",
      blurb: "Playful brand identity with an Arabic wordmark, icon system, and packaging applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A brand that needed a friendly, playful identity that stands out on the shelf.",
        approach: "A playful Arabic wordmark with a bold icon system, applied across packaging.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "emperor",
      cat: "branding",
      img: "projects/emperor/cover.webp",
      gallery: [
        "projects/emperor/p01.webp",
        "projects/emperor/p02.webp",
        "projects/emperor/p03.webp",
        "projects/emperor/p04.webp",
        "projects/emperor/p05.webp",
        "projects/emperor/p06.webp",
        "projects/emperor/p07.webp",
        "projects/emperor/p08.webp",
        "projects/emperor/p09.webp",
        "projects/emperor/p10.webp",
        "projects/emperor/p11.webp",
        "projects/emperor/p12.webp",
        "projects/emperor/p13.webp",
        "projects/emperor/p14.webp",
        "projects/emperor/p15.webp",
      ],
      client: "Emperor",
      title: "Emperor — Brand Identity",
      blurb: "Classic heraldic identity for a premium brand — emblem, crest system, and stationery applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A premium brand that needed a commanding, timeless identity.",
        approach: "A classic heraldic route — emblem and crest system with regal typography, applied across stationery.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "kotin",
      cat: "branding",
      img: "projects/kotin/cover.webp",
      gallery: [
        "projects/kotin/p01.webp",
        "projects/kotin/p02.webp",
        "projects/kotin/p03.webp",
        "projects/kotin/p04.webp",
        "projects/kotin/p05.webp",
        "projects/kotin/p06.webp",
        "projects/kotin/p07.webp",
        "projects/kotin/p08.webp",
        "projects/kotin/p09.webp",
        "projects/kotin/p10.webp",
        "projects/kotin/p11.webp",
        "projects/kotin/p12.webp",
        "projects/kotin/p13.webp",
        "projects/kotin/p14.webp",
        "projects/kotin/p15.webp",
      ],
      client: "Kotin",
      title: "Kotin — Brand Identity",
      blurb: "Identity for a natural cotton brand — airy wordmark, earthy palette, and photography direction.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A natural fiber brand that needed an identity as soft and honest as its product.",
        approach: "An airy wordmark with an earthy palette and clean photography direction.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "maskcream",
      cat: "branding",
      img: "projects/maskcream/cover.webp",
      gallery: [
        "projects/maskcream/p01.webp",
        "projects/maskcream/p02.webp",
        "projects/maskcream/p03.webp",
        "projects/maskcream/p04.webp",
        "projects/maskcream/p05.webp",
        "projects/maskcream/p06.webp",
        "projects/maskcream/p07.webp",
        "projects/maskcream/p08.webp",
        "projects/maskcream/p09.webp",
        "projects/maskcream/p10.webp",
        "projects/maskcream/p11.webp",
        "projects/maskcream/p12.webp",
      ],
      client: "Mask & Cream",
      title: "Mask & Cream — Brand Identity",
      blurb: "Cosmetics identity — embossed logotype, tactile palette, and packaging applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A cosmetics line that needed a tactile, boutique feel at first glance.",
        approach: "An embossed logotype with a tactile palette, carried across the packaging range.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "sada",
      cat: "branding",
      img: "projects/sada/cover.webp",
      gallery: [
        "projects/sada/p01.webp",
        "projects/sada/p02.webp",
        "projects/sada/p03.webp",
        "projects/sada/p04.webp",
        "projects/sada/p05.webp",
        "projects/sada/p06.webp",
        "projects/sada/p07.webp",
        "projects/sada/p08.webp",
        "projects/sada/p09.webp",
        "projects/sada/p10.webp",
        "projects/sada/p11.webp",
        "projects/sada/p12.webp",
        "projects/sada/p13.webp",
        "projects/sada/p14.webp",
      ],
      client: "Sada",
      title: "Sada — Brand Identity",
      blurb: "Identity for a cultural media brand — bilingual wordmark and a cinematic visual language.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A cultural media brand that needed one voice across two scripts.",
        approach: "A bilingual wordmark with a cinematic visual language for print and screen.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "shafan",
      cat: "branding",
      img: "projects/shafan/cover.webp",
      gallery: [
        "projects/shafan/p01.webp",
        "projects/shafan/p02.webp",
        "projects/shafan/p03.webp",
        "projects/shafan/p04.webp",
        "projects/shafan/p05.webp",
        "projects/shafan/p06.webp",
        "projects/shafan/p07.webp",
        "projects/shafan/p08.webp",
        "projects/shafan/p09.webp",
        "projects/shafan/p10.webp",
        "projects/shafan/p11.webp",
        "projects/shafan/p12.webp",
        "projects/shafan/p13.webp",
        "projects/shafan/p14.webp",
        "projects/shafan/p15.webp",
      ],
      client: "Shafan",
      title: "Shafan — Brand Identity",
      blurb: "Heritage luxury identity — Arabic logotype, refined palette, and real-world applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A heritage brand that needed to feel luxurious without losing its roots.",
        approach: "An Arabic logotype with a refined palette, applied across real-world touchpoints.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "noya",
      cat: "branding",
      img: "projects/noya/cover.webp",
      gallery: [
        "projects/noya/p01.webp",
        "projects/noya/p02.webp",
        "projects/noya/p03.webp",
        "projects/noya/p04.webp",
        "projects/noya/p05.webp",
        "projects/noya/p06.webp",
      ],
      client: "Noya",
      title: "Noya — Brand Identity",
      blurb: "Beauty-food brand identity — clean wordmark, warm palette, and packaging applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A beauty-food brand that needed one calm, premium identity across packaging and touchpoints.",
        approach: "A clean wordmark with a warm, tactile palette carried across the packaging range.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "tinin",
      cat: "branding",
      img: "projects/tinin/cover.webp",
      gallery: [
        "projects/tinin/p01.webp",
        "projects/tinin/p02.webp",
        "projects/tinin/p03.webp",
        "projects/tinin/p04.webp",
        "projects/tinin/p05.webp",
        "projects/tinin/p06.webp",
        "projects/tinin/p07.webp",
        "projects/tinin/p08.webp",
        "projects/tinin/p09.webp",
        "projects/tinin/p10.webp",
        "projects/tinin/p11.webp",
        "projects/tinin/p12.webp",
        "projects/tinin/p13.webp",
      ],
      client: "Tinin",
      title: "Tinin — Brand Identity",
      blurb: "Brand identity — logotype, color system, and real-world applications.",
      tags: ["Branding", "Identity"],
      year: "2025",
      details: {
        challenge: "A brand that needed a complete identity system with a distinctive, ownable look.",
        approach: "A logotype-led system with a distinct palette, applied across real-world touchpoints.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "primekey",
      cat: "branding",
      img: "projects/primekey/cover.webp",
      gallery: [
        "projects/primekey/p01.webp",
        "projects/primekey/p02.webp",
        "projects/primekey/p03.webp",
        "projects/primekey/p04.webp",
        "projects/primekey/p05.webp",
        "projects/primekey/p06.webp",
        "projects/primekey/p07.webp",
        "projects/primekey/p08.webp",
        "projects/primekey/p09.webp",
        "projects/primekey/p10.webp",
        "projects/primekey/p11.webp",
        "projects/primekey/p12.webp",
        "projects/primekey/p13.webp",
        "projects/primekey/p14.webp",
        "projects/primekey/p15.webp",
        "projects/primekey/p16.webp",
        "projects/primekey/p17.webp",
        "projects/primekey/p18.webp",
        "projects/primekey/p19.webp",
        "projects/primekey/p20.webp",
        "projects/primekey/p21.webp",
        "projects/primekey/p22.webp",
        "projects/primekey/p23.webp",
        "projects/primekey/p24.webp",
        "projects/primekey/p25.webp",
        "projects/primekey/p26.webp",
        "projects/primekey/p27.webp",
        "projects/primekey/p28.webp",
        "projects/primekey/p29.webp",
        "projects/primekey/p30.webp",
        "projects/primekey/p31.webp",
        "projects/primekey/p32.webp",
        "projects/primekey/p33.webp",
        "projects/primekey/p34.webp",
      ],
      client: "Prime Key",
      title: "Prime Key — Brand Guidelines",
      blurb: "Full brand guidelines book — logo usage, color, typography, and application rules.",
      tags: ["Branding", "Guidelines"],
      year: "2025",
      details: {
        challenge: "A growing brand that needed one rulebook to keep every touchpoint consistent.",
        approach: "A complete guidelines book covering logo usage, color, typography, and application rules.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "tammat",
      cat: "branding",
      img: "projects/tammat/cover.webp",
      gallery: [
        "projects/tammat/p01.webp",
        "projects/tammat/p02.webp",
        "projects/tammat/p03.webp",
        "projects/tammat/p04.webp",
        "projects/tammat/p05.webp",
        "projects/tammat/p06.webp",
        "projects/tammat/p07.webp",
        "projects/tammat/p08.webp",
        "projects/tammat/p09.webp",
        "projects/tammat/p10.webp",
        "projects/tammat/p11.webp",
        "projects/tammat/p12.webp",
        "projects/tammat/p13.webp",
        "projects/tammat/p14.webp",
        "projects/tammat/p15.webp",
        "projects/tammat/p16.webp",
        "projects/tammat/p17.webp",
        "projects/tammat/p18.webp",
        "projects/tammat/p19.webp",
        "projects/tammat/p20.webp",
        "projects/tammat/p21.webp",
        "projects/tammat/p22.webp",
        "projects/tammat/p23.webp",
        "projects/tammat/p24.webp",
        "projects/tammat/p25.webp",
      ],
      client: "Tammat",
      title: "Tammat — Brand Guidelines",
      blurb: "Brand guidelines — logo construction, color system, typography, and usage rules.",
      tags: ["Branding", "Guidelines"],
      year: "2025",
      details: {
        challenge: "A brand team that needed clear rules to protect the identity at scale.",
        approach: "Guidelines covering logo construction, the color system, typography, and usage rules.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "turath",
      cat: "branding",
      img: "projects/turath/cover.webp",
      gallery: [
        "projects/turath/p01.webp",
        "projects/turath/p02.webp",
        "projects/turath/p03.webp",
        "projects/turath/p04.webp",
        "projects/turath/p05.webp",
        "projects/turath/p06.webp",
        "projects/turath/p07.webp",
        "projects/turath/p08.webp",
        "projects/turath/p09.webp",
        "projects/turath/p10.webp",
        "projects/turath/p11.webp",
        "projects/turath/p12.webp",
        "projects/turath/p13.webp",
        "projects/turath/p14.webp",
        "projects/turath/p15.webp",
        "projects/turath/p16.webp",
        "projects/turath/p17.webp",
        "projects/turath/p18.webp",
        "projects/turath/p19.webp",
        "projects/turath/p20.webp",
        "projects/turath/p21.webp",
        "projects/turath/p22.webp",
        "projects/turath/p23.webp",
        "projects/turath/p24.webp",
        "projects/turath/p25.webp",
        "projects/turath/p26.webp",
        "projects/turath/p27.webp",
        "projects/turath/p28.webp",
        "projects/turath/p29.webp",
        "projects/turath/p30.webp",
        "projects/turath/p31.webp",
        "projects/turath/p32.webp",
        "projects/turath/p33.webp",
        "projects/turath/p34.webp",
        "projects/turath/p35.webp",
        "projects/turath/p36.webp",
        "projects/turath/p37.webp",
        "projects/turath/p38.webp",
      ],
      client: "Turath",
      title: "Turath — Brand Guidelines",
      blurb: "Heritage brand guidelines — bilingual identity system with gold-on-burgundy applications.",
      tags: ["Branding", "Guidelines"],
      year: "2025",
      details: {
        challenge: "A heritage brand that needed its identity documented in both scripts.",
        approach: "A bilingual guidelines system with gold-on-burgundy applications throughout.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "ahmed-abdelraouf",
      cat: "social",
      img: "projects/ahmed-abdelraouf/cover.webp",
      gallery: [
        "projects/ahmed-abdelraouf/p01.webp",
        "projects/ahmed-abdelraouf/p02.webp",
        "projects/ahmed-abdelraouf/p03.webp",
        "projects/ahmed-abdelraouf/p04.webp",
        "projects/ahmed-abdelraouf/p05.webp",
        "projects/ahmed-abdelraouf/p06.webp",
      ],
      client: "Dr. Ahmed Abdelraouf",
      title: "Dr. Ahmed Abdelraouf — Social Media",
      blurb: "Social media feed design — post series carrying the doctor's identity across Instagram.",
      tags: ["Social Media"],
      year: "2025",
      details: {
        challenge: "A practice that needed a consistent, trustworthy voice on social feed.",
        approach: "A post system with clear hierarchy — readable Arabic type, calm medical palette, consistent templates.",
        results: "Case study coming soon.",
      },
    },

    {
      id: "ats-okay",
      cat: "social",
      img: "projects/ats-okay/cover.webp",
      gallery: [
        "projects/ats-okay/p01.webp",
        "projects/ats-okay/p02.webp",
        "projects/ats-okay/p03.webp",
        "projects/ats-okay/p04.webp",
        "projects/ats-okay/p05.webp",
        "projects/ats-okay/p06.webp",
      ],
      client: "Ats Okay",
      title: "Ats Okay — Social Media",
      blurb: "Social media feed design — post series in the brand's own identity.",
      tags: ["Social Media"],
      year: "2025",
      details: {
        challenge: "A brand that needed its feed to look like one designed series, not scattered posts.",
        approach: "A templated post system built on the brand's colors and type, applied across the feed.",
        results: "Case study coming soon.",
      },
    },
  ],
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

  /* AEO: direct, quotable answers — mirrored as FAQPage structured data */
  faq: [
    {
      q: "What services does Perfection offer?",
      a: "We are a full-service marketing agency. Our services cover branding & identity, social media management, performance marketing, content creation & production, advertising management, SEO, media production & motion design, and website design.",
    },
    {
      q: "Where does Perfection work?",
      a: "We are based in Egypt and work with clients across Egypt and the GCC (Gulf Cooperation Council) countries, in English and Arabic.",
    },
    {
      q: "How does a project with Perfection start?",
      a: "Every project runs through the same four steps: Discovery (we learn your business and goals), Strategy (the plan and creative direction), Execution (we build and launch), and Optimization (we measure and improve). It starts with a short conversation through the contact form.",
    },
    {
      q: "Can you handle both branding and social media?",
      a: "Yes — that is what full-service means. We can build your brand identity from scratch and then run its social media, or take over an existing identity. See the difference in our work: the branding archive and the social media archive.",
    },
    {
      q: "How do I get a quote?",
      a: "Use the contact form — tell us your name, company, the service you are interested in, and a few lines about your project. We reply with next steps and a quote tailored to your goals.",
    },
  ],
};
