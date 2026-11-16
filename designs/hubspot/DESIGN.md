---
name: HubSpot
slug: hubspot
url: https://hubspot.com
category: Productivity
tagline: "Sprocket-orange CRM brand on warm cream with light serif headlines and 2px-border buttons."
updated: 2026-11-16
appStoreId: 1107711722
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: HubSpot Orange
    hex: "#FF4800"
    role: Logo, primary buttons, brand accents
  - name: Ink
    hex: "#1F1F1F"
    role: Text, borders, tertiary buttons, footer
  - name: Cream
    hex: "#F8F5EE"
    role: Section background
  - name: Off White
    hex: "#FCFCFA"
    role: Page background
  - name: Deep Teal
    hex: "#042729"
    role: Dark section background
  - name: Teal
    hex: "#2F7579"
    role: Highlight borders, free-plan tags
  - name: Orange Hover
    hex: "#C93700"
    role: Primary hover, orange text on light
  - name: Orange Pressed
    hex: "#9F2800"
    role: Pressed state
  - name: Peach
    hex: "#FCC6B1"
    role: Accent fill, brand badge
  - name: Sage
    hex: "#B9CDBE"
    role: Accent background
  - name: Lavender
    hex: "#D7CDFC"
    role: Accent fill
  - name: Pink
    hex: "#FCC3DC"
    role: Accent background
  - name: Aqua
    hex: "#B2E9EB"
    role: Accent fill
  - name: Warm Gray
    hex: "#9B9897"
    role: Neutral decoration, muted
  - name: Success
    hex: "#00823A"
    role: Success text
  - name: Error
    hex: "#D9002B"
    role: Errors
fonts:
  display:
    family: "HubSpot Serif"
    fallback: "Source Serif 4"
    weights: [300, 500]
  body:
    family: "HubSpot Sans"
    fallback: "Inter"
    weights: [300, 500]
typeScale:
  - { role: Display 1, size: 112, weight: 300, lineHeight: 1.07, tracking: "-0.1875rem" }
  - { role: Display 2, size: 72, weight: 300, lineHeight: 1.22, tracking: "0" }
  - { role: H1, size: 48, weight: 300, lineHeight: 1.17, tracking: "0" }
  - { role: H2, size: 40, weight: 300, lineHeight: 1.2, tracking: "0" }
  - { role: H3, size: 24, weight: 500, lineHeight: 1.33, tracking: "0" }
  - { role: Body Large, size: 18, weight: 300, lineHeight: 1.56, tracking: "0" }
  - { role: Body, size: 16, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Micro, size: 12, weight: 500, lineHeight: 1.33, tracking: "0" }
radii: { sm: 4, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 40, 64, 96]
shadows:
  - { name: Card, value: "0 2px 8px rgba(31,31,31,0.08)" }
  - { name: Menu, value: "0 8px 24px rgba(31,31,31,0.12)" }
preview:
  bg: "#FCFCFA"
  surface: "#F8F5EE"
  text: "#1F1F1F"
  muted: "#9B9897"
  border: "#CFCCCB"
  accent: "#FF4800"
  accentText: "#FFFFFF"
  radius: 8
  buttonStyle: solid
---

# HubSpot

## 1. Visual Theme & Atmosphere

HubSpot makes a customer platform (CRM plus Marketing, Sales, Service, Content, Data and Revenue Hubs) for growing companies. After its recent rebrand the website is warmer and more editorial: an off-white page (`#FCFCFA`), cream bands (`#F8F5EE`), near-black ink text (`#1F1F1F`), light serif display headlines, and the brand's vivid **HubSpot Orange** `#FF4800` on the logo, primary buttons and small accents. Soft pastel fills (peach, sage, lavender, pink, aqua) and deep teal dark sections add range without diluting the orange.

The current homepage leads with a light serif headline, a short paragraph, and two buttons ("Get a demo" and "Get started free"), followed by an expandable video carousel of product features, Hub cards (Marketing, Sales, Customer Service, Content, Startups & Small Businesses), customer logos, testimonials and a dark footer.

What makes it recognisable:

- **The sprocket.** The "o" in HubSpot is a hub with three spokes ending in dots.
- **One hot orange.** `#FF4800` for the logo and main actions; hover darkens to `#C93700`.
- **Light-weight type.** Display and H1/H2 at weight 300 in HubSpot Serif; body at 300 in HubSpot Sans.
- **Warm neutrals** instead of gray: cream, off-white, warm gray `#9B9897`.
- **Thick 2px button borders** and 8px radius.

