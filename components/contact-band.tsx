import Link from "next/link";

type ContactBandProps = { title: string; detail: string };

export function ContactBand({ title, detail }: ContactBandProps) {
  return (
    <section className="contact">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{detail}</p>
        </div>
        <Link className="btn" href="/contact">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
