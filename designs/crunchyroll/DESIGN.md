---
name: Crunchyroll
slug: crunchyroll
url: https://www.crunchyroll.com
category: Streaming
tagline: "Anime on black: a bold orange eye, square buttons, and poster walls built for fans."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Crunchyroll Orange
    hex: "#FF5E00"
    role: Logo, app icon, primary buttons, active states (2024 identity)
  - name: Black
    hex: "#000000"
    role: Page and player background, logo background
  - name: White
    hex: "#FFFFFF"
    role: Primary text, icon symbol
  - name: Taupe
    hex: "#C9BFB3"
    role: Secondary brand neutral in marketing (approximate)
  - name: Premium Yellow
    hex: "#FAB818"
    role: Premium crown and "Try Free Premium" accents (approximate)
  - name: Legacy Orange
    hex: "#F47521"
    role: Pre-2024 brand orange, still found in older UI
  - name: Header Grey
    hex: "#23252B"
    role: Top bar, menus, raised surfaces (approximate)
  - name: Card Hover
    hex: "#141519"
    role: Card hover and secondary panels (approximate)
  - name: Surface
    hex: "#2B2D32"
    role: Inputs, chips, dividers (approximate)
  - name: Text Secondary
    hex: "#A0A0A0"
    role: Metadata and secondary text (approximate)
  - name: Text Soft
    hex: "#DADADA"
    role: Body copy on black (approximate)
  - name: Orange Hover
    hex: "#FF7A2E"
    role: Primary button hover (approximate)
  - name: Error
    hex: "#EF4444"
    role: Error text and borders (approximate)
  - name: Success
    hex: "#2ABDBB"
    role: Confirmation states (approximate)
fonts:
  display:
    family: "Crunchyroll Atyp"
    fallback: "Lato"
    weights: [700, 800]
  body:
    family: "Lato"
    fallback: "Lato"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero Title, size: 40, weight: 800, lineHeight: 1.1, tracking: "0" }
  - { role: Page Title, size: 28, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Row Title, size: 20, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Card Title, size: 16, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Meta, size: 14, weight: 500, lineHeight: 1.4, tracking: "0" }
  - { role: Button, size: 14, weight: 900, lineHeight: 1, tracking: "0.05em" }
  - { role: Tag, size: 12, weight: 600, lineHeight: 1.2, tracking: "0.03em" }
radii: { sm: 0, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 60]
shadows:
  - { name: Menu, value: "0 8px 24px rgba(0,0,0,0.6)" }
  - { name: Text On Art, value: "0 1px 4px rgba(0,0,0,0.6)" }
preview:
  bg: "#000000"
  surface: "#23252B"
  text: "#FFFFFF"
  muted: "#A0A0A0"
  border: "#2B2D32"
  accent: "#FF5E00"
  accentText: "#000000"
  radius: 0
  buttonStyle: solid
---

# Crunchyroll

## 1. Visual Theme & Atmosphere

Crunchyroll is Sony's anime streaming service, carrying simulcasts that air in Japan the same week, a large back catalogue, and dubs. The interface is black with tall portrait anime key art, white type, and one orange used for the logo and the main action. It reads as a fan's library: big poster grids, season and episode numbers everywhere, and a "Simulcast Season" calendar.

In July 2024, timed to San Diego Comic-Con, Crunchyroll rolled out a new identity. Press coverage describes a rebalanced eye symbol, a redrawn wordmark, a custom typeface called Crunchyroll Atyp, a palette of orange, black, white and taupe, a system of more than 139 anime and manga-inspired glyphs, and a seven-second audio and visual mnemonic. The new orange is `#FF5E00` (from the 2024 logo files and the current iOS app icon); the old `#F47521` still appears in older pages and third-party material.

What makes it recognisable:

