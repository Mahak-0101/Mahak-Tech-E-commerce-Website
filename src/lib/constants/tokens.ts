/**
 * MAHAKTECH DESIGN TOKENS
 * Source of truth for all design decisions
 * Direct implementation of Section 6 from the PDR
 */

// ============================================================================
// COLOR TOKENS (Section 6.1)
// ============================================================================

export const COLORS = {
  // Primary Colors
  primary: {
    obsidianInk: '#0A0E14',      // Primary text on light; dark-mode base
    white: '#FFFFFF',             // Primary background; primary text on dark
    electricIndigo: '#5B5FEF',    // Primary brand accent, CTAs, highlights
  },

  // Secondary Colors
  secondary: {
    signalCyan: '#00D4C8',        // AI/tech motifs, 3D glows, data viz
    slate: '#3A4252',             // Body copy on light; secondary text
    mistGray: '#6B7280',          // Tertiary text, captions, metadata
  },

  // Accent & Utility
  accent: {
    mutedGold: '#B08D4B',         // Premium callouts only (rationed)
  },

  utility: {
    hairline: '#D9DCE3',          // Dividers, borders, subtle separation
    panelFog: '#F4F5F8',          // Light section card/panel backgrounds
    panelVoid: '#12151C',         // Dark section card/panel backgrounds
  },
};

// Semantic color aliases for clarity
export const SEMANTIC_COLORS = {
  background: {
    light: COLORS.primary.white,
    dark: COLORS.primary.obsidianInk,
  },
  text: {
    primary: COLORS.primary.obsidianInk,
    primaryOnDark: COLORS.primary.white,
    secondary: COLORS.secondary.slate,
    tertiary: COLORS.secondary.mistGray,
  },
  action: {
    primary: COLORS.primary.electricIndigo,
    accent: COLORS.secondary.signalCyan,
  },
  border: {
    light: COLORS.utility.hairline,
    dark: 'rgba(255, 255, 255, 0.1)',
  },
};

// ============================================================================
// TYPOGRAPHY TOKENS (Section 6.2)
// ============================================================================

export const TYPOGRAPHY = {
  fontFamily: {
    display: "'General Sans', 'Neue Montreal', -apple-system, sans-serif",
    body: "'Inter', -apple-system, sans-serif",
  },

  // Type scale and hierarchy
  scale: {
    display: {
      size: '88px',
      weight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h1: {
      size: '56px',
      weight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      size: '36px',
      weight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
    },
    h3: {
      size: '24px',
      weight: 600,
      lineHeight: 1.4,
      letterSpacing: '0',
    },
    bodyLarge: {
      size: '19px',
      weight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    body: {
      size: '16px',
      weight: 400,
      lineHeight: 1.6,
      letterSpacing: '0',
    },
    caption: {
      size: '13px',
      weight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },
};

// ============================================================================
// SPACING SYSTEM (Section 6.3.5)
// 8-point scale: all margins, padding, gaps snap to this
// ============================================================================

export const SPACING: Record<number | string, string> = {
  0: '0',
  4: '4px',
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
  128: '128px',
  160: '160px',
  192: '192px',
};

// Common spacing patterns
export const SPACING_PATTERNS = {
  sectionPadding: {
    mobile: `${SPACING[24]} ${SPACING[16]}`,
    tablet: `${SPACING[64]} ${SPACING[48]}`,
    desktop: `${SPACING[192]} ${SPACING[80]}`, // 80px is half-column gutter
  },
  componentPadding: {
    sm: SPACING[8],
    md: SPACING[16],
    lg: SPACING[24],
  },
};

// ============================================================================
// BORDER RADIUS (Section 6.3.6)
// ============================================================================

export const RADIUS = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  pill: '100px',
};

// ============================================================================
// SHADOWS (Section 6.3.3)
// Soft, multi-layer depth without harsh effects
// ============================================================================

export const SHADOWS = {
  sm: '0px 1px 2px rgba(10, 14, 20, 0.06)',
  md: '0px 4px 12px rgba(10, 14, 20, 0.08), 0px 1px 2px rgba(10, 14, 20, 0.04)',
  lg: '0px 12px 32px rgba(10, 14, 20, 0.12), 0px 2px 4px rgba(10, 14, 20, 0.06)',
  // Glow accent for hover states
  glowAccent: '0px 0px 24px rgba(91, 95, 239, 0.35)',
  glowCyan: '0px 0px 24px rgba(0, 212, 200, 0.35)',
};

// ============================================================================
// GRID SYSTEM (Section 6.3.4)
// 12-column on desktop, 8 on tablet, 4 on mobile
// ============================================================================

export const GRID = {
  columns: {
    desktop: 12,
    tablet: 8,
    mobile: 4,
  },
  gutters: {
    desktop: '24px',
    tablet: '24px',
    mobile: '16px',
  },
  outerMargins: {
    desktop: '80px',
    tablet: '48px',
    mobile: '16px',
  },
  containerWidth: '1440px', // Design reference width
};

// ============================================================================
// BREAKPOINTS (Responsive design)
// ============================================================================

export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  tooltip: 50,
  notification: 60,
};

// ============================================================================
// ANIMATION/MOTION TOKENS (Section 9.2)
// ============================================================================

export const MOTION = {
  easing: {
    reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',      // ease-out expo
    camera: 'cubic-bezier(0.45, 0, 0.15, 1)',     // camera movement
    interactive: 'cubic-bezier(0.4, 0, 0.2, 1)',  // standard ease-in-out
  },
  duration: {
    micro: 150,      // hover, click feedback
    short: 250,      // quick transitions
    base: 400,       // standard reveal
    reveal: 500,     // content reveal
    section: 1200,   // full section transition
    hero: 900,       // hero load animation
  },
};

// ============================================================================
// EXPORT AS TAILWIND CONFIG OBJECT
// Used in tailwind.config.js to extend defaults
// ============================================================================

export const TAILWIND_THEME_EXTEND = {
  colors: {
    obsidian: {
      ink: COLORS.primary.obsidianInk,
    },
    indigo: {
      electric: COLORS.primary.electricIndigo,
    },
    cyan: {
      signal: COLORS.secondary.signalCyan,
    },
    slate: {
      muted: COLORS.secondary.slate,
      mist: COLORS.secondary.mistGray,
    },
    gold: {
      muted: COLORS.accent.mutedGold,
    },
    panel: {
      fog: COLORS.utility.panelFog,
      void: COLORS.utility.panelVoid,
    },
  },
  spacing: SPACING,
  borderRadius: RADIUS,
  boxShadow: SHADOWS,
  fontFamily: TYPOGRAPHY.fontFamily,
  animation: {
    reveal: `reveal ${MOTION.duration.reveal}ms ${MOTION.easing.reveal}`,
    float: 'float 6s ease-in-out infinite',
  },
  keyframes: {
    reveal: {
      from: {
        opacity: '0',
        transform: 'translateY(16px)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-8px)' },
    },
  },
};

// Export all tokens as named exports (see above)
// This file is the single source of truth for all design tokens
