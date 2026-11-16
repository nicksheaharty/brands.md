---
name: Arm
slug: arm
url: https://arm.com
category: Hardware
tagline: "Deep midnight navy, a lowercase wordmark, lilac and electric-blue pills in Aeonik."
updated: 2026-11-16
logoBackground: "#080225"
theme: dark
colors:
  - name: Midnight
    hex: "#080225"
    role: Primary dark background, text on light, logo backdrop
  - name: Electric Blue
    hex: "#0057FF"
    role: Primary button fill on light sections
  - name: Lilac
    hex: "#D1BAFC"
    role: Links and highlights on dark, accent type
  - name: Violet
    hex: "#7233F7"
    role: Primary button on dark, secondary button border
  - name: White
    hex: "#FFFFFF"
    role: Text on dark, light sections
  - name: Link Blue
    hex: "#0047D6"
    role: Text links and accordion hover on light
  - name: Ink 2
    hex: "#16122A"
    role: Raised dark surface, accordion fill
  - name: Ink 3
    hex: "#211B3B"
    role: Dark hover surface
  - name: Ink 4
    hex: "#393551"
    role: Dark borders, dividers
  - name: Mist
    hex: "#E6E6E9"
    role: Text and icons on dark, light dividers
  - name: Grey
    hex: "#9C9AA8"
    role: Secondary text on dark
  - name: Lilac Pale
    hex: "#C7ADFC"
    role: Secondary button text on dark
  - name: Arm Blue (legacy)
    hex: "#0091BD"
    role: 2017-era logo blue, still in older assets
  - name: Teal (legacy)
    hex: "#00C1DE"
    role: Developer-docs design system accent
  - name: Yellow (legacy)
    hex: "#FFC700"
    role: Developer-docs primary button, form buttons
fonts:
  display:
    family: "Aeonik"
    fallback: "Manrope"
    weights: [300, 400, 500]
  body:
    family: "Aeonik"
    fallback: "Manrope"
    weights: [400, 500]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Hero, size: 56, weight: 400, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading L, size: 40, weight: 400, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading M, size: 30, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 22, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1, tracking: "0.36px" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 10, pill: 40 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
shadows:
  - { name: Glow, value: "0 4px 65px -27px rgba(8,2,37,0.7)" }
  - { name: Hairline, value: "0 0 2px 2px rgba(54,54,54,0.15)" }
preview:
  bg: "#080225"
  surface: "#16122A"
  text: "#FFFFFF"
  muted: "#9C9AA8"
  border: "#393551"
  accent: "#7233F7"
  accentText: "#FFFFFF"
  radius: 40
  buttonStyle: pill
---

# Arm

## 1. Visual Theme & Atmosphere

arm.com is a dark, calm, corporate-technical site. The default canvas is a deep midnight navy (`#080225`) that is almost black but clearly blue-violet. White Aeonik type sits on top, with lilac (`#D1BAFC`) and violet (`#7233F7`) as the accents, and an electric blue (`#0057FF`) taking over for buttons when a section flips to white.

The homepage leads with a full-width masthead slider: large photography or abstract rendered imagery of silicon, data centers, cars and devices, a short headline, and a pill button. Below that, sections alternate between dark navy bands and white bands with card grids ("Latest highlights", "Intelligent compute everywhere", "Windows on Arm").

What makes it recognisable:

- **Midnight navy, not black.** `#080225` is the brand's base; surfaces step up to `#16122A`, `#211B3B` and `#393551`.
- **Pill buttons** with a 40px radius, 40px or 48px tall, slightly tracked labels.
- **Lilac as the accent on dark.** Links, highlights and secondary button text on dark are lilac or pale lilac.
- **The lowercase "arm" wordmark** in white, very compact, top left.
- **Aeonik** across headings and body, light and neutral.

