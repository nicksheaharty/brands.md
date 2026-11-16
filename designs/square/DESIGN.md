---
name: Square
slug: square
url: https://squareup.com
category: Finance
tagline: "Black and white seller tools with the rounded jewel mark, Square Sans and blue pill CTAs."
updated: 2026-11-16
appStoreId: 335393788
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Logo, dark page sections, headline text on light sections
  - name: White
    hex: "#FFFFFF"
    role: Light sections, text on dark, secondary button fill
  - name: Square Blue
    hex: "#006AFF"
    role: Primary CTA fill, links, focus and selected states
  - name: Blue Deep
    hex: "#004BFF"
    role: Homepage primary button fill (homepage v3 override)
  - name: Blue Pressed
    hex: "#0055CC"
    role: Link and theme focus or hover (--color-theme-focus)
  - name: Gray 90
    hex: "#1A1A1A"
    role: Body text on light, raised surfaces on dark
  - name: Gray 99
    hex: "#030303"
    role: Dark mode page background
  - name: Gray 93
    hex: "#121212"
    role: Dark cards and nav menus
  - name: Gray 55
    hex: "#737373"
    role: Muted text, captions, inactive icons
  - name: Gray 15
    hex: "#D9D9D9"
    role: Borders and dividers on light
  - name: Gray 03
    hex: "#F7F7F7"
    role: Light subdued section and card fill
  - name: Neutral 900
    hex: "#F7F6F5"
    role: Warm off-white panel background
  - name: Blue Tint
    hex: "#CCE1FF"
    role: Pricing-tier badge background
  - name: Critical
    hex: "#CC0023"
    role: Errors, invalid field borders
  - name: Success
    hex: "#00B23B"
    role: Success and confirmation states
fonts:
  display:
    family: "Square Sans Display"
    fallback: "Inter"
    weights: [500]
  body:
    family: "Square Sans Text"
    fallback: "Inter"
    weights: [400, 500]
  mono:
    family: "Square Sans Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display XXL, size: 90, weight: 500, lineHeight: 1.0, tracking: "-1.8px" }
  - { role: Display L, size: 54, weight: 500, lineHeight: 1.1, tracking: "-1.08px" }
  - { role: Heading, size: 28, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Subheading, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body L, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.5, tracking: "0.14px" }
  - { role: Fine print, size: 12, weight: 400, lineHeight: 1.5, tracking: "0.12px" }
radii: { sm: 4, md: 6, lg: 10, pill: 999 }
spacing: [10, 20, 30, 40, 50, 60, 80, 100, 120, 160]
shadows:
  - { name: Menu, value: "0 2px 8px rgba(0,0,0,0.16)" }
  - { name: Field focus, value: "inset 0 0 0 2px #006AFF" }
  - { name: Field error, value: "inset 0 0 0 2px #CC0023" }
preview:
  bg: "#030303"
  surface: "#1A1A1A"
  text: "#FFFFFF"
  muted: "#999999"
  border: "#333333"
  accent: "#006AFF"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Square

## 1. Visual Theme & Atmosphere

Square (part of Block, Inc.) sells point of sale hardware and software to restaurants, retailers and service businesses. Its website, squareup.com, reads like a product catalogue designed by an industrial design studio: mostly black and white, huge medium-weight headlines, hardware photographed on plain backgrounds, and one blue for actions.

What makes it recognisable:

- **Monochrome first.** The jewel logo is black or white, never coloured. Most homepage sections run in a dark color mode (`#030303` page, white text); lighter sections flip to white with `#1A1A1A` text. On the live homepage today, dark-mode blocks outnumber light ones roughly three to one.
- **Blue only means "act".** `#006AFF` (and a deeper `#004BFF` on the current homepage) fills primary pill buttons and links. It is not used for decoration.
- **Square Sans everywhere.** A custom grotesque in Display and Text cuts, set at weight 500 for headlines with tight negative tracking at large sizes.
- **Hardware as hero.** Square Register, Terminal, Handheld, Kiosk and Reader appear as clean product shots with price labels underneath, like a store shelf.
- **Pill CTAs that scale on hover.** Buttons are fully rounded, grow to 1.05 on hover and press down to 0.95 with reduced opacity.
- **Huge mega-menu.** The nav opens into dense lists by business type (Food & Beverage, Retail, Beauty, Services) and by product.

Mood words: neutral, confident, tactile, orderly, merchant-friendly.

## 2. Color Palette & Roles

