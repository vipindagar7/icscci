"use client";

import content from "@/data/content.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { NumberTicker } from "@/components/magicui/number-ticker";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export default function Hero() {
  const { hero, site } = content;

  return (
    <section className="relative overflow-hidden bg-surface text-surface-foreground text-justify">
      {/* College / campus photo — replace via public/images/campus-hero.jpg */}
      <div className="absolute inset-0">
        <PlaceholderImage
          src={"/eit-banner.webp"}
          alt={`${site.host} campus`}
          label={`${site.host} campus photo`}
          className="absolute inset-0 h-full w-full"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <NetworkBackdrop />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-content flex-col gap-8 px-6 pb-24 pt-20 md:pb-32 md:pt-28"
      >
        <motion.div variants={item}>
          <AnimatedGradientText>{hero.eyebrow}</AnimatedGradientText>
        </motion.div>

        <motion.div variants={item}>
          <h1 className="font-display text-hero font-bold leading-[1.05] tracking-tight text-surface-foreground md:text-hero-md">
            {hero.title}
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm uppercase tracking-[0.15em] text-goldLight md:text-base">
            {hero.titleLong}
          </p>
        </motion.div>

        <motion.p variants={item} className="max-w-2xl text-base leading-relaxed text-surface-foreground/75 md:text-lg">
          {hero.subtitle}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <Button asChild variant="accent" size="lg">
            <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-surface-foreground hover:bg-white/10"
          >
            <Link href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</Link>
          </Button>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-5">
          <InfoBlock label={hero.dateLabel} value={hero.dateValue} />
          <InfoBlock label={hero.venueLabel} value={hero.venueValue} />
          {hero.stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-surface-foreground/50">{s.label}</p>
              <p className="mt-1 font-display text-2xl font-bold text-surface-foreground">
                <NumberTicker value={s.value} />
                {s.suffix}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-surface-foreground/50">{label}</p>
      <p className="mt-1 font-display text-lg font-semibold text-surface-foreground">{value}</p>
    </div>
  );
}

function NetworkBackdrop() {
  const nodes = [
    [60, 60], [220, 30], [380, 90], [520, 40], [680, 110],
    [140, 180], [320, 210], [480, 190], [640, 230],
    [80, 300], [260, 320], [440, 300], [600, 340], [740, 280]
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [3, 7], [4, 8],
    [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12],
    [9, 10], [10, 11], [11, 12], [12, 13]
  ];

  return (
    <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
      <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="hsl(var(--gold-light))"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: i * 0.04, ease: "easeInOut" }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.5} fill={i % 3 === 0 ? "hsl(var(--gold-light))" : "hsl(var(--accent))"} />
        ))}
      </svg>
    </div>
  );
}
