"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/use-scroll-animation";
import {
  Heart,
  UtensilsCrossed,
  HandHeart,
  BookOpen,
} from "lucide-react";

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
      className={`bg-[var(--cream-60)] py-16 md:py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      aria-labelledby="programs-heading"
    >
      <Container maxWidth="narrow">
        <h2
          id="programs-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink-strong)] text-center mb-8 md:mb-10 animate-slide-up"
        >
          Our Programs
        </h2>
        <div
          className="mt-8 md:mt-8 grid gap-8 md:gap-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] items-stretch animate-fade-in animation-delay-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProgramTabs
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
          <ProgramDetail activeProgram={activeProgram} />
        </div>
      </Container>
    </section>
  );
}

interface ProgramTabsProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

function ProgramTabs({ activeIndex, onChange }: ProgramTabsProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex md:flex-col gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        role="tablist"
        aria-label="Program selector"
      >
        {siteConfig.programs.map((program, index) => {
          const Icon = programIcons[program.name as keyof typeof programIcons];
          const isActive = activeIndex === index;

          return (
            <button
              key={program.name}
              type="button"
              onClick={() => onChange(index)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-4 py-2.5 text-left transition-all duration-300 flex-shrink-0",
                "w-[85vw] sm:w-[300px] md:w-auto",
                isActive
                  ? "bg-[var(--white)] border-[var(--brand-rose-700)]/60 shadow-lg shadow-[#f60000]/40 scale-[1.02]"
                  : "bg-[var(--white)]/70 border-[var(--neutral-200)]/70 hover:bg-[var(--white)] hover:shadow-md hover:shadow-[#f60000]/40 hover:-translate-y-0.5"
              )}
              role="tab"
              aria-selected={isActive}
            >
              <div className="flex-shrink-0">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300",
                  isActive ? "bg-[var(--brand-rose-700)]/10" : "bg-[var(--neutral-200)]/30"
                )}>
                  {Icon && (
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors duration-300",
                        isActive ? "text-[var(--brand-rose-700)]" : "text-[var(--ink-muted)]"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
              <div>
                <div className={cn(
                  "text-sm font-semibold transition-colors duration-300",
                  isActive ? "text-[var(--ink-strong)]" : "text-[var(--ink-default)]"
                )}>
                  {program.name}
                </div>
                <div className="text-xs text-[var(--ink-muted)]">
                  {program.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {/* Fade Mask for Mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--cream-60)] to-transparent pointer-events-none md:hidden" />
    </div>
  );
}

interface ProgramDetailProps {
  activeProgram: string;
}

function ProgramDetail({ activeProgram }: ProgramDetailProps) {
  const program = siteConfig.programs.find(
    (p) => p.name === activeProgram
  ) ?? siteConfig.programs[0];
  const Icon = programIcons[program.name as keyof typeof programIcons];

  return (
    <article
      key={activeProgram}
      className="bg-[var(--white)] rounded-3xl border-2 border-[#d64545]/30 shadow-lg shadow-[var(--brand-maroon-900)]/5 p-6 md:p-8 animate-fade-in hover:shadow-xl hover:shadow-[#f60000]/40 hover:border-[#d64545]/50 transition-all duration-300 h-full flex flex-col justify-center"
      role="tabpanel"
    >
      <div className="flex items-start gap-4 md:gap-5">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-[var(--brand-rose-700)]/10 flex items-center justify-center">
            {Icon && (
              <Icon
                className="w-6 h-6 text-[var(--brand-rose-700)]"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#d64545] mb-1.5">
            {program.name}
          </h3>
          <p className="text-sm font-medium text-[var(--ink-muted)] mb-3">
            {program.subtitle}
          </p>
          <p className="text-base md:text-lg text-[var(--ink-default)] leading-relaxed">
            {program.description}
          </p>
        </div>
      </div>
    </article>
  );
}
