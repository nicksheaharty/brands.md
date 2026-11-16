---
name: Discover
slug: discover
url: https://discover.com
category: Banking
tagline: "Sunset-orange accents, deep navy and rounded Discover Sans for cards and online banking."
updated: 2026-11-16
appStoreId: 338010821
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Discover Orange
    hex: "#FF6000"
    role: Brand accent, the "O" in the logo, active tabs, highlights
  - name: Night Navy
    hex: "#23233F"
    role: App icon and dark hero backgrounds, search text
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Sunset Light
    hex: "#F9A020"
    role: Light end of the orange gradient in the logo and hero art
  - name: Button Orange
    hex: "#EA6A28"
    role: Primary button fill on legacy templates
  - name: Ink
    hex: "#293033"
    role: Body text
  - name: Orange Pressed
    hex: "#E94D00"
    role: Button hover and pressed
  - name: Link Blue
    hex: "#2477AB"
    role: Inline text links
  - name: Harbor Blue
    hex: "#022A48"
    role: Dark headings and text on orange
  - name: Slate
    hex: "#63686B"
    role: Secondary text, placeholders
  - name: Grey Line
    hex: "#DBDBDB"
    role: Borders, dividers, tab underline
  - name: Paper
    hex: "#F8F8F8"
    role: Light section background
  - name: Ember
    hex: "#F47521"
    role: Dark end of the logo gradient
  - name: Success
    hex: "#3C763D"
    role: Positive status (approximate role)
  - name: Alert Red
    hex: "#A94442"
    role: Errors (approximate role)
fonts:
  display:
    family: "Discover Sans"
    fallback: "Barlow"
    weights: [600, 700]
  body:
    family: "Discover Sans"
    fallback: "Barlow"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 48, weight: 700, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading L, size: 36, weight: 700, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading M, size: 28, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Heading S, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Button, size: 19, weight: 700, lineHeight: 1.05, tracking: "0" }
  - { role: Body, size: 16, weight: 500, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Legal, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 6, lg: 10, pill: 20 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64]
