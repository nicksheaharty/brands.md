---
name: Legendary Entertainment
shortName: "Legendary"
slug: legendary
url: https://www.legendary.com
category: Studio
tagline: "Midnight navy, uppercase Gotham and kaiju-scale video heroes from the Dune studio."
updated: 2026-11-16
logoBackground: "#000D1D"
theme: dark
colors:
  - name: Legendary Navy
    hex: "#000D1D"
    role: Page background, logo background, hero panels
  - name: White
    hex: "#FFFFFF"
    role: Logo, headings, nav, outline buttons
  - name: Slate Blue
    hex: "#48576B"
    role: Slider dots, filled pagination, secondary buttons
  - name: Rule Blue
    hex: "#3B608D"
    role: Section header rules, sidebar borders, active underline
  - name: Muted Blue
    hex: "#486486"
    role: Card meta text (source, date), footnotes
  - name: Link Blue
    hex: "#6199FF"
    role: Inline links in article bodies
  - name: Panel Navy
    hex: "#0C1D31"
    role: Preview card bodies in feed and catalog rows
  - name: Steel Navy
    hex: "#303F4F"
    role: Search and form inputs, menu rows, footer
  - name: Button Black
    hex: "#191C1E"
    role: Default fill of outline buttons
  - name: Ink
    hex: "#313131"
    role: Text on white hover states
  - name: Silver
    hex: "#B7B7B7"
    role: Labels, dividers, close buttons
  - name: Filter Grey
    hex: "#505050"
    role: Inactive filter links
  - name: Alert Red
    hex: "#D94747"
    role: Required fields, validation errors
fonts:
  display:
    family: "Gotham"
    fallback: "Montserrat"
    weights: [500, 700]
  body:
    family: "Gotham"
    fallback: "Montserrat"
    weights: [400, 500]
  mono:
    family: "Proxima Nova"
    fallback: "Figtree"
    weights: [600]
typeScale:
  - { role: Display, size: 50, weight: 700, lineHeight: 1.05, tracking: "0.02em" }
  - { role: Hero Title, size: 36, weight: 700, lineHeight: 1.1, tracking: "0.04em" }
  - { role: Article Title, size: 32, weight: 700, lineHeight: 1.15, tracking: "0.02em" }
  - { role: Section Title, size: 24, weight: 500, lineHeight: 1.05, tracking: "0.04em" }
  - { role: Nav, size: 20, weight: 500, lineHeight: 1.2, tracking: "0.06em" }
  - { role: Kicker, size: 18, weight: 600, lineHeight: 1.2, tracking: "0.06em" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Meta, size: 12, weight: 400, lineHeight: 1.3, tracking: "0.04em" }
radii: { sm: 1, md: 2, lg: 4, pill: 9999 }
spacing: [5, 10, 12, 20, 22, 30, 40, 60]
shadows:
  - { name: Hero Text, value: "0 2px 12px rgba(0,0,0,0.6)" }
  - { name: Overlay, value: "0 0 0 100vmax rgba(0,0,0,0.8)" }
preview:
  bg: "#000D1D"
  surface: "#0C1D31"
  text: "#FFFFFF"
  muted: "#B7B7B7"
  border: "#3B608D"
  accent: "#FFFFFF"
  accentText: "#000D1D"
  radius: 2
  buttonStyle: outline
---

# Legendary Entertainment

## 1. Visual Theme & Atmosphere

Legendary is the studio behind the MonsterVerse (Godzilla, Kong), Dune, Pacific Rim and Detective Pikachu, and its site (legendary.com) is built to feel like the opening of one of those films: a near-black navy field, full-screen muted trailers, and white uppercase Gotham laid over them. The brand is cold and large-scale. There is no bright accent; colour comes from the footage.

What makes it recognisable:

- **Midnight navy instead of black.** `body, html { background: #000D1D }`. Panels step up through `#0C1D31` and `#303F4F`.
- **Video hero carousel.** The home page opens on stacked full-viewport trailer loops ("Street Fighter", "Dune: Part Three", "Digger"), each with a title, a short line and a single "Discover More" button.
- **Wide uppercase Gotham.** Nav, headings, filters, breadcrumbs, buttons and kicker labels are all uppercase. Body is Gotham Book at 14px.
- **The knot.** The Legendary symbol, four interlocking L shapes forming a round knot, sits next to a widely tracked "LEGENDARY" wordmark.
- **Thin white outline buttons** with a 2px radius that fill white on hover.
- **Blue-grey hairlines** (`#3B608D`) under section headers, and muted blue meta text (`#486486`) on news cards.

