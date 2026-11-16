---
name: ReelShort
slug: reelshort
url: https://reelshort.com
category: Streaming
tagline: "Black-stage vertical drama streaming: poster rows, red Hot tags, gold-ranked top 10."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Page background
  - name: ReelShort Red
    hex: "#E52E2E"
    role: Active nav, hover text, Hot and Trending pills
  - name: Badge Red
    hex: "#D92B2B"
    role: New and Hot corner badges on posters
  - name: White
    hex: "#FFFFFF"
    role: Headings, primary text, Play button
  - name: Logo Pink
    hex: "#E93AA8"
    role: Start of the app-icon gradient
  - name: Logo Orange
    hex: "#FB6A2A"
    role: End of the app-icon gradient
  - name: Brand Red (system)
    hex: "#CA1C1C"
    role: Design-system brand fill, errors
  - name: Gold
    hex: "#FFB629"
    role: Rank 1 numeral gradient, emphasis
  - name: Surface 1
    hex: "#0B0B0D"
    role: Raised background in dark mode
  - name: Surface 2
    hex: "#1C1C1E"
    role: Cards, sheets, inputs
  - name: Surface 3
    hex: "#272729"
    role: Hover, chips
  - name: Surface 4
    hex: "#313133"
    role: Dividers on dark, pressed
  - name: Link Blue
    hex: "#1677E8"
    role: Info, links in account pages
  - name: Success
    hex: "#008F4F"
    role: Purchase and coin success
fonts:
  display:
    family: "Noto Sans"
    fallback: "Noto Sans"
    weights: [700, 900]
  body:
    family: "Noto Sans"
    fallback: "Noto Sans"
    weights: [400, 500]
typeScale:
  - { role: Hero Title, size: 48, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Section Title, size: 28, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Card Title, size: 16, weight: 500, lineHeight: 1.35, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Tag, size: 14, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.35, tracking: "0" }
radii: { sm: 8, md: 12, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Poster Scrim, value: "inset 0 -30px 30px -10px rgba(0,0,0,0.5)" }
  - { name: Modal, value: "0 0 30px 0 rgba(0,0,0,0.36)" }
preview:
  bg: "#000000"
  surface: "#1C1C1E"
  text: "#FFFFFF"
  muted: "#8D8D93"
  border: "#313133"
  accent: "#E52E2E"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# ReelShort

## 1. Visual Theme & Atmosphere

ReelShort streams short vertical drama series: one-to-two-minute episodes of romance, revenge and fantasy stories, watched on phones. The website and app feel like a pocket cinema lobby. The page is pure black, the posters are tall 3:4 or 9:16 key art full of faces and dramatic lighting, and the only brand color is a hot red used for "Hot" tags, hover states and the active tab.

What makes it recognisable:

- **Black stage, loud posters.** `#000000` page, `color-scheme: dark`, and rows of glossy vertical posters with titles like movie trailers.
- **Hero carousel.** A full-width banner rotates through featured series: big title, genre pills ("Trending", "Female"), a two-line synopsis and a white "Play" pill.
- **Red tags.** Small red pills ("Hot", "New", "Trending") in `#E52E2E` or `#D92B2B` on poster corners and next to titles.
- **Ranked top 10.** The TOP row puts huge 900-weight numerals behind each poster, filled with gold, silver and bronze gradients for ranks 1-3.
- **Play counts.** Every poster has a view count ("21.4M") with a small play icon over a bottom gradient.
- **Gradient app icon.** The logo is a white "R" with a play triangle cut into its bowl, on a pink-to-red-to-orange rounded square.

Mood words: dramatic, bingeable, glossy, mobile, after-dark.

## 2. Color Palette & Roles