Values come from the live CSS on squareup.com (tokens like `--color-blue`, `--color-gray-*`, `--color-neutral-*`).

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Logo, dark sections, light-mode base text token |
| White | `#FFFFFF` | Light sections, text on dark |
| Square Blue | `#006AFF` | `--color-blue`, `--color-theme`, primary buttons, links |
| Blue Deep | `#004BFF` | Homepage v3 primary button override |
| Blue Pressed | `#0055CC` | `--color-theme-focus`, hover and pressed links |
| Blue 400 | `#4A95FF` | Link color in dark mode |
| Gray 99 | `#030303` | Dark color-mode background |
| Gray 93 | `#121212` | Dark cards, menus |
| Gray 90 | `#1A1A1A` | Text on light (`--color-text`) |
| Gray 80 | `#333333` | Borders in dark mode |
| Gray 75 | `#414141` | Secondary dark surface |
| Gray 55 | `#737373` | Muted text |
| Gray 30 | `#B3B3B3` | Disabled text, placeholder |
| Gray 15 | `#D9D9D9` | Borders on light |
| Gray 13 | `#E0E0E0` | Dividers |
| Gray 05 | `#F2F2F2` | Input and chip fill |
| Gray 03 | `#F7F7F7` | Subdued light sections |
| Neutral 900 | `#F7F6F5` | Warm off-white panels |

### Semantic

| State | Hex | Use |
|---|---|---|
| Critical | `#CC0023` | Invalid field border, error icon |
| Error text | `#BF0020` | Field error message |
| Success | `#00B23B` | Confirmation |
| Badge | `#CCE1FF` bg / `#005AD9` text | Pricing tier and "Best value" badges |

Older product pages also carry `--color-red: #DF3320`, `--color-green: #0BB634`, `--color-plum: #A1499C` and `--color-rose: #C14F70` for illustrations.

### Color modes

Every section declares `data-color-mode="dark"` or `"light"`. Tokens swap per mode: text `#FFFFFF`/`#000000`, muted `#999999`/`#737373`, border `#707070`/`#CCCCCC`, link `#4A95FF`/`#006AFF`. Keep that pairing when you alternate sections.

## 3. Typography

- **Square Sans Display** (variable, `Square Sans Display VF`): headlines and large numbers.
- **Square Sans Text** (variable): body, navigation, buttons, forms. CSS stack: `"Square Sans Text VF", "Square Sans Text", Helvetica, Arial, sans-serif`.
- **Square Sans Mono**: receipts, code, figures in tables.
- **Cash Sans** also loads on the page for Block cross-promotion; do not use it for Square UI.

All are proprietary Block fonts. Use **Inter** as the web fallback (500 for headlines, 400 for text) and **JetBrains Mono** for mono.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display XXL (variant 1000, desktop) | 90-120px | 500 | 1.0 | -1.8 to -2.4px |
| Display L (variant 1000, mobile) | 54px | 500 | 1.1 | -1.08px |
| Heading (variant 200) | 28px | 500 | 1.3 | 0 |
| Subheading (variant 200 mobile) | 20px | 500 | 1.3 | 0 |
| Body L (variant 100) | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 (22px) | 0 |
| Small (variant 50) | 14px | 400 | 1.5 | 0.14px |
| Fine print | 12px | 400 | 1.5 | 0.12px |

Rules:

- Headlines use weight 500, never bold 700. Large display sizes get negative tracking of about -2% of the font size.
- Sentence case for headlines and buttons ("Get started", "See your whole business click into place").
- Section eyebrows are uppercase with slight tracking ("BUILT FOR EVERY INDUSTRY").
- Prices and stats are set large in Display; footnote markers are superscript numerals.
- The root font size is 10px (`1rem = 10px`) in parts of the CSS, so `.6rem` radii equal 6px.

## 4. Logo & Brand Mark

The logo is the **jewel** (a rounded square outline with a small solid square in the centre) followed by the **Square** wordmark in Square Sans.

- Jewel construction: outer rounded square with corner radius about 17% of its width, a stroke about 18% of the width, and a centred square about 22% of the width with small rounded corners.
- The jewel can stand alone as the app icon and favicon.
- Colors: black on light, white on dark. No blue, gradient or outline-only versions.
- Clear space: at least the height of the inner square on all sides.
- Minimum size: jewel 16px; lockup 72px wide on screen (approximate).
- In the site nav the lockup sits at about 88px wide; the jewel alone renders at 22px.
- Don't stretch, rotate, recolour, add shadows, or set "Square" in another font next to the jewel.

