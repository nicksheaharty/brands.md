---
name: Apple News
slug: apple-news
url: https://www.apple.com/apple-news/
category: News
tagline: "Native iOS news feed: SF Pro, red section titles, rounded story cards and publisher logos."
updated: 2026-11-16
appStoreId: 1066498020
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: News Red
    hex: "#F73558"
    role: Section titles, tint color, News+ accents (approximate in-app value)
  - name: Icon Red Start
    hex: "#FD3159"
    role: App icon gradient, bottom stop
  - name: Icon Red End
    hex: "#FD5464"
    role: App icon gradient, top stop
  - name: Label
    hex: "#1D1D1F"
    role: Headlines and primary text
  - name: White
    hex: "#FFFFFF"
    role: Light mode background, cards
  - name: Black
    hex: "#000000"
    role: Dark mode background
  - name: Secondary Label
    hex: "#6E6E73"
    role: Publisher names, timestamps, captions
  - name: Tertiary Label
    hex: "#86868B"
    role: Placeholder, disabled, chevrons
  - name: Grouped Background
    hex: "#F5F5F7"
    role: Feed background behind cards, search
  - name: Separator
    hex: "#D2D2D7"
    role: Hairlines between rows
  - name: Dark Card
    hex: "#1C1C1E"
    role: Dark mode cards and sheets
  - name: Link Blue
    hex: "#0066CC"
    role: Links on apple.com and in articles
  - name: Action Blue
    hex: "#0071E3"
    role: apple.com buttons
fonts:
  display:
    family: "SF Pro Display"
    fallback: "Inter"
    weights: [600, 700, 800]
  body:
    family: "SF Pro Text"
    fallback: "Inter"
    weights: [400, 600]
typeScale:
  - { role: Large title, size: 34, weight: 700, lineHeight: 1.21, tracking: "0.011em" }
  - { role: Section title, size: 22, weight: 700, lineHeight: 1.27, tracking: "-0.016em" }
  - { role: Lead headline, size: 24, weight: 700, lineHeight: 1.17, tracking: "-0.01em" }
  - { role: Card headline, size: 17, weight: 600, lineHeight: 1.29, tracking: "-0.024em" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.47, tracking: "-0.024em" }
  - { role: Subheadline, size: 15, weight: 400, lineHeight: 1.33, tracking: "-0.016em" }
  - { role: Footnote, size: 13, weight: 400, lineHeight: 1.38, tracking: "-0.006em" }
  - { role: Caption, size: 12, weight: 600, lineHeight: 1.33, tracking: "0" }
radii: { sm: 8, md: 12, lg: 18, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Card, value: "0 2px 12px rgba(0,0,0,0.08)" }
  - { name: Sheet, value: "0 0 12px 0 rgba(0,0,0,0.1)" }
preview:
  bg: "#F5F5F7"
  surface: "#FFFFFF"
  text: "#1D1D1F"
  muted: "#6E6E73"
  border: "#D2D2D7"
  accent: "#F73558"
  accentText: "#FFFFFF"
  radius: 12
  buttonStyle: pill
---

# Apple News

This file describes the Apple News app interface on iPhone, iPad and Mac, plus its marketing page on apple.com. Apple News is an aggregator: stories come from many publishers and keep their own logos and images, while Apple supplies the frame, feed and type system.

## 1. Visual Theme & Atmosphere

Apple News is a native Apple app first. It uses the system font (SF Pro), system colors and standard iOS navigation, with one distinctive accent: a pink-red that colors section titles like "Top Stories" and "Trending Stories", the app icon and News+ highlights.

What makes it recognisable:

- **The Today feed.** A vertical scroll headed by a large "News" title with the Apple logo and the date, then grouped sections. Each section starts with a bold red title.
- **Big, rounded story cards.** Lead stories are full-width images with 12-18px rounded corners, the publisher's own logo above the headline, and a timestamp below.
- **Publisher logos as type.** Each story shows the source's wordmark (as a small image) instead of a text byline, so the feed has many brand voices inside one neutral frame.
- **System chrome.** Bottom tab bar ("Today", "News+", "Audio", "Sports", "Following" or similar), translucent material backgrounds, large titles that collapse into a compact navigation bar on scroll.
- **Light and dark.** Full support for both. Dark mode uses true black backgrounds with `#1C1C1E` cards.

