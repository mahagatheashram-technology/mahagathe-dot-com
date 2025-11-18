"use client";

import { siteConfig } from "@/lib/site-config";

export function MobileDonateBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--brand-maroon-900)] border-t border-[var(--neutral-300)]/30 p-4" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
      <a
        href={siteConfig.donationUrl}
        className="w-full bg-[var(--mahagathe-red)] text-[var(--ink-inverse)] h-12 px-6 rounded-full font-semibold shadow-lg hover:bg-[var(--brand-rose-700)] active:bg-[var(--brand-plum-800)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] inline-flex items-center justify-center"
        aria-label="Donate Now - Opens donation portal"
      >
        Donate Now
      </a>
    </div>
  );
}

