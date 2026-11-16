---
name: Disney
slug: disney
url: https://www.disney.com
category: Studio
tagline: "Signature script, castle and a clear Disney blue on bright, image-led pages."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Disney Blue
    hex: "#0077DA"
    role: Primary buttons, links, focus outlines (primary-blue-60)
  - name: Black
    hex: "#000000"
    role: Script wordmark, headlines on white
  - name: White
    hex: "#FFFFFF"
    role: Page background, wordmark on blue and on imagery
  - name: Deep Blue
    hex: "#003057"
    role: Dark blue panels, footer band (primary-blue-90)
  - name: Corporate Red
    hex: "#CC1B21"
    role: Category tags and divider rules on thewaltdisneycompany.com
  - name: Corporate Navy
    hex: "#12194A"
    role: Bylines and attribution on thewaltdisneycompany.com
  - name: Blue Hover
    hex: "#005FAE"
    role: Primary button hover and focus (primary-blue-70)
  - name: Blue Pressed
    hex: "#004783"
    role: Primary button pressed (primary-blue-80)
  - name: Blue Tint
    hex: "#AAD2F3"
    role: Hover fill on white "alt" buttons (primary-blue-20)
  - name: Gray 90
    hex: "#1D1E1F"
    role: Body text, dark surfaces
  - name: Gray 70
    hex: "#5A5C5D"
    role: Secondary text, meta
  - name: Gray 20
    hex: "#CECFCF"
    role: Dividers, disabled button fill
  - name: Gray 10
    hex: "#F4F4F4"
    role: Light section background, input fill
  - name: Error
    hex: "#D40909"
    role: Form errors
  - name: Success
    hex: "#0D830F"
    role: Confirmation states
  - name: Warning
    hex: "#E58810"
    role: Warning states
fonts:
  display:
    family: "InspireTWDC"
    fallback: "Nunito Sans"
    weights: [600, 800]
  body:
    family: "InspireTWDC"
    fallback: "Nunito Sans"
    weights: [400, 500, 700]
typeScale:
  - { role: Hero, size: 48, weight: 800, lineHeight: 1.1, tracking: "0" }
  - { role: Title Large, size: 32, weight: 800, lineHeight: 1.2, tracking: "0" }
  - { role: Title Medium, size: 24, weight: 800, lineHeight: 1.3, tracking: "0" }
  - { role: Card Title, size: 18, weight: 600, lineHeight: 1.3, tracking: "0" }
  - { role: Body, size: 16, weight: 500, lineHeight: 1.375, tracking: "0" }
  - { role: Button, size: 15, weight: 700, lineHeight: 1.5, tracking: "0" }
  - { role: Small, size: 14, weight: 400, lineHeight: 1.4, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.4, tracking: "0" }
radii: { sm: 2, md: 8, lg: 16, xl: 24, pill: 100 }
spacing: [4, 8, 12, 16, 24, 32, 40, 80]
shadows:
  - { name: Card, value: "0 1px 4px rgba(0,0,0,0.12)" }
  - { name: Card Hover, value: "0 6px 16px rgba(0,0,0,0.16)" }
  - { name: Glow Focus, value: "0 0 6px 1px #FFFFFF" }
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#1D1E1F"
  muted: "#5A5C5D"
  border: "#CECFCF"
  accent: "#0077DA"
  accentText: "#FFFFFF"
  radius: 16
  buttonStyle: pill
---

# Disney

## 1. Visual Theme & Atmosphere

Disney's brand rests on two marks: the "Disney" script, drawn from Walt Disney's stylised signature, and the castle that opens Walt Disney Pictures films. Around those marks the corporate and consumer web is plain on purpose. Disney.com is a white page with large film and character art, rounded cards, pill buttons and one blue. The art supplies the colour; the chrome stays neutral so a Marvel poster, a Pixar still and a princess illustration can sit on the same page without fighting.

What makes it recognisable:

