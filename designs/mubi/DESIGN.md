---
name: MUBI
slug: mubi
url: https://mubi.com
category: Streaming
tagline: "White page, MUBI blue, uppercase Riforma: a curated cinema that reads like a magazine."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: MUBI Blue
    hex: "#001489"
    role: App icon, primary buttons, links, focus borders
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on blue and on film stills
  - name: Ink
    hex: "#323232"
    role: Primary text, headings
  - name: Black
    hex: "#000000"
    role: Wordmark, full-bleed hero backgrounds
  - name: GO Red
    hex: "#FF4238"
    role: MUBI GO ticket graphic and promos
  - name: Blue Hover
    hex: "#001AAF"
    role: Button hover fill and border
  - name: Grey 666
    hex: "#666666"
    role: Secondary text, form helper text
  - name: Grey 7D
    hex: "#7D7D7D"
    role: Drawer links, muted labels
  - name: Grey 9B
    hex: "#9B9B9B"
    role: Bylines, dates, small meta
  - name: Silver
    hex: "#C8C8C8"
    role: Input borders, placeholders, pressed button text
  - name: Rule
    hex: "#EAEAEA"
    role: Dividers, header bottom border, footer band
  - name: Mist
    hex: "#F6F6F6"
    role: Focused input fill, quiet panels
  - name: GO Pink
    hex: "#FFA49B"
    role: Secondary ticket colour, promo type on red
  - name: Ticket Yellow
    hex: "#FFC000"
    role: MUBI GO graphic accent
  - name: Error
    hex: "#B00000"
    role: Form error borders and text
fonts:
  display:
    family: "Riforma LL"
    fallback: "Inter"
    weights: [500, 850]
  body:
    family: "Riforma LL"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 60, weight: 500, lineHeight: 1, tracking: "0" }
  - { role: Notebook Headline, size: 42, weight: 300, lineHeight: 1.07, tracking: "0" }
  - { role: Film Title, size: 30, weight: 500, lineHeight: 1.07, tracking: "0" }
  - { role: Section Title, size: 24, weight: 500, lineHeight: 1, tracking: "0" }
  - { role: Label, size: 18, weight: 500, lineHeight: 1.17, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Nav, size: 14, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Meta, size: 13, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 10, 15, 20, 25, 30, 60]
