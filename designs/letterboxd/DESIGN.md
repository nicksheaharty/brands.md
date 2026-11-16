---
name: Letterboxd
slug: letterboxd
url: https://letterboxd.com
category: Social
tagline: "Dark, cinematic, poster-first social diary for film lovers."
updated: 2026-11-16
logoBackground: "#14181C"
theme: dark
colors:
  - name: Background
    hex: "#14181C"
    role: Page background, header, footer
  - name: Green
    hex: "#00E054"
    role: Watched state, primary accent, logo dot
  - name: Blue
    hex: "#40BCF4"
    role: Watchlist state, links on hover, logo dot
  - name: Orange
    hex: "#FF8000"
    role: Like (heart) state, Patron accent, logo dot
  - name: Surface
    hex: "#2C3440"
    role: Poster placeholders, inputs, panels, menus
  - name: Slate
    hex: "#445566"
    role: Borders, dividers, secondary buttons
  - name: Muted Text
    hex: "#99AABB"
    role: Body copy, metadata, nav links
  - name: Dim Text
    hex: "#667788"
    role: Timestamps, tertiary labels, disabled text
  - name: Pale Text
    hex: "#DDEEFF"
    role: Emphasised body text, hover text, inner poster outline tint
  - name: White
    hex: "#FFFFFF"
    role: Film titles, headings, usernames
  - name: Button Green
    hex: "#00AC1C"
    role: Filled primary button background
  - name: Logo Slate
    hex: "#556677"
    role: Wordmark and dot overlaps on the light-background logo
fonts:
  display:
    family: "Tiempos Headline"
    fallback: "Source Serif 4"
    weights: [400, 600]
  body:
    family: "Graphik"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 40, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: Film Title, size: 32, weight: 600, lineHeight: 1.15, tracking: "0" }
  - { role: Review Heading, size: 20, weight: 600, lineHeight: 1.25, tracking: "0" }
  - { role: Body, size: 15, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: UI, size: 13, weight: 400, lineHeight: 1.45, tracking: "0" }
  - { role: Section Label, size: 12, weight: 400, lineHeight: 1.3, tracking: "0.075em" }
  - { role: Meta, size: 11, weight: 400, lineHeight: 1.3, tracking: "0.02em" }
radii: { sm: 2, md: 3, lg: 4, xl: 6, pill: 9999 }
spacing: [4, 6, 10, 12, 16, 20, 30, 40]
shadows:
  - { name: Poster Frame, value: "inset 0 0 0 1px rgba(221,238,255,0.25)" }
  - { name: Poster Lift, value: "0 1px 3px rgba(0,0,0,0.6)" }
  - { name: Menu, value: "0 4px 12px rgba(0,0,0,0.5)" }
preview:
  bg: "#14181C"
  surface: "#2C3440"
  text: "#FFFFFF"
  muted: "#99AABB"
  border: "#445566"
  accent: "#00E054"
  accentText: "#14181C"
  radius: 4
  buttonStyle: solid
---

# Letterboxd

## 1. Visual Theme & Atmosphere

Letterboxd looks like a screening room with the lights down. The page is a cool blue-black (`#14181C`), the chrome is a family of desaturated slate blues, and the only bright colour comes from film posters and three small dots: orange, green and blue. Posters are the content. The interface steps back and frames them.

What makes it recognisable:

- **Blue-black, not neutral black.** Every grey in the system leans blue: `#2C3440`, `#445566`, `#667788`, `#99AABB`, `#DDEEFF`. A neutral `#222` or `#888` looks wrong next to it.
- **Poster grids.** Film lists, profiles, diaries and search all resolve to rows of 2:3 posters with tight gutters, small 4px corners and a faint inner outline.
- **Three state colours.** Green means watched, blue means watchlist, orange means liked. They match the three logo dots and carry meaning everywhere.
- **Serif for films, sans for UI.** Film titles, the homepage hero and review headings use a serif (Tiempos Headline). Navigation, metadata, buttons and body use Graphik.
- **Small uppercase section labels.** Sections open with a 12px uppercase label in `#99AABB`, letterspaced, with a 1px `#445566` rule under it and a "More" link on the right.

