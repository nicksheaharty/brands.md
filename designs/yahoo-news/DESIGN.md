---
name: Yahoo News
shortName: Yahoo News
slug: yahoo-news
url: https://news.yahoo.com
category: News
tagline: "Purple yahoo!news wordmark, warm off-white feed, pill buttons and photo-led story cards."
updated: 2026-11-16
appStoreId: 304158842
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Yahoo Purple
    hex: "#7D2EFF"
    role: Logo "yahoo!", brand foreground, active nav, brand buttons
  - name: Batcave
    hex: "#232A31"
    role: Logo "news", dark chrome text
  - name: Grape Jelly
    hex: "#6001D2"
    role: Focus ring, link hover, legacy brand purple
  - name: Ink
    hex: "#1A1919"
    role: Primary text (carbon-15)
  - name: Warm Paper
    hex: "#F9F8F7"
    role: Page background behind cards (carbon-0, approximate)
  - name: White
    hex: "#FEFEFE"
    role: Header, cards, article column (gray-0)
  - name: Secondary Text
    hex: "#3A3939"
    role: Decks, secondary labels (carbon-13)
  - name: Muted
    hex: "#676665"
    role: Timestamps, bylines, read time (carbon-9)
  - name: Divider
    hex: "#E0E4E9"
    role: Hairlines and card borders (dirty seagull)
  - name: Midnight
    hex: "#101518"
    role: Dark mode chrome, sidebar in dark mode
  - name: Purple Tint
    hex: "#F3F0FE"
    role: Brand secondary background, selected chips
  - name: Alert Red
    hex: "#C62626"
    role: Breaking and live labels, errors
  - name: Positive Green
    hex: "#017647"
    role: Market up, success
  - name: Info Blue
    hex: "#3265B7"
    role: Informational notices
fonts:
  display:
    family: "Centra No2"
    fallback: "DM Sans"
    weights: [500, 700, 800]
  body:
    family: "YA Sans"
    fallback: "Inter"
    weights: [400, 500, 600, 700]
  mono:
    family: "Roboto Mono"
    fallback: "Roboto Mono"
    weights: [400]
typeScale:
  - { role: Display 1, size: 56, weight: 700, lineHeight: 1.14, tracking: "-2px" }
  - { role: Article headline, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Hero card title, size: 30, weight: 550, lineHeight: 1.2, tracking: "-0.6px" }
  - { role: Headline 1, size: 28, weight: 600, lineHeight: 1.29, tracking: "0" }
  - { role: Title 2, size: 20, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Article body, size: 18, weight: 400, lineHeight: 1.78, tracking: "0" }
  - { role: UI label, size: 14, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.38, tracking: "0.2px" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Elevation 1, value: "0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)" }
  - { name: Elevation 2, value: "0 0 1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.08), 0 4px 8px -2px rgba(0,0,0,0.06)" }
  - { name: Elevation 4, value: "0 0 1px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.07), 0 10px 20px -4px rgba(0,0,0,0.12), 0 16px 32px -8px rgba(0,0,0,0.08)" }
preview:
  bg: "#F9F8F7"
  surface: "#FEFEFE"
  text: "#1A1919"
  muted: "#676665"
  border: "#E0E4E9"
  accent: "#7D2EFF"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: pill
---

# Yahoo News

## 1. Visual Theme & Atmosphere

Yahoo News is a high-volume aggregator that has been redesigned on Yahoo's Universal Design System (UDS). The result is calmer than the old Yahoo portal: a warm, slightly grey off-white page, white cards with soft corners, near-black text and one loud colour, Yahoo Purple, kept for the wordmark and a few brand moments.

The homepage leads with a large photo carousel where white headlines sit directly on the image over a dark gradient. Below that it becomes a feed of mixed story cards: thumbnail-left list items, two- and three-up photo cards, video strips and partner content from wire services and publishers, each tagged with its source.

What makes it recognisable:

