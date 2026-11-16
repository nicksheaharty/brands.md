---
name: Disney+
slug: disney-plus
url: https://www.disneyplus.com
category: Streaming
tagline: "Deep navy, teal glow, white script logo and franchise tiles: a family streaming UI."
updated: 2026-11-16
logoBackground: "#040714"
theme: dark
colors:
  - name: Navy Black
    hex: "#040714"
    role: Page and app background, logo background
  - name: Disney+ Teal
    hex: "#056D85"
    role: Brand colour, brand containers, primary tags
  - name: Bright Cyan
    hex: "#33DDFF"
    role: Brand accent on dark, action colour, selected states
  - name: Off White
    hex: "#F9F9F9"
    role: Primary text, logo, Play button fill
  - name: Action Blue
    hex: "#0072D2"
    role: Primary CTA on signed-out pages
  - name: Focus Cyan
    hex: "#02D6E8"
    role: Focus and hover borders
  - name: Aurora Teal
    hex: "#056877"
    role: Inner stop of the teal radial glow
  - name: Aurora Navy
    hex: "#051828"
    role: Outer stop of the teal radial glow
  - name: Action Blue Hover
    hex: "#0682F0"
    role: Primary CTA hover
  - name: Card Surface
    hex: "#1A1D29"
    role: Title cards, menus, modals
  - name: Divider
    hex: "#31343E"
    role: Borders, dividers, inactive tracks
  - name: Text Secondary
    hex: "#C0C0C0"
    role: Metadata, synopses, footer links
  - name: Error
    hex: "#C92642"
    role: Error text and borders
  - name: Success
    hex: "#6BD19C"
    role: Success states on dark
fonts:
  display:
    family: "Inspire"
    fallback: "Figtree"
    weights: [600]
  body:
    family: "Inspire"
    fallback: "Figtree"
    weights: [400, 600]
typeScale:
  - { role: Display, size: 52, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: Headline XL, size: 32, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Headline, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Row Title, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Label, size: 14, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, pill: 1000 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "rgb(0 0 0 / 69%) -2px 3px 20px 0px, rgb(0 0 0 / 73%) 0px 16px 10px -10px" }
  - { name: Card Hover, value: "1px -20px 14px -18px rgb(0 0 0 / 80%), 2px 12px 13px -3px rgb(0 0 0 / 72%)" }
  - { name: Menu, value: "0px 7px 6px rgb(0 0 0 / 70%)" }
preview:
  bg: "#040714"
  surface: "#1A1D29"
  text: "#F9F9F9"
  muted: "#C0C0C0"
  border: "#31343E"
  accent: "#0072D2"
  accentText: "#F9F9F9"
  radius: 8
  buttonStyle: pill
---

# Disney+

## 1. Visual Theme & Atmosphere

Disney+ is a dark navy room lit from below by a teal glow. The background is almost black with a blue cast (`#040714`), the logo and type are off-white (`#F9F9F9`), and the brand colour is a deep teal (`#056D85`) that brightens to cyan (`#33DDFF`) for active states. Since the 2024 refresh the signature light is a soft teal "aurora": a radial gradient from `#056877` to `#051828`, usually rising from the lower left, the same light you see in the app icon.

What makes it recognisable:

- **The arc.** The Disney+ wordmark sits under a thin curved line, a light trail that sweeps over the name. It shows up in the logo, loading screens, and the app icon.
- **Franchise tiles.** Under the hero on Home sits a row of brand tiles: Disney, Pixar, Marvel, Star Wars, National Geographic, and in the US, Hulu and ESPN. Each is a dark rounded card with the franchise logo; on hover or focus it plays a short looping video.
- **Hero carousel.** Home opens with wide, rounded hero cards that rotate, each with title logo art on key art, rather than one full-bleed billboard.
- **Rounded everything.** Cards at 8-12px, sheets at 16-24px, pill-shaped buttons in the current design system.
- **Character avatars.** Profiles are circles filled with Disney, Pixar, Marvel and Star Wars characters.

