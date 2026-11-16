---
name: TIME
slug: time
url: https://time.com
category: News
tagline: "Red TIME wordmark, Editorial New serif headlines and Graphik text on warm ivory and white."
updated: 2026-11-16
appStoreId: 369021520
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: TIME Red
    hex: "#E7131A"
    role: Wordmark, cover border, hover text, brand buttons
  - name: Black Coffee
    hex: "#1B1B1B"
    role: Headlines, body text, dark buttons
  - name: Ivory White
    hex: "#FFFCF8"
    role: Warm page background and text on dark
  - name: White
    hex: "#FFFFFF"
    role: Cards, nav background
  - name: Warm Grey 3
    hex: "#FCF3ED"
    role: Caption panels and soft section bands
  - name: Warm Grey 2
    hex: "#D1C5BE"
    role: Borders, hover fill on buttons
  - name: Warm Grey 1
    hex: "#8B7162"
    role: Muted warm text and icons
  - name: Grey 1
    hex: "#594D46"
    role: Secondary text, metadata
  - name: Rule
    hex: "#E2E0DB"
    role: Hairline dividers
  - name: Grey 3
    hex: "#D9D9D9"
    role: Neutral borders, disabled
  - name: Warm Grey Ads
    hex: "#EFE3DC"
    role: Ad slot backgrounds
  - name: Black
    hex: "#000000"
    role: Video and full-screen sections
fonts:
  display:
    family: "PP Editorial New"
    fallback: "Newsreader"
    weights: [400, 500]
  body:
    family: "Graphik"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Title large, size: 64, weight: 400, lineHeight: 1.0, tracking: "0" }
  - { role: H1, size: 48, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: H2 (article), size: 40, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: H4 (card), size: 24, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: H6 (small card), size: 18, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body large, size: 16, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: T4 label, size: 14, weight: 600, lineHeight: 1.4, tracking: "0.02em" }
  - { role: Caption small, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 64]
shadows: []
preview:
  bg: "#FFFCF8"
  surface: "#FCF3ED"
  text: "#1B1B1B"
  muted: "#594D46"
  border: "#E2E0DB"
  accent: "#E7131A"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# TIME

## 1. Visual Theme & Atmosphere

TIME's site borrows directly from the magazine: a big red serif wordmark, elegant serif headlines and a warm, paper-like palette. Pages are white or ivory (`#FFFCF8`), text is a soft black called "Black Coffee" (`#1B1B1B`), and red is reserved for the wordmark, the famous red cover border and hover states.

What makes it recognisable:

- **The red TIME wordmark.** Tall, high-contrast serif capitals in TIME Red `#E7131A`. On the homepage it is very large (up to 92px tall on wide screens) and shrinks to 24px in the sticky nav.
- **Editorial New headlines.** PP Editorial New, a sharp contemporary serif, sets every headline at weight 500 with tight leading (110-130%).
- **Graphik and Graphik Compact.** Graphik for article body; Graphik Compact for uppercase labels, nav, captions and buttons.
- **Warm greys.** The neutrals are brown-tinted (`#594D46`, `#8B7162`, `#D1C5BE`, `#FCF3ED`), which keeps the page feeling like paper rather than screen grey.
- **Covers as content.** The red-bordered magazine cover appears as a card and as a navigation element ("The latest issue").

Density: medium. The homepage mixes a large lead package, rows of image cards, and text lists separated by thin rules.

## 2. Color Palette & Roles

Values come from TIME's Tailwind theme on the live site.

