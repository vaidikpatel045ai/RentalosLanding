import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Bridal Rental OS.",
};

const sections = [
  {
    title: "Acceptance of terms",
    body: "[Placeholder — describe acceptance of these terms by users of the website and platform.]",
  },
  {
    title: "Use of the platform",
    body: "[Placeholder — describe permitted use of Bridal Rental OS by boutique customers and their staff.]",
  },
  {
    title: "Accounts and access",
    body: "[Placeholder — describe account responsibilities and role-based access.]",
  },
  {
    title: "Liability",
    body: "[Placeholder — describe limitation of liability.]",
  },
  {
    title: "Contact",
    body: "[Placeholder — add a legal contact email once available.]",
  },
];

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 font-serif text-5xl text-espresso">Terms of Service</h1>
        <p className="mt-6 rounded-2xl border border-gold/30 bg-gold-pale/30 p-5 text-sm leading-relaxed text-espresso/80">
          This page is a placeholder. It has not been reviewed by legal
          counsel and should be replaced with complete, jurisdiction-
          appropriate terms before this site or product is offered
          commercially.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-2xl text-espresso">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-taupe">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
