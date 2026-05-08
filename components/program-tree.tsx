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
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* SVG Tree Structure — viewBox matches container ratio so endpoints align with node positions */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Central Trunk */}
        <path
          d="M200,580 L200,450"
          stroke="var(--brand-maroon-900)"
          strokeWidth="4"
          fill="none"
          className="opacity-20"
        />

        {/* Branch 1 — top-left (Āyuri) */}
        <path
          d="M200,450 C200,350 150,220 85,100"
          stroke="var(--brand-maroon-900)"
          strokeWidth="3"
          fill="none"
          className={cn(
            "transition-all duration-500",
            activeIndex === 0 ? "opacity-60 stroke-[4px]" : "opacity-20"
          )}
        />
        {/* Branch 2 — top-right (Bhandāra) */}
        <path
          d="M200,450 C200,350 250,220 315,100"
          stroke="var(--brand-maroon-900)"
          strokeWidth="3"
          fill="none"
          className={cn(
            "transition-all duration-500",
            activeIndex === 1 ? "opacity-60 stroke-[4px]" : "opacity-20"
          )}
        />
        {/* Branch 3 — bottom-left (Samriddhi) */}
        <path
          d="M200,450 C150,450 80,370 50,280"
          stroke="var(--brand-maroon-900)"
          strokeWidth="3"
          fill="none"
          className={cn(
            "transition-all duration-500",
            activeIndex === 2 ? "opacity-60 stroke-[4px]" : "opacity-20"
          )}
        />
        {/* Branch 4 — bottom-right (Adhyāya) */}
        <path
          d="M200,450 C250,450 320,370 350,280"
          stroke="var(--brand-maroon-900)"
          strokeWidth="3"
          fill="none"
          className={cn(
            "transition-all duration-500",
            activeIndex === 3 ? "opacity-60 stroke-[4px]" : "opacity-20"
          )}
        />
      </svg>

      {/* Central Root Node */}
      <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full bg-[var(--white)] border-4 border-[var(--brand-maroon-900)]/20 flex items-center justify-center shadow-xl">
          <Sprout className="w-10 h-10 text-[var(--brand-maroon-900)] opacity-80" />
        </div>
      </div>

      {/* Leaf Nodes */}
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

  // Positions are calibrated to align with SVG branch endpoints.
  // top-left → SVG(85,100), top-right → SVG(315,100)
  // bottom-left → SVG(50,280), bottom-right → SVG(350,280)
  const positionClasses = {
    "top-left": "top-[8%] left-[10%] md:left-[15%]",
    "top-right": "top-[8%] right-[10%] md:right-[15%]",
    "bottom-left": "top-[37%] left-[2%] md:left-[7%]",
    "bottom-right": "top-[37%] right-[2%] md:right-[7%]",
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
        {/* Diamond wrapper — sized to contain the 45°-rotated inner square's bounding box */}
        <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px] flex items-center justify-center">
          <div
            className={cn(
              "w-[62px] h-[62px] md:w-[70px] md:h-[70px] rotate-45 rounded-xl flex items-center justify-center transition-all duration-500",
              isActive
                ? "bg-[var(--brand-maroon-900)] shadow-xl shadow-[var(--brand-maroon-900)]/50"
                : "bg-white border-2 border-[var(--brand-maroon-900)]/20 group-hover:border-[var(--brand-rose-700)]/50 group-hover:shadow-md"
            )}
          >
            <Icon
              className={cn(
                "-rotate-45 w-7 h-7 md:w-8 md:h-8 transition-colors duration-300",
                isActive ? "text-white" : "text-[var(--brand-maroon-900)]"
              )}
            />
          </div>
        </div>
        {/* Label */}
        <span
          className={cn(
            "mt-1 text-xs md:text-sm font-bold transition-colors duration-300 whitespace-nowrap",
            isActive
              ? "text-[var(--brand-maroon-900)]"
              : "text-[var(--ink-strong)]"
          )}
        >
          {program.name}
        </span>
      </div>
    </motion.button>
  );
}