shadows:
  - { name: Card, value: "0 1px 3px 0 rgba(102,102,102,0.3)" }
  - { name: Soft, value: "0 2px 10px 0 #DBDBDB" }
  - { name: Tab Rule, value: "0 9px 0 -6px #DBDBDB" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#293033"
  muted: "#63686B"
  border: "#DBDBDB"
  accent: "#FF6000"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Discover

## 1. Visual Theme & Atmosphere

Discover's site sells credit cards (Discover it®), online banking and personal and student loans. It is clean, white and practical, with orange as the one colour everyone remembers: the glowing "O" in the wordmark, which reads like a setting sun. The mobile app pushes that further with a deep navy background and a large orange half-sun.

On discover.com today the menu also carries a "Discover + Capital One FAQ" link, reflecting Capital One's ownership of Discover.

What makes it recognisable:

- **The sunset O.** An orange gradient circle (`#F47521` to `#F9A020`) replaces the "O" in DISCOVER. Brand art echoes it as large half-circles and warm gradients.
- **Orange as accent, not background.** Orange `#FF6000` marks active tabs (a 5px bar), menu highlights and key buttons. Most of the page stays white with dark grey text.
- **Rounded, friendly type.** Discover Sans is a geometric sans with soft curves, used in Book, Medium, Semibold and Bold. Body copy is set in Medium, so the site feels slightly heavier than most banks.
- **Rounded buttons.** Buttons have a 20px radius (pill-like at their 36-40px height) with bold 19px labels.
- **Product grid.** Below the hero: "5% cash back", "Check if you're pre-approved", and a grid of products (Credit Card, Online Banking, Personal Loans, Student Loans).

Mood words: friendly, clear, warm, approachable, everyday.

## 2. Color Palette & Roles

Values below are read from discover.com's base and homepage CSS. The CSS still carries a Bootstrap 3 layer, so some defaults (`#337AB7`, `#DFF0D8`) appear in forms and alerts.

| Name | Hex | Role |
|---|---|---|
| Discover Orange | `#FF6000` | Active nav pills, tab underline bar, menu highlight, CTAs on network pages |
| Button Orange | `#EA6A28` | `.btn-primary` fill on legacy templates |
| Orange Pressed | `#E94D00` | Button hover |
| Sunset Light | `#F9A020` | Light end of the logo gradient |
| Ember | `#F47521` | Dark end of the logo gradient |
| Night Navy | `#23233F` | App background, dark hero, search text |
| Harbor Blue | `#022A48` | Dark headings, text on orange buttons |
| Link Blue | `#2477AB` | Inline links (underline on hover) |
| Ink | `#293033` | Body text (`body { color: #293033 }`) |
| Slate | `#63686B` | Secondary text, placeholders |
| Grey Line | `#DBDBDB` | Borders, dividers, tab rule shadow |
| Light Grey | `#EEEEEE` | Table stripes, quiet panels |
| Paper | `#F8F8F8` | Light section background |
| White | `#FFFFFF` | Page and card background |

### Semantic

| State | Hex | Notes |
|---|---|---|
| Success | `#3C763D` on `#DFF0D8` | Bootstrap-style alert (approximate role) |
| Warning | `#8A6D3B` on `#FCF8E3` | Bootstrap-style alert (approximate role) |
| Error | `#A94442` on `#F2DEDE` | Form errors (approximate role) |
| Info | `#31708F` on `#D9EDF7` | Notices (approximate role) |

### Mode

The website is light. The iPhone app icon and app splash use Night Navy `#23233F` with the white wordmark and an orange half-sun, which is a good model for dark surfaces.

## 3. Typography

- **Family:** Discover Sans, a proprietary family loaded as separate faces: Book, Medium, Semibold, Bold, Extrabold, plus Discover Sans Condensed. CSS references them through variables like `var(--DiscoverSans-Medium)`.
- **Default:** body is Discover Sans **Medium**; headings use Semibold or Bold.
- **License:** proprietary. **Barlow** is a close free stand-in (similar geometry and widths); Figtree also works.

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero (desktop) | 48px | Bold 700 | 1.1 (approximate) |
| h1 | 36px | Bold 700 | 1.15 |
| h2 | 28px | Semibold 600 | 1.2 (approximate) |
| h3 / card title | 20px | Semibold 600 | 1.3 (approximate) |
| Button | 19px (`1.1875em`) | Bold 700 | 20px |
| Body | 16px | Medium 500 | 1.5 |
| Small | 14px | Book 400 | 1.45 |
| Legal / disclosure | 12px | Book 400 | 1.4 |

Rules:

- Sentence or title case for headings: "Making Your Finances Work Harder For You", "Take Discover with you".
- Product names keep the ® and lowercase "it": "Discover it® Cash Back".
- Big numbers for rewards ("5% cash back"); always pair them with a disclosure link.
- The Network pages use Discover Sans Book weight 300 with -0.02em tracking for large headings.

## 4. Logo & Brand Mark

The logo is "DISCOVER" in tight, bold capitals where the "O" is a filled circle with an orange gradient (light amber top-right to deep orange bottom-left). A small ® sits at the top right.

- **Colours:** black letters on white; white letters on navy. The "O" is always the orange gradient.
- **Clear space:** at least the circle's radius on every side (approximate).
- **Minimum size:** about 90px wide on screen (approximate).
- **Icon:** the app uses the full white wordmark on navy with a big orange half-circle rising from the bottom edge.

Misuse:

- Don't flatten the "O" into a different colour or replace it with a letter.
- Don't separate the circle as a standalone logo on Discover's own surfaces.
- Don't place the wordmark on orange.

## 5. Components

### Buttons

| Variant | CSS |
|---|---|
| Primary | `background:#EA6A28; color:#fff; border:0; border-radius:20px; padding:8px 20px; min-width:74px; max-width:264px; font:700 19px/20px "Discover Sans";` |
| Primary hover | `background:#E94D00;` |
| Network CTA | `background:#FF6000; border-color:#FF6000; color:#022A48; font-family:"Discover Sans Bold";` |
| Secondary / outline | `background:#fff; color:#23233F; border:2px solid #23233F; border-radius:20px;` (approximate) |
| Text link | `color:#2477AB; text-decoration:none;` hover underline |
| Log In | header button opening a modal dialog, white with dark text (approximate) |

### Header and menu

- White bar, logo left, "Menu" trigger and product groups: Credit Cards ("Earn generous rewards"), Online Banking ("See checking & savings"), Personal Loans ("Consolidate debt & save"), Student Loans, Home Loans.
- Each group lists products with short subtitles: "All Credit Cards", "Cash Back Credit Cards", "Discover it® Cash Back", "Compare Credit Cards".
- Help column: "Card Help Center", "Banking Help Center", "Discover + Capital One FAQ".
- Right: search and "Log In" (opens a modal).
- Active menu item: white text on `#FF6000`.

### Tabs

```css
.tab { padding:12px 16px; color:#293033; font-weight:600; position:relative; box-shadow:0 9px 0 -6px #DBDBDB; }
.tab.active .orange-border { display:block; position:absolute; left:0; bottom:0; width:100%; height:5px; background:#FF6000; }
```

### Product cards

- White, 6-10px radius, `box-shadow: 0 1px 3px rgba(102,102,102,0.3)` or `0 2px 10px #DBDBDB`.
- Icon or card art on top, Semibold 20px title, one line of body, orange or blue link.
- Credit card art shown at a slight angle with its own soft shadow.

### Help strip

"How can we help?" block: a 140 x 3px orange rule above the label (`.question-border`), then a row of help links.

### Inputs

- Bootstrap-derived: 1px `#CCC` border, 4px radius, `inset 0 1px 1px rgba(0,0,0,0.075)`, placeholder `#63686B`.
- Focus: border `#66AFE9` style glow on legacy forms; on new forms use a 2px orange or navy outline (approximate).

### Disclosures

Superscript markers next to offers link to 12px legal text at the bottom of the page.

### Footer

White or light grey, columns "Products", "Products & Services", "About Our Company", "Resources & Legal", "Quick Links", plus an FDIC sign and an exit dialog "You are now leaving Discover."

## 6. Layout & Spacing

- Content width about 1170-1200px (Bootstrap container) with 15px gutters (approximate).
- 12-column grid; product cards 3 or 4 across on desktop, single column on mobile.
- Spacing scale based on 4px with frequent 8, 16, 20 and 32px steps.
- Sections are 48-64px apart; hero 400-560px tall.
- Breakpoints: 768, 992, 1200px (Bootstrap).

## 7. Depth, Elevation & Motion

- Light, grey-tinted shadows: `0 1px 3px rgba(102,102,102,0.3)` for cards, `0 2px 10px #DBDBDB` for floating elements.
- Pressed buttons use `inset 0 3px 5px rgba(0,0,0,0.125)`.
- Tabs fake a bottom rule with `0 9px 0 -6px #DBDBDB`.
- Motion is minimal: 150-200ms colour changes, modal fade.

## 8. Iconography & Imagery

- Icons: a custom icon font (`dnicons`) plus FontAwesome; simple solid or line glyphs, 20-32px, grey or orange.
- Imagery: card art, smiling cardmembers, lifestyle photos with warm light, and the orange sun motif.
- Gradients: warm amber to orange for brand art only.

## 9. Voice & Microcopy

- Friendly, plain and reassuring. Discover leans on helpfulness and no-fee messages.
- Short benefit headlines with clear CTAs.
- Legal disclosures always close by.

Sample strings:

- "Making Your Finances Work Harder For You"
- "Free benefits that just make sense"
- "Fast and easy checkout"
- "Check if you're pre-approved"
- "Take Discover with you"
- "How can we help?"
- Buttons: "Apply Now", "Log In", "Learn More" (approximate set)

## 10. Do's and Don'ts

**Do**

- Keep pages white with dark grey `#293033` text and orange `#FF6000` accents.
- Use the orange gradient circle or half-sun as the one hero graphic.
- Use rounded 20px buttons with bold 19px labels.
- Mark active tabs with a 5px orange bar.
- Pair reward numbers with visible disclosures.

**Don't**

- Don't use orange for body text or large flat backgrounds.
- Don't use cold blues as primary colours; blue is only for text links.
- Don't drop the ® on product names.
- Don't invent rates or reward terms; read them on discover.com.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Discover. White page, body text `#293033` in Discover Sans Medium (use Barlow 500), 16px/1.5. Headings in Bold or Semibold: 36-48px hero, 28px h2, 20px card titles. Brand accent is orange `#FF6000`, used for active tabs (a 5px bar under the label), menu highlights and the sun graphic. Primary buttons are orange `#EA6A28` with white bold 19px labels, `border-radius:20px`, `padding:8px 20px`, hover `#E94D00`. Links are blue `#2477AB`. Hero uses a deep navy `#23233F` panel with white headline and a large orange gradient half-circle (`#F47521` to `#F9A020`) rising from the bottom edge. Product cards are white with 8px radius and `0 1px 3px rgba(102,102,102,0.3)`. Light sections use `#F8F8F8`, borders `#DBDBDB`. Add a "How can we help?" strip with a short orange rule above it, and 12px disclosures at the bottom. Friendly, plain copy.

```css
:root {
  --discover-orange: #FF6000;
  --discover-orange-btn: #EA6A28;
  --discover-orange-pressed: #E94D00;
  --discover-sun-light: #F9A020;
  --discover-sun-dark: #F47521;
  --discover-navy: #23233F;
  --discover-harbor: #022A48;
  --discover-ink: #293033;
  --discover-slate: #63686B;
  --discover-link: #2477AB;
  --discover-line: #DBDBDB;
  --discover-paper: #F8F8F8;
  --discover-white: #FFFFFF;
  --discover-font: "Discover Sans", "Barlow", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --discover-radius-sm: 4px;
  --discover-radius-card: 8px;
  --discover-radius-btn: 20px;
  --discover-shadow-card: 0 1px 3px 0 rgba(102,102,102,0.3);
  --discover-shadow-soft: 0 2px 10px 0 #DBDBDB;
  --discover-tab-rule: 0 9px 0 -6px #DBDBDB;
  --discover-sun: linear-gradient(45deg, #F47521 0%, #F9A020 100%);
}
```

---

Values are observed from the public discover.com site and its CSS on 2026-11-16; values marked approximate are estimates. This file is an unofficial reference and is not affiliated with or endorsed by Discover or Capital One.
