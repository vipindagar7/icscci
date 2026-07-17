import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function isValidSrc(src) {
  return typeof src === "string" && src.length > 0 && (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://"));
}

const tones = {
  // for use on the dark Hero panel
  surface: "border-white/20 bg-white/5 text-white/40",
  // for use on light cards / white backgrounds (the common case)
  card: "border-border bg-muted text-muted-foreground"
};

/**
 * Drop-in placeholder for a real photo. Once you have the actual image
 * file, pass a real `src` (must start with "/", "http://", or "https://")
 * and it renders a normal next/image — no other change needed anywhere
 * this component is used. Any missing or malformed src (undefined, "",
 * a relative path like "./logo.png") safely falls back to a labeled
 * placeholder instead of crashing.
 *
 * `fill` (default true) sizes to the parent, which must be `relative`
 * with defined dimensions. Pass `fill={false}` with `width`/`height`
 * for a fixed-size image instead (e.g. an avatar).
 */
export function PlaceholderImage({
  src,
  alt = "",
  label = "Image placeholder",
  className,
  priority = false,
  fill = true,
  width,
  height,
  tone = "card"
}) {
  if (isValidSrc(src)) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn("object-cover", className)}
        />
      );
    }
    return (
      <Image src={src} alt={alt} width={width} height={height} priority={priority} className={cn("object-cover", className)} />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-1.5 border-2 border-dashed p-2",
        tones[tone],
        className
      )}
      aria-hidden="true"
    >
      <ImageIcon className="h-5 w-5 flex-shrink-0" />
      <span className="max-w-full text-center font-mono text-[9px] uppercase leading-snug tracking-widest">{label}</span>
    </div>
  );
}
