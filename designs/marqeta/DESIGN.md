---
name: Marqeta
slug: marqeta
url: https://marqeta.com
category: Finance
tagline: "Cream canvas, aubergine text, electric violet buttons and huge light grotesk headlines."
updated: 2026-11-16
logoBackground: "#FCF5E9"
theme: light
colors:
  - name: Cream
    hex: "#FCF5E9"
    role: Page background
  - name: Aubergine
    hex: "#300047"
    role: Primary text, logo, dark sections
  - name: Electric Violet
    hex: "#B526FD"
    role: Primary buttons, focus ring, key accents
  - name: Deep Violet
    hex: "#8402C5"
    role: Accent text on lilac, hover text
  - name: Plum
    hex: "#46126E"
    role: Muted text on light
  - name: Lilac Border
    hex: "#BF9AE0"
    role: Borders, input outlines, dividers
  - name: Lilac
    hex: "#DBC8EF"
    role: Hover fill for outline buttons and menu items
  - name: White
    hex: "#FFFFFF"
    role: Cards and the floating nav
  - name: Night
    hex: "#1B0029"
    role: Darkest section background
  - name: Grape
    hex: "#390C5A"
    role: Cards on dark sections
  - name: Bright Violet
    hex: "#BD4DFE"
    role: Primary button on dark sections
  - name: Magenta
    hex: "#D62E9B"
    role: Destructive and error states
  - name: Lime
    hex: "#9BBF23"
    role: Product theme accent (green)
  - name: Cobalt
    hex: "#2D4CD5"
    role: Product theme accent (blue)
  - name: Orange
    hex: "#F45A01"
    role: Product theme accent (orange)
  - name: Pink
    hex: "#FF5CAB"
    role: Product theme accent (pink)
fonts:
  display:
    family: "KMR Apparat"
    fallback: "Instrument Sans"
    weights: [300, 400, 500]
  body:
    family: "Geist"
    fallback: "Geist"
    weights: [400, 500, 600]
  mono:
    family: "Geist Mono"
    fallback: "Geist Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 96, weight: 300, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: H1, size: 60, weight: 300, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: H2, size: 48, weight: 300, lineHeight: 1.05, tracking: "0" }
  - { role: H3, size: 30, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H4, size: 24, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 14, weight: 500, lineHeight: 1.43, tracking: "0" }
radii: { sm: 6, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: XS, value: "0 1px 2px 0 rgba(0,0,0,0.05)" }
preview:
  bg: "#FCF5E9"
  surface: "#FFFFFF"
  text: "#300047"
  muted: "#46126E"
  border: "#BF9AE0"
  accent: "#B526FD"
  accentText: "#FEFBF6"
  radius: 8
  buttonStyle: solid
---

# Marqeta

## 1. Visual Theme & Atmosphere

Marqeta, the card issuing and processing platform, uses a warm, almost paper-like palette that sets it apart from the usual blue fintech look. The page is cream (`#FCF5E9`), the text is a deep aubergine purple (`#300047`), and the one loud colour is an electric violet (`#B526FD`) on primary buttons. Headlines are very large and light, set in KMR Apparat at weight 300, and body text is Geist.

What makes it recognisable:

- **Cream and aubergine instead of white and black.** Nothing on the main canvas is pure white or pure black except cards. The warmth makes enterprise content feel approachable.
- **Huge, light headlines.** The hero line ("Launch card programs that last") runs at 96px, weight 300, line-height 1. Section headings follow at 48-60px, still light.
- **Floating, bordered nav.** The header is a white rounded rectangle (12px radius, 72px tall) with a 1px lilac border, sitting inside the page margin rather than spanning the edge.
- **Lilac hairlines.** Cards and inputs use `#BF9AE0` 1px borders rather than shadows.
- **Themed blocks.** Some sections switch to a dark aubergine theme (`#300047` or `#1B0029` background, `#390C5A` cards, cream text). Product areas can take a colour theme (blue, green, orange or pink) using the 900 shade as the card fill and the 400 shade as the border.
- **Big stat callouts.** Metrics such as processing volume and uptime are set large in the heading font with small captions.