- **The script.** A looping, handwritten wordmark with the backwards-looking "D" and the dotted "i" that reads as a curl. It appears in black on white, white on blue, or white over imagery. It is never retyped.
- **Disney blue.** Disney.com's design tokens set primary blue at `#0077DA`, used for primary buttons, links and focus rings. Hover and pressed states step darker to `#005FAE` and `#004783`.
- **Pill buttons.** Buttons are fully rounded (`border-radius: 100px`) with bold 15px labels.
- **Soft, rounded cards.** Card grids use 8-24px radii and gentle shadows, more friendly than cinematic.
- **Franchise theming.** Pages for Marvel, Star Wars, Pixar or a single film reskin the same components with that property's colours and fonts. The base system is a neutral frame.
- **Castle and arc in motion.** In theatrical openings the castle sits under a sweeping arc of light, drawn on screen by a shooting star. On the web the castle mostly shows up in studio and film-logo contexts, not as page chrome.

The corporate site, thewaltdisneycompany.com, is calmer and more editorial: warm off-white `#FAF9F6`, near-black `#121212` text, thin red rules and category tags in `#CC1B21`, and deep navy `#12194A` bylines.

Density: medium. Generous image tiles, short text, lots of rows. Family audience first, so contrast is high and labels are simple.

## 2. Color Palette & Roles

### Brand and action

| Name | Hex | Role |
| --- | --- | --- |
| Disney Blue (blue-60) | `#0077DA` | Primary button fill, links, focus outlines, secondary button border |
| Blue 70 | `#005FAE` | Primary hover and focus fill |
| Blue 80 | `#004783` | Primary pressed |
| Blue 90 | `#003057` | Deep blue panels and bands |
| Blue 100 | `#000419` | Near-black navy for dark hero overlays |
| Blue 50 | `#2B8EE0` | Lighter blue for illustration accents |
| Blue 20 | `#AAD2F3` | Hover fill for white "alt" buttons on blue |
| Blue 10 | `#D5E8F9` | Info backgrounds, selected rows |
| MTT Blue | `#1786EB` | Slider and schedule accents (legacy module colour) |

### Neutrals (Disney.com gray ramp)

| Name | Hex | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Page background, text on blue |
| Gray 10 | `#F4F4F4` | Light sections, input fill |
| Gray 20 | `#CECFCF` | Dividers, disabled fill |
| Gray 30 | `#B5B7B7` | Disabled text, placeholder |
| Gray 50 | `#848687` | Icons at rest |
| Gray 60 | `#6C6E6F` | Meta text on white |
| Gray 70 | `#5A5C5D` | Secondary text |
| Gray 80 | `#48494A` | Strong secondary text, disabled fill on dark |
| Gray 90 | `#1D1E1F` | Body text, dark cards |
| Gray 100 | `#121213` | Darkest surface |
| Black | `#000000` | Wordmark, headlines |

### Semantic

| Name | Light | Dark | Use |
| --- | --- | --- | --- |
| Error | `#D40909` | `#FF7F7F` | Field errors, destructive notices |
| Success | `#0D830F` | `#6C6E6F` | Confirmation |
| Warning | `#E58810` | `#FFB759` | Warnings |

### Corporate (The Walt Disney Company site)

| Name | Hex | Use |
| --- | --- | --- |
| Paper | `#FAF9F6` | Page background |
| Ink | `#121212` | Body and headline text |
| Secondary | `#595959` | Dates, captions |
| Border | `#DEDEDE` | Card and table borders |
| Red | `#CC1B21` | Category tags, divider strokes |
| Navy | `#12194A` | Attribution, author lines |
| Deep Navy | `#081351` | Dark hero overlays |

### Mode

Disney.com is light by default. Dark sections appear inside franchise modules (Star Wars, Marvel) and in video players, using gray 90/100 with white text. Disney+ is a separate, dark product brand (navy and blue gradients) and should not be mixed into a studio or corporate page.

## 3. Typography

