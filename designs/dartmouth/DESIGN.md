---
name: Dartmouth College
shortName: "Dartmouth"
slug: dartmouth
url: https://home.dartmouth.edu
category: Education
tagline: "Dartmouth Green and near-black forest, Ruzicka serif headlines, National 2 and the D-Pine."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Dartmouth Green
    hex: "#00693E"
    role: Primary brand colour, logo, buttons, links, accents
  - name: Rich Forest Green
    hex: "#0D1E1C"
    role: Digital near-black, body text, dark bands, button hover layer
  - name: Forest Green
    hex: "#12312B"
    role: Secondary dark green for bands and print
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on green
  - name: Rich Spring Green
    hex: "#A5D75F"
    role: Alternate button fill, highlights on dark
  - name: Spring Green
    hex: "#C4DD88"
    role: Light green tint panels
  - name: Midnight Black
    hex: "#000000"
    role: Secondary colour, ghost button text
  - name: Gray 1
    hex: "#F7F7F7"
    role: Light section background
  - name: Gray 2
    hex: "#E2E2E2"
    role: Dividers, borders
  - name: Gray 3
    hex: "#707070"
    role: Secondary text, captions
  - name: River Blue
    hex: "#267ABA"
    role: Tertiary accent
  - name: Bonfire Red
    hex: "#9D162E"
    role: Tertiary accent, alerts
  - name: Summer Yellow
    hex: "#F5DC69"
    role: Tertiary accent
  - name: Granite Gray
    hex: "#424141"
    role: Dark neutral
fonts:
  display:
    family: "Dartmouth Ruzicka"
    fallback: "EB Garamond"
    weights: [400, 600, 700]
  body:
    family: "National 2"
    fallback: "Inter"
    weights: [300, 400, 500, 700]
typeScale:
  - { role: Hero, size: 120, weight: 400, lineHeight: 0.95, tracking: "-0.02em" }
  - { role: H1, size: 60, weight: 400, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: H2, size: 40, weight: 400, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: H5 Sans, size: 27, weight: 500, lineHeight: 1.33, tracking: "-0.9px" }
  - { role: Body, size: 20, weight: 300, lineHeight: 1.75, tracking: "0" }
  - { role: Small, size: 15, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button Label, size: 13, weight: 400, lineHeight: 1.23, tracking: "0.25em" }
radii: { sm: 0, md: 2, lg: 10, pill: 9999 }
spacing: [4, 8, 12, 20, 32, 40, 60, 100]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#0D1E1C"
  muted: "#707070"
  border: "#E2E2E2"
  accent: "#00693E"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# Dartmouth College

## 1. Visual Theme & Atmosphere

Dartmouth's site is green, quiet and roomy. White pages carry very large serif headlines in Dartmouth Ruzicka, a typeface revived from Rudolph Ruzicka's designs for the College, and long, light-weight body text in National 2. Dartmouth Green (`#00693E`) is the single brand colour; a green so dark it reads as black (Rich Forest Green, `#0D1E1C`) replaces black for text and for full-bleed dark sections. The D-Pine (a capital D with the Lone Pine cut out of it) is the everyday symbol.

What makes it recognisable:

- **One green.** Dartmouth Green is the primary; the guidelines say tertiary colours cannot overpower it. The secondary greens are almost black.
- **Big serif, light sans.** Hero headlines run up to 10rem in Ruzicka. Body copy is National 2 at weight 300, 20px, with a 1.75 line height.
- **Spaced uppercase buttons.** Buttons are rectangles with uppercase 13px labels tracked at about 0.2rem, generous padding (23px top, 25px sides) and a dark layer that wipes across on hover.
- **Dark forest bands.** Events and directory headers are `#0D1E1C` panels, sometimes with a line drawing of Baker Tower or a fine line pattern.
- **Landscape.** Photography of the Green, Baker-Berry Library, the Connecticut River, Hanover winters and the outdoors programme.

The homepage opens with a full-screen hero ("Be Extraordinary Here"), followed by undergraduate study links, featured stories, an events list with stacked day/month dates, an Instagram grid ("No matter where you roam, stay connected with @dartmouthcollege") and a dark footer with "Be Inspired. Be Yourself." and an "APPLY" button.

## 2. Color Palette & Roles

