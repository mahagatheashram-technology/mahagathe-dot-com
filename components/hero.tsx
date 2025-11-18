import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[var(--brand-maroon-900)] from-0% via-[var(--brand-maroon-900)] via-75% to-[var(--mahagathe-red)] to-100% pb-24 md:pb-32 min-h-[600px] md:min-h-[700px] flex items-center -mt-[72px] pt-[92px] md:pt-[100px]"
      aria-labelledby="hero-heading"
    >
      <Container maxWidth="narrow">
        <div className="max-w-[1200px] mx-auto">
          {/* Content in upper 3/4 - maroon area */}
          <div className="mb-20 md:mb-24 space-y-6">
            <h1
              id="hero-heading"
              className="text-[40px] md:text-[56px] lg:text-[68px] leading-[1.15] tracking-[-0.02em] font-bold text-[var(--white)] max-w-[900px]"
            >
              {siteConfig.mission.headline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--white)] max-w-[800px] leading-relaxed font-medium">
              {siteConfig.mission.subhead}
            </p>
          </div>

          {/* Buttons aligned with text start */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.donationUrl}
              className="bg-[var(--white)] text-[var(--brand-maroon-900)] px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:bg-[var(--pink-200)] hover:text-[var(--brand-maroon-900)] transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--white)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--mahagathe-red)] inline-flex items-center justify-center"
              aria-label="Donate Now - Opens donation portal"
            >
              Donate Now
            </Link>
            <Link
              href="https://mahagathe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--pink-200)] border-2 border-[var(--pink-200)] text-[var(--brand-maroon-900)] px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-[var(--white)] hover:border-[var(--white)] transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-200)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--mahagathe-red)] inline-flex items-center justify-center"
              aria-label="Visit Mahagathe.org"
            >
              Visit Mahagathe.org
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
