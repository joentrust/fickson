import type { Route } from "next";

export type Lane = "agri" | "estate" | "tech";

export type Holding = { name: string; detail: string };
export type Audience = { title: string; detail: string; cta: string };
export type Company = {
  name: string;
  domain: string | null;
  summary: string;
  short: string;
  audience: string;
};
export type Principle = { title: string; detail: string };
export type Trustee = { name: string; focus: string | null };

export type SectorPage = {
  lane: Lane;
  name: string;
  href: Route;
  headline: string;
  lede: string;
  approachTitle: string;
  approachIntro: string;
  holdings: Holding[];
  audiences: Audience[];
  next: { name: string; href: Route };
  band: { title: string; detail: string };
};

export const SITE = {
  name: "Joen Trust",
  url: "https://joentrust.com",
  email: "hello@joentrust.com",
  description:
    "Joen Trust is the family trust of Joel and Eunice Ngozo. It builds and holds businesses in Malawi across agriculture, real estate and technology.",
} as const;

export const NAV: { href: Route; label: string }[] = [
  { href: "/agriculture", label: "Agriculture" },
  { href: "/real-estate", label: "Real estate" },
  { href: "/technology", label: "Technology" },
  { href: "/family", label: "The family" },
];

export const TRUSTEES: Trustee[] = [
  {
    name: "Joel Ngozo",
    focus: "Builds and runs the technology companies, Chia, Kazuni, Luwawa and Viphya.",
  },
  { name: "Eunice Ngozo", focus: null },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Measured in decades",
    detail: "We buy and build what we would still want to own in thirty years.",
  },
  { title: "Rooted in Malawi", detail: "Every holding creates work and value at home first." },
  {
    title: "Each lane pays its own way",
    detail: "Land, property and software are run apart, so one never props up another.",
  },
];

export const COMPANIES: Company[] = [
  {
    name: "Chia",
    domain: "usechia.com",
    summary: "Payments and subscription billing over African mobile money.",
    short: "Payments and subscription billing over mobile money.",
    audience: "Businesses that charge customers in local currency, once or every month.",
  },
  {
    name: "Kazuni",
    domain: "usekazuni.com",
    summary:
      "Email and messaging infrastructure for developers. Email today, SMS next, WhatsApp planned.",
    short: "Email and messaging infrastructure for developers.",
    audience: "Developers and products that need to reach their users reliably.",
  },
  {
    name: "Luwawa",
    domain: "luwawa.app",
    summary:
      "HR, payroll and hiring for growing teams, from the first job post to the monthly pay run.",
    short: "HR, payroll and hiring for growing teams.",
    audience: "Companies managing people, pay and hiring in Malawi and beyond.",
  },
  {
    name: "Viphya",
    domain: null,
    summary: "Legal research and intelligence for Malawian law firms.",
    short: "Legal research and intelligence for Malawian law firms.",
    audience: "Lawyers and firms who need Malawian law at hand.",
  },
];

export const AGRICULTURE: SectorPage = {
  lane: "agri",
  name: "Agriculture",
  href: "/agriculture",
  headline: "Land that feeds people and pays its way.",
  lede: "We farm our own land and invest in what happens after harvest, so crops sell at the right time and at a fair price.",
  approachTitle: "How we farm",
  approachIntro: "Three parts, built in order. Each one makes the next worth doing.",
  holdings: [
    {
      name: "Farmland we own and work",
      detail:
        "Productive land, farmed for decades rather than seasons. We look after the soil because we plan to be here.",
    },
    {
      name: "Storage after harvest",
      detail:
        "Dry, secure storage so growers are not forced to sell the week the crop comes in, when prices are lowest.",
    },
    {
      name: "Routes to buyers",
      detail:
        "Direct relationships between farms and the processors, traders and shops that buy from them.",
    },
  ],
  audiences: [
    {
      title: "Landowners",
      detail: "Have land you want farmed well, leased or sold to an owner who will keep it?",
      cta: "Talk about land",
    },
    {
      title: "Growers",
      detail: "Farm nearby and want storage or a steadier buyer for your harvest?",
      cta: "Talk about growing",
    },
    {
      title: "Buyers",
      detail: "Need a dependable supply of produce through the year?",
      cta: "Talk about supply",
    },
  ],
  next: { name: "Real estate", href: "/real-estate" },
  band: {
    title: "Have land or produce in Malawi?",
    detail: "Write to us and one of the trustees will reply.",
  },
};

