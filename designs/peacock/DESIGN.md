---
name: Peacock
slug: peacock
url: https://www.peacocktv.com
category: Streaming
tagline: "Black screen, white lowercase wordmark, a stack of colour dots and a gold pill button."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Page and app background, logo background
  - name: Peacock Gold
    hex: "#FCCC12"
    role: Brand accent, middle stop of the button gradient, locked-content icon
  - name: Dot Orange
    hex: "#FF8700"
    role: Logo dot gradient (orange stop)
  - name: Dot Magenta
    hex: "#D9005A"
    role: Logo dot gradient (red-magenta stop)
  - name: Dot Violet
    hex: "#8250FF"
    role: Logo dot gradient (violet stop)
  - name: Dot Green
    hex: "#00A637"
    role: Logo dot gradient (green stop)
  - name: White
    hex: "#FFFFFF"
    role: Wordmark, primary text
  - name: Gradient Yellow
    hex: "#FFE000"
    role: Top stop of the primary button gradient
  - name: Gradient Amber
    hex: "#FFA800"
    role: Bottom stop of the primary button gradient
  - name: Surface
    hex: "#1D1E20"
    role: Secondary background, cards, banners
  - name: Surface Raised
    hex: "#323538"
    role: Tertiary background, dividers, secondary button base
  - name: Surface Strong
    hex: "#494B4E"
    role: Raised surface, input fill
  - name: Text Secondary
    hex: "#A4A5A7"
    role: Secondary text on dark
  - name: Link Blue
    hex: "#069DE0"
    role: Links and focus ring on light pages
  - name: Live Red
    hex: "#EE0000"
    role: LIVE badges
  - name: Error
    hex: "#EA103C"
    role: Error messages and borders
fonts:
  display:
    family: "Peacock Sans"
    fallback: "Figtree"
    weights: [500, 700]
  body:
    family: "Peacock Sans"
    fallback: "Figtree"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 40, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Section Title, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Title, size: 24, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Card Title, size: 18, weight: 700, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Button, size: 14, weight: 700, lineHeight: 1, tracking: "0.08em" }
  - { role: Badge, size: 10, weight: 700, lineHeight: 1.6, tracking: "0.08em" }
