import type { Metadata } from "next";
import { AudienceGrid } from "@/components/audience-grid";
import { CompanyGraph } from "@/components/company-graph";
import { ContactBand } from "@/components/contact-band";
import { ExternalLink } from "@/components/external-link";
import { NextPage } from "@/components/next-page";
import { LanePageHero } from "@/components/page-hero";
import { COMPANIES, TECH_AUDIENCES } from "@/lib/content";

const LEDE =
  "Four companies built in Malawi. Together they cover how a business gets paid, talks to its customers and runs its team.";

export const metadata: Metadata = { title: "Technology", description: LEDE };

export default function TechnologyPage() {
  return (
    <>
      <LanePageHero
        lane="tech"
        name="Technology"
        headline="Software that runs African businesses."
        lede={LEDE}
      />
      <div className="wrap">
        <section className="section">
          <div className="split" style={{ marginBottom: 24 }}>
            <h2>Our companies</h2>
            <p className="intro" style={{ marginTop: 0 }}>
              Each one is a business in its own right, with its own customers and its own team.
            </p>
          </div>
          {COMPANIES.map((company) => (
            <div className="company" key={company.name}>
              <div>
                <h3>{company.name}</h3>
                {company.domain ? (
                  <ExternalLink domain={company.domain} />
                ) : (
                  <span className="url soon">Site coming soon</span>
                )}
              </div>
              <div>
                <p style={{ color: "var(--ink)", fontSize: 19 }}>{company.summary}</p>
                <dl>
                  <dt>For</dt>
                  <dd>{company.audience}</dd>
                  <dt>Built in</dt>
                  <dd>Malawi</dd>
                </dl>
              </div>
            </div>
          ))}
        </section>
        <section className="section split">
          <div>
            <h2>Stronger together</h2>
            <p className="intro">
              The companies use each other. Luwawa already sends its email through Kazuni, and
              billing through Chia is next.
            </p>
          </div>
          <CompanyGraph />
        </section>
        <AudienceGrid audiences={TECH_AUDIENCES} />
      </div>
      <NextPage name="The family" href="/family" />
      <ContactBand
        title="Building something in African tech?"
        detail="Write to us and one of the trustees will reply."
      />
    </>
  );
}