- **The wordmark.** Lowercase "yahoo!" in purple `#7D2EFF` followed by "news" in dark slate `#232A31`, both in Yahoo's rounded geometric logotype.
- **Purple used sparingly.** Purple marks brand and selection (logo, active tab underline, focus ring in `#6001D2` at 80%). Body links and buttons are mostly black or neutral.
- **Pill controls.** Buttons, chips, search and icon buttons are fully rounded.
- **Warm neutrals.** The "carbon" greys carry a faint warm cast (`#F9F8F7`, `#F3F2EF`, `#E8E7E4`) rather than blue-grey.
- **Aggregation cues.** Every card shows a source name or logo, a relative time, and often a comment count with a small speech-bubble icon.

Mood: friendly, busy, mainstream, fast to scan.

## 2. Color Palette & Roles

The site exposes two token layers: `--uds-spectrum-color-*` primitives (purple, carbon, gray, red, green, blue, orange ramps from 0 to 15) and semantic `--uds-foreground-*`, `--uds-background-*` tokens that switch for dark mode. Older header code still uses named "ymp" colours (grape jelly, batcave, dolphin, midnight).

| Name | Hex | Token | Role |
|---|---|---|---|
| Yahoo Purple | `#7D2EFF` | purple-9, `fill-uh-purple` | Logo "yahoo!", brand foreground and background |
| Purple 10 | `#6F29E2` | purple-10 | Brand text on light |
| Purple 11 | `#6B27D9` | purple-11 | Brand secondary text, hover |
| Grape Jelly | `#6001D2` | ymp-uh-grape-jelly | Focus outline (80% alpha), nav hover text |
| Purple Tint | `#F3F0FE` | purple-1 | Brand secondary background |
| Purple 3 | `#E2D6FF` | purple-3 | Selected chip fill |
| Batcave | `#232A31` | ymp-uh-batcave | Logo "news", dark slate text |
| Ink | `#1A1919` | carbon-15 | Primary text, primary button fill |
| Carbon 13 | `#3A3939` | carbon-13 | Secondary text |
| Carbon 11 | `#585756` | carbon-11 | Tertiary text |
| Carbon 9 | `#676665` | carbon-9 | Muted text, metadata |
| Carbon 2 | `#E8E7E4` | carbon-2 | Pressed fills |
| Carbon 1 | `#F3F2EF` | carbon-1, elevation-0 | Section bands |
| Warm Paper | `#F9F8F7` | carbon-0 | Page background (approximate which of carbon-0/1 is used per page) |
| White | `#FEFEFE` | gray-0 | Header, cards, article body |
| Dirty Seagull | `#E0E4E9` | ymp-uh-dirty-seagull | Dividers |
| Pebble | `#C7CDD2` | ymp-uh-pebble | Input borders |
| Dolphin | `#6E7780` | ymp-uh-dolphin | Icon fill, secondary icons |
| Midnight | `#101518` | ymp-uh-midnight | Dark mode sidebar and chrome |

### Semantic

| State | Foreground | Background |
|---|---|---|
| Alert / breaking | `#C62626` (red-9) | `#FFEFEB` (red-1) |
| Positive | `#017647` (green-9) | `#DCFCD9` (green-1) |
| Info | `#3265B7` (blue-9) | `#EAF4F9` (blue-1) |
| Warning | `#A64D1F` (orange-9) | `#FFF1E2` (orange-1) |

### Dark mode

The page sets `uds-color-mode-light` or `uds-color-mode-dark` on `<html>`. In dark mode the page is `#100F0F`, cards step up through `#201F1F`, `#282727`, `#2D2C2C`, primary text becomes `#EFEEEC`, brand purple lifts to `#9A6AFF`, and the logo turns white ("news" at 70% opacity). Shadows get much stronger alphas (0.35 to 0.5) so cards still separate.

## 3. Typography

**Families (from the live CSS):**

- **YA Sans** (`"YA Sans VF"`, loaded as `yahooSans`, variable 200 to 900): the default for UI, headlines and body. Weights in use include unusual variable stops such as 450, 550 and 585.
- **Centra No2**: the "sans-alt" family for display sizes, module titles and some compact labels (weights 400, 500, 700, 800).
- **Yahoo Serif Display / Yahoo Serif Text** and **Gelica**: loaded for occasional editorial and promotional moments; not used for standard news text.
- **Roboto Mono**: data and code.

