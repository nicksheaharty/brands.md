---
name: Tubi
slug: tubi
url: https://tubitv.com
category: Streaming
tagline: "Deep purple-black, electric yellow, chunky lowercase type: free streaming with attitude."
updated: 2026-11-16
logoBackground: "#45009D"
theme: dark
colors:
  - name: Tubi Yellow
    hex: "#FFFF13"
    role: Wordmark, primary buttons, focus rings, selected states
  - name: Night
    hex: "#0B0019"
    role: App background (default dark theme)
  - name: Tubi Purple
    hex: "#45009D"
    role: App icon base, PWA theme colour, logo background
  - name: Bright Purple
    hex: "#8C00E5"
    role: Top stop of the app icon gradient, promo gradients
  - name: Deep Plum
    hex: "#53008B"
    role: Top of the page glow gradient into Night
  - name: Electric Purple
    hex: "#7408FF"
    role: Purple wordmark on light, accents in light-mode controls
  - name: Surface
    hex: "#161324"
    role: Dropdowns, dark tooltips, menus
  - name: Surface Raised
    hex: "#29253F"
    role: Toasts, light tooltips, raised panels
  - name: White
    hex: "#FFFFFF"
    role: Primary text, secondary button fill
  - name: Lavender
    hex: "#C9C2FF"
    role: Coach-mark callouts with Night text
  - name: Error
    hex: "#E80047"
    role: Input error border and error chip
  - name: Success
    hex: "#00EC96"
    role: Success icons on dark
  - name: Kids Blue
    hex: "#1D00F2"
    role: Tubi Kids theme background
  - name: Kids Orange
    hex: "#FEA534"
    role: Tubi Kids primary fill
fonts:
  display:
    family: "Tubi Stans"
    fallback: "Archivo"
    weights: [900]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 48, weight: 900, lineHeight: 1.17, tracking: "0" }
  - { role: Page Title, size: 36, weight: 900, lineHeight: 1.11, tracking: "0" }
  - { role: Row Title, size: 24, weight: 900, lineHeight: 1.33, tracking: "0" }
  - { role: Subhead, size: 20, weight: 700, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Body Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Caption, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Tag, size: 11, weight: 900, lineHeight: 1.45, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 64]
shadows:
  - { name: Focus Ring, value: "0 0 0 2px #0B0019, 0 0 0 4px #FFFF13" }
  - { name: Popover, value: "0 2px 10px 0 rgba(0,0,0,0.2)" }
  - { name: Soft Lift, value: "0 6px 10px 0 rgba(0,0,0,0.05)" }
preview:
  bg: "#0B0019"
  surface: "#161324"
  text: "#FFFFFF"
  muted: "#B6B3BA"
  border: "#3C3347"
  accent: "#FFFF13"
  accentText: "#0B0019"
  radius: 8
  buttonStyle: pill
---

# Tubi

## 1. Visual Theme & Atmosphere

Tubi is a free, ad-supported streamer, and its 2024 rebrand dropped the old orange for a loud purple and yellow system. The app sits on a near-black purple (`#0B0019`), a soft plum glow bleeds down from the top of the page, and almost every accent is one electric yellow (`#FFFF13`). The wordmark is a fat lowercase "tubi" with a bitten "t", and the custom display face, Tubi Stans, has the same heavy, slightly cheeky shape.

What makes it recognisable:

- **Purple dark, not black.** Backgrounds are purple-black and plum, never neutral grey. Even overlays are tinted (`rgba(11,0,25,0.75)`) instead of plain black.
- **One yellow.** Buttons, focus rings, the logo and selected nav items all share `#FFFF13`. Text on yellow is Night (`#0B0019`).
- **Pill buttons.** Every button is a 999px pill, 48px tall, bold Inter.
- **Hero carousel of rounded cards.** The home page opens with wide 16px-radius hero cards (two per view on desktop) rather than one full-bleed billboard.
- **Poster rows.** Below the hero, rows of portrait poster tiles with 4px corners, five or six across on desktop.
- **Heavy headlines.** Row titles and page titles are set in Tubi Stans 900, the only weight the font ships in.

