---
name: CNBC
slug: cnbc
url: https://cnbc.com
category: News
tagline: "Deep navy nav, peacock logo, Proxima Nova headlines and green-red market quote strips."
updated: 2026-11-16
appStoreId: 398018310
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: CNBC Navy
    hex: "#002F6C"
    role: Section headers, key points, outlined buttons, links on cards
  - name: Nav Navy
    hex: "#001E5A"
    role: Global navigation bar background
  - name: Logo Navy
    hex: "#0A1F55"
    role: CNBC wordmark
  - name: Gold
    hex: "#FCB700"
    role: Hover accent, highlights, active nav underline
  - name: Ink
    hex: "#171717"
    role: Headlines and body text
  - name: Market Green
    hex: "#008456"
    role: Positive change in quotes and charts
  - name: Market Red
    hex: "#CE2B2B"
    role: Negative change, live and breaking labels
  - name: Link Blue
    hex: "#005594"
    role: Text links, author links
  - name: Article Link
    hex: "#0477C9"
    role: In-article links and blockquote rules
  - name: Meta Grey
    hex: "#747474"
    role: Timestamps, river bylines, labels
  - name: Border
    hex: "#D9D9D9"
    role: Dividers, card borders
  - name: Pale Steel
    hex: "#CFD8E2"
    role: Quote strip and table rules
  - name: Off White
    hex: "#F8F8F8"
    role: Panels and module backgrounds
  - name: Night Navy
    hex: "#00081A"
    role: Logged-in and PRO navigation, dark mode base
  - name: White
    hex: "#FFFFFF"
    role: Page background
fonts:
  display:
    family: "Proxima Nova"
    fallback: "Montserrat"
    weights: [600, 700, 800]
  body:
    family: "Lyon Text"
    fallback: "Source Serif 4"
    weights: [400, 600]
typeScale:
  - { role: Article headline, size: 54, weight: 700, lineHeight: 1.04, tracking: "0" }
  - { role: Lead headline, size: 32, weight: 700, lineHeight: 1.1, tracking: "0" }
  - { role: Subtitle, size: 24, weight: 700, lineHeight: 1.0, tracking: "0" }
  - { role: Card headline, size: 18, weight: 600, lineHeight: 1.22, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.66, tracking: "0" }
  - { role: Key points, size: 16, weight: 500, lineHeight: 1.42, tracking: "0" }
  - { role: Label, size: 11, weight: 600, lineHeight: 1.18, tracking: "1.2px" }
