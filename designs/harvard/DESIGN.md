---
name: Harvard University
shortName: "Harvard"
slug: harvard
url: https://www.harvard.edu
category: Education
tagline: "Crimson Veritas shield on parchment gray, Canela headlines and red arrow links."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Crimson
    hex: "#A51C30"
    role: Primary brand colour, shield, logo, brand moments
  - name: Ink
    hex: "#1E1E1E"
    role: Headlines, body text, wordmark
  - name: Parchment
    hex: "#F3F4F4"
    role: Default page background
  - name: White
    hex: "#FFFFFF"
    role: Cards, header, text on dark
  - name: Action Red
    hex: "#DF072E"
    role: Arrow-button circles, interactive red on light backgrounds
  - name: Wrought Iron
    hex: "#0E0E0E"
    role: Footer, dark sections, overlays
  - name: Grout
    hex: "#E3E5E5"
    role: Pill link fills, light dividers
  - name: Shade
    hex: "#BAC5C6"
    role: Borders, rules
  - name: Slate
    hex: "#8996A0"
    role: Footer text, muted labels
  - name: Asphalt
    hex: "#656F77"
    role: Secondary text
  - name: Blackboard
    hex: "#292C2F"
    role: Dark panels, pill buttons on dark
  - name: Indigo
    hex: "#0A2240"
    role: Supporting dark accent
  - name: Bluebonnet
    hex: "#3A56BA"
    role: Supporting accent, data graphics
  - name: Gold
    hex: "#C8980E"
    role: Supporting accent
  - name: Ivy
    hex: "#34BD78"
    role: Supporting accent
  - name: Action Red on Dark
    hex: "#F70834"
    role: Interactive red on dark backgrounds
fonts:
  display:
    family: "Canela Deck"
    fallback: "Playfair Display"
    weights: [400]
  body:
    family: "GT America Standard"
    fallback: "Inter"
    weights: [400, 500, 700]
typeScale:
  - { role: Display XL, size: 61, weight: 400, lineHeight: 1.2, tracking: "-0.55px" }
  - { role: Display Large, size: 52, weight: 400, lineHeight: 1.2, tracking: "-0.45px" }
  - { role: Display, size: 46, weight: 400, lineHeight: 1.2, tracking: "-0.25px" }
  - { role: Card Title, size: 46, weight: 400, lineHeight: 1.15, tracking: "-0.1px" }
  - { role: Sans Heading, size: 24, weight: 700, lineHeight: 1.4, tracking: "-0.25px" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Small, size: 15, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 4, md: 8, lg: 10, pill: 100 }
spacing: [8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Level 10, value: "0 2px 6px rgba(21,21,21,0.1)" }
  - { name: Level 20, value: "0 4px 12px rgba(21,21,21,0.15)" }
  - { name: Level 20 Hover, value: "0 4px 12px rgba(21,21,21,0.3)" }
  - { name: Level 30, value: "0 4px 40px rgba(21,21,21,0.1)" }
preview:
  bg: "#F3F4F4"
  surface: "#FFFFFF"
  text: "#1E1E1E"
  muted: "#656F77"
  border: "#BAC5C6"
  accent: "#A51C30"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Harvard University

## 1. Visual Theme & Atmosphere

Harvard's central site is more restrained than its crimson reputation suggests. The page background is a pale cool gray called Parchment (`#F3F4F4`), text is near-black Ink (`#1E1E1E`), and crimson (`#A51C30`) is reserved mostly for the Veritas shield and a few brand moments. Interactivity is signalled by a brighter Action Red (`#DF072E`) inside small round arrow buttons. Headlines are set in Canela Deck, a contemporary serif with sharp, calligraphic details; everything else uses GT America Standard, a clean American grotesque.

What makes it recognisable:

- **The Veritas shield.** Crimson shield with three open books reading "VE", "RI", "TAS". It anchors the "HARVARD UNIVERSITY" lockup at top left of every page.
- **Gray, not white.** Parchment backgrounds with white cards and black footers. The colour scheme is quieter than most universities' homepages.
- **Canela headlines.** Large, regular-weight serif display type with slight negative tracking, used for story titles and card titles.
- **Round red arrow buttons.** The `.a-btn` pattern is a text label with a red circle holding a white arrow to its left. It replaces conventional filled buttons in most places.
- **Big editorial modules.** "In Focus" topic pages (e.g. brain health) are long, magazine-style layouts with mixed card sizes and expert profiles.

