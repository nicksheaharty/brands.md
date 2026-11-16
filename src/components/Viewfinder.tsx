import Link from "next/link";
import { REPO } from "@/lib/site";

const Bracket = ({ className }: { className: string }) => (
  <span aria-hidden className={`pointer-events-none absolute h-7 w-7 md:h-10 md:w-10 border-surface/60 ${className}`} />
);

/** Camera-viewfinder chrome: logo top-left, brackets top-right + bottom-left, links bottom-right. */
export function Viewfinder() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <Link
        href="/"
        className="pointer-events-auto absolute left-4 top-4 md:left-7 md:top-6 flex items-center gap-3 group"
        aria-label="DESIGN.MD home"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-color.svg" alt="" className="h-6 md:h-7 w-auto transition-opacity group-hover:opacity-80" />
        <span className="font-title text-surface text-base md:text-lg tracking-wide leading-none">DESIGN.MD</span>
      </Link>

      <Bracket className="right-4 top-4 md:right-7 md:top-6 border-t-2 border-r-2" />
      <Bracket className="left-4 bottom-4 md:left-7 md:bottom-6 border-b-2 border-l-2" />

      <div className="pointer-events-auto absolute right-4 bottom-4 md:right-7 md:bottom-6 flex items-center gap-4 text-xs md:text-sm font-body lowercase text-surface/55">
        <a href={REPO} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github</a>
        <a href="https://nickharty.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">nickharty.com</a>
      </div>
    </div>
  );
}