Two systems coexist. The corporate site uses the newer navy/violet palette. Developer pages and docs (developer.arm.com and some forms) still use the older Arm Design System ("ads") with teal `#00C1DE`, yellow `#FFC700` and slate `#333E48`. Build new work with the corporate palette.

Mood words: precise, calm, premium, infrastructural, global.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Midnight | `#080225` | Page background on dark, text on light, logo backdrop |
| Ink 2 | `#16122A` | Accordion and card surface on dark |
| Ink 3 | `#211B3B` | Hover surface on dark |
| Ink 4 | `#393551` | Borders and dividers on dark |
| Muted Ink | `#524E66` | Low-emphasis UI on dark |
| Grey | `#9C9AA8` | Secondary text on dark |
| Mist | `#E6E6E9` | Text and chevrons on dark, light dividers |
| White | `#FFFFFF` | Text on dark, light section background |
| Electric Blue | `#0057FF` | Primary button on light (`.u-arm-button-primary-default`) |
| Electric Blue Hover | `#004EE6` | Hover |
| Electric Blue Active | `#0046CC` | Pressed |
| Link Blue | `#0047D6` | Links and accordion hover on light |
| Violet | `#7233F7` | Primary button on dark (`primary-inverted`), secondary border |
| Violet Hover | `#6023DE` | Hover |
| Violet Active | `#8047F8` | Pressed |
| Lilac | `#D1BAFC` | Links and highlights on dark |
| Lilac Pale | `#C7ADFC` | Secondary button text on dark |
| Deep Violet | `#441F94` | Gradients, illustration shadows |

### Legacy and developer palette

| Name | Hex | Role |
|---|---|---|
| Arm Blue (2017) | `#0091BD` | Former logo color |
| Teal | `#00C1DE` | ads primary on dark, links |
| Teal Dark | `#11809F` | Links on light (ads) |
| Navy (ads) | `#002B49` | Visited links, borders |
| Slate | `#333E48` | Text (ads), 2025 Commons logo grey |
| Yellow | `#FFC700` | ads primary button |
| Orange | `#FF6B00` | Link hover (ads) |
| Pale Green-grey | `#E5ECEB` | Alert background (ads) |

### Semantic colors

| State | Hex |
|---|---|
| Danger | `#E03030` |
| Success | `#5B8200` |
| Warning | `#C75300` |

### Light sections

On white: text `#080225`, links `#0047D6`, primary button `#0057FF`, borders `#E6E6E9` or `#A9A9A9`. Accordions use white fill with `#F0F0F0` hover.

## 3. Typography

**Family:** Aeonik by CoType Foundry, served from Arm's design-system CDN in several cuts (Thin, Air, Light, Regular, Medium and italics). Token: `--type-font-family-primary: Aeonik`. Older developer pages use Lato.

**Licensing:** Aeonik is commercial. The closest free option is **Manrope** (similar width and neutral grotesk feel); Inter also works.

```css
font-family: var(--type-font-family-primary, "Aeonik", "Inter", sans-serif);
```

### Scale (desktop, approximate)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (masthead) | 56px | 400 | 1.05 | -0.02em |
| Heading L | 40px | 400 | 1.1 | -0.01em |
| Heading M | 30px | 400 | 1.2 | 0 |
| Heading S | 22-24px | 500 | 1.3 | 0 |
| Lead | 18-20px | 400 | 1.45 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Button | 16px (14px small) | 500 | 1 | 0.36px |
| Caption / tag | 12-14px | 400 | 1.4 | 0 |

Size frequencies in the CSS cluster at 14, 16, 18, 20, 24 and 30px.

### Rules

- Sentence case everywhere. The company name is "Arm" in text and "arm" only in the logo.
- Headlines are regular weight, never heavy. Size and space make the hierarchy.
- Button labels carry slight positive tracking (0.36px).
- Product names: "Arm Neoverse", "Arm Cortex-A", "Arm Compute Subsystems (CSS)", "Windows on Arm".

## 4. Logo & Brand Mark