Density: medium. Rows are tighter than Netflix and every card keeps its rounded frame. The UI is family-facing, so it stays calm: no red alerts, no aggressive badges, and plenty of dark space around the franchise artwork.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Navy Black | `#040714` | App and page background, logo background |
| Disney+ Teal | `#056D85` | Brand colour, brand containers, primary tag fill |
| Bright Cyan | `#33DDFF` | Brand accent on dark, action links, selected states |
| Brand Container | `#124954` | Low-emphasis brand fill (selected chips) |
| Focus Cyan | `#02D6E8` | Focus ring and hover border on signed-out pages |
| Aurora Teal | `#056877` | Inner stop of `radial-gradient(circle at 20% 95%, #056877, #051828 96%)` |
| Aurora Navy | `#051828` | Outer stop of the same glow |
| Deep Navy | `#02172A` | Flip cards, feature panels |
| Off White | `#F9F9F9` | Primary text, logo, Play button |

### Surfaces (dark theme tokens)

| Name | Hex | Use |
| --- | --- | --- |
| Surface | `#17171C` | Base surface in sheets |
| Surface Low | `#121118` | Gradient start for page sections |
| Container | `#1E1F24` | Cards and list rows |
| Container High | `#25272C` | Raised menus, popovers |
| Container Highest | `#2C2E35` | Hovered rows |
| Card Surface | `#1A1D29` | Classic title card fill, dropdowns |
| Divider | `#31343E` | Borders, separators, inactive progress track |
| Outline | `#6F717B` | Input borders at rest |
| Scrim | `rgba(23,23,28,0.7)` | Behind modals |

### Text

| Name | Value | Use |
| --- | --- | --- |
| Primary | `#F9F9F9` | Titles, labels, button text |
| Secondary | `#C0C0C0` / `#B7B8BD` | Synopses, metadata, footer |
| Disabled | `rgba(250,250,250,0.4)` | Disabled labels |

### Actions and semantic

| Name | Hex | Use |
| --- | --- | --- |
| Action Blue | `#0072D2` | Primary CTA on signed-out and plan pages ("Sign Up Now", "Select") |
| Action Blue Hover | `#0682F0` | Hover for the same button |
| Error | `#C92642` | Inline errors, invalid borders |
| Success | `#6BD19C` | Confirmation, valid input |
| Warning | `#FFD35C` | Warnings |
| Info | `#2592F8` | Info banners |
| Gold | `linear-gradient(135deg, #FEC341, #F1E68A 52%, #FEC341)` | Premium tier highlights |

Franchise pages swap the primary button colour: Marvel uses a red (`#E62429`), National Geographic a yellow (`#FFCC00` with black text), and some campaign pages use an electric blue (`#3300FF`). Treat these as sub-brand themes, not part of the core palette.

### Mode

The product is dark only. The marketing site has a light theme for plan comparison and legal pages (white surfaces, `#0E0B14` link text, black buttons), but the app, player and profile picker are always dark.

## 3. Typography

- **Inspire** is Disney's own typeface and is what the current design tokens name for every role (`--fontFamilyDisplayLarge: Inspire`, and so on). It has cuts for Japanese, Korean, Chinese, Hebrew, Arabic and Thai. It is not available for outside use.
- Older Disney+ web builds used Avenir and some marketing pages still load **Graphik**. Do not mix them with Inspire.
- Fallback: **Figtree** from Google Fonts has similar round, friendly geometry. System stack: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- Title names in the hero and on detail pages are title logo art supplied per film or series, not type.

### Scale (from the live tokens)

| Role | Desktop | Mobile | Weight | Notes |
| --- | --- | --- | --- | --- |
| Display Large | 72px | 44px | 600 | Signed-out hero only |
| Display Medium | 52px | 36px | 600 | Section openers |
| Display Small | 44px | 32px | 600 | Plan page headings |
| Headline XXL | 40px | 32px | 600 | |
| Headline XL | 32px | 28px | 600 | Page titles ("Movies", "Watchlist") |
| Headline Large | 28px | 24px | 600 | |
| Headline Medium | 24px | 20px | 600 | Detail page subheads |
| Headline Small | 20px | 16px | 600 | Row titles ("Continue Watching") |
| Body Large | 18px | 18px | 400 | Synopsis on detail pages |
| Body Medium | 16px | 16px | 400 | Default body |
| Body Small | 14px | 14px | 400 | Metadata, footer |
| Label | 18 / 16 / 14 / 12px | same | 600 | Buttons, tabs, tags |

### Rules

