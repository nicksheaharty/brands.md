---
name: Rakuten
slug: rakuten
url: https://rakuten.com
category: Commerce
tagline: "Purple cash-back rates, Stag serif headlines and pill buttons on a clean white store grid."
updated: 2026-11-16
appStoreId: 723134859
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Rakuten Purple
    hex: "#8529CD"
    role: Brand color, logo, primary CTA, Cash Back rates, links
  - name: Almost Black
    hex: "#252525"
    role: Primary text, borders, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Dark Indigo
    hex: "#242463"
    role: Inverse hero and banner sections
  - name: Favorite Pink
    hex: "#E80C5B"
    role: Favorite (heart) action
  - name: Rakuten+ Gold
    hex: "#936816"
    role: Rakuten+ membership CTA and Cash Back text
  - name: Purple Hover
    hex: "#9B50D6"
    role: Hover state for purple actions
  - name: Purple Pressed
    hex: "#7119B8"
    role: Pressed state for purple actions
  - name: Deep Purple
    hex: "#480081"
    role: Extension illustrations, darkest purple
  - name: Lavender
    hex: "#F4F3FE"
    role: Preference panels, list dividers
  - name: Grey 400
    hex: "#575757"
    role: Secondary text
  - name: Grey 300
    hex: "#737373"
    role: Tertiary text, unselected state
  - name: Grey 100
    hex: "#DDDDDD"
    role: Icon container borders
  - name: Grey 50
    hex: "#F2F2F2"
    role: Subdued backgrounds
  - name: Sky
    hex: "#D9ECF7"
    role: List view background
  - name: Error Red
    hex: "#B90037"
    role: Error state
fonts:
  display:
    family: "Stag"
    fallback: "Roboto Slab"
    weights: [300, 400]
  body:
    family: "Rakuten Sans UI"
    fallback: "Nunito Sans"
    weights: [400, 600, 700, 900]