The logo is a custom lowercase wordmark "arm": rounded geometric letters with a single-storey "a", a short "r" and a double-arched "m", all at one stroke weight.

- **Colors:** white on Midnight (as on arm.com), Midnight on white, black or white single color. The older bright blue `#0091BD` version is retired.
- **Clear space:** at least the height of the "a" on all sides (approximate).
- **Minimum size:** about 40px wide on screen (approximate).
- **No symbol.** Favicons and avatars use the full "arm" wordmark centred in a navy or black square.

Misuse: do not capitalise it ("ARM" is the old company styling), add a gradient, outline it, or set it in Aeonik.

## 5. Components

### Buttons (pill)

All Arm buttons are pills: `border-radius: 40px`, 1px solid border, `padding: 0 20px`, `letter-spacing: 0.36px`, 40px tall (14px text) or 48px tall (16px text).

| Variant | Background | Text | Border | Hover | Active |
|---|---|---|---|---|---|
| Primary (light) | `#0057FF` | `#FFFFFF` | `#0057FF` | `#004EE6` | `#0046CC` |
| Primary inverted (dark) | `#7233F7` | `#FFFFFF` | `#7233F7` | `#6023DE` | `#8047F8` |
| Secondary dark | `#080225` | `#C7ADFC` | `#7233F7` | `#211B3B` fill (approximate) | - |
| Secondary light | transparent | `#080225` | `#080225` | `#F0F0F0` fill (approximate) | - |

```css
.arm-btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 20px;
  font: 500 16px/1 Aeonik, Manrope, sans-serif; letter-spacing: 0.36px;
  border: 1px solid; border-radius: 40px;
  transition: background-color 200ms ease, border-color 200ms ease;
}
.arm-btn--primary-dark { background: #7233F7; border-color: #7233F7; color: #fff; }
.arm-btn--primary-dark:hover { background: #6023DE; border-color: #6023DE; }
.arm-btn--secondary-dark { background: #080225; border-color: #7233F7; color: #C7ADFC; }
.arm-btn:focus-visible { outline: 2px solid #D1BAFC; outline-offset: 2px; }
```

### Navigation

- Midnight header, white "arm" logo left, 16px white menu items ("Products", "Solutions", "Markets", "Developers", "Company", "Support"), search and account icons right.
- Mega menu: full-width `#080225` or `#16122A` panel, columns of links, lilac hover text.

### Masthead slider (signature)

- Full-bleed image or video, headline 48-56px white, 20px `#E2E2E2` subtitle, one pill CTA.
- Indicator bar at the bottom: slide titles with thin progress lines (white at 40% to white).

### Cards

- Animated cards: image, 1px tag outline (white on dark, black on light, 4px radius, 10px padding), title 22-24px, body 16px.
- Card surfaces on dark: `#16122A` with `#393551` border, 8-10px radius (approximate).
- Hover: tag and border flip color; image zooms slightly.

### Accordions

On dark: `#16122A` fill, `#211B3B` hover, `#848192` border, `#E6E6E9` text and chevron, lilac links. On light: white, `#F0F0F0` hover, `#A9A9A9` border, `#080225` text.

### Forms

Inputs 48px tall, 2px radius (developer system) or 8px (corporate, approximate), 1px `#A3A8AE` border, focus border in blue or lilac on dark.

### Tags

Small outline chips, 12-14px, 4px radius, 1px border in current text color.

## 6. Layout & Spacing

- **Max width:** about 1440px with content at 1200-1320px (approximate).
- **Grid:** 12 columns, 24px gutters on desktop, 16px on mobile (approximate).
- **Section spacing:** 64-96px on desktop, 48px on mobile.
- **Breakpoints:** about 768, 1024, 1280 and 1440px (approximate).
- **Density:** generous; one idea per band, with card rows of three or four.

## 7. Depth, Elevation & Motion

