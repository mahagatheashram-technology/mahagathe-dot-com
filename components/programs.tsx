"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

import { useScrollAnimation } from "@/lib/use-scroll-animation";
import { Heart, UtensilsCrossed, HandHeart, BookOpen } from "lucide-react";
import { ProgramTree } from "./program-tree";

const programIcons = {
  Āyuri: Heart,
  Bhandāra: UtensilsCrossed,
  Samriddhi: HandHeart,
  Adhyāya: BookOpen,
};

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#program-")) {
        const programId = hash.replace("#program-", "");
        const index = siteConfig.programs.findIndex(
          (p) => p.name.toLowerCase() === programId.toLowerCase()
        );
        if (index !== -1) {
          setActiveIndex(index);
          setIsHovered(true); // Pause auto-rotation when manually selected
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % siteConfig.programs.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeProgram = siteConfig.programs[activeIndex].name;

  return (
    <section
      ref={ref}
      id="programs"
      className={`scroll-mt-28 bg-[var(--white)] py-10 md:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-labelledby="programs-heading"
    >
      <Container>
        <h2
          id="programs-heading"
          className="text-4xl sm:text-5xl font-serif font-bold text-[var(--ink-strong)] text-center mb-5 md:mb-10 animate-slide-up"
        >
          Our Programs
        </h2>
        <div
          className="mt-5 md:mt-12 grid gap-4 md:gap-8 lg:gap-20 lg:grid-cols-[0.8fr_1.2fr] items-center animate-fade-in animation-delay-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="order-1 lg:-ml-12">
            <ProgramTree activeIndex={activeIndex} onChange={setActiveIndex} />
          </div>
          <div className="order-2 h-full">
            <ProgramDetail activeProgram={activeProgram} />
          </div>
        </div>
      </Container>
    </section>
  );
}

interface ProgramDetailProps {
  activeProgram: string;
}

function ProgramDetail({ activeProgram }: ProgramDetailProps) {
  const program =
    siteConfig.programs.find((p) => p.name === activeProgram) ??
    siteConfig.programs[0];
  const Icon = programIcons[program.name as keyof typeof programIcons];

  return (
    <article
      key={activeProgram}
      className="bg-[var(--cream-60)] rounded-3xl border-2 border-[#d64545]/30 shadow-lg shadow-[var(--brand-maroon-900)]/5 p-4 sm:p-5 md:p-8 animate-fade-in hover:shadow-xl hover:shadow-[#f60000]/40 hover:border-[#d64545]/50 transition-all duration-300 h-full min-h-0 lg:min-h-[600px] flex flex-col justify-center"
      role="tabpanel"
    >
      <div className="flex items-start gap-3 md:gap-5">
        <div className="hidden flex-shrink-0 sm:block">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-2xl bg-[var(--brand-rose-700)]/10 flex items-center justify-center">
            {Icon && (
              <Icon
                className="w-4 h-4 md:w-6 md:h-6 text-[var(--brand-rose-700)]"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-[#d64545] mb-1.5">
            {program.name}
          </h3>
          <p className="text-sm md:text-base font-medium text-[var(--ink-muted)] mb-3">
            {program.subtitle}
          </p>
          <p className="text-base sm:text-lg text-[var(--ink-default)] leading-relaxed">
            {program.description}
          </p>
        </div>
      </div>
    </article>
  );
}
