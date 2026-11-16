---
name: Brown University
shortName: "Brown"
slug: brown
url: https://www.brown.edu
category: Education
tagline: "Seal brown and cardinal red on warm white, Minion Pro headlines and Circular UI."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Brown
    hex: "#4E3629"
    role: Primary brand colour, wordmark, headings, secondary buttons
  - name: Red
    hex: "#C00404"
    role: Accent, primary CTA buttons, rules, focus and hover states
  - name: Gold
    hex: "#FFC72C"
    role: Highlight accent, shield sun, small callouts
  - name: White
    hex: "#FFFFFF"
    role: Page background
  - name: Gray 90
    hex: "#222222"
    role: Body text
  - name: Light Gray
    hex: "#F8F7F5"
    role: Warm section background, small button fill
  - name: Extra Light Beige
    hex: "#EFECE5"
    role: Card fills, button borders, alternating bands
  - name: Beige
    hex: "#D7D3C8"
    role: Dividers on beige, muted panels
  - name: Taupe
    hex: "#B7B09C"
    role: Decorative rules, secondary illustration tone
  - name: Text Gray
    hex: "#434343"
    role: Secondary text, captions
  - name: Navy
    hex: "#002B52"
    role: Occasional dark buttons and feature bands
  - name: Slate
    hex: "#98A4AE"
    role: Cool neutral accents, offset shadows
  - name: Cool Light
    hex: "#E2E5E8"
    role: Cool panel backgrounds, keylines
  - name: Teal
    hex: "#00B398"
    role: Tertiary accent for data and illustration
fonts:
  display:
    family: "Minion Pro"
    fallback: "Crimson Pro"
    weights: [400, 600, 700]
  body:
    family: "Circular Std"
    fallback: "DM Sans"
    weights: [400, 500, 700]
typeScale:
  - { role: Display, size: 46, weight: 700, lineHeight: 1.13, tracking: "0" }
  - { role: H2, size: 36, weight: 400, lineHeight: 1.28, tracking: "0" }
  - { role: H3, size: 24, weight: 400, lineHeight: 1.33, tracking: "0" }
  - { role: Body Serif, size: 18, weight: 400, lineHeight: 1.78, tracking: "0" }
  - { role: UI, size: 16, weight: 400, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Kicker, size: 13, weight: 700, lineHeight: 1.3, tracking: "0.05em" }
radii: { sm: 2, md: 4, lg: 8, pill: 9999 }
spacing: [4, 8, 16, 20, 30, 40, 60, 80]
shadows:
  - { name: Offset Card, value: "8px 8px 0 rgba(152,164,174,0.25)" }
  - { name: Flat Offset, value: "5px 5px 0 #EAEAEA" }
  - { name: Soft, value: "0 0 9px 0 rgba(0,0,0,0.12)" }
preview:
  bg: "#FFFFFF"
  surface: "#F8F7F5"
  text: "#222222"
  muted: "#434343"
  border: "#EFECE5"
  accent: "#C00404"
  accentText: "#FFFFFF"
  radius: 2
  buttonStyle: solid
---

# Brown University

## 1. Visual Theme & Atmosphere

Brown's site looks like a well-made printed magazine that happens to be on screen. The page is white or a warm off-white (`#F8F7F5`, `#EFECE5`), the brand colour is a dark seal brown (`#4E3629`) that reads almost like ink, and a saturated cardinal red (`#C00404`) handles every call to action. Headlines that carry weight are set in Minion Pro, a classical book serif; navigation, labels, section headings and buttons are set in Circular, a geometric sans. The two together give it a slightly more contemporary feel than most Ivy sites.

What makes it recognisable:

- **Brown, not navy.** Most universities lean on blue. Brown's primary colour is literally brown, which makes everything warmer: brown wordmark, brown text links in small buttons, beige and taupe neutrals.
- **Red as the action colour.** Red is used for buttons, hover states, search borders and thin accent rules. It is never a background for large areas.
- **Warm neutrals.** Light grays have a yellow-beige cast (`#F8F7F5`, `#EFECE5`, `#D7D3C8`, `#B7B09C`). Cool grays (`#E2E5E8`, `#98A4AE`) appear as a second, quieter family.
- **Offset flat shadows.** Feature cards and images sometimes get a hard, unblurred offset shadow (`8px 8px 0` in translucent slate, or `5px 5px 0 #EAEAEA`). It is a small but distinctive detail.
- **The shield.** A white shield with a red cross and four open books, topped by a sun in clouds in the full arms. The wordmark "BROWN" is set in wide-spaced capitals.

Density is medium. The homepage leads with a full-bleed video hero ("Brown brings students together in creative, unexpected ways."), then a news rail with "Featured" and "Most Recent" tabs, an academics block listing the schools, a "Find your way around Brown" section with tabbed link cards, and a large footer.

## 2. Color Palette & Roles

### Core

Values below are taken from the custom properties in brown.edu's live CSS (`--color-brown`, `--color-red`, `--color-yellow` and so on). Pantone references are commonly cited ones from older Brown standards and are approximate; the current Visual Identity Standards are published as an interactive course that was not machine-readable.

| Name | Hex | Print (approx.) | Role |
| --- | --- | --- | --- |
| Brown | `#4E3629` | PMS 4625 | Wordmark, headings, small-button text, brand bands |
| Red | `#C00404` | PMS 185 family | CTA buttons, hover, focus rings, accent rules |
| Gold | `#FFC72C` | PMS 123 | Highlights, the sun in the arms, small callouts |
| White | `#FFFFFF` | n/a | Page background, text on red and brown |
| Black | `#000000` | n/a | Alternate dark header, high-contrast text |

The shield artwork in the official vector uses a brighter print red (`#ED1B2E`) and gold (`#F5C142`). Keep those inside the shield; use `#C00404` and `#FFC72C` in UI.

### Neutrals

| Name | Hex | Role |
| --- | --- | --- |
| Gray 90 | `#222222` | Default body text |
| Text Gray | `#434343` | Secondary text, metadata |
| Mid Gray | `#5B5B5B` | Captions, disabled labels |
| Light Gray | `#F8F7F5` | Warm section background, small button fill |
| Extra Light Beige | `#EFECE5` | Card fill, button border, alternating band |
| Beige | `#D7D3C8` | Dividers on beige, quiet panels |
| Taupe | `#B7B09C` | Decorative rules |
| Cool Light | `#E2E5E8` | Cool panel background |
| Cool Lighter | `#F0F2F3` | Cool section background |
| Slate | `#98A4AE` | Cool accent, offset shadow tint |
| Slate Dark | `#687078` | Secondary text on cool panels |

### Tertiary accents

Used in data graphics, illustrations and unit sites, never as the main colour: Teal `#00B398`, Deep Teal `#008672`, Sky `#59CBE8`, Ocean `#007DA0`, Navy `#002B52`, Dark Navy `#003C71`.

### Contrast

- Brown on white is about 12:1; Red on white about 6:1. Both pass AA for body text.
- White on Red passes AA. Do not set Red text on Brown (about 2:1) or Gold text on white (fails).
- Gold works as a fill behind Brown or black text only.

### Mode

Light only. A black header variant (`.header { background: #000 }`) is used over dark video heroes; there is no dark theme.

## 3. Typography

- **Minion Pro** (Adobe Fonts, served via Typekit as `minion-pro`): long-form body text, hero and page titles, pull quotes. Weights 400, 600, 700, with italics. Fallback: Crimson Pro, then Georgia.
- **Circular Std** (Lineto, self-hosted as `CircularStd`): navigation, section headings (h2, h3), buttons, labels, cards, forms. Weights 400 and 700, sometimes 500. Fallback: DM Sans, then Helvetica.

