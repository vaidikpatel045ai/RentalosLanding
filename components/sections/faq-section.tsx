import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section className="py-24" id="faq">
      <Container className="max-w-3xl">
        <Eyebrow>Questions, Answered</Eyebrow>
        <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
          Frequently asked questions.
        </h2>
        <div className="mt-12">
          <Accordion items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Container>
    </section>
  );
}
