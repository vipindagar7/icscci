"use client";

import content from "@/data/content.json";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Tracks() {
  const { tracks } = content;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <p className="section-kicker">{tracks.kicker}</p>
          <h2 className="section-heading mt-2">{tracks.heading}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{tracks.intro}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs defaultValue={tracks.items[0].code} className="mt-10">
            <TabsList className="flex h-auto flex-wrap gap-2 bg-muted p-2">
              {tracks.items.map((t) => (
                <TabsTrigger key={t.code} value={t.code} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {t.code}
                </TabsTrigger>
              ))}
            </TabsList>

            {tracks.items.map((t) => (
              <TabsContent key={t.code} value={t.code}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {t.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-pageAccent" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
