---
name: CrowdStrike
slug: crowdstrike
url: https://crowdstrike.com
category: Developer
tagline: "Black and white security brand cut with Falcon red, heavy headlines and claw marks."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Falcon Red
    hex: "#EC0000"
    role: Primary buttons, accents, links on dark, highlights
  - name: Black
    hex: "#000000"
    role: Logo, dark heroes, text on light
  - name: White
    hex: "#FFFFFF"
    role: Light sections, text on dark
  - name: Red Hover
    hex: "#D30000"
    role: Button hover and pressed
  - name: Bright Red
    hex: "#FC0000"
    role: Legacy logo red, alert accents
  - name: Off White
    hex: "#F8F8F8"
    role: Light section and card background
  - name: Grey
    hex: "#707070"
    role: Secondary text on light
  - name: Mid Grey
    hex: "#8B8B8B"
    role: Captions, disabled text
  - name: Light Grey
    hex: "#CCCCCC"
    role: Borders, dividers on light
  - name: Charcoal
    hex: "#343A40"
    role: Dark card surface
  - name: Electric Blue
    hex: "#0024FF"
    role: Secondary accent in product and campaign graphics
  - name: Cyan
    hex: "#00BBFF"
    role: Data-viz and illustration highlight
  - name: Slate
    hex: "#ABB8C3"
    role: Muted UI on dark
fonts:
  display:
    family: "CrowdStrike Sharp Sans"
    fallback: "Montserrat"
    weights: [600, 700]
  body:
    family: "Neue Haas Grotesk Display Pro"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 56, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading L, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 6, md: 10, lg: 32, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Halo, value: "0 0 50px 0 rgba(0,0,0,0.05)" }
  - { name: Card, value: "0 8px 32px rgba(0,0,0,0.08)" }
  - { name: Raised, value: "0 3px 6px rgba(0,0,0,0.16)" }
preview:
  bg: "#000000"
  surface: "#1A1A1A"
  text: "#FFFFFF"
  muted: "#ABB8C3"
  border: "#343A40"
  accent: "#EC0000"
  accentText: "#FFFFFF"
  radius: 10
  buttonStyle: solid
---

# CrowdStrike

## 1. Visual Theme & Atmosphere

crowdstrike.com is stark and high-contrast: black heroes, white type, and a hot "Falcon red" (`#EC0000`) for every action and highlight. Light sections are plain white or `#F8F8F8` with black text. There is almost no mid-tone color; the brand gets its energy from the contrast and from the red.

The homepage leads with the platform message ("CrowdStrike Falcon Platform", "One unified platform to secure the agentic enterprise"), then product bundles, analyst recognition, customer stories and events. Product sections show the Falcon console UI and threat-intelligence imagery: adversary portraits, glowing network maps, red-lit data.

What makes it recognisable:

- **Black, white and Falcon red.** Red buttons with 10px corners, red accent lines, red text highlights in headlines.
- **The claw marks.** Two curved slashes before the CROWDSTRIKE wordmark, drawn like talon scratches.
- **Two typefaces:** a custom geometric display face (CrowdStrike Sharp Sans) in heavy weights for headlines, and Neue Haas Grotesk Display for body and UI.
- **Adversary art.** Illustrated villain characters (the bears, pandas, spiders and kittens of their threat-actor naming) for intelligence reports.
- **Rounded cards** with 16-32px radii and soft, wide halos.

Mood words: bold, urgent, confident, tactical, high-contrast.

## 2. Color Palette & Roles

Hex values are from the live crowdstrike.com CSS (`--cp-*` color-picker tokens and component rules).

| Name | Hex | Role |
|---|---|---|
| Falcon Red | `#EC0000` | `.cmp-button` fill, `--cp-bg`, red text highlights, back links |
| Red Hover | `#D30000` | Button hover and border hover |
| Bright Red | `#FC0000` | Legacy (pre-2024) red logo, alert accents |
| Black | `#000000` | Hero and footer backgrounds, logo, text on light |
| White | `#FFFFFF` | Text on dark, light sections |
| Off White | `#F8F8F8` | Light bands, card fills |
| Light Grey | `#CCCCCC` | Borders on light |
| Grey | `#707070` | Secondary text |
| Mid Grey | `#8B8B8B` | Captions |
| Slate | `#ABB8C3` | Muted UI on dark |
| Charcoal | `#343A40` | Dark cards, borders on dark |
| Electric Blue | `#0024FF` | Secondary graphic accent |
| Cyan | `#00BBFF` | Highlights in data-viz and graphics |

### Semantic colors (approximate)

| State | Hex | Use |
|---|---|---|
| Critical | `#EC0000` | Critical detections, errors |
| High | `#FF6A00` | High severity (approximate) |
| Medium | `#FFC400` | Medium severity (approximate) |
| Low / OK | `#2DB55D` | Low severity, success (approximate) |

