import { InterfaceFrame } from "./interface-frame";

const categories = [
  { label: "Bridal Gowns", value: 100 },
  { label: "Evening Gowns", value: 68 },
  { label: "Bridesmaid", value: 52 },
  { label: "Accessories", value: 30 },
];

const customers = [
  { name: "Sarah Ahmed", spend: "AED 12,400" },
  { name: "Noor Al Fardan", spend: "AED 9,850" },
  { name: "Huda Khalid", spend: "AED 8,100" },
];

export function ReportsMock() {
  return (
    <InterfaceFrame title="Reports — illustrative data">
      <p className="text-xs font-semibold uppercase tracking-wide text-taupe">
        Revenue by category
      </p>
      <div className="mt-3 space-y-2.5">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-xs text-taupe">{c.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${c.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-taupe">
        Top customers
      </p>
      <div className="mt-3 space-y-2">
        {customers.map((c) => (
          <div key={c.name} className="flex items-center justify-between text-sm">
            <span className="text-espresso">{c.name}</span>
            <span className="text-taupe">{c.spend}</span>
          </div>
        ))}
      </div>
    </InterfaceFrame>
  );
}
