import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  asChild = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--ink-inverse)] text-[var(--brand-maroon-900)] hover:bg-[var(--mahagathe-red)] hover:text-[var(--ink-inverse)] active:bg-[var(--mahagathe-red)] shadow-sm",
    secondary:
      "bg-[var(--mahagathe-red)] text-[var(--ink-inverse)] hover:bg-[var(--brand-rose-700)] active:bg-[var(--brand-plum-800)] shadow-sm",
    outline:
      "border-2 border-[var(--brand-maroon-900)] text-[var(--brand-maroon-900)] hover:bg-[var(--brand-maroon-900)] hover:text-[var(--ink-inverse)] active:bg-[var(--brand-maroon-900)]",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base min-w-[120px]",
    lg: "h-14 px-8 text-lg min-w-[160px]",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