## 5. Components

### Buttons (the `Action` component)

```css
.btn {
  display: inline-flex; align-items: center; gap: .4ch;
  font: 500 16px/1 "Square Sans Text", Inter, sans-serif;
  padding: 14px 24px;                 /* approximate; regular size */
  border-radius: 999px;
  border: 1px solid transparent;
  transition: transform .15s cubic-bezier(0,0,.2,1);
}
.btn:hover  { transform: scale(1.05); }
.btn:active { transform: scale(.95) translateY(5%); opacity: .6; }
.btn-primary   { background: #006AFF; border-color: #006AFF; color: #FFFFFF; }
.btn-secondary { background: #FFFFFF; border-color: #000000; color: #000000; } /* light */
.btn-secondary-dark { background: #FFFFFF; border-color: #FFFFFF; color: #000000; } /* on dark */
.btn-text { background: none; padding: 0; color: #006AFF; }     /* "Learn more" + arrow */
```

- Sizes: small (14px text), regular (16px), large (20px text). Small and regular share the same pill shape.
- Text links get an animated underline that grows from 0% to 100% width on hover, with a small arrow icon at `1.1ex`.
- Focus: 2px outline in `#006AFF` with offset, rounded to match the element.

### Inputs

- Height about 56-64px, 6px radius, fill `#FFFFFF`, border drawn with `box-shadow: inset 0 0 0 1px #737373`.
- Hover and focus: `inset 0 0 0 2px #006AFF`.
- Invalid: `inset 0 0 0 1px #CC0023`, message in `#BF0020` at 14px under the field.
- Floating label inside the field; select fields show a caret on the right.
- Checkboxes and radios use the same inset-ring approach.

### Navigation

- Sticky top bar, about 64-72px tall, black background on dark pages or white on light.
- Left: jewel plus wordmark. Centre: "Business types", "Products", "Hardware", "Pricing", "Resources". Right: "Sign in" text link, "Contact sales", and a pill "Get started".
- Mega-menu panels open full width with three to four columns of 16px links, grouped under 14px muted headings.

### Hardware cards

- Product photo on `#F7F7F7` (light) or `#121212` (dark), 10px container radius.
- Below: product name in 20px/500, one-line description ("The receipt-printing POS"), then price in 16px with a superscript footnote marker.
- No border, no shadow; spacing does the separation.

### Feature tiles

- Large rounded panels (10px) with a headline, a two-line description and a "Learn more" text action.
- Alternate image and text sides in a two-column layout at desktop.

### Stats band

- Four big numbers in Display weight 500 (about 54-64px) with a 14-16px caption below each. Copy them from the live page when you use real ones.

### Pricing plan cards

- Three or four columns, white cards with 1px `#D9D9D9` border and 10px radius.
- A "Best value" badge: `#CCE1FF` background, `#005AD9` text, pill shape, 12px/500.
- Price in Display, feature list with check icons, full-width pill CTA at the bottom.

### Badges and chips

- Pill, 12-14px text, weight 500, padding 4px 10px. Neutral chips use `#F2F2F2` with `#1A1A1A` text.

### Accordion (FAQ)

- Full-width rows separated by 1px `#D9D9D9`, 20px/500 question, plus or caret icon on the right, answer in 16px muted text.

### Modals

- White sheet, 10px radius, `0 2px 8px rgba(0,0,0,.16)`, dimmed backdrop. The "Nice to meet you" lead form is the main example.

## 6. Layout & Spacing

- Container max width: `1480px`. Gutters: 20px mobile, 60px tablet, 100px desktop (`--container-gutter`).
- Grid gap: 20px.
- Spacing tokens run in tens: 10, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200px.
- Section padding: 100-160px vertical on desktop, 60-80px on mobile.
- Breakpoints: about 600px, 1024px (`63.9375rem` boundary), 1280px (`80rem`).
- Density: low on marketing pages, high in the mega-menu and footer.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation appears only on menus and popovers: `0 2px 8px rgba(0,0,0,.16)`.
- Form fields use inset box-shadow rings instead of borders.
- Motion tokens from the CSS:
  - Durations: quick 150ms, enter 225ms, leave 195ms, default 300ms, complex 375ms, slow 400ms.
  - Easing: standard `cubic-bezier(.4,0,.2,1)`, decelerate `cubic-bezier(0,0,.2,1)`, accelerate `cubic-bezier(.4,0,1,1)`, sharp `cubic-bezier(.4,0,.6,1)`.