From Dartmouth's Office of Communications colour page (communications.dartmouth.edu), read today.

### Primary

| Name | Hex | Print | RGB |
| --- | --- | --- | --- |
| Dartmouth Green | `#00693E` | PMS 349, CMYK 95/0/100/50 | 0, 105, 62 |

### Secondary

| Name | Hex | Print | Role |
| --- | --- | --- | --- |
| Forest Green | `#12312B` | PMS 627 | Dark bands, print |
| Rich Forest Green (digital) | `#0D1E1C` | n/a | Body text, dark sections, button hover |
| Snow White | `#FFFFFF` | n/a | Background |
| Midnight Black | `#000000` | n/a | Text on light green buttons |

### Tertiary

For distinction only; they "cannot overpower the use of Dartmouth Pine Green".

| Name | Hex | Print |
| --- | --- | --- |
| River Blue (digital) | `#267ABA` | PMS 291 (print version) |
| River Navy | `#003C73` | PMS 541 |
| Spring Green | `#C4DD88` | PMS 365 |
| Rich Spring Green | `#A5D75F` | PMS 367 |
| Summer Yellow | `#F5DC69` | PMS 127 |
| Bonfire Orange | `#FFA00F` | PMS 1375 |
| Bonfire Red | `#9D162E` | PMS 7427 |
| Tuck Orange | `#D94415` | PMS 179 |
| Violet (digital) | `#8A6996` | n/a |
| Autumn Brown | `#643C20` | PMS 161 |
| Granite Gray (digital) | `#424141` | PMS 438 (print version) |

### Web grays

| Name | Hex | Role |
| --- | --- | --- |
| Gray 1 | `#F7F7F7` | Section backgrounds |
| Gray 2 | `#E2E2E2` | Rules, borders |
| Gray 3 | `#707070` | Captions, metadata |

The live site also uses `#B2B2B2` for disabled lines and `#728884` as a muted green-gray (approximate role).

### Contrast and mode

- Dartmouth Green on white is about 7:1; white on green passes AA.
- Rich Spring Green `#A5D75F` needs black text (the `.btn--alt` style does this).
- Light mode; dark sections use Rich Forest Green, not pure black.

## 3. Typography

From the Office of Communications typeface page:

- **Dartmouth Ruzicka**: "speaks to the legacy and history of Dartmouth". Originally by Rudolph Ruzicka, modernised by Jesse Ragan. Regular, Semibold, Bold. Use for headlines and as the main typeface in communications. Available to the community for download.
- **National 2** (Klim Type Foundry): "plays up the strong, bold spirit". Light, Regular, Medium, Bold, Extrabold. The licence does not let Dartmouth share it with freelancers, vendors or alumni.
- **Alternates named by Dartmouth:** Georgia or EB Garamond in place of Ruzicka; Arial or Aptos in place of National 2.

Both families include tabular figures, small caps and ligatures; Dartmouth encourages using them. For Google-only builds, use EB Garamond (as Dartmouth itself recommends) and Inter as a National 2 stand-in.

### Scale (from home.dartmouth.edu CSS)

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero word stack | Ruzicka | clamp(72px, 1.5rem + 10vw, 160px) | 400 | 0.95 | -0.02em |
| H1 | Ruzicka | 60px | 400 | 1.1 | -0.01em |
| H2 / section | Ruzicka | 40px | 400 | 1.15 | -0.01em |
| H5 (sans) | National 2 | clamp(22px, 1rem + 1vw, 27px) | 500 | 1.33 | -0.9px |
| H6 (sans) | National 2 | 16-18px | 500 | 1.55 | 0 |
| Body | National 2 | 20px | 300 | 1.75 | 0 |
| Small / meta | National 2 | 15px | 400 | 1.5 | 0 |
| Button / link call | National 2 | 13px | 400 | 1.23 | 0.2rem, uppercase |

### Rules

- Serif for display, sans for reading and UI; Dartmouth says to use "contrasting weights and sizes" to build hierarchy with just these two families.
- Headlines in sentence case; hero lines may stack word by word ("Be / Extraordinary / Here").
- Uppercase only for buttons and short link calls, always widely tracked.
- Body text in Rich Forest Green, not pure black.

## 4. Logo & Brand Mark

