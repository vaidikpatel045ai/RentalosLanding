import { InterfaceFrame } from "./interface-frame";
import { StatusBadge } from "@/components/ui/status-badge";
import { QrCode } from "lucide-react";

const garments = [
  { sku: "BR-102", name: "Camille A-line", status: "With Tailor", tone: "gold" as const },
  { sku: "BR-088", name: "Aurelie Ballgown", status: "Ready to Rent", tone: "safe" as const },
  { sku: "BR-054", name: "Noor Veil Set", status: "Cleaning", tone: "tight" as const },
  { sku: "BR-071", name: "Isabella Sheath", status: "Booked", tone: "neutral" as const },
];

export function InventoryMock() {
  return (
    <InterfaceFrame title="Inventory — Illustrative data">
      <div className="grid gap-3 sm:grid-cols-2">
        {garments.map((g) => (
          <div
            key={g.sku}
            className="flex gap-3 rounded-xl border border-espresso/10 p-3"
          >
            <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cream to-gold-pale/60 text-gold-deep">
              <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M12 2c-2 0-3.5 1.5-3.5 3.5 0 1.3.7 2.4 1.7 3-2.3 1-3.7 3-4 5.7L5 21c4.7 2 9.3 2 14 0l-1.2-6.8c-.3-2.7-1.7-4.7-4-5.7 1-.6 1.7-1.7 1.7-3C15.5 3.5 14 2 12 2Z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-medium text-espresso">{g.name}</p>
                <QrCode className="size-3.5 shrink-0 text-taupe" />
              </div>
              <p className="text-xs text-taupe">SKU {g.sku}</p>
              <StatusBadge tone={g.tone} className="mt-2">
                {g.status}
              </StatusBadge>
            </div>
          </div>
        ))}
      </div>
    </InterfaceFrame>
  );
}
