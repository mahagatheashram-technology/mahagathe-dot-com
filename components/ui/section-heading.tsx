import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  as: Component = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <Component
        id={id}
        className="text-4xl md:text-5xl font-serif font-bold text-[var(--ink-strong)] mb-4"
      >
        {title}
      </Component>
      {subtitle && (
        <p className="text-lg sm:text-xl text-[var(--ink-muted)] max-w-3xl mx-auto font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