- **Wordmark:** "DARTMOUTH" in Dartmouth Ruzicka capitals, Dartmouth Green on light backgrounds or white on green. `logo.svg` is this wordmark.
- **D-Pine:** a heavy serif capital D with the Lone Pine tree cut out of its counter. `icon.svg` shows it in white on Dartmouth Green. The pine refers to the Lone Pine on campus and the "Pine" in Dartmouth lore.
- **Shield and seal:** the College shield and the historic seal ("Vox Clamantis in Deserto", 1769) are for formal and ceremonial uses.
- **Colours:** Dartmouth Green, white, or black. Avoid tertiary colours for the logo.
- **Clear space:** at least the height of the "D" around the wordmark (approximate).
- **Units:** departments and offices use official lockups provided by Communications; do not combine the D-Pine with other symbols.

Misuse: no outlines, gradients, rotated or recoloured marks, and no rebuilding the wordmark in EB Garamond.

## 5. Components

### Buttons

```css
.btn {
  position: relative; overflow: hidden; display: inline-block;
  padding: 23px 25px 20px;
  font: 400 13px/1.23 "National 2", "Inter", sans-serif;
  letter-spacing: 0.2rem; text-transform: uppercase;
  background: #00693E; color: #FFFFFF;
  border: 0; border-radius: 0; cursor: pointer;
}
/* hover: a #0D1E1C layer slides across (transform, 500ms cubic-bezier(.215,.61,.355,1)) */
.btn::before { content: ""; position: absolute; inset: 0; background: #0D1E1C;
  transform: translateX(-101%); transition: transform 500ms cubic-bezier(.215,.61,.355,1); }
.btn:hover::before { transform: translateX(0); }
.btn--alt { background: #A5D75F; color: #000000; }
.btn--ghost { background: transparent; color: #000000; border: 1px solid rgba(0,0,0,0.3); }
.btn--ghost.on-dark { color: #FFFFFF; border-color: rgba(255,255,255,0.4); }
.btn:disabled { background: #868E8D; }
```

Labels sit above the sliding layer (`z-index`). Link calls ("See All Departments & Programs") use the same uppercase tracked style without a box, underlined with a 1px translucent rule.

### Links

Inline links are Dartmouth Green with a thin underline; on dark backgrounds they are white with a `rgba(255,255,255,0.15)` underline that thickens on hover.

### Inputs

```css
.input {
  height: 52px; padding: 0 16px;
  background: #FFFFFF; color: #0D1E1C;
  border: 1px solid #B2B2B2; border-radius: 0;
  font: 300 18px "National 2", "Inter", sans-serif;
}
.input:focus { border-color: #00693E; box-shadow: 0 0 8px #40B6FF; outline: none; }
.input.is-error { border-color: #E62600; }
```

The search overlay fills the header with a white panel and a large input.

### Story cards

Image (often 4:3), then Ruzicka headline at 24-27px in Rich Forest Green, a one-line dek in National 2 light, and an uppercase link call. No borders or shadows.

### Events list

Each row has a stacked date (day number large, three-letter month small, e.g. "17 / Nov") on the left and the event title on the right in National 2. The events page header is a `#0D1E1C` panel with a line pattern, centred white title and uppercase tracked links.

### Header and navigation

- White header with the DARTMOUTH wordmark left; nav items "Admissions", "Academics", "Campus Life", "Events", "About", "News" with "Open submenu" toggles.
- Mega panels list sub-links (e.g. "Apply Now", "Outcomes", "Financial Aid", "Degree Finder") with a featured image and a promo link.
- "Resources For You" audience menu: Students, Faculty, Staff, Alumni, News Media, Families, Friends & Neighbors.
- Header turns solid white when the search overlay opens; over heroes it can start transparent.

### Tables

Mobile tables stack; row headers become Dartmouth Green bars with white text.

### Footer

Rich Forest Green band, "Be Inspired. Be Yourself." with an "APPLY" button, then links: "Contact", "Careers", "Administrative Offices", "Emergency Preparedness", "Directory", "Mental Health Resources", "Sexual Respect & Title IX", "Accessibility", "Campus Map", "Giving", followed by "Copyright © 2026 Trustees of Dartmouth College", "Privacy", "A-Z Index" and social icons.

## 6. Layout & Spacing

