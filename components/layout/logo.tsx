import { cn } from "@/lib/utils";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full border font-serif text-[15px] italic",
          dark
            ? "border-gold-pale/50 text-gold-pale"
            : "border-gold-deep/60 text-gold-deep"
        )}
        aria-hidden="true"
      >
        B
      </span>
      <span
        className={cn(
          "font-serif text-lg leading-none tracking-wide",
          dark ? "text-ivory" : "text-espresso"
        )}
      >
        Bridal Rental <span className="italic text-gold-deep">OS</span>
      </span>
    </span>
  );
}
