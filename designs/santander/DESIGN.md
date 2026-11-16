---
name: Santander
slug: santander
url: https://santander.com
category: Banking
tagline: "Santander red flame on white, rounded Headline type, red pill buttons and sky-blue tints."
updated: 2026-11-16
appStoreId: 408043474
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Santander Red
    hex: "#EC0000"
    role: Flame and wordmark, primary buttons, links, active indicators
  - name: Boston Red
    hex: "#CC0000"
    role: Hover and pressed red, red text on white
  - name: White
    hex: "#FFFFFF"
    role: Page background, text on red
  - name: Black
    hex: "#000000"
    role: Headlines on the corporate site, dark bands
  - name: Ink
    hex: "#222222"
    role: Body and headline text on retail sites
  - name: Sky
    hex: "#DEEDF2"
    role: Light blue section background, carousel rules, hover tiles
  - name: Sky Border
    hex: "#CEDEE7"
    role: Card borders and dividers
  - name: Turquoise Sky
    hex: "#9BC3D3"
    role: Neutral arrow icons and hover fills on the corporate site
  - name: Medium Grey
    hex: "#767676"
    role: Secondary text, captions
  - name: Light Grey
    hex: "#F6F6F6"
    role: Neutral section background
  - name: Rule Grey
    hex: "#E6E6E6"
    role: Dividers, input borders, footer rules
  - name: Grey 333
    hex: "#333333"
    role: Long-form body text on the corporate site
  - name: Link Blue
    hex: "#3366FF"
    role: Teaser CTA fill on some corporate modules
  - name: Success
    hex: "#3C763D"
    role: Success text (corporate legacy)
fonts:
  display:
    family: "Santander Headline"
    fallback: "Nunito Sans"
    weights: [300, 400, 700]
  body:
    family: "Santander MicroText"
    fallback: "Open Sans"
    weights: [300, 400, 700]
typeScale:
  - { role: Hero, size: 60, weight: 300, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Heading 1, size: 48, weight: 300, lineHeight: 1.15, tracking: "-0.01em" }
  - { role: Heading 2, size: 32, weight: 400, lineHeight: 1.25, tracking: "0" }
  - { role: Heading 3, size: 24, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Lead, size: 20, weight: 400, lineHeight: 1.2, tracking: "-0.02em" }
  - { role: Body, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.7, tracking: "0" }
  - { role: Eyebrow, size: 16, weight: 700, lineHeight: 1.44, tracking: "0.1em" }
radii: { sm: 4, md: 8, lg: 16, xl: 24, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96]
shadows:
  - { name: Sky glow, value: "0 0 16px 0 rgba(155,195,211,0.2)" }
  - { name: Card, value: "0 2px 8px rgba(0,0,0,0.1)" }
preview:
  bg: "#FFFFFF"
  surface: "#DEEDF2"
  text: "#222222"
  muted: "#767676"
  border: "#E6E6E6"
  accent: "#EC0000"
  accentText: "#FFFFFF"
  radius: 24
  buttonStyle: pill
---

# Santander

## 1. Visual Theme & Atmosphere

Santander is red and white. The flame symbol and the wordmark are in Santander Red, and the sites around the group (santander.com, santander.co.uk, santanderbank.com, bancosantander.es) build on white pages with generous space, light-weight rounded headlines in the custom Santander Headline face, and a cool sky blue as the only secondary colour. The red is bold and warm; everything around it stays calm so the red reads clearly.

What makes it recognisable:

- **The flame.** Three curved strokes rising from a horizontal oval, read as a flame. It is the most recognisable part of the brand and is often used alone.
- **One red.** `#EC0000` for the logo, buttons, links and active states. A slightly darker `#CC0000` for hover and for red text that needs more contrast.
- **Santander Headline.** A rounded, humanist sans with soft terminals, used light (300) for big headlines and regular for subheads. Santander MicroText handles body copy.
- **Sky blue support colour.** `#DEEDF2` bands and `#CEDEE7` borders on the corporate site; it cools the red without competing with it.
- **Rounded, friendly controls.** Retail sites use pill buttons and 16-24px card corners; the corporate site is more square (4px).
- **Data moments.** The group site shows the share price ticker and big-number carousels (key facts and figures) with red active states.

