---
name: Plaid
slug: plaid
url: https://plaid.com
category: Finance
tagline: "Ink-black type on white, deep teal heroes, mint-to-blue gradients and code-first proof."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Ink
    hex: "#111112"
    role: Logo, headings, primary button fill
  - name: Deep Teal
    hex: "#00313D"
    role: Dark hero and feature section background
  - name: Mint
    hex: "#42F0CD"
    role: Start of the signature gradient, highlights on dark
  - name: Sky
    hex: "#0DADF2"
    role: End of the signature gradient, links on dark
  - name: White
    hex: "#FFFFFF"
    role: Page background, cards
  - name: Teal 600
    hex: "#088181"
    role: Icon color, tab and dropdown hover, accent text on white
  - name: Body Text
    hex: "#232424"
    role: Body copy
  - name: Teal 800
    hex: "#05565C"
    role: Column titles, card secondary text
  - name: Night Teal
    hex: "#012E37"
    role: Dialog and dropdown text, darkest teal surfaces
  - name: Ring
    hex: "#10D1B7"
    role: Focus ring
  - name: Grey 100
    hex: "#FAFAFA"
    role: Subtle section background
  - name: Grey 300
    hex: "#EDEDED"
    role: Dividers
  - name: Card Border
    hex: "#EBF0F4"
    role: Card image frames and quiet outlines
  - name: Grey 700
    hex: "#767676"
    role: Secondary text, captions
  - name: Code Navy
    hex: "#001B35"
    role: Code block background
  - name: Error Red
    hex: "#F44E66"
    role: Errors and negative states
fonts:
  display:
    family: "Plaid Sans"
    fallback: "Inter"
    weights: [400, 500, 600]
  body:
    family: "Plaid Sans"
    fallback: "Inter"
    weights: [300, 400, 500]
  mono:
    family: "Inconsolata"
    fallback: "Inconsolata"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 64, weight: 500, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Heading 1, size: 48, weight: 500, lineHeight: 1.1, tracking: "-0.015em" }
  - { role: Heading 2, size: 36, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading 3, size: 24, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Code, size: 14, weight: 400, lineHeight: 1.6, tracking: "0" }
