"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export function claudePrompt(name: string, slug: string) {
  const base = `https://design.nickharty.com/designs/${slug}`;
  return `Build a design system for this project in the style of ${name}.

1. Download the reference into the repo root:
   curl -o DESIGN.md ${base}/DESIGN.md
2. Read DESIGN.md in full before writing code. It covers colors and their roles, typography (with free Google Fonts fallbacks), logo rules, components, layout, elevation, motion, iconography, voice, and do's and don'ts.
3. Turn the tokens into code that fits our stack: CSS custom properties plus a theme config (e.g. Tailwind) for colors, type scale, radii, spacing, shadows, durations and easing. Name tokens by role, not by hex.
4. Build the core components the file describes as reusable components: buttons (every variant and state), inputs, cards, navigation, tabs, badges, avatars, modals and lists, plus anything the file calls signature to ${name}.
5. Add a /design-system page that shows every token and component, with light and dark modes if the file defines both.
6. Follow the Do's and Don'ts and the voice notes. Use our own product name, logo and copy: borrow the feel, not ${name}'s trademarks.

Match the existing framework and conventions, and ask before adding new dependencies. When you're done, list the files you created and anything in DESIGN.md you couldn't apply.`;
}

export function ClaudePrompt({ name, slug }: { name: string; slug: string }) {
  const text = claudePrompt(name, slug);
  const [done, setDone] = useState(false);
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/5">
        <span className="text-sm text-surface/80 lowercase">prompt for claude: build a {name} design system</span>
        <button
          type="button"
          onClick={() =>
            navigator.clipboard.writeText(text).then(() => {
              setDone(true);
              setTimeout(() => setDone(false), 1400);
            })
          }
          className="btn btn-primary btn-sm shrink-0"
        >
          {done ? <Check weight="bold" className="w-4 h-4" /> : <Copy weight="bold" className="w-4 h-4" />}
          {done ? "copied" : "copy prompt"}
        </button>
      </div>
      <pre className="max-h-40 overflow-y-auto scrollbar-hide whitespace-pre-wrap px-4 py-3 font-mono text-[12px] leading-relaxed text-surface/55">{text}</pre>
    </div>
  );
}
