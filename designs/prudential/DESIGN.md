---
name: Prudential
slug: prudential
url: https://prudential.com
category: Insurance
tagline: "Rock of Gibraltar blue, navy heroes, yellow accents, pill buttons, one big rounded corner."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Prudential Blue
    hex: "#0076D1"
    role: Logo, rock mark, blue hero theme, info color
  - name: Navy
    hex: "#001F45"
    role: Navy hero and footer backgrounds, primary-alt buttons
  - name: Pru Yellow
    hex: "#FFD200"
    role: Secondary buttons, highlights, promo accents
  - name: Action Blue
    hex: "#0066CC"
    role: Primary buttons, links, active states
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on navy and blue
  - name: Ink
    hex: "#1A1D1E"
    role: Headings and body text
  - name: Action Hover
    hex: "#1C73CF"
    role: Primary button hover
  - name: Deep Navy
    hex: "#001836"
    role: Darkest backgrounds, overlays
  - name: Grey 71
    hex: "#717171"
    role: Secondary text, medium borders
  - name: Grey CC
    hex: "#CCCCCC"
    role: Low-emphasis borders and text
  - name: Grey EB
    hex: "#EBEBEB"
    role: Dividers, light borders
  - name: Ice
    hex: "#E2F4FF"
    role: Light blue section and card background
  - name: Ice Light
    hex: "#F0F9FF"
    role: Lightest blue section background
  - name: Teal
    hex: "#018484"
    role: Secondary-alt accent
  - name: Success
    hex: "#297C11"
    role: Success states
  - name: Error
    hex: "#D53943"
    role: Errors and validation
fonts:
  display:
    family: "Prudential Modern"
    fallback: "Source Sans 3"
    weights: [200, 700]
  body:
    family: "Open Sans"
    fallback: "Open Sans"
    weights: [400, 600]
typeScale:
  - { role: Display, size: 72, weight: 700, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: H1, size: 46, weight: 700, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: H2, size: 38, weight: 700, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: H3, size: 28, weight: 700, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: H4, size: 22, weight: 700, lineHeight: 1.125, tracking: "-0.01em" }
  - { role: Body Large, size: 17, weight: 400, lineHeight: 1.8, tracking: "-0.01em" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.5, tracking: "-0.01em" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.33, tracking: "-0.01em" }
