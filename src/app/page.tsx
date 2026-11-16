import fs from "node:fs";
import path from "node:path";
import { getDesigns } from "@/lib/designs";
import type { Metadata } from "next";
import { Launchpad } from "@/components/Launchpad";
import { SITE } from "@/lib/site";

export function generateMetadata(): Metadata {
  const designs = getDesigns();
  const top = ["netflix", "stripe", "instagram", "disney-plus", "y-combinator"].map((s) => designs.find((d) => d.slug === s)?.name).filter(Boolean);
  const title = "Open-Sourced Brands: free DESIGN.md design systems";
  const description = `Download DESIGN.md design systems for ${top.join(", ")} and ${designs.length - top.length} more brands: colors, fonts, components, logos and app icons, ready for Claude Code, Cursor and other AI coding agents.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    // Next replaces (doesn't merge) nested openGraph/twitter objects, so the image must be repeated here.
    openGraph: {
      type: "website",
      siteName: "Open-Sourced Brands",
      title,
      description,
      url: SITE,
      images: [{ url: "/og.png", width: 1200, height: 630, type: "image/png", alt: "Open-Sourced Brands: great artists steal to learn." }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Open-Sourced Brands",
      alternateName: "brands.md",
      url: SITE,
      description: "Free DESIGN.md design-system files for well-known brands, written for AI coding agents and designers.",
      author: { "@type": "Person", name: "Nick Harty", url: "https://nickharty.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "DESIGN.md files",
      numberOfItems: items.length,
      itemListElement: items.map((d, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/${d.slug}`, name: `${d.name} DESIGN.md` })),
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="sr-only">Open-Sourced Brands: free DESIGN.md design systems</h1>
      <Launchpad items={items} />
    </>
  );
}
