---
name: Berkshire Hathaway
shortName: Berkshire
slug: berkshire-hathaway
url: https://berkshirehathaway.com
category: Finance
tagline: "A plain 1990s HTML page: navy Times text, purple links, horizontal rules and no CSS."
updated: 2026-11-16
logoBackground: "#FFFFFF"
theme: light
colors:
  - name: Navy Text
    hex: "#000080"
    role: All body text and headings (body text attribute)
  - name: White
    hex: "#FFFFFF"
    role: Page background (bgcolor)
  - name: Link Purple
    hex: "#800080"
    role: Unvisited links (link attribute)
  - name: Visited Red
    hex: "#FF0000"
    role: Visited links (vlink attribute)
  - name: Logo Indigo
    hex: "#2E3192"
    role: Wordmark colour in the vector logo used by press and Wikipedia
  - name: Rule Shadow
    hex: "#9A9A9A"
    role: Default hr bevel, dark edge (browser default, approximate)
  - name: Rule Light
    hex: "#EEEEEE"
    role: Default hr bevel, light edge (browser default, approximate)
  - name: Black
    hex: "#000000"
    role: Plain text in linked PDFs and letters
fonts:
  display:
    family: "Times New Roman"
    fallback: "Tinos"
    weights: [700]
  body:
    family: "Times New Roman"
    fallback: "Tinos"
    weights: [400, 700]
typeScale:
  - { role: Initial Capital (font size 6), size: 32, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Small Capitals (font size 4), size: 18, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Body and links (default size 3), size: 16, weight: 400, lineHeight: 1.15, tracking: "0" }
  - { role: Address (font size 2), size: 13, weight: 700, lineHeight: 1.15, tracking: "0" }
  - { role: Updated note (font size 1), size: 10, weight: 400, lineHeight: 1.15, tracking: "0" }
radii: { sm: 0, md: 0, lg: 0, pill: 0 }
spacing: [8, 16, 40, 45, 55]
shadows: []
preview:
  bg: "#FFFFFF"
  surface: "#FFFFFF"
  text: "#000080"
  muted: "#000080"
  border: "#9A9A9A"
  accent: "#800080"
  accentText: "#FFFFFF"
  radius: 0
  buttonStyle: outline
---

# Berkshire Hathaway

## 1. Visual Theme & Atmosphere

berkshirehathaway.com is famous for not being designed in the modern sense at all. The home page is a single HTML 4.0 Transitional document with no stylesheet, no web fonts, no images except a tiny GEICO GIF, and no JavaScript beyond an analytics tag. The page's `<meta name="GENERATOR">` still reads "MSHTML 8.00". It has looked essentially the same since the late 1990s, and that is the point: the company's identity is thrift, plain speaking and long-term thinking, and the website says so by doing nothing extra.

What makes it recognisable:

- **Navy text on white.** Set with `<body bgcolor="#ffffff" text="#000080">`, not CSS.
- **Purple and red links.** `link="#800080"` (purple) and `vlink="#ff0000"` (red for visited), the reverse of what most visitors expect.
- **Browser-default serif.** No font is specified, so it renders in the browser default, which is Times or Times New Roman on almost every machine.
- **Fake small caps title.** "BERKSHIRE HATHAWAY INC." is built with `<font size="6">` for the initials B and H and `<font size="4">` for the rest, all bold and centred.
- **A two-column link table.** A borderless `<table width="90%">` with bulleted `<ul><li>` links in each cell, each followed by a tiny "Updated ..." note.
- **Horizontal rules.** Default bevelled `<hr>` lines separate the title, the link table, the GEICO line, the contact note and the copyright.

Mood words: frugal, unchanged, literal, trustworthy, anti-marketing.

## 2. Color Palette & Roles

Every colour on the home page comes from HTML attributes and browser defaults. There are no hex values in any stylesheet because there is no stylesheet.

| Name | Hex | Source | Role |
|---|---|---|---|
| White | `#FFFFFF` | `bgcolor` | Page background |
| Navy | `#000080` | `text` | All text: title, address, notes, footer |
| Purple | `#800080` | `link` | Unvisited links |
| Red | `#FF0000` | `vlink` | Visited links |
| Active link | `#FF0000` | browser default `alink` (approximate) | Link while being clicked |
| Rule dark edge | `#9A9A9A` | browser `hr` default (approximate) | Lower/left bevel of `<hr>` |
| Rule light edge | `#EEEEEE` | browser `hr` default (approximate) | Upper/right bevel of `<hr>` |
| Logo Indigo | `#2E3192` | vector logo file | Only in the wordmark used elsewhere (press, Wikipedia) |