Density: low on the home page (one hero per screen), medium in the news feed and catalog carousels.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Legendary Navy | `#000D1D` | Page background everywhere, hero panels, menu |
| Panel Navy | `#0C1D31` | Preview card content area in feed and catalog scrollers |
| Steel Navy | `#303F4F` | Inputs, menu list rows, footer |
| Footer Navy | `#2F3F4F` | Footer variants |
| White | `#FFFFFF` | Text, logo, button outlines |
| Button Black | `#191C1E` | Resting fill of `a.button` |
| Detail Black | `#191C20` | Action chips on title detail heroes |
| Dark Grey | `#1E1E1E` | Dark button variant border and hover |

### Blues

| Name | Hex | Role |
| --- | --- | --- |
| Slate Blue | `#48576B` | Slider dots, paging, secondary filled buttons (2px border same colour) |
| Rule Blue | `#3B608D` | `.sectionHeader hr`, news sidebar borders (2px) |
| Muted Blue | `#486486` | Source and date on news and video cards, footnotes |
| Link Blue | `#6199FF` | Underlined links in article text, hover to white |
| Soft Blue | `#6D9AC7` | Hover state on meta links (approximate role) |

### Greys and semantic

| Name | Hex | Role |
| --- | --- | --- |
| Silver | `#B7B7B7` | Newsletter label, close buttons, divider lines |
| Silver Light | `#C1C1C1` | Secondary dividers |
| Filter Grey | `#505050` | Inactive grid and cover-flow filters |
| Ink | `#313131` | Text on white (button hover) |
| Alert Red | `#D94747` | Required markers, form validation |
| Blood Red | `#590400` / `#2A0000` | Title-specific themes for horror releases only |

### Mode

Dark only. White surfaces appear only as hover fills inside buttons.

## 3. Typography

- **Gotham** (Hoefler&Co.) in Book, Medium and Bold, self-hosted as `gotham_book`, `gotham_medium`, `gotham_bold`. Body is Gotham Book; headings Gotham Bold or Medium.
- **Proxima Nova** (Adobe Fonts kit) for small UI labels such as the newsletter heading (18px 600 uppercase).
- **Trump Gothic Pro** and **Trump Soft Pro** are in the Adobe Fonts kit for condensed title cards and campaign pages. Treat them as display-only; the core site does not depend on them.
- All are licensed. Fallbacks from Google Fonts: **Montserrat** for Gotham, **Figtree** for Proxima Nova, **Oswald** for Trump Gothic.

### Scale

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Display | 50px (40px mobile) | Bold | 1.05 | Search and landing titles |
| Hero title | 36px (22px under 1024px) | Bold | 1.1 | Uppercase, over video |
| Article title | 32px | Bold | 1.15 | Uppercase `.single h1` |
| Section title | 24px | Medium | 25px | Uppercase `h2` in content |
| Subsection | 20px | Medium | 1.2 | `h3`, full-screen titles |
| Nav | 20px | 600 | 1.2 | Main menu, breadcrumbs (16px mobile) |
| Kicker | 18px (16px under 1024px) | 600 | 1.2 | Hero vertical label, filters, blockquotes |
| Body | 14px | Book | 18px | Paragraphs, captions |
| Meta | 12-13px | Book | 1.3 | Card source and date, menu footer |

### Rules

- Uppercase for nav, headings, filters, buttons, breadcrumbs, kickers and dates.
- Add slight positive tracking (0.04-0.06em) to uppercase Gotham; body text stays at 0.
- Headings `h2` and `h3` use normal weight in the CSS; emphasis comes from size and case, not boldness.
- Truncate news headlines with an ellipsis after about 40 characters on cards ("'Minecraft 2' Is Happening With Direct...").

## 4. Logo & Brand Mark

- **Symbol:** a circular knot built from four L shapes, each rotated 90 degrees around the centre, interlocking like a seal. It reads as a crest and doubles as an app or social avatar.
- **Wordmark:** "LEGENDARY" in wide geometric capitals with open tracking, set to the right of the symbol at about the symbol's middle third in cap height.
- **Lockup proportions:** symbol height is roughly 3x the wordmark cap height; gap between symbol and wordmark is about half the symbol width.
- **Colour versions:** white on Legendary Navy (primary on the site), black on white for print and legal. One colour only.
- **Clear space:** one quarter of the symbol width on all sides.
- **Minimum size:** symbol 20px; full lockup 120px wide.
- **Divisions:** Legendary Pictures, Legendary Television, Legendary Comics and Nerdist use the same knot with their own sub-wordmarks.

