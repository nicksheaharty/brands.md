---
name: Zoom
slug: zoom
url: https://zoom.com
category: Productivity
tagline: "Zoom blue on white, midnight navy text, pill buttons and Newsreader serif headlines."
updated: 2026-11-16
appStoreId: 546505307
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Zoom Blue
    hex: "#0B5CFF"
    role: Logo, primary buttons, links, selected states
  - name: Midnight
    hex: "#00053D"
    role: Body and title text, dark sections
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Bloom Cyan
    hex: "#00EDE7"
    role: Secondary button fill, highlights
  - name: Ink
    hex: "#00031F"
    role: Hero headlines, darkest text
  - name: Sky
    hex: "#4F90EE"
    role: Links and accents on dark
  - name: Blue Hover
    hex: "#0C4FE0"
    role: Primary button hover
  - name: Mist
    hex: "#F7F7F8"
    role: Section backgrounds
  - name: Ice
    hex: "#F3F8FF"
    role: Tinted blue sections and cards
  - name: Pale Blue
    hex: "#B5D0F8"
    role: Separators and outline text on dark
  - name: Slate
    hex: "#666487"
    role: Outline button border, muted text
  - name: Cloud Border
    hex: "#E0E0E6"
    role: Card borders, dividers
  - name: Error
    hex: "#CC0D00"
    role: Error text
  - name: Midnight Blue
    hex: "#011067"
    role: Deep blue gradients and dark cards
fonts:
  display:
    family: "Newsreader"
    fallback: "Newsreader"
    weights: [500, 600]
  body:
    family: "Inter"
    fallback: "Inter"
    weights: [400, 500, 600]
typeScale:
  - { role: Hero, size: 54, weight: 500, lineHeight: 1.12, tracking: "0" }
  - { role: Display, size: 50, weight: 600, lineHeight: 1.2, tracking: "0" }
  - { role: Section Title, size: 40, weight: 500, lineHeight: 1.15, tracking: "0" }
  - { role: Accordion Title, size: 24, weight: 500, lineHeight: 1.2, tracking: "0" }
  - { role: Card Title, size: 20, weight: 500, lineHeight: 1.15, tracking: "-0.4px" }
  - { role: Body Large, size: 18, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Button, size: 16, weight: 500, lineHeight: 1.5, tracking: "0" }
radii: { sm: 8, md: 12, lg: 20, pill: 999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 40, 64, 80]
shadows:
  - { name: Card, value: "0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08)" }
  - { name: Float, value: "0 6px 80px rgba(0,0,0,0.05), 0 1.34px 17.87px rgba(0,0,0,0.03), 0 0.4px 5.32px rgba(0,0,0,0.02)" }
  - { name: Dialog, value: "0 20px 40px rgba(0,0,0,0.3)" }
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F8"
  text: "#00053D"
  muted: "#666487"
  border: "#E0E0E6"
  accent: "#0B5CFF"
  accentText: "#FFFFFF"
  radius: 999
  buttonStyle: pill
---

# Zoom

## 1. Visual Theme & Atmosphere

Zoom.com sells Zoom Workplace (Meetings, Chat, Phone, Mail & Calendar, Whiteboard, Rooms) plus contact center and events products. The 2022 rebrand and later site updates moved it from a plain blue-and-white software page to a more editorial look: a serif headline face, deep midnight navy, a brighter blue, and a cyan accent.

What makes it recognisable:

- **Zoom Blue `#0B5CFF`.** The wordmark, primary pill buttons and links all share one bright, slightly violet blue.
- **Midnight navy text.** Copy is `#00053D` and hero titles `#00031F`, never pure black. Dark sections and footers use the same navy.
- **Serif headlines.** Headings use Newsreader (`--font-title`) at weight 500-600. Body and UI stay in Inter. The pairing gives the site a calmer, editorial tone than most SaaS pages.
- **Pill buttons.** Every button has `border-radius: 999px`, 1px border, 10px by 24px padding. Primary is blue, secondary is a bright cyan "bloom" `#00EDE7` with navy text.
- **Rounded cards on tinted backgrounds.** Cards sit on `#F7F7F8` or `#F3F8FF` with 12-20px radii and soft multi-layer shadows.
- **Product UI as imagery.** Screens of meetings, AI Companion summaries and Team Chat, often cropped inside rounded frames over gradient backgrounds.

