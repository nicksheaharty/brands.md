---
name: Salesforce
slug: salesforce
url: https://salesforce.com
category: Productivity
tagline: "Cloud-blue logo, Avant Garde headlines, navy text and the Lightning Design System."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Salesforce Blue
    hex: "#00A1E0"
    role: Logo cloud
  - name: Brand Blue
    hex: "#0176D3"
    role: Primary buttons, links, focus (SLDS brand)
  - name: Deep Navy
    hex: "#032D60"
    role: Headlines, display text, dark sections
  - name: Dark Blue
    hex: "#014486"
    role: Primary button hover, pressed states
  - name: Cloud Blue 95
    hex: "#EAF5FE"
    role: Light blue section backgrounds
  - name: Text
    hex: "#181818"
    role: Body text
  - name: Text Secondary
    hex: "#444444"
    role: Secondary body, legal copy
  - name: Border
    hex: "#E5E5E5"
    role: Card borders, dividers
  - name: Surface
    hex: "#F3F3F3"
    role: Lightning app background
  - name: Indigo
    hex: "#5867E8"
    role: Agentforce and AI accents
  - name: Success
    hex: "#2E844A"
    role: Success toasts and badges
  - name: Error
    hex: "#BA0517"
    role: Errors and destructive actions
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
fonts:
  display:
    family: "ITC Avant Garde Gothic (Avant Garde for Salesforce)"
    fallback: "Poppins"
    weights: [500]
  body:
    family: "Salesforce Sans"
    fallback: "Source Sans 3"
    weights: [400, 700]
typeScale:
  - { role: Display, size: 64, weight: 500, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading 1, size: 48, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Heading 2, size: 32, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 3, size: 24, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: App Body, size: 13, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Eyebrow, size: 14, weight: 700, lineHeight: 1.4, tracking: "0.02em" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Small, value: "0 0 2px hsla(0,0%,9%,0.08), 0 2px 4px 1px hsla(0,0%,9%,0.16)" }
  - { name: Card, value: "0 2px 8px -2px hsla(0,0%,9%,0.08), 0 8px 12px -2px hsla(0,0%,9%,0.16)" }
  - { name: Raised, value: "0 12px 24px -4px hsla(0,0%,9%,0.08), 0 16px 32px -4px hsla(0,0%,9%,0.16)" }
  - { name: Overlay, value: "0 24px 48px -4px hsla(0,0%,9%,0.2)" }
preview:
  bg: "#FFFFFF"
  surface: "#EAF5FE"
  text: "#032D60"
  muted: "#444444"
  border: "#E5E5E5"
  accent: "#0176D3"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Salesforce

## 1. Visual Theme & Atmosphere

Salesforce runs two connected visual systems. **salesforce.com** is a friendly, illustrated marketing site: big Avant Garde headlines in deep navy, a sky-blue palette, the cloud logo and a cast of cartoon mascots (Astro, Codey, Einstein and friends) standing in front of rolling hills and skies. The **Lightning Experience** product, built on the Salesforce Lightning Design System (SLDS), is the opposite in density: a grey app canvas, white cards, 13px type, compact tables and record pages packed with fields.

What makes it recognisable:

- **The cloud.** A blue `#00A1E0` cloud with the white lowercase "salesforce" wordmark. It sits top-left everywhere.
- **Navy display type in Avant Garde.** Headlines use ITC Avant Garde (Demi, weight 500) in `#032D60`. The round geometric "o" and "a" are a big part of the look.
- **Blues stacked in layers.** Light cloud-blue section backgrounds (`#EAF5FE`), saturated brand blue buttons (`#0176D3`) and navy text. Accent palettes (teal, purple, indigo, pink, orange) mark individual products or campaigns.
- **Illustrated characters and landscapes.** Hills, trees, clouds and mascots in a flat, slightly textured style, often framing the hero or product screenshots.
- **Rounded cards.** Marketing cards use 16px corners and soft grey shadows; app cards use 4px corners.
- **Lightning record pages.** Highlights panel, path (chevron stage bar), tabs, related lists and an activity timeline.

Mood words: friendly, optimistic, corporate-confident, approachable enterprise.

## 2. Color Palette & Roles

### Marketing site (from salesforce.com CSS, `--pbc-g-*` tokens; token names shortened)

