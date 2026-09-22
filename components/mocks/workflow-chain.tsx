import { ChevronRight } from "lucide-react";

export function WorkflowChain({
  stages,
  altOutcomes,
}: {
  stages: string[];
  altOutcomes?: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-y-2">
        {stages.map((stage, i) => (
          <span key={stage} className="flex items-center">
            <span
              className={
                i === 0
                  ? "rounded-full bg-gold px-2.5 py-1 text-[11px] font-medium text-espresso"
                  : "rounded-full border border-espresso/15 px-2.5 py-1 text-[11px] font-medium text-espresso/80"
              }
            >
              {stage}
            </span>
            {i < stages.length - 1 && (
              <ChevronRight className="mx-0.5 size-3 text-taupe" aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
      {altOutcomes && altOutcomes.length > 0 && (
        <p className="mt-3 text-xs text-taupe">
          Also supported: {altOutcomes.join(" · ")}
        </p>
      )}
    </div>
  );
}