Mood words: warm, confident, approachable, Spanish-European, straightforward.

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Santander Red | `#EC0000` | Logo, primary buttons, links, active carousel dots |
| Boston Red | `#CC0000` | Hover/pressed red, red text and outline buttons |
| Ruby (dark red) | `#990000` | Deep red for pressed states (approximate) |
| White | `#FFFFFF` | Base |
| Black | `#000000` | Headlines on santander.com, dark footer |
| Ink | `#222222` | Text on santanderbank.com |
| Grey 333 | `#333333` | Long-form text on santander.com |
| Medium Grey | `#767676` | Secondary text |
| Dark Grey | `#6F7779` | Santander UK body text (approximate) |
| Rule Grey | `#E6E6E6` | Dividers and borders |
| Light Grey | `#F6F6F6` | Neutral band |
| Sky | `#DEEDF2` | Light blue band, hover fill, carousel rules |
| Sky Border | `#CEDEE7` | Card and banner borders |
| Turquoise Sky | `#9BC3D3` | Neutral arrow icons, teaser hover |
| Link Blue | `#3366FF` | Teaser action fill in a few corporate modules |

### Semantic colors

| State | Color | Notes |
|---|---|---|
| Error | `#CC0000` text, `#EC0000` icon | Same red family as the brand; pair with an icon so errors are not confused with brand moments |
| Success | `#3C763D` text on `#DFF0D8` | Corporate legacy values; retail sites use a mid green (approximate `#63BA68`) |
| Warning | `#8A6D3B` on `#FCF8E3` | Corporate legacy |
| Info | `#257FA4` on `#DEEDF2` | Approximate |

### Dark surfaces

There is no dark mode. Full-bleed red bands (white text, white outline or white solid buttons with red text) and black footer bands are the only dark surfaces.

## 3. Typography

**Families:** Santander's own type family, designed for the brand:

- **Santander Headline** (Regular, Bold, Italic): headlines, buttons, navigation.
- **Santander MicroText** (Light, Regular, Bold, Italic): body text and small UI copy.
- **Santander Condensed** and **Santander Script**: occasional campaign use.

On santander.com the fonts load as separate families ("SantanderHeadline-Regular", "SantanderHeadline-Bold"); on santanderbank.com they load as "Santander Headline" and "Santander MicroText" with numeric weights.

**Licensing:** proprietary. Use **Nunito Sans** for headlines (rounded terminals, similar warmth) and **Open Sans** for body.

### Scale (santanderbank.com and santander.com, desktop)

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Hero | 60px | 300 | 1.1 | Headline, often one short line |
| H1 | 48-54px | 300 | 1.15 | |
| H2 | 32-44px | 400 | 1.25 | |
| Banner text | 30px | 400 | 38px | White on image (corporate) |
| H3 / event title | 24px | 400 | 32px | |
| Lead / CTA text | 20px | 400 | 24px | -0.38px tracking on teaser actions |
| Card title | 20px | 700 | 29px | Headline Bold |
| Body | 16px | 400 | 24px | MicroText; corporate body 14px/24px |
| Eyebrow | 16-18px | 700 | 23px | Uppercase, 1.6px tracking |

Weights 300 and 400 dominate. Mobile hero drops to about 32-36px.

### Rules

- Sentence case for headlines and buttons. Uppercase only for small eyebrows and date labels with wide tracking.
- Headlines light (300) at large sizes; never extra bold.
- Body in MicroText, not Headline.
- Numbers in data carousels at display sizes, weight 300, with labels in MicroText.

## 4. Logo & Brand Mark

The logo is the flame symbol to the left of the "Santander" wordmark, both in Santander Red. The flame is three tapered strokes curving upward from a flat ellipse.

- **Colors:** red `#EC0000` on white (primary); white on red; white on photography with enough contrast.
- **Clear space:** the height of the flame's ellipse on all sides (approximate).
- **Minimum size:** lockup about 100px wide on screen; flame alone 16px.
- **Flame alone:** app icons put a white flame on a red square, with a country code ("ES", "UK") on country apps.

