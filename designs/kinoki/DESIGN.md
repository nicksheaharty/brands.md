---
name: Kinoki
slug: kinoki
url: https://apps.apple.com/us/app/kinoki-members-only/id6817906063
category: Social
tagline: "Cream and black, a hand-drawn eye, Bookman serif titles and native Liquid Glass."
updated: 2026-11-16
appStoreId: 6817906063
logoBackground: "#FFF2EB"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: Ink in light mode, canvas in dark mode, the logo and icon ground
  - name: Cream
    hex: "#FFF2EB"
    role: Canvas in light mode, ink in dark mode, the logo on black
  - name: Muted Ink
    hex: "#615C59"
    role: Secondary text in light mode (black at 62% on cream)
  - name: Faint Ink
    hex: "#99918D"
    role: Placeholders and chevrons in light mode (black at 40% on cream)
  - name: Card Tint
    hex: "#F4E7E0"
    role: Grouped section and pill fill in light mode (black at 4.5% on cream)
  - name: Card Pressed
    hex: "#E8DCD6"
    role: Pressed row fill in light mode (black at 9% on cream)
  - name: Hairline
    hex: "#DBD0CA"
    role: Row separators in light mode (black at 14% on cream)
  - name: Muted Cream
    hex: "#9E9692"
    role: Secondary text in dark mode (cream at 62% on black)
  - name: Dark Card
    hex: "#121110"
    role: Grouped section fill in dark mode (cream at 7% on black)
  - name: Dark Hairline
    hex: "#292726"
    role: Separators in dark mode (cream at 16% on black)
fonts:
  display:
    family: "Bookman Opti Light"
    fallback: "Fraunces"
    weights: [300]
  body:
    family: "SF Pro (system-ui)"
    fallback: "Inter"
    weights: [400, 600, 700]
  mono:
    family: "SF Mono (ui-monospace)"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Large Title, size: 34, weight: 300, lineHeight: 1.21, tracking: "0" }
  - { role: Title, size: 28, weight: 300, lineHeight: 1.21, tracking: "0" }
  - { role: Title 3, size: 20, weight: 300, lineHeight: 1.25, tracking: "0" }
  - { role: Headline, size: 17, weight: 600, lineHeight: 1.29, tracking: "0" }
  - { role: Body, size: 17, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Subhead, size: 15, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Footnote, size: 13, weight: 400, lineHeight: 1.38, tracking: "0" }
  - { role: Eyebrow, size: 12, weight: 600, lineHeight: 1.33, tracking: "0.13em" }
radii: { sm: 18, md: 20, lg: 26, pill: 9999 }
spacing: [4, 8, 12, 14, 16, 20, 28, 32, 48, 56]
shadows: []
preview:
  bg: "#FFF2EB"
  surface: "#F4E7E0"
  text: "#000000"
  muted: "#615C59"
  border: "#DBD0CA"
  accent: "#000000"
  accentText: "#FFF2EB"
  radius: 24
  buttonStyle: pill
---

# Kinoki

## 1. Visual Theme & Atmosphere

Kinoki is the private members app for a Penn senior society: events with RSVPs, an A to Z member directory, a shared photo gallery by class, and your own member card. Sign-in is by invite only. The app is built with Expo and leans hard on native iOS: system tab bar, native headers, grouped sections and Liquid Glass on iOS 26.

What makes it recognisable:

- **Two tones only.** Cream `#FFF2EB` and black `#000000` trade places between light and dark mode. There is no colour accent at all: the accent is simply the ink colour. Every grey is the ink at a fixed alpha over the canvas.
- **A hand-drawn eye.** The logo is a scratchy, pen-drawn eye with lashes; the letters K-I-N-O-K-I are drawn inside it and the "O" is the iris. It reads like a doodle in the margin of a notebook, and it sets the tone for the whole app.
- **Sketched icons.** Every in-app icon is a Phosphor glyph re-drawn as a wobbly pencil stroke with rough.js, so the UI chrome feels hand-made while the layout stays strictly native.
- **Bookman for names and titles.** A light, soft old-style serif (Bookman Opti Light) is reserved for screen titles, member names, event titles and initials. Everything functional uses the system face.
- **Poster heroes.** Member and event screens open on a fixed black "poster" area (black even in light mode) with a large cream title, a faint giant logo watermark, and Contacts-style glass action buttons.
- **Native Liquid Glass.** Tab bar, headers and action buttons use the system glass. The tab bar is icons only and shrinks on scroll.

Mood words: private, literary, quiet, hand-made, clubby, monochrome.

## 2. Color Palette & Roles

The palette is defined as two tokens per mode plus alpha steps of the ink.

