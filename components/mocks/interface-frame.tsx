import { cn } from "@/lib/utils";

export function InterfaceFrame({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-interface-lg)] border border-espresso/10 bg-white shadow-[0_30px_60px_-25px_rgba(48,39,34,0.35)]",
        className
      )}
    >
      {title && (
        <div className="flex items-center gap-2 border-b border-espresso/10 bg-cream/70 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-taupe-light" />
            <span className="size-2 rounded-full bg-taupe-light" />
            <span className="size-2 rounded-full bg-taupe-light" />
          </span>
          <span className="ml-1 text-[11px] font-medium uppercase tracking-wide text-taupe">
            {title}
          </span>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
