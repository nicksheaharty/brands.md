---
name: BBC News
slug: bbc-news
url: https://www.bbc.com/news
category: News
tagline: "Reith Serif headlines on white, black BBC blocks, square cards and a red live marker."
updated: 2026-11-16
appStoreId: 364147881
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Black
    hex: "#000000"
    role: BBC blocks, nav text, primary buttons and outlines
  - name: News Red
    hex: "#B80000"
    role: BBC News accent, active nav underline, section markers
  - name: White
    hex: "#FFFFFF"
    role: Page and card background
  - name: Live Red
    hex: "#EB0000"
    role: LIVE labels and the pulsing live dot
  - name: Ink
    hex: "#202224"
    role: Headlines and body text
  - name: Grey 100
    hex: "#E6E8EA"
    role: Dividers, secondary button fill, ad rules
  - name: Grey 700
    hex: "#3A3C3E"
    role: Secondary text, standfirsts on some modules
  - name: Grey 600
    hex: "#545658"
    role: Timestamps, bylines, section labels, pressed button fill
  - name: Grey 400
    hex: "#8A8C8E"
    role: Placeholder text, disabled icons
  - name: Grey 200
    hex: "#D2D4D6"
    role: Input borders, card borders on hover
  - name: Off White
    hex: "#F6F6F6"
    role: Subtle panel and footer background
  - name: Alert Red
    hex: "#E00000"
    role: Breaking banner and error states (approximate role)
fonts:
  display:
    family: "BBC Reith Serif"
    fallback: "Source Serif 4"
    weights: [400, 500, 700]
  body:
    family: "BBC Reith Sans"
    fallback: "Inter"
    weights: [400, 500, 700, 800]
typeScale:
  - { role: Article headline, size: 40, weight: 500, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: Lead card headline, size: 28, weight: 500, lineHeight: 1.14, tracking: "-0.02em" }
  - { role: Card headline, size: 20, weight: 500, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: Article body, size: 18, weight: 400, lineHeight: 1.44, tracking: "-0.02em" }
  - { role: Card summary, size: 16, weight: 400, lineHeight: 1.5, tracking: "-0.02em" }
  - { role: Nav and buttons, size: 14, weight: 500, lineHeight: 1.29, tracking: "0" }
  - { role: Metadata, size: 12, weight: 400, lineHeight: 1.17, tracking: "-0.01em" }
