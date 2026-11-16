---
name: Politico
slug: politico
url: https://politico.com
category: News
tagline: "Red POLITICO wordmark, black-and-white story grids and dense policy newsletters."
updated: 2026-11-16
appStoreId: 358305912
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Politico Red
    hex: "#D71920"
    role: Wordmark, app icon, breaking labels, key accents
  - name: Black
    hex: "#000000"
    role: Headlines, nav text, rules (approximate)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Ink
    hex: "#1A1A1A"
    role: Body text (approximate)
  - name: Grey 600
    hex: "#5C5C5C"
    role: Bylines, timestamps, captions (approximate)
  - name: Grey 300
    hex: "#CCCCCC"
    role: Rules and borders (approximate)
  - name: Grey 100
    hex: "#F2F2F2"
    role: Panels, newsletter sign-up blocks (approximate)
  - name: Red Dark
    hex: "#A6141A"
    role: Hover and pressed state for red (approximate)
  - name: Link Blue
    hex: "#1F5FA8"
    role: Inline links in some newsletters (approximate)
fonts:
  display:
    family: "Unverified (site returned 403)"
    fallback: "Source Serif 4"
    weights: [700]
  body:
    family: "Unverified (site returned 403)"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Article headline, size: 40, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Lead headline, size: 32, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Card headline, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Deck, size: 18, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Section label, size: 12, weight: 700, lineHeight: 1.2, tracking: "0.08em" }
  - { role: Metadata, size: 13, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#000000"
  muted: "#5C5C5C"
  border: "#CCCCCC"
  accent: "#D71920"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Politico

> **Source note.** politico.com returned HTTP 403 to our automated request on 2026-11-16, so we did not read its CSS. The logo colour `#D71920` comes from the 2024 wordmark on Wikimedia Commons and the app icon (`#D71A20` sampled). Every other value in this file is approximate, based on the public brand assets and the general layout of the site and app. Check the live site before relying on specific numbers.

## 1. Visual Theme & Atmosphere

Politico looks like a trade paper for people who work in and around government: a white page, black type, a red wordmark and a lot of stories per screen. The design is built for scanning. Headlines are short and bold, section labels are small and uppercase, and newsletters (Playbook and the policy "Pro" briefings) are as important as articles.

What makes it recognisable:

- **The red POLITICO wordmark.** All-caps geometric letters in a single red, set at the top centre or top left of the page.
- **Black and white first.** Body and headlines are black on white; red is reserved for the logo and a few signals such as breaking labels.
- **Dense story grids.** A lead story with a large photo, then rows of headline-only items separated by thin rules.
- **Newsletter culture.** Branded newsletter names (Playbook, Morning newsletters, Pro briefings) appear as labels, sign-up modules and landing pages.
- **Square edges.** Images and buttons have square or near-square corners and no shadows.

Mood words: fast, insider, crisp, matter-of-fact, busy.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Politico Red | `#D71920` | Wordmark, app icon, breaking labels, red section markers |
| Red Dark | `#A6141A` | Hover or pressed red (approximate) |
| Black | `#000000` | Headlines, nav, heavy rules (approximate) |
| Ink | `#1A1A1A` | Body text (approximate) |
| Grey 600 | `#5C5C5C` | Bylines, timestamps, captions (approximate) |
| Grey 300 | `#CCCCCC` | Thin rules between items (approximate) |
| Grey 100 | `#F2F2F2` | Sign-up panels and sidebars (approximate) |
| White | `#FFFFFF` | Page background |
| Link Blue | `#1F5FA8` | Inline links in some newsletter templates (approximate) |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Breaking | white on `#D71920`, uppercase | Breaking or live label above a headline (approximate) |
| Live | `#D71920` text with a dot | Live coverage pages (approximate) |
| Error | `#D71920` text | Form validation |
| Focus | 2px outline in black or blue | Keyboard focus (approximate) |

### Dark mode

The website is light. The iPhone app follows system dark mode with a near-black background, white text and the red wordmark unchanged (approximate). If you build a dark variant, keep the red for the logo only and use white for headlines.

## 3. Typography

**Families:** not verified. Because the live CSS was blocked, we could not read Politico's font stack. The public site pairs a heavy display face for headlines with a clean sans for labels, metadata and UI. Treat any family names you find elsewhere as needing confirmation.

**Substitutes:** **Source Serif 4** at 700 if you want serif headlines, **Inter** for the sans. If the headlines you are matching are sans, use **Inter** 700 with -0.01em tracking.

```css
--font-display: "Source Serif 4", Georgia, serif; /* approximate */
--font-sans: "Inter", Helvetica, Arial, sans-serif; /* approximate */
```

### Scale (approximate)

| Role | Size / line | Weight | Notes |
|---|---|---|---|
| Article headline | 40px / 1.1 | 700 | 28-30px on mobile |
| Lead card headline | 32px / 1.1 | 700 | |
| Card headline | 20px / 1.2 | 700 | Headline-only list items at 17-18px |
| Deck / dek | 18px / 1.4 | 400 | Grey or ink, under the headline |
| Body | 18px / 1.6 | 400 | Article and newsletter text |
| Section label | 12px / 1.2 | 700, uppercase | 0.08em tracking |
| Byline, timestamp | 13px / 1.3 | 400 | Grey 600 |
| Caption | 13px / 1.4 | 400 | Credit in uppercase |

### Rules

- Headlines in sentence case, no full stop. Kicker labels in uppercase.
- Newsletter names are proper nouns ("Playbook", "Inside Congress") and appear as labels or mastheads.
- Times and dates in US style: "11/16/2026 06:00 AM EST" or "Updated 2 hours ago" (approximate).

## 4. Logo & Brand Mark

The logo is the word POLITICO in uppercase, set in a custom geometric sans with circular O's, flat terminals and even stroke weight. The 2024 file on Wikimedia Commons renders it in red `#D71920`. The app icon reduces it to a white "P" on a red square.

- **Color versions:** red on white (default), white on red, black on white for single-colour use (approximate).
- **Clear space:** at least the height of the "O" on every side (approximate).
- **Minimum size:** about 90px wide on screen (approximate).
- **App icon:** white "P" on red `#D71A20`.
- **Sub-brands:** Politico Pro, Politico Europe and Playbook use the wordmark with a descriptor set beside or below it.

Misuse:

- Do not set the wordmark in lowercase or mixed case.
- Do not recolour it in blue or other partisan-coded colours.
- Do not outline, skew or add effects.
- Do not rebuild it from a stock geometric font.

## 5. Components

### Header and navigation (approximate)

- White header, 56-64px, with the red wordmark, a hamburger menu, search, and "Log in" plus a subscription link for Pro.
- Section nav: "Congress", "White House", "Elections", "Policy", "Newsletters", "Playbook" and others in 14px sans 600-700, black, separated by spacing rather than rules.
- A thin black or grey rule under the header; some pages add a red rule.
- Mobile: wordmark centred, menu left, search right; the menu opens as a full-height list.

### Story grid

- Lead story: large 16:9 or 3:2 photo, kicker label, 32px headline, deck and byline.
- Secondary stories: smaller photo left or above, 20px headline, no deck.
- Headline lists: text-only items, each with a 1px `#CCCCCC` top rule and 12-16px vertical padding.
- No card backgrounds, no shadows; columns separated by gutters or vertical rules.

```css
.pol-item { border-top: 1px solid #CCCCCC; padding: 12px 0; }
.pol-item .kicker { font: 700 12px/1.2 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; color: #D71920; }
.pol-item h3 { font: 700 20px/1.2 var(--font-display); color: #000; margin: 4px 0 0; }
.pol-item:hover h3 { text-decoration: underline; }
```

### Buttons (approximate)

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#D71920` | `#FFFFFF` 14px/700 uppercase | none | 0-2px |
| Secondary | `#000000` | `#FFFFFF` | none | 0-2px |
| Outline | transparent | `#000000` | 1px `#000000` | 0-2px |
| Text link | none | `#000000`, underlined on hover | none | 0 |

Height about 40-44px, padding 0 16-20px. Hover: red to `#A6141A`, black to `#333333`.

### Article page (approximate)

- Kicker label, headline (40px, 700), deck in 18-20px grey or ink.
- Byline row: "By Author Name" in 14px sans 700, timestamp underneath in grey, share icons on the right.
- Lead image full column width, caption below in 13px sans with an uppercase credit ("AP", "Getty Images").
- Body: 18px/1.6, column 640-700px, paragraphs separated by 20-24px, links underlined.
- Pull quotes: large bold headline-face text with a red or black rule above.
- In-article newsletter promo: a grey panel with the newsletter name, a one-line description and an email field.

### Live and breaking (approximate)

- Breaking banner: full-width red `#D71920` strip, white uppercase "BREAKING" label, white headline link.
- Live pages: time-stamped posts in a single column, newest first, each post separated by a rule, with a red "LIVE" marker in the header.
- Election results pages use tables with party colours in the data only.

### Newsletters (signature)

- Landing pages list newsletters as rows: name in bold, schedule ("Weekdays"), a short description and a "Sign up" button.
- Playbook issues are long, text-heavy emails: a masthead with the newsletter name, a byline, bold all-caps section heads ("DRIVING THE DAY"), and many inline links.
- Pro newsletters carry a "Pro" badge and are styled as dense briefings.

### Forms

Inputs 40-44px tall, 1px `#CCCCCC` border, square corners, 16px sans. Focus: black border. Error text in red under the field.

### Data tables

Polling and results tables: 14px sans, tabular figures, 1px rules between rows, header row in bold uppercase 12px.

## 6. Layout & Spacing

- **Max width:** around 1200-1300px on the homepage with a right rail for newsletters and ads (approximate).
- **Article column:** about 640-700px.
- **Breakpoints:** roughly 768px (tablet) and 1024px (desktop) (approximate).
- **Gutters:** 16px on mobile, 24-32px on desktop.
- **Spacing:** 8px base. Use 8, 12, 16, 24 and 32px for most gaps.
- **Density:** high. Many headlines are visible above the fold.

## 7. Depth, Elevation & Motion

- Flat. No shadows on cards; menus and dropdowns use borders.
- Rules carry structure: 1px grey between items, heavier black rules above section titles.
- Motion is limited to hover underlines, menu open and close, and live updates appearing at the top of a feed.

## 8. Iconography & Imagery

- **Icons:** simple line or solid glyphs (search, menu, share, bookmark) in black, 16-24px.
- **Photography:** news photography of officials, hearings and campaign events; full colour, cropped tight, no filters.
- **Illustration:** photo-illustrations and cut-out collages for features and magazine pieces.
- **Charts:** clean bar and line charts with a neutral palette; red used as a highlight.

## 9. Voice & Microcopy

Brisk, plain and specific, written for readers who follow policy closely. Describe the design and copy patterns only.

- Section labels: "CONGRESS", "WHITE HOUSE", "ELECTIONS", "POLICY".
- Buttons: "Sign up", "Log in", "Subscribe", "Read more".
- Newsletter descriptions: one line, starting with what the reader gets ("The essential guide to ...").
- Metadata: "By Author Name", "Updated 2 hours ago".

## 10. Do's and Don'ts

**Do**

- Keep the wordmark red `#D71920` on white and large enough to read.
- Use black headlines on white with small uppercase labels.
- Separate stories with thin grey rules, not cards.
- Give newsletters prominent sign-up modules with plain email fields.
- Mark every unverified value as approximate when you reuse this file.

**Don't**

- Don't use red for body text or large backgrounds outside breaking banners.
- Don't round corners or add shadows.
- Don't add partisan colour coding to the interface chrome.
- Don't assume the font families in this file are confirmed.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Politico. White page, black headlines, ink `#1A1A1A` body text, grey `#5C5C5C` metadata, 1px `#CCCCCC` rules between stories, no shadows and square corners. Red `#D71920` is used for the all-caps POLITICO wordmark, small uppercase kicker labels and breaking banners only. Headlines bold (700) with tight line-height (1.1-1.2): 40px on articles, 32px for the lead, 20px for grid items. Use `"Source Serif 4", Georgia, serif` for headlines and `Inter, Helvetica, sans-serif` for labels and UI (both approximate). Kickers are 12px uppercase 700 with 0.08em tracking. Body text 18px/1.6 in a 680px column. Buttons 40-44px tall with 0-2px radius: red with white uppercase text, or black. Include newsletter sign-up modules on a `#F2F2F2` panel. Dense, scannable homepage grid up to about 1280px.

```css
:root {
  --brand-red: #D71920;
  --brand-red-dark: #A6141A;   /* approximate */
  --brand-black: #000000;
  --brand-ink: #1A1A1A;        /* approximate */
  --brand-muted: #5C5C5C;      /* approximate */
  --brand-border: #CCCCCC;     /* approximate */
  --brand-surface: #F2F2F2;    /* approximate */
  --brand-bg: #FFFFFF;
  --brand-link: #1F5FA8;       /* approximate */
  --brand-font-display: "Source Serif 4", Georgia, serif;
  --brand-font-sans: "Inter", Helvetica, Arial, sans-serif;
  --brand-radius: 0;
  --brand-rule: 1px solid #CCCCCC;
  --brand-article-width: 680px;
  --brand-max-width: 1280px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Politico.
