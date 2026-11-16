---
name: Apollo
slug: apollo
url: https://apollo.com
category: Finance
tagline: "Warm cream and near-black, big Garamond headlines, Graphik UI and black pill buttons."
updated: 2026-11-16
logoBackground: "#FEF8F3"
theme: light
colors:
  - name: Near Black
    hex: "#010101"
    role: Logo, headlines, body text, pill buttons
  - name: Cream
    hex: "#FEF8F3"
    role: Warm surface, inputs, search overlay, text on dark
  - name: Apollo Green
    hex: "#007B63"
    role: Highlighted headline words, campaign bands
  - name: Taupe
    hex: "#44413E"
    role: Footer background
  - name: Sand
    hex: "#D9D2CC"
    role: Footer logo, warm dividers
  - name: Slate Blue
    hex: "#395878"
    role: Links in banners and document lists
  - name: White
    hex: "#FFFFFF"
    role: Page background, nav panels
  - name: Header Grey
    hex: "#55585A"
    role: Header text, icons, nav links
  - name: Stone
    hex: "#E8E5E3"
    role: Subtle warm surface
  - name: Mist Grey
    hex: "#B8BABA"
    role: Header separators, quiet borders
  - name: Grey
    hex: "#7C7C7C"
    role: Input borders, metadata
  - name: Coral
    hex: "#CB504B"
    role: Errors, required marks, gating badge stripe
  - name: Mint
    hex: "#CCE5E0"
    role: Light green tint for tags and charts
fonts:
  display:
    family: "Adobe Garamond Pro"
    fallback: "EB Garamond"
    weights: [400]
  body:
    family: "Graphik"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 96, weight: 400, lineHeight: 1.04, tracking: "-0.015em" }
  - { role: Display, size: 72, weight: 400, lineHeight: 1.06, tracking: "-0.011em" }
  - { role: H2, size: 48, weight: 400, lineHeight: 1.08, tracking: "0" }
  - { role: H3, size: 36, weight: 400, lineHeight: 1.19, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.63, tracking: "0" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.43, tracking: "0" }
