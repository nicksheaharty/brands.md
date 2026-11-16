"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppIcon";
import { Curl } from "@/components/Curl";

type Item = { slug: string; name: string; icon: string };

export function Home({ items }: { items: Item[] }) {
  const [slug, setSlug] = useState(items[0]?.slug ?? "airbnb");
  return (
    <div className="w-full px-6 md:px-12 pt-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-title text-5xl md:text-7xl text-surface leading-none">DESIGN.MD</h1>
        <p className="mt-3 text-xl md:text-2xl font-body italic lowercase text-primary">great artists steal to learn.</p>
        <div className="mt-8">
          <Curl slug={slug} />
        </div>

        <ul className="mt-16 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-x-4 gap-y-8">
          {items.map((d) => (
            <li key={d.slug} className="flex justify-center">
              <Link
                href={`/${d.slug}`}
                onMouseEnter={() => setSlug(d.slug)}
                onFocus={() => setSlug(d.slug)}
                className="group flex flex-col items-center gap-2 w-[76px] md:w-[88px]"
              >
                <AppIcon svg={d.icon} size={88} className="!w-[64px] !h-[64px] md:!w-[88px] md:!h-[88px] transition-transform duration-200 group-hover:-translate-y-1 group-active:scale-95" />
                <span className="w-full truncate text-center text-[12px] md:text-[13px] text-surface/70 group-hover:text-surface">{d.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
