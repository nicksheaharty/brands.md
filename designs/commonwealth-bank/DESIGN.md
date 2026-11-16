---
name: Commonwealth Bank
shortName: CommBank
slug: commonwealth-bank
url: https://commbank.com.au
category: Banking
tagline: "Yellow diamond, near-black type, heavy Beacon Sans headings and yellow pill CTAs."
updated: 2026-11-16
appStoreId: 310251202
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: CommBank Yellow
    hex: "#FFCC00"
    role: Brand colour, emphasis buttons, hero panels, active tab underline
  - name: Charcoal
    hex: "#1E1E1E"
    role: Headings, body text, button text on yellow
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Link Blue
    hex: "#1175B5"
    role: Text links, focus ring, icon links
  - name: Black
    hex: "#000000"
    role: Diamond shadow, app icon background
  - name: Soft Black
    hex: "#231F20"
    role: Legacy text and dark panels
  - name: Grey 70
    hex: "#706D6E"
    role: Secondary text, outline button border
  - name: Grey 4F
    hex: "#4F4C4D"
    role: Pressed states on dark backgrounds, disabled text
  - name: Border Grey
    hex: "#D3D2D2"
    role: Dividers, accordion rules, input borders
  - name: Light Grey
    hex: "#E9E9E9"
    role: Hover fill, disabled fill
  - name: Mist
    hex: "#F4F4F4"
    role: Alternate section background
  - name: Yellow Hover
    hex: "#FFDB4D"
    role: Emphasis button hover
  - name: Error Red
    hex: "#E1001A"
    role: Errors and destructive states
  - name: Success Green
    hex: "#00AA00"
    role: Success states and positive validation
fonts:
  display:
    family: "CBA Beacon Sans"
    fallback: "Nunito Sans"
    weights: [800]
  body:
    family: "CBA Beacon Sans"
    fallback: "Nunito Sans"
    weights: [400, 800]
typeScale:
  - { role: Slab 48, size: 48, weight: 800, lineHeight: 1.17, tracking: "0" }
  - { role: Slab 40, size: 40, weight: 800, lineHeight: 1.2, tracking: "0" }
  - { role: Slab 32, size: 32, weight: 800, lineHeight: 1.25, tracking: "0" }
  - { role: Slab 24, size: 24, weight: 800, lineHeight: 1.33, tracking: "0" }
  - { role: Text 20, size: 20, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Text 16, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Text 14, size: 14, weight: 400, lineHeight: 1.43, tracking: "0" }
  - { role: Text 12, size: 12, weight: 400, lineHeight: 1.67, tracking: "0" }
