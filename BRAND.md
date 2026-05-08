# Brand Design Tokens

This document describes the brand color system for mahagathe.com. All colors are sourced from mahagathe.org and defined as CSS variables in `/styles/tokens.css`.

## Color System

### Core Brand Colors

- **brand-maroon-900** (`#4C1515`) - Primary brand color, used for header/footer backgrounds
- **brand-plum-800** (`#44233B`) - Secondary brand color, used for footer
- **brand-rose-700** (`#7E4555`) - Tertiary brand color
- **brand-mauve-600** (`#694C5C`) - Used for hover states on links
- **brand-rose-500** (`#8C4E5D`) - Accent brand color

### Accent & Status Colors

- **accent-red-600** (`#DB4242`) - Action/alert color, used for primary CTAs and hover states
- **accent-pink-400** (`#FD8F8F`) - Light accent
- **accent-pink-200** (`#FFD3D3`) - Very light accent, used for hover states on dark backgrounds
- **accent-neutral-300** (`#CFB7B3`) - Subtle borders and dividers
- **accent-neutral-200** (`#CBA7A7`) - Very subtle borders
- **success-500** (`#25D366`) - WhatsApp brand color

### Surface Colors

- **surface-cream-50** (`#FFF0E3`) - Lightest cream background
- **surface-cream-60** (`#FFEFE3`) - Medium cream background
- **surface-cream-70** (`#FFEFE2`) - Darker cream background
- **surface-white** (`#FFFFFF`) - Pure white

### Text Colors

- **text-strong** (`#2B2B2B`) - Headings and strong emphasis
- **text-default** (`#333333`) - Default body text
- **text-muted** (`#474747`) - Muted text, subtitles
- **text-subtle** (`#666666`) - Subtle text
- **text-faint** (`#888888`) - Very faint text
- **text-inverse** (`#FFFFFF`) - Text on dark backgrounds

### Utility Colors

- **ink-black** (`#000000`) - Pure black (use sparingly)

## Usage Guidelines

### Headers & Footers

- Use `bg-brand-maroon` for header background
- Use `bg-brand-plum` for footer background
- All text should use `text-text-inverse` on dark backgrounds

### Buttons

- Primary buttons on maroon backgrounds: `bg-text-inverse text-brand-maroon`
- Hover state: `hover:bg-accent-red hover:text-text-inverse`
- Focus rings: `focus-visible:ring-accent-red`

### Text Hierarchy

- Headings (h1-h3): `text-text-strong`
- Body text: `text-text-default`
- Subtitles/meta: `text-text-muted`
- Links: `text-brand-maroon hover:text-brand-mauve`

### Surfaces

- Hero section: Gradient from `bg-surface-cream70` to `bg-surface-cream50`
- Alternating sections: Use `bg-surface-cream60` or `bg-surface-cream70` for soft separation
- Cards: `bg-surface-white` on cream backgrounds

### Borders & Dividers

- Use `border-accent-n300` for subtle borders
- Use `border-accent-n200/40` for very subtle borders (with opacity)

### Special Elements

- WhatsApp links: Use `text-accent-success` for the icon
- Social icons: White (`text-text-inverse`) at 24px, `hover:opacity-80`

## Accessibility

All color combinations meet WCAG AA contrast requirements:

- Text on cream surfaces: Use `text-text-strong` or `text-text-default` only
- Text on maroon/plum: Use `text-text-inverse`
- Buttons: White text on maroon, or maroon text on white

## Implementation

All colors are defined in `/styles/tokens.css` as CSS variables and mapped in `tailwind.config.ts`. Use Tailwind classes (e.g., `bg-brand-maroon`, `text-text-strong`) rather than hardcoding hex values.

**Never use raw hex codes in components.** Always use the token system.