- **InspireTWDC** is The Walt Disney Company's proprietary sans, used across Disney.com and the corporate site (`font-family: InspireTWDC, Helvetica, sans-serif`). It has rounded, friendly proportions with open apertures. It is not licensed for outside use.
- **Fallback:** Nunito Sans from Google Fonts matches the soft, open feel. After that: `Helvetica, Arial, sans-serif`.
- Disney.com also loads "Matterhorn" (the platform's in-house face) and Noto families for non-Latin scripts. Franchise pages load their own display fonts (for example DIN Next on news and Star Wars modules).
- The "Disney" script and film title treatments are lettering, not fonts. Always use the artwork.

### Scale (from Disney.com `--brand-title-*` and `--brand-body-*` tokens)

| Role | Size | Weight | Line height | Notes |
| --- | --- | --- | --- | --- |
| Title XXL | 48px | 800 | 1.1 | Hero headlines, 32px on mobile |
| Title XL | 44px | 800 | 1.1 | Landing page sections |
| Title Large | 32px | 800 | 1.2 | Spotlight titles (24px on mobile) |
| Title Medium | 24px | 800 | 1.3 | Module titles ("Movies", "Characters") |
| Title Small | 20px | 800 | 1.3 | Sub-modules |
| Title XS | 18px | 600 | 1.3 | Card titles (card small 16px) |
| Body Medium | 16px | 500 | 22px | Paragraphs, descriptions |
| Button | 15px | 700 | 23px | All button labels |
| Body Small | 14px | 400 | 1.4 | Meta, footer |
| Caption | 12px | 400 | 1.4 | Legal, ratings |

The classic layer uses a rem scale: 12, 14, 16, 18, 20, 24, 30px (`--classic-text-*`).

### Rules

- Title case for module titles and buttons ("Watch Trailer", "Get Tickets", "Shop Now").
- Headlines are heavy (800) and short; avoid all caps except tiny eyebrow labels.
- No negative tracking. Keep line length under about 70 characters.
- Use lining numerals for dates and showtimes.

## 4. Logo & Brand Mark

- **Disney script wordmark.** The primary mark, based on the signature Walt Disney used in the studio's early branding. It is the file here (`logo.svg`, black). Colour versions: black on white, white on Disney blue or dark imagery. On franchise art it may be gold or silver as part of title art, but the corporate default is black or white.
- **Castle.** The Walt Disney Pictures logo is a fairytale castle (derived from Sleeping Beauty Castle with added towers and elements from other films since 2006) under an arc of light, with "Walt Disney Pictures" or simply "Disney" below. It is an animated ident; flat castle versions appear in studio contexts.
- **Walt Disney Studios.** The parent studio name for the film labels (Walt Disney Pictures, Walt Disney Animation Studios, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, Searchlight). Each label keeps its own logo; "Disney" sits above them as an umbrella.
- **Clear space:** at least the height of the "D" bowl on all sides.
- **Minimum size:** about 80px wide on screen. Below that, the script loses the "i" dot and curls.
- **Placement:** top-left or top-centre of the header, about 100-140px wide on desktop.

Misuse: do not retype "Disney" in a script font, add outlines, bevels or glitter effects, stretch it, rotate it, change its colour to a non-brand hue, or put it on busy imagery without a scrim.

## 5. Components

Button colours, heights, radius and border come from Disney.com's `--brand-button-*` tokens. Input, card shadow, header height and modal values are approximate, read from rendered pages rather than tokens.

### Buttons

Disney.com button tokens (`--brand-button-*`):

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 48px; padding: 0 16px; min-width: 180px;
  font: 700 15px/23px "InspireTWDC", "Nunito Sans", Helvetica, sans-serif;
  border: 2px solid transparent;
  border-radius: 100px;
  transition: background-color .25s ease-in-out, color .25s ease-in-out;
}
.btn-sm { height: 32px; padding: 0 12px; min-width: 60px; }