- Every heading and label is 600; body is 400. There is no 700 or 900 in the token set.
- Sentence case for headings and most buttons. Plan cards use uppercase "SELECT" and the older web nav used uppercase labels with about 1.4px tracking; keep uppercase to those places.
- No negative tracking.
- Metadata lines join items with a small dot or spacing: "2024 • 2h 9m • PG".

## 4. Logo & Brand Mark

- **Wordmark:** "Disney" in the Walt Disney script, followed by a plus sign, with a thin arc sweeping from the left above the "D" over to the plus. Since 2024 the arc is a single solid line in the same colour as the letters.
- **Colour versions:** white on dark navy (primary in product), Disney+ teal on white, black on light marketing pages. The 2019 version with a blue-to-cyan gradient arc is retired.
- **App icon:** the white wordmark and arc centred on a navy-to-teal gradient square, with a cyan glow rising from the lower left. Recreate it with `linear-gradient(180deg, #052438, #063A4E 45%, #0A7386 80%, #0BAFBB)` plus a radial `#5EDAE6` glow.
- **Favicon:** the Disney "D" alone, in teal.
- **Clear space:** at least the height of the plus sign on all sides; never let the arc touch other elements.
- **Minimum size:** about 80px wide for the full lockup on screen. Below that, use the "D".

Misuse: do not redraw the script in a font, remove the arc from the full logo, recolour the arc separately from the letters, add shadows or glows to the wordmark itself, or place it on busy art without a dark scrim.

## 5. Components

### Buttons