Density is moderate. Sections are tall with clear grids of cards; copy is concise and enterprise in tone.

Mood words: warm, confident, modern, enterprise, precise.

## 2. Color Palette & Roles

The site is built with Tailwind and shadcn/ui; colours come from semantic tokens (`--background`, `--primary`, etc.) and a custom scale (`--color-violet-*`, `--color-indigo-*`).

### Light theme (default)

| Token | Hex | Role |
|---|---|---|
| `--background` | `#FCF5E9` | Page background (Cream) |
| `--foreground` | `#300047` | Text and logo (Aubergine) |
| `--card` | `#FFFFFF` | Cards, nav bar |
| `--primary` | `#B526FD` | Primary button, focus ring |
| `--primary-foreground` | `#FEFBF6` | Text on primary |
| `--accent` | `#DBC8EF` | Hover fill for outline buttons and menu items |
| `--accent-foreground` | `#8402C5` | Text on accent |
| `--muted-foreground` | `#46126E` | Secondary text |
| `--border` / `--input` | `#BF9AE0` | Borders, input outlines |
| `--destructive` | `#D62E9B` | Errors, destructive actions |

### Dark theme blocks

| Token | Hex | Role |
|---|---|---|
| `--background` | `#300047` or `#1B0029` | Section background |
| `--foreground` | `#FCF5E9` | Text |
| `--card` | `#390C5A` | Cards |
| `--primary` | `#BD4DFE` | Primary button |
| `--primary-foreground` | `#1B0029` | Text on primary |
| `--border` | `#9B66CC` | Borders |
| `--destructive` | `#FF5CAB` | Errors |

### Product themes

| Theme | Card (900) | Border (400/500) | Accent (600) |
|---|---|---|---|
| Blue | `#13205B` | `#5574FF` | `#1F3AAB` |
| Green | `#475116` | `#9BBF23` | `#738F1A` |
| Orange | `#5B1D13` | `#FF8138` | `#C94500` |
| Pink | `#5B133E` | `#FF5CAB` | `#A81F7A` |

## 3. Typography

**Display:** KMR Apparat (Kometa Type), loaded as `fontHeading` in light 300, regular 400, medium 500 and bold 700. Headlines use 300.

**Body:** Geist (Vercel), variable 100-900, used for body, nav and buttons.

**Licensing:** KMR Apparat is a commercial typeface. Free substitute: **Instrument Sans** at weight 300-400 (approximate match in width and tone). Geist and Geist Mono are free on Google Fonts.

```css
--font-heading: "KMR Apparat", "Instrument Sans", system-ui, sans-serif;
--font-sans: "Geist", system-ui, sans-serif;
```

### Scale (Tailwind tokens; desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (`text-8xl`) | 96px (48px mobile) | 300 | 1 | -0.01em (approximate) |
| H1 (`text-6xl`) | 60px | 300 | 1 | -0.01em (approximate) |
| H2 (`text-5xl`) | 48px | 300 | 1-1.05 | 0 |
| H3 (`text-3xl`) | 30px | 400 | 1.2 | 0 |
| H4 (`text-2xl`) | 24px | 400 | 1.33 | 0 |
| Lead (`text-lg`) | 18px | 400 | 1.56 | 0 |
| Body (`text-base`) | 16px | 400 | 1.5 | 0 |
| Button / nav (`text-sm`) | 14px | 500 | 1.43 | 0 |

### Rules

- Headlines are sentence case, light and big. Never bold a headline.
- Eyebrows above sections are uppercase ("SOLUTIONS", "PLATFORM", "CUSTOMER STORIES").
- Text colour is Aubergine on cream; never pure black.

