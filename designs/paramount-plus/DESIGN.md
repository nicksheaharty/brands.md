---
name: Paramount+
slug: paramount-plus
url: https://www.paramountplus.com
category: Streaming
tagline: "Electric blue on black, a starred mountain, and capital-letter headlines over big key art."
updated: 2026-11-16
logoBackground: "#0064FF"
theme: dark
colors:
  - name: Paramount+ Blue
    hex: "#0064FF"
    role: Brand colour, app icon, primary gradient start, kids badge
  - name: Deep Blue
    hex: "#0037C5"
    role: Primary gradient end, pressed state, links on light
  - name: Black
    hex: "#000000"
    role: Page background, scrolled navigation
  - name: White
    hex: "#FFFFFF"
    role: Logo on blue, primary text
  - name: Focus Blue
    hex: "#4197FE"
    role: Focus ring, secondary light blue
  - name: Navy
    hex: "#133597"
    role: Secondary medium blue, gradient backdrops
  - name: Background Darker
    hex: "#121212"
    role: App background, text on light buttons
  - name: Background Dark
    hex: "#1D1D1D"
    role: Cards, secondary buttons, avatar fill
  - name: Surface Strong
    hex: "#2D2D2D"
    role: Raised panels, hover
  - name: Disabled
    hex: "#393939"
    role: Disabled fill and borders
  - name: Grey 666
    hex: "#666666"
    role: Input border, inactive text
  - name: Grey 999
    hex: "#999999"
    role: Secondary text, medium borders
  - name: Grey CDCDCD
    hex: "#CDCDCD"
    role: Assistive text on dark
  - name: Critical
    hex: "#E42121"
    role: Errors
  - name: Success
    hex: "#008241"
    role: Success states
fonts:
  display:
    family: "Proxima Nova"
    fallback: "Montserrat"
    weights: [700, 900]
  body:
    family: "Proxima Nova"
    fallback: "Montserrat"
    weights: [400, 600]
typeScale:
  - { role: Display, size: 60, weight: 900, lineHeight: 0.93, tracking: "0" }
  - { role: Heading 1, size: 32, weight: 700, lineHeight: 1.19, tracking: "0" }
  - { role: Heading 2, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.22, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.38, tracking: "0" }
  - { role: Button, size: 16, weight: 600, lineHeight: 1, tracking: "0.4px" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Badge, size: 12, weight: 700, lineHeight: 1.17, tracking: "0.4px" }
radii: { sm: 2, md: 6, lg: 10, xl: 16, pill: 1000 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Avatar Badge, value: "-7px -2px 13px 0 rgba(0,0,0,0.5)" }
  - { name: Overlay, value: "0 8px 24px rgba(0,0,0,0.6)" }
preview:
  bg: "#000000"
  surface: "#1D1D1D"
  text: "#FFFFFF"
  muted: "#999999"
  border: "#393939"
  accent: "#0064FF"
  accentText: "#FFFFFF"
  radius: 6
  buttonStyle: solid
---

# Paramount+

## 1. Visual Theme & Atmosphere

Paramount+ is Paramount's streaming service: CBS, Showtime, Nickelodeon, Comedy Central, MTV, Paramount Pictures films, and live sport (NFL on CBS, UEFA Champions League, UFC). The look is a black theatre lit by one saturated blue. Big key art fills the screen, headlines are set in heavy capitals, and the starred mountain sits at the top of every page.

What makes it recognisable:

- **Black plus Paramount+ Blue.** The canvas is `#000000` / `#121212`. Blue `#0064FF` is the brand and the primary action; it usually appears as a diagonal gradient to `#0037C5`.
- **The mountain.** The Paramount peak inside an arc of stars appears above the script "Paramount+" wordmark, and alone on the app icon (white on blue).
- **Shouting headlines.** Marketing headlines and buttons are uppercase and heavy: "A MOUNTAIN OF ENTERTAINMENT™", "PICK A PLAN", "GET STARTED".
- **Square art.** Content tiles have no corner radius (`--tile-border-radius-default: 0px`); buttons are only slightly rounded (6px). Kids profiles soften tiles to 10px.
- **Brand rows.** The home screen groups content by network (CBS, Showtime, Nickelodeon, BET, Comedy Central, MTV) using logo tiles, which matters as much as genre rows.

Density: medium. The signed-out page is a long scroll of full-bleed feature sections; the signed-in app is rows of tiles under a hero carousel.

