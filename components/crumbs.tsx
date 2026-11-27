import type { Route } from "next";
import Link from "next/link";
import { Fragment } from "react";

type Crumb = { label: string; href?: Route };
type CrumbsProps = { trail: Crumb[] };

export function Crumbs({ trail }: CrumbsProps) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {trail.map((crumb) => (
        <Fragment key={crumb.label}>
          <span>/</span>
          {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