All are proprietary or licensed except Roboto Mono. Substitutes: **Inter** for YA Sans, **DM Sans** for Centra No2. Fallback stack on the site: `"Helvetica Neue", Helvetica, Arial, sans-serif` with metric overrides on Arial.

### Scale (UDS tokens plus article values)

| Role | Size / line height | Weight | Tracking |
|---|---|---|---|
| Display 1 (Centra) | 56 / 64px | 700 | -2px |
| Display 2 (Centra) | 32 / 38px | 700 | 0 |
| Article headline | 26px mobile, 32px desktop, line-height 1.25 | 700 | 0 |
| Hero carousel title | 20 / 22px mobile, 30 / 36px desktop | 600, 550 at desktop | -0.6px |
| Headline 1 | 28 / 36px | 600 | 0 |
| Title 1 | 22 / 28px | 600 | 0 |
| Title 2 | 20 / 24px | 600 | 0 |
| Title 3 (card headline) | 16 / 20px | 600 | 0 |
| Title 4 | 15 / 18px | 500 | 0 |
| Body 1 / article body | 18px, 28px (32px at md) | 400 | 0 |
| Label 3 | 16 / 22px | 500 | 0 |
| UI 3 (buttons, nav) | 14 / 15.4px | 600 | 0 |
| Caption 1 | 13 / 18px | 400 | 0.2px |
| Caption 2 | 12 / 16px | 500 | 0.25px |
| Legal | 11 / 12px | 400 | 0.25px |

### Rules

- Sentence case headlines as supplied by the publisher; bold (600-700) for every headline, body 400.
- Metadata strings are short and muted: "Emma Bussey", "Mon, November 16, 2026 at 12:17 AM UTC", "4 min read".
- Numbers in market tickers use tabular figures.

## 4. Logo & Brand Mark

The Yahoo News logo is the 2019 Yahoo logotype ("yahoo!" in a custom rounded, slightly slanted sans with an angled exclamation mark) followed by "news" set in the same drawing. On the site it is a 124 x 20 SVG rendered 24px tall.

- **Colour versions:** "yahoo!" `#7D2EFF` + "news" `#232A31` on white (primary); all white on dark (news at 70% opacity); all white on purple for the app icon.
- **App icon:** purple square with "yahoo!" stacked over "news" in white.
- **Clear space:** at least the height of the "y" bowl on every side.
- **Minimum size:** 16px tall on screen.

Misuse: don't retype the wordmark in YA Sans or Centra, don't swap the two colours, don't drop the exclamation mark, don't place the purple wordmark on purple photos.

## 5. Components

### Header

- Sticky, `background: #FEFEFE`, padding 12px 16px (24px at md, 32px at lg), vertical padding 9px on desktop.
- Left: 40-44px round hamburger icon button (`border-radius: 9999px`, hover fill `#E3E3E3`), then the logo with `margin-right: 24px`.
- Center: a large pill search field. Right: "Sign in" pill and the account/mail icons.
- Below: a horizontal section nav (US, World, Politics, Health, Science, Entertainment, and so on), 14px weight 585, colour `#5B636A` (battleship); hover and active go to `#6001D2` with a 2px purple underline.
- Sidebar drawer: `width: 320px` (392px at lg), white, slides in with `transition: transform 175ms cubic-bezier(0.3,0.4,0.2,1)`.

### Buttons

All buttons are pills. Control heights are built from padding plus line height:

| Size | Height | Padding x | Text |
|---|---|---|---|
| sm | 32px | 12px | 14px / 600 |
| md | 40px | 16px | 14px / 600 |
| lg | 52px | 20px | 16px / 600 |

| Variant | Rest | Hover | Text |
|---|---|---|---|
| Primary | `#1A1919` | `#3A3939` | `#FEFEFE` |
| Brand | `#7D2EFF` | `#6F29E2` | `#FFFFFF` |
| Secondary | transparent, 1px `#1A1919` border | `#F3F2EF` fill | `#1A1919` |
| Tertiary / icon | transparent | `#E8E7E4` | `#1A1919` |

