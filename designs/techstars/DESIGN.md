---
name: Techstars
slug: techstars
url: https://www.techstars.com
category: Accelerator
tagline: "Bold Suisse type, black and white with a bright green underscore and pill buttons."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Techstars Green
    hex: "#39C463"
    role: Logo underscore, primary pill buttons, stat tiles, nav underline
  - name: Black
    hex: "#000000"
    role: Wordmark, headings, dark feature cards
  - name: White
    hex: "#FFFFFF"
    role: Header, cards, section backgrounds
  - name: Forest
    hex: "#1F6F43"
    role: MUI primary, text links, outlined buttons
  - name: Deep Forest
    hex: "#0F4D2C"
    role: Link hover, contained button hover, chip avatars
  - name: Fog
    hex: "#F5F5F5"
    role: Body background, portfolio card header strip
  - name: Green Hover
    hex: "#32AC57"
    role: Green pill button hover
  - name: Button Grey
    hex: "#F7F7F7"
    role: Secondary grey pill button
  - name: Grey Hover
    hex: "#B9B9C2"
    role: Grey button hover, outline borders
  - name: Charcoal
    hex: "#1A1A1A"
    role: Secondary dark fills, dark button hover
  - name: Body Grey
    hex: "#616161"
    role: Chip icons and avatar text
  - name: Divider
    hex: "#E0E0E0"
    role: Hairlines and dividers
fonts:
  display:
    family: "Suisse Int'l"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Suisse Int'l"
    fallback: "Inter"
    weights: [400, 500, 600]
  mono:
    family: "JetBrains Mono"
    fallback: "JetBrains Mono"
    weights: [700]
typeScale:
  - { role: Hero, size: 90, weight: 700, lineHeight: 1.16, tracking: "-0.044rem" }
  - { role: Stat, size: 56, weight: 700, lineHeight: 1.05, tracking: "-0.02em" }
  - { role: Section, size: 40, weight: 700, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Card Title, size: 24, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Lead, size: 20, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0.15px" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0.15px" }
  - { role: Eyebrow, size: 12, weight: 700, lineHeight: 2.66, tracking: "0.1em" }