Mood words: friendly, trustworthy, clear, modern, calm.

## 2. Color Palette & Roles

Values below come from zoom.com CSS (component classes `fdn-*` and `zdcm-*`).

| Name | Hex | Role |
|---|---|---|
| Zoom Blue | `#0B5CFF` | Logo, primary buttons, links, selected tabs |
| Blue Hover | `#0C4FE0` | Primary hover |
| Sky | `#4F90EE` | Links, selection and lines on dark |
| Pale Blue | `#B5D0F8` | Separators, reversed tertiary buttons |
| Light Blue | `#D7E6FC` | Tints, highlight backgrounds |
| Ice | `#F3F8FF` | Blue-tinted sections and cards |
| Ice 2 | `#E6F0FF` | Hover tints (approximate role) |
| Bloom Cyan | `#00EDE7` | Secondary button fill |
| Cyan Hover | `#15D6DB` | Secondary hover |
| Midnight | `#00053D` | Body text, outline button text, dark sections |
| Ink | `#00031F` | Hero titles, secondary button text |
| Midnight Blue | `#011067` | Dark gradient stops |
| Slate | `#666487` | Outline border, muted text |
| Slate Light | `#828099` | Captions |
| Cloud Border | `#E0E0E6` | Borders, dividers |
| Steel | `#BCC3CA` | Input borders, inset rules |
| Mist | `#F7F7F8` | Section background (`--bgColor`) |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#CC0D00` | Form errors |
| Warning / accent orange | `#F58020` | Badges, highlights |
| Success / accent green | `#99C221` | Checkmarks, positive tags (approximate role) |
| Info | `#0B5CFF` on `#F3F8FF` | Notices |

### Dark sections

Footers, CTA bands and some heroes use Midnight `#00053D` or a navy-to-blue gradient. Text turns white, links `#4F90EE`, separators `#1A3760`, tertiary buttons white outline. Feature gradients mix `#0B5CFF`, `#011067` and cyan.

## 3. Typography

**Families:** Newsreader (serif, titles) and Inter (sans, body and UI), both free on Google Fonts. Locale stacks add Noto Sans JP/KR/SC/TC.

```css
--font-title: "Newsreader", Helvetica, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif;
--font-primary: "Inter", Helvetica, "Noto Sans JP", "Noto Sans KR", Arial, sans-serif;
--font-title-weight: 600;
--font-title-medium-light-weight: 500;
--font-primary-weight: 400;
```

### Scale (desktop)

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Hub hero title | Newsreader | 54px | 500 | 1.12 | 0 |
| Hero / display large | Newsreader | 50px | 600 | 1.2 | 0 |
| Section title | Newsreader | 40px | 500 | 1.15 (approximate) | 0 |
| Accordion title | Newsreader | 24px | 500-600 | 1.2 | 0 |
| Card title | Newsreader | 20px | 500 | 1.15 | -0.4px |
| Logo strip header | Newsreader | 20px | 600 | 1.2 | 0 |
| Body large | Inter | 18px | 400 | 1.5 | 0 |
| Body | Inter | 16px | 400 | 1.5 | 0 |
| Button | Inter | 16px | 500 | 24px | 0 |
| Caption | Inter | 14px | 400 | 1.4 | 0 |

Mobile: hero titles drop to 32-34px (`2rem` to `2.125rem`).

### Rules

- Sentence case for headings and buttons ("See what Zoom can do").
- Title weight stays at 500-600; never bold the serif to 700+.
- Product names are capitalised: "Zoom Workplace", "Zoom AI Companion", "Zoom Phone".
- Japanese, Korean and Chinese locales fall back to Noto Sans for titles.

## 4. Logo & Brand Mark

The 2022 wordmark is lowercase "zoom" in a custom rounded geometric face, all in Zoom Blue `#0B5CFF`. The "z" has a rounded-corner stroke ending, and the "m" is built from two arches. The app icon and favicon use the shortened "zm" in white on a blue tile or circle.

- **Primary:** blue on white (as in `logo.svg`). **Reversed:** white on blue or midnight.
- **App icon:** white "zm" on `#0B5CFF`.
- **Clear space:** at least the height of the "z" on all sides (approximate).
- **Minimum size:** about 50px wide (approximate).

