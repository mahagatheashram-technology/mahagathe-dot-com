"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinksLeft = siteConfig.nav.left;
  const navLinksRight = siteConfig.nav.right;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Far Left: Mahagathe.org Link (Desktop) */}
          <div className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20">
            <a
              href="https://mahagathe.org"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 font-medium transition-colors hover:opacity-80 group"
              )}
              style={{ color: "var(--mahagathe-red)" }}
              aria-label="Visit Mahagathe.org"
            >
              <div
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isScrolled
                    ? "bg-[var(--mahagathe-red)]/10 group-hover:bg-[var(--mahagathe-red)]/20"
                    : "bg-white/20 group-hover:bg-white/30"
                )}
              >
                <ArrowUpRight
                  className="w-7 h-7"
                  style={{ color: "var(--mahagathe-red)" }}
                />
              </div>
              <span className="hidden xl:inline text-sm font-bold tracking-wide">
                mahagathe.org
              </span>
            </a>
          </div>

          {/* Center Block: Links - Logo - Links */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-10 mx-auto w-full px-20 xl:px-28">
            {/* Left Links */}
            <div className="flex items-center gap-5 xl:gap-10">
              {navLinksLeft.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-base xl:text-xl font-bold transition-colors hover:opacity-80 whitespace-nowrap",
                    isScrolled
                      ? "!text-[var(--brand-maroon-900)]"
                      : "!text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center px-4 xl:px-6">
              <Link href="/" className="flex flex-col items-center group">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "text-3xl xl:text-4xl font-serif font-extrabold tracking-tight transition-colors duration-300 leading-none",
                      isScrolled
                        ? "!text-[var(--brand-maroon-900)]"
                        : "!text-white"
                    )}
                  >
                    Mahagathe
                  </span>
                  <span
                    className={cn(
                      "text-[10px] lg:text-xs uppercase tracking-[0.3em] transition-colors duration-300 mt-1 font-sans font-semibold",
                      isScrolled
                        ? "!text-[var(--brand-maroon-900)]/80"
                        : "!text-white/80"
                    )}
                  >
                    Foundation
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-5 xl:gap-10">
              {navLinksRight.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-base xl:text-xl font-bold transition-colors hover:opacity-80 whitespace-nowrap",
                    isScrolled
                      ? "!text-[var(--brand-maroon-900)]"
                      : "!text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Far Right: Social Icons (Desktop) */}
          <div className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20">
            <div className="flex items-center gap-2 xl:gap-4">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 xl:w-14 xl:h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110",
                      isScrolled
                        ? "bg-[var(--brand-maroon-900)]/10 !text-[var(--brand-maroon-900)] hover:bg-[var(--brand-maroon-900)]/20"
                        : "bg-white/10 !text-white hover:bg-white/20 backdrop-blur-sm"
                    )}
                    aria-label={key}
                  >
                    {Icon && <Icon className="w-5 h-5 xl:w-7 xl:h-7" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between w-full px-2">
            {/* Mobile Logo */}
            <Link href="/" className="flex flex-col items-start">
              <span
                className={cn(
                  "text-2xl font-serif font-extrabold tracking-tight transition-colors duration-300 leading-none",
                  isScrolled ? "text-[var(--brand-maroon-900)]" : "text-white"
                )}
              >
                Mahagathe
              </span>
              <span
                className={cn(
                  "text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 mt-0.5 font-sans font-semibold",
                  isScrolled
                    ? "text-[var(--brand-maroon-900)]/80"
                    : "text-white/80"
                )}
              >
                Foundation
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "inline-flex items-center justify-center rounded-full p-3 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                isScrolled
                  ? "bg-[var(--brand-maroon-900)]/10 text-[var(--brand-maroon-900)]"
                  : "bg-white/10 text-white backdrop-blur-sm"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="fixed inset-0 z-[60] bg-[var(--brand-maroon-900)] text-white pt-6 px-6 animate-fade-in lg:hidden overflow-y-auto">
              {/* Close Button at top */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex flex-col gap-8 pb-10">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="!text-white text-3xl font-bold text-center mb-4"
                >
                  Mahagathe Foundation
                </Link>

                <div className="flex flex-col gap-6">
                  <div className="text-sm uppercase tracking-widest text-white/50 font-semibold border-b border-white/10 pb-2">
                    Menu
                  </div>
                  {[...navLinksLeft, ...navLinksRight].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="!text-white text-2xl font-medium hover:!text-[var(--pink-200)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://mahagathe.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-white text-xl font-medium hover:!text-[var(--pink-200)] transition-colors flex items-center gap-3 mt-4"
                  >
                    <div className="p-2 bg-white/10 rounded-full">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    mahagathe.org
                  </a>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                  <div className="text-sm uppercase tracking-widest text-white/50 font-semibold border-b border-white/10 pb-2">
                    Connect
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {Object.entries(siteConfig.social).map(([key, url]) => {
                      const Icon = socialIcons[key as keyof typeof socialIcons];
                      return (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!text-white w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                          {Icon && <Icon className="w-7 h-7" />}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