| Name | Hex | Role |
|---|---|---|
| Logo Blue | `#00A1E0` | Cloud logo |
| Blue 50 | `#0176D3` | Primary button fill, links, focus ring |
| Blue 40 | `#0B5CAB` | Hover on links and secondary states |
| Blue 20 | `#032D60` | Display headings, eyebrows, interactive text on light |
| Blue Natural 20 | `#1E2D50` | Alternate dark navy |
| Electric Blue 15 | `#001E5B` | Deep hero backgrounds |
| Electric Blue 50 | `#066AFE` | Newer electric accent, Agentforce pages |
| Cloud Blue 60 | `#0D9DDA` | Illustration blue, icons |
| Cloud Blue 80 | `#90D0FE` | Hover and focus text on dark |
| Cloud Blue 90 | `#CFE9FE` | Light fills |
| Cloud Blue 95 | `#EAF5FE` | Light section background |
| Indigo 50 | `#5867E8` | AI and Agentforce accents |
| Gray 20 | `#181818` | Body text |
| Gray 30 | `#444444` | Secondary text |
| Gray 50 | `#747474` | Muted text |
| Gray 60 | `#939393` | Disabled text |
| Gray 90 | `#E5E5E5` | Borders, dividers |
| White | `#FFFFFF` | Page |

### Product accent families

Each product or campaign can switch the display and eyebrow colors to a family. Use the 20-30 shade for text and the 95 shade for backgrounds.

| Family | Dark (text) | Mid | Light (bg) |
|---|---|---|---|
| Teal | `#024D4C` | `#06A59A` | `#DEF9F3` |
| Green | `#1C3326` | `#41B658` | `#EBF7E6` |
| Purple | `#401075` | `#7526E3` | `#F9F0FF` |
| Violet | `#481A54` | `#9602C7` | `#F9F0FF` |
| Pink | `#61022A` | `#E3066A` | `#FEF0F3` |
| Hot orange | `#4A2413` | `#D83A00` | `#FEF1EE` |
| Orange | `#5F3E02` | `#DD7A01` | `#FBF3E0` |
| Aubergine | `#4A154B` | `#6A2872` | (Slack pages) |

### Lightning Design System (product)

| Token | Hex | Role |
|---|---|---|
| Brand | `#0176D3` | Brand buttons, active tab underline |
| Brand dark | `#014486` | Brand hover/active |
| Text default | `#181818` | Body text |
| Text weak | `#444444` / `#747474` | Labels, meta text |
| Border | `#C9C9C9` | Input and button borders |
| Border light | `#E5E5E5` | Card and table dividers |
| Background | `#F3F3F3` | App canvas |
| Global header | `#FFFFFF` | Header bar |
| Success | `#2E844A` | Success toast, badges |
| Warning | `#DD7A01` (fill `#FE9339`) | Warning toast |
| Error | `#BA0517` (fill `#EA001E`) | Errors, destructive buttons |

Dark mode: the marketing site uses navy or electric-blue sections with white text and `#90D0FE` links instead of a global dark theme. Lightning has no general dark mode for most orgs.

## 3. Typography

**Display:** ITC Avant Garde Gothic, licensed as "Avant Garde for Salesforce", Demi weight (500). Used for headlines and big numbers on the marketing site. Localized pages swap to Seol Sans Heavy (Korean), Tazugane Info Heavy (Japanese) and M XiangHe Hei Bold (Chinese).

**Body:** Salesforce Sans, a humanist sans commissioned by Salesforce (Regular 400, Bold 700, with italics). Used for body copy, nav, buttons and the whole Lightning product.

**Licensing:** both are proprietary. Fallbacks: **Poppins** (500) for Avant Garde, **Source Sans 3** for Salesforce Sans. SLDS itself falls back to `-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.

```css
--font-display: "Avant Garde for Salesforce", "ITC Avant Garde", Poppins, system-ui, sans-serif;
--font-sans: "Salesforce Sans", "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
```

### Scale

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Display (hero) | 56-64px | 500 Avant Garde | 1.1 | navy, sentence case |
| Heading 1 | 48px | 500 | 1.15 | |
| Heading 2 | 32-40px | 500 | 1.25 | |
| Heading 3 | 24px | 500 | 1.3 | card titles |
| Eyebrow | 14px | 700 Salesforce Sans | 1.4 | colored by accent family |
| Body large | 20px | 400 | 1.5 | hero subcopy |
| Body | 16px | 400 | 1.5 | |
| Button | 16px | 700 | 24px | |
| Lightning body | 13px | 400 | 1.5 | product UI base size |
| Lightning heading | 16-20px | 700 | 1.25 | page header title |

Hero sizes are approximate (they scale with `clamp()`).

### Rules

- Sentence case for headlines and buttons on the marketing site ("Get started", "Watch demo").
- Display type is never bold beyond Demi; don't fake bold on Avant Garde.
- Product UI uses Title Case for object names and tab labels ("Opportunities", "Related").
- Numbers in stats use Avant Garde at 48px+ in navy.

## 4. Logo & Brand Mark

The logo is a puffy blue cloud (`#00A1E0`) containing the lowercase "salesforce" wordmark in white, with the long "f" crossing into the "o". It is the only lockup; there is no separate symbol.

