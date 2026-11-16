---
name: Chubb
slug: chubb
url: https://chubb.com
category: Insurance
tagline: "Black-and-white serif headlines, square black buttons and a purple hover accent."
updated: 2026-11-16
appStoreId: 1348381518
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, primary buttons, headings, footer background
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: Chubb Purple
    hex: "#6E27C5"
    role: Button hover and focus fill, link hover, active states
  - name: Violet
    hex: "#6526D9"
    role: Table header and data highlight accent
  - name: Charcoal
    hex: "#4B4E53"
    role: Secondary text, footer dividers
  - name: Light Grey
    hex: "#F4F4F4"
    role: Alternate section background
  - name: Border Grey
    hex: "#D7D7D7"
    role: Hairlines, card borders, input borders
  - name: Lilac
    hex: "#C1A8F0"
    role: Light purple tint for chips and illustration fills
  - name: Green
    hex: "#7ACB00"
    role: Card top-rule accent, success
  - name: Amber
    hex: "#FFB617"
    role: Card top-rule accent, warnings
  - name: Magenta
    hex: "#FF0198"
    role: Card top-rule accent
  - name: Turquoise
    hex: "#31CDDE"
    role: Card top-rule accent
  - name: Deep Blue
    hex: "#150F96"
    role: Card top-rule accent
  - name: Orange
    hex: "#FF6600"
    role: Card top-rule accent
  - name: Disabled
    hex: "#AFAFAF"
    role: Disabled button fill
fonts:
  display:
    family: "Publico Headline"
    fallback: "Libre Caslon Text"
    weights: [400]
  body:
    family: "Lato"
    fallback: "Lato"
    weights: [400, 700]
typeScale:
  - { role: H1, size: 62, weight: 400, lineHeight: 1.16, tracking: "0" }
  - { role: H2, size: 50, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 40, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: H4, size: 34, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: H5, size: 28, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Button, size: 16, weight: 700, lineHeight: 1.625, tracking: "0" }
