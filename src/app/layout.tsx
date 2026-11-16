import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const title = "design.md library | Nick Harty";
const description = "DESIGN.md files and logos for well-known brands, ready to drop into your repo. Great artists steal to learn.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: title, template: "%s | design.md library" },
  description,
  icons: { icon: "/icon.svg" },
  openGraph: { type: "website", siteName: "design.md library", title, description, url: SITE, images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
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
      <body className="antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <main className="relative min-h-screen flex flex-col">
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
