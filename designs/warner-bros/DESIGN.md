---
name: Warner Bros.
slug: warner-bros
url: https://www.warnerbros.com
category: Studio
tagline: "Gold-rimmed blue shield on near-black: a classic studio crest rebuilt for screens."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: dark
colors:
  - name: WB Gold
    hex: "#FFC200"
    role: Shield rim and "WB" letters
  - name: WB Blue
    hex: "#0022AF"
    role: Wordmark and solid one-colour blue applications
  - name: Shield Navy
    hex: "#04006C"
    role: Dark end of the shield gradient, deep blue backgrounds
  - name: Shield Bright
    hex: "#4047FF"
    role: Light end of the shield gradient
  - name: Site Black
    hex: "#0E0E0E"
    role: warnerbros.com page background
  - name: White
    hex: "#FFFFFF"
    role: Text on dark, logo background
  - name: Electric Blue
    hex: "#015CFE"
    role: Glowing divider lines between hero and content
  - name: Panel Blue
    hex: "#05008C"
    role: Promo panels and featured bands
  - name: Label Gold
    hex: "#FEC200"
    role: Small eyebrow labels and franchise tags on the site
  - name: Button Blue
    hex: "#0078D6"
    role: Carousel and utility buttons
  - name: Surface
    hex: "#1A1A1A"
    role: Cards and menu panels
  - name: Gray
    hex: "#7F7F7F"
    role: Secondary text, inactive dots
  - name: Divider
    hex: "#CCCCCC"
    role: Light rules, borders on light sections
fonts:
  display:
    family: "WB custom lettering (logo only)"
    fallback: "Montserrat"
    weights: [700, 800]
  body:
    family: "Montserrat"
    fallback: "Montserrat"
    weights: [300, 400, 500, 600]
typeScale:
  - { role: Hero, size: 35, weight: 800, lineHeight: 1.1, tracking: "0" }
  - { role: Section Title, size: 30, weight: 700, lineHeight: 1.2, tracking: "0" }
  - { role: Title, size: 24, weight: 700, lineHeight: 1.25, tracking: "0" }
  - { role: Card Title, size: 20, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Nav, size: 14, weight: 500, lineHeight: 1.4, tracking: "0.04em" }
  - { role: Label, size: 13, weight: 600, lineHeight: 1.2, tracking: "0.08em" }
radii: { sm: 4, md: 15, lg: 16, pill: 9999 }
spacing: [4, 8, 13, 16, 24, 32, 55, 64]
shadows:
  - { name: Card, value: "-2px 2px 3px rgba(0,0,0,0.2), 2px 2px 3px rgba(0,0,0,0.2)" }
  - { name: Glow, value: "0 0 5px 0 rgba(255,255,255,1)" }
preview:
  bg: "#0E0E0E"
  surface: "#1A1A1A"
  text: "#FFFFFF"
  muted: "#7F7F7F"
  border: "#373737"
  accent: "#FFC200"
  accentText: "#04006C"
  radius: 15
  buttonStyle: solid
---

# Warner Bros.

## 1. Visual Theme & Atmosphere

Warner Bros. is a studio crest. The shield, a gold-rimmed escutcheon with "WB" in gold over a blue field, has been on screen since the 1920s and is the whole brand in one object. In 2023 Pentagram (led by partner Emily Oberman) redrew it for the studio's centenary: they went back to the proportions of the mid-century shield, flattened it so it works at app-icon size, and set the blue field as a gradient from bright `#4047FF` to deep navy `#04006C`. Gold `#FFC200` carries the rim and letters. The same shield anchors sub-brands (Pictures, Television, Animation, Games, Studios) with the division name set under it.

On warnerbros.com the shield sits on a near-black page (`#0E0E0E`) full of film and series art. Text is Montserrat. Thin electric-blue glow lines (`#015CFE`) separate the hero from content, small gold labels mark franchises, and deep blue panels (`#05008C`) carry promos. It feels like a theatre lobby: dark, poster-heavy, with blue and gold as the house colours.

What makes it recognisable:

- **The shield** in gold and blue, used large and alone.
- **Blue and gold only.** No other brand hues; franchise art brings everything else.
- **Dark canvas.** Pages default to near-black with white type.
- **Shield as frame.** In trailers and title sequences the shield is often re-rendered in the film's world (carved in stone, rusted, made of clouds, drawn as a cartoon). The silhouette never changes.
- **Heritage cues.** Looney Tunes, DC and Harry Potter all sit under the shield, so the system stays neutral enough to host very different art.

