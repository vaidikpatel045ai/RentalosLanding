import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = {
  title: "Book a Free Demo",
  description:
    "Tell us about your bridal boutique and we'll schedule a walkthrough of Bridal Rental OS.",
};

export default function BookDemoPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Eyebrow>Your Boutique, Beautifully Organized</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl text-espresso sm:text-6xl">
            See Bridal Rental OS in action.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
            Tell us a little about your boutique and preferred time, and
            our team will follow up to schedule your walkthrough.
          </p>
        </div>
        <div className="mt-12">
          <DemoForm />
        </div>
      </Container>
    </section>
  );
}
