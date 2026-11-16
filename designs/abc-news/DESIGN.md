---
name: ABC News
slug: abc-news
url: https://abcnews.go.com
category: News
tagline: "Black-and-white abc circle, tight Post Grotesk headlines, Tiempos body text, blue actions."
updated: 2026-11-16
appStoreId: 300255638
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Logo, header text, high-emphasis surfaces
  - name: Ink
    hex: "#141618"
    role: Headlines, article body, card text (gray100)
  - name: Action Blue
    hex: "#0045DA"
    role: Primary button, links, focus (blue60)
  - name: Live Red
    hex: "#C60811"
    role: Live and breaking labels (red60)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Gray 60
    hex: "#656C7A"
    role: Bylines, timestamps, metadata
  - name: Blue 70
    hex: "#0037AE"
    role: Button and link hover
  - name: Blue 80
    hex: "#002983"
    role: Pressed state
  - name: Video Blue
    hex: "#026ABA"
    role: Alternate promoted button, video and badge accents
  - name: Promoted Badge
    hex: "#3772DF"
    role: Promoted badge background
  - name: Gray 70
    hex: "#515662"
    role: Card details, secondary text
  - name: Gray 80
    hex: "#3D4149"
    role: Popovers and dark text
  - name: Gray 30
    hex: "#CBCED4"
    role: Borders, disabled text
  - name: Gray 10
    hex: "#F4F5F6"
    role: Light surfaces and standard badge background
  - name: Blue 10
    hex: "#E5EEFF"
    role: Quiet button fill
fonts:
  display:
    family: "Post Grotesk"
    fallback: "Inter Tight"
    weights: [500, 700]
  body:
    family: "Tiempos Text"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Display XL, size: 32, weight: 700, lineHeight: 1.06, tracking: "-0.03em" }
  - { role: Display LG, size: 28, weight: 700, lineHeight: 1.07, tracking: "-0.03em" }
  - { role: Display MD, size: 24, weight: 700, lineHeight: 1.08, tracking: "-0.03em" }
  - { role: Headline LG, size: 20, weight: 700, lineHeight: 1.1, tracking: "-0.03em" }
  - { role: Article body, size: 18, weight: 400, lineHeight: 1.56, tracking: "-0.01em" }
  - { role: Body MD, size: 14, weight: 400, lineHeight: 1.43, tracking: "-0.02em" }
  - { role: Label, size: 12, weight: 700, lineHeight: 1.33, tracking: "0" }