Density: comfortable. Generous 16-20px margins and clear grouping make the feed easy to skim.

## 2. Color Palette & Roles

Light values for text and surfaces come from apple.com's Apple News page CSS (`#1D1D1F`, `#F5F5F7`, `#6E6E73`, `#86868B`). The icon gradient comes from the official icon artwork. The in-app red tint is approximate.

| Name | Hex | Role |
|---|---|---|
| News Red | `#F73558` | Section titles, tint, News+ accents (approximate) |
| Icon Red Start | `#FD3159` | App icon gradient bottom |
| Icon Red End | `#FD5464` | App icon gradient top |
| Label | `#1D1D1F` | Headlines, primary text |
| Secondary Label | `#6E6E73` | Publisher line, timestamps |
| Tertiary Label | `#86868B` | Placeholders, chevrons |
| Separator | `#D2D2D7` | Row hairlines, accordion borders |
| Grouped Background | `#F5F5F7` | Feed and grouped table background |
| White | `#FFFFFF` | Cards and plain background |
| Link Blue | `#0066CC` | Links on apple.com |
| Action Blue | `#0071E3` | apple.com primary buttons |

### Dark mode (system values, approximate)

| Role | Hex |
|---|---|
| Background | `#000000` |
| Card / grouped surface | `#1C1C1E` |
| Raised surface | `#2C2C2E` |
| Label | `#FFFFFF` |
| Secondary label | `#98989D` |
| Separator | `#38383A` |
| Red tint | slightly lighter, about `#FF375F` |

### Semantic

- Live and breaking labels: red text "LIVE" with a red dot, or a red capsule with white text.
- Saved / followed state: filled icon in the tint color.
- Errors follow the iOS system red.

## 3. Typography

Apple News uses Apple's system families:

- **SF Pro Display** for sizes 20px and up (titles, lead headlines).
- **SF Pro Text** for sizes below 20px (body, captions, UI).
- **New York**, Apple's serif, appears in some article layouts and News+ magazine views.

These are licensed for Apple platforms only. Free fallbacks: **Inter** for SF Pro, **Source Serif 4** for New York. On the web, use the system stack first:

```css
--brand-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, "Helvetica Neue", Arial, sans-serif;
--brand-font-serif: "New York", ui-serif, "Source Serif 4", Georgia, serif;
```

### Scale (iOS Dynamic Type defaults at Large size)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Large title ("News") | 34px | 700 | 41px | 0.37px |
| Lead story headline | 24px | 700 | 28px | -0.24px (approximate) |
| Section title ("Top Stories") | 22px | 700 | 28px | -0.35px |
| Title 3 | 20px | 600 | 25px | -0.45px |
| Card headline (Headline) | 17px | 600 | 22px | -0.41px |
| Body | 17px | 400 | 22-25px | -0.41px |
| Subheadline | 15px | 400 | 20px | -0.24px |
| Footnote (timestamp) | 13px | 400 | 18px | -0.08px |
| Caption 1 | 12px | 400-600 | 16px | 0 |

The site and app respect Dynamic Type; never fix sizes where the user can change them.

### Rules

- Headlines are sentence case as supplied by the publisher.
- Section titles are short title-case phrases ("Top Stories", "Trending Stories", "For You").
- Tight negative tracking at body sizes is part of SF Pro's built-in optical tracking; when using Inter, apply about -0.01em.

## 4. Logo & Brand Mark

The app icon is a **white rounded square with a red "N"-like mark**: two red shapes with a diagonal white band between them, the red running from `#FD5464` at the top to `#FD3159` at the bottom. The wordmark lockup is the **Apple logo followed by "News"** in SF Pro, black on light and white on dark.

- **Icon:** follows the Apple app icon grid; corners are applied by the system.
- **Lockup:** Apple logo plus "News" in the same color; do not separate.
- **Clear space:** at least the height of the "N" around the lockup.
- **Minimum size:** icon 29pt; lockup about 60px wide.