## 2. Color Palette & Roles

Values come from the live paramountplus.com stylesheets (the shared "VDS" design system, `--color-*` and `--button-*` tokens). The same CSS also carries a Pluto TV theme (yellow `#FFF200`, Pluto TV Sans); ignore those values for Paramount+.

### Brand blues

| Name | Hex | Token / role |
| --- | --- | --- |
| Paramount+ Blue | `#0064FF` | `--color-blue-p-plus-light`, brand, app icon, primary interactive |
| Deep Blue | `#0037C5` | `--color-blue-p-plus-dark`, gradient end, pressed, accent on light |
| Focus Blue | `#4197FE` | `--color-blue-p-plus-secondary-light`, focus rings |
| Navy | `#133597` | `--color-blue-p-plus-secondary-medium`, backgrounds behind art |
| Primary gradient | `linear-gradient(225deg, #0064FF, #0037C5)` | Primary button default |
| Hover gradient | `linear-gradient(225deg, #0037C5, #0064FF)` | Primary button hover and focus (reversed) |

### Neutrals (dark theme)

| Name | Hex | Role |
| --- | --- | --- |
| Black | `#000000` | Page, scrolled nav (`--nav-primary-bg-scrolled`) |
| Background Darker | `#121212` | `--color-bg-darker`, app canvas |
| Background Dark | `#1D1D1D` | `--color-bg-dark`, cards, avatar fill, secondary button |
| Surface Strong | `#2D2D2D` | `--color-bg-strong`, panels |
| Disabled | `#393939` | Disabled fill, disabled border |
| Grey 666 | `#666666` | Input border, inactive avatar label |
| Grey 999 | `#999999` | Secondary text, `--color-bg-shades` |
| Grey AAA | `#AAAAAA` | Outlined secondary border |
| Grey CDCDCD | `#CDCDCD` | Assistive text |
| Snow | `#FFFFFF` | Text, outlined button border |

Translucent whites (`--color-bg-snow-5` to `-60`): `rgba(255,255,255,0.05 / 0.1 / 0.2 / 0.4 / 0.6)` for hover washes, dividers and scrims. Blacks at 20%, 60% and 90% are used for overlays.

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Critical | `#E42121` (dark text `#EF4C4C`, soft `#E8726B`) | Errors, required fields |
| Success | `#008241` | Confirmation |
| Live | `#E42121` (approximate) | LIVE badge on live channels and sport |

### Light theme

Account and some checkout steps use `#FAFAFA`/`#EFEFEF` backgrounds, `#121212` text and `#0037C5` as the accent. The primary button keeps the blue gradient.

## 3. Typography

- **Proxima Nova** (Mark Simonson, licensed through Adobe Fonts as "Proxima Nova A") is the UI and marketing face: `--font-family-primary: Proxima Nova A, sans-serif`.
- Fallback: **Montserrat** (Google Fonts) matches the geometric caps; Figtree is a narrower alternative.
- The wordmark is a custom script, not a font. Show titles use their own logo art.

### Scale

From the `--typography-*` tokens (small / medium / large sizes per role).

| Role | Weight | Size / line height | Use |
| --- | --- | --- | --- |
| Display 01 | 700-900 | 24/28, 60/56, 96/84 | Hero headlines by breakpoint |
| Heading 01 | 700 | 20, 32/38, 60/60 | Section heads ("PICK A PLAN") |
| Heading 02 | 700 | 18, 20, 32/38 | Row titles, card titles |
| Body 01 | 400-600 | 16/22, 18/22, 20/24 | Lead paragraphs |
| Body 02 | 400 | 14/18, 16/22, 18/22 | Descriptions, plan features |
| Caption | 400-700 | 12/14, 14/18, 16/18 | Metadata, legal |
| Button text | 600 | 12/12, 14/14, 16/16, 20 (XL) | Uppercase, 0.4px tracking |
| Ribbon badge | 700 | 12/14 | "MOST POPULAR", "NEW EPISODE" |

### Rules

- Headlines, buttons and badges are uppercase. Body copy is sentence case.
- Display type sets tight: line height below 1 at large sizes (96/84).
- Use trademark symbols where the brand does: "A MOUNTAIN OF ENTERTAINMENT™", "SHOWTIME®".
- Prices: "$8.99/mo" with the "/mo" smaller.

