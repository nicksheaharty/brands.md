---
name: Nubank
slug: nubank
url: https://nubank.com.br
category: Banking
tagline: "Nu purple everywhere, the looping nu mark, Nu Sans type, pill buttons and soft cards."
updated: 2026-11-16
appStoreId: 814456780
logoBackground: "#8D0DE3"
theme: light
colors:
  - name: Nu Purple
    hex: "#8D0DE3"
    role: Core brand colour, primary buttons, hero panels, logo
  - name: Ultraviolet
    hex: "#1E002F"
    role: Darkest purple, primary text on light cards, Ultravioleta tier
  - name: White
    hex: "#FFFFFF"
    role: Page background, text and logo on purple
  - name: Classic Purple
    hex: "#820AD1"
    role: Long-standing Nu purple, still used in some markets and assets
  - name: Purple Shade
    hex: "#5D0599"
    role: Pressed states, dark purple sections
  - name: Purple Night
    hex: "#3F026A"
    role: Deep purple backgrounds and gradients
  - name: Lilac
    hex: "#AF63FD"
    role: Light accent, highlights on dark purple
  - name: Lavender
    hex: "#CBA5FD"
    role: Tints, illustration fills, spot purple
  - name: Mist Lilac
    hex: "#ECDFFF"
    role: Soft purple surface, chips, outline button text on purple
  - name: Sand
    hex: "#F3EFE6"
    role: Warm neutral section background
  - name: Almost Black
    hex: "#0D0D0D"
    role: Dark sections, body text
  - name: Stone
    hex: "#52525D"
    role: Secondary text
  - name: Off White
    hex: "#F4F4F5"
    role: Light grey surface
  - name: Feedback Red
    hex: "#FF4242"
    role: Errors
  - name: Feedback Green
    hex: "#4EE04B"
    role: Success
