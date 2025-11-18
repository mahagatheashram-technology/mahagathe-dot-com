role & objective

You are the lead implementer. Build a single-page, donation-focused website for mahagathe.com using Next.js (App Router) + Tailwind + TypeScript, deployed on Vercel.
Constraints:

One page only, smooth anchor navigation, fast and accessible (WCAG AA).

Brand continuity with mahagathe.org (colors/spacing/type feel).

All Donate CTAs link out to https://mahagathe.org/donation-programs/ (Razorpay already lives there).

Keep the tone neutral/warm (charity-first, minimal religious cues).

No server auth, no CMS for v1. Static content via config/MDX placeholders.

Analytics must be simple and privacy-friendly (Vercel Analytics OR Plausible).

audience

Donors in Bharat + global diaspora + CSR-aligned visitors. Primary job: understand mission fast → click Donate.

deliverables

Vercel-ready Next.js repo, clean component architecture.

Design tokens (colors, spacing, radii) lifting the feel from mahagathe.org.

Sections: Header/AnchorNav, Hero, About, Programs, Activities Gallery, Donate Band, Contact/Footer.

SEO metadata, OpenGraph, JSON-LD (Organization + WebSite), sitemap/robots.

A11y + Perf: Lighthouse ≥90 mobile, keyboard nav, skip link, focus rings.

tech choices (lock)

Next.js (App Router), TypeScript, TailwindCSS.

ESM, server components by default; client components only when needed.

Prettier + ESLint; Husky pre-commit lint.

Icons: lucide-react.

Analytics: Vercel Analytics (prefer) or Plausible (if configured).

Images optimized with next/image.

project structure (no code, just create these files)

/app/(site)/page.tsx — compose all sections

/app/(site)/layout.tsx — metadata, font load, analytics

/components/hero.tsx, about.tsx, programs.tsx, activities.tsx, donate-band.tsx, footer.tsx, header.tsx, skip-link.tsx

