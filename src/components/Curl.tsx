"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export function Curl({ slug }: { slug: string }) {
  const cmd = `curl -o DESIGN.md https://brands.nickharty.com/designs/${slug}/DESIGN.md`;
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard.writeText(cmd).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        })
      }
      className="group flex h-[50px] w-full items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 backdrop-blur-sm text-left hover:border-white/25 transition-colors"
      aria-label="Copy command"
    >
      <span className="text-primary font-mono text-sm select-none">$</span>
      <code className="flex-1 font-mono text-[13px] md:text-sm text-surface/80 overflow-x-auto whitespace-nowrap scrollbar-hide">{cmd}</code>
      <span className="text-surface/40 group-hover:text-primary transition-colors">
        {done ? <Check weight="bold" className="w-4 h-4" /> : <Copy weight="duotone" className="w-4 h-4" />}
      </span>
    </button>
  );
}
