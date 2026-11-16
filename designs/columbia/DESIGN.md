---
name: Columbia University
shortName: "Columbia"
slug: columbia
url: https://www.columbia.edu
category: Education
tagline: "Columbia Blue and deep navy, the crown, classical serif capitals and New York photography."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Columbia Blue
    hex: "#B9D9EB"
    role: Signature colour, light bands, highlights, crown backgrounds
  - name: Columbia Dark Blue
    hex: "#1D4F91"
    role: Headings, links, primary buttons, dark bands
  - name: Logo Navy
    hex: "#000D74"
    role: Crown and wordmark colour in the university lockup file
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark blue
  - name: Black
    hex: "#000000"
    role: Official secondary colour, high-contrast text and athletics
  - name: Ink
    hex: "#1A1A1A"
    role: Body text (approximate)
  - name: Gray
    hex: "#5A5A5A"
    role: Secondary text, captions (approximate)
  - name: Light Gray
    hex: "#F2F2F2"
    role: Section backgrounds (approximate)
  - name: Border Gray
    hex: "#D9D9D9"
    role: Dividers and input borders (approximate)
  - name: Pale Blue
    hex: "#E8F2F8"
    role: Tinted panels, selected rows (approximate)
  - name: Lions Blue
    hex: "#65B2E8"
    role: Brighter crown blue used by Columbia College artwork
fonts:
  display:
    family: "Classical serif (unverified)"
    fallback: "Libre Caslon Text"
    weights: [400, 700]
  body:
    family: "Humanist sans (unverified)"
    fallback: "Source Sans 3"
    weights: [400, 600, 700]
