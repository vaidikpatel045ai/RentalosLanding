import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DemoForm } from "@/components/demo-form";
import { GownSilhouette } from "@/components/mocks/gown-silhouette";

export function DemoSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-espresso py-24 text-ivory">
      <GownSilhouette className="pointer-events-none absolute -left-16 top-0 h-full w-auto text-ivory/[0.04]" />
      <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Eyebrow tone="light">Your Boutique, Beautifully Organized</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            See Bridal Rental OS in action.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-taupe-light">
            Discover how your team can manage garments, bookings, fittings,
            and daily operations through one connected platform.
          </p>
        </div>

        <DemoForm />
      </Container>
    </section>
  );
}