Misuse:

- Do not recolor the icon mark or reverse the gradient.
- Do not set "Apple News" in another typeface.
- Do not imitate the icon for a different product.
- Do not use the Apple logo on its own as a stand-in for News.

## 5. Components

### Navigation

- **Large title bar:** "News" with Apple logo at 34px/700 plus the date in 15px Secondary Label beneath; collapses to a 17px/600 centred title in a translucent bar on scroll.
- **Tab bar:** bottom, 49px plus safe area, SF Symbols icons at about 25pt with 10px labels; selected tab in the red tint, others `#86868B`. Translucent material background (`backdrop-filter: blur(20px) saturate(180%)`).
- **iPad and Mac:** a left sidebar lists Today, News+, Audio, Sports, Following and saved channels, with SF Symbols and the red tint for the selected row.

### Story cards

```css
.an-card { background: #FFFFFF; border-radius: 12px; overflow: hidden; }
.an-card img { aspect-ratio: 16/9; width: 100%; object-fit: cover; }
.an-card .publisher { height: 16px; margin: 12px 16px 4px; }  /* publisher logo image */
.an-card h3 { font: 600 17px/22px var(--brand-font); letter-spacing: -0.41px; color: #1D1D1F; margin: 0 16px; }
.an-card .meta { font: 400 13px/18px var(--brand-font); color: #6E6E73; margin: 6px 16px 14px; }
```

Variants:

- **Lead card:** full-width image, publisher logo, headline 22-24px/700.
- **Standard row:** headline and publisher on the left, square thumbnail (about 80-96px, 8px radius) on the right, hairline separator.
- **Group card:** 2-4 stories under one red section title, separated by 0.5px `#D2D2D7` lines.
- **"More" menu:** an ellipsis button on each card opens a context menu (Share, Save, Suggest More, Suggest Less, Block channel).

### Section header

Red 22px/700 title left, optional "See more" or chevron on the right in the red tint. 24-32px space above, 8-12px below.

### Article view

- Publisher-designed header: the publisher's logo and fonts appear inside the article (Apple News Format lets publishers set their own type and colors).
- Default template: headline 28-34px bold, byline and date in 13-15px Secondary Label, full-width hero image, body 17-19px with 1.47 line height.
- Pull quotes, captions and galleries follow the publisher's template; captions default to 13px Secondary Label.
- Bottom toolbar: back, Aa (text size), share, save, and "More" actions.

### News+ and magazines

Magazine covers display as tall portrait cards in horizontal carousels with 8px radius and a subtle shadow. The News+ tab uses the red tint for headers and buttons. Do not show prices.

### Live and sports

- Live scores and live coverage show a small red "LIVE" label with a dot.
- Sports scoreboards use team logos, tabular figures in SF Pro, and pill-shaped segmented controls.

### Buttons

| Variant | Style |
|---|---|
| Filled (in-app) | Red tint background, white 17px/600, capsule (pill) |
| Tinted | `rgba(247,53,88,0.15)` background, red text, capsule |
| Plain | Red text, no background |
| apple.com CTA | `#0071E3` background, white 17px, 980px radius |

Focus on web: `0 0 0 4px rgba(0,125,250,0.6)`.

### Audio

The Audio tab lists narrated stories as rows with square artwork (12px radius), title, publisher and duration, with a persistent mini player above the tab bar.

## 6. Layout & Spacing

- **Phone margins:** 16-20px horizontal; cards span edge to edge minus margins.
- **Card gaps:** 12-16px between cards, 24-32px between sections.
- **iPad:** two- or three-column feed with a sidebar.
- **Mac:** sidebar plus a multi-column grid up to about 1200px.
- **apple.com page:** content width 980px (1068px breakpoint), 734px and 1068px breakpoints, section padding 80-140px.
- **Spacing base:** 4pt grid (4, 8, 12, 16, 20, 24, 32, 48).

## 7. Depth, Elevation & Motion

