import Link from "next/link";
import content from "@/data/content.json";
import { PlaceholderLogo } from "@/components/PlaceholderLogo";
import Image from "next/image";

export default function Footer() {
  const { footer, site, nav, contact } = content;

  return (
    <footer className="border-t border-border bg-muted/60 text-foreground">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.jpeg" alt="Logo" width={64} height={64} />
              <span className="font-display text-lg font-bold text-primary">{site.shortName}</span>
              <Link href="https://www.eitfaridabad.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Image src="/echelonLogo.webp" alt="Logo" width={128} height={128} />
              </Link>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{footer.text}</p>
            <p className="mt-2 text-xs text-muted-foreground/70">{footer.disclaimer}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-secondary">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/70 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-secondary">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-foreground">
                  {contact.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.host}. Designed and developed by <Link target="_blank" href={site.developerUrl} className="hover:text-foreground font-semibold underline decoration-dotted">
              {site.developer}
            </Link>.
          </p>
          <p className="mt-10 font-mono text-l text-muted-foreground">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </footer>
  );
}
