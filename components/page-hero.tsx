import type { Lane } from "@/lib/content";
import { Crumbs } from "./crumbs";
import { Scene } from "./scenes";

type LanePageHeroProps = { lane: Lane; name: string; headline: string; lede: string };

export function LanePageHero({ lane, name, headline, lede }: LanePageHeroProps) {
  return (
    <section className={`page-hero ${lane}`}>
      <div className="wrap">
        <Crumbs trail={[{ label: name }]} />
        <div className="grid">
          <div>
            <h1>{headline}</h1>
            <p className="lede">{lede}</p>
          </div>
          <div>
            <Scene lane={lane} />
          </div>
        </div>
      </div>
    </section>
  );
}
