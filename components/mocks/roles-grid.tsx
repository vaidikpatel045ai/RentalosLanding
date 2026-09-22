import { InterfaceFrame } from "./interface-frame";
import { roles } from "@/lib/site-data";
import { ShieldCheck } from "lucide-react";

export function RolesGrid() {
  return (
    <InterfaceFrame title="Role permissions — illustrative data">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {roles.map((r) => (
          <div
            key={r.code}
            className="flex flex-col items-center gap-2 rounded-xl border border-espresso/10 py-4 text-center"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-gold-pale text-gold-deep">
              <ShieldCheck className="size-4" />
            </span>
            <span className="text-xs font-medium text-espresso">{r.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-cream/70 p-3 text-xs text-taupe">
        <ShieldCheck className="size-4 shrink-0 text-gold-deep" />
        Every action is checked against the signed-in role on the server,
        not just hidden in the interface.
      </div>
    </InterfaceFrame>
  );
}
