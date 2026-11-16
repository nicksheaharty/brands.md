---
name: Cloudflare
slug: cloudflare
url: https://cloudflare.com
category: Developer
tagline: "Clean white canvas, Cloudflare orange, Kunst Grotesk headlines and soft pill buttons."
updated: 2026-11-16
appStoreId: 1423538627
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Cloudflare Orange
    hex: "#F38020"
    role: Logo cloud, brand color in print and partner assets
  - name: Accent Orange
    hex: "#FF5E1F"
    role: Primary buttons, nav logo, hero outlines and highlights on cloudflare.com
  - name: Ink
    hex: "#262626"
    role: Headings and primary text
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Cloud Gold
    hex: "#FAAE40"
    role: Second tone of the logo cloud
  - name: Logo Grey
    hex: "#404041"
    role: Logo wordmark
  - name: Accent Light
    hex: "#FF7038"
    role: Accent hover and dark mode accent
  - name: Burnt Orange
    hex: "#D63C01"
    role: Dark accent, pressed states, orange text on light
  - name: Cream
    hex: "#FFFBF5"
    role: Diagram node fill, light foreground on orange
  - name: Paper
    hex: "#F9F7F6"
    role: Tertiary background, section bands
  - name: Secondary Text
    hex: "#707070"
    role: Body secondary, captions
  - name: Border
    hex: "#F0F0F0"
    role: Card and button borders
  - name: Compute Blue
    hex: "#0A95FF"
    role: Workers and compute product accent
  - name: AI Green
    hex: "#00BD7D"
    role: AI product accent
  - name: Storage Pink
    hex: "#EE0DDB"
    role: Storage and database product accent
  - name: Night
    hex: "#151414"
    role: Dark mode page background
