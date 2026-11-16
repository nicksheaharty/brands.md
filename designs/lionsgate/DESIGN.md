---
name: Lionsgate
slug: lionsgate
url: https://www.lionsgate.com
category: Studio
tagline: "Black screen, heavy white wordmark, steel-blue glow: a franchise studio built on key art."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Black
    hex: "#000000"
    role: Page background, logo background, trailer end cards
  - name: White
    hex: "#FFFFFF"
    role: Wordmark, headlines, button text and outlines
  - name: Lionsgate Blue
    hex: "#124883"
    role: Primary filled buttons, active tabs, section labels
  - name: Deep Blue
    hex: "#163D6B"
    role: Form submit buttons, pressed state
  - name: Steel Blue
    hex: "#335687"
    role: Secondary panels, hover fills, dividers on dark
  - name: Ink Navy
    hex: "#0C131D"
    role: Overlay base for gradients over key art, card bodies
  - name: Tab Blue
    hex: "#004C7E"
    role: Segmented tab track (used at 50% alpha)
  - name: Glow Blue
    hex: "#1C549F"
    role: Text glow on buttons (used at 50% alpha)
  - name: Cyan Highlight
    hex: "#47CFF7"
    role: Focus rings, small highlights on interactive art
  - name: Grey
    hex: "#555555"
    role: Disabled text, inactive icons
  - name: Alert Red
    hex: "#C92924"
    role: Errors, sold-out and warning labels
  - name: Gate Bronze
    hex: "#B08D57"
    role: Approximate. Metallic tone of the film ident gears and gate, use only in ident-style art
fonts:
  display:
    family: "Montserrat"
    fallback: "Montserrat"
    weights: [500, 700]
  body:
    family: "Montserrat"
    fallback: "Montserrat"
    weights: [300, 400, 500]
  mono:
    family: "Inter"
    fallback: "Inter"
    weights: [400]
typeScale:
  - { role: Hero Title, size: 36, weight: 700, lineHeight: 1.1, tracking: "0.5px" }
  - { role: Section Title, size: 26, weight: 700, lineHeight: 1.2, tracking: "0.5px" }
  - { role: Card Title, size: 20, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Mobile Title, size: 16, weight: 700, lineHeight: 1.25, tracking: "0.5px" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.3, tracking: "0.5px" }
  - { role: Header Text, size: 13, weight: 400, lineHeight: 1.45, tracking: "0.5px" }
  - { role: Button, size: 13, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Caption, size: 11, weight: 500, lineHeight: 1.3, tracking: "1px" }
radii: { sm: 5, md: 14, lg: 20, pill: 9999 }
spacing: [4, 8, 10, 15, 20, 30, 40, 52]
shadows:
  - { name: Button Text Glow, value: "0 0 6px rgba(28,84,159,0.5)" }
  - { name: Card, value: "0 8px 24px rgba(0,0,0,0.65)" }
  - { name: Art Vignette, value: "inset 0 -120px 120px -40px rgba(12,19,29,0.75)" }
preview:
  bg: "#000000"
  surface: "#0C131D"
  text: "#FFFFFF"
  muted: "#A6A6A6"
  border: "#3A4A60"
  accent: "#124883"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Lionsgate

## 1. Visual Theme & Atmosphere

Lionsgate presents itself the way its trailers end: a black screen, a heavy white wordmark, and a cold blue light behind it. The corporate site (lionsgate.com) is a dark single-page React app where full-bleed key art and trailers carry the page and the interface sits on top as thin white text, translucent pills and blue-tinted gradients.

What makes it recognisable:

- **Black first.** `html { background: #000; color: #fff }`. There is no light theme on the brand surfaces.
- **Franchise key art at full size.** Hunger Games, John Wick, Saw, Twilight and Step Up art fills the viewport. The studio brand is the frame around those titles, not the subject.
- **Steel blue as the only hue.** Buttons, tabs and glows use a family of desaturated blues (`#124883`, `#163D6B`, `#335687`, `rgba(0,76,126,0.5)`). Text on buttons gets a soft blue glow (`text-shadow: 0 0 6px rgba(28,84,159,0.5)`).
- **Pill controls.** Buttons and tab groups are rounded to 20-40px with a 2px white outline at 40% alpha.
- **Heavy grotesque wordmark.** The current mark is "LIONSGATE" in a very bold, tightly spaced grotesque, set on one line in site headers and stacked as LIONS / GATE in newer lockups.

On screen the brand also lives in the film ident: a camera move through dark bronze gears and a metal gate that opens onto light, ending on the wordmark. Marketing borrows that mood: dark, metallic, backlit.

