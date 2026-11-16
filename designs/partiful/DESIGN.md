---
name: Partiful
slug: partiful
url: https://partiful.com
category: Social
tagline: "Party-poster invites on dark, playful themes, a blobby P and lowercase party-text energy."
updated: 2026-11-16
appStoreId: 1662982304
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: Ink
    hex: "#111111"
    role: Primary text on light, logo, dark section background
  - name: Black
    hex: "#000000"
    role: Event page and app background, dark sections
  - name: Paper
    hex: "#FDFDFB"
    role: Warm off-white page background on the marketing site
  - name: Fog
    hex: "#F7F7F7"
    role: Light sections, input fills
  - name: Pink
    hex: "#FFCEE3"
    role: Soft brand accent, highlight panels
  - name: Going Green
    hex: "#31C431"
    role: Going / confirmed state
  - name: Maybe Amber
    hex: "#FFAE00"
    role: Maybe / pending state
  - name: Orange Glow
    hex: "#F57E2A"
    role: Warm glow tint (used at 40% alpha)
  - name: Deep Navy
    hex: "#001666"
    role: Occasional dark accent panel
  - name: Grey 900
    hex: "#1C1C1A"
    role: Dark card surface
  - name: Grey 800
    hex: "#30302F"
    role: Raised dark surface, borders on dark
  - name: Grey 600
    hex: "#5F5F5B"
    role: Muted text on light
  - name: Grey 500
    hex: "#777772"
    role: Secondary text, captions
  - name: Grey 300
    hex: "#AFAFAB"
    role: Disabled, placeholder
  - name: Grey 100
    hex: "#ECECEC"
    role: Dividers on light
fonts:
  display:
    family: "Partiful Janky Inter Display"
    fallback: "Inter Tight"
    weights: [400]
  body:
    family: "TWK Lausanne Pan"
    fallback: "Inter"
    weights: [300, 400, 550, 700]
typeScale:
  - { role: Hero, size: 72, weight: 400, lineHeight: 0.95, tracking: "-0.03em" }
  - { role: Event Title, size: 44, weight: 400, lineHeight: 1.0, tracking: "-0.02em" }
  - { role: Heading, size: 32, weight: 400, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Subhead, size: 20, weight: 400, lineHeight: 1.3, tracking: "-0.01em" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.45, tracking: "0" }
  - { role: Label, size: 14, weight: 550, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.3, tracking: "0" }
radii: { sm: 8, md: 12, lg: 16, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Poster, value: "0 12px 40px rgba(0,0,0,0.35)" }
  - { name: Sheet, value: "0 -4px 24px rgba(0,0,0,0.3)" }
preview:
  bg: "#000000"
  surface: "#1C1C1A"
  text: "#FFFFFF"
  muted: "#AFAFAB"
  border: "#30302F"
  accent: "#FFFFFF"
  accentText: "#111111"
  radius: 12
  buttonStyle: pill
---

# Partiful

## 1. Visual Theme & Atmosphere

Partiful makes event invites feel like a flyer taped to a bedroom door. The core object is an event page: a big poster image, a title set in a slightly wonky display face, a playful animated background, and three RSVP buttons. Around that, the brand is mostly black and white with warm greys, so each host's chosen theme and poster supply the colour.

What makes it recognisable:

