import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
  maxWidth?: "default" | "narrow";
}

export function Container({
  children,
  className,
  as: Component = "div",
  maxWidth = "default",
}: ContainerProps) {
  const maxWidthClass =
    maxWidth === "narrow" ? "max-w-[1100px]" : "max-w-[1200px]";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        maxWidthClass,
        className
      )}
    >
      {children}
    </Component>
  );
}
