---
name: USA Today
slug: usa-today
url: https://usatoday.com
category: News
tagline: "A blue dot, a bold sans wordmark and bright, card-based national news on white."
updated: 2026-11-16
appStoreId: 504631398
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: USA Today Blue
    hex: "#009BFF"
    role: The dot, brand accent, links and News section (approximate)
  - name: Ink
    hex: "#000000"
    role: Wordmark and headlines
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Breaking Red
    hex: "#E00000"
    role: Breaking news bar and live labels (approximate)
  - name: Body Grey
    hex: "#303030"
    role: Body text (approximate)
  - name: Meta Grey
    hex: "#626262"
    role: Bylines, timestamps, captions (approximate)
  - name: Rule Grey
    hex: "#E6E6E6"
    role: Dividers and card borders (approximate)
  - name: Surface Grey
    hex: "#F4F4F4"
    role: Module and newsletter backgrounds (approximate)
  - name: Deep Blue
    hex: "#0071BC"
    role: Link hover and pressed states (approximate)
  - name: Sports Red
    hex: "#D6001C"
    role: Sports section dot (approximate)
  - name: Money Green
    hex: "#2E9E4F"
    role: Money section dot (approximate)
  - name: Life Purple
    hex: "#8E44AD"
    role: Life and entertainment section dot (approximate)
  - name: Travel Orange
    hex: "#F7941D"
    role: Travel section dot (approximate)
  - name: Tech Teal
    hex: "#00A7A7"
    role: Tech section dot (approximate)
