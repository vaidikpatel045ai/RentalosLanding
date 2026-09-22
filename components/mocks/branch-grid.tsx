import { InterfaceFrame } from "./interface-frame";
import { Building2 } from "lucide-react";

const branches = [
  { name: "Dubai", currency: "AED", staff: 12, garments: 148 },
  { name: "Abu Dhabi", currency: "AED", staff: 8, garments: 96 },
  { name: "Sharjah", currency: "AED", staff: 6, garments: 74 },
];

export function BranchGrid() {
  return (
    <InterfaceFrame title="Branches — seeded demonstration data">
      <div className="space-y-3">
        {branches.map((b) => (
          <div
            key={b.name}
            className="flex items-center justify-between rounded-xl border border-espresso/10 p-3.5"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-cream text-gold-deep">
                <Building2 className="size-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-espresso">{b.name}</p>
                <p className="text-xs text-taupe">
                  {b.staff} staff &middot; {b.garments} garments &middot; {b.currency}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl border border-dashed border-gold/50 bg-gold-pale/30 p-3.5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-gold-pale text-gold-deep">
              <Building2 className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-espresso">New branch</p>
              <p className="text-xs text-taupe">Configurable currency, tax, and locale</p>
            </div>
          </div>
        </div>
      </div>
    </InterfaceFrame>
  );
}
