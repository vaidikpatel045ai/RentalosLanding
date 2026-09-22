import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ProductTour } from "@/components/sections/product-tour";
import { FeatureDirectory } from "@/components/sections/feature-directory";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "A detailed look at every connected module in Bridal Rental OS — inventory, availability, bookings, tailoring, cleaning, delivery, reporting, payments tracking, and multi-branch management.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="py-20">
        <Container className="max-w-3xl">
          <Eyebrow>The Complete Platform</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl text-espresso sm:text-6xl">
            Every module, built for bridal rental operations.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            Explore how Bridal Rental OS connects inventory, availability,
            bookings, tailoring, cleaning, delivery, reporting, payments
            tracking, staff, and multi-branch management into one platform.
          </p>
          <Button href="/book-demo" size="lg" className="mt-8">
            Book Your Free Demo
          </Button>
        </Container>
      </section>
      <ProductTour />
      <FeatureDirectory />
      <FinalCta />
    </>
  );
}
