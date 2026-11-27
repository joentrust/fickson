import type { Route } from "next";
import Link from "next/link";

type NextPageProps = { name: string; href: Route };

export function NextPage({ name, href }: NextPageProps) {
  return (
    <div className="wrap">
      <div className="next">
        <span>
          <b>{name}</b>
        </span>
        <Link className="btn quiet" href={href}>
          Continue
        </Link>
      </div>
    </div>
  );
}
