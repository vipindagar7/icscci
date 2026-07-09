"use client";

import content from "@/data/content.json";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function About() {
  const { about } = content;

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28 text-justify">
      <FadeIn>
        <p className="section-kicker">{about.kicker}</p>
        <h2 className="section-heading mt-2">{about.heading}</h2>
      </FadeIn>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <FadeIn delay={0.1} className="space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/80">
              {p}
            </p>
          ))}
        </FadeIn>

        <Stagger className="space-y-6">
          <motion.div variants={staggerItem}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-display text-lg font-semibold text-primary">{about.institute.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{about.institute.description}</p>
              </CardContent>
            </Card>
          </motion.div>

          {about.departments.map((d) => (
            <motion.div key={d.name} variants={staggerItem}>
              <Card className="border-l-4 border-l-pageAccent">
                <CardContent className="pt-6">
                  <h3 className="font-display text-base font-semibold text-foreground">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
