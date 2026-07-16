import content from "@/data/content.json";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";
import { PlaceholderImage } from "../PlaceholderImage";

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
            {speakers.list.map((m, i) => (
              <div
                key={i}
                className="flex w-[280px] flex-shrink-0 flex-col rounded-lg border border-border bg-card p-4"
              >
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-lg border border-border">
                  <PlaceholderImage
                    src={m.profile}
                    height={128}
                    width={128}
                    label={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <NameCard
                    name={m.name}
                    affiliation={m.affiliation}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </FadeIn>
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