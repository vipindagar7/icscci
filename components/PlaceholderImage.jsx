import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Drop-in placeholder for a real photo. Once you have the actual
 * image file, pass `src` (e.g. "/images/campus-hero.jpg") and it
 * renders a normal next/image — no other change needed anywhere
 * this component is used.
 */
export function PlaceholderImage({ src, alt = "", label = "Image placeholder", className, priority = false ,width=0, height=0}) {
  if (src) {
    return <Image src={src} alt={alt} width={width} height={height} priority={priority} className={cn("object-cover", className)} />;
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/20 bg-white/5 text-white/40",
        className
      )}
      aria-hidden="true"
    >
      <ImageIcon className="h-8 w-8" />
      <span className="max-w-[220px] text-center font-mono text-[11px] uppercase tracking-widest">{label}</span>
    </div>
  );
}