Values come from reelshort.com CSS (`--rs-*` design tokens and inline styles) and the official app-icon artwork.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Page background (`html { background-color: #000 }`) |
| ReelShort Red | `#E52E2E` | Active nav link, hover text, Hot/Trending pills |
| Badge Red | `#D92B2B` | "New"/"Hot" corner badges |
| Brand Red (system) | `#CA1C1C` | `--rs-fills-brand-default` |
| Brand Hover | `#DE3434` | `--rs-fills-brand-hover` |
| Brand Press | `#AA1818` | `--rs-fills-brand-press` |
| Brand Disabled | `#690F0F` | `--rs-fills-brand-disabled` |
| White | `#FFFFFF` | Titles, Play button |
| Text Primary | `#FFFFFF` at 84% | `--rs-texticon-default-primary` (dark) |
| Text Secondary | `#FFFFFF` at 68% | Synopsis, metadata |
| Text Tertiary | `#FFFFFF` at 52% | "View all", captions |
| Text Quaternary | `#FFFFFF` at 30% | Disabled, separators |
| Surface 1 | `#0B0B0D` | `--rs-fills-backgrounds-bg-1` |
| Surface 2 | `#1C1C1E` | Cards, sheets |
| Surface 3 | `#272729` | Chips, hover |
| Surface 4 | `#313133` | Pressed, borders |
| Surface 5 | `#3C3C3D` | Highest surface |
| Rank Gold | `#FFEAC1` to `#FFB629` | Rank 1 numeral |
| Rank Silver | `#FFFFFF` to `#99ADC4` | Rank 2 numeral |
| Rank Bronze | `#FFFFFF` to `#BB8F67` | Rank 3 numeral |
| Rank Grey | `#E0E0E0` | Ranks 4-10 |

### App icon gradient

Diagonal from top-left to bottom-right: pink `#E93AA8`, hot red `#FF2A55`, orange `#FB6A2A` (sampled from the official icon; approximate). Use it only for the logo tile, never for buttons.

### Semantic colors

| State | Default | Hover | Press |
|---|---|---|---|
| Success | `#008F4F` | `#29A16A` | `#007842` |
| Warning | `#D86C00` | `#DF8429` | `#B55B00` |
| Error | `#CA1C1C` | `#DE3434` | `#AA1818` |
| Emphasis (coins, VIP) | `#E5A800` | `#E9B629` | `#C18D00` |
| Info | `#1677E8` | `#3A8DEC` | `#1163C4` |
| Indigo | `#554CE6` | `#716AE9` | `#4840C0` |

### Light mode

The design system has a light set (`bg-1 #F2F2F2`, `bg-2 #FFFFFF`, text `rgba(0,0,0,0.84)`), used in checkout and account pages. Browsing and playback are always dark.

## 3. Typography

**Family:** Noto Sans for everything (`--fontFamily: "Noto Sans", "Noto Sans Fallback", Arial, sans-serif`), with Noto Sans JP and other Noto scripts for localized sites. Anton (condensed display) and Redaction (editorial serif) appear on campaign and brand pages.

**Licensing:** Noto Sans and Anton are free on Google Fonts. Redaction is free from its foundry but not on Google Fonts; substitute **Playfair Display** if you need it.

```css
font-family: "Noto Sans", Arial, sans-serif;
```

### Scale (desktop; mobile scales with viewport units)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero series title | 40-48px | 700 | 1.15 | 0 |
| Section title ("New Release", "TOP") | 24-28px | 700 | 1.2 | 0 |
| Rank numeral | about 37% of card width | 900 | 1 | 0 |
| Card title | 16px | 500 | 1.35 | 0 |
| Nav link | 16px | 400 (700 active) | 1 | 0 |
| Body, synopsis | 14-16px | 400 | 1.5 | 0 |
| Tag pill | 14px | 500 | 1.2 | 0 |
| Meta (genres, play count) | 12px | 400 | 1.35 | 0 |

Mobile uses viewport units (for example `text-12/vw`), so type stays proportional on small screens.

### Rules

- Series titles keep their full, long, dramatic names in Title Case and are truncated with ellipsis on cards.
- Genre lines use a full-width vertical bar as separator: "Female ｜ Fantasy ｜ Royalty".
- Play counts are compact: "524k", "21.4M".
- Section headers are short: "New Release", "TOP", "Reel Original", with "View all" right-aligned at 50% white.

## 4. Logo & Brand Mark

The ReelShort mark is a rounded-square tile filled with a pink-red-orange gradient, holding a bold white "R". The bowl of the "R" contains a play triangle cut out of the white, so the gradient shows through it. The leg of the "R" kicks out to the right with a notched base. The website header uses this tile alone at about 38-48px; the name "ReelShort" appears as text beside it in some layouts.

- **Color versions:** gradient tile with white R (primary); white R alone on black or on red.
- **Clear space:** a quarter of the tile width on all sides.
- **Minimum size:** 24px tile.

Misuse:

- Do not fill the "R" with the gradient or put the gradient on the background of a page.
- Do not remove the play cut-out.
- Do not replace the gradient with flat red in the logo tile.
- Do not add glows or outer shadows to the tile.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Play (hero) | `#FFFFFF` | `#000000` 16px/700 with play icon | none | 9999px | 44-48px |
| Primary (subscribe, unlock) | `#E52E2E` | `#FFFFFF` 16px/700 | none | 9999px | 44px |
| Secondary on dark | `rgba(255,255,255,0.1)` | `#FFFFFF` | none | 9999px | 40px |
| Text link | transparent | 50% white, hover `#E52E2E` | none | 0 | auto |
| Carousel arrow | transparent | white at 70%, hover 100% | none | 0 | 24-32px |

States:

- Hover for links and nav: color changes to `#E52E2E` over 200ms.
- Pressed primary: `#AA1818`. Disabled: `#690F0F` fill with 30% white text.
- Focus: 2px white outline with 2px offset.

```css
.btn-play {
  font: 700 16px/1 "Noto Sans", sans-serif;
  color: #000;
  background: #fff;
  border: 0;
  border-radius: 9999px;
  height: 46px;
  padding: 0 28px;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary { background: #E52E2E; color: #fff; }
.btn-primary:active { background: #AA1818; }
```

### Poster card (signature)

- Vertical poster, aspect 3:4 (series covers), 8-12px radius, no border.
- Top-left badge: "New" or "Hot", `#D92B2B` fill, white 12px/500, radius 10px, padding 2px 8px.
- Bottom: 30px gradient `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)` with a play icon and count right-aligned in 12px white.
- Under the poster: title 16px/500 white (2 lines max), genre line 12px at 52% white.
- Hover: poster scales 1.03 and the title turns red.

### Top 10 row (signature)

Each poster sits slightly right of a giant numeral (weight 900, `#E0E0E0`). Ranks 1-3 use clipped gradients:

```css
.rank-1 { background-image: linear-gradient(180deg, #FFEAC1 25.7%, #FFB629 73.6%); }
.rank-2 { background-image: linear-gradient(182.5deg, #FFFFFF 27.4%, #99ADC4 73.2%); }
.rank-3 { background-image: linear-gradient(180deg, #FFFFFF 25%, #BB8F67 73.6%); }
.rank-1, .rank-2, .rank-3 {
  color: transparent; -webkit-background-clip: text; background-clip: text;
}
```

### Hero carousel

- Full-bleed key art with `from-black/80` left gradient and a top gradient `linear-gradient(180deg, rgba(0,0,0,0.3), transparent)` behind the header.
- Left column: 48px/700 series title, a row of blurred pills (first one `#E52E2E` "Trending" or "Hot", others `rgba(255,255,255,0.15)` with `backdrop-filter: blur(4px)`, radius 20px, 14px/500), synopsis 16px at 68% white clamped to 3 lines, then the Play button.
- Right edge: a strip of small poster thumbnails for the other slides.

### Navigation

- Sticky header 80px, transparent with a dark top gradient, glass on scroll. Logo tile left, then "Home" (active, `#E52E2E`, 700), "Categories", "Brand" at 16px 95% white with 32-48px gaps.
- Right: search icon, language, "Download" and account.
- Mobile app: bottom tabs (Home, Discover, My List, Rewards, Profile) with red active icons.

### Episode player (app)

Full-screen vertical video, right-side action stack (like, list, share) with counts, bottom title and episode number, an episode grid sheet (`#1C1C1E`, 16px top radius) showing numbered tiles with lock icons for paid episodes, and an unlock sheet with coin packages in gold `#E5A800`.

### Inputs and chips

Search field: pill, 40px, `#1C1C1E` fill, white text, 50% white placeholder. Category chips: pill, `#272729` fill, active chip white with black text or red.

### Modals and sheets

`#1C1C1E` background, 16-20px radius, shadow `0 0 30px rgba(0,0,0,0.36)`, scrim `rgba(0,0,0,0.7)`. Paywall sheets lead with a big gold coin count and a red primary pill.

## 6. Layout & Spacing

- **Gutters:** 2vw on desktop (`px-2vw`), 16px on mobile.
- **Rows:** horizontal shelves of posters, 5-7 visible on desktop, 3 on mobile, 12-16px gaps, with left/right arrow buttons on hover.
- **Section spacing:** 32-48px between shelves.
- **Hero:** 60-80vh tall on desktop, full width.
- **Breakpoints:** md (768px) switches from viewport-unit sizing to px; xl and xxl scale nav gaps and text.
- **Density:** high: many posters per row, little copy.