## 4. Logo & Brand Mark

- **Primary logo:** the Paramount mountain (a peak inside a semicircle of stars, with the stars and ridge lines cut out as negative space) stacked above the script wordmark "Paramount+". This file's `logo.svg` is the stacked white version for use on blue or dark backgrounds.
- **Horizontal wordmark:** script "Paramount+" alone, used in the site header and footer (about 118 by 27px).
- **App icon:** white mountain on solid `#0064FF`, mountain centred and filling about two thirds of the tile.
- **Colours:** white on `#0064FF` (icon, social), white on black (product), `#0064FF` on white (print, light pages). Avoid any other colour.
- **Clear space:** the height of the "P" in the wordmark around the lockup.
- **Minimum size:** wordmark about 80px wide; mountain alone 24px.
- **Relationship to Paramount:** the mountain is shared with Paramount (Paramount Skydance). The "+" and the bright blue are what make it Paramount+.

Misuse: do not change the number or position of the stars, fill the stars a different colour from the mountain, outline the script, put the blue logo on black (low contrast), or set "Paramount+" in Proxima Nova as a logo.

## 5. Components

### Buttons

From the `--button-*` and `--button-solid-primary-*` tokens. Base radius is 6px (`--button-border-radius`).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  height: 48px; padding: 16px 40px;
  font: 600 16px/16px "Proxima Nova", "Montserrat", sans-serif;
  letter-spacing: 0.4px; text-transform: uppercase;
  border: 1px solid transparent; border-radius: 6px;
  transition: border-color 0.4s ease-in-out, background 0.4s ease-in-out;
}
.btn-primary { background: linear-gradient(225deg, #0064FF, #0037C5); color: #FFFFFF; }
.btn-primary:hover, .btn-primary:focus-visible { background: linear-gradient(225deg, #0037C5, #0064FF); }
.btn-primary:active { background: #0037C5; }
.btn-primary:disabled { background: #393939; color: #666666; }

.btn-secondary { background: #1D1D1D; color: #FFFFFF; }
.btn-secondary:hover { background: #2D2D2D; }

.btn-outlined { background: transparent; border-color: #FFFFFF; color: #FFFFFF; }
.btn-outlined:hover { background: rgba(255,255,255,0.05); }
.btn-outlined:active { background: rgba(255,255,255,0.1); }

.btn:focus-visible { outline: 2px solid #4197FE; outline-offset: 2px; }
```

- Sizes: large 48px (16px text), medium 40px (14px text, 24px side padding), small 32px (12px text). XL marketing buttons use 20px text.
- **Floating buttons** (round icon buttons on art, such as add to list or mute): 48px or 36px circles, `rgba(0,0,0,0.2)` fill, 1px `rgba(255,255,255,0.4)` border, white icon; hover makes the border solid white.
- **Action buttons** (text links like "More info", "Read our FAQ"): 14px 600, capitalised, 0.2px tracking, no fill.

### Navigation

- Top bar over the hero: mountain-and-script logo left, then "Home", "Shows", "Movies", "Live TV", "Sports", "Brands", "News" (16px), with search, profile avatar and on signed-out pages "SIGN IN" and a blue "GET STARTED".
- Transparent at the top of the page, solid `#000000` after scrolling. It slides up on scroll down and back in on scroll up (`transform: translateY(-100%)`, 0.4s ease-out).
- Active item: white with a 2px blue underline; others `rgba(255,255,255,0.6)`.

### Hero carousel

- Full-bleed key art with a bottom and left black gradient, title logo art, a ribbon line ("NEW SEASON", "STREAMING ON THE PREMIUM PLAN") in 12-14px uppercase, synopsis in 16px, and a blue "WATCH NOW" or "GET STARTED" button plus a floating "+" button.
- Progress markers under the art as short bars; active bar white, others `rgba(255,255,255,0.4)`.

### Content tiles

```css
.tile { aspect-ratio: 16 / 9; border-radius: 0; overflow: hidden; background: #1D1D1D; }
.tile.poster { aspect-ratio: 2 / 3; }
.tile.kids { border-radius: 10px; }
.tile:hover, .tile:focus-visible { outline: 2px solid #FFFFFF; outline-offset: 0; transform: scale(1.05); transition: transform 0.3s ease; }
.tile .progress { height: 4px; background: rgba(255,255,255,0.2); }
.tile .progress > span { background: #0064FF; }
```

- Rows: "Keep Watching", "Trending", "Paramount+ Originals", "Live TV", and network rows. Row titles are 18-20px 700, not uppercase in-app.
- **Brand tiles:** network logos (CBS, Showtime, Nickelodeon, MTV) in white on `#1D1D1D` or on network colour, same 16:9 size as content tiles.
- **Ribbon badge:** top-left or bottom of tile, `linear-gradient(225deg, #0064FF, #0037C5)` fill, white 12px 700 uppercase, 4px horizontal padding: "NEW EPISODE", "PREMIUM".

### Detail page

Hero art with logo, a metadata line (year, rating box, season count, genres separated by dots, "4K", "Dolby Vision"), synopsis, blue "WATCH S1 E1" / "RESUME", round "+" and share buttons. Below: Episodes with a season dropdown (episode cards: 16:9 still, number and title in 16px 700, synopsis in 14px `#999999`), Extras, "You May Also Like", and cast.

### Profile picker ("Who's Watching?")

From the `--avatar-*` tokens:

- Circles at 200px (large), 160px (medium), 112px (small), 80px and 60px. Fill `#1D1D1D` with white character art.
- Name below in 20px capitalised, white; inactive names `#AAAAAA`.
- Hover/focus scales the avatar to 1.13 and adds a 4px `#4197FE` ring.
- Kids profiles carry a small "KIDS" badge: `#0064FF` at 70% with white text.
- "Edit" mode overlays a pencil and uppercase "EDIT" label.

### Plan picker (paywall)

Read on the live page today (2026-11-16): "Plans start at $8.99/month"; two plans, "Paramount+ Essential" ($8.99/mo, ad supported) and "Paramount+ Premium" ($13.99/mo, ad free except live TV, tagged "MOST POPULAR"), with a MONTHLY / ANNUAL toggle. Prices change; re-read before reuse.

- A comparison table on black: plan names as column heads, feature rows with white check icons (or a dash) and 1px `rgba(255,255,255,0.2)` dividers.
- The popular column gets the blue gradient ribbon on top.
- Footnotes in 12px `#999999`.
- One "GET STARTED" blue button under each plan.

### Inputs

```css
.input {
  height: 48px; padding: 12px 16px;
  background: transparent; color: #FFFFFF;
  border: 1px solid #666666; border-radius: 6px;
  font: 400 16px/22px "Proxima Nova", "Montserrat", sans-serif;
}
.input:hover { border-color: #999999; }
.input:focus { border: 2px solid #4197FE; }
.input.is-error { border-color: #EF4C4C; }
.assistive { font-size: 12px; line-height: 14px; letter-spacing: 0.4px; color: #CDCDCD; }
.assistive.is-error { color: #EF4C4C; }
```

### Player

Black background; top bar with back arrow and title; bottom scrubber with blue `#0064FF` played track, white thumb, and time codes; centre play/pause with 10-second skips; right-side buttons for audio and subtitles, cast, and full screen. Live TV adds a red LIVE marker and a channel guide drawer. "SKIP INTRO" and "NEXT EPISODE" appear as outlined white buttons lower-right.

## 6. Layout & Spacing

- **Spacing tokens:** 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 36, 48, 52, 64, 68, 72, 80px (`--spacing-x-small` 4px to `--spacing-x-largest` 80px).
- **Breakpoints:** 480px, 768px, 1024px, 1440px in the live styles.
- **Gutters:** about 20px on phones, 40px on tablets, 60-80px on desktop. Rows bleed off the right edge.
- **Marketing sections:** alternating image-and-text blocks, text max about 500px wide, each with its own "GET STARTED" button.
- **Rows:** 8px between tiles, 32-48px between rows.

## 7. Depth, Elevation & Motion

- Flat surfaces stepped by grey (`#000000`, `#121212`, `#1D1D1D`, `#2D2D2D`).
- Gradients do the depth work: black scrims over art and the diagonal blue gradient on actions.
- **Blur tokens:** 4, 8, 12, 16px for overlays and the profile menu.
- **Shadows:** rare. Avatar badges use `-7px -2px 13px 0 rgba(0,0,0,0.5)`; menus and dialogs about `0 8px 24px rgba(0,0,0,0.6)`.
- **Motion:** 0.4s ease-in-out for button colour, 0.4s ease-in/out for nav show and hide, about 0.3s for tile scale.

## 8. Iconography & Imagery

- **Icons:** the VDS icon set, solid and simple, 16px base (24px medium, 44px in avatars): chevrons, check, plus, play, search, social marks. White on dark.
- **Imagery:** key art from CBS, Showtime and Paramount titles, sports action shots (NFL, UFC, UEFA), and kids characters (SpongeBob, PAW Patrol). Art is full bleed or square-cornered.
- **Network logos** sit on tiles and in the "Brands" page grid.
- Marketing uses device mock-ups for "SO MANY WAYS TO WATCH".

## 9. Voice & Microcopy

Loud headlines, plain body copy. Mountain wordplay is part of the brand.

- Hero: "A MOUNTAIN OF ENTERTAINMENT™"
- Price line: "Plans start at $8.99/month" (read today)
- Section heads: "EXCLUSIVE ORIGINALS", "LIVE SPORTS", "BLOCKBUSTER MOVIES", "ALL OF SHOWTIME®", "FAMILY FUN", "SO MANY WAYS TO WATCH"
- Close: "WHAT ARE YOU WAITING FOR? SUBSCRIBE NOW."
- Buttons: "GET STARTED", "SIGN IN", "GET IT NOW", "WATCH NOW", "RESUME"
- Help: "STILL HAVE QUESTIONS? Read our FAQ", "ARE YOU A STUDENT? Get a 50% discount"
- Profile: "Who's Watching?"
- Write "Paramount+" with the plus sign; "Paramount Plus" only in URLs or spoken contexts.

## 10. Do's and Don'ts

**Do**

- Use `#0064FF` to `#0037C5` gradients for primary actions and badges.
- Keep backgrounds black and near-black.
- Set headlines and buttons in uppercase heavy Proxima Nova.
- Keep content tiles square-cornered; use 6px for buttons and inputs.
- Group content by network as well as by genre.
- Use the white-on-blue mountain for the icon.

**Don't**

- Don't use the Pluto TV yellow `#FFF200` or Pluto TV Sans that sit in the shared stylesheet.
- Don't round content tiles (except kids profiles).
- Don't set long body copy in uppercase.
- Don't place the blue logo on black or the white logo on light grey.
- Don't add extra accent colours; network brands bring their own colours inside their logos only.
- Don't change the star count or proportions of the mountain.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Paramount+. Background `#000000` (app canvas `#121212`), cards `#1D1D1D`, raised `#2D2D2D`, white text, secondary text `#999999`. Brand colour is Paramount+ Blue `#0064FF`; primary buttons use `linear-gradient(225deg, #0064FF, #0037C5)` with white uppercase 600 text, 0.4px tracking, 48px height, 6px radius, reversing the gradient on hover and going solid `#0037C5` when pressed. Focus rings are `#4197FE`. Use Proxima Nova with Montserrat as the fallback; headlines uppercase and heavy (60px 900 on desktop heroes, 32px 700 for section heads), body 16px/22px. Lay out a full-bleed hero with black gradients, then rows of square-cornered 16:9 tiles that scale to 1.05 with a white outline on hover, and a blue progress bar on Keep Watching. Profile avatars are circles (160px) that scale to 1.13 with a 4px `#4197FE` ring. Navigation is transparent over the hero and turns solid black on scroll.

```css
:root {
  --brand-blue: #0064FF;
  --brand-blue-dark: #0037C5;
  --brand-blue-focus: #4197FE;
  --brand-navy: #133597;
  --brand-gradient: linear-gradient(225deg, #0064FF, #0037C5);
  --brand-gradient-hover: linear-gradient(225deg, #0037C5, #0064FF);
  --brand-black: #000000;
  --brand-bg: #121212;
  --brand-surface: #1D1D1D;
  --brand-surface-strong: #2D2D2D;
  --brand-disabled: #393939;
  --brand-border-input: #666666;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #999999;
  --brand-text-assistive: #CDCDCD;
  --brand-critical: #E42121;
  --brand-success: #008241;
  --brand-font: "Proxima Nova", "Proxima Nova A", "Montserrat", sans-serif;
  --brand-radius-button: 6px;
  --brand-radius-tile: 0px;
  --brand-radius-kids: 10px;
  --brand-radius-circle: 1000px;
  --brand-duration: 0.4s;
  --brand-ease: ease-in-out;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Paramount.
