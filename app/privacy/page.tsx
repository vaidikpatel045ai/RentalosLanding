import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Bridal Rental OS.",
};

const sections = [
  {
    title: "Information we collect",
    body: "[Placeholder — describe what information is collected through this website and the product, e.g. demo request details, account information, and usage data.]",
  },
  {
    title: "How we use information",
    body: "[Placeholder — describe how submitted information is used, such as responding to demo requests and operating the platform for boutique customers.]",
  },
  {
    title: "Data storage and security",
    body: "[Placeholder — describe where data is stored and the security measures in place.]",
  },
  {
    title: "Your rights",
    body: "[Placeholder — describe applicable data rights and how to exercise them.]",
  },
  {
    title: "Contact",
    body: "[Placeholder — add a privacy contact email once available.]",
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 font-serif text-5xl text-espresso">Privacy Policy</h1>
        <p className="mt-6 rounded-2xl border border-gold/30 bg-gold-pale/30 p-5 text-sm leading-relaxed text-espresso/80">
          This page is a placeholder. It has not been reviewed by legal
          counsel and should be replaced with a complete, jurisdiction-
          appropriate privacy policy before this site is used to collect
          real customer or visitor data.
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
