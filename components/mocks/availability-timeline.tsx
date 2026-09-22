import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";
import { Sparkles, PackageCheck, CalendarCheck } from "lucide-react";

export function AvailabilityTimeline() {
  return (
    <InterfaceFrame title="Availability check — illustrative example">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-taupe">
            BR-102 &middot; Camille A-line
          </p>
          <p className="font-serif text-lg text-espresso">Booking request, Fri 2:00 PM</p>
        </div>
        <StatusBadge tone="tight">Tight</StatusBadge>
      </div>

      <div className="relative mt-6 pl-6">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-espresso/15" aria-hidden="true" />

        <TimelineRow
          icon={Sparkles}
          title="Cleaning in progress"
          detail="Started Thu 8:00 AM"
        />
        <TimelineRow
          icon={PackageCheck}
          title="Inspection + cleaning + QC complete by"
          detail="Thu 6:00 PM — required turnaround: 11 hrs"
        />
        <TimelineRow
          icon={CalendarCheck}
          title="Next booking begins"
          detail="Fri 2:00 PM — 20 hrs of buffer remaining"
          last
        />
      </div>

      <div className="mt-2 rounded-xl border border-tight/25 bg-tight-pale/60 p-3 text-xs leading-relaxed text-tight">
        20 hours of buffer is above the 11-hour required turnaround, but under
        the 24-hour comfort threshold — classified <strong>TIGHT</strong> so
        the team can confirm with awareness, not surprise.
      </div>
    </InterfaceFrame>
  );
}

function TimelineRow({
  icon: Icon,
  title,
  detail,
  last = false,
}: {
  icon: typeof Sparkles;
  title: string;
  detail: string;
  last?: boolean;
}) {
  return (
    <div className={last ? "relative pb-0" : "relative pb-6"}>
      <span className="absolute -left-6 top-0.5 flex size-3.5 items-center justify-center rounded-full bg-gold text-white">
        <Icon className="size-2" strokeWidth={3} />
      </span>
      <p className="text-sm font-medium text-espresso">{title}</p>
      <p className="text-xs text-taupe">{detail}</p>
    </div>
  );
}
