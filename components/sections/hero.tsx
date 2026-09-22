import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroDashboardMock } from "@/components/mocks/hero-dashboard-mock";
import { GownSilhouette } from "@/components/mocks/gown-silhouette";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl animate-fade-up">
          <Eyebrow>Bridal Rental Management, Reimagined</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] text-espresso sm:text-6xl">
            Every gown has a journey. Manage every moment beautifully.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            From the first booking to the final quality check, Bridal Rental
            OS brings your inventory, appointments, tailoring, cleaning, and
            deliveries together in one intelligent platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/book-demo" size="lg">
              Book Your Free Demo
            </Button>
            <Button href="/features" size="lg" variant="secondary">
              Explore the Platform
            </Button>
          </div>
          <p className="mt-8 border-t border-espresso/10 pt-6 text-sm text-taupe">
            Built for bridal rental businesses. Designed for every branch,
            every garment, every day.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-[3rem] bg-gradient-to-br from-cream via-ivory to-gold-pale/40" />
          <GownSilhouette className="pointer-events-none absolute -right-4 top-1/2 h-[420px] w-auto -translate-y-1/2 text-gold/25 sm:h-[480px]" />
          <div className="flex justify-center py-10 lg:justify-end lg:pr-4">
            <HeroDashboardMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