Brown's identity policy says all approved typefaces are available to the community through the university's Adobe Creative Cloud licence, and lists "Universal Alternative Fonts" for when they are not available. Outside Brown, use the Google Fonts fallbacks above.

### Scale

| Role | Family | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- | --- |
| Display / page title | Minion Pro | 46px (36px mobile) | 700 | 1.13 | Sentence case |
| H2 section | Circular | 36px (24px mobile) | 400 | 1.28 | Sentence case |
| H2 feature (serif) | Minion Pro | 32px | 700 | 1.0 | Red, inside feature blocks |
| H3 | Circular | 24-27px | 400 | 1.3 | Card and block titles |
| Body (serif) | Minion Pro | 18px (16px mobile) | 400 | 1.78 | Article copy |
| UI / nav | Circular | 16px | 400 | 1.5 | Menus, links |
| Small / button | Circular | 14px | 400-700 | 1.4 | Buttons, meta |
| Kicker / date | Circular | 13px | 700 | 1.3 | Category labels, dates |

### Rules

- Sentence case for headings and buttons ("Read Article", "View more news", "Visit Page").
- Circular headings are regular weight (400), not bold; size does the work.
- Minion for reading, Circular for doing. Do not set navigation or buttons in the serif.
- Lining figures in UI; old-style figures are fine in Minion body copy.
- Measure: 65-75 characters for article text (about 685-800px).

## 4. Logo & Brand Mark

The university logo is the **coat of arms** (shield) paired with the **BROWN** wordmark. The wordmark file here is the stand-alone "BROWN" in Brown `#4E3629`: widely spaced classical capitals with fine serifs.

- **Shield:** white field, red cross, four open books (one in each quarter), with a black outline. The full arms add a crest of a sun rising from clouds. The icon in this folder uses the shield without the crest.
- **Colour versions:** Brown wordmark on white; white reversed on Brown or black; one-colour black for single-ink use. The shield appears in full colour or one colour.
- **Clear space:** at least the cap height of the "B" on every side.
- **Minimum size:** keep the wordmark at least 90px wide on screen; below that, use the shield alone.
- **Trademark:** the policy lists the words BROWN, Brown University, the seal, the coat of arms with and without the wordmark, Bruno the Bear and the Athletics B among protected marks. Units use affinity lockups supplied by University Communications; do not build your own.

Misuse: do not recolour the wordmark red, set "BROWN" in another typeface, outline or stretch it, place it on busy photos without a solid panel, or combine the shield with athletics marks.

## 5. Components

