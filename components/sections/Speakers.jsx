import content from "@/data/content.json";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Speakers() {
  const speakers = content.speakers;

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:py-28">
      <FadeIn>
        <p className="section-kicker">{speakers.kicker}</p>
        <h2 className="section-heading mt-2">{speakers.heading}</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="mt-8 border-dashed">
          <CardContent className="flex items-center justify-center py-16">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">{speakers.intro}</p>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
