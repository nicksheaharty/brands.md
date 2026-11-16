---
name: NPR
slug: npr
url: https://npr.org
category: News
tagline: "Red, black and blue NPR blocks, clean white story lists and audio-first play buttons."
updated: 2026-11-16
appStoreId: 324906251
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: NPR Red
    hex: "#D62021"
    role: Logo "n" block, donate button, live audio accents
  - name: Black
    hex: "#000000"
    role: Logo "p" block, header elements, icons
  - name: NPR Blue
    hex: "#237BBD"
    role: Logo "r" block
  - name: Link Blue
    hex: "#0A61DB"
    role: Links and primary interactive text (blue 500)
  - name: Ink
    hex: "#212121"
    role: Headlines and body text (gray 800)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Gray 600
    hex: "#575757"
    role: Slugs, secondary text
  - name: Gray 500
    hex: "#737373"
    role: Captions, timestamps, tertiary text
  - name: Gray 100
    hex: "#D4D4D4"
    role: Rules, borders, tertiary surfaces
  - name: Gray 50
    hex: "#F2F2F2"
    role: Secondary surfaces, story tags
  - name: Red 500
    hex: "#D52020"
    role: Donate button fill
  - name: Blue 700
    hex: "#07459C"
    role: Attention labels, link hover
  - name: Red 700
    hex: "#971717"
    role: Priority attention label (breaking)
  - name: Gray 900
    hex: "#121212"
    role: Shadows, darkest text, dark mode base