Density is high. Text runs small (13px UI, 15px review body), posters are compact, and pages feel like a well-kept index card catalogue more than a marketing site. Film backdrops on title pages are the one place the layout goes wide and dramatic, faded into the background colour at the edges.

## 2. Color Palette & Roles

### Core palette

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#14181C` | Page, header, footer |
| Surface | `#2C3440` | Inputs, poster placeholders, dropdown menus, panels |
| Surface Raised | `#384250` | Hovered menu rows, active filter chips |
| Slate | `#445566` | Borders, rules, secondary button fill |
| Dim Text | `#667788` | Timestamps, tertiary labels, disabled |
| Muted Text | `#99AABB` | Default body and metadata text, nav links |
| Light Text | `#BBCCDD` | Review body on film pages |
| Pale Text | `#DDEEFF` | Hover text, emphasised copy |
| White | `#FFFFFF` | Film titles, headings, usernames |

### Brand and state colours

| Name | Hex | Meaning |
| --- | --- | --- |
| Green | `#00E054` | Watched (eye icon), logged in diary, logo dot |
| Blue | `#40BCF4` | Watchlist (clock icon), link hover, logo dot |
| Orange | `#FF8000` | Liked (heart icon), Patron badge, logo dot |
| Button Green | `#00AC1C` | Filled primary buttons ("Get started", "Save") |
| Button Green Hover | `#00C030` | Hover on filled primary buttons |
| Rating Green | `#00C030` | Star rating glyphs on reviews and diary rows |
| Error | `#E04848` | Form errors, destructive actions |

The three logo colours only mean their state. Do not use orange for warnings or blue for generic links at rest. Default links are `#99AABB` or `#DDEEFF` and turn `#40BCF4` on hover.

### Contrast notes

- `#99AABB` on `#14181C` is about 7.6:1 and is the normal reading colour.
- `#667788` on `#14181C` is about 3.9:1: use it for meta text at 11-12px only, never for paragraphs.
- Text on `#00E054` should be `#14181C`, not white. White text sits on the darker `#00AC1C` button fill.

### Light mode

Letterboxd is dark only on the web and in its apps. The light-background logo (slate `#556677` wordmark) exists for press and print. If you must build a light surface, use `#FFFFFF` with `#556677` text and keep the three dot colours unchanged.

## 3. Typography

### Families

- **Graphik** (Commercial Type) for all interface text: nav, buttons, metadata, list titles, review body. Licensed, not on Google Fonts. Fallback: **Inter**, then `-apple-system, "Helvetica Neue", Arial, sans-serif`.
- **Tiempos Headline** (Klim Type Foundry) for film titles on film pages, the homepage hero line and featured list headings. Licensed. Fallback: **Source Serif 4**, then `Georgia, serif`.

The pairing is the point. A serif title over a sans meta line ("2024 Directed by ...") reads as Letterboxd immediately.

### Scale

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero | Tiempos Headline | 40px | 400 | 1.15 | 0 |
| Film title | Tiempos Headline | 32px | 600 | 1.15 | 0 |
| Review heading | Graphik | 20px | 600 | 1.25 | 0 |
| Body / review text | Graphik | 15px | 400 | 1.6 | 0 |
| UI default | Graphik | 13px | 400 | 1.45 | 0 |
| Section label | Graphik | 12px | 400 | 1.3 | 0.075em, uppercase |
| Meta | Graphik | 11px | 400 | 1.3 | 0.02em |

### Rules

- Section labels and main nav items are uppercase with 0.075em tracking. Everything else is sentence case.
- Usernames and film titles in lists are `#FFFFFF` and 600 weight. Surrounding meta is `#99AABB` at 400.
- Years and counts use regular lining numerals. Ratings are shown as star glyphs (and half stars), not numbers.
- Keep paragraph width under about 640px on review pages.
- Do not set long text in the serif. It is for titles only.

