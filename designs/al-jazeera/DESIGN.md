---
name: Al Jazeera
slug: al-jazeera
url: https://aljazeera.com
category: News
tagline: "Gold calligraphy emblem, custom Al-Jazeera sans, blue links and red live tickers on white."
updated: 2026-11-16
appStoreId: 1534955972
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Al Jazeera Gold
    hex: "#FA9000"
    role: Logo emblem and wordmark, brand moments
  - name: Black
    hex: "#000000"
    role: Headlines, nav links, body text
  - name: Primary Blue
    hex: "#32A2EF"
    role: Brand blue, accents, RTL buttons
  - name: Live Red
    hex: "#C31833"
    role: Breaking ticker surface, live badges
  - name: Primary Dark Blue
    hex: "#118ADD"
    role: Links, active states, icons
  - name: White
    hex: "#FFFFFF"
    role: Page and nav background
  - name: Main Grey
    hex: "#595959"
    role: Timestamps, captions, secondary text
  - name: Hyperlink Blue
    hex: "#145587"
    role: In-article hyperlinks
  - name: Original Navy
    hex: "#011F75"
    role: Original programming and deep brand blue
  - name: Ticker Pink Red
    hex: "#D71C45"
    role: Ticker accents and alerts
  - name: Secondary Yellow
    hex: "#FEC300"
    role: Secondary highlight
  - name: Border Grey
    hex: "#E5E5E5"
    role: Dividers, tab rules
  - name: Surface Grey
    hex: "#F0F0F0"
    role: Module backgrounds, skeletons
  - name: Charcoal
    hex: "#333333"
    role: Dark UI text and icons
fonts:
  display:
    family: "Al-Jazeera"
    fallback: "Roboto"
    weights: [400, 600, 700]
  body:
    family: "Al-Jazeera"
    fallback: "Roboto"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 44, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Top story headline, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Card title, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Article body, size: 22, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Deck, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: UI, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Ticker label, size: 14, weight: 600, lineHeight: 1.375, tracking: "0.025em" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 10, lg: 20, pill: 100 }
