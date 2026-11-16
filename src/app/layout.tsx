import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Viewfinder } from "@/components/Viewfinder";
import { AsciiBackground } from "@/components/AsciiBackground";
import { SITE } from "@/lib/site";

const title = "brands.md: free DESIGN.md design systems for AI agents";
const description =
  "Free DESIGN.md files for well-known brands: colors, fonts, components, layout, motion, voice, logos and app icons, ready for Claude Code, Cursor and other AI coding agents. Great artists steal to learn.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s | brands.md" },
  description,
  applicationName: "brands.md",
  authors: [{ name: "Nick Harty", url: "https://nickharty.com" }],
  creator: "Nick Harty",
  keywords: ["DESIGN.md", "design system", "brand guidelines", "brand colors", "fonts", "logos", "AI coding agent", "Claude Code", "Cursor", "design tokens"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    siteName: "brands.md",
    title,
    description,
    url: SITE,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "brands.md: great artists steal to learn." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"], creator: "@nicksheaharty" },
};

export const viewport: Viewport = { themeColor: "#090200" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/dzz3gsh.css" />
        <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
      </head>
      <body className="antialiased selection:bg-primary/30 selection:text-primary h-[100dvh] overflow-hidden">
        <AsciiBackground />
        <Viewfinder />
        {/* The "sensor": everything lives inside the frame; nothing scrolls the page itself. */}
        <main className="fixed inset-x-0 top-16 bottom-12 md:top-20 md:bottom-16 z-10 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
