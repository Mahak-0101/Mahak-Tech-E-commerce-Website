# MahakTech Flagship Website

Premium, cinematic 3D-immersive digital flagship for MahakTech — a next-generation technology, AI, and software product company.

## Phase 1: Foundation ✅ COMPLETE

### What's Included

This is a production-ready Next.js skeleton with all design tokens, styling infrastructure, and component scaffolding in place.

#### 1. Design System Tokens (`src/lib/constants/tokens.ts`)

- **Colors** — All 10 color tokens from PDR Section 6.1 (Obsidian Ink, Electric Indigo, Signal Cyan, Slate, Muted Gold, etc.)
- **Typography** — Type scale (Display → Caption), font families (General Sans, Inter)
- **Spacing** — 8-point grid system (0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 160, 192px)
- **Shadows** — Multi-layer depth tokens (sm, md, lg, glow-accent)
- **Radius** — Border radius system (sm, md, lg, pill)
- **Motion** — Easing curves (reveal, camera, interactive) and durations
- **Breakpoints** — Responsive grid (mobile, tablet, desktop, wide)

#### 2. Styling Infrastructure

- **Tailwind CSS** — Extended with all design tokens
- **PostCSS** — Autoprefixer for cross-browser compatibility
- **Global CSS** (`src/styles/globals.css`) — Includes:
  - Custom font setup (ready for hosted fonts)
  - Root baseline (scroll behavior, scrollbar-gutter)
  - HTML/body resets
  - Heading and link styles
  - Utility classes (glass, typography, buttons, container, grid)
  - Animation keyframes (fadeInUp, fadeInDown, float, pulse-slow)
  - **Reduced-motion accessibility** — Disables animations for users with motion sensitivity
  - Print styles

#### 3. Layout Components

- **Navigation** (`src/components/layout/Navigation.tsx`) — Persistent top nav that transitions from transparent (over hero) to frosted-glass (on scroll)
- **Footer** (`src/components/layout/Footer.tsx`) — Comprehensive footer with site map, social links, legal links, and final CTA

#### 4. Root Layout

- **app/layout.tsx** — Root layout with font preloading, metadata, Navigation, Footer
- All pages inherit consistent chrome and styling

#### 5. Page Routes (All Scaffolded)

- `/` — Homepage (8-section cinematic experience)
- `/services` — Services deep-dive
- `/work` — Portfolio and case studies
- `/products` — Product marketplace
- `/company` — Extended founder vision and timeline
- `/contact` — Contact form and booking
- `/careers` — Recruiting page
- `/legal/privacy`, `/legal/terms`, `/legal/cookies` — Legal pages

#### 6. Section Components (Homepage)

All 8 sections scaffolded with proper styling, spacing, and structure:

1. **Hero** — Placeholder for 3D orb + scroll-linked camera
2. **Services** — Grid of service cards with hover effects
3. **Portfolio** — Case studies carousel/grid
4. **Product Marketplace** — Products with 3D plinth placeholder
5. **Statistics** — Company metrics (numbers + labels)
6. **Founder Vision** — Personal story section
7. **Timeline** — Growth milestones
8. **Contact** — Primary CTA and contact options

#### 7. Configuration Files

- `next.config.js` — Image optimization, font optimization, webpack for GLTF
- `tailwind.config.js` — Extends theme with all design tokens
- `tsconfig.json` — TypeScript strict mode, path aliases
- `postcss.config.js` — PostCSS plugins

### Ready for Phase 2

The foundation is solid. Phase 2 will implement:

- **Hero Section (3D Orb + GSAP ScrollTrigger)** — Three.js scene with Floating Technology Orb, particle field, scroll-linked camera movement
- **Scroll Animation System** — GSAP ScrollSmoother, ScrollTrigger reveals, content stagger choreography
- **Performance Audits** — Lighthouse CI, CLS/TTI measurements

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

Deploy to Vercel:

```bash
# (Vercel will auto-detect Next.js)
# Simply push to your repository
```

## Design Token Usage

All design decisions should reference `src/lib/constants/tokens.ts`:

```tsx
import { COLORS, SPACING, TYPOGRAPHY, MOTION } from '@/lib/constants/tokens';

// Example: Using color token
<div className="bg-indigo-electric text-white">...</div>

// Example: Custom spacing
<div style={{ padding: SPACING[24] }}>...</div>

// Example: Animation easing
animation: 'fadeInUp 600ms ' + MOTION.easing.reveal;
```

## Accessibility

- ✅ **Reduced Motion** — `prefers-reduced-motion: reduce` detected globally; all animations disabled
- ✅ **Color Contrast** — WCAG AA compliance on all text
- ✅ **Semantic HTML** — Proper heading hierarchy, links, buttons
- ✅ **Keyboard Navigation** — Focus states on all interactive elements
- ✅ **Screen Reader Ready** — Proper aria labels (Phase 2+)

## Performance Budget (Phase 12)

Target metrics for production:

| Metric | Target |
|--------|--------|
| LCP | < 2.0s (fast) / < 3.5s (4G) |
| TTI | < 3.0s |
| Hero FPS | 60 FPS (mid-tier GPU) |
| JS Bundle | < 250KB gzipped (excludes async 3D) |
| CLS | < 0.1 |

## Next Steps

1. **Phase 2** — Implement Hero section with Three.js orb and GSAP scroll system
2. **Commission 3D Assets** — Create Blender models for orb, lattice, plinth (all quality tiers)
3. **Set Up CMS** — Integrate Sanity for case studies, statistics, timeline
4. **Implement GSAP ScrollTrigger** — Full scroll-linked animation choreography

## Project Structure

```
src/
├── app/                       # Next.js app directory
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   ├── (pages)/*             # All other pages
│   └── legal/*               # Legal pages
├── components/
│   ├── layout/               # Navigation, Footer
│   └── sections/             # 8 homepage sections
├── lib/
│   └── constants/            # Design tokens
├── styles/
│   └── globals.css           # Global styles
```

---

**PDR Version:** 1.0  
**Document Class:** Confidential — Strategic Product Asset  
**Phase Status:** 1/9 ✅ Complete