There are no semantic colours (success, error), no hover states and no dark mode. The browser's default focus ring is the only interactive styling.

## 3. Typography

**Family:** none declared. The page falls back to the browser's default proportional font: Times New Roman on Windows, Times on macOS, and Liberation Serif or Tinos on Linux.

**Substitute:** **Tinos** on Google Fonts is metric-compatible with Times New Roman. Use it if you need consistent rendering across systems; use plain `serif` if you want to be faithful to the original.

```css
font-family: "Times New Roman", Times, Tinos, serif;
```

### Scale (legacy `<font size>` mapped to CSS)

| Role | HTML | CSS equivalent | Weight |
|---|---|---|---|
| Title initials "B", "H" | `<font size="6">` inside `<b>` | 32px (xx-large) | 700 |
| Title rest "ERKSHIRE", "ATHAWAY" | `<font size="4">` | 18px (large) | 700 |
| Address and "INC." | `<font size="2">` | 13px (small) | 700 |
| Link text | default | 16px (medium) | 400 |
| "Updated November 16, 2026" notes | `<font size="1">` | 10px (x-small) | 400 |
| Contact paragraph and footer | `<font size="2">` | 13px | 400 |

Line height is the browser default (about 1.15). There is no letter-spacing and no text transform; the capitals in the title are typed as capitals.

### Rules

- Title and headings are centred with `<p align="center">` and `<center>`.
- Bold comes from `<b>`, not from font weights.
- Link text is long and literal: "Fraudulent Claims Regarding Mr. Buffett's Endorsements of Investment Products and Political Candidates".

## 4. Logo & Brand Mark

Berkshire Hathaway has no symbol and the website has no logo image. The "logo" on the site is the bold text title in mixed font sizes. Elsewhere (annual report covers, press, Wikipedia) a vector wordmark is used: **BERKSHIRE HATHAWAY INC.** in a bold serif with larger initial capitals, coloured indigo `#2E3192`.

