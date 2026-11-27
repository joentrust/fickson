import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { Crumbs } from "@/components/crumbs";
import { Principles } from "@/components/principles";
import { TRUSTEES } from "@/lib/content";

export const metadata: Metadata = {
  title: "The family",
  description: "Why Joel and Eunice Ngozo started Joen Trust, and how it decides what to hold.",
};

export default function FamilyPage() {
  return (
    <>
      <div className="wrap">
        <section className="page-hero" style={{ paddingBottom: 0 }}>
          <Crumbs trail={[{ label: "The family" }]} />
          <div className="grid" style={{ gridTemplateColumns: "1fr", paddingBottom: 24 }}>
            <h1 style={{ maxWidth: "14ch" }}>A family trust, built to be handed on.</h1>
          </div>
        </section>
        <section className="letter" style={{ paddingTop: 48 }}>
          <h2>Why we started it</h2>
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
            <p className="soft">
              The trust holds each business for the long run. It does not sell to make a quick
              return, and it does not borrow against one lane to rescue another. Every decision is
              judged on whether we would still be glad of it in thirty years.
            </p>
          </div>
        </section>
        <section className="section split" style={{ paddingTop: 0 }}>
          <h2>Trustees</h2>
          <div className="people">
            {TRUSTEES.map((trustee) => (
              <div key={trustee.name}>
                <h3>{trustee.name}</h3>
                <div className="role">Trustee</div>
                {trustee.focus && <p>{trustee.focus}</p>}
              </div>
            ))}
          </div>
        </section>
        <Principles style={{ paddingTop: 0 }} />
      </div>
      <ContactBand
        title="Want to talk to the trustees?"
        detail="Partnerships, investment or a project in Malawi. One of us will reply."
      />
    </>
  );
}
