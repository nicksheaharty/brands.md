---
name: Storiara
slug: storiara
url: https://storiara.com
category: Entertainment
tagline: "Near-black, indigo-lit pre-production software for film and TV crews."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Storiara Blue
    hex: "#455FE5"
    role: Primary buttons, links, icon tiles, logo panels, focus ring
  - name: Background
    hex: "#00020D"
    role: Page background (blue-black)
  - name: Black
    hex: "#000000"
    role: html background, nav when scrolled, dropdown panels
  - name: Card
    hex: "#101218"
    role: Cards, popovers
  - name: Secondary
    hex: "#1F212E"
    role: Secondary buttons, input fill
  - name: Muted
    hex: "#181B25"
    role: Muted surfaces, default border
  - name: Foreground
    hex: "#F2F4FF"
    role: Primary text, text on primary
  - name: Slate 300
    hex: "#CBD5E1"
    role: Nav links, body copy on dark
  - name: Slate 400
    hex: "#94A3B8"
    role: Secondary copy, captions
  - name: Slate 500
    hex: "#64748B"
    role: Placeholders, footer text, tertiary labels
  - name: Periwinkle
    hex: "#8C9FFF"
    role: Logo panel gradient highlight
  - name: Highlight
    hex: "#A6B3F2"
    role: Emphasised words in headlines and subtitles
  - name: Accent
    hex: "#6276EA"
    role: Lighter primary for hover tints
  - name: Primary Dark
    hex: "#1830B4"
    role: Darker end of primary gradients
  - name: Destructive
    hex: "#7F1D1D"
    role: Destructive buttons and badges
fonts:
  display:
    family: "DM Sans"
    fallback: "DM Sans"
    weights: [600, 700]
  body:
    family: "DM Sans"
    fallback: "DM Sans"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 72, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Section Title, size: 60, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Card Title, size: 24, weight: 700, lineHeight: 1.25, tracking: "-0.01em" }
  - { role: Lead, size: 20, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 11, weight: 700, lineHeight: 1.3, tracking: "0.15em" }
