"use client";

import content from "@/data/content.json";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function ImportantDates() {
  const { importantDates } = content;
  const items = importantDates.items;

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <FadeIn>
        <p className="section-kicker">{importantDates.kicker}</p>
        <h2 className="section-heading mt-2">{importantDates.heading}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{importantDates.note}</p>
      </FadeIn>

      <Stagger className="relative mt-12 space-y-0 border-l-2 border-pageAccent/40 pl-8">
        {items.map((item, i) => (
          <motion.div key={item.label} variants={staggerItem} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-pageAccent bg-background">
              <span className="h-2 w-2 rounded-full bg-pageAccent" />
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-secondary">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{item.label}</h3>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{item.date}</p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
