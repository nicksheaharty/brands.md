---
name: Wells Fargo
slug: wells-fargo
url: https://wellsfargo.com
category: Banking
tagline: "Red masthead with a gold rule, warm greys, purple links and rounded red buttons."
updated: 2026-11-16
appStoreId: 311548709
logoBackground: "#D71E28"
theme: light
colors:
  - name: Wells Fargo Red
    hex: "#D71E28"
    role: Masthead, logo box, primary button fill, active nav underline
  - name: Gold
    hex: "#FFCD41"
    role: Masthead bottom rule, accent underline, highlight
  - name: White
    hex: "#FFFFFF"
    role: Page background, logo text on red
  - name: Warm Black
    hex: "#141414"
    role: Headlines and strong text
  - name: Brown Grey
    hex: "#3B3331"
    role: Body text, secondary button border
  - name: Link Purple
    hex: "#5A469B"
    role: Text links, text buttons
  - name: Red Hover
    hex: "#B01C24"
    role: Primary button hover and active
  - name: Muted
    hex: "#787070"
    role: Default body color, labels, legends
  - name: Warm Grey Border
    hex: "#E2DEDE"
    role: Borders, dividers, soft shadows
  - name: Linen
    hex: "#F9F7F6"
    role: Secondary nav bar, message panels, menu sidebars
  - name: Sand
    hex: "#F4F0ED"
    role: Section background
  - name: Focus Blue
    hex: "#5174B8"
    role: Focus outline on links
  - name: Deep Teal
    hex: "#01222D"
    role: App promo gradient start
  - name: Teal
    hex: "#017994"
    role: App promo gradient end
  - name: Grey 400
    hex: "#B5ADAD"
    role: Disabled text, placeholder
  - name: Indigo
    hex: "#21184E"
    role: Premier dark accent
fonts:
  display:
    family: "Wells Fargo Sans"
    fallback: "Source Sans 3"
    weights: [300, 600, 700]
  body:
    family: "Wells Fargo Sans"
    fallback: "Source Sans 3"
    weights: [400, 600]
typeScale:
  - { role: Hero, size: 42, weight: 300, lineHeight: 1.19, tracking: "0" }
  - { role: H1, size: 34, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: H2, size: 28, weight: 400, lineHeight: 1.17, tracking: "0" }
  - { role: H3, size: 24, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.294, tracking: "0" }
  - { role: Small, size: 15, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Caption, size: 13, weight: 400, lineHeight: 1.38, tracking: "0" }
