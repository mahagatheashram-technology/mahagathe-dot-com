"use client";

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { useScrollAnimation } from "@/lib/use-scroll-animation";

export function DonateBand() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="donate"
      className={`py-16 md:py-24 bg-[var(--brand-maroon-900)] relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      aria-labelledby="donate-heading"
    >
      {/* Optional gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-banner-gradient opacity-50" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--brand-rose-700)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-rose-700)] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <Container maxWidth="narrow">
        <div className="max-w-3xl mx-auto text-center relative z-10 animate-slide-up">
          <p className="text-lg md:text-xl text-[var(--white)] font-sans font-medium">
            To learn more about Mahagathe and our mission visit{" "}
            <a
              href="https://mahagathe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--brand-rose-200)] transition-colors"
            >
              mahagathe.org
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
