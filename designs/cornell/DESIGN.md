---
name: Cornell University
shortName: "Cornell"
slug: cornell
url: https://www.cornell.edu
category: Education
tagline: "Carnelian red first and only, a red header band, Freight type and the Cornell seal."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Carnelian
    hex: "#B31B1B"
    role: Primary brand colour, header band, logo, headlines, kickers
  - name: Dark Gray
    hex: "#222222"
    role: Primary neutral, headlines and body text
  - name: White
    hex: "#FFFFFF"
    role: Page background, text and logo on Carnelian
  - name: Light Gray
    hex: "#F7F7F7"
    role: Secondary background, panels
  - name: Link Blue
    hex: "#006699"
    role: Accent, links and default buttons
  - name: Carnelian Dark
    hex: "#9D1818"
    role: Search bar, hover state of red buttons
  - name: Dark Warm Gray
    hex: "#A2998B"
    role: Secondary neutral background areas
  - name: Sea Gray
    hex: "#9FAD9F"
    role: Secondary neutral background areas
  - name: Navy
    hex: "#073949"
    role: Accent, neutral dark background areas
  - name: Green
    hex: "#6EB43F"
    role: Accent graphic elements only
  - name: Orange
    hex: "#F8981D"
    role: Accent graphic elements only
  - name: Secondary Red
    hex: "#EF4035"
    role: Accent graphic elements only
  - name: Body Text
    hex: "#2F2F2F"
    role: Default body copy colour on cornell.edu
  - name: Rule Gray
    hex: "#E6E6E6"
    role: Dividers, input borders
fonts:
  display:
    family: "Freight Text Pro"
    fallback: "Source Serif 4"
    weights: [400, 500]
  body:
    family: "Freight Sans Pro"
    fallback: "Source Sans 3"
    weights: [300, 400, 500, 600, 700]
typeScale:
  - { role: Display, size: 72, weight: 400, lineHeight: 1.05, tracking: "0" }
  - { role: H2, size: 46, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: H3, size: 26, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: News Headline, size: 20, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Date, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Kicker, size: 13, weight: 700, lineHeight: 1.3, tracking: "0.03em" }