radii: { sm: 2, md: 4, lg: 6, pill: 100 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48]
shadows:
  - { name: Card, value: "0 8px 10px 0 rgba(0,0,0,0.03)" }
  - { name: Popover, value: "0 4px 20px 0 rgba(0,0,0,0.12)" }
  - { name: Overlay, value: "0 4px 20px 0 rgba(0,0,0,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F5F6"
  text: "#141618"
  muted: "#656C7A"
  border: "#CBCED4"
  accent: "#0045DA"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# ABC News

## 1. Visual Theme & Atmosphere

ABC News is a clean, high-contrast news product: a white page, a black abc circle logo with a serif "NEWS" wordmark, tight bold sans headlines (Post Grotesk) and a serif reading face (Tiempos Text) for article bodies. The interface layer is a tokenised design system shared across Disney's news products, with a blue action colour, a cool grey ramp and small, consistent radii.

What makes it recognisable:

- **The abc circle.** A solid black disc with lowercase "abc" knocked out, followed by "NEWS" in a classic high-contrast serif.
- **Tight display type.** Post Grotesk at 700 with -0.03em tracking and line height barely above 1.
- **Serif reading.** Article body in Tiempos Text 18/28px, which gives long reads a print feel.
- **Cool greys.** Metadata and secondary text sit in blue-leaning greys (`#656C7A`, `#515662`).
- **Video everywhere.** Video cards, "ABC News Live" streams and Good Morning America and World News Tonight segments appear in the feed with play badges and live pills.

Mood: composed, broadcast-network polish, more white space than most US news homepages.

## 2. Color Palette & Roles

Token names from the site CSS (`--color-blue60`, `--color-gray100`, `--button-promoted-*`).

| Name | Hex | Token / role |
|---|---|---|
| Black | `#000000` | Logo, header text, dark badges |
| Ink (gray100) | `#141618` | `--articleBody-body-color`, card titles, headlines |
| Gray 110 | `#090A0B` | Darkest surface |
| Gray 90 | `#22252A` | Dark mode surface |
| Gray 80 | `#3D4149` | Popover text |
| Gray 70 | `#515662` | Card details list |
| Gray 60 | `#656C7A` | Byline, pub date, read time, separators |
| Gray 50 | `#969CA8` | Placeholder |
| Gray 40 | `#B0B5BE` | Disabled icons |
| Gray 30 | `#CBCED4` | Borders, disabled text |
| Gray 20 | `#E5E6E9` | Dividers, disabled button fill |
| Gray 10 | `#F4F5F6` | Light surfaces |
| White | `#FFFFFF` | Page |

### Blue (actions)

| Token | Hex | Use |
|---|---|---|
| blue10 | `#E5EEFF` | Standard button fill |
| blue20 | `#CEDEFF` | Standard button hover |
| blue30 | `#AEC7FF` | Pressed quiet button |
| blue50 | `#548AFF` | Accent on dark |
| blue60 | `#0045DA` | Promoted button, links |
| blue70 | `#0037AE` | Hover |
| blue80 | `#002983` | Pressed |
| blue90 | `#001C57` | Deep navy |
| Video blue | `#026ABA` (hover `#025595`, pressed `#014070`) | Alternate promoted scheme for video and network modules |
| Promoted badge | `#3772DF` | Promoted badge fill |

### Red (live and alerts)

| Token | Hex |
|---|---|
| red60 | `#C60811` live labels, breaking |
| red70 | `#9E060E` pressed |
| red50 | `#F0575F` red on dark |
| Live pill text | `#FE0000` in media placeholders |

### Semantic

- Success / commerce: `#0F7F65`.
- Error: `#C60811`.
- Focus: 2px solid outline `#5A5C5D` on light, `#CECFCF` on dark.

### Dark mode

Immersive and video pages use black backgrounds with gradient overlays (`rgba(0,0,0,.23)` to `.54`) and white text; buttons flip to white fills with black text. The main site is light; the app follows system appearance (approximate).

## 3. Typography

**Families**

- **Post Grotesk** (Colophon Foundry): headlines, labels, UI. Stack: `Post-Grotesk, -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif`.
- **Tiempos Text** and **Tiempos Headline** (Klim Type Foundry): article body and some feature headlines. Stack `TiemposText, Georgia, "Times New Roman", serif`.

Both are commercial. Closest Google Fonts: **Inter Tight** for Post Grotesk, **Source Serif 4** for Tiempos.

### Scale (desktop values; mobile is one step smaller)

| Token | Value | Tracking |
|---|---|---|
| text-display-xl | 700 32px/34px (28/30 mobile) | -0.03em |
| text-display-lg | 700 28px/30px (24/26) | -0.03em |
| text-display-lgMed | 500 28px/30px | -0.03em |
| text-display-md | 700 24px/26px (22/24) | -0.03em |
| text-display-sm | 700 20px/22px (18/20) | -0.03em |
| text-display-xs | 700 18px/20px (16/18) | -0.03em |
| text-headline-lg | 700 20px/22px | -0.03em |
| text-body-article | 400 18px/28px Tiempos (16/26 mobile) | -0.01em |
| text-body-lg | 400 16px/22px Post Grotesk | -0.02em |
| text-body-md | 400 14px/20px | -0.02em |
| Label | 700 12px/16px, often uppercase | 0 |

Article page headline: Post Grotesk 700, about 40px desktop with -0.03em tracking (approximate). Article H2 uses display-md, H3 display-sm.

### Rules

- Sentence case headlines. Labels like "LIVE" and section kickers are uppercase.
- Tight tracking on every display size; never set Post Grotesk headlines at 0 tracking.
- `<b>` and `<strong>` in body are 700.
- Bylines and dates use 14px Post Grotesk in `#656C7A`.

## 4. Logo & Brand Mark

The ABC News logo pairs the abc circle (Paul Rand's 1962 design: lowercase "abc" knocked out of a black disc) with the word **NEWS** in a high-contrast serif with bracketed serifs.

- **Primary:** black circle and black NEWS on white.
- **Reversed:** white circle with black letters and white NEWS on black or photos.
- **Circle alone:** used for app icon, avatars and favicons.
- **Clear space:** at least the height of the "a" bowl around the lockup.
- **Minimum size:** circle 16px; lockup about 80px wide.

Misuse: don't put colour in the circle, don't redraw the letters in Post Grotesk, don't place the lockup on busy photos without a scrim.

## 5. Components

### Header

- White bar, about 56-64px, logo centred or left depending on breakpoint, hamburger menu left, search and "Watch Live" right.
- Section nav in Post Grotesk 14-16px/500, black, hover underline.
- A thin `#E5E6E9` rule under the header.

### Live and breaking

- "LIVE" pill: `#C60811` fill, white 12px/700 uppercase, 4px radius, with a pulsing white dot (approximate).
- Breaking banner: full-width red `#C60811` strip, white label and headline in Post Grotesk 700 (approximate).
- "ABC News Live" stream module: black card, 16:9 player, red LIVE pill, show name in white.

### Cards and feed

```css
.card {
  color: #141618;
}
.card__title {
  font: 700 20px/22px Post-Grotesk, "Inter Tight", sans-serif;
  letter-spacing: -0.03em;
}
.card__meta {
  font: 400 12px/16px Post-Grotesk, sans-serif;
  color: #656C7A;
}
.card__image {
  border-radius: 6px;  /* approximate; many crops are square */
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

- Lead story: large image, display-xl headline, short description in `#5A5C5D`.
- Secondary stories: image left, headline right, or stacked text links.
- Video cards carry an overlay badge: `rgba(0,0,0,.75)` with white play icon and duration, 4px radius.

### Badges

| Variant | Style |
|---|---|
| Standard | `#F4F5F6` fill, `#141618` text, 6px radius |
| Promoted | `#3772DF` fill, white text |
| Overlay | `rgba(0,0,0,.75)` fill, white text |
| Demoted | transparent, `#656C7A` text |
| Pill | 100px radius |

### Article page

- Section kicker, headline in Post Grotesk 700 with tight tracking, then a byline row: author names, "ABC News", date and read time in `#656C7A` separated by small bullets.
- Lead image or video full column width, caption in 14px Post Grotesk `#656C7A`, credit after.
- Body Tiempos Text 18/28px `#141618`, -0.01em, about 640px column.
- Subheads: Post Grotesk 700 24px (H2), 20px (H3).
- Pull quotes: Tiempos Headline or Post Grotesk 700 around 24-28px with a short rule (approximate).
- Live blog entries: time stamp, headline, body, separated by `#E5E6E9` rules.

### Buttons

| Variant | Resting | Hover | Pressed | Text |
|---|---|---|---|---|
| Promoted | `#0045DA` | `#0037AE` | `#002983` | white |
| Promoted (video scheme) | `#026ABA` | `#025595` | `#014070` | white |
| Standard | `#E5EEFF`, 1px `#0045DA` border | `#CEDEFF` | `#AEC7FF` | `#0045DA` |
| On dark | white | `#F4F4F4` | `#CECFCF` | black |
| Disabled | `#E5E6E9` | | | `#CBCED4` |

Radius 6px, height 40-48px, Post Grotesk 14-16px/700. Focus outline 2px solid `#5A5C5D`.

### Video player

- 16:9, black, 0-6px radius. Big white play icon. LIVE pill top-left for streams.
- Control bar: white icons, thin progress line, captions toggle.
- Up-next playlist on the right on desktop with thumbnails and durations.

### Inputs

White fill, 1px `#CBCED4` border, 6px radius, 44-48px tall, 16px text; hover and focus keep white fill and darken the border to `#141618`.

## 6. Layout & Spacing

- Breakpoints: 375px, 768px, 1024px, 1240px, 1440px.
- Content width up to about 1240px with 16px gutters on mobile, 24-32px on desktop (approximate).
- Homepage: lead story column with a stack of secondary stories beside it, then horizontal rails (video, "Top Stories", GMA, World News Tonight) and a right rail on large screens.
- Article: single 640-700px column, media can break wider.
- Spacing steps: 4, 8, 12, 16, 20, 24, 32, 40, 48px.

## 7. Depth, Elevation & Motion

- Cards: `0 8px 10px 0 rgba(0,0,0,0.03)` (barely visible).
- Popovers and menus: `0 4px 20px 0 rgba(0,0,0,0.12)`; overlays on video `0 4px 20px 0 rgba(0,0,0,0.5)`.
- Transitions: `transform .25s` for card hovers and carousels, `all .2s ease-in-out` for buttons, `background-color .1s linear` for presses.
- Motion tokens `--motion-enter-duration` and `--motion-enter-timing` drive entrances.

## 8. Iconography & Imagery

- Icons from an icon font (icomoon): solid, simple glyphs at 16-24px.
- Strong documentary photography and broadcast stills; video thumbnails dominate.
- Immersive stories place white text over images with a dark gradient (`rgba(0,0,0,.23)` to `.54`).
- Network show brands (GMA, World News Tonight, Nightline, 20/20) appear as small logos on cards.

## 9. Voice & Microcopy

Clear, neutral, broadcast style.

- Labels: "LIVE", "BREAKING", "VIDEO", "ANALYSIS".
- Buttons: "Watch Live", "Sign in", "Load more", "Share".
- Bylines: "By Jane Doe and John Roe" with "ABC News" affiliation.
- Meta: "November 16, 2026, 4:10 PM" and "3 min read".
- Stream labels: "ABC News Live", "Watch now".

## 10. Do's and Don'ts

**Do**

- Use Post Grotesk 700 with -0.03em tracking for headlines.
- Set long-form text in Tiempos Text 18/28px.
- Keep the logo black and white.
- Use blue only for actions and links, red only for live and breaking.
- Use cool greys for metadata.

**Don't**

- Don't colour the abc circle.
- Don't use loose tracking on display sizes.
- Don't use large radii; stay at 4-6px.
- Don't put body copy in the sans on article pages.
- Don't use heavy shadows.

## 11. Agent Prompt Guide

> Build this UI in the style of ABC News. White page, text `#141618`, metadata `#656C7A`, borders `#CBCED4`, light surfaces `#F4F5F6`. Headlines in `Post-Grotesk, "Inter Tight", "Helvetica Neue", sans-serif` weight 700 with -0.03em tracking and tight line height (32/34px, 24/26px, 20/22px). Article body in `TiemposText, "Source Serif 4", Georgia, serif` at 18/28px with -0.01em tracking. Primary buttons `#0045DA` (hover `#0037AE`, pressed `#002983`) with white text and 6px radius; quiet buttons `#E5EEFF` with a blue border. Live labels are `#C60811` pills with white uppercase text. Video cards carry `rgba(0,0,0,.75)` overlay badges. Shadows are faint: `0 8px 10px rgba(0,0,0,.03)`, popovers `0 4px 20px rgba(0,0,0,.12)`. Logo is a black circle with knocked-out "abc" and a serif "NEWS". Grid up to 1240px, breakpoints 768/1024/1240px.

```css
:root {
  --brand-black: #000000;
  --brand-ink: #141618;
  --brand-gray-80: #3D4149;
  --brand-gray-70: #515662;
  --brand-gray-60: #656C7A;
  --brand-gray-50: #969CA8;
  --brand-gray-30: #CBCED4;
  --brand-gray-20: #E5E6E9;
  --brand-gray-10: #F4F5F6;
  --brand-bg: #FFFFFF;
  --brand-blue: #0045DA;
  --brand-blue-hover: #0037AE;
  --brand-blue-pressed: #002983;
  --brand-blue-quiet: #E5EEFF;
  --brand-blue-video: #026ABA;
  --brand-badge-promoted: #3772DF;
  --brand-red: #C60811;
  --brand-red-dark: #9E060E;
  --brand-success: #0F7F65;
  --brand-font-sans: Post-Grotesk, "Inter Tight", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-serif: TiemposText, "Source Serif 4", Georgia, "Times New Roman", serif;
  --brand-tracking-display: -0.03em;
  --brand-tracking-body: -0.01em;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-pill: 100px;
  --brand-shadow-card: 0 8px 10px 0 rgba(0,0,0,0.03);
  --brand-shadow-popover: 0 4px 20px 0 rgba(0,0,0,0.12);
  --brand-transition: all .2s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by ABC News.