fonts:
  display:
    family: "FT Kunst Grotesk"
    fallback: "Inter Tight"
    weights: [400, 500]
  body:
    family: "FT Kunst Grotesk"
    fallback: "Inter"
    weights: [400, 500]
  mono:
    family: "Apercu Mono Pro"
    fallback: "DM Mono"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 64, weight: 600, lineHeight: 0.99, tracking: "-0.025em" }
  - { role: H2, size: 56, weight: 500, lineHeight: 1.0, tracking: "-0.025em" }
  - { role: H3, size: 44, weight: 500, lineHeight: 1.0, tracking: "-0.025em" }
  - { role: H4, size: 32, weight: 500, lineHeight: 1.0, tracking: "-0.025em" }
  - { role: Lead, size: 19, weight: 400, lineHeight: 1.2, tracking: "-0.025em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: UI, size: 14, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Code, size: 14, weight: 500, lineHeight: 1.3, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Stack, value: "0 4px 12px 0 rgba(0,0,0,0.02), 0 2px 12px 0 rgba(0,0,0,0.03)" }
  - { name: Popover, value: "0 16px 48px -8px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F9F7F6"
  text: "#262626"
  muted: "#707070"
  border: "#F0F0F0"
  accent: "#FF5E1F"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# Cloudflare

## 1. Visual Theme & Atmosphere

Cloudflare's current site is a calm, mostly white developer platform page with one loud color. Headlines are big and tight in FT Kunst Grotesk, body text is small and neutral, and the orange accent (`#FF5E1F` on the site, `#F38020` in the classic logo) carries every primary action. Product areas get their own small color code (blue for compute, green for AI, pink for storage) used in diagrams and icons.

What makes it recognisable:

- **The orange cloud.** The two-tone cloud logo (`#F38020` and `#FAAE40`) is one of the most familiar marks on the internet. The nav uses a single-color version in the accent orange.
- **Tight, slightly quirky grotesk.** Kunst Grotesk at weight 500 with -0.025em tracking and line height near 1.0. Headlines feel dense and confident.
- **Orange-outlined hero type.** The home hero sets white headline text on an orange illustrated background with a 1px orange text-shadow outline so it stays legible over the art.
- **Glassy pill buttons.** Buttons are fully rounded on desktop, have a hairline border and `backdrop-filter: blur(12px)`, and press down 1px with a 0.98 scale.
- **Warm neutrals.** Greys lean warm: `#F9F7F6` bands, `#FFFBF5` cream nodes, `#E9D1BB` node borders. Diagrams look like paper schematics.
- **Dotted decoration.** Light dot grids (`#EBEBEB`) and dashed rules sit behind architecture diagrams.

Mood words: technical, friendly, global, fast, engineered.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Accent Orange (accent-100) | `#FF5E1F` | Primary button fill, nav logo, links, focus accents |
| Accent Light (accent-200) | `#FF7038` | Hover, dark-mode accent |
| Accent Muted | `#BF4C14` | Muted orange text on white |
| Burnt Orange (dark-accent) | `#D63C01` | Pressed states, orange text needing contrast |
| Cloudflare Orange (logo) | `#F38020` | Classic brand orange in the logo and press assets |
| Cloud Gold (logo) | `#FAAE40` | Small cloud in the logo |
| Logo Grey | `#404041` | Wordmark in the classic logo |
| Ink (foreground-100) | `#262626` | Headings and body text |
| Secondary Text | `#707070` | Captions, descriptions |
| White (background-100) | `#FFFFFF` | Page |
| Paper (background-300) | `#F9F7F6` | Section bands, sidebars |
| Cream | `#FFFBF5` | Diagram nodes, light text on orange |
| Node Border | `#E9D1BB` | Diagram node outlines |
| Border (border-100) | `#F0F0F0` | Card and button borders |
| Border Strong (border-200) | `#CCCCCC` | Inputs, separators |

### Product colors

| Area | Solid | Tint |
|---|---|---|
| Compute (Workers) | `#0A95FF` | `#0A95FF1A` |
| AI | `#00BD7D` | `#00BD7D1A` |
| Storage | `#EE0DDB` | `#EE0DDB1A` |
| Media | `#9616FF` | `#F8EBEE` |
| Security | `#B52831` | `#B528311A` |
| SASE / Zero Trust | `#0D9488` | `#0D94881A` |

Use them for icons, diagram lines and small tags, never for buttons.
### Dashboard (Kumo design system)

The Cloudflare dashboard uses its own component library, Kumo, with a blue brand color around `#056DFF` (light) and `#005AEB` (approximate, converted from OKLCH), near-black text `#18181B`, canvas `#FBFBFB` and Tailwind-style red, green and amber status colors. Marketing pages also load Kumo for embedded widgets such as domain search.

### Dark mode

The site supports `html.dark`: background `#151414`, raised surfaces `#191817` and `#2A2927`, foreground `#F0E3DE` (a warm cream), secondary text `#9A9390`, borders `#F0E3DE20`, accent `#FF5E1F`.

## 3. Typography

**Families:** FT Kunst Grotesk (regular 400, medium 500) is the main face. STK Bureau Sans is loaded as an alternate sans in some modules. Code and technical labels use Apercu Mono Pro. Older pages and docs still use system UI stacks.

**Licensing:** all three are commercial. Free stand-ins: **Inter Tight** for headlines, **Inter** for body, **DM Mono** for code.

```css
--font-sans: "FT Kunst Grotesk", system-ui, sans-serif;
--font-mono: "Apercu Mono Pro", ui-monospace, monospace;
```

### Scale (from `--type-*` tokens)

| Role | Mobile | Desktop | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| H1 / Hero | 40-44px | 56-64px | 500 (600 on home hero) | 0.99 | -0.025em |
| H2 | 28-36px | 56px | 500 | 1.0 | -0.025em |
| H3 | 24-32px | 44-48px | 500 | 1.0 | -0.025em |
| H4 | 20-32px | 32px | 500 | 1.0 | -0.025em |
| H5 / Lead | 17-21px | 18-19px | 400 | 1.2 | -0.025em |
| H6 | 16-18px | 16-18px | 500 | 1.2 | -0.025em |
| Body | 16px | 16px | 400 | 1.5 | 0 |
| UI text | 14px | 14px | 400-500 | 1.5 | 0 |
| Small | 12px | 12px | 400 | 1.4 | 0 |
| Code | 0.85em | 0.85em | 500 | 1.3 | 0 |

### Rules

- Sentence case everywhere.
- Every heading level uses -0.025em tracking and tight leading.
- Mono is used for small tags, metrics and code, often uppercase at 12px.

## 4. Logo & Brand Mark

The logo is a stylised cloud with a large orange (`#F38020`) puff and a smaller gold (`#FAAE40`) puff, separated by thin white speed lines, above or beside the **CLOUDFLARE** wordmark in wide capitals (`#404041`).

- **Nav version:** the cloud alone plus a slim wordmark, both in the current accent (`#FF5E1F`) or the text color.
- **Color versions:** full color on white; full color cloud with white wordmark on dark; single-color orange or white.
- **Clear space:** the height of the small cloud puff on all sides (approximate).
- **Minimum size:** cloud 24px wide; full lockup 100px wide.

Misuse:

- Do not recolor the cloud in product colors.
- Do not remove the white lines between the puffs.
- Do not place the full-color logo on orange backgrounds.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#FF5E1F` | `#FFFFFF` 500 | 1px `#FF5E1F` | 9999px (12px on mobile) |
| Secondary | `#FFFFFF` | `#262626` | 1px `#F0F0F0` | 9999px |
| On orange hero | `#FFFFFF` | `#1F1F1F` | 1px white | 9999px |
| Ghost link | transparent | `#262626` | none | 0 |

Sizes: nav buttons `padding: 6px 12px` at 14px; hero buttons `padding: 12px 24px` at 18px.

```css
.cf-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font: 500 14px/1.5 var(--font-sans);
  padding: 6px 12px;
  border: 1px solid #F0F0F0;
  border-radius: 9999px;
  background: #FFFFFF; color: #262626;
  backdrop-filter: blur(12px);
  transition: scale .16s cubic-bezier(.25,.46,.45,.94), translate .16s cubic-bezier(.25,.46,.45,.94);
}
.cf-btn:hover { border-color: rgba(255,94,31,.4); opacity: .95; }
.cf-btn:active { scale: .98; translate: 0 1px; }
.cf-btn--primary { background: #FF5E1F; border-color: #FF5E1F; color: #fff; }
.cf-btn:focus-visible { box-shadow: 0 0 0 3px rgba(23,23,23,.5); }
```

A pseudo-element overlay brightens the button on hover (8% on secondary, 26% on primary).

### Inputs

- Height 36-40px, radius 6-8px, 1px `#E5E5E5` border, 14px text.
- Focus: `box-shadow: #FF5E1F 0 0 0 1px, #FF5E1F33 0 0 0 3px`.
- Domain search: a large input with a ".com" suffix chip and an inline orange "Search" pill.

### Cards

- White, 1px `#F0F0F0` border, radius 12px, padding 24-32px, no shadow by default.
- Product cards have a small product-color icon tile (8px radius, tint background) and a 20-24px headline.

### Navigation

- Floating header with a blurred translucent background, logo left (cloud plus wordmark), menu in the center: "Products", "Solutions", "Resources", "Pricing".
- Right side: "Contact sales" and "Login" as secondary pills and "Start building" as the orange primary.

### Badges

12px, radius 4-6px, weight 500. Product-colored tints (`#0A95FF1A` with `#0A95FF` text) or neutral `#F5F5F5` with `#262626`.

### Architecture diagram (signature)

Nodes are cream (`#FFFBF5`) rounded rectangles with `#E9D1BB` borders and an orange (`#FF5315`) accent dot; edges are thin dashed lines; the background has a light dot grid.

### Code blocks

Dark panel `#1A1A1A`, radius 8-12px, Apercu Mono 14px, One Dark style token colors (`#C678DD` keywords, `#98C379` strings, `#56B6C2` operators, `#E06C75` variables).

## 6. Layout & Spacing

- **Containers:** content widths of 1080px for hero text, 1200px for grids, up to 1480px for wide sections.
- **Breakpoints:** 640, 768, 1024, 1280px (Tailwind defaults); some components switch at 860 and 925px.
- **Spacing:** Tailwind 4px scale. Common steps 8, 12, 16, 24, 32, 48, 64, 96.
- **Section spacing:** 96-128px on desktop, 64px on mobile.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Stack | `inset 1px 6px 6px #FFFFFF33, 0 4px 12px #00000005, 0 2px 12px #00000008` |
| Popover | `0 16px 48px -8px #0000001F, 0 4px 16px -2px #00000014` |
| Overlay scrim | `#00000080` |

### Motion

- Buttons: 160ms, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`, press to 0.98 scale.
- Color transitions: 160-200ms ease-out.
- Hero art and diagrams animate packets along paths; pause under `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** 16-24px line icons with 1.5px stroke, rounded caps, drawn in the text color or a product color.
- **Illustration:** warm, hand-crafted feeling illustrations in orange and cream for heroes; schematic diagrams for products.
- **Globe and network maps:** a dotted world map with orange data center points is a recurring motif.

## 9. Voice & Microcopy

Direct, technical and a bit wry. Writes for developers first and security teams second.

- Sentence case, short statements.
- Explains how things work rather than adjectives about them.
- CTAs: "Start building", "Start building for free", "Contact sales", "Login", "Under attack?".
- Scale figures (network share, cities, requests) appear often; read them on the live site the same day before quoting.

Sample strings:

- Hero: "Build without boundaries"
- Sub (read on the live site 2026-11-16): "Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare."
- Page title: "Cloudflare: Build for the agent era"

## 10. Do's and Don'ts

**Do**

- Keep the page white with one orange accent.
- Use pill buttons with hairline borders and a tiny press animation.
- Set headlines tight: weight 500, -0.025em tracking, line height near 1.
- Use warm neutrals (`#F9F7F6`, `#FFFBF5`) for bands and diagrams.
- Color-code products with the compute, AI, storage and security colors in diagrams.

**Don't**

- Don't use orange for large background fills outside the hero.
- Don't use heavy drop shadows on cards.
- Don't mix the classic `#F38020` and site `#FF5E1F` oranges in one component.
- Don't use bold 700 headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Cloudflare. White page, text `#262626`, secondary text `#707070`, borders `#F0F0F0`, section bands `#F9F7F6`. Font: `"FT Kunst Grotesk", "Inter Tight", Inter, system-ui, sans-serif`; mono `"Apercu Mono Pro", "DM Mono", monospace`. Headlines are weight 500 with -0.025em tracking and line-height about 1.0 (56-64px desktop). Body 16px/1.5, UI text 14px. Buttons are pills (9999px radius) with a 1px border and `backdrop-filter: blur(12px)`: primary is orange `#FF5E1F` with white text, secondary is white with `#F0F0F0` border and dark text; on press scale to 0.98 and move down 1px over 160ms `cubic-bezier(.25,.46,.45,.94)`. Cards are white, 12px radius, 1px border, no shadow. Use product color accents in icons and diagrams only: compute `#0A95FF`, AI `#00BD7D`, storage `#EE0DDB`, security `#B52831`. Diagrams use cream `#FFFBF5` nodes with `#E9D1BB` borders on a light dot grid. Copy is short and technical.

```css
:root {
  --brand-orange: #FF5E1F;
  --brand-orange-hover: #FF7038;
  --brand-orange-dark: #D63C01;
  --brand-logo-orange: #F38020;
  --brand-logo-gold: #FAAE40;
  --brand-logo-grey: #404041;
  --brand-text: #262626;
  --brand-text-secondary: #707070;
  --brand-bg: #FFFFFF;
  --brand-surface: #F9F7F6;
  --brand-cream: #FFFBF5;
  --brand-node-border: #E9D1BB;
  --brand-border: #F0F0F0;
  --brand-border-strong: #CCCCCC;
  --brand-compute: #0A95FF;
  --brand-ai: #00BD7D;
  --brand-storage: #EE0DDB;
  --brand-security: #B52831;
  --brand-dark-bg: #151414;
  --brand-dark-text: #F0E3DE;
  --brand-font: "FT Kunst Grotesk", "Inter Tight", Inter, system-ui, sans-serif;
  --brand-font-mono: "Apercu Mono Pro", "DM Mono", ui-monospace, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-pill: 9999px;
  --brand-shadow-popover: 0 16px 48px -8px rgba(0,0,0,0.12), 0 4px 16px -2px rgba(0,0,0,0.08);
  --brand-ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --brand-duration: 160ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Cloudflare.
