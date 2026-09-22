import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-gold-deep" : "text-gold-pale",
        className
      )}
    >
      {children}
    </p>
  );
}
