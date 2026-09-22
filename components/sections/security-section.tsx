import { FeatureSplit } from "./feature-split";
import { RolesGrid } from "@/components/mocks/roles-grid";

export function SecuritySection() {
  return (
    <FeatureSplit
      id="security"
      eyebrow="08 / The Right Access for Every Role"
      headline="Give every team member the tools they need."
      copy="Bridal Rental OS includes eight defined roles — Owner, Manager, Sales, Stylist, Tailor, Cleaner, Delivery, and Customer — with permissions enforced server-side across protected actions."
      reverse
      mock={<RolesGrid />}
      features={[
        "Hashed-password authentication",
        "JWT sessions",
        "Role-based route protection",
        "Server-side permission enforcement on every protected action",
        "Append-only audit history",
      ]}
    />
  );
}
