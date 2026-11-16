---
name: Netflix
slug: netflix
url: https://www.netflix.com
category: Entertainment
tagline: "Black canvas, red signal, wall-to-wall artwork: a streaming UI built for the couch."
updated: 2026-11-16
logoBackground: "#000000"
theme: dark
colors:
  - name: Netflix Red
    hex: "#E50914"
    role: Logo, primary buttons, Top 10 and New badges, progress bars
  - name: Black
    hex: "#000000"
    role: Signed-out page background, logo background
  - name: App Background
    hex: "#141414"
    role: Signed-in browse background
  - name: Red Hover
    hex: "#C11119"
    role: Primary button hover
  - name: Red Pressed
    hex: "#99161D"
    role: Primary button pressed
  - name: Surface
    hex: "#2D2D2D"
    role: FAQ accordion, cards, menus
  - name: Surface Hover
    hex: "#414141"
    role: Hovered accordion and rows
  - name: Elevated
    hex: "#181818"
    role: Title preview cards, modals
  - name: White
    hex: "#FFFFFF"
    role: Primary text, play button fill
  - name: Text Secondary
    hex: "#B3B3B3"
    role: Secondary text (white at 70%)
  - name: Text Disabled
    hex: "#808080"
    role: Disabled text, inactive borders
  - name: Grey Button
    hex: "#6D6D6E"
    role: Secondary "More Info" button (grey at 70%)
  - name: Success
    hex: "#2BB871"
    role: Success borders and messages, match score
  - name: Error
    hex: "#EB3942"
    role: Input error borders and messages
  - name: Warning
    hex: "#D89D31"
    role: Warning borders
fonts:
  display:
    family: "Netflix Sans"
    fallback: "Inter"
    weights: [700, 900]
  body:
    family: "Netflix Sans"
    fallback: "Inter"
    weights: [400, 500]
typeScale:
  - { role: Hero, size: 56, weight: 900, lineHeight: 1.1, tracking: "0" }
  - { role: Section Title, size: 32, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Row Title, size: 20, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Lead, size: 24, weight: 500, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 13, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Badge, size: 10, weight: 700, lineHeight: 1, tracking: "0.02em" }
radii: { sm: 2, md: 4, lg: 8, xl: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Preview Card, value: "0 3px 10px rgba(0,0,0,0.75)" }
  - { name: Text Legibility, value: "0 1px 4px rgba(0,0,0,0.45)" }
  - { name: Modal, value: "0 24px 48px rgba(0,0,0,0.6)" }
preview:
  bg: "#141414"
  surface: "#2D2D2D"
  text: "#FFFFFF"
  muted: "#B3B3B3"
  border: "#414141"
  accent: "#E50914"
  accentText: "#FFFFFF"
  radius: 4
  buttonStyle: solid
---

# Netflix

## 1. Visual Theme & Atmosphere

Netflix is a dark theatre where the artwork is the interface. Black and near-black fill the screen, title art and trailers fill most of it, and a single red (`#E50914`) marks the brand and the one action that matters on each screen. Chrome is thin, white and grey, and sits on top of imagery through gradients rather than inside boxes.

What makes it recognisable:

- **Black plus one red.** The palette is black, a few greys, white text, and Netflix Red. Red is for the logo, the signed-out "Get Started" button, Top 10 and "New" badges, and progress bars. It is never a background for large areas.
- **Billboard hero.** Signed-in browse opens with a full-width trailer or key art, the title's logo treatment bottom-left, a short synopsis and two buttons: white "Play" and translucent grey "More Info".
- **Horizontal rows.** Everything below the hero is a row of 16:9 title cards that scroll sideways ("Trending Now", "Continue Watching", "Top 10 TV Shows in the U.S. Today").
- **Gradient vignettes.** Text over imagery is made legible with black gradients from the bottom and left, not with panels.
- **Heavy display type.** Signed-out hero headlines use Netflix Sans at 900 weight, very large, centred.

The signed-out marketing page is pure black with a red curved glow behind the hero and large rounded "Trending Now" tiles with big outlined rank numbers. The signed-in app moves to `#141414` and denser rows.

