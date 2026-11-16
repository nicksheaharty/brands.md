---
name: Vercel
slug: vercel
url: https://vercel.com
category: Developer
tagline: "Monochrome Geist system: black triangle, tight Geist type, hairline borders and pill CTAs."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, primary buttons, dark mode page
  - name: White
    hex: "#FFFFFF"
    role: Page background (light), text on black
  - name: Gray 1000
    hex: "#171717"
    role: Primary text, solid button fill in light mode
  - name: Blue 700
    hex: "#0070F7"
    role: Links, focus, selected state
  - name: Background 200
    hex: "#FAFAFA"
    role: Secondary surface, sidebars
  - name: Gray 900
    hex: "#4D4D4D"
    role: Secondary text (light)
  - name: Gray 700
    hex: "#8F8F8F"
    role: Placeholder, disabled text
  - name: Gray 400
    hex: "#EBEBEB"
    role: Default borders
  - name: Gray 100
    hex: "#F2F2F2"
    role: Hover fill, disabled button
  - name: Dark Background
    hex: "#0A0A0A"
    role: Page background (dark)
  - name: Dark Text
    hex: "#EDEDED"
    role: Primary text (dark)
  - name: Red 800
    hex: "#E2162A"
    role: Errors, destructive
  - name: Amber 700
    hex: "#FFB200"
    role: Warnings, building state
  - name: Green 700
    hex: "#28A948"
    role: Ready, success
fonts:
  display:
    family: "Geist"
    fallback: "Geist"
    weights: [600]
  body:
    family: "Geist"
    fallback: "Geist"
    weights: [400, 500]
  mono:
    family: "Geist Mono"
    fallback: "Geist Mono"
    weights: [400]
typeScale:
  - { role: Heading 72, size: 72, weight: 600, lineHeight: 1.0, tracking: "-4.32px" }
  - { role: Heading 48, size: 48, weight: 600, lineHeight: 1.17, tracking: "-2.88px" }
  - { role: Heading 32, size: 32, weight: 600, lineHeight: 1.25, tracking: "-1.28px" }
  - { role: Heading 20, size: 20, weight: 600, lineHeight: 1.3, tracking: "-0.4px" }
  - { role: Copy 16, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Copy 14, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Label 13 Mono, size: 13, weight: 400, lineHeight: 1.23, tracking: "0" }
  - { role: Button 14, size: 14, weight: 500, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 6, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 64, 96]
