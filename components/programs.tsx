"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
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
  const [activeProgram, setActiveProgram] = useState(
    siteConfig.programs[0].name
  );

  return (
    <section
      id="programs"
      className="bg-[var(--cream-60)] py-16 md:py-20"
      aria-labelledby="programs-heading"
    >
      <Container maxWidth="narrow">
        <h2
          id="programs-heading"
          className="text-4xl md:text-5xl font-bold text-[var(--ink-strong)] text-center mb-4 md:mb-6"
        >
          Our Programs
        </h2>
        <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] items-start">
          <ProgramTabs
            activeProgram={activeProgram}
            onChange={setActiveProgram}
          />
          <ProgramDetail activeProgram={activeProgram} />
        </div>
      </Container>
    </section>
  );
}

interface ProgramTabsProps {
  activeProgram: string;
  onChange: (name: string) => void;
}

function ProgramTabs({ activeProgram, onChange }: ProgramTabsProps) {
  return (
    <div
      className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
      role="tablist"
      aria-label="Program selector"
    >
      {siteConfig.programs.map((program) => {
        const Icon = programIcons[program.name as keyof typeof programIcons];
        const isActive = activeProgram === program.name;

        return (
          <button
            key={program.name}
            type="button"
            onClick={() => onChange(program.name)}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm transition-all",
              "min-w-[12rem] md:min-w-0",
              isActive
                ? "bg-[var(--white)] border-[var(--brand-rose-700)]/60 shadow-md"
                : "bg-[var(--white)]/70 border-[var(--neutral-200)]/70 hover:bg-[var(--white)]"
            )}
            role="tab"
            aria-selected={isActive}
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand-rose-700)]/10 flex items-center justify-center">
                {Icon && (
                  <Icon
                    className="w-5 h-5 text-[var(--brand-rose-700)]"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--ink-strong)]">
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
      className="bg-[var(--white)] rounded-3xl border border-[var(--neutral-200)]/70 shadow-sm md:shadow-md p-6 md:p-8"
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
          <h3 className="text-2xl font-bold text-[var(--ink-strong)] mb-1.5">
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
