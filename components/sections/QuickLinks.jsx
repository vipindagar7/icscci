"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FadeIn, Stagger, staggerItem } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";

const items = [
  { href: "/about", title: "About", description: "The conference, EIT Faridabad, and the departments behind it." },
  { href: "/tracks", title: "Tracks", description: "Six tracks spanning connectivity, AI, IoT, security, and more." },
  { href: "/call-for-papers", title: "Call for Papers", description: "Submission guidelines, downloads, and templates." },
  { href: "/important-dates", title: "Important Dates", description: "CFP, submission, acceptance, and conference dates." },
  { href: "/committee", title: "Committee", description: "Patrons, chairs, and the full advisory and technical committee." },
  { href: "/paper-submission", title: "Paper Submission", description: "How to prepare and submit your manuscript." }
];

export default function QuickLinks() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <FadeIn>
        <p className="section-kicker">Explore</p>
        <h2 className="section-heading mt-2">Find your way around</h2>
      </FadeIn>

      <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.div key={item.href} variants={staggerItem}>
            <Link href={item.href} className="group block h-full">
              <Card className="h-full transition-colors group-hover:border-primary">
                <CardContent className="flex h-full flex-col justify-between pt-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
