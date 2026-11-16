---
name: Los Angeles Times
shortName: LA Times
slug: la-times
url: https://latimes.com
category: News
tagline: "Blackletter masthead, Kis Display headlines, Georgia body and teal links on white."
updated: 2026-11-16
appStoreId: 373238146
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Masthead, headlines, brand background (footer, app icon)
  - name: Astral Teal
    hex: "#087DA1"
    role: Links, current nav item, service buttons
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark
  - name: Scarlet
    hex: "#EB0000"
    role: Breaking, live and error states
  - name: Calypso
    hex: "#076583"
    role: Link hover, deep teal text
  - name: Mine Shaft
    hex: "#333333"
    role: Article body text, dark neutral
  - name: Dove
    hex: "#666666"
    role: Eyebrows, timestamps, descriptions
  - name: Fountain
    hex: "#3DABBF"
    role: Teal on dark backgrounds
  - name: Turquoise
    hex: "#68D0E2"
    role: Teal hover on dark, light accents
  - name: Mercury
    hex: "#E6E6E6"
    role: Neutral borders and rules
  - name: Cloud
    hex: "#CCCCCC"
    role: Strong borders, muted text on dark
  - name: Desert Storm
    hex: "#F8F8F8"
    role: Neutral module background
  - name: Antique Bronze
    hex: "#715617"
    role: Endorsement and opinion label text
  - name: Soapstone
    hex: "#FCFAF6"
    role: Endorsement module background
fonts:
  display:
    family: "FB Kis Display"
    fallback: "Libre Caslon Text"
    weights: [500, 600, 700]
  body:
    family: "Georgia"
    fallback: "Gelasio"
    weights: [400, 700]
typeScale:
  - { role: Article headline, size: 50, weight: 500, lineHeight: 1.08, tracking: "-0.2px" }
  - { role: Article headline tablet, size: 40, weight: 500, lineHeight: 1.125, tracking: "-0.2px" }
  - { role: Deck (subheadline), size: 22, weight: 300, lineHeight: 1.36, tracking: "-0.2px" }
  - { role: Module headline, size: 22, weight: 700, lineHeight: 1.18, tracking: "-0.2px" }
  - { role: Promo title, size: 18, weight: 600, lineHeight: 1.25, tracking: "-0.2px" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Byline, size: 14, weight: 700, lineHeight: 1.3, tracking: "0" }
  - { role: Promo byline, size: 11, weight: 500, lineHeight: 1.1, tracking: "0.02em" }
