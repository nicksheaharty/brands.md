---
name: HBO Max
slug: hbo-max
url: https://www.hbomax.com
category: Streaming
tagline: "Black, silver and steel blue: a quiet premium streaming UI that lets the HBO name lead."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Obsidian Black
    hex: "#000000"
    role: App background, logo background
  - name: White
    hex: "#FFFFFF"
    role: Logo, primary text, focused buttons
  - name: Accent Steel
    hex: "#71B8F2"
    role: Links, commerce badges, brand accent
  - name: Loud Button
    hex: "#DDDDDD"
    role: Primary "loud" button fill (black text)
  - name: Steel Blue
    hex: "#3D6A99"
    role: Plan picker "Select Plan" buttons
  - name: Live Magenta
    hex: "#BA236C"
    role: LIVE badges and live progress
  - name: Surface Mid
    hex: "#0F0F0F"
    role: Raised sections
  - name: Surface High
    hex: "#191919"
    role: Sheets, menus, modals
  - name: Dark Steel
    hex: "#2E3F4D"
    role: Secondary badges, toggles
  - name: Slate Navy
    hex: "#09192B"
    role: Bottom stop of the page gradient
  - name: Input Blue
    hex: "#508FC3"
    role: Focused and selected inputs
  - name: Error Amber
    hex: "#FFA00A"
    role: Error text and borders
  - name: Info Slate
    hex: "#455B73"
    role: Info banners
  - name: Award Gold
    hex: "#DDBF84"
    role: Award and upsell labels
fonts:
  display:
    family: "Max Sans"
    fallback: "Inter"
    weights: [600, 700]
  body:
    family: "Max Sans"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 64, weight: 700, lineHeight: 1, tracking: "0" }
  - { role: Heading XL, size: 44, weight: 700, lineHeight: 1.35, tracking: "0" }
  - { role: Heading L, size: 34, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Heading M, size: 26, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Heading S, size: 20, weight: 600, lineHeight: 1.35, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Body Small, size: 15, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Metadata, size: 12, weight: 500, lineHeight: 1.36, tracking: "0" }
radii: { xs: 2, sm: 4, md: 8, lg: 16, pill: 999 }
spacing: [2, 4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Focus Ring, value: "0 0 0 2px #000000, 0 0 0 5px #FFFFFF" }
preview:
  bg: "#000000"
  surface: "#191919"
  text: "#FFFFFF"
  muted: "#A6A6A6"
  border: "#282828"
  accent: "#DDDDDD"
  accentText: "#000000"
  radius: 8
  buttonStyle: solid
---

# HBO Max

## 1. Visual Theme & Atmosphere

HBO Max is black glass with silver type. The interface is built on pure black (`#000000`), text is white at three opacity steps, and buttons are light grey or translucent charcoal. Colour comes almost entirely from the artwork. The few brand hues are cool: a steel blue (`#71B8F2`) for links and commerce, slate navy (`#09192B`) at the bottom of marketing pages, and a magenta (`#BA236C`) reserved for live content.

In July 2025 the service went back to the HBO Max name after two years as "Max". The current logo stacks a heavy "HBO" over a lowercase "max", and the app icon renders it in brushed silver on a black tile. The UI inherited the Max design system (tokens named "slate", typeface Max Sans) with the HBO logo and a darker, more restrained mood on top.

What makes it recognisable:

- **The HBO "O".** The O in HBO is a ring with a solid dot in the centre. It is the most distinctive shape in the brand.
- **Silver, not colour.** The primary button is light grey (`#DDDDDD`) with black text, turning white on hover. There is no coloured CTA in the app.
- **Brand hubs.** Rows and hub tiles for HBO, Warner Bros., DC, Cartoon Network, Discovery and others, each with its own logo, sitting on the same black.
- **Lens glare.** Marketing panels use a faint radial "lens glare" of steel blue, slate and a hint of green and red at the corner.

Density: low. Big hero art, generous gaps, small type for metadata.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Obsidian Black | `#000000` | App background (`--color_surface_low`), logo background |
| White | `#FFFFFF` | Logo, primary text, focused fill |
| Accent Steel | `#71B8F2` | Links, commerce badges, brand accent |
| Light Steel | `#4F6984` | Secondary brand blue, illustrations |
| Dark Steel | `#2E3F4D` | Secondary badges, toggle icons |
| Light Slate | `#8298AB` | Muted brand text on marketing pages |
| Dark Slate | `#4E505B` | Marketing panel tint |
| Slate Navy | `#09192B` | Page gradient end: `linear-gradient(#000000, #09192B)` |
| Steel Blue | `#3D6A99` | Plan picker "Select Plan" button (hover `#375F8A`) |

