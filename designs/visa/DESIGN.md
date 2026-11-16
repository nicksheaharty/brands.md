---
name: Visa
slug: visa
url: https://visa.com
category: Finance
tagline: "Visa Blue and gold on white, Visa Dialect type, 6px corners and card-art heroes."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Visa Blue
    hex: "#1434CB"
    role: Logo, primary actions, brand panels
  - name: Visa Gold
    hex: "#FCC015"
    role: Accent, actions on blue surfaces
  - name: Black
    hex: "#000000"
    role: Primary text
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on blue
  - name: Navy
    hex: "#02115A"
    role: Deep blue for dark panels and footer (approximate role)
  - name: Blue Hover
    hex: "#173BE8"
    role: Primary hover
  - name: Blue Pressed
    hex: "#0F2595"
    role: Primary pressed
  - name: Surface 2
    hex: "#F5F5F5"
    role: Subdued backgrounds
  - name: Surface 3
    hex: "#F0F0F0"
    role: Tertiary backgrounds, input fills
  - name: Subtle Text
    hex: "#4A4A4A"
    role: Secondary text
  - name: Deep Text
    hex: "#021E4C"
    role: Text on gold
  - name: Positive
    hex: "#40996B"
    role: Success icon and graphics
  - name: Negative
    hex: "#D65151"
    role: Error icon and graphics
  - name: Info
    hex: "#0088C7"
    role: Info icon and graphics
fonts:
  display:
    family: "Visa Dialect"
    fallback: "Open Sans"
    weights: [500, 600, 700]
  body:
    family: "Visa Dialect"
    fallback: "Open Sans"
    weights: [400, 500, 600]
