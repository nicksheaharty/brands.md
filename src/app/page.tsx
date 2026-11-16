import fs from "node:fs";
import path from "node:path";
import { getDesigns } from "@/lib/designs";
import { Launchpad } from "@/components/Launchpad";

/** Wikipedia pageviews over 90 days, from scripts/popularity.mjs. */
function popularity(): Record<string, number> {
  const file = path.join(process.cwd(), "data/popularity.json");
  if (!fs.existsSync(file)) return {};
  const { brands } = JSON.parse(fs.readFileSync(file, "utf8"));
  return Object.fromEntries(Object.entries(brands as Record<string, { views: number }>).map(([k, v]) => [k, v.views ?? 0]));
}

export default function Page() {
  const views = popularity();
  const items = getDesigns()
    .slice()
    .sort((a, b) => (views[b.slug] ?? 0) - (views[a.slug] ?? 0) || a.name.localeCompare(b.name))
    .map((d) => ({
      slug: d.slug,
      name: d.shortName ?? d.name,
      icon: d.icon,
      colors: d.colors.slice(0, 6).map((c) => c.hex),
    }));
  return <Launchpad items={items} />;
}
