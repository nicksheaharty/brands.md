---
name: Ramp
slug: ramp
url: https://ramp.com
category: Finance
tagline: "Warm stone neutrals, near-black type, sharp Solar yellow and sky-gradient product shots."
updated: 2026-11-16
appStoreId: 1628197245
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Solar
    hex: "#E4F222"
    role: Signature accent, "See a demo" button, app icon
  - name: Black
    hex: "#1A1919"
    role: Logo, primary "Get started" button, dark UI
  - name: Stone
    hex: "#F4F2F0"
    role: Warm page and section background, quiet button fill
  - name: White
    hex: "#FFFFFF"
    role: Cards, nav panels
  - name: Text Primary
    hex: "#0C0A08"
    role: Headings and body
  - name: Solar Light
    hex: "#F5FF78"
    role: Solar button hover
  - name: Spring
    hex: "#5683D2"
    role: Sky blue for gradients and illustrations
  - name: Spring Light
    hex: "#E4EBF6"
    role: Pale blue panels
  - name: Midnight
    hex: "#001B4A"
    role: Deep blue end of the dusk gradient
  - name: Border
    hex: "#D2CECB"
    role: Borders, dividers, hover fill for quiet buttons
  - name: Gray Dark
    hex: "#6E6A68"
    role: Secondary text on stone
  - name: Smolder
    hex: "#17332D"
    role: Deep green dark section background
  - name: Blaze
    hex: "#E96516"
    role: Orange accent for highlights and alerts
  - name: Success
    hex: "#18A957"
    role: Positive states, savings figures
