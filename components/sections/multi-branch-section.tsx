import { FeatureSplit } from "./feature-split";
import { BranchGrid } from "@/components/mocks/branch-grid";

export function MultiBranchSection() {
  return (
    <FeatureSplit
      id="multi-branch"
      eyebrow="05 / Built for Growing Boutiques"
      headline="One business. Multiple branches. A connected operation."
      copy="Manage your boutique locations through one platform while keeping staff, inventory, bookings, and reporting scoped to the appropriate branch."
      tint
      mock={<BranchGrid />}
      note="Currency, tax rate, timezone, and locale are configured per branch — including a US branch — as a setup step rather than custom development. Country-specific legal, tax, or payment integrations are not implemented."
      features={[
        "Multiple branch management",
        "Branch-specific staff and inventory",
        "Branch-specific bookings and reporting",
        "Configurable currency and tax settings",
        "Configurable address and phone formats",
        "Branch-level buffer-hour settings that drive the availability engine",
        "Inter-branch garment transfer requests with an approval workflow",
        "Eight-role permission system",
      ]}
    />
  );
}