radii: { sm: 4, md: 8, lg: 12, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
shadows:
  - { name: Card Soft, value: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)" }
  - { name: MUI 2, value: "0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)" }
  - { name: MUI 8, value: "0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#616161"
  border: "#E0E0E0"
  accent: "#39C463"
  accentText: "#000000"
  radius: 9999
  buttonStyle: pill
---

# Techstars

## 1. Visual Theme & Atmosphere

Techstars reads as a confident black-and-white tech brand with one switched-on color. The lowercase **techstars** wordmark ends in a bright green underscore, like a blinking cursor, and that same green (`#39C463`) runs through the site as pill buttons, stat tiles, nav underlines and eyebrow labels. Everything else is white, light grey and solid black.

What makes it recognisable:

- **Huge bold Swiss type.** Hero headlines are Suisse Int'l Bold at up to 90px with tight negative tracking: "In a World of Noise, the Right Network Is Everything."
- **The green underscore.** The cursor-like bar from the logo is the brand's main graphic device. Use it as an underline, a divider or an accent after a word.
- **Green pills with black text.** Primary actions are fully rounded, bright green, with black (not white) labels.
- **Stat tiles.** Big numbers on solid green rounded tiles in a 2 x 2 grid ("11,171 Founders Building the Future", read on the homepage on 2026-11-16).
- **Dark image cards.** Vertical program and sector cards ("Health", "Finance", "Space & Defense") are photos with a black-to-transparent gradient and bold white titles at the bottom.
- **MUI under the hood.** The site is built with Material UI, so many details (chips, ripple, elevation shadows) follow MUI defaults with Techstars colors.

Mood words: energetic, global, practical, network-driven, no-nonsense.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Techstars Green | `#39C463` (`rgba(57,196,99,1)`) | Logo underscore, green pill CTA, stat tiles, nav hover underline, eyebrow text, selected tab, icon buttons |
| Green Hover | `#32AC57` | Hover for green buttons |
| Forest | `#1F6F43` | MUI `primary.main`: inline links, outlined and text buttons |
| Deep Forest | `#0F4D2C` | Link hover, contained button hover, primary chip avatars |
| Black | `#000000` | Wordmark, headlines, dark cards, button text on green |
| Charcoal | `#1A1A1A` | MUI secondary, dark hover |
| Text Primary | `rgba(0,0,0,0.87)` | Body text, nav labels |
| Text Secondary | `rgba(0,0,0,0.6)` | Captions, card descriptions, "Read More" links |
| Disabled | `rgba(0,0,0,0.26)` | Disabled text |
| White | `#FFFFFF` | Header, cards, light sections |
| Fog | `#F5F5F5` | `body` background, card header strips |
| Button Grey | `#F7F7F7` | Secondary grey pill |
| Grey Hover | `#B9B9C2` | Grey pill hover, outline button borders |
| Divider | `#E0E0E0` / `rgba(0,0,0,0.12)` | Card borders, section rules |
| Chip Fill | `rgba(0,0,0,0.08)` | Filled chips |
| Body Grey | `#616161` | Chip icons |

### Semantic colors

Not branded on the marketing site; use MUI defaults if needed: success `#2E7D32`, warning `#ED6C02`, error `#D32F2F`, info `#0288D1` (MUI defaults, not observed on techstars.com).

### Dark mode

No site-wide dark mode. Dark moments are self-contained: black `#000000` feature cards with white text and green accents, and image cards with a `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 50%)` overlay.

## 3. Typography

**Family:** Suisse Int'l (Swiss Typefaces), self-hosted as separate families per weight: `suisseRegular` (400), `suisseMedium` (500), `suisseSemibold` (600), `suisseBold` (700). Each has a metric-matched Arial fallback (`size-adjust: ~103-105%`). Big numbers in a few places use **JetBrains Mono** 700 with tabular figures.

**Licensing:** Suisse Int'l is commercial. Closest free substitute: **Inter** (use 700 for display, 400-600 for UI). JetBrains Mono is free on Google Fonts.

```css
font-family: "Suisse Intl", "Inter", Helvetica, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero H1 | `clamp(2.25rem, 1.062rem + 5.07vw, 5.625rem)` (36-90px) | 700 | 1.16 | `clamp(-0.12rem, ..., -0.044rem)` |
| Stat number | `clamp(1.875rem, 1.303rem + 2.441vw, 3.5rem)` (30-56px) | 700 | 1.05 | -0.02em |
| Section H2 | `clamp(2rem, 1.472rem + 2.254vw, 3.5rem)` (32-56px) | 700 | 1.1 | -0.02em |
| H5 / card title | 24px (or `clamp(1rem, ..., 1.375rem)` in news cards) | 700 | 1.25-1.33 | 0 |
| Lead | 20px | 600 | 28px | 0 |
| Body | 16px | 400 | 24px | 0.15px |
| Body 2 / meta | 14px | 400 | 20px | 0.15px |
| Nav link | 15px | 600 | 1.5 | 0 |
| Eyebrow | 12px uppercase | 700 | 2.66 | 0.1em |
| Button | 14-16px | 600 | 24px | 0.15px |

### Rules

- Headlines use Title Case on the homepage ("Backing Ambitious Founders Since 2006"); keep it consistent within a page.
- Eyebrows are uppercase, green or black, 12px with 0.1em tracking: "ABOUT TECHSTARS", "OUR IMPACT", "THE ULTIMATE FOUNDER TOOLKIT".
- Buttons are sentence or title case, never uppercase (the MUI default uppercase is switched off on brand buttons).
- Stats use bold lining figures; keep units short ("$58B", "29").

## 4. Logo & Brand Mark

The logo is the lowercase **techstars** wordmark in a heavy grotesk, followed by a short horizontal bar sitting on the baseline in Techstars Green: `techstars_`. The header SVG is 160 x 37, black letters (`#000`) and a green bar (`rgba(57,196,99,1)`).

- **Color versions:** black with green bar on white (primary); white with green bar on black; all-white or all-black for one-color use.
- **Clear space:** the height of the "t" on all sides.
- **Minimum size:** 80px wide on screen (28px tall in the header).
- **Short form / avatar:** a lowercase "t" with the green underscore, on black.

Misuse:

- Do not capitalize the wordmark.
- Do not change the bar's color or drop it from the full logo.
- Do not animate the bar as a literal blinking cursor in the logo itself (fine as a separate UI accent).
- Do not set "techstars" in another font.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Size |
|---|---|---|---|---|---|
| Green pill (primary) | `#39C463` | `#000000` Suisse Semibold 16px | none | 999px | 48px tall, 32px side padding |
| Green pill small | `#39C463` | `#000` 14px | none | 9999px | 40px tall |
| Grey pill (secondary) | `#F7F7F7` | `#000` 16px | none or 1px `#B9B9C2` | 9999px | 48px / 40px tall, 32px sides |
| Header "Apply Today" | `#39C463` | `#000` 14px/500 | none | 4px | 6px 16px |
| Outlined | transparent | `#1F6F43` | 1px `rgba(31,111,67,0.5)` | 4px | 6px 16px (MUI) |
| Contained dark | `#000` | `#FFF` | none | 4px | MUI medium |
| Text link CTA | none | `rgba(0,0,0,0.6)` 14px/600, underlined | none | 0 | "Read More" |
| Icon button | `#39C463` | `#000` | none | 50% | 48 x 48 (carousel arrows) |

States:

- Green hover `#32AC57`, text stays black, no shadow. Header Apply hover also `#32AC57`.
- Grey hover and active `#B9B9C2`.
- Outlined hover: border `#1F6F43`, background `rgba(31,111,67,0.04)`.
- Focus: `outline: 2px solid #000; outline-offset: 2px` on buttons; `2px solid #39C463` with 4px offset on nav items.
- Disabled green icon buttons: same green at `opacity: 0.35`.
- Transitions: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)`.

```css
.ts-btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding-inline: 32px; border: 0; border-radius: 999px;
  background: #39C463; color: #000;
  font: 600 16px/24px "Suisse Intl", Inter, Helvetica, Arial, sans-serif;
  letter-spacing: 0.15px; white-space: nowrap;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.ts-btn:hover { background: #32AC57; }
.ts-btn--grey { background: #F7F7F7; }
.ts-btn--grey:hover { background: #B9B9C2; }
```

### Navigation (signature underline)

- Sticky white header (`position: sticky; top: 0; z-index: 1100`), content max width 1440px.
- Logo left at 28px tall. Center/left nav: "Join Us", "Portfolio", "Locations", "I Am...", "Resources", "About Techstars", each 15px/600 `rgba(0,0,0,0.87)` with a small down chevron.
- Hover: a 2px green bar grows from the center under the label (`transform: scaleX(0)` to `scaleX(0.5)`, 200ms ease). This echoes the logo's underscore.
- Right: "Apply Today" green button.
- Mega menus open on click as white panels.

### Stat tiles

- 2 x 2 grid, 16px gap, `grid-auto-rows: 1fr`.
- Each tile: `#39C463` fill, 12px radius, 24px padding, `aspect-ratio: 6/5`, content centered.
- Number: 30-56px bold black, tracking -0.02em. Label below: 14-16px black.

### Portfolio cards (signature)

On `/portfolio` (Unicorn Registry and search):

- Grid: 1 / 2 / 3 columns, 16px gap.
- Card: white, 1px `rgba(0,0,0,0.12)` border, 8px radius, overflow hidden, full height. Hover: border turns `rgba(0,0,0,0.87)` (120ms). No lift.
- Header strip: `#F5F5F5`, 56px min height, 20px side padding; company logo left (max 32px tall), status chip right ("Private", "Public", "Acquired").
- Body: 20px padding. Company name 24px/700, class year caption 12px `rgba(0,0,0,0.6)` ("2015"), description 14px `rgba(0,0,0,0.6)` with 12px top margin.
- Footer: sector chips (outlined small chips, 13px, e.g. "Finance", "Health", "Critical Infrastructure").

### Chips

MUI chips: 32px tall (24px small), 16px radius, 13px Suisse Regular, fill `rgba(0,0,0,0.08)` or 1px outlined; small padding 7-8px. Chip icons `#616161` or green.

### Image cards

Sector and program cards: photo fills the card (radius 8px, or 0 in carousels), overlay `linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)`, title 24px/700 white at bottom-left with 16-20px padding.

### Tabs

Pill tabs: unselected outlined, selected `background: #39C463; color: #000; border-color: #39C463`.

### Inputs

MUI outlined text fields: 4px radius, 1px `rgba(0,0,0,0.23)` border, focus 2px `#1F6F43`, label floats. Search inputs on Portfolio use a large rounded field with a search icon.

### News list items

Category label (green or grey eyebrow) and date ("16 November 2026"), 22px bold title, then underlined "Read More" in 14px/600 grey that turns green on hover.

## 6. Layout & Spacing

- **Spacing:** MUI 8px base; common values 8, 16, 24, 32, 48, 64px; stacks use 8px (text) and 32px (hero blocks) gaps.
- **Content width:** nav and sections cap at 1440px; text sections at about 1200px.
- **Gutters:** 16px mobile, 24px tablet, 32-48px desktop.
- **Breakpoints:** MUI defaults 600, 900, 1200, 1536px.
- **Section spacing:** 64-96px desktop, 48px mobile. White sections alternate with `#F5F5F5` and occasional black blocks.
- **Hero:** left-aligned headline, sub-line in 20px semibold, two pills side by side ("Apply Today" green, "Review $220K Investment Terms" grey), then a thin stat ticker ("29 UNICORNS & COUNTING") in a white band with a bottom border.

## 7. Depth, Elevation & Motion

- Mostly flat with borders. Cards use 1px borders and change border color on hover.
- Soft card shadow where used: `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)`.
- Menus and dialogs use MUI elevation 8: `0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12)`.
- Motion: MUI standard easing `cubic-bezier(0.4, 0, 0.2, 1)`; 250ms for buttons, 200ms for nav underline and link color, 300ms for paper shadows, 120ms for card border. Text-highlight effect: green background that wipes in from 0% to 100% width (`background-size` animation).
- Logo carousels scroll horizontally on a slow loop.

## 8. Iconography & Imagery

- **Icons:** Material Icons (filled, 24px) for UI: chevrons, social logos, arrows. Arrow icon buttons are green circles with black arrows.
- **Photography:** real founders and mentors, event photos, cohort shots, city skylines for location pages. Natural color, often full-bleed in cards with dark bottom gradients.
- **World map:** a dotted world map graphic (`/block-assets/world-map.svg`) illustrates the global network.
- **Mentor portraits:** square or rounded photos in carousels with name and company under each.
- No 3D illustration; graphic accents are the green underscore and green blocks.

## 9. Voice & Microcopy

Upbeat, direct, founder-focused. Short claims backed by numbers. Uses "founders", "network", "mentors", "do more faster".

- Title Case headlines on marketing pages, sentence case in body.
- CTAs: "Apply Today", "Learn more", "Read More", "Become a Mentor", "View all News", "Search Portfolio".

Sample strings (seen on techstars.com on 2026-11-16):

- Hero: "In a World of Noise, the Right Network Is Everything."
- Sub: "We find and fund the world's most ambitious founders."
- Secondary CTA: "Review $220K Investment Terms"
- Eyebrows: "ABOUT TECHSTARS", "OUR IMPACT", "THE ULTIMATE FOUNDER TOOLKIT"
- Stats: "29 Unicorns and Counting", "$58B Capital Raised", "$330B Combined Market Cap"
- Card status: "Private", "Public", "Acquired"

## 10. Do's and Don'ts

**Do**

- Use white and light grey surfaces with black text and one bright green.
- Put black text on green buttons; make primary buttons full pills.
- Use the green underscore as a recurring accent (nav hover, dividers, after headings).
- Set headlines big and bold with tight tracking.
- Show numbers on solid green tiles.
- Keep cards simple: 1px border, 8px radius, border darkens on hover.

**Don't**

- Don't put white text on the bright green; contrast is too low.
- Don't use the deep forest greens as large backgrounds; they are for links and hovers.
- Don't add gradients other than the dark photo overlay.
- Don't uppercase button labels.
- Don't capitalize or restyle the wordmark.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Techstars (techstars.com). White and `#F5F5F5` surfaces, black `#000000` headings, body text `rgba(0,0,0,0.87)`, secondary `rgba(0,0,0,0.6)`. Font: `"Suisse Intl", Inter, Helvetica, Arial, sans-serif`. Hero headline bold 700, up to 90px, line-height 1.16, slight negative tracking. Primary buttons are bright green `#39C463` pills (radius 999px, 48px tall, 32px side padding) with black 16px semibold text, hover `#32AC57`; secondary pills are `#F7F7F7`, hover `#B9B9C2`. Sticky white header with a lowercase "techstars" wordmark that ends in a green underscore; nav labels 15px/600 with a 2px green underline that grows from the center on hover. Show stats on green tiles (12px radius, 6:5 aspect, bold black numbers). Portfolio cards: white, 1px `rgba(0,0,0,0.12)` border, 8px radius, a `#F5F5F5` header strip with the logo and a status chip, 24px bold name, 14px grey description, sector chips at the bottom; on hover only the border darkens. Eyebrows are 12px uppercase bold with 0.1em tracking in green. Use MUI-style easing `cubic-bezier(0.4,0,0.2,1)` at 200-250ms.

```css
:root {
  --brand-green: #39C463;
  --brand-green-hover: #32AC57;
  --brand-forest: #1F6F43;
  --brand-forest-dark: #0F4D2C;
  --brand-black: #000000;
  --brand-charcoal: #1A1A1A;
  --brand-white: #FFFFFF;
  --brand-fog: #F5F5F5;
  --brand-button-grey: #F7F7F7;
  --brand-button-grey-hover: #B9B9C2;
  --brand-text: rgba(0, 0, 0, 0.87);
  --brand-text-secondary: rgba(0, 0, 0, 0.6);
  --brand-divider: rgba(0, 0, 0, 0.12);
  --brand-chip: rgba(0, 0, 0, 0.08);
  --brand-font: "Suisse Intl", "Inter", Helvetica, Arial, sans-serif;
  --brand-font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-pill: 999px;
  --brand-shadow-card: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
  --brand-shadow-menu: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-duration: 250ms;
  --brand-max: 1440px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Techstars.