fonts:
  display:
    family: "TWK Lausanne"
    fallback: "Inter"
    weights: [300, 350, 400]
  body:
    family: "TWK Lausanne"
    fallback: "Inter"
    weights: [350, 400, 500]
  mono:
    family: "IBM Plex Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Headline XL, size: 64, weight: 400, lineHeight: 1.0, tracking: "-0.01em" }
  - { role: Headline L, size: 48, weight: 400, lineHeight: 1.04, tracking: "-0.01em" }
  - { role: Headline M, size: 40, weight: 400, lineHeight: 1.05, tracking: "0" }
  - { role: Headline S, size: 28, weight: 400, lineHeight: 1.14, tracking: "0" }
  - { role: Headline XS, size: 24, weight: 400, lineHeight: 1.17, tracking: "0" }
  - { role: Body XL, size: 20, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body M, size: 16, weight: 400, lineHeight: 1.375, tracking: "0" }
  - { role: Body S, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
radii: { sm: 4, md: 6, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card, value: "0 8px 30px rgba(0,0,0,0.08)" }
  - { name: Nav panel, value: "0 20px 50px rgba(0,0,0,0.09), 0 9px 20px rgba(0,0,0,0.085)" }
  - { name: Solar glow, value: "0 0 28px rgba(255,193,0,0.48)" }
preview:
  bg: "#F4F2F0"
  surface: "#FFFFFF"
  text: "#0C0A08"
  muted: "#6E6A68"
  border: "#D2CECB"
  accent: "#E4F222"
  accentText: "#0C0A08"
  radius: 6
  buttonStyle: solid
---

# Ramp

## 1. Visual Theme & Atmosphere

Ramp sells corporate cards, expense management, bill pay, procurement and treasury, and increasingly AI agents for finance teams. The site looks like a modern editorial product page: warm stone backgrounds (`#F4F2F0`), near-black type in TWK Lausanne at light-to-regular weights, crisp product UI, and one sharp accent, **Solar** (`#E4F222`), a yellow-green that is unmistakably Ramp.

What makes it recognisable:

- **Solar yellow.** The "See a demo" button, highlights and the app icon use `#E4F222`. It is used in small doses next to black.
- **Black and Solar button pair.** In the nav, "See a demo" is Solar with black text and "Get started" is black with white text, both with 6px corners.
- **Warm neutrals.** Stone `#F4F2F0`, border `#D2CECB` and gray `#6E6A68` give the page a paper-like warmth, not a cold tech grey.
- **Light, large headlines.** Lausanne headlines at 48-64px with regular or lighter weights and tight leading ("Time is money. Save both.", read on the site 2026-11-16).
- **Sky gradients.** Named gradients "daylight" (pale blue to near-white), "dusk" (pale to deep blue) and "midnight" (black to navy) sit behind product screens.
- **The ramp mark.** The logo ends with a curved swoosh that looks like a skate ramp or a rising line.

Density is medium. Sections alternate between big headline moments and detailed product walkthroughs.

Mood words: sharp, warm, fast, confident, practical.

## 2. Color Palette & Roles

Values from ramp.com CSS variables, read 2026-11-16.

| Name | Token | Hex | Role |
|---|---|---|---|
| Solar | `--solar` | `#E4F222` | Accent button, highlights |
| Solar Light | `--solarLight` | `#F5FF78` | Solar hover |
| Black | `--black` | `#1A1919` | Primary button, logo |
| Black RGB base | `--black-rgb` | `rgb(33,33,33)` | Alpha scale `--black-25` to `--black-900` |
| Text Primary | `--text-primary` | `#0C0A08` | Text |
| Text Hushed | `--text-hushed` | `#0C0A0899` (60%) | Secondary text, quiet links |
| Text Primary Reverse | | `#FFFFFF` | Text on dark |
| Text Hushed Reverse | | `#FFFFFF99` | Secondary text on dark |
| Stone | `--grayLight` | `#F4F2F0` | Page/section background, quiet button |
| Border / Gray Medium | `--border-primary` | `#D2CECB` | Borders, quiet button hover |
| Gray Dark | `--grayDark` | `#6E6A68` | Secondary text |
| Spring | `--spring` | `#5683D2` | Blue accent |
| Spring Light | `--springLight` | `#E4EBF6` | Pale blue panel |
| Smolder | `--smolder` | `#17332D` | Deep green panel |
| Blaze | `--blaze` | `#E96516` | Orange accent |
| White | `--white` | `#FFFFFF` | Cards |

### Gradients

```css
--daylight: linear-gradient(in oklab to bottom, #D2DFF3 22%, #F2F5F9 93%);
--dusk: linear-gradient(in oklab to top, #E4EBF6 8%, #C3D3EF 20%, #5683D2 48%, #001B4A 100%);
--midnight: linear-gradient(in oklab to bottom, #000 0%, #112D5B 100%);
```

### Semantic

- Success `#18A957` (savings, approved), tint `#E4F2E7`.
- Warning `#FFC400`.
- Error: Blaze `#E96516` or a red near `#D93025` (approximate).

## 3. Typography

- **TWK Lausanne** (Weltkern), self-hosted at weights 300, 350, 400 and up. Licensed; not free.
- **IBM Plex Sans** / **IBM Plex Sans JP** in some localized and product modules; **IBM Plex Mono** for code and data labels. Both free.

Fallback for Lausanne: **Inter** (approximate). Lausanne is a neo-grotesk with a slightly wider, softer feel; use Inter at 400 rather than 600 to keep the light look.

Type classes from the site (desktop values; mobile steps down):

| Class | Size / line | Weight |
|---|---|---|
| headline-xl | 64 / 64px (48 tablet, 40 mobile) | 400 (approx.) |
| headline-l | 48 / 50px | 400 (approx.) |
| headline-m | 40 / 42px | 400 (approx.) |
| headline-s | 28 / 32px | 400 |
| headline-xs | 24 / 28px | 400 |
| body-xl | 20 / 26px | 400 |
| body-l | 18 / 24px | 400 |
| body-m | 16 / 22px | 400 |
| body-s | 14 / 20px | 400 |
| body-xs | 13 / 19px | 400 |

Rules:

- Headlines are short, often two sentences in one line ("One platform for all of finance. Agents for every workflow, working 24/7.", read 2026-11-16), with the second half in hushed 60% ink.
- Sentence case everywhere.
- Very slight negative tracking on the largest sizes.
- Numbers in product UI use tabular figures.

## 4. Logo & Brand Mark

The logo is a lowercase **"ramp"** wordmark followed by the **ramp mark**: a curved swoosh rising to the right over a short flat base line, like a ramp seen in profile.

- Mark alone: app icon (black mark on Solar) and favicon.
- Colors: black `#1A1919` on white or stone; white on black or dark gradients; black on Solar.
- Clear space: the height of the "r" x-height on all sides.
- Minimum size: about 70px wide for the lockup, 16px for the mark.
- Don't: separate the swoosh and rotate it, recolor the wordmark Solar on white (contrast fails), or add outlines.

`logo.svg` is the header lockup from ramp.com. `icon.svg` is the black mark on Solar.

## 5. Components

### Buttons

Rounded rectangles, 6px radius (`rounded-md`).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 16px; border-radius: 6px;
  font: 400 14px/1 "Lausanne", Inter, sans-serif;
  transition: background-color 300ms ease-in-out;
}
.btn--solar   { background: #E4F222; color: #0C0A08; }
.btn--solar:hover { background: #F5FF78; }
.btn--black   { background: #1A1919; color: #FFFFFF; }
.btn--black:hover { background: rgba(33,33,33,0.8); }
.btn--quiet   { background: #F4F2F0; color: #0C0A08; }
.btn--quiet:hover { background: #D2CECB; }
.btn--glass   { background: rgba(255,255,255,0.05); color: #FFFFFF; box-shadow: inset 0 0 2px rgba(255,255,255,0.6); }
.btn--glass:hover { background: #E4F222; color: #0C0A08; }
.btn:disabled { cursor: not-allowed; opacity: .5; }
.btn:focus-visible { outline: 2px solid #5683D2; outline-offset: 2px; } /* approx. */
```

Text links: hushed 60% ink, hover to full ink, often with an arrow icon that nudges right.

### Inputs and email capture

- 48px tall, white fill, 1px `#D2CECB` border, 6px radius, 16px text (approximate).
- The closing CTA ("Time is money. Save both.") centres an email field (max-width 500px) with a full-width black "Get started for free" button below.
- The AI "See recommendations for your business" module uses a larger text field for a company URL.

### Cards

- White on stone, 12px radius (`--radius-xl`), no border or 1px `#D2CECB`, 24-32px padding.
- Product cards hold UI crops on a daylight gradient panel.
- Hover: `0 8px 30px rgba(0,0,0,0.08)`.

### Navigation

- Sticky, transparent over the hero then white; logo left; Products, Solutions, Partners, Resources, Pricing triggers (44px tall, 6px radius, 14px).
- Right: "Sign in" (glass button over dark hero, stone otherwise), "See a demo" (Solar), "Get started" (black).
- Mega-menu panel: white, bottom-rounded 12px, layered shadow, columns of product links with small icons.
- Announcement bar above the nav for funding or launch news.

### Tabs and toggles

Segmented controls on stone with a white selected segment and 6px radius; feature tabs underline the active item.

### Stats and proof

Big numbers in headline sizes with hushed labels; customer logo marquees; quote cards with company logo and person.

### Product UI motifs

Approval cards, receipts matched to transactions, policy agent chat, card controls. Use green `#18A957` for "Approved", Solar highlights for AI suggestions.

## 6. Layout & Spacing

- Max content width 1280-1440px (approximate), with 24px (mobile) to 48px (desktop) side padding.
- Breakpoints: 768px, 1024px, 1280px, 1440px (Tailwind-based).
- Spacing: Tailwind 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding 96-128px desktop, 64px mobile.
- Headlines centred for big statements, left-aligned with a 2-column grid for walkthroughs.

## 7. Depth, Elevation & Motion

- Mostly flat; separation comes from stone vs white surfaces.
- Card hover: `0 8px 30px rgba(0,0,0,0.08)`; soft halo `0 0 30px rgba(17,17,17,0.17)`.
- Nav panel: layered shadow `0 35px 59px rgba(0,0,0,0.03), 0 20px 50px rgba(0,0,0,0.09), 0 9px 20px rgba(0,0,0,0.085)`.
- Solar glow on special badges: `0 0 28px rgba(255,193,0,0.48)`.
- Easing: `cubic-bezier(.16,1,.3,1)` (expo out) for reveals; `cubic-bezier(.4,0,.2,1)` for UI. Buttons 300ms ease-in-out.
- Product demos animate step by step (receipt drops in, status flips to approved).

## 8. Iconography & Imagery

- Icons: Material Icons (outlined and filled) at 14-24px for UI chevrons and arrows; product icons simple and monochrome.
- Imagery: product UI on daylight or dusk gradients, cropped tightly; phone mockups for the mobile app.
- Photography: customer portraits in natural light for testimonials, often in rounded 12px frames.
- No stock illustrations; diagrams are drawn as UI.

## 9. Voice & Microcopy

Punchy, numeric, a little wry. Ramp likes paired sentences and time/money wordplay.

Sample strings (ramp.com, read 2026-11-16):

- Hero: "Time is money. Save both."
- "One platform for all of finance. Agents for every workflow, working 24/7."
- "Scale the team. Shrink the paperwork."
- "You had a bureaucracy. Now you have a business again."
- "We've got the receipts."
- CTAs: "See a demo", "Get started", "Get started for free", "Sign in"

Sentence case. Second sentence often set in hushed ink for rhythm.

## 10. Do's and Don'ts

**Do**

- Use Solar `#E4F222` sparingly, always with black text.
- Pair Solar and black buttons in the nav.
- Keep backgrounds warm (stone `#F4F2F0`) and borders warm (`#D2CECB`).
- Use light-to-regular Lausanne headlines with a hushed second sentence.
- Put product UI on the daylight or dusk gradients.

**Don't**

- Don't put white text on Solar.
- Don't use cold blue-grey neutrals or pure black backgrounds for whole pages.
- Don't use bold heavy headlines.
- Don't round buttons into pills; 6px is the norm.
- Don't use Solar for body text or thin lines on white.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Ramp. Warm stone background `#F4F2F0` with white cards (12px radius), text `#0C0A08`, secondary text at 60% (`#0C0A0899`), borders `#D2CECB`. Font "TWK Lausanne" (fallback Inter) at regular/light weights: headlines 64/64, 48/50, 40/42px; body 16/22px. Write headlines as two short sentences with the second in hushed ink. Buttons are 6px-radius rectangles, 12px 16px padding, 14px text: Solar `#E4F222` with black text (hover `#F5FF78`) for "See a demo", black `#1A1919` with white text for "Get started", stone `#F4F2F0` (hover `#D2CECB`) for quiet actions. Place product UI on a "daylight" gradient `linear-gradient(to bottom, #D2DFF3 22%, #F2F5F9 93%)` or "dusk" gradient into `#001B4A`. Success green `#18A957`. Shadows only on hover: `0 8px 30px rgba(0,0,0,0.08)`. Easing `cubic-bezier(.16,1,.3,1)`. Max width ~1280px, 96-128px section spacing. Copy is punchy and specific.

```css
:root {
  --brand-solar: #E4F222;
  --brand-solar-light: #F5FF78;
  --brand-black: #1A1919;
  --brand-text: #0C0A08;
  --brand-text-hushed: rgba(12,10,8,0.6);
  --brand-text-reverse: #FFFFFF;
  --brand-stone: #F4F2F0;
  --brand-border: #D2CECB;
  --brand-gray-dark: #6E6A68;
  --brand-white: #FFFFFF;
  --brand-spring: #5683D2;
  --brand-spring-light: #E4EBF6;
  --brand-midnight: #001B4A;
  --brand-smolder: #17332D;
  --brand-blaze: #E96516;
  --brand-success: #18A957;
  --brand-daylight: linear-gradient(to bottom, #D2DFF3 22%, #F2F5F9 93%);
  --brand-dusk: linear-gradient(to top, #E4EBF6 8%, #C3D3EF 20%, #5683D2 48%, #001B4A 100%);
  --brand-midnight-gradient: linear-gradient(to bottom, #000 0%, #112D5B 100%);
  --brand-font: "Lausanne", "Inter", Arial, sans-serif;
  --brand-font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-xl: 12px;
  --brand-radius-2xl: 16px;
  --brand-shadow-card: 0 8px 30px rgba(0,0,0,0.08);
  --brand-ease: cubic-bezier(.16, 1, .3, 1);
}
```

---

Values are observed from the public ramp.com stylesheets on 2026-11-16; headline weights, input styling and focus color are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Ramp.
