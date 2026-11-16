---
name: Fox News
slug: fox-news
url: https://foxnews.com
category: News
tagline: "Navy and red broadcast palette, black-weight Roboto headlines and a dense photo grid."
updated: 2026-11-16
appStoreId: 367623543
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Fox Navy
    hex: "#003366"
    role: Brand primary, top nav bar, headline and link colour
  - name: Fox Red
    hex: "#C20017"
    role: Brand secondary, live pills, alerts, logo "channel" bar
  - name: Action Blue
    hex: "#1B4E81"
    role: Buttons, theme colour, pull quote rule
  - name: Heading
    hex: "#222222"
    role: Headlines and labels
  - name: Text Grey
    hex: "#666666"
    role: Body secondary text, deks, bylines
  - name: White
    hex: "#FFFFFF"
    role: Page background, lower nav row
  - name: Navy Light
    hex: "#4B78A7"
    role: Eyebrows, kicker labels
  - name: Developing Yellow
    hex: "#FFB400"
    role: Developing and Live now pills
  - name: Divider
    hex: "#CCCCCC"
    role: Dividers, nav bottom border
  - name: Border
    hex: "#E8E8E8"
    role: Card and container borders
  - name: Surface
    hex: "#F6F8FA"
    role: Subtle panel background
  - name: Pale Blue
    hex: "#EDF6FF"
    role: Highlight panels, newsletter modules
  - name: Market Up
    hex: "#307608"
    role: Positive market change, success
  - name: Market Down
    hex: "#D20F26"
    role: Negative market change
  - name: Doomsday Navy
    hex: "#001224"
    role: Darkest header variant for major events
fonts:
  display:
    family: "Roboto"
    fallback: "Roboto"
    weights: [700, 900]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500, 700]
typeScale:
  - { role: Article headline, size: 48, weight: 900, lineHeight: 1.21, tracking: "-0.5px" }
  - { role: Big top headline, size: 42, weight: 900, lineHeight: 1.1, tracking: "-0.5px" }
  - { role: Section title, size: 30, weight: 900, lineHeight: 1.2, tracking: "-0.5px" }
  - { role: Card headline, size: 18, weight: 900, lineHeight: 1.22, tracking: "-0.25px" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.56, tracking: "0" }
  - { role: Dek, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow, size: 11, weight: 700, lineHeight: 1.64, tracking: "0" }