## 4. Logo & Brand Mark

The logo is three overlapping circles (orange, green, blue, left to right) followed by the "Letterboxd" wordmark in a custom geometric sans. The dots read as a strip of film frames or three spotlights. Where two circles overlap, the lens-shaped intersection is filled with a flat slate so the dots look like separate discs.

- **Primary lockup:** horizontal, dots left of the wordmark. On the site it appears with a white wordmark on `#14181C`, which is the version in this folder's logo.svg. For press and print on light backgrounds the wordmark switches to slate `#556677`.
- **Dots-only mark:** used for the app icon, avatar placeholders and favicon. On the app icon the dots sit centred on `#14181C` or `#202830`.
- **Clear space:** keep at least the diameter of one dot clear on all sides.
- **Minimum size:** about 100px wide for the horizontal lockup on screen; below that use the dots alone (minimum about 24px wide).
- **Colour versions:** full colour on dark, full colour with slate wordmark on light, single-colour white for photography overlays.

Misuse: do not reorder the dots, change their colours, add outlines or gradients, separate them so they no longer overlap, or set the wordmark in Graphik as a substitute.

## 5. Components

### Buttons

```css
.btn {
  font: 600 12px/1 "Graphik", "Inter", sans-serif;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  height: 32px;
  padding: 0 14px;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
}
.btn-primary { background: #00AC1C; color: #FFFFFF; }
.btn-primary:hover { background: #00C030; }
.btn-secondary { background: #445566; color: #DDEEFF; }
.btn-secondary:hover { background: #556677; color: #FFFFFF; }
.btn-ghost { background: transparent; color: #99AABB; box-shadow: inset 0 0 0 1px #445566; }
.btn-ghost:hover { color: #FFFFFF; box-shadow: inset 0 0 0 1px #99AABB; }
.btn:disabled { opacity: 0.4; cursor: default; }
.btn:focus-visible { outline: 2px solid #40BCF4; outline-offset: 2px; }
```

Large homepage CTA ("Get started, it's free!"): 44px tall, 15px text, 0 24px padding, same green.

### Film action panel

The panel on a film page is Letterboxd's signature control. It sits in a `#445566` column to the right of the poster, 4px radius:

- Top row of three icon toggles: **Watch** (eye), **Like** (heart), **Watchlist** (clock). Off state `#99AABB`; on state fills with green, orange and blue respectively. Labels sit under the icons in 11px uppercase.
- Below: a **Rate** row of five large stars. Hover fills stars in `#00C030` (or `#40BCF4` while choosing). Half stars are allowed.
- Then full-width text rows: "Review or log...", "Add to lists...", "Share". Each 36px tall, 13px, `#BBCCDD`, divided by 1px `#556677` lines.

### Posters

```css
.poster {
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 4px;
  overflow: hidden;
  background: #2C3440;
}
.poster::after {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(221,238,255,0.25);
}
.poster:hover::after { box-shadow: inset 0 0 0 3px #00E054; }
```

Sizes in use: 70px, 105px, 150px and 230px wide. Posters can carry a small overlay on hover with quick-action icons (watched, like, watchlist) on a `rgba(20,24,28,0.8)` bar.

### Inputs

```css
.input {
  height: 32px;
  padding: 0 10px;
  background: #2C3440;
  color: #FFFFFF;
  border: 0;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 rgba(0,0,0,0.2);
  font: 400 13px "Graphik", "Inter", sans-serif;
}
.input::placeholder { color: #667788; }
.input:focus { background: #DDEEFF; color: #14181C; outline: none; }
```

The header search field follows the same pattern and expands on focus. Inputs turning light on focus is a deliberate Letterboxd quirk.

### Navigation

