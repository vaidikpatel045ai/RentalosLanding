import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ModulePreview({
  headline,
  capabilities,
  dark = false,
  className,
}: {
  headline: string;
  capabilities: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-interface-lg)] border p-6",
        dark
          ? "border-ivory/15 bg-ivory/[0.04]"
          : "border-espresso/10 bg-white shadow-[0_30px_60px_-25px_rgba(48,39,34,0.25)]",
        className
      )}
    >
      <p
        className={cn(
          "font-serif text-xl",
          dark ? "text-ivory" : "text-espresso"
        )}
      >
        {headline}
      </p>
      <ul className="mt-5 space-y-3">
        {capabilities.map((c) => (
          <li key={c} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                dark ? "bg-gold/25 text-gold-pale" : "bg-gold-pale text-gold-deep"
              )}
            >
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            <span className={dark ? "text-taupe-light" : "text-taupe"}>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