radii: { sm: 3, md: 4, lg: 8, pill: 100 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48]
shadows:
  - { name: Container, value: "0 0 8px rgba(0,0,0,0.08)" }
  - { name: Focused container, value: "0 0 8px rgba(0,0,0,0.16)" }
  - { name: Modal, value: "0 0 16px 0 rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F8FA"
  text: "#222222"
  muted: "#666666"
  border: "#E8E8E8"
  accent: "#1B4E81"
  accentText: "#FFFFFF"
  radius: 3
  buttonStyle: solid
---

# Fox News

## 1. Visual Theme & Atmosphere

Fox News Digital looks like a broadcast graphics package translated to a web page. Navy (`#003366`) and red (`#C20017`) carry the brand, the logo box sits in a navy top bar, and headlines are set in Roboto at weight 900 with slightly negative tracking, so they read heavy and compact. The homepage is a dense, photo-first grid: a large "big top" story with a full-width image, then columns of image-and-headline cards, short text lists and video rows.

What makes it recognisable:

- **Two-row header.** A 48px navy row with the logo, then a 62px white row of section links.
- **Black-weight headlines.** Roboto 900 at every size, tracking -0.25px to -0.5px.
- **Coloured pills.** Small rounded tags for "LIVE NOW" (red), "DEVELOPING" (yellow with black text) and video durations.
- **Navy text accents.** Links, some headlines and eyebrows use navy shades rather than a bright accent.
- **Market strip.** Up/down market figures in green `#307608` and red `#D20F26` appear in the header area and on business pages.

Mood: bold, high-contrast, broadcast-style.

## 2. Color Palette & Roles

Token names are from the site CSS (`--brand_primary`, `--typography_*`, `--components_*`).

| Name | Hex | Token / role |
|---|---|---|
| Fox Navy | `#003366` | `--brand_primary`; top nav row, `--typography_heading_color`, `--typography_anchor_color`, `--headline_color_default` |
| Action Blue | `#1B4E81` | `--brand_primary-lighter`, `--button-background`, meta theme colour |
| Navy Light | `#4B78A7` | `--brand_primary-lighter-1`, eyebrows |
| Navy 2 | `#174676` | Hover on navy elements |
| Deep Navy | `#002C57` | Pressed states |
| Doomsday Navy | `#001224` | Header for major breaking events ("is-doomsday") |
| Fox Red | `#C20017` | `--brand_secondary`, live pill, hot topics, red headlines |
| Bright Red | `#FE2741` | Red on dark backgrounds |
| Pale Red | `#FFDCE0` | Alert background tint |
| Heading | `#222222` | `--typography_heading`, `--title_color` |
| Text Grey | `#666666` | `--typography_text_color`, deks |
| Divider | `#CCCCCC` | `--divider_color` |
| Border | `#E8E8E8` | `--border-color` |
| Thumb | `#F4F4F4` | Image placeholder |
| Surface | `#F6F8FA` | `--background-darker-1` |
| Pale Blue | `#EDF6FF` | Promo and newsletter panels |
| Blue Tint | `#CEDFEF`, `#A7C6E5` | Panel borders and fills |
| White | `#FFFFFF` | `--background` |

### Semantic

| State | Hex | Use |
|---|---|---|
| Positive / success | `#307608` on `#F1FBE7` | Market up, success messages |
| Negative | `#D20F26` | Market down, errors |
| Developing | `#FFB400` (article `#FFCC00`) with `#000` text | Developing and live-now pills |
| Live | `#C20017` with white text | Live now pill, live video |
| Hot topics | `#C20017` and `#0052BD` | Hot topic labels |

### Dark mode

The site is light. A `.dark` theme exists for video and live pages: black or `#05162C` background, white headings, borders at `rgba(255,255,255,0.08)`. The app follows system dark mode (approximate).

## 3. Typography

**Family:** Roboto, loaded from Google Fonts at 400, 500, 700 and 900, plus **Roboto Condensed** 700 for some labels and data. Stack: `Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`. Because Roboto is free, the fallback is the same family.

### Scale (desktop, from production CSS)

| Role | Size / line height | Weight | Tracking |
|---|---|---|---|
| Article headline | 48 / 58px (36/42 tablet, 30/36 mobile) | 900 | -0.5px |
| Big top headline | 42-48px | 900 | -0.5px |
| Section title | 30-36px | 900 | -0.5px |
| Large card headline | 24 / 28px | 900 | -0.25px |
| Card headline | 18 / 22px | 900 | -0.25px |
| Small list headline | 14-16 / 18-20px | 700-900 | -0.25px |
| Body | 18 / 28px (16/22 mobile) | 400 | 0 |
| Dek (cards) | 14 / 21px, `#666` | 400 | 0 |
| Pull quote | 36 / 48px (24/30 mobile) | 900 | 0 |
| Byline | 14px, `#666` | 400 | 0 |
| Eyebrow | 11 / 18px, uppercase, `#4B78A7` | 700 | 0 |
| Caption | 12 / 18px, `#222` | 700 | 0 |

### Rules

- Headlines are sentence case, heavy and tight. Labels and eyebrows are uppercase.
- Body links are navy `#003366` and underlined.
- Use Roboto Condensed only for compact labels and data tables.
- Numbers in market strips are bold with signed values (+/-).

## 4. Logo & Brand Mark

The Fox News logo is a square box: white condensed "FOX" over "NEWS" on navy `#003366`, white searchlight beams from the lower left, a thin white arc, and a red `#C20017` bar along the bottom reading "channel" in lowercase white letters. On foxnews.com it sits inside the navy header row.

- **Primary:** the full box with navy field and red "channel" bar.
- **Small sizes:** the same box; do not crop off the channel bar.
- **Clear space:** about 10% of the box width on each side.
- **Minimum size:** around 32px square on screen.
- **App icon:** the logo box on navy.

Misuse: don't recolour the field, don't separate the beams from the box, don't set "FOX NEWS" in Roboto as a substitute.

## 5. Components

### Header

```css
.site-header .nav-row-upper {
  background: #003366;
  height: 48px;
}
.site-header .nav-row-lower {
  background: #FFFFFF;
  height: 62px;
  line-height: 52px;
  border-bottom: 1px solid #CCCCCC;
  font: 700 14px Roboto, sans-serif;
}
```

- Upper row: logo left, "Watch TV", "Fox Nation", search, account and a subscribe/login button on the right in white.
- Lower row: section links (U.S., Politics, World, Opinion, Media, Entertainment, Sports, Lifestyle, Video) in `#222`, hover navy.
- Major-event variant: the whole header becomes `#001224`.

### Breaking / alert banner

- Full-width bar above the content: `#C20017` background, white "BREAKING NEWS" label in Roboto 900 uppercase, headline in white 18-24px/900 (approximate).
- Developing story variant: `#FFB400` label with black text.

### Story cards

- Image top (16:9), 0 radius on the homepage, headline below at 18/22px/900 in `#222` or navy, optional eyebrow above in `#4B78A7` 11px uppercase.
- Video cards: duration chip bottom-left, `#222222` background, `#F4F4F4` text, 3px radius, plus a small play icon.
- Text lists: 14-16px headlines with 1px `#E8E8E8` dividers.
- Container boxes use `box-shadow: 0 0 8px rgba(0,0,0,0.08)` with 4px radius on modules like newsletters and "Hot Topics".

### Pills (signature)

```css
.pill {
  display: inline-block;
  font: 700 11px/1 Roboto, sans-serif;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 100px;
}
.pill.live-now { background: #C20017; color: #FFFFFF; }
.pill.is-developing, .pill.is-livenow { background: #FFB400; color: #000000; }
```

Event pills for live events add a 7px white dot at the left.

### Article page

- Eyebrow (section) in navy small caps, then headline 48/58px/900, then a sub-headline/dek in `#666`.
- Author byline centred on mobile, 14px with a circular 32-40px headshot; "Fox News" affiliation and timestamp below.
- Body 18/28px Roboto 400, 28px paragraph spacing, links navy underlined.
- Pull quote: 3px left border `#1B4E81`, 12px left padding, Roboto 900 at 24/30 (36/48 desktop) in black; attribution 14px `#222` right aligned.
- Image captions: 12/18px/700 `#222`, credit in `#666`.
- In-article related links in navy 14px/700 with 11px grey summary.

### Buttons

| Variant | Style |
|---|---|
| Primary | `#1B4E81` fill, white 14px/600, 3px radius, 16px padding |
| Disabled | `#EDEDED` fill, `#666` text |
| Secondary | white fill, 1px `#1B4E81` border, navy text, 3px radius |
| Link | navy `#003366`, underline |

Hover darkens navy to `#174676` (approximate). Transitions `background .25s ease-in-out`.

### Video player

- 16:9 black frame. Large circular play button, white triangle on translucent black.
- "LIVE" badge in red pill top-left for streams; Fox Nation and Fox News Go streams show provider sign-in overlays.
- Controls: white icons on a dark gradient bar, red progress (approximate).

### Inputs

Newsletter sign-up: white input, 1px `#CCCCCC` border, 4px radius, 14-16px text; submit in Action Blue. Success message `#307608` on `#F1FBE7`.

## 6. Layout & Spacing

- Breakpoints: 768px, 1024px, 1280px, 1440px.
- Content max width about 1232-1280px; page wrappers up to 1440px (approximate).
- Homepage: big top story across the main column, then a main column of 2-3 card columns with a 300px right rail ("Trending", ads, newsletter).
- Card gaps 16-24px; section headings get 24-32px top margin.
- Mobile: single column, headline padding 0 16px.
- Density: high; many cards per screen.

## 7. Depth, Elevation & Motion

- Mostly flat cards. Modules use soft ambient shadows: `0 0 8px rgba(0,0,0,0.08)`, focused `0 0 8px rgba(0,0,0,0.16)`.
- Modals: `0 0 16px 0 rgba(0,0,0,0.2)` over `rgba(0,0,0,0.3)` scrim.
- Transitions: `opacity .5s`, `color .25s ease-in-out`, `background .25s ease-in-out`, menus slide with `top .5s ease-in-out`.

## 8. Iconography & Imagery

- Icons are solid and simple, 16-24px: play, search, user, share, hamburger.
- Social icons in brand colour circles in share bars.
- Photography is full-colour and tightly cropped on faces and action; no filters, square corners.
- Video thumbnails always carry a duration chip.

## 9. Voice & Microcopy

Direct, energetic, uppercase for labels.

- Labels: "BREAKING NEWS", "LIVE NOW", "DEVELOPING", "EXCLUSIVE", "WATCH".
- Buttons: "Subscribe", "Watch Live", "Sign up", "Log In", "Load More".
- Byline: "By Jane Doe Fox News".
- Timestamps: "Published November 16, 2026 4:10pm EST".
- Newsletter prompt: "Get the latest updates" (approximate).

## 10. Do's and Don'ts

**Do**

- Use Roboto 900 with negative tracking for all headlines.
- Keep the top bar navy `#003366` and the logo inside it.
- Use red for live and breaking only, yellow for developing.
- Underline body links in navy.
- Use rounded pills for status, square corners for images.

**Don't**

- Don't use light weights for headlines.
- Don't swap navy for a bright blue.
- Don't put the red bar colour on large backgrounds outside alerts.
- Don't drop the duration chip on video cards.
- Don't add large rounded cards; keep radii at 3-4px.

## 11. Agent Prompt Guide

> Build this UI in the style of Fox News. White page, headline colour `#222222` (some headlines navy `#003366`), secondary text `#666666`, borders `#E8E8E8`, dividers `#CCCCCC`. Font: `Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`. Headlines are weight 900 with -0.25px to -0.5px tracking: 48/58px on articles, 18/22px on cards. Body is 18/28px weight 400 with navy underlined links. Header has two rows: a 48px `#003366` bar with the square logo and a 62px white row of 14px/700 section links with a 1px `#CCCCCC` bottom border. Buttons are `#1B4E81` with white text and 3px radius. Use pills with 100px radius: red `#C20017` "LIVE NOW", yellow `#FFB400` with black text "DEVELOPING". Eyebrows are 11px/700 uppercase `#4B78A7`. Pull quotes have a 3px `#1B4E81` left border and 900-weight text. Use a 1232-1280px grid with a 300px right rail, 16-24px gaps, and soft module shadows `0 0 8px rgba(0,0,0,0.08)`.

```css
:root {
  --brand-navy: #003366;
  --brand-navy-action: #1B4E81;
  --brand-navy-light: #4B78A7;
  --brand-navy-deep: #002C57;
  --brand-navy-doomsday: #001224;
  --brand-red: #C20017;
  --brand-red-bright: #FE2741;
  --brand-yellow: #FFB400;
  --brand-heading: #222222;
  --brand-text: #666666;
  --brand-divider: #CCCCCC;
  --brand-border: #E8E8E8;
  --brand-thumb: #F4F4F4;
  --brand-surface: #F6F8FA;
  --brand-surface-blue: #EDF6FF;
  --brand-bg: #FFFFFF;
  --brand-up: #307608;
  --brand-down: #D20F26;
  --brand-font: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-condensed: "Roboto Condensed", Roboto, sans-serif;
  --brand-headline-weight: 900;
  --brand-headline-tracking: -0.5px;
  --brand-radius-sm: 3px;
  --brand-radius-md: 4px;
  --brand-radius-pill: 100px;
  --brand-shadow: 0 0 8px rgba(0,0,0,0.08);
  --brand-shadow-focus: 0 0 8px rgba(0,0,0,0.16);
  --brand-shadow-modal: 0 0 16px 0 rgba(0,0,0,0.2);
  --brand-transition: background .25s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Fox News.
