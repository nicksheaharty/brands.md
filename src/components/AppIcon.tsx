/**
 * iOS-style app icon: the brand's icon file as an <img>, clipped to a rounded square.
 * Using <img> (not inline SVG) keeps each icon's internal ids isolated, which stops
 * Safari from repainting the wrong gradients while scrolling.
 */
export function AppIcon({ src, size, className = "", eager = false }: { src: string; size?: number; className?: string; eager?: boolean }) {
  return (
    <span className={`app-icon block shrink-0 overflow-hidden ring-1 ring-white/10 ${className}`} style={size ? { width: size, height: size } : undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={size ?? 88} height={size ?? 88} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} className="block h-full w-full object-cover" />
    </span>
  );
}