Density: low. One title per viewport on the home page, horizontal carousels of poster cards below, very little body copy.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Black | `#000000` | Page background, logo ground, trailer end cards |
| White | `#FFFFFF` | Wordmark, headings, primary text, outlines |
| Lionsgate Blue | `#124883` | Filled primary buttons, active tab, small section labels with a blue underline |
| Deep Blue | `#163D6B` | Form submit button, pressed state |
| Steel Blue | `#335687` | Panels and hover fills; also used at 20% and 80% alpha |
| Ink Navy | `#0C131D` | Base of gradients over art (used at 0, 25, 50, 65, 75% alpha) |
| Tab Blue | `rgba(0,76,126,0.5)` | Track of the segmented tab control on the home page |
| Glow Blue | `rgba(28,84,159,0.5)` | Text glow on buttons |

### Supporting

| Name | Hex | Role |
| --- | --- | --- |
| Cyan Highlight | `#47CFF7` | Focus states and accents in interactive pages |
| Pale Cyan | `#BAE7F8` | Light tint for hover text on blue |
| Bright Blue | `#0287D2` | Links in microsites |
| Grey | `#555555` | Disabled, inactive icons |
| Alert Red | `#C92924` | Errors, sold-out, warnings |
| Yellow | `#F9D75E` | Rare promo flags in microsites |
| Gate Bronze | `#B08D57` (approximate) | Ident-style metallic art only; not a UI colour |

### Text on black

| Use | Value |
| --- | --- |
| Primary | `#FFFFFF` |
| Secondary | `rgba(255,255,255,0.7)` |
| Tertiary / captions | `rgba(255,255,255,0.5)` |
| Outline on pills | `rgba(255,255,255,0.4)` (`hsla(0,0%,100%,.4)`) |

### Mode

Dark only. Investor and legal pages fall back to plain white documents; treat those as utility pages. When you need a light surface (press kit sheets, PDFs), use white with `#124883` headings and black body text.

## 3. Typography

- **Wordmark type** is custom lettering and is never typed out. Use the logo file.
- **Montserrat** is the web UI face (586 declarations in the site stylesheet): 700 for titles, 500 for buttons and card titles, 400 and 300 for body and header text. It is a free Google Font, so use it directly.
- **Inter** is loaded alongside for some long-form blocks (26px/36px intro paragraphs).
- **Roboto** appears on small mobile button labels; **Bank Gothic** and **Cinzel** appear only inside title microsites. Don't use them for the corporate brand.
- Fallback stack: `"Montserrat", "Helvetica Neue", Arial, sans-serif`.

### Scale

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero title | 36px | 700 | 1.1 | Uppercase allowed; 22-26px on mobile |
| Section title | 26px | 700 | 1.2 | "Movies", "TV Shows" |
| Intro paragraph | 26px | 400 | 36px | Inter, centred, 20% side padding on desktop |
| Card title | 20px | 500 | 1.3 | Poster captions |
| Mobile title | 16px | 700 | 20px | Uppercase, 0 20px padding |
| Body | 14px | 400 | 18px | Descriptions in title scrollers |
| Header text | 13px | 400 | 19px | `letter-spacing: .5px` |
| Button | 13px | 500 | 14px | 12px on small buttons, 11px on compact |
| Caption | 11-12px | 500 | 1.3 | Dates, ratings, `letter-spacing: 1px` |

### Rules

- `letter-spacing: 0.5px` is the house default for Montserrat text; captions go to 1px.
- Uppercase for section labels, mobile titles and nav items; title case for buttons ("Watch Trailer", "Get Tickets", "Buy Now").
- Film titles appear as their own logo art from the key art, never re-set in Montserrat when the art exists.

## 4. Logo & Brand Mark

- **Wordmark:** "LIONSGATE" in a heavy custom grotesque with tight spacing and a small registered mark. On the site header it sits on one line in white at about 140px wide (`.MenuButtonTopBar { max-width: 140px }`).
- **Stacked lockup:** LIONS over GATE, flush left and right, used in newer studio and film-ident material. This is the file in this folder and the basis of the icon.
- **Film ident:** the wordmark resolves out of a bronze-and-steel gear and gate animation. Use the static wordmark everywhere else.
- **Lionsgate Studios** lockup adds "STUDIOS" in wide-tracked small caps under the wordmark for corporate and investor use.
- **Colour versions:** white on black (primary), black on white, white over darkened key art. No blue or bronze versions of the wordmark on UI.
- **Clear space:** at least the cap height of the "L" on all sides.
- **Minimum size:** 90px wide for the one-line wordmark, 40px wide for the stacked lockup.

Misuse: no outlines, gradients, bevels or drop shadows on the wordmark; don't re-space or re-set it in Montserrat; don't put it on mid-tone art without a dark gradient behind it.