radii: { sm: 0, md: 2, lg: 20, pill: 9999 }
spacing: [5, 10, 15, 20, 30, 40, 60, 80]
shadows:
  - { name: Hairline Drop, value: "0 2px 0 rgba(0,0,0,0.05)" }
  - { name: Card, value: "0 1px 2px rgba(0,0,0,0.1)" }
  - { name: Flat Offset, value: "5px 5px 0 rgba(0,0,0,0.08)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#222222"
  muted: "#707070"
  border: "#E6E6E6"
  accent: "#B31B1B"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Cornell University

## 1. Visual Theme & Atmosphere

Cornell's identity has one governing idea, which its Brand Center calls the "first and only" rule: Carnelian red (`#B31B1B`) should be the first colour people see in a multi-colour layout, and the only colour when a medium is limited. On cornell.edu that means a solid Carnelian header band carrying the white seal-and-wordmark logo, red topic labels above news headlines, and red buttons, all on otherwise white or very light gray pages.

What makes it recognisable:

- **The red band.** The global header (`#cu-hdr`) is a full-width Carnelian strip with the reversed logo, utility links ("Apply", "Visit", "Give") and a search trigger. The search form drops down in a darker red (`#9D1818`).
- **Freight on everything.** Body, navigation and labels use Freight Sans Pro; news headlines and dates use Freight Text Pro, with dates in italic. The pairing is quiet and literary.
- **The seal.** The Cornell insignia (a shield with an open book and a chevron, the words "CORNELL UNIVERSITY" and "FOUNDED A.D. 1865" around it) sits left of the Palatino wordmark.
- **Proportions.** The Brand Center gives a rough split: about 20% Carnelian, 55% white, 15% dark gray, 7% secondary neutrals and 3% accents.
- **Ithaca.** Photography is dominated by gorges, McGraw Tower, Libe Slope, the lake and seasonal campus scenes, plus the New York City campus at Cornell Tech.

Density is medium. The homepage runs a hero slideshow of stories, a "Cornell Chronicle" news strip with topic labels, "Popular Destinations", a quote from Ezra Cornell and a dense footer with a live Ithaca weather readout.

## 2. Color Palette & Roles

All values below are from the Cornell Brand Center colour page (brand.cornell.edu/design-center/colors), read today, plus the live cornell.edu CSS for UI-only shades.

### Primary (about 90% of a layout)

| Name | Hex | Print | Accessible on | Use |
| --- | --- | --- | --- | --- |
| Carnelian | `#B31B1B` | PMS 187, CMYK 0/100/79/20 | White, Light gray | Seal, banners, backgrounds, headlines |
| Dark Gray | `#222222` | PMS Cool Gray 11 | White, Light gray | Seal, banners, headlines, body |
| White | `#FFFFFF` | n/a | Carnelian, Dark gray | Backgrounds, text on dark |

Logos may only be shown in Carnelian, black or white.

### Secondary (about 7%)

| Name | Hex | Print | Use |
| --- | --- | --- | --- |
| Light Gray | `#F7F7F7` | n/a | Backgrounds, secondary text on dark |
| Dark Warm Gray | `#A2998B` | PMS 403 | Neutral background areas, black text |
| Sea Gray | `#9FAD9F` | PMS 5635 | Neutral background areas, black text |

Secondary colours may not be used for banners or behind the Cornell logo.

### Accents (about 3%)

| Name | Graphic hex | Text-safe hex | Print | Use |
| --- | --- | --- | --- | --- |
| Link Blue | `#006699` | `#006699` | PMS Process Blue | Links, buttons |
| Green | `#6EB43F` | `#4B7B2B` (any size), `#578E32` (large) | PMS 369 | Graphic elements, small fills |
| Orange | `#F8981D` | `#D47500` (large only) | PMS 144 | Graphic elements, small fills |
| Secondary Red | `#EF4035` | `#DF1E12` | PMS Red 032 | Graphic elements, small fills |
| Navy | `#073949` | `#073949` | PMS 7463 | Neutral background areas |

Accents must never become the primary colour for a school, centre or department, and should not be used as full-colour bleeds.

### UI shades (from cornell.edu CSS)

| Name | Hex | Role |
| --- | --- | --- |
| Carnelian Dark | `#9D1818` | Search bar, red button hover |
| Carnelian Deeper | `#871414` | Pressed state |
| Body Text | `#2F2F2F` | Default body colour |
| Meta Gray | `#707070` | Dates, captions |
| Rule Gray | `#E6E6E6` | Dividers, input borders |
| Off White | `#FBFBFB` | Search input fill |
| Link Hover | `#005580` | Blue button hover |
| Neutral Button | `#555555` | Gray buttons |

### Contrast and mode

Carnelian on white is about 6.6:1 and passes AA for body text. The Brand Center states that web content must meet WCAG 2.0 AA (4.5:1 normal text, 3:1 for large text). Light mode only.

## 3. Typography

From the Brand Center typography page:

- **Palatino**: the primary serif; it appears in the Cornell logo. Use for formal communications and lockups.
- **Freight Text Pro**: contemporary serif used on web properties such as cornell.edu (Adobe Fonts).
- **Freight Sans Pro**: humanist sans for web and general use, many weights (Adobe Fonts).
- **Frutiger**: sans for bold headline statements in print.

On the web, use Freight Text Pro and Freight Sans Pro. Google Fonts stand-ins: Source Serif 4 and Source Sans 3. For Palatino, Domine or EB Garamond are reasonable substitutes, but never rebuild the logo with them.

### Scale (from cornell.edu CSS)

| Role | Family | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero headline (`h1.cu-headline`) | Freight Sans | 54 / 64 / 72px | 400 | 1.05 | Grows at 36em and 60em |
| Section headline (`h2.cu-headline`) | Freight Sans | 32 / 36 / 46px | 400 | 1.15 | |
| H3 / feature | Freight Sans | 24-26px | 400 | 1.3 | |
| News headline | Freight Text | 20px (26px featured) | 400 | 1.5 | Black `#000` |
| Body | Freight Sans | 18px | 400 | 1.6 | `#2F2F2F` |
| Date | Freight Text Italic | 16px | 400 | 1.4 | `#707070` |
| Topic kicker | Freight Sans | 13px | 700 | 1.3 | Uppercase, Carnelian |
| Tabs | Freight Sans | 13px | 700 | 1.3 | |

### Rules

- Headlines are light or regular weight; Cornell does not shout with heavy type.
- Uppercase only for small topic labels.
- Italic serif for dates and attributions.
- Lining numerals in UI; the weather readout ("44 °F / 7 °C") uses the sans.

## 4. Logo & Brand Mark

The Cornell logo is the **seal** (insignia) beside the **"Cornell University" wordmark** in Palatino. The `logo.svg` here is the wordmark in Carnelian; the `icon.svg` is the seal reversed to white on Carnelian.

- **Versions (Brand Center):** Bold logo and bold seal for print over 3/4 inch tall; Simple logo and simple seal on the web between 73 and 120px; Reduced logo at exactly 45px tall; Reduced wordmark below 3/4 inch.
- **Colours:** Carnelian, black or white only.
- **Clear space:** nothing closer than one quarter of the seal's diameter.
- **Rules:** the simple seal must not exceed 120px; no watermarking, screening or cropping of the seal; the logo appears only once on a homepage or piece; do not create your own art for the logo, seal or wordmark.
- **Units:** colleges and schools use official lockups from the Brand Center's brand architecture.

## 5. Components

### Buttons

```css
.btn {
  display: inline-block;
  padding: 10px 20px; min-height: 44px;
  font: 600 16px/1.4 "Freight Sans Pro", "Source Sans 3", sans-serif;
  color: #FFFFFF; background: #006699;
  border: 0; border-radius: 0;
  transition: background-color 200ms;
}
.btn:hover, .btn:focus { background: #005580; text-decoration: none; }
.btn-red { background: #B31B1B; }
.btn-red:hover { background: #9D1818; }
.btn-grey { background: #555555; }
.btn-grey:hover { background: #484848; }
.btn-outline-light { background: transparent; color: #FFFFFF; border: 3px solid #CCCCCC; }
.btn:focus-visible { box-shadow: 0 0 0 5px #B31B1B; outline: none; }
```

Square corners throughout. Slideshow controls are the one round element (circles with a 50px radius).

### Inputs and search

```css
.search-input {
  height: 40px; padding: 5px 0.5em;
  background: #FBFBFB; border: 1px solid #E6E6E6;
  font: 400 24px "Freight Sans Pro", sans-serif;
}
.search-submit { width: 40px; background: #B31B1B; color: #FFFFFF; border: 0; }
```

On the search results page the input is 90px tall with 40px type. The header search drops a 52px `#9D1818` bar.

### News list (Cornell Chronicle)

- Topic kicker: Freight Sans 13px 700 uppercase Carnelian ("Science & Tech", "Campus", "Washington, D.C.").
- Headline: Freight Text 20px black, 1.5 line height.
- Date: Freight Text italic 16px `#707070`.
- Divider: a 1px `#E6E6E6` rule a third of the item width under each item.
- Footer links: "More news", "For media".

### Header

- Carnelian band, white logo at left (simple logo, 73-120px tall region).
- Main nav: "About Cornell", "Admissions", "Academics", "Research", "Public Engagement", "Life at Cornell", each opening a mega panel with an overview link, a link list and "Related Links".
- Utility actions: "Apply", "Visit", "Give"; audience links: "Students", "Families", "Faculty & Staff", "Alumni".
- Alert strip above the band for urgent notices.

### Tabs

Freight Sans 13px 700 with 2.5em spacing. The active indicator is a Carnelian bar (`.tab-indicator`).

### Quote cards

Full Carnelian panels with white Freight text at 35px, centred, 80px vertical padding. The footer quote ("I would found an institution where any person can find instruction in any study." Ezra Cornell, 1868) is the signature example.

### Footer

White or light gray, multi-column "Helpful Links", "Visiting Cornell" and "Ithaca" groups with expand toggles on mobile, a live weather readout, then University Relations, privacy, equal opportunity, web accessibility and copyright links, and "Ithaca, New York".

## 6. Layout & Spacing

- **Max width:** 79em (about 1264px) for the main grid; some sections 75em.
- **Breakpoints:** 26em, 36em, 52em, 60em (main desktop switch), 69em, 79em, 90em.
- **Grid:** 12 columns with percentage widths; news in 3 or 4 columns.
- **Spacing:** multiples of 5-10px; 40-60px between sections.
- **Density:** medium; generous line height in news lists.

## 7. Depth, Elevation & Motion

- Flat. Shadows are hairlines: `0 2px 0 rgba(0,0,0,0.05)` under bars, `0 1px 2px rgba(0,0,0,0.1)` on cards, occasional `5px 5px 0 rgba(0,0,0,0.08)` flat offsets.
- Hover on media shows a play overlay or rollover in Carnelian.
- Transitions: 200ms on background colour and text colour. Slideshows advance with simple slides; provide pause controls.

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`fontcustom`) of simple solid glyphs; arrows and chevrons in Carnelian or white.
- **Photography:** Ithaca gorges and waterfalls, Cayuga Lake, McGraw Tower, Libe Slope in all seasons, labs, farms and Cornell Tech on Roosevelt Island. Bright, outdoorsy, often wide.
- **Treatment:** no colour overlays except dark scrims for legibility; Carnelian appears in UI, not over photos.