Misuse:

- Do not recolor the flame in any other colour.
- Do not outline it, add gradients or 3D effects.
- Do not stretch the ellipse or rearrange the strokes.
- Do not set "Santander" in a live font beside the flame.

## 5. Components

### Buttons

Retail sites use pill buttons; the corporate site uses 4px corners on a few legacy modules.

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| Primary | `#EC0000` | `#FFFFFF` | none | 24px (pill at 48px height) |
| Secondary | `#FFFFFF` | `#EC0000` | 1px `#EC0000` | 24px |
| Tertiary / link | transparent | `#EC0000` | none | none, underline on hover |
| On red | `#FFFFFF` | `#EC0000` | none | 24px |
| Outline on red | transparent | `#FFFFFF` | 1px `#FFFFFF` | 24px |

- Text: Santander Headline 16px, weight 700 or 400, sentence case. Padding about 12px 24px (48px tall).
- Hover: primary `#CC0000`; secondary fills `#FEE5E5` (approximate).
- Focus: 2px outline in `#222222` or `#257FA4` with 2px offset (approximate).
- Disabled: `#E6E6E6` fill, `#767676` text.

```css
.san-btn {
  font: 700 16px/1.5 "Santander Headline", "Nunito Sans", Arial, sans-serif;
  padding: 12px 24px; border-radius: 24px; border: 1px solid #EC0000;
  background: #EC0000; color: #FFFFFF;
}
.san-btn:hover { background: #CC0000; border-color: #CC0000; }
.san-btn--secondary { background: #FFFFFF; color: #EC0000; }
```

### Links with arrows

The corporate site uses "flecha" (arrow) links: a label plus a small circular arrow icon in Turquoise Sky (`#9BC3D3`) that turns red on hover.

### Inputs

- 48px tall, 1px `#767676` or `#CCCCCC` border, 4-8px radius, MicroText 16px (approximate).
- Focus: border turns `#257FA4` or red with a 1px inner line (approximate).
- Error: red border and message below in `#CC0000`.

### Cards and banners

- Corporate banners: white or sky background, 1px `#CEDEE7` border, square or 4px corners, image left or top.
- Story cards: image on top, Headline Bold 20px title in black, 1px `#CEDEE7` bottom border when no image.
- Retail product cards: white, 16px radius, light shadow or 1px `#E6E6E6`, product name, short benefit line, red text link.
- Rounded hero corners on santanderbank.com: a full-width panel with `border-radius: 0 0 32px 32px` (from inline styles).

### Data carousel (signature, corporate)

Rows of large figures (customers, employees, countries) separated by 1px top and 2px bottom rules in `#DEEDF2`; the active tile fills red with white text, hover fills `#DEEDF2`.

### Navigation

- santander.com: top strip with a country selector ("Argentina", "Brazil", … "United States"), then "About Us", "Our Approach", "Shareholders and Investors", "Press Room", "Careers", plus a live share price chip ("Santander Share") and search.
- santanderbank.com: logo left, "Personal", "Private Client", "Small Business", "Commercial" segments, product menus ("Checking", "Savings & CDs", "Credit Cards", "Investing & Planning", "Auto"), a red pill "Login" (approximate shape).
- Active item: red text with a 2-3px red underline.

### Carousel controls

Dots and arrows in grey that turn red on hover and active.

## 6. Layout & Spacing

- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, 96px (rem-based on santanderbank.com; 16px and 24px are the most common paddings).
- **Container:** about 1200-1280px max width with 24px gutters (approximate). The corporate site uses a 12-column Bootstrap grid.
- **Breakpoints:** 768px, 992px and 1200px on santander.com (Bootstrap-derived).
- **Section rhythm:** 64-96px between sections on desktop, 40-48px on mobile.
- **Density:** low; one message per band, with lots of white.

## 7. Depth, Elevation & Motion

