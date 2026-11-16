---
name: Intuit
slug: intuit
url: https://intuit.com
category: Finance
tagline: "Super blue wordmark, blueberry pill buttons, Avenir Next and round product icons."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Super Blue
    hex: "#236CFF"
    role: Logo, secondary button outline, links, focus
  - name: Blueberry
    hex: "#00254A"
    role: Primary button fill, dark headings, dark sections
  - name: Pepper
    hex: "#21262A"
    role: Body text, primary button hover
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Gray 01
    hex: "#E6E9ED"
    role: Disabled fills, light dividers
  - name: Gray 07
    hex: "#4D6680"
    role: Secondary text, disabled text
  - name: Gray 05
    hex: "#8092A4"
    role: Muted labels, captions
  - name: Ice
    hex: "#F4F9FF"
    role: Pale blue section background
  - name: Sky
    hex: "#E0EDFF"
    role: Pale blue fills, hover on subtle buttons
  - name: Light Blue
    hex: "#7CBCFF"
    role: Illustration and data accent
  - name: Action Blue
    hex: "#0077C5"
    role: Design system standard action (product UI)
  - name: Deep Teal
    hex: "#0D333F"
    role: Alternate dark button fill
  - name: TurboTax Red
    hex: "#D52B1E"
    role: TurboTax product color, negative actions
  - name: Credit Karma Green
    hex: "#008600"
    role: Credit Karma product color, positive
  - name: Neutral Container
    hex: "#EEEEEF"
    role: Neutral badges and containers
fonts:
  display:
    family: "Tally Display"
    fallback: "Nunito Sans"
    weights: [600, 700]
  body:
    family: "AvenirNext forINTUIT"
    fallback: "Nunito Sans"
    weights: [400, 500, 600, 700]
