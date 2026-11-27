import type { Metadata } from "next";
import { SectorPageView } from "@/components/sector-page";
import { REAL_ESTATE } from "@/lib/content";

export const metadata: Metadata = { title: "Real estate", description: REAL_ESTATE.lede };

export default function RealEstatePage() {
  return <SectorPageView page={REAL_ESTATE} />;
}
