import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";
import { CalendarClock, Truck, ShieldAlert, ChevronDown } from "lucide-react";

export function HeroDashboardMock() {
  return (
    <InterfaceFrame title="Owner Dashboard — Illustrative data" className="w-full max-w-md">
      <div className="flex items-center justify-between pb-3">
        <p className="font-serif text-lg text-espresso">Good morning, Layla</p>
        <span className="flex items-center gap-1 rounded-full border border-espresso/15 px-2.5 py-1 text-xs text-taupe">
          Dubai branch
          <ChevronDown className="size-3" />
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <MiniStat label="Appointments" value="6" />
        <MiniStat label="Pickups" value="3" />
        <MiniStat label="Returns" value="4" />
      </div>

      <div className="mt-4 space-y-2 rounded-xl border border-espresso/10 bg-cream/50 p-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-taupe">
          <CalendarClock className="size-3.5" />
          Today
        </div>
        <Row title="Sarah Ahmed — Fitting" time="11:30 AM" tone="gold" />
        <Row title="BR-102 — Pickup" time="2:00 PM" tone="safe" />
        <Row title="Noor Al Fardan — Return" time="5:15 PM" tone="tight" />
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-unsafe/25 bg-unsafe-pale/60 p-3">
        <div className="flex items-center gap-2 text-xs text-unsafe">
          <ShieldAlert className="size-4" />
          <span className="font-medium">1 booking needs attention</span>
        </div>
        <StatusBadge tone="unsafe">Unsafe</StatusBadge>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl border border-espresso/10 p-3">
        <div className="flex items-center gap-2 text-xs text-taupe">
          <Truck className="size-4" />
          <span>Delivery BR-088 out for drop-off</span>
        </div>
        <StatusBadge tone="gold">In Transit</StatusBadge>
      </div>
    </InterfaceFrame>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-espresso/10 bg-ivory p-3 text-center">
      <p className="font-serif text-2xl text-espresso">{value}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-taupe">{label}</p>
    </div>
  );
}

function Row({
  title,
  time,
  tone,
}: {
  title: string;
  time: string;
  tone: "safe" | "tight" | "unsafe" | "gold";
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-espresso/90">{title}</span>
      <span className="flex items-center gap-2 text-xs text-taupe">
        {time}
        <StatusBadge tone={tone}>{tone === "gold" ? "Ready" : tone}</StatusBadge>
      </span>
    </div>
  );
}
