---
name: Princeton University
shortName: "Princeton"
slug: princeton
url: https://www.princeton.edu
category: Education
tagline: "Princeton orange and black, the Vet Nov Tam shield, serif capitals, stone campus."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Princeton Orange
    hex: "#E87722"
    role: Primary accent, shield chevron field, highlights, CTAs
  - name: Black
    hex: "#000000"
    role: Primary brand colour, wordmark, shield chief and chevron, dark bands
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on black
  - name: Ink
    hex: "#121212"
    role: Body text (approximate)
  - name: Gray
    hex: "#595959"
    role: Secondary text, captions (approximate)
  - name: Light Gray
    hex: "#F2F2F2"
    role: Section backgrounds (approximate)
  - name: Border Gray
    hex: "#D6D6D6"
    role: Dividers and input borders (approximate)
  - name: Orange Dark
    hex: "#C25E0B"
    role: Orange text and hover on white, AA-safe (approximate)
  - name: Orange Tint
    hex: "#FBE7D6"
    role: Tinted panels and highlights (approximate)
  - name: Athletics Orange
    hex: "#FF6000"
    role: Brighter orange cited for athletics
fonts:
  display:
    family: "Classical serif (unverified)"
    fallback: "Libre Caslon Text"
    weights: [400, 700]
  body:
    family: "Neutral sans (unverified)"
    fallback: "Source Sans 3"
    weights: [400, 600, 700]
typeScale:
  - { role: Display, size: 56, weight: 400, lineHeight: 1.08, tracking: "-0.01em" }
  - { role: H1, size: 42, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: H2, size: 30, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Card Headline, size: 21, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 15, weight: 600, lineHeight: 1.4, tracking: "0" }
  - { role: Kicker, size: 12, weight: 700, lineHeight: 1.3, tracking: "0.12em" }