Misuse:

- Do not use the older 2011 "zoom" logo or the camera-in-circle icon.
- Do not recolor the wordmark cyan, navy or gradient.
- Do not set "zoom" in Inter or Newsreader as a substitute.
- Do not capitalise the wordmark.

## 5. Components

### Buttons

`.fdn-button` is a pill: 1px solid border, `border-radius: 999px`, `padding: 10px 24px`, `line-height: 24px`, `min-width: 80px`, weight 500. Background transitions take 500ms.

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#0B5CFF` | `#FFFFFF` | `#0B5CFF` | `#0C4FE0` |
| Secondary | `#00EDE7` | `#00031F` | `#00EDE7` | `#15D6DB` |
| Tertiary | transparent | `#0B5CFF` | `#0B5CFF` | `rgba(11,92,255,0.1)` |
| Outline | transparent | `#00053D` | `#666487` | `rgba(0,5,61,0.08)` |
| Tertiary white (on dark) | transparent | `#FFFFFF` | `#FFFFFF` | `rgba(11,92,255,0.1)` |
| Tertiary reversed | transparent | `#B5D0F8` | `#B5D0F8` | `rgba(79,144,238,0.24)` |
| Arrow link button | `#0B5CFF` | `#FFFFFF` | none | radius 10px, 4px 16px, 600 weight |

Disabled tertiary uses `rgba(0,5,61,0.08)` fill. Focus: 2px blue outline offset 2px (approximate).

```css
.zm-btn {
  font: 500 16px/24px "Inter", Helvetica, Arial, sans-serif;
  color: #fff;
  background: #0B5CFF;
  border: 1px solid #0B5CFF;
  border-radius: 999px;
  padding: 10px 24px;
  min-width: 80px;
  transition: background-color .5s;
}
.zm-btn:hover { background: #0C4FE0; border-color: #0C4FE0; }
.zm-btn--secondary { background: #00EDE7; border-color: #00EDE7; color: #00031F; }
.zm-btn--outline { background: transparent; border-color: #666487; color: #00053D; }
```

### Navigation

- White sticky header about 64-72px tall. Left: blue "zoom" wordmark, then "Products", "Solutions", "Pricing", "Support" with chevrons.
- Right: search icon, language selector, "Sign In" text link, "Contact Sales" outline pill and "Sign Up Free" primary pill.
- A secondary row or menu offers "Meet": "Join a meeting", "Host a meeting", "Schedule a meeting", "Download app".
- Mega-menus are white panels with product icons and short descriptions, radius about 12px.

### Cards

- Radius 12px (`--borderRadius: 0.75rem`), sometimes 20px for large media cards.
- White on `#F7F7F8`, or `#F3F8FF` tinted; padding 24-32px.
- Shadow `0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08)` on hover or on floating cards.
- Announcement cards: Newsreader 20px/500 title with -0.4px tracking, Inter body, arrow link.

### Tabs and accordions

Product tabs use a blue underline or a blue-filled pill for the active item, `#00053D` text. Accordions have Newsreader 24px titles, 1px `#E0E0E6` rules and a plus/minus icon.

### Logo strip

"Trusted by millions. Built for you." header centered in Newsreader 20px/600, then a scrolling row of customer logos in grey.

### Inputs

Height 44-48px, 1px `#BCC3CA` border, radius 8px, 16px Inter. Focus border `#0B5CFF`. Error text `#CC0D00`.

### Modals

White, radius 12-20px, shadow `0 20px 40px rgba(0,0,0,0.3)`, scrim navy at about 60%.

## 6. Layout & Spacing

- **Spacing:** rem-based, common values 4, 8, 12, 16, 20, 24, 32, 40, 64, 80px.
- **Content width:** about 1200-1280px (approximate).
- **Gutters:** 16-20px mobile, 32-40px desktop (approximate).
- **Breakpoints:** 1025px is the main desktop switch in the CSS (`min-width:1025px`), with tablet near 768px.
- **Sections:** alternate white, `#F7F7F8` and one dark midnight band; 64-80px vertical padding on desktop.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Card | `0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08)` |
| Float (soft) | `0 6px 80px rgba(0,0,0,0.05), 0 1.34px 17.87px rgba(0,0,0,0.03), 0 0.4px 5.32px rgba(0,0,0,0.02)` |
| Float (strong) | `0 9px 80px rgba(0,0,0,0.07), 0 2px 17.87px rgba(0,0,0,0.04), 0 0.6px 5.32px rgba(0,0,0,0.03)` |
| Sheet (bottom) | `0 -9px 75px rgba(0,0,0,0.2), 0 -2px 20px rgba(0,0,0,0.15), 0 -0.6px 10px rgba(0,0,0,0.1)` |
| Dialog | `0 20px 40px rgba(0,0,0,0.3)` |

