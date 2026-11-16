---
name: Electronic Arts
shortName: EA
slug: electronic-arts
url: https://ea.com
category: Gaming
tagline: "Midnight navy canvas, full-bleed key art, bold EA Display type and electric blue CTAs."
updated: 2026-11-16
logoBackground: "#00071F"
theme: dark
colors:
  - name: Midnight
    hex: "#00071F"
    role: Page background (neutral 1000)
  - name: EA Blue
    hex: "#255AF6"
    role: Brand color, solid buttons, brand text
  - name: White Text
    hex: "#EAEAEC"
    role: Default text on dark (neutral 50)
  - name: Neon Green
    hex: "#62FF85"
    role: Secondary accent, highlights
  - name: Volt
    hex: "#EAFF69"
    role: Tertiary accent, tags and promos
  - name: Navy Surface
    hex: "#151C32"
    role: Cards and raised panels (neutral 950)
  - name: Blue Hover
    hex: "#1E4ACA"
    role: Solid button hover (primary 600)
  - name: Slate 900
    hex: "#2B3044"
    role: Weak borders, dividers
  - name: Slate 700
    hex: "#555A6A"
    role: Surface 200, chips
  - name: Muted Text
    hex: "#AAACB4"
    role: Secondary text (neutral 300)
  - name: Placeholder
    hex: "#9598A2"
    role: Placeholder and disabled text (neutral 400)
  - name: Link
    hex: "#9FB7EA"
    role: Links on dark (link 200)
  - name: Focus
    hex: "#6E94DF"
    role: Focus ring
  - name: Error
    hex: "#F04438"
    role: Errors (error 500)
fonts:
  display:
    family: "Electronic Arts Display"
    fallback: "Inter Tight"
    weights: [700]
  body:
    family: "Electronic Arts Text"
    fallback: "Inter"
    weights: [300, 400, 700]
