import type { Metadata } from "next";
import { Crumbs } from "@/components/crumbs";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Joen Trust handles what you send through this website.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <Crumbs trail={[{ label: "Privacy" }]} />
        <div className="grid" style={{ gridTemplateColumns: "1fr", paddingBottom: 0 }}>
          <h1>Privacy</h1>
        </div>
      </section>
      <article className="prose">
        <small>Last updated 27 November 2026</small>
        <h2>What we collect</h2>
        <p>
          This website collects personal information only when you send us a message. The contact
          form asks for your name, your email address, a topic and your message.
        </p>
        <h2>How we use it</h2>
        <p>
          We use what you send to read and reply to your message. We do not sell it, and we do not
          add you to a mailing list.
        </p>
        <h2>Who handles it</h2>
        <ul>
          <li>Kazuni, one of our companies, delivers form messages to the trustees by email.</li>
          <li>Google Workspace holds the email inbox the messages arrive in.</li>
          <li>Vercel hosts this website and keeps short-lived server logs.</li>
        </ul>
        <h2>How long we keep it</h2>
        <p>
          We keep messages for as long as we need them to deal with your enquiry, and then delete
          them.
        </p>
        <h2>Cookies</h2>
        <p>This website does not set cookies or use tracking or analytics.</p>
        <h2>Your rights</h2>
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Write
          to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </article>
    </div>
  );
}
