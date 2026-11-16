---
name: Fidelity
slug: fidelity
url: https://fidelity.com
category: Finance
tagline: "Fidelity green on warm white, italic wordmark, pill buttons and calm, goal-led guidance."
updated: 2026-11-16
appStoreId: 348177453
logoBackground: "#368727"
theme: light
colors:
  - name: Fidelity Green
    hex: "#368727"
    role: Logo field, primary (submit) button, brand moments
  - name: Ink
    hex: "#141414"
    role: Headings, body text, secondary button outline
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Warm 100
    hex: "#F5F3F0"
    role: Section background, disabled fill
  - name: Green 700
    hex: "#1E6F1D"
    role: Primary hover and pressed
  - name: Warm 200
    hex: "#E6E4E1"
    role: Borders, dividers, hover fill for navigate buttons
  - name: Gray 600
    hex: "#525150"
    role: Secondary text
  - name: Gray 500
    hex: "#757473"
    role: Captions, helper text
  - name: Warm 400
    hex: "#ABAAA8"
    role: Input borders, disabled icons
  - name: Green 50
    hex: "#EDFAEB"
    role: Success background tint
  - name: Green 400
    hex: "#65C754"
    role: Bright green for charts, toggles
  - name: Blue 800
    hex: "#1D3986"
    role: Deep blue accent, info headings
  - name: Blue 600
    hex: "#3266E0"
    role: Info states, chart blue
  - name: Red
    hex: "#DC1616"
    role: Errors, losses
  - name: Gold
    hex: "#FFCA1F"
    role: Warning, highlight
fonts:
  display:
    family: "Fidelity Sans"
    fallback: "Source Sans 3"
    weights: [400, 600, 700]
  body:
    family: "Fidelity Sans"
    fallback: "Source Sans 3"
    weights: [400, 600]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading 1, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading 2, size: 32, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Heading 3, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 8, md: 12, lg: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 96]