Misuse: don't separate the four L shapes, rotate the knot, add metallic effects to the UI version, or tint it blue.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 100px; padding: 10px 12px; margin: 20px 0;
  background: #191C1E; color: #FFFFFF;
  border: 1px solid #FFFFFF; border-radius: 2px;
  font: 500 14px/1 "Gotham", "Montserrat", sans-serif;
  text-transform: uppercase; letter-spacing: 0.06em;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}
.btn:hover { background: #FFFFFF; color: #313131; }

.btn-hero { padding: 10px 22px; background: rgba(0,0,0,0.4); }   /* "Discover More" over video */
.btn-hero:hover { background: #FFFFFF; color: #313131; }

.btn-dark { border-color: #1E1E1E; }
.btn-dark:hover { background: #1E1E1E; color: #FFFFFF; }

.btn-solid { background: #000000; border: 0; border-radius: 4px; }
.btn-solid:hover { background: #FFFFFF; color: #000000; }

.btn-slate { background: #48576B; border: 2px solid #48576B; }
```

Disabled: 40% opacity, no hover change.

### Inputs

Search ("Search for:") and newsletter fields: Steel Navy `#303F4F` fill, no border, white 14px Gotham text, 2px radius, 40-44px tall. Validation errors show `#D94747` text and a red asterisk on required labels.

### News cards ("Spotlight" and feed)

- Thumbnail 16:9 on top, Panel Navy `#0C1D31` content block below with 16px padding.
- Headline 16-18px Gotham Medium, white, one or two lines with ellipsis.
- Excerpt 14px Book at 80% white.
- Footer: source and date in Muted Blue `#486486`, 12px uppercase, separated by a pipe ("Deadline | September 04, 2025").
- Cards sit in horizontal scrollers with "Previous" / "Next" arrows.

### Hero carousel

Full-viewport muted video, title logo or uppercase 36px Gotham Bold title centred, a kicker line above in 18px uppercase, then one "Discover More" hero button. Pagination: small round dots in Slate Blue `#48576B`, active dot white.

### Section headers

Uppercase 24px Medium title, then an `hr` in Rule Blue `#3B608D`, 2px, full width of the content column.

### Navigation

- Header: knot + wordmark left, "Menu" burger right.
- Full-screen menu on Legendary Navy: links "Film", "TV", "Comics", "Nerdist", "Latest News", "About", "Shop" in 20px uppercase; social links (Instagram, TikTok, Twitter, Facebook, YouTube) below; search field at the bottom.
- Hover: link stays white, an underline or slide-in rule appears over 0.2s.
- Shelf dropdowns (filters) open with a chevron that rotates 180 degrees.

### Cover flow and grid filters

Uppercase 18px filter links in Filter Grey `#505050`; active filter turns white. Below, a cover-flow of posters or a grid of 2:3 poster tiles with 2px radius.

### Title detail hero

Large key art, title logo, meta row (rating, year, runtime) in 12px uppercase, action chips ("Watch Trailer", "Where to Watch") as Detail Black `#191C20` boxes that invert to white on hover.

### Modals

Video lightbox on `rgba(0,0,0,0.8)`, close "X" in Silver `#B7B7B7` top-right, 16:9 player up to 1280px.

## 6. Layout & Spacing

- **Full-bleed hero** sections at 100vh.
- **Content column:** about 1200px max for news and articles, centred; article body narrower (around 760px).
- **Gutters:** 20-40px on desktop, 20px on mobile; header buttons use 21px padding with 40px on the right.
- **Spacing:** irregular legacy values cluster on 5, 10, 12, 20, 22, 30, 40, 60px.
- **Breakpoints:** 567px (mobile type sizes), 1024px (hero title and kicker shrink).
- **Columns:** content blocks offer half, third and quarter columns.

## 7. Depth, Elevation & Motion

- **Flat panels.** Depth comes from stepping navy values (`#000D1D` > `#0C1D31` > `#303F4F`), not from shadows.
- **Overlays:** `rgba(0,0,0,0.4)` behind hero buttons, `rgba(0,0,0,0.8)` for lightboxes, `rgba(49,49,49,0.8)` for gallery captions.
- **Text over video** can take a soft shadow `0 2px 12px rgba(0,0,0,0.6)` (approximate).
- **Durations:** 0.2s ease-in-out for nearly every hover (106 uses), 0.35s for menus, 0.5-0.6s ease-in-out for carousel and section transitions.
- **Motion:** GSAP-driven section reveals on scroll, cover-flow carousels, hero videos crossfading. Keep moves slow and heavy.

## 8. Iconography & Imagery

- **Icons:** Font Awesome glyphs (social, play, search, chevrons) in white or Silver, 16-20px. Simple line or solid, no colour.
- **Imagery:** official trailers and key art at full bleed. Scale is the subject: monsters against skylines, desert vistas, giant machines. Colour grading is cold, desaturated and backlit, which the navy UI matches.
- **Title treatments:** each film keeps its own logo (Dune's thin custom letters, Godzilla x Kong's metallic type). The corporate UI never re-creates them.
- No illustration or stock photography in the corporate brand; Legendary Comics art appears only on its own pages.

## 9. Voice & Microcopy

Short, matter-of-fact and fan-facing. News is quoted from trade press with the source shown.

- Hero CTA: "Discover More".
- Nav: "Film", "TV", "Comics", "Nerdist", "Latest News", "About", "Shop".
- Section labels: "Spotlight", "Latest News", "Films", "Series".
- Card meta: "Deadline | September 04, 2025".
- Footer: "TM & © 2026 Legendary. All rights reserved." followed by the company description: "Legendary Entertainment is a leading media company with film, television and digital, and comics divisions dedicated to owning, producing and delivering content to mainstream audiences with a targeted focus on the powerful fandom demographic."
- Casing: uppercase for labels and buttons, title case for headlines quoted from press.

## 10. Do's and Don'ts

**Do**

- Use `#000D1D` for every page background.
- Set navigation, headings and buttons in uppercase Gotham (or Montserrat).
- Lead with full-screen trailer loops and one clear "Discover More" action.
- Use thin white outline buttons with a 2px radius that invert on hover.
- Put card meta in Muted Blue `#486486` and section rules in `#3B608D`.
- Keep the knot and wordmark white.

**Don't**

- Don't swap the navy for pure black or for a bright blue.
- Don't add a saturated accent colour to the chrome.
- Don't round buttons beyond 4px or make them pills.
- Don't use drop-shadowed cards; step the navy instead.
- Don't recreate film title logos in Gotham.
- Don't mix in lowercase nav labels.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Legendary Entertainment. Page background navy `#000D1D`, white text, card bodies `#0C1D31`, inputs and menu rows `#303F4F`. Typeface Gotham with Montserrat as the fallback: body 14px/18px weight 400; uppercase headings (hero 36px bold, section 24px medium, nav 20px) with 0.04-0.06em tracking. Open with a full-viewport muted video hero, an uppercase title, an 18px kicker above it and one "Discover More" button: 1px white border, 2px radius, `rgba(0,0,0,0.4)` fill, uppercase, inverting to white with `#313131` text on hover over 0.2s ease-in-out. Section headers get a 2px `#3B608D` rule. News cards have 16:9 thumbnails, `#0C1D31` bodies, white headlines and source/date meta in `#486486` 12px uppercase ("Deadline | September 04, 2025"). Inline links `#6199FF`. Put the white knot symbol and widely spaced LEGENDARY wordmark top-left. No shadows, no bright accents, no pills.

```css
:root {
  --brand-navy: #000D1D;
  --brand-panel: #0C1D31;
  --brand-steel: #303F4F;
  --brand-slate: #48576B;
  --brand-rule: #3B608D;
  --brand-meta: #486486;
  --brand-link: #6199FF;
  --brand-button: #191C1E;
  --brand-ink: #313131;
  --brand-silver: #B7B7B7;
  --brand-filter: #505050;
  --brand-error: #D94747;
  --brand-text: #FFFFFF;
  --brand-overlay: rgba(0, 0, 0, 0.4);
  --brand-lightbox: rgba(0, 0, 0, 0.8);
  --brand-font: "Gotham", "Montserrat", "Helvetica Neue", Arial, sans-serif;
  --brand-font-label: "Proxima Nova", "Figtree", sans-serif;
  --brand-font-condensed: "Trump Gothic Pro", "Oswald", sans-serif;
  --brand-tracking-caps: 0.05em;
  --brand-radius: 2px;
  --brand-radius-solid: 4px;
  --brand-duration: 0.2s;
  --brand-duration-slow: 0.6s;
  --brand-ease: ease-in-out;
  --brand-content-max: 1200px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Legendary Entertainment.
