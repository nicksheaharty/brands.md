---
name: Pixar Animation Studios
shortName: "Pixar"
slug: pixar
url: https://www.pixar.com
category: Studio
tagline: "A quiet white gallery of film art, light Proxima Nova and the serif wordmark."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Pixar Black
    hex: "#231F20"
    role: Wordmark colour, headline text on white
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on dark sections
  - name: Ball Yellow
    hex: "#F5C400"
    role: Approximate. Pixar Ball base colour, playful accents only
  - name: Ball Blue
    hex: "#1D5BA6"
    role: Approximate. Pixar Ball stripe, links in campaign art
  - name: Star Red
    hex: "#E2231A"
    role: Approximate. Pixar Ball star, rare highlight
  - name: Black
    hex: "#000000"
    role: Body text, primary button fill, footer
  - name: Paper
    hex: "#F6F6F4"
    role: Light-bold section background
  - name: Mist
    hex: "#F5F5F5"
    role: Light accent fills, hover rows
  - name: Silver
    hex: "#D9D9D9"
    role: Accent tone, borders, buttons on dark
  - name: Lamp Grey
    hex: "#797979"
    role: Dark section background, secondary text
  - name: Charcoal
    hex: "#2B2B2B"
    role: Dark button variant, overlay base
  - name: Sky
    hex: "#8AD6F4"
    role: Headline colour in one feature section theme
fonts:
  display:
    family: "Proxima Nova"
    fallback: "Figtree"
    weights: [300, 400]
  body:
    family: "Proxima Nova"
    fallback: "Figtree"
    weights: [300, 400, 700]
  mono:
    family: "Brandon Grotesque"
    fallback: "Jost"
    weights: [500]
typeScale:
  - { role: Heading 1, size: 43, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Heading 2, size: 40, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Large Text, size: 40, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Heading 3, size: 34, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Button, size: 16, weight: 400, lineHeight: 1.2, tracking: "0.02em" }
  - { role: Body, size: 14, weight: 300, lineHeight: 1.3, tracking: "0" }
  - { role: Nav, size: 11, weight: 500, lineHeight: 3.2, tracking: "0.23em" }
  - { role: Meta, size: 11, weight: 400, lineHeight: 1.2, tracking: "0.1em" }
