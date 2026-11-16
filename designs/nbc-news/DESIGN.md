---
name: NBC News
slug: nbc-news
url: https://nbcnews.com
category: News
tagline: "White pages, condensed grotesk headlines, Publico body copy and the six-colour peacock."
updated: 2026-11-16
appStoreId: 319740707
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: News Blue
    hex: "#3061FF"
    role: Default accent, unibrows, links, active pagination, focus
  - name: Breaking Red
    hex: "#CB1111"
    role: Breaking news banner and breaking labels
  - name: Ink
    hex: "#2A2A2A"
    role: Headlines and body text (grey-70)
  - name: Navy
    hex: "#102039"
    role: Dark header gradient, dark panels (news-blue-70)
  - name: Live Red
    hex: "#FA3A3A"
    role: Live dot, live flags, breaking top rule (red-30)
  - name: Peacock Yellow
    hex: "#FCCC12"
    role: Logo feather only
  - name: Peacock Green
    hex: "#05AC3F"
    role: Logo feather only
  - name: Peacock Purple
    hex: "#6E55DC"
    role: Logo feather only
  - name: Blue 60
    hex: "#1B4698"
    role: Link hover, article headline colour on some templates
  - name: Blue 20
    hex: "#82AEFF"
    role: Light accent on dark backgrounds
  - name: Grey 60
    hex: "#555555"
    role: Timestamps, captions, secondary text
  - name: Grey 40
    hex: "#CCCCCC"
    role: Hairlines, card borders
  - name: Neutral 10
    hex: "#F2F2F2"
    role: Section backgrounds, no-art cards
  - name: White
    hex: "#FFFFFF"
    role: Page background
fonts:
  display:
    family: "Founders Grotesk Condensed"
    fallback: "Oswald"
    weights: [300, 600, 700]
  body:
    family: "Publico Text"
    fallback: "Source Serif 4"
    weights: [400, 700]
  mono:
    family: "Founders Grotesk Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Article headline, size: 48, weight: 600, lineHeight: 1.0, tracking: "0" }
  - { role: Lead tease, size: 40, weight: 600, lineHeight: 1.0, tracking: "0" }
  - { role: Tease headline, size: 24, weight: 600, lineHeight: 1.0, tracking: "0" }
  - { role: Dek, size: 20, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Unibrow, size: 12, weight: 400, lineHeight: 1.0, tracking: "-0.04em" }
  - { role: Caption, size: 14, weight: 400, lineHeight: 1.5, tracking: "0" }
