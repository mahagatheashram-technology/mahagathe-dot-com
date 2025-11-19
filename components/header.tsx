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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <div className="relative flex items-center justify-between h-12 md:h-14">
          {/* Mobile Menu Button (Left) */}
          <div className="flex-1 md:hidden">
            <button
              className={cn(
                "smooth p-2 rounded-full hover:bg-white/10 active:scale-95",
                isScrolled ? "text-[var(--brand-maroon-900)]" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Empty Left Spacer for Desktop */}
          <div className="hidden md:block flex-1" />

          {/* Logo (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span
                className={cn(
                  "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-[var(--brand-maroon-900)]" : "text-white"
                )}
              >
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Social Icons (Right) */}
          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center gap-3 pl-4">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "smooth w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95",
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
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-white/95 backdrop-blur-xl border-t border-white/10",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {/* Removed Nav Links as per request */}
          <div className="flex gap-6 justify-center pt-2">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-maroon-900)] hover:text-[var(--brand-rose-700)] transition-colors"
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
