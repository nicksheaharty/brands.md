---
name: Hulu
slug: hulu
url: https://www.hulu.com
category: Streaming
tagline: "Charcoal canvas, one electric green, uppercase CTAs: a TV-first streaming UI."
updated: 2026-11-16
logoBackground: "#0B0C0F"
theme: dark
colors:
  - name: Hulu Green
    hex: "#1CE783"
    role: Logo, primary CTA, eyebrows, active states
  - name: Near Black
    hex: "#0B0C0F"
    role: App and billboard background, logo background
  - name: Nav Charcoal
    hex: "#16181D"
    role: Global nav, dark CTA panels
  - name: Surface
    hex: "#272C34"
    role: Menus, modals, cards
  - name: White
    hex: "#FFFFFF"
    role: Primary text, active nav items
  - name: Nav Grey
    hex: "#A8AFBD"
    role: Inactive nav and tabs, secondary text
  - name: Hover Charcoal
    hex: "#323843"
    role: Nav item and menu hover
  - name: Press Charcoal
    hex: "#424957"
    role: Pressed nav item
  - name: Slate Grey
    hex: "#6E7A91"
    role: Metadata, credits, descriptions
  - name: Body Slate
    hex: "#586174"
    role: Body text on light sections, disclaimers
  - name: Plan Green
    hex: "#04CD6A"
    role: Plan badges and labels
  - name: Focus Grey
    hex: "#8B94A7"
    role: Tile hover and focus ring
  - name: Light Surface
    hex: "#F6F7F8"
    role: Light marketing sections
  - name: Error
    hex: "#E6411D"
    role: Error text and borders
fonts:
  display:
    family: "Graphik"
    fallback: "Inter"
    weights: [500, 600]
  body:
    family: "Graphik"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 48, weight: 600, lineHeight: 1.25, tracking: "-0.5px" }
  - { role: Headline, size: 40, weight: 600, lineHeight: 1.16, tracking: "-0.2px" }
  - { role: Title, size: 24, weight: 600, lineHeight: 1.25, tracking: "-0.2px" }
  - { role: Tile Title, size: 20, weight: 400, lineHeight: 1.2, tracking: "-0.5px" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.36, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 500, lineHeight: 1, tracking: "0.6px" }
  - { role: Legal, size: 10, weight: 400, lineHeight: 1.46, tracking: "0" }