## 5. Components

### Buttons

The main button is a pill with a translucent white outline and a fill that fades in on hover.

```css
.btn {
  position: relative; display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 30px; border-radius: 20px;
  border: 2px solid rgba(255,255,255,0.4);
  background: transparent; color: #FFFFFF;
  font: 500 13px/14px "Montserrat", sans-serif;
  text-shadow: 0 0 6px rgba(28,84,159,0.5);
  transition: all 300ms ease;
}
.btn:hover { background: #FFFFFF; color: #124883; text-shadow: none; border-color: #FFFFFF; }
.btn-primary { background: #124883; border-color: #124883; }
.btn-primary:hover { background: #FFFFFF; color: #124883; }
.btn-submit { background: #163D6B; font-weight: 700; font-size: 14px; border-radius: 17px; padding: 4px 35px; transition: all 500ms; }
.btn:disabled { opacity: 0.4; pointer-events: none; }
```

- **Icon pill** ("Watch Trailer"): 24px circular holder on the left (`background: rgba(255,255,255,0.3)`, 50% radius) with a white play glyph, label padded left by 18px.
- **Download / play bars:** 33px tall, 40px radius, 2px `rgba(255,255,255,0.5)` border, white square icon cap on the left edge.
- Sizes: default 34px tall (10px 30px padding); small 28px (6px 25px); compact 24px (6px 16px, 11px text).

### Segmented tabs

```css
.tabs { display: flex; padding: 0; border-radius: 40px; background: rgba(0,76,126,0.5); width: fit-content; margin: auto; }
.tabs .tab { padding: 15px 30px; border-radius: 40px; background: transparent; transition: all 300ms; }
.tabs .tab.is-active { background: #124883; }
```

On mobile tabs wrap, drop to 10px 16px padding and 12px text, each tab gets its own 50% blue fill.

### Inputs

Search and newsletter fields: 40px tall, transparent fill, 1px white bottom border or full 20px-radius outline at 40% white, 14px Montserrat, placeholder at 50% white. Focus: border goes solid white with a 2px `#47CFF7` outline at 2px offset.

### Poster cards

- 2:3 poster art, 5px radius (14px on featured tiles), no border.
- Title and date sit below in 16px 700 uppercase and 12px 500 at 70% white.
- Hover: card scales to 1.03 over 300ms and the caption turns white; trailer button fades in over the art with an Ink Navy gradient from the bottom.

### Hero / billboard

Full-viewport key art or muted trailer, gradient `linear-gradient(0deg, rgba(12,19,29,0.75) 0%, rgba(12,19,29,0) 60%)` from the bottom, film title logo centred lower third, release line ("Only in Theaters November 21") in 13px uppercase, then a pair of pills: filled blue "Get Tickets" and outline "Watch Trailer".

### Navigation

- Top bar up to 120px tall, transparent over art. Wordmark left; nav items right: "Movies", "TV Shows", "Home Entertainment", "Shop", "Careers", "Investors".
- Nav items: Montserrat 700, 13-14px, `letter-spacing: .5px`, white; hover underline 2px white.
- Burger menu at 40x40px, 50px from the left on desktop; full-screen menu overlay on black with nav cards (poster thumbnails) and large 700-weight links.

### Section labels

Small blue label with a short rule: 12px 700 uppercase `#124883`, followed by a 2px `#124883` line about 40px wide. Used on awards and info pages.

### Modals

Trailer modal: black at 90% alpha backdrop (`rgba(0,0,0,0.9)`), 16:9 player at max 1200px, close "X" top-right as a 40px circle with a 1px white outline.

### Badges

Rating and format chips: 1px white outline at 50%, 2-5px radius, 11px 500 uppercase, `padding: 2px 6px`. Alerts use `#C92924` fill with white text.

## 6. Layout & Spacing

- **Full-bleed sections** stacked vertically; each fills the viewport on desktop.
- **Content width:** around 1200px for text and grids, centred; carousels bleed to the right edge.
- **Gutters:** 52px side margin for nav and menus on desktop, 20px on mobile.
- **Spacing:** steps of 5 and 10: 5, 10, 15, 20, 30, 40, 52, 80px.
- **Breakpoints:** about 800px (stacked mobile layouts, titles switch to 16px uppercase) and 1024px.
- **Carousels:** poster cards around 200-240px wide with 12px gaps on desktop, 140px on mobile.

## 7. Depth, Elevation & Motion

