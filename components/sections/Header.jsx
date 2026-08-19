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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-4 lg:px-6">
        {/* Logos row — shrinks on mobile, scales up on larger screens */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-none lg:gap-4">
          {/* ggsipu logo */}
          <Link
            href="https://www.eitfaridabad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/ggsipu-logo-dark.png"
              alt="GGSIPU Logo"
              width={128}
              height={128}
              className="block h-8 w-auto object-contain dark:hidden sm:h-10 md:h-12 lg:h-14"
            />
            <Image
              src="/ggsipu-logo-light.jpeg"
              alt="GGSIPU Logo"
              width={128}
              height={128}
              className="hidden h-8 w-auto object-contain dark:block sm:h-10 md:h-12 lg:h-14"
            />
          </Link>

          {/* echelon logo */}
          <Link
            href="https://www.eitfaridabad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/echelonLogo-light.webp"
              alt="Echelon Logo"
              width={128}
              height={128}
              className="block h-7 w-auto object-contain dark:hidden sm:h-9 md:h-11 lg:h-12"
            />
            <Image
              src="/echelonLogo-dark.webp"
              alt="Echelon Logo"
              width={128}
              height={128}
              className="hidden h-7 w-auto object-contain dark:block sm:h-9 md:h-11 lg:h-12"
            />
          </Link>

          {/* icscci logo */}
          <Link href="/" className="ml-auto flex shrink-0 items-center lg:ml-0">
            <Image
              src="/logo-light.png"
              alt="ICSCCI Logo"
              width={128}
              height={128}
              className="block h-10 w-auto object-contain dark:hidden sm:h-12 md:h-14 lg:h-16"
              priority
            />
            <Image
              src="/logo-dark.png"
              alt="ICSCCI Logo"
              width={128}
              height={128}
              className="hidden h-10 w-auto object-contain dark:block sm:h-12 md:h-14 lg:h-16"
              priority
            />
          </Link>
        </div>

        {/* Desktop nav */}
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

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-border bg-background lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {content.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-2 py-2 text-sm font-medium",
                      active ? "text-primary" : "text-foreground/70"
                    )}
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