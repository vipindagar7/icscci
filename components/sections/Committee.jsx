"use client";

import content from "@/data/content.json";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/magicui/marquee";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

export default function Committee() {
  const committee = content.committee;

  return (
    <section className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <p className="section-kicker">{committee.kicker}</p>
          <h2 className="section-heading mt-2">{committee.heading}</h2>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committee.leadership.map((group) => (
            <motion.div key={group.role} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-pageAccent">{group.role}</h3>
                  <ul className="mt-3 space-y-2.5">
                    {group.members.map((m, i) => (
                      <li key={i}>
                        <p className="text-sm font-medium text-foreground">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.title}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn className="mt-16">
          <h3 className="font-display text-lg font-semibold text-foreground">Advisory Committee</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {committee.advisoryCommittee.length} advisors from institutions across India and abroad.
          </p>
          <div className="relative mt-6">
            <Marquee pauseOnHover className="[--duration:60s]">
              {committee.advisoryCommittee.map((m, i) => (
                <NameCard key={i} name={m.name} affiliation={m.affiliation} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent" />
          </div>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.1}>
          <h3 className="font-display text-lg font-semibold text-foreground">Technical Program Committee</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {committee.technicalProgramCommittee.length} members reviewing submissions across all tracks.
          </p>
          <div className="relative mt-6">
            <Marquee reverse pauseOnHover className="[--duration:70s]">
              {committee.technicalProgramCommittee.map((m, i) => (
                <NameCard key={i} name={m.name} affiliation={m.affiliation} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function NameCard({ name, affiliation }) {
  return (
    <div className="w-64 flex-shrink-0 rounded-lg border border-border bg-card px-4 py-3">
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground">{affiliation}</p>
    </div>
  );
}