Density: medium. Chrome is simple, imagery does most of the work, and the type is big enough for a TV. The brand reads as playful and a bit irreverent, closer to a pop-culture account than a prestige studio.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Tubi Yellow | `#FFFF13` | Wordmark, primary button, focus ring, checked checkbox text, selected nav |
| Yellow Hover | `rgba(255,255,19,0.8)` | Primary button hover |
| Yellow Pressed | `rgba(255,255,19,0.6)` | Primary button active |
| Night | `#0B0019` | Page background, text on yellow, button tag fill |
| Deep Plum | `#53008B` | Top of the full-page gradient (`linear-gradient(180deg, #53008B, #0B0019 100vh)`) |
| Tubi Purple | `#45009D` | App icon base, PWA `theme_color`, logo background |
| Bright Purple | `#8C00E5` | Top-right of the app icon gradient |
| Electric Purple | `#7408FF` | Purple wordmark for light backgrounds, light-mode dropdown hover and focus |
| Ambient Glow | `rgba(110,45,170,0.65)` | Soft glow behind the hero carousel, fading to transparent by about 250px |

### Surfaces and text

| Name | Value | Use |
| --- | --- | --- |
| Surface | `#161324` | Open dropdowns, dark tooltips, focused input fill |
| Surface Raised | `#29253F` | Toasts, light tooltips, side panels |
| Overlay | `rgba(11,0,25,0.75)` | Modal scrim, player overlays |
| Glass | `hsla(0,0%,100%,0.2)` | Tertiary buttons, chip backgrounds, subtle borders |
| Text Primary | `#FFFFFF` | Titles and body |
| Text Secondary | `hsla(0,0%,100%,0.7)` | Metadata, inactive nav, helper text |
| Placeholder Tile | `rgba(255,255,255,0.12)` | Skeleton loaders for logo, titles, cards |

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Error | `#E80047` | Input error border, error message chip (white text) |
| Error Alt | `#E00080` | Error border variant in some forms |
| Success | `#00EC96` | Success icon on dark |
| Success Dark | `#00955D` | Success icon on light |
| Lavender | `#C9C2FF` | Coach marks and feature callouts, Night text |
| Legacy Orange | `#FF501A` | Pre-2024 orange, still in old components. Do not use for new work |

### Themes

The CSS ships three themes: `defaultDarkTheme` (Night and yellow, the main product), `kidsDarkTheme` (Kids Blue `#1D00F2` background, `#2948FF` surfaces, `#FEA534` orange accents), and `defaultLightTheme` (white surfaces with `#7408FF` purple accents, used for account and some web views). Build on the default dark theme unless the screen is for Tubi Kids.

## 3. Typography

- **Tubi Stans** is the custom display typeface from the 2024 rebrand. The site loads one weight (900) as `TubiStans`. It is used for page titles, row titles, and hero text, never for body copy. It is proprietary.
- **Inter** carries everything else: navigation, buttons, metadata, synopses, forms. It is loaded from Tubi's CDN and is the same Inter on Google Fonts.
- Fallbacks: Tubi Stans to **Archivo** at 900 (or Archivo Black), then `"Helvetica Neue", sans-serif`. Inter needs no substitute.
- Title treatments on hero cards are per-title logo art, delivered as images.

### Scale

Desktop values from the `--webview-*` tokens; mobile drops a step.

| Role | Font | Size / line | Weight | Notes |
| --- | --- | --- | --- | --- |
| Hero | Tubi Stans | 48 / 56px | 900 | Marketing headers, 36/40 on mobile |
| Page title | Tubi Stans | 36 / 40px | 900 | "Live TV", category page names |
| Row title | Tubi Stans | 24 / 32px | 900 | "Most Popular", "Recently Added", 20/28 on mobile |
| Subhead | Inter | 20 / 28px | 700 | Detail page sections |
| Body | Inter | 16 / 20px | 400 | Synopses, modal text |
| Body strong | Inter | 16 / 20px | 700 | Buttons, nav links |
| Body small | Inter | 14 / 20px | 400 | Metadata line, footer links |
| Caption | Inter | 12 / 16px | 500 | Ratings, durations, timestamps |
| Tag | Inter | 11 / 16px | 900 | "NEW", "LIVE" chips, uppercase |