| Name | Tailwind token | Hex | Role |
|---|---|---|---|
| TIME Red | `brand-red` | `#E7131A` | Wordmark, cover border, hover text, brand buttons |
| Black Coffee | `black-coffee` | `#1B1B1B` | Headlines, body, dark buttons, borders |
| Ivory White | `ivory-white` | `#FFFCF8` | Warm background, text on dark |
| White | `white` | `#FFFFFF` | Cards, nav |
| Warm Grey 3 | `warm-grey-3` | `#FCF3ED` | Caption panels, soft bands |
| Warm Grey Ads | `warm-grey-ads` | `#EFE3DC` | Ad slots |
| Warm Grey 2 | `warm-grey-2` | `#D1C5BE` | Borders, button hover fill |
| Warm Grey 1 | `warm-grey-1` | `#8B7162` | Muted warm text |
| Grey 1 | `grey-1` | `#594D46` | Secondary text, disabled button fill |
| Grey 2 | `grey-2` | `#484848` | Dark borders |
| Grey 3 | `grey-3` | `#D9D9D9` | Neutral borders |
| Rule | `rule` | `#E2E0DB` | Hairline dividers |
| Black | `time-black` | `#000000` | Video and full-screen features |

### Semantic

| State | Value |
|---|---|
| Hover on links and buttons | text turns `#E7131A` |
| Live / breaking | `#E90606` or Tailwind red-600 `#DC2626` labels (approximate) |
| Error | `#B91C1C` text (Tailwind red-700) |
| Focus | 2px outline in Black Coffee |

### Dark sections

Video and some feature packages use `#1B1B1B` or black backgrounds with Ivory White `#FFFCF8` text and hover to TIME Red. There is no site-wide dark mode.

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Headlines | **PP Editorial New** (Pangram Pangram) | Loaded as `ppEditorialNew`, Tailwind class `font-editorial` |
| Body | **Graphik** (Commercial Type) | Class `font-graphik` |
| Labels, nav, captions | **Graphik Compact** | Class `font-graphik-compact`, used most often on the page |

All three are commercial. Free fallbacks: **Newsreader** (or **Instrument Serif** for very large display) for Editorial New, **Inter** for Graphik, **Inter Tight** for Graphik Compact.

```css
--font-pp-editorial-new: "ppEditorialNew", Newsreader, Georgia, serif;
--font-graphik: Graphik, Inter, Helvetica, Arial, sans-serif;
--font-graphik-compact: "graphikCompact", "Inter Tight", Helvetica, Arial, sans-serif;
```

### Scale (from the site's Tailwind text utilities)

| Token | Size | Weight | Line height | Typical use |
|---|---|---|---|---|
| `title-large` | 64px (40px mobile) | 400 | 140% (100% mobile) | Package titles, special covers |
| `h1` | 48px | 500 | 110% | Feature headline |
| `h2` | 40px | 500 | 110% | Article headline desktop |
| `h3` | 32px | 500 | 115% | Lead card |
| `h4` | 24px | 500 | 125% | Standard card |
| `h5` | 20px | 500 | 130% | Small card |
| `h6` | 18px | 500 | 130% | List items |
| `mobile-h2` | 28px | 500 | 115% | Article headline mobile |
| `body-large` | 16px | 400 | 160% | Article body |
| `body-small` | 14px | 400 | 115% | Descriptions |
| `t4` | 14px | 600 | 140% | Section labels |
| `cta-small` | 14px | 400 | 110% | Buttons, nav |
| `caption-large` | 16px | 400 | 140% | Large captions |
| `caption-small` | 12px | 400 | 140% | Captions, credits |

### Rules

- Headlines are Editorial New at 500, sentence case, never bold beyond 500.
- Labels, kickers and nav items are uppercase Graphik Compact (`uppercase` appears on most small UI).
- Text is trimmed to cap height on many labels (`text-box: trim-both cap alphabetic`), so labels sit tightly inside buttons.
- Article body is Graphik 16px with 160% line height.

## 4. Logo & Brand Mark

The **TIME** wordmark: four high-contrast serif capitals in TIME Red `#E7131A`, tightly spaced with sharp serifs. The **red border** (a thick red rectangle frame) is the second brand asset, used on covers and as a frame device. The favicon and app tile use the single red serif **T** on white.