fonts:
  display:
    family: "NPR Sans"
    fallback: "Inter"
    weights: [400, 500, 700]
  body:
    family: "NPR Serif"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 36, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Lead story title, size: 24, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Story title, size: 18, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Article body, size: 17, weight: 400, lineHeight: 1.5, tracking: "0.02em" }
  - { role: Teaser, size: 15, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Slug, size: 14, weight: 500, lineHeight: 1.4, tracking: "0.06em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.5, tracking: "0.02em" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 10, 15, 20, 30, 40, 60]
shadows:
  - { name: Container, value: "0 0 2px 0 rgba(18,18,18,0.2)" }
  - { name: Raised, value: "0 2px 4px 0 rgba(18,18,18,0.2)" }
  - { name: Soft, value: "0 8px 13px -4px rgba(18,18,18,0.05)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#212121"
  muted: "#737373"
  border: "#D4D4D4"
  accent: "#D62021"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# NPR

## 1. Visual Theme & Atmosphere

npr.org is a white, text-forward news site built around audio. The three-block logo (red "n", black "p", blue "r") is the only strong colour in the header. Below it, stories run in clean lists: a small uppercase slug, a bold sans headline, a short serif teaser and, on most items, a play button for the broadcast segment. A persistent player and the "Listen" controls make the site feel like a companion to the radio.

What makes it recognisable:

- **The NPR blocks.** Three equal squares in red, black and blue with lowercase white letters.
- **Bold sans headlines, serif reading text.** NPR Sans 700 for titles and UI, NPR Serif 400 for article body and some teasers.
- **Uppercase slugs.** Small 14px NPR Sans 500 labels with wide tracking ("POLITICS", "MUSIC REVIEWS") sit above headlines.
- **Audio everywhere.** Circular play buttons, "Listen · 3:52" durations, a sticky player bar and links to shows (Morning Edition, All Things Considered).
- **Quiet chrome.** White background, gray rules, small radii, very soft shadows.

Mood words: public radio, friendly, trustworthy, plain-spoken, calm.

## 2. Color Palette & Roles

Ramps and semantic tokens below were read from npr.org's CSS on 2026-11-16. The logo colours come from the inline SVG logo.

| Name | Hex | Role |
|---|---|---|
| NPR Red | `#D62021` | Logo "n" block |
| Black | `#000000` | Logo "p" block, icons |
| NPR Blue | `#237BBD` | Logo "r" block |
| Link Blue (blue 500) | `#0A61DB` | `--color-primary`: links and interactive text |
| Blue 400 | `#4489E4` | `--color-secondary`, hover on dark |
| Blue 700 | `#07459C` | Attention labels, pressed link |
| Red 500 | `#D52020` | `--bg-red`: donate button |
| Red 700 | `#971717` | Priority attention label |
| Gray 900 | `#121212` | Shadow base, darkest text |
| Gray 800 (Ink) | `#212121` | `--fg-primary`: headlines and body |
| Gray 600 | `#575757` | `--fg-secondary`: slugs, secondary text |
| Gray 500 | `#737373` | `--fg-tertiary`: captions, timestamps |
| Gray 100 | `#D4D4D4` | `--bg-tertiary`: rules and borders |
| Gray 50 | `#F2F2F2` | `--bg-secondary`: panels, story tags |
| White | `#FFFFFF` | `--bg-primary`: page |

The full ramps (50 to 900) exist for red, blue, green, teal, orange, tan, violet and magenta, used for podcast and music branding. Examples: green 500 `#118406`, teal 500 `#317D7D`, orange 500 `#EC7709`.

### Semantic colors

| State | Value | Use |
|---|---|---|
| Breaking / priority | white on `#971717` | Attention label above a lead story |
| Notice | white on `#07459C` | Non-urgent attention label |
| Error | `#971717` outline and text | Form validation |
| Success | `#118406` | Confirmation |
| Focus | 2px outline in `#0A61DB` (approximate) | Keyboard focus |

### Dark mode

The site ships a dark theme by swapping semantic tokens: `--bg-primary` becomes gray 800 `#212121`, `--bg-secondary` gray 700 `#333333`, `--fg-primary` gray 50 `#F2F2F2`, `--fg-secondary` gray 100, and `--color-primary` blue 200 `#82B5FC`. The logo keeps its three colours.

## 3. Typography

**Families:** NPR Sans and NPR Serif, custom faces loaded by npr.org as `NPRSans` and `NPRSerif`. Sans weights 400 and 500 (plus 700 via bold styles) with italics; Serif 400 and 700 with italics.

**Licensing:** proprietary to NPR. Substitutes: **Inter** (or Source Sans 3) for NPR Sans and **Source Serif 4** for NPR Serif.

```css
--font-sans: NPRSans, "Inter", Helvetica, Arial, sans-serif;
--font-serif: "NPRSerif", "Source Serif 4", Georgia, serif;
html { font-size: 62.5%; } /* 1rem = 10px across npr.org */
```

### Scale (desktop)

| Role | Family | Size / line | Weight | Tracking |
|---|---|---|---|---|
| Article headline | Sans | 36px / 1.15 (approximate) | 700 | 0 |
| Lead story title | Sans | 24px / 1.15 | 700 | 0 |
| Story title | Sans | 18-22px / 1.25 | 700 | 0 |
| Deck / teaser | Serif or Sans | 15-17px / 1.5 | 400 | 0 |
| Article body (`.storytext`) | Serif | 17px / 1.5 | 400 | 0.02em |
| Slug | Sans | 14px / 1.4, uppercase | 500 | 0.06em |
| Byline | Sans | 14px / 1.5 | 500 name, 400 role | 0.02em |
| Caption, credit | Sans | 12-14px / 1.5 | 400 | 0.02em |

Mobile: story titles stay 18px, lead titles drop to 22px, article headlines to about 28px.

### Rules

- Headlines in sentence case, no full stop.
- Slugs uppercase, gray 600, linked to the topic page.
- Program names in italics in body copy only when referring to the show by name in text (approximate).
- Durations shown as "3:52" next to the play button; dates as "November 16, 2026" or "5:00 AM ET".

## 4. Logo & Brand Mark

The NPR logo is three equal squares in a row with no gaps: red `#D62021` "n", black "p", blue `#237BBD` "r". The letters are custom lowercase forms in white. The current version dates from a 2011 refresh that simplified the earlier three-block mark.

- **Color versions:** full colour (default), all-black blocks with white letters, white outline version for dark photos.
- **Clear space:** half a block on every side.
- **Minimum size:** 60px wide on screen.
- **App icon:** the full-colour blocks centred on white.
- **Sub-brands:** "NPR Music", "NPR News Now" and show logos sit next to, not inside, the blocks.

Misuse:

- Do not reorder or recolour the blocks.
- Do not add gaps between blocks or round their corners.
- Do not set "npr" in a typeface.
- Do not stretch the mark into rectangles.

## 5. Components

### Header and navigation

- White header, about 60px, with the logo left, primary nav "News, Culture, Music, Podcasts & Shows, Search" in 14-16px NPR Sans 500 ink, and icon links.
- Right side: a red "Donate" button (`#D52020` fill, white text, radius 2-4px) and a "Sign In" link.
- A live audio strip ("Listen live: Your local station") with a play button and station name.
- Section pages add a sub-nav with topic links and a 1px `#D4D4D4` bottom rule.

### Story list item (signature)

- Optional image on the right (or above on mobile), 3:2 or 16:9, radius 0.
- Slug: 14px sans 500 uppercase `#575757`, 0.06em tracking.
- Title: 18-22px sans 700 `#212121`, hover underline.
- Teaser: 15-17px, `#575757`, with a dateline "November 16, 2026 •" prefix in bold (approximate).
- Audio row: a 30px circle play button and "Listen · 3:52" in 14px sans; a "Queue" plus icon.
- Items separated by 1px `#D4D4D4` rules and 20-30px vertical padding.

```css
.npr-item { border-top: 1px solid #D4D4D4; padding: 20px 0; }
.npr-item .slug { font: 500 14px/1.4 var(--font-sans); letter-spacing: .06em; text-transform: uppercase; color: #575757; }
.npr-item .title { font: 700 22px/1.25 var(--font-sans); color: #212121; margin: 6px 0; }
.npr-item .teaser { font: 400 16px/1.5 var(--font-serif); color: #575757; }
```

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Donate | `#D52020` | `#FFFFFF` 14px/700 | none | 2-4px | 8px 15px |
| Primary | `#0A61DB` | `#FFFFFF` | none | 4px | 10px 20px |
| Secondary | `#F2F2F2` | `#212121` | none | 4px | 10px 20px |
| Outline | transparent | `#212121` | 1px `#D4D4D4` | 4px | 10px 20px |
| Audio play | `#212121` or `#FFFFFF` circle | play glyph | 1px gray 100 | 50% | 30-60px square |

Hover: donate fill to red 300 `#E56666` on dark, red 600 `#C31D20` on light (approximate); links to blue 700. Opacity 0.6-0.7 is used for icon hover.

### Article page

- Slug and headline at the top, then a byline block: author photo (circle, 40px), name in 14px sans 500, title, and the date.
- Lead image full column width with caption below: 12-14px sans `#737373`, credit in uppercase gray.
- "Listen" bar under the headline: play button, duration, "Download", "Embed", "Transcript".
- Body: NPR Serif 17/1.5, column about 680px, links `#0A61DB` underlined.
- Pull quotes: 24px NPR Serif italic (approximate), ink, with a short rule above.
- Tags at the end: gray 50 pills with 12px sans uppercase text.

### Audio player (signature)

A sticky bar at the bottom: 60px tall, white with a top shadow `0 -2px 4px rgba(18,18,18,0.2)` (approximate). Play/pause 40px circle, title and show name in 14px sans, a thin progress bar in red or blue, and skip 15-second controls.

### Newsletters

Newsletter blocks: gray 50 panel, 20-22px sans 700 title ("Up First"), 15px description, email input (40px, 1px `#D4D4D4`, radius 2px) and a blue primary "Subscribe" button.

### Attention labels

Small rectangle above a lead headline: white 12px sans 700 uppercase on `#971717` ("BREAKING") or on `#07459C` ("LIVE UPDATES"), radius 2px, padding 2px 6px.

## 6. Layout & Spacing

- **Breakpoint:** one main switch at 768px (mobile below, desktop above), with a larger layout from about 1024px.
- **Max width:** about 1350px for the page, 1024-1100px for main content (approximate), 680px for article text.
- **Grid:** homepage uses a main column and a right rail (300px) on desktop; single column on mobile.
- **Spacing:** NPR uses 5px-based numbers: 5, 10, 15, 20, 30, 40, 60px. Story items have 15px side padding on mobile.
- **Density:** medium. Lists are compact, with room for the audio row.

## 7. Depth, Elevation & Motion

- Mostly flat. Containers can use `0 0 2px 0 rgba(18,18,18,0.2)` to lift slightly; menus use `0 2px 4px 0 rgba(18,18,18,0.2)`; soft panels `0 8px 13px -4px rgba(18,18,18,0.05)`.
- Radii are small: 2px on buttons and labels, 3-4px on cards, 50% on play buttons and avatars.
- Motion is short: 150-250ms fades and colour changes; the player slides up when audio starts.

## 8. Iconography & Imagery

- **Icons:** a single SVG sprite (play, pause, queue, headphones, download, transcript, search, menu). Mostly solid, 16-24px, using `currentColor`.
- **Photography:** news photography and portraits of hosts and guests, full colour, 3:2 or 16:9.
- **Podcast art:** square show tiles with their own branding, shown in carousels.
- **Music:** NPR Music (including Tiny Desk) uses warmer tan and teal surfaces and full-bleed video stills.

## 9. Voice & Microcopy

Warm, clear and conversational, like a radio host addressing one listener.

- Nav: "News", "Culture", "Music", "Podcasts & Shows", "Search".
- Buttons: "Donate", "Sign In", "Listen", "Queue", "Transcript", "Subscribe".
- Audio: "Listen · 4:12", "Listen live", "Play all".
- Newsletter: "Up First: the news you need to start your day" (approximate wording).
- Credits: "Photo by Name/Agency" or "Name for NPR".

## 10. Do's and Don'ts

**Do**

- Keep the logo blocks red, black and blue on white.
- Use bold sans headlines and a serif for article body.
- Add an uppercase gray slug above each headline.
- Pair stories with a play button and duration when audio exists.
- Keep surfaces white with 1px `#D4D4D4` rules and small radii.

**Don't**

- Don't use NPR Red for headlines or large backgrounds; it belongs to the logo and the Donate button.
- Don't use heavy shadows or large rounded cards.
- Don't hide the audio controls behind menus.
- Don't use all caps for headlines.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of npr.org. White page, ink `#212121` text, secondary `#575757`, captions `#737373`, rules `#D4D4D4`, soft panels `#F2F2F2`. Logo: three equal squares red `#D62021`, black, blue `#237BBD` with white lowercase "n p r". Headlines in a bold sans (`NPRSans, Inter, Helvetica, sans-serif`, weight 700, 18-24px, line-height 1.15-1.25); above each, a 14px uppercase slug at weight 500 with 0.06em tracking in `#575757`. Article body in a serif (`NPRSerif, "Source Serif 4", Georgia`) at 17px/1.5 with 0.02em tracking. Links `#0A61DB`. Header has a red `#D52020` "Donate" button with 2-4px radius. Most stories show a round play button and "Listen · 3:52". Stories sit in lists separated by 1px rules with 20px padding. Flat design: at most `0 2px 4px rgba(18,18,18,0.2)` on menus. One breakpoint at 768px; article column about 680px.

```css
:root {
  --brand-red: #D62021;
  --brand-blue: #237BBD;
  --brand-black: #000000;
  --brand-link: #0A61DB;
  --brand-link-hover: #07459C;
  --brand-donate: #D52020;
  --brand-alert: #971717;
  --brand-ink: #212121;
  --brand-fg-secondary: #575757;
  --brand-fg-tertiary: #737373;
  --brand-border: #D4D4D4;
  --brand-surface: #F2F2F2;
  --brand-bg: #FFFFFF;
  --brand-font-sans: NPRSans, "Inter", Helvetica, Arial, sans-serif;
  --brand-font-serif: "NPRSerif", "Source Serif 4", Georgia, serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-shadow: 0 2px 4px 0 rgba(18,18,18,0.2);
  --brand-shadow-container: 0 0 2px 0 rgba(18,18,18,0.2);
  --brand-article-width: 680px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by NPR.
