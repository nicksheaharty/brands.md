// Pulls each brand's official App Store icon via Apple's public iTunes Lookup API
// and saves it as designs/<slug>/icon.png (256px PNG). The site prefers icon.png over icon.svg.
// IDs come from each DESIGN.md's `appStoreId` frontmatter, plus the APPS map below for older files.
// Only the brand's own main app counts (seller = the brand).
// Run: node scripts/fetch-app-icons.mjs [slug ...]
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const APPS = {
  airbnb: 401626263,
  facebook: 284882215,
  instagram: 389801252,
  letterboxd: 1054271011,
  linear: 1645587184, // Linear Mobile
  netflix: 363590051,
  notion: 1232780281,
  spotify: 324684580,
  stripe: 978516833, // Stripe Dashboard
  x: 333903271,
  a24: 6446205568,
  "y-combinator": 6464718392,
  "disney-plus": 1446075923,
  "hbo-max": 1666653815,
  hulu: 376510438,
  "prime-video": 545519333,
  "apple-tv": 1174078549,
  peacock: 1508186374,
  "paramount-plus": 530168168,
  crunchyroll: 329913454,
  tubi: 886445756,
  "pluto-tv": 751712884,
  mubi: 626148774,
  "criterion-channel": 1454275199,
};

// Rule of thumb, learned the hard way: only the brand's own flagship app, and re-check after
// holidays (Target, Walmart and SHEIN ship seasonal icons). Side apps (Apple Store, 1.1.1.1,
// Mi Home, Switch) show the wrong mark, so those brands keep their vector icon.svg instead.
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const only = process.argv.slice(2);
for (const slug of fs.readdirSync(path.join(root, "designs"))) {
  const md = path.join(root, "designs", slug, "DESIGN.md");
  if (!fs.existsSync(md)) continue;
  let id;
  try {
    id = matter(fs.readFileSync(md, "utf8")).data.appStoreId;
  } catch {
    continue; // folder still being written
  }
  if (id) APPS[slug] = Number(id);
}
const slugs = Object.keys(APPS).filter((s) => (!only.length || only.includes(s)) && fs.existsSync(path.join(root, "designs", s)));

const ids = slugs.map((s) => APPS[s]).join(",");
const res = await fetch(`https://itunes.apple.com/lookup?id=${ids}&country=us`, { headers: { "User-Agent": "designs-site/1.0" } });
const { results } = await res.json();
const byId = new Map(results.map((r) => [r.trackId, r]));

for (const slug of slugs) {
  const app = byId.get(APPS[slug]);
  if (!app?.artworkUrl512) {
    console.log(`skip ${slug}: no artwork`);
    continue;
  }
  const url = app.artworkUrl512.replace(/\/[^/]+$/, "/256x256bb.png");
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  if (!img.ok || buf.subarray(1, 4).toString() !== "PNG") {
    console.log(`skip ${slug}: bad image`);
    continue;
  }
  fs.writeFileSync(path.join(root, "designs", slug, "icon.png"), buf);
  console.log(`${slug}: ${app.trackName} (${app.sellerName}) ${buf.length} bytes`);
}