shadows:
  - { name: Focus Inset, value: "inset 0 0 0 2px #001489" }
  - { name: Popover, value: "1px 3px 16px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#323232"
  muted: "#7D7D7D"
  border: "#C8C8C8"
  accent: "#001489"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# MUBI

## 1. Visual Theme & Atmosphere

MUBI is a curated streaming service for art-house and world cinema, plus a distributor, a cinema ticket programme (MUBI GO), a print and online magazine (Notebook) and a film database with ratings. Its UI borrows from print: white pages, square corners, a single deep blue, and uppercase grotesque type set large. Film stills are the main imagery and they are shown big and uncropped where possible.

What makes it recognisable:

- **Type-led layout.** Headlines and film titles are uppercase Riforma at 500 weight, often very large ("WATCH GREAT CINEMA LIKE NOWHERE ELSE" at 60px). Type does the work that cards and boxes do elsewhere.
- **MUBI Blue.** `#001489` is the brand colour: the app icon, primary buttons, and links. There is no second accent in the chrome.
- **Square corners.** Buttons and inputs have 0 to 2px radius. Nothing is pill-shaped except avatars.
- **Seven-dot mark.** The logo pairs "MUBI" with a cluster of seven dots arranged like a play arrow; the app icon is the dots alone on blue.
- **Editorial calm.** Lots of white, hairline `#EAEAEA` rules, grey meta text, no gradients except over photos.

Density: low. One idea per screen section, generous margins, long-form text in the Notebook. The streaming product is selective by design, so pages show fewer titles than a typical streamer.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| MUBI Blue | `#001489` | Primary buttons, links (`a { color: #001489 }`), focus borders, app icon |
| Blue Hover | `#001AAF` | Button hover background and border |
| White | `#FFFFFF` | Page background, text on blue and on film stills |
| Ink | `#323232` | Body text and headings on white |
| Black | `#000000` | Wordmark, dark hero sections, full-screen player |

### Greys

| Name | Hex | Use |
| --- | --- | --- |
| Grey 666 | `#666666` | Secondary copy, film detail labels |
| Grey 7D | `#7D7D7D` | Drawer menu links (20px), muted UI |
| Grey 9B | `#9B9B9B` | Bylines, dates, footnotes (13px) |
| Silver | `#C8C8C8` | Input borders, placeholder text, pressed button label |
| Rule | `#EAEAEA` | Header border, list dividers, footer band background |
| Mist | `#F6F6F6` | Focused input fill |

### Accents (campaign only)

| Name | Hex | Use |
| --- | --- | --- |
| GO Red | `#FF4238` | MUBI GO ticket stub and promos |
| GO Pink | `#FFA49B` | Ticket text and secondary shapes |
| Ticket Yellow | `#FFC000` | MUBI GO wordmark graphic |
| Error | `#B00000` | Error border (`inset 0 0 0 1px #B00000`) and text |

### Film colour

Film pages paint a placeholder in the still's dominant colour (for example `#814423` for *In the Mood for Love*) while the image loads, then fade the image in. Use the artwork's own colour rather than a brand grey for loading states over imagery.

### Mode

The website is light. Full-bleed heroes, the player and the TV apps are dark, with white type over film stills. Treat light as the brand default and dark as "in the cinema".

## 3. Typography

- **Riforma LL** (Lineto) is the brand typeface, a neutral grotesque loaded in Regular, Medium (500), Bold, Heavy (850), Italic and Medium Italic. Nearly all UI is Riforma 500 or 400.
- **Tiempos Text** and **Tiempos Headline Light** (Klim) set the Notebook magazine: article headlines, standfirsts and long-form body.
- **K Compress** (a condensed caps face) appears in MUBI GO and campaign graphics only.
- All three are commercial licences. Fallbacks: Riforma to **Inter**; Tiempos to **Source Serif 4**; K Compress to **Antonio**. The site's own metric fallbacks are Arial (Riforma) and Times New Roman (Tiempos).

### Scale

| Role | Font | Size / line | Weight | Notes |
| --- | --- | --- | --- | --- |
| Hero | Riforma | 60px / 1 | 500 | Uppercase, home and campaign heroes |
| Notebook headline | Tiempos Headline Light | 42 / 45px | 300 | Sentence case |
| Film title | Riforma | 30 / 32px | 500 | Uppercase, clamp to 4 lines, `text-wrap: balance` |
| Section title | Riforma | 24px / 1 | 500 | Uppercase ("IN CINEMAS THIS WEEK") |
| Label | Riforma | 18 / 21px | 500 | Uppercase, list headers, button text on desktop |
| Body | Riforma | 16px / 1.4 | 400 | Synopses, forms |
| Notebook body | Tiempos Text | 18-20px / 1.6 | 400 | Articles (approximate) |
| Nav | Riforma | 14px | 500 | Uppercase |
| Meta | Riforma | 13px | 400 | Bylines and dates in `#9B9B9B` |

### Rules

- Uppercase for titles, buttons, nav and section labels; sentence case for body and Notebook headlines.
- Tracking 0 at most sizes; large Notebook display numbers tighten to about -0.7px.
- Original-language titles sit under the English title ("花樣年華", "Fa yeung nin wa") in smaller type.
- Ratings show as "9.2 /10" with the vote count beside ("108,767 Ratings").

## 4. Logo & Brand Mark

- **Logo:** "MUBI" in a bold geometric sans followed by the dot mark: seven circles on a 3x3 grid (two left columns full, the right column only its middle dot) forming a play arrow. The file here is the black version from mubi.com.
- **App icon:** the seven white dots on MUBI Blue `#001489`, filling about 60% of the square.
- **Colour versions:** black on white, white on black or over film stills, white on blue. The header uses white over heroes and black on white pages.
- **Clear space:** at least one dot diameter around the logo.
- **Minimum size:** about 60px wide for the full logo (the header renders it 75-112px wide); use the dots alone below that.

Misuse: do not rearrange the dots, add colours to individual dots, round off the wordmark, or set "MUBI" in Riforma.

## 5. Components

### Buttons

From the live emotion styles.

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 50px; padding: 12px 16px;
  font: 500 16px/1 "Riforma LL", "Inter", Helvetica, Arial, sans-serif;
  text-transform: uppercase; white-space: nowrap;
  border-radius: 0; border: 1px solid #001489;
  background: #001489; color: #FFFFFF;
}
@media (min-width: 810px) { .btn { padding: 13px 25px; font-size: 18px; line-height: 1.5; } }
.btn:hover:not(:disabled)  { background: #001AAF; border-color: #001AAF; color: #FFFFFF; text-decoration: none; }
.btn:active:not(:disabled) { color: #C8C8C8; }

.btn-outline { background: transparent; color: inherit; border: 1px solid currentColor; }
.btn-outline:hover:not(:disabled) { background: #001AAF; border-color: #001AAF; color: #FFFFFF; }

.btn-small { height: auto; padding: 6px 20px; font-size: 14px; line-height: 1.5; border-radius: 2px; }
```

The main call to action is "Try 7 Days Free" (read on the live site, 2026-11-16) paired with an email field and a "Get started" button.

### Inputs

```css
.input {
  height: 50px; padding: 13px 8px;
  border: 1px solid #C8C8C8; border-radius: 0;
  font: 400 16px "Riforma LL", "Inter", sans-serif; letter-spacing: 0;
  color: #323232; background: #FFFFFF;
}
.input::placeholder { color: #C8C8C8; }
.input:focus { outline: none; border-color: #001489; background: #F6F6F6; }
.input.is-error { box-shadow: inset 0 0 0 1px #B00000; }
```

The signup email field and button sit flush side by side on desktop (button `margin-top: 4px` on mobile when stacked).

### Header

- 60px tall. Transparent with a white logo and white links over hero images; white background with a `1px #EAEAEA` bottom border on content pages.
- Links: "Now Showing", "MUBI GO", "Gift MUBI", "Film Database", "Notebook", "Shop", in uppercase 14px 500. Search icon and "Try 7 Days Free" on the right.
- Mobile drawer: white panel from the left, `max-width: 350px`, links in 20px `#7D7D7D` with 42px line height, 25px side padding.

### Now Showing

The streaming catalogue as a hand-picked list rather than an endless grid. Each film is a large 16:9 still with the title in uppercase white over a bottom gradient, plus director, country and year in small caps-style meta. A short editorial note explains why it was picked. Rows are fewer and wider than on other streamers.

### Film detail page

- Full-bleed still (dominant-colour placeholder, image fades in at 400ms).
- Uppercase title at 30px (larger on desktop), original titles below, "Directed by Wong Kar Wai", country, year, genres, runtime as a number with a clock icon.
- Rating block: big number "9.2", "/10", count "108,767 Ratings".
- Synopsis in 16px Riforma, "Watch" (blue) and "Watchlist" (outline) buttons, then cast, reviews, and "Notebook" articles about the film.

### Notebook

- White page, Tiempos Headline Light at 42px for the lead story, Riforma uppercase category labels ("FEATURE", "COLUMN", "INTERVIEW", "AUDIO").
- Article cards: image, category, headline, two-line standfirst, author in 13px `#9B9B9B`, a bullet, then date ("16 Nov 2026").
- Newsletter strip: "Sign up for the Notebook Weekly Edit newsletter." with a square input and "Join" button.

### MUBI GO

A weekly cinema ticket included with some plans. Its graphic is a red `#FF4238` ticket with notched edges (clipped with an SVG path), stacked K Compress or Riforma uppercase text in white and `#FFA49B`, and a yellow `#FFC000` GO mark. Line: "Get a movie ticket every week."

### Plans and paywall

The signed-out home is the paywall: hero line, email field, "Get started", then reasons to join ("Curated by film lovers. By hand.", "Stream any film on MUBI, anytime."). Plan details (monthly, annual, MUBI GO add-on) are shown on a white page with square plan cards bordered in `#C8C8C8`; the selected card gets a 2px blue inset border. Prices vary by country and were not read for this file.

### Player

Black, minimal: white icons, a thin white scrubber with a blue played portion (approximate), subtitles in Riforma. Title and director show top-left when paused.

### Lists and dividers

List rows are separated by `1px solid #EAEAEA` with 10px spacing. Footer sits on an `#EAEAEA` band with a white top border, 12px links.

## 6. Layout & Spacing

- **Breakpoints:** 412, 810, 1186, 1562, 1938px (the main grid gains a column every 376px).
- **Grid:** film tiles in 1, 2, 3, 4 and 5 columns at those breakpoints, gutters about 20px.
- **Page padding:** 15-20px on mobile, 30-60px on desktop (approximate).
- **Max widths:** text blocks about 650px; hero copy `max-width: 650px` with 20px right padding.
- **Spacing:** 4, 8, 10, 15, 20, 25, 30, 60. Many values are odd multiples of 5 rather than an 8px grid.
- **Density:** sparse. Large headline, big image, short copy, one button.

## 7. Depth, Elevation & Motion

- **Flat.** No card shadows. Popovers use `1px 3px 16px rgba(0,0,0,0.2)`.
- **Gradients only over photos,** to keep white text readable (`linear-gradient(transparent, rgba(0,0,0,0.75))`).
- **Durations:** images fade in over 400ms; links and buttons change colour over 200ms; drawers and menus transform over 200ms; larger reveals 300-400ms `ease-out`.
- **Focus:** blue border or `inset 0 0 0 2px #001489`, never a glow.

## 8. Iconography & Imagery

- **Icons:** thin, simple, mostly line glyphs at 16-24px: search, close (two 1px strokes), clock, star, social logos. Black on white, white over images.
- **Imagery:** film stills chosen with care, shown large with no rounded corners and no added frames. Keep the still's colour; never tint it blue.
- **Posters:** used in the database and lists, square-cornered.
- **Campaigns:** bold type over a still, or flat colour fields with K Compress type for MUBI GO.

## 9. Voice & Microcopy

Cinephile, warm, a little playful, never salesy. Short declarative lines, often split across a layout.

- Hero: "Watch great cinema like nowhere else"
- Value lines: "Everywhere's best cinema.", "Curated by film lovers. By hand.", "From the greatest ever directors, to the greatest new directors."
- MUBI GO: "Get a movie ticket every week.", "GO GO GO"
- Notebook: "Notebook is our beautiful, deep, movie-obsessed magazine. A celebration of the art and culture of cinema. On incredibly nice paper."
- CTAs: "Try 7 Days Free", "Get started", "See the new issue", "Join"
- Casing: uppercase in UI labels and titles, sentence case in prose.

## 10. Do's and Don'ts

**Do**

- Use white pages, `#323232` text and one blue, `#001489`.
- Set titles, buttons and nav in uppercase Riforma 500.
- Keep corners square (0-2px).
- Let film stills run large and uncropped; use the still's colour for loading.
- Use Tiempos for long-form editorial.
- Separate list items with `#EAEAEA` hairlines.

**Don't**

- Don't add rounded cards, pills or drop shadows.
- Don't introduce a second UI accent; GO red is for MUBI GO only.
- Don't crowd the page with rows of tiny posters.
- Don't set Notebook body copy in Riforma.
- Don't recolour or rearrange the dot mark.
- Don't write hype; MUBI copy is short and opinionated.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of MUBI. White background, text `#323232`, secondary `#666666`, meta `#9B9B9B`, dividers `#EAEAEA`. One accent: MUBI Blue `#001489` (hover `#001AAF`) for buttons and links. Font Riforma LL with Inter as the fallback; Tiempos (fallback Source Serif 4) for long-form articles. Titles, buttons, nav and labels are uppercase Riforma 500: hero 60px, film title 30px, section 24px, nav 14px. Body 16px 400. Buttons are square (radius 0), 50px tall, blue fill, white uppercase text, padding 13px 25px, 18px on desktop. Inputs 50px, 1px `#C8C8C8` border, radius 0, focus border `#001489` and fill `#F6F6F6`. Show film stills large with a dark bottom gradient and white uppercase titles; use the still's dominant colour as the loading placeholder. Header is 60px, transparent over heroes, white with a `#EAEAEA` bottom rule elsewhere. Breakpoints 810, 1186, 1562px. No shadows, no pills, 200-400ms fades.

```css
:root {
  --brand-blue: #001489;
  --brand-blue-hover: #001AAF;
  --brand-bg: #FFFFFF;
  --brand-ink: #323232;
  --brand-black: #000000;
  --brand-grey-666: #666666;
  --brand-grey-7d: #7D7D7D;
  --brand-grey-9b: #9B9B9B;
  --brand-silver: #C8C8C8;
  --brand-rule: #EAEAEA;
  --brand-mist: #F6F6F6;
  --brand-go-red: #FF4238;
  --brand-go-pink: #FFA49B;
  --brand-go-yellow: #FFC000;
  --brand-error: #B00000;
  --brand-font: "Riforma LL", "Inter", Helvetica, Arial, sans-serif;
  --brand-font-serif: "Tiempos Text", "Source Serif 4", Georgia, serif;
  --brand-font-headline: "Tiempos Headline", "Source Serif 4", Georgia, serif;
  --brand-radius: 0px;
  --brand-radius-small: 2px;
  --brand-button-height: 50px;
  --brand-header-height: 60px;
  --brand-focus: inset 0 0 0 2px #001489;
  --brand-fade: 400ms;
  --brand-duration: 200ms;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by MUBI.
