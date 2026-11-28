import type { Route } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { ExternalLink } from "@/components/external-link";
import { HoldingRow } from "@/components/holding-row";
import { Principles } from "@/components/principles";
import { Scene } from "@/components/scenes";
import { COMPANIES, HOME_HOLDINGS, type Lane, TRUSTEES } from "@/lib/content";

type IndexEntry = { lane: Lane; name: string; detail: string; href: Route };

const INDEX: IndexEntry[] = [
  {
    lane: "agri",
    name: "Agriculture",
    detail: "Land, crops and the road to market",
    href: "/agriculture",
  },
  {
    lane: "estate",
    name: "Real estate",
    detail: "Homes and commercial space to keep",
    href: "/real-estate",
  },
  { lane: "tech", name: "Technology", detail: "Four software companies", href: "/technology" },
];

export default function HomePage() {
  return (
    <>
      <div className="wrap">
        <header>
          <div>
            <h1>
              We grow <span className="a">food</span>, build <span className="e">homes</span> and
              ship <span className="t">software</span>.
            </h1>
            <p className="lede">
              Joen Trust is the family trust of Joel and Eunice Ngozo. It builds and holds
              businesses in Malawi, and keeps them for the long run.
            </p>
          </div>
          <div className="index">
            {INDEX.map((entry) => (
              <Link key={entry.href} href={entry.href}>
                <span>
                  <b>{entry.name}</b>
                  <small>{entry.detail}</small>
                </span>
              </Link>
            ))}
          </div>
        </header>

        <div className="scene">
          <Scene lane="agri" />
          <Scene lane="estate" />
          <Scene lane="tech" />
        </div>

        <section className="letter">
          <div>
            <h2>Why a family trust</h2>
            <Link className="more" href="/family">
              Meet the family
            </Link>
          </div>
          <div className="body">
            <p>
              We started Joen Trust so that what we build together outlasts any one project, and any
              one of us.
            </p>
            <p className="soft">
              Land, buildings and software look like three different businesses. To us they are the
              same promise: make something useful in Malawi, look after it properly, and hand it on
              in better shape than we found it.
            </p>
            <div className="sign">
              {TRUSTEES.map((trustee) => (
                <span key={trustee.name}>
                  <b>{trustee.name}</b>
                  <small>Trustee</small>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="lane agri">
        <div className="wrap">
          <div>
            <h2>Land that feeds people and pays its way.</h2>
            <p className="copy">
              We farm our own land and invest in what happens after harvest, so crops sell at the
              right time and a fair price.
            </p>
            <Link className="more" href="/agriculture">
              More on agriculture
            </Link>
          </div>
          <div className="list">
            {HOME_HOLDINGS.agri.map((holding) => (
              <HoldingRow key={holding.name} holding={holding} />
            ))}
          </div>
        </div>
      </section>

      <section className="lane estate">
        <div className="wrap">
          <div>
            <h2>Buildings we would be proud to keep.</h2>
            <p className="copy">
              Residential and commercial property, built and bought for steady income and to pass
              on. We build to keep, never to flip.
            </p>
            <Link className="more" href="/real-estate">
              More on real estate
            </Link>
          </div>
          <div className="list">
            {HOME_HOLDINGS.estate.map((holding) => (
              <HoldingRow key={holding.name} holding={holding} />
            ))}
          </div>
        </div>
      </section>

      <section className="lane tech">
        <div className="wrap">
          <div>
            <h2>Software that runs African businesses.</h2>
            <p className="copy">
              Four companies built in Malawi. Each stands on its own, and together they cover how a
              business gets paid, talks to its customers and runs its team.
            </p>
            <Link className="more" href="/technology">
              More on our companies
            </Link>
          </div>
          <div className="list">
            {COMPANIES.map((company) => (
              <div className="row" key={company.name}>
                <span>
                  <b>{company.name}</b>
                  <p>{company.short}</p>
                  {company.domain && <ExternalLink domain={company.domain} />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <Principles />
      </div>

      <ContactBand
        title="Talk to us about land, property or software."
        detail="Partnerships, investment or a project in Malawi. Write to us and one of the trustees will reply."
      />
    </>
  );
}