radii: { sm: 3, md: 10, lg: 20, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "2px 2px 12px 0 rgba(0,0,0,0.1)" }
  - { name: Small, value: "0 2px 3px 0 rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#FEF8F3"
  text: "#010101"
  muted: "#55585A"
  border: "#D9D2CC"
  accent: "#010101"
  accentText: "#FEF8F3"
  radius: 44
  buttonStyle: pill
---

# Apollo

## 1. Visual Theme & Atmosphere

Apollo Global Management's site reads like a well-made annual report. Big classical serif headlines (Adobe Garamond Pro) sit on white and warm cream (`#FEF8F3`), body and UI text are a clean grotesque (Graphik), and actions are small black pills with cream text. Color is almost absent; the one recurring accent is a deep green (`#007B63`) used to pick out words in a headline or fill a campaign band.

What makes it recognisable:

- **Huge, light serif headlines.** The page title runs at 96px Adobe Garamond Pro, weight 400, with slightly negative tracking. Even section titles are 36-72px serif.
- **Warm palette.** Near-black `#010101`, cream `#FEF8F3`, sand `#D9D2CC` and a warm taupe footer `#44413E`. No cool greys on the main surfaces.
- **Serif plus sans.** Graphik handles everything functional: nav, body, labels, buttons, tables.
- **Black pill buttons.** 44px-radius pills, black fill, cream text, 16px Graphik.
- **Green highlight words.** Selected words in a headline switch to Graphik 600 in Apollo green, a typographic accent rather than a color block.
- **Audience-first navigation.** A visible selector separates "General Public", "Institutional Investors", "Public Shareholders" and "Wealth Professionals".

Mood words: established, editorial, warm, assured, understated.

## 2. Color Palette & Roles

Hex values were read from the live Apollo AEM stylesheets on apollo.com.

| Name | Hex | Role |
|---|---|---|
| Near Black | `#010101` | Logo, headlines, body, button fill, input text |
| Cream | `#FEF8F3` | Inputs, search overlay, button text, text on dark and green |
| White | `#FFFFFF` | Page background, nav sub-panels |
| Apollo Green | `#007B63` | Highlighted headline words, full-width teaser bands |
| Taupe | `#44413E` | Footer background |
| Sand | `#D9D2CC` | Footer logo, warm hairlines in the search overlay |
| Stone | `#E8E5E3` | Warm subtle surface |
| Linen | `#EFEDEA` | Menu item hover background |
| Header Grey | `#55585A` | Header text, icons, logo in the light header |
| Mist Grey | `#B8BABA` | Header separators |
| Grey | `#7C7C7C` | Input border (1.5px), metadata |
| Slate Blue | `#395878` | Links in banners, document lists, alerts |
| Coral | `#CB504B` | Errors, required asterisk, gating badge stripe |
| Mint | `#CCE5E0` / `#99CAC1` | Green tints for tags and charts |

The Wikimedia version of the logo uses an older green (`#007D55`); the live site uses near-black or sand for the logo.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#CB504B` | Form error text, input border, 1.5px select outline |
| Success | `#007B63` | Confirmation, positive data |
| Info link | `#395878` | Links inside notices |
| Gated | `#FEF8F3` fill + 4px `#CB504B` left border | "Gated" content badge |

### Header themes

The header exposes CSS variables. Light: text, icons and logo `#55585A`, separators `#B8BABA`, hover `#000`. Transparent over imagery: everything `#FFFFFF`.

## 3. Typography

**Families:**

- **Adobe Garamond Pro** (400): page titles, section titles, accordion titles, teaser headings, search title.
- **Graphik** (Commercial Type; 400, 500, 600): body, nav, buttons, forms, tables, highlighted words.
- Japanese fallbacks (Meiryo, Hiragino Kaku Gothic Pro) are in every stack for the Japan site.

**Licensing:** both are commercial. Free substitutes: **EB Garamond** for Adobe Garamond and **Inter** for Graphik.

```css
--font-serif: "Adobe Garamond Pro", "EB Garamond", Garamond, serif;
--font-sans: "Graphik", "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Scale (from production CSS)

| Role | Size | Weight | Line height | Tracking | Family |
|---|---|---|---|---|---|
| Page title (desktop) | 96px | 400 | 100px | -0.015em | Serif |
| Page title (tablet) | 60px | 400 | 62px | -0.015em | Serif |
| Page title (mobile) | 48px | 400 | 52px | -0.015em | Serif |
| Campaign title | 72px | 400 | 76px | about -0.8px | Serif |
| Teaser heading | 48px | 400 | 52px | 0 | Serif |
| Section / accordion title | 36px | 400 | 43px | 0 | Serif |
| Highlighted word | 44-72px | 600 | 52-76px | -0.66px to 0.9px | Graphik, green |
| Lead (approximate) | 20-24px | 400 | 1.4-1.5 | 0 | Graphik |
| Body | 16px | 400 | 26px | 0 | Graphik |
| Small / label | 14px | 400-500 | 20px | 0 | Graphik |

### Rules

- Serif headlines are always weight 400; never bold them.
- Highlight one or two words in a headline with Graphik 600 in green instead of bolding the serif.
- Sentence case for headlines and buttons.
- Body copy stays in Graphik; never set paragraphs in Garamond.

## 4. Logo & Brand Mark

The logo is the word **APOLLO** in widely spaced, classical serif capitals (Garamond-style, with a slightly calligraphic "A"). There is no separate symbol.

- **Color versions:** near-black `#010101` on white or cream (primary), header grey `#55585A` in the light header, sand `#D9D2CC` on the taupe footer, white over imagery.
- **Clear space:** at least the height of the capitals on each side.
- **Minimum size:** about 90px wide.
- **Icon:** the icon in this folder uses the "A" from the wordmark in cream on near-black (a short form, not an official mark).

Misuse:

- Do not tighten the letter-spacing or set "APOLLO" in Graphik.
- Do not color the logo green on the main site (the green is legacy).
- Do not add a symbol, box or outline.

## 5. Components

### Buttons

| Variant | Fill | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary pill | `#010101` | `#FEF8F3` Graphik 400 16px | 1px `#010101` | 44px | 8px 24px |
| Primary hover | transparent | `#010101` | 1px `#010101` | 44px | 8px 24px |
| Arrow link (`cmp-button`) | none | `#010101` 16px | none | 0 | 32px arrow icon left, 9px gap |
| Circle arrow | transparent | arrow `#010101` | 1.5px `#010101` circle, 32px | 20px | |
| On green or dark | `#FEF8F3` | `#010101` | none | 44px | 8px 24px |

Hover on pills: the fill drops out leaving a 1px black outline. Transition about 300ms `ease-in-out` (approximate).

```css
.ap-btn {
  font: 400 16px/26px "Graphik", "Inter", sans-serif;
  background: #010101; color: #FEF8F3;
  border: 1px solid #010101; border-radius: 44px;
  padding: 8px 24px; display: inline-flex; align-items: center; justify-content: center;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
}
.ap-btn:hover { background: transparent; color: #010101; }
```

### Inputs

- Cream `#FEF8F3` fill, 1.5px `#7C7C7C` border, 3px radius, 16px Graphik `#010101`.
- Selects: same fill with a custom chevron, 3px radius.
- Required asterisk in Coral; error state border `#CB504B` and 14px Coral message.

### Header

- White (or transparent over hero imagery), logo left in `#55585A`.
- Utility row with audience links ("General Public", "Institutional Investors", "Public Shareholders", "Wealth Professionals") and "Log In".
- Main nav: "About Apollo", "Strategies", "Investors" and more, Graphik 16px; hover to black.
- Mega-menu: white panel, 5px radius, centred, 928px wide, items hover to `#EFEDEA`.
- Search opens a full cream overlay with a 96px serif "Search" title.

### Cards

- Approximate composition: white on cream sections or cream on white, radius 10px, shadow `2px 2px 12px rgba(0,0,0,.1)`.
- Serif title 28-36px, Graphik body, arrow link at the bottom.
- Insight cards may use Slate Blue `#395878` as a solid background with cream text.

### Accordions (press releases, strategies)

Rows with a 36px serif title, optional tag or thumbnail, a thin rule, and a circle-arrow button that appears on hover.

### Teaser band

Full-bleed Apollo Green `#007B63` band with a cream serif heading (36-48px) and a cream pill button.

### Tables and data grids

AG Grid with the Alpine theme for fund and performance data: header `#F8F8F8`, borders `#BABFC7`, 14px Graphik, tabular numbers.

### Gating badge

27px tall, cream fill, 4px Coral left border, Graphik 12-14px, marks restricted content.

## 6. Layout & Spacing

- **Breakpoints:** 375, 768, 992, 1200 and 1440px.
- **Content width:** about 1280-1440px with 80px side padding on desktop (from the 5pc search padding), 24px on mobile (approximate).
- **Spacing:** 8px base; common values 8, 16, 24, 32, 48, 56, 64 and 96px. Titles carry 96px top and 56px bottom margins on desktop.
- **Section rhythm:** 64-96px between sections.
- **Density:** sparse at the top of pages, denser in fund data and press lists.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `2px 2px 12px 0 rgba(0,0,0,.1)` |
| Small | `0 2px 3px 0 rgba(0,0,0,.1)` |
| Inset cream | `inset 0 0 5px #FEF8F3` |

- Mostly flat; shadows only on cards and floating menus.
- Motion: `color .3s ease-in-out`, `opacity .3s ease-in-out`, carousels `transform .5s ease-in-out`, entrance fades `opacity 1s ease-out` with a slight rise.

## 8. Iconography & Imagery

- **Icons:** simple 1.5px line icons in near-black: right arrows (often inside a 32px circle), chevrons, search, close.
- **Photography (approximate):** people and places from portfolio companies and Apollo offices; natural, warm-toned and editorial, with generous crops.
- **Graphics:** restrained charts in black, green and mint; serif numerals for headline statistics.

## 9. Voice & Microcopy

Assured, precise, slightly formal. Talks about retirement, private markets, credit and long-term value in plain terms.

- Sentence case; short serif headlines followed by one Graphik paragraph.
- CTAs: "Learn more", "Read more", "View all", "Log In".
- Audience labels are explicit and title case.

Sample strings (read on the live site today):

- Audience: "General Public", "Institutional Investors", "Public Shareholders", "Wealth Professionals"
- Nav: "About Apollo", "Strategies", "Investors"
- Utility: "Log In", "Former Employees", "Portfolio Companies"

## 10. Do's and Don'ts

**Do**

- Pair a large regular-weight Garamond with Graphik (or EB Garamond with Inter).
- Use near-black `#010101` and cream `#FEF8F3` as the core pair.
- Make buttons black pills with cream text that hollow out on hover.
- Highlight a word with Graphik 600 in green instead of bolding.
- Keep the footer warm taupe `#44413E` with a sand logo.

**Don't**

- Don't use cool blue-greys for main surfaces.
- Don't bold the serif or use it for body text.
- Don't use green for large backgrounds except dedicated campaign bands.
- Don't use heavy shadows or glossy effects.
- Don't quote fund figures without checking the live site.

## 11. Agent Prompt Guide

> Build this UI in the style of Apollo Global Management. White and warm cream `#FEF8F3` surfaces, near-black `#010101` text, header text `#55585A`, warm hairlines `#D9D2CC`, footer in taupe `#44413E`. Headlines in Adobe Garamond Pro (fallback EB Garamond) at weight 400 with -0.015em tracking: 96/100px page titles, 48px and 36px section titles. Body and UI in Graphik (fallback Inter) 16px/26px. Highlight one word per headline in Graphik 600 Apollo green `#007B63`. Buttons are black pills (44px radius, 8px 24px padding, 16px cream text) that turn to a 1px black outline on hover. Inputs have cream fill, 1.5px `#7C7C7C` border, 3px radius. Cards have 10px radius and a soft `2px 2px 12px rgba(0,0,0,.1)` shadow. Errors and required marks in coral `#CB504B`; links in notices `#395878`. Calm, formal, sentence-case copy.

```css
:root {
  --brand-black: #010101;
  --brand-cream: #FEF8F3;
  --brand-white: #FFFFFF;
  --brand-green: #007B63;
  --brand-taupe: #44413E;
  --brand-sand: #D9D2CC;
  --brand-stone: #E8E5E3;
  --brand-linen: #EFEDEA;
  --brand-header-grey: #55585A;
  --brand-mist: #B8BABA;
  --brand-grey: #7C7C7C;
  --brand-slate-blue: #395878;
  --brand-coral: #CB504B;
  --brand-mint: #CCE5E0;
  --brand-font-serif: "Adobe Garamond Pro", "EB Garamond", Garamond, serif;
  --brand-font-sans: "Graphik", "Inter", "Helvetica Neue", Arial, sans-serif;
  --brand-radius-pill: 44px;
  --brand-radius-card: 10px;
  --brand-radius-input: 3px;
  --brand-shadow-card: 2px 2px 12px 0 rgba(0,0,0,.1);
  --brand-shadow-sm: 0 2px 3px 0 rgba(0,0,0,.1);
  --brand-ease: ease-in-out;
  --brand-duration: 300ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Apollo.