Buttons scale to 1.03 on hover and 0.97 when pressed (`--uds-button-scale-effect-*`). Focus: `outline: 2px solid rgb(96 1 210 / 80%); outline-offset: 2px`.

### Story cards

- **Hero carousel card:** full-bleed image with 16px radius, bottom gradient to `rgba(0,0,0,0.7)`, white title (20px mobile, 30px/36px weight 550 desktop), source and time in white 13px. Arrow buttons are white 40px circles with elevation 2.
- **List card:** 16px/600 headline left (max three lines, `line-clamp: 3`), 96-120px square thumbnail right with 8px radius, metadata row under the headline: source name, dot, relative time, comment icon plus count.
- **Grid card:** 16:9 image with 8px radius on top, 16-20px/600 headline, 13px muted source line. No border; cards sit on the page with 16-24px gaps.
- **Partner tag:** publisher logo 16-20px tall or the name in 12px/500 muted text.

### Article page

- Single column about 720px wide inside a 3-column grid (`col-body md:col-[1_/_4]`), right rail for ads and "Trending".
- Kicker or source logo, then the headline (26px, 32px at md, bold, `leading-tight`).
- Byline row: author name, timestamp ("Mon, November 16, 2026 at 12:17 AM UTC"), read time ("4 min read"), and share and comment icon buttons.
- Lead image full column width; `figcaption` 14px (`text-sm`) muted, 4px top margin.
- Paragraphs: 18px, line-height 32px on desktop, `margin-bottom: 16px`, colour `#1A1919`.
- Pull quotes and embedded social posts follow the originating publisher; Yahoo-made pull quotes use 22-28px/600 with a 4px purple left rule (approximate).
- End of article: comments drawer and "Up next" story feed.

### Breaking and live modules

- Breaking banner: full-width strip, `#C62626` background, white 14px/700 uppercase "BREAKING" label then the headline in white 16px/600 (approximate).
- Live coverage: small red dot (8px circle `#C62626`) plus "LIVE" in 12px/700, pulsing at 1.5s; live blog entries are white cards with a timestamp column.
- Election and market widgets use the UDS semantic colours and Roboto Mono for figures.

### Inputs and search

Search is a pill, 40-44px tall, `background: #F3F2EF` (carbon-1), no border, 16px magnifier icon at left in `#585756`, placeholder "Search the web" (approximate). Focus adds a 2px purple outline.

### Chips and tabs

- Topic chips: pill, 32px tall, 1px `#CAC9C7` border, 14px/500; selected fills `#E2D6FF` with `#6B27D9` text.
- Tabs: 14px/600 text, 2px `#7D2EFF` indicator under the active tab.

### Newsletters

Signup modules are white cards with 16px radius, a small illustration or the Yahoo News mark, a 20px/600 title, 14px description, email input (pill) and a black primary pill button "Sign up".

## 6. Layout & Spacing

- Spacing scale: Tailwind 4px steps (4, 8, 12, 16, 20, 24, 32, 48).
- Header max width is a custom container (`max-w-uh-custom`, about 1440px); content grid is about 1220-1280px with a 300px right rail on desktop (approximate).
- Gutters: 16px mobile, 24px tablet, 32px desktop.
- Breakpoints follow Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
- Feed density: 16-24px between cards, 32-48px between modules, module titles in Centra 18px bold.

## 7. Depth, Elevation & Motion

| Level | Shadow (light mode) |
|---|---|
| 1 | `0 0 1px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06)` |
| 2 | `0 0 1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.08), 0 4px 8px -2px rgba(0,0,0,.06)` |
| 3 | `0 0 1px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.06), 0 6px 12px -2px rgba(0,0,0,.1)` |
| 4 | `0 0 1px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.07), 0 10px 20px -4px rgba(0,0,0,.12), 0 16px 32px -8px rgba(0,0,0,.08)` |
| 5 | adds `0 32px 56px -12px rgba(0,0,0,.1)` |

- Most cards are flat; shadows appear on menus, carousel arrows, sticky video and modals.
- Borders are 1px; 2px for focus and tab indicators. Motion: drawer 175ms `cubic-bezier(0.3,0.4,0.2,1)`; button scale transitions around 150ms; `motion-reduce` disables transitions.

