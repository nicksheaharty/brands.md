"use client";

import ClickSpark from "@/components/bits/ClickSpark";
import { DOTS } from "@/lib/palette";

export function Sparks({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark sparkColor={DOTS} sparkSize={9} sparkRadius={22} sparkCount={10} shape="dot" duration={480}>
      {children}
    </ClickSpark>
  );
}