Density: low text density, high image density. It is designed for a TV at three metres first, then scaled to laptops and phones.

## 2. Color Palette & Roles

### Core

| Name | Hex | Role |
| --- | --- | --- |
| Netflix Red | `#E50914` | Logo, primary CTA, Top 10 badge, progress bar, "N" series mark |
| Red Hover | `#C11119` | Primary button hover (from `Button-SurfaceHovered`) |
| Red Pressed | `#99161D` | Primary button pressed |
| Red Disabled | `rgba(229,9,20,0.4)` | Disabled primary button |
| Black | `#000000` | Signed-out pages, player background |
| App Background | `#141414` | Signed-in browse |
| Elevated | `#181818` | Expanded title cards, detail modal body |
| Surface | `#2D2D2D` | FAQ accordion headline and panel |
| Surface Hover | `#414141` | Accordion hover, menu row hover |
| Divider | `#232323` | Section separators on the signed-out page |

### Text

| Name | Value | Use |
| --- | --- | --- |
| Primary | `#FFFFFF` | Headlines, titles, button text |
| Secondary | `rgba(255,255,255,0.7)` / `#B3B3B3` | Synopses, meta, footer links |
| Disabled | `rgba(255,255,255,0.4)` | Disabled controls |
| Footer | `rgba(255,255,255,0.7)` | Footer link text, 13-14px |

### Translucent greys

| Name | Value | Use |
| --- | --- | --- |
| Grey Button | `rgba(109,109,110,0.7)` | "More Info" on the billboard |
| Neutral Button | `rgba(128,128,128,0.4)` | Secondary buttons on signed-out pages (language select, "Sign In" alternative) |
| Neutral Hover | `rgba(128,128,128,0.3)` | Hover on neutral buttons |
| Input Fill | `rgba(22,22,22,0.7)` | Email and text inputs over imagery |
| Input Border | `rgba(128,128,128,0.7)` | Resting input border |

### Semantic

| Name | Hex | Use |
| --- | --- | --- |
| Success | `#2BB871` | Valid input border, "98% Match" text in older UIs |
| Error | `#EB3942` | Invalid input border and message |
| Warning | `#D89D31` | Warning borders |
| Info Navy | `#000438` / `#050042` | Deep navy stops in the signed-out hero glow |

### Mode

Dark only. There is no light theme in the product. Account and help pages use white backgrounds with `#000000` text and `#E50914` accents, but treat those as utility pages, not the brand surface.

## 3. Typography

- **Netflix Sans** is the proprietary typeface (commissioned in 2018, replacing Gotham). It ships as a variable font plus a mono cut (Netflix Sans Mono) for internal tooling. It is not licensed for outside use.
- Fallback: **Inter** from Google Fonts is close in proportion. System stack after that: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- Title logos (show and film names in the billboard) are custom artwork per title, delivered as images. Never set a show name in type when its logo art exists.

### Scale

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero (signed-out) | 56-64px | 900 | 1.1 | Centred, max 2 lines, 32px on mobile |
| Section title | 32px | 700 | 1.25 | "More Reasons to Join", "Frequently Asked Questions" |
| Lead | 20-24px | 500 | 1.25 | Hero subline, accordion question (24px desktop, 18px mobile) |
| Row title | 20px | 500 | 1.25 | "Trending Now", left-aligned above a row (14-16px on mobile) |
| Body | 16-18px | 400 | 1.5 | Synopsis, FAQ answers |
| Button | 16-18px | 500 | 1 | 14px for small buttons |
| Small / meta | 13px | 400 | 1.4 | Footer links, maturity rating labels |
| Badge | 10px | 700 | 1 | "TOP 10", "Recently Added", "New Season" |

### Rules

- Sentence case for headlines and buttons ("Get Started", "Sign In" are the exceptions: title case for short CTAs).
- No negative tracking needed; Netflix Sans is spaced for screens.
- Numbers in Top 10 rows are huge (about 120px on the signed-out page, around 100% of card height in-app) with a dark fill and grey outline stroke.
- Keep synopses to three lines in the billboard.

## 4. Logo & Brand Mark

