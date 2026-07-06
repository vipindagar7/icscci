/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH — colors, fonts, font sizes, radius
 * ============================================================
 * This file is genuinely canonical: `app/layout.js` reads
 * `theme.colors.light` / `theme.colors.dark` and generates the
 * actual CSS custom properties (see lib/theme-css.js) that
 * every component uses via Tailwind's `bg-primary`, `text-accent`,
 * etc. Edit a hex value here and the whole site updates — in
 * both light and dark mode — with no other file to touch.
 *
 * Dark mode activates automatically based on the visitor's OS
 * setting (`prefers-color-scheme`) — there's no manual toggle.
 *
 * PAGE-WISE ACCENTS: each route wraps its content in a `theme-*`
 * class (see app/globals.css) that swaps just `--page-accent`,
 * so section kickers / highlight dots read differently per page
 * (e.g. Tracks = gold, About = teal, Committee = navy) without
 * touching component code.
 */

const theme = {
  colors: {
    light: {
      background: "#F7F5EE", // warm cream page background
      foreground: "#1C2430", // dark navy-charcoal text

      card: "#FFFFFF",

      primary: "#0F3D91", // institutional royal blue
      primaryForeground: "#FFFFFF",

      secondary: "#0E7A8C", // supporting teal-blue — links, secondary labels
      secondaryForeground: "#FFFFFF",

      accent: "#C89B3C", // brass/gold — CTAs, highlights, dividers
      accentForeground: "#1C2430",

      muted: "#EFEAE0",
      mutedForeground: "#5B6472",

      border: "#E3DCC9",
      ring: "#0F3D91",

      destructive: "#B3261E",
      destructiveForeground: "#FFFFFF",

      // Hero-only brand panel (image overlay tint) — everything else on the
      // site is light; only the Hero photo gets a colored overlay.
      surface: "#0B2545",
      surfaceForeground: "#F7F5EE",
      goldLight: "#E8C77A"
    },
    dark: {
      background: "#0E141B",
      foreground: "#F2EFE7",
      card: "#17202B",

      primary: "#5A8FD6",
      primaryForeground: "#0E141B",

      secondary: "#3FB6C4",
      secondaryForeground: "#0B1720",

      accent: "#D9AE5C",
      accentForeground: "#0E141B",

      muted: "#1C252F",
      mutedForeground: "#A9B4C0",

      border: "#28323D",
      ring: "#5A8FD6",

      destructive: "#E5534B",
      destructiveForeground: "#0E141B",

      surface: "#081B33",
      surfaceForeground: "#F2EFE7",
      goldLight: "#E9C889"
    }
  },

  fonts: {
    // next/font CSS variable names — wired up in app/layout.js
    display: "var(--font-display)", // headings — serif, academic/ceremonial tone
    body: "var(--font-body)",       // paragraphs, UI text
    mono: "var(--font-mono)"        // dates, codes, data
  },

  // Optional custom sizes layered on top of Tailwind's default scale.
  fontSize: {
    hero: ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
    "hero-md": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
    eyebrow: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.18em" }]
  },

  radius: "0.6rem"
};

module.exports = theme;