- Dark surfaces separate by tone (`#080225` → `#16122A` → `#211B3B`) rather than shadow.
- Soft navy glow under raised media: `0 4px 65px -27px rgba(8,2,37,0.7)`.
- Light hairline shadow for menus: `0 0 2px 2px rgba(54,54,54,0.15)`.
- Motion: masthead crossfades with progress bars, cards that lift and zoom on hover, 200-300ms color transitions (approximate).

## 8. Iconography & Imagery

- **Icons:** Font Awesome 6 Pro (light and regular weights) in white or lilac on dark, `#080225` on light. Thin, consistent strokes.
- **Imagery:** rendered silicon and abstract light trails in violet and blue, data-center aisles, cars, phones and laptops photographed in low-key light.
- **Illustration:** glowing isometric chips and grids in violet `#7233F7`, lilac and electric blue on midnight.

## 9. Voice & Microcopy

Measured, confident, infrastructure-scale. Talks about compute, efficiency and ecosystem rather than consumer features.

- Headlines are short statements: "Intelligent compute everywhere", "Powering physical AI".
- CTAs: "Learn more", "Explore", "Read the story", "Download".
- Uses "Arm-based" for partner products.

Sample strings:

- "Delivering unmatched scale"
- "Windows on Arm"
- "Stay connected"
- "Leadership and vision"

## 10. Do's and Don'ts

**Do**

- Use `#080225` as the base and step surfaces up in navy-violet tones.
- Use pill buttons (40px radius) with slight tracking.
- Use violet for primary actions on dark and electric blue on light.
- Use lilac for links on dark.
- Keep headlines at regular weight in Aeonik.

**Don't**

- Don't use pure black backgrounds.
- Don't use the legacy teal or yellow on corporate pages.
- Don't write "ARM" in caps.
- Don't use square buttons on marketing pages.
- Don't add heavy drop shadows; use tone steps.

## 11. Agent Prompt Guide

> Build this UI in the style of Arm (arm.com). Dark midnight-navy page `#080225`, raised surfaces `#16122A` and hover `#211B3B`, borders `#393551`, text white, secondary `#9C9AA8`, links lilac `#D1BAFC`. Font: Aeonik (fallback Manrope), headlines 40-56px weight 400 with -0.02em tracking, body 16px/1.5. Buttons are pills: 40px radius, 48px tall, 0 20px padding, 16px/500 with 0.36px tracking. Primary on dark `#7233F7` (hover `#6023DE`); secondary dark has `#080225` fill, `#7233F7` border, `#C7ADFC` text. On white sections, text is `#080225`, primary button `#0057FF` (hover `#004EE6`), links `#0047D6`. Header: white lowercase "arm" wordmark, white menu. Full-bleed masthead slider with progress indicators. Cards with outlined 4px-radius tags. Soft navy glow shadows only.

```css
:root {
  --brand-midnight: #080225;
  --brand-ink-2: #16122A;
  --brand-ink-3: #211B3B;
  --brand-ink-4: #393551;
  --brand-grey: #9C9AA8;
  --brand-mist: #E6E6E9;
  --brand-white: #FFFFFF;
  --brand-blue: #0057FF;
  --brand-blue-hover: #004EE6;
  --brand-blue-active: #0046CC;
  --brand-link: #0047D6;
  --brand-violet: #7233F7;
  --brand-violet-hover: #6023DE;
  --brand-lilac: #D1BAFC;
  --brand-lilac-pale: #C7ADFC;
  --brand-danger: #E03030;
  --brand-success: #5B8200;
  --brand-warning: #C75300;
  --brand-font: "Aeonik", "Manrope", "Inter", sans-serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, monospace;
  --brand-radius-pill: 40px;
  --brand-radius-tag: 4px;
  --brand-radius-card: 10px;
  --brand-btn-height: 48px;
  --brand-btn-tracking: 0.36px;
  --brand-shadow-glow: 0 4px 65px -27px rgba(8,2,37,0.7);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Arm.