- **Wordmark:** "NETFLIX" in red `#E50914` with a subtle curve, as if printed on a cinema screen: the letters are taller at the ends than in the middle. This is the primary logo and the file here.
- **Symbol:** the "N" ribbon, a red N with a shadowed fold in the middle stroke. Used for the app icon, favicon, and the "N" badge on Netflix original title art.
- **Colour versions:** red on black (primary), red on white, white on photography when red would clash. Never another colour.
- **Clear space:** keep at least the height of the "N" clear around the wordmark; nothing should crowd the curved baseline.
- **Minimum size:** about 70px wide for the wordmark on screen (the signed-out header renders it around 90-150px wide). Below that, use the N symbol (minimum 16px).
- **Placement:** top-left of the header on every page.

Misuse: do not flatten the curve, recolour the wordmark, add effects or outlines, place it over busy imagery without a gradient, or rebuild it in Netflix Sans.

## 5. Components

### Buttons

Values from the live design tokens (`--hcw--local-design--Button-*`).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 6px 16px;
  font: 500 16px/1 "Netflix Sans", "Inter", sans-serif;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.32, 0.94, 0.6, 1);
}
.btn-primary { background: #E50914; color: #FFFFFF; }
.btn-primary:hover { background: #C11119; }
.btn-primary:active { background: #99161D; color: rgba(255,255,255,0.7); transition-duration: 0ms; }
.btn-primary:disabled { background: rgba(229,9,20,0.4); color: rgba(255,255,255,0.4); }

.btn-neutral { background: rgba(128,128,128,0.4); color: #FFFFFF; }
.btn-neutral:hover, .btn-neutral:active { background: rgba(128,128,128,0.3); }
.btn-neutral:disabled { background: rgba(128,128,128,0.2); }
```

Sizes: small 32px (14px text, 4px vertical padding), medium 40px (16px), large 48px (18-24px text). The large "Get Started" next to the email field is 56px tall on desktop with a chevron icon (24px) after the label.

Billboard buttons (signed-in):

```css
.btn-play { background: #FFFFFF; color: #000000; font-weight: 700; padding: 8px 24px 8px 20px; border-radius: 4px; }
.btn-play:hover { background: rgba(255,255,255,0.75); }
.btn-more-info { background: rgba(109,109,110,0.7); color: #FFFFFF; font-weight: 700; padding: 8px 24px 8px 20px; border-radius: 4px; }
.btn-more-info:hover { background: rgba(109,109,110,0.4); }
```

Circular icon buttons on preview cards (play, add to My List, thumbs up, expand): 32-42px circles, 2px `rgba(255,255,255,0.5)` border on `rgba(42,42,42,0.6)`, white icon; hover makes the border solid white. The play circle is filled white with a black triangle.

### Inputs

```css
.input {
  height: 56px; padding: 24px 16px 8px;
  background: rgba(22,22,22,0.7);
  border: 1px solid rgba(128,128,128,0.7);
  border-radius: 4px;
  color: #FFFFFF; font-size: 16px; line-height: 1.5;
}
.input:focus { outline: 2px solid #FFFFFF; outline-offset: 2px; }
.input.is-error { border-color: #EB3942; }
.input.is-valid { border-color: #2BB871; }
```

Labels float: "Email address" sits centred in the field at 16px, then shrinks to 12px at the top when focused or filled. Error messages are 13px in `#EB3942` with a small circled-x icon.

### Title cards

- 16:9 artwork, 4px radius (8px on the signed-out "Trending Now" tiles, which are portrait 2:3 at about 180px wide).
- Rows show 6 cards on wide desktop, 4-5 on laptop, 2-3 on mobile, with 4-8px gaps and a partly visible card at the edge to signal scroll.
- On hover (after about 400ms delay) the card grows to about 1.5x into a preview: trailer plays, the card gets an `#181818` body with action circles, maturity rating box, duration, and genre tags separated by small grey dots. Shadow `0 3px 10px rgba(0,0,0,0.75)`.
- Progress bar under "Continue Watching" cards: 2-4px tall, `#E50914` fill on `#4D4D4D` track.

### Badges

- **Top 10:** small red square (`#E50914`) with "TOP" over "10" in white 700 weight, placed top-right of title art.
- **Recently Added / New Season / New Episodes:** red label `#E50914`, white 10-12px 700 text, 2px radius, bottom-centre of the card.
- **Maturity rating:** outlined box, 1px `rgba(255,255,255,0.4)` border, 12px text, 0 6px padding.
- **"N" series mark:** red N top-left on Netflix originals.

### Navigation

- Signed-out header: logo left, language select (neutral button with globe icon) and red "Sign In" button right, sitting on the hero image with no background.
- Signed-in header: 68px tall, logo left, then links "Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages" at 14px, `#E5E5E5`, current page `#FFFFFF` 700. Right side: search icon, "Kids", bell, profile avatar with caret.
- The header starts transparent with a top gradient (`linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)`) and turns solid `#141414` once you scroll.

### Accordion (FAQ)

```css
.faq-q {
  background: #2D2D2D; color: #FFFFFF;
  padding: 24px; font-size: 24px; font-weight: 400;
  border-radius: 0; margin-bottom: 8px;
  display: flex; justify-content: space-between;
}
.faq-q:hover { background: #414141; }
.faq-a { background: #2D2D2D; padding: 24px; font-size: 24px; line-height: 1.5; margin-top: 1px; }
```

A large plus icon rotates 45deg to an x when open. Question size drops to 18px on mobile.

### Profiles ("Who's watching?")

Square avatars, 4px radius, about 150px on desktop, centred in a row on black, name in 16px `#808080` below; hover adds a 3px white border and turns the name white. "Manage Profiles" is an outlined button: 1px `#808080` border, grey 16-18px uppercase-tracked text.

### Modals

Title detail modal: max 850px wide, `#181818`, 6-8px radius, hero video at top fading into the body, close button as a 36px dark circle top-right. Body text 14-16px, meta in `#B3B3B3`, "More Like This" grid of cards below.

### Feature cards (signed-out)

"More Reasons to Join" cards: dark navy-to-plum gradient fill (for example `linear-gradient(91deg, #261733, #151A3F)`, with `#192247` as a common navy stop), 16px radius, 24px padding, 24px 500 title, 16px `rgba(255,255,255,0.7)` body, a small colourful icon at bottom-right.

## 6. Layout & Spacing

- **Signed-out:** content centred, max about 1170px (header and hero up to 1920px wide). Hero is at least 700px tall with the email capture form centred, 600px max width.
- **Signed-in rows:** side padding is 4% of the viewport width (60px on large screens), so rows align to a fluid gutter, not a fixed container.
- **Row spacing:** about 3vw between rows; row title sits 8-12px above cards.
- **Breakpoints:** roughly 500, 800, 1100, 1400px for card count changes; the signed-out page reflows at 600, 960 and 1280px.
- **Spacing scale:** multiples of 4px: 4, 8, 12, 16, 24, 32, 48, 64.
- **Density:** large hero and wide gutters; cards packed tight inside rows.

## 7. Depth, Elevation & Motion

- **Gradients over shadows.** Billboard art uses a left gradient (`linear-gradient(77deg, rgba(0,0,0,0.6) 0%, transparent 85%)`) and a bottom fade into `#141414`. The signed-out hero uses a stepped black overlay (`linear-gradient(360deg, rgba(0,0,0,0.85) 8%, ... rgba(0,0,0,0.6) 100%)`, eased in about 13 stops) and a curved red-to-navy glow line.
- **Shadows:** preview cards `0 3px 10px rgba(0,0,0,0.75)`, text over art `0 1px 4px rgba(0,0,0,0.45)`, modals around `0 24px 48px rgba(0,0,0,0.6)`.
- **Durations:** button hover 250ms with `cubic-bezier(0.32, 0.94, 0.6, 1)`; button exit `cubic-bezier(0.4, 0, 0.68, 0.06)`; pressed state is instant (0ms). Card hover-grow about 300ms ease, after a ~400ms hover delay. Row paging slides 750ms.
- **Autoplay:** billboard and hover previews start muted video after a short delay; the static art crossfades out.

## 8. Iconography & Imagery

- **Icons:** solid, geometric, 24px base with 2px-equivalent strokes: play triangle, plus, check, thumbs up, chevrons, bell, magnifier. Always white or `#B3B3B3` in chrome.
- **Artwork:** title-specific key art is the main visual. Cards show localised art with the title logo baked in. Never crop artwork so the logo is cut.
- **Signed-out hero:** a tilted collage of poster art darkened heavily, with a curved red glow at the bottom edge.
- **Device illustrations:** TV, laptop and phone frames showing playback, used in "Enjoy on your TV" style sections.
- No stock photography of people using devices; the content is the image.

## 9. Voice & Microcopy

Short, warm, confident, no jargon. Promises are concrete: price, cancellation, devices.

- Hero: "Unlimited movies, TV shows, and more"
- Subline: "Starts at $8.99. Cancel anytime."
- Capture: "Ready to watch? Enter your email to create or restart your membership."
- CTA: "Get Started", "Sign In", "Learn More", "Play", "More Info"
- Feature headings: "Enjoy on your TV", "Download your shows to watch offline", "Watch everywhere", "Create profiles for kids"
- Rows: "Trending Now", "Continue Watching for Alex", "Because you watched ...", "Top 10 TV Shows in the U.S. Today"
- FAQ tone: "Netflix is flexible. You can easily cancel your account online in two clicks."
- Casing: title case for buttons and row titles, sentence case for body.

## 10. Do's and Don'ts

**Do**

- Let artwork fill the screen; keep chrome thin and white.
- Use `#E50914` for one primary action per view and for brand badges.
- Use gradients from black to make text readable over art.
- Use 4px radii on buttons, inputs and cards.
- Show content in horizontal rows with a partial card at the edge.
- Keep copy short and concrete.

**Don't**

- Don't fill large areas with red.
- Don't add a second accent hue to the chrome.
- Don't put cards in bordered boxes or add heavy outlines.
- Don't round title cards more than 4-8px.
- Don't set show names in type when title logo art exists.
- Don't use a light theme for browse or playback.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Netflix. Background `#141414` (pure `#000000` for signed-out pages), white text, secondary text `rgba(255,255,255,0.7)`. One accent: Netflix Red `#E50914` for the primary button (hover `#C11119`, pressed `#99161D`), badges and progress bars. Use Netflix Sans with Inter as the fallback: hero headlines 56px weight 900, row titles 20px 500, body 16px 400. Buttons are 40px tall, 4px radius, 500 weight, 250ms `cubic-bezier(0.32,0.94,0.6,1)` hover. Lay content out as a full-width billboard (key art, black gradients from left and bottom, white "Play" and grey `rgba(109,109,110,0.7)` "More Info" buttons) above horizontal rows of 16:9 cards with 4px radius and 4-8px gaps, side padding 4vw. Inputs are 56px, `rgba(22,22,22,0.7)` fill, `rgba(128,128,128,0.7)` border, floating labels. Accordions use `#2D2D2D` (hover `#414141`). No boxes, no borders around content, no light mode.

```css
:root {
  --brand-red: #E50914;
  --brand-red-hover: #C11119;
  --brand-red-pressed: #99161D;
  --brand-black: #000000;
  --brand-bg: #141414;
  --brand-elevated: #181818;
  --brand-surface: #2D2D2D;
  --brand-surface-hover: #414141;
  --brand-text: #FFFFFF;
  --brand-text-secondary: rgba(255, 255, 255, 0.7);
  --brand-text-disabled: rgba(255, 255, 255, 0.4);
  --brand-grey-button: rgba(109, 109, 110, 0.7);
  --brand-neutral-button: rgba(128, 128, 128, 0.4);
  --brand-input-bg: rgba(22, 22, 22, 0.7);
  --brand-input-border: rgba(128, 128, 128, 0.7);
  --brand-success: #2BB871;
  --brand-error: #EB3942;
  --brand-warning: #D89D31;
  --brand-font: "Netflix Sans", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --brand-radius: 4px;
  --brand-radius-tile: 8px;
  --brand-ease-hover: cubic-bezier(0.32, 0.94, 0.6, 1);
  --brand-ease-exit: cubic-bezier(0.4, 0, 0.68, 0.06);
  --brand-duration: 250ms;
  --brand-gutter: 4vw;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Netflix.
