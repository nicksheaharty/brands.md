---
name: Lemonade
slug: lemonade
url: https://lemonade.com
category: Insurance
tagline: "Hot pink on clean white, a script L logo, friendly Lato type and soft floating cards."
updated: 2026-11-16
appStoreId: 1055653645
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Lemonade Pink
    hex: "#FF0083"
    role: Logo, primary buttons, links, focus border, selection
  - name: Pink Hover
    hex: "#DC0073"
    role: Button hover
  - name: Pink Pressed
    hex: "#B40060"
    role: Button active, pressed link
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Night
    hex: "#4A4A4A"
    role: Primary text, header logo colour
  - name: Darker Night
    hex: "#282828"
    role: Inverted background, footer
  - name: Light Pink
    hex: "#FFE4F2"
    role: Badges, highlight chips
  - name: Cupid
    hex: "#FFB4DA"
    role: Disabled pink button
  - name: Cloud
    hex: "#F7F7F7"
    role: Secondary background
  - name: Glass
    hex: "#ECECEC"
    role: Borders and dividers
  - name: Boulder
    hex: "#7B7B7B"
    role: Secondary text
  - name: Metal
    hex: "#B7B7B7"
    role: Disabled and inverted secondary text
  - name: Positive
    hex: "#2AD5BD"
    role: Success, positive amounts
  - name: Negative
    hex: "#F7274A"
    role: Errors
  - name: Pending
    hex: "#FFB01C"
    role: Pending status
  - name: Blue
    hex: "#2A76E4"
    role: Info accent
fonts:
  display:
    family: "Lato"
    fallback: "Lato"
    weights: [300, 400, 700, 900]
  body:
    family: "Lato"
    fallback: "Lato"
    weights: [400, 700]
typeScale:
  - { role: Hero, size: 72, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: H1, size: 48, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 44, weight: 700, lineHeight: 1.27, tracking: "0" }
  - { role: H3, size: 28, weight: 700, lineHeight: 1.29, tracking: "0" }
  - { role: Quote, size: 28, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Lead, size: 18, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Button, size: 14, weight: 700, lineHeight: 1.3, tracking: "0" }