- Header: 72px tall, `#14181C`, logo left, nav right. Items: "Sign in", "Create account", "Films", "Lists", "Members", "Journal", plus a search field. 13px uppercase, 0.075em tracking, `#99AABB`, hover `#FFFFFF`.
- Logged in: avatar (24px circle) with username and a caret opens a `#2C3440` dropdown menu with 13px rows and `#445566` dividers.
- A green "+ Log" button sits next to search.

### Tabs and filters

Profile tabs ("Profile", "Activity", "Films", "Diary", "Reviews", "Watchlist", "Lists", "Likes") are a horizontal row of 13px items with 20px gaps. Active tab is `#FFFFFF` with a 1px bottom line in `#00E054`; others `#99AABB`. Filter bars use small dropdown triggers ("Rating", "Decade", "Genre") with a caret, 12px uppercase.

### Section headers

```css
.section-heading {
  display: flex; justify-content: space-between; align-items: baseline;
  font: 400 12px/1.3 "Graphik", "Inter", sans-serif;
  letter-spacing: 0.075em; text-transform: uppercase;
  color: #99AABB;
  border-bottom: 1px solid #445566;
  padding-bottom: 5px; margin-bottom: 12px;
}
.section-heading a.more { font-size: 11px; color: #667788; }
```

### Review rows

Each row: 70px poster on the left, then film title in white 600 with year in `#99AABB`, a line of green rating stars plus heart icon if liked, then review text in `#BBCCDD` 15px. Under it, a meta line: "Watched 12 Nov 2026", like count with a small heart, comment count. Rows separated by 1px `#2C3440` lines with 20px vertical padding.

### Diary table

A dense table: month and day column in a calendar-tile style (small `#2C3440` block with the day number large), film title, release year, star rating, like heart, rewatch icon, review icon. 13px text, 44px rows, alternating nothing (no zebra stripes).

### Badges

- **PRO** and **PATRON** labels: 9-10px uppercase, 600 weight, 0.1em tracking, 2px radius. PRO uses `#40BCF4` text on transparent with a thin outline; PATRON uses `#FF8000`.
- Count badges (followers, films): plain text, no pill.

### Avatars

Circles. 24px in nav, 40px in activity rows, 110px on profile headers. 1px inner outline `rgba(221,238,255,0.25)`. Default avatar is a grey silhouette on `#445566`.

### Modals

Centred, max 600px wide, `#445566` header bar with title in 13px uppercase, body `#2C3440`, 4px radius, overlay `rgba(20,24,28,0.85)`. Footer buttons right aligned: ghost "Cancel", green "Save".

### Lists

List cards show an overlapping stack of 5 posters (each offset to the right and slightly behind), the list name in white 600 15px, owner avatar and name in 12px, and film count.

## 6. Layout & Spacing

- **Content width:** a centred column about 950px wide on most pages, with 20px side padding. The homepage and film backdrops go full width.
- **Film page:** a full-bleed backdrop (up to about 1200px wide) fades into `#14181C` at the bottom and sides. Content sits on top: 230px poster left, title and synopsis centre, action panel right (about 230px).
- **Poster grid gutters:** 4-10px. A 6-up row of 150px posters is the standard list unit.
- **Spacing scale:** 4, 6, 10, 12, 16, 20, 30, 40px. Vertical rhythm between sections is 30-40px.
- **Breakpoints:** desktop layout above about 960px; below it the site switches to a mobile layout with a hamburger, stacked panels and 3-4 posters per row.
- **Density:** high. Prefer more posters per row over larger posters.

## 7. Depth, Elevation & Motion

Mostly flat. Depth comes from the inner poster outline and from tone steps (`#14181C` to `#2C3440` to `#445566`), not shadows.

- Posters: inset 1px `rgba(221,238,255,0.25)` outline, optional `0 1px 3px rgba(0,0,0,0.6)` lift.
- Dropdown menus: `0 4px 12px rgba(0,0,0,0.5)`.
- Backdrops: linear gradients from transparent to `#14181C` at the bottom and both sides.
- Motion is minimal. Hover colour changes are instant or around 100-150ms ease-out. Tooltips fade in about 150ms. No bouncy or springy animation.

