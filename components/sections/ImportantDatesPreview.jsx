"use client";

import Link from "next/link";
import content from "@/data/content.json";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function ImportantDatesPreview() {
  const { importantDates } = content;
  const items = importantDates.items;

  return (
    <section className="bg-muted/60 py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <FadeIn className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">{importantDates.kicker}</p>
            <h2 className="section-heading mt-2">{importantDates.heading}</h2>
          </div>
          <Link href="/important-dates" className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline">
            View full timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="rounded-lg border border-border bg-card p-5"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-pageAccent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-sm font-semibold text-foreground">{item.label}</h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">{item.date}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
