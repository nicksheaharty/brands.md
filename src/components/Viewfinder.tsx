import { RoughBracket } from "@/components/RoughBracket";
import Link from "next/link";
import { REPO } from "@/lib/site";


/** Camera-viewfinder chrome: logo top-left, brackets top-right + bottom-left, links bottom-right. */
export function Viewfinder() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <Link
        href="/"
        className="pointer-events-auto absolute left-4 top-4 md:left-7 md:top-6 flex items-center gap-3 group"
        aria-label="brands.md home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-color.svg" alt="" className="h-6 md:h-7 w-auto transition-opacity group-hover:opacity-80" />
        <span className="font-title text-surface text-base md:text-lg tracking-wide leading-none">brands.md</span>
      </Link>

      <RoughBracket corner="tr" className="absolute right-4 top-4 md:right-7 md:top-6 h-8 w-8 md:h-10 md:w-10 text-surface/85" />
      <RoughBracket corner="bl" className="absolute left-4 bottom-4 md:left-7 md:bottom-6 h-8 w-8 md:h-10 md:w-10 text-surface/85" />

      <div className="pointer-events-auto absolute right-4 bottom-4 md:right-7 md:bottom-6 flex items-center gap-3 md:gap-4 text-xs md:text-sm font-body lowercase text-surface/55">
        <Link href="/terms" className="hover:text-primary transition-colors">terms</Link>
        <Link href="/privacy" className="hover:text-primary transition-colors">privacy</Link>
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github</a>
        <a href="https://nickharty.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">nickharty.com</a>
      </div>
    </div>
  );
}
