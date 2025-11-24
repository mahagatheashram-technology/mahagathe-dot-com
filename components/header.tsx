"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-18 md:h-14">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span
                className={cn(
                  "text-lg md:text-3xl font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-[var(--brand-maroon-900)]" : "text-white"
                )}
              >
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Social Icons (Right) */}
          <div className="flex items-center gap-2 md:gap-3">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "smooth w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95",
                    isScrolled
                      ? "bg-[var(--brand-mauve-600)]/10 text-[var(--brand-maroon-900)] hover:bg-[var(--brand-mauve-600)]/30"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  )}
                  aria-label={key}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