radii: { sm: 0, md: 0, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80]
shadows:
  - { name: Card, value: "0 2px 6px 0 rgba(0,0,0,0.2)" }
  - { name: Sticky bar, value: "0 -10px 16px 0 rgba(0,0,0,0.06)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#000000"
  muted: "#4B4E53"
  border: "#D7D7D7"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Chubb

## 1. Visual Theme & Atmosphere

Chubb looks like a premium print publication. The site (chubb.com, built on Adobe AEM with a Bootstrap base) is almost entirely black and white: a white page, black serif headlines, black square buttons and a black footer. Colour shows up in two controlled ways: a single purple (`#6E27C5`) that appears on hover and focus, and a set of saturated accent colours used only as thin top rules on cards.

What makes it recognisable:

- **Serif headlines at regular weight.** Headings are set in Publico Headline at weight 400, large (50-62px on desktop) and never bold. It reads like a magazine or annual report, which suits a brand selling high-net-worth and commercial cover.
- **Square corners everywhere.** Buttons have `border-radius: 0`. Cards and hero panels are square. The only round shapes are play buttons and social icons.
- **Black first, purple on interaction.** The primary button is solid black. On hover it turns purple with a purple border. Secondary buttons are outlined in black and their text turns purple on hover.
- **The widely spaced wordmark.** The CHUBB logotype is a thin, extended sans with wide letter spacing, which contrasts with the serif headlines.
- **Photography with lots of white space.** Large photos of homes, cars, boats and art collections, with text blocks sitting beside them rather than over them.

Density is moderate. Sections are separated by generous white space (64-80px), the mega menu is dense with links, and product pages are long and text-heavy.

Mood words: assured, quiet, premium, editorial, global.

## 2. Color Palette & Roles

The core palette is black, white and one purple. Everything else is a supporting accent.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo, primary button fill, headings, footer |
| White | `#FFFFFF` | Page background, text on black |
| Chubb Purple | `#6E27C5` | Hover and focus fill for buttons, link hover, active tab |
| Violet | `#6526D9` | Table header and data accent (`--table-primary`) |
| Charcoal | `#4B4E53` | Secondary text, footer dividers |
| Light Grey | `#F4F4F4` | Alternate section and card background |
| Border Grey | `#D7D7D7` | Card outlines, input borders, hairlines |
| Disabled | `#AFAFAF` | Disabled button fill |
| Lilac | `#C1A8F0` | Light purple tint for chips, illustration fills |

### Card accent rules

Cards in a group share one accent colour, shown as a top border: green `#7ACB00`, orange `#FF6600`, amber `#FFB617`, deep blue `#150F96`, turquoise `#31CDDE` or magenta `#FF0198`. Pale tints (`#E5F5D6`, `#FFECCC`, `#D2F3F9`, `#FECDE7`) sit behind icons and badges.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#7ACB00` | Confirmation icons, positive status |
| Warning | `#FFB617` | Notices, pending status |
| Error | `#DC3545` | Form validation (Bootstrap default, approximate for Chubb usage) |
| Focus | `#6E27C5` | Focus ring and hover state |

### Dark sections

There is no dark mode. The footer and some full-bleed banners are solid black `#000000` with white text, white outlined buttons and `#4B4E53` dividers. The logo switches to the white version on black.

## 3. Typography

**Display:** Publico Headline (Commercial Type), loaded as `PublicoHeadline`. Used at weight 400 for all headings. There is also a `Chubb Publico App` cut for the app and `Chubb_Publico_Office` for documents, with Georgia as the fallback.

**Body:** Lato, regular 400 and bold 700. Buttons and links are Lato 700 at 16px.

**Licensing:** Publico is a commercial typeface licensed by Chubb. The closest free match is **Libre Caslon Text** (or Source Serif 4) at regular weight. Lato is free on Google Fonts.

```css
--font-display: "PublicoHeadline", "Libre Caslon Text", Georgia, serif;
--font-body: "Lato", "Helvetica Neue", Arial, sans-serif;
```

### Scale (desktop, from production CSS; mobile in brackets)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | 62px (50px) | 400 | 72px (60px) | 0 |
| H2 | 50px (40px) | 400 | 60px (46px) | 0 |
| H3 | 40px (34px) | 400 | 46px (40px) | 0 |
| H4 | 34px (26px) | 400 | 40px (30px) | 0 |
| H5 | 28px (20px) | 400 | 32px (24px) | 0 |
| Lead | 20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.6 (approximate) | 0 |
| Button | 16px | 700 | 26px | 0 |

### Rules

- Headlines are sentence case and never bold. The serif carries the authority.
- Body and UI text are Lato. Do not set paragraphs in Publico.
- Eyebrow labels above headlines are Lato 700, 14px, sometimes uppercase (approximate).

## 4. Logo & Brand Mark

The Chubb logo is a wordmark only: CHUBB in a wide, geometric sans with very generous letter spacing and a small registered mark at top right. The letters are drawn with thin, even strokes; the B forms are boxy with square inner counters. There is no separate symbol.

- **Colour versions:** black on white (the default, `chubb-logo-black`) and white on black (`chubb-logo-white.svg`, used in the footer and dark heroes). No purple or colour versions.
- **Clear space:** at least the height of the letters on all sides (approximate).
- **Minimum size:** about 80px wide on screen so the thin strokes stay visible (approximate).
- **App icon:** the white wordmark centred on a black square.
- **Misuse:** do not condense the spacing, add a symbol, outline it, set it in purple, or place it over busy photography without a solid panel.

## 5. Components

### Buttons

Square, black and bold. Every button is Lato 700 16px with 18px vertical and 40px horizontal padding.

```css
.btn-primary {
  background: #000000;
  color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 0;
  font: 700 16px/26px "Lato", sans-serif;
  padding: 18px 40px;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
.btn-primary:hover,
.btn-primary:focus { background: #6E27C5; border-color: #6E27C5; color: #FFFFFF; }
.btn-primary[disabled] { background: #AFAFAF; border-color: #AFAFAF; cursor: not-allowed; }

.btn-secondary {
  background: transparent;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 0;
  padding: 18px 40px;
}
.btn-secondary:hover { color: #6E27C5; border-color: #6E27C5; }

/* On black backgrounds */
.btn-inverse { background: #FFFFFF; color: #000000; }
.btn-inverse:hover { background: #6E27C5; color: #FFFFFF; }
```

- **Text link button:** Lato 700 16px, black, no background, with a right chevron. Hover turns it purple.

### Cards

```css
.cmp-card {
  background: #FFFFFF;
  border-top: 4px solid var(--accent, #000000); /* group accent, approximate width */
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
  border-radius: 0;
  padding: 32px 24px;
}
.cmp-card:hover .btn { background: #6E27C5; color: #FFFFFF; }
```

Inside: an optional line icon, a Publico H5 title, Lato body copy, and a text link or button at the bottom. Hovering the whole card triggers the purple state on its button. Cards in one row share an accent colour.

### Navigation

- **Utility bar:** a thin top strip with audience links ("For Individuals", "For Businesses", "For Agents & Brokers") and Login / Pay Bill links.
- **Main header:** white, black CHUBB logo left, primary items ("Individuals & Families", "Businesses", "Agents & Brokers", "Embedded Insurance") in Lato 700 16px, search icon right.
- **Mega menu:** full-width white panel with columns of links (Property, Auto, Valuables, Boats & Yachts, Pets, Travel), a "Quick Links" column, and a promo tile with image, headline and "Learn More" link.
- Active and hover nav links turn purple with a 2px underline (approximate).

### Forms

```css
.input {
  height: 48px;
  border: 1px solid #D7D7D7;
  border-radius: 0;
  padding: 12px 16px;
  font: 400 16px "Lato", sans-serif;
  color: #000000;
}
.input:focus { border-color: #6E27C5; outline: 2px solid #6E27C5; outline-offset: 0; }
.label { font: 700 14px "Lato", sans-serif; margin-bottom: 8px; display: block; }
```

Values approximate: the site inherits Bootstrap form controls and overrides corners to square.

### Hero

Split hero: large Publico H1 and a short Lato lead on the left, a full-height photograph on the right, one black primary button and one outlined secondary. On mobile the photo stacks above the text. Some heroes are a full-bleed photo with a white text panel.

### Tables

Comparison and coverage tables use a violet header row (`#6526D9`, white Lato 700 text), white rows with `#D7D7D7` hairlines, and no zebra striping (approximate).

### Accordions (FAQ)

Full-width rows separated by 1px `#D7D7D7` rules, question in Lato 700 18px, plus/minus icon on the right in black, purple when open.

### Footer

Solid black. White wordmark, three or four link columns in white Lato 14px, `#4B4E53` 1px vertical and horizontal dividers, round white social icons (black glyphs), and legal links separated by short white bars.

## 6. Layout & Spacing

- **Grid:** 12-column Bootstrap grid with 24px gutters.
- **Max width:** content containers top out around 1200px (`75pc`), with full-bleed photo bands.
- **Breakpoints (from CSS):** 768px (tablet), 1025px (desktop), 1440px (wide). Mobile is anything under 768px.
- **Section spacing:** 64-80px vertically on desktop, 40-48px on mobile (approximate).
- **Density:** text columns are narrow (about 560-640px), so paragraphs stay readable; card rows are 3 or 4 across on desktop.

## 7. Depth, Elevation & Motion

Mostly flat. Depth comes from photography and black panels rather than shadows.

| Token | Value | Use |
|---|---|---|
| Card | `0 2px 6px 0 rgba(0,0,0,0.2)` | Product and article cards |
| Sticky bar | `0 -10px 16px 0 rgba(0,0,0,0.06)` | Bottom sticky CTA bars |

- **Transitions:** `background-color .2s ease, color .2s ease, border-color .2s ease` for buttons; `opacity .4s ease` for fades.
- **Easing:** plain `ease` and `ease-in-out`. No bounces or springs.

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`icomoon`) with thin, single-weight line icons in black, around 1.5px stroke at 24px. Arrows and chevrons are simple and geometric.
- **Photography:** real, well-lit lifestyle and property images: homes, classic cars, yachts, art collections, business settings. Natural colour, nothing over-saturated, no heavy filters.