| Token | Value | Use |
|---|---|---|
| Sky glow | `0 0 16px 0 rgba(155,195,211,.2)` | Corporate cards and dropdowns |
| Card | `0 2px 8px rgba(0,0,0,.1)` | Retail product cards (approximate) |
| Flat | none | Most buttons and bands |

- Shadows are soft and tinted with the sky blue on the corporate site.
- Motion: 200-300ms ease for hover colour and carousel transitions (approximate). Hero slides fade.

## 8. Iconography & Imagery

- **Icons:** Santander icon font ("icomoon" set with names like `icon-flechaNeutra-SAN`): simple, rounded line icons at 1.5-2px stroke, red on white or white on red.
- **Photography:** warm, natural images of people, families and small businesses; Mediterranean light; often with red elements in frame.
- **Illustration:** flat, friendly scenes with red, sky blue and grey, used for product explainers.
- **Shapes:** soft curves echoing the flame; large rounded panel corners on retail sites.

## 9. Voice & Microcopy

Plain, warm and confident. The group site speaks to shareholders and press in an institutional register; retail sites speak to customers in short, direct sentences.

- Sentence case; short headlines.
- CTAs: "Login", "Learn more", "Learn more about Online Banking", "See all results", "Directory".
- Group site sections: "About Us", "Our Approach", "Shareholders and Investors", "Press Room", "Careers".

Sample strings (from santander.com and santanderbank.com, 2026-11-16):

- "Are you looking for your online banking?"
- "Key facts and figures"
- "Supporting the transition to a sustainable economy"
- "Our customers' financial health and inclusion"
- Product names: "Santander Select Checking", "Simply Right Checking", "Essential Checking"

## 10. Do's and Don'ts

**Do**

- Keep pages white with one strong red element per view.
- Use pill buttons in red for primary actions on retail UI.
- Use light (300) Headline weight for big type.
- Use sky blue `#DEEDF2` for secondary bands and hover fills.
- Let the flame stand alone where space is tight.

**Don't**

- Don't introduce other bright accent colours next to the red.
- Don't use red for long passages of text.
- Don't use heavy bold headlines.
- Don't place the red logo on a red or orange background.
- Don't mix square and pill buttons in the same group.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Santander. White page with sky-blue `#DEEDF2` secondary bands and `#E6E6E6` rules. One brand colour: Santander red `#EC0000` for the logo, primary buttons and links, hover `#CC0000`. Headlines use "Santander Headline" (fallback Nunito Sans) at weight 300, 48-60px, in `#222222`; body uses "Santander MicroText" (fallback Open Sans) 16px/24px. Primary buttons are red pills (24px radius, 48px tall, 12px 24px padding) with white 16px bold text; secondary is a white pill with a 1px red border and red text. Cards are white with 16px radius and a light shadow `0 2px 8px rgba(0,0,0,.1)` or a 1px `#CEDEE7` border. Show a row of big light numbers with red active state for key figures. Small uppercase eyebrows with 0.1em tracking. Copy is warm, plain and sentence case.

```css
:root {
  --brand-red: #EC0000;
  --brand-red-hover: #CC0000;
  --brand-red-deep: #990000;
  --brand-text: #222222;
  --brand-text-body: #333333;
  --brand-text-muted: #767676;
  --brand-black: #000000;
  --brand-bg: #FFFFFF;
  --brand-surface: #F6F6F6;
  --brand-sky: #DEEDF2;
  --brand-sky-border: #CEDEE7;
  --brand-turquoise: #9BC3D3;
  --brand-border: #E6E6E6;
  --brand-error: #CC0000;
  --brand-success: #3C763D;
  --brand-font-headline: "Santander Headline", "Nunito Sans", Arial, sans-serif;
  --brand-font-body: "Santander MicroText", "Open Sans", Arial, sans-serif;
  --brand-radius-sm: 4px;
  --brand-radius: 16px;
  --brand-radius-button: 24px;
  --brand-radius-panel: 32px;
  --brand-shadow-glow: 0 0 16px 0 rgba(155,195,211,.2);
  --brand-shadow-card: 0 2px 8px rgba(0,0,0,.1);
  --brand-duration: 250ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Santander.