spacing: [4, 8, 15, 16, 24, 30, 48, 64]
shadows:
  - { name: Card, value: "0 2px 2px 0 rgba(0,0,0,0.16)" }
  - { name: Soft, value: "0 2px 12px 0 rgba(0,0,0,0.1)" }
  - { name: Sticky nav, value: "0 2px 4px -4px rgba(0,0,0,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#000000"
  muted: "#595959"
  border: "#E5E5E5"
  accent: "#118ADD"
  accentText: "#FFFFFF"
  radius: 10
  buttonStyle: solid
---

# Al Jazeera

This file describes Al Jazeera English at aljazeera.com. Arabic and other language editions share the logo and many components but use right-to-left layouts and their own type settings.

## 1. Visual Theme & Atmosphere

Al Jazeera's site is clean, wide and photo-driven, with a very recognisable brand mark: a gold Arabic calligraphy emblem that forms the channel's name. Around that mark the interface is restrained: white backgrounds, black headlines in the network's own sans, blue for links and red for live news.

What makes it recognisable:

- **The calligraphic emblem.** Gold `#FA9000` Arabic calligraphy shaped like a flame or droplet. In the header it sits on a gold square next to the spaced "ALJAZEERA" wordmark.
- **A custom house sans.** The "Al-Jazeera" typeface handles Latin and Arabic with matched proportions. Card titles are set at regular weight (400), which gives the homepage a lighter, calmer texture than most news sites.
- **Red live surfaces.** Breaking tickers are rounded red panels (`#C31833`, 12px radius) with a pulsing white dot and uppercase labels. Live badges on video use the same red.
- **Rounded corners on media.** Images, video tiles and modules commonly use a 10px radius; pills use 100px.
- **Video everywhere.** Live stream player, vertical video carousels, and play badges sit alongside articles.

Density: medium. The homepage leads with a large top story and a column of related headlines, followed by sectioned rows.

## 2. Color Palette & Roles

Hex values come from production CSS variables (`--primary-color`, `--ticker-color` and others).

| Name | Hex | Role |
|---|---|---|
| Al Jazeera Gold | `#FA9000` | Emblem, wordmark, geo-block CTA, brand moments |
| Primary Blue (`--primary-color`) | `#32A2EF` | Brand blue, RTL buttons |
| Primary Dark Blue (`--primary-dark-color`) | `#118ADD` | Links, active tabs, icons |
| Primary Light Blue | `#9FC9E6` | Light blue tints |
| Hyperlink (`--hyperlink-color`) | `#145587` | Links in article body |
| Original Navy (`--original-color`) | `#011F75` | Original programming |
| Secondary Yellow (`--secondary-color`) | `#FEC300` | Secondary highlight |
| Ticker (`--ticker-color`) | `#D71C45` | Ticker accent |
| Live Red | `#C31833` | Breaking ticker surface, live badges |
| Black | `#000000` | Headlines, nav links, body |
| Charcoal | `#333333` | Dark UI text and carousel icons |
| Main Grey (`--main-grey-color`) | `#595959` | Timestamps, captions, secondary text |
| Mid Grey | `#969696` | Disabled, placeholder |
| Silver | `#BEBEBE` | Muted text on dark, borders |
| Border Grey | `#E5E5E5` | Dividers, tab rules |
| Surface Grey | `#F0F0F0` | Module fills, skeletons |
| Off White | `#F7F7F7` | Subtle panels |
| White | `#FFFFFF` | Page, nav |
| Dark Navy | `#0C2639` | Live stream geo-block panel |

### Semantic

| State | Value |
|---|---|
| Breaking / live | `#C31833` surface, white text, pulsing white dot |
| Link | `#118ADD` in UI, `#145587` inside article body |
| Focus | outline in Primary Blue, or `0 0 0 1px #888, 0 0 0 6px rgba(247,247,247,0.75)` on controls |

### Dark surfaces

The live stream player and video pages use black backgrounds with white text, `#BEBEBE` meta text, and white outline pill buttons. There is no general dark mode on the website.

## 3. Typography

**Al-Jazeera** is the network's proprietary typeface, used for Latin and Arabic scripts. Roboto is also loaded for some UI. Article body uses the same family (`--font-family-article-body`).

Free fallbacks: **Roboto** or **IBM Plex Sans** for Latin, **IBM Plex Sans Arabic** or **Noto Kufi Arabic** for Arabic.

```css
--font-family: "Al-Jazeera", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-family-article-body: "Al-Jazeera", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Article headline | 44px desktop, 30px mobile (approximate) | 700 | 1.2 | 0 |
| Top story headline | 32px (approximate) | 700 | 1.25 | 0 |
| Section heading | 24px (approximate) | 700 | 1.3 | 0 |
| Card title | 20px desktop, 18px mobile | 400 | 1.5 (`--leading-headline`) | 0 |
| Article body | 22px desktop, 20px mobile | 400 | about 1.6 (approximate) | 0 |
| Standfirst / deck | 20px (approximate) | 400 | 1.5 | 0 |
| Tabs and UI | 16px | 400, 700 active | 1 | 0 |
| Ticker label | 14px, 12px compact | 600-700 uppercase | 1.375 | 0.025em |
| Ticker headline | 14px | 400 | 1.5 | -0.14px |
| Badge / caption | 12-14px | 400-700 | 1.5 | 0 |

### Rules

- Card titles are regular weight; weight is not used to rank stories, size and position are.
- Article body is large (22px) for readability on desktop.
- Uppercase only for tickers, live badges and small labels.
- In RTL editions, mirror all layouts (`html[dir=rtl]`) and swap the gold CTA for Primary Blue as the site does.

## 4. Logo & Brand Mark

The logo combines the **calligraphic emblem**, a stylised Arabic rendering of "Al Jazeera" in a teardrop form, with the Latin wordmark **ALJAZEERA** in spaced capitals. On aljazeera.com the emblem is reversed out in white on a gold `#FA9000` square, with the wordmark in gold to the right.

- **Color versions:** gold emblem on white or dark; white emblem on gold square; all white on photos and video.
- **Emblem alone:** used as the app icon (white on gold), on-screen bug and favicon.
- **Clear space:** at least a quarter of the emblem's height around it.
- **Minimum size:** emblem about 24px tall on screen.

Misuse:

- Do not redraw or retype the calligraphy.
- Do not recolor the emblem outside gold, white or black.
- Do not place the gold emblem on mid-tone orange or busy imagery.
- Do not separate the gold square from the emblem in the header lockup.

## 5. Components

### Header and navigation

- White bar (`--navigation-bar-background: #fff`), about 60-70px tall, logo lockup left.
- Horizontal menu: "News", "Middle East", "Explained", "Opinion", "Sport", "Video", "More" in 16px black (`--navigation-bar-link-color: #000`), submenus on hover with a small caret.
- Right side: "Live" button with a red dot, search icon, account icon.
- Sticky on scroll with `box-shadow: 0 2px 4px -4px rgba(0,0,0,0.5)`.

### Breaking ticker (signature)

```css
.breaking-ticker { background: #C31833; border-radius: 12px; overflow: hidden; }
.breaking-ticker__pill { display: flex; align-items: center; gap: 16px; padding: 10px 16px; }
.breaking-ticker__dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; }
.breaking-ticker__dot::before { /* 10px ring, opacity .75, ping 1s cubic-bezier(0,0,.2,1) infinite */ }
.breaking-ticker__heading { font: 600 14px/1.375 var(--font-family); letter-spacing: .025em; text-transform: uppercase; color: #fff; }
.breaking-ticker__headline { font: 400 14px/1.5 var(--font-family); color: #fff; }
```

The ticker expands after an 800ms delay to show more headlines, with a 24px round action button on the right.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#118ADD` | `#FFFFFF` 16px/700 | none | 100px | 8px 20px |
| Gold CTA | `#FA9000` | `#FFFFFF` | none | 0-4px | 5px 45px |
| Outline on dark | `#000000` | `#FFFFFF` 16px | 1px `#FFFFFF` | 100px | 0 12px, 30px tall |
| Carousel nav | `#FFFFFF` | icon `#333333` | none | 50% | 44px circle |
| Text link | none | `#118ADD` | none | 0 | 0 |

Hover: darken blue about 10%; text links underline. Focus: visible outline in Primary Blue.

### Article cards

- **Top story:** large 3:2 image with 10px radius, 32px/700 headline, short excerpt, then 2-3 related headlines with a 4px divider bar.
- **Standard card:** image left (or top on mobile) with 10px radius, title 18-20px/400, date in 14px `#595959`.
- **Quick-read card:** text only with a small icon (quote, play, gallery) in a 4px padded badge.
- **Video card:** play badge bottom-left, duration in a dark pill.
- Cards are borderless; hover underlines the title (`text-decoration` transition .15s linear).

### Article page

- Topic label above headline in 14px uppercase.
- Headline 44px/700, standfirst 20px `#333333`.
- Byline block: author name linked, "Published On" date in `#595959`, share icons in circles.
- Lead image full width of a 770px column, caption 14px `#595959`.
- Body 22px/400, black, links `#145587` underlined.
- **Pull quote:** large quote-mark icon, 24-28px text, 4px left border (approximate).
- "Recommended" boxes within the body use a grey `#F7F7F7` panel and a question/arrow icon.
- Source line at the end in 20px (`--article-source-font-size`).

### Live blog

- Live blog header with a red "LIVE" pill and tabs ("Live updates", "Key events") using a 2px black underline for the active tab (`.tab-list--live-blog`).
- Each post: timestamp, 20px/700 heading, body, share link; separated by 1px `#E5E5E5`.
- Live badge: `#C31833`, white 12-14px/700 uppercase, 10px radius, 4px 10px padding.

### Newsletters

Newsletter sign-up blocks sit in `#F0F0F0` panels with 10px radius: title 20-24px/700, description, email input (1px `#BEBEBE`, 4px radius) and a blue pill button.

### Vertical video carousel

140px wide tiles on desktop, 225px on mobile, 9:16 ratio, 10px radius, Swiper arrows centred on the tile height.

## 6. Layout & Spacing

- **Max width:** 1200px desktop container; article column 770px.
- **Breakpoints:** 768px and 992px (`max-width: 991.98px`) are the main switches; three-column homepage collapses to one below 992px.
- **Spacing:** 15px is a recurring unit (`--spacing: 15px`), with 30px section margins and 16px component gaps.
- **Images:** 3:2 default (`--responsive-image-ratio: 3/2`), square and 2:3 variants for portraits.
- **Homepage:** a three-column layout: top story and featured column, a central stack, and a sidebar with most-read and surveys.

## 7. Depth, Elevation & Motion

| Use | Value |
|---|---|
| Card | `0 2px 2px 0 rgba(0,0,0,0.16)` |
| Soft panel | `0 2px 12px 0 rgba(0,0,0,0.1)` |
| Sticky nav | `0 2px 4px -4px rgba(0,0,0,0.5)` |
| Subtle | `0 4px 6.8px 0 rgba(0,0,0,0.04)` |

Motion: ticker dot pings every 1s; ticker expand uses `.3s ease-out` after an 800ms delay; title underline transitions over `.15s linear`; carousels slide with Swiper defaults.

## 8. Iconography & Imagery

- **Icons:** custom icon set (`icon--*`) at 16-24px, solid glyphs in black, `#333333` or `#118ADD`. Post-type icons (quote, video, gallery, audio) mark card types.
- **Photography:** agency and staff photography with a global scope. Images use 10px rounded corners on cards and are shown at full color.
- **Video stills:** gradient overlays at the bottom (`--with-gradient`) to carry white titles.
- **Explainers and graphics:** flat maps and data graphics using the blue and gold palette.

## 9. Voice & Microcopy

Plain and descriptive, written for an international audience. Interface labels are short.

- Sentence case for headlines and buttons; uppercase only in tickers and badges.
- Dates written out: "Published On 16 Nov 2026".
- CTAs: "Watch live", "Sign up", "Read more", "Show more".

Sample strings:

- Ticker: "BREAKING" then the headline
- Badge: "LIVE"
- Tabs: "Live updates", "Key events"
- Newsletter: "Sign up for Al Jazeera" and "Weekly newsletter"

## 10. Do's and Don'ts

**Do**

- Use the gold emblem as the brand anchor and keep the rest of the UI neutral.
- Set card titles at regular weight with generous line height.
- Use rounded red panels for breaking news and live states.
- Round media and modules at 10px, pills at 100px.
- Support right-to-left layouts by mirroring rather than redesigning.

**Don't**

- Don't use gold for links or general buttons.
- Don't set card titles in bold.
- Don't add sharp-cornered boxes next to rounded media.
- Don't mix the ticker red with other reds in the same view.
- Don't retype or recolor the calligraphy.

## 11. Agent Prompt Guide

> Build this UI in the style of Al Jazeera English. White page, black text, a gold `#FA9000` calligraphic emblem on a gold square next to a spaced "ALJAZEERA" wordmark in the header. Font: "Al-Jazeera", fallback Roboto. Card titles 18-20px at weight 400 with 1.5 line height; article headline about 44px/700; article body 22px/400. Links `#118ADD` in UI and `#145587` in body. Breaking news is a rounded `#C31833` panel (12px radius) with a pulsing white dot and an uppercase 14px/600 label with 0.025em tracking. Images and modules use 10px radius, pill buttons 100px. Light shadows `0 2px 2px rgba(0,0,0,0.16)`. Timestamps and captions in `#595959`, dividers `#E5E5E5`, grey panels `#F0F0F0`. Container 1200px, article column 770px, 15px spacing unit, 3:2 images.

```css
:root {
  --brand-gold: #FA9000;
  --brand-blue: #32A2EF;
  --brand-blue-dark: #118ADD;
  --brand-blue-light: #9FC9E6;
  --brand-link: #145587;
  --brand-navy: #011F75;
  --brand-yellow: #FEC300;
  --brand-live: #C31833;
  --brand-ticker: #D71C45;
  --brand-black: #000000;
  --brand-charcoal: #333333;
  --brand-grey: #595959;
  --brand-grey-mid: #969696;
  --brand-silver: #BEBEBE;
  --brand-border: #E5E5E5;
  --brand-surface: #F0F0F0;
  --brand-surface-alt: #F7F7F7;
  --brand-white: #FFFFFF;
  --brand-font: "Al-Jazeera", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 10px;
  --brand-radius-ticker: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 100px;
  --brand-spacing: 15px;
  --brand-shadow-card: 0 2px 2px 0 rgba(0,0,0,0.16);
  --brand-shadow-soft: 0 2px 12px 0 rgba(0,0,0,0.1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Al Jazeera.
