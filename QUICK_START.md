# MAHAKTECH WEBSITE — QUICK START GUIDE

## Starting Development

```bash
cd /home/claude/mahaktech-website
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Where to Make Changes

### Changing Colors, Spacing, Fonts
**File:** `src/lib/constants/tokens.ts`

All design decisions live here. Example:
```typescript
// Change primary brand color
electricIndigo: '#5B5FEF'  // ← change this hex
```

Changes automatically flow to:
- Tailwind CSS utilities
- All components using color tokens
- Global CSS

### Changing a Section (e.g., Services)
**File:** `src/components/sections/Services.tsx`

Edit the SERVICES array or modify the JSX. The page updates instantly.

### Changing Navigation or Footer
**File:** `src/components/layout/Navigation.tsx`  
**File:** `src/components/layout/Footer.tsx`

Both are imported in `src/app/layout.tsx` and persist across all pages.

### Adding a New Page
1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Export a React component
4. Add link in Navigation

```tsx
// src/app/new-page/page.tsx
export default function NewPage() {
  return <div>New page content</div>
}
```

---

## Understanding the Structure

### Global Styling Layer
**File:** `src/styles/globals.css`

Contains:
- Base HTML/body resets
- Heading and link styles
- Utility classes (`.btn`, `.btn-primary`, `.container`, etc.)
- Animation keyframes
- Accessibility rules (reduced-motion)

### Tailwind Utilities
**File:** `tailwind.config.js`

All design tokens are extended into Tailwind. Use them directly:

```tsx
<div className="bg-indigo-electric text-white px-6 py-4 rounded-lg">
  Uses Electric Indigo background + white text + padding + rounded corners
</div>
```

Available utilities:
- **Colors:** `bg-indigo-electric`, `text-slate-mist`, `text-cyan-signal`, etc.
- **Spacing:** `px-6`, `py-4`, `mb-8`, `gap-4`, etc. (all snap to 8-point grid)
- **Radius:** `rounded-lg`, `rounded-pill`, etc.
- **Shadows:** `shadow-lg`, `shadow-md`, etc.

### Component Imports
All components are aliased from `@/`:

```tsx
// ✅ Good
import Navigation from '@/components/layout/Navigation'
import { COLORS } from '@/lib/constants/tokens'

// ❌ Avoid
import Navigation from '../components/layout/Navigation'
```

---

## Using Design Tokens in Code

### Option 1: Tailwind Classes (Recommended)
```tsx
<div className="bg-panel-fog text-obsidian-ink p-8 rounded-lg">
  Easy to read, scanned in seconds
</div>
```

### Option 2: Import Constants (For Complex Styling)
```tsx
import { COLORS, SPACING, SHADOWS } from '@/lib/constants/tokens'

<div style={{
  background: COLORS.primary.electricIndigo,
  padding: SPACING[24],
  boxShadow: SHADOWS.lg
}}>
  Complex layout
</div>
```

### Option 3: CSS Variables (Future Enhancement)
For Phase 2+, all tokens will also be available as CSS variables:
```css
background: var(--color-indigo-electric);
padding: var(--spacing-24);
```

---

## Adding a New Section

1. Create file: `src/components/sections/NewSection.tsx`
2. Export as default component
3. Import in `src/app/page.tsx`
4. Add section to the homepage

**Template:**
```tsx
/**
 * NEW SECTION NAME
 * Brief description of purpose
 * PDR reference: Section X.Y
 */

export default function NewSection() {
  return (
    <section id="new-section" className="w-full bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="caption text-indigo-electric mb-4">SECTION TAG</p>
          <h2 className="h1 text-obsidian-ink">Section Headline</h2>
        </div>

        {/* Content */}
        {/* ... */}
      </div>
    </section>
  );
}
```

---

## Testing & Building

### Check for TypeScript Errors
```bash
npm run type-check
```

### Run Linter
```bash
npm run lint
```

### Build Production Version
```bash
npm run build
```

Creates optimized `.next` directory. Test with:
```bash
npm start
```

---

## Common Tasks

### Change Button Style
**File:** `src/styles/globals.css`

Find `.btn-primary` and modify:
```css
.btn-primary {
  @apply bg-indigo-electric text-white hover:shadow-lg hover:scale-105 transition-all duration-200;
}
```

### Add New Color to System
**File:** `src/lib/constants/tokens.ts`

Add to COLORS object:
```typescript
newColor: '#HEXCODE',
```

Then use in Tailwind:
```tsx
<div className="bg-new-color">...</div>
```

### Change Hero Background
**File:** `src/components/sections/Hero.tsx`

Change the className:
```tsx
<section className="bg-obsidian-ink h-screen">  {/* ← change color here */}
```

Available dark backgrounds: `bg-obsidian-ink`, `bg-panel-void`  
Available light backgrounds: `bg-white`, `bg-panel-fog`

### Update Footer Links
**File:** `src/components/layout/Footer.tsx`

Edit the `FOOTER_SECTIONS` or `SOCIAL_LINKS` arrays.

---

## Phase 2 Preview (Coming Soon)

Phase 2 will add:

### New Files (3D & Animation)
```
src/
├── components/
│   ├── 3d/
│   │   ├── OrbScene.tsx              # Three.js hero scene
│   │   └── useGPUCapability.ts       # Detect device GPU
│   └── animations/
│       ├── ScrollManager.tsx         # GSAP ScrollSmoother
│       └── useScrollTrigger.ts       # Scroll-linked animations
```

### New Dependencies
```json
{
  "three": "^0.157.0",
  "gsap": "^3.12.2"
}
```

When Phase 2 starts, you'll:
1. Create `src/components/3d/OrbScene.tsx` with Three.js code
2. Integrate GSAP ScrollTrigger for scroll choreography
3. Add Blender GLTF assets to `public/models/`

---

## Troubleshooting

### Dev server won't start
```bash
# Kill any process on port 3000
lsof -ti:3000 | xargs kill -9

# Clean and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

### Tailwind classes not working
- Ensure the class is spelled correctly (check `tailwind.config.js`)
- Restart dev server after changing config
- Clear `.next` folder: `rm -rf .next`

### TypeScript errors
```bash
npm run type-check
```

Fix errors shown, then restart dev server.

### Import errors with `@/`
Verify `tsconfig.json` has:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

---

## Style Guide

### Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Functions: camelCase (`useScrollTrigger`)
- Constants: UPPER_CASE (`COLORS`, `SPACING`)
- CSS classes: kebab-case (`.btn-primary`)

### Component Structure
```tsx
/**
 * COMPONENT NAME
 * Brief description
 * PDR reference (if applicable)
 */

'use client';  // Only if using hooks/interactivity

import { ... } from '...'

const CONSTANTS = [...]

export default function ComponentName() {
  // Logic here
  
  return (
    <section>
      {/* JSX */}
    </section>
  )
}
```

### Commit Messages
```bash
git commit -m "feat: add new section"
git commit -m "fix: button hover state"
git commit -m "style: update color tokens"
```

---

## Next: Phase 2 (Hero 3D Section)

Ready to build the 3D orb + scroll animation system?

**Say "Phase 2" and I'll:**
1. Create Three.js scene component
2. Set up GSAP ScrollTrigger choreography
3. Build all scroll-linked animations
4. Implement GPU quality detection
5. Add performance monitoring

Current build: **87.3 kB** — tight budget, aggressive optimization ahead.
