"use client";

import { useState } from "react";
import { DonationModal } from "@/components/donation-modal";

export function MobileDonateBar() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--brand-maroon-900)] border-t border-[var(--neutral-300)]/30 p-4"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <button
          onClick={() => setIsDonationModalOpen(true)}
          className="w-full bg-[var(--mahagathe-red)] text-[var(--ink-inverse)] h-12 px-6 rounded-full font-sans font-semibold shadow-lg hover:bg-[var(--brand-rose-700)] active:bg-[var(--brand-plum-800)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] inline-flex items-center justify-center"
          aria-label="Donate Now - Opens donation portal"
        >
          Donate Now
        </button>
      </div>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        programTag="General"
      />
    </>
  );
}
