"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";
import { Mark } from "./mark";

export function SiteNav() {
  const pathname = usePathname();
  return (
    <div className="wrap">
      <nav className="site-nav" aria-label="Main">
        <Link className="mark" href="/">
          <Mark />
          Joen Trust
        </Link>
        <div className="nav-links">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="btn" href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