| Token | Light mode | Dark mode | Role |
|---|---|---|---|
| bg | `#FFF2EB` | `#000000` | Canvas behind everything |
| ink | `#000000` | `#FFF2EB` | Text, icons, logo, filled buttons, tab tint |
| onInk | `#FFF2EB` | `#000000` | Text on a filled ink button or avatar |
| muted | `rgba(0,0,0,0.62)` | `rgba(255,242,235,0.62)` | Secondary text (5.9:1 and 7.1:1 contrast) |
| faint | `rgba(0,0,0,0.4)` | `rgba(255,242,235,0.4)` | Placeholders, chevrons only |
| hairline | `rgba(0,0,0,0.14)` | `rgba(255,242,235,0.16)` | Row separators |
| card | `rgba(0,0,0,0.045)` | `rgba(255,242,235,0.07)` | Grouped section and secondary pill fill |
| cardPressed | `rgba(0,0,0,0.09)` | `rgba(255,242,235,0.13)` | Pressed rows and pills |
| accent | `#000000` | `#FFF2EB` | Same as ink |

The hex values in the frontmatter are these alphas flattened onto the canvas, for tools that need solid colours.

### Fixed-dark areas

Poster heroes and the featured event card always use the dark values regardless of mode: black ground, cream type, subtitle in `rgba(255,242,235,0.75)`, logo watermark in `rgba(255,242,235,0.07)`, glass fallback fill `rgba(255,242,235,0.16)`.

### State colours

There are none of its own. Destructive actions ("Delete Event", "Sign Out") use the iOS system red in native alerts and menus; everything else stays monochrome. Disabled controls drop to 35% opacity, pressed controls to 70-75%.

## 3. Typography

- **Serif:** Bookman Opti Light, bundled as an OTF and referenced by PostScript name `BOOKmanOpti-Light`. Used only for names and titles: large titles, event titles, member names, the date numerals on event tiles and avatar initials.
- **Sans:** the iOS system face (SF Pro via `system-ui`) for every functional string: rows, buttons, labels, fields, footnotes.
- **Mono:** `ui-monospace`, rarely used.
- **Fallbacks:** Bookman Opti is a commercial cut. Use **Fraunces** at weight 300 (soft, wide, old-style) for the serif and **Inter** for the sans.

The scale is Apple's Dynamic Type at the default size, with serif swapped into the title styles:

| Role | Font | Size / line | Weight | Notes |
|---|---|---|---|---|
| Large Title | Serif | 34 / 41 | Light | Tab screen titles: "Events", "Directory" |
| Title | Serif | 28 / 34 | Light | Poster names, event tile day numbers |
| Title 3 | Serif | 20 / 25 | Light | Card titles |
| Headline | Sans | 17 / 22 | 600 | Row titles, pill labels (16px in pills) |
| Body | Sans | 17 / 22 | 400 | Row values, fields |
| Callout | Sans | 16 / 21 | 400 | Secondary blocks |
| Subhead | Sans | 15 / 20 | 400 | Screen subtitles, row subtitles |
| Footnote | Sans | 13 / 18 | 400 | Section footers |
| Eyebrow | Sans | 12 / 16 | 600, uppercase | 1.6px tracking, section headers |
| Tile month | Sans | 12 / 15 | 700, uppercase | 1.2px tracking, above the serif day |

### Rules

- Serif never goes bold. It is always the Light cut, and that lightness is part of the look.
- Section headers are small uppercase eyebrows in muted ink, aligned with the text inside the card (32px from the screen edge).
- Title Case for buttons and actions ("Add Photos", "Create an Event", "Sign Out"); sentence case for messages.
- Support Dynamic Type; cap scaling on tight labels (avatar initials do not scale).

## 4. Logo & Brand Mark

- **Construction:** a horizontal almond-shaped eye drawn in a single, uneven pen line, with short lashes radiating out top and bottom. Inside, the letters K, I, N fill the left, the iris "O" sits in a rounded-square pupil at the centre, and K, I fill the right. Aspect ratio 650 x 378.
- **Colour:** always one flat colour, the current ink: black on cream, cream on black. The app renders it with `currentColor` so it follows the theme.
- **App icon:** cream eye centred on a black square at roughly 70% width.
- **Watermark:** on poster heroes the logo is drawn 200px tall in cream at 7% alpha behind the member's name.
- **Clear space:** at least the height of the tallest lash on every side.
- **Minimum size:** 24px tall; below that the letters close up.

Misuse: no gradients, outlines or shadows; do not redraw it with clean geometric strokes; do not separate the letters from the eye; never add a second colour.

## 5. Components

### Screen

A full-height scroll view on the canvas colour with the native transparent header above it and the glass tab bar below. Content insets come from the system so nothing hides under glass. 48px bottom padding.

### Screen title

Under the header, 16px side margin, 4px top and 12px bottom padding: serif Large Title in ink, optional subhead in muted below it, optional accessory (for example a calendar button) on the right.

