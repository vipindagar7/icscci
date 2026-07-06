"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import content from "@/data/content.json";
import { Button } from "@/components/ui/button";
import { PlaceholderLogo } from "@/components/PlaceholderLogo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "../PlaceholderImage";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur"
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
          {/* <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-primary">{content.site.shortName}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {content.site.venueShort}
            </span>
          </div> */}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {content.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Button asChild variant="default" size="sm" className="hidden lg:inline-flex">
          <Link href={content.hero.ctaPrimary.href}>{content.hero.ctaPrimary.label}</Link>
        </Button>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="text-primary lg:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-border bg-background px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {content.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("text-sm font-medium", active ? "text-primary" : "text-foreground/70")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
