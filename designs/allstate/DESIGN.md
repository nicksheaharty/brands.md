---
name: Allstate
slug: allstate
url: https://allstate.com
category: Insurance
tagline: "Good Hands blue, deep navy and sky accents, lowercase headlines and rounded buttons."
updated: 2026-11-16
appStoreId: 364376344
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Allstate Blue
    hex: "#0033A0"
    role: Logo, links, headline accents, primary brand colour
  - name: Midnight
    hex: "#0E1941"
    role: Text on light buttons, dark bands, icons, app icon background
  - name: Sky
    hex: "#45BCE5"
    role: Default button fill, emphasised words in headlines
  - name: Sky Fade
    hex: "#D9EEFF"
    role: Light blue panels and selected rows
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Cloud
    hex: "#F3F6F9"
    role: Section background, input fill
  - name: Coral
    hex: "#ED7766"
    role: Secondary accent, promo headings
  - name: Rust
    hex: "#BA3821"
    role: Strong coral for text on light
  - name: Teal
    hex: "#00C39C"
    role: Tertiary accent, success
  - name: Deep Teal
    hex: "#037E6B"
    role: Strong teal for text
  - name: Lavender
    hex: "#BD70F4"
    role: Quaternary accent for illustrations
  - name: Alert Red
    hex: "#CF102D"
    role: Errors and alerts
  - name: Gold
    hex: "#FFBB00"
    role: Ratings and highlights
  - name: Slate
    hex: "#4E5969"
    role: Secondary text
  - name: Steel
    hex: "#CED7E0"
    role: Borders and dividers
fonts:
  display:
    family: "Allstate Sans W"
    fallback: "Source Sans 3"
    weights: [500, 600, 700]
  body:
    family: "Allstate Sans W"
    fallback: "Source Sans 3"
    weights: [300, 400, 500, 700]
typeScale:
  - { role: Hero, size: 64, weight: 500, lineHeight: 1.0, tracking: "0" }
  - { role: H1, size: 56, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: H2, size: 42, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: H3, size: 28, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: H4, size: 24, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 8, lg: 22, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80]
