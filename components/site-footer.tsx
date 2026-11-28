import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>Joen Trust, Malawi</span>
        <span className="legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
