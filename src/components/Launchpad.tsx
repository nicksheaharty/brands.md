"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { AppIcon } from "@/components/AppIcon";

type Item = { slug: string; name: string; icon: string; colors: string[] };

function useCells(ref: React.RefObject<HTMLDivElement | null>) {
  const [cells, setCells] = useState({ cols: 6, rows: 2, icon: 80, cellW: 136 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const icon = w < 640 ? 60 : 80;
      const cellW = icon + (w < 640 ? 28 : 56);
      const cellH = icon + (w < 640 ? 46 : 58);
      setCells({ cols: Math.max(1, Math.floor(w / cellW)), rows: Math.max(1, Math.floor(h / cellH)), icon, cellW });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [ref]);
  return cells;
}

export function Launchpad({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const area = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const { cols, rows, icon, cellW } = useCells(area);
  // The search bar spans exactly from the left edge of the first icon to the right edge of the last.
  const barWidth = cols * cellW - (cellW - icon);

  const shown = useMemo(
    () => items.filter((i) => !query || i.name.toLowerCase().includes(query.toLowerCase()) || i.slug.includes(query.toLowerCase())),
    [items, query]
  );
  const per = cols * rows;
  const pages = useMemo(() => {
    const out: Item[][] = [];
    for (let i = 0; i < shown.length; i += per) out.push(shown.slice(i, i + per));
    return out.length ? out : [[]];
  }, [shown, per]);

  useEffect(() => {
    scroller.current?.scrollTo({ left: 0 });
    setPage(0);
  }, [query, per]);

  // Vertical wheel turns pages sideways, like Launchpad.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const goTo = (p: number) => {
    const el = scroller.current;
    if (el) el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="flex h-full flex-col px-4 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl justify-center pt-2 md:pt-4">
        <div style={{ width: barWidth, maxWidth: "100%" }}>
        <label className="flex h-[50px] w-full items-center gap-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-primary/50 px-4 backdrop-blur-sm transition-colors">
          <MagnifyingGlass weight="bold" className="h-4 w-4 text-surface/40 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQuery("");
            }}
            placeholder="search designs"
            className="flex-1 bg-transparent font-body text-surface placeholder:text-surface/30 outline-none"
            aria-label="Search designs"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="text-surface/40 hover:text-primary" aria-label="Clear search">
              <X weight="bold" className="h-4 w-4" />
            </button>
          )}
        </label>
        </div>
      </div>

      <div ref={area} className="relative mx-auto mt-4 md:mt-8 w-full max-w-5xl flex-1 min-h-0">
        <div
          ref={scroller}
          onScroll={(e) => setPage(Math.round(e.currentTarget.scrollLeft / Math.max(1, e.currentTarget.clientWidth)))}
          className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          {pages.map((pg, pi) => (
            <ul
              key={pi}
              className="grid h-full w-full shrink-0 snap-start content-start justify-center pt-2"
              style={{ gridTemplateColumns: `repeat(${cols}, ${cellW}px)`, gridTemplateRows: `repeat(${rows}, auto)` }}
            >
              {pg.map((d) => (
                <li key={d.slug} className="flex justify-center py-2">
                  <Link
                    href={`/${d.slug}`}
                    className="group flex flex-col items-center"
                    style={{ width: icon + 24 }}
                  >
                    <AppIcon svg={d.icon} size={icon} className="transition-transform duration-200 group-hover:-translate-y-1 group-active:scale-95" />
                    <span className="mt-2 w-full truncate text-center text-[11px] md:text-[13px] text-surface/75 group-hover:text-surface">{d.name}</span>
                    <span className="mt-1 flex gap-[3px]" aria-hidden>
                      {d.colors.map((c, i) => (
                        <span key={i} className="h-[5px] w-[5px] rounded-full ring-[0.5px] ring-white/20" style={{ background: c }} />
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
              {!pg.length && <li className="col-span-full text-center text-surface/40 font-body lowercase">nothing called that yet.</li>}
            </ul>
          ))}
        </div>
      </div>

      <div className="flex h-6 items-center justify-center gap-2">
        {pages.length > 1 &&
          pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
              className={`h-[7px] w-[7px] rounded-full transition-colors ${i === page ? "bg-surface" : "bg-surface/25 hover:bg-surface/50"}`}
            />
          ))}
      </div>
    </div>
  );
}