Density: medium. Big hero carousel, then rows and grids of key art with short captions.

## 2. Color Palette & Roles

### Shield and wordmark (2023 identity, from the vector logo)

| Name | Hex | Role |
| --- | --- | --- |
| WB Gold | `#FFC200` | Shield rim, "WB" letters, gold-on-dark accents |
| Shield Bright | `#4047FF` | Upper-left start of the field gradient |
| Shield Navy | `#04006C` | Lower-right end of the field gradient, dark backgrounds |
| WB Blue | `#0022AF` | "WARNER BROS." wordmark and solid one-colour blue |

The shield gradient runs left to right across the field: `linear-gradient(90deg, #4047FF, #04006C)`. In one-colour use the field becomes solid WB Blue or the whole shield goes white, black or gold.

### Website (warnerbros.com)

| Name | Hex | Role |
| --- | --- | --- |
| Site Black | `#0E0E0E` | Body background, header bar |
| Surface | `#1A1A1A` | Cards, dropdowns |
| Surface Alt | `#1E1E1E` | Footer, secondary panels |
| Border | `#373737` | Card and input borders on dark |
| White | `#FFFFFF` | Primary text |
| Gray | `#7F7F7F` | Secondary text, carousel dots |
| Gray Light | `#AEAEAE` | Footer links |
| Electric Blue | `#015CFE` | 5px glow divider under the hero |
| Panel Blue | `#05008C` | Promo band behind featured titles |
| Overlay Navy | `#04006C` at 44% (`#04006C70`) | Tint over hero imagery |
| Label Gold | `#FEC200` | Franchise labels, eyebrow text |
| Button Blue | `#0078D6` | Carousel and "Learn more" buttons |

### Semantic (approximate, not observed as tokens)

| Name | Hex | Use |
| --- | --- | --- |
| Error | `#FF4D4F` | Form errors on dark |
| Success | `#2EBD6B` | Confirmation |
| Focus | `#FFC200` | 2px focus outline, gold reads well on dark |

### Mode

Dark is the default for the consumer site. Light versions (white background, WB Blue wordmark, full-colour shield) are used for corporate documents, press materials and the logo file here.

## 3. Typography

- **Shield and wordmark lettering** are custom drawn. The "WARNER BROS." wordmark in the 2023 system is a bold, slightly condensed sans with squared curves, drawn to match the shield's "WB". It is artwork; do not rebuild it in a font.
- **Montserrat** is the web typeface on warnerbros.com, self-hosted in weights 300 to 800 (`font-family: Montserrat, Arial, Helvetica, sans-serif`). It is a Google Font, so the fallback is itself.
- For display headlines that should echo the wordmark, use Montserrat 700-800, uppercase, with slight positive tracking. A condensed alternative is Barlow Condensed 700.

### Scale (site values, rem converted at 16px)

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero | 35px (2.1875rem) | 800 | 1.1 | Title over key art, 26px on mobile |
| Section title | 30px (1.875rem) | 700 | 1.2 | "Movies", "TV Series", "Games" |
| Title | 24px (1.5rem) | 700 | 1.25 | Module headings |
| Card title | 20-22px | 600 | 1.3 | Featured card names |
| Body | 16px | 400 | 1.5 | Synopses, articles (300 weight for long reads) |
| Nav | 14px | 500 | 1.4 | Header links, uppercase |
| Label | 13px | 600 | 1.2 | Gold franchise labels, uppercase |
| Small | 10-12px | 400 | 1.4 | Legal, ratings |

### Rules

- Uppercase for nav, labels and short headings; sentence case for body.
- Positive tracking (0.04-0.08em) on uppercase text; none on body.
- Keep headlines to one line on desktop where possible.

## 4. Logo & Brand Mark

- **Shield (symbol).** Gold escutcheon with a notched top edge, blue gradient field, gold "WB" with the letters sharing a central stroke. Used alone for app icons, social avatars, favicons and the corner bug.
- **Stacked lockup.** Shield above "WARNER BROS." in WB Blue. This is `logo.svg`.
- **Horizontal lockup.** Small shield left, "WARNER BROS." right, for headers and credits.
- **Division lockups.** Shield with "PICTURES", "TELEVISION", "ANIMATION", "GAMES" or "STUDIOS" set under the wordmark.
- **One-colour versions:** all gold, all white, all black, all WB Blue.
- **Clear space:** at least the width of the shield's rim notch (about 10% of shield width) on all sides; in lockups, keep the gap between shield and wordmark as drawn.
- **Minimum size:** shield 24px tall on screen; stacked lockup 80px wide.
- **Placement:** top-left of the header on the site, about 50-60px tall.

