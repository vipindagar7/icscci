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
        {/* echelon logo */}
        <Link
          href="https://www.eitfaridabad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/echelonLogo-light.webp"
            alt="Logo"
            width={128}
            height={128}
            className="shrink-0 object-contain md:h-20 md:w-20 block dark:hidden"
          />
          <Image
            src="/echelonLogo-dark.webp"
            alt="Logo"
            width={164}
            height={164}
            className="shrink-0 object-contain md:h-20 md:w-20 hidden dark:block"
          />
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
        {/* icscci logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-light.png"
            alt="Logo"
            width={128}
            height={128}
            className="h-32 w-32 shrink-0 object-contain block dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="Logo"
            width={128}
            height={128}
            className="h-32 w-32 shrink-0 object-contain hidden dark:block"
            priority
          />
        </Link>

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
