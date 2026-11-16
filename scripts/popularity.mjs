// Ranks brands by English Wikipedia pageviews over the last 90 days (a neutral popularity signal
// that exists for every brand, app or not). Writes data/popularity.json; the home grid sorts by it.
// Optional per-brand override: `wikipedia: "Article title"` in DESIGN.md frontmatter.
// Run: node scripts/popularity.mjs
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const UA = { "User-Agent": "designs-one-lemon.vercel.app popularity script (github.com/nicksheaharty/brands.md)" };

// Brand names that collide with ordinary words or other topics.
const TITLES = {
  stripe: "Stripe, Inc.", mubi: "Mubi (streaming service)", lionsgate: "Lionsgate Studios", antler: "Antler (venture capital firm)",
  x: "Twitter", linear: "Linear (software)", notion: "Notion (productivity software)", neon: "Neon (company)",
  upenn: "University of Pennsylvania", storiara: null, a24: "A24", universal: "Universal Pictures",
  paramount: "Paramount Pictures", "sony-pictures": "Sony Pictures", legendary: "Legendary Entertainment",
  pixar: "Pixar", "y-combinator": "Y Combinator", techstars: "Techstars", "500-global": "500 Global",
  antler: "Antler (venture capital)", "pear-vc": "Pear VC", "entrepreneur-first": "Entrepreneur First",
  "apple-tv": "Apple TV (streaming service)", peacock: "Peacock (streaming service)", tubi: "Tubi",
  mubi: "Mubi", "criterion-channel": "The Criterion Channel", "hbo-max": "HBO Max", hulu: "Hulu",
  "prime-video": "Amazon Prime Video", "disney-plus": "Disney+", "paramount-plus": "Paramount+",
  crunchyroll: "Crunchyroll", "pluto-tv": "Pluto TV", lionsgate: "Lionsgate", "warner-bros": "Warner Bros.",
  "amazon-mgm-studios": "Amazon MGM Studios", apple: "Apple Inc.", google: "Google", gemini: "Google Gemini",
  threads: "Threads (social network)", xai: "Grok (chatbot)", target: "Target Corporation", square: "Square (company)",
  block: "Block, Inc.", ramp: "Ramp (company)", mercury: "Mercury (bank)", wise: "Wise (company)",
  discover: "Discover Financial", progressive: "Progressive Corporation", time: "Time (magazine)", vox: "Vox (website)",
  arm: "Arm Holdings", amd: "AMD", hp: "HP Inc.", ing: "ING Group", td: "TD Bank, N.A.", citi: "Citigroup",
  chase: "Chase Bank", jpmorgan: "JPMorgan Chase", "us-bank": "U.S. Bancorp", ally: "Ally Financial",
  apollo: "Apollo Global Management", acorns: "Acorns (company)", lemonade: "Lemonade, Inc.", unity: "Unity Technologies",
  steam: "Steam (service)", grab: "Grab Holdings", fox: "Fox Broadcasting Company", roku: "Roku", sap: "SAP",
  "capital-one": "Capital One", visa: "Visa Inc.", toast: "Toast, Inc.", plaid: "Plaid Inc.", affirm: "Affirm Holdings",
  chime: "Chime (company)", brex: "Brex", kraken: "Kraken (cryptocurrency exchange)", nubank: "Nubank", monzo: "Monzo",
  "cash-app": "Cash App", venmo: "Venmo", kalshi: "Kalshi", polymarket: "Polymarket", shopify: "Shopify",
  telegram: "Telegram (software)", life360: "Life360", partiful: "Partiful", suno: "Suno AI", quince: "Quince (company)",
  canva: "Canva", samsung: "Samsung", nvidia: "Nvidia", microsoft: "Microsoft", ibm: "IBM", intuit: "Intuit",
  oracle: "Oracle Corporation", "the-guardian": "The Guardian", "new-york-times": "The New York Times",
  "bbc-news": "BBC News", "cbs-news": "CBS News", "abc-news": "ABC News", "nbc-news": "NBC News", cnn: "CNN",
  "fox-news": "Fox News", "ms-now": "MS NOW", cnbc: "CNBC", npr: "NPR", politico: "Politico", "the-verge": "The Verge",
  "new-yorker": "The New Yorker", "the-economist": "The Economist", "usa-today": "USA Today", "la-times": "Los Angeles Times",
  "al-jazeera": "Al Jazeera English", "apple-news": "Apple News", "yahoo-news": "Yahoo News", variety: "Variety (magazine)",
  "hollywood-reporter": "The Hollywood Reporter", deadline: "Deadline Hollywood", semafor: "Semafor (website)",
  substack: "Substack", "business-insider": "Business Insider", techcrunch: "TechCrunch",
};

const dir = path.join(root, "designs");
const designs = fs.readdirSync(dir).filter((s) => fs.existsSync(path.join(dir, s, "DESIGN.md"))).map((slug) => {
  const { data } = matter(fs.readFileSync(path.join(dir, slug, "DESIGN.md"), "utf8"));
  return { slug, name: data.name, wiki: data.wikipedia ?? (slug in TITLES ? TITLES[slug] : data.name) };
});

const day = (d) => d.toISOString().slice(0, 10).replace(/-/g, "");
const end = new Date(Date.now() - 86400000);
const start = new Date(end.getTime() - 89 * 86400000);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 404) return null;
    if (r.ok) {
      const t = await r.text();
      try { return JSON.parse(t); } catch { /* rate-limit page */ }
    }
    await sleep(2000 * 2 ** i);
  }
  return null;
}

// Resolve titles 50 at a time (follows redirects, skips missing and disambiguation pages).
const wanted = [...new Set(designs.map((d) => d.wiki).filter(Boolean))];
const canonical = {};
for (let i = 0; i < wanted.length; i += 50) {
  const batch = wanted.slice(i, i + 50);
  const j = await getJson(`https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops&titles=${encodeURIComponent(batch.join("|"))}`);
  const map = {};
  for (const n of j?.query?.normalized ?? []) map[n.from] = n.to;
  for (const r of j?.query?.redirects ?? []) map[r.from] = r.to;
  const ok = new Set(Object.values(j?.query?.pages ?? {}).filter((p) => !("missing" in p) && p.pageprops?.disambiguation === undefined).map((p) => p.title));
  for (const t of batch) {
    let c = map[t] ?? t;
    c = map[c] ?? c;
    canonical[t] = ok.has(c) ? c : null;
  }
  await sleep(500);
}

// Keep last known counts when a lookup fails (e.g. Wikimedia rate limits).
const previous = fs.existsSync(path.join(root, "data/popularity.json"))
  ? JSON.parse(fs.readFileSync(path.join(root, "data/popularity.json"), "utf8")).brands ?? {}
  : {};
const out = {};
for (const d of designs) {
  const title = d.wiki ? canonical[d.wiki] : null;
  let v = 0;
  if (title) {
    const j = await getJson(`https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/user/${encodeURIComponent(title.replace(/ /g, "_"))}/daily/${day(start)}/${day(end)}`);
    v = (j?.items ?? []).reduce((n, i) => n + i.views, 0);
    await sleep(250);
  }
  out[d.slug] = !v && previous[d.slug]?.views ? previous[d.slug] : { title, views: v };
  console.log(`${String(v).padStart(10)}  ${d.slug}  ->  ${title ?? "(none)"}`);
}
fs.writeFileSync(path.join(root, "data/popularity.json"), JSON.stringify({ from: day(start), to: day(end), brands: out }, null, 1) + "\n");
