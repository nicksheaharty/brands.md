---
name: Betterment
slug: betterment
url: https://betterment.com
category: Finance
tagline: "Navy and gold, serif Season Mix headlines, blue buttons and offset hard-shadow cards."
updated: 2026-11-16
appStoreId: 393156562
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Navy
    hex: "#000B50"
    role: Logo wordmark, headlines, stats band, app icon background
  - name: Gold
    hex: "#FFC729"
    role: Logo mark, hero CTA fill, highlights
  - name: Blue
    hex: "#1D6AE5"
    role: Primary buttons in content, links, focus outlines
  - name: Cream
    hex: "#F9F0E2"
    role: Warm section background (FAQ, offers)
  - name: Sunset Orange
    hex: "#FF835E"
    role: Start of the mark gradient on the app icon
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Text
    hex: "#212121"
    role: Default body text
  - name: Muted Text
    hex: "#5C5C5C"
    role: Secondary text and captions
  - name: Blue Hover
    hex: "#2C78EA"
    role: Blue button hover
  - name: Light Blue
    hex: "#9EC9FF"
    role: Accents on navy, illustration fills
  - name: Grey 10
    hex: "#F5F5F5"
    role: Quiet section background, white button hover
  - name: Grey 20
    hex: "#E6E6E6"
    role: Weak borders
  - name: Separator
    hex: "#C7C7C7"
    role: Dividers
  - name: Teal
    hex: "#226D78"
    role: Secondary accent for retirement and charts
  - name: Purple
    hex: "#703DEA"
    role: Accent for new products and badges
fonts:
  display:
    family: "Season Mix"
    fallback: "Source Serif 4"
    weights: [500]
  body:
    family: "GT America"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Headline 1, size: 68, weight: 500, lineHeight: 1.05, tracking: "-0.01em" }
  - { role: Headline 2, size: 44, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Headline 3, size: 36, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Subhead 1, size: 28, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Subhead 3, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body 1, size: 18, weight: 400, lineHeight: 1.35, tracking: "0" }
  - { role: Body 2, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Disclosure, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 48, 80, 120]