typeScale:
  - { role: Hero, size: 64, weight: 300, lineHeight: 1.03, tracking: "0" }
  - { role: H1, size: 52, weight: 300, lineHeight: 1.08, tracking: "0" }
  - { role: H2, size: 40, weight: 400, lineHeight: 1.05, tracking: "0" }
  - { role: H3, size: 32, weight: 400, lineHeight: 1.13, tracking: "0" }
  - { role: Banner, size: 28, weight: 900, lineHeight: 1.21, tracking: "0" }
  - { role: Descriptor, size: 18, weight: 700, lineHeight: 1.22, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Tag, size: 12, weight: 600, lineHeight: 1.33, tracking: "1px" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Default, value: "0 4px 8px rgba(10,22,70,0.15)" }
  - { name: Hover, value: "0 4px 11px rgba(10,22,70,0.2)" }
  - { name: List, value: "0 4px 4px rgba(10,22,70,0.1)" }
  - { name: Modal, value: "0 4px 16px rgba(10,22,70,0.4)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F3FE"
  text: "#252525"
  muted: "#575757"
  border: "#DDDDDD"
  accent: "#8529CD"
  accentText: "#FFFFFF"
  radius: 9999
  buttonStyle: pill
---

# Rakuten

## 1. Visual Theme & Atmosphere

rakuten.com is the US home of Rakuten Rewards (formerly Ebates), the cash-back shopping service owned by Japan's Rakuten Group. It looks like a bright, tidy shopping portal: a white page, rows of store logos in rounded tiles, and next to each one a Cash Back rate in Rakuten Purple. The site is busy by design (hundreds of stores, rotating promotions) but each unit is simple: a logo, a rate, a button.

What makes it recognisable:

- **Purple numbers.** The Cash Back percentage under every store ("12% Cash Back", "Up to 18% Cash Back") is set in bold purple `#8529CD`. It is the main signal on the page.
- **A slab serif for headlines.** Section and hero headings use Stag, a slab serif, often in the Light weight (300) at large sizes. Body and UI use Rakuten Sans UI. The serif-plus-sans pairing makes a coupon site feel more editorial.
- **Pill buttons with a soft shadow.** Primary buttons are fully rounded purple pills that carry a navy-tinted drop shadow.
- **Dark Indigo inverse sections.** `#242463` panels with white serif headlines break up long store grids.
- **Rakuten+ gold.** The paid membership tier switches the accent to gold `#936816` on cream `#FBF9F4`.
- **Global vs US.** Rakuten Group's global brand color is crimson (`#BF0000`). The US rewards site uses purple instead. This file describes rakuten.com.

Mood words: generous, cheerful, organised, trustworthy, quick.

## 2. Color Palette & Roles

All values below are the design tokens served on rakuten.com (November 2026).

| Token | Hex | Role |
|---|---|---|
| brand.purple / fill.ctaPrimary | `#8529CD` | Primary button, Cash Back rate, links, focus, selected |
| state.hover (purple 100) | `#9B50D6` | Hover on purple |
| state.pressed (purple 300) | `#7119B8` | Pressed |
| purple 400 | `#480081` | Extension illustration, deepest purple |
| purple 50 | `#BC9FEA` | Decorative |
| purple 25 | `#CFC0FF` | Decorative highlight |
| purple 15 | `#E4E0FC` | Soft fill |
| purple 05 | `#F4F3FE` | Preference panel background, list dividers |
| brand.darkIndigo | `#242463` | Inverse sections, banner overlay gradient |
| blue 300 | `#3E3E9D` | Info state |
| blue 15 | `#D9ECF7` | List view background |
| text.primary | `#252525` | Body text, primary borders |
| text.secondary | `#575757` | Secondary text |
| text.tertiary | `#737373` | Tertiary text, unselected |
| grey 250 | `#949494` | Disabled |
| grey 200 | `#B9B9B9` | Dividers |
| grey 100 | `#DDDDDD` | Store logo tile borders |
| grey 50 | `#F2F2F2` | Muted background |
| grey 05 | `#FAFAFA` | Lightest background |
| fill.ctaFavorite | `#E80C5B` | Favorite heart |
| White | `#FFFFFF` | Page background |

### Rakuten+ (membership tier)

| Token | Hex | Role |
|---|---|---|
| gold 200 / ctaPrimaryRakPlus | `#936816` | CTA fill and Cash Back text |
| gold 100 / brand.goldRakPlus | `#B1884C` | Hover, focus |
| gold 300 | `#815717` | Pressed |
| gold 15 / ctaSecondaryRakPlus | `#F8F5EF` | Secondary button fill |
| gold 05 / sectionPrimaryRakPlus | `#FBF9F4` | Section background |
| Inverse | `#252525` | Dark section in Rakuten+ |

### Semantic colors

| State | Hex | Tint |
|---|---|---|
| Success | `#33823F` | `#D6F6B5` |
| Warning | `#EE6B00` | `#FFEFB5` |
| Error | `#B90037` | `#FFE2EB` |
| Info | `#3E3E9D` | `#D9ECF7` |

### Gradient

Hero banners over photography use `linear-gradient(90deg, #242463 0%, rgba(36,36,99,0) 100%)` so white text on the left stays readable.

### Dark mode

No dark theme on the website. Inverse sections use `#242463` or `#252525` with white text and white 1px borders.

## 3. Typography

**Headlines:** Stag (Commercial Type), a slab serif. Hero and H1 use weight 300; H2 and H3 use 400.

**UI and body:** Rakuten Sans UI, a proprietary sans served from Rakuten's CDN, at 400, 600, 700 and 900.

**Licensing and fallbacks:** both are licensed fonts. Use **Roboto Slab** (300/400) for Stag and **Nunito Sans** for Rakuten Sans UI. The site's own fallback stacks are `Stag, Georgia, "Times New Roman", serif` and `"Rakuten Sans UI", system-ui, Arial, Roboto, sans-serif`.

### Scale (from production tokens, large / medium / base breakpoints)

| Role | Large | Medium | Base | Weight | Font |
|---|---|---|---|---|---|
| Hero | 64/66 | 46/48 | 40/44 | 300 | Stag |
| H1 | 52/56 | 40/44 | 32/36 | 300 | Stag |
| H2 | 40/42 | 32/36 | 24/28 | 400 | Stag |
| H3 | 32/36 | 28/36 | 20/24 | 400 | Stag |
| Banner large | 28/34 | 28/34 | 24/28 | 900 | Sans |
| Subheader large | 24/28 | 24/26 | 18/22 | 400 | Sans |
| Descriptor L / M / S | 20/24, 18/22, 16/20 | | | 700 | Sans |
| Button large / medium / small | 18/24, 16/24, 14/20 | | | 600 | Sans |
| Cash Back | 16/18 | 16/18 | 14/16 | 600 | Sans |
| Body | 14/20 | | | 400 | Sans |
| Fine print | 12/16 | | | 400 | Sans |
| Tag | 12/16 (small), 16/24 (large) | | | 600, tracking 1px, uppercase | Sans |

### Rules

- Headlines in sentence case, set in Stag, never bold above 400.
- "Cash Back" is always two capitalised words in UI copy.
- Cash Back rates: Sans 600 in purple, number first ("12% Cash Back", "Up to 8% Cash Back", "$5 Cash Back").
- Strikethrough of the old rate uses weight 700 in grey when a rate is boosted.

## 4. Logo & Brand Mark

The US logo is the "Rakuten" wordmark in a custom rounded sans, with a curved swoosh under the letters that tapers from the left (the global "R" underline extended under the whole word). In the US it is Rakuten Purple `#8529CD`.

- **Global brand:** Rakuten Group uses the same wordmark in crimson `#BF0000`. Use crimson only when designing for the global or Japanese brand.
- **App icon / avatar:** the "R" with its underline swoosh, white on purple.
- **Color versions:** purple on white (primary), white on purple, white on Dark Indigo.
- **Clear space:** the height of the "a" on all sides (approximate).
- **Minimum size:** 72px wide on screen; the header uses about 96 x 29px.

Misuse:

- Do not drop or detach the swoosh.
- Do not mix crimson and purple logos on one page.
- Do not set the name in Stag or any other font as a logo.
- Do not place the purple logo on Dark Indigo; use white.

## 5. Components

### Buttons

Buttons are full pills (`radius 9999px`), Sans 600, with a default drop shadow.

| Variant | Background | Text | Notes |
|---|---|---|---|
| Primary large | `#8529CD` | `#FFFFFF` 18/24 600 | padding 16px 32px, shadow default |
| Primary medium | `#8529CD` | `#FFFFFF` 16/24 600 | padding 12px 24px (approx.) |
| Secondary | `#FFFFFF`, 1px `#252525` | `#252525` | Used on store pages |
| Inverse | `#FFFFFF` | `#8529CD` | On Dark Indigo |
| Rakuten+ | `#936816` | `#FFFFFF` | Membership tier |
| Text link | none | `#8529CD` 16/24 600 | Underline on hover |

States: hover `#9B50D6` and `0 4px 11px rgba(10,22,70,.2)`; pressed `#7119B8`; focus ring `0 0 0 2px #FFFFFF, 0 0 0 4px #8529CD`; disabled fill `#949494`. Transition `all 200ms`.

```css
.rak-btn {
  font: 600 18px/24px var(--font-sans);
  color: #fff;
  background: #8529CD;
  border: 0;
  border-radius: 9999px;
  padding: 16px 32px;
  box-shadow: 0 4px 8px rgba(10,22,70,.15);
  transition: all 200ms;
}
.rak-btn:hover { background: #9B50D6; box-shadow: 0 4px 11px rgba(10,22,70,.2); }
.rak-btn:active { background: #7119B8; }
.rak-btn:focus-visible { box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8529CD; }
```

### Store tile (signature)

The core unit of the site:

- White card, radius 12px, border 1px `#DDDDDD` or the default shadow.
- Store logo centred in a 1:1 or 3:2 area with 16-24px padding.
- Below: Cash Back line in purple 600 ("12% Cash Back"), optional old rate struck through in grey, optional "Up to" prefix.
- Favorite heart in the corner, outline grey, filled `#E80C5B` when saved.
- Hover lifts the shadow to `0 4px 11px rgba(10,22,70,.2)`.

Tiles sit in horizontal carousels (with 32px round arrow buttons, `rgba(0,0,0,.25)` fill) or in 4-6 column grids.

### Hero

- Large Stag Light headline, often split across lines ("Earn Cash Back / when you / shop online").
- A primary pill CTA "Join for Free" and a sample earning line in purple.
- Trust row below: rating number, star icon and source (Trustpilot, App Store, Chrome Web Store), 14px.
- On seasonal campaigns, a full-bleed photo with the Dark Indigo gradient overlay.

### Navigation

- White header, logo left (96 x 29px), "Shop by Category" dropdown, search field, then "Browser Extension", "Mobile App", "Sign In" and a "Join Now" pill.
- Nav text 14px Sans 600, `#252525`; active and hover in purple.
- Secondary category row below (Clothing, Beauty, Shoes, Travel, Electronics...) in 14px 400.
- Mobile: hamburger, logo centred, search bar full width under the header.

### Inputs

- Height 48px, radius 8px (`radii.ui`), 1px `#B9B9B9` border, Sans 16px.
- Focus border `#8529CD`. Error border and text `#B90037` with `#FFE2EB` message tint.
- Search field: pill radius, grey `#F2F2F2` fill, magnifier icon left.

### Tags and badges

- Tag small: 12px/16px, weight 600, letter-spacing 1px, uppercase, radius 4px, padding 2px 8px. Examples: "NEW", "EXCLUSIVE", "IN-STORE".
- Boosted rate badge: purple 15 `#E4E0FC` fill, purple text.

### FAQ accordion

Questions in Sans 700 18px, chevron right, divider `#B9B9B9`. Answer text 14-16px `#575757`.

### Modal

White, radius 16px, shadow `0 4px 16px rgba(10,22,70,.4)`, scrim `rgba(0,0,0,.4)`. Sign-up modal stacks social sign-in buttons (outline pills) above an email field and the purple CTA.

## 6. Layout & Spacing

- **Space tokens:** 4 (xxsmall), 8 (xsmall), 12 (small), 16 (medium), 20 (venti), 24 (grande), 32 (large), 48 (xlarge), 64 (xxlarge).
- **Breakpoints:** 360, 400, 600, 960, 1280, 1440, 1600, 1920px.
- **Container:** about 1280-1440px wide with 30px side padding from 600px up, 16px on small phones.
- **Section padding:** up to 128px top and bottom on large banners, 48-64px between store rows.
- **Grid:** store tiles in 2 columns (phone), 3-4 (tablet), 6 (desktop), with 16-24px gaps.
- **Density:** high on store listings, generous on landing sections.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| default | `0 4px 8px #0A164626` (navy at 15%) |
| defaultEmphasized / defaultHover | `0 4px 11px #0A164633` |
| listView | `0 4px 4px #0A16461A` |
| hoverOnDarkBackground | `0 4px 11px #0A1646D4` |
| modal | `0 4px 16px #0A164666` |

- Shadows are tinted navy `#0A1646`, never neutral black.
- Transitions: 200ms on buttons; carousels slide over about 300ms ease (approximate).
- Little decorative motion; the page moves through carousels and hover lifts.

## 8. Iconography & Imagery

- **Icons:** simple line icons at 24px with 2px rounded strokes, in `#252525`; active states in purple.
- **Store logos:** the main imagery. Always show retailer logos in full color inside white tiles with even padding.
- **Photography:** lifestyle shopping photos (people with bags, travel scenes, food) cropped wide for banners, with the indigo gradient on the text side.
- **Illustration:** flat illustrations in purple 400 `#480081`, lavender and white, mostly for the browser extension and how-it-works steps.
- **Patterns:** subtle textured pattern backgrounds behind highlight bands and the sign-off section.

## 9. Voice & Microcopy

Friendly, direct and money-focused. Every message leads with what the shopper earns.

- Use "Cash Back" with capitals, and put the number first.
- Short imperative CTAs: "Join for Free", "Shop Now", "Add the Extension", "Get the App", "See Stores".
- Plain answers in FAQs, no jargon.
- Always add a light disclaimer near rates ("Your Cash Back may vary.", "Terms Apply").

Sample strings (seen on rakuten.com on 2026-11-16):

- "Earn Cash Back when you shop online"
- "Rewards wherever you are"
- "Stack the savings"
- "Cash Back stacks on top of sales and credit card rewards."
- "How does Rakuten make money?"
- "Get paid your way"

## 10. Do's and Don'ts

**Do**

- Make the purple Cash Back rate the loudest thing on each store tile.
- Pair Stag (or Roboto Slab) Light headlines with a clean sans UI.
- Use pill buttons with the navy-tinted shadow.
- Keep store logos in white tiles with consistent padding.
- Use Dark Indigo `#242463` for inverse bands.
- Switch to gold only for Rakuten+ content.

**Don't**

- Don't use crimson `#BF0000` on the US site; that is the global Rakuten color.
- Don't bold the Stag headlines.
- Don't use flat, unshadowed purple buttons on white; the soft shadow is part of the look.
- Don't write "cashback" or "cash-back" in UI copy.
- Don't state rates without a "may vary" or "Terms Apply" note.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Rakuten (rakuten.com, US cash-back site). White page, text `#252525`, secondary `#575757`, tertiary `#737373`, borders `#DDDDDD`. Brand color Rakuten Purple `#8529CD` for primary buttons, links and every Cash Back rate (hover `#9B50D6`, pressed `#7119B8`). Headlines in "Roboto Slab" weight 300 (a stand-in for Stag), large (52-64px desktop). UI and body in "Nunito Sans" (stand-in for Rakuten Sans UI), body 14px/20px, buttons 600. Buttons are pills (radius 9999px, padding 16px 32px) with a navy-tinted shadow `0 4px 8px rgba(10,22,70,.15)`. Build a grid of white store tiles (radius 12px, 1px `#DDDDDD` border) showing a retailer logo and a purple "12% Cash Back" line, with a heart favorite in `#E80C5B`. Use Dark Indigo `#242463` sections with white serif headlines and lavender `#F4F3FE` panels. Copy is upbeat and money-first: "Join for Free", "Shop Now".

```css
:root {
  --brand-purple: #8529CD;
  --brand-purple-hover: #9B50D6;
  --brand-purple-pressed: #7119B8;
  --brand-purple-deep: #480081;
  --brand-purple-soft: #E4E0FC;
  --brand-lavender: #F4F3FE;
  --brand-indigo: #242463;
  --brand-text: #252525;
  --brand-text-secondary: #575757;
  --brand-text-tertiary: #737373;
  --brand-border: #DDDDDD;
  --brand-divider: #B9B9B9;
  --brand-surface: #F2F2F2;
  --brand-bg: #FFFFFF;
  --brand-favorite: #E80C5B;
  --brand-gold: #936816;
  --brand-gold-bg: #FBF9F4;
  --brand-success: #33823F;
  --brand-warning: #EE6B00;
  --brand-error: #B90037;
  --brand-info: #3E3E9D;
  --brand-font-serif: "Stag", "Roboto Slab", Georgia, serif;
  --brand-font-sans: "Rakuten Sans UI", "Nunito Sans", system-ui, Arial, sans-serif;
  --brand-radius-tag: 4px;
  --brand-radius-ui: 8px;
  --brand-radius-card: 12px;
  --brand-radius-cta: 20px;
  --brand-radius-full: 9999px;
  --brand-shadow: 0 4px 8px rgba(10,22,70,.15);
  --brand-shadow-hover: 0 4px 11px rgba(10,22,70,.2);
  --brand-shadow-modal: 0 4px 16px rgba(10,22,70,.4);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Rakuten.
