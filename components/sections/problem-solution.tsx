import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";
import { Layers, GitBranch, CalendarClock, Gauge } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Inventory uncertainty",
    copy: "Know which garments are available, booked, being tailored, or moving through cleaning.",
  },
  {
    icon: GitBranch,
    title: "Disconnected workflows",
    copy: "Connect your bookings with the tailoring, cleaning, and delivery tasks that follow.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling conflicts",
    copy: "Check garment turnaround and upcoming bookings before confirming a rental.",
  },
  {
    icon: Gauge,
    title: "Limited visibility",
    copy: "See today's priorities, outstanding payments, and operational risks from one dashboard.",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24" id="about">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>The Business Behind the Beauty</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
            Beautiful gowns deserve beautifully organized operations.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            Running a bridal rental boutique means coordinating far more than
            bookings. Every gown moves through a series of appointments,
            alterations, cleaning, inspections, and returns. Bridal Rental OS
            connects those moving parts.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-espresso/10 bg-espresso/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="bg-ivory p-7">
              <Icon className="size-6 text-gold-deep" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-xl text-espresso">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