- **Color versions:** red on white or ivory (primary), white on black or on red, black on light for single color.
- **Clear space:** at least the width of the "I" on all sides.
- **Minimum size:** 24px tall on screen.
- **Nav sizes:** 24px tall in the sticky nav, up to 92px on the homepage masthead.

Misuse:

- Do not retype TIME in a font.
- Do not use red border frames on non-cover content.
- Do not place the red wordmark over busy red imagery.
- Do not outline or add effects.

## 5. Components

### Navigation

- Heights: 47px mobile, 80px desktop, 115px on the homepage desktop (`--navigation-height-*`).
- Homepage: very large centred red wordmark, date and section links beneath. On scroll it animates down to a compact bar (`transition-[height,color,fill] ease-out duration-300`).
- Section links: Graphik Compact 14px uppercase, Black Coffee, hover TIME Red.
- Right side: "Subscribe" button and search. Menu opens a full-height panel on `#FFFCF8` with section groups.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary dark | `#1B1B1B` | `#FFFCF8` 14px uppercase | none | 2px | 10px 16px |
| Brand | `#E7131A` | `#FFFFFF` | none | 2px | 10px 16px |
| Outline | transparent | `#1B1B1B` | 1px `#D1C5BE` | 2px | 9px 15px |
| Ghost link | none | `#1B1B1B` uppercase | none | 0 | 0 |
| Pill (filters, audio) | `#FFFFFF` | `#1B1B1B` | 1px `#D1C5BE` | 9999px | 6px 14px |

States: hover dark buttons go `bg-brand-red`; outline buttons fill `#D1C5BE`; text links turn `#E7131A`. Disabled: `#594D46` fill. Focus: 2px Black Coffee outline.

### Cards

- **Lead card:** large image (16:9 or 4:3), Editorial New `h3`/`h2` headline, Graphik 14px description, uppercase kicker above.
- **Standard card:** image, `h4` headline 24px/500, byline in Graphik Compact 12px uppercase.
- **List card:** text only `h6` 18px, separated by 1px `#E2E0DB` rules (`border-b`).
- No shadows. Hover turns the headline red.

### Cover module

The current magazine cover shown with its red border, Graphik Compact label "The latest issue" and a "Subscribe" button. Cover images are never cropped.

### Article page

- Kicker: section in Graphik Compact uppercase 14px.
- Headline: Editorial New 40px/500 desktop (`lg:text-h2`), 28px mobile, Black Coffee.
- Deck: Graphik 18-20px in `#594D46` (approximate).
- Byline row: author name uppercase Graphik Compact, date, reading time, share icons.
- Lead image full column; caption panel on Warm Grey 3 `#FCF3ED` with Graphik Compact 12px text and 24px padding.
- Body: Graphik 16px/160%, Black Coffee, 24px between paragraphs (`mb-6`), section breaks add 32px (`mt-8`).
- Links: rich-text links underlined, hover red.
- **Pull quote:** Editorial New 32px italic or regular, Black Coffee, with thin rules above and below (approximate).

### Live and breaking

Live coverage pages use a red "LIVE" label with a pulsing dot and timestamped updates in Graphik Compact. Breaking labels appear as small red uppercase kickers rather than full-width banners.

### Newsletters

Newsletter sign-up blocks sit on Ivory White or Warm Grey 3 with an Editorial New 24-32px title, Graphik description, a 48px email input (1px Black Coffee border, 2px radius) and a dark button.

### Modals and drawers

Modal backdrop `bg-black/40`, panel on white with 16px radius (`rounded-2xl`), Editorial New titles, Graphik body.

## 6. Layout & Spacing

- **Max width:** 1440px (`max-w-[90rem]`).
- **Article column:** about 632-680px; images can extend to 848px.
- **Breakpoints:** 1024px and 1280px/1440px drive the image `sizes` rules; Tailwind defaults (640, 768, 1024, 1280) otherwise.
- **Spacing:** Tailwind 4px scale; common gaps 16, 24, 32, 40px.
- **Homepage grid:** a 12-column grid with a central lead story, narrow side columns of list cards, then 3-4 column card rows separated by vertical and horizontal rules.

