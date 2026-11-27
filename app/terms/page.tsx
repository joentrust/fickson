import type { Metadata } from "next";
import { Crumbs } from "@/components/crumbs";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Joen Trust website.",
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <Crumbs trail={[{ label: "Terms" }]} />
        <div className="grid" style={{ gridTemplateColumns: "1fr", paddingBottom: 0 }}>
          <h1>Terms</h1>
        </div>
      </section>
      <article className="prose">
        <small>Last updated 27 November 2026</small>
        <h2>About this website</h2>
        <p>
          This website describes Joen Trust, the family trust of Joel and Eunice Ngozo, and the
          businesses it holds in Malawi. It is for general information only.
        </p>
        <h2>Not an offer</h2>
        <p>
          Nothing on this website is an offer to sell, or a request to buy, shares or any other
          investment. Any investment is made by written agreement with the company concerned.
        </p>
        <h2>Our companies</h2>
        <p>
          Chia, Kazuni, Luwawa and Viphya each have their own websites and terms. Those terms, not
          these, apply when you use their products.
        </p>
        <h2>Content</h2>
        <p>
          We try to keep this website accurate, but plans change. Holdings marked as planned or
          building are intentions, not commitments.
        </p>
        <h2>Law</h2>
        <p>These terms are governed by the laws of Malawi.</p>
        <h2>Contact</h2>
        <p>
          Questions about these terms go to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </article>
    </div>
  );
}
