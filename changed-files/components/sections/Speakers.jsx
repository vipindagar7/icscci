"use client";

import content from "@/data/content.json";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function Speakers() {
  const speakers = content.speakers;
  const list = speakers.list || [];

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <FadeIn>
        <p className="section-kicker">{speakers.kicker}</p>
        <h2 className="section-heading mt-2">{speakers.heading}</h2>
      </FadeIn>

      {list.length === 0 ? (
        <FadeIn delay={0.1}>
          <Card className="mt-8 border-dashed">
            <CardContent className="flex items-center justify-center py-16">
              <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">{speakers.intro}</p>
            </CardContent>
          </Card>
        </FadeIn>
      ) : (
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((speaker, i) => (
            <motion.div key={i} variants={staggerItem}>
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </Stagger>
      )}
    </section>
  );
}

function SpeakerCard({ speaker }) {
  const { name, affiliation, topic, profile } = speaker;

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="flex flex-col items-center pt-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-pageAccent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-card">
            <PlaceholderImage src={profile} alt={name} label={name} className="h-full w-full" />
          </div>
        </div>

        <h3 className="mt-5 font-display text-base font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{affiliation}</p>

        {topic && (
          <p className="mt-4 border-t border-border pt-4 text-sm text-foreground/70">{topic}</p>
        )}
      </CardContent>
    </Card>
  );
}
