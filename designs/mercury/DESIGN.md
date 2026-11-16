---
name: Mercury
slug: mercury
url: https://mercury.com
category: Finance
tagline: "Dark, dreamy banking: indigo-black canvas, soft serif and sans type, periwinkle accents."
updated: 2026-11-16
appStoreId: 1491984028
logoBackground: "#171721"
theme: dark
colors:
  - name: Night
    hex: "#171721"
    role: Dark page background (dark-neutral theme)
  - name: Mercury Purple
    hex: "#5266EB"
    role: Primary button fill, links, focus
  - name: Mist
    hex: "#EDEDF3"
    role: Primary text and logo on dark
  - name: Periwinkle
    hex: "#9CB4E8"
    role: Primary accent and links on dark
  - name: Neutral 900
    hex: "#1E1E2A"
    role: Default surface on dark (cards, chips)
  - name: Neutral 800
    hex: "#272735"
    role: Raised surface, hover on dark
  - name: Purple Hover
    hex: "#4354C8"
    role: Primary button hover
  - name: Purple Active
    hex: "#3442A6"
    role: Primary button pressed
  - name: Neutral 300
    hex: "#C3C3CC"
    role: Secondary text on dark
  - name: Neutral 500
    hex: "#70707D"
    role: Muted text, disabled
  - name: Neutral 50
    hex: "#FBFCFD"
    role: Light theme page background
  - name: Neutral 150
    hex: "#EDEDF3"
    role: Light theme default surface
  - name: Beige 100
    hex: "#F6F5F2"
    role: Warm light theme background for editorial pages
  - name: Ink
    hex: "#272735"
    role: Default text in light theme
  - name: Teal
    hex: "#007F95"
    role: Blue-theme accent
  - name: Orange
    hex: "#C45000"
    role: Orange-theme accent
fonts:
  display:
    family: "Arcadia Display"
    fallback: "Inter Tight"
    weights: [360, 480]
  body:
    family: "Arcadia"
    fallback: "Inter"
    weights: [360, 400, 480]
  mono:
    family: "IBM Plex Mono"
    fallback: "IBM Plex Mono"
    weights: [400]
typeScale:
  - { role: Display 1, size: 96, weight: 480, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Display 3, size: 73, weight: 480, lineHeight: 1.1, tracking: "-0.01em" }
  - { role: Display 4, size: 63, weight: 480, lineHeight: 1.1, tracking: "0" }
  - { role: Subheading (Tiempos), size: 42, weight: 400, lineHeight: 1.1, tracking: "0.005em" }
  - { role: Title, size: 28, weight: 480, lineHeight: 1.2, tracking: "0" }
  - { role: Body 1, size: 18, weight: 360, lineHeight: 1.35, tracking: "0" }
  - { role: Body 2, size: 16, weight: 360, lineHeight: 1.35, tracking: "0" }
  - { role: UI, size: 14, weight: 480, lineHeight: 1.0, tracking: "0.01em" }
radii: { sm: 4, md: 12, lg: 32, pill: 9999 }
spacing: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Frosted panel, value: "0 0 0 1px rgba(112,115,147,0.2), 0 24px 48px rgba(0,0,0,0.35)" }
  - { name: Screenshot, value: "0 30px 60px rgba(0,0,0,0.45)" }
preview:
  bg: "#171721"
  surface: "#1E1E2A"
  text: "#EDEDF3"
  muted: "#C3C3CC"
  border: "#363644"
  accent: "#5266EB"
  accentText: "#FFFFFF"
  radius: 32
  buttonStyle: pill
---

# Mercury

## 1. Visual Theme & Atmosphere

Mercury is a fintech offering business banking for startups (and a personal account), and its site is unusually atmospheric for a bank. The homepage opens on a near-black, faintly indigo canvas (`#171721`) with soft, dream-like imagery, light text (`#EDEDF3`), elegant serif subheads and a calm periwinkle-to-purple accent. It feels closer to a design studio than a bank.

What makes it recognisable:

- **Dark-neutral theme.** Most of the homepage uses `data-theme="darkNeutral"`: background `#171721`, surfaces `#1E1E2A` and `#272735`, text `#EDEDF3`.
- **Arcadia + Tiempos.** A custom geometric-humanist sans (Arcadia, with variable weights like 360 and 480) for display and UI, paired with Tiempos serif for elegant subheadings.
- **Odd variable weights.** Body copy at weight 360 and headlines at 480 give the type a soft, slightly light texture.
- **Purple primary.** Primary buttons are `#5266EB`, rounded into pills (32-40px radius), with white text.
- **Frosted surfaces.** Translucent panels (`rgba` of `#707393`) with thin borders float product screenshots over the dark canvas.
- **The emblem.** A circular logo made of interlocking swirls, beside spaced capitals "MERCURY".
- **Multiple themes.** Pages switch between dark-neutral, neutral (light), beige, and tinted blue, green, orange and purple themes using the same token names.

