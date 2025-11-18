# Mahagathe.com

A single-page, donation-focused website for mahagathe.com built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- Single-page design with smooth anchor navigation
- Fully responsive (mobile-first)
- WCAG AA accessible
- SEO optimized with metadata, OpenGraph, and JSON-LD structured data
- Performance optimized (Lighthouse ≥90 mobile target)
- Privacy-friendly analytics (Vercel Analytics)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahagatheashram-technology/mahagathe-dot-com.git
cd mahagathe-dot-com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mahagathe-dot-com/
├── app/
│   ├── (site)/          # Main site layout and page
│   │   ├── layout.tsx   # Site layout with SEO metadata
│   │   └── page.tsx     # Home page (all sections)
│   ├── privacy/         # Privacy Policy page
│   ├── terms/           # Terms of Use page
│   ├── refund/          # Refund & Cancellation page
│   ├── layout.tsx       # Root layout
│   ├── robots.ts        # Robots.txt generator
│   └── sitemap.ts       # Sitemap generator
├── components/
│   ├── ui/              # Reusable UI primitives
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── section-heading.tsx
│   ├── header.tsx       # Navigation header
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── programs.tsx     # Programs section
│   ├── activities.tsx   # Activities gallery
│   ├── donate-band.tsx  # Donate CTA section
│   ├── footer.tsx       # Footer with contact/socials
│   └── skip-link.tsx    # Accessibility skip link
├── content/
│   └── activities.json  # Activities gallery data
├── lib/
│   ├── site-config.ts   # Site-wide constants and content
│   ├── seo.ts           # SEO metadata helpers
│   └── utils.ts         # Utility functions
├── public/
│   └── brand/           # Logo and brand assets
└── styles/
    └── globals.css      # Global styles and CSS variables
```

## Editing Content

### Site-Wide Content

Edit `/lib/site-config.ts` to update:
- Mission statement and tagline
- Program descriptions
- Contact information
- Social media links
- Navigation items

### Activities Gallery

Edit `/content/activities.json` to update the gallery items. Each item should have:
- `id`: Unique identifier
- `caption`: Image caption/description
- `image`: Path to image in `/public` directory

### Legal Pages

Edit the following files for legal content:
- `/app/privacy/page.tsx` - Privacy Policy
- `/app/terms/page.tsx` - Terms of Use
- `/app/refund/page.tsx` - Refund & Cancellation Policy

### Images

1. **Logo**: Place logo in `/public/brand/logo.png`
2. **OG Image**: Place OpenGraph image at `/public/og-image.jpg` (1200x630px recommended)
3. **Activity Images**: Place activity images in `/public/` and update paths in `activities.json`

## Design System

### Colors

See `BRAND.md` for the complete brand token system. All colors are defined as CSS variables in `/styles/tokens.css` and accessed via Tailwind classes (e.g., `bg-brand-maroon`, `text-text-strong`).

### Typography

- Font: Inter (loaded via Next.js font optimization)
- Font display: swap (for performance)

### Spacing

Scale: 4, 6, 8, 12, 16, 24, 32, 48 (in rem units)

### Border Radius

- XL: 1.25rem (hero/buttons)
- MD: 0.75rem (cards)

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel
3. Connect domain `mahagathe.com` (Apex) with `www` redirect to apex
4. Vercel Analytics is automatically enabled

### Environment Variables

No environment variables required for v1.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Accessibility

- Semantic HTML landmarks
- Keyboard navigation support
- Skip to content link
- Visible focus indicators
- ARIA labels where needed
- Respects `prefers-reduced-motion`
- WCAG AA color contrast compliance

## Performance

- Next.js Image optimization
- Font optimization with `font-display: swap`
- Lazy loading for gallery images
- Minimal client-side JavaScript
- Optimized CSS via Tailwind

## SEO

- Metadata API for all pages
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data (Organization + WebSite)
- Sitemap.xml
- Robots.txt

## Donation Links

All "Donate" CTAs link to: https://mahagathe.org/donation-programs/

## License

ISC

## Support

For questions or issues, contact: contact@mahagathe.org
