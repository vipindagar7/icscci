import { cn } from "@/lib/utils";

/**
 * Placeholder logo mark — swap for a real <Image src="/images/eit-logo.png" .../>
 * once you have the actual logo files. Keeping it as a component means
 * every usage (header, footer) updates from one place.
 */
export function PlaceholderLogo({ label = "EIT", className, ring = true }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 font-display text-xs font-bold",
        ring ? "border-primary/50 text-primary" : "border-border text-muted-foreground",
        className
      )}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
