import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="page-hero">
        <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <h1>Page not found.</h1>
            <p className="lede">The page you were looking for is not here.</p>
            <Link className="more" href="/">
              Back to the home page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