fonts:
  display:
    family: "Nu Sans Display"
    fallback: "Manrope"
    weights: [500, 600]
  body:
    family: "Nu Sans Text"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 64, weight: 500, lineHeight: 1.0, tracking: "-0.03em" }
  - { role: H1, size: 48, weight: 500, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: H2, size: 34, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: H3, size: 24, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 12, md: 24, lg: 32, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Floating, value: "0px 40px 40px 0px rgba(39,39,42,0.08)" }
  - { name: Tint, value: "0 4px 16px rgba(31,2,48,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F3EFE6"
  text: "#1E002F"
  muted: "#52525D"
  border: "#E4E4E4"
  accent: "#8D0DE3"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Nubank

## 1. Visual Theme & Atmosphere

Nubank is a Brazilian digital bank, and purple is its whole identity. People call the card "o roxinho" ("the little purple one"). The site at nubank.com.br is built on a Chakra-based design system whose tokens were read for this file, and it carries the look of the brand refresh Nubank wrote about on its blog: a brighter core purple, the soft, looping "nu" logotype, and a warm sand neutral to balance the purple.

What makes it recognisable:

- **Purple as a surface.** Hero bands, cards and full sections are filled with Nu Purple (`#8D0DE3`) with white text. Unlike most banks, Nubank is happy to paint whole screens purple.
- **Tiers as colour themes.** The same components switch palettes for product tiers: core purple for Nubank, near-black ultraviolet (`#1E002F`) for Nubank Ultravioleta, a muted plum (`#714F8F`) for Nu Empresas (business). The page tokens are literally namespaced `brand-core`, `brand-uv` and `brand-pj`.
- **Soft, round geometry.** Pill buttons (`radii-full: 999px`), 16px card corners, 24-32px corners on large panels. The "nu" mark itself is two arches that overlap.
- **Warm neutrals.** Sand (`#F3EFE6`) and off-white (`#F4F4F5`) sections sit between purple ones so the page doesn't feel like one long purple wall.
- **Big, friendly type.** Nu Sans Display headlines up to 64-72px at medium weight, with tight tracking; body copy in Nu Sans Text.

Mood words: friendly, bold, modern, uncomplicated, Brazilian.

## 2. Color Palette & Roles

Values read from nubank.com.br design tokens on 2026-11-16.

### Core brand (`brand-core`)

| Name | Token | Hex | Role |
|---|---|---|---|
| Nu Purple | `P` | `#8D0DE3` | Primary buttons, purple sections, logo |
| Purple Shade | `S1` | `#5D0599` | Pressed and dark purple |
| Purple Night | `S2` | `#3F026A` | Deepest core purple, gradients |
| Lilac | `T1` | `#AF63FD` | Light accent on dark purple |
| Lavender | `T2` | `#CBA5FD` | Tints, illustration |
| Pale Lavender | `T3` | `#D6B9FE` | Pressed label on purple |
| Mist Lilac | `T4` | `#ECDFFF` | Soft surface, outline button text on purple |

### Other brand themes

| Theme | Primary | Notes |
|---|---|---|
| Classic (`brand-co`) | `#820AD1` | The long-standing Nu purple; shades `#5A0894`, `#3A0564`, tints `#A040E0`, `#C07AF0` |
| Ultravioleta (`brand-uv`) | `#1E002F` | Premium tier; near-black purple with `#0B0019` darkest |
| Nu Empresas (`brand-pj`) | `#714F8F` | Business; shades `#652590`, `#320851` |

### Neutrals

| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | Page background |
| Off White | `#F4F4F5` | Light surface |
| Sand | `#F3EFE6` | Warm section background |
| Platinum | `#E4E4E4` | Borders, dividers |
| Almost White | `#D4D4D8` | Secondary text on dark |
| Light Gray | `#AEAEB9` | Disabled text |
| Mid Gray | `#8F8F9A` | Placeholders |
| Stone | `#52525D` | Secondary text |
| Dark Gray | `#27272A` | Dark surfaces |
| Almost Black | `#0D0D0D` | Dark sections, body text on light |

### Feedback

| State | Strong | Subtle |
|---|---|---|
| Error | `#FF4242` | `#FFF4F4` |
| Success | `#4EE04B` | `#F1FDF1` |
| Warning | `#FFD80E` | `#FEFBEB` |
| Info | `#0968F6` | `#E6F2FF` |

### Dark mode

The website alternates light and dark (purple or almost-black) sections rather than offering a theme switch. The Nu app supports system dark mode with near-black surfaces and the same purple accents.

## 3. Typography

- **Brand fonts:** Nu Sans, a proprietary family in two optical cuts: `nuSansDisplay` for headlines and `nuSansText` for body. Graphik (Regular and Medium) remains loaded for some legacy modules.
- **Fallbacks:** `Manrope` for display and `Inter` for text are the closest Google Fonts. Stacks: `"Nu Sans Display", Manrope, Arial, sans-serif` and `"Nu Sans Text", Inter, Arial, sans-serif`.
- **Weights:** tokens define 400, 500, 600 and 700. Headlines use 500 (sometimes 600); body uses 400 with 500 for emphasis.
- **Fluid sizes:** body uses `clamp(16px, 12.44px + 0.46vw, 18px)`, subheads `clamp(24px, 16.87px + 0.93vw, 28px)` and section titles `clamp(28px, -8.18px + 3.02vw, 34px)`.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero | 64-72px | 500 | 1.0 | -0.03em |
| H1 | 48px | 500 | 1.1 | -0.02em |
| H2 | 28-34px | 500 | 1.2 | -0.01em |
| H3 | 24px | 500 | 1.3 | 0 |
| Body Large | 18-20px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Caption | 14px | 400 | 1.4 | 0 |

Tracking values are approximate.

Rules:

- Sentence case everywhere, Portuguese first ("Abra sua conta Nubank").
- Use the Brazilian real format (R$ 1.234,56) with tabular figures in the app.
- Headlines are short and often set in two lines with a hard break.

## 4. Logo & Brand Mark

- **Construction:** lowercase "nu" drawn as two thick arches: an "n" whose right leg flows into a "u" that overlaps it at the baseline. All curves, no corners, one colour.
- **Colour versions:** white on Nu Purple (the most common, header and app icon); Nu Purple on white; white on Ultraviolet for the premium tier.
- **App icon:** white "nu" centred on a purple square.
- **Clear space:** at least the width of one arch's stroke on every side (approximate).
- **Minimum size:** about 24px wide on screen (approximate).
- **Misuse:** do not set "nu" in a font, outline it, add gradients, or recolour it outside the brand purples, white and black.

## 5. Components

### Buttons

Primary buttons are pills. Fill and label come from tokens like `--colors-content-button-primary-enabledFill: var(--colors-brand-core-P)`.

```css
.nu-button {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px;                      /* approximate */
  padding: 0 24px;
  border-radius: 999px;              /* --radii-full */
  font: 500 16px/1 "Nu Sans Text", Inter, sans-serif;
  background: #8D0DE3;
  color: #FFFFFF;
  border: none;
  transition: all .2s ease-in-out;
}
.nu-button:hover  { background: #5D0599; }
.nu-button:disabled { background: rgba(141,13,227,.2); color: rgba(141,13,227,.2); }

/* On a purple section: white button with purple label */
.on-purple .nu-button { background: #FFFFFF; color: #8D0DE3; }

/* Negative (outline) button on purple */
.nu-button--negative {
  background: transparent;
  color: #ECDFFF;
  box-shadow: inset 0 0 0 1px #ECDFFF;
}
.nu-button--negative:hover { background: rgba(255,255,255,.2); }
```

Icon buttons (arrows, play) are 44px circles with the same fills.

### Header

- Transparent or white bar with the "nu" logo left, tabs "Para você", "Para seu negócio", "Segurança", "Saiba Mais", and on the right "Login Empresas" (text) plus a purple pill "Quero ser Nubank".
- Mobile: logo, CTA pill and a menu icon.

### Sign-up hero (signature)

- A large headline on a purple or photographic background, and a compact form: one CPF input ("Digite seu CPF") and a "Continuar" pill.

```css
.cpf-input {
  height: 56px;
  padding: 0 20px;
  border-radius: 999px;
  border: none;
  background: #FFFFFF;
  font: 400 16px "Nu Sans Text", Inter, sans-serif;
  color: #1E002F;
}
.cpf-input:focus { box-shadow: inset 0 0 0 2px #8D0DE3; }
```

### Product cards

- Large rounded cards (`--radii-card: 16px`; 24-32px on big panels), each themed to its product: purple for Nubank, ultraviolet for Ultravioleta, plum for Nu Empresas, sand or white for features.
- Card text uses `--colors-content-card-text: #1E002F` on light cards and white on dark ones; a pill button or circular arrow sits bottom left.
- Hover keeps the card still and swaps the button fill.

### Feature tiles

- "Caixinhas", "Conta", "Empréstimos", "E muito mais": short title, one-line description and a "Conheça" link, on sand or off-white with 16px corners.

### Blog and news strip

- Horizontal carousel of image cards ("Leia aqui") with 16px corners, a small "Nubank" label and a two-line headline.

### Inputs

- Pill or 12px-radius fields, 48-56px tall, `#E4E4E4` border or no border on purple backgrounds, 2px purple inset ring on focus. Errors in `#FF4242` with a `#FFF4F4` background.

## 6. Layout & Spacing

- **Space tokens:** `x1` = 4px through `x75` = 300px, so spacing is a 4px grid. Common steps: 8, 16, 24, 32, 48, 64, 96px.
- **Container:** about 1280-1440px max width with 24px gutters on desktop, 16-20px side padding on mobile (approximate).
- **Sections:** full-bleed colour bands with 64-120px vertical padding.
- **Grid:** 12 columns desktop; product cards 3-4 across, stacked on mobile.
- **Density:** low to medium; big type and plenty of space.

## 7. Depth, Elevation & Motion

- Mostly flat colour blocks. Floating elements use a long, faint shadow `0 40px 40px 0 rgba(39,39,42,.08)`; purple-tinted shadows use `rgba(31,2,48,.04)` and `rgba(31,2,48,.08)`.
- Outlines are inset box-shadows (`inset 0 0 0 1px`, `inset 0 0 0 2px`) rather than borders.
- Transitions: `all .2s ease-in-out` for buttons, `all ease-out .15s` for small UI, `opacity 1.6s ease-in-out` for hero image crossfades, `.65s ease` for carousels.

## 8. Iconography & Imagery

- **Icons:** a custom `nubankIcons` font: rounded line icons, consistent 2px-feel stroke, white on purple or purple on light.
- **Photography:** real Brazilians in everyday scenes, warm and candid, frequently with a purple card or phone in shot. Photos sit inside rounded corners.
- **Card renders:** the purple card (and the black Ultravioleta card) appear as hero objects.
- **Illustration:** soft, rounded 3D-style and flat illustrations in lavender, lilac and purple for app features.

## 9. Voice & Microcopy

- Casual Brazilian Portuguese, short and warm, often second person and a little playful.
- Sentence case. Avoids bank jargon.

Sample strings (from nubank.com.br on 2026-11-16):

- Title: "Somos incansáveis pra você não precisar ser"
- Nav: "Para você", "Para seu negócio", "Segurança", "Quero ser Nubank"
- Sign-up: "Abra sua conta Nubank", "Digite seu CPF", "Continuar"
- Products: "Caixinhas: dinheiro seguro e rendimento diário", "Controle total da sua vida financeira"
- Links: "Conheça", "Leia aqui"

## 10. Do's and Don'ts

**Do**

- Use Nu Purple `#8D0DE3` boldly: full sections, cards and pill buttons.
- Alternate purple sections with white and sand `#F3EFE6`.
- Make every button a pill; use 16px corners on cards.
- Use dark ultraviolet `#1E002F` for text on light cards instead of pure black.
- Keep headlines short, medium weight and tightly tracked.

**Don't**

- Don't use sharp corners or square buttons.
- Don't add a second strong brand colour; tiers are shades of purple or plum.
- Don't put purple text on purple backgrounds; use white or Mist Lilac.
- Don't redraw the "nu" mark or type it in a font.
- Don't write stiff, formal banking copy.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Nubank (Brazil). Primary colour Nu Purple `#8D0DE3`, used boldly as full-bleed section backgrounds and pill buttons; pressed `#5D0599`; tints `#AF63FD`, `#CBA5FD`, `#ECDFFF`. Alternate purple sections with white and warm sand `#F3EFE6`. Text on light surfaces is ultraviolet `#1E002F` with secondary text `#52525D`; on purple it is white. Fonts: headlines `"Nu Sans Display", Manrope, sans-serif` at weight 500, 48-72px, tight negative tracking; body `"Nu Sans Text", Inter, sans-serif` 16-18px weight 400. Buttons are 48px pills (radius 999px), purple with white label, or white with purple label on purple sections; outline buttons use an inset 1px `#ECDFFF` ring. Cards have 16px corners (24-32px for big panels) and no borders. Header: white "nu" logo, tabs "Para você / Para seu negócio / Segurança", and a "Quero ser Nubank" pill. Hero has a CPF input pill and a "Continuar" button. Spacing on a 4px grid. Copy is casual Brazilian Portuguese.

```css
:root {
  --nu-purple: #8D0DE3;
  --nu-purple-shade: #5D0599;
  --nu-purple-night: #3F026A;
  --nu-lilac: #AF63FD;
  --nu-lavender: #CBA5FD;
  --nu-mist-lilac: #ECDFFF;
  --nu-classic: #820AD1;
  --nu-ultraviolet: #1E002F;
  --nu-empresas: #714F8F;
  --nu-sand: #F3EFE6;
  --nu-off-white: #F4F4F5;
  --nu-platinum: #E4E4E4;
  --nu-stone: #52525D;
  --nu-almost-black: #0D0D0D;
  --nu-white: #FFFFFF;
  --nu-error: #FF4242;
  --nu-success: #4EE04B;
  --nu-warning: #FFD80E;
  --nu-info: #0968F6;
  --nu-font-display: "Nu Sans Display", "Manrope", Arial, sans-serif;
  --nu-font-text: "Nu Sans Text", "Inter", Arial, sans-serif;
  --nu-radius-sm: 12px;
  --nu-radius-card: 16px;
  --nu-radius-md: 24px;
  --nu-radius-lg: 32px;
  --nu-radius-full: 999px;
  --nu-shadow-floating: 0 40px 40px 0 rgba(39,39,42,0.08);
}
```

---

Values are observed from the public product; this file is an unofficial reference and is not affiliated with or endorsed by Nubank or Nu Holdings.