radii: { sm: 5, md: 7, lg: 12, pill: 9999 }
spacing: [8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Card Hover, value: "0 10px 30px rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F4"
  text: "#000000"
  muted: "#797979"
  border: "#D9D9D9"
  accent: "#000000"
  accentText: "#FFFFFF"
  radius: 5
  buttonStyle: solid
---

# Pixar Animation Studios

## 1. Visual Theme & Atmosphere

Pixar's own brand is much calmer than its films. The site (pixar.com, built on Squarespace) is a white gallery: large film stills and posters, a thin serif wordmark at the top, light-weight Proxima Nova headings and tiny, widely tracked uppercase navigation. The colour and personality come from the films (Toy Story, Inside Out, Up, Coco, Elio) and from two mascots: Luxo Jr., the desk lamp that hops onto the wordmark in every film opening, and the yellow Pixar Ball with its blue stripe and red star.

What makes it recognisable:

- **White and neutral greys.** The Squarespace palette is entirely achromatic: black, white, `#F5F5F5`, `#D9D9D9`, `#797979`. Sections switch between white, Paper `#F6F6F4` and a dark grey band.
- **The serif wordmark.** "PIXAR" in a flared, slightly calligraphic serif, set in Pixar Black `#231F20`, letter-spaced wide on the site and tight and heavy in film openings.
- **Light-weight headings.** Headings use Proxima Nova at weight 300, never bold. Large type stays soft.
- **Spaced-out labels.** Navigation is Brandon Grotesque 500, uppercase, `letter-spacing: .23em`. Footer headings are literally spaced out: "F I L M S", "T E C H", "C A R E E R S", "N O W   S T R E A M I N G".
- **Art as colour.** Film stills, character renders and poster art provide every saturated colour on the page.

Density: low. One idea per section, lots of white space, big images, short captions.

## 2. Color Palette & Roles

### Site neutrals (Squarespace tokens)

| Name | Hex | Token | Role |
| --- | --- | --- | --- |
| Black | `#000000` | `--black-hsl: 0,0%,0%` | Body and heading text, primary button fill |
| White | `#FFFFFF` | `--white-hsl` | Page background, text on dark |
| Mist | `#F5F5F5` | `--lightAccent-hsl: 0,0%,96.08%` | Light fills |
| Silver | `#D9D9D9` | `--accent-hsl: 0,0%,85.1%` | Accent, borders, buttons on dark sections |
| Lamp Grey | `#797979` | `--darkAccent-hsl: 0,0%,47.45%` | Dark section background, secondary text |
| Paper | `#F6F6F4` | `light-bold` theme | Warm off-white section background |
| Charcoal | `#2B2B2B` | button variant | Dark solid button |
| Graphite | `#272727` / `#3E3E3E` | | Dark text and borders in components |
| Sky | `#8AD6F4` | one section theme | Large headline colour in a feature band |

### Brand mascots (approximate)

| Name | Hex | Source |
| --- | --- | --- |
| Pixar Black | `#231F20` | Sampled from the site's header wordmark |
| Ball Yellow | `#F5C400` | Pixar Ball base (approximate) |
| Ball Blue | `#1D5BA6` | Pixar Ball stripe (approximate) |
| Star Red | `#E2231A` | Pixar Ball star (approximate) |
| Lamp Silver | `#C9CCCF` | Luxo Jr. lamp body in renders (approximate) |

Use the ball colours as a small motif (a dot, a badge, a 404 illustration), never as UI chrome.

### Section themes

| Theme | Background | Headings / text | Primary button |
| --- | --- | --- | --- |
| White | `#FFFFFF` | `#000000` | black fill, white text |
| Light | `rgba(230,230,230,0.11)` over white | `#000000` | black fill, white text |
| Light bold | `#F6F6F4` | `#000000` | black fill, white text |
| Dark | `#797979` | `#FFFFFF` | `#D9D9D9` fill, black text |
| Black | `#000000` | `#FFFFFF` | `#D9D9D9` fill, black text |

### Mode

Light first. Dark and black bands are used for footers and trailer sections, not as a full dark mode.

## 3. Typography

- **Proxima Nova** (Adobe Fonts) for headings, body, meta and buttons. Heading and body weight 300, meta 400 uppercase, buttons 400. Fallback: **Figtree**.
- **Brandon Grotesque** (Adobe Fonts) 500 for site navigation only. Fallback: **Jost**.
- **Wordmark** is custom lettering; never type it. Film titles each have their own logo art.
- Both web fonts are licensed via Adobe Fonts. System fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif` (the site uses this for some components).

### Scale (16px root)

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Heading 1 | 2.7rem / 43px | 300 | 1.3em | Page titles ("Careers at Pixar") |
| Heading 2 | 2.5rem / 40px | 300 | 1.3em | Section titles |
| Large text | 2.5rem / 40px | 300 | 1.3em | Pull statements |
| Heading 3 | 2.1rem / 34px | 300 | 1.3em | Card group titles |
| Heading 4 | 0.7rem / 11px | 300 | 1.3em | Small caps-style kickers |
| Button | 1rem / 16px | 400 | 1.2em | `letter-spacing: .02em` |
| Body | 0.9rem / 14.4px | 300 | 1.3em | Paragraphs |
| Nav | 0.7rem / 11.2px | 500 | 3.2em | Brandon Grotesque, uppercase, `.23em` |
| Meta | 11-12px | 400 | 1.2em | Uppercase, dates and categories |
| Secondary button | 0.5rem / 8px | 700 | 1.2em | Uppercase, `.1em` |

### Rules

- Headings are light (300) and mixed case. Do not bold them.
- Navigation and meta are uppercase with wide tracking.
- Section labels can be spaced manually with spaces between letters, as in the footer. Use `letter-spacing: 0.6em` to get the same look in CSS.
- Body text is short; keep paragraphs to two or three sentences.

## 4. Logo & Brand Mark

- **Wordmark:** "PIXAR" in a custom flared serif with calligraphic stroke endings; the X has a long descending right leg and the R a curled tail.
- **Studio lockup:** "PIXAR" with "ANIMATION STUDIOS" in very widely spaced small capitals underneath. This is the version on pixar.com and the file in this folder.
- **Film opening:** Luxo Jr. hops in from the left, flattens the "I" by bouncing on it, then takes its place as the I and turns its light toward the viewer. The opening uses a heavier cut of the wordmark (used for the icon here). The lamp version is animation-only; it is not available as a public vector, so static uses show the plain wordmark.
- **Colour:** Pixar Black `#231F20` on white (primary), white on black or on dark film art. Single colour only.
- **Clear space:** height of the "P" bowl on all sides.
- **Minimum size:** 80px wide for the wordmark, 140px for the lockup with "ANIMATION STUDIOS".
- Disney co-branding ("Disney · Pixar") is used on film posters; corporate pages show Pixar alone.

Misuse: don't recolour the wordmark in Ball Yellow or blue, don't add the lamp as a static drawing next to it, don't re-set it in a stock serif, and don't compress its letter spacing on the lockup.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 16px 32px; border-radius: 5px; border: 0;
  background: #000000; color: #FFFFFF;
  font: 400 16px/1.2 "Proxima Nova", "Figtree", sans-serif;
  letter-spacing: .02em;
  transition: opacity 150ms ease, background-color 150ms ease;
}
.btn:hover { opacity: .8; }
.dark .btn { background: #D9D9D9; color: #000000; }

.btn-secondary {                 /* small tag-like button */
  padding: 8px 16px; border-radius: 7.2px;
  font: 700 8px/1.2 "Proxima Nova", sans-serif;
  text-transform: uppercase; letter-spacing: .1em;
  background: transparent; border: 1px solid currentColor;
}
.btn-text { background: none; padding: 16px 0; color: #000; }   /* "Learn more" */
.btn-text:hover { text-decoration: underline; text-underline-offset: 4px; }
```

### Navigation

- Header about 80-100px tall on white. Wordmark (about 180-220px wide) left or centred; folders right: "FILMS", "TECHNOLOGY", "CAREERS", "MORE".
- Brandon Grotesque 500, 11.2px, uppercase, `letter-spacing: .23em`, black.
- Dropdowns list sub-pages in the same style: "FEATURE FILMS", "SHORT FILMS", "SERIES", "SPARKSHORTS", "DOCUMENTARIES"; "TECHNOLOGY AT PIXAR", "RENDERMAN", "OPENUSD", "SOFTWARE R&D".
- Mobile: burger opens a full-screen white menu with folders that slide in and a "Back" link.

### Film grid

- Posters or 16:9 stills in a 3-4 column grid with 16-24px gaps, no borders, 0-5px radius.
- Title under each in 14-16px Proxima Nova 400, year in meta style.
- Hover: image scales 1.03 over about 300ms; a soft shadow `0 10px 30px rgba(0,0,0,0.12)` can appear (approximate).

### Feature banner

Full-width still or loop, light gradient at the bottom, H1 in white 300 weight, "Learn more" text button. Used for careers and "Now Streaming" sections.

### Footer

Black or very dark band. Columns headed by spaced-out labels ("F I L M S", "T E C H", "C A R E E R S", "M O R E") in white uppercase, links below in 14px Proxima Nova 300 at 70% white. Legal row: "Privacy Policy | Your US State Privacy Rights | Children's Online Privacy Policy | Interest Based Ads" and "© 1986-2026 Disney-Pixar".

### Inputs

Squarespace form fields: 1px `#D9D9D9` border, 5px radius, 12-16px padding, 16px text, focus border black. Labels in meta style above the field.

### Cards (careers, technology)

White or Paper background, no shadow at rest, image top, H3 34px 300 title, body 14.4px 300, text button. Technology pages (RenderMan, OpenUSD) keep the same grid with product art instead of film stills.

### Accordions (FAQ)

Rows separated by 1px `#D9D9D9` lines, question in 16-18px 400, plus icon right that rotates to a minus; answer in body style.

## 6. Layout & Spacing

- **Max width:** about 1500px for content, with full-bleed image bands between.
- **Gutters:** 4vw side padding (Squarespace default), minimum 24px on mobile.
- **Section padding:** 64-96px top and bottom on desktop, 48px on mobile.
- **Grid:** Squarespace fluid engine, 24 columns on desktop, 8 on mobile; cards align to 3 or 4 across.
- **Spacing:** 8, 12, 16, 24, 32, 48, 64, 96px.
- **Breakpoints:** 640px (mobile nav), 768px, 1024px.

## 7. Depth, Elevation & Motion

- **Mostly flat.** Sections are separated by background colour (white, Paper, dark grey), not shadows.
- **Images:** a 10% black overlay sits on image blocks (`.image-overlay { opacity: .1 }`) to steady white text.
- **Hover:** opacity 0.8 on buttons, small image scale on cards; 150-300ms ease.
- **Page motion:** fade-up on scroll for blocks (Squarespace "fade" animation), around 600ms ease-out.
- **Brand motion reference:** Luxo Jr.'s hop is the model for any playful animation: anticipation squash, a quick arc, a settle with a little overshoot. Use `cubic-bezier(0.34, 1.56, 0.64, 1)` sparingly for that feel.

## 8. Iconography & Imagery

- **Icons:** thin line icons at 16-24px (social, chevrons, plus, burger) in black or white. Nothing heavy.
- **Imagery:** official film stills and character renders, bright and warmly lit, shown large and uncropped. Pixar's lighting (soft key, warm bounce, deep blue shadows) is the look; don't apply filters.
- **Mascots:** the Pixar Ball (yellow, blue stripe, red star) and Luxo Jr. can appear as small easter eggs: a loader, a 404 page, a cursor. They are not logos.
- **Behind the scenes:** pencil sketches, colour scripts and story panels appear on technology and "Our Story" pages; show them on white with generous margins.

## 9. Voice & Microcopy

Warm, modest, craft-focused. Pixar talks about people and work, not about being the best.

- Careers: "At Pixar, we are proud of our tradition of creative and technical excellence and are always looking for talented people to enrich our work and our community."
- CTA: "Learn more" (sentence case), "Watch the trailer", "Now Streaming".
- Nav: "Films", "Feature Films", "Short Films", "SparkShorts", "Technology", "RenderMan", "Careers", "Life At Pixar", "Our Story", "Pixar In A Box".
- Casing: uppercase for nav and labels, sentence case for headings and buttons.
- No exclamation marks in corporate copy; let the films be the funny part.

## 10. Do's and Don'ts

**Do**

- Keep the page white with black text and grey section bands.
- Use Proxima Nova (or Figtree) at weight 300 for headings.
- Set nav and labels in small uppercase with very wide tracking.
- Let film stills supply all the colour.
- Use the serif wordmark in `#231F20`, letter-spaced, top of page.
- Use 5px radius on buttons and inputs.

**Don't**

- Don't use bold headlines or heavy display fonts.
- Don't paint UI chrome in Pixar Ball yellow, blue or red.
- Don't draw the lamp into the static logo.
- Don't add drop shadows to text or heavy shadows to cards.
- Don't crowd sections; one idea per band.
- Don't re-set film titles in the UI font when title art exists.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Pixar Animation Studios (pixar.com). White background, black text, section bands in `#F6F6F4` and a dark grey `#797979` band with white text; borders `#D9D9D9`. Headings in Proxima Nova (fallback Figtree) at weight 300: H1 43px, H2 40px, H3 34px, line-height 1.3. Body 14.4px weight 300. Navigation in Brandon Grotesque (fallback Jost) 500, 11px uppercase, letter-spacing 0.23em. Footer column headings use very wide letter spacing ("F I L M S"). Buttons: black fill, white 16px 400 text, 0.02em tracking, 16px 32px padding, 5px radius, hover opacity 0.8. Film grid of large stills and posters with 16-24px gaps and titles underneath. Place the thin serif PIXAR wordmark in `#231F20` at the top. Keep colour in the imagery; the only brand hues are the Pixar Ball yellow `#F5C400`, blue `#1D5BA6` and red `#E2231A`, used as a tiny motif at most. No bold headings, no heavy shadows.

```css
:root {
  --brand-wordmark: #231F20;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-paper: #F6F6F4;
  --brand-mist: #F5F5F5;
  --brand-silver: #D9D9D9;
  --brand-grey: #797979;
  --brand-charcoal: #2B2B2B;
  --brand-sky: #8AD6F4;
  --brand-ball-yellow: #F5C400;
  --brand-ball-blue: #1D5BA6;
  --brand-ball-red: #E2231A;
  --brand-font: "Proxima Nova", "Figtree", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-font-nav: "Brandon Grotesque", "Jost", sans-serif;
  --brand-weight-heading: 300;
  --brand-weight-body: 300;
  --brand-nav-tracking: 0.23em;
  --brand-button-tracking: 0.02em;
  --brand-radius: 5px;
  --brand-radius-small: 7.2px;
  --brand-gutter: 4vw;
  --brand-section-pad: 96px;
  --brand-duration: 150ms;
  --brand-ease-hop: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Pixar Animation Studios.