## 8. Iconography & Imagery

- Icons are 16px and 24px, simple filled glyphs drawn on a 16 or 24 grid (`fill: currentColor`), for example the comment bubble, share arrow and hamburger.
- Photography comes from wires and partner publishers, cropped by a smart-crop service to 16:9 and square; faces are kept in frame.
- Video thumbnails show a small play badge and duration pill in the lower left.
- Publisher logos appear at small sizes in their own colours.

## 9. Voice & Microcopy

Yahoo News writes in neutral, everyday language. Headlines come from the original publisher; Yahoo's own UI copy is short and casual.

- Sentence case everywhere except LIVE and BREAKING labels.
- Sample UI strings: "Sign in", "Search the web", "Up next", "View comments", "4 min read", "Add Yahoo as a preferred source to see more of our stories on Google."

## 10. Do's and Don'ts

**Do**

- Keep the page warm off-white with white cards and near-black text.
- Use purple for the logo, selection and focus, not for every link.
- Make every control a pill.
- Show source, relative time and comment count on every card.
- Put white headlines on images only with a strong bottom gradient.

**Don't**

- Don't use cold blue-greys; the neutrals are warm.
- Don't use square-cornered buttons or heavy borders.
- Don't set long article text smaller than 18px.
- Don't add colour to section labels; hierarchy comes from weight and size.
- Don't recreate the old purple-heavy portal look with purple headers.

## 11. Agent Prompt Guide

> Build this UI in the style of Yahoo News. Warm off-white page `#F9F8F7`, white cards `#FEFEFE`, primary text `#1A1919`, secondary `#3A3939`, muted metadata `#676665`, dividers `#E0E4E9`. Brand purple `#7D2EFF` appears only in the "yahoo!" wordmark, active tabs and selected chips; focus rings are `2px solid rgb(96 1 210 / 80%)`. Font: YA Sans (use Inter) for everything, Centra No2 (use DM Sans) for module titles and display sizes. Headlines are bold: article 32px/1.25 weight 700, card headlines 16px/20px weight 600 clamped to three lines. Article body 18px with 32px line height. Every button, chip and search field is a pill; primary buttons are near-black with white text, 40px tall, 14px weight 600, scaling to 1.03 on hover. Cards have 8px image radius (16px for the hero carousel) and no borders; shadows only on menus and overlays. Show source name, relative time and comment count on each story card. Breaking banners are red `#C62626` with white text.

```css
:root {
  --brand-purple: #7D2EFF;
  --brand-purple-text: #6F29E2;
  --brand-purple-hover: #6B27D9;
  --brand-grape: #6001D2;
  --brand-purple-tint: #F3F0FE;
  --brand-batcave: #232A31;
  --brand-text: #1A1919;
  --brand-text-secondary: #3A3939;
  --brand-text-tertiary: #585756;
  --brand-text-muted: #676665;
  --brand-bg: #F9F8F7;
  --brand-band: #F3F2EF;
  --brand-surface: #FEFEFE;
  --brand-pressed: #E8E7E4;
  --brand-border: #E0E4E9;
  --brand-border-input: #C7CDD2;
  --brand-dark: #101518;
  --brand-alert: #C62626;
  --brand-positive: #017647;
  --brand-info: #3265B7;
  --brand-warning: #A64D1F;
  --brand-font: "YA Sans VF", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-display: "Centra No2", "DM Sans", "Helvetica Neue", Arial, sans-serif;
  --brand-font-mono: "Roboto Mono", ui-monospace, Menlo, monospace;
  --brand-radius-xs: 2px;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-lg: 16px;
  --brand-radius-pill: 9999px;
  --brand-shadow-1: 0 0 1px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
  --brand-shadow-2: 0 0 1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.08), 0 4px 8px -2px rgba(0,0,0,.06);
  --brand-shadow-4: 0 0 1px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.07), 0 10px 20px -4px rgba(0,0,0,.12), 0 16px 32px -8px rgba(0,0,0,.08);
  --brand-focus: 0 0 0 2px rgb(96 1 210 / 80%);
  --brand-ease-drawer: cubic-bezier(0.3, 0.4, 0.2, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Yahoo.
