/**
 * iOS-style app icon: the brand's icon (inline SVG or <img>) clipped to a rounded square.
 * The tile has a soft skeleton fill that shows until an image icon has loaded.
 * Pass `size` for a fixed size, or size it with CSS (e.g. .launch-icon).
 */
export function AppIcon({ svg, size, className = "" }: { svg: string; size?: number; className?: string }) {
  return (
    <span
      className={`app-icon block shrink-0 overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>img]:block [&>img]:h-full [&>img]:w-full [&>img]:object-cover ${className}`}
      style={size ? { width: size, height: size } : undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
