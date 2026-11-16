---
name: Steam
slug: steam
url: https://store.steampowered.com
category: Gaming
tagline: "Deep navy store, light-blue links, green buy buttons and lime discount tags on capsules."
updated: 2026-11-16
appStoreId: 495369748
logoBackground: "#171D25"
theme: dark
colors:
  - name: Store Navy
    hex: "#1B2838"
    role: Main store background
  - name: Header Black
    hex: "#171D25"
    role: Global header, client title bar
  - name: Steam Blue
    hex: "#66C0F4"
    role: Links, highlights, active nav, focus
  - name: Buy Green
    hex: "#75B022"
    role: Purchase buttons (gradient start)
  - name: Discount Lime
    hex: "#BEEE11"
    role: Discount percent and sale price text
  - name: Discount Green
    hex: "#4C6B22"
    role: Discount percent background
  - name: Text
    hex: "#C7D5E0"
    role: Primary text, game titles
  - name: Muted
    hex: "#8F98A0"
    role: Secondary text, metadata, original price
  - name: Panel Blue
    hex: "#2A475E"
    role: Panels, nav bar, hover rows
  - name: Steel Blue
    hex: "#417A9B"
    role: Secondary panels, tab backgrounds
  - name: Dark Slate
    hex: "#3D4450"
    role: Buttons, dividers, input fills
  - name: Logo Grey
    hex: "#C5C3C0"
    role: Header logo and wordmark
  - name: Blue Button
    hex: "#1A44C2"
    role: Blue button gradient end
  - name: Gold
    hex: "#D5BF6A"
    role: Awards, points shop, premium highlights
fonts:
  display:
    family: "Motiva Sans"
    fallback: "Figtree"
    weights: [500, 700]
  body:
    family: "Motiva Sans"
    fallback: "Figtree"
    weights: [300, 400]
typeScale:
  - { role: Page Title, size: 26, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Section Title, size: 14, weight: 400, lineHeight: 1.4, tracking: "0.03em" }
  - { role: Capsule Title, size: 15, weight: 400, lineHeight: 1.2, tracking: "0" }
  - { role: Body, size: 14, weight: 300, lineHeight: 1.5, tracking: "0" }
  - { role: Price, size: 15, weight: 400, lineHeight: 1.07, tracking: "0" }
  - { role: Nav, size: 13, weight: 400, lineHeight: 1.4, tracking: "0.03em" }
  - { role: Small, size: 11, weight: 400, lineHeight: 1.1, tracking: "0" }
radii: { sm: 2, md: 3, lg: 4, pill: 9999 }
spacing: [2, 4, 8, 12, 16, 24, 32]
shadows:
  - { name: Capsule, value: "0 0 5px rgba(0,0,0,0.5)" }
  - { name: Blue Button, value: "2px 2px 5px rgba(0,0,0,0.2)" }
  - { name: Hover Glow, value: "0 0 12px #000000" }
  - { name: Popup, value: "0 0 8px #000000, 0 0 3px #0D0D0D" }
preview:
  bg: "#1B2838"
  surface: "#2A475E"
  text: "#C7D5E0"
  muted: "#8F98A0"
  border: "#3D4450"
  accent: "#75B022"
  accentText: "#D2EFA9"
  radius: 2
  buttonStyle: solid
---

# Steam

## 1. Visual Theme & Atmosphere

Steam, Valve's PC game store and client, has kept the same look for many years on purpose: a deep blue-navy page, pale blue-grey text, bright blue links and green buy buttons. Everything is dense and functional. The store front is a long scroll of game "capsules" (wide cover images) with prices and discount tags, framed by thin panels in shades of steel blue.

The same visual language runs through the store website, the desktop client and Steam Deck's Big Picture mode, so the store page is the reference.

What makes it recognisable:

- **Navy and steel blue.** `#1B2838` page, `#171D25` header, `#2A475E` panels, `#417A9B` secondary panels, often with subtle vertical gradients.
- **Blue-grey text.** Body and titles are `#C7D5E0`, metadata `#8F98A0`. Pure white is rare.
- **Green to buy, lime to save.** "Add to Cart" is a green gradient (`#75B022` to `#588A1B`). Discounts are a dark green block `#4C6B22` with lime `#BEEE11` "-75%".
- **Game art does the work.** Capsules are 460 x 215 style header images; hover reveals screenshots and tags.
- **Small, square UI.** 2-3px corners, 11-15px text, thin rows.

Mood words: dark, utilitarian, dense, familiar, gamer.

## 2. Color Palette & Roles

Values from the live store CSS (`store.css`, `home.css`, `buttons.css`, `shared_global.css`, read 2026-11-16) unless marked approximate.