/components/ui/* — small primitives (button, container, section heading)

/lib/site-config.ts — global constants (links, labels, contact)

/lib/seo.ts — SEO helpers (title, description, OG)

/public/brand/* — logo PNG; placeholders

/styles/globals.css — Tailwind base; CSS vars for tokens

/content/activities.json — 9 placeholder items (image src optional, caption string)

design tokens (define as CSS variables + Tailwind config)

--color-primary: #4B1414 (deep maroon)

--color-sand: #FEF0E3

--color-accent-1: #956760

--color-accent-2: #774046

--color-white: #FFFFFF

Text on dark must pass contrast (≥4.5:1).

Radii: --radius-xl: 1.25rem (hero/buttons), --radius-md: .75rem (cards).

Spacing scale: 4/6/8/12/16/24/32/48.

Shadow: subtle, no heavy glow.

Fonts: Inspect mahagathe.org and load the same family if publicly available; if not, choose a visually similar, highly readable sans (e.g., Inter/Poppins) with font-display: swap. Ensure the treatment (weight/letter-spacing) feels like mahagathe.org.

content constants (hard-code for v1; later move to CMS)

Mission headline (H1): “Care in action—supporting health, food, and learning with dignity.”

Subhead: “Your gift powers practical help—medical aid, meals, and education kits for families in need.”

Primary CTA URL: https://mahagathe.org/donation-programs/

Programs (template copy; short, 1–2 lines each; replace later):

Āyuri (Healthcare Assistance) — helps cover essential treatments and medicines.

Bhandāra (Food Support) — ration kits and community meals.

Samriddhi (Emergency & Livelihood Aid) — bridge support for crises and recovery.

Adhyāya (Learning Support) — education kits, workshops, and guidance.

Activities gallery: reserve 9 landscape items with placeholder images and short captions [TBD].

Contact email: contact@mahagathe.org

WhatsApp CTA (optional link/button text “WhatsApp”): +91 63640 66004

Socials (icons only):

YouTube → https://www.youtube.com/@Mahagathe

Instagram → https://www.instagram.com/mahagathe/

Facebook → https://m.facebook.com/voiceofmahagathe/

X → https://x.com/mahagathe

(LinkedIn may be added later.)

sections (functional spec)
1) Header / AnchorNav

Sticky at top; left = logo; right = inline anchors: About, Programs, Activities, Donate, Contact.

Add Skip to content component that jumps to #main.

On mobile: collapsible menu with large tap targets.

2) Hero

Full-width, above the fold.

Mission (H1), Subhead (max 2 lines), Primary Button “Donate Now” → external URL (open in same tab).

Optional subtle background pattern; no heavy video.

Ensure LCP ≤ 2.5s (avoid giant images).

3) About

50–80 words, neutral tone, charity-first.

Small supporting image or icon row is ok.

4) Programs

4 cards in responsive grid (2×2 on mobile/tablet).

Each: name, 1–2 sentence summary, subtle icon.

No click-through pages in v1.

5) Activities Gallery

3×3 grid (mobile: 1 column; tablet: 2; desktop: 3).

Each tile: image (placeholder) with alt, short caption (TBD).

Lazy-load images; use sizes for responsive images.

6) Donate Band

Prominent, high-contrast band near the bottom.

Copy: “Ready to help? Give securely via our main donations portal.”

Button: Donate at Mahagathe.org → external URL.

7) Contact / Footer

Email; WhatsApp; socials (icons only).

Tiny links: Privacy • Terms • Refund & Cancellation (simple, static pages).

accessibility checklist (must pass)

Landmarks: header, main, footer, nav, section with aria-labelledby.

Keyboard: tab order intuitive; visible focus; menu toggles focus-trap; skip link works.

Color contrast: buttons/links/overlays meet AA.

Images: descriptive alt; decorative images alt="".

Motion: respect prefers-reduced-motion.

performance checklist

Use next/image with width/height, modern formats.

Inline critical CSS only via Tailwind; avoid extra CSS libs.

No client-side heavy libraries unless justified.

Preload primary font; use font-display: swap.

Lighthouse targets (mobile):

Performance ≥ 90, LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200 ms.

seo & analytics

Title: “Mahagathe — Care in Action” (adjust if needed).

Meta description ≤ 160 chars, charity-focused.

OG image (static).

JSON-LD: Organization + WebSite; include sameAs for socials.

robots.txt + sitemap.xml.

Add Vercel Analytics (prefer) or Plausible via script (defer). No cookies banner if analytics are cookieless.

legal pages (simple static)

Privacy Policy (contact form only; outbound donations handled on mahagathe.org).

Terms of Use (informational; external donation link).

Refund & Cancellation (state donations processed on mahagathe.org; link to their policy; provide contact email).

deployment

Create GitHub repo mahagathe/mahagathe.com.

Add Vercel project (Production + Preview envs).

Connect domain mahagathe.com (Apex) with www redirect to apex.

Set build command (defaults ok).

Add Vercel Analytics.

acceptance tests (run & document)

Navigation: anchor links scroll smoothly; sticky header; keyboard works.

Donate CTA: all buttons route to https://mahagathe.org/donation-programs/.

Responsive: breakpoints at 360/768/1024/1440 look clean; tap targets ≥44px.

A11y: no axe violations; headings logical; skip link works.

Perf: Lighthouse mobile ≥90; LCP image optimized; no layout shift.

SEO: Title/description present; OG image; JSON-LD valid via Rich Results test.

Content: 9 gallery placeholders visible; programs show four cards with short text.

Brand: colors feel 1:1 with mahagathe.org header palette.

non-blocking v2 backlog (note for later)

Impact counters & transparency wall (Audited reports, annual numbers).

CMS (Notion/Headless/Convex) for Activities.

Campaign tiles with Goal/Raised filters.

Multi-language or regionalization if needed.

rules of engagement

Do not invent copy or numbers. Use the constants above.

If an asset is missing (e.g., SVG logo), use the PNG with max-quality and a neutral fallback.

Keep the codebase minimal, readable, and documented in a short README.md (where to edit content).

Produce a checklist report at the end: what shipped, what’s left, and Lighthouse/A11y scores.