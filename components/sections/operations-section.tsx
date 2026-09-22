import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorkflowChain } from "@/components/mocks/workflow-chain";
import {
  tailoringStages,
  cleaningStages,
  cleaningAltOutcomes,
  deliveryStages,
  deliveryAltOutcomes,
} from "@/lib/site-data";
import { Scissors, Sparkles, Truck } from "lucide-react";

const cards = [
  {
    icon: Scissors,
    title: "Tailoring",
    copy: "From assignment to final fitting, keep alterations organized and measurements connected to the job.",
    stages: tailoringStages,
  },
  {
    icon: Sparkles,
    title: "Cleaning",
    copy: "Track garment cleaning, drying, finishing, and quality checks with a clear operational workflow.",
    stages: cleaningStages,
    alt: cleaningAltOutcomes,
  },
  {
    icon: Truck,
    title: "Delivery",
    copy: "Coordinate garment handovers with clear delivery assignments and status tracking.",
    stages: deliveryStages,
    alt: deliveryAltOutcomes,
  },
];

export function OperationsSection() {
  return (
    <section id="operations" className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>04 / Behind Every Perfect Fit</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
            Keep every team member moving in sync.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, copy, stages, alt }) => (
            <div
              key={title}
              className="rounded-2xl border border-espresso/10 bg-ivory p-7"
            >
              <Icon className="size-6 text-gold-deep" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl text-espresso">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{copy}</p>
              <div className="mt-6 rounded-xl bg-cream/60 p-4">
                <WorkflowChain stages={stages} altOutcomes={alt} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-taupe">
          Tailor, Cleaner, and Delivery staff each get a focused, mobile-first
          task portal with one-tap status advances — scoped to the jobs
          assigned to them.
        </p>
      </Container>
    </section>
  );
}
