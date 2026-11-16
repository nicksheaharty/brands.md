---
name: Google
slug: google
url: https://google.com
category: Productivity
tagline: "White space, one search box and four primary colours: Material 3 at its plainest."
updated: 2026-11-16
appStoreId: 284815942
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Google Blue
    hex: "#4285F4"
    role: Logo blue, brand illustration
  - name: Google Red
    hex: "#EA4335"
    role: Logo red, brand illustration
  - name: Google Yellow
    hex: "#FBBC05"
    role: Logo yellow, brand illustration
  - name: Google Green
    hex: "#34A853"
    role: Logo green, brand illustration
  - name: Primary Blue
    hex: "#0B57D0"
    role: Material 3 primary, filled buttons, focus, links in new surfaces
  - name: Link Blue
    hex: "#1A0DAB"
    role: Search result title links (approximate, classic value)
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Text
    hex: "#1F1F1F"
    role: Primary text (Material on-surface)
  - name: Text Secondary
    hex: "#444746"
    role: Secondary text, icons
  - name: Search Text
    hex: "#16171A"
    role: Homepage body and search text
  - name: Border
    hex: "#DADCE0"
    role: Search box outline, dividers
  - name: Outline Variant
    hex: "#C4C7C5"
    role: Quiet outlines, chips
  - name: Surface
    hex: "#F1F3F4"
    role: Hover fills, footer band, grey buttons
  - name: Light Blue Container
    hex: "#D3E3FD"
    role: Selected chips, tonal buttons
  - name: Visited Purple
    hex: "#681DA8"
    role: Visited links in results
  - name: Error
    hex: "#B3261E"
    role: Errors, destructive text
fonts:
  display:
    family: "Google Sans"
    fallback: "Google Sans"
    weights: [400, 500]
  body:
    family: "Roboto"
    fallback: "Roboto"
    weights: [400, 500]
typeScale:
  - { role: Display, size: 44, weight: 400, lineHeight: 1.18, tracking: "0" }
  - { role: Headline, size: 28, weight: 400, lineHeight: 1.29, tracking: "0" }
  - { role: Result Title, size: 20, weight: 400, lineHeight: 1.3, tracking: "0" }
  - { role: Search Input, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Body, size: 14, weight: 400, lineHeight: 1.58, tracking: "0" }
  - { role: Label, size: 14, weight: 500, lineHeight: 1.43, tracking: "0.01em" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48]
shadows:
  - { name: Search Box, value: "0px 3px 10px 0px rgba(31,31,31,0.08)" }
  - { name: Search Box Focus, value: "0 2px 8px 1px rgba(64,60,67,0.24)" }
  - { name: Menu, value: "0px 4px 12px rgba(60,64,67,0.24)" }
preview:
  bg: "#FFFFFF"
  surface: "#F1F3F4"
  text: "#1F1F1F"
  muted: "#444746"
  border: "#DADCE0"
  accent: "#0B57D0"
  accentText: "#FFFFFF"
  radius: 20
  buttonStyle: pill
---

# Google

## 1. Visual Theme & Atmosphere

Google's homepage is the plainest page on the internet that everyone recognises. A white canvas, the four-colour "Google" logotype in the middle, one rounded search box under it, and almost nothing else: a small account bar top right (Gmail, Images, the apps grid, a profile avatar or "Sign in") and a grey footer band with About, Advertising, Privacy and Settings.

The rest of Google (search results, Gmail, Drive, Calendar) is built on Material Design 3, Google's own design system. Surfaces are white or very lightly tinted, primary actions are a deep blue (`#0B57D0`), shapes are soft and rounded, and the four brand colours are kept almost entirely for the logo, the "G" and product icons.

What makes it recognisable:

- **Emptiness.** The homepage is mostly white space. One input owns the page.
- **The rounded search box.** A 50px-tall pill with a 26px radius, a thin `#DADCE0` outline and a faint shadow that deepens on hover or focus.
- **Four colours, used sparingly.** Blue, red, yellow, green appear in the logo and product icons, not in UI chrome.
- **Google Sans.** Geometric and friendly for headings, buttons and the search box; Roboto for dense body text.
- **Quiet chrome.** Icons are grey `#444746`, text is near-black `#1F1F1F`, borders are hairlines.

Mood words: neutral, fast, utilitarian, friendly, familiar.

## 2. Color Palette & Roles

Values were read from google.com's inline CSS and the Material 3 tokens used across Google products on 2026-11-16.