Mood words: friendly, warm, editorial, approachable, polished.

## 2. Color Palette & Roles

Values were read from the live hubspot.com CSS (`--light-theme-*` and `--dark-theme-*` tokens behind the `--cl-*` component layer).

| Token | Hex | Role |
|---|---|---|
| hubspot-brand-01 | `#FF4800` | Logo, primary button, brand text, brand borders |
| hover-brand-01 | `#C93700` | Primary hover, secondary button hover text |
| button-primary-fill-pressed | `#9F2800` | Pressed |
| button-secondary-fill-hover | `#FCECE6` | Secondary hover fill |
| badge-brand-fill-01 | `#FCC6B1` | Brand badge, secondary pressed |
| text-01 / border-01 | `#1F1F1F` | Text, strong borders, icons |
| icon-02 | `#292929` | Secondary icons |
| background-01 | `#FCFCFA` | Page |
| background-02 | `#F8F5EE` | Cream sections |
| container-01 | `#FFFFFF` | Cards |
| container-inverse / footer | `#1F1F1F` | Footer, inverse cards, tertiary button |
| link-02 | `#124548` | Teal link on light |
| border-highlight-01 | `#2F7579` | Highlight border, free tags |
| focus-01 | `#459195` | Focus ring |
| neutral-01 | `#9B9897` | Neutral decoration |
| neutral-background-01 | `#CFCCCB` | Neutral badges, dividers |

### Accent pastels (light theme)

| Name | Fill | Decoration |
|---|---|---|
| Neutral | `#CFCCCB` | `#9B9897` |
| Orange | `#FCC6B1` | `#FFA581` |
| Red | `#FCC5BE` | `#FFA499` |
| Green | `#B9CDBE` | `#9CBAA4` |
| Sand | `#ECE6D9` | `#CCC0A3` |
| Purple | `#D7CDFC` | `#C4B4F7` |
| Teal | `#B2E9EB` | `#97DADC` |
| Pink | `#FBDBE9` | `#FCC3DC` |

Accent section backgrounds: sage `#B9CDBE`, mauve `#D6C2D9`, pink `#FCC3DC`.

### Semantic

| State | Text | Background |
|---|---|---|
| Success | `#00823A` | `#BDE7CB` |
| Warning | `#EEB117` | `#FBEECE` |
| Error | `#D9002B` | `#FCC5BE` |
| Beta | `#7D53E9` | `#E5E1FA` |
| Free | `#2F7579` | `#CCF4F5` |

### Dark sections

Dark theme tokens: background `#042729` (deep teal) and `#093436`, accent backgrounds `#46062B` (plum) and `#25155E` (indigo), text and borders cream `#F8F5EE`, primary button still `#FF4800`, secondary button outlined in cream.

### Product (Canvas, approximate)

Inside the HubSpot app, the Canvas design system uses cooler slate neutrals (text around `#33475B`, borders `#CBD6E2`, panels `#F5F8FA`), teal links `#0091AE` and orange primary buttons. Treat these as approximate; the marketing tokens above are the current brand.

## 3. Typography

**Families:** **HubSpot Sans** for UI and body text and **HubSpot Serif** for display and large headlines, both custom and not publicly licensed. Japanese pages switch to Zen Kaku Gothic New. Free fallbacks: **Inter** for HubSpot Sans and **Source Serif 4** for HubSpot Serif.

### Scale (desktop; mobile in brackets)

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display 01 (serif) | 112px (56px) | 300 | 1.07 | -0.1875rem |
| Display 02 (serif) | 72px (56px) | 300 | 1.22 | normal |
| Display 03 | 24px | 500 | 1.42 | normal |
| H1 | 48px (40px) | 300 | 1.17 (approximate) | normal |
| H2 | 40px (32px) | 300 | 1.2 (approximate) | normal |
| H3 | 24px | 500 | 1.33 (approximate) | normal |
| H4 | 22px | 500 | 1.36 (approximate) | normal |
| H5 | 18px | 500 | 1.44 (approximate) | normal |
| Body large | 18px | 300 | 1.56 (approximate) | normal |
| Body | 16px | 300 | 1.5 (approximate) | normal |
| Small | 14px | 300 | 1.43 (approximate) | normal |
| Micro / microheading | 12px | 500 | 1.33 | normal |

### Rules

- Display and H1/H2 are light (300). H3 and smaller headings, buttons and labels are medium (500).
- Sentence case everywhere ("Get started free", "Get a demo").
- Links in body text are ink with an orange underline (`text-link-underline-01: #FF4800`).
- Product names capitalised: Marketing Hub, Sales Hub, Smart CRM, Breeze, Agent Hub.