export const REAL_ESTATE: SectorPage = {
  lane: "estate",
  name: "Real estate",
  href: "/real-estate",
  headline: "Buildings we would be proud to keep.",
  lede: "Residential and commercial property, built and bought for steady income and to pass on. We build to keep, never to flip.",
  approachTitle: "What we build",
  approachIntro:
    "Fewer buildings, built properly, and looked after for as long as we own them, which is meant to be a long time.",
  holdings: [
    {
      name: "Homes for long-term rent",
      detail:
        "Well-built, well-kept housing for families and young professionals, with fair leases and repairs done on time.",
    },
    {
      name: "Commercial space",
      detail:
        "Offices and shopfronts in towns that are growing, let to businesses that plan to stay.",
    },
    {
      name: "Land held for later",
      detail: "Plots bought ahead of growth and held until the right building is ready for them.",
    },
  ],
  audiences: [
    {
      title: "Landowners",
      detail: "Have a plot or a building you would rather sell or develop with a long-term owner?",
      cta: "Talk about land",
    },
    {
      title: "Tenants",
      detail: "Looking for a home or a business premises that is properly looked after?",
      cta: "Ask about space",
    },
    {
      title: "Builders",
      detail: "Architects, contractors and suppliers who take pride in finished work.",
      cta: "Work with us",
    },
  ],
  next: { name: "Technology", href: "/technology" },
  band: {
    title: "Have land or a building in mind?",
    detail: "Write to us and one of the trustees will reply.",
  },
};

export const HOME_HOLDINGS: Record<"agri" | "estate", Holding[]> = {
  agri: [
    {
      name: "Farmland we own and work",
      detail: "Productive land, farmed for decades rather than seasons.",
    },
    {
      name: "Storage after harvest",
      detail: "So growers are not forced to sell the week the crop comes in.",
    },
    {
      name: "Routes to buyers",
      detail: "Direct relationships between farms and the people who buy from them.",
    },
  ],
  estate: [
    {
      name: "Homes for long-term rent",
      detail: "Well-built, well-kept housing for families and young professionals.",
    },
    {
      name: "Commercial space",
      detail: "Offices and shopfronts in towns that are growing.",
    },
  ],
};

export const TECH_AUDIENCES: Audience[] = [
  {
    title: "Businesses",
    detail: "Want payments, messaging or HR software that works in Malawi?",
    cta: "Talk to a company",
  },
  {
    title: "Partners",
    detail: "Banks, mobile money operators and integrators building in the region.",
    cta: "Talk partnerships",
  },
  {
    title: "Engineers",
    detail: "Want to build software for Africa, from Malawi?",
    cta: "Ask about roles",
  },
];

export const INVESTMENT_LANES: { lane: Lane; name: string; detail: string }[] = [
  {
    lane: "agri",
    name: "Agriculture",
    detail: "Land, storage and buyers who commit to what we grow.",
  },
  {
    lane: "estate",
    name: "Real estate",
    detail: "Joint developments and finance for specific projects.",
  },
  {
    lane: "tech",
    name: "Technology",
    detail: "Equity in one of our companies, or partners who open a new market with us.",
  },
];

export const CONTACT_TOPICS = [
  "Agriculture",
  "Real estate",
  "Technology",
  "Partnership or investment",
  "Something else",
] as const;
