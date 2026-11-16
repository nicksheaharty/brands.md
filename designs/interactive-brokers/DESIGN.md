---
name: Interactive Brokers
shortName: IBKR
slug: interactive-brokers
url: https://interactivebrokers.com
category: Finance
tagline: "Black nav, signal-red square buttons and dense Proxima Nova copy for active traders."
updated: 2026-11-16
appStoreId: 454558592
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: IBKR Red
    hex: "#D91222"
    role: Primary buttons, links, active nav, focus border on inputs
  - name: Black
    hex: "#000000"
    role: Top navigation bar, headings, app icon background
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on red and on the black nav
  - name: Charcoal
    hex: "#454545"
    role: Body text, alert text
  - name: Red Dark
    hex: "#A61729"
    role: Primary button hover and active, gradient end of the logo mark
  - name: Night
    hex: "#171A1F"
    role: Dark theme page background, dark hero and quote bands
  - name: Logo Grey
    hex: "#222222"
    role: Wordmark letters in the full logo
  - name: Grey 666
    hex: "#666666"
    role: Secondary text, captions
  - name: Grey Border
    hex: "#E6E6E6"
    role: Card and table borders, dividers
  - name: Off White
    hex: "#F7F7F7"
    role: Alternate section background, table stripes
  - name: Input Border
    hex: "#929599"
    role: Default input border
  - name: Deep Teal
    hex: "#0B3944"
    role: Tertiary button and panel color
  - name: Success
    hex: "#018740"
    role: Positive change, success alerts
  - name: Info
    hex: "#0055D4"
    role: Info alerts and links in notices
  - name: Warning
    hex: "#FFB300"
    role: Warning alerts and badges
fonts:
  display:
    family: "Proxima Nova"
    fallback: "Figtree"
    weights: [400, 600]
  body:
    family: "Proxima Nova"
    fallback: "Figtree"
    weights: [400, 600]
typeScale:
  - { role: H1, size: 40, weight: 600, lineHeight: 1.1, tracking: "0" }
  - { role: H2, size: 36, weight: 600, lineHeight: 1.17, tracking: "0" }
  - { role: H3, size: 32, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: H4, size: 28, weight: 600, lineHeight: 1.29, tracking: "0" }
  - { role: H5, size: 24, weight: 600, lineHeight: 1.33, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Disclosure, size: 12, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 0, md: 0, lg: 0, pill: 40 }