### Rules

- Tracking stays at 0 everywhere; the tokens set `letter-spacing: 0`.
- Sentence case and title case in UI. Uppercase only for tags and small chips.
- Buttons use Inter 700, not Tubi Stans.
- Keep Tubi Stans to one or two lines; it is very wide and heavy.

## 4. Logo & Brand Mark

- **Wordmark:** lowercase "tubi" in a custom heavy geometric shape. The "t" has a round notch cut into its crossbar, the "b" and "i" are blunt and squared off. The file here is the yellow `#FFFF13` version.
- **App icon:** the yellow wordmark centred on a purple gradient, `#8C00E5` at the top right to `#45009D` at the bottom. The wordmark fills about 70% of the icon width.
- **Colour versions:** yellow on Night or purple (primary); Electric Purple `#7408FF` on white; black on yellow for one-colour print.
- **Clear space:** at least the height of the "u" bowl on all sides.
- **Minimum size:** about 60px wide on screen. The header logo renders about 72 x 28px.
- **Placement:** top-left of the nav, 80px tall bar.

Misuse: do not use the pre-2024 orange logo, outline the wordmark, set "tubi" in any font, rotate it, or place yellow on white.

## 5. Components

### Buttons

From `.web-button` in the live stylesheet.

```css
.btn {
  display: flex; align-items: center; justify-content: center;
  height: 48px; padding: 12px 24px;
  border: 0; border-radius: 999px;
  font: 700 16px/20px "Inter", "Helvetica Neue", sans-serif;
  letter-spacing: 0; white-space: nowrap;
  text-shadow: 0 2px 4px rgba(0,0,0,0.078);
  transition: background-color .3s ease;
}
.btn-primary   { background: #FFFF13; color: #0B0019; }
.btn-primary:hover  { background: rgba(255,255,19,0.8); }
.btn-primary:active { background: rgba(255,255,19,0.6); }
.btn-secondary { background: #FFFFFF; color: #0B0019; }
.btn-secondary:active { background: #F0F0F0; }
.btn-tertiary  { background: hsla(0,0%,100%,0.2); color: #FFFFFF; }
.btn-tertiary:hover  { background: hsla(0,0%,100%,0.24); }
.btn-tertiary:active { background: hsla(0,0%,100%,0.14); }
.btn:disabled { opacity: .65; pointer-events: none; }
.btn:focus-visible { box-shadow: 0 0 0 2px #0B0019, 0 0 0 4px #FFFF13; outline: none; }
```

- Icon in a button: 18-22px, 11px gap before the label. Icon-only buttons are circles of the same height.
- Hover on some large buttons scales the background shape slightly (about 1.05x) instead of changing colour.
- Button tag: a small pill inside the button (`#0B0019` fill, white 11px 900 uppercase, 24px tall) for things like "NEW".

### Inputs

```css
.input {
  height: 56px; padding: 24px 16px 8px;
  background: hsla(226,7%,61%,0.16);
  border: 1px solid transparent; border-radius: 8px;
  color: #FFFFFF; font: 400 16px/20px "Inter", sans-serif;
}
.input:focus-within { background: #161324; border-color: #FFFF13; }
.input.is-error { border-color: #E80047; }
```

Floating label: 16px centred, moves to 12px at the top on focus or fill. Error messages sit in a small `#E80047` chip with white text and an icon.

### Hero carousel

- Rounded cards, `border-radius: 16px`, aspect ratio 649:412, two per view on desktop with a 10px gap, starting at the page margin so the next card peeks.
- Each card: key art, a bottom gradient into Night, the title logo art, a one-line metadata row (year, rating, duration, genres), and a yellow "Play" pill plus a tertiary "+ My List" circle (approximate layout from the live app).
- Carousel arrows are 48px glass circles; dots are small white pills, the active one wider.

### Poster tiles

- Portrait art, aspect ratio 100:143.5 (close to 2:3), `border-radius: 4px`.
- Tiles per view: 3 under 960px, 4 from 960px, 5 from 1170px, 6 from 1440px. 5px padding on each side of a tile, so about 10px between posters.
- Hover lifts the tile slightly (`transition: transform .3s ease`) and reveals title and metadata beneath. A thin progress bar in yellow sits under "Continue Watching" tiles.
- Skeleton state: `rgba(255,255,255,0.12)` blocks with the same radii.

