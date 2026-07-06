"use client";
import { cn } from "@/lib/utils";

export function BorderBeam({ className, size = 200, duration = 8, colorFrom = "#C89B3C", colorTo = "#7A1330" }) {
  return (
    <div
      style={{
        "--size": size,
        "--duration": `${duration}s`,
        "--color-from": colorFrom,
        "--color-to": colorTo
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-duration:var(--duration)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
}