radii: { sm: 2, md: 6, lg: 16, pill: 24 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 3px 3px 0 rgba(30,30,30,0.16), 0 1px 8px 0 rgba(30,30,30,0.08)" }
  - { name: Hairline, value: "0 0 3px 0 rgba(35,31,32,0.3)" }
  - { name: Focus, value: "0 0 0 2px #1175B5" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#1E1E1E"
  muted: "#706D6E"
  border: "#D3D2D2"
  accent: "#FFCC00"
  accentText: "#1E1E1E"
  radius: 24
  buttonStyle: pill
---

# Commonwealth Bank

## 1. Visual Theme & Atmosphere

Commonwealth Bank of Australia, branded CommBank, is built around two things: a tilted yellow diamond with a black fold in its lower-right corner, and a design system called Honeycomb (the class prefix is `.honeycomb` across commbank.com.au). The result is bright, plain and very Australian-retail.

What makes it recognisable:

- **Yellow and charcoal.** CommBank Yellow `#FFCC00` and charcoal `#1E1E1E` do almost all the work. Text on yellow is always charcoal, never white.
- **Heavy headings.** Headings are set in the house face, CBA Beacon Sans, at weight 800 (the design tokens call these "Slab" styles). Body copy sits at 400. There is little in between.
- **Yellow as a block.** The NetBank log-on hero is a full yellow panel; content banners use a thick 16px yellow left border; the active item in anchor menus gets a 4px yellow underline.
- **Pill buttons.** Actions are 24px-radius pills, 48px tall, at least 180px wide. The emphasis button is solid yellow; the default is white with a grey outline.
- **Blue only for links.** A mid blue (`#1175B5`) marks text links and focus rings. It never fills a button.

Mood words: sunny, sturdy, straightforward, everyday.

## 2. Color Palette & Roles

Values read from commbank.com.au CSS on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| CommBank Yellow | `#FFCC00` | Emphasis buttons, hero panels, banner borders, active tabs, offer badges |
| Yellow Hover | `#FFDB4D` | Emphasis button hover |
| Yellow Pressed | `#D3A906` | Emphasis button active |
| Charcoal | `#1E1E1E` | Headings, body, text on yellow |
| Soft Black | `#231F20` | Older modules' text and dark panels |
| Grey 70 | `#706D6E` | Secondary text ("textDarkSecondary"), outline button border |
| Grey 4F | `#4F4C4D` | Pressed state on dark, disabled label |
| Border Grey | `#D3D2D2` | Accordion rules, dividers, input borders |
| Light Grey | `#E9E9E9` | Default button hover, disabled fill |
| Mist | `#F4F4F4` | Alternate section background |
| Link Blue | `#1175B5` | Links, icon buttons, focus ring |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#E1001A` | Field errors; error glow `0 0 0 1px rgba(225,0,26,.25)` |
| Success | `#00AA00` | Valid fields; glow `0 0 0 1px rgba(0,170,0,.25)` |
| Info | `#54C2E8` / `#96DBFA` | Info icons and light-blue notices |
| Focus | `#1175B5` | `box-shadow: 0 0 0 2px #1175B5` |

### Dark mode

The website is light only. `.bg-dark` sections flip buttons to white outlines on charcoal. The CommBank app supports system dark mode with charcoal surfaces and the same yellow.

## 3. Typography

- **Brand font:** CBA Beacon Sans (served as `CBABeaconSans`, with an older `CBASans` and `CBASlab`). It is proprietary to the bank.
- **Fallback:** `Nunito Sans` from Google Fonts is a fair match for its rounded, friendly sans shapes at 400 and 800. Stack: `"CBA Beacon Sans", "Nunito Sans", Helvetica, Arial, sans-serif`.
- **Two weights only:** 400 for text, 800 for headings and emphasis. Emphasis styles in the tokens are named `Text16Emphasis`, `Text14Emphasis` and so on, all 800.

Honeycomb text styles (from the `--textstyle` tokens):

| Token | Size | Weight | Line height |
|---|---|---|---|
| Slab48 | 48px | 800 | 56px |
| Slab40 | 40px | 800 | 48px |
| Slab32 | 32px | 800 | 40px |
| Slab24 | 24px | 800 | 32px |
| Text20 | 20px | 400 | 28px |
| Text16 | 16px | 400 | 24px |
| Text14 | 14px | 400 | 20px |
| Text12 | 12px | 400 | 20px |

Each style comes in Left, Center and Right variants, plus Emphasis (800) and Italic.

Rules:

- Sentence case for headings and buttons.
- Use the dollar sign with a space-free format ($1,000) and tabular figures in rate tables.
- Do not use weights between 400 and 800.

## 4. Logo & Brand Mark

- **Construction:** a square rotated 45 degrees into a diamond, filled with a yellow gradient (from `#FFFF00` at top left to `#FFCC00`), with a black triangular fold in the lower right that suggests a page turning. The current site uses the diamond on its own in the header; older lockups pair it with "CommonwealthBank" in black.
- **App icon:** the yellow diamond centred on black.
- **Colour versions:** gradient diamond on white or black; flat yellow `#FFCC00` with a black fold for small sizes and single-colour print.
- **Clear space:** at least a quarter of the diamond's width on every side (approximate).
- **Minimum size:** 24px wide on screen (approximate).
- **Misuse:** do not rotate the diamond back to a square, drop the fold, recolour the diamond or outline it.

## 5. Components

### Buttons

From `.honeycomb .btn-action` in the site CSS:

```css
.btn-action {
  display: inline-block;
  min-width: 11.25rem;              /* 180px */
  padding: .6875rem 1.5rem;         /* 11px 24px, 48px tall with 1px border */
  font: 400 1rem/1.5rem "CBA Beacon Sans", "Nunito Sans", sans-serif;
  text-align: center;
  border: 1px solid #706D6E;
  border-radius: 1.5rem;            /* 24px pill */
  background: #FFFFFF;
  color: #1E1E1E;
  transition: color .35s cubic-bezier(.39,.575,.565,1), background-color .35s cubic-bezier(.39,.575,.565,1);
}
.btn-action:hover  { background: #E9E9E9; }
.btn-action:active { background: #BDBBBC; }

.btn-action--emphasis { background: #FFCC00; border-color: transparent; color: #1E1E1E; }
.btn-action--emphasis:hover  { background: #FFDB4D; }
.btn-action--emphasis:active { background: #D3A906; }
.btn-action--emphasis:disabled { background: #E9E9E9; color: #4F4C4D; cursor: not-allowed; }

.btn-action--subtle {              /* text button with arrow */
  background: transparent; border: none; border-radius: 0;
  padding: .75rem 1.5rem .75rem 0; display: inline-flex; align-items: center;
}

.bg-dark .btn-action { background: transparent; border-color: #FFFFFF; color: #FFFFFF; }
.bg-dark .btn-action:hover { background: #706D6E; }
```

### Header

- White bar with the yellow diamond left, primary links (Banking, Home loans, Insurance, Investing & Super, Business, Institutional, CommBank Yello) in charcoal 16px, and "Log on" on the right, which opens a menu with NetBank, CommBiz and CommSec log-ons.
- Search, "Locate us" and "Help & support" sit in the same row on desktop.
- Mobile: diamond, "Log on" button and a menu icon; the menu opens full-height with stacked sections.

### Hero and banners

- **NetBank hero:** a full-width yellow `#FFCC00` panel with a charcoal Slab48 headline and a white or charcoal pill button.
- **Hero banner module:** white panel with a 16px yellow left border (8px on mobile) and 64px left padding beside the headline and copy, with an image on the right.

### Anchor menu and tabs

```css
.anchor-module nav li.active::after {
  content: ""; position: absolute; bottom: 0; right: 0; left: 0;
  height: .25rem; background: #FFCC00;
  transition: .25s cubic-bezier(.39,.575,.565,1);
}
```

Tabs have charcoal labels; the active tab gets the 4px yellow bar.

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 6px;
  padding: 24px;
  box-shadow: 0 3px 3px 0 rgba(30,30,30,.16), 0 1px 8px 0 rgba(30,30,30,.08);
}
```

Product cards show an icon, an 800-weight title, two lines of text and a subtle text button with an arrow.

### Accordion

- Header button: 16px 800 charcoal text, 1px `#D3D2D2` top border, transparent background, a 48px-tall toggle with a chevron icon on the right.

### Inputs

- 48px tall, 1px `#706D6E` border, 2px radius, 16px text, label above in Text14 Emphasis (approximate).
- Focus: `0 0 0 2px #1175B5`. Valid: green glow. Error: `#E1001A` border and message.
- Inline field buttons (e.g. "Search") are borderless blue `#1175B5` text inside the field's right edge.

### Badges

- Offer badge icons are yellow `#FFCC00`; small text tags use 12px 800 charcoal on yellow or on Mist.

## 6. Layout & Spacing

- **Breakpoints:** 600px, 768px, 978px (desktop starts here; `max-width: 977px` is the most common query) and 1140/1200px.
- **Container:** about 1140px max width, 24px gutters, 16px side padding on mobile.
- **Spacing:** 8px base; 16, 24, 32, 48 and 64px are the common steps. Buttons keep a 24px right margin between them.
- **Density:** medium; generous headings with compact, scannable body sections.

## 7. Depth, Elevation & Motion

- Cards: `0 3px 3px rgba(30,30,30,.16), 0 1px 8px rgba(30,30,30,.08)`.
- Hairline lift: `0 0 3px 0 rgba(35,31,32,.3)` for small floating elements.
- Motion easing is consistently `cubic-bezier(.39,.575,.565,1)` (ease-out sine) at .25-.35s for colour and underline changes; fades use `cubic-bezier(.895,.03,.685,.22)` at .25s.
- Transforms such as chevron rotation run `.3s ease-out`.

## 8. Iconography & Imagery

- **Icons:** the `hc-icons` icon font: simple, rounded line icons at about 24px in charcoal or link blue.
- **Photography:** bright, everyday Australian scenes (homes, beaches, small businesses), often with a yellow element in frame or a yellow panel beside the image.
- **Illustration:** flat, friendly vector illustrations with yellow and charcoal and a few accent colours, used in help and app feature pages.

## 9. Voice & Microcopy

- Friendly, direct, Australian English ("colour", "organise").
- Sentence case; short headings; buttons say exactly what happens.

Sample strings (from the home page on 2026-11-16):

- "Log on", "NetBank log on", "CommBiz log on", "CommSec log on"
- "Money Plan in the CommBank app"
- "Get access to handy tools to help you better manage your money"
- Popular searches: "Travel insurance", "Activate a CommBank card", "Cardless cash", "Interest rates & fees"
- Navigation: "Locate us", "Help & support"

## 10. Do's and Don'ts

**Do**

- Use CommBank Yellow for the single most important action and for hero panels.
- Put charcoal `#1E1E1E` text on yellow, always.
- Use 800-weight headings and 400 body, nothing in between.
- Make buttons 48px-tall pills with a 180px minimum width.
- Use `#1175B5` for links and focus rings only.

**Don't**

- Don't put white text on yellow.
- Don't fill buttons with blue or use yellow for body text.
- Don't use square-cornered buttons.
- Don't redraw the diamond or show it without its fold.
- Don't crowd yellow into every component; one yellow moment per view is typical.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of CommBank (Commonwealth Bank of Australia). White page, charcoal `#1E1E1E` text, secondary text `#706D6E`, dividers `#D3D2D2`, alternate sections `#F4F4F4`. Font: `"CBA Beacon Sans", "Nunito Sans", Helvetica, Arial, sans-serif`, only two weights: 800 for headings (48/40/32/24px with line heights 56/48/40/32px) and 400 for body (16px/24px). The brand colour is yellow `#FFCC00`: use it for the primary pill button (charcoal text, hover `#FFDB4D`, active `#D3A906`), a full-width yellow hero panel, a 16px yellow left border on content banners, and a 4px yellow underline on the active tab. Default buttons are white pills with a 1px `#706D6E` border, hover `#E9E9E9`. All buttons are 48px tall, 24px radius, min-width 180px, 16px weight 400. Links and focus rings are blue `#1175B5` (`box-shadow: 0 0 0 2px #1175B5`). Cards are white, 6px radius, shadow `0 3px 3px rgba(30,30,30,.16), 0 1px 8px rgba(30,30,30,.08)`. Ease `cubic-bezier(.39,.575,.565,1)` at .35s. Header: yellow diamond logo left, product links, "Log on" right.

```css
:root {
  --cba-yellow: #FFCC00;
  --cba-yellow-hover: #FFDB4D;
  --cba-yellow-pressed: #D3A906;
  --cba-charcoal: #1E1E1E;
  --cba-soft-black: #231F20;
  --cba-grey-70: #706D6E;
  --cba-grey-4f: #4F4C4D;
  --cba-border: #D3D2D2;
  --cba-light-grey: #E9E9E9;
  --cba-mist: #F4F4F4;
  --cba-link: #1175B5;
  --cba-bg: #FFFFFF;
  --cba-error: #E1001A;
  --cba-success: #00AA00;
  --cba-font: "CBA Beacon Sans", "Nunito Sans", Helvetica, Arial, sans-serif;
  --cba-radius-input: 2px;
  --cba-radius-card: 6px;
  --cba-radius-button: 24px;
  --cba-shadow-card: 0 3px 3px 0 rgba(30,30,30,0.16), 0 1px 8px 0 rgba(30,30,30,0.08);
  --cba-focus: 0 0 0 2px #1175B5;
  --cba-ease: cubic-bezier(.39,.575,.565,1);
}
```

---

Values are observed from the public product; this file is an unofficial reference and is not affiliated with or endorsed by Commonwealth Bank of Australia.
