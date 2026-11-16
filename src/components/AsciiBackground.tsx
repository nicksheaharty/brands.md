"use client";

import GradientASCII from "@/components/bits/GradientASCII";

/** Faint React Bits GradientASCII field in the Harty palette. */
export function AsciiBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]">
      <GradientASCII
        colors={["#090200", "#455FE5", "#F25672", "#FF9670", "#FFB957"]}
        shape="horizon"
        cellSize={14}
        density={0.55}
        glyphOpacity={0.7}
        glow={0}
        flicker={0.1}
        speed={0.35}
        gradientOpacity={0.25}
        grain={0}
        mouseInteraction={false}
        clickEffect="none"
        fontFamily='ui-monospace, SFMono-Regular, Menlo, monospace'
        className="h-full w-full"
      />
    </div>
  );
}
