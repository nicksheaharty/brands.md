"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import HoloCard from "@/components/HoloCard";
import { ScribbleUnderline } from "@/components/ScribbleUnderline";
import { brand, categoryColor } from "@/lib/palette";
import type { DesignSummary } from "@/lib/designs";

type Item = DesignSummary & { logo: string };

export function Library({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const cats = useMemo(() => Array.from(new Set(items.map((i) => i.category))).sort(), [items]);
  const shown = items.filter(
    (i) =>
      (!cat || i.category === cat) &&
      (!q || `${i.name} ${i.tagline} ${i.category} ${i.display}`.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section id="library" className="relative w-full px-6 md:px-12 pt-24 pb-12 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-title lowercase text-surface">
              <ScribbleUnderline color={brand.design}>the library</ScribbleUnderline>
            </h2>
            <div className="h-1 w-20 mt-6 mb-5" style={{ backgroundColor: brand.design }} />
            <p className="text-lg md:text-xl font-body text-surface/60 lowercase max-w-xl">
              tilt a card, open the preview, or grab the file straight from here.
            </p>
          </div>
          <label className="relative w-full md:w-80">
            <span className="sr-only">Search designs</span>
            <MagnifyingGlass weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface/30" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="search brands, fonts, vibes" className="field pl-11" />
          </label>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          <button onClick={() => setCat(null)} className={`chip ${!cat ? "chip-on" : ""}`}>all {items.length}</button>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(cat === c ? null : c)} className={`chip inline-flex items-center gap-2 ${cat === c ? "chip-on" : ""}`}>
              <span className="h-2 w-2 rounded-full" style={{ background: categoryColor(c) }} />
              {c}
            </button>
          ))}
        </div>

        {shown.length ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((d, i) => (
              <HoloCard
                key={d.slug}
                name={d.name}
                category={d.category}
                tagline={d.tagline}
                href={`/${d.slug}`}
                downloadHref={`/designs/${d.slug}/DESIGN.md`}
                logoSvg={d.logo}
                colors={d.colors}
                lines={d.lines}
                accent={categoryColor(d.category)}
                backdropColor={d.logoBackground}
                intro={i === 0}
              />
            ))}
          </div>
        ) : (
          <p className="text-center py-20 text-surface/40 font-body text-lg lowercase">nothing matches that. try a brand name.</p>
        )}
      </div>
    </section>
  );
}