.btn-primary { background: #0077DA; color: #FFFFFF; }
.btn-primary:hover, .btn-primary:focus-visible { background: #005FAE; }
.btn-primary:focus-visible { outline: 2px solid #005FAE; outline-offset: 3px; }
.btn-primary:active { background: #004783; }
.btn-primary:disabled { background: #CECFCF; color: #B5B7B7; }

.btn-secondary { background: transparent; color: #0077DA; border-color: #0077DA; }
.btn-secondary:hover { background: #D5E8F9; } /* approximate */

/* white button on blue or dark imagery */
.btn-alt { background: #FFFFFF; color: #0077DA; }
.btn-alt:hover, .btn-alt:focus-visible { background: #AAD2F3; color: #005FAE; }
.btn-alt:disabled { background: #48494A; color: #5A5C5D; }

/* white button with black label, used on video heroes */
.btn-white { background: #FFFFFF; color: #000000; }
.btn-white:hover { background: #DBDBDB; }
.btn-white:active { background: #E5E5E5; }
```

Icon buttons (play, share, carousel arrows) are 40-48px circles (`border-radius: 50%`) in white with a 1px gray 20 border, or translucent black `rgba(0,0,0,0.5)` over imagery.

### Inputs

```css
.input {
  height: 48px; padding: 0 16px;
  background: #FFFFFF; color: #1D1E1F;
  border: 1px solid #B5B7B7; border-radius: 4px;
  font-size: 16px;
}
.input:focus { border-color: #0077DA; outline: 2px solid #0077DA; outline-offset: 2px; }
.input.is-error { border-color: #D40909; }
.search { border-radius: 100px; background: #F4F4F4; border-color: transparent; padding-left: 44px; }
```

Labels sit above the field at 14px, weight 500, gray 80. Errors are 14px `#D40909` below the field.

### Cards

- Standard card: image on top (16:9 for video, 2:3 for posters, 1:1 for characters), title 18px weight 600 below, optional 14px meta in gray 70.
- Radius 8px on image tiles in the classic layer, 16-24px on newer promo cards.
- Shadow at rest `0 1px 4px rgba(0,0,0,0.12)`; on hover the card lifts with `0 6px 16px rgba(0,0,0,0.16)` and the image scales to 1.03 over 300ms.
- Character tiles often use a cut-out character on a coloured circle or gradient background.

### Navigation

- Global header 64px tall on desktop, white, with the script logo left, primary links ("Movies", "Disney+", "Parks & Travel", "Shop", "Games") in 15-16px weight 500, gray 90, search and account icons right. Active link is Disney blue with a 2px underline.
- Below 1024px the links collapse into a menu sheet; the logo centres.
- The global footer is gray 10 or white with a top border, link columns at 14px, and the legal row at 12px.

### Carousels and sliders

Full-width hero carousels with dot pagination (8px dots, active dot white or blue) and 40px round arrow buttons. Content rows ("Featured Movies", "Disney Characters") scroll sideways with a partly visible card at the edge.

### Tabs and chips

Tabs are text-only, 16px weight 700, with a 3px Disney blue underline on the active tab. Filter chips are pill-shaped, 32px tall, 1px gray 20 border, active chip filled `#0077DA` with white text.

### Badges

Small pill labels for "New", "Now Playing", "Streaming on Disney+": 12px weight 700, 4px 8px padding, `#0077DA` or black fill with white text, radius 100px.

### Modals

White, radius 16px, max 640px wide, 32px padding, close button as a 40px circle top-right. Backdrop `rgba(0,0,0,0.75)`. Video modals use black backgrounds and full-width players.

### Toasts

White surface, black text, 8px radius, shadow `0 6px 16px rgba(0,0,0,0.16)`, 16px padding, bottom-centre.

## 6. Layout & Spacing

- **Max width:** 1600px for full site content (`--brand-site-max-width`); article text columns sit near 720px.
- **Gutters:** side padding 20-24px on mobile, 48px on tablet, 80-104px on wide desktop (classic theme padding tokens).
- **Breakpoints:** 480, 680, 768, 960, 1024, 1240, 1440, 1600px.
- **Section spacing:** 40px between modules on mobile, 60-80px on desktop. Module title sits 24px above its content (32px on tablet).
- **Spacing scale:** 8, 12, 16, 24, 32, 40, 80px (`--brand-spacing-*`).
- **Grids:** card grids run 2 columns on mobile, 3-4 on tablet, 4-6 on desktop with 16-24px gaps.

## 7. Depth, Elevation & Motion

- **Shadows:** light and soft. Cards `0 1px 4px rgba(0,0,0,0.12)`, hover `0 6px 16px rgba(0,0,0,0.16)`, inset field shadow `inset 0 1px 4px 1px rgba(0,0,0,0.1)`. Focus glow on dark modules: `0 0 6px 1px #FFFFFF`.
- **Overlays:** text on imagery uses black gradients (`rgba(0,0,0,0.75)` to transparent) from the bottom.
- **Durations:** opacity 250ms, colour 125ms, transform 300ms, box-shadow 300ms. Ease or ease-in-out; no bouncy springs in chrome.
- **Signature motion:** in film openings, a star flies over the castle and draws the arc. On the web, keep motion to fades, gentle scale on hover and carousel slides (about 400ms).
- Respect `prefers-reduced-motion`: stop autoplay heroes and carousels.

## 8. Iconography & Imagery

- **Icons:** simple line icons, 24px, 2px stroke, rounded caps; filled versions for play and favourites. Gray 90 on white, white on dark.
- **Imagery:** official key art, character renders, film stills. Characters are often cut out on colour fields or gradients. Keep artwork un-cropped at faces and title treatments.
- **Franchise art:** use the property's own logo art for titles (the "Frozen" or "Toy Story" lettering), never typed titles.
- **Castle and sparkle motifs:** the castle belongs to studio and film branding. Do not scatter generic stars or sparkle shapes as decoration.
- **Photography:** warm, bright, people smiling at parks and events on the corporate site; never gritty or desaturated.

## 9. Voice & Microcopy

Warm, simple, inclusive, a little bit of wonder, never sarcastic. Short sentences a child or grandparent can read.

- Module titles: "Movies", "Disney Characters", "Featured Videos", "Coming Soon"
- Buttons: "Watch Trailer", "Get Tickets", "Stream Now on Disney+", "Shop Now", "Learn More"
- Release lines: "Only in theaters November 26", "Now streaming on Disney+"
- Corporate tone (thewaltdisneycompany.com): measured and factual, e.g. "The Walt Disney Company Reports Fourth Quarter and Full Year Earnings"
- Casing: title case for buttons and titles, sentence case for body.
- Avoid insider jargon and hype; say what the thing is and where to watch it.

## 10. Do's and Don'ts

**Do**

- Use the script wordmark as artwork, black on white or white on blue/dark.
- Keep pages white and let film and character art bring the colour.
- Use `#0077DA` for primary actions, with `#005FAE` hover and `#004783` pressed.
- Use pill buttons and rounded cards.
- Give each franchise module its own art direction inside the neutral frame.
- Keep copy short and friendly.

**Don't**

- Don't set "Disney" in a script font or redraw the castle.
- Don't use Disney+ navy gradients for a studio or corporate page.
- Don't put the wordmark in colours outside black, white or approved title art.
- Don't use sharp square buttons or heavy borders.
- Don't add sparkle or glitter icons as decoration.
- Don't run long text over busy art without a gradient.

## 11. Agent Prompt Guide

Paste this into a coding agent:

> Build this UI in the style of Disney's web presence. White background `#FFFFFF`, body text `#1D1E1F`, secondary text `#5A5C5D`, light sections `#F4F4F4`, dividers `#CECFCF`. One action colour: Disney blue `#0077DA` (hover `#005FAE`, pressed `#004783`). Use InspireTWDC with Nunito Sans as the fallback: hero 48px weight 800, module titles 24px 800, card titles 18px 600, body 16px/22px 500, buttons 15px 700. Buttons are pills (`border-radius: 100px`), 48px tall (32px small), 2px border; secondary buttons are blue outline; on blue or dark heroes use white buttons with blue text. Cards have image tops, 8-16px radius and soft shadows that lift on hover. Lay out modules in a 1600px max container with 80px desktop gutters and 60-80px between sections, with horizontal carousels of cards. Put the "Disney" script logo top-left as an SVG, never as typed text. Keep the chrome neutral so film and character art supplies the colour.

```css
:root {
  --brand-blue: #0077DA;
  --brand-blue-hover: #005FAE;
  --brand-blue-pressed: #004783;
  --brand-blue-deep: #003057;
  --brand-blue-tint: #AAD2F3;
  --brand-blue-wash: #D5E8F9;
  --brand-bg: #FFFFFF;
  --brand-surface: #F4F4F4;
  --brand-border: #CECFCF;
  --brand-text: #1D1E1F;
  --brand-text-secondary: #5A5C5D;
  --brand-text-disabled: #B5B7B7;
  --brand-black: #000000;
  --brand-error: #D40909;
  --brand-success: #0D830F;
  --brand-warning: #E58810;
  --brand-corporate-paper: #FAF9F6;
  --brand-corporate-red: #CC1B21;
  --brand-corporate-navy: #12194A;
  --brand-font: "InspireTWDC", "Nunito Sans", Helvetica, Arial, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius-card: 8px;
  --brand-radius-promo: 16px;
  --brand-radius-pill: 100px;
  --brand-shadow-card: 0 1px 4px rgba(0, 0, 0, 0.12);
  --brand-shadow-hover: 0 6px 16px rgba(0, 0, 0, 0.16);
  --brand-duration: 250ms;
  --brand-max-width: 1600px;
}
```

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by The Walt Disney Company.