## 7. Depth, Elevation & Motion

- Depth comes from gradients over imagery, not shadows. Poster bottoms and hero edges fade to black.
- Glass: `backdrop-filter: blur(4px)` on hero pills; the header turns glassy over 300ms ease-out on scroll.
- Hover: 200ms color transitions on links and arrows (`opacity .7 → 1`).
- Carousel slides fade or slide every few seconds.

## 8. Iconography & Imagery

- Icons: filled 16-24px glyphs in white (play, search, globe, user, chevrons). The play triangle has softly rounded corners.
- Imagery: high-contrast key art with close-up faces, couples, wolves, crowns, rain and fire; title treatments sit inside the artwork.
- Keep imagery vertical; do not crop posters into wide banners except in the hero.

## 9. Voice & Microcopy

- Dramatic, emotional, hook-first. Titles carry the drama ("Thrown Barefoot Into a Blizzard at Three, I Thawed the Winter King").
- Interface copy is short: "Play", "View all", "New Release", "TOP", "Download", "Unlock episode", "Add to My List".
- Tags: "Hot", "New", "Trending", plus audience and trope tags ("Female", "Male", "LGBTQ", "Werewolf", "Revenge").

## 10. Do's and Don'ts

**Do**

- Use a pure black page and let the posters supply color.
- Use red `#E52E2E` for active nav, hover and Hot/Trending tags only.
- Put view counts on posters with a bottom gradient.
- Use gold/silver/bronze gradient numerals for the top three.
- Use white pill Play buttons in the hero.

**Don't**

- Don't use the logo gradient on buttons, cards or backgrounds.
- Don't use light mode for browsing or playback.
- Don't add borders or drop shadows to posters.
- Don't shorten series titles in hero banners; truncate only on cards.
- Don't mix more than one red per component.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of ReelShort, a vertical short-drama streaming service. Pure black page `#000000`, white text with 84%/68%/52% white for secondary levels, surfaces `#1C1C1E` and `#272729`. Font: Noto Sans (700 titles, 500 card titles, 400 body). Sticky 80px header with a gradient rounded-square logo (white R with a play cut-out on pink `#E93AA8` to red `#FF2A55` to orange `#FB6A2A`), nav "Home" (active, red `#E52E2E`, bold), "Categories", "Brand". Hero carousel: full-bleed key art fading to black on the left, 48px series title, pills ("Trending" in `#E52E2E`, others translucent with blur), a 3-line synopsis and a white pill "Play" button with black text. Below, horizontal shelves of 3:4 posters with 12px radius, red "New"/"Hot" corner badges (`#D92B2B`), a bottom gradient with a play icon and "21.4M" count, and a 16px title plus "Female ｜ Fantasy ｜ Royalty" genre line. Add a TOP 10 row with giant weight-900 numerals behind posters, ranks 1-3 filled with gold, silver and bronze gradients. No shadows; depth comes from gradients over images.

```css
:root {
  --brand-bg: #000000;
  --brand-red: #E52E2E;
  --brand-red-badge: #D92B2B;
  --brand-red-system: #CA1C1C;
  --brand-red-hover: #DE3434;
  --brand-red-press: #AA1818;
  --brand-logo-pink: #E93AA8;
  --brand-logo-red: #FF2A55;
  --brand-logo-orange: #FB6A2A;
  --brand-text: rgba(255,255,255,0.84);
  --brand-text-secondary: rgba(255,255,255,0.68);
  --brand-text-tertiary: rgba(255,255,255,0.52);
  --brand-text-quaternary: rgba(255,255,255,0.3);
  --brand-surface-1: #0B0B0D;
  --brand-surface-2: #1C1C1E;
  --brand-surface-3: #272729;
  --brand-surface-4: #313133;
  --brand-gold: #FFB629;
  --brand-emphasis: #E5A800;
  --brand-success: #008F4F;
  --brand-info: #1677E8;
  --brand-font: "Noto Sans", Arial, sans-serif;
  --brand-font-display: "Anton", "Noto Sans", sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 9999px;
  --brand-poster-scrim: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
  --brand-shadow-modal: 0 0 30px 0 rgba(0,0,0,0.36);
}
```

---

Values are observed from reelshort.com production CSS and the official app icon; the logo vector is traced from that icon. This file is an unofficial reference and is not affiliated with or endorsed by ReelShort or Crazy Maple Studio.