### Grouped section (signature)

The iOS inset grouped list, reskinned:

```css
.section { margin: 14px 0; }
.section-header {            /* eyebrow */
  margin: 0 32px 8px;
  font: 600 12px/16px system-ui; letter-spacing: 1.6px; text-transform: uppercase;
  color: rgba(0,0,0,.62);
}
.section-card {
  margin: 0 16px;
  border-radius: 26px;       /* continuous corners */
  background: rgba(0,0,0,.045);
  overflow: hidden;
}
.row {
  display: flex; align-items: center; gap: 12px;
  min-height: 52px; padding: 10px 16px;
}
.row + .row { border-top: 1px solid rgba(0,0,0,.14); margin-left: 16px; }  /* inset hairline */
.row:active { background: rgba(0,0,0,.09); }
.section-footer { margin: 8px 32px 0; font: 400 13px/18px system-ui; color: rgba(0,0,0,.62); }
```

Row variants: Row (icon in a 28px column, title, optional value right-aligned, chevron in faint ink), DetailRow (60px min height, avatar plus two lines), InputRow (label left, field right, 52px min height, multiline 104px).

### Pill button

The only button shape. Capsule, 48px min height, 20px horizontal padding, radius 24, 8px gap between a 20px sketched icon and a 16px/600 label.

- **Filled:** ink background, onInk text. One per screen, for the primary action.
- **Plain:** card tint background, ink text.
- **Poster tone:** inside fixed-dark heroes it stays cream on black whatever the mode.
- Pressed 75% opacity, disabled 35%, light haptic tap on press.

### Poster action (signature)

Contacts-style buttons in a row under a poster name: each is a 60px tall glass tile, radius 18, clear Liquid Glass in dark scheme, a 24px cream icon with a 12px/600 label underneath ("Message", "Call", "Email" and so on). Row gap 8px, 20px above.

### Avatar

Circle, 44px by default. With a photo: cover fit, 200ms fade in, card tint while loading. Without: solid ink circle with serif initials in onInk at 38% of the size, 0.5px tracking.

### Segmented control

The native iOS segmented control for "Upcoming / Past" and RSVP status ("Going", "Maybe", "Can't Go"), tinted with ink.

### Event tile and featured card

- List rows lead with a date tile: month in 12px/700 uppercase tracked sans above the day number in serif Title.
- The next event is a featured card: black, radius 26, min height 230px, 18px padding, cover photo or the film-strip placeholder behind cream text, and a 44px round calendar button.
- **Placeholder art:** two diagonal cream film strips with black sprocket holes and a soft projector-beam gradient across them, on black.

### Tab bar

System NativeTabs with Liquid Glass: Events, Gallery, Directory, Profile. Icons only (labels hidden but kept for accessibility), hand-sketched template PNGs tinted ink. The Profile tab shows your own photo as a round icon. The bar minimises on scroll down.

### Empty state

Centred, 56px vertical and 32px horizontal padding, 14px gap: a large sketched icon, a short muted line ("Nothing on the calendar yet.", "No photos yet."), optional pill action.

### Gallery

Full-bleed grid of square thumbnails grouped by class year album; tapping opens a full-screen swipe viewer with pinch to zoom on black.

## 6. Layout & Spacing

- One grid for every screen: content and cards sit 16px from the edge (`margin`); text inside cards sits another 16px in (`inset`), which is also where section headers and footers align (32px from the edge).
- Section gap 28px (14px above and below each group). Stacked items 8px apart.
- Radii: card 26, tile 20, poster action 18, pill 24, circles for avatars and icon buttons. Always continuous (squircle) corners.
- Phone only, portrait only. No tablet layout.
- Respect safe areas; heroes run under the status bar, everything else uses automatic insets.

## 7. Depth, Elevation & Motion

- Flat by design. No drop shadows. Separation comes from the card tint, hairlines and the contrast of black posters against cream.
- Depth comes from native Liquid Glass (tab bar, header buttons, poster actions). Without Liquid Glass, glass falls back to the card tint, or cream at 16% on dark posters.
- Motion is the system's: native push and sheet transitions, the tab bar minimising on scroll, a fading logo header as you scroll down a screen, 200ms image fades.
- Pressed states change opacity rather than scale; every tap gets a light haptic.

## 8. Iconography & Imagery

- **Icons:** Phosphor glyphs re-drawn as rough pencil strokes (rough.js, stroke 6 on a large grid, roughness about 1.8, bowing 1.4, round caps and joins), rendered in the current ink. Tab icons are rougher still. A few system SF Symbols remain where a sketch does not exist.
- **Photography:** member portraits and event cover photos at full colour, cropped square or as wide covers. Photos are the only colour in the app.
- **Illustration:** only the logo and the film-strip placeholder, both cream on black, both drawn rather than geometric.
- Cinema references (film strips, a projector beam, the eye) carry the brand.