Density is medium-low; generous fluid spacing (`clamp()` everywhere) and large type.

## 2. Color Palette & Roles

The hex values below are custom properties in harvard.edu's live CSS. Harvard's identity guide (identityguide.hwp.harvard.edu) did not respond when this file was written; the Pantone reference is the commonly cited one and is approximate.

### Brand

| Name | Hex | Token | Role |
| --- | --- | --- | --- |
| Crimson | `#A51C30` | `--color-crimson` | Shield, logo, brand accents (Pantone 201 C, approx.) |
| Action Red | `#DF072E` | `--color-action-red` | Interactive circles, links on light |
| Action Red (dark bg) | `#F70834` | `--color-action-red-dark-bg` | Interactive red on dark |
| Ink | `#1E1E1E` | `--color-ink` | Text, wordmark |
| Wrought Iron | `#0E0E0E` | `--color-wrought-iron` | Footer, overlays |

Harvard Athletics publishes a slightly different crimson (`#A31F36`) for sport; keep `#A51C30` for the university.

### Neutrals

| Name | Hex | Token | Role |
| --- | --- | --- | --- |
| Parchment | `#F3F4F4` | `--color-parchment` | Page background |
| Grout | `#E3E5E5` | `--color-grout` | Pill fills, quiet panels |
| Shade | `#BAC5C6` | `--color-shade` | Borders, dividers |
| Slate | `#8996A0` | `--color-slate` | Footer text, muted labels |
| Asphalt | `#656F77` | `--color-asphalt` | Secondary text |
| Overcast | `#484E54` | `--color-overcast` | Dark secondary text |
| Graphite | `#464A4F` | `--color-graphite` | Dark UI |
| Blackboard | `#292C2F` | `--color-blackboard` | Dark panels, pills on dark |

### Supporting accents

Indigo `#0A2240`, Bluebonnet `#3A56BA` (light `#DEE4F0`), Gold `#C8980E`, Ivy `#34BD78`, Saffron `#FF3A0D`, Beige `#EAE5C8`, Pear `#D1CE61`, Yellow `#F1AE00`. These appear in topic pages, charts and illustrations; they are never the main colour.

### Functional

Focus `#0000FF` (2px ring with a white halo), positive `#0DDB91`, negative `#FF3D5B`, neutral alert `#0386FF`.

### Contrast and mode

Crimson on white is about 7.3:1; Ink on Parchment about 15:1. White on Crimson passes AA. Light mode only, with black footers and dark feature sections.

## 3. Typography

- **Canela Deck** (Commercial Type, self-hosted as "Canela Deck Web"): display and card titles, weight 400 only. Canela (the display cut) appears for the largest moments. Fallback: Playfair Display, then Georgia.
- **GT America Standard** (Grilli Type): Regular, Medium and Bold for body, navigation, buttons, labels and sans headings. Fallback: Inter, then Helvetica.

Both are licensed fonts. Do not self-host them without a licence.

### Scale (tokens from harvard.edu)

| Token | Family | Size (fluid) | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| `t-display-x-large` (`--type-60`) | Canela Deck | 36 to 61px | 400 | 1.2 | -0.55px |
| `t-display-large` (`--type-50`) | Canela Deck | 30 to 52px | 400 | 1.2 | -0.45px |
| `t-display` (`--type-40`) | Canela Deck | 26 to 46px | 400 | 1.2 | -0.25px |
| `t-display-small` (`--type-38`) | Canela Deck | 22 to 42px | 400 | 1.15 | -0.1px |
| `t-display-x-small` (`--type-35`) | GT America Bold | 20 to 32px | 700 | 1.25 | -0.1px |
| `t-display-xx-small` (`--type-30`) | GT America Bold | 24px | 700 | 1.4 | -0.25px |
| Body (`--type-20`) | GT America Regular | 18px | 400 | 1.6 | 0 |
| Small (`--type-10`) | GT America Regular | 15px | 400 | 1.5 | 0 |

The largest tokens (`--type-70`, `--type-80`) reach 96-120px for hero statements.

### Rules

- Serif display is always regular weight; never bold Canela.
- Sans headings step down in size and switch to bold.
- Sentence case for headings and links ("Learn more about Michael's research").
- Lining figures; dates in sans.

## 4. Logo & Brand Mark