radii: { sm: 5, md: 10, lg: 20, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60, 80, 120]
shadows:
  - { name: Pink button, value: "0 10px 40px -10px rgba(255,0,131,0.5)" }
  - { name: Product card, value: "0 10px 46px -10px rgba(0,0,0,0.16)" }
  - { name: Card hover, value: "0 14px 46px -10px rgba(0,0,0,0.22)" }
  - { name: Testimonial, value: "0 1px 8px 0 rgba(0,0,0,0.06), 0 31px 30px -18px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#4A4A4A"
  muted: "#7B7B7B"
  border: "#ECECEC"
  accent: "#FF0083"
  accentText: "#FFFFFF"
  radius: 5
  buttonStyle: solid
---

# Lemonade

## 1. Visual Theme & Atmosphere

Lemonade looks like a consumer app that happens to sell insurance. The site is bright white with soft grey text, one loud hot pink (`#FF0083`), lots of space and a handful of floating white cards. The logo is a handwritten script and the app icon is just its pink "L". Personality comes from the pink, line illustrations and short, cheeky copy rather than from heavy layout.

What makes it recognisable:

- **One hot pink.** `#FF0083` drives the logo, every primary button, links, focus borders and text selection. Nothing else on the page competes with it.
- **Glowing pink buttons.** The primary button is pink with uppercase bold text and a soft pink glow underneath (`0 10px 40px -10px rgba(255,0,131,.5)`).
- **Soft grey, not black.** Body and headings use `#4A4A4A`; secondary text `#7B7B7B`. The page never feels harsh.
- **Floating white cards.** Product pickers (Renters, Homeowners, Car, Pet, Term Life) are small rounded cards (20px radius) with large, diffuse shadows and a line illustration.
- **Script logo, sans everywhere else.** The wordmark is a custom brush script; all UI text is Lato, with Merriweather reserved for quotes.
- **Social proof as a wall.** Tweet-style testimonial cards scroll in rows, each a white card with an avatar, handle and short quote.

Density is low. Hero sections are centred with one headline, one line of support and one button.

Mood words: playful, modern, friendly, light, confident.

## 2. Color Palette & Roles

Lemonade's CSS ships semantic tokens; hex values below are from them.

| Name | Token | Hex | Role |
|---|---|---|---|
| Lemonade Pink | `--background-pink-color` | `#FF0083` | Primary button, links, focus, selection |
| Pink Hover | `--background-pink-hover-color` | `#DC0073` | Button hover |
| Pink Pressed | `--background-pink-pressed-color` | `#B40060` | Active button, pressed link |
| Pink Disabled | `--background-pink-disabled-color` | `#FFB4DA` | Disabled primary button |
| Pink Lighter | `--background-pink-lighter-color` | `#FFF7FB` | Very light pink panel |
| Light Pink | `--light-pink-color` | `#FFE4F2` | Badges ("New"), chips |
| White | `--background-primary-color` | `#FFFFFF` | Page |
| Cloud | `--background-secondary-color` | `#F7F7F7` | Secondary sections |
| Glass | `--border-primary-color` | `#ECECEC` | Card and input borders |
| Light | `--border-hover-color` | `#DADADA` | Hover borders, disabled fill |
| Night | `--text-primary-color` | `#4A4A4A` | Primary text, header logo |
| Boulder | `--text-secondary-color` | `#7B7B7B` | Secondary text |
| Metal | `--text-disabled-color` | `#B7B7B7` | Disabled text |
| Darker Night | `--inverted-background-primary-color` | `#282828` | Dark sections, footer |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Positive | `#2AD5BD` (dark `#27C7B0`, darker `#24B8A3`) | Success, claim paid |
| Negative | `#F7274A` | Errors, negative text |
| Pending | `#FFB01C` | Pending status |
| Info | `#2A76E4` | Informational accents |

### Dark sections

No global dark mode. Dark bands and the footer use `#282828` or `#202020` with white text and `#B7B7B7` secondary text; the pink stays the same.

## 3. Typography

**Family:** Lato for everything in the UI (`--main-font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif`). Merriweather (`--alt-font-family`) for testimonial quotes and some editorial pull quotes. The logo is custom lettering, not a font.

**Licensing:** Lato and Merriweather are both free on Google Fonts, so the site can be matched exactly.

**Root size:** `html { font-size: 62.5% }` style; `--main-font-size: 1.6rem` is 16px.

### Scale (desktop; from production CSS, weights partly approximate)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 72px (48px mobile) | 700 (approximate) | 1.1 | 0 |
| H1 | 48px | 700 | 1.2 | 0 |
| H2 | 44px | 700 | 56px | 0 |
| H3 | 28px | 700 | 36px | 0 |
| Quote (Merriweather) | 28px | 400 | 36px | 0 |
| Lead | 18px | 400 | 1.4 | 0 |
| Body | 16px | 400 | 1.3 | 0 |
| Small | 14px | 400 | 1.3 | 0 |
| Button | 14px | 700 uppercase | 1.3 | 0 |

### Rules

- Headlines are short and balanced (`text-wrap: balance`), usually centred.
- Buttons are uppercase bold; everything else is sentence case.
- Pink can colour a single word or link in a headline, never a whole paragraph.

## 4. Logo & Brand Mark

- **Wordmark:** "Lemonade" in a custom connected script with a tall looping capital L. It is drawn as one continuous stroke shape.
- **Monogram:** the script "L" alone, in pink on white, used as the app icon and avatar.
- **Colours:** Lemonade Pink `#FF0083` is the brand colour of the mark; the site header renders the wordmark in Night `#4A4A4A`. White on pink for reversed use.
- **Clear space:** at least the height of the lowercase letters on all sides (approximate).
- **Minimum size:** about 80px wide for the wordmark, 24px for the L (approximate).
- **Misuse:** don't retype the name in a script font, add outlines or gradients, or use colours other than pink, grey or white.

## 5. Components

### Buttons

```css
.button-primary {
  background: #FF0083;
  color: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 5px;
  font: 700 14px/1.3 "Lato", sans-serif;
  text-transform: uppercase;
  padding: 15px 30px;
  box-shadow: 0 10px 40px -10px rgba(255,0,131,0.5);
  transition: all .3s, transform .5s;
}
.button-primary:hover { background: #DC0073; }
.button-primary:active,
.button-primary:focus-visible { background: #B40060; transform: translateY(1px); }
.button-primary:disabled { background: #FFB4DA; box-shadow: none; }

.button-secondary {
  background: #FFFFFF;
  color: #FF0083;
  border: 1px solid #FF0083;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
}
.button-secondary:hover { background: #FFD1E8; }

.button-dark { background: #202020; color: #FFFFFF; border-radius: 8px; padding: 0 20px; }
```

Main CTAs read "Check our Prices" or "Check our prices". On mobile they go full width.

### Product cards (signature)

```css
.product-card {
  width: 162px;
  min-height: 200px;
  background: #FFFFFF;
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: 0 10px 46px -10px rgba(0,0,0,0.16);
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}
.product-card:hover {
  border-color: #FF0083;
  box-shadow: 0 14px 46px -10px rgba(0,0,0,0.22);
  transform: translateY(-2px); /* approximate */
}
```

Each card: a centred line illustration (grey and pink strokes), the product name in bold 16px, and a price hint in 14px grey ("From $5/mo", read on the site on 2026-11-16). A small light-pink badge with pink 900-weight uppercase text can mark "NEW".

### Testimonial cards

White, 338px wide, 10px radius, padding 20px, shadow `0 1px 8px rgba(0,0,0,.06), 0 31px 30px -18px rgba(0,0,0,.16)`. Avatar circle, name in bold, handle in grey, quote in 16px Night with `@Lemonade_Inc` in pink.

### Inputs

```css
.input {
  height: 50px;
  border: 1px solid #ECECEC;
  border-radius: 5px;
  padding: 0 15px;
  font: 400 16px "Lato", sans-serif;
  color: #4A4A4A;
}
.input:hover { border-color: #DADADA; }
.input:focus { border-color: #FF0083; box-shadow: 0 0 0 1px #FF0083 inset; outline: none; }
.checkbox:checked { background: #FF0083; border-color: #FF0083; }
```

### Chat-style flows

Lemonade's quote and claim flows are conversational: a bot avatar ("Maya" for quotes, "Jim" for claims) asks one question per screen, the user answers with large pill-like choice buttons or a single input. Progress is a thin pink bar at the top (approximate).

### Navigation

White header, logo left (grey script), product links ("Renters", "Homeowners", "Life", "Giveback") in 14px Night, "My Account" on the right. Mobile: hamburger with a full-screen white menu. Skip link is a pink box with white text.

### Footer

Dark `#282828` background, white headings, `#B7B7B7` links in 14px, app store badges, and long legal copy in small grey text.

## 6. Layout & Spacing

- **Max widths:** 1246px outer container; text blocks 600-800px; some sections 990-1100px.
- **Breakpoints (from CSS):** 768px (tablet), 1025px (desktop), 1250px and 1670px (wide).
- **Spacing:** multiples of 5 (5, 10, 15, 20, 30, 40, 60, 80, 120).
- **Layout:** centred heroes, product cards in a single row (wrap on mobile into a 2-column grid), testimonial rows that scroll horizontally.

## 7. Depth, Elevation & Motion

Soft, diffuse shadows with large blur and negative spread so cards look like they float.

| Token | Value | Use |
|---|---|---|
| Pink button | `0 10px 40px -10px rgba(255,0,131,0.5)` | Primary CTA |
| Product card | `0 10px 46px -10px rgba(0,0,0,0.16)` | Rest |
| Card hover | `0 14px 46px -10px rgba(0,0,0,0.22)` | Hover |
| Testimonial | `0 1px 8px 0 rgba(0,0,0,0.06), 0 31px 30px -18px rgba(0,0,0,0.16)` | Quote cards |

- **Durations:** .2s for colour and border, .25-.3s for transforms, .5s for button transforms.
- **Easing:** `ease` and `ease-in-out`.
- Buttons press down 1px on active. Illustrations can animate in gently (fade and rise).

## 8. Iconography & Imagery

- **Illustrations:** thin, single-weight line drawings (about 1.5px) in grey with pink accents: a house, a car, a dog, a couch. Minimal, playful, lots of white.
- **Icons:** simple line icons matching the illustrations, 24px.

## 9. Voice & Microcopy

Cheeky, short and confident. Lemonade positions itself against "old" insurance and writes like a friend, sometimes with a wink.

Sample strings (read on lemonade.com on 2026-11-16):

- Hero: "Forget everything you know about insurance"
- Sub: "Instant everything. Incredible prices. Big heart."
- CTA: "Check our Prices"
- Section: "The (Almost) 5 Star Insurance Company"
- Bundle: "Amazing savings when you bundle"
- Nav: "Renters", "Homeowners", "Life", "Giveback", "My Account"

## 10. Do's and Don'ts

**Do**

- Use one hot pink `#FF0083` for every action and keep the rest grey and white.
- Use uppercase bold buttons with a pink glow.
- Use rounded, floating white cards with large soft shadows.
- Write short, warm, slightly playful copy.

**Don't**

- Don't add a second bright accent colour to compete with pink.
- Don't use hard, dark shadows or heavy borders.
- Don't set body copy in a script or serif.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Lemonade. Bright white page, text in soft grey `#4A4A4A` (secondary `#7B7B7B`, borders `#ECECEC`). Font: Lato everywhere; Merriweather only for testimonial quotes. Centred hero with a big bold Lato headline (48-72px), one short line of support and one primary button. The only accent is hot pink `#FF0083`: primary buttons are pink, white uppercase bold 14px text, 5px radius, 15px 30px padding, with a pink glow `0 10px 40px -10px rgba(255,0,131,0.5)`; hover `#DC0073`, active `#B40060` and 1px press. Show products as small white cards (162px wide, 20px radius, `0 10px 46px -10px rgba(0,0,0,0.16)` shadow) with thin grey-and-pink line illustrations; hover adds a pink border. Testimonial cards are white, 10px radius, with avatars and pink @mentions. Inputs are 50px tall, 5px radius, `#ECECEC` border, pink border on focus. Footer is `#282828` with grey links. Spacing in multiples of 5, max width 1246px. Copy is short, warm and a little cheeky.

```css
:root {
  --brand-pink: #FF0083;
  --brand-pink-hover: #DC0073;
  --brand-pink-pressed: #B40060;
  --brand-pink-disabled: #FFB4DA;
  --brand-pink-light: #FFE4F2;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F7;
  --brand-border: #ECECEC;
  --brand-text: #4A4A4A;
  --brand-text-secondary: #7B7B7B;
  --brand-dark: #282828;
  --brand-positive: #2AD5BD;
  --brand-negative: #F7274A;
  --brand-font: "Lato", "Helvetica Neue", Arial, sans-serif;
  --brand-font-alt: "Merriweather", Georgia, serif;
  --brand-radius-button: 5px;
  --brand-radius-card: 20px;
  --brand-shadow-button: 0 10px 40px -10px rgba(255,0,131,0.5);
  --brand-shadow-card: 0 10px 46px -10px rgba(0,0,0,0.16);
  --brand-shadow-card-hover: 0 14px 46px -10px rgba(0,0,0,0.22);
  --brand-max-width: 1246px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Lemonade.
