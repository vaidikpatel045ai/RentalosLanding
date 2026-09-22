import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";
import { User, CalendarRange } from "lucide-react";

export function BookingWizardMock() {
  return (
    <InterfaceFrame title="New booking — illustrative data">
      <div className="flex items-center gap-3 rounded-xl border border-espresso/10 p-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-cream text-gold-deep">
          <User className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-espresso">Sarah Ahmed</p>
          <p className="text-xs text-taupe">Wedding date: 14 Feb &middot; The Palm, Dubai</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl border border-espresso/10 p-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-cream text-gold-deep">
          <CalendarRange className="size-4" />
        </span>
        <div className="text-sm text-espresso">
          <span className="font-medium">10 Feb</span>
          <span className="px-1.5 text-taupe">&rarr;</span>
          <span className="font-medium">16 Feb</span>
          <span className="ml-2 text-xs text-taupe">6-day rental</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-taupe">
          Garments
        </p>
        <div className="flex items-center justify-between rounded-xl border border-espresso/10 p-3 text-sm">
          <span className="text-espresso">BR-102 &middot; Camille A-line</span>
          <StatusBadge tone="tight">Tight</StatusBadge>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-espresso/10 p-3 text-sm">
          <span className="text-espresso">VL-014 &middot; Cathedral Veil</span>
          <StatusBadge tone="safe">Safe</StatusBadge>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-cream/70 p-3 text-sm">
        <span className="text-taupe">Rental total &middot; incl. deposit</span>
        <span className="font-serif text-base text-espresso">AED 4,850</span>
      </div>
    </InterfaceFrame>
  );
}