### Navigation

- Top bar 80px tall, transparent over the page glow, logo left at the page margin.
- Primary links: "Movies", "TV Shows", "Live TV", "Español", "Tubi Kids", plus a "Browse" mega-menu with columns "Hubs", "Popular", "Genres", "Collections", "Networks", "Explore".
- Right side: search, "Sign In" (text link) and "Register" (yellow pill).
- Active link turns white and bold; inactive links are 70% white. Yellow is used for hover on row-header links.

### Live TV guide

- Left column of genre filters: "Featured", "Recommended", "National News", "Sports On Now", "Classic TV", "Comedy", "True Crime", "Local News" and more.
- Grid header shows half-hour slots ("7:30 PM", "8:00 PM", ...) and the date ("17 Tue").
- Each channel row: channel logo cell on the left, then programme cells sized by duration on `#161324`-style surfaces with 8px radius. The airing cell is lighter and carries a yellow progress fill (approximate; derived from the brand system).
- A "now" line marks the current time across rows.
- Selecting a channel plays it in a mini player at the top of the page.

### Detail page

Full-width backdrop with a Night gradient from the left and bottom, title art, metadata row (year, duration, rating box with 1px white 40% border, genres), synopsis in 16px Inter at 70% white, yellow "Play" pill, tertiary "Add to My List". Seasons use a dropdown on `#161324`; episodes list as 16:9 thumbnails with 8px radius.

### Player

Ad-supported, so the scrubber shows ad break markers as small yellow ticks and an "Ad 1 of 3" style countdown appears top-left during breaks (approximate). Controls are white icons on a bottom gradient, 48px hit areas, with the timeline filling in `#FFFF13`.

### Sign-in and registration

There is no paid plan or paywall. Registration (free) unlocks My List, Continue Watching and parental controls. The modal is a `#161324` panel, 16px radius, Tubi Stans heading, stacked full-width pill buttons for "Continue with Google", "Continue with Apple" and email, max width about 404px.

### Tooltips, toasts, labels

- Tooltip dark: `#161324`, white 14px text, 8px radius, arrow. Light variant `#29253F`.
- Toast: `#29253F`, 12px radius, white text, slides up from the bottom.
- Label colours: white with `#161324` text, red `#E80047` with white text.

## 6. Layout & Spacing

- **Page margin:** 65px on desktop (from the home skeleton), 40px on tablet (`--page-margin: 40px`), 16-20px on phones.
- **Max width:** rows and the hero viewport cap at 1920px and centre.
- **Row rhythm:** 12px vertical padding around each row, 12px between the row title and its tiles.
- **Breakpoints:** 540, 768, 960, 1170, 1440px (most rules switch at 767 and 1169).
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 40, 64.
- **Density:** generous margins, tight gaps inside rows.

## 7. Depth, Elevation & Motion

- **Gradients first.** The page uses a vertical plum gradient (`#53008B` to `#0B0019`) and an ambient glow behind the hero; carousels use horizontal fades into `#0B0019` at both edges (`linear-gradient(90deg, #0B0019 3.65%, transparent 16%, transparent 83%, #0B0019 96%)`).
- **Shadows:** light, used on popovers (`0 2px 10px rgba(0,0,0,0.2)`) and a few raised cards. Focus is shown with the two-ring yellow shadow, not a glow.
- **Durations:** 200ms for colour and opacity on small controls, 300ms for button fills, tile transforms and fades, 600ms for large reveal animations. Easing is plain `ease`.
- **Carousel:** slides with a 300-600ms ease; video previews crossfade over the still art.

## 8. Iconography & Imagery

- **Icons:** simple solid and 2px-stroke glyphs at 24px: play, plus, check, chevrons, search, heart, help, globe. White on dark, Night on yellow.
- **Artwork:** licensed key art and posters, plus Tubi Originals with bold title treatments. The UI never recolours artwork.
- **Brand graphics:** the 2024 campaign uses the yellow and purple with oversized wordmark crops and surreal "rabbit hole" imagery. Keep marketing art saturated and a bit absurd.
- **Kids:** brighter blue and orange, rounder shapes.

