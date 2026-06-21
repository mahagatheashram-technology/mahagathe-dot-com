import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
};

export function Footer() {
  return (
    <footer className="bg-[var(--brand-maroon-900)] text-white py-12 md:py-10 border-t border-white/10">
      <Container maxWidth="narrow">
        <div className="flex flex-col items-center gap-8">
          {/* Bottom Row: Icons and Copyright */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            {/* Social Icons */}
            <div className="flex gap-4">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    aria-label={`Visit our ${key} page`}
                    title={key}
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">{key}</span>
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-sm text-white/60 font-sans font-light tracking-wide text-center md:text-right">
              {siteConfig.name} &copy; {new Date().getFullYear()}. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