- **Gradients over shadows.** Readability comes from Ink Navy gradients (`rgba(12,19,29,0.25 / 0.5 / 0.75)`) and black overlays at 65-90%.
- **Glow, not drop shadow.** Button text gets a blue glow (`0 0 6px rgba(28,84,159,0.5)`); there are almost no box shadows in the UI chrome.
- **Card shadow** where needed: `0 8px 24px rgba(0,0,0,0.65)` (approximate).
- **Durations:** buttons and tabs 300ms `all`; submit buttons 500ms. Menu overlays fade and slide in about 400ms.
- **Motion style:** slow push-ins on key art, crossfades between featured titles, trailers autoplay muted. Avoid bouncy easing; use `ease` or `cubic-bezier(0.25, 0.1, 0.25, 1)`.

## 8. Iconography & Imagery

- **Icons:** thin white line icons (play, download cloud, search, chevrons, close) about 18-24px, often inside a translucent white circle.
- **Material Icons** are loaded for utility glyphs; keep them outlined and white.
- **Imagery:** official key art and trailer stills only. Dark, high-contrast, saturated skin tones and fire, cold blue shadows. Lionsgate franchises (The Hunger Games, John Wick, Saw, Twilight) each keep their own title treatment.
- **No stock photography** and no illustration in the corporate brand.
- **Ident art:** if you need a brand moment without a film, use a black field with a soft blue or bronze light leak behind the white wordmark.

## 9. Voice & Microcopy

Short, confident, release-driven. Copy tells you what it is and when you can see it.

- Release lines: "Only in Theaters", "Now Streaming", "Coming Soon", "Own It Now on Digital".
- CTAs: "Get Tickets", "Watch Trailer", "Buy Now", "Learn More", "Download".
- Nav: "Movies", "TV Shows", "Home Entertainment", "Shop", "Careers", "Investors".
- Corporate line: "Lionsgate is a global content platform whose films, television series, digital products and linear and over-the-top platforms reach next generation audiences around the world."
- Casing: uppercase for labels and nav, title case for buttons, sentence case for body.

## 10. Do's and Don'ts

**Do**

- Keep pages black and let key art fill the screen.
- Use one blue family for interactive states: `#124883` fill, `#163D6B` pressed.
- Make buttons pills with a 40% white outline and 13px 500 Montserrat.
- Darken art with Ink Navy gradients before placing text.
- Use the logo file for the wordmark, white on black.
- Keep `letter-spacing: 0.5px` on Montserrat UI text.

**Don't**

- Don't introduce warm accent colours into the UI; bronze belongs to ident art only.
- Don't square off buttons or tabs.
- Don't set film titles in Montserrat when title art exists.
- Don't add drop shadows to the wordmark.
- Don't use a white page background for studio or film pages.
- Don't fill whole sections with blue; it is for controls and labels.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Lionsgate. Background `#000000`, white text, secondary text `rgba(255,255,255,0.7)`. Lead with full-bleed key art or a muted trailer, darkened from the bottom with `linear-gradient(0deg, rgba(12,19,29,0.75), transparent 60%)`. Use Montserrat everywhere: hero titles 36px 700, section titles 26px 700, body 14px/18px 400, nav and labels uppercase with 0.5px tracking. Buttons are pills (20px radius, 10px 30px padding, 13px 500) with a 2px `rgba(255,255,255,0.4)` outline and a soft blue text glow `0 0 6px rgba(28,84,159,0.5)`; hover fills white with `#124883` text. Primary buttons fill `#124883` (pressed `#163D6B`). Tabs sit in a 40px-radius track of `rgba(0,76,126,0.5)`. Poster cards are 2:3 with 5px radius in horizontal carousels. Put the white LIONSGATE wordmark top-left, about 140px wide. No light mode, no warm accents, no box-shadow-heavy cards.

```css
:root {
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-blue: #124883;
  --brand-blue-deep: #163D6B;
  --brand-blue-steel: #335687;
  --brand-ink: #0C131D;
  --brand-tab-track: rgba(0, 76, 126, 0.5);
  --brand-glow: rgba(28, 84, 159, 0.5);
  --brand-cyan: #47CFF7;
  --brand-grey: #555555;
  --brand-red: #C92924;
  --brand-text: #FFFFFF;
  --brand-text-secondary: rgba(255, 255, 255, 0.7);
  --brand-outline: rgba(255, 255, 255, 0.4);
  --brand-font: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  --brand-font-long: "Inter", "Montserrat", sans-serif;
  --brand-tracking: 0.5px;
  --brand-radius-card: 5px;
  --brand-radius-tile: 14px;
  --brand-radius-pill: 20px;
  --brand-radius-track: 40px;
  --brand-gutter: 52px;
  --brand-duration: 300ms;
  --brand-overlay: linear-gradient(0deg, rgba(12, 19, 29, 0.75) 0%, rgba(12, 19, 29, 0) 60%);
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Lionsgate.