shadows:
  - { name: Small, value: "0 1px 2px rgba(20,20,20,0.05)" }
  - { name: Card, value: "0 4px 8px -2px rgba(20,20,20,0.11), 0 2px 4px -2px rgba(20,20,20,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F3F0"
  text: "#141414"
  muted: "#525150"
  border: "#E6E4E1"
  accent: "#368727"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# Fidelity

## 1. Visual Theme & Atmosphere

Fidelity Investments is a large US brokerage and retirement firm. Its public site is built to calm and guide: lots of white and warm off-white (`#F5F3F0`), near-black text (`#141414`), and the signature **Fidelity green** (`#368727`) for the logo and the main action. Recent redesigns brought in rounder shapes, pill buttons and larger, friendlier headings, while keeping a conservative, information-first feel.

What makes it recognisable:

- **Fidelity green.** The italic, bold "Fidelity" wordmark sits in white on a green field, and green fills every primary "Open an account" style button.
- **Warm neutrals.** Greys lean warm (`#F5F3F0`, `#E6E4E1`, `#757473`), giving a paper-like softness instead of cold blue-grey.
- **Goal-led cards.** The homepage hero ("Invest today and plan for tomorrow", read on the site 2026-11-16) leads into cards by goal: start investing, save for retirement, save for health care, invest for a child.
- **Pill controls.** Primary and secondary buttons are full pills; inputs can be pills too (`--fds-input-radius--round`).
- **Dense supporting content.** Under the hero, the page becomes informational: account types, advisor callouts, research, disclosures.
- **FDS.** The Fidelity Design System (`--fds-*` tokens) drives components, with legacy "pvd" (Pattern Vocabulary) classes still visible.

Density: spacious hero, then moderately dense content and long legal footers.

Mood words: steady, reassuring, clear, established, practical.

## 2. Color Palette & Roles

Values from fidelity.com CSS (`--fds-*` tokens), read 2026-11-16.

### Green scale

| Token | Hex | Role |
|---|---|---|
| green-50 | `#EDFAEB` | Success background |
| green-100 | `#D4F3CF` | Success hover background |
| green-200 | `#BBEBB2` | Tints |
| green-300 | `#8AD97C` | Charts |
| green-400 | `#65C754` | Active toggles, input active |
| green-500 | `#48AC36` | Charts |
| green-600 | `#368727` | Brand green, submit button |
| green-700 | `#1E6F1D` | Submit hover/focus/active |
| green-800 | `#0F5319` | Deep green text on tints |
| green-900 | `#044014` | Darkest green |

### Neutral scale (warm)

| Token | Hex | Role |
|---|---|---|
| neutral-0 | `#FFFFFF` | Page, cards, inputs |
| neutral-50 | `#F9F7F5` | Subtle fill |
| neutral-100 | `#F5F3F0` | Section background, disabled |
| neutral-200 | `#E6E4E1` | Borders, navigate hover |
| neutral-300 | `#D9D8D5` | Dividers |
| neutral-400 | `#ABAAA8` | Input borders, disabled icons |
| neutral-500 | `#757473` | Captions |
| neutral-600 | `#525150` | Secondary text, disabled text |
| neutral-700 | `#403F3E` | Strong secondary |
| neutral-800 | `#292928` | Dark surfaces |
| neutral-900 | `#141414` | Text, navigate button foreground |

### Blue scale (info)

`#F5FAFF` (50), `#DAEBFF` (100), `#8CC1FD` (300), `#3880F3` (500), `#3266E0` (600), `#2751C2` (700), `#1D3986` (800), `#132454` (900).

### Status

- Critical: red `#DC1616` (scale `#FFE0E0` to `#861616`).
- Warning: gold/orange `#FFCA1F`, `#F1A204`, `#DE8001` with tints `#FFF6C6`.
- Success: green-600 text on green-50.
- Info: blue-700 text on blue-50.

## 3. Typography

- **Fidelity Sans**: proprietary humanist sans used for everything (also **Fidelity Sans Condensed Medium** for tight labels).
- **Fidelity Slab**: proprietary slab serif (`--fds-family-serif`) for editorial headlines and pull quotes.

Fallbacks: **Source Sans 3** for Fidelity Sans (approximate), **Roboto Slab** for Fidelity Slab (approximate). The site's own fallback is Helvetica/Arial.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero | 48px (approx.) | 700 | 1.1 |
| Heading 1 | 40px (approx.) | 700 | 1.15 |
| Heading 2 | 32px | 600 | 1.2 |
| Heading 3 | 24px | 600 | 1.25 |
| Heading 4 | 20px (1.25rem) | 600 | 1.3 |
| Lead | 18-20px | 400 | 1.4 |
| Body | 16px (1rem) | 400 | 1.5 |
| Small | 14px (.875rem) | 400 | 1.45 |
| Caption/legal | 12px (.75rem) | 400 | 1.4 |

Rules:

- Sentence case headings and buttons.
- Use bold for headings, regular for body; avoid light weights (legibility for all ages).
- Numbers in tables and quotes use tabular figures; gains in green, losses in red with a minus sign and arrow.
- Legal text is small but never below 12px.

## 4. Logo & Brand Mark

The current logo is the word **"Fidelity"** in a bold, forward-slanted (italic) custom letterform with a registered mark, typically **white on a Fidelity green rectangle**. It replaced the older lockup that had a green square with "F" beside "Fidelity Investments".

- Colors: white on `#368727` (primary), `#368727` on white, black or white one-color versions.
- Clear space: the cap height of the "F" on all sides of the green field.
- Minimum size: about 90px wide on screen.
- Don't: change the slant, set the word in another typeface, recolor the green, or remove the ® at large sizes.

`logo.svg` is the white wordmark from the fidelity.com header (shown on green). `icon.svg` uses the italic "F" from the wordmark in white on Fidelity green, as a short form.

## 5. Components

### Buttons (fds-button)

Roles: **submit** (primary green), **navigate** (secondary, ink outline or quiet), **action** (tertiary transparent), **link**.

```css
.fds-button {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 0 24px; border-radius: 9999px;
  font: 600 16px/1.2 "Fidelity Sans", "Source Sans 3", Helvetica, Arial, sans-serif;
  transition: background-color 150ms ease;
}
.fds-button--submit { background: #368727; color: #FFFFFF; border: 1px solid #368727; }
.fds-button--submit:hover,
.fds-button--submit:focus-visible,
.fds-button--submit:active { background: #1E6F1D; border-color: #1E6F1D; }
.fds-button--navigate { background: transparent; color: #141414; border: 1px solid #141414; }
.fds-button--navigate:hover { background: #E6E4E1; }
.fds-button--action { background: transparent; color: #141414; border: none; }
.fds-button--action:hover { background: #E6E4E1; }
.fds-button:disabled { background: #F5F3F0; color: #525150; border-color: #E6E4E1; }
.fds-button:focus-visible { outline: 2px solid #141414; outline-offset: 2px; } /* approx. */
```

Hero actions pair a green "Open an account" (approximate label) with a navigate-style secondary.

### Inputs

- 8px radius (`--fds-input-radius`) or pill (`--fds-input-radius--round`) for search.
- 44-48px tall, white fill, 1px `#ABAAA8` border, 16px text.
- Hover/focus: border `#141414`; focus ring 2px (approximate).
- Active toggle/checkbox fill `#65C754`.
- Error: border and helper text red `#DC1616`, with an error ring.
- The global search uses a pill field with a magnifier icon and smart suggestions dropdown.

### Cards (fds-box)

- White, 12px radius (`--fds-box-radius`), 24px for large promo boxes.
- Border 1px `#E6E4E1` or Card shadow `0 4px 8px -2px rgba(20,20,20,0.11), 0 2px 4px -2px rgba(20,20,20,0.06)`.
- Goal cards: icon or photo, title ("Start investing"), one-line description ("Invest smart from the start with a brokerage account"), and a chevron link.

### Navigation

- White header with the green logo block left, primary menu (Accounts & Trade, Planning & Advice, News & Research, Products, Why Fidelity), search field, "Log in" and "Open an account" right (approximate labels).
- Mega menus with plain text link columns.
- Footer: long, dense link lists and legal disclosures on warm grey.

### Tabs and chips

Pill chips on `#F5F3F0`; selected chip ink with white text or green outline. Tabs underline in green.

### Data tables and quotes

Rows of 48px, hairline `#E6E4E1` dividers, right-aligned numbers, green/red change values with arrows, sortable column headers in 14px 600.

### Alerts

Banner with tinted background (green-50, blue-50, orange-50, red-50), 12px radius, leading status icon, bold title and body.

## 6. Layout & Spacing

- Max content width 1280px, wide sections to 1440px.
- Breakpoints: 768px (tablet), 1024px (desktop), 1280px, 1440px.
- 12-column grid, 24px gutters desktop, 16px mobile (approximate).
- Spacing scale (8px base): 4, 8, 12, 16, 24, 32, 40, 48, 64, 96.
- Hero: full-width image or illustration with left-aligned headline and two buttons; goal cards in a 4-up row below.

## 7. Depth, Elevation & Motion

- Light, warm shadows tinted with `#141414`:
  - Small: `0 1px 2px rgba(20,20,20,0.05)`
  - Card: `0 4px 8px -2px rgba(20,20,20,0.11), 0 2px 4px -2px rgba(20,20,20,0.06)`
- Borders more common than shadows.
- Motion is restrained: 150-250ms color and background transitions; menus slide down with `cubic-bezier(0,.624,.753,.881)`.
- Honour reduced-motion; no parallax.

## 8. Iconography & Imagery

- Icons: "pvd" icon set, 16px and 24px, simple line glyphs (chevrons, arrows, search, profile) in ink; filled status icons in alerts.
- Photography: real people in life moments (families, retirees, young professionals), warm and natural, never trading-floor drama.
- Illustrations: flat, friendly spot illustrations for goal cards in green, blue and warm tones.
- Charts: clean line and bar charts, green for growth, blue for benchmarks.

## 9. Voice & Microcopy

Plain, encouraging and careful. Fidelity frames investing around goals and long-term planning, and every promotional line has a compliance-friendly tone.

Sample strings (fidelity.com, read 2026-11-16):

- Hero: "Invest today and plan for tomorrow"
- Sub: "We can help you get started."
- Goal cards: "Start investing", "Save for retirement", "Save for health care", "Invest for a child"
- "A partner to help bring your plans to life"
- "Expertise you can act on"
- "Why choose Fidelity?"
- "Looking for something else?"

Avoid hype ("get rich", "beat the market"). Use "you" and specific account names (Roth IRA, HSA, 529).

## 10. Do's and Don'ts

**Do**

- Use Fidelity green `#368727` for the logo and one primary action.
- Keep text ink `#141414` on white or warm `#F5F3F0`.
- Use pill buttons and 12px-radius cards.
- Organise content by customer goal.
- Make disclosures readable and close to the claim.

**Don't**

- Don't use bright neon greens or gradients on the brand green.
- Don't use cold blue-grey neutrals; keep them warm.
- Don't use light, thin type for body.
- Don't put green text on green backgrounds or white text on green-400.
- Don't make promises about returns.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Fidelity. White page with warm off-white bands `#F5F3F0`, text ink `#141414`, secondary text `#525150`, borders `#E6E4E1`. Font "Fidelity Sans" (fallback Source Sans 3), bold 700 headlines (48/40/32px), 16px body at 1.5. Logo: italic white "Fidelity" on a `#368727` block. Primary buttons are green `#368727` pills with white text, 44px tall, 24px padding, weight 600, hover `#1E6F1D`; secondary buttons are 1px ink-outline pills, hover `#E6E4E1`. Inputs 8px radius (search is a pill), 1px `#ABAAA8` border, ink border on focus. Hero with a lifestyle photo and the headline "Invest today and plan for tomorrow", then four goal cards (white, 12px radius, shadow `0 4px 8px -2px rgba(20,20,20,0.11), 0 2px 4px -2px rgba(20,20,20,0.06)`). Alerts use tinted backgrounds (green `#EDFAEB`, blue `#F5FAFF`, red `#FFE0E0`). Max width 1280px. Copy is calm and goal-focused.

```css
:root {
  --brand-green: #368727;
  --brand-green-dark: #1E6F1D;
  --brand-green-800: #0F5319;
  --brand-green-400: #65C754;
  --brand-green-50: #EDFAEB;
  --brand-ink: #141414;
  --brand-gray-700: #403F3E;
  --brand-gray-600: #525150;
  --brand-gray-500: #757473;
  --brand-gray-400: #ABAAA8;
  --brand-warm-300: #D9D8D5;
  --brand-warm-200: #E6E4E1;
  --brand-warm-100: #F5F3F0;
  --brand-warm-50: #F9F7F5;
  --brand-white: #FFFFFF;
  --brand-blue-600: #3266E0;
  --brand-blue-800: #1D3986;
  --brand-blue-50: #F5FAFF;
  --brand-red: #DC1616;
  --brand-gold: #FFCA1F;
  --brand-font: "Fidelity Sans", "Source Sans 3", Helvetica, Arial, sans-serif;
  --brand-font-slab: "Fidelity Slab", "Roboto Slab", serif;
  --brand-radius-xs: 4px;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 9999px;
  --brand-shadow-sm: 0 1px 2px rgba(20,20,20,0.05);
  --brand-shadow-card: 0 4px 8px -2px rgba(20,20,20,0.11), 0 2px 4px -2px rgba(20,20,20,0.06);
}
```

---

Values are observed from the public fidelity.com stylesheets on 2026-11-16; heading sizes, nav labels, focus styles and font fallbacks are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Fidelity Investments.