shadows:
  - { name: Short, value: "3px 3px 0 rgba(0,11,80,0.05)" }
  - { name: Long, value: "6px 6px 0 rgba(0,11,80,0.1), inset 1.5px 1.5px 1.5px #FFFFFF, inset -1.5px -1.5px 1.5px rgba(0,11,80,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F9F0E2"
  text: "#000B50"
  muted: "#5C5C5C"
  border: "#E6E6E6"
  accent: "#1D6AE5"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Betterment

## 1. Visual Theme & Atmosphere

Betterment's current site pairs a deep navy and a sunny gold with a warm serif headline face. The hero is a full-bleed lifestyle photo with a white serif headline and a gold "Get started" button; below it, white and cream sections hold product cards that look slightly physical, thanks to hard, offset navy shadows and a faint bevel. Paper money and coin illustrations float around some hero slides.

What makes it recognisable:

- **Navy + gold.** Navy `#000B50` carries the logo, headlines and the stats band; gold `#FFC729` is the logo's half-sun mark and the hero CTA.
- **Serif headlines.** Season Mix at weight 500 gives a friendly, editorial tone that sets Betterment apart from the sans-serif fintech pack. Body copy is GT America.
- **Hard offset shadows.** Cards use `6px 6px 0 rgba(0,11,80,0.1)` plus inset highlights, so they read like raised tiles rather than floating panels.
- **Blue for doing.** In-page CTAs are bright blue `#1D6AE5`; gold is reserved for the hero and promotional moments.
- **Warm neutrals.** Cream `#F9F0E2` backs FAQs and offers instead of cold grey.
- **Offer-led.** The page leads with promotional rates and bonuses, each with "Terms apply" right underneath.

Mood words: warm, trustworthy, friendly, optimistic, grown-up.

## 2. Color Palette & Roles

Tokens come from the homepage stylesheet (`--bt-*`), with an older CMS ramp (`--custom-cms-*`) still used on inner pages.

| Name | Hex | Role |
|---|---|---|
| Navy (`--bt-navy`) | `#000B50` | Logo text, headlines, stats band, body text on cream |
| Gold (`--bt-gold`) | `#FFC729` | Logo mark, hero CTA |
| Gold Hover | `#FFD45C` | Gold button hover |
| Blue (`--bt-blue`) | `#1D6AE5` | Content buttons, links, "loud" text |
| Blue 50 | `#2C78EA` | Blue hover |
| Light Blue | `#9EC9FF` | Accents on navy |
| Cream (`--bt-cream`) | `#F9F0E2` | Warm section background |
| Grey 10 | `#F5F5F5` | Quiet background, white button hover |
| Grey 20 | `#E6E6E6` | Weak borders |
| Separator | `#C7C7C7` | Dividers |
| Border Muted | `rgba(164,164,164,0.4)` | Hairlines on cream |
| Text | `#212121` | Default text |
| Muted Text | `#5C5C5C` | Secondary text |
| Teal | `#226D78` | Retirement accents |
| Purple | `#703DEA` | "New" badges |

### Mark gradient

The app icon and footer mark fill the half-sun with a vertical gradient from sunset orange `#FF835E` (bottom) to gold `#FFC729` (top). The header logo uses solid gold.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Positive | `#226D78` teal or a green from charts (approximate) | Gains |
| Error | `#B0261D` | Validation, failed states |
| Info | `#1D6AE5` on `#E3F8FF` | Notices |
| Focus | `#8FB5F2` 2px outline, 2px offset | Keyboard focus on dark nav buttons |

### Dark bands

The stats band is solid navy with white 48px figures, white captions and gold or light-blue laurels. Text on photos is white (`--bt-text-overlay`).

## 3. Typography

**Families:** Season Mix (a contemporary serif) for headlines, `--bt-weight-headline: 500`; GT America (Grilli Type) for body, buttons and UI. A few campaign pages also load GT America Extended, Compressed and Black.

**Licensing:** both are commercial. Betterment's own fallback stacks name the free substitutes: **Source Serif 4** for Season Mix and **Inter** for GT America.

```css
--bt-font-headline: 'Season Mix', 'Source Serif 4', Georgia, serif;
--bt-font-text: 'GT America', 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

### Scale (desktop tokens)

| Role | Size | Weight | Line height |
|---|---|---|---|
| Headline 1 (hero) | 68px (`clamp(44px, 6.5vw, 68px)`) | 500 serif | about 1.05 (approximate) |
| Headline 2 | 44px (`clamp(34px, 5vw, 44px)`) | 500 serif | about 1.1 (approximate) |
| Headline 3 | 36px | 500 serif | about 1.15 (approximate) |
| Subhead 1 | 28px | 500 | 1.25 (approximate) |
| Subhead 3 | 20px | 500 | 1.3 (approximate) |
| Stat figure | 48px | 500 serif | 1 |
| Body 1 | 18px | 400 | 1.35 |
| Body 2 | 16px | 400 | 1.5 |
| Button | 16px | 500 | 1.35 |
| Disclosure | 12px | 400 | 1.5 |

Mobile hero headline is 56px; H2 drops to 34px.

### Rules

- Headlines in sentence case, often split over two lines with the second line carrying the promise: "Build wealth / with confidence and ease".
- Serif for headlines and big numbers only; everything functional (nav, buttons, labels, tables) is GT America.
- Percentages show the "%" and "APY" smaller than the figure.
- Small "New" and "Most popular" tags in GT America 12-14px.

## 4. Logo & Brand Mark

The logo is a gold half-sun mark (a circle cut by a shallow upward V at the bottom, like a sun rising over a horizon) followed by the "Betterment" wordmark in a rounded geometric sans, navy `#000B50`.

- **Color versions:** gold mark + navy wordmark on white or cream; gold mark + white wordmark on navy and photos (the nav sets `fill: #fff` on dark heroes).
- **App icon:** the mark alone with an orange-to-gold gradient on a navy square.
- **Favicon:** a navy circle.
- **Clear space:** about half the mark's height on all sides (approximate).
- **Minimum size:** the header renders it about 140px wide (`max-width: 14rem`); keep it above about 100px.

Misuse:

- Do not recolor the mark blue or fill the wordmark gold.
- Do not use the gradient mark in the header lockup; the gradient is for the app icon.
- Do not set the wordmark in Season Mix or any other font.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Gold (hero) | `#FFC729` | `#000B50` 16px/500 | none | 4px | 11px 24px (43px tall) |
| Blue (content) | `#1D6AE5` | `#FFFFFF` | none | 4px | 11px 24px |
| White (on photo/navy) | `#FFFFFF` | `#000B50` | none | 4px | 11px 24px |
| Text link with arrow | transparent | `#1D6AE5` 500 | none | 0 | 0, 1.4em arrow icon right |

States:

- Hover: gold `#FFD45C`, blue `#2C78EA`, white `#F5F5F5`.
- Focus: `outline: 2px solid #8FB5F2; outline-offset: 2px` on dark, `1px solid #1D6AE5` around the logo link.
- Transition: `background-color .15s ease, color .15s ease`.
- Disabled: `#A9A9A9` fill, white text.

```css
.bt-btn {
  display: inline-flex; align-items: center; justify-content: center;
  font: 500 16px/1.35 'GT America', Inter, sans-serif;
  padding: 11px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color .15s ease, color .15s ease;
}
.bt-btn--gold { background: #FFC729; color: #000B50; }
.bt-btn--gold:hover { background: #FFD45C; }
.bt-btn--blue { background: #1D6AE5; color: #fff; }
.bt-btn--blue:hover { background: #2C78EA; }
```

### Plan cards (signature)

- White, `border-radius: 20px`, `overflow: hidden`, `box-shadow: var(--bt-shadow-long)` (6px 6px hard offset plus inset bevel).
- Card head: eyebrow line ("Let us handle it", "You build it, we manage it"), serif title ("Automated investing"), and a "Most popular" or "New" tag on the right.
- Body: 16px description, then a blue "Get started" button and a "Learn more" text link side by side.
- Artwork panel at the top of each card with product illustration.
- Three across on desktop (437px max each, center card first on mobile).

### Offer banners

Two-column band: left a serif H2 (an APY-boost offer), short checklist, gold or blue "Activate offer" button and "Terms apply" link; right a big rate figure (the current APY, with a small "(variable)" note) on an illustrated card.

### Stats band

Navy background, 80px vertical padding (64px tablet, 48px mobile), a horizontally scrolling marquee of stats (48px serif figures, 16px captions) and App Store / Google Play ratings framed by laurel leaves.

### Navigation

- White top bar with navy logo (about 140px). Above it on desktop, an audience switch: "Individuals", "Employers", "Advisors".
- Main items: "Invest", "Cash", "Retirement", "Premium", "Offers", "Resources". Each opens a mega menu with a "Popular" or "New" tag, product title and one-line description, and a promo card with a CTA ("Claim offer").
- Right: "Log in" and a "Get started" or "Get app" button.
- On photo heroes the bar can be transparent with a white logo.

### Inputs

GT America 16px, 1px `#C7C7C7` border, 4px radius, 48px tall, blue `#1D6AE5` border on focus, `#B0261D` for errors (approximate, inner app values not checked).

### FAQ accordion

Cream background, each item separated by a 1px `rgba(164,164,164,0.4)` hairline with 32px space above it; question in about 20px/500 navy (approximate), chevron right; answer 14-16px navy with 12px between paragraphs.

### Disclosures

12px `#5C5C5C` paragraphs under every promo, plus the line "Image is illustrative." under hero art.

## 6. Layout & Spacing

- **Spacing tokens:** 4, 8, 12, 16, 24, 32, 40, 48, 80, 120px (`--bt-space-xs` to `--bt-space-5xl`).
- **Container:** `.bt-container` max width 1440px with 28.8px side padding (16px on mobile). Grid gap 20px.
- **Text measure:** body copy blocks capped at 413-550px.
- **Breakpoints:** 480, 700, 768, 963, 1024, 1240px.
- **Sections:** 80px top and bottom on desktop, 48px on mobile. The retirement photo band is about 760px tall.
- **Hero:** full-bleed photo carousel, 7.5s per slide, copy block left-aligned in the container.

## 7. Depth, Elevation & Motion

- Shadows are hard and offset, never blurred: `3px 3px 0 rgba(0,11,80,0.05)` for small elements, `6px 6px 0 rgba(0,11,80,0.1)` plus inset `1.5px 1.5px 1.5px #fff` and `-1.5px -1.5px 1.5px rgba(0,11,80,0.25)` for cards.
- Dropdown menus use a soft `0 2px 9px rgba(0,0,0,0.2)`.
- Mobile sheet: white panel with 16px top corners sliding up (`transform .2s ease-out`).
- Hero carousel autoplays every 7.5s; floating bill illustrations drift slightly.
- Stats marquee scrolls continuously (stops under reduced motion).

## 8. Iconography & Imagery

- Icons (approximate): simple 24px line icons in navy or blue (arrows, chevrons, close), with 16px social icons in the footer.
- Photography: warm, candid lifestyle shots of people at home and outdoors, cropped full-bleed in heroes and the retirement band.
- Illustrations: flat paper bills, coins and product cards in navy, gold, blue and cream, slightly rotated.

## 9. Voice & Microcopy

Friendly, reassuring and benefit-led, with a clear promise in each headline and legal clarity right underneath.

- Sentence case everywhere.
- Speak to the reader's life ("Investing and saving shouldn't take over your life.").
- Always pair offers with "Terms apply" and the as-of date. Pull rates and bonus amounts from the live site the day you build.
- CTAs: "Get started", "Activate offer", "Claim offer", "Learn more", "Log in", "Get app".

Sample strings:

- Hero: "Build wealth with confidence and ease"
- Sub: "Investing and saving shouldn't take over your life. Betterment automates the work for you."
- Proof points: "Invest the way you want", "Helps you save on taxes"
- Section: "Get started with an account in minutes."

## 10. Do's and Don'ts

**Do**

- Use navy `#000B50` for headlines and gold `#FFC729` for the hero CTA.
- Set headlines in a warm serif at weight 500, body in a clean grotesque.
- Use blue `#1D6AE5` buttons with 4px corners for in-page actions.
- Give cards 20px corners and the hard offset navy shadow.
- Use cream `#F9F0E2` for FAQ and offer sections.
- Put disclosures directly under every promotional figure.

**Don't**

- Don't use soft blurred drop shadows on cards.
- Don't use pill buttons or gold for every CTA.
- Don't set UI labels or buttons in the serif.
- Don't use the orange-gold gradient anywhere except the mark.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Betterment. White page with navy `#000B50` headlines in a warm serif (`'Season Mix', 'Source Serif 4', Georgia, serif`, weight 500, hero 68px) and body in `'GT America', Inter, sans-serif` at 16-18px, color `#212121`. Start with a full-bleed photo hero, white serif headline over two lines, short white subcopy and a gold `#FFC729` button with navy text (4px radius, 11px 24px padding, hover `#FFD45C`). In-page buttons are blue `#1D6AE5` with white text (hover `#2C78EA`). Product cards are white, 20px radius, with a hard offset shadow `6px 6px 0 rgba(0,11,80,0.1), inset 1.5px 1.5px 1.5px #fff, inset -1.5px -1.5px 1.5px rgba(0,11,80,0.25)`, an eyebrow, serif title, "Most popular" tag, blue button and "Learn more" link. Add a navy stats band with 48px serif figures and laurel-framed app ratings, an offer section with a big APY figure and "Terms apply", and a cream `#F9F0E2` FAQ accordion separated by thin hairlines. Container 1440px, 80px section padding, 20px grid gap.

```css
:root {
  --brand-navy: #000B50;
  --brand-gold: #FFC729;
  --brand-gold-hover: #FFD45C;
  --brand-blue: #1D6AE5;
  --brand-blue-hover: #2C78EA;
  --brand-light-blue: #9EC9FF;
  --brand-cream: #F9F0E2;
  --brand-grey-20: #E6E6E6;
  --brand-separator: #C7C7C7;
  --brand-text: #212121;
  --brand-text-muted: #5C5C5C;
  --brand-teal: #226D78;
  --brand-purple: #703DEA;
  --brand-mark-gradient: linear-gradient(0deg, #FF835E, #FFC729);
  --brand-font-headline: 'Season Mix', 'Source Serif 4', Georgia, serif;
  --brand-font-text: 'GT America', 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --brand-weight-headline: 500;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-card: 20px;
  --brand-radius-round: 9999px;
  --brand-shadow-short: 3px 3px 0 rgba(0,11,80,0.05);
  --brand-shadow-long: 6px 6px 0 rgba(0,11,80,0.1), inset 1.5px 1.5px 1.5px #fff, inset -1.5px -1.5px 1.5px rgba(0,11,80,0.25);
  --brand-container: 1440px;
  --brand-gutter: 28.8px;
  --brand-section-pad: 80px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Betterment.