- **Lockup:** the Veritas shield at left, "HARVARD" in widely spaced serif capitals with "UNIVERSITY" smaller beneath, in Ink. `logo.svg` is this lockup.
- **Shield:** crimson field, three white open books with "VE / RI / TAS" in black, thin white keyline. `icon.svg` uses the shield alone on white.
- **Full arms:** shield with a laurel wreath and a "HARVARD" ribbon; for ceremonial use.
- **School shields:** each school has its own shield in the same style; the site has a "Harvard Shields" page. Do not mix them up or invent new ones.
- **Colours:** full colour on white or Parchment; reversed (white wordmark, full-colour shield) on Ink or Wrought Iron.
- **Clear space:** at least the width of one book in the shield around the lockup (approximate).
- **Trademark:** the Harvard name and shields are trademarks; the footer links to a "Trademark Notice".

## 5. Components

### Arrow buttons (signature)

```css
.a-btn {
  position: relative; display: inline-flex; align-items: center;
  min-height: 40px; padding-left: 52px; max-width: 400px;
  font: 500 18px/1.4 "GT America Standard", "Inter", sans-serif;
  color: #1E1E1E; background: transparent; border: 0; border-radius: 0;
}
.a-btn::before {
  content: "\2192"; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #DF072E; border: 1px solid #DF072E; color: #FFFFFF;
  transition: transform 150ms ease, background-color 150ms ease;
}
.a-btn:hover::before { transform: translateY(-50%) translateX(4px); }
.a-btn-outline::before { background: transparent; color: #DF072E; }
.on-dark .a-btn { color: #FFFFFF; }
.on-dark .a-btn::before { background: #F70834; border-color: #F70834; }
.a-btn:focus-visible { box-shadow: 0 0 0 2px #0000FF, 0 0 0 4px #FFFFFF; outline: none; }
```

Variants swap the arrow for other icons (gallery, video).

### Pill links

Small rounded links (`border-radius: 100px`, padding 3px 24px, 16px) on `#E3E5E5`, turning Ink with Parchment text on hover. Used for "back to" links on child sites.

### Inputs

```css
.input {
  height: 48px; padding: 0 16px;
  background: #FFFFFF; color: #1E1E1E;
  border: 1px solid #BAC5C6; border-radius: 4px;
  font: 400 18px "GT America Standard", "Inter", sans-serif;
}
.input:focus { box-shadow: 0 0 0 2px #0000FF, 0 0 0 4px #FFFFFF; outline: none; }
.checkbox { border-radius: 3px; }
```

Large inputs use 8px radius. "Sign up for the Daily Gazette" is a typical form.

### Cards

- Image, then a Canela Deck title (`.c-card__title`, 26-46px, 1.15) in Ink, then an arrow link.
- White cards on Parchment, square corners, optional `0 4px 12px rgba(21,21,21,0.15)` shadow that darkens to 0.3 alpha on hover.
- Expert profile cards: portrait, name in sans bold, an arrow link ("Learn more about Emery's insights").

### Header

- 90px tall on desktop (75px tablet, 70px mobile); the brand bar transitions background colour and position over 150ms.
- Left: shield and wordmark. Right: "Search", "Quick Links" and "Menu".
- A site-notification strip above it ("Learn about our lawsuits to protect our students and researchers").
- Mega menu: large panels per section ("Academics", "Campus", "About", "News") with a short Canela intro ("Learning at Harvard can happen for every type of learner, at any phase of life.") and long link lists (all 13 schools, every library and museum).

### Quick Links

"A to Z index", "Find a person", "Events", "Media Relations", "Alumni", "Give Now", "Emergency".

### News strip

"The Harvard Gazette" heading, "Trending News Stories", a few headline cards, and "Read more news".

### Footer

Wrought Iron `#0E0E0E` background, Slate text, 64-96px vertical padding. Groups: "Security & Brand" (Report Copyright Infringement, Report Security Issue, Trademark Notice), "Website" (Accessibility, Digital Accessibility, Privacy Statement), "Get In Touch" (Contact Harvard, Maps & Directions, Jobs). Ends with "Copyright © 2026 The President and Fellows of Harvard College" and social icons.

## 6. Layout & Spacing

- **Grid:** 12 columns, 48px gutter on desktop, 24px on tablet and mobile.
- **Widths:** content column `min(100vw - 40px, ..., 820px)`; medium max 848px; small max 624px; full bleed 1600px.
- **Breakpoints:** 600, 768, 960, 1200, 1260 and 1400px.
- **Spacing tokens (fluid):** 4-8, 8-12, 12-16, 16-24, 24-32, 32-48, 48-64, 64-96, 96-128, 128-160px (`--spacer-10` to `--spacer-80`).
- **Density:** airy. Staggered layouts offset cards across 8- and 10-column tracks.

