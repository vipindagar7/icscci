import content from "@/data/content.json";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FadeIn } from "@/components/motion/FadeIn";

export default function CallForPapers() {
  const cfp = content.callForPapers;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <p className="section-kicker">{cfp.kicker}</p>
          <h2 className="section-heading mt-2">{cfp.heading}</h2>
          <p className="mt-4 max-w-3xl text-foreground/80">{cfp.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-3">
            <Accordion type="single" collapsible defaultValue="item-0">
              {cfp.guidelines.map((g, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{`Guideline ${i + 1}`}</AccordionTrigger>
                  <AccordionContent>{g}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 rounded-lg border border-border bg-muted p-5">
              <h4 className="font-display text-sm font-semibold text-primary">{cfp.plagiarism.heading}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {cfp.plagiarism.text}{" "}
                <a href={cfp.plagiarism.linkHref} className="text-secondary underline underline-offset-2">
                  {cfp.plagiarism.linkLabel}
                </a>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative lg:col-span-2">
            <Card className="relative overflow-hidden">
              <BorderBeam size={150} duration={10} colorFrom="hsl(var(--accent))" colorTo="hsl(var(--primary))" />
              <CardContent className="pt-6">
                <h3 className="font-display text-base font-semibold text-primary">Downloads</h3>
                <ul className="mt-4 space-y-3">
                  {cfp.downloads.map((d) => (
                    <li key={d.label}>
                      <a href={d.href} className="text-sm text-secondary underline-offset-2 hover:underline">
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="accent" className="mt-6 w-full">
                  <a href={cfp.submissionLink.href}>{cfp.submissionLink.label}</a>
                </Button>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{cfp.acknowledgement}</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
