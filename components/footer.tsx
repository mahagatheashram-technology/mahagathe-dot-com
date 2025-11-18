import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import {
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--brand-maroon-900)] text-[var(--ink-inverse)] py-12 sm:py-16"
      role="contentinfo"
    >
      <Container maxWidth="default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--ink-inverse)]">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-[var(--ink-inverse)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] rounded"
                  aria-label={`Email us at ${siteConfig.contact.email}`}
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--ink-inverse)] hover:text-[var(--whatsapp)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] rounded"
                  aria-label={`WhatsApp us at ${siteConfig.contact.whatsapp}`}
                >
                  <MessageCircle className="w-5 h-5 text-[var(--whatsapp)]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--ink-inverse)]">Follow Us</h3>
            <ul className="flex gap-5 md:gap-6">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon =
                  socialIcons[key as keyof typeof socialIcons];
                return (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-[var(--brand-mauve-600)]/30 backdrop-blur-sm opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)]"
                      aria-label={`Visit our ${key} page`}
                      title={key}
                    >
                      {Icon && (
                        <Icon
                          className="w-6 h-6 md:w-7 md:h-7 text-[var(--ink-inverse)]"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--ink-inverse)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--ink-inverse)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--ink-inverse)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] rounded"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-[var(--ink-inverse)] hover:text-[var(--pink-200)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mahagathe-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-maroon-900)] rounded"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--neutral-300)]/20 pt-8 text-center text-sm text-[var(--ink-inverse)]/80">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
