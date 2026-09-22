import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { AvailabilityTimeline } from "@/components/mocks/availability-timeline";

export function AvailabilitySection() {
  return (
    <section id="availability" className="bg-cream/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>02 / Intelligent Availability</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
            Know whether a gown is ready for its next booking.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            Before a booking is confirmed, Bridal Rental OS checks cleaning
            and repair turnaround against the next scheduled rental, helping
            your team understand whether the timeline is safe.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  tone: "safe" as const,
                  label: "Safe",
                  copy: "The garment's turnaround timeline meets the required schedule.",
                },
                {
                  tone: "tight" as const,
                  label: "Tight",
                  copy: "The timeline has limited remaining buffer and deserves attention.",
                },
                {
                  tone: "unsafe" as const,
                  label: "Unsafe",
                  copy: "The timeline conflicts with the required turnaround.",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-xl border border-espresso/10 bg-ivory p-5"
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{
                      color:
                        c.tone === "safe"
                          ? "var(--color-sage)"
                          : c.tone === "tight"
                          ? "var(--color-tight)"
                          : "var(--color-unsafe)",
                    }}
                  >
                    {c.label}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-taupe">
                    {c.copy}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-taupe">
              Database-level transaction checks help prevent conflicting
              bookings, even when requests occur concurrently.
            </p>

            <Button href="#demo" size="lg" className="mt-8">
              See Availability Checking in Action
            </Button>
          </div>

          <AvailabilityTimeline />
        </div>
      </Container>
    </section>
  );
}
