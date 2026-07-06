# ICSCCI 2027 — Echelon Institute of Technology

Next.js (App Router) site for ICSCCI 2027, built with **shadcn/ui** primitives and **Magic UI** components, content sourced from `ICSCCI2027.docx`. Light/dark mode follows the visitor's OS setting automatically, and every page has its own route.

## Run it

```bash
npm install
npm run dev
```

## Color palette

Primary brand color is royal blue with a gold accent (previously maroon — swapped per request to match EIT's actual branding). I couldn't extract exact hex values from the eitfaridabad.com logo file itself (no pixel-level image access), so this is a professional blue+gold palette rather than a guaranteed pixel-match — if you have brand guidelines or the logo file with exact hex codes, send them over and I'll drop them straight into `config/theme.js → colors.light` / `colors.dark`. Because the whole site reads color through that one file, that's the only place that needs to change.

## The centralized files

### 1. `config/theme.js` — the real color source (light + dark)
This is genuinely canonical now — not documentation. It exports plain hex values under `colors.light` and `colors.dark`, plus fonts/sizes/radius. `app/layout.js` reads this file at render time and generates the actual CSS (`lib/theme-css.js` converts each hex to an HSL triplet), injecting it as a `<style>` tag in `<head>`. `tailwind.config.js` maps semantic classes (`bg-primary`, `text-secondary`, `bg-surface`...) to those variables. Change a hex value in `theme.js` and it updates everywhere, in both light and dark mode — no CSS file to keep in sync.

Dark mode activates automatically from the visitor's OS setting (`prefers-color-scheme`) — no toggle.

**Page-wise accent theming**: three classes in `app/globals.css`, each overriding one variable, `--page-accent`:

```css
.theme-gold   { --page-accent: var(--accent);    ... }
.theme-blue   { --page-accent: var(--secondary); ... }
.theme-navy { --page-accent: var(--primary);   ... }
```

Every route's `page.js` wraps its content in one of these, so section kickers/timeline dots/bullets (styled with `text-pageAccent` / `bg-pageAccent`) read differently per page:

| Page | Accent |
|---|---|
| Home, Tracks, Call for Papers, Paper Submission | gold |
| About, Important Dates, Speakers, Registration | blue |
| Committee, Contact | navy |

### 2. `data/content.json` — every piece of copy
Unchanged role: the single source for all text.

## Light theme, everywhere except the Hero photo

Header and Footer are now light (`bg-background` / `bg-muted`), matching the rest of the site. The one deliberately colored panel is the **Hero**, which sits behind a campus photo:

- `components/PlaceholderImage.jsx` — drop a real file at `public/images/campus-hero.jpg` and pass it as `src` in `components/sections/Hero.jsx`; until then it renders a labeled dashed placeholder so it's obvious where the photo goes.
- A deep-navy (`surface`) gradient overlay sits on top of the photo for text legibility, with the same animated gold network-line graphic layered above it.

## Animation

`components/motion/FadeIn.jsx` exports two framer-motion helpers used across every section:
- `<FadeIn>` — fades/slides an element in as it scrolls into view.
- `<Stagger>` + `staggerItem` — staggers a list of children (track cards, committee cards, timeline entries, quick-link cards).

Both respect `prefers-reduced-motion` (see `globals.css`). Header also animates in on load, and the active nav link has an animated underline (`layoutId`).

## shadcn/ui + Magic UI

- **shadcn/ui** (`components/ui/`): Button, Card, Badge, Tabs, Accordion, Table, Separator — plain shadcn source (not a package), `components.json` is configured if you want to pull more via the CLI.
- **Magic UI** (`components/magicui/`): `AnimatedGradientText` (hero eyebrow badge), `BorderBeam` (animated border on the Call for Papers download card), `Marquee` (scrolling Advisory Committee / Technical Program Committee names), `NumberTicker` (animated stat counters in the hero).

## Homepage

`/` = Hero → Sponsors → **Important Dates preview** (condensed grid of every date with a "View full timeline" link to `/important-dates`) → QuickLinks (animated card grid linking to every other page).

## What still needs real content

- **Speakers** and **Registration fees** — the source docx says "To be updated soon" for both; reflected as placeholders in `content.json`.
- **Download / submission links** (CFP PDF, Word/LaTeX templates, Microsoft CMT link) — all `href: "#"` since the docx had no URLs. Update `data/content.json → callForPapers`.
- **Images** — no photos/logos were in the source doc. `components/PlaceholderLogo.jsx` stands in for the EIT/IEEE logos in the header/footer, and `components/PlaceholderImage.jsx` stands in for the campus photo in the Hero. `public/images/` is empty and ready — drop files in and pass the path as `src` to swap each one in.

## Project structure

```
app/
  layout.js                 — fonts; Header + Footer wrap every page
  page.js                   — Home (theme-gold)
  about/page.js              — /about (theme-blue)
  call-for-papers/page.js    — /call-for-papers (theme-gold)
  tracks/page.js             — /tracks (theme-gold)
  important-dates/page.js    — /important-dates (theme-blue)
  committee/page.js          — /committee (theme-navy)
  speakers/page.js           — /speakers (theme-blue)
  paper-submission/page.js   — /paper-submission (theme-gold)
  registration/page.js       — /registration (theme-blue)
  contact/page.js            — /contact (theme-navy)
  globals.css                — ★ centralized colors (light/dark/page-accent)
config/
  theme.js                   — ★ centralized fonts/sizes/radius
data/
  content.json                — ★ centralized page copy
components/
  ui/                        — shadcn/ui primitives
  magicui/                   — Magic UI components
  motion/FadeIn.jsx          — framer-motion scroll-reveal helpers
  PlaceholderLogo.jsx        — stand-in for real logo images (header/footer)
  PlaceholderImage.jsx       — stand-in for real photos (hero campus image)
  sections/                  — one component per page's content, plus
                                Header, Footer, QuickLinks, ImportantDatesPreview
lib/
  utils.js                   — shadcn's cn() helper
  theme-css.js               — ★ converts config/theme.js hex → CSS variables
```

## Deploying

Works on Vercel out of the box, or `npm run build && npm start` on any Node host.
