---
name: The New Yorker
shortName: New Yorker
slug: new-yorker
url: https://newyorker.com
category: News
tagline: "Irvin display type, Caslon body text, cartoons, covers and generous white space."
updated: 2026-11-16
appStoreId: 1081530898
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Text, headings, links, active surfaces
  - name: Rubric Red
    hex: "#DB3334"
    role: Rubrics (section labels), status cards, accents
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Logo Ink
    hex: "#121212"
    role: Masthead wordmark
  - name: Link Blue
    hex: "#0879BF"
    role: Status text, brand links in navigation
  - name: Cover Red
    hex: "#EA3226"
    role: App icon field, promotional red
  - name: Grey 666
    hex: "#666666"
    role: Image credits, subtle text, borders
  - name: Grey A2
    hex: "#A2A2A2"
    role: Tertiary text
  - name: Divider
    hex: "#E5E5E5"
    role: Dividers, input borders, subtle borders
  - name: Surface
    hex: "#F5F5F5"
    role: Placeholders, hover surfaces
  - name: Cream
    hex: "#F6F4EF"
    role: Warm panels for puzzles and promos (approximate role)
  - name: Error
    hex: "#AA1B19"
    role: Form errors
fonts:
  display:
    family: "TNY Irvin Heading Pro"
    fallback: "Playfair Display"
    weights: [400]
  body:
    family: "TNY Adobe Caslon Pro"
    fallback: "Libre Caslon Text"
    weights: [400, 700]
typeScale:
  - { role: Display large, size: 63, weight: 400, lineHeight: 1.0, tracking: "0" }
  - { role: Feature headline, size: 34, weight: 400, lineHeight: 1.13, tracking: "0" }
  - { role: Standard headline, size: 30, weight: 400, lineHeight: 1.07, tracking: "0" }
  - { role: Card headline, size: 22, weight: 400, lineHeight: 1.27, tracking: "0" }
  - { role: Body, size: 21, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Dek, size: 18, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Byline, size: 14, weight: 600, lineHeight: 1.14, tracking: "0" }
  - { role: Nav and UI, size: 12, weight: 500, lineHeight: 1.33, tracking: "-0.01em" }
