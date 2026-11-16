"use client";

import { useState } from "react";
import GlareHover from "@/components/bits/GlareHover";
import DecryptedText from "@/components/bits/DecryptedText";
import { inkOn } from "@/lib/color";
import type { Color } from "@/lib/designs";

export function Swatches({ colors }: { colors: Color[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {colors.map((c, i) => {
        const ink = inkOn(c.hex);
        const big = i < 2;
        return (
          <button
            key={`${c.name}-${i}`}
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(c.hex).then(() => {
                setCopied(c.hex + i);
                setTimeout(() => setCopied(null), 1200);
              });
            }}
            className={`text-left ${big ? "col-span-2 sm:col-span-1 lg:col-span-2" : ""}`}
            aria-label={`Copy ${c.name} ${c.hex}`}
          >
            <GlareHover
              width="100%"
              height={big ? "180px" : "150px"}
              background={c.hex}
              borderRadius="16px"
              borderColor="rgba(255,255,255,0.1)"
              glareColor={ink === "#ffffff" ? "#ffffff" : "#000000"}
              glareOpacity={0.25}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between" style={{ color: ink }}>
                <span className="font-title text-sm lowercase opacity-90">{c.name}</span>
                <span className="font-mono text-sm uppercase">
                  {copied === c.hex + i ? "copied" : <DecryptedText text={c.hex.toUpperCase()} animateOn="view" sequential revealDirection="start" speed={40} characters="0123456789ABCDEF" />}
                </span>
              </div>
            </GlareHover>
            {c.role && <p className="mt-2 text-[13px] text-surface/45 font-body leading-snug">{c.role}</p>}
          </button>
        );
      })}
    </div>
  );
}
