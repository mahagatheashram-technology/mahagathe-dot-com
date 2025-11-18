import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function DonateBand() {
  return (
    <section
      id="donate"
      className="py-16 md:py-24 bg-[var(--brand-maroon-900)] relative"
      aria-labelledby="donate-heading"
    >
      {/* Optional gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-banner-gradient opacity-50" />

      <Container maxWidth="narrow">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            id="donate-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink-inverse)] mb-6"
          >
            Ready to help?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[var(--ink-inverse)]/90">
            Give securely via our main donations portal.
          </p>
          <a
            href={siteConfig.donationUrl}
            className="inline-flex items-center justify-center bg-[var(--white)] text-[var(--brand-maroon-900)] h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-full font-semibold shadow-md hover:bg-[var(--mahagathe-red)] hover:text-[var(--ink-inverse)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)]"
            aria-label="Donate at Mahagathe.org - Opens donation portal"
          >
            Donate at Mahagathe.org
          </a>
        </div>
      </Container>
    </section>
  );
}