## 9. Voice & Microcopy

Direct, public-spirited, rooted in the founding principle of education for "any person ... any study".

- Navigation and actions: "About Cornell", "Admissions", "Academics", "Research", "Public Engagement", "Life at Cornell", "Apply", "Visit", "Give".
- Section titles: "Cornell Chronicle", "Popular Destinations", "Helpful Links", "Experience Cornell".
- Link calls: "More news", "For media", "Explore Cornell Research".
- Say "Cornell" or "Cornell University"; use official college names from the nomenclature guide.

## 10. Do's and Don'ts

**Do**

- Make Carnelian the first colour in any layout, and the only one in limited media.
- Use the red header band with the reversed logo.
- Set web type in Freight Sans and Freight Text.
- Keep accents to small graphic elements and use their text-safe shades for any text.
- Keep corners square.

**Don't**

- Don't show the logo in any colour other than Carnelian, black or white.
- Don't use secondary greys behind the logo or for banners.
- Don't crop, screen or watermark the seal, or exceed 120px for the simple seal.
- Don't let an accent colour become a unit's primary colour.
- Don't repeat the logo on one page.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Cornell University. Full-width Carnelian `#B31B1B` header band with a white logo, utility links ("Apply", "Visit", "Give") and a search trigger that opens a `#9D1818` bar. White page, light gray `#F7F7F7` panels, dark gray `#222222` headlines, body text `#2F2F2F`. Freight Sans Pro (fallback Source Sans 3) for headlines at light/regular weight (72/46/26px), nav and body 18px; Freight Text Pro (fallback Source Serif 4) for 20px news headlines and italic 16px `#707070` dates. Uppercase 13px bold Carnelian topic labels. Square buttons: Link Blue `#006699` by default (hover `#005580`), Carnelian for emphasis (hover `#9D1818`). Carnelian quote panels with white serif text. Accents (green `#6EB43F`, orange `#F8981D`) only as small graphics. Ithaca photography.

```css
:root {
  --brand-carnelian: #B31B1B;
  --brand-carnelian-dark: #9D1818;
  --brand-dark-gray: #222222;
  --brand-white: #FFFFFF;
  --brand-light-gray: #F7F7F7;
  --brand-text: #2F2F2F;
  --brand-text-meta: #707070;
  --brand-border: #E6E6E6;
  --brand-link: #006699;
  --brand-link-hover: #005580;
  --brand-warm-gray: #A2998B;
  --brand-sea-gray: #9FAD9F;
  --brand-navy: #073949;
  --brand-green: #6EB43F;
  --brand-green-text: #4B7B2B;
  --brand-orange: #F8981D;
  --brand-red-accent: #EF4035;
  --brand-font-serif: "Freight Text Pro", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "Freight Sans Pro", "Source Sans 3", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-shadow-card: 0 1px 2px rgba(0, 0, 0, 0.1);
  --brand-content-width: 79em;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Cornell University.
