"use client";

import content from "@/data/content.json";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function PaperSubmission() {
  const ps = content.paperSubmission;

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <p className="section-kicker">{ps.kicker}</p>
          <h2 className="section-heading mt-2">{ps.heading}</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">{ps.intro}</p>
        </FadeIn>

        <Stagger className="mt-8 grid gap-3 md:grid-cols-2">
          {ps.guidelines.map((g, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground/80"
            >
              <span className="font-mono text-xs font-semibold text-pageAccent">{String(i + 1).padStart(2, "0")}</span>
              {g}
            </motion.div>
          ))}
        </Stagger>

        <FadeIn delay={0.15}>
          <Button asChild variant="default" size="lg" className="mt-8">
            <a href={ps.submissionLink.href}>{ps.submissionLink.label}</a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