### Surfaces

| Name | Value | Use |
| --- | --- | --- |
| Surface Low | `#000000` | Page |
| Surface Mid | `#0F0F0F` | Raised sections |
| Surface High | `#191919` | Sheets, menus, modals |
| Surface Opacity High | `rgba(25,25,25,0.85)` | Floating panels over art |
| Surface Border Mid | `#282828` | Dividers |
| Surface Border High | `#575757` | Strong dividers |
| Tile Fill | `rgba(36,36,36,0.7)` | Tile placeholder before art loads |
| Skeleton | `#414141` / `rgba(65,65,65,0.6)` | Loading shimmer |
| Scrim | `rgba(0,0,0,0.7)` (mid) / `rgba(0,0,0,0.4)` (low) | Behind dialogs |

### Text

| Name | Value | Use |
| --- | --- | --- |
| High | `#FFFFFF` | Titles, active labels |
| Mid | `rgba(255,255,255,0.8)` | Body, inactive chips |
| Low | `rgba(255,255,255,0.65)` | Metadata, captions |
| Inverse High | `#000000` | Text on loud buttons and focused rows |

### Buttons

| Name | Base | Hover | Press |
| --- | --- | --- | --- |
| Loud (primary) | `#DDDDDD` / black text | `#FFFFFF` | `rgba(255,255,255,0.8)` |
| Quiet (secondary) | `rgba(62,62,62,0.75)` / white | `rgba(74,74,74,0.85)` | `rgba(62,62,62,0.45)` |
| Ghost | transparent / white | `rgba(62,62,62,0.75)` | `rgba(62,62,62,0.45)` |
| Utility overlay | `rgba(0,0,0,0.7)` / white 65% | `rgba(0,0,0,0.8)` / white | `rgba(0,0,0,0.6)` |
| Focus (TV) | `#F5F5F7` / black text | | |

### Indicators and semantic

| Name | Fill / Text | Use |
| --- | --- | --- |
| Live | `#BA236C` / white | LIVE badge, live progress bars |
| Ad | `#FAFF11` / black | Ad break marker |
| Sport | `#8CFF3F` / black | Sports event badges |
| Award / Upsell | `rgba(0,0,0,0.7)` / `#DDBF84` | "Emmy Winner", upgrade prompts |
| Commerce | `#71B8F2` / black | Offer badges |
| Beta | `#9CA0C9` / black | Beta features |
| Error | `#FFA00A` | Error text and borders (amber, not red) |
| Info | `#455B73` | Info banners with white text |
| Input Selected | `#508FC3` | Focused inputs, selected radio and checkbox |

### Mode

Dark only in the app. Account and help pages use an inverse set (`#F8F8F8` surface, black text, `#246298` links) but these are utility pages.

## 3. Typography

- **Max Sans** is the proprietary typeface introduced with Max in 2023 and still named in the live CSS (`font-family: Max Sans, Inter, sans-serif`). It is a clean grotesque with compact capitals. It is not licensed for outside use, and HBO may rename or replace it; treat the name as current as of this date.
- Fallback: **Inter**, which the live site itself lists second. System stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
- The HBO and HBO Max wordmarks are artwork; never set them in type.

### Scale

The design tokens scale by breakpoint. Values below are phone-to-desktop (bp-01 to bp-07); line heights are 135% for headings and 156% for body.

| Role | Phone | Desktop / TV | Weight | Use |
| --- | --- | --- | --- | --- |
| Marketing hero | 32px | 64px (`clamp(2rem, 10vw, 4rem)`) | 700 | Signed-out headline, line height 1 |
| Heading XL | 36px | 44px | 700 | Page titles, hero headline in app |
| Heading L | 29px | 34px | 600 | Section headers |
| Heading M | 23px | 26px | 600 | Detail page subheads |
| Heading S | 18px | 20px | 600 | Row (tray) titles |
| Heading XS | 15px | 15px | 600 | Card titles |
| Body L | 23px | 26px | 400 | Large synopsis on TV |
| Body M | 18px | 20px | 400 | Synopsis, settings rows |
| Body S | 15px | 15px | 400 | Default web body |
| Action | 15-18px | 15-20px | 500 | Button labels |
| Metadata / Indicator | 12px | 12px | 500 | Year, rating, runtime, badges |

