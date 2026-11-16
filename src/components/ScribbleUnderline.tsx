import type { ReactNode, CSSProperties } from "react";
import rough from "roughjs";

// A fixed seed draws the same scribble on the server and the client.
const generator = rough.generator();
const paths = generator.toPaths(
  generator.curve(
    [[6, 19], [190, 12], [410, 11], [594, 18]],
    { seed: 7, roughness: 0.8, bowing: 1, disableMultiStroke: true, stroke: "currentColor", strokeWidth: 19 }
  )
);

interface ScribbleUnderlineProps {
  children: ReactNode;
  className?: string;
  color?: string;
  /**
   * Controls only the underline mark's visibility via an inline style, not the
   * wrapped content. Leave unset (default) to let CSS alone decide visibility,
   * e.g. a `:hover` rule targeting this component's `className`.
   */
  show?: boolean;
}

export function ScribbleUnderline({ children, className, color, show }: ScribbleUnderlineProps) {
  return (
    <span className={`relative inline-block isolate ${className ?? ""}`} style={color ? ({ "--scribble-color": color } as CSSProperties) : undefined}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 top-1/2 mt-[0.38em] h-[0.26em] w-full overflow-visible pointer-events-none"
        style={{
          color: color ? "var(--scribble-color)" : "currentColor",
          ...(show !== undefined ? { opacity: show ? 1 : 0 } : {}),
        }}
        viewBox="0 0 600 36"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.strokeWidth}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </span>
  );
}
