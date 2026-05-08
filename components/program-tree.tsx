"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import {
  Heart,
  UtensilsCrossed,
  HandHeart,
  BookOpen,
  LucideIcon,
  Sprout,
} from "lucide-react";

const programIcons: Record<string, LucideIcon> = {
  Āyuri: Heart,
  Bhandāra: UtensilsCrossed,
  Samriddhi: HandHeart,
  Adhyāya: BookOpen,
};

interface ProgramTreeProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

export function ProgramTree({ activeIndex, onChange }: ProgramTreeProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
        {siteConfig.programs.map((program, index) => {
          const Icon =
            programIcons[program.name as keyof typeof programIcons] || Heart;
          const isActive = activeIndex === index;

          return (
            <button
              key={program.name}
              onClick={() => onChange(index)}
              className={cn(
                "min-h-24 rounded-2xl border-2 p-4 text-left transition-all duration-300",
                isActive
                  ? "border-[var(--brand-rose-700)] bg-[var(--brand-rose-700)] text-white shadow-lg shadow-[var(--brand-rose-700)]/25"
                  : "border-[var(--brand-maroon-900)]/15 bg-white text-[var(--ink-strong)]"
              )}
            >
              <Icon
                className={cn(
                  "mb-3 h-8 w-8",
                  isActive ? "text-white" : "text-[var(--brand-maroon-900)]"
                )}
              />
              <span className="block text-lg font-bold leading-tight">
                {program.name}
              </span>
              <span
                className={cn(
                  "mt-1 block text-xs font-medium leading-snug",
                  isActive ? "text-white/80" : "text-[var(--ink-muted)]"
                )}
              >
                {program.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative hidden h-[600px] w-full items-center justify-center lg:flex">
        {/* SVG Tree Structure */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Central Trunk */}
          <path
            d="M200,600 L200,400"
            stroke="var(--brand-maroon-900)"
            strokeWidth="4"
            fill="none"
            className="opacity-20"
          />

          {/* Branch 1 (Top Left) */}
          <path
            d="M200,400 C200,300 100,300 100,200"
            stroke="var(--brand-maroon-900)"
            strokeWidth="3"
            fill="none"
            className={cn(
              "transition-all duration-500",
              activeIndex === 0 ? "opacity-60 stroke-[4px]" : "opacity-20"
            )}
          />
          {/* Branch 2 (Top Right) */}
          <path
            d="M200,400 C200,300 300,300 300,200"
            stroke="var(--brand-maroon-900)"
            strokeWidth="3"
            fill="none"
            className={cn(
              "transition-all duration-500",
              activeIndex === 1 ? "opacity-60 stroke-[4px]" : "opacity-20"
            )}
          />
          {/* Branch 3 (Bottom Left) */}
          <path
            d="M200,400 C200,350 60,350 60,350"
            stroke="var(--brand-maroon-900)"
            strokeWidth="3"
            fill="none"
            className={cn(
              "transition-all duration-500",
              activeIndex === 2 ? "opacity-60 stroke-[4px]" : "opacity-20"
            )}
          />
          {/* Branch 4 (Bottom Right) */}
          <path
            d="M200,400 C200,350 340,350 340,350"
            stroke="var(--brand-maroon-900)"
            strokeWidth="3"
            fill="none"
            className={cn(
              "transition-all duration-500",
              activeIndex === 3 ? "opacity-60 stroke-[4px]" : "opacity-20"
            )}
          />
        </svg>

        {/* Central Root/Logo Node */}
        <div className="absolute bottom-[25%] left-1/2 z-10 -translate-x-1/2 translate-y-1/2">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[var(--brand-maroon-900)]/20 bg-[var(--white)] shadow-xl">
            <Sprout className="h-10 w-10 text-[var(--brand-maroon-900)] opacity-80" />
          </div>
        </div>

        <TreeNode
          index={0}
          isActive={activeIndex === 0}
          onClick={() => onChange(0)}
          program={siteConfig.programs[0]}
          position="top-left"
        />
        <TreeNode
          index={1}
          isActive={activeIndex === 1}
          onClick={() => onChange(1)}
          program={siteConfig.programs[1]}
          position="top-right"
        />
        <TreeNode
          index={2}
          isActive={activeIndex === 2}
          onClick={() => onChange(2)}
          program={siteConfig.programs[2]}
          position="bottom-left"
        />
        <TreeNode
          index={3}
          isActive={activeIndex === 3}
          onClick={() => onChange(3)}
          program={siteConfig.programs[3]}
          position="bottom-right"
        />
      </div>
    </>
  );
}

interface TreeNodeProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
  program: { name: string; subtitle: string };
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

function TreeNode({ isActive, onClick, program, position }: TreeNodeProps) {
  const Icon = programIcons[program.name as keyof typeof programIcons] || Heart;

  const positionClasses = {
    "top-left": "top-[15%] left-[14%] xl:left-[18%]",
    "top-right": "top-[15%] right-[14%] xl:right-[18%]",
    "bottom-left": "top-[45%] left-[2%] xl:left-[8%]",
    "bottom-right": "top-[45%] right-[2%] xl:right-[8%]",
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "absolute z-20 group outline-none",
        positionClasses[position]
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-24 w-24 xl:h-28 xl:w-28">
        <div
          className={cn(
            "absolute inset-0 rotate-45 rounded-3xl transition-all duration-500",
            isActive
              ? "bg-[var(--brand-rose-700)] shadow-lg shadow-[#f60000]/40"
              : "border-2 border-[var(--brand-maroon-900)]/20 bg-[var(--white)] group-hover:border-[var(--brand-rose-700)]/50"
          )}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-2 text-center">
          <Icon
            className={cn(
              "mb-2 h-10 w-10 transition-colors duration-300",
              isActive ? "text-white" : "text-[var(--brand-maroon-900)]"
            )}
          />
          <span
            className={cn(
              "text-xs xl:text-sm font-bold transition-colors duration-300",
              isActive ? "text-white" : "text-[var(--ink-strong)]"
            )}
          >
            {program.name}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
