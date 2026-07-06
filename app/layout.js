import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import content from "@/data/content.json";
import theme from "@/config/theme";
import { buildThemeStyleTag } from "@/lib/theme-css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: `${content.site.shortName} — ${content.site.fullName}`,
  description: content.hero.subtitle
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Colors generated from config/theme.js — the single source of truth. */}
        <style dangerouslySetInnerHTML={{ __html: buildThemeStyleTag(theme) }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-background text-foreground antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