radii: { sm: 2, md: 3, lg: 4, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
shadows:
  - { name: Dropdown, value: "0 3px 3px rgba(0,0,0,0.15)" }
  - { name: Offset button, value: "-2px 2px 0 #3061FF" }
preview:
  bg: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#2A2A2A"
  muted: "#555555"
  border: "#CCCCCC"
  accent: "#3061FF"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: outline
---

# NBC News

## 1. Visual Theme & Atmosphere

NBC News is a white, square-cornered news site built on a tight typographic contrast: tall, condensed grotesk headlines (Founders Grotesk Condensed) over a calm serif body (Publico Text), with a mono label face (Founders Grotesk Mono) for eyebrows, timestamps and credits. Colour is held back. A single electric blue (`#3061FF`) carries links and section labels, red is reserved for breaking and live states, and the six-colour peacock in the logo is the only multicolour element on the page.

What makes it recognisable:

- **Condensed headlines with line-height 1.** Teases and article headlines are set solid, so stacked lines nearly touch. This gives the homepage its dense, tabloid-height rhythm without heavy weights.
- **Blue "unibrows".** Small mono labels above headlines ("POLITICS", "LIVE UPDATES") in News Blue, uppercase, with slightly negative tracking.
- **Square everything.** Images, cards and buttons have 0 radius. The only rounding is on circular avatars, play buttons and the live dot.
- **Hairline structure.** 1px `#CCCCCC` rules and short coloured top borders separate packages instead of shadows.
- **Blue gradient moments.** Special packages and the vertical header use a dark-to-bright blue gradient from `rgb(0,34,115)` to `rgb(1,96,250)`, or the navy `#102039`.

Mood: direct, broadcast, dense but orderly. Treat it as a newspaper front page drawn with TV graphics colours.

## 2. Color Palette & Roles

Token names below are the ones used in the site CSS (`--blue-40`, `--grey-70` and so on).

| Name | Hex | Role |
|---|---|---|
| News Blue (blue-40) | `#3061FF` | `--default-color`: unibrows, links, active states, focus, offset-shadow buttons |
| Blue 10 | `#DBEBFF` | Pale blue fills, highlight backgrounds |
| Blue 20 | `#82AEFF` | Accent on navy and gradient backgrounds |
| Blue 30 | `#5081FF` | Hover on dark backgrounds |
| Blue 50 | `#2051D1` | Pressed link |
| Blue 60 | `#1B4698` | Link hover, some headline colour variants |
| Navy (blue-70) | `#102039` | Dark header gradient, dark modules |
| Grey 70 (Ink) | `#2A2A2A` | `--default-headline-color` and `--default-text-color` |
| Grey 60 | `#555555` | Timestamps, captions, disclaimers |
| Grey 50 | `#999999` | Placeholder, disabled |
| Grey 40 | `#CCCCCC` | Rules, card outlines, input borders |
| Grey 30 | `#EBEBEB` | Light dividers |
| Grey 20 / Neutral 10 | `#F2F2F2` | Section fills, no-art tease background |
| Warm grey | `#F1F0ED` | Waffle and feature module background |
| White | `#FFFFFF` | Page |

### Red scale (breaking and live)

| Token | Hex | Use |
|---|---|---|
| red-10 | `#FFB4B4` | Pale alert fill |
| red-20 | `#FD6F6F` | Hover on live buttons |
| red-30 | `#FA3A3A` | Live dot, live flag, breaking top rule |
| red-40 | `#E91717` | Active live button |
| red-50 (breaking-red) | `#CB1111` | Breaking banner background, breaking labels |
| red-60 | `#AE0E0E` | Pressed |
| red-70 | `#911010` | Deep red text on pale fills |

### Peacock colours

The logo feathers are `#FCCC12` yellow, `#FF7112` orange, `#EF1541` red, `#6E55DC` purple, `#069DE0` blue and `#05AC3F` green. Use them only inside the peacock. Never use them as UI accents.

### Semantic

- Success / valid: `#0DB14B`. Error / invalid: `#ED1C24`.
- Opinion vertical (THINK) uses `#FF5042` for its unibrow.
- Elections use dedicated party colours inside graphics only.

### Dark surfaces

There is no global dark mode on the web. Dark modules (live video, special coverage) use `#102039` or black, white headlines, `#82AEFF` unibrows and white 30% rules. The app follows system dark mode with near-black backgrounds (approximate).

## 3. Typography

**Families**

- **Founders Grotesk Condensed** (Klim Type Foundry): headlines, teases, nav, buttons. Loaded as `FoundersGroteskCond` with fallback `"Arial Narrow", Arial, sans-serif`. The site also ships **Oswald** as a backup condensed face.
- **Founders Grotesk Text**: small UI sans in a few modules.
- **Founders Grotesk Mono**: unibrows, timestamps, photo credits, countdowns.
- **Publico Headline** (Commercial Type): decks and some feature headlines, light weight.
- **Publico Text**: article body, captions and dek text. Default body is 18px with 1.5 leading.

All four are commercial licences held by NBCUniversal. Closest Google Fonts: **Oswald** (condensed), **Source Serif 4** (Publico), **IBM Plex Mono** (Founders Mono).

### Scale (desktop, from production CSS)

| Role | Font | Size | Weight | Line height |
|---|---|---|---|---|
| Article hero headline | Founders Cond | 48px (3rem); 32px mobile | 600 (300 on some templates) | 1.0 |
| Lead tease | Founders Cond | 40px | 600 | 1.0 |
| Tease title | Founders Cond | 24px (1.5rem); 30px in large packages | 600 | 1.0 |
| Small tease | Founders Cond | 18-20px | 600 | 1.0 |
| Dek | Publico Headline | 20px (1.25rem); 18px mobile | 300 | 1.5 |
| Body | Publico Text | 18px | 400 | 1.5 |
| Pull quote | Founders Cond / Publico Hed | 32px; 48px large | 300 | 1.25 |
| Unibrow | Founders Mono | 12-14px | 400 | 1.0, uppercase, -0.04em |
| Byline | Founders Cond | 16px | 600 | 1.0 |
| Caption | Publico Text | 14px | 400 | 1.5 |
| Credit | Founders Mono | 12px | 400 | uppercase |

### Rules

- Headlines are sentence case. Unibrows, flags and nav labels are uppercase.
- Line height of 1.0 on all condensed headlines; never loosen it to 1.2.
- Mono for anything that is metadata: time, credit, "LIVE", countdowns.
- Body links are News Blue with no underline at rest, underline on hover (approximate).
- Use `-0.04em` tracking on mono labels, 0 elsewhere.

## 4. Logo & Brand Mark

The logo is the NBC peacock (six rounded feathers around a white body gap) followed by the wordmark **NBC NEWS** in a bold geometric sans, all caps. On the site header the wordmark is black and the peacock is full colour.

- **Construction:** peacock height equals cap height of the wordmark plus a little; gap between peacock and wordmark is about 0.2 of the peacock width.
- **Colour versions:** full-colour peacock with black wordmark on white (primary); full-colour peacock with white wordmark on navy or black; all-white single colour on photos.
- **Clear space:** at least half the peacock height on every side.
- **Minimum size:** about 90px wide for the full lockup on screen; the peacock alone at 20px.
- **App icon / avatar:** the peacock alone on a light background (approximate).

Misuse: don't recolour individual feathers, don't use the peacock colours as a rainbow stripe, don't set "NBC NEWS" in Founders Grotesk, don't add shadows or outlines.

## 5. Components

### Header

- White bar, 60px tall when scrolled ("small"), 80px at the top of the homepage. Logo left, hamburger "menu" button, section links in Founders Cond 16px/600 in sentence case, account and search icons right.
- Sticky. Section links are `#2A2A2A`, hover News Blue.
- A vertical/live variant uses a navy gradient: `linear-gradient(to bottom, #102039 0, #102039 ...)`.

### Breaking news banner

- Full-width bar under the header, background `#CB1111`, white text.
- Left label "BREAKING" in Founders Mono 14px uppercase, then headline in Founders Cond 20-24px/600, white.
- Live coverage variant: white background, 4px `#FA3A3A` top rule, red blinking dot and "LIVE UPDATES" mono label (approximate).

### Tease cards (homepage grid)

```css
.tease {
  border-top: 1px solid #CCCCCC;
  padding-top: 12px;
}
.tease__unibrow {
  font: 400 12px/1 "FoundersGroteskMono", "IBM Plex Mono", monospace;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #3061FF;
  margin-bottom: 8px;
}
.tease__title {
  font: 600 24px/1 "FoundersGroteskCond", "Oswald", "Arial Narrow", sans-serif;
  color: #2A2A2A;
}
.tease__title:hover { opacity: .7; }
.tease__dek {
  font: 400 16px/1.5 "PublicoText", "Source Serif 4", Georgia, serif;
  color: #555555;
}
```

- Image on top, 0 radius, 16:9 or 3:2. Optional media badge (play triangle in a 32px circle) bottom-left.
- No-art teases sit on `#F2F2F2` with 16px padding.
- Hover reduces headline opacity to 70% (`--default-hover-opacity`).

### Article page

- Hero: unibrow, headline (48px Founders Cond), dek (Publico Headline 20px light, grey), then a full-width image with caption.
- Byline block: author name in Founders Cond 16px/600 `#555`, timestamp in Founders Mono, share icons in a row.
- Body column about 640px wide inside a 1240px grid, Publico Text 18px/1.5, 16-18px paragraph spacing.
- Pull quote: Publico Headline light 32px, with a short blue rule above (approximate). Liftouts (large standalone quotes) go to 48px.
- Captions: Publico Text 14px `#2A2A2A`, source credit in Founders Mono 12px `#555` uppercase.
- An endmark square closes the last paragraph.

### Buttons

| Variant | Style |
|---|---|
| Primary outline | 1px `#CCCCCC` inset border, white fill, Founders Cond 16px/600 uppercase, and a `-2px 2px 0 #3061FF` offset shadow that gives a blue "lift" |
| Solid blue | `#3061FF` fill, white text, 0 radius |
| Text link | News Blue, no underline, arrow glyph after |
| Live video unmute | `#C31010` fill, hover `#FD6F6F`, active `#E91717` |

Height 40-48px, horizontal padding 24px, 0 radius. Focus: 2px News Blue outline.

### Video player

- 16:9 black frame, 0 radius. Big centred play button: 64px circle, translucent black, white triangle.
- Live flag top-left: `#FA3A3A` (or `#C31010`) block with "LIVE" in Founders Mono white, uppercase.
- Control bar: thin white scrubber, red progress (approximate), white icons.
- "NBC News NOW" live stream modules sit on navy with the NOW logo.

### Lists and live blog

- Live blog cards: timestamp in Founders Mono red, headline Founders Cond 24px, body Publico Text; cards separated by 1px rules, a red "pinned" or "key update" label where relevant.
- Most-popular lists: large blue numerals in Founders Cond, headline beside.

### Inputs

Newsletter forms: 48px tall input, 1px `#CCCCCC` border, 0 radius, Publico Text placeholder `#999`; button in solid blue. Valid `#0DB14B`, invalid `#ED1C24`.

## 6. Layout & Spacing

- Breakpoints: 758px (tablet), 1000px (desktop), 1240px (wide), 1600px.
- Max content width around 1240-1310px, centred with 20-40px gutters.
- 12-column grid (`grid-col-*`), 20px gutters on mobile, 40px desktop (approximate).
- Spacing tokens are 4px steps: `--space-4` to `--space-256`.
- Homepage: lead package with one big tease plus 2-3 stacked smaller teases, then rows of 3-4 column teases, right rail with "Most popular" and video.
- Article: body occupies 6 of 12 columns at xl, pushed 2; media can break out to 10 columns.
- Dense: teases stack with 16-24px vertical gaps.

## 7. Depth, Elevation & Motion

- Mostly flat. Elevation comes from rules and colour blocks.
- Dropdowns: `0 3px 3px rgba(0,0,0,0.15)`.
- Signature offset shadow on buttons and focused cards: `-2px 2px 0 #3061FF` (or `var(--color)`), combined with `inset 0 0 0 1px #CCCCCC`.
- Transitions: `opacity .25s ease-in-out` for hover, `transform .15s linear` for icons, `width .2s` for progress bars.
- Live dot blinks (opacity pulse about 1s). Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- Icons come from a custom icon font (`iconfont`): solid, geometric, 16-24px, usually in `#2A2A2A` or white.
- Media badges: play triangle, camera for galleries, waveform for audio.
- Photography is full-bleed and uncropped by shapes; strong news photos, no filters or duotones.
- Captions always carry a mono credit line.
- Illustrations for features are flat and bold, often on the blue gradient.

## 9. Voice & Microcopy

Plain, active and short. Labels are nouns, uppercase in mono.

- Unibrows: "POLITICS", "U.S. NEWS", "LIVE UPDATES", "ANALYSIS", "EXCLUSIVE".
- Flags: "BREAKING", "LIVE", "WATCH".
- Buttons: "Read more", "Watch live", "Sign up", "Load more".
- Timestamps: "Updated 2h ago", "Nov. 16, 2026, 4:10 PM EST".
- Newsletter: "Get the latest news in your inbox."

## 10. Do's and Don'ts

**Do**

- Set headlines in a condensed grotesk at line-height 1.0.
- Use News Blue `#3061FF` as the single accent for links and labels.
- Reserve red for breaking and live.
- Use mono for all metadata.
- Keep corners square on images, cards and buttons.
- Separate packages with 1px `#CCCCCC` rules.

**Don't**

- Don't use peacock colours as UI colours.
- Don't round cards or add drop shadows to teases.
- Don't set body copy in the sans; body is serif.
- Don't mix more than one accent colour in a package.
- Don't loosen headline leading.

## 11. Agent Prompt Guide

> Build this UI in the style of NBC News. White page, text `#2A2A2A`, secondary `#555555`, rules 1px `#CCCCCC`. Headlines in a condensed grotesk (`"FoundersGroteskCond", "Oswald", "Arial Narrow", sans-serif`) weight 600 with line-height 1.0: 48px on articles, 24px on teases. Body copy is a serif (`"PublicoText", "Source Serif 4", Georgia, serif`) at 18px/1.5. Small uppercase labels above headlines (unibrows) use a monospace (`"FoundersGroteskMono", "IBM Plex Mono", monospace`) at 12px, colour `#3061FF`, tracking -0.04em. All corners are square. Buttons are outlined with a `-2px 2px 0 #3061FF` offset shadow, or solid `#3061FF`. Breaking news banners are `#CB1111` with white text; live dots and flags are `#FA3A3A`. Dark modules use navy `#102039` and the blue gradient `rgb(0,34,115)` to `rgb(1,96,250)`. Use a 12-column grid up to 1240px with 20-40px gutters, and hover states that drop opacity to 70%.

```css
:root {
  --brand-blue: #3061FF;
  --brand-blue-10: #DBEBFF;
  --brand-blue-20: #82AEFF;
  --brand-blue-60: #1B4698;
  --brand-navy: #102039;
  --brand-red-breaking: #CB1111;
  --brand-red-live: #FA3A3A;
  --brand-text: #2A2A2A;
  --brand-text-muted: #555555;
  --brand-grey-50: #999999;
  --brand-border: #CCCCCC;
  --brand-divider: #EBEBEB;
  --brand-surface: #F2F2F2;
  --brand-surface-warm: #F1F0ED;
  --brand-bg: #FFFFFF;
  --brand-success: #0DB14B;
  --brand-error: #ED1C24;
  --brand-gradient: linear-gradient(90deg, rgb(0,34,115), rgb(1,96,250));
  --brand-font-display: "FoundersGroteskCond", "Oswald", "Arial Narrow", Arial, sans-serif;
  --brand-font-body: "PublicoText", "Source Serif 4", Georgia, "Times New Roman", serif;
  --brand-font-deck: "PublicoHeadline", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "FoundersGroteskMono", "IBM Plex Mono", Courier, monospace;
  --brand-leading-tight: 1;
  --brand-leading-body: 1.5;
  --brand-radius: 0;
  --brand-shadow-offset: -2px 2px 0 #3061FF;
  --brand-shadow-dropdown: 0 3px 3px rgba(0,0,0,0.15);
  --brand-hover-opacity: 0.7;
  --brand-transition: opacity .25s ease-in-out;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by NBC News.
