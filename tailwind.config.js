const theme = require("./config/theme.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // follows the visitor's OS light/dark setting automatically
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        // Brand panel used behind the Hero photo — deep navy overlay tint
        // that stays consistent across light/dark mode (see globals.css).
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--surface-foreground) / <alpha-value>)"
        },
        goldLight: "hsl(var(--gold-light) / <alpha-value>)",
        // Page-wise accent — each route sets --page-accent via a
        // `theme-*` wrapper class (see globals.css).
        pageAccent: {
          DEFAULT: "hsl(var(--page-accent) / <alpha-value>)",
          foreground: "hsl(var(--page-accent-foreground) / <alpha-value>)"
        }
      },
      fontFamily: {
        display: [theme.fonts.display],
        body: [theme.fonts.body],
        mono: [theme.fonts.mono]
      },
      fontSize: theme.fontSize,
      borderRadius: {
        lg: theme.radius,
        md: `calc(${theme.radius} - 2px)`,
        sm: `calc(${theme.radius} - 4px)`
      },
      maxWidth: {
        content: "1200px"
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" }
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" }
        },
        shimmer: {
          "0%, 90%, 100%": { backgroundPosition: "calc(-100% - var(--shimmer-width)) 0" },
          "30%, 60%": { backgroundPosition: "calc(100% + var(--shimmer-width)) 0" }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        marquee: "marquee var(--duration,30s) linear infinite",
        "border-beam": "border-beam calc(var(--duration,8s)) infinite linear",
        shimmer: "shimmer 3s ease-in-out infinite",
        gradient: "gradient 4s linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