Misuse: do not change the gradient direction, recolour the rim, outline the shield, add 3D bevels in UI (bevels are reserved for in-film animated versions), squash it, or place the full-colour shield on mid-blue backgrounds where the field disappears.

## 5. Components

Values for colours, fonts and transitions come from warnerbros.com CSS. Sizes for buttons, inputs and cards are approximate, read from the rendered site.

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 44px; padding: 0 24px;
  font: 600 14px/1 Montserrat, Arial, Helvetica, sans-serif;
  text-transform: uppercase; letter-spacing: 0.06em;
  border: 2px solid transparent; border-radius: 4px;
  transition: all 0.4s ease;
}
.btn-primary { background: #FFC200; color: #04006C; }
.btn-primary:hover { background: #FFD24D; }
.btn-primary:active { background: #E6AF00; }

.btn-blue { background: #0078D6; color: #FFFFFF; }
.btn-blue:hover { background: #0022AF; }

.btn-outline { background: transparent; color: #FFFFFF; border-color: #FFFFFF; }
.btn-outline:hover { background: #FFFFFF; color: #0E0E0E; }

.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn:focus-visible { outline: 2px solid #FFC200; outline-offset: 3px; }
```

Social buttons in the footer are 26px icons in white at 75% opacity, full opacity on hover.

### Inputs

```css
.input {
  height: 44px; padding: 0 16px;
  background: #1A1A1A; color: #FFFFFF;
  border: 1px solid #373737; border-radius: 4px;
  font: 400 16px Montserrat, sans-serif;
}
.input::placeholder { color: #7F7F7F; }
.input:focus { border-color: #FFC200; outline: none; }
```

Search opens from a magnifier in the header into a full-width bar on `#0E0E0E`.

### Hero carousel

- Full-bleed key art, 16:9 or wider, with a navy overlay (`#04006C70`) or bottom gradient to black.
- Title art or a 35px weight 800 title bottom-left, a 13px gold uppercase label above it ("NOW PLAYING", "DC"), and one or two buttons.
- Under the hero, a 5px line: `linear-gradient(to right, transparent, #015CFE 50%, transparent)`, masked at the ends so it glows in the centre.
- Dots: 10px circles, `#7F7F7F` at rest, white active.

### Cards

- Poster cards 2:3 and landscape cards 16:9, radius 15px (1rem on some tiles), no border.
- Shadow `-2px 2px 3px rgba(0,0,0,0.2), 2px 2px 3px rgba(0,0,0,0.2)`.
- Hover: image scales to 1.05 over 0.5s ease-out; title turns gold.
- Caption below: 16-20px weight 600 white, 13px gray meta.

### Navigation

- Header bar `#0E0E0E`, about 64px tall, shield left, links centred or right ("Movies", "TV", "Games", "Studio Tour", "Shop") at 14px weight 500 uppercase.
- Active link: gold text or a 2px gold underline.
- Mobile: hamburger at right, full-screen menu on `#0E0E0E` with 24px links.

### Panels and bands

- Promo band: `#05008C` background with a subtle pattern image, 55px top padding, 32px bottom, white text and gold labels.
- Franchise rows: label in gold, row of cards, "See all" link in white with a chevron.

### Badges

Gold text label, no fill, 13px weight 600 uppercase, `padding: 6px 13px`; or solid gold pill with navy text for "NEW".

### Modals

Video modal on `rgba(0,0,0,0.9)`, player centred at max 1100px, close X top-right in white. Content modals use `#1A1A1A`, 15px radius, 32px padding.

### Footer

`#0E0E0E`, shield and wordmark in white, link columns at 14px `#AEAEAE`, legal row 12px, divider `#373737`.

## 6. Layout & Spacing

- **Max width:** about 1268px for content; heroes and bands run full width.
- **Gutters:** 24px on mobile (1.5rem), 48px on desktop.
- **Breakpoints:** 400, 500, 600, 768, 990, 1024, 1200, 1268px.
- **Spacing:** values cluster around 8, 13, 16, 24, 32 and 55px (the site uses 0.8125rem and 3.4375rem steps).
- **Grids:** posters 2 columns on mobile, 4 on tablet, 5-6 on desktop, 16-24px gaps.

## 7. Depth, Elevation & Motion

- Mostly flat on dark, with depth from imagery and gradients.
- **Shadows:** small double drop shadow on cards; white glow `0 0 5px 0 #FFFFFF` on focused thumbnails.
- **Transitions:** the site uses `0.4s ease` almost everywhere; hover scale `transform 0.5s ease-out`; menus slide with `top 0.5s ease-in` and `1s ease-out`; a springy `cubic-bezier(0.25,1.7,0.35,0.8)` for small pop-ins.
- **Ident motion:** the shield in trailers flies or resolves out of the film's world, then settles flat. On the web keep the shield static.

## 8. Iconography & Imagery

- **Icons:** simple outlined UI icons, 20-24px, 1.5-2px stroke, white. Chevrons for carousels, magnifier, hamburger, play triangle.
- **Imagery:** official key art and stills. Each franchise keeps its own art direction (DC is dark and saturated, Looney Tunes is bright and flat, Harry Potter is warm and painterly).
- **Shield in art:** when the shield appears inside imagery, it takes on the material of the film (stone, metal, neon) but keeps its outline and proportions.
- **Studio tour:** photography of the backlot, water tower and soundstages, warm daylight.

## 9. Voice & Microcopy

Confident, cinematic, a little nostalgic. Speaks as a 100-year-old studio that still makes the big ones.

- Labels: "NOW PLAYING", "COMING SOON", "STREAMING ON HBO MAX", "IN THEATERS"
- Buttons: "Get Tickets", "Watch Trailer", "Learn More", "Book a Tour"
- Section titles: "Movies", "TV Series", "Games", "Warner Bros. Studio Tour Hollywood"
- Heritage line: "Celebrating 100 years of Warner Bros."
- Casing: uppercase for labels and nav, title case for buttons, sentence case for body.

## 10. Do's and Don'ts

**Do**

- Lead with the shield, large and alone where space allows.
- Keep the palette to gold, the blue gradient, near-black and white.
- Use Montserrat for UI text.
- Set short labels in gold uppercase.
- Let franchise art set the mood inside each module.
- Use the blue glow divider sparingly, once per page.

**Don't**

- Don't redraw or retype the "WB" letters or the wordmark.
- Don't add a third brand colour to chrome.
- Don't place the full-colour shield on mid-blue or busy art without a dark backing.
- Don't bevel or emboss the shield in UI.
- Don't use rounded pill buttons; WB buttons are squarer.
- Don't use light mode for the consumer showcase.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Warner Bros. Page background `#0E0E0E`, cards `#1A1A1A`, borders `#373737`, white text, secondary text `#7F7F7F`. House colours are WB Gold `#FFC200` and the shield blues: `#0022AF` solid, gradient `linear-gradient(90deg, #4047FF, #04006C)`, and deep panel blue `#05008C`. Use Montserrat throughout: hero 35px weight 800, section titles 30px 700, body 16px 400, nav and labels 13-14px uppercase with 0.06em tracking. Primary buttons are gold with navy `#04006C` text, 44px tall, 4px radius, uppercase 600; secondary buttons are white outline. Hero is a full-bleed key-art carousel with a navy tint, a gold eyebrow label and a 5px glowing blue divider (`linear-gradient(to right, transparent, #015CFE 50%, transparent)`) under it. Poster cards have 15px radius and scale to 1.05 on hover. All transitions `0.4s ease`. Put the WB shield SVG top-left; never type the logo.

```css
:root {
  --brand-gold: #FFC200;
  --brand-gold-label: #FEC200;
  --brand-blue: #0022AF;
  --brand-shield-bright: #4047FF;
  --brand-shield-navy: #04006C;
  --brand-shield-gradient: linear-gradient(90deg, #4047FF, #04006C);
  --brand-panel: #05008C;
  --brand-electric: #015CFE;
  --brand-button-blue: #0078D6;
  --brand-bg: #0E0E0E;
  --brand-surface: #1A1A1A;
  --brand-surface-alt: #1E1E1E;
  --brand-border: #373737;
  --brand-text: #FFFFFF;
  --brand-text-secondary: #7F7F7F;
  --brand-text-tertiary: #AEAEAE;
  --brand-overlay: rgba(4, 0, 108, 0.44);
  --brand-font: Montserrat, Arial, Helvetica, sans-serif;
  --brand-radius-button: 4px;
  --brand-radius-card: 15px;
  --brand-shadow-card: -2px 2px 3px rgba(0, 0, 0, 0.2), 2px 2px 3px rgba(0, 0, 0, 0.2);
  --brand-transition: 0.4s ease;
  --brand-max-width: 1268px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Warner Bros.