## 8. Iconography & Imagery

- **Icons:** simple solid glyphs, about 16-24px: eye, heart, clock, star, speech bubble, rewatch arrows, list. Default `#99AABB`, state colours when active. Letterboxd uses a sprite of flat filled icons, not thin line icons.
- **Stars:** solid five-point stars, rating shown in half-star steps. Green on review rows.
- **Posters:** always 2:3, never cropped to squares. Missing posters show a `#2C3440` block with the title in small text.
- **Backdrops:** wide film stills, desaturated slightly by the gradient overlay. Never add text on top except the page's own film title.
- **Illustration:** rare. Journal articles use editorial photography and film stills.

## 9. Voice & Microcopy

Warm, nerdy, a little dry. It talks like a film friend, not a streaming service.

- Homepage: "Track films you've watched. Save those you want to see. Tell your friends what's good."
- CTA: "Get started, it's free!"
- Action labels: "Watch", "Like", "Watchlist", "Rate", "Review or log...", "Add to lists...", "Share".
- Meta: "Watched by 1.2M members", "Liked by 340K", "Added 2 days ago".
- Empty state: "No films yet." Keep empty states short.
- Casing: uppercase for nav and section labels, sentence case for everything else. Use "films", not "movies".

## 10. Do's and Don'ts

**Do**

- Use the blue-black background `#14181C` and blue-tinted greys throughout.
- Reserve green, blue and orange for watched, watchlist and liked.
- Lead with posters, in 2:3, in tight grids.
- Pair a serif film title with a small sans meta line.
- Use 12px uppercase labels with a 1px rule to open sections.
- Keep corners small (3-4px) and shadows rare.

**Don't**

- Don't use neutral greys or pure black.
- Don't use a bright accent for generic links or decoration.
- Don't round posters heavily or add drop shadows to every card.
- Don't set long body copy in the serif.
- Don't use playful or emoji-heavy copy. The tone is dry and literate.
- Don't redraw the logo dots or use them as bullet points.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Letterboxd. Use a blue-black page background `#14181C`, panels and inputs in `#2C3440`, borders and secondary buttons in `#445566`, body text `#99AABB`, headings and titles in white. Use Graphik (fallback Inter) for UI at 13px and review text at 15px, and Tiempos Headline (fallback Source Serif 4) for film titles only. Show films as 2:3 posters with 4px corners and an inset 1px `rgba(221,238,255,0.25)` outline in tight grids. Use green `#00E054` for watched, blue `#40BCF4` for watchlist, orange `#FF8000` for liked, and nowhere else. Primary buttons are `#00AC1C` with white 12px uppercase letterspaced text and 3px radius. Open sections with a 12px uppercase `#99AABB` label and a 1px `#445566` rule. Keep it flat and dense.

```css
:root {
  --brand-bg: #14181C;
  --brand-surface: #2C3440;
  --brand-surface-raised: #384250;
  --brand-border: #445566;
  --brand-text: #FFFFFF;
  --brand-text-body: #99AABB;
  --brand-text-light: #BBCCDD;
  --brand-text-pale: #DDEEFF;
  --brand-text-dim: #667788;
  --brand-green: #00E054;
  --brand-blue: #40BCF4;
  --brand-orange: #FF8000;
  --brand-button: #00AC1C;
  --brand-button-hover: #00C030;
  --brand-error: #E04848;
  --brand-font-sans: "Graphik", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
  --brand-font-serif: "Tiempos Headline", "Source Serif 4", Georgia, serif;
  --brand-radius-sm: 3px;
  --brand-radius-md: 4px;
  --brand-poster-outline: inset 0 0 0 1px rgba(221, 238, 255, 0.25);
  --brand-menu-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  --brand-content-width: 950px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Letterboxd.