spacing: [4, 8, 10, 16, 24, 32, 40, 48, 64]
shadows:
  - { name: Default, value: "0 1px 2px rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 1px 5px rgba(0,0,0,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#000000"
  muted: "#454545"
  border: "#E6E6E6"
  accent: "#D91222"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Interactive Brokers

## 1. Visual Theme & Atmosphere

Interactive Brokers (IBKR) looks like a brokerage built by and for people who read order books. The public site is a Bootstrap 5 build with a custom theme: a solid black top navigation bar, white content, black headlines and one loud color, IBKR red `#D91222`. Corners are square almost everywhere (the theme sets `--border-radius: 0rem`), shadows are tiny, and the page is packed with rates, product lists and disclosures.

What makes it recognisable:

- **Black bar, red buttons.** The nav is pure `#000000` with white 80% links. "Open Account" is a red rectangle on the right, "Log In" is a red outline.
- **Square everything.** Buttons, cards, inputs, tables and alerts all have 0px corners. The only rounded things are avatars, carousel dots and an optional `.btn-round` (40px).
- **Numbers as content.** Headlines lead with rates and market counts (an "Earn up to ...% on uninvested cash" line, an "Access N+ markets" line); always take the live figures. Big figures sit in H3 blocks in a stats grid.
- **Mega menus.** Each top-level item opens a wide white panel with three columns of links (title in 16px semibold, one-line grey description) and a promo column with a red CTA.
- **Dark bands.** Quote blocks, hero variants and some feature rows switch to a dark theme (`#171A1F` background, white text) using the same components.
- **Disclosure-heavy.** Footnote numbers, "Disclosure" links and long legal paragraphs at 12-13px are part of the look, not an afterthought.

Mood words: professional, dense, direct, global, no-nonsense.

## 2. Color Palette & Roles

The theme file exposes Bootstrap-style variables (`--primary`, `--secondary`, `--tertiary`, `--success`...) plus 10-step tints (`--primary-5` ... `--primary-dark-50`). Red is the only brand accent; everything else is neutral.

| Name | Hex | Role |
|---|---|---|
| IBKR Red (`--primary`) | `#D91222` | Primary button fill, secondary button border/text, links, input focus border, active nav |
| Red Hover (light theme) | `#A61729` | Primary hover/active/focus fill |
| Link Hover | `#C01A2F` | Text link hover |
| Black | `#000000` | Nav bar, H1 color, dark text |
| Charcoal | `#454545` | Body and alert text |
| Grey 666 (`--font-color-light`) | `#666666` | Secondary text |
| Logo Grey | `#222222` | Wordmark letters |
| Border (`--border-color`) | `#E6E6E6` | Cards, tables, dividers |
| Input Border | `#929599` | Default input border |
| Default (`--default`) | `#FCFCFC` | Default button and table header fill |
| Off White | `#F7F7F7` | Alternate section fill |
| Deep Teal (`--tertiary`) | `#0B3944` | Tertiary button, rare panels |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Success | `#018740` (light), `#0FB35B` (dark) | Positive P&L, success alerts |
| Danger | `#D91222` | Errors share the brand red |
| Warning | `#FFB300` | Warnings, risk notes |
| Info | `#0055D4` (light), `#317EF2` (dark) | Info alerts |

Alerts use a colored left border (about 4px, approximate) on a very pale tint (red tints run `#FEF8F8`, `#FDF3F4`, `#FBE7E8`) with `#454545` text.

### Dark theme

The site supports `data-theme="dark"`: page `#171A1F` (`--bg-body`), raised surfaces `#232A33`, text white, secondary text `#B8B8B8`, footer `#0F1114`, shadows switch to `rgba(0,0,0,0.9)`. Red brightens slightly to `#E41122` on hover. The top nav stays black in both themes.

## 3. Typography

**Family:** Proxima Nova (Mark Simonson), loaded as a web font with `"Proxima Nova", Arial, Verdana, sans-serif`. A rounded companion, Proxima Soft, is loaded for a few promo elements. Asian locales swap to Hiragino, Microsoft YaHei and Apple SD Gothic Neo stacks.

**Licensing:** Proxima Nova is commercial (Adobe Fonts / Mark Simonson). Free substitute: **Figtree** from Google Fonts, or Montserrat if you need a wider, more geometric feel.

**Weights:** only two. 400 for body and descriptions, 600 for headings, buttons, nav labels and table headers. No light weights and no 700+.

### Scale (desktop, from theme variables)

| Role | Size | Weight | Line height |
|---|---|---|---|
| H1 / hero H2 | 40px (2.5rem) | 600 | 44px |
| H2 | 36px | 600 | 42px |
| H3 | 32px | 600 | 40px |
| H4 | 28px | 600 | 36px |
| H5 | 24px | 600 | 32px |
| H6 | 20px | 600 | 28px |
| Body | 16px | 400 | 24px (approximate) |
| Button | 16px | 600 | 1.375 |
| Small / descriptions | 14px | 400 | 20px |
| Footnotes, disclosures | 12-13px | 400 | 1.5 |

### Rules

- Title Case for headings and nav ("Keep More of Your Returns", "Find Your Account", "Institutional-Grade Tools."). Headlines often end with a period and split into two short lines.
- Buttons in Title Case: "Open Account", "Log In", "Get Started", "Start Trading".
- Figures get their own line and are set larger than the sentence around them (rate on one line, "on uninvested cash." on the next).
- Footnote markers are plain superscript digits after the claim.
- No uppercase eyebrows; product labels like "IBKR LITE" / "IBKR PRO" are the exception.

## 4. Logo & Brand Mark

The logo is a red mark plus the wordmark "InteractiveBrokers" with no space, set in a heavy grotesque in `#222222`. The mark is a tall right triangle split diagonally: the upper half solid red `#D81222`, the lower half a gradient from `#D71F27` to `#971B1E`, with a red circle overlapping its right edge. The short lockup "IBKR" (mark plus bold "IBKR" letters) is used on mobile headers and in product names.

- **Color versions:** red mark with dark grey wordmark on white; red mark with white wordmark on black (the inverse file used in the nav and dark theme).
- **Clear space:** at least the circle's diameter on all sides (approximate; no public guideline found).
- **Minimum size:** about 90px wide for the IBKR lockup (the mobile header size), 160px for the full wordmark (approximate).
- **App icon:** the mark alone, oversized and cropped, on a near-black square.

Misuse:

- Do not insert a space or change the capital B in "InteractiveBrokers".
- Do not recolor the mark outside red, black or white.
- Do not flatten the gradient half into a second solid color, and do not separate the circle from the triangle.
- Do not place it on red backgrounds.

## 5. Components

### Buttons

Bootstrap button classes with theme tokens. Every variant is square.

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary (`.btn-primary`) | `#D91222` | `#FFFFFF` 16px/600 | 1px `#D91222` | 0 | 10px 24px |
| Secondary (`.btn-secondary`) | transparent | `#D91222` | 1px `#D91222` | 0 | 10px 24px |
| Tertiary | `#0B3944` | `#FFFFFF` | 1px `#0B3944` | 0 | 10px 24px |
| Default | `#FCFCFC` | `#000000` | 1px `#E6E6E6` | 0 | 10px 24px |
| Small (`.btn-sm`) | as above | 14px/600 | | 0 | about 6px 16px (approximate) |
| Round (`.btn-round`) | as above | | | 40px | |

States:

- Hover/active/focus primary: fill and border `#A61729` in light mode, `#E41122` in dark mode.
- Hover secondary: text and border darken to `#A61729`, background stays transparent.
- Focus: shadow `0 1px 2px rgba(0,0,0,0.2)` (the theme's `--focus-box-shadow`) plus the browser focus ring.
- Transition: `all .2s ease-in-out` on everything interactive.
- Mega-menu CTAs add a right arrow (`.link-arrow-right`) and left-align text.

```css
.btn-primary {
  font: 600 1rem/1.375 "Proxima Nova", Figtree, Arial, sans-serif;
  color: #fff;
  background: #D91222;
  border: 1px solid #D91222;
  border-radius: 0;
  padding: .625rem 1.5rem;
  transition: all .2s ease-in-out;
}
.btn-primary:hover { background: #A61729; border-color: #A61729; }
```

### Inputs

- 1px `#929599` border, 0 radius, white fill, text `#454545` 16px, line-height 22px, padding 12px 16px (about 48px tall).
- Focus: border `#D91222`, text `#000000`, no glow.
- Labels 14px/600 black above the field; helper text 13px `#666666`.
- Errors: red border and 13px red message below.

### Cards and tiles

- White, square corners, 1px `#E6E6E6` border or the default shadow `0 1px 2px rgba(0,0,0,0.2)`.
- Pricing cards ("IBKR LITE" / "IBKR PRO"): product name stacked in bold with the plan word in red, a giant price ("$0", "$0.005" on the live site on 2026-11-16), then a short list of rates separated by hairlines.
- Platform tiles: product screenshot on a light grey panel, 20px/600 title and one-line 14px description.
- Award strip: a row of third-party logos (BrokerChooser, Investopedia, StockBrokers, Kiplinger) in monochrome with the award title as an H3 below each.

### Navigation (signature)

- Black bar (`--nav-top-bg-color: #000000`), roughly 64px tall (approximate). Logo left (white inverse wordmark, 220 x 34px; on mobile the IBKR lockup at 90 x 34px).
- Top links: "Why IBKR", "Products", "Platforms", "Accounts", "Pricing", "Education", "Support" at 16px/600, `rgba(255,255,255,0.8)`, white on hover.
- Right side: search icon, "Log In" secondary button, "Open Account" primary button, both compact (10px padding).
- Mega menu: full-width white panel, 3-4 link columns. Each link is a 16px/600 title with a 14px `#666666` description underneath; hover turns the title red. A left promo column carries an H2 ("Keep More of Your Returns"), a short claim and a red CTA with arrow.

### Rate and stat blocks

- Stats grid: small grey label line ("Trusted by over"), big H3 figure ("5 Million", live site 2026-11-16), small line underneath ("clients worldwide"). Four columns on desktop, two on mobile.
- Inline rate callouts put the percentage on its own line in 600 weight, often in red.

### Tables

Comparison and commission tables: header row `#FCFCFC` or `#F2F2F2` with 14px/600 black text, rows 14px `#454545`, 1px `#E6E6E6` borders, square corners, striped `#F7F7F7` on long tables. Numbers right-aligned.

### Alerts

Square box, pale tint fill, colored left border (width approximate, about 4px), 14-16px `#454545` text, optional bold lead-in.

### Modals

White, square, max width 560-750px (from the theme's max-width values; approximate), header with 24px/600 title and a plain close X, footer buttons right aligned. Scrim `rgba(21,24,30,0.4)`.

### Footer

Footer (`#0F1114` in dark theme, a light grey tint in light theme; approximate) with dense link columns, app store badges, social icons and several paragraphs of 12px disclosures naming each IB entity.

## 6. Layout & Spacing

- **Container:** max width 1400px (Bootstrap `container-xxl` style) with 12-15px gutters; full-bleed bands for hero and dark sections, some capped at 1600px.
- **Breakpoints:** 576, 768, 992, 1200, 1400px (Bootstrap 5 defaults).
- **Spacing:** Bootstrap 4px-based utilities (`p-10`, `mb-3`, `py-5`) plus custom 10, 20 and 40px values. Hero content padding is 40px; section padding about 48-80px (approximate).
- **Density:** high. Mega menus show 20+ links at once, pricing sections stack rates, and tables are full width.
- **Hero:** text block left (H2 at H1 size, subheading 18-20px, red CTA) with an image or product shot on the right 40% of the width; collapses to stacked image on top below 992px.

## 7. Depth, Elevation & Motion

- Shadows are minimal: `0 1px 2px rgba(0,0,0,0.2)` (default), `0 1px 5px rgba(0,0,0,0.2)` for dropdowns. In dark mode the shadow color becomes `rgba(0,0,0,0.9)`.
- Borders do most of the separation work: 1px `#E6E6E6` or `#D6D6D6`.
- Motion: `all .2s ease-in-out` on links, buttons and menu items; `opacity 300ms ease` for fades; simple parallax and "appear on scroll" helpers on the homepage. Mega menus open instantly with no slide.

## 8. Iconography & Imagery

- Icons come from Font Awesome (5 and 7 are both loaded): solid and regular weights, 16-24px, usually black or red.
- Feature icons on the homepage are simple line pictograms in red and black inside square ratio boxes.
- Imagery: product screenshots of IBKR Desktop, Trader Workstation and IBKR Mobile on dark UIs; world maps and globe graphics for "global markets"; few lifestyle photos.
- Charts and market data use green for up and red for down, with the red matching the brand red.

## 9. Voice & Microcopy

Direct, competitive and number-led. Copy compares IBKR to other brokers on cost and access and backs claims with rates and footnotes.

- Title Case headlines, short and punchy, often in two halves: "Lower Costs. Better Returns."
- Lead with the figure, then the qualifier. Check every figure against the live site before using it; rates change often.
- CTAs: "Open Account", "Log In", "Get Started", "Start Trading", "Compare Interest Rates", "See Pricing Details".
- Disclosures are linked right next to the claim ("Lower Cost Disclosure", "Restrictions apply.").

Sample strings:

- Hero: "Lower Costs. Better Returns."
- Feature: "Institutional-Grade Tools. Built for You."
- AI: "AI Assists. You Decide."
- Mega-menu item: "Trader Workstation (TWS) / Professional trading platform"

## 10. Do's and Don'ts

**Do**

- Keep corners square on buttons, cards, inputs and tables.
- Use the black top bar with the red "Open Account" button on the right.
- Use one accent, `#D91222`, and darken to `#A61729` on hover.
- Set headings in 600 weight Title Case and body in 400 `#454545`.
- Put real figures in headlines and link the disclosure next to them.
- Use thin `#E6E6E6` borders instead of big shadows.

**Don't**

- Don't round buttons or cards, and don't use pill CTAs in the main flow.
- Don't introduce a second accent color like blue or purple for actions.
- Don't use light font weights or large airy whitespace that hides the data.
- Don't use soft lifestyle photography as the main visual; show platforms and markets.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Interactive Brokers. White page with a solid black 64px top nav: white IBKR logo left, Title Case links at 16px/600 in white 80%, a red outline "Log In" button and a solid red "Open Account" button on the right. Font: `"Proxima Nova", Figtree, Arial, sans-serif`, 400 for body (16px/24px, color `#454545`) and 600 for headings (H1 40px/44px black) and buttons. The only accent is `#D91222` (hover `#A61729`). Every corner is square: buttons have 0 radius and 10px 24px padding, cards and tables use 1px `#E6E6E6` borders and at most a `0 1px 2px rgba(0,0,0,0.2)` shadow. Lead sections with figures on their own line, add a stats grid (small label, big number, small caption), a two-plan pricing comparison and dense mega-menu link columns with grey one-line descriptions. Include dark bands in `#171A1F` with white text for quotes or platform promos. Finish with small grey disclosure paragraphs. Transitions are `all .2s ease-in-out`.

```css
:root {
  --brand-red: #D91222;
  --brand-red-hover: #A61729;
  --brand-link-hover: #C01A2F;
  --brand-black: #000000;
  --brand-text: #454545;
  --brand-text-muted: #666666;
  --brand-logo-grey: #222222;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F7;
  --brand-surface-default: #FCFCFC;
  --brand-border: #E6E6E6;
  --brand-border-input: #929599;
  --brand-tertiary: #0B3944;
  --brand-dark-bg: #171A1F;
  --brand-dark-surface: #232A33;
  --brand-success: #018740;
  --brand-info: #0055D4;
  --brand-warning: #FFB300;
  --brand-font: "Proxima Nova", "Figtree", Arial, Verdana, sans-serif;
  --brand-radius: 0;
  --brand-radius-round: 40px;
  --brand-btn-padding: 10px 24px;
  --brand-shadow: 0 1px 2px rgba(0,0,0,0.2);
  --brand-shadow-raised: 0 1px 5px rgba(0,0,0,0.2);
  --brand-container: 1400px;
  --brand-transition: all .2s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Interactive Brokers.