## 9. Voice & Microcopy

Short, warm and plain, like a note from a fellow member. No marketing tone inside the app.

- Title Case for actions, sentence case with full stops for messages and empty states.
- Curly apostrophes ("Couldn't", "You'll").
- Errors say what failed and nothing more.

Sample strings:

- Tabs and titles: "Events", "Gallery", "Directory", "Your class", "Upcoming"
- Actions: "Create an Event", "Add Photos", "Change Photo", "RSVP", "Sign Out"
- RSVP: "Going", "Maybe", "Can't Go"
- Empty: "Nothing on the calendar yet.", "No past events.", "No photos yet."
- Confirm: "Delete this event?" / "It will disappear for every member."
- Sign out: "Sign out of Kinoki?" / "You'll need a texted code to get back in."
- Errors: "Couldn't save your RSVP", "Couldn't add every photo"

## 10. Do's and Don'ts

**Do**

- Keep it to cream and black, and swap them for dark mode.
- Use alpha steps of the ink (62%, 40%, 14%, 4.5%) for every grey.
- Reserve the light serif for names and titles; use the system sans for everything else.
- Use iOS grouped sections with 26px continuous corners and inset hairlines.
- Draw icons by hand or with a sketch filter so they match the logo's line.
- Let member and event photos be the only colour.
- Use native glass, headers and tab bars instead of custom chrome.

**Don't**

- Don't add a colour accent, a gradient brand fill or coloured badges.
- Don't use drop shadows or floating cards that hover above the page.
- Don't use bold or italic serif.
- Don't use clean geometric icon sets next to the sketched ones.
- Don't show member data, counts or a public sign-up path in marketing material.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Kinoki, a private members app. Strict two-tone palette: cream `#FFF2EB` canvas with black `#000000` ink in light mode, and the reverse in dark mode. No accent colour; filled buttons are ink with cream text. Greys are ink at alpha: muted text 62%, placeholders 40%, hairlines 14%, card fill 4.5% (dark mode: cream at 62/40/16/7%). Titles, member names and event titles use a light, soft serif (`"Bookman Opti", Fraunces, serif`, weight 300) at iOS title sizes (34/28/20px); everything else uses the system sans (`system-ui, Inter`) at iOS Dynamic Type sizes (17px body, 15px subhead, 13px footnote). Section headers are 12px uppercase eyebrows with 1.6px tracking in muted ink. Content uses iOS inset grouped sections: 16px side margin, 26px continuous corner radius, card fill, rows 52px min with 16px padding and inset hairline separators. Buttons are capsules 48px tall, radius 24, 16px/600 label with a 20px icon. Member and event pages open on a fixed black poster with a large cream serif name, a faint 7% cream logo watermark and a row of 60px glass action tiles. Icons look hand-drawn in pencil. No shadows; depth comes from native Liquid Glass tab bars and headers. Copy is short and warm, Title Case for actions.

```css
:root {
  --brand-bg: #FFF2EB;
  --brand-ink: #000000;
  --brand-on-ink: #FFF2EB;
  --brand-muted: rgba(0, 0, 0, 0.62);
  --brand-faint: rgba(0, 0, 0, 0.4);
  --brand-hairline: rgba(0, 0, 0, 0.14);
  --brand-card: rgba(0, 0, 0, 0.045);
  --brand-card-pressed: rgba(0, 0, 0, 0.09);
  --brand-poster-bg: #000000;
  --brand-poster-ink: #FFF2EB;
  --brand-poster-sub: rgba(255, 242, 235, 0.75);
  --brand-watermark: rgba(255, 242, 235, 0.07);
  --brand-font-serif: "Bookman Opti", "Fraunces", "Bookman Old Style", Georgia, serif;
  --brand-font-sans: system-ui, -apple-system, "Inter", sans-serif;
  --brand-margin: 16px;
  --brand-inset: 16px;
  --brand-section-gap: 28px;
  --brand-radius-card: 26px;
  --brand-radius-tile: 20px;
  --brand-radius-action: 18px;
  --brand-radius-pill: 24px;
  --brand-row-min: 52px;
  --brand-pill-min: 48px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --brand-bg: #000000;
    --brand-ink: #FFF2EB;
    --brand-on-ink: #000000;
    --brand-muted: rgba(255, 242, 235, 0.62);
    --brand-faint: rgba(255, 242, 235, 0.4);
    --brand-hairline: rgba(255, 242, 235, 0.16);
    --brand-card: rgba(255, 242, 235, 0.07);
    --brand-card-pressed: rgba(255, 242, 235, 0.13);
  }
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Kinoki or Storiara.
