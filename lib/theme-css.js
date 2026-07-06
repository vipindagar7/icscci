/**
 * Converts the hex colors in config/theme.js into the CSS custom
 * properties every component reads via Tailwind (bg-primary, etc).
 * This is what makes config/theme.js the *real* source of truth
 * instead of something documented-but-duplicated in CSS.
 */

function hexToHslTriplet(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function buildCssVariables(colors) {
  return Object.entries(colors)
    .map(([key, hex]) => `  --${toKebabCase(key)}: ${hexToHslTriplet(hex)};`)
    .join("\n");
}

/** Builds the full <style> contents: :root (light) + dark media query. */
function buildThemeStyleTag(theme) {
  return `:root {\n${buildCssVariables(theme.colors.light)}\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n${buildCssVariables(
    theme.colors.dark
  )}\n  }\n}`;
}

module.exports = { hexToHslTriplet, buildCssVariables, buildThemeStyleTag };