| Name | Hex | Role |
|---|---|---|
| Header Black | `#171D25` | `#global_header` background |
| Store Navy | `#1B2838` | Page background (`body.v6`) |
| Panel Blue | `#2A475E` (approximate) | Nav bar and panel gradients |
| Steel Blue | `#417A9B` | Tab and panel fills |
| Dark Slate | `#3D4450` | Grey buttons, dividers, input fills |
| Steam Blue | `#66C0F4` / `#67C1F5` | Links, active tabs, highlights |
| Text | `#C7D5E0` / `#C6D4DF` | Titles, body |
| Muted | `#8F98A0` / `#8B929A` | Metadata, original price |
| Store Nav Glow | `rgba(103,193,245,0.4)` | Store nav bar background tint |
| Buy Green | `#75B022` → `#588A1B` | Green button gradient |
| Green Text | `#D2EFA9` | Text on green buttons |
| Discount Green | `#4C6B22` | Discount percent block |
| Discount Lime | `#BEEE11` | Discount percent text, final sale price |
| Blue Button | `#47BFFF` → `#1A44C2` | Blue button gradient (Install, Play on some pages) |
| Blue Button Text | `#C3E1F8` | Text on blue buttons |
| Gold | `#D5BF6A` / `#BA995C` | Awards, Points Shop, premium |
| Red | `#CF3A22` (`rgb(207,58,34)`) | Alerts, warnings |
| Logo Grey | `#C5C3C0` | Header logo |

### Semantic colors

| State | Color |
|---|---|
| Positive reviews | `#66C0F4` ("Very Positive", "Overwhelmingly Positive") |
| In library | `#A4D007` text or a light-blue "In Library" flag |
| Error | `#CF3A22` |

### Light mode

None. Steam is dark everywhere. Do not create a light theme.

## 3. Typography

**Family:** **Motiva Sans**, loaded by `motiva_sans.css` in weights from Light to Black. Stack: `"Motiva Sans", Arial, Helvetica, sans-serif`. Some campaign pages add display faces (giza-three, politica-expanded) for sale events.

**Licensing:** Motiva Sans is a commercial typeface (Rodrigo Saiani). Closest free option: **Figtree**; Mulish is a second choice. Older Steam pages used Arial, which also works as a fallback.

### Scale (approximate, desktop store)

| Role | Size | Weight | Line height | Notes |
|---|---|---|---|---|
| Game page title | 26px | 400 | 1.2 | `#FFFFFF` |
| Section heading ("FEATURED & RECOMMENDED") | 14px | 400 | 1.4 | uppercase, 0.03em tracking, `#FFFFFF` |
| Capsule / tab item title | 15px (1.25em) | 400 | 18px | `#C7D5E0`, ellipsis |
| Body / description | 14px | 300-400 | 1.5 | `#ACB2B8` / `#C7D5E0` |
| Price | 15px | 400 | 16px | final price `#BEEE11` on sale, otherwise `#C7D5E0` |
| Nav | 13-14px | 400-500 | 1.4 | uppercase in the global header |
| Original price | 11px | 400 | 12px | `#8B929A`, slanted strike line |
| Tags, metadata | 11-12px | 400 | 1.2 | `#8F98A0` |

### Rules

- Section headings are uppercase, small and spaced out. Everything else is sentence or title case.
- Original prices use a skewed strikethrough (`transform: skewY(-8deg)` line at 43% height).
- Discount percent is weight 500, e.g. "-75%".

## 4. Logo & Brand Mark

The Steam logo is a round symbol (a piston-like arm joining two circles inside a circle) followed by the wordmark STEAM in spaced capitals. In the store header the whole logo is light grey `#C5C3C0`.

- **Color versions:** light grey or white on dark navy (primary); the app icon uses the symbol on a navy-to-blue gradient circle; black on light for print.
- **Symbol alone:** favicon, app icon, Steam Deck boot and social avatars.
- **Clear space:** at least the radius of the small inner circle around the logo.
- **Minimum size:** symbol 16px; full logo about 100px wide.

Misuse:

- Do not color the logo Steam blue or green.
- Do not place it on busy game art without a dark scrim.
- Do not reset STEAM in Motiva Sans as a substitute wordmark.
- Do not rotate the symbol.

## 5. Components

### Buttons

| Variant | Fill | Text | Notes |
|---|---|---|---|
| Green (buy) | `linear-gradient(to right, #75B022 5%, #588A1B 95%)` | `#D2EFA9` | 1px text shadow `rgba(0,0,0,0.3)` |
| Blue | `linear-gradient(to right, #47BFFF 5%, #1A44C2 60%)` | `#C3E1F8` | shadow `2px 2px 5px rgba(0,0,0,0.2)` |
| Grey (secondary) | `rgba(103,193,245,0.2)` / `#3D4450` | `#66C0F4` / `#C7D5E0` | Wishlist, Follow, Ignore |
| Hover fade blue | `rgba(103,193,245,0.2)` | `#67C1F5` | Hover: `#67C1F5` fill, white text |