radii: { sm: 4, md: 8, lg: 12, xl: 16, pill: 100 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 4px 8px 0 rgba(48,65,97,0.2)" }
  - { name: Button Lift, value: "0 3px 6px rgba(0,0,0,0.2)" }
  - { name: Modal, value: "0 24px 88px -8px rgba(11,12,15,0.4)" }
preview:
  bg: "#0B0C0F"
  surface: "#272C34"
  text: "#FFFFFF"
  muted: "#A8AFBD"
  border: "#323843"
  accent: "#1CE783"
  accentText: "#0B0C0F"
  radius: 4
  buttonStyle: solid
---

# Hulu

## 1. Visual Theme & Atmosphere

Hulu is a charcoal room with one green light switch. Backgrounds are near-black with a cool blue-grey cast (`#0B0C0F`, `#16181D`, `#272C34`), text is white and cool greys (`#A8AFBD`, `#6E7A91`), and Hulu Green (`#1CE783`) carries the logo and the one action that matters. The type is Graphik, set tight and confident, with short uppercase labels on buttons and eyebrows.

What makes it recognisable:

- **The green.** `#1CE783` is bright enough to read as a light source on dark grey. It is the logo, the "GET THEM BOTH" CTA, eyebrow labels, and the selected state. It is never used as a page background in the app.
- **The lowercase wordmark.** "hulu" in rounded, chunky lowercase letters with flat terminals. Wide letter spacing, no symbol.
- **Uppercase CTAs.** Buttons read "START YOUR FREE TRIAL", "LOG IN", "SELECT", in 14-16px 600 with letter spacing.
- **Cool greys.** Greys lean blue (`#272C34`, `#323843`, `#586174`), never warm.
- **Collections and hubs.** The app is organised into "collections" (rows) and "hubs" (TV, Movies, Sports, News, Hulu Originals, FX, networks).

Density: medium. TV-first layouts with big masthead art, then rows of rounded 16:9 tiles. Marketing pages alternate dark billboards with light grey sections.

Hulu also appears as a branded hub inside the Disney+ app ("Hulu on Disney+"), where it uses Disney+ navigation and spacing with Hulu tiles and green accents. This file describes Hulu's own apps and site.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Hulu Green | `#1CE783` | Logo, primary CTA, eyebrows, active states, billboard borders |
| Green Hover | `rgba(28,231,131,0.8)` | CTA hover |
| Bright Green | `#0EE694` | Full-bleed brand frames on campaign pages (8px border) |
| Plan Green | `#04CD6A` | Plan card badges and labels (dark text) |
| Near Black | `#0B0C0F` | App background, billboard background, logo background |
| Deep Black | `#040405` | Signed-out hero, gradient end |
| Nav Charcoal | `#16181D` | Global nav background, dark CTA panels |
| Surface | `#272C34` | Menu lists, modals, scrolling modal headers, cards |
| Hover Charcoal | `#323843` | Nav item hover, dark button hover |
| Press Charcoal | `#424957` | Nav item pressed |

### Text

| Name | Hex | Use |
| --- | --- | --- |
| Primary | `#FFFFFF` | Headlines, active nav, button text on dark |
| Nav Grey | `#A8AFBD` | Inactive nav items and tabs, device subtitles |
| Slate Grey | `#6E7A91` | Metadata, credits, tag groups on detail pages |
| Body Slate | `#586174` | Body copy on light sections, disclaimers |
| Ink | `#0B0C0F` / `#16181D` | Text on green buttons and light sections |

### Light sections (marketing)

| Name | Hex | Use |
| --- | --- | --- |
| Light Surface | `#F6F7F8` | Section background |
| Light Border | `#D9DCE2` | Card and button borders |
| Light Divider | `#E8EAED` | Dividers, table rows |
| Mid Grey | `#C5CAD3` | Disabled controls |

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Error | `#E6411D` | Input errors |
| Error Strong | `#CC000D` | Payment and blocking errors |
| Link Blue | `#176EE1` (hover `#3C88EB`) | Inline links on light pages |
| Success | `#29A869` | Confirmations on light pages |
| Focus Grey | `#8B94A7` | 4px focus and hover ring around tiles |

### Mode

The app is dark. The marketing site is mixed: dark billboards and mastheads, light `#F6F7F8` and white sections for plans, devices and FAQs. Account pages are light.

## 3. Typography

- **Graphik** (Commercial Type) is the brand typeface, loaded as "Graphik Web" in 400, 500 and 600. It is a licensed commercial font.
- A few campaign pages load **Tungsten** (condensed, bold) for sports and event headlines, and the Disney "Inspire" family appears on bundle pages. Keep both out of core UI.
- Fallback: **Inter** from Google Fonts. System stack: `Helvetica, Arial, sans-serif` (as in the live CSS).
- Title names on mastheads and detail pages are title logo art.

### Scale

| Role | Size | Weight | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| Display | 48px | 600 | 1.25 | -0.5px | Billboard and masthead headline (desktop) |
| Headline | 40px | 600 | 1.16 | -0.2px | Section headlines, tablet masthead |
| Headline (mobile) | 32px | 600 | 1.2 | -0.2px | Billboard headline on phone |
| Title | 24px | 600 | 1.25 | -0.2px | Plan names, modal titles |
| Tile Title | 20px | 400 | 24px | -0.5px | Portrait tile titles |
| Body Large | 18px | 400 | 1.32 | 0 | Lead paragraphs |
| Body | 16px | 400 | 1.36 | 0 | Masthead message, CTA body |
| Small | 14px | 400 | 1.4 | 0 | Mobile body, metadata |
| Tab / Eyebrow | 12-14px | 500 | 1 | 0.6px | Uppercase eyebrows and content tabs |
| Button | 14-16px | 600 | 1 | about 1px | Uppercase CTAs |
| Legal | 10px | 400 | 1.46 | 0 | Disclaimers |

### Rules

- Large headlines get slight negative tracking (-0.2 to -0.5px). Small uppercase labels get positive tracking (0.6-1px).
- Uppercase for CTAs, eyebrows ("ENTERTAINMENT FOR EVERY DAY", "LIVE TV") and content tabs. Sentence case for headlines and body.
- Headlines are 600, never 700+.

## 4. Logo & Brand Mark

- **Wordmark:** lowercase "hulu" in a custom rounded geometric face. The "h" and "l" ascenders are tall flat-topped stems; the "u" bowls have squared bottoms with rounded inner corners. No icon or symbol.
- **Colour versions:** Hulu Green on dark (primary in product), green or black on white, white on photography. In the web nav the logo is green on `#16181D`.
- **App icon:** green wordmark centred on a dark blue-grey square with a subtle diagonal gradient (about `#173442` top-right to `#05090C` bottom-left).
- **Clear space:** at least the width of the "u" on all sides.
- **Minimum size:** about 48px wide on screen; the web nav renders it at 61x24px.
- **Sub-brands:** "Hulu + Live TV", "Hulu Originals", "FX on Hulu" lock the wordmark with a label in Graphik.

Misuse: do not capitalise it ("Hulu" in text, "hulu" only as the logo), outline it, set it in another green, add a gradient, or squeeze the letter spacing.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 48px; min-width: 100px; padding: 0 28px;
  font: 600 14px/1 "Graphik", "Inter", sans-serif;
  letter-spacing: 1px; text-transform: uppercase; white-space: nowrap;
  border: 0; border-radius: 4px; cursor: pointer;
  transition: all 200ms ease;
}
.btn-green { background: #1CE783; color: #0B0C0F; }
.btn-green:hover { background: rgba(28,231,131,0.8); transform: translateY(-2px); box-shadow: 0 3px 6px rgba(0,0,0,0.2); }
.btn-green:active { transform: translateY(1px); box-shadow: none; }

.btn-white-outline { background: transparent; color: #FFFFFF; border: 2px solid #FFFFFF; }
.btn-white-outline:hover { border-color: rgba(255,255,255,0.5); }

.btn-black { background: #0B0C0F; color: #FFFFFF; }
.btn-black:hover { background: rgba(39,44,53,0.9); }

.btn-white { background: #FFFFFF; color: #0B0C0F; }
.btn-white:hover { background: rgba(255,255,255,0.8); }

.btn:focus-visible { outline: 2px solid #FFFFFF; outline-offset: 2px; }
```

Heights: 40px on phone (12px text), 48px default, 56px on marketing mastheads. Mobile CTAs go full width with a 344px max. In the app, "PLAY" and "WATCH MOVIE" buttons are white with dark text and a play icon; "DETAILS" and "+" (My Stuff) are white-outline.

### Inputs

```css
.input {
  height: 48px; padding: 0 16px;
  background: #FFFFFF; color: #272C34;
  border: 1px solid #C5CAD3; border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  font-size: 16px;
}
.input:focus { border-color: #586174; box-shadow: 0 0 3px #586174; }
.input.is-error { border-color: #E6411D; }
```

Sign-up and login forms sit on light surfaces; labels above in 14px 500 `#272C34`, errors 12-14px `#E6411D`. The ZIP code field for Live TV channels uses the same style with a "SUBMIT" button.

### Masthead and billboard

- Full-width art with a dark gradient from the bottom and left, title logo art bottom-left, a green uppercase eyebrow (12px 500, 0.6px tracking), 48px headline, 16px message, then CTAs.
- On campaign pages the billboard sits inside a 4px `#1CE783` border with a 16px radius, inset 19px from the edges.
- The app's hero slider rotates every few seconds with pagination dots and fades art at 1s with a slow 12s scale (`transform 12s cubic-bezier(0.23,1,0.32,1)`).

### Tiles and collections

```css
.tile-thumb {
  position: relative; aspect-ratio: 16 / 9;
  background: rgba(174,180,191,0.15);
  border-radius: 12px; overflow: hidden; margin-bottom: 16px;
}
.tile-thumb::before {              /* focus/hover ring */
  content: ""; position: absolute; inset: -8px;
  border: 4px solid #8B94A7; border-radius: 16px;
  opacity: 0; transition: opacity 350ms ease-out;
}
.tile:hover .tile-thumb::before, .tile:focus-visible .tile-thumb::before { opacity: 1; }
```

- Title below the art in 16px 500 white, metadata in 14px `#A8AFBD`.
- Portrait (2:3) tiles for Hulu Originals and movies; title 20px 400, -0.5px.
- Rows show 4-6 tiles on desktop with about 16px gaps; arrows at the row ends nudge 3px on hover.
- "Keep Watching" tiles carry a 3-4px progress bar: `#1CE783` fill on `rgba(255,255,255,0.3)`.
- Live tiles add a "LIVE" pill and a channel logo.

### Navigation

```css
.global-nav {
  height: 63px; background: #16181D; border-bottom: 1px solid #16181D;
  transition: all 300ms;
}
.nav-item { color: #A8AFBD; border-radius: 8px; padding: 8px 16px; font: 500 14px/1 "Graphik", sans-serif; }
.nav-item:hover { background: #323843; color: #FFFFFF; }
.nav-item:active { background: #424957; }
.nav-item[aria-current] { color: #FFFFFF; }
.nav-menu { background: #272C34; border-radius: 8px; padding: 4px 0; }
.nav-menu-item { border-radius: 4px; margin: 4px 8px; }
.nav-menu-item:hover { background: rgba(255,255,255,0.2); }
```

Logo green on the left, then "Home", "TV", "Movies", "Sports", "News", "Hubs", "My Stuff"; search and a profile circle (`#272C34` fill, 2px white border, initial in white) on the right. On phone the nav collapses to a bottom tab bar.

### Content tabs

Uppercase 14px 500 with 0.6px tracking, `#A8AFBD` inactive, white active with a 2px accent bar underneath. Used for "EPISODES", "EXTRAS", "DETAILS", "YOU MAY ALSO LIKE" on detail pages.

### Detail page

Masthead art with title logo, green eyebrow (network or "HULU ORIGINAL"), metadata row in `#6E7A91` (rating, genre, year, seasons), white "PLAY" button with the next episode label, "+" and "DETAILS" outline buttons. Below: tabs and a season dropdown (`#272C34` menu with 8px radius). Credits and tag groups use `#6E7A91` with 20px spacing.

### Profile picker ("Who's watching?")

Dark screen, circular avatars (about 120px) filled with solid or gradient colours and a white initial, names below in 16px. Kids profiles are marked. "Edit Profiles" is a white-outline button. Focused avatar scales up with a white ring.

### Player controls

Scrubber at the bottom with a green `#1CE783` played portion on a `rgba(255,255,255,0.3)` track, white thumb, time labels in 14px. Controls: play/pause, 10-second skip, volume, captions, settings, fullscreen. "Skip Intro" and "Skip Recap" are white-outline buttons bottom-right. During ad breaks a plain "Ad" label and a countdown sit top-left.

### Live TV guide

Channel grid with logos in a left column, time slots across the top, program cells on `#16181D` with `#272C34` dividers; the current program highlights with a green left bar. "ON NOW" labels are green.

### Plan and paywall pages

Light `#F6F7F8` background, white plan cards with `#D9DCE2` borders, 8-16px radius, a pill plan label in `#04CD6A` with `#16181D` text, price in 24-32px 600, uppercase green "SELECT" button. A comparison table below uses check icons and `#E8EAED` rows. Bundles with Disney+ and HBO Max sit beside Hulu-only plans. The live site on 2026-11-16 offered "SIGN UP FOR ONLY HULU" alongside bundles; prices change often, so do not hard-code them.

## 6. Layout & Spacing

- **Breakpoints:** 440, 768, 1024, 1280, 1600px (`min-width`) from the live CSS.
- **Gutters:** about 20px on phone, 40px on tablet, about 3-4vw on desktop.
- **Masthead:** text column 760px max on desktop; 70-90px bottom padding.
- **Rows:** 32-48px between collections on desktop.
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64.
- **Nav height:** 63px.

## 7. Depth, Elevation & Motion

- **Flat dark surfaces.** Depth is layering `#0B0C0F`, `#16181D` and `#272C34` plus gradients over art.
- **Shadows:** cards on light pages `0 4px 8px 0 rgba(48,65,97,0.2)`; button lift on hover `0 3px 6px rgba(0,0,0,0.2)`; modals `0 24px 88px -8px rgba(11,12,15,0.4)`.
- **Focus ring:** 4px `#8B94A7` around tiles, offset 4px, with a 16px radius.
- **Durations:** 200ms for buttons, 250ms for arrow nudges, 300ms for nav and opacity, 350ms for tile rings, 500ms for collapsing panels.
- **Easing:** `cubic-bezier(0.455, 0.03, 0.515, 0.955)` for slides and width changes, `cubic-bezier(0.4, 0, 0.2, 1)` for standard UI, `cubic-bezier(0.23, 1, 0.32, 1)` for the slow masthead zoom.
- **Hover lift:** CTAs move up 2px on hover and down 1px on press.

## 8. Iconography & Imagery

- **Icons:** simple outline glyphs at 24px with about 2px strokes, rounded caps; delivered through an icon font ("HuluStyle") and inline SVG. White in the app, `#A8AFBD` inactive.
- **Artwork:** network and studio key art with title logos. Hulu Originals art is often bold, saturated and graphic.
- **Network logos:** white single-colour logos for live channels and hubs (ABC, FX, FOX, ESPN), sized to a common height.
- **Marketing:** device lineups (TV, laptop, phone, tablet) and photography of live sports and news.

## 9. Voice & Microcopy

Casual, direct, a little playful. Sells breadth ("tons of shows") and flexibility ("cancel anytime").

- Hero: "Entertainment for every day" (live site, 2026-11-16)
- Section: "Tons of shows and movies with Hulu"
- Body: "Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more."
- CTAs: "GET THEM BOTH", "GET ALL THREE", "START YOUR FREE TRIAL", "LOG IN", "SELECT", "SUBMIT", "VIEW CHANNELS IN YOUR AREA"
- Eyebrows: "PAST & CURRENT SEASONS", "NEW & CLASSIC", "GROUNDBREAKING", "NEWLY ADDED"
- Plans: "No hidden fees, equipment rentals, or installation appointments. Switch plans or cancel anytime."
- App rows: "Keep Watching", "Hulu Originals", "Recommended For You", "New on Hulu"

## 10. Do's and Don'ts

**Do**

- Use `#1CE783` for the single primary action and for eyebrows.
- Put black text (`#0B0C0F`) on green buttons.
- Keep greys cool and blue-tinted.
- Use uppercase, tracked labels for CTAs, tabs and eyebrows.
- Round tiles at 12px with a separate 4px grey focus ring.
- Keep the 4px radius on CTAs; use pills only for plan labels and status tags.

**Don't**

- Don't fill large backgrounds with green in the app.
- Don't use warm greys or pure `#000000` for app surfaces.
- Don't capitalise the wordmark or set it in type.
- Don't set headlines in 700+ or with positive tracking.
- Don't use green for errors or warnings.
- Don't put uppercase on long body text.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Hulu. Background `#0B0C0F`, nav `#16181D` (63px tall), surfaces `#272C34`, hover `#323843`. Text white, secondary `#A8AFBD`, metadata `#6E7A91`. One accent: Hulu Green `#1CE783` for the primary button (black `#0B0C0F` text, hover `rgba(28,231,131,0.8)` with a 2px lift), eyebrows and the progress bar. Use Graphik with Inter as the fallback: headlines 40-48px weight 600 with -0.2 to -0.5px tracking, body 16px 400, buttons and eyebrows uppercase 12-14px 500-600 with 0.6-1px tracking. Buttons are 48px tall with 4px radius; secondary buttons are white 2px outlines. Masthead: full-width art, green eyebrow, big headline, CTAs. Below, rows of 16:9 tiles with 12px radius and a 4px `#8B94A7` focus ring offset 4px. Cool blue-grey neutrals only.

```css
:root {
  --brand-green: #1CE783;
  --brand-green-hover: rgba(28, 231, 131, 0.8);
  --brand-green-plan: #04CD6A;
  --brand-bg: #0B0C0F;
  --brand-bg-deep: #040405;
  --brand-nav: #16181D;
  --brand-surface: #272C34;
  --brand-hover: #323843;
  --brand-press: #424957;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #A8AFBD;
  --brand-text-meta: #6E7A91;
  --brand-text-body-light: #586174;
  --brand-light-bg: #F6F7F8;
  --brand-light-border: #D9DCE2;
  --brand-focus: #8B94A7;
  --brand-error: #E6411D;
  --brand-link: #176EE1;
  --brand-font: "Graphik", "Graphik Web", "Inter", Helvetica, Arial, sans-serif;
  --brand-radius-button: 4px;
  --brand-radius-menu: 8px;
  --brand-radius-tile: 12px;
  --brand-radius-pill: 100px;
  --brand-nav-height: 63px;
  --brand-ease: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --brand-duration: 200ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Hulu.