radii: { sm: 3, md: 12, lg: 40, pill: 30 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80]
shadows:
  - { name: Card, value: "0 1px 3px rgba(0,0,0,0.12)" }
  - { name: Card Hover, value: "0 8px 10px rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 4px 12px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F9FF"
  text: "#1A1D1E"
  muted: "#717171"
  border: "#EBEBEB"
  accent: "#0066CC"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# Prudential

## 1. Visual Theme & Atmosphere

Prudential.com is built on "Evolution" (`evo-*` web components), Prudential's in-house design system. The look is calm, institutional and blue: a white header with the blue Rock of Gibraltar logo, a navy hero with a circular photo crop, white and pale-blue sections with rounded clickable cards, and a deep navy footer. Yellow `#FFD200` is the one warm accent, used for secondary buttons and promo moments.

What makes it recognisable:

- **The Rock.** The Rock of Gibraltar inside a circle is the anchor of the brand and appears in the logo, loaders and app tiles.
- **Two blues and a navy.** Logo blue `#0076D1`, action blue `#0066CC` for buttons and links, navy `#001F45` for heroes and dark bands.
- **Pill buttons.** Buttons have a 30px radius (`--btn-border-radius: 3rem` at a 10px root) and compact padding.
- **One oversized corner.** Hero images, promo cards and media blocks often round a single corner (for example `border-radius: 0 0 6rem 0` or `0 4rem 4rem 0`), a soft, leaf-like shape that is specific to Prudential.
- **Circle crops.** The homepage hero uses `bg-img-type="circle"`: a photo inside a large circle on a navy field.
- **Plain, readable copy** in Open Sans, with bold Prudential Modern headlines.

Mood words: steady, reassuring, institutional, approachable, clear.

## 2. Color Palette & Roles

The site exposes semantic tokens (`--text-*`, `--bg-*`, `--border-*`) with a 10px root font size.

| Name | Hex | Role |
|---|---|---|
| Prudential Blue (`--bg-primary-md`) | `#0076D1` | Logo fill, blue hero theme, info icons |
| Action Blue (`--bg-primary-high`) | `#0066CC` | Primary button, links, borders on focus |
| Action Hover | `#1C73CF` | Primary button hover |
| Blue Text XHigh | `#004D99` | Link hover, dark blue text |
| Navy (`--bg-primary-alt-high`) | `#001F45` | Navy hero, footer, primary-alt button |
| Navy Hover | `#203156` | Primary-alt hover, navy text |
| Deep Navy (`--bg-primary-alt-xhigh`) | `#001836` | Darkest band, overlays at 92% |
| Pru Yellow (`--bg-secondary-md`) | `#FFD200` | Secondary button, highlights |
| Yellow Hover | `#FFDD40` | Secondary hover |
| Teal (`--bg-secondary-alt-md`) | `#018484` | Accent panels |
| Ice (`--bg-primary-low`) | `#E2F4FF` | Light blue band, chip fill |
| Ice Light (`--bg-primary-xlow`) | `#F0F9FF` | Lightest blue section |
| Ink (`--text-neutral-high`) | `#1A1D1E` | Headings and body |
| Grey 71 (`--text-neutral-md`) | `#717171` | Secondary text |
| Grey CC (`--text-neutral-low`) | `#CCCCCC` | Low borders, disabled |
| Grey EB (`--text-neutral-xlow`) | `#EBEBEB` | Dividers |
| White | `#FFFFFF` | Page |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#297C11` | Accordion success icon, confirmations |
| Information | `#0076D1` | Info icons and notices |
| Warning | `#D47200` | Warnings |
| Error | `#D53943` | Errors, validation |

### Themes

Most components take a `theme` attribute: `white`, `blue` (`#0076D1`), `navy` (`#001F45`) or `blue-light` (`#E2F4FF`/`#F0F9FF`). On blue and navy themes text and eyebrows turn white, buttons switch to white or yellow, and photo heroes get a navy gradient overlay (`rgba(0,31,69,0.92)` to `0.75`).

## 3. Typography

**Families:** Prudential Modern (`Pru-Modern`), a custom typeface served from Prudential's font CDN in light (200) and bold (700), plus a bold semi-condensed cut for alternate display headings. Body text is Open Sans Regular.

**Licensing:** Prudential Modern is proprietary. Free substitute: **Source Sans 3** at 700 for headings (approximate match). Open Sans is free on Google Fonts.

```css
--type-font-family-headings: "Pru-Modern", sans-serif;
--type-font-family-base: Opensans-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

All text inside Evolution components gets `letter-spacing: -0.01em`.

### Scale (10px root; mobile / tablet / desktop)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Display | 48 / 58 / 72px | 700 | 1.125 |
| H1 | 38 / 42 / 46px | 700 | 1.125 |
| H2 | 28 / 34 / 38px | 700 | 1.125 |
| H3 | 24 / 26 / 28px | 700 | 1.125 |
| H4 | 22px | 700 | 1.125 |
| H5 | 18px | 700 | 1.125 |
| Body large | 17px | 400 | 1.8 |
| Body | 15px | 400 | 1.5 |
| Small / button | 14px | 600 | 1.33 |
| Extra small | 12px | 400 | 1.33 |

### Rules

- Sentence case for headlines and buttons ("Protect your loved ones with life insurance from Prudential", "Get a quote").
- Headings in Prudential Modern bold; body never in the heading face.
- Eyebrows above titles in 12-14px semibold.
- Links are blue `#0066CC`, semibold, with an underline that grows from 0 to full width on hover.

## 4. Logo & Brand Mark

The logo is the Rock of Gibraltar inside a circle, drawn in solid blue with white rock facets, next to the "Prudential" wordmark in a bold serif. The header uses the blue version (`fill: #0076D1`), 200 x 46px on desktop.

- **Color versions:** blue `#0076D1` on white (primary), white on navy or blue, navy `#001F45` for anniversary and single-color uses.
- **Lockups:** horizontal (rock + wordmark), stacked (rock above wordmark), rock alone for loaders and app tiles.
- **Clear space:** about half the rock's diameter on all sides (approximate).
- **Minimum size:** about 120px wide for the horizontal lockup (approximate); the mobile header caps it at 40% of the viewport.

Misuse:

- Do not crop, redraw or simplify the rock.
- Do not recolor the logo yellow or teal, or place it on photos without a navy overlay.
- Do not set the wordmark in Prudential Modern or another font.

## 5. Components

### Buttons

Evolution `evo-button` / `evo-link-button`, all with a 30px pill radius.

| Variant | Background | Text | Border | Padding |
|---|---|---|---|---|
| Primary | `#0066CC` | `#FFFFFF` 14px/600 | none | 8px 12px (md), 12px 24px (lg) |
| Primary alt | `#001F45` | `#FFFFFF` | none | same |
| Secondary | `#FFD200` | `#1A1D1E` | none | same |
| Secondary outlined | `#FFD200` | `#1A1D1E` | inset 1px `#666666` | same |
| Tertiary blue | transparent | `#0066CC` | none | same |
| On navy | `#FFFFFF` | `#001F45` | none | same |

Sizes: lg `padding: 12px 24px; min-width: 140px; font-size: 14px`, md `8px 12px`, sm `4px 12px` at 12px text. Icons are 20-24px.

States:

- Hover: primary `#1C73CF`, primary-alt `#203156`, secondary `#FFDD40`, tertiary text `#0066CC` with underline.
- Focus: a two-tone ring (blue `#0066CC` outside, white middle).
- Transition: `.2s cubic-bezier(.43,.17,.46,.98)`.

```css
.pru-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font: 600 14px/1.33 "Open Sans", sans-serif;
  letter-spacing: -0.01em;
  color: #fff;
  background: #0066CC;
  border: 0;
  border-radius: 30px;
  padding: 12px 24px;
  min-width: 140px;
  transition: background-color .2s cubic-bezier(.43,.17,.46,.98);
}
.pru-btn:hover { background: #1C73CF; }
.pru-btn--secondary { background: #FFD200; color: #1A1D1E; }
.pru-btn--secondary:hover { background: #FFDD40; }
```

### Hero (signature)

- `evo-hero theme="navy"`: navy `#001F45` field, white H1 ("A guide for your financial journey"), short paragraph, primary or white pill CTA.
- A large circular photo crop sits on the right and can bleed off the top or right edge; on mobile it moves above the text.
- Photo-background variants use a navy overlay gradient so white text stays readable.
- Some heroes and media blocks round only the bottom-right corner (`border-radius: 0 0 6rem 0`).

### Clickable cards

- `evo-clickable-card`: white, radius 12px, shadow `0 1px 3px rgba(0,0,0,0.12)`, hover `0 8px 10px rgba(0,0,0,0.2)`.
- Image on top (780 x 430 crop), eyebrow, 20-22px bold title, 15px sub-copy, and a blue link with arrow.
- Grids of 4 cards on desktop (270px slide width in carousels), 1-2 on mobile.
- "How we support your goals" uses icon cards: a line icon, bold title ("Life insurance", "Retirement") and one sentence.

### Promo breaker and promo cards

- Full-width band (`evo-promo-breaker`) with image left and copy right: H2 ("Connect with a local financial advisor"), sentence, CTA. Variants on navy, blue or light blue.
- Promo cards may use asymmetric corners (`0.3rem 4rem` or `0 4rem 4rem 0`) so one side is softly rounded.

### Navigation

- Super header: a thin top row of utility links ("Make a payment", "Find a form", "File a claim") and audience tabs ("Personal", "Advisor", "Employers, Associations & Brokers", "Institution").
- Main bar (`evo-top-navigation theme="white"`): blue logo left (32px tall), menus "Insurance", "Investments & retirement", "Tools & resources", search field, and "Log in" on the right.
- Mega menu columns with bold group titles and plain links, plus a spotlight card with a "Get a quote" primary pill.
- On navy heroes the logo switches to white.

### Inputs

- `evo-input-search` (approximate): white field, 1px `#717171` border, 3px radius, about 48px tall, search icon left; focus border `#0066CC`.
- Form fields use 14px labels above, 3px radius, and red `#D53943` helper text for errors.

### Accordions

White rows separated by `#EBEBEB` hairlines, title in about 17px semibold (approximate), blue chevron 20px, body at 15px with 16px padding. Status icons: success `#297C11`, info `#0076D1`, warning `#D47200`, error `#D53943`.

### Footer

Navy `#001F45` with white link columns, social bar, and legal text at 12px (approximate).

## 6. Layout & Spacing

- **Root:** 1rem = 10px (inferred from the token values, for example body `1.5rem` = 15px); spacing tokens are in rem (0.4, 0.8, 1.2, 1.6, 2.4, 3.2, 4.8, 6.4, 8rem).
- **Container:** about 1200px max width with 16-24px gutters (approximate).
- **Breakpoints:** 576, 768, 992, 1200, 1400px (Bootstrap-based grid).
- **Sections:** about 48-80px vertical padding (approximate), alternating white, light blue and navy bands.

## 7. Depth, Elevation & Motion

- Shadows are light and neutral: `0 1px 3px rgba(0,0,0,0.12)` at rest, `0 2px 6px rgba(0,0,0,0.16)`, `0 4px 12px rgba(0,0,0,0.16)`, `0 8px 24px rgba(0,0,0,0.16)` for overlays; card hover `0 8px 10px rgba(0,0,0,0.2)`.
- Overlays: navy at 92% (`rgba(0,24,54,0.92)`) for modals and image scrims.
- Easing: `cubic-bezier(.43,.17,.46,.98)` for 0.2s state changes; menus grow down with `transform: scaleY` over 0.12s `cubic-bezier(.63,.09,1,1)`.
- Link underline animates width from 0 to 100% in 0.2-0.3s.

## 8. Iconography & Imagery

- Icons: the Evolution set, 24px, mostly outlined (stroke weight approximate), in blue or ink. A separate set of two-color spot illustrations (bell, piggy bank, sunset, gift, car, care) is used in product tiles.
- Photography: real-life families, couples and retirees in natural light; warm but not staged-glossy. Frequently cropped in circles or with one rounded corner.

## 9. Voice & Microcopy

Reassuring and practical, talking about life stages and protection rather than products first.

- Sentence case.
- Lead with the person's goal ("Enjoy retirement on your terms"), then the tool ("Use our retirement readiness tool...").
- CTAs: "Get a quote", "Get started", "Get support", "File a claim", "Find a form", "Make a payment", "Log in".

Sample strings:

- Hero: "A guide for your financial journey"
- Insurance: "Protect your loved ones with life insurance from Prudential"
- Retirement: "Enjoy retirement on your terms"
- Support: "Have questions about your account? We're here to help."

## 10. Do's and Don'ts

**Do**

- Use blue `#0076D1` for the logo and `#0066CC` for actions; navy `#001F45` for heroes and the footer.
- Make buttons pills with a 30px radius and compact padding.
- Use yellow `#FFD200` sparingly for secondary CTAs or highlights.
- Crop hero photos in circles or round one corner of images and promo cards.
- Keep cards white with 12px radius and a light shadow that deepens on hover.

**Don't**

- Don't use yellow for large backgrounds or body text.
- Don't use square buttons or heavy, dark shadows.
- Don't put white text on photos without the navy overlay.
- Don't alter or simplify the Rock.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Prudential. White header with a blue `#0076D1` rock-in-a-circle logo, a thin utility row ("Make a payment", "File a claim"), menus and a "Log in" link. Hero: navy `#001F45` field with a white bold headline (Prudential Modern, fallback `"Source Sans 3"`, 700, 46px/1.125, tracking -0.01em), one sentence of body, and a large circular photo crop on the right. Body text is `"Open Sans", sans-serif` 15px/1.5 in `#1A1D1E`. Buttons are pills (`border-radius: 30px`, 14px/600, 12px 24px padding): primary `#0066CC` (hover `#1C73CF`), secondary yellow `#FFD200` with dark text (hover `#FFDD40`), white on navy. Add a 4-up grid of white clickable cards (12px radius, `0 1px 3px rgba(0,0,0,0.12)`, hover `0 8px 10px rgba(0,0,0,0.2)`) with photo, bold title, sub-copy and blue arrow link, a light blue `#F0F9FF` band of product icons, a promo breaker whose image has one big rounded corner (`border-radius: 0 0 60px 0`), and a navy footer. Transitions `.2s cubic-bezier(.43,.17,.46,.98)`.

```css
:root {
  --brand-blue: #0076D1;
  --brand-action: #0066CC;
  --brand-action-hover: #1C73CF;
  --brand-blue-dark: #004D99;
  --brand-navy: #001F45;
  --brand-navy-hover: #203156;
  --brand-navy-deep: #001836;
  --brand-yellow: #FFD200;
  --brand-yellow-hover: #FFDD40;
  --brand-ice: #E2F4FF;
  --brand-ice-light: #F0F9FF;
  --brand-ink: #1A1D1E;
  --brand-grey-md: #717171;
  --brand-grey-xlow: #EBEBEB;
  --brand-success: #297C11;
  --brand-warning: #D47200;
  --brand-error: #D53943;
  --brand-font-heading: "Pru-Modern", "Source Sans 3", sans-serif;
  --brand-font-body: "Open Sans", -apple-system, "Segoe UI", Roboto, sans-serif;
  --brand-tracking: -0.01em;
  --brand-radius-button: 30px;
  --brand-radius-card: 12px;
  --brand-radius-corner: 60px;
  --brand-shadow-card: 0 1px 3px rgba(0,0,0,0.12);
  --brand-shadow-card-hover: 0 8px 10px rgba(0,0,0,0.2);
  --brand-ease: cubic-bezier(.43,.17,.46,.98);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Prudential.
