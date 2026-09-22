import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";

const revenue = [
  { label: "Mon", value: 38 },
  { label: "Tue", value: 52 },
  { label: "Wed", value: 44 },
  { label: "Thu", value: 68 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 100 },
  { label: "Sun", value: 74 },
];

const topGarments = [
  { sku: "BR-102", roi: "4.1×" },
  { sku: "BR-045", roi: "3.7×" },
  { sku: "BR-088", roi: "3.2×" },
];

export function OwnerDashboardMock() {
  return (
    <InterfaceFrame title="Owner dashboard — illustrative data">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Deposits held" value="AED 62.4K" />
        <Stat label="Garments out" value="37" />
        <Stat label="Pending payments" value="AED 8.9K" tone="tight" />
        <Stat label="At-risk bookings" value="3" tone="unsafe" />
      </div>

      <div className="mt-4 rounded-xl border border-espresso/10 p-4">
        <div className="flex items-center justify-between text-xs text-taupe">
          <span className="font-semibold uppercase tracking-wide">Revenue &middot; this week</span>
        </div>
        <div className="mt-4 flex h-24 items-end gap-2">
          {revenue.map((d) => (
            <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-sm bg-gold/70"
                style={{ height: `${d.value}%` }}
              />
              <span className="text-[10px] text-taupe">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-espresso/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-taupe">
            Top garment ROI
          </p>
          <div className="mt-3 space-y-2">
            {topGarments.map((g) => (
              <div key={g.sku} className="flex items-center justify-between text-sm">
                <span className="text-espresso">{g.sku}</span>
                <span className="font-medium text-gold-deep">{g.roi}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-unsafe/25 bg-unsafe-pale/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-unsafe">
            At risk
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-espresso">BR-071</span>
              <StatusBadge tone="unsafe">Unsafe</StatusBadge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-espresso">BR-019</span>
              <StatusBadge tone="tight">Tight</StatusBadge>
            </div>
          </div>
        </div>
      </div>
    </InterfaceFrame>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "tight" | "unsafe";
}) {
  return (
    <div className="rounded-xl border border-espresso/10 p-3">
      <p
        className="font-serif text-xl"
        style={{
          color:
            tone === "tight"
              ? "var(--color-tight)"
              : tone === "unsafe"
              ? "var(--color-unsafe)"
              : "var(--color-espresso)",
        }}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-taupe">{label}</p>
    </div>
  );
}
