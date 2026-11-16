"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import TiltedCard from "@/components/bits/TiltedCard";
import { AppIcon } from "@/components/AppIcon";
import { EmptySketch } from "@/components/EmptySketch";
import { REPO } from "@/lib/site";

type Item = { slug: string; name: string; icon: string; colors: string[] };

/*
 * Sizing lives in CSS (.launch in globals.css): --cell is the column width, --icon the icon size.
 * The first paint is therefore already right; JS only decides how many icons fit on one page,
 * using the same numbers. Keep MOBILE_MAX and the numbers below in sync with globals.css.
 */
const MOBILE_MAX = 639;
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function measure(el: HTMLElement) {
  const w = el.clientWidth;
  const h = el.clientHeight;
  const mobile = window.innerWidth <= MOBILE_MAX;
  const icon = mobile ? Math.min(68, (window.innerWidth - 24) / 4 - 22) : 80;
  const cols = mobile ? 4 : Math.max(1, Math.floor(w / 136));
  const rowH = icon + (mobile ? 54 : 58); // = --row in globals.css: icon + label + colour dots + padding
  return { cols, rows: Math.max(1, Math.floor((h - 8) / rowH)) };
}

export function Launchpad({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [grid, setGrid] = useState<{ cols: number; rows: number } | null>(null);
  // 3D tilt only for a real mouse/trackpad. On touch screens Safari renders 3D layers soft and
  // drops the rounded clip, so phones get the plain icon with a press squish instead.
  const [tilt, setTilt] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const on = () => setTilt(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => {
      mq.removeEventListener("change", on);
    };
  }, []);
  const area = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = area.current;
    if (!el) return;
    const update = () => {
      const next = measure(el);
      setGrid((g) => (g && g.cols === next.cols && g.rows === next.rows ? g : next));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, []);

  const shown = useMemo(
    () => items.filter((i) => !query || i.name.toLowerCase().includes(query.toLowerCase()) || i.slug.includes(query.toLowerCase())),
    [items, query]
  );

  // Before measuring (server HTML, first paint) everything sits on one page laid out by CSS alone.
  const per = grid ? grid.cols * grid.rows : shown.length || 1;
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

  const columns = grid ? `repeat(${grid.cols}, var(--cell))` : "repeat(auto-fill, var(--cell))";

  return (
    <div className="launch flex h-full flex-col px-3 md:px-12">
      {/* Same column template as the icons, so the bar spans exactly from the first icon's edge to the last one's. */}
      <div className="mx-auto grid w-full max-w-5xl justify-center pt-2 md:pt-4" style={{ gridTemplateColumns: columns }}>
        <div className="launch-bar col-span-full">
        <div className="search-bar h-[50px] w-full">
        <label className="flex h-full w-full items-center gap-3 px-4">
          <MagnifyingGlass weight="bold" className="h-4 w-4 text-surface/40 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQuery("");
            }}
            placeholder="search designs"
            className="min-w-0 flex-1 bg-transparent font-body text-surface placeholder:text-surface/30 outline-none"
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
      </div>

      <div ref={area} className="relative mx-auto mt-4 md:mt-8 w-full max-w-5xl flex-1 min-h-0">
        {!shown.length && (
                <div className="absolute inset-0 flex flex-col items-center pt-6 md:pt-10 text-center">
                  <EmptySketch className="w-40 md:w-48 h-auto" />
                  <p className="mt-5 font-title text-xl md:text-2xl lowercase text-surface">brand not added yet.</p>
                  <p className="mt-2 max-w-xs font-body text-sm lowercase text-surface/50">
                    no design.md for &ldquo;{query}&rdquo; in the library so far.
                  </p>
                  <a
                    href={`${REPO}/issues/new?title=${encodeURIComponent(`Add ${query}`)}&body=${encodeURIComponent(`Please add a DESIGN.md for ${query}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm mt-3"
                  >
                    request it on github
                  </a>
                </div>
        )}
        <div
          ref={scroller}
          onScroll={(e) => setPage(Math.round(e.currentTarget.scrollLeft / Math.max(1, e.currentTarget.clientWidth)))}
          className={`flex h-full snap-x snap-mandatory overflow-y-hidden scrollbar-hide ${grid ? "overflow-x-auto" : "overflow-x-hidden"}`}
        >
          {pages.map((pg, pi) => (
            <ul
              key={pi}
              className="launch-page grid h-full w-full shrink-0 snap-start content-start justify-center pt-2"
              style={{ gridTemplateColumns: columns, gridTemplateRows: grid ? `repeat(${grid.rows}, var(--row))` : undefined }}
            >
              {pg.map((d) => (
                <li key={d.slug} className="flex justify-center pt-2">
                  <Link href={`/${d.slug}`} prefetch={false} className="launch-item group flex flex-col items-center">
                    {tilt ? (
                      <TiltedCard
                        imageSrc={d.icon}
                        altText=""
                        containerWidth="var(--icon)"
                        containerHeight="var(--icon)"
                        imageWidth="var(--icon)"
                        imageHeight="var(--icon)"
                        radius="22.5%"
                        scaleOnHover={1.14}
                        rotateAmplitude={16}
                        glare={0.45}
                        shadow={0.7}
                        parallax={0}
                        perspective={500}
                        showTooltip={false}
                        flipOnClick={false}
                        gyroscope={false}
                        intro={false}
                        pressable
                        className="launch-icon app-icon-tilt"
                      />
                    ) : (
                      <AppIcon src={d.icon} className="launch-icon transition-transform duration-150 ease-out group-active:scale-[0.88]" />
                    )}
                    <span className="mt-2 w-full truncate text-center text-[11px] md:text-[13px] text-surface/75 group-hover:text-surface">{d.name}</span>
                    <span className="mt-1 flex gap-[3px]" aria-hidden>
                      {d.colors.map((c, i) => (
                        <span key={i} className="h-[5px] w-[5px] rounded-full ring-[0.5px] ring-white/20" style={{ background: c }} />
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
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