radii: { sm: 0, md: 2, lg: 4, pill: 9999 }
spacing: [4, 8, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card, value: "0 1px 3px rgba(0,0,0,0.12)" }
  - { name: Menu, value: "0 8px 24px rgba(0,0,0,0.16)" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#000000"
  muted: "#595959"
  border: "#D6D6D6"
  accent: "#E87722"
  accentText: "#000000"
  radius: 0
  buttonStyle: solid
---

# Princeton University

> Research note: princeton.edu and communications.princeton.edu returned bot challenges when this file was written, so nothing was fetched from them. The orange comes from the official logo file on Wikimedia Commons; other brand facts come from Wikipedia and Commons. UI measurements and typefaces are approximate and marked as such.

## 1. Visual Theme & Atmosphere

Princeton's identity is two colours and a shield. Orange and black have been Princeton's colours since the 1860s, and they still define the brand: a black-and-orange shield with an open book, a black serif wordmark, and orange used as a sharp accent against white pages and black bands. The effect is formal and graphic, closer to a printed programme than to a tech product.

What makes it recognisable:

- **Orange plus black.** Black does the structural work (wordmark, headlines, footers); orange marks the brand (shield, rules, highlights, a few buttons). White is the ground.
- **The shield.** A black chief carrying an open book inscribed "VET / NOV / TAM" (Old and New Testament), over an orange field with a black chevron. In the lockup it sits left of the wordmark.
- **Serif capitals.** "PRINCETON" in bold serif capitals over "UNIVERSITY" in lighter, spaced capitals.
- **Collegiate Gothic.** Photography leans on Nassau Hall, Blair Arch, East Pyne, the University Chapel and orange-and-black athletics.
- **Restraint.** Square corners, thin rules, lots of white.

Density is medium, editorial. Expect (approximate) a hero story with a large photo, a news grid, events, "Princeton in the World" style features and a black footer.

## 2. Color Palette & Roles

### Brand

| Name | Hex | Print | Source |
| --- | --- | --- | --- |
| Princeton Orange | `#E87722` | Pantone 158 C (commonly cited) | Gradient stop and fill in the official logo file on Commons |
| Black | `#000000` | Black | Logo file; Wikipedia colour data |
| White | `#FFFFFF` | n/a | Wikipedia colour data |
| Athletics Orange | `#FF6000` | n/a | Wikipedia college colour data (Princeton Tigers) |

Other shades have circulated over the years (for example `#F58025` and `#E77500`). Use `#E87722` for brand fills; if you have access to Princeton's current guidelines, use their exact web value.

### UI neutrals and derived tints (approximate)

| Name | Hex | Role |
| --- | --- | --- |
| Ink | `#121212` | Body text |
| Gray | `#595959` | Captions, dates |
| Border Gray | `#D6D6D6` | Rules, input borders |
| Light Gray | `#F2F2F2` | Alternating bands |
| Orange Dark | `#C25E0B` | Orange text and link hover on white (about 4.6:1) |
| Orange Tint | `#FBE7D6` | Highlight panels |

### Contrast

- Princeton Orange on white is about 2.9:1. Do not use it for body text or small labels on white; use Orange Dark or black instead.
- Black text on orange is about 7.3:1, so orange buttons and badges take **black** labels.
- Orange on black is about 7.3:1 and works for headlines and rules in dark bands.

### Mode

Light. Black bands (footer, feature strips, athletics content) give the dark moments.

## 3. Typography

Princeton's official typefaces could not be confirmed for this file. The logo uses classical serif capitals; Princeton's print materials have long used traditional book serifs with a neutral sans for UI. Suggested stand-ins:

- **Display:** Libre Caslon Text (or EB Garamond) at regular weight for headlines; bold serif capitals only for wordmark-style labels.
- **UI and body:** Source Sans 3 for navigation, labels, buttons, captions and dense text.

### Scale (approximate)

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display | Serif | 56px | 400 | 1.08 | -0.01em |
| H1 | Serif | 42px | 400 | 1.15 | 0 |
| H2 | Serif | 30px | 400 | 1.2 | 0 |
| Card headline | Sans | 21px | 600 | 1.3 | 0 |
| Body | Sans | 17px | 400 | 1.6 | 0 |
| UI / nav | Sans | 15px | 600 | 1.4 | 0 |
| Kicker | Sans | 12px | 700 | 1.3 | 0.12em, uppercase |
| Caption | Sans | 13px | 400 | 1.4 | 0 |

### Rules

- Sentence case headlines in the serif; uppercase only for kickers and wordmark-like labels.
- Orange is never used for running text on white.
- Measure 60-75 characters.

## 4. Logo & Brand Mark

- **Lockup:** shield at left, "PRINCETON" in bold serif capitals and "UNIVERSITY" beneath in lighter spaced capitals, in black. `logo.svg` is this lockup from Commons.
- **Shield:** black chief with an open white book reading "VET / NOV / TAM", orange lower field with a black chevron, black outline. `icon.svg` uses the shield on white.
- **Seal:** the full seal adds the motto "Dei sub numine viget" ("Under God's power she flourishes") and is for official documents.
- **Colour versions:** full colour (black wordmark, orange-and-black shield) on white; reversed white wordmark with full-colour shield on black; one-colour black.
- **Clear space:** at least the height of the shield's book around the lockup (approximate).
- **Minimum size:** below roughly 120px wide, use the shield alone (approximate).

Misuse: no recolouring of the shield (for example blue chevrons), no orange wordmark on white, no stretching, no effects.

## 5. Components

All values approximate, built to match the palette and print tradition.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  height: 44px; padding: 0 22px;
  font: 600 15px/1 "Source Sans 3", sans-serif;
  border-radius: 0; border: 2px solid transparent;
  transition: background-color 150ms ease, color 150ms ease;
}
.btn-primary { background: #000000; color: #FFFFFF; }
.btn-primary:hover { background: #E87722; color: #000000; }
.btn-accent { background: #E87722; color: #000000; }
.btn-accent:hover { background: #C25E0B; color: #FFFFFF; }
.btn-secondary { background: transparent; color: #000000; border-color: #000000; }
.btn-secondary:hover { background: #000000; color: #FFFFFF; }
.btn:focus-visible { outline: 3px solid #E87722; outline-offset: 2px; }
.btn:disabled { background: #F2F2F2; color: #595959; }
```

Text link calls ("Read more", "All news", "View all events") are black sans 600 with an orange arrow and an orange underline on hover.

### Links

Inline links are black or Orange Dark `#C25E0B` with an underline; on black bands, links are white with an orange hover.

### Inputs

```css
.input {
  height: 44px; padding: 0 12px;
  background: #FFFFFF; color: #121212;
  border: 1px solid #595959; border-radius: 0;
  font: 400 16px "Source Sans 3", sans-serif;
}
.input:focus { outline: 3px solid #E87722; border-color: #000000; }
```

### Cards

- Story card: photo (3:2), small orange-rule kicker (a 24px x 3px orange bar above an uppercase label), serif or semibold headline in black, date in gray. No border.
- Feature band: full-width black panel with a white serif headline, orange rule and a single accent button.
- Event card: date block with month in uppercase orange on black and day in large white serif.

### Header and navigation

- White header with the shield lockup left.
- Primary nav in sans 15px 600, black: About, Academics, Admission & Aid, Research, Campus Life, News, Events (approximate).
- Right side: search icon and "Give".
- Active item: 3px orange bar under the label.
- Mobile: hamburger opens a full-height black panel with white links and orange active marks.

### Tabs, badges and quotes

- Tabs: active label black with a 3px orange underline; inactive `#595959`.
- Badges: square, 12px uppercase sans; black text on Orange Tint, or black on orange for emphasis.
- Pull quotes: serif italic 28px, 4px orange left rule.

### Footer

Black band, white lockup, "Princeton, NJ 08544", quick links and legal links in 14px sans; orange used for hover and a thin rule.

## 6. Layout & Spacing

- **Max width:** about 1200-1280px; article column about 720px (approximate).
- **Grid:** 12 columns, 24px gutters; story grids 3 or 4 across on desktop.
- **Breakpoints:** 600 / 900 / 1200px suggested.
- **Spacing:** 64-96px between sections, 24-32px between cards.
- **Density:** medium, editorial.

## 7. Depth, Elevation & Motion

- Flat; hierarchy through black bands, orange rules and type size.
- Card shadow if needed: `0 1px 3px rgba(0,0,0,0.12)`; menus `0 8px 24px rgba(0,0,0,0.16)`.
- 1px `#D6D6D6` rules; 3px orange accent bars.
- Motion: 150-200ms colour transitions, subtle image zoom on hover. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 1.5-2px stroke, in black; orange only for active states.
- **Photography:** Nassau Hall, Blair Arch, the University Chapel, Firestone Library, Lake Carnegie rowing, autumn leaves and the orange-and-black of athletics. Natural light, documentary.
- **Treatment:** black overlays at 50-70% for text on images; no orange duotones.
- **Tiger:** the tiger belongs to athletics and spirit materials, not to academic UI.

## 9. Voice & Microcopy

Formal, understated and service-minded. The informal motto "In the nation's service and the service of humanity" appears in mission language.

- Kickers: "RESEARCH", "ARTS & HUMANITIES", "CAMPUS LIFE", "IN THE NATION'S SERVICE".
- CTAs: "Apply", "Visit", "Give", "Read more", "View all events".
- Use "Princeton" or "Princeton University"; class years after names with an apostrophe ("Jane Doe '27").

## 10. Do's and Don'ts

**Do**

- Pair black structure with orange accents on white.
- Put black text on orange fills.
- Use the shield unaltered for compact brand moments.
- Use a classical serif for headlines and a plain sans for UI.
- Keep layouts square and restrained.

**Don't**

- Don't set orange text on white at body size.
- Don't use white text on orange.
- Don't swap in a red-orange or yellow-orange for Princeton Orange.
- Don't use the tiger for academic pages.
- Don't add gradients, glows or rounded, bubbly components.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Princeton University. White page; black `#000000` for the wordmark, headlines, primary buttons and footer band; Princeton Orange `#E87722` for accents: 3px rules, active-tab underlines, the accent button and event month labels. Orange buttons take black text. Use Orange Dark `#C25E0B` for any orange text on white. Body text `#121212`, secondary `#595959`, borders `#D6D6D6`, bands `#F2F2F2`, tinted highlights `#FBE7D6`. Headlines in Libre Caslon Text at regular weight (56/42/30px); UI and body in Source Sans 3 (17px body, 15px 600 nav, 12px uppercase kickers with 0.12em tracking). Square corners, 44px buttons, flat surfaces. Use the orange-and-black shield as the mark and stone Collegiate Gothic campus photography.

```css
:root {
  --brand-orange: #E87722;
  --brand-orange-dark: #C25E0B;
  --brand-orange-tint: #FBE7D6;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-text: #121212;
  --brand-text-subtle: #595959;
  --brand-border: #D6D6D6;
  --brand-bg-subtle: #F2F2F2;
  --brand-font-serif: "Libre Caslon Text", "EB Garamond", Georgia, serif;
  --brand-font-sans: "Source Sans 3", "Helvetica Neue", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-radius-tag: 2px;
  --brand-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12);
  --brand-shadow-menu: 0 8px 24px rgba(0, 0, 0, 0.16);
  --brand-content-width: 1240px;
  --brand-text-width: 720px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Princeton University.