### Dark and light

Dark is the signature: `#000000` heroes with white headline, a red word or phrase picked out in `#EC0000`, and a red button. Light sections (`#FFFFFF` / `#F8F8F8`) carry product grids and resources with black type. Components use a `--cp-text` / `--cp-bg` / `--cp-border` token set, so any block can be switched between black, white, off-white and red.

## 3. Typography

- **CrowdStrike Sharp Sans** (`crowdstrikeSharpSans`): a custom version of Sharp Sans, geometric with flat terminals. Used bold for headlines, stats and big statements.
- **Neue Haas Grotesk Display Pro** (`neueHaasGroteskDisplayPro`): body, nav, buttons, forms. It is the most-declared family in the CSS.

```css
--font-display: crowdstrikeSharpSans, helvetica, arial, sans-serif;
--font-body: neueHaasGroteskDisplayPro, helvetica, arial, sans-serif;
```

Both are licensed. Free fallbacks: **Montserrat** 700 for Sharp Sans (geometric, wide), **Inter** for Neue Haas Grotesk.

### Scale (desktop, from CSS size frequencies)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 56px | 700 Sharp Sans | 1.1 | -0.01em (approximate) |
| Heading L | 40px | 700 | 1.15 | -0.01em (approximate) |
| Heading M | 28px | 700 | 1.2 | 0 |
| Heading S | 24px | 600 | 1.25 | 0 |
| Lead | 20px | 400 Neue Haas | 1.4 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 16px (14px small) | 600 | 1.25 | 0 |
| Small / legal | 14px, 12px | 400 | 1.4 | 0 |

### Rules

- Headlines in sentence case with one phrase in red: "One unified platform to secure the **agentic enterprise**".
- Product names: "CrowdStrike Falcon platform", "Falcon Next-Gen SIEM", "Falcon Identity Protection", "Charlotte AI".
- Uppercase only for small eyebrows and the logo wordmark.
- Short headlines; numbers set large in Sharp Sans for stats.

## 4. Logo & Brand Mark

The current logo is the uppercase **CROWDSTRIKE** wordmark in a heavy geometric sans, preceded by two curved **claw marks** that sweep down-left like talon scratches. The primary version is all black on light or all white on dark. Older versions (to around 2024) were all red `#FC0000` and some included a falcon head.

- **Colors:** black on white, white on black, red only for special use.
- **Clear space:** at least the height of the "C" on every side (approximate).
- **Minimum size:** about 100px wide on screen (approximate).
- **Short form:** the claw marks alone work as an avatar-sized symbol.

Misuse: do not separate the claws and reposition them, change the letter spacing, set the wordmark in a different font, or put a red logo on a red background.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#EC0000` | `#FFFFFF` 16px/600 | none | 10px |
| Primary hover | `#D30000` | `#FFFFFF` | none | 10px |
| Secondary on dark | transparent | `#FFFFFF` | 1px `#FFFFFF` | 8-10px |
| Secondary on light | transparent | `#000000` | 1px `#000000` | 8-10px |
| View more | `#000000` | `#FFFFFF` | 1px `#FFFFFF` | 8px, padding 12px 16px |
| Back / text link | none | `#EC0000` 16px/600 | none | chevron icon |

```css
.cs-btn {
  display: inline-grid; place-items: center;
  background: #EC0000; color: #fff;
  border: 0; border-radius: 10px;
  font: 600 16px/1.25 neueHaasGroteskDisplayPro, Inter, helvetica, arial, sans-serif;
  padding: 12px 20px;
  cursor: pointer; text-decoration: none;
  transition: background-color 200ms ease;
}
.cs-btn:hover { background: #D30000; }
.cs-btn--small { font-size: 14px; padding: 11px 20px; }
.cs-btn:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
```

### Navigation

- Dark or white header with the black/white logo left, then "Platform", "Solutions", "Services", "Why CrowdStrike", "Resources", "Pricing" at 16px.
- Right side: search, a red "Free Trial" or "Try for 15 days" button, and a contact link.
- Mega menus: multi-column product lists (Endpoint Detection and Response, Next-Gen SIEM, Identity Protection, Firewall Management) with a featured promo card.

### Hero

Black full-width band, Sharp Sans headline 48-56px white with a red phrase, 20px lead, one or two buttons, product or adversary imagery on the right.

### Cards

- Light cards: `#FFFFFF` or `#F8F8F8`, 16px or 32px radius, halo `0 0 50px rgba(0,0,0,0.05)`, 24-32px padding.
- Dark cards: `#1A1A1A` to `#343A40` (approximate) with white text and red icons.
- Bundle cards ("Tailored bundles to stop breaches"): tier name, short list of included modules with red checkmarks, red CTA at bottom.

### Badges and labels

