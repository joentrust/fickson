import type { Metadata } from "next";
import { SectorPageView } from "@/components/sector-page";
import { AGRICULTURE } from "@/lib/content";

export const metadata: Metadata = { title: "Agriculture", description: AGRICULTURE.lede };

export default function AgriculturePage() {
  return <SectorPageView page={AGRICULTURE} />;
}