radii: { sm: 2, md: 3, lg: 5, pill: 100 }
spacing: [4, 8, 10, 12, 15, 20, 30, 40, 60]
shadows:
  - { name: Card, value: "5px 5px 20px rgba(23,23,23,0.1)" }
  - { name: Drop, value: "0 4px 4px rgba(0,0,0,0.25)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#171717"
  muted: "#747474"
  border: "#D9D9D9"
  accent: "#002F6C"
  accentText: "#FFFFFF"
  radius: 3
  buttonStyle: solid
---

# CNBC

## 1. Visual Theme & Atmosphere

CNBC.com is a business news site where market data shares the page with the news. The header is a deep navy bar (`#001E5A`) with the full-colour peacock logo and navy "CNBC" wordmark reversed out, a row of live market quotes runs under it, and the white page below holds bold Proxima Nova headlines, a serif reading face (Lyon) for articles, and constant green/red price movement.

What makes it recognisable:

- **Navy everywhere.** Several navies do the work: `#001E5A` nav, `#002F6C` section headers and buttons, `#0A1F55` in the wordmark, `#00081A` for PRO and logged-in states.
- **Gold hover.** A warm gold `#FCB700` marks hover and active states in the nav and links.
- **Quote strips.** Index tickers (Dow, S&P 500, Nasdaq) with bold numbers and signed changes in `#008456` or `#CE2B2B`.
- **Key points box.** Articles open with an uppercase navy "KEY POINTS" header over a bulleted summary.
- **Peacock.** The six-feather NBC peacock sits above the wordmark in the logo.

Mood: fast, data-dense, professional.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Nav Navy | `#001E5A` | Global nav background (85px bar) |
| CNBC Navy | `#002F6C` | Section headers, key points header, outlined button border and text, byline links on cards |
| Logo Navy | `#0A1F55` | Wordmark |
| Night Navy | `#00081A` | Logged-in nav, PRO, dark mode |
| Dark Steel | `#071D39` | Dark modules |
| Link Blue | `#005594` | Text links, search result authors |
| Bright Blue | `#0053CF` | Focus rings, interactive accents |
| Article Link | `#0477C9` | In-article links, blockquote borders |
| Key Points Link | `#2077B6` | Links inside key points |
| Gold | `#FCB700` | Hover, active, highlights |
| Ink | `#171717` | Headlines, body |
| Graphite | `#424242` | Secondary dark text |
| Meta Grey | `#747474` | Timestamps, river bylines |
| Grey | `#9E9E9E` | Disabled |
| Border | `#D9D9D9` | Dividers |
| Pale Steel | `#CFD8E2` | Quote tables, chart grid |
| Mist | `#DCE0E4` | Text on dark |
| Off White | `#F8F8F8` | Panels |
| White | `#FFFFFF` | Page |

### Market colours

| State | Hex | Use |
|---|---|---|
| Up | `#008456` | Positive change (`#00A857` brighter variant on dark) |
| Down | `#CE2B2B` | Negative change (`#B40909` in analyst widgets) |
| Unchanged | `#424858` | Flat |

### Verticals

CNBC Make It, Select and PRO add their own accents (purple `#6258FF` on Make It, Lato and Averta fonts on Select). Treat them as sub-brands.

### Dark mode

The app and "webview" article templates have a dark theme: `#00081A` or `#181E23` backgrounds, `#DCE0E4` text, blockquotes on `#181E23`. The website itself is light with navy chrome.

## 3. Typography

**Families**

- **Proxima Nova** (Mark Simonson Studio): headlines, nav, labels, key points, quote data. Stack `"Proxima Nova", Helvetica, Arial, sans-serif`. Weights 450, 500, 600, 700, 800.
- **Lyon Text** (Commercial Type): article body (`.group`), author names. Stack `Lyon, Helvetica, Arial, sans-serif`.
- Vertical-specific: Averta and Rozha One (Make It), Lato (Select).

Closest Google Fonts: **Montserrat** for Proxima Nova (slightly wider), **Source Serif 4** for Lyon Text.

### Scale (desktop, from production CSS)

| Role | Font | Size / line height | Weight |
|---|---|---|---|
| Article headline | Proxima Nova | 54px / 1.037 (40/1.05 tablet, 28/1.1 mobile) | 700 |
| Homepage lead headline | Proxima Nova | 28-32px / 1.1 | 700 |
| Article subtitle (H2) | Proxima Nova | 24px / 23px | 700 |
| Card headline | Proxima Nova | 16-20px / 1.2 | 600 |
| Key points header | Proxima Nova | 18px / 1.05, uppercase, +0.6px | 800 |
| Key points list | Proxima Nova | 16px / 1.375-1.42 | 500 |
| Body | Lyon Text | 18px / 1.66 | 400 |
| Author name | Lyon | 12px, +0.46px | 600 |
| River byline / timestamp | Proxima Nova | 11px / 13px, uppercase, +1.2px, `#747474` | 600 |
| Quote price | Proxima Nova | 18-25px | 700 |

### Rules

- Headlines sentence case or headline case as written by editors; labels uppercase with 1-1.5px tracking.
- Numbers in quote strips use bold weights and signed values: "+1.24%", "-312.55".
- Body links in article: `#0477C9`, underline on hover (approximate).

## 4. Logo & Brand Mark

The CNBC logo stacks the NBC peacock (yellow `#FCCC12`, orange `#FF7112`, red `#EF1541`, purple `#6E55DC`, blue `#069DE0`, green `#05AC3F`) over a bold geometric "CNBC" wordmark in navy `#0A1F55`. On the navy header the wordmark turns white and the peacock stays in colour.

- **Stacked:** peacock above wordmark (primary).
- **Horizontal:** peacock left of wordmark for tight headers.
- **Clear space:** half the peacock height on all sides.
- **Minimum size:** wordmark 60px wide on screen.
- **App icon:** the peacock on a dark navy square (approximate).

Misuse: don't recolour feathers, don't set "CNBC" in Proxima Nova, don't place the colour peacock on busy photos.

## 5. Components

### Global navigation

```css
.global-nav {
  background: #001E5A;
  height: 85px;           /* 70px inner bar */
  color: #FFFFFF;
  font: 600 14px "Proxima Nova", Montserrat, Helvetica, sans-serif;
}
.global-nav a:hover, .global-nav a:focus-visible { color: #FCB700; }
```

- Logo left; links (Markets, Business, Investing, Tech, Politics, Video, Watchlist, Investing Club, PRO); "Livestream" link with a pulsing icon; search, sign in and a "Subscribe" button right.
- Logged-in state shifts the bar to `#00081A` (transition `background-color .5s ease-in`).

### Quote strip (signature)

- White strip under the nav: index name in 12px/600 uppercase, price in 18-25px/700 `#171717`, change in green or red bold.
- "Watch Live" button at the end: 42px tall, 1px `#002F6C` border, 0 radius, navy 12px/600 text.
- Market cards on the homepage repeat this in a grid with sparkline charts.

### Breaking and live

- Breaking banner: `#CE2B2B` strip, white "BREAKING" label in Proxima Nova 800 uppercase and headline (approximate).
- Live blog: red "LIVE UPDATES" label, entries with timestamps in `#747474` uppercase.
- News alert drawer items: `#F8F8F8` background, 12-14px/500 titles.

### Cards and river

- Homepage: big lead story (image + 28-32px headline), stacked secondary headlines in 16-18px/600, many text-only lists.
- River items (section pages): image left about 140px wide, headline right in 18-20px/700, byline and time below in 11px uppercase grey with 1.2px tracking.
- PRO content shows a small "PRO" badge in navy or gold (approximate).
- Card shadow when elevated: `5px 5px 20px rgba(23,23,23,0.1)`.

### Article page

- Eyebrow (section) link in navy, headline 54px/700 `#000`, then "Published Sun, Nov 16 2026 4:10 PM EST" and author with headshot.
- Key points box: header "KEY POINTS" 18px/800 navy uppercase, list items 16px/500 with 18px left padding and custom bullets; links `#2077B6`, hover gold.
- Body: Lyon Text 18px / 1.66, 30px paragraph spacing; H2 subtitles 24px/700 Proxima Nova.
- Inline charts and quote widgets with navy headers.
- Blockquote: blue rules top and bottom `#0477C9`.
- Captions: Proxima Nova 12-14px `#747474` (approximate).

### Buttons

| Variant | Style |
|---|---|
| Primary | `#002F6C` fill, white 14px/600, 3px radius |
| Outline | 1px `#002F6C`, navy text, 0-3px radius |
| Subscribe | `#FCB700` fill, `#002F6C` or black text (approximate) |
| Link | `#005594`, hover `#FCB700` |
| Focus | `0 0 0 1px #0053CF` ring |

Transitions `all .15s linear`.

### Video player

- 16:9, black, 0 radius. Large play icon. "LIVE" label in red for the livestream.
- Below: video title in Proxima Nova 700, duration and date in grey uppercase.

### Data tables

- Watchlist and quote tables: Proxima Nova 14px, `#CFD8E2` rules, numbers right aligned, change cells coloured green or red, column headers 12px uppercase grey.

### Inputs

Search and newsletter: 40-44px, 1px `#D9D9D9` border, 3px radius, 14-16px text; focus ring `#0053CF`; error ring `#CE2B2B`.

## 6. Layout & Spacing

- Breakpoints: 360px, 760px, 1020px, 1340px.
- Max widths about 1290-1340px; main column plus a 300px right rail.
- Article grid: body in a column offset by 1-2 of 12 columns (`.group` margins of 8-25% plus 30px).
- Gutters 30px desktop, 20px mobile (approximate); vertical spacing in multiples of 10 and 15 (10, 15, 20, 30px).
- Dense homepage: many 1-line headlines per module.

## 7. Depth, Elevation & Motion

- Mostly flat with rules.
- Elevated cards: `5px 5px 20px #1717171a`; drop menus `0 4px 4px #00000040`.
- Focus and error use 1px rings (`0 0 0 1px #0053CF`, `0 0 0 1px #CE2B2B`).
- Transitions: `all .15s linear` (links, buttons), `transform .2s ease-out` (carousels), `background-color .5s ease-in` (nav state).

## 8. Iconography & Imagery

- Icons from icon fonts (icomoon, social-icons): solid, simple, 14-20px.
- Photography: executives, trading floors, company HQs, product shots; broadcast stills from CNBC shows.
- Charts: thin line charts, green/red fills, `#CFD8E2` grid lines, Proxima Nova labels.

## 9. Voice & Microcopy

Concise and numbers-led.

- Labels: "KEY POINTS", "LIVE UPDATES", "BREAKING", "PRO", "WATCH LIVE".
- Buttons: "Subscribe", "Sign In", "Watch Live", "Add to Watchlist".
- Meta: "Published Sun, Nov 16 2026 4:10 PM EST" and "Updated ...".
- Market strings: "Dow +0.42%", "10-year yield 4.1%" (example format only).

## 10. Do's and Don'ts

**Do**

- Use navy chrome and white content areas.
- Show market data with bold numbers and green/red signed changes.
- Use gold `#FCB700` only for hover, active and highlights.
- Set article body in a serif at 18px / 1.66.
- Open articles with a key points box.

**Don't**

- Don't use green or red for anything but price direction and alerts.
- Don't use the peacock colours as UI accents.
- Don't round cards heavily; 3-5px at most.
- Don't set headlines in the serif.
- Don't hide timestamps; time matters on every item.

## 11. Agent Prompt Guide

> Build this UI in the style of CNBC. Navy header `#001E5A` (85px) with white Proxima Nova 14px/600 links that turn gold `#FCB700` on hover, and the peacock logo. Under it a white quote strip with index names, bold prices and signed changes in green `#008456` or red `#CE2B2B`, plus an outlined navy "Watch Live" button. Page is white, text `#171717`, metadata `#747474` 11px uppercase with 1.2px tracking, borders `#D9D9D9`. Headlines in `"Proxima Nova", Montserrat, Helvetica, Arial, sans-serif` weight 700 (54px article, 18-20px cards). Article body in `Lyon, "Source Serif 4", Georgia, serif` 18px/1.66. Articles open with a "KEY POINTS" box: 18px/800 uppercase navy `#002F6C` header and 16px/500 bullet list. Buttons are navy `#002F6C` with white text and 3px radius; links `#005594`. Use a 1290-1340px grid with a 300px right rail, 30px gutters, transitions `all .15s linear`.

```css
:root {
  --brand-nav: #001E5A;
  --brand-navy: #002F6C;
  --brand-navy-logo: #0A1F55;
  --brand-navy-night: #00081A;
  --brand-gold: #FCB700;
  --brand-ink: #171717;
  --brand-graphite: #424242;
  --brand-meta: #747474;
  --brand-border: #D9D9D9;
  --brand-steel: #CFD8E2;
  --brand-surface: #F8F8F8;
  --brand-bg: #FFFFFF;
  --brand-link: #005594;
  --brand-link-article: #0477C9;
  --brand-focus: #0053CF;
  --brand-up: #008456;
  --brand-down: #CE2B2B;
  --brand-flat: #424858;
  --brand-font-sans: "Proxima Nova", "Montserrat", Helvetica, Arial, sans-serif;
  --brand-font-serif: Lyon, "Lyon Text", "Source Serif 4", Georgia, serif;
  --brand-label-tracking: 1.2px;
  --brand-radius-sm: 2px;
  --brand-radius: 3px;
  --brand-radius-lg: 5px;
  --brand-shadow-card: 5px 5px 20px rgba(23,23,23,0.1);
  --brand-shadow-drop: 0 4px 4px rgba(0,0,0,0.25);
  --brand-transition: all .15s linear;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by CNBC.