typeScale:
  - { role: Display 1, size: 72, weight: 700, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Heading 1, size: 48, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Heading 2, size: 40, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Heading 4, size: 28, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Heading 6, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body 1, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body 2, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body 3, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 32 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 2px 8px rgba(0,37,74,0.08)" }
  - { name: Raised, value: "0 8px 24px rgba(0,37,74,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F9FF"
  text: "#21262A"
  muted: "#4D6680"
  border: "#E6E9ED"
  accent: "#00254A"
  accentText: "#FFFFFF"
  radius: 32
  buttonStyle: pill
---

# Intuit

## 1. Visual Theme & Atmosphere

Intuit is the parent of TurboTax, Credit Karma, QuickBooks and Mailchimp, and intuit.com acts as the front door to all of them. The look is clean and friendly-corporate: lots of white, a bright "super blue" (`#236CFF`) lowercase **intuit** wordmark, deep navy "blueberry" (`#00254A`) buttons and headings, and Avenir Next type. Product sections borrow each brand's own color and round app icon, so the page reads as a family: TurboTax red, Credit Karma green, QuickBooks green, Mailchimp yellow.

What makes it recognisable:

- **The blue wordmark.** Heavy, rounded lowercase "intuit" in `#236CFF`, always top-left.
- **Blueberry and super blue.** Dark navy for primary buttons and headlines, bright blue for the logo, secondary buttons and links.
- **Avenir Next.** A custom cut, "AvenirNext forINTUIT", for body and UI; the newer "Tally" and "Tally Display" families appear on recent pages for headlines.
- **Round product icons.** Each product has a circular logo badge (94px viewBox circles on the site) next to its wordmark.
- **Pill or square buttons, 48px tall.** Buttons come in a rounded 32px-radius version and a 4px "square" version; both have a small arrow that slides on hover.
- **People-first photography.** Small-business owners, families doing taxes, freelancers, shot bright and warm.

Mood words: friendly, trustworthy, optimistic, practical.

Note: intuit.com's homepage returned a 429 (rate limit) to automated requests when this file was written. Values here come from intuit.com's press room page, its component CSS (`icom-components`) and the Intuit design-system token file it loads. Homepage layout notes are approximate.

## 2. Color Palette & Roles

### Brand (from intuit.com button and logo CSS)

| Name | Hex | Role |
|---|---|---|
| Super Blue | `#236CFF` | Logo, secondary button border and text, links, focus border |
| Blueberry | `#00254A` | Primary button, headlines, dark sections, quaternary button outline |
| Pepper | `#21262A` | Body text, primary button hover |
| Deep Teal (wr-blue-05) | `#0D333F` | Alternate primary on light-alt sections |
| Gray 01 | `#E6E9ED` | Disabled button fill, light dividers |
| Gray 05 | `#8092A4` | Muted text, captions |
| Gray 07 | `#4D6680` | Secondary text, disabled text |
| White | `#FFFFFF` | Page, cards, primary button on dark |

### Blue tints (from site CSS)

`#F4F9FF` (ice), `#E0EDFF` (sky), `#C5E1FF`, `#A0CFFF`, `#7CBCFF`, `#5DABFF`, `#3492EF`, `#2B77CC`, `#205EA3`, `#103661`, `#001D3C`.

### Design system tokens (Intuit theme, product UI)

| Token | Hex | Role |
|---|---|---|
| `--color-action-standard` | `#0077C5` | Standard action in product UI |
| `--color-action-standard-hover` | `#0265AC` | Hover |
| `--color-action-standard-active` | `#055393` | Pressed |
| `--color-action-negative` | `#D52B1E` | Destructive |
| `--color-action-passive` | `#6B6C72` | Passive action |
| `--color-container-background-primary` | `#FFFFFF` | Cards |
| `--color-container-background-secondary` | `#F4F5F8` | Secondary panels |
| `--color-container-background-tertiary` | `#ECEEF1` | Tertiary panels |
| `--color-container-background-neutral` | `#EEEEEF` | Neutral badges |
| `--color-container-background-info` | `#D9EFFB` | Info banners |
| `--color-container-background-positive` | `#E5F4D9` | Success banners |
| `--color-container-background-attention` | `#FFECD9` | Warning banners |
| `--color-container-background-negative` | `#FAD7D6` | Error banners |
| `--color-container-background-inverse` | `#393A3D` | Inverse containers |
| `--color-divider-secondary` | `#BABEC5` | Dividers |
| `--color-divider-tertiary` | `#D4D7DC` | Light dividers |
| `--color-page-background-accent` | `#ECEEF1` | Accent page background |

### Product family colors (approximate)

| Product | Color | Use |
|---|---|---|
| TurboTax | `#D52B1E` | TurboTax badge and highlights |
| Credit Karma | `#008600` | Credit Karma badge |
| QuickBooks | `#2CA01C` | QuickBooks badge |
| Mailchimp | `#FFE01B` with `#241C15` | Mailchimp badge |

Use product colors only next to that product's name or icon, never for Intuit-level actions.

### Dark sections

Blueberry `#00254A` or near-black `#001D3C` backgrounds with white text and white primary buttons (blueberry text). Secondary buttons become white outlines.

## 3. Typography

**Families:**

- **AvenirNext forINTUIT**: a licensed cut of Avenir Next, weights 400, 500, 600, 700 with italics. Body, UI and most headings.
- **Tally** and **Tally Display**: newer Intuit brand typefaces, first in the button and headline font stacks on intuit.com (`font-family: Tally, 'AvenirNext forINTUIT', Avenir, Helvetica, Arial, sans-serif`). Their exact shapes are not published; treat as approximate.
- **National 2** appears in a few legacy blocks.

**Licensing:** all proprietary. Fallback: **Nunito Sans** (closest free geometric-humanist to Avenir Next) for both display and body.

```css
--font-family-base: "Tally", "AvenirNext forINTUIT", "Avenir Next", Avenir, "Nunito Sans", Helvetica, Arial, sans-serif;
--font-family-display: "Tally Display", "Tally", "AvenirNext forINTUIT", "Nunito Sans", sans-serif;
```

### Scale (design-system tokens; desktop, mobile is one step smaller)

| Token | Size | Weight | Line height |
|---|---|---|---|
| display-1 | 72-84px | 700 | 1.3 |
| display-3 | 48-60px | 700 | 1.3 |
| heading-1 | 40-48px | 600 | 1.3 |
| heading-2 | 34-40px | 600 | 1.3 |
| heading-3 | 28-34px | 600 | 1.3 |
| heading-4 | 24-28px | 600 | 1.3 |
| heading-6 | 20px | 600 | 1.3 |
| body-1 | 16-20px | 400 | 1.5 |
| body-2 | 16px | 400 | 1.5 |
| body-3 | 14px | 400 | 1.5 |
| body-4 | 12px | 400 | 1.5 |
| button (medium) | 16px | 500 | 24px |
| input text | 16px | 400 | 1.3 |

### Rules

- Sentence case for headlines and buttons.
- Headlines in Blueberry `#00254A` or Pepper `#21262A`; never in Super Blue at large sizes except the logo.
- Button labels are weight 500.
- Numbers (refund amounts, credit scores) are big, bold and set in the display face.

## 4. Logo & Brand Mark

The Intuit logo is the lowercase wordmark "intuit" in a heavy, geometric sans with round dots on the i's, set in Super Blue `#236CFF`. It has no separate symbol; product brands (TurboTax, Credit Karma, QuickBooks, Mailchimp) each have their own round icon.

- **Clear space:** at least the height of the "i" dot on all sides; about half the x-height in tight layouts (approximate).
- **Minimum size:** about 48px wide on screen.
- **Color versions:** Super Blue on white (primary), white on Blueberry or photography, black for one-color print.
- **Endorsement:** product logos appear with "intuit" set above the product name in some lockups ("intuit turbotax").
- **Misuse:** don't capitalise it, don't recolor it to product colors, don't add a symbol, don't stretch the dots.

## 5. Components

### Buttons

From intuit.com `AButton` CSS: 48px tall, `0 30px` padding, 1px border, label 16px/24px weight 500, transition `0.3s cubic-bezier(.35,0,.5,1)`. Shape is either `square` (4px radius) or `circle` (32px radius, pill). A small 10px arrow icon slides in at the right on hover.

```css
.in-btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; padding: 0 30px; border: 1px solid transparent; border-radius: 32px;
  font: 500 16px/24px "Tally", "AvenirNext forINTUIT", "Nunito Sans", Helvetica, sans-serif;
  transition: background 0.3s cubic-bezier(.35,0,.5,1), border 0.3s cubic-bezier(.35,0,.5,1);
}
.in-btn--square { border-radius: 4px; }
.in-btn--primary { background: #00254A; color: #FFFFFF; }
.in-btn--primary:hover { background: #21262A; }
.in-btn--secondary { background: transparent; border-color: #236CFF; color: #236CFF; }
.in-btn--secondary:hover { background: #21262A; border-color: transparent; color: #FFFFFF; }
.in-btn--quaternary { background: transparent; border-color: #00254A; color: #00254A; }
.in-btn--quaternary:hover { background: rgba(0,37,74,0.2); border-color: transparent; }
.in-btn:disabled { background: #E6E9ED; color: #4D6680; }
.in-btn:focus-visible { outline: 2px solid #236CFF; outline-offset: 3px; }
/* on dark sections */
.dark .in-btn--primary { background: #FFFFFF; color: #00254A; border-color: #00254A; }
.dark .in-btn--primary:hover { background: rgba(255,255,255,0.3); color: #FFFFFF; }
.dark .in-btn--secondary { border-color: #FFFFFF; color: #FFFFFF; }
```

### Global navigation (mega-nav)

White bar with the intuit wordmark left; top items "Products", "Solutions", "Support and Blogs", "Company" (seen on the live press page today) and "Sign in" on the right. Menus drop down as white panels; the Products panel lists each brand with its round icon and wordmark. Text `#21262A`, 16px, hover underline in Super Blue. Country picker in an overlay.

### Product brand row

A row of four product logos (round icon + wordmark) linking to TurboTax, Credit Karma, QuickBooks and Mailchimp. Icons are 40-56px circles in the product color. This is the signature intuit.com element.

### Hero

White or pale-blue `#F4F9FF` background, Blueberry headline 48-72px in Tally Display or Avenir Next Bold, one sentence of body copy at 20px, then primary and secondary buttons side by side. Photo or product UI on the right, often in a rounded 16-24px frame (approximate).

### Cards

```css
.in-card {
  background: #FFFFFF; border-radius: 16px; padding: 24px;   /* radius approximate */
  border: 1px solid #E6E9ED;
  box-shadow: 0 2px 8px rgba(0,37,74,0.08);                  /* approximate */
}
.in-card:hover { box-shadow: 0 8px 24px rgba(0,37,74,0.12); }
```

Story and press cards: image top, date or tag in `#4D6680` 14px, title 20px weight 600, and a text link "Read more" in Super Blue with a small arrow.

### Links

`#236CFF`, weight 500, underline on hover; focus shows a Super Blue border. Inline links in dark sections are white with underline.

### Inputs (design system)

48px tall (approximate), 4px radius, 1px `#8092A4` border, 16px text, label 14px above. Focus: 2px `#0077C5` (product) or `#236CFF` (marketing) border. Error: `#D52B1E` border with a message below.

### Badges and banners

Pill badges with `#EEEEEF` neutral, `#D9EFFB` info, `#E5F4D9` positive, `#FFECD9` attention or `#FAD7D6` negative fills and dark text, 12-14px weight 600. Banners use the same fills full-width with an icon.

### Breadcrumbs and secondary nav

14px links in `#4D6680` separated by chevrons; current page in `#21262A`. A sticky secondary nav (`s03-secondary-navigation`) holds section links under the main header on company pages.

## 6. Layout & Spacing

- **Max width:** about 1200-1280px content (approximate) with 24px mobile and 40-80px desktop gutters.
- **Grid:** 12 columns, 24-32px gutters (approximate).
- **Section spacing:** 64-96px vertical padding; white alternates with `#F4F9FF` or `#ECEEF1` bands.
- **Breakpoints:** roughly 768, 1024 and 1440px (approximate).
- **Density:** comfortable; large touch targets (48px buttons) and short paragraphs.

## 7. Depth, Elevation & Motion

- **Mostly flat,** with light, blueberry-tinted shadows on cards (approximate values above) and 1px `#E6E9ED` borders.
- **Easing:** `cubic-bezier(.35,0,.5,1)` (site "easing-slow") on buttons and nav, `cubic-bezier(.35,0,.25,1)` for menus, `cubic-bezier(.02,.05,.01,.99)` for larger reveals.
- **Duration:** 300ms on buttons; the button arrow fades in after a 200ms delay.
- **Hover:** primary darkens from Blueberry to Pepper; secondary fills with Pepper.

## 8. Iconography & Imagery

- **Icons:** rounded line icons, 2px stroke, 24px grid, in Blueberry or Super Blue. Simple and friendly.
- **Product icons:** solid circles in product colors with a white or dark glyph (TurboTax check mark, Credit Karma "ck", QuickBooks "qb", Mailchimp Freddie).
- **Photography:** real customers and employees: small-business owners in shops, families at kitchen tables, accountants, diverse and warm, natural light.
- **Illustration:** flat, rounded shapes in blue tints (`#7CBCFF`, `#C5E1FF`) with small accent pops in product colors.
- **AI features (Intuit Assist):** blue-to-light-blue gradients and soft glows on subtle surfaces (`#F4F9FF`, `#E0EDFF`).

## 9. Voice & Microcopy

Warm, clear and confident about money. Short sentences, active voice, no finance jargon without explanation.

- Nav seen on the live press page today: "Products", "Solutions", "Support and Blogs", "Company", "Sign in", "Intuit Assist", "Intuit Enterprise Suite", "For Accountants"
- Press page title today: "Press Room - Press Kits, Logo, Media Contacts, B-Roll | Intuit"
- CTAs: "Learn more", "Get started", "Sign in", "See all products", "Download press kit"
- Product copy pattern: product name, then a one-line promise and a verb CTA.
- Errors: "Enter a valid email address.", "Something went wrong. Try again."

Sentence case for buttons and headlines; product names keep their own casing (TurboTax, QuickBooks, Credit Karma, Mailchimp).

## 10. Do's and Don'ts

**Do**

- Use the lowercase Super Blue wordmark top-left on white.
- Make primary buttons Blueberry `#00254A`, 48px tall, with a pill or 4px shape, hover Pepper `#21262A`.
- Use Super Blue `#236CFF` for secondary buttons, links and focus.
- Show the product family with round product icons and their own colors.
- Use Avenir Next (or Nunito Sans) at weight 500-600 for UI.
- Keep backgrounds white or pale blue and photography warm.

**Don't**

- Don't use product colors (TurboTax red, Mailchimp yellow) for Intuit-level actions.
- Don't capitalise or recolor the intuit wordmark.
- Don't use Super Blue for long headlines or body text.
- Don't stack heavy shadows; keep cards light.
- Don't mix pill and square buttons in the same group.
- Don't use dense financial tables on marketing pages; summarise with one big number.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Intuit (intuit.com). White page with pale blue `#F4F9FF` bands. Lowercase blue wordmark `#236CFF` top-left in a white mega-nav with "Products", "Solutions", "Support and Blogs", "Company" and "Sign in". Font: `"AvenirNext forINTUIT", "Avenir Next", "Nunito Sans", Helvetica, sans-serif` for everything; headlines 48-72px weight 600-700 in Blueberry `#00254A`; body 16-20px in Pepper `#21262A`, secondary text `#4D6680`. Primary buttons Blueberry `#00254A` with white 16px weight 500 text, 48px tall, 0 30px padding, 32px radius (pill), hover `#21262A`; secondary buttons transparent with a 1px Super Blue `#236CFF` border and text. A small arrow slides in on hover; easing `cubic-bezier(.35,0,.5,1)` 300ms. Include a row of four round product icons (TurboTax red `#D52B1E`, Credit Karma green `#008600`, QuickBooks green `#2CA01C`, Mailchimp yellow `#FFE01B`) with product names. Cards are white, 16px radius, 1px `#E6E9ED` border, light blue-tinted shadow. Warm customer photography, sentence-case copy.

```css
:root {
  --brand-super-blue: #236CFF;
  --brand-blueberry: #00254A;
  --brand-pepper: #21262A;
  --brand-deep-teal: #0D333F;
  --brand-ice: #F4F9FF;
  --brand-sky: #E0EDFF;
  --brand-blue-300: #7CBCFF;
  --brand-navy-900: #001D3C;
  --brand-gray-01: #E6E9ED;
  --brand-gray-05: #8092A4;
  --brand-gray-07: #4D6680;
  --brand-white: #FFFFFF;
  --brand-action-standard: #0077C5;
  --brand-negative: #D52B1E;
  --brand-positive-bg: #E5F4D9;
  --brand-info-bg: #D9EFFB;
  --brand-attention-bg: #FFECD9;
  --brand-negative-bg: #FAD7D6;
  --brand-turbotax: #D52B1E;
  --brand-creditkarma: #008600;
  --brand-quickbooks: #2CA01C;
  --brand-mailchimp: #FFE01B;
  --brand-font: "Tally", "AvenirNext forINTUIT", "Avenir Next", Avenir, "Nunito Sans", Helvetica, Arial, sans-serif;
  --brand-font-display: "Tally Display", "Tally", "AvenirNext forINTUIT", "Nunito Sans", sans-serif;
  --brand-button-height: 48px;
  --brand-radius-square: 4px;
  --brand-radius-pill: 32px;
  --brand-radius-card: 16px;
  --brand-shadow-card: 0 2px 8px rgba(0,37,74,0.08);
  --brand-shadow-raised: 0 8px 24px rgba(0,37,74,0.12);
  --brand-ease: cubic-bezier(.35,0,.5,1);
  --brand-ease-menu: cubic-bezier(.35,0,.25,1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Intuit.
