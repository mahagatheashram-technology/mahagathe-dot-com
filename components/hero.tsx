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
          <div className="mb-20 md:mb-24 space-y-8 animate-slide-up">
            <h1
              id="hero-heading"
              className="text-[40px] md:text-[56px] lg:text-[68px] leading-[1.15] tracking-[-0.03em] font-bold text-[var(--white)] max-w-[900px]"
            >
              {siteConfig.mission.headline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--white)] max-w-[800px] leading-relaxed font-medium opacity-90">
              {siteConfig.mission.subhead}
            </p>
          </div>

          {/* Buttons aligned with text start */}
          <div className="flex flex-wrap items-center gap-5 animate-fade-in animation-delay-200">
            <Link
              href={siteConfig.donationUrl}
              className="smooth elev-2 bg-[var(--white)] text-[var(--brand-maroon-900)] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg ring-1 ring-white/60 inline-flex items-center justify-center hover:elev-3 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 focus-visible:outline-none shadow-lg shadow-black/20"
              aria-label="Donate Now - Opens donation portal"
            >
              Donate Now
            </Link>
            <Link
              href="https://mahagathe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="smooth bg-[var(--pink-200)] border-2 border-[var(--pink-200)] text-[var(--brand-maroon-900)] px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center hover:bg-[var(--white)] hover:border-[var(--white)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 focus-visible:outline-none shadow-md hover:shadow-xl"
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