## 9. Voice & Microcopy

Formal, precise and calm. Chubb speaks to people who own valuable things and to businesses with complex risk. It avoids slang and jokes.

- Sentence case for headings and buttons.
- Short CTAs: "Learn More", "Find an Agent", "Report a Claim", "Login to Client Portal", "Download Report".

Sample strings (read on chubb.com on 2026-11-16):

- Nav: "Individuals & Families", "Businesses", "Agents & Brokers", "Embedded Insurance"
- Promo body: "Protect your ring with Chubb Valuable Articles insurance and get the peace of mind and financial security you need."
- Report: "Stay ahead of cyber threats with our free Cyber Claims Landscape Report."

## 10. Do's and Don'ts

**Do**

- Use Publico (or a close serif) at regular weight for all headlines.
- Keep buttons square and black, turning purple `#6E27C5` on hover.
- Use one accent colour per card group, as a top rule only.
- Put the white wordmark on solid black in the footer.

**Don't**

- Don't bold the serif headlines or set body copy in the serif.
- Don't round button corners or use pill shapes.
- Don't use purple as a large background fill; it is an interaction colour.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Chubb. White page, black text, a black footer. Headlines in Publico Headline (fallback "Libre Caslon Text", Georgia) at weight 400, large: H1 62px/72px, H2 50px/60px, H3 40px/46px, never bold. Body and UI in Lato 16px, buttons Lato 700 16px. Buttons are square (`border-radius: 0`), solid black with white text and 18px 40px padding; on hover they turn purple `#6E27C5` with a purple border. Secondary buttons are 1px black outlines whose text goes purple on hover. Cards are white, square, with `0 2px 6px rgba(0,0,0,0.2)` shadow and a 4px coloured top border chosen from green `#7ACB00`, amber `#FFB617`, turquoise `#31CDDE`, magenta `#FF0198` or deep blue `#150F96` (one colour per row). Borders and hairlines `#D7D7D7`, alternate sections `#F4F4F4`, secondary text `#4B4E53`. Use a 12-column grid, about 1200px max width, 64-80px section spacing, and large real photography beside text blocks. Transitions are 0.2s ease. Copy is formal, sentence case and short.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-purple: #6E27C5;
  --brand-charcoal: #4B4E53;
  --brand-surface: #F4F4F4;
  --brand-border: #D7D7D7;
  --brand-disabled: #AFAFAF;
  --brand-green: #7ACB00;
  --brand-amber: #FFB617;
  --brand-magenta: #FF0198;
  --brand-turquoise: #31CDDE;
  --brand-deep-blue: #150F96;
  --brand-font-display: "PublicoHeadline", "Libre Caslon Text", Georgia, serif;
  --brand-font-body: "Lato", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-button-padding: 18px 40px;
  --brand-shadow-card: 0 2px 6px 0 rgba(0,0,0,0.2);
  --brand-shadow-sticky: 0 -10px 16px 0 rgba(0,0,0,0.06);
  --brand-max-width: 1200px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Chubb.
