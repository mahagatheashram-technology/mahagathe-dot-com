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
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* SVG Tree Structure */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
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

        {/* Branches */}
        {/* Branch 1 (Top Left) */}
        <path
          d="M200,400 C200,340 130,300 110,260"
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
          d="M200,400 C200,340 270,300 290,260"
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
          d="M200,400 C200,370 120,370 90,370"
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
          d="M200,400 C200,370 280,370 310,370"
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
      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full bg-[var(--white)] border-4 border-[var(--brand-maroon-900)]/20 flex items-center justify-center shadow-xl">
          <Sprout className="w-10 h-10 text-[var(--brand-maroon-900)] opacity-80" />
        </div>
      </div>

      {/* Leaf Nodes */}
      {/* Node 1: Top Left */}
      <TreeNode
        index={0}
        isActive={activeIndex === 0}
        onClick={() => onChange(0)}
        program={siteConfig.programs[0]}
        position="top-left"
      />

      {/* Node 2: Top Right */}
      <TreeNode
        index={1}
        isActive={activeIndex === 1}
        onClick={() => onChange(1)}
        program={siteConfig.programs[1]}
        position="top-right"
      />

      {/* Node 3: Bottom Left */}
      <TreeNode
        index={2}
        isActive={activeIndex === 2}
        onClick={() => onChange(2)}
        program={siteConfig.programs[2]}
        position="bottom-left"
      />

      {/* Node 4: Bottom Right */}
      <TreeNode
        index={3}
        isActive={activeIndex === 3}
        onClick={() => onChange(3)}
        program={siteConfig.programs[3]}
        position="bottom-right"
      />
    </div>
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
    "top-left": "top-[12%] left-[12%] md:left-[18%]",
    "top-right": "top-[12%] right-[12%] md:right-[18%]",
    "bottom-left": "top-[42%] left-[2%] md:left-[8%]",
    "bottom-right": "top-[42%] right-[2%] md:right-[8%]",
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
      <div className="relative flex flex-col items-center">
        {/* Circular Background */}
        <div
          className={cn(
            "relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500",
            isActive
              ? "bg-[var(--brand-rose-700)] shadow-lg shadow-[var(--brand-rose-700)]/40"
              : "bg-white border-2 border-[var(--brand-maroon-900)]/20 group-hover:border-[var(--brand-rose-700)]/50"
          )}
        >
          <Icon
            className={cn(
              "w-10 h-10 md:w-12 md:h-12 transition-colors duration-300",
              isActive ? "text-white" : "text-[var(--brand-maroon-900)]"
            )}
          />
        </div>
        {/* Label below the circle */}
        <span
          className={cn(
            "mt-2 text-xs md:text-sm font-bold transition-colors duration-300 whitespace-nowrap",
            isActive
              ? "text-[var(--brand-rose-700)]"
              : "text-[var(--ink-strong)]"
          )}
        >
          {program.name}
        </span>
      </div>
    </motion.button>
  );
}
