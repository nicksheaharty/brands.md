"use client";

import ScrollVelocity from "@/components/bits/ScrollVelocity";
import { DOTS } from "@/lib/palette";

export function Marquee({ names }: { names: string[] }) {
  const row = (offset: number) => (
    <span className="inline-flex items-center">
      {names.map((n, i) => (
        <span key={n} className="inline-flex items-center gap-[0.5em] pr-[0.6em] lowercase">
          {n}
          <span className="inline-block h-[0.28em] w-[0.28em] rounded-full" style={{ background: DOTS[(i + offset) % DOTS.length] }} />
        </span>
      ))}
    </span>
  );
  return (
    <div className="relative py-10 border-y border-white/5 font-title text-surface/[0.12] select-none" aria-hidden>
      <ScrollVelocity texts={[row(0), row(2)]} velocity={40} numCopies={4} fadeEdges outlineAlternate fontSize="clamp(2.5rem, 7vw, 5.5rem)" className="leading-none" />
    </div>
  );
}
