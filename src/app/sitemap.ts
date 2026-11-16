import type { MetadataRoute } from "next";
import { getDesigns } from "@/lib/designs";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const designs = getDesigns();
  return [
    { url: SITE, changeFrequency: "daily", priority: 1 },
    ...designs.map((d) => ({ url: `${SITE}/${d.slug}`, lastModified: d.updated || undefined, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