Small black labels with white 13px text and 4px side padding sit on top of form selections. Severity badges use red, orange, yellow and green fills (approximate).

### Forms

Inputs: white, 1px `#CCCCCC` border, 6-8px radius, 44-48px tall, 16px text; focus border black or red.

### Stats

Large Sharp Sans numerals (40-56px) in red or white, with a short label below.

## 6. Layout & Spacing

- **Max width:** about 1280-1440px (approximate), with full-bleed hero and dark bands.
- **Grid:** 12 columns with 24-32px gutters (approximate).
- **Spacing:** 4px base; common values 12, 16, 20, 24, 32, 48, 64px.
- **Section spacing:** 64-96px on desktop, 48px on mobile.
- **Breakpoints:** about 768, 1024, 1280px (approximate).
- **Density:** medium; generous heroes, then dense product and resource grids.

## 7. Depth, Elevation & Motion

- Soft halo shadows: `0 0 50px rgba(0,0,0,0.05)`; deeper card `0 8px 32px rgba(0,0,0,0.08)`; small `0 3px 6px rgba(0,0,0,0.16)`.
- On dark, depth comes from charcoal tone steps and red glow in imagery.
- Motion: 200ms color transitions on buttons, carousel slides for customer logos and resources, subtle zoom on card images (approximate).

## 8. Iconography & Imagery

- **Icons:** simple line icons, 2px stroke, rounded joins, in red on light or white on dark.
- **Adversary art:** stylised character illustrations for threat actors (e.g. bears, pandas, spiders), each with its own color.
- **Photography:** SOC analysts, executives, event stages, in dark, high-contrast grades.
- **Graphics:** red light trails, network meshes, the claw-mark swoosh reused as a motif.

## 9. Voice & Microcopy

Urgent, assertive and mission-driven; the long-running line "We Stop Breaches" still appears on the site. Short sentences, strong verbs, security vocabulary used precisely.

- Headlines: "One unified platform to secure the agentic enterprise", "Tailored bundles to stop breaches".
- CTAs: "Free Trial", "Try for 15 days", "Learn more", "Contact us".
- Product labels: "Next-Gen SIEM", "Identity Protection", "Agentic SOC", "Cloud Security".

## 10. Do's and Don'ts

**Do**

- Use black, white and `#EC0000` as the core palette.
- Pick out one phrase per headline in red.
- Use 10px-radius red buttons with semibold 16px labels.
- Use heavy geometric headlines and a clean grotesk for body.
- Show the Falcon console and adversary art.

**Don't**

- Don't add extra brand colors beyond small blue/cyan graphic accents.
- Don't use the old red logo on new work.
- Don't use thin or light headline weights.
- Don't use pill buttons or square 0px buttons.
- Don't fill large text blocks with red.

## 11. Agent Prompt Guide

> Build this UI in the style of CrowdStrike. Black hero `#000000` with white type, one phrase per headline in Falcon red `#EC0000`. Light sections `#FFFFFF` / `#F8F8F8` with black text, secondary `#707070`, borders `#CCCCCC`. Headlines in CrowdStrike Sharp Sans (fallback Montserrat) weight 700, 40-56px, tight 1.1 line height; body and UI in Neue Haas Grotesk Display (fallback Inter) 16px/1.5. Primary buttons `#EC0000`, white 16px/600 text, 10px radius, 12px 20px padding, hover `#D30000`. Secondary: 1px white outline on dark, 1px black outline on light. Cards: 16-32px radius, halo `0 0 50px rgba(0,0,0,0.05)`. Header: CROWDSTRIKE wordmark with claw marks, nav "Platform, Solutions, Services, Why CrowdStrike, Resources, Pricing", red "Free Trial" button. Stats in big red Sharp Sans numerals.

```css
:root {
  --brand-red: #EC0000;
  --brand-red-hover: #D30000;
  --brand-red-legacy: #FC0000;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-offwhite: #F8F8F8;
  --brand-border: #CCCCCC;
  --brand-text-secondary: #707070;
  --brand-caption: #8B8B8B;
  --brand-muted-dark: #ABB8C3;
  --brand-charcoal: #343A40;
  --brand-blue: #0024FF;
  --brand-cyan: #00BBFF;
  --brand-font-display: crowdstrikeSharpSans, "Montserrat", helvetica, arial, sans-serif;
  --brand-font: neueHaasGroteskDisplayPro, "Inter", helvetica, arial, sans-serif;
  --brand-radius-sm: 6px;
  --brand-radius-btn: 10px;
  --brand-radius-card: 16px;
  --brand-radius-xl: 32px;
  --brand-shadow-halo: 0 0 50px 0 rgba(0,0,0,0.05);
  --brand-shadow-card: 0 8px 32px rgba(0,0,0,0.08);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by CrowdStrike.