## 7. Depth, Elevation & Motion

- Shadow tokens: `--box-shadow-10: 0 2px 6px rgba(21,21,21,.1)`, `--box-shadow-20: 0 4px 12px rgba(21,21,21,.15)` (hover 0.3), `--box-shadow-30: 0 4px 40px rgba(21,21,21,.1)`. Large soft shadow for overlays: `4px 4px 80px rgba(55,56,69,.2)`.
- Corners: 0 for cards and images, 4-8px for form controls, full pills for small links, circles for arrow buttons.
- Motion: 150ms ease for header and hover changes; the arrow circle nudges right on hover. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** a custom icon font (`core-icons`) with simple geometric glyphs: arrows, search, menu, play, gallery.
- **Photography:** Harvard Yard, Widener Library, the Charles River, labs and portraits of named researchers. Natural, editorial, often tightly cropped.
- **Illustration:** used on topic pages, flat shapes in the supporting accent colours.
- **Shield:** only for brand identification, not as decoration.

## 9. Voice & Microcopy

Measured, authoritative and research-led. Headlines explain findings in plain language.

- Navigation: "Academics", "Campus", "About", "News", "Search", "Quick Links", "Menu".
- Link labels start with a verb and name the subject: "Explore Harvard's degree programs", "Learn more about the study", "Read more news".
- Section intros are one sentence: "Visit each School for information on admissions and financial aid."
- Formal name: "The President and Fellows of Harvard College" in legal lines; "Harvard" in running text.
- Motto: "Veritas".

## 10. Do's and Don'ts

**Do**

- Use Parchment `#F3F4F4` as the page background with white cards and a black footer.
- Keep Crimson for the shield and brand moments; use Action Red for the arrow circles.
- Set display text in Canela Deck at regular weight with slight negative tracking.
- Use the round red arrow button for calls to action.
- Use descriptive link text.

**Don't**

- Don't flood pages with crimson backgrounds.
- Don't bold the serif.
- Don't use filled rectangular buttons as the default CTA.
- Don't use school shields interchangeably.
- Don't put Action Red text on Crimson.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Harvard University. Parchment `#F3F4F4` page background, white cards, Ink `#1E1E1E` text, Wrought Iron `#0E0E0E` footer with Slate `#8996A0` text. Crimson `#A51C30` only for the Veritas shield and brand moments. Headlines in Canela Deck (fallback Playfair Display) at weight 400 with negative tracking (61/52/46px); body, nav and labels in GT America Standard (fallback Inter) at 18px, with bold sans subheads. Calls to action are text links with a 40px Action Red `#DF072E` circle holding a white arrow on the left; the circle nudges right on hover. Small pill links on `#E3E5E5`. Square cards with an optional `0 4px 12px rgba(21,21,21,0.15)` shadow. Focus ring: 2px pure blue with a white halo. Editorial, airy layout with fluid spacing.

```css
:root {
  --brand-crimson: #A51C30;
  --brand-action-red: #DF072E;
  --brand-action-red-dark-bg: #F70834;
  --brand-ink: #1E1E1E;
  --brand-wrought-iron: #0E0E0E;
  --brand-parchment: #F3F4F4;
  --brand-white: #FFFFFF;
  --brand-grout: #E3E5E5;
  --brand-shade: #BAC5C6;
  --brand-slate: #8996A0;
  --brand-asphalt: #656F77;
  --brand-blackboard: #292C2F;
  --brand-indigo: #0A2240;
  --brand-bluebonnet: #3A56BA;
  --brand-gold: #C8980E;
  --brand-ivy: #34BD78;
  --brand-focus: #0000FF;
  --brand-font-serif: "Canela Deck", "Playfair Display", Georgia, serif;
  --brand-font-sans: "GT America Standard", "Inter", Helvetica, Arial, sans-serif;
  --brand-radius: 0px;
  --brand-radius-input: 4px;
  --brand-radius-pill: 100px;
  --brand-shadow-10: 0 2px 6px rgba(21, 21, 21, 0.1);
  --brand-shadow-20: 0 4px 12px rgba(21, 21, 21, 0.15);
  --brand-shadow-30: 0 4px 40px rgba(21, 21, 21, 0.1);
  --brand-grid-gutter: 48px;
  --brand-max-width-med: 848px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Harvard University.
