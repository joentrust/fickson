import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/crumbs";
import { ExternalLink } from "@/components/external-link";
import { COMPANIES, SITE } from "@/lib/content";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the trustees of Joen Trust.",
};

export default function ContactPage() {
  const liveCompanies = COMPANIES.filter((company) => company.domain !== null);
  return (
    <div className="wrap">
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <Crumbs trail={[{ label: "Contact" }]} />
        <div className="grid" style={{ gridTemplateColumns: "1fr", paddingBottom: 24 }}>
          <h1 style={{ maxWidth: "14ch" }}>Talk to the trustees.</h1>
          <p className="lede">
            Tell us what you have in mind. One of us reads every message and replies.
          </p>
        </div>
      </section>
      <section className="section split" style={{ paddingTop: 48 }}>
        <ContactForm />
        <div className="direct">
          <div>
            <h3>Write to us directly</h3>
            <p>For anything about the trust.</p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div>
            <h3>Already a customer?</h3>
            <p>Product support is handled by each company.</p>
            {liveCompanies.map(
              (company) =>
                company.domain && (
                  <div key={company.name}>
                    <ExternalLink domain={company.domain} className="" />
                  </div>
                ),
            )}
          </div>
          <div>
            <h3>Investing with us</h3>
            <p>Partners invest in our companies directly.</p>
            <Link href="/investment">How it works</Link>
          </div>
          <div>
            <h3>Where we are</h3>
            <p>Malawi</p>
          </div>
        </div>
      </section>
    </div>
  );
}