## 7. Depth, Elevation & Motion

- No shadows on content. Separation comes from 1px rules in `#E2E0DB` and changes of background (white, ivory, warm grey).
- Modals use a 40% black backdrop.
- Motion: the masthead shrinks with `ease-out` over 300ms (guarded by `motion-safe`); color hovers are near instant; carousels slide over about 300ms.

## 8. Iconography & Imagery

- **Icons:** simple line icons (Lucide style, 1.5-2px stroke) at 16-24px in Black Coffee.
- **Photography:** high-quality portrait and documentary photography; portraits often shot for TIME and treated as hero images.
- **Covers:** the red-bordered cover is a core visual asset.
- **Lists and franchises:** "TIME100" and "Person of the Year" packages use their own bold layouts but keep the red, black and ivory palette.

## 9. Voice & Microcopy

Authoritative and readable. UI labels are terse and uppercase.

- Headlines in sentence case.
- Labels uppercase: "POLITICS", "SUBSCRIBE", "LISTEN".
- CTAs: "Subscribe", "Sign in", "Read more", "Listen to this article".

Sample strings:

- "The latest issue"
- "Sign up for our newsletter"
- "Updated: Nov 16, 2026"
- "Read More From TIME"

## 10. Do's and Don'ts

**Do**

- Use a sharp editorial serif for headlines at medium weight with tight leading.
- Keep red for the wordmark, cover border and hover states.
- Use warm, brown-tinted greys and an ivory background.
- Set small UI text uppercase in a compact sans.
- Separate content with thin rules, not shadows.

**Don't**

- Don't use cool blue-grey neutrals.
- Don't put red behind long text.
- Don't use heavy bold headlines.
- Don't round cards or add drop shadows.
- Don't crop the magazine cover.

## 11. Agent Prompt Guide

> Build this UI in the style of TIME. Warm ivory page `#FFFCF8` and white cards, text in soft black `#1B1B1B`. The red serif "TIME" wordmark `#E7131A` sits large and centred in the masthead, shrinking to 24px in a sticky 80px nav. Headlines in a sharp editorial serif ("ppEditorialNew", fallback Newsreader) at weight 500: article 40px/110%, cards 24px/125%, list items 18px/130%. Body in Graphik (fallback Inter) 16px/160%; kickers, nav, captions and buttons in uppercase compact sans 12-14px. Warm greys: `#594D46` secondary text, `#D1C5BE` borders, `#FCF3ED` caption panels, `#E2E0DB` rules. Buttons are 2px radius: dark `#1B1B1B` with ivory text, hover red. No shadows; separate with 1px rules. Max width 1440px.

```css
:root {
  --brand-red: #E7131A;
  --brand-ink: #1B1B1B;
  --brand-ivory: #FFFCF8;
  --brand-white: #FFFFFF;
  --brand-black: #000000;
  --brand-warm-grey-1: #8B7162;
  --brand-warm-grey-2: #D1C5BE;
  --brand-warm-grey-3: #FCF3ED;
  --brand-warm-grey-ads: #EFE3DC;
  --brand-grey-1: #594D46;
  --brand-grey-2: #484848;
  --brand-grey-3: #D9D9D9;
  --brand-rule: #E2E0DB;
  --brand-font-display: "ppEditorialNew", Newsreader, Georgia, serif;
  --brand-font-body: Graphik, Inter, Helvetica, Arial, sans-serif;
  --brand-font-compact: "graphikCompact", "Inter Tight", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 16px;
  --brand-radius-pill: 9999px;
  --brand-nav-height: 80px;
  --brand-nav-height-mobile: 47px;
  --brand-max-width: 90rem;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by TIME.
