import { cn } from "@/lib/utils";

export function AnimatedGradientText({ children, className }) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full border border-accent/30 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm",
        className
      )}
    >
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-accent via-goldLight to-accent bg-[length:200%_auto] bg-clip-text text-transparent`
        )}
        style={{ backgroundSize: "200% auto" }}
      >
        {children}
      </span>
    </div>
  );
}