### Buttons

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; min-height: 44px;
  font: 400 14px/1.2 "Circular Std", "DM Sans", sans-serif;
  letter-spacing: 0.04em;
  border-radius: 2px; border: 1px solid transparent;
  transition: background-color 200ms ease, color 200ms ease;
}
.btn-primary { background: #C00404; color: #FFFFFF; }
.btn-primary:hover, .btn-primary:focus { background: #4E3629; }
.btn-reverse { background: #FFFFFF; color: #C00404; }
.btn-reverse:hover { background: #C00404; color: #FFFFFF; }
.btn-small {
  background: #F8F7F5; color: #4E3629;
  border: 1px solid #EFECE5; gap: 8px;
}
.btn-small:hover { border-color: #C00404; }
.btn-navy { background: #002B52; color: #FFFFFF; }
.btn:focus-visible { box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #000000; outline: none; }
.btn:disabled { background: #EFECE5; color: #5B5B5B; }
```

The "Give to Brown" link in the utility bar is text, not a filled button. Small link buttons ("Undergraduate Programs", "Graduate Programs") are the warm `btn-small` style, often in a wrapping row with `flex: 1 1 180px`.

### Links

Body links are Red `#C00404` with an underline; hover darkens to Brown. Links in navigation are `#222222` and turn red on hover. Arrow links ("View more news", "Read Article") are Circular 14-16px with a trailing arrow icon.

### Inputs and search

```css
.input {
  height: 48px; padding: 0 16px;
  background: #F9FAFA; color: #000000;
  border: 1px solid #000000; border-radius: 0;
  font: 400 15px "Circular Std", "DM Sans", sans-serif;
}
.input:focus { border-color: #C00404; outline: none; }
```

Search opens as a panel with a large input that has a 1px red border and bold 15px text; tabs inside let you switch between "This Site", "All of Brown.edu" and "People".

### News cards

- Image on top, 3:2, 0-2px corners.
- Category kicker above the title in Circular 13px ("News and Events", "Science and Technology", "Health and Medicine").
- Title in Circular 18-20px 400, `#222222`; hover turns it red.
- Date in Circular 13px gray ("November 14, 2026").
- "Read Article" link at the bottom.
- Rail controls: "Featured" and "Most Recent" tabs above the rail.

### Feature cards

A photo with a red label box (`background: #C00404; color: #FFFFFF; padding: 2% 4%`) overlapping its top edge, set in Circular 22px. On hover the image may shift and an offset shadow (`8px 8px 0 rgba(152,164,174,.25)`) appears.

### Header and navigation

- White fixed header that slides up 46px on scroll to hide the utility row.
- Left: shield-and-BROWN lockup. Main nav in Circular 16px: "Academics", "Admission & Aid", "Research", "Life at Brown", "News".
- Utility row: "About", "Events", "For You" (a dropdown for Current Students, Faculty, Staff, Parents & Families, Alumni, Friends & Neighbors), "Give to Brown".
- Mega menus: white panels with grouped links in Circular, a 1px `#EFECE5` divider between groups.
- Over a dark hero, the header can switch to black with white text.

### Tabs

Text tabs with a 2-3px red underline for the active state; inactive tabs are `#434343`. Used for "Featured / Most Recent" and "Learn About Brown / Academic Offerings / Campus & Community / Visit Brown".

### Badges

Small rectangles, 2px radius, Circular 12px 700, Brown text on `#EFECE5` or white on Red for emphasis. Circular avatar images (`border-radius: 50%`) for people.

### Footer

White or `#F8F7F5` background with the logo, the address in three lines ("Brown University", "Providence", "RI", "02912"), "401-863-1000", quick links ("Visit Brown", "Campus Map", "A to Z", "Contact Us") and footer links ("News", "Events", "Campus Safety", "Accessibility", "Careers at Brown", "Give To Brown"), then "© Brown University".

## 6. Layout & Spacing

- **Breakpoints (from CSS):** 500px, 740px, 980px, 1220px, 1370px, with 1540px for very wide screens.
- **Container:** fluid with large side padding (20px mobile, 40px tablet, 65px desktop); content reads at up to about 1220-1370px.
- **Article column:** 685-850px.
- **Grid:** 12 columns; cards in 2, 3 or 4 across (50%, 33.33%, 25%).
- **Vertical rhythm:** 40-60px between cards, 80px or more between homepage sections.
- **Density:** generous. Copy blocks sit in a narrow column with lots of space on either side.

## 7. Depth, Elevation & Motion

- Surfaces are flat; elevation is shown by colour bands (`#F8F7F5`, `#EFECE5`) more than shadow.
- Signature hard offset shadows: `8px 8px 0 rgba(152,164,174,0.25)` and `5px 5px 0 #EAEAEA`, sometimes combined with a 1px ring (`0 0 0 1px #EAEAEA, 4px 4px 0 0 #EAEAEA`).
- Soft shadow for menus and overlays: `0 0 9px 0 rgba(0,0,0,0.12)`.
- Focus: double ring `0 0 0 2px #FFFFFF, 0 0 0 4px #000000`.
- Motion: header slides with `transform 350ms`; colour transitions 200ms ease. Hero video has a "Pause/Play this video" control. Respect `prefers-reduced-motion`.

## 8. Iconography & Imagery

- **Icons:** simple line or solid glyphs at 16-24px, filled in Brown or Red. Arrow and chevron icons accompany link text.
- **Photography:** documentary and close: students in labs, studios, the Main Green, Van Wickle Gates, Providence streets. Warm, natural light with slightly muted colour.
- **Video:** short loops in the homepage hero with a visible pause control.
- **Graphics:** beige and taupe panels, thin red rules. Avoid gradients.

## 9. Voice & Microcopy

Warm, plain and a little literary. Brown stresses its Open Curriculum and the idea of students shaping their own education.

- Navigation: "Academics", "Admission & Aid", "Research", "Life at Brown", "News", "About", "Events", "For You", "Give to Brown".
- Hero line: "Brown brings students together in creative, unexpected ways."
- Section intros: "Find your way around Brown", "Explore the countless paths and opportunities that Brown has to offer."
- Link labels: "Read Article", "View more news", "Visit Page".
- Use "Brown" in running text, "Brown University" on first formal reference. The motto line "Ever True" appears in campaign and community messaging.
- Dates spelled out: "November 14, 2026".

## 10. Do's and Don'ts

**Do**

- Use Brown `#4E3629` for brand presence and Red `#C00404` for actions.
- Pair Minion Pro (titles, long reading) with Circular (UI and section headings).
- Use warm off-whites for bands and cards.
- Keep corners at 0-4px.
- Try the hard offset shadow on one or two feature elements per page.
- Show real campus and Providence photography.

**Don't**

- Don't replace brown with navy as the main colour.
- Don't use Red as a large background fill.
- Don't bold Circular headings; keep them at 400.
- Don't use Gold for text on white.
- Don't redraw or recolour the shield or wordmark.
- Don't use pill buttons; Brown's buttons are near-square.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Brown University. White page with warm off-white bands (`#F8F7F5`, `#EFECE5`). Seal brown `#4E3629` for the wordmark, headings and brand bands; cardinal red `#C00404` for every primary button, link hover and accent rule; gold `#FFC72C` only for small highlights. Body text `#222222`, secondary `#434343`. Page titles in Minion Pro (fallback Crimson Pro) 46px bold; section headings, nav, buttons and cards in Circular (fallback DM Sans) at regular weight, 36/24/16/14px. Article body in Minion 18px with 1.78 line height. Buttons are 2px radius, 14px Circular, red with white text and a brown hover; secondary small buttons are `#F8F7F5` with a `#EFECE5` border and brown text. Mostly flat, but give one feature card a hard offset shadow `8px 8px 0 rgba(152,164,174,0.25)`. Use real campus photography.

```css
:root {
  --brand-brown: #4E3629;
  --brand-red: #C00404;
  --brand-gold: #FFC72C;
  --brand-white: #FFFFFF;
  --brand-black: #000000;
  --brand-text: #222222;
  --brand-text-subtle: #434343;
  --brand-bg-warm: #F8F7F5;
  --brand-bg-beige: #EFECE5;
  --brand-beige: #D7D3C8;
  --brand-taupe: #B7B09C;
  --brand-bg-cool: #F0F2F3;
  --brand-cool-light: #E2E5E8;
  --brand-slate: #98A4AE;
  --brand-navy: #002B52;
  --brand-teal: #00B398;
  --brand-font-serif: "Minion Pro", "Crimson Pro", Georgia, serif;
  --brand-font-sans: "Circular Std", "DM Sans", Helvetica, Arial, sans-serif;
  --brand-radius: 2px;
  --brand-radius-md: 4px;
  --brand-shadow-offset: 8px 8px 0 rgba(152, 164, 174, 0.25);
  --brand-shadow-soft: 0 0 9px 0 rgba(0, 0, 0, 0.12);
  --brand-focus: 0 0 0 2px #FFFFFF, 0 0 0 4px #000000;
  --brand-content-width: 1220px;
  --brand-text-width: 760px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Brown University.