The current design system tokens set buttons to a full pill (`--borderRadiusButton: 1000px`).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; padding: 0 24px;
  font: 600 16px/1 "Inspire", "Figtree", sans-serif;
  border: 0; border-radius: 1000px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms;
}
.btn-primary { background: #0072D2; color: #F9F9F9; }
.btn-primary:hover { background: #0682F0; }
.btn-primary:disabled { background: #313442; color: rgba(250,250,250,0.4); }

.btn-play { background: #F9F9F9; color: #040714; }          /* detail page and hero */
.btn-play:hover { background: #FFFFFF; }

.btn-secondary { background: rgba(249,249,249,0.1); color: #F9F9F9; border: 2px solid rgba(249,249,249,0.8); }
.btn-secondary:hover { background: rgba(249,249,249,0.2); }

.btn:focus-visible { outline: 2px solid #F9F9F9; outline-offset: 3px; }
```

Icon buttons (Watchlist "+", trailer, GroupWatch-style share): 44-48px circles, `rgba(0,0,0,0.6)` fill, 2px `#F9F9F9` border, white glyph. Hover fills `#F9F9F9` and turns the glyph navy.

### Inputs

```css
.input {
  height: 48px; padding: 0 16px;
  background: #1E1F24; color: #F9F9F9;
  border: 1px solid #6F717B; border-radius: 8px;
  font-size: 16px;
}
.input:hover { border-color: #B7B8BD; }
.input:focus { border-color: #02D6E8; outline: none; }
.input.is-error { border-color: #C92642; }
```

Labels sit above the field in 14px 600. Error text is 14px `#C92642`.

### Hero carousel

- Wide cards across the top of Home, about 1.78:1 on desktop (wider than the rows), 12px radius, with the next and previous cards peeking at each edge.
- Key art with title logo art bottom-left, no visible text block; pagination dots below.
- Auto-advances about every 8-10 seconds; arrows appear on hover at each side.

### Franchise (brand) tiles

```css
.brand-tile {
  aspect-ratio: 16 / 9; border-radius: 12px;
  background: linear-gradient(180deg, #30323E, #1E1F2A);
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 / 69%) -2px 3px 20px 0px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden; position: relative;
  transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 250ms;
}
.brand-tile video { position: absolute; inset: 0; opacity: 0; transition: opacity 500ms; }
.brand-tile:hover { transform: scale(1.05); border-color: rgba(249,249,249,0.8); }
.brand-tile:hover video { opacity: 1; }
```

The logo sits centred, about 60% of the tile width. Five tiles per row on desktop (seven when Hulu and ESPN are present), two to three on phone with horizontal scroll.

### Title cards

- 16:9 artwork, 8-12px radius, same 3px faint border as brand tiles. Poster (2:3) cards appear in a few collections.
- Hover or focus: scale 1.05, border becomes `rgba(249,249,249,0.8)`, shadow deepens.
- "Continue Watching" cards add a 4px progress bar at the bottom: `#F9F9F9` fill on `rgba(249,249,249,0.3)`, inset 8px from the card edge.
- Rows show 5-6 cards on desktop with 16-20px gaps; row title is 20px 600 above, left-aligned to the page gutter.

### Navigation

- **TV and current web:** a slim left rail of outline icons (Search, Home, Watchlist, Movies, Series, Originals, plus Hulu and ESPN in the US, then Settings and the profile avatar). On focus or hover it expands to show labels in 16px 600 over a dark gradient. Approximate: the exact rail width varies by build, about 72px collapsed.
- **Older web and signed-out pages:** a 72px top bar, logo left, nav labels in uppercase with about 1.4px tracking, avatar right. It fades from transparent to `#040714` on scroll.
- **Mobile:** a bottom tab bar (Home, Search, Downloads, profile) on `rgba(4,7,20,0.95)`, white active icon, `#C0C0C0` inactive.

### Detail page

Full-bleed background art with a left-to-right and bottom navy gradient, title logo art top-left, then a metadata row (year, rating badge, runtime, genres), a white pill "Play" button with a triangle icon, circular "+" Watchlist and trailer buttons, and a 2-3 line synopsis in 18px. Below, tabs: "Episodes", "Suggested", "Extras", "Details". Tabs are 16px 600; active tab is `#F9F9F9` with a 2px underline, inactive `#C0C0C0`.

### Profile picker ("Who's watching?")

Centred row of circular character avatars, about 140px on desktop and 90px on phone, with names in 16px `#C0C0C0` below. Focused avatar scales 1.1 and gets a 4px `#F9F9F9` ring. "Add Profile" is a dark circle with a plus. "Edit Profiles" sits below as a secondary pill button.

### Player controls

Black screen; on interaction, a top gradient with back arrow and title, a bottom gradient with a 4px scrubber (`#F9F9F9` played, `rgba(249,249,249,0.3)` track, 16px white thumb), 10-second skip back and forward icons around a large play/pause, and audio, subtitles and fullscreen icons on the right. "Skip Intro" and "Next Episode" appear bottom-right as translucent pill buttons with a white border.

### Plan and paywall pages

Plan cards on `#1A1D29` (or white on the light theme), 16px radius, 24-32px padding. A popular plan gets a small pill tag on top, "Save 52%" style savings in teal, monthly price in 32-44px 600, and a full-width pill "SELECT" button. A comparison table below uses check icons and `#31343E` dividers. Prices change often; never hard-code them.

### Badges and tags

4px radius, 12px 600 text. Neutral tags use `#4A4D59` fill; primary tags use `#056D85` with `#FAFAFA` text. Maturity ratings are outlined: 1px `#C0C0C0`, 12px text. Premier Access and "New Episode" labels sit bottom-left on the card.

## 6. Layout & Spacing

- **Gutter:** about 3.5vw on desktop (about 48px at 1440px), 24px on tablet, 16-20px on phone.
- **Breakpoints:** 440, 768, 1024, 1290 and 1600px (matching the live media queries).
- **Max widths:** marketing content tops out around 1290px; app rows run full width.
- **Rows:** 40-48px between rows on desktop, 24-32px on phone; row title sits 12px above its cards.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64.
- **Density:** generous padding inside cards and sheets, compact gaps between cards.

## 7. Depth, Elevation & Motion

- **Light, not boxes.** Depth comes from the teal aurora glow behind content and from dark gradients over art: `linear-gradient(180deg, hsl(220,9%,7%) 9%, hsl(210,3%,12%) 94.5%)` for sections, `linear-gradient(330.57deg, #183949 0.29%, #040405 90.62%)` for featured panels.
- **Card shadows:** resting `rgb(0 0 0 / 69%) -2px 3px 20px 0px, rgb(0 0 0 / 73%) 0px 16px 10px -10px`; hover `1px -20px 14px -18px rgb(0 0 0 / 80%), 2px 12px 13px -3px rgb(0 0 0 / 72%)`.
- **Borders:** 3px `rgba(249,249,249,0.1)` on cards at rest, `rgba(249,249,249,0.8)` on hover or focus.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for most transitions, `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for card scale.
- **Durations:** 250ms for hover and scale, 200-350ms for accordions and menus, about 500ms for video fade-in on brand tiles.
- **Reduced motion:** the live CSS honours `prefers-reduced-motion`; turn off autoplay and scaling there.

## 8. Iconography & Imagery

- **Icons:** outline style, rounded joins, about 2px stroke at 24px. Home, magnifier, plus, check, play triangle, download arrow. White in chrome, `#C0C0C0` when inactive.
- **Artwork:** studio key art with title logos baked in. Franchise colour lives in the art and brand tiles, never in the chrome.
- **Brand tile video:** short loops (Marvel logo flip, Star Wars starfield, Pixar lamp) that play only on hover or focus.
- **Avatars:** official character portraits on coloured circular backgrounds.
- **Signed-out pages:** device mockups and a collage of title art over the teal glow.

## 9. Voice & Microcopy

Warm, simple, and short. Speaks to families and fans without hype.

- Hero: "Every Story. Every Genre. Bundled Your Way." (live site, 2026-11-16)
- CTAs: "Sign Up Now", "Log In", "Select", "Play", "Continue", "Resume", "Restart"
- Rows: "Continue Watching", "Recommended For You", "New to Disney+", "Trending", "Because You Watched ..."
- Profile: "Who's Watching?", "Add Profile", "Edit Profiles"
- Detail tabs: "Episodes", "Suggested", "Extras", "Details"
- Plans: "Choose your plan", "Switch or cancel anytime", "Terms apply"
- Casing: title case for row titles and short CTAs, sentence case for body. Uppercase only on plan "SELECT" buttons and the legacy nav.

## 10. Do's and Don'ts

**Do**

- Use `#040714` navy, not pure black, as the base.
- Light key sections with the teal aurora gradient from the lower left.
- Round cards (8-12px) and use pill buttons.
- Put franchise tiles directly under the hero.
- Use title logo art instead of typed titles.
- Keep a faint 3px border on cards that brightens on focus.

**Don't**

- Don't use red as an accent outside the Marvel sub-theme.
- Don't use square corners on cards or buttons.
- Don't recolour the wordmark to teal on dark backgrounds; use white.
- Don't autoplay sound on brand tiles or the hero.
- Don't use bold 700-900 weights; the system stops at 600.
- Don't add a light theme to the app or player.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Disney+. Background `#040714` (dark navy), primary text `#F9F9F9`, secondary `#C0C0C0`, cards `#1A1D29`, dividers `#31343E`. Brand teal `#056D85` with bright cyan `#33DDFF` for active states; light hero sections with `radial-gradient(circle at 20% 95%, #056877, #051828 96%)`. Primary CTA is a pill in `#0072D2` (hover `#0682F0`); the Play button is an off-white pill with navy text. Use Inspire with Figtree as the fallback: headings 600 weight (32px page titles, 20px row titles), body 16px 400. Home has a rotating hero of wide 12px-radius cards, then a row of franchise tiles (Disney, Pixar, Marvel, Star Wars, National Geographic) with a 3px `rgba(249,249,249,0.1)` border that turns `rgba(249,249,249,0.8)` and scales 1.05 on hover over 250ms, then rows of 16:9 cards with 16px gaps. Profiles are circular character avatars. Rounded, calm, no red.

```css
:root {
  --brand-bg: #040714;
  --brand-teal: #056D85;
  --brand-cyan: #33DDFF;
  --brand-focus: #02D6E8;
  --brand-aurora: radial-gradient(circle at 20% 95%, #056877, #051828 96%);
  --brand-surface: #1A1D29;
  --brand-container: #1E1F24;
  --brand-container-high: #25272C;
  --brand-divider: #31343E;
  --brand-outline: #6F717B;
  --brand-text: #F9F9F9;
  --brand-text-secondary: #C0C0C0;
  --brand-text-disabled: rgba(250, 250, 250, 0.4);
  --brand-action: #0072D2;
  --brand-action-hover: #0682F0;
  --brand-error: #C92642;
  --brand-success: #6BD19C;
  --brand-warning: #FFD35C;
  --brand-card-border: rgba(249, 249, 249, 0.1);
  --brand-card-border-hover: rgba(249, 249, 249, 0.8);
  --brand-card-shadow: rgb(0 0 0 / 69%) -2px 3px 20px 0px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  --brand-font: "Inspire", "Figtree", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-radius-card: 12px;
  --brand-radius-input: 8px;
  --brand-radius-button: 1000px;
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-ease-card: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --brand-duration: 250ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Disney+.