- **Clear space:** about one quarter of the cloud height on all sides (approximate).
- **Minimum size:** about 40px wide on screen.
- **Color versions:** full-color blue cloud with white text (primary); white cloud with blue text on dark or photographic backgrounds.
- **Placement:** top-left of the global nav at about 64-80px wide; in Lightning, the org can replace it with its own logo.
- **Misuse:** don't recolor the cloud to accent colors, don't remove the wordmark, don't outline it, don't put the blue cloud on mid-blue backgrounds where it loses contrast.

## 5. Components

### Buttons (marketing site)

From salesforce.com: `--sds-c-button-radius-border: 4px`, 2px border, 16px font, 24px line height, 12px vertical padding.

```css
.sf-btn {
  font: 700 16px/24px "Salesforce Sans", "Source Sans 3", sans-serif;
  padding: 12px 24px; border-radius: 4px; border: 2px solid transparent;
  transition: background-color 150ms ease, color 150ms ease;
}
.sf-btn--primary { background: #0176D3; border-color: #0176D3; color: #FFFFFF; }
.sf-btn--primary:hover { background: #014486; border-color: #014486; }
.sf-btn--secondary { background: #FFFFFF; border-color: #0176D3; color: #0176D3; }
.sf-btn--secondary:hover { background: #EAF5FE; color: #014486; border-color: #014486; }
.sf-btn--text { background: transparent; border-color: transparent; padding: 0; color: #032D60; text-decoration: underline; }
.sf-btn:focus-visible { outline: 2px solid #0176D3; outline-offset: 2px; }
.sf-btn:disabled { background: #E5E5E5; border-color: #E5E5E5; color: #939393; }
```

Common pair in heroes: primary "Start free trial" and secondary "Watch demo". On navy, the primary turns white with navy text.

### Buttons (Lightning, SLDS)

32px tall, 0 16px padding, 4px radius (`.25rem`), 13px font.

- Neutral: white fill, `#C9C9C9` border, `#0176D3` text; hover `#F3F3F3`.
- Brand: `#0176D3` fill, white text; hover `#014486`.
- Outline brand: white fill, `#0176D3` border and text.
- Destructive: `#BA0517` fill, white text.
- Success: `#2E844A` fill, white text.
- Button groups share borders; the last one is often a dropdown chevron.

### Inputs (SLDS)

```css
.slds-input {
  height: 32px; padding: 0 12px; border-radius: 4px;
  background: #FFFFFF; border: 1px solid #C9C9C9; color: #181818;
  font: 400 13px/30px "Salesforce Sans", sans-serif;
}
.slds-input:focus { border-color: #1B96FF; box-shadow: 0 0 3px #0176D3; outline: none; }
.slds-has-error .slds-input { border: 2px solid #BA0517; }
```

Labels sit above, 12px, `#444444`. Required fields show a red `*` before the label.

### Global navigation (marketing)

White bar about 72px tall (approximate), cloud logo left, mega-menu triggers in 16px Salesforce Sans ("Products", "Industries", "Customers", "Learning", "Support", "Company"), then search, a sign-in link, a phone number and a primary "Try for free" button on the right. Mega-menus open as white panels with columns of product names and a featured card.

### Cards (marketing)

```css
.sf-card {
  background: #FFFFFF; border-radius: 16px; padding: 32px;
  box-shadow: 0 2px 8px -2px hsla(0,0%,9%,0.08), 0 8px 12px -2px hsla(0,0%,9%,0.16);
}
.sf-card:hover { box-shadow: 0 12px 24px -4px hsla(0,0%,9%,0.08), 0 16px 32px -4px hsla(0,0%,9%,0.16); }
```