radii: { sm: 3, md: 10, lg: 20, pill: 24 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 2px 4px 0 rgba(20,20,20,0.15)" }
  - { name: Menu, value: "0 2px 12px 0 rgba(0,0,0,0.2)" }
  - { name: Raised, value: "0 1px 5px 0 rgba(0,0,0,0.3)" }
  - { name: Top Edge, value: "0 -1px 6px 1px #E2DEDE" }
preview:
  bg: "#FFFFFF"
  surface: "#F9F7F6"
  text: "#3B3331"
  muted: "#787070"
  border: "#E2DEDE"
  accent: "#D71E28"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Wells Fargo

## 1. Visual Theme & Atmosphere

Wells Fargo is a large US bank with roots in the 1852 stagecoach express company. wellsfargo.com is built for quick tasks (Sign On, find an ATM, check rates) and product shopping (checking, savings, credit cards, home and personal loans, Premier, investing). The page opens with a solid red masthead edged by a thin gold stripe, then moves to a warm, light layout with greys that lean slightly brown rather than blue.

What makes it recognisable:

- **Red and gold.** Wells Fargo Red `#D71E28` and Gold `#FFCD41` come from the stagecoach heritage. On the web the red fills the 75px masthead and the gold appears as a 4px rule beneath it, and as short underlines under promo headlines.
- **Warm neutrals.** Text is brown-grey `#3B3331`, backgrounds are Linen `#F9F7F6` and Sand `#F4F0ED`, borders `#E2DEDE`. Nothing is cold blue-grey.
- **Purple links.** Text links and text buttons are purple `#5A469B`, a distinctive choice for a bank.
- **Rounded buttons.** Primary buttons are red with 24px corner radius and a 176px minimum width; the masthead "Sign On" is a white pill.
- **One custom sans.** Wells Fargo Sans (Light, Regular, SemiBold, Bold) carries everything on the site.
- **Moderate density.** A "fat nav" mega-menu, a hero offer, rate checkers and product cards.

Mood words: established, warm, steady, approachable, heritage.

## 2. Color Palette & Roles

Values from wellsfargo.com CSS (November 2026).

| Name | Hex | Role |
|---|---|---|
| Wells Fargo Red | `#D71E28` | Masthead, primary button, active nav underline, promo headline color |
| Red Hover | `#B01C24` | Primary button hover and active |
| Gold | `#FFCD41` | 4px masthead bottom border, 2px x 60px headline underline, `mark` highlight |
| Gold Deep | `#FCC60A` | Gold on light backgrounds (approximate role) |
| Gold Tint | `#FFF7E2` | Highlight panel |
| Warm Black | `#141414` | Headlines, strong text, focused link text |
| Brown Grey | `#3B3331` | Body text in modules, secondary button text and border |
| Dark Brown Grey | `#433A38` | Dark text alternate |
| Muted | `#787070` | Root body color, labels, legends |
| Grey 500 | `#7C7270` | Secondary metadata |
| Grey 400 | `#B5ADAD` | Disabled, placeholders |
| Border | `#E2DEDE` | Dividers, menu borders, soft top shadows |
| Linen | `#F9F7F6` | L1 nav bar, message panels, menu sidebar |
| Sand | `#F4F0ED` | Section background |
| Link Purple | `#5A469B` | Links, text buttons |
| Purple Alt | `#6048AD` / `#5F47A9` | Link hover, icon accents |
| Indigo | `#21184E` | Premier dark sections |
| Focus Blue | `#5174B8` | 2px focus outline on links |
| Deep Teal | `#01222D` | App promo gradient start |
| Teal | `#017994` | App promo gradient end |
| White | `#FFFFFF` | Background |

### Gradients

The app download promo uses `linear-gradient(166deg, #01222D -0.5%, #017994 59.5%)` with white text and the phone mockup on the right.

### Semantic colors (approximate)

| State | Hex |
|---|---|
| Error | `#D71E28` text with a red alert icon, `#FDF2F2` tint |
| Success | `#0A7E3E` text, `#EAF6EE` tint |
| Warning | `#FFCD41` icon with `#FFF7E2` tint |
| Info | `#5174B8` icon with `#F9F7F6` tint |

### Dark mode

No dark mode on the website. Dark promo bands use Deep Teal or Indigo with white text.

## 3. Typography

**Family:** Wells Fargo Sans, a proprietary humanist sans loaded as four families: "Wells Fargo Sans Light", "Regular", "SemiBold" and "Bold". Some legacy components load Source Sans Pro. The logo itself uses a separate serif and should not be imitated in UI text.

**Fallback:** **Source Sans 3** (Google Fonts) is close in proportion and is already in the site's fallback set. Stack: `"Wells Fargo Sans Regular", "Source Sans 3", Arial, Helvetica, sans-serif`.

**Root size:** the site sets `html { font-size: 17px; line-height: 1.294 }`, so rem values in the CSS are multiples of 17px (for example `1.41176471rem` = 24px, `.88235294rem` = 15px).

### Scale

| Role | Size | Line height | Weight |
|---|---|---|---|
| Hero | 42px | ~50px | Light 300 |
| H1 | 34px | 1.205 | Regular 400 |
| H2 | 28px | 1.166 | Regular 400 |
| H3 / promo headline | 24px | 1.25 | SemiBold 600 |
| Lead | 20px | 1.3 | Regular |
| Body | 17px | 1.294 (22px) | Regular |
| Button | 17px | 1.294 | SemiBold |
| Small / nav | 15px | 1.33 | Regular / SemiBold |
| Caption / legal | 13px | 1.38 | Regular |

Hero size is approximate (CSS shows a 2.47rem step = 42px).

### Rules

- Sentence case for headings, buttons and nav ("Sign On" and product names are the exceptions).
- Group labels in the mega-menu are uppercase 13px ("BANKING SERVICES", "DIGITAL BANKING").
- Body text default is muted `#787070`; important text steps up to `#3B3331` or `#141414`.
- Product names keep trademark symbols: "Way2Save® Savings", "Wells Fargo Active Cash® Card".

## 4. Logo & Brand Mark

The logo is "WELLS FARGO" in a custom serif, stacked on two lines. Its main form is a red square box with the wordmark knocked out in white. On the site masthead it appears as a single-line white wordmark directly on the red bar. Gold is used next to the logo (the masthead rule) rather than inside it in current digital use.

- **Color versions:** white on red box (primary), red wordmark on white, white on photography.
- **App icon:** the red box with the stacked white wordmark.
- **Clear space:** at least the height of the "W" around the box (approximate).
- **Minimum size:** box at least 32px; single-line wordmark at least 120px wide (the site uses 220 x 23px).
- **Stagecoach:** the historic stagecoach illustration is a heritage asset for advertising, not part of the logo.

Misuse:

- Do not set "WELLS FARGO" in Wells Fargo Sans or any other font as a logo.
- Do not put the red box on a red background without separation.
- Do not recolor the box gold, or the wordmark red on red.
- Do not combine the logo with the stagecoach in UI headers.

## 5. Components

### Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#D71E28` | `#FFFFFF` SemiBold 17px | none | `#B01C24` |
| Secondary | `#FFFFFF` | `#3B3331` | 1px `#3B3331` | `#F9F7F6` fill (approx.) |
| Text button | none | `#5A469B` SemiBold | none | underline |
| Masthead Sign On | `#FFFFFF` | `#141414` | none | text underline |

Shared: `border-radius: 24px`, `min-width: 176px` (125px for compact secondary), `padding: 9px 16px`, line height 1.29, about 40px tall. Focus: 2px auto outline in `#5174B8`.

```css
.wf-btn {
  font: 600 17px/1.29 "Wells Fargo Sans SemiBold", "Source Sans 3", Arial, sans-serif;
  color: #fff;
  background: #D71E28;
  border: 0;
  border-radius: 24px;
  min-width: 176px;
  padding: 9px 16px;
  text-align: center;
}
.wf-btn:hover, .wf-btn:active { background: #B01C24; }
.wf-btn--secondary { background: #fff; color: #3B3331; border: 1px solid #3B3331; }
.wf-btn:focus-visible { outline: 2px auto #5174B8; }
```

### Masthead (signature)

- Full-width red `#D71E28` bar, 75px tall, `border-bottom: 4px solid #FFCD41`.
- White Wells Fargo wordmark left; right side "ATMs/Locations", "Help", "Español" in white 15px, and a white "Sign On" pill (40px tall, min width 82px, radius 24px).
- Mobile: "MENU" toggle left, logo centre, Sign On pill right.

### Fat nav (mega-menu)

- L1 bar under the masthead: Linen `#F9F7F6`, 60px tall, product tabs ("Checking", "Savings & CDs", "Credit Cards", "Home Loans", "Personal Loans", "Auto Loans", "Premier", "Financial Guidance", "Investing & Wealth Management") in 15px. Active tab: bold with `border-bottom: 4px solid #D71E28`.
- L3 panel: white, three columns. Left: product list with title (SemiBold) and one-line description. Middle: group headings in uppercase ("BANKING SERVICES", "DIGITAL BANKING") with links. Right: Linen sidebar with a promo: red 24px headline with a 2px x 60px gold underline, and a red primary button.

### Cards

- White, radius 10px, `box-shadow: 0 2px 4px 0 rgba(20,20,20,.15)` or a 1px `#E2DEDE` border, 24px padding.
- Split cards use `10px 10px 0 0` on the image and `0 0 10px 10px` on the body.
- Title 24px SemiBold `#141414`, body 17px `#3B3331`, CTA as purple text link or red button.

### Rate checker and forms

- Dropdown "Check rates" and ZIP field: 44-48px tall, 1px `#787070` border, radius 3px (approximate), label above in 15px `#787070`.
- Location search: "City, State or ZIP" placeholder, magnifier button.
- Error text red with icon; message panel in Linen with `#E2DEDE` border, 6px 8px 6px 16px padding.

### Lists and FAQ

- Quick help list: plain links in `#5A469B`, 17px, 12px vertical spacing.
- FAQ accordion: question 17px SemiBold, plus/minus icon, `#E2DEDE` dividers.

### Modal

White, radius 10px, shadow `0 2px 12px rgba(0,0,0,.2)`, scrim `rgba(0,0,0,.5)`, close button top-right, buttons right-aligned.

## 6. Layout & Spacing

- **Base unit:** 4px; common spacing 8, 12, 16, 20, 24, 32, 48, 64px.
- **Breakpoints:** 768px, 1080px and 1400px (seen in CSS media queries).
- **Container:** about 1280-1400px max, 20px side padding on the nav, 24-32px on content (approximate).
- **Grid:** 12 columns; product cards 3 across on desktop, stacked on mobile.
- **Density:** medium; utility items and offers are close together near the top.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 2px 4px 0 hsla(0,0%,8%,.15)` |
| Menu | `0 2px 12px 0 rgba(0,0,0,.2)` |
| Raised | `0 1px 5px 0 rgba(0,0,0,.3)` |
| Popover | `0 0 12px 0 rgba(0,0,0,.2)` |
| Top edge (sticky footer bars) | `0 -1px 6px 1px #E2DEDE` |

- Elevation is modest; warm borders do most of the work.
- Transitions are short (150-250ms ease) on hover; the mega-menu opens instantly or with a quick fade (approximate).

## 8. Iconography & Imagery

- **Icons:** outlined, 1.5-2px stroke, rounded joins, in `#3B3331` or red for key actions, 24-32px.
- **Photography:** warm, natural-light lifestyle imagery: homeowners, families, small-business owners. Skin tones and wood tones match the warm neutral palette.
- **Product art:** credit cards shown flat; the app shown in a phone on the teal gradient.
- **Heritage:** the stagecoach and gold accents appear in brand campaigns, not in everyday UI.

## 9. Voice & Microcopy

Plain, practical and polite. Short descriptions that say what an account is for.

- Sentence case; "Sign On" (not "Sign in") for login.
- Product descriptions in one line: what it does, who it is for.
- CTAs: "Sign On", "Open now", "Compare checking accounts", "Check all rates", "Make an appointment", "Find a location".

Sample strings (from wellsfargo.com on 2026-11-16):

- "How can we help?"
- "Our most popular account for managing day-to-day financial needs"
- "An account that helps you spend only what you have in it"
- "Build your savings automatically"
- "How do I find my routing and account numbers?"

## 10. Do's and Don'ts

**Do**

- Use a solid red masthead with a 4px gold bottom rule.
- Keep neutrals warm: `#3B3331` text, `#F9F7F6` and `#F4F0ED` backgrounds, `#E2DEDE` borders.
- Use purple `#5A469B` for text links.
- Give buttons 24px radius and a 176px minimum width.
- Underline promo headlines with a short gold bar.
- Say "Sign On".

**Don't**

- Don't use cool blue-greys for text or borders.
- Don't use gold as a button fill or for body text.
- Don't make links red; red is for buttons and the masthead.
- Don't imitate the serif logo in headings.
- Don't crowd the masthead with more than four utility items.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Wells Fargo (wellsfargo.com). Start with a full-width red `#D71E28` masthead, 75px tall, with a 4px gold `#FFCD41` bottom border, a white wordmark left and a white "Sign On" pill right. Below it a Linen `#F9F7F6` nav bar with product tabs; the active tab gets a 4px red underline. Page background white with Sand `#F4F0ED` sections. Text is warm: headlines `#141414`, body `#3B3331`, muted `#787070`, borders `#E2DEDE`. Font: "Source Sans 3" as a stand-in for Wells Fargo Sans, root size 17px, line-height 1.294; headlines 34/28/24px, hero 42px Light. Primary buttons are red with white SemiBold text, radius 24px, min width 176px, padding 9px 16px, hover `#B01C24`; secondary buttons are white with a 1px `#3B3331` border. Links are purple `#5A469B`. Cards have 10px radius and a light `0 2px 4px rgba(20,20,20,.15)` shadow. Promo headlines are red with a 2px x 60px gold underline. Copy is plain and practical.

```css
:root {
  --brand-red: #D71E28;
  --brand-red-hover: #B01C24;
  --brand-gold: #FFCD41;
  --brand-gold-tint: #FFF7E2;
  --brand-black: #141414;
  --brand-text: #3B3331;
  --brand-muted: #787070;
  --brand-disabled: #B5ADAD;
  --brand-border: #E2DEDE;
  --brand-linen: #F9F7F6;
  --brand-sand: #F4F0ED;
  --brand-bg: #FFFFFF;
  --brand-link: #5A469B;
  --brand-focus: #5174B8;
  --brand-indigo: #21184E;
  --brand-teal-dark: #01222D;
  --brand-teal: #017994;
  --brand-font: "Wells Fargo Sans Regular", "Source Sans 3", Arial, Helvetica, sans-serif;
  --brand-font-semibold: "Wells Fargo Sans SemiBold", "Source Sans 3", Arial, sans-serif;
  --brand-font-size-root: 17px;
  --brand-line-height: 1.294;
  --brand-radius-sm: 3px;
  --brand-radius-card: 10px;
  --brand-radius-button: 24px;
  --brand-masthead-height: 75px;
  --brand-shadow-card: 0 2px 4px 0 rgba(20,20,20,.15);
  --brand-shadow-menu: 0 2px 12px 0 rgba(0,0,0,.2);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Wells Fargo.
