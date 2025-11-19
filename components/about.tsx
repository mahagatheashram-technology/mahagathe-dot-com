"use client";

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { useScrollAnimation } from "@/lib/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 md:py-20 bg-[var(--white)] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      aria-labelledby="about-heading"
    >
      <Container maxWidth="narrow">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink-strong)] text-center mb-8 md:mb-10 animate-slide-up"
        >
          About Us
        </h2>
        <div className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
          <div className="bg-[var(--cream-60)] rounded-3xl p-8 md:p-10 shadow-lg shadow-[var(--brand-maroon-900)]/5 hover:shadow-xl hover:shadow-[#f60000]/40 hover:-translate-y-1 transition-all duration-300 border border-[var(--neutral-200)]/50">
            <p className="text-base md:text-lg text-[var(--ink-default)] leading-relaxed text-center font-medium">
              {siteConfig.about.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