Motion: button backgrounds 500ms; carousels (Swiper) slide 300-500ms; product UI clips animate in on scroll (approximate).

## 8. Iconography & Imagery

- **Icons:** line icons at 24px with 1.5-2px strokes in navy or blue; product icons are rounded squares with a white glyph on a blue or gradient fill.
- **Product shots:** meeting grids with real people, AI Companion summary panels and chat threads inside rounded device frames.
- **Photography:** people on calls at home and in offices, natural light, diverse casts.
- **Gradients:** soft blue-to-cyan or navy-to-blue fields behind product shots; no rainbow gradients.

## 9. Voice & Microcopy

Helpful, plain and upbeat. Focuses on getting work done and on AI features.

- Sentence case; short clauses; friendly second person.
- CTAs: "Sign Up Free", "Contact Sales", "Join a meeting", "Host a meeting", "Download app", "Learn more".

Sample strings:

- Hero: "Find out what's possible"
- Section: "One platform."
- Logo strip: "Trusted by millions. Built for you." (read on zoom.com today)
- CTA band: "See what Zoom can do"

## 10. Do's and Don'ts

**Do**

- Use Zoom Blue `#0B5CFF` for the primary action and the logo.
- Set headings in Newsreader 500-600 and everything else in Inter.
- Make all buttons pills with a 1px border.
- Use midnight `#00053D` for text instead of black.
- Put cards on `#F7F7F8` or `#F3F8FF` with 12px radii.
- Use cyan `#00EDE7` only for the secondary button or small highlights.

**Don't**

- Don't use square or 4px-radius buttons.
- Don't set long paragraphs in the serif.
- Don't revive the old 2011 logo or camera icon.
- Don't use heavy dark shadows on light sections.
- Don't put cyan text on white; it fails contrast.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Zoom.com. White page with `#F7F7F8` and `#F3F8FF` sections and one midnight `#00053D` band. Headlines in Newsreader serif, weight 500-600, 40-54px, color `#00031F`; body in Inter 16-18px, color `#00053D`, muted `#666487`. All buttons are pills (`border-radius: 999px`, 1px border, padding 10px 24px, Inter 500 16px): primary `#0B5CFF` with white text (hover `#0C4FE0`), secondary cyan `#00EDE7` with navy text, outline with `#666487` border. Header is white with a blue lowercase "zoom" wordmark, Products/Solutions/Pricing/Support menus, "Sign In", "Contact Sales" and "Sign Up Free". Cards have 12px radius and a soft shadow `0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08)`. Show product UI screenshots in rounded frames over soft blue gradients. Copy is friendly and short.

```css
:root {
  --brand-blue: #0B5CFF;
  --brand-blue-hover: #0C4FE0;
  --brand-sky: #4F90EE;
  --brand-blue-pale: #B5D0F8;
  --brand-blue-tint: #F3F8FF;
  --brand-cyan: #00EDE7;
  --brand-cyan-hover: #15D6DB;
  --brand-midnight: #00053D;
  --brand-ink: #00031F;
  --brand-midnight-blue: #011067;
  --brand-slate: #666487;
  --brand-border: #E0E0E6;
  --brand-input-border: #BCC3CA;
  --brand-bg: #FFFFFF;
  --brand-surface: #F7F7F8;
  --brand-error: #CC0D00;
  --brand-font-title: "Newsreader", Helvetica, Arial, serif;
  --brand-font: "Inter", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 8px;
  --brand-radius: 12px;
  --brand-radius-lg: 20px;
  --brand-radius-pill: 999px;
  --brand-shadow-card: 0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08);
  --brand-shadow-dialog: 0 20px 40px rgba(0,0,0,0.3);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Zoom.
