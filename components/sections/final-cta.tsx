import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GownSilhouette } from "@/components/mocks/gown-silhouette";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-espresso/10 bg-gradient-to-br from-cream via-ivory to-gold-pale/40 py-24">
      <GownSilhouette className="pointer-events-none absolute -right-10 top-1/2 h-[420px] w-auto -translate-y-1/2 text-gold/20" />
      <Container className="relative max-w-2xl text-center">
        <h2 className="font-serif text-4xl text-espresso sm:text-5xl">
          Your gowns are exceptional. Your operations should be, too.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
          Bring your inventory, bookings, and boutique workflows together
          with Bridal Rental OS.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/book-demo" size="lg">
            Book a Free Demo
          </Button>
          <Button href="/features" size="lg" variant="secondary">
            Explore Features
          </Button>
        </div>
      </Container>
    </section>
  );
}
