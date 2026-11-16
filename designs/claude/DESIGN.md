---
name: Claude
slug: claude
url: https://claude.ai
category: AI
tagline: "Warm cream paper, near-black ink, a terracotta spark and calm serif headlines."
updated: 2026-11-16
appStoreId: 6473753684
logoBackground: "#FAF9F5"
theme: light
colors:
  - name: Clay
    hex: "#D97757"
    role: Brand accent, the spark mark, app icon, send button
  - name: Ivory
    hex: "#FAF9F5"
    role: Page background (gray-050), text on dark and on clay
  - name: Ink
    hex: "#141413"
    role: Primary text, primary buttons, wordmark (gray-950)
  - name: Parchment
    hex: "#F0EEE6"
    role: Secondary surfaces, user message bubble, tertiary backgrounds (gray-150)
  - name: Clay Hover
    hex: "#C6613F"
    role: Clay button fill and hover
  - name: Slate Dark
    hex: "#262624"
    role: Dark mode page background (gray-800)
  - name: Cream
    hex: "#F5F4ED"
    role: Sidebar and secondary background (gray-100)
  - name: Oat
    hex: "#E8E6DC"
    role: Secondary button fill, quiet borders (gray-200)
  - name: Border
    hex: "#D1CFC5"
    role: Card and input borders (gray-300)
  - name: Stone
    hex: "#87867F"
    role: Placeholder and tertiary text (gray-500)
  - name: Olive Grey
    hex: "#5E5D59"
    role: Secondary text (gray-600)
  - name: Charcoal
    hex: "#30302E"
    role: Dark mode raised surfaces and composer (gray-750)
  - name: Clay Dark
    hex: "#C46849"
    role: Focus ring, clay on light backgrounds
  - name: Sky
    hex: "#6A9BCC"
    role: Illustration and chart accent
  - name: Cactus
    hex: "#BCD1CA"
    role: Illustration accent
  - name: Error
    hex: "#BF4D43"
    role: Error text and destructive states
fonts:
  display:
    family: "Anthropic Serif"
    fallback: "Source Serif 4"
    weights: [400, 500]
  body:
    family: "Anthropic Sans"
    fallback: "Inter"
    weights: [400, 500]
  mono:
    family: "Anthropic Mono"
    fallback: "JetBrains Mono"
    weights: [400]
typeScale:
  - { role: Display, size: 72, weight: 500, lineHeight: 1.1, tracking: "-0.02em" }
  - { role: Headline 1, size: 52, weight: 500, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Headline 3, size: 36, weight: 500, lineHeight: 1.1, tracking: "0" }
  - { role: Chat Greeting, size: 40, weight: 400, lineHeight: 1.2, tracking: "-0.01em" }
  - { role: Body Large, size: 20, weight: 400, lineHeight: 1.6, tracking: "0" }
  - { role: Chat Body, size: 16, weight: 400, lineHeight: 1.7, tracking: "0" }
  - { role: UI Label, size: 14, weight: 500, lineHeight: 1.3, tracking: "0" }
  - { role: Caption, size: 12, weight: 400, lineHeight: 1.6, tracking: "0" }