## 4. Logo & Brand Mark

The logo is the **HubSpot** wordmark in a rounded geometric sans with the **sprocket** replacing the "o": a ring with three spokes, each ending in a dot. The whole lockup is HubSpot Orange `#FF4800` on light backgrounds.

- **Versions:** full wordmark, sprocket alone (app icon and favicon).
- **Colors:** orange on white/cream; white on orange; white or cream on ink and deep teal.
- **Clear space:** the height of the sprocket's ring on all sides (approximate).
- **Minimum size:** wordmark about 80px wide; sprocket 16px (approximate).
- The bundled `logo.svg` is the header logo from hubspot.com.

Misuse: do not use the older coral `#FF7A59` or `#FF5C35` logo, rotate the sprocket, add spokes, or set the wordmark in another colour on orange.

## 5. Components

### Buttons (`.cl-button`)

2px border, 8px radius, weight 500. Padding: small `8px 16px`, medium `12px 24px`, large `16px 40px`.

| Variant | Background | Text | Border | Hover | Pressed |
|---|---|---|---|---|---|
| Primary | `#FF4800` | `#FFFFFF` | transparent | `#C93700` | `#9F2800` |
| Secondary | `#FFFFFF` | `#FF4800` | 2px `#FF4800` | fill `#FCECE6`, text and border `#C93700` | fill `#FCC6B1`, text `#9F2800` |
| Tertiary | `#1F1F1F` | `#FFFFFF` | transparent | lighter ink (approximate) | |
| Tertiary outline | transparent | `#1F1F1F` | 2px `#1F1F1F` | fill `#1F1F1F`, text white (approximate) | |
| On dark secondary | transparent | `#F8F5EE` | 2px `#F8F5EE` | cream fill (approximate) | |

```css
.hs-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 24px;
  font: 500 16px/1.5 "HubSpot Sans", Inter, system-ui, sans-serif;
  color: #fff; background: #FF4800;
  border: 2px solid transparent; border-radius: 8px;
  transition: background-color 150ms ease, color 150ms ease, border-color 150ms ease;
}
.hs-btn:hover { background: #C93700; }
.hs-btn:active { background: #9F2800; }
.hs-btn--secondary { background: #fff; color: #FF4800; border-color: #FF4800; }
.hs-btn--secondary:hover { background: #FCECE6; color: #C93700; border-color: #C93700; }
.hs-btn:focus-visible { outline: 2px solid #459195; outline-offset: 2px; }
```

### Navigation

Two-tier header. A thin utility bar (language, "Contact Sales", "Log in", "Customer Support") above a main bar with the orange logo, then "Products", "Solutions", "Resources", "Pricing" dropdowns, search, and on the right "Get a demo" (secondary) and "Get started free" (primary). Product menus list each Hub with a one-line description ("Marketing automation software") and a "Free and premium plans" note, plus a featured panel for "The HubSpot Customer Platform".

### Cards (`.cl-card`)

White container on cream, 16px radius (8px small), 1px `#1F1F1F` or no border, 24-32px padding, headline in H4, body light 300, arrow text link. Pastel variants use the accent fills.

### Badges

Small pills (`--cl-border-radius-round`), 12px/500 micro text, 1px border in the decoration colour over the matching fill: "Beta" purple, "Free" teal, brand peach.

### Feature carousel

Expandable video cards in a horizontal row; the active card widens to show a product video with caption, others collapse to narrow panels with vertical titles; round play/pause buttons (`.cl-roundButton`).

### Checkmark lists

Orange check icons (`checkmark-list-icon-brand-fill: #FF4800`) beside 16px light text, used in plan comparisons.

### Forms

Inputs 48px tall, 4px radius (`--cl-border-radius-input`), 1px `#1F1F1F` border, 16px text, labels 14px/500; focus ring teal `#459195`; error `#D9002B` with `#FCC5BE` tint.

### Logo carousel and testimonials

Grayscale customer logos (eBay and others) scrolling with a pause button; testimonial cards with a serif quote, name and role.

### Footer

Ink `#1F1F1F` background, cream text, multi-column link lists, orange sprocket, language selector and social icons.

## 6. Layout & Spacing

