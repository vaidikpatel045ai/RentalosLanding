import { FeatureSplit } from "./feature-split";
import { OwnerDashboardMock } from "@/components/mocks/owner-dashboard-mock";

export function OwnerDashboardSection() {
  return (
    <FeatureSplit
      id="reports"
      eyebrow="06 / Business Intelligence"
      headline="See what needs attention. Understand how your business performs."
      copy="Give owners and managers a connected view of daily operations, payments, garment performance, and branch activity."
      reverse
      mock={<OwnerDashboardMock />}
      features={[
        "Today's appointments and fittings",
        "Pickups and returns",
        "Alterations and cleaning due",
        "Pending payments and deposits held",
        "At-risk bookings flagged by the availability engine",
        "Garment-level performance and ROI reports",
        "Revenue by category and top customers",
        "Staff and branch management",
        "Audit log showing who did what and when",
      ]}
    />
  );
}