| Name | Hex | Role |
|---|---|---|
| Google Blue | `#4285F4` | Logo, "G", brand illustration |
| Google Red | `#EA4335` | Logo, brand illustration |
| Google Yellow | `#FBBC05` | Logo, brand illustration |
| Google Green | `#34A853` | Logo, brand illustration |
| Primary (M3) | `#0B57D0` | Filled buttons, focused inputs, links in M3 surfaces |
| Classic Blue | `#1A73E8` | Older Google blue, still in some buttons and links |
| Result link | `#1A0DAB` | Search result titles (approximate) |
| Visited | `#681DA8` | Visited links |
| Text | `#1F1F1F` | Primary text |
| Search text | `#16171A` | Homepage text and input (observed CSS variable) |
| Text Secondary | `#444746` | Secondary text, icons |
| Muted | `#4E5059` | Footer links on the homepage |
| Border | `#DADCE0` | Search box outline, dividers |
| Outline Variant | `#C4C7C5` | Chips, quiet outlines |
| Surface Grey | `#F1F3F4` | Hover, grey buttons, footer band (approximate) |
| Container Blue | `#D3E3FD` | Tonal buttons, selected chips |
| Container Light | `#C2E7FF` | Secondary container |
| White | `#FFFFFF` | Page background |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#B3261E` | Errors (M3 error) |
| Red alert | `#D93025` | Inline warnings in older surfaces |
| Success | `#188038` (approximate) | Confirmations |
| Warning | `#FDD663` on dark, `#F9AB00` on light (approximate) | Warnings |

### Dark mode

Google Search has a dark theme (toggle in Settings: "Dark theme: Off"). It uses `#1F1F1F` or `#131314` page, `#E3E3E3` text, `#C4C7C5` secondary, `#A8C7FA` primary, and `#303134` for the search box (approximate). The logo switches to a lighter-tinted version.

## 3. Typography

**Families:** Google Sans for display text, buttons, the search input and navigation; Roboto for dense body text. Search results now use Google Sans Text in many places. All are on Google Fonts (Google Sans, Google Sans Flex, Google Sans Code and Roboto are listed there).

```css
font-family: "Google Sans", Roboto, Arial, sans-serif;   /* search box, buttons, headings */
font-family: Roboto, Arial, sans-serif;                   /* body text */
```

**Weights:** 400 almost everywhere, 500 for buttons, tabs and emphasis. Google rarely goes to 700 in UI.

### Scale

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Display | 44px | 400 Google Sans | 52px | Marketing, doodle headings |
| Headline | 28px | 400 Google Sans | 36px | Knowledge panel titles |
| Title | 22px | 400 Google Sans | 28px | Section titles |
| Result Title | 20px | 400 | 26px | Search result links |
| Search Input | 16px | 400 Google Sans | 24px (box 50px) | Homepage search |
| Body | 14px | 400 Roboto | 22px | Snippets, body |
| Label | 14px | 500 Google Sans | 20px | Buttons, tabs |
| Caption | 12px | 400 | 16px | URLs, footers, meta |

### Rules