radii: { sm: 0, md: 0, lg: 0, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#F6F6F6"
  text: "#202224"
  muted: "#545658"
  border: "#E6E8EA"
  accent: "#B80000"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: solid
---

# BBC News

## 1. Visual Theme & Atmosphere

BBC News on bbc.com is a calm, white, grid-based news page. The 2023 redesign of the international site moved headlines into BBC Reith Serif, cut colour back to near zero and let photography carry the page. The result reads like a well-set broadsheet front page rendered on screen: square-cornered images, serif headlines in dark ink, small sans metadata, thin grey rules.

What makes it recognisable:

- **The BBC blocks.** Three black squares with white letters sit top left in a slim white header. Nothing else in the chrome competes with them.
- **Serif headlines, sans everything else.** Reith Serif at weight 500 with slight negative tracking for headlines and summaries. Reith Sans for nav, labels, timestamps and buttons.
- **No rounded corners, no shadows.** Cards are just an image, a headline, a summary and a timestamp, separated by whitespace and 1px rules.
- **Red used sparingly.** BBC News red `#B80000` marks the active section and a few accents. A brighter `#EB0000` is reserved for "LIVE" labels.
- **Dense but orderly.** The homepage stacks many stories, but each module follows the same grid and type ramp, so it scans quickly.

Mood words: trusted, measured, clear, public-service, global.

## 2. Color Palette & Roles

Values below were read from the live bbc.com/news stylesheet on 2026-11-16 unless marked approximate.

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | BBC blocks, nav links, primary button text and borders |
| Ink | `#202224` | Headlines and body copy |
| Grey 700 | `#3A3C3E` | Secondary copy, captions |
| Grey 600 | `#545658` | Timestamps, bylines, "Section" labels, pressed button fill |
| Grey 400 | `#8A8C8E` | Placeholders, disabled icons |
| Grey 200 | `#D2D4D6` | Input borders |
| Grey 100 | `#E6E8EA` | Dividers, secondary button fill, ad separators |
| Off White | `#F6F6F6` | Footer and subtle panels |
| White | `#FFFFFF` | Page background |
| News Red | `#B80000` | Active nav underline (4px), side marker on active menu item (8px), accents |
| Live Red | `#EB0000` | "LIVE" label text and live dot |
| Alert Red | `#E00000` | Breaking news strip, errors (approximate role) |

### Semantic colors

| State | Value | Use |
|---|---|---|
| Live | `#EB0000` text, uppercase, bold | Live page labels, live card prefix |
| Breaking | white text on `#B80000` or `#E00000` | Breaking news banner (approximate) |
| Focus | 2px solid `#000000` outline | Keyboard focus on links and buttons |
| Visited | no change | The site does not dim visited headlines |

### Dark mode

The website ships light only. The BBC News app has a dark theme that inverts to near-black backgrounds (around `#141414`, approximate) with white text and the same red accents. If you build dark mode, keep the BBC blocks white on black and keep live red unchanged.

## 3. Typography

**Families:** BBC Reith Sans and BBC Reith Serif, the BBC's own typefaces introduced across BBC products from 2018. They replaced Helvetica and Gill Sans in the corporate identity. The CSS also loads metric-matched fallback faces (`BBCReithSans-fallback`, `BBCReithSerif-fallback`) to prevent layout shift.

**Licensing:** proprietary to the BBC. Do not download or reuse the font files. Use **Source Serif 4** for Reith Serif and **Inter** for Reith Sans.

```css
--font-serif: "BBC Reith Serif", "Source Serif 4", Georgia, serif;
--font-sans: "BBC Reith Sans", "Inter", Helvetica, Arial, sans-serif;
```

### Scale (desktop)

| Role | Family | Size / line | Weight | Tracking |
|---|---|---|---|---|
| Article headline | Serif | 40 / 48px (approximate) | 500 | -0.02em |
| Lead card headline | Serif | 28 / 32px | 500 | -0.56px |
| Module title | Serif | 24 / 28px | 500 | -0.24px |
| Card headline | Serif | 20 / 24px | 500 | -0.4px |
| Article body | Serif | 18 / 26px | 400 | -0.36px |
| Card summary | Serif | 16 / 24px | 400 | -0.32px |
| Nav, buttons | Sans | 14-16 / 18px | 500 | 0 |
| Section label | Sans | 14 / 18px | 800, uppercase | 0.7px |
| Timestamp, byline | Sans | 12 / 14-16px | 400 | -0.12px |

Mobile: lead headline drops to 24/28px, card headlines to 18/22px, article body to 16/24px.

### Rules

- Sentence case everywhere: headlines, nav, buttons.
- Headlines have no full stop. Single quotes for quoted speech in headlines ("'We will not leave,' says mayor"), a BBC style convention.
- Timestamps are relative ("2 hrs ago", "35 mins ago") followed by a section name in the same grey, separated by a thin vertical bar.
- Underline links inside body copy; card headlines are not underlined until hover.
- Numbers use lining figures. Do not set headlines in bold 700; 500 is the house weight.

## 4. Logo & Brand Mark

The BBC logo is three equal squares, each holding one white letter, with a gap of one quarter of a square between them (viewBox 112 x 32: squares are 32 units, gaps 8). The 2021 refresh redrew the letters in a custom cut related to Reith Sans and slightly widened the spacing. "NEWS" appears as a separate wordmark in heavy Reith Sans to the right of the blocks.

- **Color versions:** black blocks with white letters on white (default), white blocks with black letters on black or on News Red `#B80000`. The BBC News channel sting uses white on red.
- **Clear space:** at least half a block on every side.
- **Minimum size:** 72px wide for the blocks on screen.
- **App icon:** white blocks on a black square.

Misuse:

- Do not recolour the blocks red, or set each block a different colour.
- Do not change the gaps, round the corners or add shadows.
- Do not rebuild the letters in another font.
- Do not lock up the blocks with taglines or other brand names.

## 5. Components

### Header and navigation

- Height around 56px on desktop. White background, 1px `#E6E8EA` bottom rule.
- BBC blocks centred on desktop (30px tall), left on mobile. Search, sign in and menu at the edges.
- Section nav row below: Home, News, Sport, Business, Technology, Health, Culture, Arts, Travel, Earth, Audio, Video, Live, Documentaries. A second row on News pages lists regions ("US & Canada", "UK", "Africa"...) plus "BBC InDepth" and "BBC Verify". 14px Reith Sans 500 black, padding 12px 8px.
- Active item: text weight 700 plus a 4px `#B80000` bar along the bottom edge (`::after`, full width).
- Mobile drawer: full-height white panel, rows 44px tall with 13px 14px padding, 16px/500 text. The open row shows an 8px red bar on its left edge.

### Story cards

The homepage is built from one card type at several sizes.

- Image first, 16:9, no radius, no border.
- Optional "LIVE" prefix in `#EB0000`, 700, uppercase, with a small pulsing dot.
- Headline: Reith Serif 500, 20px (standard) or 28px (lead), ink `#202224`, underline on hover.
- Summary: Reith Serif 400, 16/24px, `#202224`, 2-4 lines.
- Meta row: "3 hrs ago | World" in 12px sans `#545658`.
- Gaps: 8px image to headline, 8px headline to summary, 12px summary to meta.

```css
.bbc-card { display: grid; gap: 8px; color: #202224; }
.bbc-card img { aspect-ratio: 16/9; width: 100%; object-fit: cover; border-radius: 0; }
.bbc-card h3 { font: 500 20px/24px var(--font-serif); letter-spacing: -0.4px; margin: 0; }
.bbc-card:hover h3 { text-decoration: underline; }
.bbc-card .meta { font: 400 12px/14px var(--font-sans); color: #545658; }
```

### Buttons

| Variant | Background | Text | Border | Padding |
|---|---|---|---|---|
| Primary | `#000000` | `#FFFFFF` 16px/500 | 2px solid `#000000` | 6px 12px |
| Secondary | `#E6E8EA` | `#202224` 14px/500 | none | 6px 12px, 44px row height |
| Outline | `#FFFFFF` | `#000000` | 2px solid `#000000` | 8px 12px |
| Text link | none | `#000000` underlined | none | 0 |

States: hover darkens the fill to `#3A3C3E`; active fills `#545658` with white text and a matching border; focus adds a 2px black outline offset by 2px. Corners are square on every variant.

### Article page

- Single centred column around 640px for text, images can run to 976px.
- Headline (Reith Serif 500, about 40px) directly above a 16:9 lead image.
- Byline block: author name in 14px sans 700, role and "BBC News" below in 14px `#545658`, timestamp above.
- Body: Reith Serif 18/26px, paragraphs separated by 16px. Subheads in Reith Sans 700 at 20px.
- Pull quotes: Reith Serif 500 at 24px, no quotation-mark ornament, set in ink with a short black rule above (approximate).
- Image captions: 14px sans `#545658` under the image, with the credit ("Getty Images") in uppercase 12px.
- Related links at the end: plain list of headlines with 1px `#E6E8EA` separators.

### Live page

- Header strip with "LIVE" in `#EB0000` and the page title in serif.
- "Summary" box at the top with bullet points in 16px serif.
- Posts in a vertical timeline: timestamp in 14px sans 700 on the left or above, post headline 20px serif 500, body 16px serif. A 1px `#E6E8EA` rule separates posts.
- "Latest" refresh button: black, sticky at the top of the feed.

### Inputs

Search field: height 44px, white, 1px `#D2D4D6` border, square corners, text 16px sans `#202224`, padding 13px. Focus: 2px black border.

### Newsletters

Sign-up blocks use a light `#F6F6F6` panel, a serif 24px title, a 16px serif description and a black primary button. Email field matches the search field.

### Badges and labels

Section labels above a module ("More to explore", "Most read") use Reith Sans 800, 14px, uppercase, 0.7px tracking, black. Most read lists number stories with large serif numerals (around 28px, `#B80000` or ink, approximate).

### Video and audio

Play badge on images: a small black square with a white triangle and the duration ("2:31") in 12px white sans, set at the lower-left corner of the image.

## 6. Layout & Spacing

- **Breakpoints (from the CSS):** 400, 600, 768, 1008 and 1280px.
- **Max content width:** about 1280px with 16px gutters on mobile and 24-32px on desktop.
- **Grid:** 12 columns on desktop. Common homepage module: one lead card spanning 6 columns, two stacked medium cards in 3 columns each side.
- **Spacing:** 4px base. Use 8, 12, 16, 24, 32 and 48px. Modules are separated by 32-48px plus a 1px `#E6E8EA` rule.
- **Density:** high. Many stories per screen, each in a predictable slot.

## 7. Depth, Elevation & Motion

- No shadows on cards, header or menus. Separation comes from whitespace and 1px rules.
- Dropdowns and the mobile drawer are flat white panels; the drawer covers the page.
- Motion is minimal: underline on hover, 150-200ms colour change on buttons, a slow pulse on the live dot.
- Carousels slide with a short ease-out (about 300ms, approximate).
- Respect `prefers-reduced-motion` by stopping the live pulse.

## 8. Iconography & Imagery

- **Icons:** simple solid glyphs from the BBC GEL icon set, 16-24px, black. Search, menu, user, play, chevrons.
- **Photography:** wire and staff photography, full colour, cropped 16:9. No filters, no duotones, no rounded corners.
- **Video:** thumbnails carry the play badge and duration.
- **Graphics:** maps and charts use a restrained palette with BBC News red as the highlight colour and grey for context.

## 9. Voice & Microcopy

Neutral, direct and precise. UI copy is short and functional.

- Headlines: present tense, sentence case, no full stop.
- Timestamps: "2 hrs ago", "1 day ago", then date "16 Nov 2026" for older items.
- Buttons: "Sign in", "Register", "Search news", "Watch Live", "Listen".
- Labels: "LIVE", "Most read", "More to explore", "Watch", "Analysis".
- Live page summary heading: "Summary".

## 10. Do's and Don'ts

**Do**

- Use Reith Serif (or Source Serif 4) at 500 for headlines and 400 for summaries.
- Keep the page white with ink `#202224` text and square image corners.
- Mark live content with uppercase bold `#EB0000` text and a small dot.
- Use 1px `#E6E8EA` rules and whitespace to separate modules.
- Keep the BBC blocks black on white, top centre on desktop.

**Don't**

- Don't round corners or add drop shadows to cards.
- Don't use red for large fills, backgrounds or headline text.
- Don't set headlines in bold 700 sans.
- Don't add gradient overlays on photos.
- Don't write teasing or exaggerated headlines; keep the tone factual.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of BBC News on bbc.com. White page, text in ink `#202224`, metadata in `#545658`. Headlines in `"BBC Reith Serif", "Source Serif 4", Georgia, serif` at weight 500 with -0.02em tracking (lead 28/32px, standard 20/24px); summaries in the same serif at 16/24px weight 400. Nav, labels, timestamps and buttons in `"BBC Reith Sans", Inter, Arial, sans-serif` at 12-16px, weight 400-500. Header: white, black BBC blocks logo centred, section nav underneath, active item gets a 4px `#B80000` bottom bar. Cards are an image (16:9, square corners) plus headline, summary and a "2 hrs ago | World" meta line; no borders, no shadows, underline on hover. Use `#EB0000` uppercase bold for "LIVE". Buttons are square: black fill with white text, or `#E6E8EA` fill with dark text. 12-column grid up to 1280px, 4px spacing base, 1px `#E6E8EA` rules between modules.

```css
:root {
  --brand-black: #000000;
  --brand-ink: #202224;
  --brand-news-red: #B80000;
  --brand-live-red: #EB0000;
  --brand-alert-red: #E00000;
  --brand-grey-700: #3A3C3E;
  --brand-grey-600: #545658;
  --brand-grey-400: #8A8C8E;
  --brand-grey-200: #D2D4D6;
  --brand-grey-100: #E6E8EA;
  --brand-surface: #F6F6F6;
  --brand-bg: #FFFFFF;
  --brand-font-serif: "BBC Reith Serif", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "BBC Reith Sans", "Inter", Helvetica, Arial, sans-serif;
  --brand-radius: 0;
  --brand-rule: 1px solid #E6E8EA;
  --brand-nav-active: inset 0 -4px 0 #B80000;
  --brand-focus: 2px solid #000000;
  --brand-max-width: 1280px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by the BBC.