- Button hover scales to 1.05 using decelerate over 150ms.
- Respect `prefers-reduced-motion`: drop scale and underline animations.

## 8. Iconography & Imagery

- Icons: 21-24px line icons, 1.5px stroke, rounded joins, black or white. Some filled glyphs for status.
- Photography: hardware on plain studio backdrops, and real sellers (cafes, salons, shops) shot naturally with warm light.
- Product UI mockups show the actual Square POS on iPad and Register screens.
- No gradients in the brand system; colour comes from photos.

## 9. Voice & Microcopy

- Plain, seller-focused, practical. Talks about running a business, not about technology.
- Headlines are short and active: "Power your entire business", "Keep your business growing".
- Buttons: "Get started", "Contact sales", "Learn more", "See pricing", "Shop hardware".
- Legal footnotes are numbered and sit at the bottom of the page in 12px muted text.
- Sample strings: "Run your entire business with one plan", "Cancel or switch plans anytime", "Sell anything in person and online".

## 10. Do's and Don'ts

**Do**

- Keep the page black, white and grey, with `#006AFF` reserved for actions.
- Use weight 500 headlines with negative tracking at large sizes.
- Use pill buttons with the scale-on-hover behaviour.
- Alternate dark and light sections with matching token swaps.
- Show real hardware and real seller environments.
- Put prices directly under product names, with footnote markers.

**Don't**

- Don't colour the jewel logo blue or add a gradient.
- Don't use bold 700 headlines or all-caps headlines.
- Don't add heavy drop shadows to cards.
- Don't use square-cornered buttons on marketing pages.
- Don't introduce extra accent colours for decoration.

## 11. Agent Prompt Guide

> Build this UI in the style of Square (squareup.com). Mostly dark sections: page `#030303`, cards `#121212`, text `#FFFFFF`, muted `#999999`, borders `#333333`; light sections flip to `#FFFFFF` with text `#1A1A1A`, muted `#737373`, borders `#D9D9D9`. One action colour: Square Blue `#006AFF` (homepage uses `#004BFF`) for pill buttons and links. Font: "Square Sans Display" for headlines and "Square Sans Text" for everything else, falling back to Inter. Headlines are weight 500, 54-90px with -2% tracking; body 16-18px/1.5. Buttons are pills (999px radius), white text on blue, secondary white with black border, scale to 1.05 on hover and 0.95 on press over 150ms `cubic-bezier(0,0,.2,1)`. Containers max 1480px with 100px gutters on desktop, 20px on mobile, spacing in multiples of 10. Cards are flat with 10px radius and no shadow. Show hardware product cards with name, one-line description and price. Inputs use inset box-shadow rings: grey at rest, 2px blue on focus, red `#CC0023` on error. Logo is the black or white jewel plus wordmark, never coloured.

```css
:root {
  --sq-black: #000000;
  --sq-white: #FFFFFF;
  --sq-blue: #006AFF;
  --sq-blue-deep: #004BFF;
  --sq-blue-pressed: #0055CC;
  --sq-blue-dark-mode: #4A95FF;
  --sq-bg-dark: #030303;
  --sq-surface-dark: #121212;
  --sq-text: #1A1A1A;
  --sq-muted: #737373;
  --sq-border: #D9D9D9;
  --sq-border-dark: #333333;
  --sq-subtle: #F7F7F7;
  --sq-warm: #F7F6F5;
  --sq-critical: #CC0023;
  --sq-success: #00B23B;
  --sq-font-display: "Square Sans Display", Inter, Helvetica, Arial, sans-serif;
  --sq-font-text: "Square Sans Text", Inter, Helvetica, Arial, sans-serif;
  --sq-font-mono: "Square Sans Mono", "JetBrains Mono", monospace;
  --sq-radius-field: 6px;
  --sq-radius-container: 10px;
  --sq-radius-pill: 999px;
  --sq-shadow-menu: 0 2px 8px rgba(0,0,0,.16);
  --sq-ease-standard: cubic-bezier(.4,0,.2,1);
  --sq-ease-decelerate: cubic-bezier(0,0,.2,1);
  --sq-duration-quick: 150ms;
  --sq-duration-default: 300ms;
}
```

---

Values are observed from the public squareup.com CSS on 2026-11-16; button padding, logo clear space and minimum sizes are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Block, Inc.
