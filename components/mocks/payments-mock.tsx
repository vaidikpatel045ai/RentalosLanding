import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";

const rows = [
  { booking: "BK-1042", customer: "Sarah Ahmed", amount: "AED 3,200", status: "Paid", tone: "safe" as const },
  { booking: "BK-1039", customer: "Noor Al Fardan", amount: "AED 1,500", status: "Partially Paid", tone: "tight" as const },
  { booking: "BK-1035", customer: "Huda Khalid", amount: "AED 2,800", status: "Overdue", tone: "unsafe" as const },
  { booking: "BK-1030", customer: "Mona Saeed", amount: "AED 900", status: "Refunded", tone: "neutral" as const },
];

export function PaymentsMock() {
  return (
    <InterfaceFrame title="Payments — illustrative data">
      <div className="grid grid-cols-2 gap-3 pb-4">
        <div className="rounded-xl border border-espresso/10 p-3">
          <p className="font-serif text-xl text-espresso">AED 184K</p>
          <p className="text-[10px] uppercase tracking-wide text-taupe">Total collected</p>
        </div>
        <div className="rounded-xl border border-espresso/10 p-3">
          <p className="font-serif text-xl text-espresso">AED 41K</p>
          <p className="text-[10px] uppercase tracking-wide text-taupe">Deposits held</p>
        </div>
      </div>
      <div className="divide-y divide-espresso/10 border-t border-espresso/10">
        {rows.map((r) => (
          <div key={r.booking} className="flex items-center justify-between gap-3 py-3 text-sm">
            <div className="min-w-0">
              <p className="truncate font-medium text-espresso">{r.customer}</p>
              <p className="text-xs text-taupe">{r.booking}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-espresso">{r.amount}</span>
              <StatusBadge tone={r.tone}>{r.status}</StatusBadge>
            </div>
          </div>
        ))}
      </div>
    </InterfaceFrame>
  );
}
