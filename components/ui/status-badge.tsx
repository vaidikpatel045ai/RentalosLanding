import { cn } from "@/lib/utils";

const tones = {
  safe: "bg-sage-pale text-sage border-sage/30",
  tight: "bg-tight-pale text-tight border-tight/30",
  unsafe: "bg-unsafe-pale text-unsafe border-unsafe/30",
  neutral: "bg-cream text-taupe border-taupe/30",
  gold: "bg-gold-pale text-gold-deep border-gold/40",
} as const;

export function StatusBadge({
  tone,
  children,
  className,
}: {
  tone: keyof typeof tones;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
