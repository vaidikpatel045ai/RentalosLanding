import { FeatureSplit } from "./feature-split";
import { InventoryMock } from "@/components/mocks/inventory-mock";

export function InventorySection() {
  return (
    <FeatureSplit
      id="inventory"
      eyebrow="01 / Inventory"
      headline="Every garment accounted for. Every stage visible."
      copy="Maintain a detailed digital record of every gown and accessory, from its unique SKU to its photos, components, and complete status history."
      mock={<InventoryMock />}
      features={[
        "Individual garment records and SKU tracking",
        "Categories for bridal gowns, reception dresses, bridesmaid dresses, evening gowns, abayas, veils, jewellery, shoes, and accessories",
        "Automatically generated QR codes for garment profiles",
        "Detailed garment lifecycle tracking, from available through fitting, cleaning, and repair",
        "Append-only status history",
        "Archive garments without deleting their historical records",
        "Cloud-based image storage for garment and job photos",
      ]}
    />
  );
}