- **Primary:** indigo serif wordmark on white.
- **Monochrome:** navy or black on white.
- **Compact:** "BH" initials for small square uses (as in this library's icon; not an official mark).
- **Clear space:** at least the height of the initial "B" (approximate).
- **Minimum size:** about 120px wide so "INC." stays legible (approximate).

Misuse:

- Do not modernise it into a sans-serif or add a symbol.
- Do not use gradients, shadows or bright colours.
- Do not present a redesigned Berkshire site as official.

## 5. Components

There are very few components. Rebuild them with HTML that behaves like the original, or with CSS that matches it exactly.

### Title block

```html
<p align="center"><b>
  <font size="6">B</font><font size="4">ERKSHIRE </font>
  <font size="6">H</font><font size="4">ATHAWAY </font>
  <font size="2">INC.<br>3555 Farnam Street<br>Omaha, NE 68131</font><br>
  Official Home Page
</b></p>
<hr>
```

CSS equivalent: centred, bold, navy, 32px initials with 18px small capitals, then a 13px three-line address and "Official Home Page" at 16px.

### Link table (signature)

- `<table border="0" cellspacing="0" width="90%">`, centred.
- Two columns at 50% each; rows with `height="45"` or `"55"` and `valign="top"`.
- Each cell holds a `<ul><li>` with one link and an optional `<font size="1">Updated Month D, YYYY</font>` line.
- Links on the live page today: "A Message from Warren E. Buffett", "Annual & Interim Reports", "News Releases from Berkshire Hathaway and from Warren Buffett", "Link to SEC Filings", "Annual Meeting Information", "Warren Buffett's Letters to Berkshire Shareholders", "Greg Abel's Letters to Berkshire Shareholders", "Charlie Munger's Letters to Wesco Shareholders", "Links to Berkshire Operating Companies", "Corporate Governance", "Common Stock Information", "Sustainability".

```css
.bh-links { width: 90%; margin: 0 auto; border-collapse: collapse; }
.bh-links td { width: 50%; height: 45px; vertical-align: top; padding: 0; }
.bh-links ul { margin: 16px 0; padding-left: 40px; list-style: disc; }
.bh-links .updated { font-size: 10px; }
```

### Links

- Default underline, purple `#800080`, red `#FF0000` once visited, no hover change.
- Many link straight to PDFs (letters, reports, `webfraud.pdf`).

### Horizontal rule

Default `<hr>`: full width, 2px bevelled line. In CSS: `border: 1px inset #EEEEEE; border-top-color: #9A9A9A;` (approximate).

### GEICO line

A centred 75 x 15px GEICO GIF linked to geico.com, then 10px uppercase text: "FOR A FREE CAR INSURANCE RATE QUOTE THAT COULD SAVE YOU SUBSTANTIAL MONEY", the URL and a phone number. The only promotional element on the page.

### Contact note and footer

A 13px paragraph explaining that the small corporate office cannot reply to web comments, then a "Legal Disclaimer" link and "Copyright © 1977-2026 Berkshire Hathaway Inc." with the company name in bold.

### Interior pages

Letters and reports pages are equally plain: white background, a centred title, and lists of years linking to HTML or PDF letters. Shareholder letters themselves are long, single-column text documents.

## 6. Layout & Spacing

- **Width:** fluid. No max width; the table is 90% of the window.
- **Alignment:** centred title and table, left-aligned contact paragraph and footer.
- **Spacing:** browser defaults only: 16px paragraph margins, 40px list indent, 8px body margin.
- **Rows:** 45-55px fixed cell heights.
- **Breakpoints:** none. On phones the page shrinks or zooms; nothing reflows except the table cells.
- **Density:** sparse, one screen tall on desktop.

## 7. Depth, Elevation & Motion

- No shadows, borders (other than `<hr>`), rounded corners, gradients or blur.
- No transitions or animation.
- Depth comes only from the default bevel on horizontal rules.

## 8. Iconography & Imagery

- **Icons:** none. Bullets are default `<li>` discs.
- **Images:** one 75 x 15px GEICO logo GIF.
- **Photography and illustration:** none on the home page.
- Annual reports (PDF) use plain covers with the serif wordmark.

## 9. Voice & Microcopy

Literal, modest and slightly dry. Links say exactly what they lead to. The single paragraph of prose is candid about limits.

- Mixed case with Title Case link labels.
- No calls to action, no "Learn more", no newsletters.
- Dates are written out: "Updated November 7, 2026".

Sample strings seen on the live site today:

- "Official Home Page"
- "A Message from Warren E. Buffett"
- "Link to SEC Filings"
- "If you have any comments about our WEB page, you can write us at the address shown above. However, due to the limited number of personnel in our corporate office, we are unable to provide a direct response."
- "Legal Disclaimer"

## 10. Do's and Don'ts

**Do**

- Keep it on a white page with navy `#000080` text and purple `#800080` links.
- Use the browser default serif (or Tinos) and default sizes.
- Centre the title, use horizontal rules between blocks, and list links in a plain two-column table.
- Write link labels that describe the destination in full.
- Keep every element functional; no decoration.

**Don't**

- Don't add hero images, cards, shadows, gradients or rounded corners.
- Don't add hover effects or animations.
- Don't load web fonts or a CSS framework if you want it to feel right.
- Don't present a mock-up as the official company site.

## 11. Agent Prompt Guide

Paste this into an AI coding agent:

> Build this page in the style of berkshirehathaway.com, which is a plain late-1990s HTML page. White background `#FFFFFF`, all text navy `#000080`, links purple `#800080`, visited links red `#FF0000`, default underlines and no hover effects. Use the browser default serif (`"Times New Roman", Times, Tinos, serif`) at default sizes: 16px links, 10px "Updated" notes, 13px address and footer. Centre a bold title where the initials are 32px and the remaining capitals are 18px ("BERKSHIRE HATHAWAY INC."), then an address and "Official Home Page". Separate blocks with default `<hr>` rules. Below, a borderless centred table at 90% width with two 50% columns and 45-55px rows, each cell a bulleted list item with one long, literal link and an optional tiny date note. No images except an optional tiny banner, no shadows, no radius, no web fonts, no responsive layout tricks.

```css
:root {
  --brand-bg: #FFFFFF;
  --brand-text: #000080;
  --brand-link: #800080;
  --brand-visited: #FF0000;
  --brand-logo: #2E3192;
  --brand-rule-dark: #9A9A9A;
  --brand-rule-light: #EEEEEE;
  --brand-font: "Times New Roman", Times, Tinos, serif;
  --brand-size-initial: 32px;
  --brand-size-caps: 18px;
  --brand-size-body: 16px;
  --brand-size-small: 13px;
  --brand-size-note: 10px;
  --brand-table-width: 90%;
  --brand-row-height: 45px;
  --brand-radius: 0;
  --brand-shadow: none;
}
body { background: var(--brand-bg); color: var(--brand-text); font-family: var(--brand-font); margin: 8px; }
a:link { color: var(--brand-link); }
a:visited { color: var(--brand-visited); }
```

---

Values are observed from the public product and published brand guidelines; this file is an unofficial reference and is not affiliated with or endorsed by Berkshire Hathaway.