shadows:
  - { name: Border, value: "0 0 0 1px rgba(0,0,0,0.08)" }
  - { name: Small, value: "0 2px 2px rgba(0,0,0,0.04)" }
  - { name: Menu, value: "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.02), 0 4px 8px -4px rgba(0,0,0,0.04), 0 16px 24px -8px rgba(0,0,0,0.06)" }
  - { name: Modal, value: "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.02), 0 8px 16px -4px rgba(0,0,0,0.04), 0 24px 32px -8px rgba(0,0,0,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  text: "#171717"
  muted: "#4D4D4D"
  border: "#EBEBEB"
  accent: "#171717"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: pill
---

# Vercel

## 1. Visual Theme & Atmosphere

Vercel is the cloud platform behind Next.js, and its look is the Geist design system: almost entirely black, white and neutral gray, with type doing the heavy lifting. The marketing site and the dashboard share the same tokens, so a pricing page, a docs page and a deployment log all feel like one product.

The current homepage leads with "Agentic Infrastructure" set very large and tight, two pill buttons ("Deploy now" solid, "Talk to sales" outline), then use-case sections ("Build agents on infrastructure that thinks like them", "Ship apps that scale from zero to millions instantly"), each with a customer proof line, a features list and a framed product visual. The page follows the system light/dark preference; both themes are first-class.

What makes it recognisable:

- **The black triangle.** A plain equilateral triangle is the whole mark.
- **Geist Sans with heavy negative tracking** on headings (about -6% at 48-72px).
- **Hairline structure.** 1px borders drawn as box-shadows (`0 0 0 1px #00000014`), dashed grid lines and crosshair corners on marketing sections.
- **Monochrome UI with tiny bits of color** reserved for status: blue links/focus, green Ready, amber Building, red Error.
- **Geist Mono** for code, paths, URLs and small technical labels.

Mood words: precise, minimal, fast, engineered, quiet.

## 2. Color Palette & Roles

Values come from the live `--ds-*` (Geist) custom properties on vercel.com. Geist defines each color as a 100-1000 scale with separate light and dark values.

| Name | Light | Dark | Role |
|---|---|---|---|
| Background 100 | `#FFFFFF` | `#0A0A0A` | Page, cards |
| Background 200 | `#FAFAFA` | `#000000` | Secondary surface, sidebars |
| Gray 100 | `#F2F2F2` | `#1A1A1A` | Component hover, disabled fill |
| Gray 200 | `#EBEBEB` | `#1F1F1F` | Active fill |
| Gray 300 | `#E6E6E6` | `#292929` | Pressed fill |
| Gray 400 | `#EBEBEB` | `#2E2E2E` | Default border |
| Gray 500 | `#C9C9C9` | `#454545` | Hover border |
| Gray 600 | `#A8A8A8` | `#878787` | Active border, icons |
| Gray 700 | `#8F8F8F` | `#8F8F8F` | Disabled text, placeholders |
| Gray 900 | `#4D4D4D` | `#A1A1A1` | Secondary text |
| Gray 1000 | `#171717` | `#EDEDED` | Primary text, solid buttons |
| Blue 700 | `#0070F7` | `#0071F6` | Links, focus, selection |
| Blue 900 | `#0064E2` | `#50A8FF` | Link text on tint |
| Blue 100 | `#F0F7FF` | `#06193A` | Info tint |
| Red 800 | `#E2162A` (approximate mapping) | `#E70022` | Errors |
| Amber 700 | `#FFB200` | `#FFB200` | Warnings, building |
| Green 700 | `#28A948` | `#00AB3E` | Success, ready |

Alpha grays (`--ds-gray-alpha-*`) overlay on any background: 100 `#0000000D`, 200 `#00000014`, 400 `#00000014`, 500 `#00000036` in light; white-based equivalents in dark.

### Status (deployments)

| State | Color | Use |
|---|---|---|
| Ready | Green 700 | Dot beside deployment |
| Building / Queued | Amber 700 | Animated dot |
| Error | Red 800 | Dot, error banner |
| Canceled | Gray 700 | Muted dot |

### Gradients

Older brand moments used bright gradients (`#7928CA` to `#FF0080`, cyan `#50E3C2`), still seen in some event and template art. The core UI stays monochrome.

## 3. Typography

**Families:** Geist Sans and Geist Mono, made by Vercel with Basement Studio and released free under the SIL Open Font License. Both are on Google Fonts and npm (`geist`). A pixel display family (Geist Pixel) appears in a few marketing moments.

### Scale (Geist classes, desktop)

| Class | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| `text-heading-72` | 72px | 600 | 72px | -4.32px |
| `text-heading-64` | 64px | 600 | 64px | -3.84px |
| `text-heading-48` | 48px | 600 | 56px | -2.88px |
| `text-heading-32` | 32px | 600 | 40px | -1.28px |
| `text-heading-24` | 24px | 600 | 32px | -0.96px |
| `text-heading-20` | 20px | 600 | 26px | -0.4px |
| `text-copy-16` | 16px | 400 | 24px | 0 |
| `text-copy-14` | 14px | 400 | 20px | 0 |
| `text-label-13` | 13px | 400 | 16px | 0 |
| `text-button-14` | 14px | 500 | 20px | 0 |

The homepage hero sets `text-heading-64` at weight 400-450 ("font-normal") for a lighter display look; section titles stay 600.

### Rules

- Sentence case for headings, buttons and menu items.
- Big headings use `text-balance` and tight tracking; never positive tracking.
- Use Geist Mono for code, domains, commit hashes, file paths, and small uppercase-free labels.
- Tabular numerals for metrics, timestamps and durations.

## 4. Logo & Brand Mark

The mark is the **Vercel triangle**: a solid equilateral triangle, point up. The logotype pairs the triangle with the "Vercel" wordmark in a custom geometric sans. The site header has "Copy Logo", "Copy Wordmark", "Download Brand Assets" and "Brand Guidelines" on right-click.

- **Colors:** black on light, white on dark. No gradients, no colored triangles.
- **Clear space:** at least half the triangle height on all sides (approximate).
- **Minimum size:** triangle 16px; logotype about 70px wide (approximate).
- The bundled `logo.svg` is the logotype from the live site header, filled black.

Misuse: do not rotate the triangle, outline it, add effects, or set "Vercel" in another font next to it.

## 5. Components

### Buttons (Geist `Button`)

Sizes: small 32px, medium 40px, large 48px tall. Weight 500, 14px (16px large), 6px radius by default; the marketing hero uses `rounded-full` pills.

| Variant | Light background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#171717` | `#FFFFFF` | none | `#383838` (approximate) |
| Secondary | `#FFFFFF` | `#171717` | 1px `#EBEBEB` (shadow) | `#F2F2F2` |
| Tertiary | transparent | `#171717` | none | `#0000000D` |
| Error | `#E2162A` | `#FFFFFF` | none | darker red |
| Disabled | `#F2F2F2` | `#8F8F8F` | 1px `#EBEBEB` | none |

```css
.v-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 0 14px;
  font: 500 14px/20px Geist, "Geist", Arial, sans-serif;
  color: #fff; background: #171717;
  border: 0; border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
}
.v-btn:hover { background: #383838; }
.v-btn--secondary { background: #fff; color: #171717; box-shadow: 0 0 0 1px #EBEBEB; }
.v-btn--secondary:hover { background: #F2F2F2; }
.v-btn--pill { height: 48px; padding: 0 20px; border-radius: 9999px; font-size: 16px; }
.v-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0070F7; }
```

### Navigation

- Sticky header, 64px, translucent background with backdrop blur and a 1px bottom border after scroll.
- Left: triangle + "Vercel". Middle: "Products", "Resources", "Solutions" dropdowns, "Enterprise", "Pricing" at 14px Gray 900, hover Gray 1000.
- Right: "Ask AI", "Log In" (secondary small), "Sign Up" (primary small).
- Dropdowns are wide panels split into groups ("Agent Stack", "Core Platform", "Security", "Tools") with 14px item names and Geist icons.

### Inputs

40px tall, white fill, `0 0 0 1px #EBEBEB` border, 6px radius, 14px text; hover border `#C9C9C9`; focus ring `0 0 0 2px` Blue 700 halo (approximate). Prefix/suffix slots in Gray 100 for "https://" or units.

### Cards and sections

- Cards: Background 100, 1px border via shadow, 8-12px radius, 24px padding; hover raises to Gray 500 border.
- Marketing grids use dashed 1px Gray 400 lines between cells, with small plus-shaped crosshairs at intersections.

### Badges and status dots

- Badge: 20-24px tall pill, 12px/500 text on a tinted fill (Blue 100, Green 100, Amber 100) with the 900 shade as text.
- Status dot: 8-10px circle in the status color.

### Tabs and toggles

Underline tabs: 14px Gray 900 labels, active Gray 1000 with a 2px black underline. Segmented "switch" control: Gray 100 track, white active segment with small shadow.

### Tables and lists (dashboard)

Rows 48-56px, 1px Gray 400 separators, Geist Mono for deployment URLs and commits, relative time on the right ("2m ago"), status dot first.

### Code blocks

Background 200 fill, 1px border, 6-8px radius, Geist Mono 13-14px, file name tab and copy button; syntax colors from the Geist palette (blue, purple, pink, green).

### Toasts and modals

Toast: bottom-right, Background 100, menu shadow, 6px radius. Modal: 12px radius, modal shadow, footer bar with Background 200 fill and right-aligned buttons.

## 6. Layout & Spacing

- **Container:** about 1080-1200px for marketing sections; dashboard content up to about 1200px with a fluid sidebar layout.
- **Grid:** 12 columns; marketing uses a visible guide grid with dashed lines.
- **Spacing tokens:** `--geist-space-*` in 4px steps (8, 12, 16, 24, 32, 40, 64, 96, 128).
- **Breakpoints:** container queries (`@sm`, `@lg`, `@xl`) plus about 600, 960 and 1150px page breakpoints (approximate).
- **Density:** marketing is airy; dashboard is compact (14px text, 32-40px controls).

## 7. Depth, Elevation & Motion

- Borders are box-shadows: `--ds-shadow-border-base: 0 0 0 1px #00000014`.
- Small: `0 2px 2px #0000000A`. Menu and popover: border + `0 4px 8px -4px #0000000A, 0 16px 24px -8px #0000000F`. Modal: border + `0 8px 16px -4px #0000000A, 0 24px 32px -8px #0000000F`.
- Dark mode removes most shadow and relies on `#FFFFFF25` borders.
- Motion: 150ms ease-in-out on hover color and shadow; menus fade and scale from 0.96; skeleton shimmer while loading; animated build logs scroll smoothly.
- Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** Geist icons, 16px default (24px large), 1.5px stroke, rounded caps, `currentColor`.
- **Imagery:** product UI (deployments, logs, analytics), globe and network diagrams in line art, framework logos (Next.js, Svelte, Nuxt) in monochrome.
- **Customer logos:** monochrome SVGs in Gray 1000, small and evenly spaced.
- **Illustrations:** thin-line, grid-based diagrams; no mascots or 3D clutter.

## 9. Voice & Microcopy

Short, direct, developer-first. Lead with what ships and how fast.

- Headlines: "Agentic Infrastructure", "Ship apps that scale from zero to millions instantly", "Built by you, or your agents".
- CTAs: "Deploy now", "Talk to sales", "Sign Up", "Log In", "Get a Demo", "Start Deploying".
- Dashboard strings: "Ready", "Building", "Error", "Visit", "Redeploy", "Promote to Production", "No deployments yet".
- Use sentence case everywhere; no exclamation marks.

## 10. Do's and Don'ts

**Do**

- Build in black, white and the Geist gray scale; add color only for status and links.
- Use Geist Sans 600 with tight negative tracking for headings.
- Draw borders as 1px shadows and keep corner radii at 6px (12px for large surfaces).
- Support both light and dark themes from the same tokens.
- Use Geist Mono for anything technical.

**Don't**

- Don't use gradient buttons or colored backgrounds for primary actions.
- Don't add large drop shadows to cards.
- Don't set headings in light weights with wide tracking.
- Don't color the triangle.
- Don't mix in rounded, playful display fonts.

## 11. Agent Prompt Guide

> Build this UI in the style of Vercel's Geist design system. Light theme by default with a dark twin: background `#FFFFFF` (dark `#0A0A0A`), secondary surface `#FAFAFA` (dark `#000000`), text `#171717` (dark `#EDEDED`), secondary text `#4D4D4D` (dark `#A1A1A1`), borders drawn as `box-shadow: 0 0 0 1px #00000014`. Fonts Geist and Geist Mono. Headings weight 600 with heavy negative tracking (48px at -2.88px, 32px at -1.28px); body 14-16px. Buttons 40px tall, 6px radius, 14px/500: primary solid `#171717` with white text, secondary white with 1px gray border; hero CTAs are 48px pills. Sticky 64px header with blur, black triangle logo, 14px gray nav links, "Log In" and "Sign Up" buttons on the right. Cards 12px radius with hairline borders; tables with Geist Mono URLs and status dots: Ready `#28A948`, Building `#FFB200`, Error `#E2162A`. Links and focus rings `#0070F7`.

```css
:root {
  --brand-bg: #FFFFFF;
  --brand-bg-200: #FAFAFA;
  --brand-gray-100: #F2F2F2;
  --brand-gray-400: #EBEBEB;
  --brand-gray-500: #C9C9C9;
  --brand-gray-700: #8F8F8F;
  --brand-gray-900: #4D4D4D;
  --brand-gray-1000: #171717;
  --brand-black: #000000;
  --brand-blue: #0070F7;
  --brand-red: #E2162A;
  --brand-amber: #FFB200;
  --brand-green: #28A948;
  --brand-border: 0 0 0 1px #00000014;
  --brand-shadow-small: 0 2px 2px #0000000A;
  --brand-shadow-menu: 0 0 0 1px #00000014, 0 1px 1px #00000005, 0 4px 8px -4px #0000000A, 0 16px 24px -8px #0000000F;
  --brand-focus-ring: 0 0 0 2px #FFFFFF, 0 0 0 4px #0070F7;
  --brand-font: "Geist", Arial, sans-serif;
  --brand-font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --brand-radius: 6px;
  --brand-radius-lg: 12px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --brand-bg: #0A0A0A;
    --brand-bg-200: #000000;
    --brand-gray-1000: #EDEDED;
    --brand-gray-900: #A1A1A1;
    --brand-border: 0 0 0 1px #FFFFFF25;
  }
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Vercel.
