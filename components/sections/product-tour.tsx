"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { tourTabs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { OwnerDashboardMock } from "@/components/mocks/owner-dashboard-mock";
import { InventoryMock } from "@/components/mocks/inventory-mock";
import { AvailabilityTimeline } from "@/components/mocks/availability-timeline";
import { BookingWizardMock } from "@/components/mocks/booking-wizard-mock";
import { CalendarMock } from "@/components/mocks/calendar-mock";
import { WorkflowMock } from "@/components/mocks/workflow-mock";
import { ReportsMock } from "@/components/mocks/reports-mock";
import { PaymentsMock } from "@/components/mocks/payments-mock";
import { BranchGrid } from "@/components/mocks/branch-grid";
import { RolesGrid } from "@/components/mocks/roles-grid";
import {
  tailoringStages,
  cleaningStages,
  cleaningAltOutcomes,
  deliveryStages,
  deliveryAltOutcomes,
} from "@/lib/site-data";

const mocks: Record<string, React.ReactNode> = {
  dashboard: <OwnerDashboardMock />,
  inventory: <InventoryMock />,
  availability: <AvailabilityTimeline />,
  bookings: <BookingWizardMock />,
  appointments: <CalendarMock />,
  tailoring: (
    <WorkflowMock title="Tailoring — illustrative data" stages={tailoringStages} />
  ),
  cleaning: (
    <WorkflowMock
      title="Cleaning — illustrative data"
      stages={cleaningStages}
      altOutcomes={cleaningAltOutcomes}
    />
  ),
  delivery: (
    <WorkflowMock
      title="Delivery — illustrative data"
      stages={deliveryStages}
      altOutcomes={deliveryAltOutcomes}
    />
  ),
  reports: <ReportsMock />,
  payments: <PaymentsMock />,
  staff: <BranchGrid />,
  security: <RolesGrid />,
};

export function ProductTour() {
  const [active, setActive] = useState(tourTabs[0].id);
  const current = tourTabs.find((t) => t.id === active)!;

  return (
    <section className="py-24" id="product-tour">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>The Full Platform</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
            Explore the details that keep your boutique running.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            A closer look at each connected module, built directly from the
            working product.
          </p>
        </div>

        <div className="mt-10 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex w-max gap-2 lg:w-full lg:flex-wrap">
            {tourTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                aria-pressed={active === tab.id}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === tab.id
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-espresso/15 text-espresso/70 hover:border-espresso/40"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>{current.eyebrow}</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl text-espresso">
              {current.headline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-taupe">
              {current.copy}
            </p>
            <ul className="mt-6 space-y-2.5">
              {current.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-espresso/85">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-gold-deep" />
                  {c}
                </li>
              ))}
            </ul>
            <Button href="/book-demo" variant="secondary" className="mt-7">
              Book a Free Demo
            </Button>
          </div>
          <div>{mocks[current.id]}</div>
        </div>
      </Container>
    </section>
  );
}
