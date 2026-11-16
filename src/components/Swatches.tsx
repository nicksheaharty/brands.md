"use client";

import { useState } from "react";
import type { Color } from "@/lib/designs";

export function Swatches({ colors }: { colors: Color[] }) {
  const [copied, setCopied] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
      {colors.map((c, i) => (
        <button
          key={i}
          type="button"
          title={c.role}
          onClick={() =>
            navigator.clipboard.writeText(c.hex).then(() => {
              setCopied(i);
              setTimeout(() => setCopied(null), 1200);
            })
          }
          className="group text-left"
        >
          <span className="block aspect-square rounded-xl ring-1 ring-white/10 transition-transform group-hover:-translate-y-0.5" style={{ background: c.hex }} />
          <span className="mt-1.5 block truncate text-[11px] text-surface/60">{c.name}</span>
          <span className="block font-mono text-[11px] text-surface/35">{copied === i ? "copied" : c.hex.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