- **Max width:** 69.375rem (1110px) for content; some full-bleed sections up to 120rem.
- **Text column:** about 41-49rem (660-790px).
- **Breakpoints:** 48rem (768px) and 64rem (1024px) are the main switches, with 87.5rem for wide layouts.
- **Spacing:** large. 60-100px of padding around sections, 40px (2.5rem) below sans headings.
- **Density:** low; Dartmouth gives type a lot of space.

## 7. Depth, Elevation & Motion

- No decorative shadows. Depth comes from dark green panels and photography.
- Focus rings: soft glows (`0 0 8px #40B6FF` for focus, `#E62600` for errors).
- Signature motion: the button wipe (500ms, `cubic-bezier(.215,.61,.355,1)`), and headings that ease their font size on resize (`transition: font-size .1s`).
- Hero video has a visible "Pause" control. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** thin-stroke line icons, arrows and plus/minus toggles in green or white.
- **Line art:** simple drawings of Baker Tower and fine line patterns as backgrounds on dark panels.
- **Photography:** the Green, Baker-Berry, Dartmouth Hall, the river, snow, outdoor trips, labs, students in conversation. Credited inline ("Photo by Sophia Scull '25").
- **Treatment:** natural colour, no green tinting.

## 9. Voice & Microcopy

Personal and encouraging, with a strong sense of place.

- Hero and closing lines: "Be Extraordinary Here", "Be Inspired. Be Yourself."
- CTAs: "Apply Now", "APPLY", "See Our Housing Transformation", "Explore", "Make a gift", "See All Departments & Programs".
- Section titles: "Undergraduate Studies", "Helpful Links", "Connect With Us", "Resources For You".
- Class years follow names with an apostrophe ("Sophia Scull '25").
- Say "Dartmouth" or "Dartmouth College"; the institution keeps "College" for historical reasons even though it is a research university.

## 10. Do's and Don'ts

**Do**

- Use Dartmouth Green as the only brand colour and Rich Forest Green for text and dark bands.
- Set large headlines in Ruzicka (or EB Garamond) and body in light-weight National 2 (or Inter).
- Use uppercase, widely tracked button labels with generous padding.
- Leave lots of space around type.
- Use the D-Pine for compact brand moments.

**Don't**

- Don't let tertiary colours compete with Dartmouth Green.
- Don't use pure black for long text.
- Don't round button corners or add drop shadows.
- Don't set body text in the serif on the web.
- Don't modify or outline the D-Pine.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Dartmouth College. White page; Dartmouth Green `#00693E` as the one brand colour for buttons, links and accents; Rich Forest Green `#0D1E1C` for body text and full-bleed dark sections; Gray 1 `#F7F7F7` panels, `#E2E2E2` rules, `#707070` captions. Headlines in EB Garamond (standing in for Dartmouth Ruzicka) at regular weight, very large (hero up to 160px, H1 60px, H2 40px) with slight negative tracking. Body in Inter (standing in for National 2) at weight 300, 20px, 1.75 line height. Buttons: square, 13px uppercase labels tracked 0.2rem, padding 23px 25px 20px, green background with a `#0D1E1C` layer that slides across on hover over 500ms; alternate button `#A5D75F` with black text; ghost button with a 1px `rgba(0,0,0,0.3)` border. No shadows. Events list with stacked day/month dates. Landscape and campus photography.

```css
:root {
  --brand-green: #00693E;
  --brand-forest: #12312B;
  --brand-forest-rich: #0D1E1C;
  --brand-white: #FFFFFF;
  --brand-black: #000000;
  --brand-spring: #C4DD88;
  --brand-spring-rich: #A5D75F;
  --brand-gray-1: #F7F7F7;
  --brand-gray-2: #E2E2E2;
  --brand-gray-3: #707070;
  --brand-river-blue: #267ABA;
  --brand-river-navy: #003C73;
  --brand-bonfire-red: #9D162E;
  --brand-summer-yellow: #F5DC69;
  --brand-font-serif: "Dartmouth Ruzicka", "EB Garamond", Georgia, serif;
  --brand-font-sans: "National 2", "Inter", Arial, sans-serif;
  --brand-radius: 0px;
  --brand-btn-tracking: 0.2rem;
  --brand-ease: cubic-bezier(0.215, 0.61, 0.355, 1);
  --brand-content-width: 69.375rem;
  --brand-text-width: 49rem;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Dartmouth College.