Product cards carry a small product icon in its accent color, a 24px Avant Garde title, body text and a text link with a chevron.

### Cards (Lightning)

White, 4px radius, 1px `#E5E5E5` border, small shadow `0 2px 2px rgba(0,0,0,0.1)` (approximate). Header row with a colored object icon (24px rounded square), 14px bold title and action buttons on the right.

### Path (signature)

The stage bar on opportunity and lead records: a row of chevron-shaped segments. Completed stages fill green `#2E844A` (or brand blue in SLDS 2) with a check; the current stage is navy `#014486`; upcoming stages are grey `#F3F3F3`. "Mark Stage as Complete" button on the right.

### Tabs

Lightning tabs: 13px labels, active tab gets a 3px `#0176D3` bottom border and bold text. Marketing tabs use larger 16px labels with a navy underline.

### Data tables (SLDS)

Header row `#F3F3F3`, 12px uppercase-less labels in `#444444`, 32px rows, `#E5E5E5` dividers, hover `#F3F3F3`, selected `#EAF5FE`. Links in the first column are `#0176D3`. Inline edit shows a pencil on hover.

### Badges, pills and toasts

- Badge: `#F3F3F3` fill, 15rem radius pill, 12px bold text.
- Pill (selected value): white, 1px `#C9C9C9` border, 4px radius, close icon.
- Toast: full-width bar at top, success `#2E844A`, error `#BA0517`, warning `#FE9339` with dark text, info `#747474`; white text and icon.

### Modals

White, 4px radius, header with 20px title and a close button floating outside the top-right, footer `#F3F3F3` with buttons right-aligned. Backdrop `rgba(8,7,7,0.6)` (approximate).

## 6. Layout & Spacing

- **Marketing max width:** about 1280px content (approximate) with 24-40px side gutters; full-bleed colored bands and illustration scenes.
- **Section rhythm:** 64-96px between sections; hero padding larger.
- **Grid:** 12 columns on desktop; cards in 2, 3 or 4 columns.
- **Lightning spacing tokens:** 4, 8, 12, 16, 24, 32, 48px (`xxx-small` to `xx-large`).
- **Lightning record page:** highlights panel full width, then a two-thirds main column (Details, Related tabs) and a one-third sidebar (Activity, Chatter).
- **Breakpoints:** roughly 480, 768, 1024 and 1280px (approximate).

## 7. Depth, Elevation & Motion

Marketing shadows (from salesforce.com CSS) use a neutral `hsla(0,0%,9%,…)` with negative spread:

| Name | Value |
|---|---|
| Small | `0 0 2px hsla(0,0%,9%,.08), 0 2px 4px 1px hsla(0,0%,9%,.16)` |
| Card | `0 2px 8px -2px hsla(0,0%,9%,.08), 0 8px 12px -2px hsla(0,0%,9%,.16)` |
| Raised | `0 12px 24px -4px hsla(0,0%,9%,.08), 0 16px 32px -4px hsla(0,0%,9%,.16)` |
| Overlay | `0 24px 48px -4px hsla(0,0%,9%,.2)` |

- Card hover moves from Card to Raised over about 200ms.
- Lightning is mostly flat: 1px borders and a small 2px shadow on cards and dropdowns.
- Easing seen in site CSS: `cubic-bezier(0.3, 0, 0.15, 1)` and `cubic-bezier(0, 0.3, 0.15, 1)`. Durations 150-300ms.
- Loading on CTAs: three blinking dots inside the button (1.5s loop).

## 8. Iconography & Imagery

- **SLDS icons:** utility icons are solid, simple glyphs on a 52-unit grid shown at 16-24px; standard object icons sit in colored rounded squares (Account `#5867E8`, Opportunity `#FF5D2D`, Lead `#F88962`, Contact `#A094ED`, approximate).
- **Mascots:** Astro (raccoon-like explorer), Codey (bear), Einstein, Appy, Cloudy and others. Use them only in brand-like illustration, never as UI icons.
- **Illustration style:** flat vector scenes with hills, trees, clouds, mountains and soft gradients in cloud blue, green and navy.
- **Photography:** customer stories with real people in workplaces, warm and bright, often in rounded frames.
- **Product screenshots:** Lightning UI floated on cards over illustrated backgrounds.

## 9. Voice & Microcopy

