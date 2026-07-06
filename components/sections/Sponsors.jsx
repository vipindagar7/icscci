import content from "@/data/content.json";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Sponsors() {
  const sponsors = content.sponsors;

  return (
    <section className="border-y border-border bg-muted/50 py-14">
      <div className="mx-auto max-w-content px-6 text-center">
        <FadeIn>
          <p className="section-kicker">{sponsors.kicker}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            {sponsors.items.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-48 items-center justify-center rounded-lg border border-border bg-card px-4">
                  <span className="font-display text-sm font-semibold text-primary">{s.name}</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.tier}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
