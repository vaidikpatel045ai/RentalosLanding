import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ProductIntro } from "@/components/sections/product-intro";
import { InventorySection } from "@/components/sections/inventory-section";
import { AvailabilitySection } from "@/components/sections/availability-section";
import { BookingsSection } from "@/components/sections/bookings-section";
import { OperationsSection } from "@/components/sections/operations-section";
import { MultiBranchSection } from "@/components/sections/multi-branch-section";
import { OwnerDashboardSection } from "@/components/sections/owner-dashboard-section";
import { PaymentsSection } from "@/components/sections/payments-section";
import { SecuritySection } from "@/components/sections/security-section";
import { ProductTour } from "@/components/sections/product-tour";
import { FeatureDirectory } from "@/components/sections/feature-directory";
import { JourneySection } from "@/components/sections/journey-section";
import { DemoSection } from "@/components/sections/demo-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ProductIntro />
      <InventorySection />
      <AvailabilitySection />
      <BookingsSection />
      <OperationsSection />
      <MultiBranchSection />
      <OwnerDashboardSection />
      <PaymentsSection />
      <SecuritySection />
      <ProductTour />
      <FeatureDirectory />
      <JourneySection />
      <DemoSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
