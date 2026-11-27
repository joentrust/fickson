import type { SectorPage } from "@/lib/content";
import { AudienceGrid } from "./audience-grid";
import { ContactBand } from "./contact-band";
import { HoldingRow } from "./holding-row";
import { NextPage } from "./next-page";
import { LanePageHero } from "./page-hero";

type SectorPageViewProps = { page: SectorPage };

export function SectorPageView({ page }: SectorPageViewProps) {
  return (
    <>
      <LanePageHero lane={page.lane} name={page.name} headline={page.headline} lede={page.lede} />
      <div className="wrap">
        <section className="section split">
          <div>
            <h2>{page.approachTitle}</h2>
            <p className="intro">{page.approachIntro}</p>
          </div>
          <div className="list">
            {page.holdings.map((holding) => (
              <HoldingRow key={holding.name} holding={holding} />
            ))}
          </div>
        </section>
        <AudienceGrid audiences={page.audiences} />
      </div>
      <NextPage {...page.next} />
      <ContactBand {...page.band} />
    </>
  );
}