fonts:
  display:
    family: "Unify Sans"
    fallback: "Roboto"
    weights: [600, 700, 800]
  body:
    family: "Unify Serif"
    fallback: "Source Serif 4"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 40, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Lead headline, size: 32, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Card headline, size: 18, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Deck, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 15, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Label, size: 12, weight: 700, lineHeight: 1.2, tracking: "0.04em" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 4px rgba(0,0,0,0.12)" }
  - { name: Menu, value: "0 4px 16px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#000000"
  muted: "#626262"
  border: "#E6E6E6"
  accent: "#009BFF"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# USA Today

Note on sources: usatoday.com returned an HTTP 402 to automated requests during research, so the live CSS could not be read. Logo geometry comes from Wikimedia Commons; colors, fonts and sizes below come from the published brand identity (the 2012 dot system and its later refinements) and public screenshots. Every value marked approximate should be checked against the live site before you match it exactly.

## 1. Visual Theme & Atmosphere

USA Today is bright, friendly and quick to scan. The whole identity hangs on one simple shape: a solid blue circle next to a bold, compact "USA TODAY" wordmark. The site is white with black headlines, generous photography and a lot of small, tidy modules.

What makes it recognisable:

- **The dot.** A flat blue circle is the logo, the app icon and a recurring UI device. Historically each section had its own colored dot (blue News, green Money, red Sports, purple Life, orange Travel, teal Tech), and that color logic still shows up in section labels and headers.
- **Bold sans everywhere.** Headlines, navigation and labels are a sturdy grotesque at weight 700. The overall look is closer to a sports or consumer brand than a broadsheet.
- **Cards and strips.** The homepage is a stack of strips: a lead story with a large photo, then horizontal rows of image cards, video carousels and lists.
- **Color in small doses.** Most of the page is black, white and grey; the section color appears in the dot, a label or a thin rule.
- **Mobile first.** The layout, nav and type all feel built for a phone and scaled up.

Density is medium. Spacing is regular and modular, with lots of 16px and 24px gaps.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| USA Today Blue | `#009BFF` | Dot, brand accent, links, News section (approximate) |
| Deep Blue | `#0071BC` | Link hover, pressed (approximate) |
| Ink | `#000000` | Wordmark, headlines |
| Body Grey | `#303030` | Article text (approximate) |
| Meta Grey | `#626262` | Bylines, timestamps, captions (approximate) |
| Rule Grey | `#E6E6E6` | Dividers, card outlines (approximate) |
| Surface Grey | `#F4F4F4` | Module fills (approximate) |
| White | `#FFFFFF` | Page |
| Breaking Red | `#E00000` | Breaking bar, live labels (approximate) |

### Section colors (approximate)

| Section | Hex |
|---|---|
| News | `#009BFF` |
| Sports | `#D6001C` |
| Money | `#2E9E4F` |
| Life / Entertainment | `#8E44AD` |
| Travel | `#F7941D` |
| Tech | `#00A7A7` |

Use the section color only for the dot, the section label and a 3-4px top rule on section headers. Headlines stay black.

### Semantic

- Breaking: white text on `#E00000`.
- Live: red dot plus "LIVE" in 12px/700 caps.
- Success and error in forms: green `#2E9E4F`, red `#E00000` (approximate).

### Dark mode

The apps support a system dark mode: background about `#121212`, cards `#1E1E1E`, text `#FFFFFF`, muted `#A0A0A0`, the blue dot unchanged (approximate). The website is light only.

## 3. Typography

USA Today and the wider Gannett network use **Unify Sans** and **Unify Serif**, custom families made for Gannett (approximate attribution). They are proprietary.

Free fallbacks: **Roboto** (or **Inter**) for Unify Sans, **Source Serif 4** for Unify Serif.

```css
--brand-font-sans: "Unify Sans", Roboto, Helvetica, Arial, sans-serif;
--brand-font-serif: "Unify Serif", "Source Serif 4", Georgia, serif;
```

### Scale (approximate, desktop)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Article headline | 40px | 700 sans | 1.15 | -0.01em |
| Lead story headline | 32px | 700 sans | 1.15 | -0.01em |
| Section title | 24px | 800 sans | 1.2 | 0 |
| Card headline | 18px | 700 sans | 1.25 | 0 |
| Deck / summary | 20px | 400 sans | 1.4 | 0 |
| Article body | 18px | 400 serif | 1.6 | 0 |
| UI / nav | 15px | 600 sans | 1.3 | 0 |
| Byline | 14px | 600 sans | 1.3 | 0 |
| Caption | 14px | 400 sans | 1.4 | 0 |
| Label | 12px | 700 sans caps | 1.2 | 0.04em |

Mobile: article headline about 28px, card headlines 16px, body 17px.

### Rules

- Headlines in sentence case, bold sans, tight leading.
- Article body uses the serif; all metadata uses the sans.
- Labels and section kickers are small caps-height uppercase sans with slight tracking.
- Numbers in scores and data tables use tabular figures.

## 4. Logo & Brand Mark

The logo is a **solid blue circle** followed by **USA TODAY** in a heavy, compact sans. The circle's diameter matches the cap height plus a little overshoot, and it sits on the baseline of the wordmark.

- **Primary:** blue `#009BFF` dot, black wordmark, on white.
- **Reversed:** blue dot with white wordmark on black or a dark photo.
- **Dot alone:** used as the app icon, favicon and social avatar. Section versions swap the dot color.
- **Clear space:** at least half the dot's diameter on all sides.
- **Minimum size:** about 100px wide for the lockup; below that use the dot alone.

Misuse:

- Do not add a gradient, outline or icon inside the dot.
- Do not change the wordmark color to blue.
- Do not separate the dot and wordmark in the primary lockup.
- Do not use a section color dot for brand-level placements.

## 5. Components

### Header and nav

- White bar about 56px tall, logo left, section links in 15px/600 black, search and account icons right, a "Subscribe" button far right.
- A second row on desktop can hold trending topics as small text links.
- On scroll the header shrinks to the dot plus hamburger.
- Mobile: hamburger opens a full-screen menu with sections in a single list, each with its section dot.

### Breaking bar

Full-width bar under the header: `#E00000` background, white 12px/700 "BREAKING" label, then a 16px/700 white headline link. Dismiss "X" on the right.

### Buttons (approximate)

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#009BFF` | `#FFFFFF` 15px/700 | none | 4px | 10px 20px |
| Dark | `#000000` | `#FFFFFF` | none | 4px | 10px 20px |
| Outline | `#FFFFFF` | `#000000` | 1px `#000000` | 4px | 9px 19px |
| Pill chip | `#F4F4F4` | `#303030` 13px/600 | none | 9999px | 6px 12px |

Hover: primary `#0071BC`; outline fills `#F4F4F4`. Focus: 2px `#009BFF` outline with 2px offset.

### Story cards

- **Lead:** 16:9 photo, section label with colored dot, 32px/700 headline, optional 16-18px summary, byline in 14px Meta Grey.
- **Standard:** 3:2 photo, label, 18px/700 headline, timestamp.
- **List row:** 100-120px thumbnail left, headline right, 1px `#E6E6E6` divider.
- Cards have no visible border on the homepage; some modules use a white card with `0 1px 4px rgba(0,0,0,0.12)` on a grey band.

### Article page

- Section label with dot, then headline 40px/700 sans.
- Byline block: author name 14px/700 linked, "USA TODAY" and timestamp in Meta Grey, share icons.
- Lead image or video full width of the 700px column, caption 14px sans with credit.
- Body: serif 18px/1.6 `#303030`, 24px between paragraphs, links in blue with underline.
- **Pull quote:** 24-28px/700 sans in black with a 4px blue left bar.
- In-line "Contributing:" credits and correction notes in 14px italic at the end.

### Live coverage

Live blogs use a "LIVE" red label, timestamped posts with 14px/700 red time stamps, a pinned "Key events" list and a sticky "Latest" button that jumps to new posts.

### Newsletters and app promos

Sign-up modules on `#F4F4F4`: newsletter name in 20px/800, short description, email field (44px, 1px `#E6E6E6`, 4px radius) and a blue button. App promos show the dot icon and "Get the app" link.

### Video

Video cards show a play icon in a white circle bottom-left of the thumbnail and a duration badge (`rgba(0,0,0,.7)`, white 12px/600, 2px radius).

### Sports scores

Score strips use a horizontal scroll of small cards: team abbreviations in 14px/700, scores tabular, status ("Final", "Q3 4:12") in 12px Meta Grey.

## 6. Layout & Spacing

- **Max width:** about 1200px on desktop (approximate).
- **Grid:** 12 columns with 24px gutters; article column about 700px with a 300px right rail.
- **Breakpoints:** around 640px, 1024px and 1280px (approximate).
- **Spacing:** 8px base; 16px inside cards, 24px between cards, 48px between homepage sections.
- **Section headers:** 24px/800 title with a 3-4px colored top rule and a "More" link on the right.

## 7. Depth, Elevation & Motion

- Mostly flat; shadows only on floating cards in grey bands, menus and the sticky video player.
- Card: `0 1px 4px rgba(0,0,0,0.12)`. Menu: `0 4px 16px rgba(0,0,0,0.16)` (approximate).
- Motion is minimal: 150-200ms color changes, carousels slide 300ms ease-out, the live dot pulses.

## 8. Iconography & Imagery

- **Icons:** simple filled or 2px line icons at 20-24px in black or Meta Grey.
- **The dot as device:** small colored dots mark sections, live status and list bullets.
- **Photography:** agency and staff photos, bright and full color, cropped 16:9 and 3:2. Sports and entertainment photography is prominent.
- **Graphics:** "USA TODAY Snapshots" style infographics: flat charts with simple illustrations and the section color.

## 9. Voice & Microcopy

Clear, accessible and national in scope. Headlines are short, direct and written for a general reader.

- Sentence case for headlines and buttons.
- Section labels short: "News", "Sports", "Money", "Life", "Travel", "Tech".
- CTAs: "Subscribe", "Sign in", "Sign up", "Watch", "See all".

Sample strings:

- "BREAKING"
- "LIVE: Latest updates"
- "Get the latest news delivered to your inbox."
- "Contributing: The Associated Press"

## 10. Do's and Don'ts

**Do**

- Make the blue dot the hero of the brand moments.
- Use bold sans headlines with tight leading.
- Keep section color to dots, labels and thin rules.
- Lean on strong photography and modular rows of cards.
- Keep layouts simple enough to read on a phone first.

**Don't**

- Don't fill large backgrounds with section colors.
- Don't put the dot in a gradient or 3D treatment.
- Don't use thin or light headline weights.
- Don't mix more than one section color in a single module.
- Don't treat the approximate values here as exact without checking.

## 11. Agent Prompt Guide

> Build this UI in the style of USA Today. White page, black bold sans headlines (Unify Sans, fallback Roboto, weight 700, line-height 1.15) and serif article body (fallback "Source Serif 4", 18px/1.6, `#303030`). The brand device is a flat blue circle `#009BFF` next to a heavy "USA TODAY" wordmark. Use small colored dots for sections (News blue `#009BFF`, Sports red `#D6001C`, Money green `#2E9E4F`, Life purple `#8E44AD`, Travel orange `#F7941D`, Tech teal `#00A7A7`) only in labels and thin top rules. Homepage: a lead story with a 16:9 photo and 32px headline, then rows of photo cards with 18px/700 headlines and small grey timestamps (`#626262`). Breaking news is a full-width red `#E00000` bar. Buttons are 4px radius, primary blue with white text. 12-column grid, about 1200px max width, 24px gutters, 48px between sections. Mostly flat, light card shadows only on grey bands. All values approximate.

```css
:root {
  --brand-blue: #009BFF;
  --brand-blue-deep: #0071BC;
  --brand-ink: #000000;
  --brand-body: #303030;
  --brand-meta: #626262;
  --brand-rule: #E6E6E6;
  --brand-surface: #F4F4F4;
  --brand-bg: #FFFFFF;
  --brand-breaking: #E00000;
  --brand-sports: #D6001C;
  --brand-money: #2E9E4F;
  --brand-life: #8E44AD;
  --brand-travel: #F7941D;
  --brand-tech: #00A7A7;
  --brand-font-sans: "Unify Sans", Roboto, Helvetica, Arial, sans-serif;
  --brand-font-serif: "Unify Serif", "Source Serif 4", Georgia, serif;
  --brand-radius-sm: 2px;
  --brand-radius-md: 4px;
  --brand-radius-lg: 8px;
  --brand-radius-pill: 9999px;
  --brand-shadow-card: 0 1px 4px rgba(0,0,0,0.12);
  --brand-shadow-menu: 0 4px 16px rgba(0,0,0,0.16);
  --brand-gutter: 24px;
  --brand-max-width: 1200px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by USA Today.
