import content from "@/data/content.json";
import { FadeIn } from "@/components/motion/FadeIn";

export default function Contact() {
  const contact = content.contact;

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <FadeIn>
          <p className="section-kicker">{contact.kicker}</p>
          <h2 className="section-heading mt-2">{contact.heading}</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 grid gap-8 rounded-xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-sm font-medium text-foreground">{contact.name}</p>
            <p className="text-sm text-muted-foreground">{contact.title}</p>
          </div>
          <div className="space-y-3">
            <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactRow label="Mobile" value={contact.phone} href={`tel:${contact.phone}`} />
            <ContactRow label="Address" value={contact.address} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
      {href ? (
        <a href={href} className="text-sm text-secondary hover:underline">
          {value}
        </a>
      ) : (
        <p className="text-sm text-foreground/80">{value}</p>
      )}
    </div>
  );
}