## 9. Voice & Microcopy

Casual, quick, a little cheeky. It leans on "free" constantly and never mentions price because there isn't one.

- Page title: "Watch Free Live TV, Movies and TV Shows Online"
- Category names: "Most Popular", "Recently Added", "Tubi Originals", "Holiday Hits", "Noirvember", "Buckle Up & Binge", "Family, Am I Right?"
- Nav: "Browse", "Movies", "TV Shows", "Live TV", "Tubi Kids", "Mixtapes", "Sign In", "Register"
- Footer sign-off: "Made with [heart] in San Francisco"
- Buttons: "Play", "Resume", "Add to My List", "Watch Free"
- Casing: title case for collection names and buttons, sentence case for help text.

## 10. Do's and Don'ts

**Do**

- Use Night `#0B0019` and plum gradients for backgrounds.
- Keep `#FFFF13` for the primary action, focus and brand moments.
- Make every button a 999px pill, 48px tall, Inter 700.
- Set row and page titles in Tubi Stans (or Archivo 900) at 24-48px.
- Use 16px radii for hero cards and 4px for posters.
- Show two hero cards per view with a peek, and posters five or six across.

**Don't**

- Don't use neutral grey or pure black as the main background.
- Don't bring back the old Tubi orange.
- Don't put yellow text on white or white text on yellow.
- Don't use Tubi Stans for body copy or buttons.
- Don't square off buttons.
- Don't add subscription or pricing language.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Tubi (2024 rebrand). Background `#0B0019` with a vertical gradient from `#53008B` at the top and a soft purple glow `rgba(110,45,170,0.65)` behind the hero. One accent: Tubi Yellow `#FFFF13`, with `#0B0019` text on it. Headlines and row titles in Tubi Stans 900 (fallback Archivo 900): 48px hero, 36px page title, 24px row title. Everything else in Inter: 16px body, 14px meta at 70% white, buttons 16px 700. Buttons are 48px pills (radius 999px, padding 12px 24px): primary yellow (hover 80% opacity, pressed 60%), secondary white, tertiary `hsla(0,0%,100%,0.2)`. Focus ring `0 0 0 2px #0B0019, 0 0 0 4px #FFFF13`. Home is an 80px transparent nav, a hero carousel of 16px-radius cards (aspect 649:412, two per view, 10px gap), then rows of 2:3 poster tiles with 4px radius, 5-6 per view, 65px page margin. Menus `#161324`, toasts `#29253F`, errors `#E80047`. Transitions 300ms ease.

```css
:root {
  --brand-yellow: #FFFF13;
  --brand-yellow-hover: rgba(255, 255, 19, 0.8);
  --brand-yellow-pressed: rgba(255, 255, 19, 0.6);
  --brand-night: #0B0019;
  --brand-plum: #53008B;
  --brand-purple: #45009D;
  --brand-purple-bright: #8C00E5;
  --brand-purple-electric: #7408FF;
  --brand-glow: rgba(110, 45, 170, 0.65);
  --brand-surface: #161324;
  --brand-surface-raised: #29253F;
  --brand-overlay: rgba(11, 0, 25, 0.75);
  --brand-glass: hsla(0, 0%, 100%, 0.2);
  --brand-text: #FFFFFF;
  --brand-text-secondary: hsla(0, 0%, 100%, 0.7);
  --brand-lavender: #C9C2FF;
  --brand-error: #E80047;
  --brand-success: #00EC96;
  --brand-font-display: "Tubi Stans", "Archivo", "Helvetica Neue", sans-serif;
  --brand-font-body: "Inter", "Helvetica Neue", sans-serif;
  --brand-radius-tile: 4px;
  --brand-radius: 8px;
  --brand-radius-hero: 16px;
  --brand-radius-pill: 999px;
  --brand-button-height: 48px;
  --brand-page-margin: 65px;
  --brand-focus: 0 0 0 2px #0B0019, 0 0 0 4px #FFFF13;
  --brand-duration: 300ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Tubi.
