/** iOS-style app icon: the brand's icon.svg clipped to a rounded square. */
export function AppIcon({ svg, size = 88, className = "" }: { svg: string; size?: number; className?: string }) {
  return (
    <span
      className={`block overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className}`}
      style={{ width: size, height: size, borderRadius: "22.5%" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