radii: { sm: 6, md: 8, lg: 16, pill: 9999 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
shadows:
  - { name: Small, value: "0 2px 8px #0000000a" }
  - { name: Medium, value: "0 4px 20px #0000000a" }
  - { name: Large, value: "0 4px 16px #0000001a" }
preview:
  bg: "#FAF9F5"
  surface: "#F0EEE6"
  text: "#141413"
  muted: "#5E5D59"
  border: "#D1CFC5"
  accent: "#D97757"
  accentText: "#FAF9F5"
  radius: 8
  buttonStyle: solid
---

# Claude

## 1. Visual Theme & Atmosphere

Claude looks like a well-made paper notebook. Surfaces are warm off-white and cream instead of pure white, text is a soft near-black, and the only strong color is a terracotta orange ("clay") that belongs to the spark mark. Headlines are set in a bookish serif. Interfaces are quiet and spacious, so the conversation itself is the focus.

What makes it recognisable:

- **Warm neutrals.** Every grey leans yellow-brown: ivory `#FAF9F5`, cream `#F5F4ED`, parchment `#F0EEE6`, oat `#E8E6DC`. Nothing is blue-grey.
- **One accent.** Clay `#D97757` appears on the spark mark, the app icon, the send button and a few highlights. It is never spread across large areas of UI except the app icon.
- **Serif for voice, sans for tools.** Headlines and the chat greeting use Anthropic Serif; buttons, labels, navigation and inputs use Anthropic Sans.
- **The spark.** A hand-drawn-looking starburst of uneven tapered rays, slightly irregular on purpose. On claude.ai it animates while Claude is working.
- **Black buttons.** Primary buttons on claude.com are ink `#141413` with ivory text, not orange. Clay buttons exist but are the exception.
- **Soft, almost flat depth.** Hairline borders (0.5px to 1px) and very faint shadows (4% to 10% black).

Mood words: calm, warm, literate, considered, human.

## 2. Color Palette & Roles

Hex values for the gray ramp and accents are read from claude.com's CSS custom properties (November 2026). claude.ai blocked automated fetches (403), so the app-specific mappings below are approximate and based on the same ramp.

| Name | Token | Hex | Role |
|---|---|---|---|
| White | `--color-gray-000` | `#FFFFFF` | Cards and composer on light pages |
| Ivory | `--color-gray-050` | `#FAF9F5` | Page background, primary button text |
| Cream | `--color-gray-100` | `#F5F4ED` | Secondary background, sidebar (approx.) |
| Parchment | `--color-gray-150` | `#F0EEE6` | Tertiary background, user message bubble (approx.) |
| Oat | `--color-gray-200` | `#E8E6DC` | Secondary button fill, tertiary border |
| Sand | `--color-gray-250` | `#DEDCD1` | Hover fills, pictograms |
| Border | `--color-gray-300` | `#D1CFC5` | Secondary border, input border |
| Border Strong | `--color-gray-400` | `#B0AEA5` | Primary border |
| Stone | `--color-gray-500` | `#87867F` | Tertiary text, placeholders |
| Olive Grey | `--color-gray-600` | `#5E5D59` | Secondary text |
| Dark Olive | `--color-gray-700` | `#3D3D3A` | Strong secondary text, button text |
| Charcoal | `--color-gray-750` | `#30302E` | Dark raised surfaces |
| Slate Dark | `--color-gray-800` | `#262624` | Dark background |
| Deep | `--color-gray-850` | `#1F1E1D` | Dark sidebar (approx.) |
| Ink | `--color-gray-950` | `#141413` | Primary text, primary buttons |
| Clay | `--color-clay` | `#D97757` | Brand accent, spark |
| Clay Hover | `--color-clay-hover` | `#C6613F` | Clay button fill |
| Clay Dark | `--color-clay-dark` | `#C46849` | Focus ring (`--color-focus`) |

### Illustration accents

| Name | Hex |
|---|---|
| Peach / Cactus / Mineral | `#EBC9B7` / `#BCD1CA` / `#629987` |
| Sky / Heather / Plum | `#6A9BCC` / `#CBCADB` / `#827DBD` |

### Semantic colors

| Role | Hex |
|---|---|
| Error | `#BF4D43` (forms `#B53333`) |
| Switch on | `#2C84DB` |
| Focus ring | `#C46849` |

### Dark mode

claude.ai has light, dark and system themes. Dark mode swaps to the same warm ramp: page `#262624`, sidebar `#1F1E1D`, composer and cards `#30302E`, borders `#3D3D3A` or white at 10-15%, text `#FAF9F5`, secondary text `#B0AEA5` (approximate). Clay stays `#D97757`.

## 3. Typography

All three families are proprietary to Anthropic and served as web fonts (`AnthropicSans_Roman_Web`, `AnthropicSerif_Roman_Web`, `AnthropicMono_Roman_Web`). They are not licensed for outside use.

- **Anthropic Serif:** display headlines, the claude.ai greeting, pricing plan names and (by default) long-form response text on claude.ai (approximate). Fallback: Source Serif 4, then Georgia.
- **Anthropic Sans:** UI text, buttons, nav, labels, body on marketing pages. Fallback: Inter, then system-ui.
- **Anthropic Mono:** code blocks and inline code. Fallback: JetBrains Mono.

claude.com sizes are fluid `clamp()` values from 320px to 1440px viewports. Max values shown.

| Role | Family | Size (min to max) | Weight | Line height |
|---|---|---|---|---|
| Display 1 | Serif | 42 to 72px | 500 | 1.1 |
| Display 2 | Serif or Sans | 36 to 64px | 500 | 1.1 |
| Headline 1 | Serif | 34 to 52px | 500 | 1.2 |
| Headline 2 | Serif or Sans | 30 to 44px | 500 | 1.2 |
| Headline 3 | Sans | 28 to 36px | 500 | 1.1 |
| Headline 4 | Serif (plan names) | 23 to 32px | 500 | 1.1 |
| Body Large | Sans | 22 to 24px | 400 | 1.5 |
| Body 1 | Sans | 19 to 20px | 400 | 1.6 |
| Body 3 / Caption | Sans | 15px / 12px | 400 | 1.6 |
| Chat response (claude.ai) | Serif | 16px (approx.) | 400 | 1.7 (approx.) |
| Button | Sans | 14 to 16px | 500 (480 in some themes) | 1 |

Rules:

- Sentence case everywhere, including buttons and headlines.
- `font-feature-settings: "pnum" on, "lnum" on, "liga" on` on headings and buttons: proportional lining figures.
- Serif headlines use weight 500, never bold 700. Sans UI uses 400 and 500.
- Keep body measure near 60ch (`--text-width-body`), headlines near 30ch, and use `text-wrap: balance` on headings.

## 4. Logo & Brand Mark

- **Spark:** a starburst of about a dozen tapered rays of uneven length radiating from a small solid centre. The rays are deliberately irregular, like a hand-cut shape. Default color clay `#D97757`; ivory `#FAF9F5` on clay.
- **Wordmark:** "Claude" in a custom serif, ink `#141413`, with the spark to its left. In the claude.com SVG the spark is about the full cap-plus-descender height of the word (125 units of a 573x125 viewBox) and sits about 25 units before the "C".
- **App icon:** ivory spark centred on a clay square that darkens slightly toward the bottom (`#D97757` to about `#DB6944`).
- **Clear space:** at least half the spark's width on every side (approximate).
- **Minimum size:** spark 16px, lockup about 80px wide (approximate).
- **Color versions:** clay spark plus ink word on light; clay spark plus ivory word on dark; single-color ink or ivory when needed.

Misuse:

- Don't swap the spark for a generic star, asterisk or sparkle glyph, and don't make it symmetrical.
- Don't recolor the spark in gradients or neon colors.
- Don't set "Claude" in a stock serif and call it the logo.

## 5. Components

### Buttons (claude.com `Button` module)

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 40px; padding: 8px 24px; min-width: 44px;
  font: 500 15px/1 "Anthropic Sans", Inter, system-ui, sans-serif;
  font-feature-settings: "pnum" on, "lnum" on;
  border: none; border-radius: 8px;
}
.btn-primary { background: #141413; color: #FAF9F5; box-shadow: 0 0 0 0 #141413; }
.btn-primary:hover { box-shadow: 0 0 0 2px #141413; }      /* grows a ring, no color change */
.btn-secondary { background: #F0EEE6; color: #3D3D3A; box-shadow: 0 0 0 1px #DEDCD1; }
.btn-secondary:hover { color: #141413; box-shadow: 0 0 0 1px #F0EEE6, 0 0 0 2px #DEDCD1; }
.btn-tertiary { background: #FAF9F5; color: #3D3D3A; box-shadow: 0 0 0 1px #DEDCD1; }
.btn-clay { background: #C6613F; color: #FFFFFF; }
.btn:focus-visible { outline: 2px solid #C46849; outline-offset: 4px; }
```

- Sizes: main 40px (`8px 24px`), medium 36px (`8px 12px`), small 28px (`4px 12px`), icon-only 40px with 12px radius.

### claude.ai sidebar (approximate)

- Left rail about 260-290px wide on cream `#F5F4ED` (dark `#1F1E1D`), collapsible to an icon strip.
- Top: the Claude wordmark and a collapse toggle. Then a "New chat" row with a clay-tinted plus icon, and entries for Chats, Projects and Artifacts.
- "Starred" and "Recents" lists: one-line chat titles in 14px sans, `#3D3D3A`, 6-8px radius hover fill `#E8E6DC`, active item a slightly darker fill. A "..." menu appears on hover.
- Bottom: account row with a round initials avatar (ink or clay fill), name and plan label.

### Composer (approximate)

- A large rounded box centred in the main column (max about 768px wide): white `#FFFFFF` on light (dark `#30302E`), 0.5-1px border `#D1CFC5`, radius about 16-20px, soft shadow `0 4px 20px #0000000a`.
- Placeholder "How can I help you today?" in `#87867F`. Textarea grows to a max height, then scrolls.
- Bottom row: a "+" attach button and tools/settings icon buttons on the left (ghost, 32px, 8px radius); model selector text button ("Opus", "Sonnet") on the right; then the send button: a 32px square, 8px radius, clay `#D97757` fill with an ivory up-arrow. Disabled send is clay at about 50% opacity.
- On an empty chat, the composer sits under a serif greeting with a small clay spark to its left.

### Messages (approximate)

- **User message:** a parchment `#F0EEE6` bubble (dark `#141413` or `#30302E`), radius about 12-16px, 12px 16px padding, sans 16px. Edit and copy icons appear on hover.
- **Claude response:** no bubble. Text sits straight on the page in serif 16px at about 1.7 line height, max width about 680px. Headings in the response use the same family at 18-22px, weight 600.
- Under each response: a row of small ghost icon buttons (copy, thumbs up, thumbs down, retry) in `#87867F`.
- Code blocks: `#F5F4ED` or white with a hairline border and 8px radius on light; Anthropic Mono 14px; language label and copy button in a header strip.
- While generating, the clay spark animates at the bottom of the response.

### Artifacts panel (approximate)

- Opens as a right-hand pane beside the chat (roughly 50% width on desktop, full screen on mobile).
- Panel: white or ivory surface, 1px `#D1CFC5` left border or a 12-16px radius card, header with the artifact title, a Preview / Code segmented toggle, and icon buttons for copy, download, publish and close.
- In the chat, an artifact appears as a compact card: a small icon tile, title in 14px medium, type label in `#87867F`, 12px radius, 1px border.

**Cards (claude.com):** radius 12-24px (fluid `--pp-radius-xl` 16 to 24px on pricing cards), background `#F0EEE6` or white, 1px `#DEDCD1` border or none.
  Pricing cards: serif plan name ("Free", "Pro", "Max"), sans body, check-list rows with 20px icons, black primary CTA at the bottom.

**Inputs and forms:** 1px `#B0AEA5` border, 8px radius, white field, ink text, `#87867F` placeholder. Focus: 2px `#C46849` outline. Error text `#B53333`.

**Navigation (claude.com):** top bar on ivory with the wordmark left, menu items ("Products", "Models", "Pricing" and similar dropdowns) in 15px sans, and "Try Claude" as a black primary button with "Contact sales" as secondary on the right.
  Dropdowns: white panel, 12px radius, `0 4px 16px #0000001a` shadow, min width 200px.

**Tabs and toggles:** segmented tabs sit in a `#F0EEE6` track with 2-4px padding; the selected tab is a white pill with 6-12px radius. Switches turn `#2C84DB` when on.

## 6. Layout & Spacing

- **Spacing scale (`--sp-*`):** 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128, 200px.
- **Max widths:** main 1440px (`90rem`), medium 1192px, small 960px, narrow 660px.
- **Page margins:** fluid 32 to 64px (`--container-margin`); 12-column grid with 32px gutters on desktop.
- **Section spacing:** fluid 96 to 128px main, 64 to 96px medium, 128 to 200px large; first section below the nav starts 192 to 240px from the top.
- **claude.ai:** sidebar plus a single centred conversation column (about 680-768px). Composer pinned to the bottom with 16-24px breathing room (approximate).

## 7. Depth, Elevation & Motion

- **Shadows:** small `0 2px 8px #0000000a`, medium `0 4px 20px #0000000a`, large `0 4px 16px #0000001a`. That's the whole set.
- **Borders:** hairlines of 0.5px, 1px, 1.5px and 2px (`--border-xs` to `--border-lg`) in the warm grey ramp.
- **Easing tokens:** `--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1)`, `--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1)`, `--ease-in-out-power3: cubic-bezier(0.645, 0.045, 0.355, 1)`.
- **Durations:** 150-200ms for hover and focus, 300-500ms for panels and page reveals (approximate). Buttons grow a 1-2px ring on hover instead of changing fill.
- **The spark in motion:** a gentle rotate or pulse while Claude thinks or streams. Keep it slow and organic.

## 8. Iconography & Imagery

- **UI icons:** 20px on a 20x20 grid, 1.5px rounded strokes or filled shapes in `currentColor`, slightly soft corners. Neutral color by default, clay only for the spark.
- **Illustrations:** hand-drawn feeling ink line drawings with flat fills from the accent set (peach, cactus, sky, heather, clay) on ivory. Hands, objects, nodes and paths are common motifs. Lines are a little wobbly, not geometric.
- **Photography:** rare; warm-toned, natural light, often with a 48% ink tint when text sits on top.

## 9. Voice & Microcopy

Thoughtful, plain and warm. Speaks like a capable colleague, not a mascot. Avoids hype. Short sentences, sentence case, no exclamation marks.

- Buttons: two or three words ("Try Claude", "Contact sales", "Download apps", "Continue with email").
- Headlines: short and a little reflective; the claude.com hero read "Question what's next" when checked in November 2026.
- Chat empty state: a time-of-day greeting in serif ("Good morning, Sam"), placeholder "How can I help you today?" (approximate).
- Disclaimer under the composer: "Claude can make mistakes. Please double-check responses." (approximate wording).

## 10. Do's and Don'ts

**Do**

- Use warm off-white backgrounds (`#FAF9F5`, `#F5F4ED`) and near-black ink `#141413`.
- Set headlines in a serif at weight 500 and UI in a clean sans.
- Make primary buttons ink with ivory text and an 8px radius; save clay for the spark, the send button and small highlights.
- Use hairline warm borders and 4-10% black shadows.
- Leave room: 60ch body measure, 1.6-1.7 line height.
- Draw the spark as an irregular starburst of tapered rays.

**Don't**

- Don't use pure white pages with cool grey text or blue links.
- Don't fill big areas with clay or use orange gradients in the UI.
- Don't use sparkle emoji or a four-point star to stand in for the mark.
- Don't use heavy drop shadows, glassmorphism or neon glows.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this UI in the style of Claude by Anthropic. Background is warm ivory `#FAF9F5`, secondary surfaces cream `#F5F4ED` and parchment `#F0EEE6`, text ink `#141413`, secondary text `#5E5D59`, tertiary `#87867F`, borders `#D1CFC5` and `#DEDCD1`. The only accent is clay `#D97757` (hover `#C6613F`, focus ring `#C46849`), used for the brand spark and the send button. Headlines use a serif (`"Anthropic Serif", "Source Serif 4", Georgia, serif`) at weight 500 with line-height 1.1-1.2; UI uses `"Anthropic Sans", Inter, system-ui, sans-serif` at 400/500 with proportional lining numerals. Primary buttons: ink fill, ivory text, 40px tall, 8px radius, `8px 24px` padding, hover adds `box-shadow: 0 0 0 2px #141413`. Secondary buttons: `#F0EEE6` fill with a 1px `#DEDCD1` ring. For a chat app: a cream left sidebar (~280px) with "New chat" and a recents list, a centred conversation column (~720px), user messages in parchment bubbles with 16px radius, assistant replies as plain serif text at 16px/1.7, and a bottom composer that is a white rounded box (~20px radius, hairline border, `0 4px 20px #0000000a`) with a 32px clay send button. Shadows are faint, borders are hairlines, everything is sentence case and calm. Provide a dark mode with `#262624` page, `#1F1E1D` sidebar and `#30302E` surfaces.

```css
:root {
  --brand-clay: #D97757;
  --brand-clay-hover: #C6613F;
  --brand-clay-dark: #C46849;
  --brand-ivory: #FAF9F5;
  --brand-cream: #F5F4ED;
  --brand-parchment: #F0EEE6;
  --brand-sand: #DEDCD1;
  --brand-border: #D1CFC5;
  --brand-border-strong: #B0AEA5;
  --brand-stone: #87867F;
  --brand-text-secondary: #5E5D59;
  --brand-text-strong: #3D3D3A;
  --brand-charcoal: #30302E;
  --brand-dark: #262624;
  --brand-dark-sidebar: #1F1E1D;
  --brand-ink: #141413;
  --brand-sky: #6A9BCC;
  --brand-cactus: #BCD1CA;
  --brand-error: #BF4D43;
  --brand-font-serif: "Anthropic Serif", "Source Serif 4", Georgia, serif;
  --brand-font-sans: "Anthropic Sans", "Inter", system-ui, sans-serif;
  --brand-font-mono: "Anthropic Mono", "JetBrains Mono", ui-monospace, monospace;
  --brand-radius-md: 8px;
  --brand-radius-lg: 12px;
  --brand-radius-xl: 16px;
  --brand-radius-composer: 20px;
  --brand-shadow-sm: 0 2px 8px #0000000a;
  --brand-shadow-md: 0 4px 20px #0000000a;
  --brand-shadow-lg: 0 4px 16px #0000001a;
  --brand-ease-out: cubic-bezier(0.19, 1, 0.22, 1);
  --brand-ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Anthropic.