Upbeat, direct, customer-first. Short headlines that name the outcome, followed by a plain sentence.

- From the live site today: "The #1 AI CRM" (page title), "Humans with Agents drive customer success together.", "Boost pipeline, win rate, and revenue with Sales Cloud."
- CTAs: "Start free trial", "Watch demo", "Talk to an expert", "Try for free", "Learn more"
- Eyebrows: "AGENTFORCE", "Sales Cloud" (product names in the accent color)
- Product: "New Opportunity", "Mark Stage as Complete", "Save & New", "Related", "Activity", "No items to display."
- Errors: "Review the errors on this page.", "Complete this field."

Sentence case on marketing; Title Case for object names and buttons in Lightning.

## 10. Do's and Don'ts

**Do**

- Set headlines in Avant Garde Demi (or Poppins 500) in navy `#032D60`.
- Use `#0176D3` for all primary actions, with 4px corners.
- Use light cloud blue `#EAF5FE` for alternating sections.
- Frame product screenshots with illustrated skies, hills or characters.
- Pick one accent family per page or product and use its dark shade for eyebrows.
- In app UI, keep 13px type, 32px controls and 4px radii.

**Don't**

- Don't use the logo cloud color `#00A1E0` for buttons or text; it fails contrast.
- Don't use pill-shaped buttons on the marketing site.
- Don't mix several accent families in one section.
- Don't set body copy in Avant Garde.
- Don't use mascots as icons or shrink them below recognisable size.
- Don't use heavy black shadows; keep them soft and spread-negative.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of salesforce.com. White page, headings in `"ITC Avant Garde", Poppins, sans-serif` weight 500 in deep navy `#032D60`; body in `"Salesforce Sans", "Source Sans 3", sans-serif` 16-20px in `#181818`. Primary buttons are `#0176D3` with white 16px bold text, 4px radius, 2px border, 12px x 24px padding, hover `#014486`; secondary buttons are white with a 2px `#0176D3` border. Alternate sections with light cloud blue `#EAF5FE`. Cards are white with 16px radius and shadow `0 2px 8px -2px hsla(0,0%,9%,.08), 0 8px 12px -2px hsla(0,0%,9%,.16)`, lifting on hover. Add a colored eyebrow above headlines using one accent family (teal `#024D4C`, purple `#401075` or indigo `#5867E8`). Place a blue cloud logo `#00A1E0` top-left in a white nav with a "Try for free" button on the right. Use flat illustrated skies and hills behind product screenshots. For app screens, switch to Lightning: `#F3F3F3` canvas, white 4px cards, 13px type, 32px buttons, a chevron "path" stage bar.

```css
:root {
  --brand-logo: #00A1E0;
  --brand-primary: #0176D3;
  --brand-primary-hover: #014486;
  --brand-navy: #032D60;
  --brand-navy-deep: #001E5B;
  --brand-electric: #066AFE;
  --brand-cloud-95: #EAF5FE;
  --brand-cloud-80: #90D0FE;
  --brand-indigo: #5867E8;
  --brand-teal: #06A59A;
  --brand-text: #181818;
  --brand-text-2: #444444;
  --brand-muted: #747474;
  --brand-border: #E5E5E5;
  --brand-border-input: #C9C9C9;
  --brand-app-bg: #F3F3F3;
  --brand-bg: #FFFFFF;
  --brand-success: #2E844A;
  --brand-warning: #DD7A01;
  --brand-error: #BA0517;
  --brand-font-display: "Avant Garde for Salesforce", "ITC Avant Garde", "Poppins", system-ui, sans-serif;
  --brand-font: "Salesforce Sans", "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --brand-radius-button: 4px;
  --brand-radius-card: 16px;
  --brand-radius-app: 4px;
  --brand-shadow-sm: 0 0 2px hsla(0,0%,9%,0.08), 0 2px 4px 1px hsla(0,0%,9%,0.16);
  --brand-shadow-card: 0 2px 8px -2px hsla(0,0%,9%,0.08), 0 8px 12px -2px hsla(0,0%,9%,0.16);
  --brand-shadow-raised: 0 12px 24px -4px hsla(0,0%,9%,0.08), 0 16px 32px -4px hsla(0,0%,9%,0.16);
  --brand-shadow-overlay: 0 24px 48px -4px hsla(0,0%,9%,0.2);
  --brand-ease: cubic-bezier(0.3, 0, 0.15, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Salesforce.