- **Container:** about 1080-1280px with 24-40px gutters; long-form text near 712px.
- **Grid:** 12 columns; Hub cards in 3-5 columns.
- **Spacing:** 4px base, 8px rhythm (8, 16, 24, 32, 40, 64, 96).
- **Breakpoints:** about 600, 900, 1080 and 1440px (approximate).
- **Density:** relaxed marketing pages with big headlines; the HubSpot app is dense (13-14px text, tables of contacts and deals).

## 7. Depth, Elevation & Motion

- Mostly flat; colour bands and borders carry hierarchy.
- Cards: soft shadow around `0 2px 8px rgba(31,31,31,0.08)`; menus `0 8px 24px rgba(31,31,31,0.12)` (both approximate).
- Radii: 4px inputs, 8px buttons and small containers, 16px cards, pills for badges, 48px on some media frames.
- Motion: 150-250ms colour transitions; carousels expand smoothly; reduced-motion respected with pause controls.

## 8. Iconography & Imagery

- **Icons:** `cl-icon` set, rounded line icons in ink, 16-24px, orange for brand moments.
- **Imagery:** product UI (CRM records, email editor, AI agent chats) on pastel backgrounds; warm photography of small-business teams.
- **Illustration:** flat shapes in the pastel accent palette with orange highlights.

## 9. Voice & Microcopy

Friendly, clear, helpful; written for growing businesses rather than engineers.

- Headlines: "The HubSpot Customer Platform", "Introducing the Customer Relationship Harness".
- CTAs: "Get a demo", "Get started free", "Learn more", "See all integrations", "Contact Sales".
- Menu copy: "Sales software", "Free and premium plans", "Convert visitors into contacts for your database."
- Avoid jargon; explain the outcome first.

## 10. Do's and Don'ts

**Do**

- Use HubSpot Orange `#FF4800` for the logo and one main action per view.
- Use cream `#F8F5EE` and off-white `#FCFCFA` instead of cold grays.
- Set big headlines in a light serif (300); keep body text light and readable.
- Give buttons 2px borders and 8px radius.
- Use the pastel accent pairs (fill + decoration) for cards and badges.

**Don't**

- Don't use the old coral `#FF7A59` as the brand colour.
- Don't set headlines in heavy bold sans.
- Don't place orange text on pastel orange fills at small sizes.
- Don't use pure black; use `#1F1F1F`.
- Don't overload a section with more than two pastel accents.

## 11. Agent Prompt Guide

> Build this UI in the style of HubSpot. Page `#FCFCFA`, cream bands `#F8F5EE`, white cards, text ink `#1F1F1F`, neutral `#9B9897`, dividers `#CFCCCB`. Headlines in a light serif (HubSpot Serif, fallback Source Serif 4) at weight 300, 40-72px, sentence case; body in HubSpot Sans (fallback Inter) 16-18px weight 300; labels and buttons weight 500. Primary button: `#FF4800` fill, white text, 2px transparent border, 8px radius, 12px 24px padding, hover `#C93700`, pressed `#9F2800`. Secondary: white fill, 2px orange border, orange text, hover `#FCECE6`. Header with the orange sprocket logo, Products/Solutions/Resources/Pricing, and "Get a demo" + "Get started free". Cards 16px radius with pastel accents (peach `#FCC6B1`, sage `#B9CDBE`, lavender `#D7CDFC`, aqua `#B2E9EB`). Dark sections in deep teal `#042729` with cream text. Focus ring teal `#459195`.

```css
:root {
  --brand-orange: #FF4800;
  --brand-orange-hover: #C93700;
  --brand-orange-pressed: #9F2800;
  --brand-orange-tint: #FCECE6;
  --brand-peach: #FCC6B1;
  --brand-ink: #1F1F1F;
  --brand-bg: #FCFCFA;
  --brand-cream: #F8F5EE;
  --brand-surface: #FFFFFF;
  --brand-neutral: #9B9897;
  --brand-divider: #CFCCCB;
  --brand-teal-dark: #042729;
  --brand-teal: #2F7579;
  --brand-focus: #459195;
  --brand-sage: #B9CDBE;
  --brand-lavender: #D7CDFC;
  --brand-aqua: #B2E9EB;
  --brand-pink: #FCC3DC;
  --brand-success: #00823A;
  --brand-warning: #EEB117;
  --brand-error: #D9002B;
  --brand-font: "HubSpot Sans", Inter, system-ui, sans-serif;
  --brand-font-display: "HubSpot Serif", "Source Serif 4", Georgia, serif;
  --brand-radius-sm: 4px;
  --brand-radius: 8px;
  --brand-radius-card: 16px;
  --brand-border-heavy: 2px;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by HubSpot.