radii: { sm: 4, md: 12, lg: 24, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Card, value: "0 8px 16px rgba(17,17,17,0.08)" }
  - { name: Raised, value: "0 8px 16px rgba(0,0,0,0.16)" }
  - { name: Button glow, value: "0 6px 14px rgba(127,248,218,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#FAFAFA"
  text: "#111112"
  muted: "#767676"
  border: "#EBF0F4"
  accent: "#111112"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# Plaid

## 1. Visual Theme & Atmosphere

Plaid is the data network behind a lot of US fintech apps: it connects apps to bank accounts. Its site speaks to developers, product leads and risk teams at once, so it looks like a tidy infrastructure company with a little colour. The base is white with near-black ink (`#111112`), and the drama comes from deep teal sections (`#00313D`) lit by a mint-to-sky gradient (`#42F0CD` to `#0DADF2`).

What makes it recognisable:

- **The tartan mark.** The logo symbol is a woven, plaid-like lattice inside a rounded square silhouette. It appears in black on white, white on teal.
- **Ink, not brand color, for actions.** Primary buttons are near-black pills. Colour is saved for gradients and icons.
- **Deep teal heroes.** Product and feature heroes sit on dark teal with soft glows and floating UI (notification cards like "Venmo, 2m ago", read on the site 2026-11-16).
- **Mint-to-blue gradient.** Used on the primary button inside dark sections, card hover icons and small glow effects.
- **Code as proof.** A code block (`/auth/get` request and response) with line numbers sits on the homepage. Developers are a first-class audience.
- **Big stat tiles.** Large numbers with short labels ("1 in 2 banked adults in the U.S. use Plaid", read 2026-11-16).

Density is moderate, with comfortable whitespace and 2-4 column card grids.

Mood words: trusted, technical, modern, calm, connected.

## 2. Color Palette & Roles

Values from plaid.com CSS variables (`--black*`, `--blue*`, `--green*`, `--purple*`, `--button-*`), read 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Ink (black1000) | `#111112` / `#111` | Logo, headings, primary button |
| Body Text | `#232424` | Paragraphs |
| Grey 900 | `#383838` | Strong secondary text |
| Grey 700 | `#767676` | Captions |
| Grey 600 | `#949494` | Placeholders, disabled |
| Grey 400 | `#DCDCDC` | Borders |
| Grey 300 | `#EDEDED` | Dividers |
| Grey 200 | `#F6F6F6` | Fills |
| Grey 100 | `#FAFAFA` | Section background |
| Card Border | `#EBF0F4` | Card frames |
| Deep Teal | `#00313D` | Hero background |
| Night Teal | `#012E37` | Darkest teal, dialog text |
| Ink Teal | `#001D24` | Icon hover, darkest ink |
| Teal 800 | `#05565C` | Column titles |
| Teal 600 | `#088181` | Icons, hover states |
| Ring | `#10D1B7` | Focus ring |
| Mint | `#42F0CD` | Gradient start |
| Sky | `#0DADF2` | Gradient end |
| Code Navy | `#001B35` | Code background, text `#C8D8E8` |

### Accent families (illustrations, charts, tags)

| Family | 200 | 600 | 800 |
|---|---|---|---|
| Blue | `#D4F9FF` | `#63DAFF` | `#0A85EA` |
| Green | `#D0FCE4` | `#5BEFBD` | `#23D09C` |
| Purple | `#E1E1FF` | `#9986F7` | `#7646EC` |
| Red | `#FFD7DC` | `#FF7885` | `#F44E66` |
| Yellow | `#FEFBB8` | `#FCE76B` | `#F2D211` |

### Gradients

- Primary on dark: `linear-gradient(33deg, #42F0CD 0%, #0DADF2 100%)`
- Primary on light: `linear-gradient(108deg, #E5EFFB 0%, #CBFCB3 50%, #F9DBFF 100%)`
- Card icon wash: `linear-gradient(48deg, #CDF5FD 0%, #D8FEF3 50%, #E8FED7 100%)`

## 3. Typography

- **Plaid Sans**: the current brand face (custom, self-hosted at weights 300, 400, 500 and up). Proprietary.
- **Cern**: the previous brand face, still in many fallback stacks and older pages. Proprietary.
- **Inconsolata**: monospace for code, free on Google Fonts.
- Two script faces (**Bowery Lane**, **Bowery Street**) appear in campaign pages only.

Fallback: **Inter** for Plaid Sans (approximate); the site's own fallback stack lists Avenir Next, Proxima Nova and Plus Jakarta Sans, so **Plus Jakarta Sans** is a good alternative.

The root font size is 62.5% (1rem = 10px), so CSS like `1.6rem` means 16px.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display | 64px (approx.) | 500 | 1.05 |
| Heading 1 | 48px | 500 | 1.1 |
| Heading 2 | 36px | 500-600 | 1.2-1.33 |
| Heading 3 | 24px | 500 | 1.3 |
| Lead | 20px | 400 | 1.5 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Label/Button | 14px | 600 | 1.4 |
| Code | 14px Inconsolata | 400 | 1.6 |

Rules:

- Sentence case for headings and buttons.
- Medium weights for headlines, not bold 800.
- Keep tracking slightly negative at display sizes (approximate).
- Use tabular numbers in stat tiles.

## 4. Logo & Brand Mark

The logo pairs a **woven lattice symbol** (a rounded square cut into interlocking diamond cells, like tartan weave) with the **PLAID** wordmark in bold geometric capitals.

- The symbol alone is used for favicons and avatars.
- Clear space: half the symbol width around the lockup.
- Minimum size: about 64px wide for the lockup, 16px for the symbol.
- Colors: black `#111112` on white; white on Deep Teal or black.
- Don't: fill the symbol with gradients, outline it, rotate it, or separate the wordmark spacing.

`logo.svg` is the header lockup from plaid.com. `icon.svg` is the white symbol on Ink.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 5px;
  padding: 12px 24px; border-radius: 999px;
  font: 600 14px/1.4 "Plaid Sans", Inter, sans-serif;
  transition: box-shadow .2s ease-out, background .2s ease-out;
}
.btn--primary { background: #111112; color: #FFFFFF; border: 1px solid #111112; }
.btn--primary:hover { background: #383838; }                         /* approx. */
.btn--secondary { background: rgba(0,0,0,0.05); color: #111112; border: 1px solid #111112; }
.btn--secondary:hover { background: rgba(12,12,12,0.10); color: #034049; }
.btn--rounded { background: #FFFFFF; color: #232424; border: 1px solid #DDE3E9; }
.btn--gradient { background: linear-gradient(33deg, #42F0CD 0%, #0DADF2 100%); color: #111112; border: 0; }
.btn--gradient:hover { background: linear-gradient(27deg, #42F0CD 37.73%, #0DADF2 146.81%); }
.btn:focus-visible { outline: 2px solid #10D1B7; outline-offset: 2px; }
.btn:disabled { background: #767676; border-color: #767676; }
```

On dark teal, secondary buttons become `rgba(255,255,255,0.05)` fill, white text, hover text `#B6FBE9`.

Text links with arrows: the arrow sits in a small box and slides in from -14px on hover over 150ms.

### Inputs

- 48px tall (approximate), 1px `#DCDCDC` border, 8px radius, 16px text, label above in 14px 500.
- Focus: border `#111112` with 2px `#10D1B7` ring (approximate).
- Error: border and helper text `#F44E66`.
- The "Talk with our team" form uses a two-column grid (First name, Last name, Company email, Company name, Country, Phone).

### Cards

- Product cards: white, 1px `#EBF0F4` border, 12px radius, 4px inner padding around an image area, then a 16px padded title block.
- Hover: icon box swaps to the mint/sky gradient with glow `0 6px 14px rgba(127,248,218,0.5)`, card lifts with `0 8px 16px rgba(17,17,17,0.08)`.
- Icon boxes: 32 or 40px, 6px radius, pastel gradient background, icon `#043C67` or `#088181`.

### Navigation

- White sticky header, logo left, top-level items (Products, Solutions, Developers, Resources, Pricing), "Log in" text link, "Contact sales" black pill.
- Mega dropdown: 708px wide panel with columns of icon cards, teal column titles `#05565C`, link hover `#088181`.

### Stat tiles

Large numbers (48-64px, 500) with a 14-16px description below. Arrange 4-up on desktop, 2-up on mobile.

### Code blocks

Background `#001B35`, text `#C8D8E8`, Inconsolata 14px, line numbers in muted blue, 12px radius, endpoint label (`/auth/get`) as a tab.

### Tabs

Underlined text tabs; hover color `#088181`; active tab ink with a 2px underline.

### Notification cards (hero motif)

Small white cards with 12px radius, app logo avatar, app name, timestamp ("2m ago") and one line of text, floating over the teal hero with soft shadow.

## 6. Layout & Spacing

- Content widths: 1100-1128px for most sections, 1400px for wide hero grids (approximate).
- Breakpoints from CSS: 640px and 1024px are the main ones (`max-width: 639px`, `1023px`).
- Spacing in multiples of 8 (4 for tight UI): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding 96-128px desktop, 64px mobile.
- Body side padding 16px on mobile.

## 7. Depth, Elevation & Motion

- Shadows are soft and short: `0 8px 16px rgba(0,0,0,0.08)` default, `0.16` for raised menus.
- Glows replace shadows on dark backgrounds: mint glow `0 6px 14px rgba(127,248,218,0.5)` and purple `0 0 14px #8358EF` on special items.
- Easing: `cubic-bezier(.65,.02,.2,1)` for panels, `cubic-bezier(.23,1.2,.32,1)` for slight overshoot on cards, `cubic-bezier(.2,.8,.2,1)` for fades.
- Durations: 150-200ms for hovers, 300-500ms for panels and number count-ups.

## 8. Iconography & Imagery

- Icons: 16px and 24px line icons, 1.5px stroke, square ends, drawn in `currentColor`; product icons inside pastel gradient tiles.
- Imagery is mostly product UI: phone screens of Plaid Link, notification cards, dashboards.
- Abstract backgrounds: soft blurred light on deep teal, never busy.
- Customer logos in greyscale strips.
- Little photography; where used, people at work, natural tones.

## 9. Voice & Microcopy

Clear, confident, slightly developer-flavoured. Short benefit headlines, then a plain sentence.

Sample strings (plaid.com, read 2026-11-16):

- Hero: "Turn data into revolutionary financial products"
- Sub: "Connect to real-time insights on the Plaid Network to create fast, safe, and smart financial experiences."
- CTAs: "Talk with our team", "Start building", "Get the API keys", "Read the docs"
- Section: "A network that makes your products better"
- Developer hook: "You build the experience. We'll handle the data."
- Consumer note: "Manage your connections with Plaid Portal"

Casing: sentence case. Product names capitalised (Auth, Identity, Transfer, Signal).

## 10. Do's and Don'ts

**Do**

- Keep white pages with near-black ink and pill buttons.
- Use deep teal for one hero or feature band, with the mint-to-sky gradient on its CTA.
- Show code and real product UI.
- Use 12px radius cards with `#EBF0F4` borders.
- Use teal `#088181` for icons and hover details.

**Don't**

- Don't use the old Plaid blue as a primary button color.
- Don't put gradients on body text or large backgrounds on white sections.
- Don't use heavy bold headlines; Plaid uses medium weights.
- Don't use square-cornered buttons.
- Don't fill the logo symbol with color.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Plaid. White page, headings and primary buttons in ink `#111112`, body text `#232424`, captions `#767676`. Font "Plaid Sans" (fallback Inter or Plus Jakarta Sans), medium weight (500) headlines with slight negative tracking, 16px body at 1.6. Buttons are pills (`border-radius: 999px; padding: 12px 24px; font: 600 14px`): primary black, secondary 1px black outline on `rgba(0,0,0,0.05)`. One hero band in deep teal `#00313D` with white text, floating notification cards, and a gradient CTA `linear-gradient(33deg, #42F0CD, #0DADF2)` with ink text. Product cards: white, 1px `#EBF0F4` border, 12px radius, icon tiles with pastel gradient `linear-gradient(48deg, #CDF5FD, #D8FEF3, #E8FED7)` and teal `#088181` icons; on hover lift with `0 8px 16px rgba(17,17,17,0.08)`. Include a code block on `#001B35` with `#C8D8E8` Inconsolata text. Focus ring `#10D1B7`. Content width ~1128px, 96-128px section spacing. Copy is clear and specific.

```css
:root {
  --brand-ink: #111112;
  --brand-text: #232424;
  --brand-text-muted: #767676;
  --brand-grey-100: #FAFAFA;
  --brand-grey-200: #F6F6F6;
  --brand-grey-300: #EDEDED;
  --brand-grey-400: #DCDCDC;
  --brand-card-border: #EBF0F4;
  --brand-deep-teal: #00313D;
  --brand-night-teal: #012E37;
  --brand-teal-800: #05565C;
  --brand-teal-600: #088181;
  --brand-ring: #10D1B7;
  --brand-mint: #42F0CD;
  --brand-sky: #0DADF2;
  --brand-code-bg: #001B35;
  --brand-code-text: #C8D8E8;
  --brand-error: #F44E66;
  --brand-purple: #7646EC;
  --brand-gradient: linear-gradient(33deg, #42F0CD 0%, #0DADF2 100%);
  --brand-font: "Plaid Sans", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-font-mono: "Inconsolata", Consolas, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 24px;
  --brand-radius-pill: 999px;
  --brand-shadow-card: 0 8px 16px rgba(17,17,17,0.08);
  --brand-shadow-raised: 0 8px 16px rgba(0,0,0,0.16);
  --brand-glow: 0 6px 14px rgba(127,248,218,0.5);
  --brand-ease: cubic-bezier(.65, .02, .2, 1);
}
```

---

Values are observed from the public plaid.com stylesheets on 2026-11-16; heading sizes and weights, input styling and hover shades are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Plaid.
