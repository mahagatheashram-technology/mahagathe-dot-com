"use client";

import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brand-maroon-900)] focus:text-[var(--ink-inverse)] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--mahagathe-red)] focus:ring-offset-2"
    >
      Skip to content
    </Link>
  );
}
