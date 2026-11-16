import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Viewfinder } from "@/components/Viewfinder";
import { AsciiBackground } from "@/components/AsciiBackground";
import { SITE } from "@/lib/site";

const title = "DESIGN.MD | Nick Harty";
const description = "DESIGN.md files and logos for well-known brands, ready to drop into your repo. Great artists steal to learn.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s | DESIGN.MD" },
  description,
  openGraph: { type: "website", siteName: "DESIGN.MD", title, description, url: SITE, images: [{ url: "/og.png", width: 1200, height: 630, alt: "DESIGN.MD: great artists steal to learn." }] },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "DESIGN.MD: great artists steal to learn." }] },
};

export const viewport: Viewport = { themeColor: "#090200" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
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