shadows:
  - { name: Dropdown, value: "0 4px 12px rgba(14,25,65,0.15)" }
  - { name: Inset field, value: "inset 0 4px 4px 0 rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3F6F9"
  text: "#0E1941"
  muted: "#4E5969"
  border: "#CED7E0"
  accent: "#0033A0"
  accentText: "#FFFFFF"
  radius: 22
  buttonStyle: pill
---

# Allstate

## 1. Visual Theme & Atmosphere

Allstate is built on one image: the "Good Hands" mark, two cupped hands inside an oval, in Allstate Blue. The website (Next.js on a Sitecore SXA headless back end) turns that into a calm, blue-on-white interface with a deep navy for text and a bright sky blue for buttons and emphasis. Accents in coral, teal, lavender and gold appear in illustrations, icons and small promos.

What makes it recognisable:

- **Three blues working together.** Allstate Blue `#0033A0` for the logo, links and brand moments; Midnight `#0E1941` for text and dark bands; Sky `#45BCE5` for default buttons and for highlighted words in headlines.
- **Lowercase, conversational headlines.** The home hero reads "let's start an insurance quote" and the search prompt "how can we help you?". Lowercase is a deliberate part of the current voice.
- **Rounded buttons, square fields.** Buttons use a 22px radius (pill-like at 44px height). Inputs are square-cornered on a light grey fill.
- **A product picker in the hero.** A row of product buttons (Auto, Home, Renters, Bundle) with two-tone icons sits under the hero headline, followed by a ZIP field and "get a quote".
- **Photography of families at home.** Warm lifestyle photos (driveways, backyards, kids) with rounded corners beside clean white panels.

Density is medium-light: big hero, generous padding, then a long run of content modules (product cards, stats, articles, app promo).

Mood words: reassuring, warm, steady, approachable, trustworthy.

## 2. Color Palette & Roles

The site exposes its palette as CSS custom properties (`--brand-*` and `--neutral-*`). Values below are from those tokens.

| Name | Token | Hex | Role |
|---|---|---|---|
| Allstate Blue | `--brand-primary` | `#0033A0` | Logo, links, headings on light, outlines |
| Midnight | `--brand-primary-strong` | `#0E1941` | Button text, icons, dark sections, input border |
| Sky | `--brand-primary-light` | `#45BCE5` | Default button fill, `h1 em` highlight |
| Sky Fade | `--brand-primary-fade` | `#D9EEFF` | Info panels, selected states |
| Coral | `--brand-secondary` | `#ED7766` | Promo headings, accent icons |
| Rust | `--brand-secondary-strong` | `#BA3821` | Coral for text |
| Coral Fade | `--brand-secondary-fade` | `#FCE4E1` | Coral panels |
| Teal | `--brand-tertiary` | `#00C39C` | Success, illustration |
| Deep Teal | `--brand-tertiary-strong` | `#037E6B` | Teal for text |
| Teal Fade | `--brand-tertiary-fade` | `#CCF3EC` | Teal panels |
| Lavender | `--brand-quaternary` | `#BD70F4` | Illustration accent |
| Purple | `--brand-quaternary-strong` | `#7D12B6` | Purple for text |
| Lavender Fade | `--brand-quaternary-fade` | `#F1CCFF` | Purple panels |
| Alert Red | `--brand-quinary` | `#CF102D` | Errors |
| Red Fade | `--brand-quinary-fade` | `#FAE7EA` | Error backgrounds |
| Gold | `--brand-senary` | `#FFBB00` | Star ratings, highlights |

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `--neutral-1` | `#F9FBFC` | Lightest background |
| `--neutral-2` | `#F3F6F9` | Section background, input fill |
| `--neutral-3` | `#E4E9ED` | Disabled fill, subtle borders |
| `--neutral-4` | `#CED7E0` | Borders, dividers |
| `--neutral-6` | `#94A1B0` | Placeholder text |
| `--neutral-7` | `#6B7789` | Captions |
| `--neutral-8` | `#4E5969` | Secondary text |
| `--neutral-9` | `#000000` | Base text token (most visible text uses Midnight) |

### Dark sections

No global dark mode. Dark bands and the app icon use Midnight `#0E1941` with white text and Sky `#45BCE5` highlights. Banner quotes use `--neutral-8` text with highlighted words switched to white.

## 3. Typography

**Family:** Allstate Sans W, a custom sans in light (300), regular (400), medium (500), bold (700) and black (800) with italics, served as the `allstate` font family. The site also loads Effra and Aeonik for some campaign modules (approximate: which templates use them varies).

**Licensing:** Allstate Sans is proprietary. Free substitute: **Source Sans 3** (similar humanist proportions). For Effra modules, **Figtree** is close.

```css
font-family: "allstate", "Source Sans 3", Arial, Helvetica, sans-serif;
```

### Scale (desktop; from CSS tokens like `--h-1-font-size`)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero quote heading | 64px | 500 | 1.0 | 0 |
| H1 | 56px (38px mobile) | 600 | 1.1 | 0 |
| H2 | 42px | 500 | 1.1 | 0 |
| H3 | 28px | 500 | 1.1 | 0 |
| H4 | 24px | 500 | 1.1 | 0 |
| Accordion / card title | 20px | 500 | 1.2 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Small | 14px | 400 | 1.4 | 0 |

### Rules

- Headlines are often all lowercase in heroes and prompts ("let's start an insurance quote"). Section headings elsewhere use sentence case.
- Highlight a key word with `<em>`, rendered upright in Sky: `h1 em { font-style: normal; color: #45BCE5; }`.
- Headings use medium (500) or semibold (600), not black, in UI. Stats use bold 700 in Allstate Blue.
- Links are underlined by default in body copy.

## 4. Logo & Brand Mark

- **Construction:** the Good Hands symbol (two cupped hands drawn in negative space inside a horizontal oval ring) to the left of the "Allstate" wordmark in a bold sans with a capital A. A registered mark follows the wordmark and sits under the oval.
- **Colour:** Allstate Blue `#0033A0` on white. Reversed: white on Allstate Blue or Midnight. The app icon uses Sky-blue hands on Midnight.
- **Clear space:** at least the height of the "A" around the lockup (approximate).
- **Minimum size:** about 24px tall for the hands symbol on screen (approximate).
- **Variants:** symbol only (app icon, favicon), wordmark only (header on narrow layouts), full lockup.
- **Misuse:** don't separate the hands from the oval, recolour in coral or teal, rotate, add effects, or place it on photos without a solid panel.

## 5. Components

### Buttons

Buttons are driven by tokens (`--button-default-*`). Radius `--button-border-radius: 1.375rem` (22px).

```css
.btn {
  background: #45BCE5;            /* --brand-primary-light */
  color: #0E1941;                  /* --brand-primary-strong */
  border: 1px solid #45BCE5;
  border-radius: 22px;
  font: 500 16px/1 "allstate", sans-serif;
  padding: 13px 28px;             /* approximate, 44px tall */
  transition: color .3s ease-in-out, background-color .3s ease-in-out,
              border-color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.btn:hover { background: #0033A0; border-color: #0033A0; color: #FFFFFF; } /* approximate */
.btn:focus-visible { box-shadow: 0 0 0 5px rgba(69,188,229,.4); outline: none; }

.btn-secondary {
  background: transparent;
  color: #0033A0;
  border: 1px solid #0033A0;
  border-radius: 22px;
}
.btn-secondary:hover { background: #D9EEFF; }

.btn-coral { background: #ED7766; border-color: #ED7766; color: #0E1941; } /* promo variant */
.btn-disabled { background: #E4E9ED; border-color: #E4E9ED; color: #94A1B0; }
```

### Product selector ("buttons of business")

A row of square-ish tiles, each with a two-tone line icon (primary and secondary icon colours set by tokens) and a label: "Auto", "Home", "Renters", "Bundle". Unselected: white with `#CED7E0` border. Selected: `#D9EEFF` fill, `#0033A0` border, icon switches to Allstate Blue. 8px radius (approximate).

### Inputs

```css
.input {
  background: #F3F6F9;            /* --input-background-color */
  border: 1px solid #0E1941;      /* --input-border-color */
  border-radius: 0;               /* --input-border-radius */
  height: 48px;
  padding: 12px 16px;
  color: #000000;                 /* --neutral-9 */
  font: 400 16px "allstate", sans-serif;
}
.input:focus { border-color: #0033A0; box-shadow: 0 0 0 2px #E4E9ED; }
```

The ZIP field and "get a quote" button sit side by side on desktop with the button's rounded corners next to the square field.

### Cards

White cards on `#F3F6F9` sections, 8px radius, no border or a 1px `#CED7E0` border, photo on top with rounded corners, title in Allstate Blue 20px bold, body 16px, a text link "learn more" at the bottom. Feature coverage cards use a small icon and an H3 in Allstate Blue at 20px.

### Navigation

- **Mega nav:** white bar, logo left, top items "Insurance & more", "Claims", "Help & support", "Resources", search and "Log in" on the right.
- **Mega panel:** full-width white panel with a short intro paragraph and link columns grouped by Vehicle, Property, Personal, Event, Business.
- **Utility links:** 14px, Allstate Blue, underline on hover.
- **Mobile:** hamburger opens a full-height drawer with accordion groups.

### Accordions

Rows separated by `#CED7E0` 1px rules, 20px medium headings, chevron in Midnight that rotates 180deg on open (`transition: all .18s ease-in-out`).

### Stats band

Three columns, number in Allstate Blue at 42px bold, label in 16px Slate.

### Alerts

Coloured left rule and fade background: info `#D9EEFF`, success `#CCF3EC`, error `#FAE7EA` with `#CF102D` icon, heading 24px medium.

### App promo

Midnight band with phone mockup, Sky highlight word in the heading, and App Store / Google Play badges.

## 6. Layout & Spacing

- **Max widths:** 1440px outer (`90rem`), 1200px content, 680px for long text.
- **Grid:** Bootstrap-style 12 columns with 24px gutters.
- **Breakpoints (from CSS):** 576, 768, 992, 1200, 1440px. Desktop layout starts at 992px.
- **Section spacing:** 48-80px vertical (approximate).
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 80.

## 7. Depth, Elevation & Motion

Mostly flat with soft shadows only on menus.

| Token | Value | Use |
|---|---|---|
| Dropdown | `0 4px 12px rgba(14,25,65,0.15)` (approximate) | Nav dropdowns, select menus |
| Focus ring | `0 0 0 5px` brand tint | Buttons |

- **Durations:** `.18s ease-in-out` for nav and accordions, `.3s ease-in-out` for buttons, `.7s ease-in-out` for carousel slides and fades.

## 8. Iconography & Imagery

- **Icons:** two-tone line icons at 56px for products (outline in Midnight, secondary fill in Sky), simple 24px line icons in the UI. Rounded joins, about 1.5-2px stroke.
- **Illustrations:** flat shapes using the accent families (coral, teal, lavender, gold) with their fade tints.
- **Photography:** real families, homes, cars and pets in natural light; warm and candid. Photos are cropped with 8-16px rounded corners (approximate).

## 9. Voice & Microcopy

Warm, plain and reassuring, anchored on "You're In Good Hands." Hero prompts are lowercase and conversational; body copy is clear and helpful.

Sample strings (read on allstate.com on 2026-11-16):

- Tagline: "You're In Good Hands."
- Hero: "let's start an insurance quote"
- Search: "how can we help you?"
- Picker: "select a product to get a quote", "continue a quote"
- Claims: "Discover a smooth and simple process from start to finish."
- Help: "Pay your bill", "Get ID cards", "File a claim", "Explore mobile app"

## 10. Do's and Don'ts

**Do**

- Use Allstate Blue for brand and links, Midnight for text and dark bands, Sky for default buttons.
- Use rounded 22px buttons and square-cornered inputs on a `#F3F6F9` fill.
- Write hero prompts in lowercase and highlight one word in Sky.
- Use two-tone icons in the product picker.
- Keep accents (coral, teal, lavender, gold) for illustrations and small promos.

**Don't**

- Don't use pure black for headlines; use Midnight or Allstate Blue.
- Don't use the accent colours for primary buttons in core flows.
- Don't round input fields.
- Don't separate or redraw the Good Hands symbol.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Allstate. White page with `#F3F6F9` alternate sections. Text in Midnight `#0E1941`, secondary text `#4E5969`, borders `#CED7E0`. Font: "Allstate Sans" with fallback "Source Sans 3". Hero heading 56-64px medium/semibold, lowercase and conversational ("let's start an insurance quote"), with one word wrapped in `<em>` shown upright in Sky `#45BCE5`. Under it, a row of product tiles (Auto, Home, Renters, Bundle) with two-tone line icons; the selected tile gets a `#D9EEFF` fill and `#0033A0` border. Then a square-cornered ZIP input (`#F3F6F9` fill, 1px `#0E1941` border) next to a rounded button (22px radius, Sky `#45BCE5` fill, Midnight text, hover Allstate Blue `#0033A0` with white text). Links are Allstate Blue and underlined. Cards are white, 8px radius, photo on top, blue 20px titles. Accents (coral `#ED7766`, teal `#00C39C`, lavender `#BD70F4`, gold `#FFBB00`) only in illustrations and small promos. Max width 1200px, 12-column grid, transitions .18-.3s ease-in-out.

```css
:root {
  --brand-primary: #0033A0;
  --brand-primary-strong: #0E1941;
  --brand-primary-light: #45BCE5;
  --brand-primary-fade: #D9EEFF;
  --brand-secondary: #ED7766;
  --brand-secondary-strong: #BA3821;
  --brand-tertiary: #00C39C;
  --brand-tertiary-strong: #037E6B;
  --brand-quaternary: #BD70F4;
  --brand-error: #CF102D;
  --brand-error-fade: #FAE7EA;
  --brand-gold: #FFBB00;
  --brand-neutral-2: #F3F6F9;
  --brand-neutral-3: #E4E9ED;
  --brand-neutral-4: #CED7E0;
  --brand-neutral-8: #4E5969;
  --brand-font: "allstate", "Source Sans 3", Arial, Helvetica, sans-serif;
  --brand-button-radius: 1.375rem;
  --brand-input-radius: 0;
  --brand-card-radius: 8px;
  --brand-shadow-dropdown: 0 4px 12px rgba(14,25,65,0.15);
  --brand-transition: .18s ease-in-out;
  --brand-max-width: 1200px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Allstate.
