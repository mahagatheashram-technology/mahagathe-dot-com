"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import {
  UtensilsCrossed,
  Stethoscope,
  HandHeart,
  Sparkles,
  GraduationCap,
  Leaf,
  Home,
  Brain,
  Heart,
  LucideIcon,
} from "lucide-react";

const programIcons: Record<string, LucideIcon> = {
  Bhandāra: UtensilsCrossed,
  Prāyus: Stethoscope,
  Samṛti: HandHeart,
  Sampanna: Sparkles,
  Advika: GraduationCap,
  Saṃveṣṭi: Leaf,
  Aspadam: Home,
  Āśleṣa: Brain,
};

// Radial ring geometry (percentages of the tree container).
// The container is taller than it is wide, so we use a smaller vertical
// radius to keep the ring visually circular.
const RADIUS_X = 36;
const RADIUS_Y = 42;

function nodePosition(index: number, total: number) {
  // Start at the top (-90deg) and go clockwise.
  const angle = ((-90 + (360 / total) * index) * Math.PI) / 180;
  return {
    cx: 50 + RADIUS_X * Math.cos(angle),
    cy: 50 + RADIUS_Y * Math.sin(angle),
  };
}

interface ProgramTreeProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

export function ProgramTree({ activeIndex, onChange }: ProgramTreeProps) {
  const programs = siteConfig.programs;
  const total = programs.length;

  return (
    <>
      {/* Mobile / tablet */}
      <div className="lg:hidden">
        {/* Brand emblem anchors the section, mirroring the desktop hub */}
        <div className="mb-7 flex justify-center">
          <Image
            src="/mahagathe-logo.png"
            alt="Mahagathe Foundation"
            width={547}
            height={800}
            className="h-auto w-20 sm:w-24"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {programs.map((program, index) => {
            const Icon =
              programIcons[program.name as keyof typeof programIcons] || Heart;
            const isActive = activeIndex === index;

            return (
              <button
                key={program.name}
                onClick={() => onChange(index)}
                aria-pressed={isActive}
                className={cn(
                  "flex flex-col gap-2.5 rounded-2xl border p-3.5 text-left transition-all duration-300 sm:p-4",
                  isActive
                    ? "border-transparent bg-[var(--brand-rose-700)] text-white shadow-lg shadow-[var(--brand-rose-700)]/30 -translate-y-0.5"
                    : "border-[var(--brand-maroon-900)]/12 bg-white text-[var(--ink-strong)] shadow-sm hover:border-[var(--brand-rose-700)]/40 hover:shadow-md"
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300",
                    isActive
                      ? "bg-white/20"
                      : "bg-[var(--brand-rose-700)]/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-white" : "text-[var(--brand-rose-700)]"
                    )}
                  />
                </span>
                <span className="block text-base font-bold leading-tight">
                  {program.name}
                </span>
                <span
                  className={cn(
                    "block text-[11px] font-medium leading-snug sm:text-xs",
                    isActive ? "text-white/85" : "text-[var(--ink-muted)]"
                  )}
                >
                  {program.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: radial ring */}
      <div className="relative hidden h-[680px] w-full items-center justify-center lg:flex">
        {/* Connector lines from the centre to each node */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {programs.map((program, index) => {
            const { cx, cy } = nodePosition(index, total);
            const isActive = activeIndex === index;
            return (
              <line
                key={program.name}
                x1={50}
                y1={50}
                x2={cx}
                y2={cy}
                stroke="var(--brand-maroon-900)"
                strokeWidth={isActive ? 0.7 : 0.4}
                className={cn(
                  "transition-all duration-500",
                  isActive ? "opacity-60" : "opacity-20"
                )}
              />
            );
          })}
        </svg>

        {/* Central logo. The PNG has an opaque white background that matches the
            section (--white), so it blends seamlessly and masks the spoke
            convergence behind it — no halo or shadow (those would outline the
            otherwise-invisible white rectangle). */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/mahagathe-logo.png"
            alt="Mahagathe Foundation"
            width={547}
            height={800}
            className="h-auto w-[124px] xl:w-[140px]"
            priority
          />
        </div>

        {/* Program nodes around the ring */}
        {programs.map((program, index) => {
          const { cx, cy } = nodePosition(index, total);
          return (
            <TreeNode
              key={program.name}
              isActive={activeIndex === index}
              onClick={() => onChange(index)}
              program={program}
              cx={cx}
              cy={cy}
            />
          );
        })}
      </div>
    </>
  );
}

interface TreeNodeProps {
  isActive: boolean;
  onClick: () => void;
  program: { name: string; subtitle: string };
  cx: number;
  cy: number;
}

function TreeNode({ isActive, onClick, program, cx, cy }: TreeNodeProps) {
  const Icon = programIcons[program.name as keyof typeof programIcons] || Heart;

  return (
    // Wrapper handles positioning + centring (static CSS transform).
    // The inner motion.button only animates `scale`, so Framer Motion never
    // clobbers the centring translate — preventing the node from jumping on hover.
    <div
      style={{ left: `${cx}%`, top: `${cy}%` }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.button
        onClick={onClick}
        className="group block outline-none"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-[104px] w-[104px] xl:h-28 xl:w-28">
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
                "mb-1.5 h-9 w-9 transition-colors duration-300 xl:h-10 xl:w-10",
                isActive ? "text-white" : "text-[var(--brand-maroon-900)]"
              )}
            />
            <span
              className={cn(
                "text-xs font-bold leading-tight transition-colors duration-300 xl:text-sm",
                isActive ? "text-white" : "text-[var(--ink-strong)]"
              )}
            >
              {program.name}
            </span>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