- Sentence case everywhere: "Google Search", "I'm Feeling Lucky", "Sign in".
- No all-caps buttons (Material 2's caps are gone).
- Tabular numbers in data like stocks and sports scores.
- Keep tracking at 0; Google Sans is already open.

## 4. Logo & Brand Mark

The logotype is "Google" in a custom geometric sans (redrawn in 2015), letters coloured blue, red, yellow, blue, green, red. The compact mark is the "G" in four segments: red top, yellow left, green bottom, blue right with the crossbar. Since 2025 Google has also used a version of the "G" with the four colours blended as soft gradients; the flat four-colour "G" remains common.

- **Colour versions:** full colour on white (primary); white single-colour on dark or photo backgrounds; grey `#5F6368` for single-ink.
- **Clear space:** at least half the height of the capital "G" on all sides (approximate).
- **Minimum size:** about 60px wide for the logotype, 16px for the "G" (approximate).
- **App icon:** the "G" centred on white.
- **Doodles** replace the logo on the homepage for events; they are illustrations, not logo variants for anyone else to make.

Misuse:

- Don't reorder or recolour the letters.
- Don't set "Google" in Google Sans or another font as a logo substitute.
- Don't add shadows, outlines or 3D effects.
- Don't place the full-colour logo on mid-tone backgrounds where yellow disappears.

## 5. Components

### Search box (signature)

```css
.g-search {
  display: flex;
  align-items: center;
  min-height: 50px;
  max-width: 584px;            /* classic homepage width; newer layout widens to ~690px */
  margin: 0 auto;
  padding: 0 8px 0 16px;
  background: #FFFFFF;
  border: 1px solid #DADCE0;
  border-radius: 26px;
  box-shadow: 0px 3px 10px 0px rgba(31,31,31,0.08);
  font: 400 16px/24px "Google Sans", Roboto, Arial, sans-serif;
  color: #16171A;
}
.g-search:hover,
.g-search:focus-within {
  box-shadow: 0 2px 8px 1px rgba(64,60,67,0.24);
  border-color: transparent;
}
```

Inside: a grey magnifier on the left (20px), the input, then on the right a clear "x", the microphone, Google Lens camera icon, and an "AI Mode" pill button. When focused, the suggestion list opens as part of the same white panel, with the bottom corners rounding and the top becoming square-cornered where it joins.

### Buttons

| Variant | Background | Text | Border | Radius | Height |
|---|---|---|---|---|---|
| Filled (M3) | `#0B57D0` | `#FFFFFF` 500 14px | none | 20px (pill) | 40px |
| Tonal | `#D3E3FD` | `#041E49` 500 | none | 20px | 40px |
| Outlined | transparent | `#0B57D0` 500 | 1px `#747775` | 20px | 40px |
| Text | transparent | `#0B57D0` 500 | none | 20px | 40px |
| Homepage grey | `#F8F9FA` | `#3C4043` 14px | 1px `#F8F9FA` | 8px (approx.) | 36px |
| Sign in (account bar) | `#0B57D0` | `#FFFFFF` 500 | none | 20px (approx.) | 40px |

States: hover adds an 8% state layer of the text colour; pressed 12%; focus shows a 2-3px `#0B57D0` outline offset 2px; disabled uses `rgba(31,31,31,0.12)` fill with 38% text.

### Account bar

Top right, 60-64px tall. Text links "Gmail" and "Images" (13px, `#1F1F1F` at reduced opacity), the 3x3 dots apps grid icon (24px in a 40px round hover target), and the avatar (32px circle). Hover on any icon shows a `rgba(60,64,67,0.08)` circle.

### Chips and filters

Search results use a row of filter chips under the box ("All", "Images", "Videos", "News", "Shopping", "AI Mode"). Chips are 32-36px tall, radius 8px or full pill depending on surface, `1px #C4C7C5` outline or no border with a tint fill; the selected chip is bold with an underline (tabs) or filled `#D3E3FD`.

### Results

- URL breadcrumb line first: favicon in a 28px circle, site name 14px, URL 12px `#4D5156`.
- Title 20px `#1A0DAB` (visited `#681DA8`), underline on hover.
- Snippet 14px, line height 22px, `#474747` (approximate).
- Results column about 652px wide with a 180px left offset on desktop.
- Cards for knowledge panels and AI Overviews: white, 1px `#DADCE0` or no border, radius 16-20px, padding 16-20px.

### Menus and dialogs

- Menus: white, radius 4-8px, shadow `0px 4px 12px rgba(60,64,67,0.24)`, items 48px tall, 14px text.
- Dialogs (M3): radius 28px, surface `#FFFFFF` or `#F0F4F9`, title 24px Google Sans 400, buttons as text buttons right aligned.

### Footer

A grey band (`#F2F2F2`, approximate) at the bottom of the homepage. Country on the first line, then links in two groups: About, Advertising, Business, How Search works on the left; Privacy, Terms, Settings on the right. 14px `#4E5059`.

## 6. Layout & Spacing

- **Homepage:** vertical stack centred horizontally. Logo about 272x92px, top margin around 20-25% of the viewport. Search box 584-690px wide. Buttons 16-18px below the box.
- **Results page:** header with small logo (92x30px) left and search box beside it, results column left-aligned at about 180px from the left edge, right column for knowledge panels from about 1000px.
- **Spacing:** 4px base. Common gaps 8, 12, 16, 20, 24, 32.
- **Breakpoints (approximate):** 600px (mobile), 960px, 1280px.
- **Density:** low on the homepage, moderate on results, high in Gmail and Drive tables.

## 7. Depth, Elevation & Motion

- Flat white surfaces. Elevation is rare and soft.
- Search box: `0px 3px 10px 0px rgba(31,31,31,0.08)` at rest, `0 2px 8px 1px rgba(64,60,67,0.24)` on hover or focus.
- Menus and popups: `0px 4px 12px rgba(60,64,67,0.24)`.
- Material 3 tonal surfaces (`#F0F4F9`, `#E9EEF6`) replace shadows for raised panels in apps.
- Motion: quick fades and expands, 150-250ms. Material 3 standard easing `cubic-bezier(0.2, 0, 0, 1)`; emphasised `cubic-bezier(0.05, 0.7, 0.1, 1)`.
- Ripple: a circular state layer spreading from the touch point on buttons and list items.

## 8. Iconography & Imagery

- Material Symbols: outlined, 24px, 2px-equivalent stroke, rounded joins, grey `#444746`. Filled variants mark selected states.
- Product icons (Gmail, Drive, Maps) use the four brand colours in flat geometric shapes.
- Imagery is minimal on core surfaces. Doodles bring illustration to the homepage; marketing pages use bright flat illustration and product screenshots.

## 9. Voice & Microcopy

Plain, short, helpful. Sentence case.

- Buttons: "Google Search", "I'm Feeling Lucky", "Sign in", "AI Mode"
- Placeholder: "Search Google or type a URL" (Chrome new tab); the homepage box shows no placeholder or a short prompt
- Footer: "About", "Advertising", "Business", "How Search works", "Privacy", "Terms", "Settings"
- Feedback: "Send feedback", "Report inappropriate predictions"
- Empty result: "Your search did not match any documents."

## 10. Do's and Don'ts

**Do**

- Give one element the whole page and let white space do the work.
- Use Google Sans for inputs, buttons and headings, Roboto for body.
- Use `#0B57D0` for primary actions and keep the four brand colours for marks.
- Use pill buttons (20px radius) and 26px-radius search fields.
- Use grey outlined icons and hairline `#DADCE0` borders.
- Use soft, short shadows only on floating things.

**Don't**

- Don't paint UI chrome in red, yellow and green.
- Don't use heavy weights or all-caps labels.
- Don't use dark, hard shadows or thick borders.
- Don't crowd the homepage with promos or cards.
- Don't recreate the logo with live text.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Google Search. White page, text `#1F1F1F`, secondary text and icons `#444746`, borders `#DADCE0`. Fonts: "Google Sans" for the search input, buttons and headings, Roboto for body text; weights 400 and 500 only. Centre a 272px-wide four-colour Google-style logo (blue `#4285F4`, red `#EA4335`, yellow `#FBBC05`, green `#34A853`) about a quarter of the way down, then a 50px-tall search box up to 584-690px wide with 26px radius, 1px `#DADCE0` border and shadow `0px 3px 10px rgba(31,31,31,0.08)` that becomes `0 2px 8px 1px rgba(64,60,67,0.24)` on focus; magnifier icon left, mic and camera icons right. Below it two grey buttons ("Google Search", "I'm Feeling Lucky") on `#F8F9FA` with `#3C4043` 14px text and 8px radius. Top-right account bar with "Gmail", "Images", a 3x3 apps icon and a pill "Sign in" button in `#0B57D0`. Grey footer band with small links. Use Material Symbols outlined icons, Material 3 easing `cubic-bezier(0.2,0,0,1)`, and plain sentence-case copy.

```css
:root {
  --brand-blue: #4285F4;
  --brand-red: #EA4335;
  --brand-yellow: #FBBC05;
  --brand-green: #34A853;
  --brand-primary: #0B57D0;
  --brand-primary-classic: #1A73E8;
  --brand-container: #D3E3FD;
  --brand-on-container: #041E49;
  --brand-link: #1A0DAB;
  --brand-visited: #681DA8;
  --brand-text: #1F1F1F;
  --brand-text-2: #444746;
  --brand-search-text: #16171A;
  --brand-border: #DADCE0;
  --brand-outline: #747775;
  --brand-outline-variant: #C4C7C5;
  --brand-surface: #F1F3F4;
  --brand-surface-tonal: #F0F4F9;
  --brand-bg: #FFFFFF;
  --brand-error: #B3261E;
  --brand-font-display: "Google Sans", Roboto, Arial, sans-serif;
  --brand-font-body: Roboto, Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius-md: 8px;
  --brand-radius-search: 26px;
  --brand-radius-pill: 9999px;
  --brand-radius-dialog: 28px;
  --brand-shadow-search: 0px 3px 10px 0px rgba(31,31,31,0.08);
  --brand-shadow-search-focus: 0 2px 8px 1px rgba(64,60,67,0.24);
  --brand-shadow-menu: 0px 4px 12px rgba(60,64,67,0.24);
  --brand-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

---

Values are observed from the public product and published brand material; this file is an unofficial reference and is not affiliated with or endorsed by Google.