- Radius 2px. Padding about `0 15px`, line height 30px for standard buttons; large buy buttons about 36px tall.
- Hover green: `linear-gradient(to right, #8ED629 5%, #6AA621 95%)`, text white.
- Hover blue: brighter gradient and white text.
- Disabled: grey fill, 50% opacity.

```css
.btn-green {
  display: inline-block; border: 0; border-radius: 2px; padding: 1px;
  color: #D2EFA9; text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
  background: transparent; cursor: pointer;
}
.btn-green > span {
  display: block; border-radius: 2px; padding: 0 15px;
  font: 15px/30px "Motiva Sans", Figtree, Arial, sans-serif;
  background: linear-gradient(to right, #75B022 5%, #588A1B 95%);
}
.btn-green:hover > span { background: linear-gradient(to right, #8ED629 5%, #6AA621 95%); color: #fff; }
```

### Global header

- `#171D25`, 104px tall, min width 940px, content max width 940px (wider on the responsive store, up to about 1200px).
- Left: Steam logo. Center: STORE, COMMUNITY, ABOUT, SUPPORT in 14px uppercase `#DCDEDF`, active item `#1A9FFF` underlined. Right: "Install Steam" green-tinted button, login link, language dropdown.

### Store nav bar

- A 35px bar below the header with `rgba(103,193,245,0.4)` tint over a dark gradient, radius 3px.
- Menus: Your Store, New & Noteworthy, Categories, Points Shop, News, Labs, each 13px.
- Search box at right: dark field with `#EEEEEE` text, `#A6A5A2` placeholder, magnifier icon in a blue square.

### Game capsule (signature)

- Header image 460 x 215 aspect (about 2.14:1); main carousel uses a large 616 x 353 capsule with four screenshots at the side.
- Below or beside: title, platform icons (Windows, Steam Deck verified), tags in grey, and the price block.
- Hover: image brightens, a screenshot cycle plays (1s per frame), and a tooltip panel shows reviews, tags and release date.
- Shadow: `0 0 5px rgba(0,0,0,0.5)`.

### Discount block

```css
.discount-pct { background: #4C6B22; color: #BEEE11; font-weight: 500; padding: 0 4px; font-size: 15px; line-height: 30px; }
.discount-prices { background: rgba(20,31,44,0.9) /* approximate */; padding: 0 6px; }
.discount-original { color: #8B929A; font-size: 11px; line-height: 12px; }
.discount-final { color: #BEEE11; font-size: 15px; line-height: 16px; }
```

### Tab lists ("New & Trending", "Top Sellers", "Specials")

- Tab headers: `#2A475E`-style tabs, active tab lighter with white text.
- Rows: 69px tall, small capsule left (184 x 69), title `#C7D5E0` 15px, tags `#8F98A0` 11px, price right. Hover: row background `#95BCDE`-tinted light blue with dark text (approximate).

### Game page purchase box

A dark panel (`#000000` at 20% over a blue gradient) with "Buy [Game]" title in 21px, platform icons, then a right-aligned price block (discount + price) joined to a green "Add to Cart" button.

### Reviews

Summary line: "Very Positive" in `#66C0F4` with count in grey. Review cards show a thumbs icon, "Recommended" or "Not Recommended", hours on record, text in `#ACB2B8`.

### Inputs

Dark fields `#316282`-tinted or `rgba(0,0,0,0.2)`, 1px inset shadow, radius 3px, text `#EEEEEE`. Focus: light-blue border.

## 6. Layout & Spacing

- **Width:** content area 940px classic, up to 1200px on the responsive store (`.home_page_content { max-width: 1200px }`). Capsule math: 4 x 229px + 3 x 8px gaps = 940px.
- **Spacing:** small and tight: 2, 4, 8, 12, 16, 24px. Rows have 4-8px internal padding.
- **Section spacing:** about 32-48px between home sections.
- **Background art:** game pages set a full-page background from the game's art behind the 940px column.
- **Responsive:** below about 910px the store collapses to a single column with a hamburger menu; touch targets grow.

## 7. Depth, Elevation & Motion

| Token | Value |
|---|---|
| Capsule | `0 0 5px rgba(0,0,0,0.5)` |
| Hover glow | `0 0 12px #000000` |
| Popup | `0 0 8px #000000, 0 0 3px #0D0D0D` |
| Button | `2px 2px 5px rgba(0,0,0,0.2)` |