- **Black plus orange.** `#000000` everywhere, a few dark greys for raised surfaces, white text, orange for the logo, the primary button, progress bars and the active tab.
- **Portrait posters.** Series cards are tall 2:3 key art; episode cards are 16:9 thumbnails. Hover reveals a dark overlay with synopsis and actions.
- **Square, uppercase buttons.** Primary actions are flat orange rectangles with black uppercase heavy labels: "START WATCHING S1 E1", "TRY FREE PREMIUM".
- **The eye.** The symbol (a circle with a crescent swoosh and a small "pupil" cut-out) sits on the app icon in white on orange.
- **Fan metadata.** Sub/Dub labels, season selectors, episode numbers ("S2 E7"), star ratings and audio language lists are everywhere.

Density: medium to high. More text than a general streamer, because fans browse by season, episode and language.

Note: crunchyroll.com refuses automated fetches, so the UI values in this file come from the logo files, the App Store icon, published press on the 2024 rebrand, and observation of earlier versions of the web app. Values marked approximate should be checked against the live site.

## 2. Color Palette & Roles

### Brand

| Name | Hex | Role |
| --- | --- | --- |
| Crunchyroll Orange | `#FF5E00` | 2024 brand orange: logo, icon, primary buttons, active states |
| Legacy Orange | `#F47521` | Pre-2024 orange (Simple Icons still lists it); do not use for new work |
| Black | `#000000` | Page, player, logo background |
| White | `#FFFFFF` | Text, symbol on orange |
| Taupe | `#C9BFB3` (approximate) | Warm neutral named in the 2024 palette; marketing backgrounds and merch |

### Neutrals (approximate)

| Name | Hex | Role |
| --- | --- | --- |
| Header Grey | `#23252B` | Top bar, dropdown menus, modal body |
| Card Hover | `#141519` | Hovered card background, secondary panels |
| Surface | `#2B2D32` | Inputs, chips, dividers |
| Divider | `#3A3C41` | Hairlines between list rows |
| Text Soft | `#DADADA` | Body copy |
| Text Secondary | `#A0A0A0` | Metadata, timestamps, "Sub | Dub" |
| Text Disabled | `#59595B` | Disabled controls |

### Accents and states (approximate)

| Name | Hex | Use |
| --- | --- | --- |
| Orange Hover | `#FF7A2E` | Primary hover (lighter orange) |
| Orange Pressed | `#E05200` | Primary pressed |
| Premium Yellow | `#FAB818` | Crown icon, "Premium" labels, upsell banners |
| Error | `#EF4444` | Form errors |
| Success | `#2ABDBB` | Confirmations, "Added to Watchlist" toast |

### Mode

Dark only in the product. Help centre and legal pages are light (white background, near-black text, orange links).

## 3. Typography

- **Crunchyroll Atyp** is the custom typeface introduced in 2024, built on Atyp from Suitcase Type Foundry. It is used for headlines, campaign art and the brand, and is not available for outside use.
- **Lato** has long been the product UI face on the web app and is the safest fallback (Google Fonts). If you want the display tone of Atyp without the licence, **Familjen Grotesk** or **Inter** at heavy weights are close enough for headlines.
- Japanese titles and katakana in artwork are part of the key art, not live text.

### Scale (approximate, web)

| Role | Size | Weight | Line height | Use |
| --- | --- | --- | --- | --- |
| Hero title | 34-40px | 800 | 1.1 | Hero carousel series name when no logo art |
| Page title | 28px | 700 | 1.2 | "New", "Popular", "Simulcast Season" |
| Row title | 20px | 700 | 1.3 | "Continue Watching", "Top Picks for You" |
| Card title | 14-16px | 600 | 1.3 | Series name under posters, 2-line clamp |
| Body | 14-16px | 500 | 1.5 | Synopsis |
| Meta | 12-14px | 500 | 1.4 | "Sub | Dub", "S1 E3 - 24m", ratings |
| Button | 14px | 900 | 1 | Uppercase, `0.05em` tracking |
| Tag | 12px | 600 | 1.2 | Genre chips, "NEW", "DUB" |

### Rules

