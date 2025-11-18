import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-[var(--white)]"
      aria-labelledby="about-heading"
    >
      <Container maxWidth="narrow">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink-strong)] text-center mb-8 md:mb-10"
        >
          About Us
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-[var(--ink-default)] leading-relaxed text-center">
            {siteConfig.about.text}
          </p>
        </div>
      </Container>
    </section>
  );
}