typeScale:
  - { role: Display 1, size: 60, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Display 2, size: 49, weight: 600, lineHeight: 1.27, tracking: "0" }
  - { role: Headline 1, size: 32, weight: 600, lineHeight: 1.31, tracking: "0" }
  - { role: Headline 2, size: 25, weight: 500, lineHeight: 1.32, tracking: "0" }
  - { role: Headline 3, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body 1, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body 2, size: 14, weight: 400, lineHeight: 1.57, tracking: "0" }
  - { role: Body 3, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 6, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)" }
  - { name: Panel, value: "0 10px 18px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#4A4A4A"
  border: "#E0E0E0"
  accent: "#1434CB"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Visa

## 1. Visual Theme & Atmosphere

Visa's public site is bright, direct and card-centric. The page is white with black text, and Visa Blue (`#1434CB`) does the heavy lifting: the logo, primary buttons and full-bleed brand panels. Gold appears as a sharp accent, mostly on blue surfaces. Product imagery is card art and people paying: tapping phones and cards at terminals, travel, dining.

What makes it recognisable:

- **Visa Blue as a surface.** Whole sections turn blue (`.v-alternate` theme), with white text and a gold button. It is a vivid, slightly violet blue, brighter than the old navy.
- **The wordmark.** Bold, italic-leaning "VISA" letterforms with the slanted cut on the "V" and "A". Blue on white, white on blue.
- **Visa Dialect.** A custom grotesk with slightly squared curves. Headlines are 600, UI labels 500.
- **Moderate rounding.** The Visa theme of the Nova design system sets `--theme-border-radius: 6px`. Buttons, inputs and cards share that radius; icon buttons are pills.
- **Card finder.** The home page leads with a natural-language picker: "I am looking for a [credit card] Show results".
- **Segmented audience.** A Personal / Business switch sits at the top of the header.

Mood words: trusted, global, clear, friendly, secure.

## 2. Color Palette & Roles

Token values come from Visa's public design system (Visa Product Design System, published as `@visa/nova-styles`, theme `visa`) and the live usa.visa.com pages.

| Name | Hex | Role |
|---|---|---|
| Visa Blue (default-active) | `#1434CB` | Logo, primary buttons, links, brand panels |
| Blue hover | `#173BE8` | Hover on blue actions |
| Blue pressed | `#0F2595` | Pressed state |
| Gold (active-accent) | `#FCC015` | Accent; primary action on blue surfaces |
| Gold hover | `#FCC936` | Hover on gold |
| Gold pressed | `#D39D03` | Pressed gold |
| Deep text | `#021E4C` | Text on gold buttons |
| Navy | `#02115A` | Deep panels and footer accents (approximate role) |
| Text | `#000000` | Primary text |
| Subtle text | `#4A4A4A` | Secondary text |
| Surface 1 | `#FFFFFF` | Page |
| Surface 2 | `#F5F5F5` | Subdued sections |
| Surface 3 | `#F0F0F0` | Inputs, tertiary fills |
| Border | `rgba(0,0,0,0.1)` | Dividers and outlines |
| Disabled | `rgba(0,0,0,0.2)` | Disabled controls |
| Overlay | `rgba(20,34,57,0.4)` | Modal scrim |

### Blue surface ("alternate") theme

| Token | Value |
|---|---|
| surface-1 | `#1434CB` |
| surface-2 | `#122FBA` |
| surface-3 | `#112AA7` |
| text | `#FFFFFF` |
| text-subtle | `#D9D9D9` |
| active (buttons) | `#FCC015` with text `#021E4C` |
| border | `rgba(255,255,255,0.1)` |

### Semantic colors

| State | Graphic | Text | Highlight |
|---|---|---|---|
| Positive | `#40996B` | `#2C6849` | `#DFF1E8` (approx.) |
| Warning | `#C38004` | `#875903` | `#FEE8BE` (approx.) |
| Negative | `#D65151` | `#AD2929` | `#F7DEDE` (approx.) |
| Info | `#0088C7` | `#005E8A` | `#C7EDFF` |

### Dark mode

Nova ships a dark theme: surfaces `#0A0A0A`, `#1A1A1A`, `#2E2E2E`, text white, subtle text `#D9D9D9`, actions in pale blue `#BDEAFF` (hover `#DBF4FF`, pressed `#80D7FF`) and gold kept as the accent. visa.com marketing pages are light by default.

## 3. Typography

**Family:** Visa Dialect, a proprietary typeface. The site preloads `VisaDialectUI-Medium` and `VisaDialectUI-Bold` web files; Nova maps them to `visa-font-regular`, `visa-font-medium` and `visa-font-semi-bold`.

**Licensing:** not available for reuse. Nova's own fallback is **Open Sans**, which is free on Google Fonts. Inter also works.

```css
font-family: "Visa Dialect", "visa-font-regular", "Open Sans", sans-serif;
```

### Scale (Nova `visa` theme, root font size 14px)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display 1 | 60px (4.286rem) | 600 | 78px |
| Display 2 | 49px (3.5rem) | 600 | 62px |
| Headline 1 | 32px | 600 | 42px |
| Headline 2 | 25px | 500 | 33px |
| Headline 3 | 20px | 600 | 26px |
| Headline 4 | 18px | 600 | 24px |
| Subtitle 1 | 16px | 600 | 21px |
| Body 1 | 16px | 400 | 24px |
| Body 2 | 14px | 400 | 22px |
| Body 2 medium / link | 14px | 500 | 22px |
| Body 3 | 12px | 400 | 18px |

Marketing heroes on visa.com run larger than Display 2 at desktop widths (about 56-64px, approximate).

### Rules

- Sentence case everywhere ("Choose the right card", "Your security is our priority").
- Links are 500 weight and underlined on hover.
- Use the regular cut for body and 600 for headings; Visa Dialect has no ultra-light display style.
- Footnotes and disclaimers are Body 3 (12px) in subtle text.

## 4. Logo & Brand Mark

The logo is the **VISA** wordmark: four heavy, italic-leaning capitals with sharp diagonal cuts. Since the 2021 refresh the standard colour is Visa Blue `#1434CB`; the older version used navy with a gold flick on the "V".

- **Primary:** Visa Blue on white.
- **Reversed:** white on Visa Blue or on dark photography.
- **On card art:** white or gold depending on the card design, placed bottom right.
- **Clear space:** at least the height of the "V" on all sides (approximate).
- **Minimum size:** about 40px wide on screen (approximate).
- **Favicon / app tile:** white wordmark on a Visa Blue square.

Misuse:

- Do not recolour it outside blue, white, black or approved gold.
- Do not straighten the slant or add outlines and shadows.
- Do not place it on busy imagery without a solid area.
- Do not use the old navy-and-gold version alongside the current one.

## 5. Components

### Buttons

Nova buttons: 38px default height (46px large, 32px small), 6px radius, Visa Dialect 500 14-16px, 11px vertical padding.

| Variant | Background | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `#1434CB` | `#FFFFFF` | none | hover `#173BE8`, pressed `#0F2595` |
| Secondary | `#FFFFFF` | `#1434CB` | 1px `#1434CB` | hover tint `rgba(20,52,203,0.06)` (approx.) |
| Tertiary | transparent | `#1434CB` | none | text button with chevron |
| Primary on blue | `#FCC015` | `#021E4C` | none | hover `#FCC936` |
| Icon | transparent | `#1434CB` | none | pill radius, 38px square |

- Focus: 2px outline in `#1434CB` offset 2px (approximate).
- Disabled: `rgba(0,0,0,0.2)` fill, `#4A4A4A` text at reduced opacity.
- Stacked buttons (icon over label) grow to 72px tall.
- On mobile the default height rises to 46px.

```css
.v-button {
  display: inline-flex; align-items: center; gap: 8px;
  min-height: 38px; padding: 11px 20px;
  font: 500 16px/1 var(--brand-font);
  color: #fff; background: #1434CB;
  border: 0; border-radius: 6px;
}
.v-button:hover { background: #173BE8; }
.v-button:active { background: #0F2595; }
.v-alternate .v-button { background: #FCC015; color: #021E4C; }
```

### Header

- Top row: "Personal" and "Business" audience tabs, region selector ("United States | English"), search icon.
- Main row: blue wordmark left, then categories such as "Cards", "Travel", "Security" and "Support", with mega menus.
- White background, 1px `rgba(0,0,0,0.1)` bottom rule, 64-72px tall (approximate).

### Card finder (signature)

A sentence-style form centred in the hero: "I am looking for a" followed by a dropdown ("credit card", "debit card", "prepaid card", "business card") and a "Show results" button. A "Browse all cards" link sits below. Dropdown uses a 6px radius, `#F0F0F0` fill, 1px border, chevron icon.

### Content cards

- White, 6px radius, image on top, 24px padding, headline 3 (20px/600) and body 2 text, ending with a tertiary text link.
- On `#F5F5F5` sections cards are white with the Card shadow; on white they get a 1px `rgba(0,0,0,0.1)` border.
- "What's new at Visa" uses a horizontal carousel with "Previous slide" and "Next slide" icon buttons.

### Brand panel

Full-width Visa Blue band (`#1434CB`) with white Display or Headline type, a short paragraph, and a gold button. Used for "Your security is our priority" style messages.

### Inputs

- 38-46px tall, 6px radius, white or `#F0F0F0` fill, 1px `rgba(0,0,0,0.2)` border.
- Labels Body 2 medium above the field.
- Focus: border `#1434CB` with a 2px outer ring.
- Error text `#AD2929` with a negative icon.

### Footnotes

"Sources/Footnotes/Disclaimer" disclosure toggles open a list of numbered legal notes in 12px subtle text. Present on most product pages.

### Footer

Columns: "Company", "Support", "Legal and Privacy". Region and language selector, social icons and the copyright line ("©Copyright 1996 - 2026. All Rights Reserved.").

## 6. Layout & Spacing

- **Root size:** 14px (Nova scales spacing in rem from this base).
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64px.
- **Content width:** about 1200-1280px with 24-32px side padding (approximate).
- **Breakpoints:** Nova switches at 767px (mobile), with tablet and desktop steps around 1024 and 1280px (approximate).
- **Grid:** 12 columns; cards in 3-up rows on desktop, carousel on mobile.
- **Section spacing:** 64-80px on desktop, 40-48px on mobile.

## 7. Depth, Elevation & Motion

- Panel drop shadow from Nova: `drop-shadow(0 10px 18px rgba(0,0,0,0.1)) drop-shadow(0 4px 6px rgba(0,0,0,0.1))` for menus and popovers.
- Cards: light shadow `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` (approximate).
- Modal scrim `rgba(20,34,57,0.4)`.
- Motion is short and functional: 150-250ms ease-out for hovers and menus, slide transitions in carousels. Hero videos have a pause control.

## 8. Iconography & Imagery

- **Icons:** Visa Product Design System icons: rounded line icons on a 24px grid (16px small), 1.5-2px stroke, in Visa Blue or black.
- **Card art:** cards are shown flat or at a slight angle, with soft shadows, often fanned in a group.
- **Photography:** bright, natural light; people paying with phones and cards, travel destinations, small business owners. Diverse casts, warm tones.
- **Illustration:** simple geometric shapes in blue and gold, used for security and benefit explainers.

## 9. Voice & Microcopy

Friendly, reassuring and clear. Security and acceptance are the recurring promises. Short sentences, second person.

- Sentence case for headings and buttons.
- CTAs: "Show results", "Browse all cards", "Learn more", "Explore card benefits", "Get support".
- Legal footnotes are spelled out in full beneath the content they qualify.

Sample strings seen on the live site today:

- "Choose the right card"
- "Your security is our priority"
- "Learn more about how Visa helps protect you before, during and after your purchase."
- "Turn everyday spending into extraordinary experiences"
- "We're here to help"

## 10. Do's and Don'ts

**Do**

- Use Visa Blue for the logo, primary actions and full brand panels.
- Use gold sparingly: one action or highlight per blue surface.
- Keep a 6px radius on buttons, inputs and cards.
- Write in sentence case with short, reassuring lines.
- Show cards and real payment moments in imagery.
- Include footnotes for any benefit or protection claim.

**Don't**

- Don't use the old navy `#1A1F71` as the main brand blue.
- Don't put gold text on white; it fails contrast.
- Don't use heavy, dark shadows.
- Don't round buttons into pills except icon buttons.
- Don't mix in third-party card network colours.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of visa.com. White page, black text, secondary text `#4A4A4A`, subdued sections `#F5F5F5`. Font "Visa Dialect" with "Open Sans" fallback; headlines weight 600 (Headline 1 is 32px/42px, Display 60px/78px), body 16px/24px weight 400, links and buttons weight 500. Primary buttons are Visa Blue `#1434CB` with white text, 6px radius, 38px tall (46px large), hover `#173BE8`, pressed `#0F2595`. Use full-width Visa Blue panels with white text and a gold `#FCC015` button with `#021E4C` text. Cards are white, 6px radius, 1px `rgba(0,0,0,0.1)` border, 24px padding. Popovers use `drop-shadow(0 10px 18px rgba(0,0,0,0.1))`. Lead with a sentence-style card finder ("I am looking for a [credit card] Show results"). Copy is short, friendly and in sentence case, with footnotes for any claim.

```css
:root {
  --brand-blue: #1434CB;
  --brand-blue-hover: #173BE8;
  --brand-blue-pressed: #0F2595;
  --brand-blue-surface-2: #122FBA;
  --brand-blue-surface-3: #112AA7;
  --brand-gold: #FCC015;
  --brand-gold-hover: #FCC936;
  --brand-gold-pressed: #D39D03;
  --brand-text-on-gold: #021E4C;
  --brand-navy: #02115A;
  --brand-text: #000000;
  --brand-text-subtle: #4A4A4A;
  --brand-bg: #FFFFFF;
  --brand-surface-2: #F5F5F5;
  --brand-surface-3: #F0F0F0;
  --brand-border: rgba(0,0,0,0.1);
  --brand-overlay: rgba(20,34,57,0.4);
  --brand-positive: #40996B;
  --brand-warning: #C38004;
  --brand-negative: #D65151;
  --brand-info: #0088C7;
  --brand-font: "Visa Dialect", "Open Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 6px;
  --brand-radius-pill: 9999px;
  --brand-button-height: 38px;
  --brand-button-height-lg: 46px;
  --brand-shadow-card: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08);
  --brand-shadow-panel: 0 10px 18px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Visa.