- **The poster first.** Every event leads with a square or portrait image (a photo, GIF or one of Partiful's poster templates) with rounded corners and a soft shadow.
- **Themes and effects.** Hosts choose a background theme (gradients, textures, colour washes) and an "effect" (floating shapes, confetti-like particles, emoji showers). The UI chrome stays neutral so these can be loud.
- **Janky display type.** Headlines use a custom "Janky" cut of Inter Display with uneven, hand-tweaked letterforms. It reads like a party text, not a corporate headline.
- **Lowercase, chatty copy.** Marketing lines like "what's happening friday???" set the tone: group-chat energy, not event-industry language.
- **Dark default.** Event pages and the app sit on black or near-black. The marketing site alternates warm off-white `#FDFDFB` and black sections.
- **Pills.** Main buttons and chips are 999px pills; cards and posters use 8-16px radii.

Mood words: playful, social, casual, nighttime, DIY.

## 2. Color Palette & Roles

Values read from partiful.com (a Framer site) CSS tokens on 2026-11-16. App and event-page values are approximate.

| Name | Hex | Role |
|---|---|---|
| Ink | `#111111` | Text on light, logo, dark sections |
| Black | `#000000` | Event page background, dark sections |
| White | `#FFFFFF` | Text on dark, primary button on dark |
| Paper | `#FDFDFB` | Warm off-white page |
| Fog | `#F7F7F7` | Light sections, inputs |
| Grey 100 | `#ECECEC` | Dividers on light |
| Grey 300 | `#AFAFAB` | Placeholder, disabled, muted text on dark |
| Grey 400 | `#93938F` | Tertiary text |
| Grey 500 | `#777772` | Secondary text, captions (most used grey) |
| Grey 600 | `#5F5F5B` | Muted text on light |
| Grey 700 | `#4B4B49` | Borders on dark |
| Grey 800 | `#30302F` | Raised dark surface |
| Grey 900 | `#1C1C1A` | Dark card surface |
| Pink | `#FFCEE3` | Soft accent panels |
| Deep Navy | `#001666` | Accent panel |
| Orange Glow | `#F57E2A` at 40% | Warm glow behind posters |

The greys are warm (a touch of yellow), not blue. Keep that warmth.

### Translucent tokens

Partiful leans on alpha whites and blacks for UI over themes:

- On dark: `#FFFFFF` at 80% (`#fffc`) for secondary text, 40% (`#fff6`) for tertiary, 30% (`#ffffff4d`) for borders, 12% (`#ffffff1f`) and 10% (`#ffffff1a`) for glass fills.
- On light: `#000000` at 80%, 60%, 30%, 10% and 5% for the same jobs.

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Going | `#31C431` | Going RSVP, success |
| Maybe | `#FFAE00` | Maybe RSVP, pending |
| Can't go / error | `#FF3B30` | Declined, errors (approximate; token is CSS `red`) |
| Link | `#0099FF` | Framer default link colour on the marketing site |

## 3. Typography

- **Display:** "Partiful Janky Inter Display" (custom, based on Inter Display). Also "Partiful Display Medium" for some headings. Proprietary.
- **Text:** TWK Lausanne Pan (Weltkern), loaded in many weights (300, 400, 550, 600, 650, 700, 850, 1000). Commercial licence.
- **Fallbacks (Google Fonts):** Inter Tight for display, Inter for body. Manrope works as a friendlier alternative.
- The marketing site also loads Inter, Manrope, Afacad and IBM Plex Mono for specific modules. Hosts can pick title fonts for events, so expect variety on event pages.

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Hero (marketing) | 64-80px | 400 | 0.95 | -0.03em |
| Event title | 40-48px | 400 | 1.0 | -0.02em |
| Section heading | 32px | 400 | 1.1 | -0.02em |
| Subhead | 20px | 400 | 1.3 | -0.01em |
| Body | 16px | 300-400 | 1.45 | 0 |
| Label / button | 14-16px | 550 | 1.3 | 0 |
| Caption | 12px | 400 | 1.3 | 0 |

### Rules

- Display type at regular weight. The janky shapes do the work, not boldness.
- Lowercase is common in marketing lines and event titles; UI labels stay sentence case.
- Body in Lausanne 300 on light, 400 on dark for legibility.
- Dates and times written plainly: "Fri, Nov 21 · 8pm".

## 4. Logo & Brand Mark

The mark is a single blobby, liquid "P": a fat bowl that tapers into a wobbly stem, drawn as one closed shape with an inner counter. It looks hand-poured rather than geometric. The wordmark "partiful" is set lowercase.

- **Primary:** Ink `#111111` P on white or Paper.
- **Reversed:** white P on black (app icon style).
- **Clear space:** half the P's width on all sides.
- **Minimum size:** 20px tall.

Do not:

- Smooth or straighten the P's curves.
- Fill the P with gradients or theme colours.
- Outline the mark.
- Set "Partiful" with a capital in the wordmark.

## 5. Components

### Buttons

```css
.btn {
  font: 550 16px/1 "TWK Lausanne Pan", Inter, sans-serif;
  padding: 14px 24px;
  border-radius: 999px;
  transition: transform 150ms ease, opacity 150ms ease;
}
.btn:active { transform: scale(0.97); }
.btn--primary-dark { background: #FFFFFF; color: #111111; }   /* on black */
.btn--primary-light { background: #111111; color: #FFFFFF; }  /* on light */
.btn--glass { background: rgba(255,255,255,0.12); color: #FFFFFF; backdrop-filter: blur(12px); }
.btn--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; }
```

- Marketing CTAs: "Create an invite", "Create event", "Get the app".
- Disabled: 40% opacity.

### RSVP row (signature)

- Three equal buttons in a row: Going, Maybe, Can't Go. Each shows an emoji-style icon above or beside the label (hosts can change these).
- Unselected: glass fill `rgba(255,255,255,0.12)`, 12-16px radius, 64-72px tall (approximate).
- Selected: solid fill with the state colour (`#31C431` going, `#FFAE00` maybe) or white with dark text.

### Event poster card

- Square or 4:5 image, 16px radius, shadow `0 12px 40px rgba(0,0,0,0.35)`, sometimes a warm glow behind it.
- Below: title in the display face, host avatars and names, date/time line, location line with a map pin.

### Guest list

- Overlapping 32px circular avatars (2px black ring), "+12" counter chip.
- Tabs for Going / Maybe / Invited with counts.

### Activity feed and blasts

- Host updates ("blasts") and comments in cards on `rgba(255,255,255,0.08)` with 12px radius.
- Each item: 32px avatar, name in 14px weight 550, time in grey, message in 15-16px.
- Reactions as small pills under the message.

### Inputs

- Light: fill `#F7F7F7`, no border, 12px radius, 48px tall.
- Dark: fill `rgba(255,255,255,0.08)`, 1px `rgba(255,255,255,0.12)` border, white text, placeholder `#AFAFAB`.
- Event creation uses big inline-editable fields: tap the title to type over "Untitled event".

### Navigation

- Marketing header: P logo left; "Invites", "Explore", "Products", "For Organizers", "Company"; "Log in" text link and "Create an invite" pill at right.
- App: bottom tabs (Home, Explore, Create, Notifications, Profile), white icons on black (approximate).

### Chips

- Pills, 999px radius, 13-14px, glass or `#ECECEC` fill. Used for cities ("New York City", "Los Angeles"), categories and filters.

### Modals and sheets

- Bottom sheets on mobile with 16-20px top radius on `#1C1C1A`, a grab handle, and a dimmed backdrop.

## 6. Layout & Spacing

- Marketing breakpoints from the Framer CSS: `810px`, `960px`, `1200px`, `1440px`.
- Max content width about 1200px; hero sections go full-bleed.
- Event page: single centred column about 480-600px wide on desktop, so it reads like a phone screen; poster on top.
- Spacing: 8px base, common gaps 12, 16, 24, 32. Section spacing 64-96px on marketing.
- Mobile first. Most guests open invites from a text message link.

## 7. Depth, Elevation & Motion

- Posters get a big soft shadow and sometimes a coloured glow; everything else is flat or glassy.
- Glass surfaces: `rgba(255,255,255,0.08-0.12)` with `backdrop-filter: blur(12-20px)` over theme backgrounds.
- Motion is playful: background effects drift and float continuously; tapping an RSVP gives a quick scale bounce; confetti-like bursts on "Going".
- UI transitions are short (150-250ms, ease-out). Effects loops are slow (several seconds).
- Respect `prefers-reduced-motion` by pausing background effects.

## 8. Iconography & Imagery

- **Icons:** simple rounded line icons (calendar, pin, share, camera) at 20-24px, white on dark.
- **Emoji:** used heavily inside the product (RSVP buttons, reactions, effects). Render them as the platform's native emoji; do not draw custom ones.
- **Posters:** user photos, GIFs, and Partiful's template library of illustrated flyers (bold type, collage, stickers).
- **Marketing imagery:** real parties, friends, phone screenshots of invites, often slightly tilted.

## 9. Voice & Microcopy

Tone: like a friend in the group chat. Lowercase allowed, question marks welcome, never stiff.

- Short sentences. Talks about hanging out, not "events management".
- UI labels plain and sentence case.

Sample strings:

- "Parties are back"
- "Create invites & discover events"
- "what's happening friday???"
- "One link. Everyone's in."
- "Send them a link. No app needed"
- "Create your invite"
- "Takes 30 seconds"
- "Going" / "Maybe" / "Can't Go"
- "Text blast"

## 10. Do's and Don'ts

**Do**

- Lead every event with a big rounded poster.
- Keep UI neutral (black, white, warm grey) so host themes can be loud.
- Use pill buttons and glassy panels over themed backgrounds.
- Use a quirky display face for titles and a clean grotesk for UI.
- Write casually, lowercase where it fits.

**Don't**

- Don't use corporate blue or a single brand accent everywhere.
- Don't use cold blue-grey neutrals.
- Don't use square, boxy buttons.
- Don't crowd the event page with sidebars; keep it one column.
- Don't make the P mark geometric or clean.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Partiful. Event pages are a single centred column (480-600px) on a black `#000000` background with an optional themed gradient behind. Lead with a square poster image, 16px radius, shadow `0 12px 40px rgba(0,0,0,0.35)`. Title below in a quirky display face (Partiful Janky Inter Display, fallback Inter Tight) at 44px weight 400, tracking -0.02em. UI text in TWK Lausanne Pan (fallback Inter), body 16px, labels 14px weight 550. Text is white, secondary `rgba(255,255,255,0.8)`, muted `#AFAFAB`. Panels are glass: `rgba(255,255,255,0.08-0.12)` with `backdrop-filter: blur(16px)` and 12px radius. RSVP row has three equal glass buttons (Going, Maybe, Can't Go); selected Going uses `#31C431`, Maybe `#FFAE00`. Primary buttons are white pills (`border-radius: 999px`) with `#111111` text, 14px 24px padding, scale to 0.97 on press. Guest avatars overlap at 32px with a 2px black ring. Marketing pages alternate warm off-white `#FDFDFB` and black sections with `#111111` text and warm greys `#777772`, `#5F5F5B`. Copy is casual and often lowercase.