- Buttons uppercase; everything else sentence or title case.
- Episode labels: "S1 E3" or "E3 - Title of Episode". Durations: "24m".
- Clamp series titles to 2 lines and synopses to 3-4 lines with "More Details".
- Do not stretch or italicise Atyp; it has its own quirks built in.

## 4. Logo & Brand Mark

- **Symbol:** a bold ring that opens into a crescent on the left, with a smaller circle (the pupil) cut into the upper right. In 2024 it was rebalanced so the parts read evenly at small sizes.
- **Wordmark:** "Crunchyroll" in a rounded heavy sans, title case, next to the symbol (horizontal) or below it (stacked). This file's `logo.svg` is the horizontal orange version.
- **App icon:** white symbol on solid `#FF5E00`, centred, filling about 60-65% of the tile.
- **Colour versions:** orange on black (product), orange on white, white on orange (icon, social), black on orange for merch.
- **Clear space:** the diameter of the pupil circle around the lockup.
- **Minimum size:** horizontal lockup about 100px wide; symbol alone 16px.

Misuse: do not use the pre-2024 orange `#F47521` with the new symbol, rotate the eye, separate the pupil, add outlines, or set the wordmark in Lato.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 0 16px;
  font: 900 14px/1 "Lato", "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase; letter-spacing: 0.05em;
  border: 2px solid transparent; border-radius: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.btn-primary { background: #FF5E00; color: #000000; }
.btn-primary:hover { background: #FF7A2E; }
.btn-primary:active { background: #E05200; }
.btn-primary:disabled { background: #59595B; color: #A0A0A0; }

.btn-outline { background: transparent; border-color: #FF5E00; color: #FF5E00; }
.btn-outline:hover { background: rgba(255,94,0,0.1); color: #FF7A2E; border-color: #FF7A2E; }

.btn-ghost { background: transparent; color: #A0A0A0; }
.btn-ghost:hover { color: #FFFFFF; }

.btn-premium { background: #FAB818; color: #000000; }
```

- Primary action on a series page: "START WATCHING S1 E1" or "CONTINUE WATCHING S1 E5" with a play icon.
- Icon actions next to it (bookmark for Watchlist, plus for Crunchylist, share, ellipsis) are 40px square ghost or outline buttons with orange icons.
- Sizes: 40px default, 32px compact, 48px on hero and paywall.

### Hero carousel

- Full-width key art (wide crop on desktop, portrait on phones), series logo art left, a short synopsis, "Sub | Dub" and rating, then the orange primary button and a bookmark outline button.
- Left-to-right black gradient so text stays readable.
- Progress indicators are short horizontal bars at the bottom; the active one fills orange over the dwell time.

### Series cards (posters)

```css
.series-card { width: 100%; position: relative; }
.series-card img { aspect-ratio: 2 / 3; width: 100%; object-fit: cover; border-radius: 0; }
.series-card .title { font: 600 16px/1.3 "Lato", sans-serif; color: #FFFFFF; margin-top: 8px; }
.series-card .meta { font: 500 14px/1.4 "Lato", sans-serif; color: #A0A0A0; }
.series-card .overlay {
  position: absolute; inset: 0; background: rgba(20,21,25,0.95);
  padding: 16px; opacity: 0; transition: opacity 0.2s ease;
}
.series-card:hover .overlay { opacity: 1; }
```

The hover overlay shows the title, rating stars, season and episode count, a 4-line synopsis, and small play / bookmark / plus icons in orange.

### Episode cards

16:9 thumbnail with the duration in a black label bottom-right ("24m"), an orange progress bar along the bottom edge (4px, `#FF5E00` on `rgba(255,255,255,0.2)`), series name in 12px `#A0A0A0`, episode title "S1 E3 - The Fake Hero" in 14-16px 600 white. Premium-only episodes show a small yellow crown.

### Rows and grids

- Home rows: "Continue Watching", "Top Picks for You", "Because You Watched", "New Episodes", "Most Popular". Arrows appear at row ends on hover.
- Browse and Simulcast pages use a responsive grid of posters with filters (genre chips, "Sub | Dub", sort by Popularity / Newest / Alphabetical).
- The Simulcast calendar lists days as tabs and episodes as rows with time, poster, title and "Sub" / "Dub" labels.

### Badges and chips

- Language: "Sub | Dub", plain text `#A0A0A0` separated by a vertical bar.
- Genre chips: `#2B2D32` fill, white 12px 600 text, 4px radius, 4px 12px padding; selected chips orange fill with black text.
- "NEW", "DUBBED": small uppercase labels over art, orange or white on black.
- Premium crown: `#FAB818` glyph on episode cards and the upsell button.

### Navigation

- Header bar 60px tall, `#23252B` (or black over a hero), logo left, then "Browse" (dropdown with Popular, New, Alphabetical, Simulcast Season, Release Calendar, Music Videos & Concerts), "Manga", "Games", "Store", "News". Right: "TRY FREE PREMIUM" yellow link with crown, search, bookmark (Watchlist), profile avatar.
- Active item has an orange underline or orange text.
- Mobile apps use a bottom tab bar (Home, My Lists, Browse, Simulcasts, Account) with the active tab in orange.

### Detail (series) page

Wide hero art, series logo, metadata (rating, "Sub | Dub", genre chips, content advisory), synopsis with "More Details", orange "START WATCHING" button plus Watchlist and Crunchylist buttons, then a season dropdown and the episode list, followed by "More Like This". Ratings use 5 stars in orange with the average and count.

### Profile picker

"Who's Watching?" on black: circular avatars (anime character art), name below in 16px white, an "Add Profile" circle. Focus or hover adds an orange 3px ring.

### Paywall and plan page

- Premium tiers are shown as 3 dark cards side by side on black, the recommended one with an orange top border or "MOST POPULAR" orange label. Tier names and features (ad-free, offline viewing, number of streams) in white with orange check icons.
- CTA per card: orange uppercase "START FREE TRIAL" or "SELECT PLAN".
- Prices and tier names vary by country and change over time; read them from the live page.

### Player

- Black background, controls in a bottom gradient: orange played track on a grey rail, white thumb, time codes.
- Buttons: play/pause, skip back and forward, volume, "Skip Intro" (outline white, lower-right), next episode, settings (quality, audio language, subtitles), full screen.
- Up Next card in the last seconds: 16:9 thumbnail with an orange countdown ring.

### Inputs

```css
.input {
  height: 48px; padding: 12px 0;
  background: transparent; color: #FFFFFF;
  border: 0; border-bottom: 2px solid #59595B; border-radius: 0;
  font: 500 16px/1.5 "Lato", sans-serif;
}
.input:focus { border-bottom-color: #FF5E00; outline: none; }
.input.is-error { border-bottom-color: #EF4444; }
.label { font: 700 12px/1.2 "Lato", sans-serif; text-transform: uppercase; letter-spacing: 0.05em; color: #A0A0A0; }
```

## 6. Layout & Spacing

- **Max width:** content centres at about 1350px on wide screens, with full-bleed hero art.
- **Gutters:** 20px on phones, 40px on tablets, 60px on desktop (approximate).
- **Grids:** poster grids run 2 columns on phones, 4 at about 800px, 5-6 at 1050px and up, with 20-30px gaps.
- **Rows:** 8-16px between cards, 40-60px between rows.
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 60.

## 7. Depth, Elevation & Motion

- Flat. Depth comes from the step from `#000000` to `#141519` and `#23252B`, and from black gradients over art.
- **Shadows:** dropdown menus and modals about `0 8px 24px rgba(0,0,0,0.6)`; text over art `0 1px 4px rgba(0,0,0,0.6)`.
- **Radii:** 0 on buttons and posters, 4px on chips and small labels, circles for avatars.
- **Motion:** 0.2s ease for hover colour and overlays, 0.3s for carousel slides. The 2024 identity adds a seven-second animated logo sting used before content and in ads; keep UI motion short and plain next to it.

## 8. Iconography & Imagery

- **Icons:** simple, solid or 2px-stroke glyphs at 24px: play, bookmark, plus, share, crown, search, bell, ellipsis. White by default, orange for active or primary.
- **Artwork:** official Japanese key art and character art. Keep it uncropped through faces and logos. Portrait for series, 16:9 for episodes.
- **2024 brand glyphs:** a set of over 139 anime and manga-inspired symbols (speed lines, sweat drops, emotes) and textures made with Japanese artists. Use them in marketing and empty states, not inside dense UI.
- Mascot: Hime, the Crunchyroll character, appears in error pages and campaigns.

## 9. Voice & Microcopy

Fan-to-fan, playful, confident about anime. Uses anime terms without explaining them (simulcast, sub, dub, isekai).

- Buttons: "START WATCHING S1 E1", "CONTINUE WATCHING", "TRY FREE PREMIUM", "ADD TO WATCHLIST", "SKIP INTRO"
- Rows: "Continue Watching", "Top Picks for You", "Because You Watched Frieren", "New Episodes"
- Pages: "Simulcast Season", "Release Calendar", "Crunchylists"
- Labels: "Sub | Dub", "S1 E3 - 24m", "Premium"
- Empty state: "Your Watchlist is empty. Start adding shows you want to watch."
- Keep "Crunchyroll" as one word with a capital C. "Crunchylist" is a product name.

## 10. Do's and Don'ts

**Do**

- Use `#FF5E00` for the logo, primary buttons, progress and active states.
- Keep the page black and the art large.
- Use square-cornered, uppercase, heavy buttons with black text on orange.
- Show sub/dub, season and episode numbers clearly.
- Use portrait posters for series and 16:9 for episodes.
- Mark premium content with the yellow crown.

**Don't**

- Don't mix the legacy `#F47521` with the 2024 orange.
- Don't round buttons or posters.
- Don't use orange for body text or large fills behind content.
- Don't crop key art through faces or the series logo.
- Don't use the brand glyphs as UI icons.
- Don't add light-mode surfaces to the watching experience.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Crunchyroll. Background `#000000`, header and menus `#23252B`, hover panels `#141519`, white titles, body `#DADADA`, metadata `#A0A0A0`. Brand colour is Crunchyroll Orange `#FF5E00` (hover `#FF7A2E`, pressed `#E05200`) for the primary button, progress bars and active tabs. Use Lato for UI text (Crunchyroll Atyp for headlines if available, else heavy Inter): row titles 20px 700, card titles 16px 600, meta 14px 500. Buttons are square (0 radius), 40px tall, uppercase, 900 weight, 0.05em tracking, black text on orange; secondary buttons are orange outlines. Lay out a full-bleed hero with a left black gradient, then rows of 2:3 series posters with square corners and a dark `rgba(20,21,25,0.95)` hover overlay showing synopsis and actions, and 16:9 episode cards with an orange progress bar and a "24m" duration label. Show "Sub | Dub" and "S1 E3" labels. Mark premium items with a `#FAB818` crown. No rounded corners except chips (4px) and avatars.

```css
:root {
  --brand-orange: #FF5E00;
  --brand-orange-hover: #FF7A2E;
  --brand-orange-pressed: #E05200;
  --brand-orange-legacy: #F47521;
  --brand-black: #000000;
  --brand-header: #23252B;
  --brand-panel: #141519;
  --brand-surface: #2B2D32;
  --brand-divider: #3A3C41;
  --brand-text: #FFFFFF;
  --brand-text-soft: #DADADA;
  --brand-text-secondary: #A0A0A0;
  --brand-text-disabled: #59595B;
  --brand-taupe: #C9BFB3;
  --brand-premium: #FAB818;
  --brand-error: #EF4444;
  --brand-success: #2ABDBB;
  --brand-font-display: "Crunchyroll Atyp", "Inter", "Lato", sans-serif;
  --brand-font: "Lato", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0;
  --brand-radius-chip: 4px;
  --brand-duration: 0.2s;
  --brand-ease: ease;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Crunchyroll.
