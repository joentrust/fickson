import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { Crumbs } from "@/components/crumbs";
import { INVESTMENT_LANES } from "@/lib/content";

const LEDE =
  "We invest for the long term. Partners invest directly in one of our companies, not in the trust, on terms that suit that business.";

export const metadata: Metadata = { title: "Investment", description: LEDE };

export default function InvestmentPage() {
  return (
    <>
      <div className="wrap">
        <section className="page-hero" style={{ paddingBottom: 0 }}>
          <Crumbs trail={[{ label: "Contact", href: "/contact" }, { label: "Investment" }]} />
          <div className="grid" style={{ paddingBottom: 24 }}>
            <h1>Invest alongside a family that plans to stay.</h1>
            <p className="lede">{LEDE}</p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="audience">
            {INVESTMENT_LANES.map((item) => (
              <div key={item.lane}>
                <h3>{item.name}</h3>
                <p style={{ marginTop: 12 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactBand
        title="Have something in mind?"
        detail="Write to us and one of the trustees will reply."
      />
    </>
  );
}