## 4. Logo & Brand Mark

- **Construction:** a symbol made of three stacked chevrons pointing right (like a fast-forward arrow drawn in flat bands), followed by MARQETA in custom slab-serif capitals with sharp, bracketed serifs and a distinctive Q.
- **Colour:** Aubergine `#2F0046` on cream or white; cream or white on Aubergine.
- **Clear space:** at least the height of the letters on each side (approximate).
- **Minimum size:** about 100px wide for the full lockup; the chevron symbol alone at 16px (approximate).
- **Misuse:** don't set the chevrons in rainbow colours, separate letters, use the violet button colour for the wordmark, or add effects.

## 5. Components

### Buttons (shadcn variants)

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 0 24px;          /* h-10 px-6; nav size h-8 px-3 */
  border-radius: 8px;                       /* rounded-lg, --radius: .5rem */
  font: 500 14px/20px "Geist", sans-serif;
  transition: all .15s;
}
.btn-primary {
  background: #B526FD; color: #FEFBF6;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
}
.btn-primary:hover { background: color-mix(in oklab, #B526FD 90%, transparent); }
.btn-outline {
  background: #FCF5E9; color: #300047;
  border: 1px solid #BF9AE0;
}
.btn-outline:hover { background: #DBC8EF; color: #8402C5; }
.btn:focus-visible { box-shadow: 0 0 0 3px rgba(181,38,253,0.5); outline: none; }
.btn:disabled { opacity: .5; pointer-events: none; }
```

Pairs are common: primary "Explore solutions" next to outline "Talk with an expert". In the nav: outline "Sign In" and primary "Contact Sales" at 32px tall.

### Floating nav

```css
.nav {
  height: 72px;
  margin: 12px auto 0;
  padding: 0 32px;
  background: #FFFFFF;
  border: 1px solid #BF9AE0;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: space-between; gap: 36px;
}
```

Logo left (154x16), menu triggers "Platform", "Solutions", "Company", "Resources" in Geist 14px medium with a small chevron, then "Sign In" and "Contact Sales". Opening a menu squares off the bottom corners and drops a white mega panel attached to the bar.

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #BF9AE0;
  border-radius: 16px;      /* rounded-2xl */
  padding: 24px;
}
.feature-card {
  border-radius: 12px;      /* rounded-xl */
  min-height: 375px;        /* md:min-h-93.75 */
  display: flex; flex-direction: column; justify-content: space-between;
  overflow: hidden;
}
```

Feature cards contain a product illustration or UI crop at the top and a title plus short body at the bottom; a 2/3 + 1/3 grid is common. Solution cards have a small icon, a title such as "Expense management" and a one-line description.

### Stats

Large figures in KMR Apparat light (for example "$400B+", "99.99%", read on marqeta.com on 2026-11-16) with Geist 14px captions underneath, separated by lilac vertical rules.

### Inputs

```css
.input {
  height: 36px;
  padding: 4px 12px;
  border: 1px solid #BF9AE0;
  border-radius: 8px;
  background: transparent;
  font: 400 14px "Geist", sans-serif;
  color: #300047;
}
.input:focus-visible { border-color: #B526FD; box-shadow: 0 0 0 3px rgba(181,38,253,0.5); }
.input[aria-invalid="true"] { border-color: #D62E9B; }
```

### Footer

Dark aubergine `#1B0029` or `#300047`, cream text, link columns in Geist 14px, lilac dividers, the logo in cream.

## 6. Layout & Spacing

- **Container padding:** 64px desktop, 32px tablet and mobile (`--container-padding-*`).
- **Max widths:** content up to 1280px (`--container-7xl`); text blocks 896-1024px (`4xl`, `5xl`).
- **Breakpoints (Tailwind):** 640, 768, 1024, 1280, 1536px.
- **Grid:** 3-column card grids on desktop, stacking on mobile; feature rows mix 2-span and 1-span cards.
- **Section spacing:** 96-128px vertical on desktop (approximate).

## 7. Depth, Elevation & Motion

Flat. Borders do the separating; shadows are minimal.

| Token | Value | Use |
|---|---|---|
| XS | `0 1px 2px 0 rgba(0,0,0,0.05)` | Buttons |
| Focus | `0 0 0 3px rgba(181,38,253,0.5)` | Focus ring |

Transitions are short: .15s for button colour, .2s for the nav radius change when a menu opens.

## 8. Iconography & Imagery

- **Icons:** Lucide-style line icons at 16-20px, 1.5-2px stroke, in Aubergine or Violet.
- **Imagery:** product UI crops (card controls, dashboards, transaction lists) and payment card renders, often on violet or themed backgrounds. Little or no lifestyle photography on the home page.

## 9. Voice & Microcopy

Enterprise, confident and specific. Talks about programs, scale and partnership; avoids hype. Headlines are short declarative sentences.

Sample strings (read on marqeta.com on 2026-11-16):

- Hero: "Launch card programs that last"
- Sub: "Enterprise-grade issuing and processing, backed by a team of payment experts who guide your growth from day one."
- CTAs: "Explore solutions", "Talk with an expert", "Contact Sales", "View documentation"
- Section: "Turn payments into your competitive edge"
- Platform: "Designed to scale. Configured to fit."

## 10. Do's and Don'ts

**Do**

- Use cream `#FCF5E9` as the page and aubergine `#300047` for text.
- Set headlines very large and light (300) in a grotesk.
- Use electric violet `#B526FD` for primary buttons only.
- Separate content with 1px lilac `#BF9AE0` borders and 8-16px radii.
- Float the nav as a bordered white bar inside the page margin.

**Don't**

- Don't use pure white pages or pure black text.
- Don't use heavy drop shadows on cards.
- Don't spread violet across large backgrounds in light sections; switch to the dark aubergine theme instead.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Marqeta. Cream page `#FCF5E9`, text in deep aubergine `#300047`, secondary text `#46126E`, borders and input outlines 1px lilac `#BF9AE0`. Headlines in KMR Apparat (fallback "Instrument Sans") at weight 300, very large: hero 96px with line-height 1, section titles 48-60px. Body, nav and buttons in Geist 14-16px. Primary buttons are electric violet `#B526FD` with off-white `#FEFBF6` text, 8px radius, 40px tall, 24px side padding, font-weight 500; outline buttons are cream with lilac border and `#DBC8EF` hover fill with `#8402C5` text. Focus ring `0 0 0 3px rgba(181,38,253,.5)`. The header is a floating white bar, 72px tall, 12px radius, lilac border, inside a 64px page margin. Cards are white with lilac borders and 12-16px radius, no shadows. Use uppercase eyebrows, big light stat numbers, and switch some sections to a dark theme (`#300047` background, `#390C5A` cards, cream text, `#BD4DFE` buttons). Max width 1280px. Copy is enterprise, concise and specific.

```css
:root {
  --brand-bg: #FCF5E9;
  --brand-fg: #300047;
  --brand-muted-fg: #46126E;
  --brand-card: #FFFFFF;
  --brand-primary: #B526FD;
  --brand-primary-fg: #FEFBF6;
  --brand-accent: #DBC8EF;
  --brand-accent-fg: #8402C5;
  --brand-border: #BF9AE0;
  --brand-destructive: #D62E9B;
  --brand-dark-bg: #300047;
  --brand-dark-card: #390C5A;
  --brand-font-heading: "KMR Apparat", "Instrument Sans", system-ui, sans-serif;
  --brand-font-sans: "Geist", system-ui, sans-serif;
  --brand-radius: 8px;
  --brand-radius-2xl: 16px;
  --brand-ring: 0 0 0 3px rgba(181,38,253,0.5);
  --brand-max-width: 1280px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Marqeta.
