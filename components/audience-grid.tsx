import Link from "next/link";
import type { Audience } from "@/lib/content";

type AudienceGridProps = { audiences: Audience[] };

export function AudienceGrid({ audiences }: AudienceGridProps) {
  return (
    <section className="section">
      <div className="split" style={{ marginBottom: 48 }}>
        <h2>Work with us</h2>
        <p className="intro" style={{ marginTop: 0 }}>
          If any of this sounds like you, we would like to hear from you.
        </p>
      </div>
      <div className="audience">
        {audiences.map((audience) => (
          <div key={audience.title}>
            <h3>{audience.title}</h3>
            <p>{audience.detail}</p>
            <Link href="/contact">{audience.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
