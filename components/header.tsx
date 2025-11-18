"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[var(--brand-maroon-900)] text-[var(--ink-inverse)] backdrop-saturate-150 backdrop-blur-sm"
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Desktop: Centered brand with social icons on right */}
        <div className="hidden md:flex items-center justify-between h-[72px] relative">
          {/* Center: Brand - absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/#top"
              className="text-2xl md:text-3xl font-bold text-[var(--white)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 rounded tracking-wide"
              aria-label="Mahagathe Foundation Home"
            >
              Mahagathe Foundation
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2 ml-auto">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-[var(--brand-mauve-600)]/40 backdrop-blur-sm opacity-95 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2"
                  aria-label={`Visit our ${key} page`}
                  title={key}
                >
                  {Icon && (
                    <Icon
                      className="w-5 h-5 text-[var(--white)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">{key}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile: Brand left, Hamburger right */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link
            href="/#top"
            className="text-lg font-bold text-[var(--white)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 rounded tracking-wide"
            aria-label="Mahagathe Foundation Home"
          >
            Mahagathe Foundation
          </Link>

          <button
            className="p-2 text-[var(--white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <nav
          className="md:hidden bg-[var(--brand-maroon-900)] border-t border-[var(--neutral-300)]/30"
          aria-label="Mobile navigation"
        >
          <div className="max-w-[1200px] mx-auto px-6 py-4 space-y-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block py-3 text-[var(--white)] hover:text-[var(--pink-200)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 rounded px-2 min-h-[44px] flex items-center text-base"
              >
                {item.label}
              </Link>
            ))}

            {/* Social Icons in Mobile Drawer */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--neutral-300)]/30">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--brand-mauve-600)]/40 backdrop-blur-sm opacity-95 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2"
                    aria-label={`Visit our ${key} page`}
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-[var(--white)]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">{key}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
