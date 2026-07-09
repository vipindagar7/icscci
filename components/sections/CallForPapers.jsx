import content from "@/data/content.json";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FadeIn } from "@/components/motion/FadeIn";
import Tracks from "./Tracks";

export default function CallForPapers() {
  const cfp = content.callForPapers;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <FadeIn className="w-full lg:max-w-3xl lg:flex-1">
            <p className="section-kicker">{cfp.kicker}</p>
            <h2 className="section-heading mt-2">{cfp.heading}</h2>
            <p className="mt-4 text-foreground/80">
              {cfp.intro}
            </p>
          </FadeIn>

          {/* Right Card */}
          <FadeIn
            delay={0.2}
            className="w-full lg:w-[400px] lg:flex-shrink-0"
          >
            <Card className="relative overflow-hidden">
              <BorderBeam
                size={150}
                duration={10}
                colorFrom="hsl(var(--accent))"
                colorTo="hsl(var(--primary))"
              />

              <CardContent className="pt-6">
                <h3 className="font-display text-base font-semibold text-primary">
                  Downloads
                </h3>

                <ul className="mt-4 space-y-3">
                  {cfp.downloads.map((d) => (
                    <li key={d.label}>
                      <a
                        href={d.href}
                        download
                        className="text-sm text-secondary underline-offset-2 hover:underline"
                      >
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="accent" className="mt-6 w-full">
                  <a href={cfp.submissionLink.href}>
                    {cfp.submissionLink.label}
                  </a>
                </Button>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {cfp.acknowledgement}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <Tracks />
      </div>
    </section>
  );
}
