"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GithubLogo } from "@phosphor-icons/react";
import { ScribbleUnderline } from "@/components/ScribbleUnderline";
import { brand } from "@/lib/palette";
import { REPO } from "@/lib/site";

const links = [
  { label: "library", href: "/#library", color: brand.films },
  { label: "how to use", href: "/#use", color: brand.design },
];

function NavItem({ label, href, color }: { label: string; href: string; color: string }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative px-3 py-2 text-lg font-body font-black text-surface/60 hover:text-surface transition-colors whitespace-nowrap"
    >
      <ScribbleUnderline className="inline-flex items-baseline" color={color} show={hover}>
        <span className="swash lowercase" style={{ fontSize: "1.15em", lineHeight: 1 }}>{label[0]}</span>
        <span style={{ letterSpacing: "-0.02em" }}>{label.slice(1)}</span>
      </ScribbleUnderline>
    </Link>
  );
}

export function Navigation() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${top ? "nav-bar-clear" : "nav-bar-solid"}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-6xl mx-auto">
        <div className="hidden md:flex items-center gap-2 -ml-3">
          {links.map((l) => <NavItem key={l.href} {...l} />)}
        </div>
        <div className="md:hidden" />
        <Link href="/" className="flex items-center gap-3 group" aria-label="design.md library home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-color.svg" alt="" className="h-7 w-auto md:h-8 transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <div className="flex items-center justify-end gap-1 -mr-3">
          <span className="hidden md:inline-flex">
            <NavItem label="nickharty.com" href="https://nickharty.com" color={brand.social} />
          </span>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub repository">
            <GithubLogo weight="regular" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