radii: { sm: 4, md: 6, lg: 8, xl: 12, xxl: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 1px 2px rgba(0,0,0,0.05)" }
  - { name: Dropdown Glow, value: "0 25px 50px -12px rgba(69,95,229,0.2)" }
  - { name: Hero Frame, value: "0 25px 50px -12px rgba(0,0,0,0.25)" }
preview:
  bg: "#00020D"
  surface: "#101218"
  text: "#F2F4FF"
  muted: "#94A3B8"
  border: "#151E4E"
  accent: "#455FE5"
  accentText: "#F2F4FF"
  radius: 8
  buttonStyle: solid
---

# Storiara

## 1. Visual Theme & Atmosphere

Storiara is pre-production software for film and TV: upload a script and it builds the breakdown, stripboard schedule, budget and call sheets. The brand looks like a dark edit bay lit by one indigo monitor. Everything sits on near-black with a faint blue cast (`#00020D`), and a single saturated indigo (`#455FE5`) carries every action, icon tile and highlight.

What makes it recognisable:

- **Indigo on black.** One brand colour, used at full strength for buttons and at 5-40% opacity for tints, borders and glows. There is no second accent.
- **Translucent indigo borders.** Cards, inputs and dropdowns use `border-primary/20` to `/50` (indigo at low alpha) instead of grey hairlines. That blue edge glow is the house style.
- **Gradient headline words.** Key phrases in hero titles fade from near-white `#F2F4FF` at the top to `#455FE5` at the bottom using `background-clip: text`.
- **Folded panel logo.** The wordmark is eight angled indigo panels, like a folded script or a folding screen, with letters knocked out in pale `#F2F4FF`.
- **Film imagery under glass.** Hero and dropdown tiles put set photography behind 50-60% black overlays and blur, so photos add texture without competing with text.
- **Slate text.** Body copy uses Tailwind's slate scale (`#CBD5E1`, `#94A3B8`, `#64748B`) so greys share the cool cast of the background.

Density is low to medium on marketing pages: large type, generous section padding (96px+), centred stacks. The product UI is denser and table-heavy, but uses the same tokens.

## 2. Color Palette & Roles

Tokens are defined as HSL custom properties in `globals.css` and exposed through Tailwind (`bg-primary`, `text-muted-foreground`, etc.).

| Name | Token | Hex | Role |
| --- | --- | --- | --- |
| Storiara Blue | `--primary: 230 75% 58%` | `#455FE5` | Buttons, links, active nav underline, icon tiles, list markers |
| Primary Dark | `--primary-dark: 231 76% 40%` | `#1830B4` | Darker gradient stop |
| Accent | `--accent: 231 76% 65%` | `#6276EA` | Lighter primary for hover states |
| Ring | `--ring: 231 76% 58.2%` | `#435CE5` | Focus ring |
| Background | `--background: 230 100% 2.5%` | `#00020D` | Body background |
| Background end | `hsl(230 30% 5%)` | `#090A11` | End stop of the 135deg body gradient |
| Black | n/a | `#000000` | `html` background, scrolled nav at 80%, dropdowns at 95% |
| Card / Popover | `--card: 230 20% 8%` | `#101218` | Cards, menus |
| Secondary | `--secondary: 230 20% 15%` | `#1F212E` | Secondary buttons, input fill (`--input`) |
| Muted / Border | `--muted`, `--border: 230 20% 12%` | `#181B25` | Muted panels, default 1px border |
| Muted foreground | `--muted-foreground: 230 20% 65%` | `#949AB8` | Card descriptions |
| Foreground | `--foreground: 230 100% 97.5%` | `#F2F4FF` | Text, text on primary |
| Highlight | `hsl(230 75% 80%)` | `#A6B3F2` | Emphasised words in hero copy |
| Periwinkle | n/a | `#8C9FFF` | Top stop of logo panel gradients |
| Destructive | `--destructive: 0 62.8% 30.6%` | `#7F1D1D` | Delete buttons, error badges |

### Slate text scale

| Name | Hex | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Headlines, card titles on hover |
| Slate 100 | `#F1F5F9` | Card titles at rest, input text |
| Slate 200 | `#E2E8F0` | Badge labels, feature list text |
| Slate 300 | `#CBD5E1` | Nav links, body copy, subtitles |
| Slate 400 | `#94A3B8` | Captions, uppercase section kickers |
| Slate 500 | `#64748B` | Placeholders, footer, struck-through prices |
| Slate 800 | `#1E293B` | Avatar ring, disabled check circles |
| Slate 950 | `#020617` | Hero overlay gradient |

### Tints of primary (used constantly)

| Alpha | Rendered on `#00020D` | Use |
| --- | --- | --- |
| 5% | `#030718` | Pricing card fill |
| 10% | `#070B23` | Icon chip fill, hover row fill |
| 15% | `#0A102D` | Hero badge fill |
| 20% | `#0E1538` | Card and input border, icon tile fill |
| 30% | `#151E4E` | Dropdown border |
| 40-50% | `#1C2763` / `#223079` | Hover and popular-card border |

### Modes

Storiara is dark only. `darkMode: "class"` exists in the Tailwind config but no light theme ships. Do not invent one; if a light surface is needed (print exports, PDFs), use white with `#00020D` text and keep `#455FE5` as the accent.

## 3. Typography

- **DM Sans** for everything, loaded through `next/font/google` at weights 400, 500, 600 and 700 and exposed as `--font-dm-sans`. It is open source (SIL OFL) and on Google Fonts.
- Fallback stack: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- No serif and no monospace in the brand. Hindi, Japanese, Korean and Simplified Chinese locales swap the wordmark for a native-script version but keep DM Sans with system fallbacks for body text.

### Scale

| Role | Size | Weight | Line height | Tracking | Tailwind |
| --- | --- | --- | --- | --- | --- |
| Hero | 72px (36px mobile) | 700 | 1.1 | 0 | `text-4xl md:text-6xl lg:text-7xl font-bold` |
| Section title | 60px (36px mobile) | 700 | 1.1 | 0 | `text-4xl md:text-6xl font-bold` |
| Price | 48px | 700 | 1 | 0 | `text-5xl font-bold` |
| Card title | 24px | 700 | 1.25 | -0.01em | `text-2xl font-bold` |
| Lead | 20-24px | 500 | 1.5 | 0 | `text-xl lg:text-2xl font-medium` |
| Body | 16px | 400 | 1.6 | 0 | `text-base` |
| UI / button | 14-16px | 500 | 1.4 | 0 | `text-sm font-medium` |
| Eyebrow | 10-11px | 700 | 1.3 | 0.15em, uppercase | `text-[11px] font-bold uppercase tracking-[0.15em]` |
| Kicker | 14px | 600 | 1.3 | 0.2em, uppercase | `text-sm uppercase tracking-[0.2em] font-semibold` |

### Rules

- Headlines are bold (700), title case on marketing pages ("Upload Your Script, Get a Production Budget"), white, with one phrase in the indigo text gradient.
- Use `text-wrap: balance` on subtitles.
- Eyebrows and kickers are the only uppercase text. They are small, bold and widely tracked, often in `#455FE5`.
- Emphasis inside body copy uses bold in `#A6B3F2`, not italics.

## 4. Logo & Brand Mark

The Storiara logo is a wordmark built from eight connected parallelogram panels that zig-zag like a folded script page or a folding screen. Each panel holds one capital letter of S-T-O-R-I-A-R-A, knocked out in pale `#F2F4FF`. Alternate panels tilt up and down, and each is filled with a vertical gradient from periwinkle `#8C9FFF` to Storiara Blue `#455FE5`, with a subtle inner shadow on the letters for depth.

- **Primary:** full wordmark (2184 x 467 viewBox). Footer and dark surfaces. The file here is that SVG.
- **Mark:** the first panel, "S", used alone as the app icon and favicon (`storiaramobile.svg`, 274 x 400). The app icon places it on `#000627` with soft indigo and violet (`#6822FF`) blurred glows.
- **Nav:** a raster version of the wordmark at 206px source height; the nav logo sits dead-centre on desktop.
- **Clear space:** at least the width of one panel on every side.
- **Minimum size:** 96px wide for the wordmark; use the "S" panel below that (minimum 20px tall).
- **Backgrounds:** black or the brand background only. On light backgrounds use the mark on a `#00020D` tile rather than placing the wordmark directly on white.

Misuse: do not flatten the panels into one rectangle, recolour panels outside the indigo range, set "STORIARA" in DM Sans as a substitute, or add outer glows and drop shadows.

## 5. Components

Components are shadcn/ui primitives restyled with the tokens above. Base radius is `--radius: 0.5rem` (8px), so `rounded-lg` is 8px, `rounded-md` 6px, `rounded-sm` 4px. Larger surfaces use `rounded-xl` (12px) and `rounded-2xl` (16px).

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 44px; padding: 0 32px;
  font: 500 16px/1 "DM Sans", sans-serif;
  border-radius: 6px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #00020D, 0 0 0 4px #435CE5; }
.btn:disabled { opacity: 0.5; pointer-events: none; }

.btn-default { background: #455FE5; color: #F2F4FF; }
.btn-default:hover { filter: brightness(0.95); }
.btn-secondary { background: #1F212E; color: #F2F4FF; }
.btn-secondary:hover { background: rgba(31,33,46,0.8); }
.btn-outline { background: #00020D; border: 1px solid #181B25; }
.btn-outline:hover { background: #181B25; }
.btn-ghost:hover { background: rgba(242,244,255,0.1); }
.btn-ghost-primary { color: #455FE5; }
.btn-ghost-primary:hover { background: rgba(69,95,229,0.1); }
.btn-link { color: #455FE5; text-underline-offset: 4px; }
.btn-destructive { background: #7F1D1D; color: #FAFAFA; }
```

Sizes: default 44px tall with 32px side padding; **hero** 56px with 48px padding and 18px text (64px and 20px on desktop); icon 40 x 40px. The hero CTA ("Fast-Track Your Production") carries a trailing arrow that slides 4px right on hover.

### Inputs

```css
.input {
  height: 48px; width: 100%; padding: 8px 16px;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(69,95,229,0.2);
  border-radius: 12px;
  color: #F1F5F9; font-size: 14px;
  transition: all 200ms;
}
.input::placeholder { color: #64748B; }
.input:focus { outline: none; border-color: rgba(69,95,229,0.4); box-shadow: 0 0 0 2px rgba(69,95,229,0.4); }
```

Textareas and selects share this style.

### Cards

Base card: `rounded-lg border bg-card shadow-sm` (8px, `#101218`, 1px `#181B25`). Marketing cards override with indigo tint:

```css
.card-feature {
  background: rgba(69,95,229,0.05);
  border: 1px solid rgba(69,95,229,0.2);
  border-radius: 12px;
  padding: 32px;
  transition: border-color 300ms;
}
.card-feature:hover { border-color: rgba(69,95,229,0.5); }
```

The "Most Popular" pricing card scales to 105%, uses a 50% indigo border, and wears a pill label centred on its top edge (`#455FE5`, white 14px 600, 8px 16px padding, trending-up icon).

### Navigation

- 80px tall (56px compact), max width 1280px with 16/24/32px side padding.
- Desktop (1280px+) uses a three-column grid: four links left, logo dead centre, links and the "Get Started" button right.
- Links: `#CBD5E1`, 500 weight, hover `#455FE5`, with a 2px indigo underline that grows from 0 to full width on hover.
- Transparent at the top; after 50px of scroll it becomes `rgba(0,0,0,0.8)` with `backdrop-filter: blur(24px)` and a 1px `rgba(69,95,229,0.2)` bottom border.
- Mega-menu dropdowns: `rgba(0,0,0,0.95)`, 1px `rgba(69,95,229,0.3)` border, 12px radius, `shadow-2xl` tinted indigo at 20%, 24px backdrop blur. Inside are photo tiles (min 140px tall, image at 30% opacity under a 60% black overlay) with an icon chip, bold white title and two-line slate description.

### Icon chips

```css
.icon-chip {
  padding: 8px; border-radius: 8px;
  background: rgba(69,95,229,0.2); color: #455FE5;
  transition: all 300ms;
}
.group:hover .icon-chip { background: #455FE5; color: #FFFFFF; }
```

### Badges

Pill shaped (`rounded-full`), 1px border, 2px 10px padding, 12px 600 text. The hero badge row uses `rgba(69,95,229,0.15)` fill with `rgba(69,95,229,0.4)` border and slate-200 labels separated by small indigo icons ("Pre-Production", "Scheduling", "Budgeting").

### Feature lists

Each item: a 20px circle in `rgba(69,95,229,0.2)` holding a 14px indigo check, then 14px slate-200 text. Limitations use a slate-800 circle with a slate-300 icon.

### Lists in long-form content

Blog prose caps at 65ch. `ul` markers and `ol` numbers are coloured `#455FE5` at 600 weight; h2s get a 1px bottom border.

### Hero media frame

Product video sits in a `rounded-2xl` frame with a 1px `rgba(69,95,229,0.3)` border, `rgba(0,0,0,0.6)` fill and `shadow-2xl`, max width 1024px.

### Logo strip

Partner and school logos are forced to white with `filter: brightness(0) invert(1)` at 80% opacity, 40px tall, rising to 100% on hover, under an uppercase 14px slate-400 kicker ("Advised by industry leaders from").

### Scribble underline

A hand-drawn underline (rough.js, stroke width 19 in its own viewBox, round caps, `currentColor`) under a key word in some headlines. Use sparingly, one per page at most.

## 6. Layout & Spacing

- **Containers:** `max-w-7xl` (1280px) for page sections, `max-w-6xl` (1152px) for hero text, `max-w-5xl` (1024px) for pricing grids and media, `max-w-3xl` for subtitles, 65ch for articles.
- **Gutters:** 16px mobile, 24px at 640px, 32px at 1024px.
- **Breakpoints:** Tailwind defaults: 640, 768, 1024, 1280, 1536px. The desktop nav appears at 1280px.
- **Section rhythm:** 80-128px vertical padding between sections; hero is at least 90vh with content vertically centred.
- **Grids:** 2-column pricing, 2-4 column feature tiles, 32px gaps on cards, 16px inside dropdown grids.
- **Alignment:** marketing sections are centred. Product screens and docs are left-aligned with a sidebar.
- **Density:** spacious on marketing, compact in the app.

## 7. Depth, Elevation & Motion

Depth comes from translucency and indigo glow rather than grey shadows.

- **Surfaces:** body gradient 135deg from `#00020D` to `#090A11`. Panels are black at 40-95% alpha so photos and gradients show through.
- **Blur:** `backdrop-filter: blur(24px)` on the scrolled nav and dropdowns; hero photos use `blur(4px)` and 110% scale at 50% opacity.
- **Shadows:** `shadow-sm` on base cards, `shadow-2xl` (`0 25px 50px -12px`) on media frames and menus, tinted `rgba(69,95,229,0.2)` on dropdowns.
- **Perspective:** sticky feature demos use `perspective: 1000px` with `transform-style: preserve-3d` for a gentle tilt.
- **Durations:** 150ms for button colour, 200ms for dropdown open (`cubic-bezier(0, 0, 0.58, 1)`, from 10px below at 95% scale), 300ms for hover borders and icon chips, 500ms for nav background and image opacity.
- **Scrollbar:** 2px wide, thumb `rgba(69,95,229,0.1)`, nearly invisible.

## 8. Iconography & Imagery

- **Icons:** Phosphor Icons, wrapped in a local `icons.tsx`. Default weight is **duotone** at 24px, with **regular** for small inline icons. Typical sizes: 14px in badges, 16px in buttons, 20px in icon chips. Colour is `#455FE5` or inherited slate.
- **Photography:** real film-set and production stills (slates, crews, vertical-video rigs, school sets). Always darkened: 50% opacity with a slate-950 gradient, or 30% under a 60% black overlay inside tiles.
- **Product shots:** schedule, budget spreadsheet, call sheet and script breakdown screenshots in rounded frames with indigo borders.
- **App icon:** the "S" panel on `#000627` with blurred `#6822FF` and `#455FE5` ellipses.
- No stock illustration, no 3D blobs, no sparkle or magic-wand icons for AI features.

## 9. Voice & Microcopy

Direct and practical, written for producers, ADs and film students. It names the real documents (stripboard, Day Out of Days, call sheets) and the file formats people already use.

- Hero: "Upload Your Script, Get a Production Budget"
- Subtitle: "Your film's budget, schedule, call sheets, and breakdowns in less than 20 minutes."
- CTA: "Fast-Track Your Production", "Start for Free", "Get Started", "Watch the demo"
- Reassurance: "No credit card required. Your first 7 days are free."
- Pricing: "Try Storiara Free for 7 Days", "Most Popular", "/month"
- FAQ answer style: "Upload a script and Storiara breaks it into scenes, cast, locations, props, wardrobe, and other elements."
- Casing: title case for headlines, nav and buttons; sentence case for body. Spell out industry terms; do not say "AI magic".

## 10. Do's and Don'ts

**Do**

- Keep the page near-black with a blue cast; use `#00020D`, never warm greys.
- Use `#455FE5` as the only accent, at full strength for actions and at low alpha for borders and fills.
- Edge cards, inputs and menus with translucent indigo borders.
- Put one phrase per headline in the white-to-indigo text gradient.
- Darken and blur photography so text stays readable.
- Use Phosphor duotone icons in indigo chips.

**Don't**

- Don't add a second accent colour (no teal, no orange CTAs).
- Don't use pure grey borders like `#333`; tint them indigo.
- Don't ship a light theme.
- Don't use sparkle icons or "magic" language for AI features.
- Don't stack heavy black drop shadows; prefer glow and translucency.
- Don't redraw the folded-panel wordmark in a font.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Storiara. Use a near-black blue-cast background `#00020D` (body gradient 135deg to `#090A11`), cards `#101218`, and DM Sans for all text. The only accent is indigo `#455FE5`: solid for primary buttons (44px tall, 6px radius, 500 weight, text `#F2F4FF`), and at 5-50% alpha for card fills, 1px borders, icon chips and focus rings. Body text uses slate `#CBD5E1`, captions `#94A3B8`, placeholders `#64748B`. Headlines are bold white with one phrase in a vertical text gradient from `#F2F4FF` to `#455FE5`. Cards are 12px radius with a `rgba(69,95,229,0.2)` border that strengthens to 0.5 on hover. Inputs are 48px, 12px radius, `rgba(0,0,0,0.4)` fill. The sticky nav turns `rgba(0,0,0,0.8)` with a 24px backdrop blur after scroll. Use Phosphor duotone icons. No light mode, no second accent.

```css
:root {
  --brand-bg: #00020D;
  --brand-bg-end: #090A11;
  --brand-black: #000000;
  --brand-card: #101218;
  --brand-secondary: #1F212E;
  --brand-muted: #181B25;
  --brand-border: #181B25;
  --brand-border-tint: rgba(69, 95, 229, 0.2);
  --brand-border-tint-strong: rgba(69, 95, 229, 0.5);
  --brand-primary: #455FE5;
  --brand-primary-dark: #1830B4;
  --brand-primary-light: #6276EA;
  --brand-periwinkle: #8C9FFF;
  --brand-highlight: #A6B3F2;
  --brand-ring: #435CE5;
  --brand-text: #F2F4FF;
  --brand-text-body: #CBD5E1;
  --brand-text-muted: #94A3B8;
  --brand-text-dim: #64748B;
  --brand-destructive: #7F1D1D;
  --brand-font: "DM Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --brand-radius: 8px;
  --brand-radius-card: 12px;
  --brand-radius-frame: 16px;
  --brand-blur: 24px;
  --brand-ease-out: cubic-bezier(0, 0, 0.58, 1);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Storiara.