Density is low on marketing pages: big headlines, lots of dark space, a few strong product shots.

Mood words: refined, calm, premium, crafted, quiet.

## 2. Color Palette & Roles

Values from mercury.com CSS variables (`--color-*-base-*`, `--color-*-magic-*`, semantic `--surface-*`, `--text-*`), read 2026-11-16.

### Neutral scale

| Token | Hex | Dark theme role | Light theme role |
|---|---|---|---|
| neutral-base-0 | `#FFFFFF` | | Raised surface |
| neutral-base-50 | `#FBFCFD` | | Page background |
| neutral-base-100 | `#F4F5F9` | | Emphasized text on dark |
| neutral-base-150 | `#EDEDF3` | Default text | Default surface |
| neutral-base-200 | `#DDDDE5` | | Surface hover |
| neutral-base-300 | `#C3C3CC` | Subdued text, borders | Borders |
| neutral-base-400 | `#9D9DA8` | Disabled text | |
| neutral-base-500 | `#70707D` | Disabled surfaces | Disabled text |
| neutral-base-600 | `#535461` | Borders | Subdued text |
| neutral-base-700 | `#363644` | Surface active | |
| neutral-base-800 | `#272735` | Surface hover, raised | Default text |
| neutral-base-900 | `#1E1E2A` | Default surface | Emphasized text |
| neutral-base-950 | `#171721` | Page background | |
| neutral-base-1000 | `#10101A` | Deepest | |

### Purple (primary)

| Token | Hex | Role |
|---|---|---|
| purple-magic-200 | `#CDDDFF` | Tint |
| purple-magic-300 | `#B4C9F8` | Hover on dark |
| purple-magic-400 | `#9CB4E8` | Primary text/border on dark |
| purple-magic-600 | `#5266EB` | Primary surface (buttons), primary text on light |
| purple-magic-700 | `#4354C8` | Primary hover |
| purple-magic-800 | `#3442A6` | Primary active |

### Theme accents

| Theme | Accent | Hex |
|---|---|---|
| Blue | blue-magic-600 | `#007F95` |
| Orange | orange | `#C45000` |
| Beige | beige-base-100 / 600 | `#F6F5F2` / `#5A5548` |
| Purple base | purple-base-950 | `#181623` |

Errors use a red "magic" scale (around `#D03275`, approximate). Success uses the green scale (approximate).

## 3. Typography

- **Arcadia** (text) and **Arcadia Display**: Mercury's custom variable sans. Proprietary.
- **Tiempos** (Klim): Tiempos Headline and Tiempos Fine for serif subheads. Licensed.
- **IBM Plex Mono**: numbers and code. Free.

Fallbacks: **Inter** for Arcadia text, **Inter Tight** for Arcadia Display (approximate), **Source Serif 4** or **Newsreader** for Tiempos (approximate).

Classes on the site:

| Class | Size | Weight | Line height |
|---|---|---|---|
| arcadia-display-1 / 5 | clamp(42px → 96px) | 480 / 360 | 1.1 |
| arcadia-display-2 / 6 | clamp(36px → 84px) | 480 / 360 | 1.1 |
| arcadia-display-3 / 7 | clamp(32px → 73px) | 480 / 360 | 1.1 |
| arcadia-display-4 / 8 | clamp(28px → 63px) | 480 / 360 | 1.1 |
| tiempos-subheading-1 | 28 → 42px | 400 | 1.1-1.2 |
| arcadia-body-1 | 16 → 21px | 360 | 1.35 |
| arcadia-body-2 | 14 → 18px | 360 | 1.35 |
| arcadia-body-3 | 14 → 16px | 400 | 1.4 |
| arcadia-body-4 | 12 → 14px | 400 | 1.4 |
| arcadia-ui-1 / ui-2 | 16 / 14px | 480 | 1 |
| arcadia-ui-4 | 14px | 500 | 1, tracking 2% |

Text tokens: xxs 10, xs 12, sm 14, base 16, md 18, lg 21, xl 24, 2xl 28, 3xl 32, 4xl 36, 5xl 42, 6xl 48, 7xl 55px.

Rules:

- Headlines in sentence case, centred on hero sections ("Radically different banking", read on the site 2026-11-16).
- Use Tiempos for a single elegant line per section, never for UI.
- Weight 360 body text needs good contrast: keep it on `#171721` with `#EDEDF3` or `#C3C3CC`.
- UI labels: ligatures off on small caps-like labels (`font-feature-settings: "liga" off`).

## 4. Logo & Brand Mark

The logo combines a **circular emblem** (an outer ring holding four interlocking swirl loops around a centre dot) with the wordmark **MERCURY** in widely spaced capitals.

- Emblem alone: app icon and favicon.
- Colors: light `#EDEDF3` on dark `#171721`; dark ink on light backgrounds. Single color only.
- Clear space: half the emblem diameter.
- Minimum size: 100px wide for the lockup, 20px for the emblem (fine lines fill in below that).
- Don't: fill the emblem's counters, recolor it purple, add glows, or tighten the wordmark spacing.

`logo.svg` is the header lockup in `#EDEDF3` for dark backgrounds. `icon.svg` is the emblem on Night.

## 5. Components

### Buttons

Pill-shaped (rounded-4xl 32px or rounded-5xl 40px).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  height: 40px; padding: 0 20px; border-radius: 9999px;
  font: 480 16px/1 "Arcadia", Inter, sans-serif;
  transition: background-color 300ms ease-out, color 300ms ease-out;
  outline-offset: 4px;
}
.btn--sm { height: 32px; padding: 0 16px; font-size: 14px; }
.btn--primary { background: #5266EB; color: #FFFFFF; }
.btn--primary:hover { background: #4354C8; }
.btn--primary:active { background: #3442A6; }
.btn--tonal { background: #1E1E2A; color: #EDEDF3; }      /* surface-emphasized, approx. */
.btn--tonal:hover { background: #272735; }
.btn--text { background: transparent; color: #EDEDF3; }
.btn--text:hover { background: #272735; }
.btn:focus-visible { outline: 2px solid #9CB4E8; }
.btn[aria-disabled="true"] { background: #535461; color: #9D9DA8; }
```

Variants on the site: `primary`, `tonal`, `text`. Header shows "Log in" (text) and "Open account" (primary).

### Inputs

- 48px tall (approximate), surface-input fill (`#272735` on dark, `#FBFCFD` on light), 1px border at neutral-magic-600 alpha, 12px radius.
- Focus border periwinkle `#9CB4E8` (dark) or `#5266EB` (light).
- Email capture in the hero: input plus primary pill in one rounded container.

### Cards and frosted panels

- Frosted cards: background `rgba(112,115,147,0.12)` (approximate), 1px border `rgba(112,115,147,0.2)`, `backdrop-filter: blur(20px)`, 24-32px radius.
- Press cards ("Mercury hits $5.2B valuation", read 2026-11-16): small headline, publication name, tonal "Read more" pill.
- Product cards ("Mercury for business", "Mercury for personal"): large rounded image tile with a short title and price line.

### Navigation

- Transparent dark header over the hero, emblem + MERCURY left, menus centred, text "Log in" and primary "Open account" pills right.
- Mobile: hamburger made of two animated lines (stroke 4px, round caps) that cross into an X.

### Product screenshot frames

Dashboard screenshots with 12-16px radius, thin `#363644` border and deep shadow, sometimes tilted slightly or placed over soft painted backgrounds.

### Footnotes

Disclaimers are long and linked from small superscript markers; style them in `arcadia-body-4` with subdued text.

## 6. Layout & Spacing

- Max grid width around 1440px (`max-w-grid-max-width`, approximate), text blocks capped at 688px (`max-w-688`).
- Spacing tokens use an `s` prefix: s4, s8, s12, s16, s20, s24, s32, s48, s64, s96, s128 (approximate set).
- Hero: centred headline and subcopy, one CTA row, then a large product image.
- Section padding 96-160px on desktop, 64px on mobile.
- Breakpoints: sm 640, md 768, lg 1024, xl 1280 (Tailwind-based).

## 7. Depth, Elevation & Motion

- Depth comes from layered dark surfaces (`#171721` → `#1E1E2A` → `#272735`) and frosted glass, not heavy shadows.
- Screenshot shadow: about `0 30px 60px rgba(0,0,0,0.45)` (approximate).
- Easing: `cubic-bezier(.16,0,.13,1)` (most common), `cubic-bezier(.2,1,.4,1)` for springy reveals, `cubic-bezier(.7,0,.3,1)` for symmetric transitions.
- Button colors transition over 300ms ease-out.
- Hero imagery fades and drifts slowly; avoid fast or bouncy motion.

## 8. Iconography & Imagery

- Icons: Font Awesome-style solid/regular glyphs at 14-16px, inline with text, often fading in on hover beside links.
- Imagery: painterly, dream-like scenes (clouds, landscapes, soft light) and abstract renders, with product UI layered on top.
- Product UI: Mercury's own dashboard in its light theme, crisp and minimal, shown in large frames.
- Photography of founders appears in customer stories, toned warm and soft.

## 9. Voice & Microcopy

Calm, assured, craftsmanship-minded. Mercury talks about building something that lasts.

Sample strings (mercury.com, read 2026-11-16):

- Hero: "Radically different banking"
- "You're creating something to stand the test of time. So are we."
- "Banking – redesigned from the ground up."
- "Building banking for the agentic era"
- CTAs: "Open account", "Log in", "Read more"

Always note that Mercury is a fintech company, not a bank, where banking services are mentioned (the site's footnotes do this). Sentence case throughout.

## 10. Do's and Don'ts

**Do**

- Use the dark-neutral canvas `#171721` with `#EDEDF3` text for brand pages.
- Use pill buttons in `#5266EB`, tonal pills for secondary.
- Pair Arcadia (light 360 body, 480 headlines) with one Tiempos serif line.
- Layer surfaces and frosted glass for depth.
- Keep layouts sparse and centred.

**Don't**

- Don't use pure black `#000` or bright saturated gradients.
- Don't use heavy bold weights; Mercury stays between 360 and 500.
- Don't square off buttons.
- Don't crowd the hero with multiple CTAs or badges.
- Don't call Mercury a bank in copy.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Mercury. Dark canvas `#171721`, surfaces `#1E1E2A` and `#272735`, borders `#363644`, text `#EDEDF3`, subdued text `#C3C3CC`. Fonts: "Arcadia" (fallback Inter) for body at weight 360, 16-21px, line-height 1.35; "Arcadia Display" (fallback Inter Tight) for centred hero headlines at weight 480, clamp(42px, 4vw + 1rem, 96px), line-height 1.1; one serif subheading per section in "Tiempos" (fallback Source Serif 4) at 400. Buttons are pills (40px tall, 20px padding, weight 480): primary `#5266EB` with white text (hover `#4354C8`, active `#3442A6`), tonal `#1E1E2A` with light text, text buttons transparent. Focus outline `#9CB4E8`, offset 4px. Use frosted panels (`rgba(112,115,147,0.12)` fill, `rgba(112,115,147,0.2)` border, 20px backdrop blur, 24-32px radius) over soft, painterly background imagery, with a large product screenshot in a 16px-radius frame. Easing `cubic-bezier(.16,0,.13,1)`, 300ms. Copy is calm and assured.

```css
:root {
  --brand-bg: #171721;
  --brand-surface: #1E1E2A;
  --brand-surface-hover: #272735;
  --brand-surface-active: #363644;
  --brand-border: #363644;
  --brand-text: #EDEDF3;
  --brand-text-emphasized: #F4F5F9;
  --brand-text-subdued: #C3C3CC;
  --brand-text-disabled: #9D9DA8;
  --brand-primary: #5266EB;
  --brand-primary-hover: #4354C8;
  --brand-primary-active: #3442A6;
  --brand-primary-on-dark: #9CB4E8;
  --brand-light-bg: #FBFCFD;
  --brand-light-surface: #EDEDF3;
  --brand-light-text: #272735;
  --brand-beige: #F6F5F2;
  --brand-teal: #007F95;
  --brand-orange: #C45000;
  --brand-frost: rgba(112,115,147,0.12);
  --brand-frost-border: rgba(112,115,147,0.2);
  --brand-font: "Arcadia", "Inter", sans-serif;
  --brand-font-display: "ArcadiaDisplay", "Inter Tight", sans-serif;
  --brand-font-serif: "Tiempos Headline", "Source Serif 4", Georgia, serif;
  --brand-font-mono: "IBM Plex Mono", monospace;
  --brand-radius-sm: 4px;
  --brand-radius-md: 12px;
  --brand-radius-lg: 16px;
  --brand-radius-4xl: 32px;
  --brand-radius-5xl: 40px;
  --brand-ease: cubic-bezier(.16, 0, .13, 1);
}
```

---

Values are observed from the public mercury.com stylesheets on 2026-11-16; shadows, frosted-panel values, input styling and serif fallbacks are approximate. This file is an unofficial reference and is not affiliated with or endorsed by Mercury.