- Depth comes from layered navy and steel-blue panels and gradients, not big shadows.
- Motion: 250ms color transitions on titles and rows, carousel slides about 400ms, screenshot cycling on capsule hover, discount price "wiggle" on sale events.

## 8. Iconography & Imagery

- **Icons:** small, flat or lightly shaded glyphs for platforms (Windows, macOS, SteamOS/Linux), Steam Deck compatibility (green check, yellow info), controller support and VR.
- **Game art:** capsules, screenshots and trailers fill most of the page; never cropped from the official capsule sizes.
- **Sale events:** seasonal sales bring their own illustrated themes and display fonts on top of the standard layout.

## 9. Voice & Microcopy

Plain and gamer-literate. Short labels, lots of data.

- Nav: "Your Store", "New & Noteworthy", "Categories", "Points Shop", "News", "Labs".
- Section heads: "FEATURED & RECOMMENDED", "SPECIAL OFFERS", "BROWSE BY CATEGORY".
- Buttons: "Add to Cart", "Add to your wishlist", "Play Game", "Install Steam", "Download".
- Review summaries: "Overwhelmingly Positive", "Very Positive", "Mixed".

## 10. Do's and Don'ts

**Do**

- Use `#1B2838` page, `#171D25` header and steel-blue panels.
- Keep text blue-grey `#C7D5E0` and metadata `#8F98A0`.
- Use green gradient buttons for buying and the `#4C6B22` / `#BEEE11` block for discounts.
- Lead with game capsules at their official aspect ratios.
- Keep corners at 2-3px and type at 11-15px for dense lists.

**Don't**

- Don't add a light theme or white cards.
- Don't use pure white body text.
- Don't make buttons pills or large rounded rectangles.
- Don't use Steam blue for the buy button.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of the Steam store. Page background `#1B2838`, a 104px header in `#171D25` with a light grey `#C5C3C0` Steam logo and uppercase 14px nav (STORE, COMMUNITY, ABOUT, SUPPORT). Below it, a 35px store nav bar tinted `rgba(103,193,245,0.4)` with a dark search field. Content column 940-1200px. Text `#C7D5E0`, metadata `#8F98A0`, links `#66C0F4`. Font: `"Motiva Sans", Figtree, Arial, sans-serif`, mostly 11-15px; section headings 14px uppercase with 0.03em tracking. Game capsules at 460x215 ratio with `0 0 5px rgba(0,0,0,0.5)` shadow, title, grey tags and a price block. Discounts: `#4C6B22` block with lime `#BEEE11` "-75%", struck-through `#8B929A` original price and `#BEEE11` final price. Buy buttons: 2px radius, gradient `linear-gradient(to right, #75B022 5%, #588A1B 95%)`, text `#D2EFA9`; blue buttons `linear-gradient(to right, #47BFFF 5%, #1A44C2 60%)`. Panels in `#2A475E` / `#417A9B` with subtle gradients. Dense rows, small radii, no light surfaces.

```css
:root {
  --brand-header: #171D25;
  --brand-bg: #1B2838;
  --brand-panel: #2A475E;
  --brand-steel: #417A9B;
  --brand-slate: #3D4450;
  --brand-blue: #66C0F4;
  --brand-blue-light: #A4D7F5;
  --brand-nav-tint: rgba(103, 193, 245, 0.4);
  --brand-text: #C7D5E0;
  --brand-text-bright: #DCDEDF;
  --brand-text-muted: #8F98A0;
  --brand-price-original: #8B929A;
  --brand-green-start: #75B022;
  --brand-green-end: #588A1B;
  --brand-green-text: #D2EFA9;
  --brand-green-hover-start: #8ED629;
  --brand-green-hover-end: #6AA621;
  --brand-blue-btn-start: #47BFFF;
  --brand-blue-btn-end: #1A44C2;
  --brand-blue-btn-text: #C3E1F8;
  --brand-discount-bg: #4C6B22;
  --brand-discount-text: #BEEE11;
  --brand-gold: #D5BF6A;
  --brand-red: #CF3A22;
  --brand-logo: #C5C3C0;
  --brand-font: "Motiva Sans", "Figtree", Arial, Helvetica, sans-serif;
  --brand-radius-sm: 2px;
  --brand-radius: 3px;
  --brand-shadow-capsule: 0 0 5px rgba(0, 0, 0, 0.5);
  --brand-shadow-popup: 0 0 8px #000000, 0 0 3px #0D0D0D;
  --brand-shadow-button: 2px 2px 5px rgba(0, 0, 0, 0.2);
  --brand-page-width: 940px;
  --brand-page-width-wide: 1200px;
  --brand-duration: 250ms;
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Valve or Steam.