radii: { sm: 0, md: 4, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Menu, value: "0 0 6px 0 rgba(0,0,0,0.15)" }
  - { name: Card, value: "0 2px 4px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  muted: "#666666"
  border: "#E5E5E5"
  accent: "#DB3334"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# The New Yorker

## 1. Visual Theme & Atmosphere

newyorker.com translates a print magazine to the web with very little decoration. Pages are white and black, set mostly in two typefaces with nearly a century of history at the magazine: Irvin for display and Adobe Caslon for reading. Cartoons, cover art and commissioned illustration provide most of the colour. The result is slow, roomy and literary, with long article pages and generous margins.

What makes it recognisable:

- **Irvin type.** The high-contrast, slightly quirky display letters of the masthead (named after the magazine's first art director, Rea Irvin) also set headlines and section names.
- **Caslon body at a large size.** Article text runs at 21px with 1.5 line spacing in Adobe Caslon, with italic decks.
- **Rubrics.** Small labels ("Annals of Technology", "The Political Scene", "Shouts & Murmurs") in red `#DB3334` above headlines.
- **Black and white with red accents.** Almost no UI colour beyond black, greys and the rubric red.
- **Art first.** Cartoons, covers and full-bleed illustrations sit at the centre of the homepage and articles.

Mood words: literary, cultured, witty, unhurried, classic.

## 2. Color Palette & Roles

Values below come from the design tokens (`--color-*`) served on newyorker.com on 2026-11-16; the cover red is sampled from the app icon.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | `--color-text`, headings, links, bylines, active card surfaces |
| Logo Ink | `#121212` | The masthead wordmark file |
| Rubric Red | `#DB3334` | `--color-text-rubric`, rubric card surfaces, status cards |
| Link Blue | `#0879BF` | `--color-text-status`, `--color-text-navigation-brand` |
| Cover Red | `#EA3226` | App icon field and promotional red |
| Error | `#AA1B19` | `--color-text-error`, `--color-border-error` |
| Grey 666 | `#666666` | `--color-text-image-credit`, `--color-border`, subtle text |
| Grey A2 | `#A2A2A2` | Tertiary text |
| Ad Grey | `#979797` | Ad labels |
| Divider | `#E5E5E5` | `--color-divider`, input borders |
| Surface | `#F5F5F5` | Placeholders and hover |
| Cream | `#F6F4EF` | Warm panels (approximate role) |
| White | `#FFFFFF` | Page |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Status / live | `#0879BF` text, or white on `#DB3334` | Status labels, "Live" cards |
| Error | `#AA1B19` | Form errors |
| Hover | `#F5F5F5` | Rows and menus |
| Focus | `0 0 3pt 2pt rgba(94,158,214,1)` | Keyboard focus ring seen in the CSS |

### Dark mode

The website is light. Some modules invert: a black surface with white text (`--color-surface-card-active: #000`, `--color-text-card-active: #FFF`). The app offers a dark reading mode with white text on near-black (approximate).

## 3. Typography

**Families** (from the site's token CSS):

- **TNY Irvin Heading Pro** (`IrvinHeadingPro`): headlines, section heads, numerals.
- **TNY Irvin Text** (`IrvinText`): small context labels.
- **TNY Adobe Caslon Pro** (`TNYAdobeCaslonPro`): body copy, decks (italic), card headlines, captions.
- **Graphik**: navigation, buttons, forms and utility text.
- **Neutraface New Yorker** (`NeutrafaceNewYorker`): bylines and accreditation, ad labels.

**Licensing:** Irvin and the TNY cuts are proprietary to Condé Nast; Adobe Caslon and Graphik are commercial. Substitutes: **Playfair Display** for Irvin headlines (approximate match), **Libre Caslon Text** for body, **Inter** for Graphik, **Josefin Sans** for Neutraface.

```css
--font-display: IrvinHeadingPro, "Playfair Display", "Helvetica Neue", serif;
--font-body: TNYAdobeCaslonPro, "Libre Caslon Text", "Times New Roman", serif;
--font-ui: Graphik, "Inter", "Helvetica Neue", Arial, sans-serif;
--font-byline: NeutrafaceNewYorker, "Josefin Sans", "Helvetica Neue", sans-serif;
```

### Scale (from tokens)

| Token | Family | Size / line | Weight / style |
|---|---|---|---|
| Display large | Caslon | 63px / 1.0 | 400 |
| Hed feature | Irvin | 34px / 1.13 | 400 |
| Subhed break primary | Caslon | 32px / 1.125 | 400 |
| Hed standard | Irvin | 30px / 1.07 | 400 |
| Hed bulletin | Caslon | 28px / 1.14 | 400 |
| Discovery hed feature | Irvin | 28px / 1.14 | 400 |
| Card heading | Caslon | 22px / 1.27 | 400 |
| Body core | Caslon | 21px / 1.5 | 400 (700 for lead-in) |
| Dek (description) | Caslon | 18-20px / 1.2-1.33 | 400 italic |
| Citation | Caslon | 18px / 1.5 | 400 |
| Accreditation (byline) | Neutraface | 14px / 1.14 | 600 |
| Nav text | Graphik | 12px / 1.33 | 500, -0.01em |
| Utility body / button | Graphik | 13px / 1.23 | 400 / 500, -0.0125em |
| Ad label | Neutraface | 10px | 400 uppercase, 0.15em |

Fluid headlines on the homepage use `clamp(1.75rem, 3cqw, 2.25rem)` in Irvin with line-height 1.11.

### Rules

- Headlines are sentence case and usually short. House style uses the diaeresis ("coöperate", "reëlect") in body copy; keep it when quoting.
- Decks are italic Caslon, one or two sentences.
- Articles open with a lead-in: the first few words in bold Caslon or small capitals (approximate).
- Section rubrics are in red, sentence case, not all caps.

## 4. Logo & Brand Mark

The masthead reads "THE NEW YORKER" in Irvin capitals, with a small "THE" centred above "NEW YORKER" in the web lockup. The magazine's mascot, Eustace Tilley (the dandy with a top hat and monocle drawn by Rea Irvin for the first cover in 1925), is used on the app icon and anniversary covers.

- **Color versions:** black `#121212` on white (default), white on black, white on red for promotions.
- **Clear space:** at least the cap height of "NEW" on all sides.
- **Minimum size:** about 120px wide on screen.
- **App icon:** Eustace Tilley drawn in black and white on red `#EA3226`.

Misuse:

- Do not set the name in Caslon, Playfair or any other font.
- Do not stack "NEW" and "YORKER" on separate lines.
- Do not add colour fills to Eustace Tilley or redraw him.
- Do not use the wordmark smaller than body text.

## 5. Components

### Header and navigation

- Thin top utility bar with "Newsletter", "Sign in" and a "Subscribe" button in 12px Graphik 500.
- Masthead wordmark centred, 30-50px tall depending on scroll; it shrinks into a compact sticky bar on scroll.
- Section links below: "The Latest", "News", "Books & Culture", "Fiction & Poetry", "Humor & Cartoons", "Magazine", "Puzzles & Games", "Video", "Podcasts", "Goings On". 12px Graphik 500, black, -0.01em tracking.
- 1px `#E5E5E5` rule under the nav.

### Story cards

- Image or illustration on top, no radius.
- Rubric in red `#DB3334`, 12-13px (IrvinText or Graphik).
- Headline: Irvin 28-36px (feature) or Caslon 22px (standard), black.
- Dek: Caslon 17px, regular or italic.
- Byline: Neutraface 600, 13-14px, black, preceded by "By".
- Spacing: 12px image to rubric, 8px rubric to headline, 8px headline to dek.

```css
.tny-card .rubric { font: 400 12px/1.33 var(--font-display); color: #DB3334; }
.tny-card h3 { font: 400 28px/1.14 var(--font-display); color: #000; margin: 6px 0 8px; }
.tny-card .dek { font: 400 17px/1.41 var(--font-body); color: #000; }
.tny-card .byline { font: 600 14px/1.14 var(--font-byline); color: #000; }
```

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Subscribe (primary) | `#000000` | `#FFFFFF` 13px Graphik 500 | none | 0 |
| Promo | `#DB3334` or `#EA3226` | `#FFFFFF` | none | 0 |
| Secondary | `#FFFFFF` | `#000000` | 1px `#000000` | 0 |
| Text | none | `#000000`, underlined | none | 0 |
| Pill (newsletter, tags) | `#FFFFFF` | `#000000` | 1px `#E5E5E5` | 3rem (48px) |

Height about 40px, padding 0 16-20px. Hover inverts black to white with a black border, or underlines text buttons.

### Article page (signature)

- Rubric in red, headline in Irvin (about 36-48px desktop, approximate), italic Caslon dek at 20px.
- Byline "By Author Name" in Neutraface 600 14px, then "November 16, 2026" in Graphik.
- Lead art: full-width illustration or photo; caption and credit below in 12-13px Graphik `#666666` ("Illustration by Name").
- Body: Caslon 21px/1.5, 600-680px column, black on white, with plenty of side margin.
- Drop cap: the first letter in Irvin, about 3-4 lines tall (approximate).
- Section breaks: centred small ornament or extra space; subheads in Caslon 32px or Irvin 28px.
- Pull quotes: Caslon 28-32px, set wider than the body column, no quote marks, thin rules above and below (approximate).
- End mark: a small black glyph at the end of the final paragraph (approximate).

### Cartoons

Cartoon cards show the drawing on white with the caption centred below in italic Caslon 17-18px and the artist's name in small caps. The Cartoon Caption Contest uses a cream panel and voting buttons.

### Newsletters

Sign-up pages list newsletters as cards with an illustration, Irvin title, Caslon description and a pill "Sign up" toggle. Inline promos in articles use a thin bordered box with Caslon copy and an email field (Graphik 16px input, 1px `#E5E5E5` border, square corners).

### Inputs

Height 44px, 1px `#E5E5E5` border, square corners, Graphik 16px. Focus: black border. Error: `#AA1B19` border and message.

### Paywall and subscribe

A bottom sheet with a white or black surface, Irvin headline ("Subscribe to The New Yorker"), Caslon copy, and a black or red primary button. Prices change by promotion; check the live site before quoting them.

## 6. Layout & Spacing

- **Breakpoints (from CSS):** 768, 1024 and 1280px.
- **Max width:** about 1600px for the homepage grid; articles centre a 600-680px text column with wider art.
- **Grid:** 12 columns on desktop, 4 on mobile; 24-32px gutters.
- **Spacing:** 8px base with generous section breaks (48-64px).
- **Density:** low to medium. White space is part of the look.

## 7. Depth, Elevation & Motion

- Mostly flat with thin `#E5E5E5` dividers.
- Light shadows only on floating UI: menus `0 0 6px 0 rgba(0,0,0,0.15)`, cards `0 2px 4px rgba(0,0,0,0.1)`, sticky header `-15px 0 10px rgba(0,0,0,0.05)` on side drawers.
- Motion is restrained: the masthead shrinks on scroll, menus fade in over about 200ms, carousels scroll horizontally.

## 8. Iconography & Imagery

- **Icons:** thin line icons (search, menu, bookmark, share, audio) in black, 16-24px.
- **Illustration:** commissioned editorial illustration, painterly or graphic, often full-bleed.
- **Covers:** the weekly cover is shown large, in its own frame with the date.
- **Cartoons:** black-and-white line drawings, always on white with captions.
- **Photography:** portraits and reportage, sometimes black and white.

## 9. Voice & Microcopy

Literate, dry and precise. UI copy is short and understated.

- Nav: "The Latest", "Books & Culture", "Fiction & Poetry", "Humor & Cartoons", "Puzzles & Games".
- Buttons: "Subscribe", "Sign in", "Sign up", "Read more", "Listen".
- Labels: "Daily Cartoon", "Crossword", "Goings On", "Audio".
- Credits: "Illustration by Name", "Photograph by Name for The New Yorker".

## 10. Do's and Don'ts

**Do**

- Use an Irvin-style display face for headlines and Caslon for long text at 20-21px.
- Keep the page black on white with red only for rubrics and promotions.
- Give illustration and cartoons room; centre long-form text with wide margins.
- Use italic Caslon for decks and Neutraface-style caps or bold for bylines.

**Don't**

- Don't round image corners or add colourful UI fills.
- Don't set headlines in a bold sans.
- Don't crowd articles with sidebars next to the text column.
- Don't crop cartoons or remove their captions.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of The New Yorker website. White page, black `#000000` text, dividers `#E5E5E5`, image credits `#666666`, red `#DB3334` only for small section rubrics and promotions. Headlines in `IrvinHeadingPro, "Playfair Display", serif` at weight 400 (30-36px, line-height 1.07-1.13), body in `TNYAdobeCaslonPro, "Libre Caslon Text", serif` at 21px/1.5 in a 640px column, decks in italic Caslon at 18-20px. Navigation, buttons and forms in `Graphik, Inter, sans-serif` at 12-13px weight 500 with -0.01em tracking. Bylines in a geometric sans at 600 ("By Author Name"). Cards: illustration on top with square corners, red rubric, Irvin headline, Caslon dek, byline. Black square "Subscribe" button. Generous white space, 12-column grid, breakpoints 768/1024/1280px, nearly no shadows.

```css
:root {
  --brand-black: #000000;
  --brand-logo-ink: #121212;
  --brand-rubric: #DB3334;
  --brand-cover-red: #EA3226;
  --brand-status: #0879BF;
  --brand-error: #AA1B19;
  --brand-muted: #666666;
  --brand-tertiary: #A2A2A2;
  --brand-divider: #E5E5E5;
  --brand-surface: #F5F5F5;
  --brand-cream: #F6F4EF;
  --brand-bg: #FFFFFF;
  --brand-font-display: IrvinHeadingPro, "Playfair Display", "Helvetica Neue", serif;
  --brand-font-body: TNYAdobeCaslonPro, "Libre Caslon Text", "Times New Roman", serif;
  --brand-font-ui: Graphik, "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-font-byline: NeutrafaceNewYorker, "Josefin Sans", sans-serif;
  --brand-body-size: 21px;
  --brand-body-leading: 1.5;
  --brand-radius: 0;
  --brand-shadow-menu: 0 0 6px 0 rgba(0,0,0,0.15);
  --brand-article-width: 640px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The New Yorker or Condé Nast.