```css
:root {
  --pf-ink: #111111;
  --pf-black: #000000;
  --pf-white: #FFFFFF;
  --pf-paper: #FDFDFB;
  --pf-fog: #F7F7F7;
  --pf-grey-100: #ECECEC;
  --pf-grey-300: #AFAFAB;
  --pf-grey-400: #93938F;
  --pf-grey-500: #777772;
  --pf-grey-600: #5F5F5B;
  --pf-grey-700: #4B4B49;
  --pf-grey-800: #30302F;
  --pf-grey-900: #1C1C1A;
  --pf-pink: #FFCEE3;
  --pf-navy: #001666;
  --pf-going: #31C431;
  --pf-maybe: #FFAE00;
  --pf-glow: #F57E2A66;
  --pf-glass: rgba(255,255,255,0.12);
  --pf-glass-border: rgba(255,255,255,0.3);
  --pf-font-display: "Partiful Janky Inter Display", "Inter Tight", Inter, sans-serif;
  --pf-font: "TWK Lausanne Pan", Inter, sans-serif;
  --pf-radius-sm: 8px;
  --pf-radius: 12px;
  --pf-radius-lg: 16px;
  --pf-radius-pill: 999px;
  --pf-shadow-poster: 0 12px 40px rgba(0,0,0,0.35);
}
```

---

Values are observed from the public website and product; this file is an unofficial reference and is not affiliated with or endorsed by Partiful.