radii: { sm: 4, md: 5, lg: 10, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60]
shadows:
  - { name: Menu, value: "0 1px 5px 0 rgba(0,0,0,0.15)" }
  - { name: Popover, value: "0 0 20px 0 rgba(0,0,0,0.2)" }
  - { name: Overlay, value: "0 2px 5px 0 rgba(0,0,0,0.5)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F8F8"
  text: "#000000"
  muted: "#666666"
  border: "#E6E6E6"
  accent: "#087DA1"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Los Angeles Times

## 1. Visual Theme & Atmosphere

The Los Angeles Times looks like a classic metropolitan broadsheet translated to the web with very few tricks. The masthead is a blackletter "Los Angeles Times", headlines are a sharp transitional serif, body copy is Georgia, and a single teal does the interactive work. Black, white and grey carry nearly everything else.

What makes it recognisable:

- **Blackletter masthead.** The gothic "Los Angeles Times" nameplate sits centred across the top of the homepage and shrinks into the sticky header on scroll. The standalone blackletter "L" is the app icon.
- **Kis Display headlines.** FB Kis Display, a crisp high-contrast serif from Font Bureau, is used for headlines at weights 500-700 with a slight negative tracking (`-0.2px`).
- **Teal links, not blue.** Interactive text is Astral `#087DA1`, hovering to Calypso `#076583`. On dark surfaces the teal lightens to Fountain `#3DABBF`.
- **Benton Gothic for service text.** Bylines, timestamps, eyebrows, nav and buttons use Benton Gothic, a Franklin-style grotesque, often in small uppercase.
- **Thin vertical rules.** Homepage columns are separated by 1px `#E6E6E6` rules (`box-shadow: 1px 0 0 var(--cms-color-neutral-border)`), which gives the grid a newspaper column feel.

Density is high on the homepage (many promos per column) and calm on article pages, which centre a narrow reading column.

## 2. Color Palette & Roles

Token names come from the site's CMS variables (`--cms-color-*` mapped to `--utility-color-*`).

| Name | Hex | Role |
|---|---|---|
| Black (`brand`) | `#000000` | Headlines, masthead, brand backgrounds, module borders |
| White | `#FFFFFF` | Page, text on dark |
| Astral (`service`) | `#087DA1` | Links, current nav item, service buttons, "Don't miss" label |
| Calypso (`service-1`) | `#076583` | Link hover |
| Fountain (`service-2`) | `#3DABBF` | Teal text on dark |
| Turquoise (`service-3`) | `#68D0E2` | Teal hover on dark, borders on teal |
| Mine Shaft | `#333333` | Story body text, disclaimers |
| Dove | `#666666` | Eyebrows, descriptions, timestamps, labels |
| Gunsmoke | `#858585` | Hover on section headers |
| Cloud | `#CCCCCC` | Strong borders, muted text on dark, sponsored label fill |
| Mercury | `#E6E6E6` | Neutral borders and column rules |
| Seashell | `#F1F1F1` | Light fills |
| Whitesmoke | `#F5F5F5` | Non-editorial (ads, partner) backgrounds |
| Desert Storm | `#F8F8F8` | Neutral module background |
| Scarlet | `#EB0000` | Breaking, live, progress, errors |
| Antique Bronze | `#715617` | Endorsement text |
| Kumera | `#81672B` | Endorsement border |
| Soapstone | `#FCFAF6` | Endorsement background |

### Semantic

| State | Value |
|---|---|
| Breaking / live | White on `#EB0000` |
| Error | `#EB0000` text and border |
| Sponsored | `#333333` text on `#CCCCCC` |
| Hover on text links | opacity 0.8 (`--utility-opacity-hover`) or color shift to Calypso |

### Dark surfaces

The footer, video sections and photo showcases use black backgrounds with white text, `#CCCCCC` muted text and Fountain `#3DABBF` links. There is no site-wide dark mode.

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Brand headings | **FB Kis Display** (Font Bureau) | Commercial; fallback metric-adjusted Times New Roman |
| Brand text (body) | **Georgia** | System font |
| Service text | **Benton Gothic** (Font Bureau) | Commercial |
| Service headings | **Benton Gothic Condensed Black** | Section and module titles in special packages |
| Utility | Proxima Nova | Some newer tools and newsletters |

Free fallbacks: **Libre Caslon Text** or **Source Serif 4** for Kis Display, **Gelasio** for Georgia (metric compatible), **Libre Franklin** for Benton Gothic.

```css
--cms-font-brand-heading: "FBKisDisplay", "Libre Caslon Text", "Times New Roman", serif;
--cms-font-brand-text: georgia, Gelasio, "Times New Roman", serif;
--cms-font-service-text: "BentonGothic", "Libre Franklin", arial, "Helvetica Neue", sans-serif;
```

### Scale (from production CSS)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Article headline, desktop | 50px | 500 Kis | 54px | -0.2px |
| Article headline, tablet | 40px | 500 Kis | 45px | -0.2px |
| Article headline, mobile | 30px | 500 Kis | about 34px | -0.2px |
| Subheadline (deck) | 22px | 300 Benton | 30px | -0.2px |
| Module / thread headline | 22px | 700 Kis | 26px | -0.2px |
| List item headline | 24px | 700 Kis | 28px | -0.2px |
| Promo title (small) | 18px | 600 Kis | about 22px | -0.2px |
| Body | 18px | 400 Georgia | about 1.6 (approximate) | 0 |
| Byline name | 14px | 700 Benton | 18px | 0 |
| Date / timestamp | 14px | 500 Benton | 18px | 0 |
| Promo byline | 11px | 500 Benton uppercase | 12px | slight |
| Ad label | 10px | Benton uppercase | 12px | 0 |

### Rules

- Headlines in sentence case, set in Kis with tight leading.
- Decks are light-weight sans (Benton 300), which contrasts with the serif headline above.
- Eyebrows and promo bylines are small uppercase sans in Dove grey.
- Body paragraphs open with a drop cap on feature stories, colored like the body text.

## 4. Logo & Brand Mark

The nameplate is **Los Angeles Times** in a blackletter (Old English) style, solid black. It is drawn artwork, not a font. The app icon and favicon use the single blackletter **L** in white on a near-black square.

- **Color versions:** black on white (primary), white on black.
- **Clear space:** at least the height of the lowercase letters on all sides.
- **Minimum size:** about 140px wide on screen; below that use the "L".
- **Header usage:** centred at about 300px wide on the homepage, shrinking to about 180px in the sticky header.

Misuse:

- Do not set the name in a blackletter font as a substitute for the artwork.
- Do not recolor the nameplate teal or red.
- Do not add outlines, shadows or texture.
- Do not use blackletter for headlines or UI; it belongs to the nameplate only.

## 5. Components

### Header and navigation

- Homepage: top utility row (date, "Subscribe" and "Log in" buttons), the large centred nameplate, then a horizontal section nav ("California", "Entertainment & Arts", "Food", "Business", "Politics", "Sports", "Opinion" and others) in Benton 14-15px, black, with the current section in Astral teal.
- Sticky header on scroll: white, about 60px, hamburger left, small nameplate centred, search and subscribe right, 1px `#E6E6E6` bottom border.
- The hamburger opens a full-height left panel with sections in Benton 16px and a black background variant on mobile.

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Subscribe (service) | `#087DA1` | `#FFFFFF` Benton 14px/700 | none | 4px | 8px 15px |
| Brand dark | `#000000` | `#FFFFFF` | none | 4px | 8px 15px |
| Outline | transparent | `#000000` | 1px `#000000` | 4px | 7px 14px |
| Text link | none | `#087DA1` | none | 0 | 0 |
| Tag pill | `#000000` | `#FFFFFF` 12px | none | 9999px | 4px 10px |

Hover: service fill to `#076583`; outline fills `#F8F8F8`. Focus: 2px teal outline.

### Promos (story cards)

- **Large promo:** 3:2 photo, Kis 30-36px/500 headline, 16px Georgia description in Dove, Benton 11px uppercase byline.
- **Medium promo:** photo on top, Kis 22px/700 headline, description optional.
- **Small promo:** 110-180px thumbnail on the right, Kis 18px/600 title, uppercase byline/timestamp below.
- **List promo:** title only, separated by 1px `#E6E6E6` rules.
- Column dividers: `box-shadow: 1px 0 0 #E6E6E6` on each column.
- Live video promos get a red "live" tag bottom-left of the image: `#EB0000`, white Benton 12px/700, 24px tall, 40px wide.

### Article page

- Breadcrumb section link in Benton 14px teal above the headline.
- Headline Kis 50px/500, max width about 1200px container but text column about 680px.
- Lead image full column width, caption in Benton 14px `#333333`, credit in Dove.
- Deck (subheadline): Benton 22px/300.
- Byline block: "By" prefix, author name Benton 14px/700, title below, Georgia 14px suffix, date in Benton 14px/500 Dove. Author headshot 40px circle.
- Body: Georgia 18px, `#333333`, about 1.6 line height (approximate), links teal underlined.
- **Pull quote:** Kis 28-32px/500 black, centred or left with a 2px black top rule (approximate).
- "Infobox" modules: Georgia 15px text in `#666666`, Benton 20-24px headings, 1px black top border.
- Endorsement and opinion packages use the bronze palette: `#715617` label text, `#81672B` border, `#FCFAF6` background.

### Breaking and live

- Breaking banner: full-width `#EB0000`, white Benton bold label "BREAKING" plus headline.
- Live updates pages: "LIVE" tag in red, timestamped entries with Benton 14px/700 times, thin left timeline.

### Newsletters

Newsletter sign-ups use the service style: Benton 20px/700 title, Georgia description, 44px email input with 1px `#CCCCCC` border and 4px radius, teal "Sign me up" button. Newsletter pages show each newsletter as a card with a square illustration.

### Inputs

1px `#CCCCCC` border, 4px radius, 44px height, Benton 16px text in `#333333`. Focus border `#087DA1`. Error `#EB0000`.

## 6. Layout & Spacing

- **Container:** max width 1200px (`max-w-300` in 4px Tailwind units), 20px side padding.
- **Homepage grid:** 3-4 columns with column rules; a central lead package flanked by narrower columns of small promos.
- **Breakpoints:** 568px, 768px, 1024px and 1240px appear in the image `sizes` rules.
- **Spacing:** values cluster on 5px steps: 5, 10, 15, 20, 30, 40px. Section gaps 40-60px.
- **Article column:** about 680px, with a right rail for ads and most-read on desktop.

## 7. Depth, Elevation & Motion

Flat by default. Depth is limited to menus and overlays.

| Use | Value |
|---|---|
| Dropdown menu | `0 1px 5px 0 rgba(0,0,0,0.15)` |
| Popover / modal | `0 0 20px 0 rgba(0,0,0,0.2)` |
| Media overlay | `0 2px 5px 0 rgba(0,0,0,0.5)` |
| Column rule | `1px 0 0 #E6E6E6` |

Motion: text hover drops opacity to 0.8 over about 150ms; menus slide in about 250ms; galleries swipe with standard Swiper easing.

## 8. Iconography & Imagery

- **Icons:** simple 2px line or solid glyphs at 20-24px in black; teal for interactive icons on service elements.
- **Photography:** staff photography is central: Southern California landscapes, wildfire and weather coverage, entertainment portraits, sports. Shown full color with no overlays except on video and showcase pages.
- **Showcase pages:** full-bleed photos with white text on a black gradient.
- **Illustration:** opinion and feature art is editorial illustration, often painterly or collage.

## 9. Voice & Microcopy

Measured and regional, with a strong California and entertainment focus. Headlines are descriptive full sentences.

- Sentence case headlines; small caps-like uppercase only for bylines and eyebrows.
- Buttons and CTAs short: "Subscribe", "Log In", "Sign me up", "Read more".
- Datelines and timestamps: "Nov. 16, 2026 3 PM PT".

Sample strings:

- Eyebrow: "CALIFORNIA"
- Byline: "By Jane Reporter, Staff Writer"
- Label: "live", "BREAKING", "Don't miss"
- Footer: "Copyright © 2026, Los Angeles Times"

## 10. Do's and Don'ts

**Do**

- Use a crisp high-contrast serif for headlines and Georgia for body.
- Use teal `#087DA1` for links and the main action, black for everything structural.
- Separate homepage columns with hairline vertical rules.
- Keep bylines and eyebrows in a small grotesque, uppercase where the site does.
- Reserve red for breaking, live and errors.

**Don't**

- Don't use blackletter outside the nameplate and app icon.
- Don't add rounded, shadowed cards to the news grid.
- Don't switch links to standard web blue.
- Don't use heavy headline weights above 700.
- Don't crowd the article column with colored panels.

## 11. Agent Prompt Guide

> Build this UI in the style of the Los Angeles Times. White page, black text, a blackletter "Los Angeles Times" nameplate centred at the top. Headlines in a sharp transitional serif ("FBKisDisplay", fallback "Libre Caslon Text") at weight 500-700 with -0.2px tracking; article headline 50px/54px desktop, 30px mobile. Body in Georgia 18px, `#333333`. Service text (nav, bylines, eyebrows, buttons) in a Franklin-style grotesque ("BentonGothic", fallback "Libre Franklin"), eyebrows 11px uppercase in `#666666`. Links and the subscribe button use teal `#087DA1` (hover `#076583`; on dark use `#3DABBF`). Breaking and live tags are `#EB0000` with white text. Homepage is a 1200px container with 3-4 columns separated by 1px `#E6E6E6` vertical rules, photo promos with serif titles and uppercase sans bylines. Flat design, 4px radius on buttons, spacing on 5px steps.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-teal: #087DA1;
  --brand-teal-hover: #076583;
  --brand-teal-on-dark: #3DABBF;
  --brand-teal-light: #68D0E2;
  --brand-red: #EB0000;
  --brand-text: #333333;
  --brand-muted: #666666;
  --brand-grey-hover: #858585;
  --brand-border-strong: #CCCCCC;
  --brand-border: #E6E6E6;
  --brand-surface: #F8F8F8;
  --brand-surface-alt: #F5F5F5;
  --brand-bronze: #715617;
  --brand-bronze-border: #81672B;
  --brand-soapstone: #FCFAF6;
  --brand-font-heading: "FBKisDisplay", "Libre Caslon Text", "Times New Roman", serif;
  --brand-font-body: georgia, Gelasio, "Times New Roman", serif;
  --brand-font-service: "BentonGothic", "Libre Franklin", arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 5px;
  --brand-radius-lg: 10px;
  --brand-shadow-menu: 0 1px 5px 0 rgba(0,0,0,0.15);
  --brand-shadow-popover: 0 0 20px 0 rgba(0,0,0,0.2);
  --brand-column-rule: 1px 0 0 #E6E6E6;
  --brand-hover-opacity: 0.8;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by the Los Angeles Times.