typeScale:
  - { role: Display 1, size: 50, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Display 2, size: 44, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Display 3, size: 38, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Headline 1, size: 36, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Headline 3, size: 24, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Headline 5, size: 20, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Body 1, size: 18, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Body 2, size: 16, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 4, md: 6, lg: 8, pill: 999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
shadows:
  - { name: Raised, value: "0 8px 16px rgba(25,37,55,0.25)" }
preview:
  bg: "#00071F"
  surface: "#151C32"
  text: "#EAEAEC"
  muted: "#AAACB4"
  border: "#2B3044"
  accent: "#255AF6"
  accentText: "#EAEAEC"
  radius: 6
  buttonStyle: solid
---

# Electronic Arts

## 1. Visual Theme & Atmosphere

EA.com is a publisher hub: it sells and promotes franchises like EA SPORTS FC, Madden NFL, Apex Legends, Battlefield and The Sims, and links out to each game's own site. The corporate shell is dark, calm and modern, and it lets the game key art do the shouting.

What makes it recognisable:

- **Midnight navy, not black.** The `ea-brand-dark` theme sets the page to `#00071F`, a deep blue-black, with cards on `#151C32`. Text is a soft white `#EAEAEC`.
- **One electric blue.** EA Blue `#255AF6` fills solid buttons and brand text. The rest of the chrome stays neutral.
- **Full-bleed key art.** Each franchise gets a wide hero or tile with official art, the game logo as an image on top, and one or two short buttons.
- **EA's own typefaces.** Electronic Arts Display (bold, wide-set, used for headlines) and Electronic Arts Text (UI and body) give the site a clean, geometric look.
- **Neon accents for promos.** Secondary green `#62FF85` and a volt yellow `#EAFF69` appear in tags, highlights and EA Play moments, never as large fills.
- **The "Drop" design system.** Tokens are named `--drop-*`: 12-step neutral, primary, secondary, tertiary, success, warning, error and link ramps.

Mood words: confident, cinematic, sporty, clean, nocturnal.

## 2. Color Palette & Roles

Values come from the `ea-brand-dark` token block on ea.com (RGB triplets converted to hex).

| Name | Token | Hex | Role |
|---|---|---|---|
| Midnight | neutral-1000 | `#00071F` | Page background |
| Navy Surface | neutral-950 | `#151C32` | Cards, panels (background 50/100) |
| Slate 900 | neutral-900 | `#2B3044` | Weak borders, dividers |
| Slate 800 | neutral-800 | `#404557` | Medium borders, hover borders |
| Slate 700 | neutral-700 | `#555A6A` | Background 200, chips |
| Slate 600 | neutral-600 | `#6A6E7C` | Disabled fills |
| Placeholder | neutral-400 | `#9598A2` | Placeholder, disabled text |
| Muted Text | neutral-300 | `#AAACB4` | Weak text, captions |
| Light 200 | neutral-200 | `#BFC1C7` | Disabled button text |
| Light 100 | neutral-100 | `#D5D6DA` | Light chips |
| White Text | neutral-50 | `#EAEAEC` | Default text, text on brand |
| EA Blue | primary-500 | `#255AF6` | Brand fill, solid buttons |
| Blue 600 | primary-600 | `#1E4ACA` | Solid button hover |
| Blue 700 | primary-700 | `#17399D` | Pressed, focused fill |
| Blue 300 | primary-300 | `#6D90F9` | Selected borders |
| Blue 100 | primary-100 | `#BBCCFC` | Light blue tints |
| Neon Green | secondary-500 | `#62FF85` | Highlights |
| Volt | tertiary-500 | `#EAFF69` | Promo tags, highlights |
| Link | link-200 | `#9FB7EA` | Links |
| Link hover | link-100 | `#CFDBF4` | Link hover |
| Focus | focus-500 | `#6E94DF` | Focus ring |

### Semantic colors

| State | Hex | Use |
|---|---|---|
| Error | `#F04438` (500), `#EC3022` (600) | Error borders and text |
| Error fill (dark) | `#912018` (900) | Error banners |
| Success | `#12B76A` (success 500) | Success messages |
| Warning | `#FDB022` (warning 500) | Warnings |

### Light theme

An `ea-brand-light` theme exists for some pages and components: white `#FFFFFF` backgrounds, `#F8F8FA` and `#EAEAEC` surfaces, text near `#00071F`, the same EA Blue for buttons. Default to dark.

## 3. Typography

**Families:** `electronicartsdisplay` (Light 300, Regular 400, Bold 700) and `electronicartstext` (Light, Regular, Bold), self-hosted from `/fonts/ElectronicArts/`. They are proprietary. Free stand-ins: **Inter Tight** 700 for display and **Inter** for text.

```css
--display-font-family: var(--locale-font-family, electronicartsdisplay, sans-serif);
--text-font-family: var(--locale-font-family, electronicartstext, sans-serif);
```

### Scale (desktop XL tokens)

| Role | Size XL | Size LG | Weight | Line height |
|---|---|---|---|---|
| Display 1 | 50px | 42px | 700 | 120% |
| Display 2 | 44px | 38px | 700 | 120% |
| Display 3 | 38px | 34px | 700 | 120% |
| Headline 1 | 36px | 28px | 700 | 120% |
| Headline 2 | 30px | 24px | 700 | 120% |
| Headline 3 | 24px | 22px | 700 | 120% |
| Headline 4 | 22px | 20px | 700 | 120% |
| Headline 5 | 20px | 18px | 700 | 120% |
| Body 1 | 18px | 18px | 400 | 140% |
| Body 2 | 16px | 16px | 400 | 140% |
| Button | 14-16px | | 700 | 100% |

Letter spacing is 0 throughout. Mobile sizes step down one tier (approximate).

### Rules

- Headlines are bold and short. Section titles are sentence case ("Casino Heist is here"); franchise campaign lines sometimes run in all caps as the game's own art direction ("HACK THE FIGHT IN APEX LEGENDS").
- Buttons are bold (700) with line height 100%.
- Keep trademark symbols (™, ®) on game names as the site does.

## 4. Logo & Brand Mark

The mark is the "EA" monogram cut out of a solid circle: a stylised E (three bars) and an A built from a triangle with a crossbar, both slanting forward. The full logo pairs the circle with the words "Electronic Arts".

- **Primary on dark:** white circle with the letters cut through to the background, wordmark in white (as in `logo.svg`).
- **On light:** the same in black or midnight.
- **Clear space:** at least half the circle's diameter on every side (approximate).
- **Minimum size:** circle about 24px on screen (approximate).
- **Franchise logos** (EA SPORTS, Apex Legends, Battlefield) are separate marks; do not merge them with the EA circle.

Misuse:

- Do not fill the circle with EA Blue or gradients.
- Do not outline the circle or add drop shadows.
- Do not set "Electronic Arts" in another typeface next to the mark.
- Do not skew or rotate the mark.

## 5. Components

### Buttons

Drop buttons come in solid, outline and text styles. Radius is small: 4px (sm), 6px (md), 8px (lg).

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Solid | `#255AF6` | `#EAEAEC` | none | `#1E4ACA` |
| Outline | transparent | `#EAEAEC` | 1px `#404557` | white at about 10% |
| Text | transparent | `#EAEAEC` | none | black alpha overlay |
| On art | white | `#00071F` | none | `#D5D6DA` (approximate) |

States: pressed solid `#17399D`; focus shows a 2px `#6E94DF` ring with offset; disabled solid `#6A6E7C` with `#BFC1C7` text.

```css
.ea-btn {
  font: 700 16px/1 "electronicartstext", Inter, sans-serif;
  color: #EAEAEC;
  background: #255AF6;
  border: 0;
  border-radius: 6px;
  height: 44px;
  padding: 0 20px;
}
.ea-btn:hover { background: #1E4ACA; }
.ea-btn:active { background: #17399D; }
.ea-btn:focus-visible { outline: 2px solid #6E94DF; outline-offset: 2px; }
.ea-btn--outline { background: transparent; border: 1px solid #404557; }
```

### Franchise hero (signature)

- Full-bleed key art, 16:9 on desktop, taller crop on mobile, with a dark gradient from the bottom or left (`linear-gradient(90deg, rgba(0,7,31,0.85), transparent 60%)`, approximate).
- Game logo as an image (max height about 80px), a 38-50px headline, one line of 18px body, and a row of buttons: solid "Play Now" or "Buy Now", outline "Learn More".
- Platform icons (PlayStation, Xbox, PC, Switch) in a small row under the buttons.

### Game tiles

- Card on `#151C32` or bare art, radius 6-8px, box art on top, title 18-20px/700, platform or edition line in `#AAACB4`.
- Spotlight carousel tiles use 6px thumbnail radius and arrow buttons.
- Hover lifts the tile slightly and brightens the art (approximate).

### Tags

Small, 4px radius, 12-14px/700. Solid tags use EA Blue or Volt `#EAFF69` with midnight text; outline tags use a 1px `#404557` border.

### Navigation

- Global header about 64px tall on midnight: EA circle logo left, menu items "Games", "Experiences", "About", "Commitments", "Resources", then search and account icons right.
- Menus open as dark panels with franchise logos in a grid and text links.
- Local navigation bars on franchise pages sit under the header with a white alpha hover (`rgba(255,255,255,0.12)`).

### Inputs

Height 44-48px, `#151C32` fill, 1px `#404557` border, radius 6px, text `#EAEAEC`, placeholder `#9598A2`. Focus border `#6E94DF`. Error border `#F04438`.

### Footer

Midnight background, columns of links (Careers, Executives, Our Commitments, Partner With Us, Help, Legal & Privacy), a language picker and social icons. Text `#AAACB4`, headings `#EAEAEC`.

## 6. Layout & Spacing

- **Spacing tokens:** `--drop-spacing-*` on a 4px base (4, 8, 12, 16, 24, 32, 48, 64).
- **Content width:** about 1440px max, with full-bleed heroes (approximate).
- **Gutters:** 16px mobile, 24-40px desktop (approximate).
- **Breakpoints:** 600px is the first switch (`width >= 600px`), then larger tiers for lg and xl (about 1024 and 1440px, approximate).
- **Rhythm:** large art blocks separated by 48-80px; tile rows of 3-4 on desktop.

## 7. Depth, Elevation & Motion

- Mostly flat; surfaces separate by color (`#00071F` to `#151C32`).
- The only defined shadow: `0 8px 16px rgba(25,37,55,0.25)` for raised menus and popovers.
- Overlays on art use dark gradients rather than shadows.
- Motion: carousels slide about 300-400ms with ease-out, hover transitions about 150-200ms, autoplaying trailers muted with a pause control (approximate).

## 8. Iconography & Imagery

- **Icons:** simple monochrome glyphs, 16-24px, rounded line or solid style, in `#EAEAEC`.
- **Imagery:** official key art and screenshots for every franchise. Do not crop out game logos or add filters.
- **Sports titles** use bright stadium photography; shooters use darker, high-contrast art. The corporate chrome stays neutral around both.
- **Corporate pages** (careers, sustainability) use real photos of people and offices with the same midnight frame.

## 9. Voice & Microcopy

Energetic but brief. Franchise copy borrows each game's tone; corporate copy is plain.

- Short headlines, often naming the new content directly.
- CTAs: "Play Now", "Buy Now", "Learn More", "Join Now", "See Latest Games", "Browse All".
- Keep ™ and ® marks on game names.

Sample strings:

- "Casino Heist is here"
- "Unlock a world of thrill"
- "Players and Parents: Video game control is in your hands"
- "2026 Sustainability Report"
- Button: "Play Now", "Learn More"

## 10. Do's and Don'ts

**Do**

- Use midnight `#00071F` as the base and `#151C32` for cards.
- Use EA Blue `#255AF6` for the main action only.
- Let franchise art fill the hero, with the game logo as an image.
- Keep headlines bold (700) with zero tracking.
- Keep radii small (4-8px).

**Don't**

- Don't use pure black or grey-only neutrals; keep the navy cast.
- Don't use the neon green or volt for large fills or body text.
- Don't round buttons into pills on the main site.
- Don't put text over the busiest part of key art without a gradient.
- Don't restyle franchise logos to match the EA chrome.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of EA.com. Dark midnight navy page `#00071F`, cards `#151C32`, borders `#2B3044`/`#404557`. Text `#EAEAEC`, secondary `#AAACB4`. Headlines in a bold geometric sans (Electronic Arts Display, fallback Inter Tight 700) at 38-50px with 120% line height and no tracking; body in Inter 16-18px at 140%. Primary buttons are solid EA Blue `#255AF6` with white bold text, 6px radius, about 44px tall, hover `#1E4ACA`; secondary buttons are transparent with a 1px `#404557` border. Heroes are full-bleed game key art with a left-to-right dark gradient, a game logo image, a short headline and two buttons. Game tiles have 6-8px radius with box art and a bold title. Use neon green `#62FF85` or volt `#EAFF69` only for small tags. Almost no shadows.

```css
:root {
  --brand-bg: #00071F;
  --brand-surface: #151C32;
  --brand-border-weak: #2B3044;
  --brand-border: #404557;
  --brand-surface-200: #555A6A;
  --brand-text: #EAEAEC;
  --brand-text-weak: #AAACB4;
  --brand-text-placeholder: #9598A2;
  --brand-blue: #255AF6;
  --brand-blue-hover: #1E4ACA;
  --brand-blue-pressed: #17399D;
  --brand-blue-light: #BBCCFC;
  --brand-green: #62FF85;
  --brand-volt: #EAFF69;
  --brand-link: #9FB7EA;
  --brand-link-hover: #CFDBF4;
  --brand-focus: #6E94DF;
  --brand-error: #F04438;
  --brand-font-display: "electronicartsdisplay", "Inter Tight", sans-serif;
  --brand-font-text: "electronicartstext", "Inter", sans-serif;
  --brand-radius-xs: 2px;
  --brand-radius-sm: 4px;
  --brand-radius-md: 6px;
  --brand-radius-lg: 8px;
  --brand-radius-xl: 12px;
  --brand-radius-full: 999px;
  --brand-shadow-raised: 0 8px 16px rgba(25,37,55,0.25);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Electronic Arts.
