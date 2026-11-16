import { InstagramLogo, LinkedinLogo, GithubLogo, YoutubeLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { REPO } from "@/lib/site";

const socials = [
  { label: "Instagram", href: "https://instagram.com/nicksheaharty", icon: InstagramLogo },
  { label: "LinkedIn", href: "https://linkedin.com/in/nicksheaharty", icon: LinkedinLogo },
  { label: "GitHub", href: "https://github.com/nicksheaharty", icon: GithubLogo },
  { label: "YouTube", href: "https://www.youtube.com/@nickharty", icon: YoutubeLogo },
  { label: "X", href: "https://x.com/nicksheaharty", icon: XLogo },
];

export function Footer() {
  return (
    <footer className="relative mt-auto pt-24 pb-12 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 items-end">
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-none.svg" alt="Nick Harty" className="h-8 w-auto opacity-20 mb-2" />
            <span className="font-title text-[2rem] leading-none text-surface/10">DESIGN.MD</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-primary text-base md:text-lg italic font-body lowercase">great artists steal to learn.</p>
            <p className="text-surface/30 text-xs font-body lowercase text-center md:text-right max-w-sm">
              unofficial references, written from public products and brand guidelines. not affiliated with or endorsed by any brand shown. logos belong to their owners.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="text-surface/60 text-sm">
              © 2026 <a href="https://nickharty.com" className="hover:text-primary transition-colors">Nick Harty</a> ·{" "}
              <a href={REPO} className="hover:text-primary transition-colors">source on github</a>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/spreadlove.svg" alt="spread love" className="h-4 w-auto opacity-30 mt-1" />
          </div>
          <div className="flex gap-2 items-center">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="btn btn-icon">
                <s.icon weight="regular" className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
