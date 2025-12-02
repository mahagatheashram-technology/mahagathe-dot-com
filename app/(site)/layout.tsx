import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { defaultMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "@/styles/tokens.css";
import "@/styles/globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = defaultMetadata;

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
        sameAs: [
          siteConfig.social.youtube,
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.x,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contact.email,
          contactType: "Customer Service",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