- Cards mostly sit flat on the grouped background; some contexts add `0 2px 12px rgba(0,0,0,0.08)` (approximate).
- Materials: translucent nav and tab bars with background blur.
- Sheets slide up with iOS spring physics; context menus use the system lift-and-blur.
- Large title collapse is tied to scroll position.
- Respect Reduce Motion and Reduce Transparency.

## 8. Iconography & Imagery

- **Icons:** SF Symbols, regular or semibold weight, matched to text size. Common: `newspaper`, `heart`, `bookmark`, `square.and.arrow.up`, `ellipsis`, `headphones`, `sportscourt`.
- **Imagery:** supplied by publishers; Apple crops to 16:9, 4:3 or square depending on layout. No overlays except gradients behind white text on hero images.
- **Publisher logos:** displayed at a consistent small height above headlines; must be crisp at 2x and 3x.
- **Magazine covers:** shown whole, never cropped.

## 9. Voice & Microcopy

Neutral Apple UI voice: short, plain, helpful. Editorial voice belongs to the publishers.

- Section titles: "Top Stories", "Trending Stories", "For You", "Editors' Picks".
- Menu actions: "Save Story", "Share Story", "Suggest More Stories Like This", "Block Channel".
- Empty states: "No Saved Stories" with a one-line explanation.
- Settings: "Restrict Stories in Today".

## 10. Do's and Don'ts

**Do**

- Use system fonts, system colors and standard navigation patterns.
- Mark sections with bold red titles and keep everything else neutral.
- Show the publisher's logo on every story card.
- Round cards at 12px and images inside rows at 8px.
- Support light, dark and Dynamic Type.

**Don't**

- Don't brand stories with Apple colors; publishers keep their identity.
- Don't use red for long text or backgrounds.
- Don't fix font sizes or ignore safe areas.
- Don't put heavy shadows on cards.
- Don't crop magazine covers.

## 11. Agent Prompt Guide

> Build this UI in the style of Apple News on iOS. Use the system font stack (SF Pro, fallback Inter). Light grouped background `#F5F5F7`, white cards with 12px radius, primary text `#1D1D1F`, secondary text `#6E6E73`, hairlines `#D2D2D7`. A large 34px/700 "News" title with the date beneath, collapsing into a translucent blurred nav bar on scroll. Feed sections start with bold red titles (`#F73558`, 22px/700) like "Top Stories". Lead cards: full-width 16:9 image, small publisher logo image, 22-24px/700 headline, 13px timestamp. Standard rows: 17px/600 headline left, 88px square thumbnail right with 8px radius, separated by hairlines. Bottom tab bar with SF Symbols, selected tab in the red tint. Capsule buttons in the red tint with white text. Support dark mode: black background, `#1C1C1E` cards, white text.

```css
:root {
  --brand-red: #F73558;
  --brand-icon-red-start: #FD3159;
  --brand-icon-red-end: #FD5464;
  --brand-label: #1D1D1F;
  --brand-label-secondary: #6E6E73;
  --brand-label-tertiary: #86868B;
  --brand-separator: #D2D2D7;
  --brand-bg-grouped: #F5F5F7;
  --brand-card: #FFFFFF;
  --brand-link: #0066CC;
  --brand-action-web: #0071E3;
  --brand-dark-bg: #000000;
  --brand-dark-card: #1C1C1E;
  --brand-dark-raised: #2C2C2E;
  --brand-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, "Helvetica Neue", Arial, sans-serif;
  --brand-font-serif: "New York", ui-serif, "Source Serif 4", Georgia, serif;
  --brand-radius-thumb: 8px;
  --brand-radius-card: 12px;
  --brand-radius-large: 18px;
  --brand-radius-pill: 9999px;
  --brand-margin: 16px;
  --brand-shadow-card: 0 2px 12px rgba(0,0,0,0.08);
  --brand-material: saturate(180%) blur(20px);
}
@media (prefers-color-scheme: dark) {
  :root {
    --brand-bg-grouped: #000000;
    --brand-card: #1C1C1E;
    --brand-label: #FFFFFF;
    --brand-label-secondary: #98989D;
    --brand-separator: #38383A;
  }
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Apple.
