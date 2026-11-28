import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

const PATHS = [
  "",
  "/agriculture",
  "/real-estate",
  "/technology",
  "/family",
  "/contact",
  "/investment",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE.url}${path}` }));
}
