import type { MetadataRoute } from "next";
import { getDesigns } from "@/lib/designs";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const designs = getDesigns();
  return [
    { url: SITE, changeFrequency: "daily", priority: 1 },
    { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    ...designs.map((d) => ({ url: `${SITE}/${d.slug}`, lastModified: d.updated || undefined, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
