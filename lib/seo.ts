import { siteConfig } from "./site-config";
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Mahagathe — Care in Action",
    template: "%s | Mahagathe",
  },
  description: siteConfig.description,
  keywords: [
    "charity",
    "donation",
    "healthcare",
    "food support",
    "education",
    "India",
    "nonprofit",
    "social work",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Mahagathe — Care in Action",
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahagathe — Care in Action",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@mahagathe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes here when available
  },
};