radii: { sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" }
  - { name: Play Button, value: "0 0 20px rgba(0,0,0,0.1)" }
preview:
  bg: "#000000"
  surface: "#1D1E20"
  text: "#FFFFFF"
  muted: "#A4A5A7"
  border: "#323538"
  accent: "#FCCC12"
  accentText: "#000000"
  radius: 9999
  buttonStyle: pill
---

# Peacock

## 1. Visual Theme & Atmosphere

Peacock is NBCUniversal's streaming service: NBC and Bravo shows, Universal films, Telemundo, and a lot of live sport (Premier League, NBA, NFL, WWE, golf). The interface is a black canvas with white lowercase type, big show and match artwork, and one warm accent: a yellow-to-amber gradient on every primary button. The brand's colour sits in the logo's column of dots, a direct reference to the NBC peacock feathers.

What makes it recognisable:

- **Black and gold.** Backgrounds are `#000000` with charcoal surfaces (`#1D1E20`, `#323538`). Primary actions use a vertical gradient `#FFE000` to `#FCCC12` to `#FFA800` with black text.
- **Pill buttons in capitals.** CTAs are 100px-radius pills, uppercase, bold: "GET STARTED", "SIGN IN", "WATCH NOW".
- **The dots.** The wordmark ends in a vertical stack of round dots in a rainbow gradient. The dots are the only multi-colour element; the rest of the UI stays black, white and gold.
- **Lowercase wordmark.** "peacock" in white, rounded and geometric. The app icon uses only the "p" and the dots.
- **Live sport up front.** Home and the signed-out page carry live event rails with a red LIVE marker, league names and start times.

The signed-out marketing page is dark with a light plan picker (`#F4F4F4` cards) in the middle. The signed-in app is dark throughout.

Density: medium. More text and metadata than Netflix (schedules, channel names, sports times), still led by artwork.

### Logo history

- **2020 to 2026:** "peacock" wordmark followed by six solid dots, one per colour: `#FCCC12` yellow, `#FF7112` orange, `#EF1541` red, `#6E55DC` purple, `#069DE0` blue, `#05AC3F` green. These match the six feathers of the NBC peacock.
- **2026 refresh:** five dots filled with one continuous gradient running yellow, orange, magenta, violet, cyan and green. This is the version on peacocktv.com today and in this file's logo. The exact launch date of the refresh is not confirmed here.

## 2. Color Palette & Roles

Values come from Peacock's live toolkit stylesheet (`toolkit.peacock.css`, tokens such as `--color-background-action-primary`) and the inline logo SVG on peacocktv.com.

### Core (dark theme)

| Name | Hex | Role |
| --- | --- | --- |
| Black | `#000000` | `--color-background-body-primary`, logo background |
| Surface | `#1D1E20` | `--color-background-body-secondary`, cards, banners |
| Surface Raised | `#323538` | `--color-background-body-tertiary`, dividers |
| Surface Strong | `#494B4E` | `--color-background-surface-primary` |
| White | `#FFFFFF` | Primary text, wordmark |
| Text Secondary | `#A4A5A7` | `--color-content-body-secondary` |
| Icon Grey | `#646669` | Inactive action icons |

### Brand gold

| Name | Value | Role |
| --- | --- | --- |
| Primary gradient | `linear-gradient(180deg, #FFE000 0%, #FCCC12 50%, #FFA800 100%)` | Primary buttons, focus borders, selected plan border |
| Peacock Gold | `#FCCC12` | `--color-content-brand-primary`, solid fallback, lock icon |
| Text on gold | `#000000` | Label on primary buttons |

### Logo dots (2026 gradient stops)

| Offset | Hex |
| --- | --- |
| 0 | `#FFDC23` |
| 0.16 | `#FF8700` |
| 0.21 | `#FF5401` |
| 0.37 | `#D9005A` |
| 0.42 | `#C814C8` |
| 0.58 | `#8250FF` |
| 0.63 | `#6E64FF` |
| 0.79 | `#00C8FF` |
| 0.84 | `#00CC99` |
| 0.99 | `#00A637` |

The gradient runs top to bottom across the whole stack, so each dot reads as roughly one colour: yellow-orange, red, purple, blue, green.

### Translucent controls

| Name | Value | Use |
| --- | --- | --- |
| Secondary button | `rgba(50,53,56,0.64)` (`#323538a3`) | "More Info", "Add to My Stuff" |
| Secondary hover | `rgba(73,75,78,0.16)` | Hover wash |
| Selected | `rgba(29,30,32,0.78)` | Selected chip or tab |
| Selected border | `rgba(255,255,255,0.16)` | Outline on selected items |
| Disabled | `rgba(29,30,32,0.5)` | Disabled button |
| Locked | `linear-gradient(204deg, #1D1E20 15%, #000000 85%)` | Content locked to a higher plan |
| Overlay | `rgba(0,0,0,0.5)` | Modal scrim |

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Live | `#EE0000` | LIVE badge |
| Error | `#EA103C` (text on dark `#F24467`) | Errors |
| Success | `#03782C` (text on dark `#1EB452`) | Confirmation |
| Inform | `#643CDF` | Info banners |
| Link | `#069DE0` (hover `#07B3FF`) | Links on dark; `#016089` on light |
| Focus | `#FFFFFF` on dark, `#069DE0` on light | Keyboard focus ring |

### Light pages

Account, plan picker and checkout use `#F4F4F4` page background, `#FFFFFF` cards, `#000000` text, `#494B4E` secondary text and `#D1D2D3` dividers. The gold gradient still marks the primary action.

## 3. Typography

- **Peacock Sans** is the proprietary family, served as `peacocksans` in Book, Medium and Bold (`peacocksans-book.woff2`, `-medium`, `-bold`). It is not available for outside use.
- Stack: `peacocksans, Helvetica, Arial, sans-serif`.
- Fallback: **Figtree** (Google Fonts) has similar round, open forms. Inter is a second choice.
- The toolkit maps body text to the Book weight (CSS weight 100 in their tokens, which loads Book) and headings to Bold.

### Scale

From the toolkit's `--tk-text-*` tokens:

| Role | Size / line height | Weight | Use |
| --- | --- | --- | --- |
| Hero | 40/48 | 700 | "Hit Movies, Must-See TV, and Live Sports" |
| Section title | 32/40 | 700 | "Pick a Plan. Cancel Anytime." |
| Title | 28/36 or 24/32 | 700 | Plan names, rail titles on desktop |
| Card title | 18-20/24 | 700 | Show titles, FAQ questions |
| Body | 16/24 | 400 (Book) | Descriptions, FAQ answers |
| Small | 14/20 | 400 | Metadata, schedule times |
| Button | 14-16 | 700 | Uppercase, `0.08em` tracking |
| Badge | 10-12/16 | 700 | "LIVE", "MOST POPULAR", "NEW EPISODE" |

### Rules

- Buttons, badges and small card labels are uppercase (`--text-transform-card-title: uppercase`), tracked about `0.08em`.
- Headlines use title case with punctuation: "Pick a Plan. Cancel Anytime."
- Times use the short US form: "November 18th, 12AM".
- Do not set the wordmark in Peacock Sans; it is a drawn logo.

## 4. Logo & Brand Mark

- **Wordmark:** lowercase "peacock", white on black (or black on white), followed by a vertical stack of five gradient dots the same height as the letters including the descender of the "p". This file's `logo.svg` is the white-on-black version from peacocktv.com.
- **Icon:** the "p" from the wordmark with the five-dot stack to its right, white on a dark charcoal tile (`#262626` to `#131313` gradient). This is the iOS app icon.
- **Colour versions:** white wordmark with gradient dots (primary, on black), black wordmark with gradient dots (on white or light photography). The dots keep their colours in both.
- **Clear space:** at least one dot diameter on all sides.
- **Minimum size:** about 80px wide for the full wordmark; use the "p" icon below that.
- **NBC relationship:** the dots echo the NBC peacock's six feathers. In co-branded lockups ("NBC | Peacock") a thin vertical rule separates the two marks.

Misuse: do not recolour the dots to one colour, change their number or spacing, capitalise the wordmark, put the white wordmark on light backgrounds, or add shadows.

## 5. Components

### Buttons

Values from the toolkit and the live page's styled components.

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; padding: 0 32px;
  font: 700 14px/1 peacocksans, "Figtree", Helvetica, Arial, sans-serif;
  text-transform: uppercase; letter-spacing: 0.08em;
  border: 0; border-radius: 100px;
  transition: all 300ms;
}
.btn-primary {
  background: linear-gradient(180deg, #FFE000 0%, #FCCC12 50%, #FFA800 100%);
  color: #000000;
}
.btn-primary:hover { filter: brightness(1.06); transform: scale(1.02); }
.btn-primary:active { background: linear-gradient(45deg, #A4A5A7 0%, #FFFFFF 100%); }
.btn-primary:disabled { background: rgba(29,30,32,0.5); color: rgba(255,255,255,0.16); }

.btn-secondary { background: rgba(50,53,56,0.64); color: rgba(255,255,255,0.8); }
.btn-secondary:hover { background: rgba(73,75,78,0.5); color: #FFFFFF; }

.btn-tertiary { background: transparent; color: rgba(255,255,255,0.6); padding: 0; }
.btn-tertiary:hover { color: #FFFFFF; }

.btn-locked {
  background: linear-gradient(204deg, #1D1E20 15%, #000000 85%);
  color: #FCCC12;
}
```

The header "SIGN IN" is a text link in white; "GET STARTED" is the gold pill. On the detail page, "WATCH NOW" or a play icon button uses gold, and "+ MY STUFF" uses the translucent secondary.

### Hero billboard

- Full-width key art (16:9 desktop, taller crop on phones) with a left and bottom black gradient.
- Title logo art lower-left, a one-line hook ("New Episodes Thursdays", "Live Now"), rating and genre in `#A4A5A7`, then gold "WATCH NOW" and a secondary "MORE INFO".
- Carousel indicators are small dots; the active one is white.
- On TV devices, the billboard autoplays a muted trailer after a short delay.

### Rails and tiles

- Horizontal rails titled in 18-24px Bold: "Continue Watching", "Trending Now", "Live & Upcoming", "New and Buzzworthy Series", "New Movies From Universal & More".
- Landscape tiles are 16:9 with 4-8px radius; portrait posters 2:3 for movie rails.
- Continue Watching shows a 4px progress bar along the tile bottom: gold `#FCCC12` on `rgba(255,255,255,0.3)`.
- Focus or hover scales the tile to about 105% (`--tw-scale-x: 105%`) and adds a white 2-3px outline on TV.
- Sport tiles carry the league name in small caps above the matchup ("NBA", "Magic vs. Celtics") and the start time below.

### Badges

```css
.badge-live { background: #EE0000; color: #FFFFFF; font: 700 10px/16px peacocksans, "Figtree", sans-serif; text-transform: uppercase; letter-spacing: 0.08em; padding: 0 6px; border-radius: 4px; }
.badge-popular { background: linear-gradient(180deg, #FFE000, #FCCC12 50%, #FFA800); color: #000000; border-radius: 100px; padding: 2px 10px; font-weight: 700; font-size: 12px; text-transform: uppercase; }
.badge-tier { border: 1px solid rgba(0,0,0,0.16); border-radius: 4px; padding: 0 6px; font-size: 10px; }
```

"NEW EPISODE", "PEACOCK ORIGINAL" and "PREMIUM" labels appear on tiles as small uppercase text over a dark gradient.

### Navigation

- Signed-out header: wordmark left, "SIGN IN" text link and gold "GET STARTED" pill right, transparent over the hero.
- Signed-in header (web): wordmark left, then "Home", "Sports", "Channels", "TV", "Movies", "News", "My Stuff" in 14-16px; current item white with a gold underline, others `#A4A5A7`. Right: search, profile avatar.
- TV apps use a left vertical menu that expands on focus, with the same items and the gold indicator.

### Plan picker (paywall)

Read on the live page today (2026-11-16): three plans, "Select", "Premium" (tagged "MOST POPULAR") and "Premium Plus", with Monthly and Annual toggles, and a separate "Bundles" tab.

```css
.plan-card {
  background: #F4F4F4; color: #000000;
  border: 3px solid transparent; border-radius: 16px;
  padding: 24px; margin-top: 16px;
}
.plan-card:hover, .plan-card:focus-within {
  background: linear-gradient(#F4F4F4, #F4F4F4) padding-box,
              linear-gradient(180deg, #FFE000 0%, #FCCC12 50%, #FFA800 100%) border-box;
}
.plan-name { font: 700 28px/36px peacocksans, "Figtree", sans-serif; }
.plan-feature { font: 400 14px/20px peacocksans, "Figtree", sans-serif; color: #494B4E; }
```

The selected plan gets the gold gradient border. Each card lists features with check marks, a price line, a fine-print footnote, and a gold pill CTA. A segmented toggle (Plans / Bundles, Monthly / Annual) sits above, `#E7E7E7` track with a white selected thumb.

### Profile picker

"Who's Watching?" on black: circular avatars (show-themed illustrations) about 120px on desktop, names in 16px white below, an "Add Profile" circle with a plus. Focus adds a white ring and scales the avatar.

### Player

- Black background. Controls fade in on movement: top-left back arrow and title, bottom scrubber with white played track and a gold `#FCCC12` thumb or centre play button (the toolkit sets player buttons to `--color-content-brand-primary`).
- Centre play/pause 80px on large screens, 48px otherwise; 10-second skip buttons either side.
- Live streams show a red LIVE badge and a "Jump to Live" button; sports can show a key plays rail.
- "Skip Intro" and "Next Episode" as translucent pills lower-right.

### FAQ accordion

Rows on black with 1px `#323538` dividers, question in 18-20px Bold white, a chevron on the right that rotates 180deg when open, answer in 16px Book `#A4A5A7` with blue `#069DE0` links.

### Inputs

```css
.input {
  height: 48px; padding: 12px 16px;
  background: #FFFFFF; color: #000000;
  border: 1px solid #A4A5A7; border-radius: 4px;
  font: 400 16px/24px peacocksans, "Figtree", sans-serif;
}
.input:focus { outline: 2px solid #069DE0; outline-offset: 1px; }
.input.is-error { border-color: #EA103C; }
```

Sign-up and checkout run on light pages; inputs are white with grey borders and the blue focus ring.

## 6. Layout & Spacing

- **Grid:** 4px base (`--tk-spacing: 4px`). Common steps: 8, 12, 16, 24, 32, 48, 64.
- **Max width:** marketing content centres at about 1200-1440px; rails bleed to the right edge.
- **Gutters:** 16px on phones, 24-32px on tablets, about 48-64px on desktop.
- **Breakpoints:** 768px and 1025px in the live styles, with a wider step at 1200px.
- **Rails:** 8-12px between tiles, 32-48px between rails.
- **Plan cards:** stack on mobile, three across at 1025px and up with 16px gaps.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation comes from surface steps (`#000000` to `#1D1E20` to `#323538`) and gradients over art.
- **Shadows:** only on floating cards (`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`) and the player play button (`0 0 20px rgba(0,0,0,0.1)`).
- **Blur:** 24px backdrop blur on overlays and the scrolled header.
- **Durations:** 150ms default, 200-300ms for button and tile scale, 2s fade-in for tile artwork on load.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (`--tk-ease-in-out`).
- **Gold border focus:** focus and selection animate the gradient border in, not a glow.

## 8. Iconography & Imagery

- **Icons:** rounded, filled glyphs in the Material Icons Round family (loaded by the toolkit) plus custom player icons. White on dark, `#646669` when inactive.
- **Artwork:** show and film key art with title logos; sports use league art, team logos and athlete cut-outs on dark backgrounds.
- **Feature tiles** on the signed-out page ("Peacock Channels", "Mini-Games", "Microdramas") use bright gradients drawn from the dot colours behind product screenshots.
- Avoid stock photos; use the content.

## 9. Voice & Microcopy

Casual, upbeat, a bit cheeky. Sentence fragments are fine. Short on jargon.

- Hero: "Hit Movies, Must-See TV, and Live Sports"
- Plan header: "Pick a Plan. Cancel Anytime."
- Plan summaries: "Watch TV, with ads." / "Watch TV, movies, sports & more, with ads."
- Features: "Scroll Less, Watch More", "Stay Connected and Entertained"
- FAQ: "Questions? We've Got You Covered", "What devices does Peacock support? Lots!"
- Buttons: "GET STARTED", "SIGN IN", "WATCH NOW", "BUY NOW", "Get Peacock", "Get Bundle"
- Rails: "Nonstop Live Sports and Events", "New and Buzzworthy Series"
- Always lowercase "peacock" in the logo; "Peacock" with a capital in running text.

## 10. Do's and Don'ts

**Do**

- Keep backgrounds black and charcoal, text white and `#A4A5A7`.
- Use the yellow-to-amber gradient for the primary action and selected states only.
- Make buttons uppercase pills with bold tracked labels.
- Keep the dot colours inside the logo, icon and occasional feature art.
- Mark live content with the red LIVE badge and a start time.
- Use `#F4F4F4` light cards with 16px radius for plan selection.

**Don't**

- Don't use the gold gradient for large backgrounds or body text.
- Don't use the six 2020 dot colours as UI accents next to the 2026 gradient logo.
- Don't capitalise the wordmark or set it in type.
- Don't use square buttons for primary actions.
- Don't add drop shadows to tiles on black; use surface steps.
- Don't put blue links on the gold button or gold text on white.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Peacock. Background `#000000`, surfaces `#1D1E20` and `#323538`, white text, secondary text `#A4A5A7`. Use Peacock Sans with Figtree as the fallback: hero 40px Bold, section titles 32px Bold, body 16px regular with 24px line height. Primary buttons are 48px-tall uppercase pills (100px radius, 700 weight, 0.08em tracking) filled with `linear-gradient(180deg, #FFE000 0%, #FCCC12 50%, #FFA800 100%)` and black text; secondary buttons are `rgba(50,53,56,0.64)` with white text. Lay out a full-bleed hero with left and bottom black gradients, then horizontal rails of 16:9 tiles (4-8px radius, 105% scale on hover, gold progress bar on Continue Watching). Live items get a red `#EE0000` uppercase LIVE badge. Plan selection uses `#F4F4F4` cards with 16px radius and a gold gradient border when selected. Keep the multi-colour dot gradient (yellow, orange, magenta, violet, cyan, green) to the logo only.

```css
:root {
  --brand-black: #000000;
  --brand-surface: #1D1E20;
  --brand-surface-raised: #323538;
  --brand-surface-strong: #494B4E;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #A4A5A7;
  --brand-icon: #646669;
  --brand-gold: #FCCC12;
  --brand-gradient: linear-gradient(180deg, #FFE000 0%, #FCCC12 50%, #FFA800 100%);
  --brand-on-gold: #000000;
  --brand-secondary-button: rgba(50, 53, 56, 0.64);
  --brand-selected-border: rgba(255, 255, 255, 0.16);
  --brand-light-bg: #F4F4F4;
  --brand-link: #069DE0;
  --brand-live: #EE0000;
  --brand-error: #EA103C;
  --brand-success: #03782C;
  --brand-inform: #643CDF;
  --brand-dots: linear-gradient(180deg, #FFDC23 0%, #FF8700 16%, #FF5401 21%, #D9005A 37%, #C814C8 42%, #8250FF 58%, #6E64FF 63%, #00C8FF 79%, #00CC99 84%, #00A637 99%);
  --brand-font: peacocksans, "Figtree", Helvetica, Arial, sans-serif;
  --brand-radius-tile: 8px;
  --brand-radius-card: 16px;
  --brand-radius-pill: 100px;
  --brand-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --brand-duration: 150ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Peacock or NBCUniversal.