typeScale:
  - { role: Display, size: 52, weight: 400, lineHeight: 1.1, tracking: "0" }
  - { role: H1, size: 40, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 30, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Card Headline, size: 21, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 15, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Kicker, size: 12, weight: 700, lineHeight: 1.3, tracking: "0.12em" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 1px 3px rgba(29,79,145,0.12)" }
  - { name: Menu, value: "0 8px 24px rgba(0,13,116,0.14)" }
preview:
  bg: "#FFFFFF"
  surface: "#E8F2F8"
  text: "#1D4F91"
  muted: "#5A5A5A"
  border: "#D9D9D9"
  accent: "#1D4F91"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Columbia University

> Research note: columbia.edu and visualidentity.columbia.edu returned bot challenges when this file was written, so nothing was fetched from them. Brand colours come from Wikipedia (which cites Columbia's Visual Identity site) and the logo from Wikimedia Commons. UI measurements and typefaces below are approximate and marked as such.

## 1. Visual Theme & Atmosphere

Columbia's identity is built on one unusual colour and one symbol. Columbia Blue (`#B9D9EB`, Pantone 290 C) is pale, almost a sky tint, which is rare for a university whose peers use dark crimson, navy or green. Because a pale blue cannot carry text, the working palette pairs it with a deep blue (`#1D4F91`) and black, and leaves Columbia Blue for backgrounds, bands, accents and merchandise. The second constant is the crown, inherited from the university's founding in 1754 as King's College under a royal charter.

What makes it recognisable:

- **Pale blue plus deep blue.** Columbia Blue fills; the darker blue (or the lockup navy) speaks. Black is the official second colour.
- **The crown.** A five-point royal crown with a cross on top and crosses on the band, used alone as an icon or to the left of the wordmark.
- **Classical capitals.** The wordmark sets "COLUMBIA UNIVERSITY" in serif capitals with a smaller line "IN THE CITY OF NEW YORK" beneath.
- **New York.** Photography mixes the Morningside Heights campus (Low Library, Butler Library, College Walk, the Alma Mater statue) with the city around it.
- **Restraint.** White pages, serif display type, thin rules, square corners.

Density is medium. Expect a front-page structure (approximate): a hero story, a row of news cards from Columbia News, featured events, school links and a dark footer.

## 2. Color Palette & Roles

### Official

| Name | Hex | Print | Source |
| --- | --- | --- | --- |
| Columbia Blue | `#B9D9EB` | Pantone 290 C | Wikipedia, citing Columbia's Visual Identity site |
| Columbia Dark Blue | `#1D4F91` | approx. | Wikipedia college colour data, citing Columbia's brand guide |
| Black | `#000000` | Black | Same source |
| White | `#FFFFFF` | n/a | Same source |

Wikipedia notes that Columbia Blue is often identified with Pantone 292 and that some offices have used other shades; the Visual Identity office currently lists Pantone 290 C.

### Observed in artwork

| Name | Hex | Where |
| --- | --- | --- |
| Logo Navy | `#000D74` | The "Columbia University in the City of New York" lockup on Wikimedia Commons |
| Lions Blue | `#65B2E8` | Columbia College 2020 crown artwork on Commons |

Use `#1D4F91` for UI text and buttons. Use `#000D74` only if you are reproducing the lockup itself.

### UI neutrals (approximate)

| Name | Hex | Role |
| --- | --- | --- |
| Ink | `#1A1A1A` | Body text |
| Gray | `#5A5A5A` | Captions, dates, metadata |
| Border Gray | `#D9D9D9` | Dividers, input borders |
| Light Gray | `#F2F2F2` | Alternating sections |
| Pale Blue | `#E8F2F8` | Tinted cards, selected rows |

Semantic colours are not documented publicly. Use a muted set if needed: success `#2E7D32`, warning `#B26A00`, error `#B00020` (all approximate, not Columbia values).

### Contrast

- Columbia Blue on white is about 1.4:1. Never use it for text, icons or thin lines on white.
- Dark Blue `#1D4F91` on white is about 8.4:1 and on Columbia Blue about 5.9:1; both pass AA.
- Black or Dark Blue text on Columbia Blue fills is the standard pairing. White text on Columbia Blue fails.

### Mode

Light. Dark moments come from Dark Blue or black bands (footer, feature strips).

## 3. Typography

Columbia's published identity specifies its own typefaces, but they could not be read for this file. The lockup on Commons uses high-contrast classical serif capitals (Trajan-like proportions with small caps for the second line). For a page that feels right without the official fonts:

- **Display:** a classical serif such as Libre Caslon Text or EB Garamond at regular weight for headlines and page titles.
- **UI and body:** a clean humanist sans such as Source Sans 3 for navigation, labels, buttons and dense text.

Treat both as stand-ins and swap in the official families if you have access to Columbia's guidelines.

### Scale (approximate)

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display | Serif | 52px | 400 | 1.1 | 0 |
| H1 | Serif | 40px | 400 | 1.15 | 0 |
| H2 | Serif | 30px | 400 | 1.2 | 0 |
| Card headline | Sans | 21px | 600 | 1.3 | 0 |
| Body | Sans | 17px | 400 | 1.6 | 0 |
| UI / nav | Sans | 15px | 600 | 1.4 | 0 |
| Kicker | Sans | 12px | 700 | 1.3 | 0.12em, uppercase |
| Caption | Sans | 13px | 400 | 1.4 | 0 |

### Rules

- Sentence case for headlines; uppercase with wide tracking only for kickers and the wordmark style.
- When imitating the wordmark, use serif capitals with the first letter of each word slightly larger (small-caps style).
- Keep body copy in dark ink, not in blue.
- Measure 60-75 characters.

## 4. Logo & Brand Mark

The university lockup is the **crown** on the left, **COLUMBIA UNIVERSITY** in serif small caps, and **IN THE CITY OF NEW YORK** below, all in one colour. The `logo.svg` here is that lockup in the Commons file's navy (`#000D74`).

- **Crown:** a royal crown with a cross finial, a band with two crosses and an oval jewel, on a heavy base. It refers to King's College, chartered by George II in 1754.
- **Arms:** a blue shield with a white chevron and three gold crowns, with the motto "In lumine Tuo videbimus lumen" ("In Thy light shall we see light"). Use the arms only for formal, ceremonial contexts.
- **Colour versions:** navy or dark blue on white; white on dark blue; black for one-colour print. A light Columbia Blue crown appears on dark backgrounds and on College materials.
- **Icon:** the crown alone, in dark blue on a Columbia Blue square (as in `icon.svg`).
- **Clear space:** at least the crown's height around the lockup (approximate).
- **Schools:** each school has its own lockup with the crown; do not invent new ones.

Misuse: do not put a Columbia Blue lockup on white, separate "IN THE CITY OF NEW YORK" from the main line in the formal lockup, rotate the crown, or add effects.

## 5. Components

All values are approximate reconstructions consistent with the palette above.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 22px;
  font: 600 15px/1 "Source Sans 3", sans-serif;
  border-radius: 0; border: 2px solid transparent;
  transition: background-color 150ms ease, color 150ms ease;
}
.btn-primary { background: #1D4F91; color: #FFFFFF; }
.btn-primary:hover { background: #000D74; }
.btn-secondary { background: transparent; color: #1D4F91; border-color: #1D4F91; }
.btn-secondary:hover { background: #1D4F91; color: #FFFFFF; }
.btn-light { background: #B9D9EB; color: #000000; }
.btn-light:hover { background: #FFFFFF; }
.btn:focus-visible { outline: 3px solid #1D4F91; outline-offset: 2px; }
.btn:disabled { background: #F2F2F2; color: #5A5A5A; }
```

Text link calls ("Read more", "All news", "View events") are 15px sans 600 in Dark Blue with a trailing arrow.

### Inputs

```css
.input {
  height: 44px; padding: 0 12px;
  background: #FFFFFF; color: #1A1A1A;
  border: 1px solid #5A5A5A; border-radius: 0;
  font: 400 16px "Source Sans 3", sans-serif;
}
.input:focus { outline: 3px solid #B9D9EB; border-color: #1D4F91; }
```

### Cards

- Story card: photo (3:2), Dark Blue kicker, serif or semibold sans headline in ink, date in gray. No border; 24-32px gaps.
- Feature band: full-width Columbia Blue (`#B9D9EB`) panel with black or Dark Blue text and a single CTA.
- Profile card: square photo, name in serif, school and role in small sans.

### Header and navigation

- White header, crown lockup on the left.
- Primary nav items in sans 15px 600, Dark Blue or ink: About, Academics, Admissions, Research, Campus Life, News, Events (approximate).
- Right side: search icon and a "Give" link.
- Active item: 3px Columbia Blue or Dark Blue bar under the label.
- Mobile: hamburger opens a full-height Dark Blue panel with white links.

### Tabs and filters

Labels in sans 14px; active tab has a 3px Dark Blue underline; inactive is gray `#5A5A5A`.

### Footer

Dark Blue or black band, white text, crown lockup reversed, campus address ("New York, NY 10027"), quick links and legal links in 14px sans.

### Badges

Square-cornered labels in 12px uppercase sans: Dark Blue text on `#E8F2F8`, or black on Columbia Blue.

### Quote blocks

Large serif italic at 28px in Dark Blue with a 4px Columbia Blue left rule.

## 6. Layout & Spacing

- **Max width:** about 1200-1280px; article column about 720px (approximate).
- **Grid:** 12 columns, 24px gutters; story cards 3 or 4 across on desktop, 1 on mobile.
- **Breakpoints:** standard 600 / 900 / 1200px work well.
- **Section spacing:** 64-96px between homepage sections, 24-32px between cards.
- **Density:** medium, editorial, generous white space.

## 7. Depth, Elevation & Motion

- Flat. Hierarchy comes from Columbia Blue bands, Dark Blue footers and type size.
- Card shadow when needed: `0 1px 3px rgba(29,79,145,0.12)`. Menus: `0 8px 24px rgba(0,13,116,0.14)`.
- 1px `#D9D9D9` rules divide lists.
- Motion: 150-200ms colour transitions; modest image scale (1.03) on card hover. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** thin line icons (1.5px stroke) in Dark Blue or ink at 20-24px.
- **Photography:** Low Memorial Library and its steps, Alma Mater, Butler Library, College Walk in snow or at Commencement, labs, and New York streets and skyline. Real people, natural light.
- **Overlays:** Dark Blue at 60-75% for text on images. Avoid tinting photos Columbia Blue.
- **Crown:** may be used as a small decorative device or bullet in official contexts.

## 9. Voice & Microcopy

Formal, confident and civic, with a strong sense of place in New York.

- Full name on first reference: "Columbia University in the City of New York" on formal documents; "Columbia University" or "Columbia" elsewhere.
- Kickers: "RESEARCH", "CAMPUS LIFE", "GLOBAL", "ARTS".
- CTAs: "Apply", "Visit", "Give", "Read more", "All news", "View events".
- Motto, when used: "In lumine Tuo videbimus lumen".
- Founding line: "Founded in 1754 as King's College".

## 10. Do's and Don'ts

**Do**

- Use Columbia Blue `#B9D9EB` as a fill with dark text on it.
- Use Dark Blue `#1D4F91` for headings, links and buttons.
- Keep the crown recognisable and unaltered.
- Pair a classical serif for display with a clean sans for UI.
- Show the campus and the city.

**Don't**

- Don't put Columbia Blue text or icons on white.
- Don't put white text on Columbia Blue.
- Don't replace Columbia Blue with a saturated sky or cyan.
- Don't use the coat of arms for everyday UI.
- Don't add rounded, pill-heavy styling; the identity is formal and square.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Columbia University. White page; Columbia Blue `#B9D9EB` used only as a fill (feature bands, highlight panels, the icon square) with black or dark text on it; Dark Blue `#1D4F91` for headings, links, primary buttons and the footer band. Body text `#1A1A1A`, secondary `#5A5A5A`, borders `#D9D9D9`, tinted panels `#E8F2F8`. Headlines in a classical serif (Libre Caslon Text) at regular weight, 52/40/30px; UI, nav and body in Source Sans 3 (17px body, 15px 600 nav). Small uppercase kickers with 0.12em tracking. Square corners, 44px buttons, flat surfaces with thin rules. Use the crown as the brand mark. Real photography of Morningside Heights and New York.

```css
:root {
  --brand-columbia-blue: #B9D9EB;
  --brand-dark-blue: #1D4F91;
  --brand-logo-navy: #000D74;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-text: #1A1A1A;
  --brand-text-subtle: #5A5A5A;
  --brand-border: #D9D9D9;
  --brand-bg-subtle: #F2F2F2;
  --brand-bg-tint: #E8F2F8;
  --brand-font-serif: "Libre Caslon Text", "EB Garamond", Georgia, serif;
  --brand-font-sans: "Source Sans 3", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-radius-tag: 2px;
  --brand-shadow-card: 0 1px 3px rgba(29, 79, 145, 0.12);
  --brand-shadow-menu: 0 8px 24px rgba(0, 13, 116, 0.14);
  --brand-content-width: 1240px;
  --brand-text-width: 720px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Columbia University.