### Rules

- Sentence case or title case for buttons ("Sign Up Now", "Watch Now"). Badges and the logo strip on marketing pages are uppercase with 0.1em tracking.
- No negative tracking.
- Metadata uses the Low text colour and separates items with a middle dot.

## 4. Logo & Brand Mark

- **Primary lockup:** "HBO" in heavy block capitals on top, "max" in lowercase geometric letters below, left edges aligned, "max" about the same width as "HBO". The O of HBO is a ring with a dot in the middle.
- **Horizontal lockup:** "HBO max" on one line for headers and tight spaces.
- **Colour versions:** white on black (default), black on white. The app icon uses a vertical silver gradient (about `#F2F1F5` to `#8E8F96`) on a near-black tile (`#0E121B` to `#03060F`).
- **Retired:** the 2020 HBO Max logo with a purple-to-pink "max" gradient, and the 2023 blue "Max" wordmark. Do not use either.
- **Clear space:** the height of the "O" dot ring on all sides.
- **Minimum size:** about 48px wide for the stacked lockup, 64px for horizontal.

Misuse: do not separate HBO from max in the lockup, recolour it in the steel blue, add the old purple gradient, or fill the O's centre dot.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 48px; padding: 12px 24px;
  font: 500 18px/1.35 "Max Sans", "Inter", sans-serif;
  border: 0; border-radius: 8px;
  transition: background-color 150ms ease-in-out, transform 150ms ease-in-out;
}
.btn-loud { background: #DDDDDD; color: #000000; }
.btn-loud:hover { background: #FFFFFF; }
.btn-loud:active { background: rgba(255,255,255,0.8); }

.btn-quiet { background: rgba(62,62,62,0.75); color: #FFFFFF; }
.btn-quiet:hover { background: rgba(74,74,74,0.85); }
.btn-quiet:active { background: rgba(62,62,62,0.45); }

.btn-ghost { background: transparent; color: #FFFFFF; }
.btn-ghost:hover { background: rgba(62,62,62,0.75); }

.btn-utility { width: 40px; height: 40px; padding: 0; border-radius: 999px; background: rgba(0,0,0,0.7); color: rgba(255,255,255,0.65); }
.btn-utility:hover { background: rgba(0,0,0,0.8); color: #FFFFFF; }

.btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #000000, 0 0 0 5px #FFFFFF; }
```

Sizes: small 40px, medium 48px, large 64px. Corners are 8px on standard and small buttons, 2px on the smallest action chips, full pill on utility buttons. "Resume" buttons can carry a progress fill: black bar on a `rgba(0,0,0,0.2)` track inside the loud button.

Marketing plan cards use a steel blue variant: `background: #3D6A99; padding: 13px 24px;` with hover `#375F8A` and a 2px outline in the same colour.

### Inputs

```css
.input {
  height: 48px; padding: 12px 16px;
  background: hsla(0,0%,7%,0.7); color: #FFFFFF;
  border: 1px solid #8C8C8C; border-radius: 4px;
  font-size: 18px;
}
.input::placeholder { color: rgba(255,255,255,0.65); }
.input:focus { border: 1.5px solid #508FC3; }
.input.is-error { border-color: #FFA00A; }
```

Checkboxes are 4px radius; selected fill `#508FC3` with a white check. Error messages are amber `#FFA00A` with a warning icon, never red.

### Hero

Full-width key art across the top of Home with a strong black gradient from the bottom and left, title logo art on the left, a one-line tagline or "New Episode Sunday" label, then a loud "Watch Now" button and a quiet "+ My List" or "More Info" button. Pagination dots or a numbered pager sit bottom-right. On TV the hero art is about 16:9 and fills the top 70% of the screen.

### Rows (trays) and tiles

- Standard tiles: 16:9, 8px radius, no border at rest. Tile fill before art loads is `rgba(36,36,36,0.7)`.
- Focus or hover: 2px white border (3px on TV) offset from the art, slight scale 1.05, title and metadata appear below.
- Poster tiles (2:3) for "HBO Originals" and film collections; square tiles for brand hubs.
- "Top 10" rows put a large outlined rank numeral to the left of each poster.
- Gap between tiles is 10px on phone, up to about 16px on desktop. Page margin is 20px on phone and grows to about 4vw on desktop.
- "Continue Watching" adds a 2px progress bar: white fill on `rgba(255,255,255,0.3)`; magenta `#BA236C` fill for live.

### Brand hubs

Square or 16:9 logo tiles for HBO, Warner Bros., DC, Cartoon Network, Discovery, TLC, Food Network, CNN and sports partners on a dark charcoal fill with the logo centred in white. Selecting one opens a hub page that uses that brand's logo as its header but the same black UI.

### Navigation

- **Web:** a top bar 64-72px tall, logo left, then "Home", "Series", "Movies", "HBO", "Sports", "News" text links in 15px 500 at 80% white (active 100% with a 2px underline), search and profile avatar on the right. Background fades from `rgba(0,0,0,0.9)` to solid black on scroll.
- **Mobile:** bottom tab bar (Home, Search, Downloads, My Stuff) on black with a 1px `#282828` top border.
- **TV:** a left rail with icons that expands on focus.

### Chips and filters

Pill-free: chips use 8px radius, `rgba(74,74,74,0.85)` fill when selected, transparent with 80% white text when not. Hover or focus fills white with black text.

### Badges

2px radius, 12px 500 uppercase text, 4px horizontal padding, 20px tall. Live: `#BA236C`; New Episode: white with black text; rating boxes are transparent with a 1px 30% white border.

### Profile picker ("Who's Watching?")

Black screen, centred row of large circular avatars (about 120-140px) with names below in 18px. Focused avatar gets a white ring. Kids profiles show a small "Kids" label. "Edit" is a ghost button below.

### Player controls

Top-left back arrow and title; bottom has a 2px scrubber (`rgba(255,255,255,0.3)` track, `rgba(255,255,255,0.6)` buffered, white played) with a white 12-16px thumb, elapsed and remaining time in 12px, and icons for audio and subtitles, episodes, and fullscreen. "Skip Intro" and "Next Episode" are loud grey buttons bottom-right. Subtitles support the standard caption colours (white, yellow `#FEFB00`, cyan `#00FDFF`).

### Plan and paywall pages

Black page with the `linear-gradient(#000000, #09192B)` body and slate lens glare on cards. Tabs switch between "HBO Max Plans" and "HBO Max Bundles". Plan cards list features with icon bullets in 14px, price large, then a steel blue "Select Plan" button. A countdown banner appears above for pay-per-view events. The live site on 2026-11-16 showed "Plans start at $10.99/month"; check before reusing.

## 6. Layout & Spacing

- **Page margin:** 20px on phone (`--spacer-space-grid-page-margin`), about 40px on tablet, about 4vw on desktop.
- **Grid gutter:** 10px on phone, 16-20px on desktop.
- **Breakpoints:** 576, 768, 992 and 1200px on marketing pages; the app tokens define seven breakpoints from phone to 10-foot TV.
- **Vertical rhythm:** 20px between page sections on phone, 100px at the end of a page; 24-32px between rows on desktop.
- **Spacing scale:** 2, 4, 6, 8, 12, 16, 20, 24, 32, 48 (from `--spacer-*` tokens).
- **Minimum hit targets:** 32, 40, 48 and 64px heights.

## 7. Depth, Elevation & Motion

- **Black first.** Most depth comes from layering `#000000`, `#0F0F0F` and `#191919`, plus black gradients over art. There are almost no drop shadows.
- **Lens glare (marketing):** `radial-gradient(100% 650% at 100% -100%, rgba(113,184,242,0.25) 20%, rgba(130,152,171,0.15) 40%, rgba(78,80,91,0.25) 85%, rgba(150,200,0,0.07) 95%, rgba(200,80,80,0.1) 100%)`.
- **Focus ring:** 2px inner black and 5px outer white on TV and keyboard focus.
- **Scrims:** `rgba(0,0,0,0.7)` behind dialogs; `rgba(0,0,0,0.4)` behind sheets.
- **Durations:** 150ms ease-in-out for button colour, 200ms for carousel controls fading in, 300ms ease-out for tile scale, 600ms ease-in-out for carousel slides.
- **Easing:** standard `ease-in-out`; marketing accordions use `cubic-bezier(0, 1, 0, 1)` for a fast open.
- **Reduced motion:** carousels stop auto-advancing and tiles do not scale.

## 8. Iconography & Imagery

- **Icons:** outline, 1.5-2px stroke, square ends, sized 12/16/20/24/40px (`--spacer-size-icon-action-*`). White at 65% at rest, 100% on hover.
- **Artwork:** HBO key art is dark and moody; the UI should never fight it with colour. Title logo art replaces typed titles in the hero and detail pages.
- **Brand logos:** partner and hub logos are always white, single-colour, on black or charcoal.
- **Marketing:** device mockups on the slate gradient, and sports league logos sized by per-logo scale factors so they look balanced.

## 9. Voice & Microcopy

Confident and spare. Lets titles and the HBO name do the selling.

- Hero: "Must-see series, movies & more." (live site, 2026-11-16)
- Subline: "Choose an HBO Max plan or bundle to start streaming."
- CTAs: "Sign Up Now", "Sign In", "Get HBO Max", "Get the Bundle", "Select Plan", "Watch Now", "Resume", "Learn More"
- Rows: "Continue Watching", "Just Added", "HBO Originals", "Top 10 Series Today", "Because You Watched ..."
- Labels: "New Episode Sunday", "LIVE", "Emmy Winner"
- Help: "HBO Max Help Center"
- Casing: title case for buttons and row titles; uppercase only for badges.

## 10. Do's and Don'ts

**Do**

- Use pure black `#000000` as the base.
- Make the primary button light grey `#DDDDDD` with black text, white on hover.
- Use white at 100%, 80% and 65% for the three text levels.
- Keep corners at 8px for buttons and tiles, 2px for badges.
- Reserve magenta `#BA236C` for live content and amber `#FFA00A` for errors.
- Show the HBO "O" with its centre dot correctly in any custom mark.

**Don't**

- Don't use the old purple-pink HBO Max gradient or the blue Max logo.
- Don't add a coloured primary button inside the app.
- Don't use red for errors.
- Don't put borders on tiles at rest.
- Don't use steel blue for large fills; it is an accent for links and commerce.
- Don't set the HBO wordmark in a font.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of HBO Max (2025). Background pure black `#000000`, raised surfaces `#0F0F0F` and `#191919`, dividers `#282828`. Text is white at 100%, 80% and 65%. Primary "loud" button: `#DDDDDD` fill, black text, white on hover, 8px radius, 48px tall, 18px weight 500. Secondary "quiet" button: `rgba(62,62,62,0.75)` with white text. Use Max Sans with Inter as the fallback: page titles 44px 700, row titles 20px 600, body 15-18px 400, metadata 12px 500 at 65% white. Hero is full-bleed art with black gradients, title logo art, "Watch Now" and "+ My List". Rows of 16:9 tiles with 8px radius and 10-16px gaps; focus adds a 2px white border and scale 1.05. Accent steel blue `#71B8F2` for links only, magenta `#BA236C` for LIVE, amber `#FFA00A` for errors. Focus ring is 2px black inside 5px white. No colourful chrome.

```css
:root {
  --brand-black: #000000;
  --brand-surface-mid: #0F0F0F;
  --brand-surface-high: #191919;
  --brand-border: #282828;
  --brand-border-strong: #575757;
  --brand-text: #FFFFFF;
  --brand-text-mid: rgba(255, 255, 255, 0.8);
  --brand-text-low: rgba(255, 255, 255, 0.65);
  --brand-loud: #DDDDDD;
  --brand-loud-hover: #FFFFFF;
  --brand-quiet: rgba(62, 62, 62, 0.75);
  --brand-quiet-hover: rgba(74, 74, 74, 0.85);
  --brand-steel: #71B8F2;
  --brand-steel-dark: #2E3F4D;
  --brand-steel-button: #3D6A99;
  --brand-slate-navy: #09192B;
  --brand-live: #BA236C;
  --brand-error: #FFA00A;
  --brand-info: #455B73;
  --brand-input-selected: #508FC3;
  --brand-gold: #DDBF84;
  --brand-page-gradient: linear-gradient(#000000, #09192B);
  --brand-font: "Max Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --brand-radius: 8px;
  --brand-radius-badge: 2px;
  --brand-radius-input: 4px;
  --brand-focus-ring: 0 0 0 2px #000000, 0 0 0 5px #FFFFFF;
  --brand-duration: 150ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by HBO Max.
